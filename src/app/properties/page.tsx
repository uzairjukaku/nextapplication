"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { properties } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { BedDouble, LandPlot } from "lucide-react";
import Myheader from "@/components/myheader";

export default function PropertyListing() {
  const [sort, setSort] = useState("recent");
  const [filter, setFilter] = useState({ price: 0, bedrooms: 0 });

  const sortedProperties = [...properties].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "alphabet") return a.address.localeCompare(b.address);
    return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
  });

  const filteredProperties = sortedProperties.filter((prop) => {
    return (
      prop.price >= filter.price &&
      (filter.bedrooms === 0 || prop.bedrooms === filter.bedrooms)
    );
  });

  return (
    <div className="container mx-auto p-4">

        <Myheader >


      <div className="flex flex-row flex-wrap  mb-4 gap-4">
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="alphabet">Alphabetical</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="number"
          placeholder="Min Price"
          className="w-[180px]"
          min="0"
          onChange={(e) =>
            setFilter({ ...filter, price: Number(e.target.value) })
          }
        />
        <Input
          type="number"
          placeholder="Bedrooms"
          className="w-[180px]"
          min="0"
          onChange={(e) =>
            setFilter({ ...filter, bedrooms: Number(e.target.value) })
          }
        />
      </div>
        </Myheader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <Link key={property.id} href={`/properties/${property.id}`}>
            <Card >
              <CardContent className="p-4">
                <Image
                  src={property.image}
                  alt={property.address}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover cursor-pointer rounded-t-lg"
                />
                <div className="mt-4">
                  <CardTitle className="text-lg">{property.address}</CardTitle>
                  <p className="text-sm mt-2 flex  items-center gap-2"><LandPlot size={16}/> {property.size} sqft</p>
                  <p className="text-sm flex items-center gap-2"><BedDouble size={16}/>  {property.bedrooms} Bedrooms</p>
                  <p className="text-lg font-semibold mt-2">
                    ${property.price.toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
