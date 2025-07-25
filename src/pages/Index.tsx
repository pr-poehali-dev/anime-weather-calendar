import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
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