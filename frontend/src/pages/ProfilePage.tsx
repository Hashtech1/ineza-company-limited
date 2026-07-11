import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/common/Card";
import { Avatar } from "@/components/common/Avatar";
import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";

const ProfilePage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <PageHeader title="Profile" description="Manage your personal details." />
      <Card className="mt-6 max-w-xl">
        <div className="mb-6 flex items-center gap-4">
          <Avatar firstName={user?.firstName} lastName={user?.lastName} size="lg" />
          <div>
            <p className="font-medium text-ink">{user?.firstName} {user?.lastName}</p>
            <p className="text-sm text-ink/50">{user?.email}</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="First name" htmlFor="firstName">
            <Input id="firstName" defaultValue={user?.firstName} />
          </FormField>
          <FormField label="Last name" htmlFor="lastName">
            <Input id="lastName" defaultValue={user?.lastName} />
          </FormField>
          <FormField label="Email address" htmlFor="email">
            <Input id="email" defaultValue={user?.email} disabled />
          </FormField>
          <FormField label="Phone number" htmlFor="phone">
            <Input id="phone" defaultValue={user?.phone} />
          </FormField>
        </div>
        <Button className="mt-6">Save changes</Button>
      </Card>
    </div>
  );
};

export default ProfilePage;
