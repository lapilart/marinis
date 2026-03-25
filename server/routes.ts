import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real implementation, you would send an email here
      // For now, we'll just create a mailto link response
      const mailtoLink = `mailto:lorenzo@mariniassociates.com?subject=Website Contact from ${encodeURIComponent(submission.name)}&body=${encodeURIComponent(submission.message)}%0D%0A%0D%0AReply to: ${encodeURIComponent(submission.email)}`;
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        mailtoLink 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
