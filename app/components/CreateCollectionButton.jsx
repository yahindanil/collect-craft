import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

// export default function CreateCollectionButton() {
//   return (
//     <div className="wrapper">
//       <Dialog className="w-[350px] wx-auto mt-[40px]">
//         <DialogTrigger asChild>
//           <Button variant="outline">Create collection</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader className="">
//             <DialogTitle>Create collection</DialogTitle>
//             {/* <DialogDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DialogDescription> */}
//           </DialogHeader>
//           <form className="grid gap-4">
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="collectionName">Collection name</Label>
//                 <Input id="collectionName" />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="description">Description</Label>
//                 <Input id="description" />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="category">Category</Label>
//                 <Select>
//                   <SelectTrigger id="category">
//                     <SelectValue placeholder="Select" />
//                   </SelectTrigger>
//                   <SelectContent position="popper">
//                     <SelectItem value="books">Books</SelectItem>
//                     <SelectItem value="signs">Signs</SelectItem>
//                     <SelectItem value="silverware">Silverware</SelectItem>
//                     <SelectItem value="toys">Toys</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <DialogFooter>
//               <Button type="submit" className="">
//                 Create
//               </Button>
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

export default function CreateCollectionButton() {
  return (
    <div>
      <Link href={"/collection-creation-form"} className="w-full">
        <Button className="w-full">Create collection</Button>
      </Link>
    </div>
  );
}
