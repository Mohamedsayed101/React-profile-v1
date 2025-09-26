import HeadingPage from "../../Components/HeadingPage/HeadingPage";
import { certificatesData } from "../../DataStore/Certificates";
import CertificatesCard from "../../Components/CertificatesCard/CertificatesCard";

export default function Certificates() {
  return (
    <div className="px-3 flex flex-col gap-19">
      <HeadingPage title="Certificates" />
      <div className="flex flex-col  gap-4">
        {certificatesData.map((item, index) => (
          <CertificatesCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
