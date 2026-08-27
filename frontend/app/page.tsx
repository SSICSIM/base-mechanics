import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="page-shell space-y-4">
      <Card>
        <CardHeader>
          <Badge variant="secondary" className="w-fit">
            Base Mechanics
          </Badge>
          <CardTitle className="mt-2 text-2xl">Template Home</CardTitle>
          <CardDescription>
            This is a bare scaffold — no API endpoints or feature pages have been built yet. Add
            routers under <code>backend/app/api</code> and pages under <code>frontend/app</code>{" "}
            as you build out the app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" size="sm" asChild>
            <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noreferrer">
              Browse the shadcn component docs
            </a>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
