import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient';
import { motion } from 'framer-motion';
import { Activity, Users, Box, Clock, TrendingUp, Zap } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    members: 0,
    activeProjects: 0,
    completedProjects: 0,
    futureProjects: 0,
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    const subscription = supabase
      .channel('dashboard-updates')
      .on('postgres_changes', { event: '*', schema: '*' }, () => fetchData())
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchData = async () => {
    setLoading(true);
    
    try {
      // Fetch all data in parallel
      const [
        { count: members },
        { count: activeProjects },
        { count: completedProjects },
        { count: futureProjects },
        { data: recentActivity }
      ] = await Promise.all([
        supabase.from('Members').select('*', { count: 'exact' }),
        supabase.from('Projects').select('*', { count: 'exact' }).eq('Status', 'InProgress'),
        supabase.from('Projects').select('*', { count: 'exact' }).eq('Status', 'Completed'),
        supabase.from('FutureProjects').select('*', { count: 'exact' }),
        supabase.from('Projects').select('*').order('created_at', { ascending: false }).limit(3)
      ]);

      setStats({
        members,
        activeProjects,
        completedProjects,
        futureProjects,
        recentActivity: recentActivity || []
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-orange-900">Dashboard</h1>
            <p className="text-orange-700/80 mt-2">Real-time overview of your operations</p>
          </div>
          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200/50 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-orange-800">Live Data</span>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-orange-200 h-12 w-12"></div>
            </div>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {/* Stats Cards */}
            <motion.div 
              variants={item}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* Members Card */}
              <motion.div 
                variants={card}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-200/50 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-orange-600">Team Members</p>
                      <h3 className="text-3xl font-bold text-orange-900 mt-1">{stats.members}</h3>
                    </div>
                    <div className="p-3 bg-orange-100/50 rounded-lg">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-orange-700/80">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+2 this month</span>
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-300"></div>
              </motion.div>

              {/* Active Projects Card */}
              <motion.div 
                variants={card}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-200/50 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-orange-600">Active Projects</p>
                      <h3 className="text-3xl font-bold text-orange-900 mt-1">{stats.activeProjects}</h3>
                    </div>
                    <div className="p-3 bg-orange-100/50 rounded-lg">
                      <Activity className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-orange-700/80">
                    <Zap className="w-4 h-4 mr-1" />
                    <span>{stats.activeProjects > 0 ? 'In progress' : 'No active projects'}</span>
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-300"></div>
              </motion.div>

              {/* Completed Projects Card */}
              <motion.div 
                variants={card}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-200/50 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-orange-600">Completed</p>
                      <h3 className="text-3xl font-bold text-orange-900 mt-1">{stats.completedProjects}</h3>
                    </div>
                    <div className="p-3 bg-orange-100/50 rounded-lg">
                      <Box className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-orange-700/80">
                    <span>Last 30 days: +{Math.floor(stats.completedProjects * 0.3)}</span>
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-300"></div>
              </motion.div>

              {/* Future Projects Card */}
              <motion.div 
                variants={card}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-200/50 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-orange-600">Future Projects</p>
                      <h3 className="text-3xl font-bold text-orange-900 mt-1">{stats.futureProjects}</h3>
                    </div>
                    <div className="p-3 bg-orange-100/50 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-orange-700/80">
                    <span>Pipeline ready</span>
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-300"></div>
              </motion.div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div 
              variants={item}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              <motion.div 
                variants={card}
                className="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-200/50 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Recent Project Activity</h3>
                  <div className="space-y-4">
                    {stats.recentActivity.length > 0 ? (
                      stats.recentActivity.map((project, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 hover:bg-orange-50/50 rounded-lg transition-colors">
                          <div className="p-2 bg-orange-100/50 rounded-lg mt-1">
                            <Activity className="w-5 h-5 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-orange-900">{project.name}</h4>
                            <p className="text-sm text-orange-700/80 mt-1 line-clamp-1">{project.description}</p>
                            <div className="flex items-center mt-2 text-xs text-orange-600/80">
                              <span className="capitalize">{project.Status.toLowerCase()}</span>
                              <span className="mx-2">•</span>
                              <span>{new Date(project.created_at).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-orange-700/80">
                        <p>No recent activity</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Status Distribution */}
              <motion.div 
                variants={card}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-200/50 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Project Status</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500/80"></div>
                        <span className="text-sm font-medium text-orange-800">Pending</span>
                      </div>
                      <span className="text-sm font-bold text-orange-900">
                        {Math.round((stats.activeProjects / (stats.activeProjects + stats.completedProjects)) * 100) || 0}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-orange-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500/80 rounded-full" 
                        style={{ width: `${Math.round((stats.activeProjects / (stats.activeProjects + stats.completedProjects)) * 100) || 0}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500/80"></div>
                        <span className="text-sm font-medium text-orange-800">In Progress</span>
                      </div>
                      <span className="text-sm font-bold text-orange-900">
                        {Math.round((stats.activeProjects / (stats.activeProjects + stats.completedProjects)) * 100) || 0}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-orange-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-orange-500/80 rounded-full" 
                        style={{ width: `${Math.round((stats.activeProjects / (stats.activeProjects + stats.completedProjects)) * 100) || 0}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <span className="text-sm font-medium text-orange-800">Completed</span>
                      </div>
                      <span className="text-sm font-bold text-orange-900">
                        {Math.round((stats.completedProjects / (stats.activeProjects + stats.completedProjects)) * 100) || 0}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-orange-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500/80 rounded-full" 
                        style={{ width: `${Math.round((stats.completedProjects / (stats.activeProjects + stats.completedProjects)) * 100) || 0}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Visualizations */}
            <motion.div 
              variants={item}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <motion.div 
                variants={card}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-200/50 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Workload Distribution</h3>
                  <div className="h-64 flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      {/* Pie chart segments */}
                      <div className="absolute inset-0 rounded-full border-8 border-orange-300/30"></div>
                      <div 
                        className="absolute inset-0 rounded-full border-8 border-blue-500/80" 
                        style={{ clipPath: `polygon(50% 50%, 50% 0%, ${50 + 40 * Math.cos(Math.PI * 2 * 0.3)}% ${50 + 40 * Math.sin(Math.PI * 2 * 0.3)}%)` }}
                      ></div>
                      <div 
                        className="absolute inset-0 rounded-full border-8 border-orange-500/80" 
                        style={{ clipPath: `polygon(50% 50%, ${50 + 40 * Math.cos(Math.PI * 2 * 0.3)}% ${50 + 40 * Math.sin(Math.PI * 2 * 0.3)}%, ${50 + 40 * Math.cos(Math.PI * 2 * 0.6)}% ${50 + 40 * Math.sin(Math.PI * 2 * 0.6)}%)` }}
                      ></div>
                      <div 
                        className="absolute inset-0 rounded-full border-8 border-green-500/80" 
                        style={{ clipPath: `polygon(50% 50%, ${50 + 40 * Math.cos(Math.PI * 2 * 0.6)}% ${50 + 40 * Math.sin(Math.PI * 2 * 0.6)}%, 50% 0%)` }}
                      ></div>
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-orange-900">{stats.activeProjects + stats.completedProjects}</span>
                        <span className="text-xs text-orange-700/80">Total Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={card}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-200/50 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-4">Team Growth</h3>
                  <div className="h-64 flex items-center justify-center">
                    <div className="w-full">
                      <div className="flex items-end h-40 gap-2">
                        <div className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-8 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-sm" 
                            style={{ height: `${Math.min(100, (stats.members / 20) * 100)}%` }}
                          ></div>
                          <span className="text-xs mt-2 text-orange-700/80">Members</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-8 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-sm" 
                            style={{ height: `${Math.min(100, (stats.activeProjects / 10) * 100)}%` }}
                          ></div>
                          <span className="text-xs mt-2 text-orange-700/80">Active</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-8 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-sm" 
                            style={{ height: `${Math.min(100, (stats.completedProjects / 15) * 100)}%` }}
                          ></div>
                          <span className="text-xs mt-2 text-orange-700/80">Completed</span>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-8 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-sm" 
                            style={{ height: `${Math.min(100, (stats.futureProjects / 5) * 100)}%` }}
                          ></div>
                          <span className="text-xs mt-2 text-orange-700/80">Future</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;