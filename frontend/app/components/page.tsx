"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { toast } from "sonner"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BellIcon,
  BoldIcon,
  CheckIcon,
  ChevronsUpDownIcon,
  FileTextIcon,
  HomeIcon,
  InboxIcon,
  SearchIcon,
  XIcon,
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DirectionProvider } from "@/components/ui/direction"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Input } from "@/components/ui/input"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import {
  Questionnaire,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Toaster } from "@/components/ui/sonner"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Toggle } from "@/components/ui/toggle"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const SECTIONS = [
  { id: "actions", label: "Actions" },
  { id: "forms", label: "Forms & Inputs" },
  { id: "overlays", label: "Overlays" },
  { id: "navigation", label: "Navigation" },
  { id: "feedback", label: "Feedback & Status" },
  { id: "data-display", label: "Data Display" },
  { id: "layout", label: "Layout" },
  { id: "chat", label: "Chat & Messaging" },
]

function Row({ label, id, children }: { label: string; id?: string; children: React.ReactNode }) {
  return (
    <div id={id} className="grid scroll-mt-20 grid-cols-1 gap-4 border-b py-6 sm:grid-cols-[160px_1fr] sm:items-start">
      <div className="text-sm font-medium text-muted-foreground sm:pt-2">{label}</div>
      <div className="min-w-0 overflow-x-auto">{children}</div>
    </div>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16">
      <h2 className="pt-10 pb-1 text-lg font-semibold">{title}</h2>
      <div>{children}</div>
    </section>
  )
}

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

const fruits = ["Apple", "Banana", "Blueberry", "Grape", "Pineapple"]

const questionnaireItems = [
  {
    name: "direction",
    required: true,
    prompt: "What should we build next?",
    choices: [
      { value: "a", label: "More components" },
      { value: "b", label: "More pages" },
      { value: "c", label: "Both" },
    ],
  },
] as const

function DirectionDemo() {
  const [dir, setDir] = React.useState<"ltr" | "rtl">("ltr")
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Button size="sm" variant={dir === "ltr" ? "default" : "outline"} onClick={() => setDir("ltr")}>
          LTR
        </Button>
        <Button size="sm" variant={dir === "rtl" ? "default" : "outline"} onClick={() => setDir("rtl")}>
          RTL
        </Button>
      </div>
      <DirectionProvider dir={dir}>
        <div dir={dir} className="flex gap-2 rounded-lg border p-3 text-sm">
          <span>First</span>
          <span>Second</span>
          <span>Third</span>
        </div>
      </DirectionProvider>
    </div>
  )
}

export default function ComponentsPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <main className="page-shell max-w-4xl space-y-2 pb-24">
      <header className="space-y-2 pb-4">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Reference</p>
        <h1 className="text-2xl font-semibold">Components</h1>
        <p className="text-sm text-muted-foreground">
          Every component from the shadcn/ui library currently vendored in{" "}
          <code>components/ui</code>, each shown with a label and a minimal example.
        </p>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-sm">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-muted-foreground hover:text-foreground">
              {s.label}
            </a>
          ))}
        </nav>
      </header>

      {/* ACTIONS */}
      <Section id="actions" title="Actions">
        <Row label="Button">
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </Row>
        <Row label="ButtonGroup">
          <ButtonGroup>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Middle</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>
        </Row>
        <Row label="Toggle">
          <Toggle aria-label="Toggle bold">
            <BoldIcon />
          </Toggle>
        </Row>
        <Row label="ToggleGroup">
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRightIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </Row>
        <Row label="Badge">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </Row>
        <Row label="Kbd">
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
        </Row>
      </Section>

      {/* FORMS */}
      <Section id="forms" title="Forms & Inputs">
        <Row label="Input">
          <Input placeholder="Email" className="max-w-sm" />
        </Row>
        <Row label="Textarea">
          <Textarea placeholder="Type a message..." className="max-w-sm" />
        </Row>
        <Row label="Label">
          <Label htmlFor="demo-label-input">Your name</Label>
        </Row>
        <Row label="Checkbox">
          <div className="flex items-center gap-2">
            <Checkbox id="demo-checkbox" defaultChecked />
            <Label htmlFor="demo-checkbox">Accept terms and conditions</Label>
          </div>
        </Row>
        <Row label="RadioGroup">
          <RadioGroup defaultValue="a" className="flex gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="a" id="demo-radio-a" />
              <Label htmlFor="demo-radio-a">Option A</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="b" id="demo-radio-b" />
              <Label htmlFor="demo-radio-b">Option B</Label>
            </div>
          </RadioGroup>
        </Row>
        <Row label="Switch">
          <div className="flex items-center gap-2">
            <Switch id="demo-switch" defaultChecked />
            <Label htmlFor="demo-switch">Airplane mode</Label>
          </div>
        </Row>
        <Row label="Select">
          <Select defaultValue="apple">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                {fruits.map((f) => (
                  <SelectItem key={f} value={f.toLowerCase()}>
                    {f}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Row>
        <Row label="NativeSelect">
          <NativeSelect defaultValue="apple" className="w-48">
            {fruits.map((f) => (
              <NativeSelectOption key={f} value={f.toLowerCase()}>
                {f}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Row>
        <Row label="Slider">
          <Slider defaultValue={[50]} max={100} step={1} className="max-w-sm" />
        </Row>
        <Row label="InputOTP">
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </Row>
        <Row label="InputGroup">
          <InputGroup className="max-w-sm">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </Row>
        <Row label="Field">
          <FieldGroup className="max-w-sm">
            <Field>
              <FieldLabel htmlFor="demo-field-email">Email</FieldLabel>
              <Input id="demo-field-email" type="email" placeholder="you@example.com" />
              <FieldDescription>We&apos;ll never share your email.</FieldDescription>
            </Field>
          </FieldGroup>
        </Row>
        <Row label="Combobox">
          <Combobox items={fruits}>
            <ComboboxInput placeholder="Search fruit..." className="max-w-sm" />
            <ComboboxContent>
              <ComboboxEmpty>No fruit found.</ComboboxEmpty>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Row>
        <Row label="Calendar">
          <Calendar mode="single" selected={date} onSelect={setDate} className="w-fit rounded-lg border" />
        </Row>
      </Section>

      {/* OVERLAYS */}
      <Section id="overlays" title="Overlays">
        <Row label="Dialog">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Row>
        <Row label="AlertDialog">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Delete account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Row>
        <Row label="Sheet">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>Make changes to your profile here.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Row>
        <Row label="Drawer">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Row>
        <Row label="Popover">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Dimensions</PopoverTitle>
                <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </Row>
        <Row label="HoverCard">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@base-mechanics</Button>
            </HoverCardTrigger>
            <HoverCardContent>The base-mechanics template repo.</HoverCardContent>
          </HoverCard>
        </Row>
        <Row label="Tooltip">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                Hover me
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add to library</TooltipContent>
          </Tooltip>
        </Row>
        <Row label="DropdownMenu">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Row>
        <Row label="ContextMenu">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-20 w-56 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Back</ContextMenuItem>
              <ContextMenuItem>Forward</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Reload</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Row>
        <Row label="Menubar">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Row>
        <Row label="Command">
          <Command className="w-full max-w-sm rounded-lg border">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Row>
      </Section>

      {/* NAVIGATION */}
      <Section id="navigation" title="Navigation">
        <Row label="NavigationMenu">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1 p-2">
                    <li>
                      <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="#">Installation</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Row>
        <Row label="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Row>
        <Row label="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Row>
        <Row label="Tabs">
          <Tabs defaultValue="account" className="max-w-sm">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="text-sm text-muted-foreground">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password" className="text-sm text-muted-foreground">
              Change your password here.
            </TabsContent>
          </Tabs>
        </Row>
        <Row label="Direction">
          <DirectionDemo />
        </Row>
      </Section>

      {/* FEEDBACK */}
      <Section id="feedback" title="Feedback & Status">
        <Row label="Alert">
          <Alert className="max-w-sm">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app.</AlertDescription>
          </Alert>
        </Row>
        <Row label="Progress">
          <Progress value={60} className="max-w-sm" />
        </Row>
        <Row label="Skeleton">
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        </Row>
        <Row label="Spinner">
          <Spinner className="size-5" />
        </Row>
        <Row label="Sonner (Toaster)">
          <Button variant="outline" onClick={() => toast("Event has been created.")}>
            Show toast
          </Button>
        </Row>
        <Row label="Empty">
          <Empty className="max-w-sm border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <InboxIcon />
              </EmptyMedia>
              <EmptyTitle>No messages</EmptyTitle>
              <EmptyDescription>You&apos;re all caught up.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">Compose</Button>
            </EmptyContent>
          </Empty>
        </Row>
      </Section>

      {/* DATA DISPLAY */}
      <Section id="data-display" title="Data Display">
        <Row label="Card">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">Card content.</CardContent>
          </Card>
        </Row>
        <Row label="Avatar">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Row>
        <Row label="AspectRatio">
          <AspectRatio ratio={16 / 9} className="max-w-sm overflow-hidden rounded-lg bg-muted">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">16:9</div>
          </AspectRatio>
        </Row>
        <Row label="Separator">
          <div className="flex items-center gap-2 text-sm">
            <span>Left</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Right</span>
          </div>
        </Row>
        <Row label="Accordion">
          <Accordion type="single" collapsible className="w-full max-w-sm">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes, it adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Row>
        <Row label="Collapsible">
          <Collapsible className="w-full max-w-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Details</span>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <ChevronsUpDownIcon />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="text-sm text-muted-foreground">More content here.</CollapsibleContent>
          </Collapsible>
        </Row>
        <Row label="Table">
          <Table>
            <TableCaption>A list of recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Row>
        <Row label="Chart">
          <ChartContainer config={chartConfig} className="h-[200px] w-full max-w-md">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </Row>
        <Row label="Carousel">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((i) => (
                <CarouselItem key={i} className="basis-1/2">
                  <div className="flex aspect-square items-center justify-center rounded-lg border text-2xl font-semibold">
                    {i}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Row>
        <Row label="Resizable">
          <ResizablePanelGroup orientation="horizontal" className="h-32 w-full max-w-sm rounded-lg border">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center text-sm">Panel A</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center text-sm">Panel B</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Row>
        <Row label="ScrollArea">
          <ScrollArea className="h-32 w-48 rounded-lg border p-3">
            <div className="space-y-2 text-sm">
              {Array.from({ length: 10 }).map((_, i) => (
                <p key={i}>Item {i + 1}</p>
              ))}
            </div>
          </ScrollArea>
        </Row>
        <Row label="Marker">
          <div className="max-w-sm space-y-2">
            <Marker>
              <MarkerIcon>
                <CheckIcon />
              </MarkerIcon>
              <MarkerContent>Step completed</MarkerContent>
            </Marker>
            <Marker variant="separator">
              <MarkerContent>OR</MarkerContent>
            </Marker>
          </div>
        </Row>
        <Row label="Item">
          <ItemGroup className="max-w-sm">
            <Item variant="outline">
              <ItemMedia variant="icon">
                <BellIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>New notification</ItemTitle>
                <ItemDescription>You have a new message.</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="icon-sm" variant="ghost">
                  <XIcon />
                </Button>
              </ItemActions>
            </Item>
          </ItemGroup>
        </Row>
      </Section>

      {/* LAYOUT */}
      <Section id="layout" title="Layout">
        <Row label="Sidebar">
          <div className="h-72 w-full max-w-lg overflow-hidden rounded-lg border">
            <SidebarProvider className="h-full !min-h-0">
              <Sidebar collapsible="none" className="border-r">
                <SidebarHeader>
                  <div className="px-2 py-1.5 text-sm font-semibold">Acme Inc</div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <HomeIcon />
                            <span>Home</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                            <InboxIcon />
                            <span>Inbox</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">v0.1.0</div>
                </SidebarFooter>
              </Sidebar>
              <SidebarInset className="p-4 text-sm text-muted-foreground">Main content area</SidebarInset>
            </SidebarProvider>
          </div>
        </Row>
      </Section>

      {/* CHAT & MESSAGING */}
      <Section id="chat" title="Chat & Messaging">
        <Row label="Message / Bubble">
          <div className="max-w-sm space-y-3">
            <Message>
              <MessageAvatar>
                <Avatar size="sm">
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <Bubble>
                  <BubbleContent>How can I help you today?</BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
          </div>
        </Row>
        <Row label="MessageScroller">
          <div className="h-48 w-full max-w-sm overflow-hidden rounded-lg border">
            <MessageScrollerProvider>
              <MessageScroller className="h-full">
                <MessageScrollerViewport>
                  <MessageScrollerContent className="p-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <MessageScrollerItem key={i}>
                        <div className="w-fit rounded-lg bg-muted px-3 py-2 text-sm">Message {i}</div>
                      </MessageScrollerItem>
                    ))}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            </MessageScrollerProvider>
          </div>
        </Row>
        <Row label="Attachment">
          <Attachment className="max-w-sm">
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
              <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction aria-label="Remove sales-dashboard.pdf">
                <XIcon />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        </Row>
        <Row label="Questionnaire">
          <Questionnaire items={questionnaireItems} className="max-w-sm">
            {questionnaireItems.map((question) => (
              <QuestionnaireItem key={question.name} name={question.name} required={question.required}>
                <QuestionnaireTitle>{question.prompt}</QuestionnaireTitle>
                <QuestionnaireDescription>Choose one.</QuestionnaireDescription>
                <QuestionnaireChoices>
                  {question.choices.map((choice) => (
                    <QuestionnaireChoice key={choice.value} value={choice.value}>
                      <span className="font-medium">{choice.label}</span>
                    </QuestionnaireChoice>
                  ))}
                </QuestionnaireChoices>
              </QuestionnaireItem>
            ))}
          </Questionnaire>
        </Row>
      </Section>

      <Toaster />
    </main>
  )
}
