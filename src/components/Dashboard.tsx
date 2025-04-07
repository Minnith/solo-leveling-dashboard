import React from 'react';
import { Trophy, Book, Users, Zap, Target, Gift } from 'lucide-react';
import { initialCategories, dailyQuests, weeklyQuests, rewards } from '../data';

export default function Dashboard() {
  const [categories, setCategories] = React.useState(initialCategories);
  const [quests, setQuests] = React.useState([...dailyQuests, ...weeklyQuests]);
  const [availableRewards, setAvailableRewards] = React.useState(rewards);

  const completeQuest = (questId: string) => {
    setQuests(quests.map(quest => {
      if (quest.id === questId && !quest.completed) {
        const category = categories.find(c => c.id === quest.category.id);
        if (category) {
          const newXP = category.currentXP + quest.xp;
          const levelUps = Math.floor(newXP / category.requiredXP);
          const remainingXP = newXP % category.requiredXP;
          
          setCategories(categories.map(c => 
            c.id === category.id ? {
              ...c,
              level: c.level + levelUps,
              currentXP: remainingXP,
              requiredXP: c.requiredXP * (levelUps + 1)
            } : c
          ));
        }
        return { ...quest, completed: true };
      }
      return quest;
    }));
  };

  const claimReward = (rewardId: string) => {
    setAvailableRewards(rewards.map(reward => 
      reward.id === rewardId ? { ...reward, claimed: true } : reward
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Solo Leveling System</h1>
          <p className="text-gray-400">Level up your life, one quest at a time</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map(category => (
            <div key={category.id} className={`${category.color} bg-opacity-20 rounded-lg p-6`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <span className="text-2xl font-bold">Lvl {category.level}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`${category.color} h-2 rounded-full transition-all`}
                  style={{ width: `${(category.currentXP / category.requiredXP) * 100}%` }}
                />
              </div>
              <p className="mt-2 text-sm text-gray-300">
                {category.currentXP}/{category.requiredXP} XP
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Target className="mr-2" /> Daily Quests
            </h2>
            <div className="space-y-4">
              {dailyQuests.map(quest => (
                <div key={quest.id} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                  <div>
                    <h4 className="font-semibold">{quest.title}</h4>
                    <p className="text-sm text-gray-400">{quest.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-yellow-400">+{quest.xp} XP</span>
                    <button
                      onClick={() => completeQuest(quest.id)}
                      disabled={quest.completed}
                      className={`px-4 py-2 rounded ${
                        quest.completed
                          ? 'bg-green-500 cursor-not-allowed'
                          : 'bg-blue-500 hover:bg-blue-600'
                      }`}
                    >
                      {quest.completed ? 'Completed' : 'Complete'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Trophy className="mr-2" /> Weekly Challenges
            </h2>
            <div className="space-y-4">
              {weeklyQuests.map(quest => (
                <div key={quest.id} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                  <div>
                    <h4 className="font-semibold">{quest.title}</h4>
                    <p className="text-sm text-gray-400">{quest.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-yellow-400">+{quest.xp} XP</span>
                    <button
                      onClick={() => completeQuest(quest.id)}
                      disabled={quest.completed}
                      className={`px-4 py-2 rounded ${
                        quest.completed
                          ? 'bg-green-500 cursor-not-allowed'
                          : 'bg-blue-500 hover:bg-blue-600'
                      }`}
                    >
                      {quest.completed ? 'Completed' : 'Complete'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Gift className="mr-2" /> Rewards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableRewards.map(reward => (
              <div key={reward.id} className="bg-gray-700 rounded-lg p-6">
                <h4 className="font-semibold mb-2">{reward.name}</h4>
                <p className="text-sm text-gray-400 mb-4">{reward.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm">
                    Unlocks at Level {reward.unlockLevel}
                  </span>
                  <button
                    onClick={() => claimReward(reward.id)}
                    disabled={reward.claimed}
                    className={`px-4 py-2 rounded ${
                      reward.claimed
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-purple-500 hover:bg-purple-600'
                    }`}
                  >
                    {reward.claimed ? 'Claimed' : 'Claim'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}