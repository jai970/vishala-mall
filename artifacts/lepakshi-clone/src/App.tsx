import { Switch, Route, Router as WouterRouter } from "wouter";
import { HomePage } from "@/pages/HomePage";
import { CollectionPage } from "@/pages/CollectionPage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { PolicyPage } from "@/pages/PolicyPage";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white text-center px-4">
      <div>
        <h1 className="font-heading text-5xl font-normal mb-4">404</h1>
        <p className="text-white/60 mb-6">Page not found</p>
        <a href="/" className="inline-block bg-white text-[#1a1a1a] px-6 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors uppercase tracking-wider">
          Back to Home
        </a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/collections/:slug" component={CollectionPage} />
      <Route path="/products/:id" component={ProductDetailPage} />
      <Route path="/pages/about" component={AboutPage} />
      <Route path="/pages/contact" component={ContactPage} />
      <Route path="/policies/:slug" component={PolicyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
