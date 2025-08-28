import React from "react";
import { Eye, TrendingUp, Plus } from "lucide-react";

const AdvertisementCampaigns = () => {
  const campaigns = [
    {
      title: "Summer Product Launch",
      platform: "Google Ads",
      budget: "$5,000",
      impressions: "125,430",
      clicks: "3,240",
      clickRate: "2.58%",
      status: "Active",
      color: "bg-green-500",
    },
    {
      title: "Brand Awareness Campaign",
      platform: "Facebook Ads",
      budget: "$3,500",
      impressions: "89,670",
      clicks: "2,180",
      clickRate: "2.43%",
      status: "Paused",
      color: "bg-yellow-500 text-white",
    },
    {
      title: "Lead Generation Q1",
      platform: "LinkedIn Ads",
      budget: "$7,200",
      impressions: "203,540",
      clicks: "5,670",
      clickRate: "2.79%",
      status: "Completed",
      color: "bg-blue-200 text-blue-800",
    },
  ];

  const getStatusLabel = (status, color) => (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${
        status === "Completed" ? color : `${color} text-white`
      }`}
    >
      {status}
    </span>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advertisement Campaigns</h1>
          <p className="text-gray-500">Monitor and manage your advertising efforts</p>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-orange-400">
          <Plus size={16} />
          Create Campaign
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.75 9V5.25m0 0L18 7.5m-2.25-2.25L13.5 7.5M6 9v10.5A1.5 1.5 0 007.5 21h9a1.5 1.5 0 001.5-1.5V9m-12 0L12 3l6 6"
                  />
                </svg>
                {campaign.title}
              </h2>
              {getStatusLabel(campaign.status, campaign.color)}
            </div>
            <p className="text-sm text-gray-500 mb-4">
              {campaign.platform} • Budget: {campaign.budget}
            </p>
            <div className="flex justify-between mb-2 text-sm text-gray-600">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-gray-500" />
                  <span>Impressions</span>
                </div>
                <span className="font-semibold text-gray-800">{campaign.impressions}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-gray-500" />
                  <span>Clicks</span>
                </div>
                <span className="font-semibold text-gray-800">{campaign.clicks}</span>
              </div>
            </div>
            <hr className="my-2" />
            <div className="text-right text-sm font-semibold text-gray-700">
              Click Rate: <span className="text-black">{campaign.clickRate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisementCampaigns;
