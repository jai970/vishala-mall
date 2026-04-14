import { Switch, Route, Router as WouterRouter } from "wouter";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { HomePage } from "@/pages/HomePage";
import { CollectionPage } from "@/pages/CollectionPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";

function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-center px-4"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div>
        <h1 className="font-heading text-6xl font-semibold mb-4" style={{ color: "var(--maroon)" }}>
          404
        </h1>
        <p className="text-stone-500 mb-6">Page not found</p>
        <a href="/vishala/" className="btn-maroon inline-block">
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
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <CartProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
        <CartDrawer />
      </WouterRouter>
    </CartProvider>
  );
}

export default App;
