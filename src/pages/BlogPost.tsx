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
    content: `Protect your belongings during the move with the right insurance coverage. Learn about different types of coverage and what's included:

- Basic carrier liability
- Full value protection
- Third-party insurance options
- How to file a claim if needed.`,
    author: "Insurance Advisor",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Insurance",
  },
  {
    id: "5",
    title: "Seasonal Moving: Best Times to Relocate",
    content: `Timing your move can significantly impact cost and convenience. Discover the best seasons for moving and how to plan accordingly:

- Spring and fall are ideal for mild weather.
- Summer is busiest but convenient for families.
- Winter moves may be cheaper but require extra precautions.`,
    author: "Moving Consultant",
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Planning",
  },
  {
    id: "6",
    title: "International Moving: A Complete Guide",
    content: `Moving abroad involves unique challenges and requirements. Our guide covers everything from documentation to customs clearance:

- Research destination regulations.
- Prepare necessary documents.
- Choose international movers.
- Plan for customs and shipping timelines.`,
    author: "International Team",
    date: "February 15, 2024",
    readTime: "12 min read",
    category: "International",
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
