import { Document } from "../Icons/document";
import { ServicesTile } from "../serviceTile";

export function Services() {
  return (
    <div>
      <div className="space-y-2">
        <p className="text-4xl font-bold text-center">Services</p>
        <p className="text-sm text-gray-500 text-center">What i offer</p>
      </div>
      <ServicesTile icon={<Document />} title="Full Stack Developer" />
    </div>
  );
}
