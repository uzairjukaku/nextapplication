import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { properties } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const property = properties.find((prop) => prop.id.toString() === params.id);

  if (!property) notFound();

  return (
    <div className="container mx-auto p-4">
      <Button asChild variant="outline" className="mb-4">
        <Link href="/properties">Back to Listings</Link>
      </Button>

      <Card>
        <CardContent className="p-4">
          <Image
            src={property?.image}
            alt={`${property.address}`}
            width={800}
            height={600}
            className="w-full h-96 object-cover rounded-t-lg"
          />

          <div className="mt-6">
            <CardTitle className="text-3xl font-semibold">
              {property.address}
            </CardTitle>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <p className="text-xl font-medium">
                  <strong>Size:</strong> {property.size} sqft
                </p>
                <p className="text-xl font-medium">
                  <strong>Bedrooms:</strong> {property.bedrooms}
                </p>
                <p className="text-xl font-medium">
                  <strong>Price:</strong> ${property.price.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xl font-medium">
                  <strong>Added on:</strong>{" "}
                  {new Date(property.addedAt).toLocaleDateString()}
                </p>
                <p className="text-xl font-medium">
                  <strong>Location:</strong> {property?.address}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold">Description</h3>
            <p className="text-lg mt-2">{property?.description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
