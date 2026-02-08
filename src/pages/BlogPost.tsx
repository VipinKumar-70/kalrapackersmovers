import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "10 Essential Tips for a Stress-Free Home Move",
    content: `Moving homes can be overwhelming, but with proper planning and the right approach, you can make it a smooth experience. Here are our top tips:

1. Start Early: Begin packing and organizing at least a month before your move.
2. Declutter: Sort out items you no longer need and donate or sell them.
3. Label Boxes: Clearly label each box with its contents and destination room.
4. Pack Essentials Separately: Keep important documents, medications, and daily essentials in a separate bag.
5. Hire Professionals: Consider hiring experienced movers for heavy or valuable items.
6. Protect Fragile Items: Use bubble wrap and sturdy boxes for breakables.
7. Notify Utilities: Inform utility companies about your move in advance.
8. Take Photos: Photograph electronics and furniture setups for easy reassembly.
9. Confirm Details: Double-check moving dates, Address :- 474, Plot, Block-C, Sector 6 Dwarka, Dwarka, New Delhi, Delhi, 110075, and contacts.
10. Stay Calm: Take breaks and ask for help when needed.`,
    author: "Kalra Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Moving Tips",
  },
  {
    id: "2",
    title:
      "How to Choose Your Home According to Vastu Shastra: A Guide for a Prosperous Move",
    content: `Moving to a new home is more than just shifting boxes; it is a transition into a new phase of life. In India, many families rely on Vastu Shastra—the ancient science of architecture—to ensure their new beginning brings health, wealth, and happiness.

At Kalra Packers & Movers, we believe a successful move is not only about safe transportation but also about settling into a home filled with positive energy. If you are house-hunting or planning a move, this guide will help you choose a Vastu-friendly home.

1. The Entrance: Gateway of Energy  
The main entrance is considered the entry point of energy (Prana) into the house.

Best Directions:  
North, North-East, and East-facing entrances are considered highly auspicious and are linked with prosperity and growth.

Directions to Avoid:  
South-West facing entrances are believed to bring instability and financial stress.

Door Placement Tips:  
The door should open clockwise and must be free from obstacles like shoes, dustbins, or clutter to allow smooth energy flow.

2. Kitchen and Bedroom: The Heart of the Home  

Kitchen (Fire Element):  
The kitchen represents the fire element and directly affects health.

Ideal Location:  
South-East corner is best, while North-West can be considered as an alternative.

Cooking Direction:  
The person cooking should face East for better health and positive energy.

Avoid:  
A kitchen placed next to or opposite a toilet should be avoided due to energy imbalance.

Master Bedroom (Earth Element):  
The master bedroom needs stable and grounding energy.

Ideal Location:  
South-West corner promotes peace, leadership, and stability.

Sleeping Direction:  
Sleeping with your head towards the South or East is recommended for deep and restful sleep.

3. Quick Vastu Checklist for Home Buyers  

Main Entrance: North, East, North-East  
Kitchen: South-East (best), North-West (alternative)  
Master Bedroom: South-West  
Toilets: West or North-West  
Living Room: North or East  

4. Vastu Tips for Moving Day  

Declutter Before Packing:  
Remove broken, unused, or unwanted items before packing. This helps avoid carrying negative or stagnant energy into your new home.

Pack Prayer Items First:  
Pack idols, religious books, or sacred items first and place them carefully, preferably towards the North-East direction.

Salt Cleansing Ritual:  
Before placing furniture, mop the floors with water mixed with sea salt. This traditional method helps cleanse the space of negative energy.

Conclusion  
Choosing a Vastu-compliant home builds a strong foundation for a happy and prosperous future. With the right planning and guidance, your move can be both smooth and positive. Kalra Packers & Movers ensures your belongings are relocated safely so you can focus on starting a peaceful new chapter.`,
    author: "Kalra Team",
    date: "March 20, 2024",
    readTime: "6 min read",
    category: "Vastu & Moving Tips",
  },
  {
    id: "3",
    title:
      "How to Place Items According to Vastu: The Art of Positive Arrangement",
    content: `You have successfully moved your boxes into your new home—congratulations! But before you start unpacking randomly, pause for a moment. According to Vastu Shastra, the placement of furniture and household items is just as important as the house itself. The right arrangement can improve health, sleep quality, and financial stability.

At Kalra Packers & Movers, we don’t just move your belongings; we help you settle in the right way. Below is a room-by-room guide to placing heavy furniture and daily-use items to allow positive energy to flow freely.

1. Living Room: Creating Social Harmony  
The living room is where family members gather and guests are welcomed. This space should feel open and balanced.

Heavy Furniture Placement:  
Place sofas and heavy seating against the South or West walls. This provides stability and grounding. Avoid placing heavy furniture in the center of the room or blocking the North and East directions.

Seating Direction:  
Arrange seating so that people face North or East while sitting. This encourages positive conversations and harmony.

TV Unit Placement:  
Place the TV unit in the South-East corner. Avoid the North-East corner, which should remain light and uncluttered.

2. Bedroom: Positioning for Rest and Stability  
The bedroom is a space for relaxation and recovery. Incorrect placement can disturb sleep and peace.

Bed Placement:  
Position the bed in the South-West corner of the room. Ensure there is some space between the bed and the walls for smooth energy circulation.

Sleeping Direction:  
Sleep with your head towards the South or East. Avoid sleeping with your head towards the North, as it may disrupt sleep patterns.

Mirror Placement:  
Avoid mirrors that reflect the bed. This is believed to cause restlessness or health issues. Place mirrors on the North or East walls instead.

3. Kitchen: Managing the Fire Element  
The kitchen represents the fire element (Agni) and directly impacts health and safety.

Stove and Sink Placement:  
Fire and water should not clash. Keep the stove in the South-East area and the sink towards the North-East, with sufficient distance between them.

Refrigerator Placement:  
Place heavy appliances like refrigerators in the South-West direction. Avoid placing them in the North-East area.

4. Quick Placement Cheat Sheet  

Sofa Set: South or West wall  
TV Unit: South-East  
Bed: South-West corner  
Mirror: North or East wall  
Gas Stove: South-East  
Sink: North-East  
Refrigerator: South-West  

5. Handling Negative Items  
Moving is the best time to remove negative or stagnant energy from your life.

Broken Mirrors and Clocks:  
Do not unpack broken mirrors or stopped clocks. These are believed to block progress and should be discarded.

Thorny Plants and Cactus:  
Avoid keeping cactus or thorny plants inside the house. Place them in balconies or gardens instead.

Conclusion  
A home arranged according to Vastu feels calm, balanced, and welcoming. Simple placement changes can create noticeable improvements in daily life. While you focus on creating the perfect atmosphere, Kalra Packers & Movers is always here to handle the heavy lifting for a stress-free new beginning.`,
    author: "Kalra Team",
    date: "March 22, 2024",
    readTime: "6 min read",
    category: "Vastu & Moving Tips",
  },
  {
    id: "4",
    title: "Understanding Moving Insurance: What You Need to Know",
    content: `Moving to a new home is exciting, but protecting your belongings during transit is equally important. At Kalra Packers & Movers, understanding moving insurance is key to a safe, stress-free relocation.

1. What is Moving Insurance?  
Moving insurance is coverage that protects your items from damage, loss, or theft during transit. Standard home insurance often does not cover items in transit. Moving insurance acts as a safety net, ensuring the moving company is accountable and reimburses you if something goes wrong.

2. Types of Moving Insurance Coverage  

- Basic Carrier Liability (Released Value Protection):  
Minimal coverage, usually provided at no extra cost. Compensation is often around ₹0.60 per pound per item, regardless of actual value.

- Full Value Protection (FVP):  
Comprehensive coverage where the mover is responsible for repair, replacement, or cash equivalent of damaged or lost items. Costs typically 1-2% of total belongings value.

- Third-Party Moving Insurance:  
Purchased from independent insurers, covers more perils, including natural disasters. Ideal for high-value or antique items. Premiums range from 1-5% of declared value.

- Storage-in-Transit Insurance:  
Covers belongings temporarily stored before reaching the destination, protecting against damage or theft during storage.

3. What Moving Insurance Covers (and Doesn’t Cover)  
Typically covers: accidental damage during transit, theft, fire, some weather events, and losses handled by movers.  
Exclusions: normal wear and tear, damage to poorly packed items, mysterious disappearance, unlisted inventory items, and fragile items without special packing.

4. Choosing the Right Coverage  

Factor              	Consideration  
Coverage Limits	    Ensure limits meet or exceed the total value of belongings  
High-Value Items	    Declare fragile or expensive items for special coverage  
Policy Details	    Compare exclusions, coverage, and premiums  
Timing	            Purchase insurance before moving; post-move policies are rare

5. Filing a Claim: What to Expect  
Document all damage with photos and notes. Notify Kalra Packers & Movers and your insurer promptly. Complete claim forms with inventory lists and proof of value. The insurer will assess and provide compensation via repair, replacement, or payment.

6. Why Choose Moving Insurance with Kalra Packers & Movers?  
Moving insurance protects items of monetary and sentimental value. Whether local or interstate, insurance ensures financial safety against unexpected damage or loss. Without it, replacing valuable items falls entirely on you.

7. Make an Informed Decision  
Research policies, read exclusions, and confirm coverage requirements like professional packing. Our team can guide you to the best coverage for your move, ensuring peace of mind and a stress-free relocation.`,
    author: "Kalra Team",
    date: "March 25, 2024",
    readTime: "6 min read",
    category: "Moving Tips & Insurance",
  },
  {
    id: "5",
    title: "Seasonal Moving: Choosing the Best Time to Move",
    content: `Seasonal moving matters because weather, traffic, school calendars, and demand can all affect your budget, timeline, and comfort on moving day. For Kalra Packers & Movers customers, choosing the right season can make packing safer, transit smoother, and delivery more predictable.

1. Why Timing Changes Everything  
Peak moving periods mean higher demand for vehicles and labour, which can impact scheduling and costs. Off-peak times offer more flexibility in dates and services. Weather directly affects carton safety, furniture handling, and loading/unloading times, especially for long-distance moves.

2. Summer Moves (April–June)  
Summer is popular due to school schedules and job transitions.  
- Upside: Clear roads, fewer weather delays  
- Downside: Heat stress for crews, higher demand  
- Tip: Book early and plan morning loading for smoother transit

3. Monsoon Moves (July–September)  
Monsoon can offer better date availability but requires extra care for moisture-sensitive items.  
- Protect mattresses, sofas, and electronics  
- Use waterproof wrapping, sealed cartons, and covered loading to prevent dampness

4. Winter & Festive Season Moves (October–February)  
Winter offers milder temperatures, easier handling, and comfort for families and elderly.  
- Be aware of mini “rush” weeks during festivals and year-end office moves  
- Confirm route planning, parking, and society permissions in advance

5. Picking Your Best Time  
Choose the season based on priorities:  
- Speed & predictability: Summer or winter  
- Flexibility: Monsoon  
- Minimal family disruption: School/festival planning

6. Quick Checklist for Seasonal Moves  
- Book your preferred date early, especially weekends and month-end  
- Plan morning loading to avoid traffic delays  
- Keep rain covers/extra wrapping ready for monsoon moves  
- Reserve lifts/parking and confirm society permissions 2–3 days prior  
- Carry valuables/documents personally and label essentials for first-day unpacking

Conclusion  
Planning your move according to the season ensures smoother, safer, and more predictable relocation. With Kalra Packers & Movers, careful preparation and seasonal awareness guarantee your belongings reach your new home securely and stress-free.`,
    author: "Kalra Team",
    date: "March 28, 2024",
    readTime: "5 min read",
    category: "Moving Tips",
  },
  {
    id: "6",
    title: "International Moving: A Complete Guide for Stress-Free Relocation",
    content: `International moving is a major life transition that requires more than just packing boxes. It involves customs regulations, complex logistics, and precise documentation. For Kalra Packers & Movers clients, early planning and understanding international moving requirements ensures a smooth relocation.

1. Documentation & Legal Requirements  
Before packing, secure all necessary paperwork for customs clearance. Every country has specific entry requirements.

Essential Documents:  
Passports, visas, work permits, birth/marriage certificates, medical records.

Customs Paperwork:  
Prepare a detailed packing list and value declaration for all shipped items. Some countries require permits for items like alcohol or plant-based products.

Pet & Vehicle Permits:  
If moving with pets or vehicles, check vaccination and import regulations months in advance.

2. Sorting & Downsizing (The "Ship vs. Store" Decision)  
Shipping costs depend on volume or weight. Reduce load to save money using the "3-pile rule": Keep, Store, Sell/Donate.

Electrical Compatibility:  
Verify appliances will work in the destination country (voltage differences may prevent shipping some items).

Prohibited Items:  
Research restricted items at your destination, such as certain foods, seeds, or medications.

3. The Packing Process  
International transit involves multiple handling stages. Export-grade packing is essential.

Professional Packing:  
Kalra Packers & Movers uses industrial-strength wrapping, bubble wrap, and crating for fragile items to survive long sea or air transit.

Labeling:  
Number each box and list it on the inventory sheet. Avoid vague labels like "Miscellaneous" to prevent customs delays.

4. Timeline for a Smooth Move  

Timeframe	        Key Actions  
8-12 Weeks Out	    Research destination laws, sort belongings, book move dates  
4-6 Weeks Out	    Finalize visas, notify banks, get medical records, pack non-essentials  
1-2 Weeks Out	    Confirm details with Kalra Packers, dispose hazardous materials, pack "first-day" luggage  
Moving Day	        Supervise inventory creation and keep personal travel documents with you

5. Insurance: Don’t Move Without It  
International shipments face higher risks due to distance and multiple handling points. Marine transit insurance is essential to protect against loss, damage, or General Average. Ensure your policy covers door-to-door replacement value.

Conclusion  
Moving abroad can be complex, but with Kalra Packers & Movers handling customs forms, export packing, and logistics, you can focus on starting your new adventure without worrying about your belongings.`,
    author: "Kalra Team",
    date: "March 30, 2024",
    readTime: "6 min read",
    category: "Moving Tips",
  },
  {
    id: "7",
    title: "Master Moving Timeline & Packing Tips for a Stress-Free Move",
    content: `Moving to a new home can feel overwhelming, but with smart organization, it becomes manageable, saving time, reducing stress, and cutting costs. Kalra Packers & Movers recommends starting early and following a structured plan.

1. Create a Master Moving Timeline  
Break your move into phases with clear deadlines. A typical 8-week plan works for most households:

Weeks 8-6: Declutter ruthlessly—sort items into keep, donate, sell, or trash. Book Kalra Packers & Movers and confirm dates.  
Weeks 5-3: Gather supplies (boxes, tape, markers) and pack non-essentials like books, off-season clothes, decor.  
Weeks 2-1: Pack daily-use items last, label boxes clearly, and arrange utilities transfer.  
Moving Week: Final clean, supervise loading, and unpack essentials first.

2. Room-by-Room Packing Strategy  
Tackle one room at a time and color-code boxes by room for easy inventory.

Room | Priority Packing Order | Pro Tips  
Kitchen | Fragile glassware first, then utensils | Wrap dishes in clothing; pack liquids separately  
Bedroom | Off-season clothes, then linens | Disassemble bed frames early; use pillows to protect breakables  
Living Room | Books/decor first, electronics last | Use original boxes for TVs; secure mirrors with cardboard  
Bathroom | Toiletries in Ziplocs | Empty aerosols; pack a "first-night" essentials kit

3. Essential Moving Day Checklist  
- Confirm Kalra Packers arrival time and access (parking, elevator)  
- Have cash ready for tips, water/snacks for the crew, and a dolly for heavy items  
- Walk through with the team to verify inventory before sealing the truck  
- Travel light with valuables, documents, jewelry, and one change of clothes

4. Budget-Smart Packing Hacks  
- Use suitcases, towels, and laundry baskets for packing to save costs  
- Photograph valuables for insurance purposes  
- Disassemble furniture and keep hardware in labeled bags attached to pieces  
- Create an "Open First" box: toilet paper, chargers, coffee maker, sheets, snacks

5. Post-Move Unpacking Plan  
Reverse the packing process for quick settling in. Focus on sleep and kitchen first to feel at home fast.

With Kalra Packers & Movers handling heavy lifting and transport, following this organized prep ensures a seamless move. Contact us today to customize this plan for local or international relocations.`,
    author: "Kalra Team",
    date: "April 1, 2024",
    readTime: "6 min read",
    category: "Moving Tips",
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
        <Link to="/blog">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero text-white py-16 mb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100 text-sm mb-4">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="container mx-auto px-4 pb-20">
        <Card className="max-w-3xl mx-auto bg-gradient-section shadow-card">
          <CardContent className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none text-foreground mb-8 whitespace-pre-line">
                {post.content}
              </div>
              <Link to="/blog">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Button>
              </Link>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
