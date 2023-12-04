import LeftNavBar from "@/components/LeftNavBar";
import { authUserSession } from "@/libs/auth-libs";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="min-h-[90vh]">
      <div className="container my-4 sm:my-8">
        <div className="px-4 py-2">
          {/* <h1 className="py-2 font-bold text-xl text-slate-800">Dashboard</h1> */}

          <div className="flex gap-5">
            {/* left section */}
            <LeftNavBar user={user} />

            {/* Right Section */}
            <section className="w-2/3 xl:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              eleifend mi at magna vestibulum elementum. Fusce quis odio
              vehicula, scelerisque mi eget, consequat nisl. Sed egestas eu
              felis a elementum. Vestibulum nec suscipit ligula, id viverra
              magna. Vestibulum pharetra malesuada quam, sit amet maximus tortor
              commodo ac. Pellentesque et sodales ante, a luctus magna. Sed
              congue mattis efficitur. Suspendisse consequat tincidunt nulla, in
              interdum eros aliquet eget. Phasellus vitae diam ut dolor vehicula
              egestas a a purus. Nullam velit elit, vestibulum non libero sit
              amet, aliquam sodales odio. Duis sagittis, lorem eu tempus
              ultricies, diam lacus faucibus ante, a feugiat sapien mi eget
              nisi. Nulla et nunc turpis. Maecenas quis pretium lectus. Donec ex
              libero, auctor id ex vitae, venenatis tincidunt est. Nam at urna
              tincidunt, vestibulum augue id, elementum tortor. Nullam
              pellentesque pulvinar justo at tempor. Ut blandit risus vel turpis
              mollis molestie. Mauris tellus eros, tristique vel posuere at,
              fermentum ut purus. Aliquam id convallis felis. Nulla eu urna in
              augue sagittis congue sed a risus. Duis et arcu rutrum, ultricies
              lorem vitae, dapibus tortor. Pellentesque condimentum diam lectus.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vivamus auctor consectetur dictum.
              Sed nec mattis dolor. Nunc tincidunt vehicula nisl, interdum
              finibus lectus bibendum at. Donec felis magna, hendrerit ut arcu
              a, pellentesque pellentesque metus. Maecenas vitae imperdiet
              dolor. In nec lacinia diam. Pellentesque quis augue pretium purus
              consectetur viverra pretium a nisi. Fusce eget magna in lectus
              aliquam facilisis. Aenean egestas neque luctus bibendum venenatis.
              Vestibulum ut vestibulum massa. Quisque iaculis libero eget ex
              tincidunt tincidunt. Donec laoreet porttitor felis, nec mattis
              odio aliquet luctus. Vestibulum varius mattis tincidunt. Donec eu
              ex ultricies, finibus eros in, venenatis libero. Vivamus et neque
              enim. Sed aliquet pulvinar tortor at lobortis. Etiam at dolor
              augue. Proin ut auctor enim. Cras condimentum condimentum odio.
              Nulla blandit semper nulla in auctor. Vivamus venenatis tortor
              orci, quis elementum mi consequat et. Nam congue risus eu laoreet
              scelerisque. Suspendisse potenti. Integer nec iaculis ligula, non
              lacinia orci. Integer velit nisl, dictum nec est ac, finibus
              pharetra sem. Curabitur felis elit, elementum quis semper eu,
              congue sed est. Aenean rutrum dapibus est suscipit pharetra. Sed
              sodales dui nec tellus feugiat, eget maximus dolor tincidunt.
              Aliquam in molestie ex. Praesent in odio lobortis, laoreet nulla
              et, aliquet urna. Proin vel ipsum libero. Donec et elit metus. In
              magna nisl, cursus eget tincidunt tristique, tincidunt sit amet
              lorem. Praesent nec odio id erat lobortis molestie. Nullam iaculis
              urna mauris, quis eleifend sapien volutpat quis. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Mauris eu tellus pharetra,
              efficitur metus ut, volutpat est. Duis dignissim velit a lacus
              venenatis ornare. Nullam eleifend imperdiet urna. Vivamus vitae
              mattis lorem, eget commodo enim. Nulla id leo eget sapien pulvinar
              porta eget sed purus. Nulla sollicitudin dolor eget lectus
              porttitor, vel consectetur nisl consectetur. Ut vitae lacus
              dapibus, vestibulum felis at, pharetra magna. Duis lectus arcu,
              dapibus in consequat ut, accumsan et nisl. Nunc non enim orci.
              Duis ornare tempor ante nec gravida. Vivamus tincidunt urna eu
              turpis pellentesque faucibus. Vestibulum id ipsum eu metus
              vehicula tristique. Maecenas imperdiet, libero sit amet bibendum
              ullamcorper, mauris neque sodales eros, rhoncus pulvinar ipsum
              lacus nec mi. Morbi et ligula tortor. Suspendisse ut dolor nec
              lacus mollis lobortis. Vivamus vel velit felis. Nam malesuada
              justo ut nisi rhoncus, mollis tincidunt est lacinia. Morbi quis
              lorem ac risus ultricies posuere. Morbi et tellus sagittis, congue
              ante sed, rutrum metus. Vestibulum sagittis nec lectus a vehicula.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Cras posuere cursus purus, eget mattis enim
              varius ac. Donec consectetur nisl vel turpis viverra faucibus.
              Donec dapibus ultricies dui a malesuada. Aliquam euismod a odio ac
              consectetur. Vivamus ultrices sed felis sagittis vehicula. Vivamus
              at turpis nec nisi auctor feugiat. Pellentesque sit amet neque
              commodo, dapibus ex nec, bibendum ligula. Pellentesque efficitur
              bibendum iaculis. Sed eget fringilla diam, eu porttitor ligula.
              Nulla molestie sollicitudin ex, nec lobortis lacus volutpat non.
              Suspendisse accumsan accumsan metus sed rhoncus. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Mauris tincidunt
              ipsum at nunc tincidunt, sit amet feugiat mauris laoreet. Nunc id
              mi nisl. Duis facilisis eget dui non aliquam. Aliquam vestibulum
              diam mi, a laoreet justo eleifend sodales. Curabitur congue
              blandit metus sit amet feugiat. Maecenas ut tellus erat. Ut
              tincidunt pulvinar suscipit. Curabitur iaculis lobortis dui, non
              fermentum est aliquet in. Vestibulum a mollis turpis. Duis
              condimentum, diam ut ultricies varius, elit quam varius mi, vitae
              venenatis massa velit eu enim. Vivamus ultrices, massa in
              consequat aliquet, lorem purus tincidunt ipsum, quis blandit nunc
              quam nec lacus. Pellentesque porttitor accumsan sapien, in rhoncus
              justo placerat sit amet. Praesent ornare quam est, sed imperdiet
              massa sodales ac. Pellentesque non dolor ac ex lacinia bibendum.
              Aenean eu iaculis turpis. Quisque tincidunt leo eu rhoncus
              interdum. Donec vitae aliquet metus. Curabitur ultrices vestibulum
              mauris, a bibendum diam tincidunt congue. Donec vitae ante in
              lorem pellentesque iaculis id quis felis. Fusce consequat massa
              semper nunc aliquam egestas. Mauris purus quam, molestie et
              lacinia eu, consequat sit amet nulla. Sed sit amet odio nisl.
              Donec nec odio condimentum, imperdiet urna sed, ornare eros.
              Curabitur condimentum auctor ante, vitae consectetur erat
              efficitur ut. Sed sed nulla commodo, tincidunt ante ut,
              condimentum sem. Nam in sagittis ipsum. Vestibulum est quam,
              blandit vel sagittis eu, elementum pretium augue. Nunc in
              malesuada turpis, vel egestas sapien. Curabitur imperdiet
              efficitur nisl, ac iaculis orci iaculis non. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Ut vitae condimentum mi.
              Phasellus sollicitudin dolor metus, eu condimentum nunc vehicula
              accumsan. Quisque porttitor venenatis est. Mauris blandit pulvinar
              mi, id interdum sapien.
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
