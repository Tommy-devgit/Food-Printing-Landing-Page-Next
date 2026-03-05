import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const specs = [
  ["Print Time", "2-10 minutes"],
  ["Ingredients", "30+"],
  ["Connectivity", "WiFi / App"],
  ["Resolution", "0.5mm layers"],
  ["Cleaning", "Self-cleaning mode"],
];

export default function Specs() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle eyebrow="Specs" title="Technical Details" />
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#727b4c]">
          <table className="w-full border-collapse text-left">
            <tbody>
              {specs.map(([key, value]) => (
                <tr key={key} className="border-b border-[#727b4c] last:border-0">
                  <th className="w-1/2 bg-[#55603b] px-5 py-4 text-sm font-medium text-[#ece9d8]">{key}</th>
                  <td className="bg-[#5f6840] px-5 py-4 text-sm text-[#f5f3ea]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
