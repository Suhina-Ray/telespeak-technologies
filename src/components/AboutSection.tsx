import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Why Choose <span className="gradient-text">GreenWave</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              GreenWave Technologies helps businesses scale using technology-driven
              outsourcing solutions. We combine innovation with operational excellence
              to deliver measurable results across BPO, digital marketing, and
              custom software development.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our mission is simple — empower companies to focus on what they do best
              while we handle the rest. From lead generation to full-scale customer
              support, we are your trusted growth partner.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Innovation", "Reliability", "Scalability", "24/7 Support"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right - decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <Zap className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Technology-Driven Growth
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We leverage cutting-edge AI, automation, and analytics to optimize
                every touchpoint of your business operations.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Client Satisfaction", value: 98 },
                  { label: "Project Delivery Rate", value: 95 },
                  { label: "Team Efficiency", value: 92 },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="text-primary font-semibold">{stat.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${stat.value}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
