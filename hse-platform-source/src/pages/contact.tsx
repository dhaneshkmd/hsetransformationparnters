import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details")
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", service: "", message: "" }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Received",
      description: "Our team will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-display font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          Partner with our experts to transform your safety culture. We operate globally to serve the world's most complex industries.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1 space-y-8">
          <div className="bg-card border border-white/5 p-6 rounded-2xl">
            <h3 className="font-display font-bold text-lg mb-6 border-b border-white/10 pb-4">Global Reach</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">hsetranspartners808@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="font-medium text-foreground">+91 9846526915</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary mr-4 mt-1" size={20} />
                <div>
                  <div className="text-sm text-muted-foreground">Headquarters</div>
                  <div className="font-medium text-foreground">Global Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-card border border-white/5 p-8 rounded-2xl">
          <h2 className="text-2xl font-display font-bold mb-6">Request a Consultation</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="company" render={({ field }) => (
                  <FormItem><FormLabel>Company / Organization</FormLabel><FormControl><Input placeholder="Acme Corp" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>Corporate Email</FormLabel><FormControl><Input placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+1 234 567 890" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </div>
              <FormField control={form.control} name="service" render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                    <SelectContent>
                      <SelectItem value="consulting">HSE Consulting</SelectItem>
                      <SelectItem value="construction">Construction Safety</SelectItem>
                      <SelectItem value="oilgas">Oil & Gas Safety</SelectItem>
                      <SelectItem value="iso">ISO Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem><FormLabel>Project Details</FormLabel><FormControl><Textarea className="h-32" placeholder="Tell us about your challenges and objectives..." {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <button type="submit" className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-md mt-2 hover:bg-accent/90 transition-colors">
                Submit Request
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
