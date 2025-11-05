import { useState } from "react";
import { Upload, FileText, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const About = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
      toast.success(`${newFiles.length} file(s) uploaded successfully`);
    }
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

          {/* Document Upload Section */}
          <Card className="shadow-medium border-border/50 bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Annual Statements</CardTitle>
              <CardDescription>Upload and manage yearly financial documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <Label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Upload Documents</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Click to browse or drag and drop your files here
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Supported formats: PDF, DOC, DOCX, XLS, XLSX
                      </p>
                    </div>
                    <Input
                      id="file-upload"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.xls,.xlsx"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                    <Button type="button" variant="outline">
                      Choose Files
                    </Button>
                  </div>
                </Label>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold">Uploaded Files</h4>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium text-sm">{file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {(file.size / 1024).toFixed(2)} KB
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
