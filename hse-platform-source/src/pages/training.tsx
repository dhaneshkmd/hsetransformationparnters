import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is required"),
  program: z.string().min(1, "Please select a program"),
  message: z.string().optional()
});

export default function Training() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", program: "", message: "" }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Inquiry Sent",
      description: "We will contact you shortly regarding the training programs.",
    });
    form.reset();
  }

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-5xl font-display font-bold mb-6">Training Academy</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Equipping your workforce with world-class safety competence and leadership skills.
        </p>

        <div className="space-y-8">
          {[
            { title: "Executive Safety Leadership", desc: "For C-suite and directors to drive culture." },
            { title: "NEBOSH Certifications", desc: "Internationally recognized health and safety qualifications." },
            { title: "Frontline Supervisor Training", desc: "Practical skills for managing daily operations safely." },
            { title: "Specialized Hazard Training", desc: "Working at heights, confined space, H2S awareness." }
          ].map((prog, i) => (
            <div key={i} className="bg-card border border-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-primary mb-2">{prog.title}</h3>
              <p className="text-muted-foreground">{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card/50 border border-white/5 p-8 rounded-2xl h-fit">
        <h2 className="text-2xl font-display font-bold mb-6">Request Training Info</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="company" render={({ field }) => (
              <FormItem><FormLabel>Company</FormLabel><FormControl><Input placeholder="Acme Corp" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <div className="grid grid-cols-2 gap-4">
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="+1 234 567 890" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
            </div>
            <FormField control={form.control} name="program" render={({ field }) => (
              <FormItem>
                <FormLabel>Program Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl><SelectTrigger><SelectValue placeholder="Select a program" /></SelectTrigger></FormControl>
                  <SelectContent>
                    <SelectItem value="leadership">Executive Leadership</SelectItem>
                    <SelectItem value="nebosh">NEBOSH Certification</SelectItem>
                    <SelectItem value="supervisor">Supervisor Training</SelectItem>
                    <SelectItem value="specialized">Specialized Hazards</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem><FormLabel>Additional Requirements</FormLabel><FormControl><Textarea placeholder="Any specific needs..." {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-md mt-4 hover:bg-primary/90 transition-colors">
              Submit Inquiry
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}
