import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnime, setSelectedAnime] = useState(null);

  // Mock anime data
  const animeData = [
    {
      id: 1,
      title: "Attack on Titan",
      rating: 9.0,
      status: "Completed",
      episodes: 75,
      year: 2013,
      genre: ["Action", "Drama"],
      poster: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
      trailer: "https://www.youtube.com/watch?v=KKzmOh4SuBc"
    },
    {
      id: 2,
      title: "Death Note",
      rating: 9.0,
      status: "Completed",
      episodes: 37,
      year: 2006,
      genre: ["Supernatural", "Thriller"],
      poster: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      trailer: "https://www.youtube.com/watch?v=NlJZ-YgAt-c"
    },
    {
      id: 3,
      title: "One Piece",
      rating: 8.7,
      status: "Airing",
      episodes: 1000,
      year: 1999,
      genre: ["Adventure", "Comedy"],
      poster: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
      trailer: "https://www.youtube.com/watch?v=MCb13lbVGE0"
    }
  ];

  const topRatedAnime = [
    { title: "Fullmetal Alchemist: Brotherhood", rating: 9.1, rank: 1 },
    { title: "Attack on Titan Season 3", rating: 9.0, rank: 2 },
    { title: "Death Note", rating: 9.0, rank: 3 },
    { title: "Demon Slayer", rating: 8.7, rank: 4 },
    { title: "One Piece", rating: 8.7, rank: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#1F1F1F] text-white">
      {/* Header */}
      <header className="border-b border-[#2D2D2D] px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">DASHBOARD</h1>
            <p className="text-sm text-[#FFFFFF]/60">Entertainment System Components</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-[#2D2D2D] bg-transparent text-white hover:bg-[#2D2D2D]">
              <Icon name="Settings" size={16} className="mr-2" />
              Settings
            </Button>
            <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
              <Icon name="Plus" size={16} className="mr-2" />
              Add Widget
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#2D2D2D] border-[#3D3D3D] text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#FFFFFF]/60">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,834</div>
              <div className="flex items-center mt-2">
                <Icon name="TrendingUp" size={16} className="text-green-500 mr-1" />
                <span className="text-sm text-green-500">+12.5%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2D2D2D] border-[#3D3D3D] text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#FFFFFF]/60">Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$54,237</div>
              <div className="flex items-center mt-2">
                <Icon name="TrendingUp" size={16} className="text-green-500 mr-1" />
                <span className="text-sm text-green-500">+8.2%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2D2D2D] border-[#3D3D3D] text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#FFFFFF]/60">Active Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <div className="flex items-center mt-2">
                <Icon name="TrendingDown" size={16} className="text-red-500 mr-1" />
                <span className="text-sm text-red-500">-3.1%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2D2D2D] border-[#3D3D3D] text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#FFFFFF]/60">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.24%</div>
              <div className="flex items-center mt-2">
                <Icon name="TrendingUp" size={16} className="text-green-500 mr-1" />
                <span className="text-sm text-green-500">+0.4%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Widget Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Performance Widget */}
          <Card className="bg-[#2D2D2D] border-[#3D3D3D] text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">System Performance</CardTitle>
                  <CardDescription className="text-[#FFFFFF]/60">Real-time monitoring</CardDescription>
                </div>
                <Icon name="Activity" size={20} className="text-[#2563EB]" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#FFFFFF]/60">CPU Usage</span>
                  <span>67%</span>
                </div>
                <Progress value={67} className="h-2 bg-[#1F1F1F]" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#FFFFFF]/60">Memory</span>
                  <span>84%</span>
                </div>
                <Progress value={84} className="h-2 bg-[#1F1F1F]" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#FFFFFF]/60">Storage</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2 bg-[#1F1F1F]" />
              </div>
              <div className="flex gap-2 mt-4">
                <Badge variant="secondary" className="bg-[#2563EB]/20 text-[#2563EB] border-[#2563EB]/30">Active</Badge>
                <Button size="sm" variant="outline" className="border-[#3D3D3D] bg-transparent text-white hover:bg-[#3D3D3D]">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Widget */}
          <Card className="bg-[#2D2D2D] border-[#3D3D3D] text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">Analytics Overview</CardTitle>
                  <CardDescription className="text-[#FFFFFF]/60">Last 30 days</CardDescription>
                </div>
                <Icon name="BarChart3" size={20} className="text-[#2563EB]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-full"></div>
                    <span className="text-sm text-[#FFFFFF]/60">Page Views</span>
                  </div>
                  <span className="font-semibold">127,834</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-[#FFFFFF]/60">Unique Visitors</span>
                  </div>
                  <span className="font-semibold">43,291</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-[#FFFFFF]/60">Bounce Rate</span>
                  </div>
                  <span className="font-semibold">23.4%</span>
                </div>
                <Separator className="bg-[#3D3D3D]" />
                <div className="flex gap-2">
                  <Button size="sm" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white flex-1">
                    Generate Report
                  </Button>
                  <Button size="sm" variant="outline" className="border-[#3D3D3D] bg-transparent text-white hover:bg-[#3D3D3D]">
                    <Icon name="Download" size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* MyAnimeList Integration Section */}
        <div className="mb-8">
          <Card className="bg-[#2D2D2D] border-[#3D3D3D] text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Play" size={20} className="text-[#2563EB]" />
                    MyAnimeList Integration
                  </CardTitle>
                  <CardDescription className="text-[#FFFFFF]/60">Search anime, view ratings and trailers</CardDescription>
                </div>
                <Badge className="bg-[#2563EB]/20 text-[#2563EB] border-[#2563EB]/30">Entertainment</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="search" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[#1F1F1F] border-[#3D3D3D]">
                  <TabsTrigger value="search" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">Search</TabsTrigger>
                  <TabsTrigger value="ratings" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">Top Rated</TabsTrigger>
                  <TabsTrigger value="trailers" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">Trailers</TabsTrigger>
                </TabsList>

                <TabsContent value="search" className="mt-4">
                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        placeholder="Search anime..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-[#1F1F1F] border-[#3D3D3D] text-white placeholder:text-[#FFFFFF]/40 pr-10"
                      />
                      <Icon name="Search" size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FFFFFF]/40" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {animeData.map((anime) => (
                        <Card key={anime.id} className="bg-[#1F1F1F] border-[#3D3D3D] hover:border-[#2563EB] transition-all duration-200 cursor-pointer">
                          <CardContent className="p-4">
                            <div className="flex gap-3">
                              <div className="w-16 h-20 bg-[#3D3D3D] rounded-md flex items-center justify-center">
                                <Icon name="Image" size={24} className="text-[#FFFFFF]/40" />
                              </div>
                              <div className="flex-1 space-y-1">
                                <h3 className="font-semibold text-white text-sm">{anime.title}</h3>
                                <div className="flex items-center gap-2">
                                  <Icon name="Star" size={12} className="text-yellow-500 fill-current" />
                                  <span className="text-sm font-medium text-yellow-500">{anime.rating}</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {anime.genre.slice(0, 2).map((g) => (
                                    <Badge key={g} variant="secondary" className="text-xs bg-[#2563EB]/20 text-[#2563EB] border-[#2563EB]/30">
                                      {g}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-[#FFFFFF]/60">
                                  <span>{anime.episodes} eps</span>
                                  <span>•</span>
                                  <span>{anime.year}</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="ratings" className="mt-4">
                  <div className="space-y-3">
                    {topRatedAnime.map((anime) => (
                      <div key={anime.rank} className="flex items-center justify-between p-3 bg-[#1F1F1F] rounded-lg border border-[#3D3D3D]">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {anime.rank}
                          </div>
                          <span className="text-white font-medium">{anime.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                          <span className="text-yellow-500 font-semibold">{anime.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="trailers" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {animeData.slice(0, 2).map((anime) => (
                      <Card key={anime.id} className="bg-[#1F1F1F] border-[#3D3D3D] overflow-hidden">
                        <div className="aspect-video bg-[#3D3D3D] flex items-center justify-center relative group cursor-pointer">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-200"></div>
                          <Icon name="Play" size={32} className="text-white group-hover:scale-110 transition-transform duration-200" />
                          <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                            Trailer
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-white mb-2">{anime.title}</h3>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                              <span className="text-sm text-yellow-500">{anime.rating}</span>
                            </div>
                            <Button size="sm" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                              <Icon name="ExternalLink" size={14} className="mr-1" />
                              Watch
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Navigation and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card className="bg-[#2D2D2D] border-[#3D3D3D] text-white">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Icon name="Zap" size={20} className="text-[#2563EB]" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-[#3D3D3D] bg-transparent text-white hover:bg-[#3D3D3D]">
                <Icon name="Bell" size={16} className="mr-2" />
                Notifications
              </Button>
              <Button variant="outline" className="w-full justify-start border-[#3D3D3D] bg-transparent text-white hover:bg-[#3D3D3D]">
                <Icon name="Calendar" size={16} className="mr-2" />
                Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start border-[#3D3D3D] bg-transparent text-white hover:bg-[#3D3D3D]">
                <Icon name="Search" size={16} className="mr-2" />
                Search
              </Button>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="bg-[#2D2D2D] border-[#3D3D3D] text-white">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Icon name="Server" size={20} className="text-green-500" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#FFFFFF]/60">API Server</span>
                <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#FFFFFF]/60">Database</span>
                <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#FFFFFF]/60">Cache</span>
                <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">Warning</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-[#2D2D2D] border-[#3D3D3D] text-white">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-[#2563EB]" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="font-medium">User login spike detected</div>
                <div className="text-[#FFFFFF]/60 text-xs">2 minutes ago</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">System backup completed</div>
                <div className="text-[#FFFFFF]/60 text-xs">1 hour ago</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">New user registered</div>
                <div className="text-[#FFFFFF]/60 text-xs">3 hours ago</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;