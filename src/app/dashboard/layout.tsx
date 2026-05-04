import { Metadata } from "next";
import LoginGuard from "@/components/dashboard/LoginGuard";

export const metadata: Metadata = {
  title: "MSCO Dashboard",
  description: "Admin dashboard for MSCO",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full bg-gray-100 overflow-hidden text-gray-900" dir="rtl">
      <LoginGuard>
        {children}
      </LoginGuard>
    </div>
  );
}
