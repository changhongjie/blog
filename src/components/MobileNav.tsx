import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" class="md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav class="flex flex-col gap-4 mt-8">
          <a
            href="/"
            onClick={() => setOpen(false)}
            class="text-lg font-medium transition-colors hover:text-foreground/80"
          >
            Home
          </a>
          <a
            href="/blog"
            onClick={() => setOpen(false)}
            class="text-lg font-medium transition-colors hover:text-foreground/80"
          >
            Blog
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

