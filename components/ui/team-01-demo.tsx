import Team01 from "@/components/ui/team-01";

export default function Team01Demo() {
  return (
    <Team01
      members={[
        {
          name: "Dr. Hannah Rajsekhar",
          role: "Orthopaedics",
          group: "Orthopaedics",
          image: "/orientation/staff/hannah-rajsekhar.jpg",
          title: "Principal",
        },
      ]}
    />
  );
}
