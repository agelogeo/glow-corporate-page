import { FileText, Download, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for annual statements
const annualStatements = [
  { year: 2024, title: "Annual Financial Statement 2024", size: "2.4 MB", date: "March 2024" },
  { year: 2023, title: "Annual Financial Statement 2023", size: "2.1 MB", date: "March 2023" },
  { year: 2022, title: "Annual Financial Statement 2022", size: "1.9 MB", date: "March 2022" },
  { year: 2021, title: "Annual Financial Statement 2021", size: "1.8 MB", date: "March 2021" },
];

const About = () => {
  const handleDownload = (year: number) => {
    // In a real application, this would trigger an actual file download
    console.log(`Downloading statement for ${year}`);
  };

  return (
    <div className="min-h-screen bg-gradient-tech">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Company Info Section */}
          <Card className="shadow-medium border-border/50 bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">About Codebase Apps</CardTitle>
              <CardDescription>Building innovative software solutions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Codebase Apps, we're dedicated to creating cutting-edge software solutions 
                  that empower businesses to thrive in the digital age. Our team of experienced 
                  developers and designers work together to deliver exceptional products that 
                  combine functionality with beautiful design.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Company Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Founded</p>
                    <p className="font-medium">2024</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium">Global</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Specialization</p>
                    <p className="font-medium">Software Development</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Team Size</p>
                    <p className="font-medium">Growing</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Annual Statements Section */}
          <Card className="shadow-medium border-border/50 bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Annual Statements</CardTitle>
              <CardDescription>Download yearly financial documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {annualStatements.map((statement) => (
                  <div
                    key={statement.year}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{statement.title}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {statement.date}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {statement.size}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleDownload(statement.year)}
                      className="shadow-soft hover:shadow-medium transition-all"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
