import React from "react";
import { FaHotel } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaHotel className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
