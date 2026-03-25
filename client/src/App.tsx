import { Router, Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import FoodBeverage from "@/pages/food-beverage";
import RealEstate from "@/pages/real-estate";
import NotFound from "@/pages/not-found";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function AppRouter() {
  return (
    <Router base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/food-beverage" component={FoodBeverage} />
        <Route path="/real-estate" component={RealEstate} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
