"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Home } from "lucide-react";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import Script from "next/script";

export default function ThankYouPage() {
  // const searchParams = useSearchParams();
  // const studentDetails = {
  //   transactionId: searchParams.get("transactionId")!,
  //   name: searchParams.get("name")!,
  //   phone: searchParams.get("phone")!,
  //   city: searchParams.get("city")!,
  //   class: searchParams.get("class"),
  // };
  // useEffect(() => {
  //   console.log(studentDetails);
  // }, []);
  return (
    <Suspense>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/20 to-background">
        <header className="w-full p-4 flex justify-between items-center border-b">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold">Competishun</span>
          </Link>
        </header>

        <main className="flex-grow flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">
                Thank You!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                We appreciate your submission. Now! Our team will connect with
                you shortly!
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild className={" rounded-3xl"}>
                <Link href="/">Return to Home</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>

        <footer className="w-full p-4 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Competishun. All rights reserved.
          </p>
          <Script id={"gtagImplementation2"}>
            {`window.addEventListener("load", function () {
          if (window.location.href.indexOf('/thankyou') != -1 && window.location.href.indexOf('?name=') != -1) {
            var totalVal = decodeURIComponent(window.location.href).split("transactionId=")[1].split("&")[0]
            var orderId = decodeURIComponent(window.location.href).split("amount=")[1].split("&")[0]
            gtag("event", "conversion", {
              send_to: "AW-10838004875/GwYGCL6oxeEZEIup-68o",
              value: parseFloat(totalVal),
              currency: "INR",
              transaction_id: orderId,
            })
          }
          if (window.location.pathname.includes("/thankyou") != -1) {
            gtag("event", "conversion", {
              send_to: "AW-10838004875/gddNCMGoxeEZEIup-68o",
            })
          }
        })`}
          </Script>
          <Script id={"userEmailCapture"}>
            {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('set', 'user_data', {"email": user_email});
          gtag('config','AW-10838004875', {'allow_enhanced_conversions':true});`}
          </Script>
        </footer>
      </div>
    </Suspense>
  );
}
