import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-muted-foreground leading-relaxed">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-16 font-display text-3xl md:text-4xl">{children}</h2>;
}

export default function VisualImpairment() {
  useSeo(
    "Visual Impairment — Nae Nae's Way",
    "Resources, awareness, and support for those living with visual impairment.",
  );
  return (
    <Layout>
      <section className="section">
        <div className="container-narrow max-w-4xl">
          <p className="eyebrow">Our Impact</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Visual Impairment</h1>

          <div className="mt-8 rounded-3xl border-l-4 border-primary bg-surface p-6 md:p-8">
            <p className="text-foreground/90 leading-relaxed italic">
              Visual Impairment became an important disorder for Shonee to support, because just
              a few years ago her father went completely blind. As a result, he is unable to see
              his grandkids and be the uberly active man he was before. Shonee hopes to bring
              more resources to those who are suffering from visual impairment.
            </p>
          </div>

          <H2>Our Most Valuable Sense of the 5 Senses</H2>
          <P>Sight is one of the most important senses that allow human beings to bring the world to life through gained experiences of seeing and experiencing life visually. It is extremely unfortunate for people who struggle on a daily basis with vision problems. One key disorder that has affected nearly 4.2 million Americans is visual impairment. Approximately 12 million people over the age of 40 have suffered from some form of visual impairment, and if you are one of them you know it can change the way you view the world. Visual disability is among the top disabilities among adults and one of the prevalent disabling conditions among children. Nearly 3% of children under the age of 18 live with vision loss and visual impairment even while wearing glasses. What really is this health condition? What causes this disorder among people? And how do people manage to live a quality life with a visual impairment?</P>
          <P>Visual impairment is defined as "lowered vision or a decreased ability to see to a certain degree, in that the problems resulting from the disorder are almost always not fixable by the usual means of glasses or contacts." It is also known as vision loss or vision impairment. There are different types of visual impairment that consists of loss of central vision, loss of peripheral vision, blurred vision, generalized haze, extreme light sensitivity, and night blindness. Common symptoms of visual impairment are constant eye rubbing, chronic eye redness, extreme sensitivity to light, eye squinting, poor focusing, trouble focusing or following moving objects, and the inability to clearly see writing or objects at a distance. Those living with a visual impairment could also experience pain or eye discomfort. Additionally, common symptoms in adults are not limited to a burning sensation in the eyes, eye pain, and the distortion or blurriness of the eyes.</P>
          <P>Young patients may suffer from visual impairment due to a range of causes such as a lazy eye, eye misalignment, birth defects, and eye or brain injuries. Likewise, adults can experience visual impairment due to a variation of causes that include uncorrected refractive errors, cataracts, age-related macular degeneration, glaucoma, diabetic retinopathy, corneal opacity, and trachoma. Other eye disorders, eye injuries, and birth defects can also lead to vision loss.</P>
          <P>Can you imagine what it is like for people to live with this disorder? Many individuals faced with visual impairment encounter many obstacles throughout their life. In some instances, they will lose the ability to complete simple tasks like driving a car or walking down the street. They will be required to rely on assistance from family members, community helpers, or other tools depending on their resources and circumstances. Most children and adults are able to live normal lives, continuing to work, study, and participate in various life activities and celebrations. People with vision loss must adapt to the adjustments required to read, buy food, and live life as others do. It is very important for people with a loss of vision to feel comfortable in their surroundings and find a way to overcome the struggle of not being able to read or see things as they would without their given visual impairment.</P>
          <P>They may require vision tools to adequately see the price of food they want to purchase or signs they need to read to know where to go. Some of these tools are quite handy, like walking sticks or special magnifiers to help these individuals see up close. There are specific kinds of telescopes or table-top magnifiers that also allow people to have a better view of smaller fonts, pictures with detail, or long-distance views. For working individuals struggling with vision impairment, there are new technological devices and programs that give these people the opportunity to effectively maintain a computer-oriented job. With text-to-speech software, they can speak into a microphone and the text will automatically type based on what is spoken. This helps the individual work faster and not be hindered by the small letters on a keyboard. Similarly, there are screen magnifiers that enhance the screen, assisting the visually impaired to look at the computer screen and clearly see as well as complete various tasks.</P>
          <P>Presently, doctors and researchers do not have a cure for visual impairment. However, depending on the severity of vision loss, there is an array of treatment available to people who are visually impaired. Some treatment options for minor vision loss are corrective lenses, minor eye surgery, such as Lasik, to correct vision, eye drops, special light, sunglasses, and magnifying glasses. In addition to magnification systems, if vision loss is caused by glaucoma, the patient will most likely be prescribed medications in the form of eye drops. Open microscopic surgery or laser corrections are an option for glaucoma patients. Cataract surgery is an option performed to replace the damaged and clouded lens. It is not a guarantee to restore the patient's vision. When diabetes leads to visual impairment, the individual must control their diabetes to progress the diabetic retinopathy.</P>
          <P>Access to such medical care and resources is not always an option for patients. The cost of prescription glasses, surgeries, visual aids, and prescription drugs is attained at a high cost. Not all patients have quality insurance that covers optometry visits. Sometimes, there are vision assistance programs for low-income patients. Vision USA, EyeCare America, InfantSEE, and Lions Clubs International are a few organizations that offer assistance to those in need. There are other amazing programs provided by Mission Cataract, Operation Sight, Medicare, Medicaid, New Eyes, and VSP Global's Sight for Students.</P>
          <P>Life for the visually impaired can be hard and the obstacles are challenging to overcome, but there is help out there. One thing for sure is that these people are not alone.{" "}
            <span className="text-foreground italic">Sight is a function of the eyes, but vision is a function of the heart.</span>
          </P>

          <div className="mt-16 flex flex-wrap gap-4">
            <Link to="/donate" className="pill-link">Support This Cause</Link>
            <Link to="/our-impact" className="nav-link">← Back to Our Impact</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
