const SHOW_DATA = [
  {
    showId: 1,
    showName: "Breaking Bad",
    showYear: 2008,
    showImg:
      "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg",
    showGenre: "Crime, Drama, Thriller",
    showCast: "Bryan Cranston, Aaron Paul",
    showSeasonsNum: 5,
    showDescription:
      "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    slug: "breaking-bad",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Pilot",
        episodeDate: "January 20, 2008",
        episodeRanking: "9.0",
        episodeDescription:
          "Diagnosed with terminal lung cancer, chemistry teacher Walter White teams up with former student Jesse Pinkman to cook and sell crystal meth.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Cat's in the Bag...",
        episodeDate: "January 27, 2008",
        episodeRanking: "8.6",
        episodeDescription:
          "After their first drug deal goes terribly wrong, Walt and Jesse are forced to deal with a corpse and a prisoner. Meanwhile, Skyler grows suspicious of Walt's activities.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "...And the Bag's in the River",
        episodeDate: "February 10, 2008",
        episodeRanking: "8.7",
        episodeDescription:
          "Walt and Jesse clean up after the bathtub incident before Walt decides what course of action to take with their prisoner Krazy-8.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Cancer Man",
        episodeDate: "February 17, 2008",
        episodeRanking: "8.2",
        episodeDescription:
          "Walt tells the rest of his family about his cancer. Jesse tries to make amends with his own parents.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Gray Matter",
        episodeDate: "February 24, 2008",
        episodeRanking: "8.3",
        episodeDescription:
          "Walt rejects everyone who tries to help him with the cancer. Jesse tries his best to create Walt's meth, with the help of an old friend.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Crazy Handful of Nothin'",
        episodeDate: "March 2, 2008",
        episodeRanking: "9.3",
        episodeDescription:
          "With the side effects and cost of his treatment mounting, Walt demands that Jesse finds a wholesaler to buy their drugs - which lands him in trouble.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "A No-Rough-Stuff-Type Deal",
        episodeDate: "March 9, 2008",
        episodeRanking: "8.8",
        episodeDescription:
          "Walt and Jesse try to up their game by making more of the crystal every week for Tuco. Unfortunately, some of the ingredients they need are not easy to find. Meanwhile, Skyler realizes that her sister is a shoplifter.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Seven Thirty-Seven",
        episodeDate: "Mar 8, 2009",
        episodeRanking: "8.6",
        episodeDescription:
          "Walt and Jesse realize how dire their situation is. They must come up with a plan to kill Tuco before Tuco kills them first.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Grilled",
        episodeDate: "March 15, 2009",
        episodeRanking: "9.3",
        episodeDescription:
          "Walt's disappearance is met with investigation by both his wife and Hank, as Tuco Salamanca intends to leave town with his kidnapped cooks.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Bit by a Dead Bee",
        episodeDate: "Mar 22, 2009",
        episodeRanking: "8.3",
        episodeDescription:
          "Walt and Jesse try to come up with alibis for their disappearances.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Down",
        episodeDate: "March 20, 2009",
        episodeRanking: "8.2",
        episodeDescription:
          "Skyler keeps mysteriously leaving without talking to Walt. Jesse's parents throw him out of his own house.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Breakage",
        episodeDate: "April 5, 2009",
        episodeRanking: "8.2",
        episodeDescription:
          "Skyler keeps mysteriously leaving without talking to Walt. Jesse's parents throw him out of his own house.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Peekaboo",
        episodeDate: "April 12, 2009",
        episodeRanking: "8.8",
        episodeDescription:
          "After Skinny Pete gets ripped off, Walt makes Jesse go get the money. Meanwhile, Walt's cover story on how Elliott and Gretchen are paying for his medical treatment is on the verge of collapsing.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Negro y Azul",
        episodeDate: "April 19, 2009",
        episodeRanking: "8.6",
        episodeDescription:
          "Rumor is spreading that Jesse killed the man that ripped Skinny Pete off. Walt uses this to his advantage on expanding their territory. Meanwhile, Hank has been promoted to the El Paso office. But it's not all he hoped it would be.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Better Call Saul",
        episodeDate: "April 26, 2009",
        episodeRanking: "9.2",
        episodeDescription:
          "Badger is caught by the DEA. Walt and Jesse hire the best criminal lawyer in town, Saul Goodman.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "4 Days Out",
        episodeDate: "May 3, 2009",
        episodeRanking: "9.1",
        episodeDescription:
          "Walt and Jesse become stranded out in the middle of the desert after cooking more crystal.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Over",
        episodeDate: "May 10, 2009",
        episodeRanking: "8.4",
        episodeDescription:
          "Walt's cancer has greatly improved. Time to celebrate. Meanwhile Jesse tries to meet his new girlfriend's father.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "Mandala",
        episodeDate: "May 17, 2009",
        episodeRanking: "8.9",
        episodeDescription:
          "Walt and Jesse's little empire begins to crumble. Saul tries to set them up with a mysterious distributor.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "Phoenix",
        episodeDate: "May 24, 2009",
        episodeRanking: "9.3",
        episodeDescription:
          "Walt and Skyler have a baby girl. Now that Jesse is hooked on heroin, Walt refuses to give him his money until he gets clean. Meanwhile, as an excuse for his money, Walt decides to donate the money to himself through his son's new website.",
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "ABQ",
        episodeDate: "May 31, 2009",
        episodeRanking: "9.2",
        episodeDescription:
          "Walt's lies have pushed Skyler to her limit. She leaves with the kids. Meanwhile, Jesse blames himself for Jane's death and goes into rehab.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "No Más",
        episodeDate: "March 21, 2010",
        episodeRanking: "8.5",
        episodeDescription:
          "Skyler goes through with her plans to divorce Walt. Jesse finishes rehab.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Caballo sin Nombre",
        episodeDate: "March 28, 2010",
        episodeRanking: "8.6",
        episodeDescription:
          "Walter, Jr. is having a rough time accepting his parents' separation. Jesse buys his old house from his parents. Meanwhile, two mysterious men have come into town looking for Walt.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "I.F.T",
        episodeDate: "April 4, 2010",
        episodeRanking: "8.4",
        episodeDescription:
          "Walt has moved back into the house without Skyler's consent. Now she can't get him out. Meanwhile, Jesse continues to cope with Jane's death.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Green Light",
        episodeDate: "April 11, 2010",
        episodeRanking: "8.2",
        episodeDescription:
          "Walt's world crumbles even more after finding out that Skyler is cheating on him. Jesse tries to set up a meeting with Gus to try and sell his own version of the blue meth. Meanwhile, Hank is growing obsessed with finding Heisenberg.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Más",
        episodeDate: "April 18, 2010",
        episodeRanking: "8.5",
        episodeDescription:
          "Gus tries to get Walt back in the business by offering him three million dollars and a brand new lab. Jesse is furious that Walt received half of the money for his blue meth. Hank tries to track down the RV meth lab.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Sunset",
        episodeDate: "April 25, 2010",
        episodeRanking: "9.3",
        episodeDescription:
          "Heisenberg's organized and practical assistant Gale greatly aids his work in Gus's lab. Hank finally tracks the RV back to Jesse, as a concerned Walt finds any way to erase the evidence.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "One Minute",
        episodeDate: "May 2, 2010",
        episodeRanking: "9.6",
        episodeDescription:
          "Jesse ends up in the hospital after getting beaten up by Hank. Now he is threatening to press charges against the DEA. To stop him, Walt decides to bring Jesse on as his partner, once again.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "I See You",
        episodeDate: "May 9, 2010",
        episodeRanking: "8.7",
        episodeDescription:
          "Hank ends up in the hospital after being attacked by Tuco's cousins. Walt spends too much time by his family's side when he should be cooking meth.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "Kafkaesque",
        episodeDate: "May 16, 2010",
        episodeRanking: "8.4",
        episodeDescription:
          "Skyler hatches a plan as Hank's hospital bills stack up. Meanwhile, Walt and Gus come to a better understanding as Jesse, looking for more independence, pursues a new opportunity.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "Fly",
        episodeDate: "May 23, 2010",
        episodeRanking: "7.9",
        episodeDescription:
          "There is a fly loose in the lab. Walt and Jesse must do whatever they can to kill it before it contaminates the meth.",
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "Abiquiu",
        episodeDate: "May 30, 2010",
        episodeRanking: "8.4",
        episodeDescription:
          "Skyler gets more involved in Walt's business, much to his chagrin, as Hank struggles with his recovery. Meanwhile, Jesse takes an active role in his new enterprise, leading him to a startling discovery.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "Half Measures",
        episodeDate: "June 6, 2010",
        episodeRanking: "9.5",
        episodeDescription:
          "Against Walt's advice, Jesse lashes out. Fearing for Jesse's safety, Walt takes drastic action to intervene. Meanwhile a tragic event leads to a shocking confrontation.",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "Full Measures",
        episodeDate: "June 13, 2010",
        episodeRanking: "9.7",
        episodeDescription:
          "Jesse has disappeared and Walt is in big trouble with Gus. So Gus rehires Gale to learn from Walt's cooking so that they can dispose of Walt once and for all.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "Box Cutter",
        episodeDate: "July 17, 2011",
        episodeRanking: "9.2",
        episodeDescription:
          "Walt and Jesse are held captive by Gus, after Gale's death. Meanwhile, Skyler tries to find out what happened to Walt.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "Thirty-Eight Snub",
        episodeDate: "July 24, 2011",
        episodeRanking: "8.2",
        episodeDescription:
          "Walt attempts to form a new alliance as he plans his next move. Meanwhile Skyler pushes Walt towards a business opportunity, in hopes of protecting the family.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Open House",
        episodeDate: "July 31, 2011",
        episodeRanking: "8.0",
        episodeDescription:
          "While Walt worries about Gus's interference and Jesse's increasingly fragile state of mind, Skyler steps up the pressure to get what she wants.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Bullet Points",
        episodeDate: "August 7, 2011",
        episodeRanking: "8.5",
        episodeDescription:
          "As Skyler concocts an elaborate story to explain the Whites' finances, a worried Walt discovers that Hank has begun a new investigation.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Shotgun",
        episodeDate: "August 14, 2011",
        episodeRanking: "8.6",
        episodeDescription:
          "Jesse rides shotgun with Mike on a perilous run of pickups, prompting Walt to worry that his partner is about to be killed.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Cornered",
        episodeDate: "August 21, 2011",
        episodeRanking: "8.4",
        episodeDescription:
          "Skyler adopts an aloof approach when she suspects that Walt isn't telling her the truth. Meanwhile, Jesse proves his worth to Mike and Gus.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Problem Dog",
        episodeDate: "August 28, 2011",
        episodeRanking: "8.8",
        episodeDescription:
          "Skyler looks to continue her family's trend of appearing poverty-stricken by forcing Walt to return the car he bought. A concerned Walt chauffeurs Hank to Los Pollos Hermanos, and the articulate yet immobile DEA agent collects prints.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "Hermanos",
        episodeDate: "September 4, 2011",
        episodeRanking: "9.3",
        episodeDescription:
          "When Hank produces evidence that Gus is Albuquerque's crystal meth kingpin, Walt worries that he and Jesse will be killed to protect their boss.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "Bug",
        episodeDate: "September 11, 2011",
        episodeRanking: "8.8",
        episodeDescription:
          "While Walt tries to subvert Hank's probe into the Albuquerque meth scene, a deadly warning forces Gus to consider a deal with the cartel.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "Salud",
        episodeDate: "September 18, 2011",
        episodeRanking: "9.6",
        episodeDescription:
          "Jesse, Gus, and Mike fly down to Mexico, and Jesse cooks the blue meth for the cartel. Walt misses his son's 16th birthday after his fight with Jesse.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "Crawl Space",
        episodeDate: "September 25, 2011",
        episodeRanking: "9.7",
        episodeDescription:
          "Hank asks Walt to drive him to the laundry where the meth lab is hidden. Ted still won't pay the IRS so Skyler asks Saul for help, and Saul sends in his A-Team. Gus and Jesse return from Mexico, and Walt fears he is in trouble with Gus.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "End Times",
        episodeDate: "October 2, 2011",
        episodeRanking: "9.5",
        episodeDescription:
          "The DEA is putting Hank and his family in protective custody; however, Walt refuses and awaits his fate in his house. Meanwhile, Brock has fallen terribly ill and Jesse suspects Walt may be behind it.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "Face Off",
        episodeDate: "October 9, 2011",
        episodeRanking: "9.9",
        episodeDescription:
          "Jesse is brought to the FBI for questioning on his knowledge of ricin. In a last effort to kill Gus, Walt must ask for help from an old enemy.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Live Free or Die",
        episodeDate: "July 15, 2012",
        episodeRanking: "9.2",
        episodeDescription:
          "Now that Gus is dead, Walt, Jesse, and Mike work to cover their tracks. Skyler panics when Ted Beneke wakes up.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "Madrigal",
        episodeDate: "July 22, 2012",
        episodeRanking: "8.8",
        episodeDescription:
          "Walt and Jesse seek out an unlikely partner for a new business venture. The DEA follows up new leads in its investigation.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Hazard Pay",
        episodeDate: "July 29, 2012",
        episodeRanking: "8.8",
        episodeDescription:
          "The guys put a business plan into action; Walt confesses to Marie.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "Fifty-One",
        episodeDate: "August 5, 2012",
        episodeRanking: "8.8",
        episodeDescription:
          "It's Walt's 51st birthday. His return to the drug business causes Skyler to go into depression.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "Dead Freight",
        episodeDate: "August 12, 2012",
        episodeRanking: "9.7",
        episodeDescription:
          "Walter White's domestic life continues to deteriorate; at the same time, his growing business venture aims to steal a train car chock full of methylamine.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "Buyout",
        episodeDate: "August 19, 2012",
        episodeRanking: "9.0",
        episodeDescription:
          "In the aftermath of the train heist, Jesse and Mike decide to quit the business, leaving Walt to handle things on his own. Mike is being followed by the DEA.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "Say My Name",
        episodeDate: "August 27, 2012",
        episodeRanking: "9.6",
        episodeDescription:
          "Mike and Jesse are out. Now Walt has to handle things on his own. Hank finally finds a rat in Mike's gang.",
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "Gliding Over All",
        episodeDate: "September 2, 2012",
        episodeRanking: "9.6",
        episodeDescription:
          "Walt expands his business overseas, and the money is pouring in.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "Blood Money",
        episodeDate: "August 11, 2013",
        episodeRanking: "9.4",
        episodeDescription:
          "Walt is out of the meth business and trying to move on with his life. Jesse tries to get rid of his money. Hank now knows that Walt is the famous Heisenberg.",
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "Buried",
        episodeDate: "August 18, 2013",
        episodeRanking: "9.2",
        episodeDescription:
          "Hank is determined to bring down Walt. Walt scrambles to hide evidence before Hank gets to it, and Skyler tries to stop Hank and Marie from taking away the kids.",
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "Confessions",
        episodeDate: "August 25, 2013",
        episodeRanking: "9.6",
        episodeDescription:
          "Walt makes his next move against Hank, putting Hank in a tough position. Hank confronts Jesse and attempts to turn him against Walt, and Jesse decides it's time to move on. Meanwhile, Todd has taken over the business.",
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "Rabid Dog",
        episodeDate: "September 1, 2013",
        episodeRanking: "9.1",
        episodeDescription:
          "Walt discovers Jesse broke into his house and attempted to burn it down. Walt wants to protect his family so he moves them into a hotel for a few nights. Jesse makes plans to take down Walt.",
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "To'hajiilee",
        episodeDate: "September 8, 2013",
        episodeRanking: "9.8",
        episodeDescription:
          "Jesse and Hank come up with an idea to take Walt down. Walt hires Todd's uncle to kill Jesse.",
      },
      {
        episodeSeason: 5,
        episodeNum: 14,
        episodeName: "Ozymandias",
        episodeDate: "September 15, 2013",
        episodeRanking: "10",
        episodeDescription:
          "Walt goes on the run. Jesse is taken hostage. Marie forces Skyler to tell Walter, Jr. the truth.",
      },
      {
        episodeSeason: 5,
        episodeNum: 15,
        episodeName: "Granite State",
        episodeDate: "September 22, 2013",
        episodeRanking: "9.7",
        episodeDescription:
          "Walt struggles as he adapts to aspects of his new identity. Jesse plans an escape against Jack and his crew.",
      },
      {
        episodeSeason: 5,
        episodeNum: 16,
        episodeName: "Felina",
        episodeDate: "September 29, 2013",
        episodeRanking: "9.9",
        episodeDescription:
          "Walter White returns to Albuquerque one last time to secure his family's future and settle old scores.",
      },
    ],
  },
  {
    showId: 2,
    showName: "The Office",
    showYear: 2005,
    showImg:
      "https://m.media-amazon.com/images/I/71BjvIVRnwL._AC_UF894,1000_QL80_.jpg",
    showGenre: "Comedy",
    showCast: "Steve Carell, John Krasinski",
    showSeasonsNum: 9,
    showDescription:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    slug: "the-office",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Pilot",
        episodeDate: "March 24, 2005",
        episodeRanking: 7.5,
        episodeDescription:
          "The premiere episode introduces the boss and staff of the Dunder-Mifflin Paper Company in Scranton, Pennsylvania in a documentary about the workplace.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Diversity Day",
        episodeDate: "March 29, 2005",
        episodeRanking: 8.3,
        episodeDescription:
          "Michael's off color remark puts a sensitivity trainer in the office for a presentation, which prompts Michael to create his own.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Health Care",
        episodeDate: "April 5, 2005",
        episodeRanking: 7.8,
        episodeDescription:
          "Michael leaves Dwight in charge of picking the new healthcare plan for the staff, with disastrous results ahead.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "The Alliance",
        episodeDate: "April 12, 2005",
        episodeRanking: 8.1,
        episodeDescription:
          "Just for a laugh, Jim agrees to an alliance with Dwight regarding the downsizing rumors.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Basketball",
        episodeDate: "April 19, 2005",
        episodeRanking: 8.4,
        episodeDescription:
          "Michael and his staff challenge the warehouse workers to a basketball game with a bet looming over both parties.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Hot Girl",
        episodeDate: "April 26, 2005",
        episodeRanking: 7.7,
        episodeDescription:
          "Michael is just one of the many male staff who start vying for the attention of an attractive saleswoman in the office.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "The Dundies",
        episodeDate: "September 20, 2005",
        episodeRanking: 8.7,
        episodeDescription:
          "Very much unlike his staff, an overeager Michael can't wait for this year's annual Dundies awards.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Sexual Harassment",
        episodeDate: "September 27, 2005",
        episodeRanking: 8.2,
        episodeDescription:
          "The office reviews its sexual harassment policy in light of explicit e-mails.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Office Olympics",
        episodeDate: "October 4, 2005",
        episodeRanking: 8.4,
        episodeDescription:
          "Ready to finalize his deal for a new condo, Michael is away with Dwight while Jim rallies the staff together for office games.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "The Fire",
        episodeDate: "October 11, 2005",
        episodeRanking: 8.4,
        episodeDescription:
          "A fire in the kitchen relegates the staff to the parking lot as help is on its way.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Halloween",
        episodeDate: "October 18, 2005",
        episodeRanking: 8.1,
        episodeDescription:
          "Michael is pressured by corporate to fire someone, which puts a damper on the office Halloween party.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "The Fight",
        episodeDate: "November 1, 2005",
        episodeRanking: 8.1,
        episodeDescription:
          "Jim rallies the staff together to witness a showdown between Michael and Dwight at Dwight's martial arts school.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "The Client",
        episodeDate: "November 8, 2005",
        episodeRanking: 8.6,
        episodeDescription:
          "With Michael and Jan Levinson-Gould away from the office to land a new client, the staff discovers an unproduced screenplay in Michael's office.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Performance Review",
        episodeDate: "November 15, 2005",
        episodeRanking: 8.2,
        episodeDescription:
          'Instead of talking to his employees about their work, Michael uses their annual review time to gather feedback on his "relationship" with Jan.',
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "E-Mail Surveillance",
        episodeDate: "November 22, 2005",
        episodeRanking: 8.4,
        episodeDescription:
          "Michael decides to set up e-mail surveillance for all company e-mail, and discovers that Jim has invited everyone over for a barbeque except him.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Christmas Party",
        episodeDate: "December 6, 2005",
        episodeRanking: 8.9,
        episodeDescription:
          "Seeing the party is headed for disastrous boredom, Michael breaks corporate policy to buy alcohol for the staff.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "Booze Cruise",
        episodeDate: "January 5, 2006",
        episodeRanking: 8.6,
        episodeDescription:
          'The Dunder Mifflin staff go on a mandatory "booze cruise" to hear Michael give a motivational talk.',
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "The Injury",
        episodeDate: "January 12, 2006",
        episodeRanking: 9.1,
        episodeDescription:
          'Michael\'s "injury" from a George Foreman Grill distracts the staff from Dwight, the one with the real injury.',
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "The Secret",
        episodeDate: "January 19, 2006",
        episodeRanking: 8.3,
        episodeDescription:
          "Jim fears the secret he told to Michael, in confidence, will be revealed to the staff.",
      },
      {
        episodeSeason: 2,
        episodeNum: 14,
        episodeName: "The Carpet",
        episodeDate: "January 26, 2006",
        episodeRanking: 7.8,
        episodeDescription:
          "Michael's office becomes the victim of an odorous prank which subjects the office to his punishment.",
      },
      {
        episodeSeason: 2,
        episodeNum: 15,
        episodeName: "Boys and Girls",
        episodeDate: "February 2, 2006",
        episodeRanking: 8.2,
        episodeDescription:
          "Jan comes into the Scranton Branch to give all the female employees a group seminar on women in the workplace. Upset that he is not allowed in on the proceedings, Michael takes all the men of Dunder Mifflin down into the warehouse for some 'guy time' with the warehouse workers. Pam is offered a chance to pursue her dreams of drawing and Roy confronts Jim about his feelings for Pam.",
      },
      {
        episodeSeason: 2,
        episodeNum: 16,
        episodeName: "Valentine's Day",
        episodeDate: "February 9, 2006",
        episodeRanking: 8.3,
        episodeDescription:
          "When Michael visits Dunder Mifflin corporate headquarters in New York on Valentine's Day, he and Jan are both in for a surprise. Meanwhile, back in Scranton, the office staff celebrates Valentine's Day grade school style.",
      },
      {
        episodeSeason: 2,
        episodeNum: 17,
        episodeName: "Dwight's Speech",
        episodeDate: "March 2, 2006",
        episodeRanking: 8.5,
        episodeDescription:
          "Michael coaches pompous Dwight on the finer art of public speaking after being named as Salesman of the Year.",
      },
      {
        episodeSeason: 2,
        episodeNum: 18,
        episodeName: "Take Your Daughter to Work Day",
        episodeDate: "March 16, 2006",
        episodeRanking: 8.3,
        episodeDescription:
          "A routine office day is changed when children come to Dunder Mifflin for 'Take Your Daughter to Work Day.' Michael is surprised when he strikes up a friendship with the five-year old daughter of his sworn enemy, Toby. Pam is desperate to befriend her colleagues' offspring and a misunderstanding puts Ryan under Stanley's thumb.",
      },
      {
        episodeSeason: 2,
        episodeNum: 19,
        episodeName: "Michael's Birthday",
        episodeDate: "March 30, 2006",
        episodeRanking: 8.1,
        episodeDescription:
          "In celebration of his birthday, Michael makes a mandatory invite of the staff during the workday to go ice skating.",
      },
      {
        episodeSeason: 2,
        episodeNum: 20,
        episodeName: "Drug Testing",
        episodeDate: "April 27, 2006",
        episodeRanking: 8.4,
        episodeDescription:
          "Dwight plays the role of Volunteer Sheriff after finding half a joint in the Dunder Mifflin parking lot leading to an investigation. Pam gives Jim a play challenge which he tries to complete.",
      },
      {
        episodeSeason: 2,
        episodeNum: 21,
        episodeName: "Conflict Resolution",
        episodeDate: "May 4, 2006",
        episodeRanking: 8.7,
        episodeDescription:
          "When Michael takes over conflict resolution duties from HR, chaos ensues at Dunder Mifflin.",
      },
      {
        episodeSeason: 2,
        episodeNum: 22,
        episodeName: "Casino Night",
        episodeDate: "May 11, 2006",
        episodeRanking: 9.4,
        episodeDescription:
          "The Dunder Mifflin crew holds a casino party at the warehouse and Michael has two dates.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Gay Witch Hunt",
        episodeDate: "September 21, 2006",
        episodeRanking: 9,
        episodeDescription:
          "Michael apologizes to Oscar, after he finds out he's gay, for calling him a homosexual slur--but his apology outs Oscar to the entire office. And Jim decides to take a promotion at the Stamford office.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "The Convention",
        episodeDate: "September 28, 2006",
        episodeRanking: 8.2,
        episodeDescription:
          "Michael and Dwight go to a convention in Philadelphia and run into Jim, and Michael becomes jealous of Jim's relationship with his new boss. Meanwhile, Pam gets ready for her first date since her engagement.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "The Coup",
        episodeDate: "October 5, 2006",
        episodeRanking: 8.5,
        episodeDescription:
          "Michael is in trouble once again as Jan busts him for declaring it's \"Movie Monday\" where everyone watches a movie and neglects work. Angela pushes Dwight to make a move on Michael's job while Pam and Jim find creative ways to waste time.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Grief Counseling",
        episodeDate: "October 12, 2006",
        episodeRanking: 8,
        episodeDescription:
          "Michael takes on the role of office grief counselor when he learns that his old boss has died.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Initiation",
        episodeDate: "October 19, 2006",
        episodeRanking: 8.1,
        episodeDescription:
          "Dwight takes former temp Ryan to his beet farm to initiate Ryan to his new job at Dunder Mifflin.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Diwali",
        episodeDate: "November 2, 2006",
        episodeRanking: 7.9,
        episodeDescription:
          "Michael encourages the entire Scranton branch to support Kelly and attend a local celebration of Diwali, the Hindu Festival of Lights. Meanwhile, Andy convinces Jim to turn a late night of work into a drinking game.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "Branch Closing",
        episodeDate: "November 9, 2006",
        episodeRanking: 8.6,
        episodeDescription:
          "When Jan tells Michael that the Scranton Branch will be shutting down, Michael strives to keep his staff's spirits up. Meanwhile, everyone privately begins to envision how their lives will change in the aftermath.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "The Merger",
        episodeDate: "November 16, 2006",
        episodeRanking: 8.7,
        episodeDescription:
          "Jan informs Michael that the Scanton branch of Dunder Mifflin will be merging with the Stamford Branch. Jim and Pam are reunited while the other employees of both branches must adjust to their new co-workers.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "The Convict",
        episodeDate: "November 30, 2006",
        episodeRanking: 8.3,
        episodeDescription:
          "Michael learns that one of the new employees at Dunder Mifflin Scranton has a criminal record. Meanwhile, Jim helps Andy make a move on Pam.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "A Benihana Christmas",
        episodeDate: "December 14, 2006",
        episodeRanking: 8.8,
        episodeDescription:
          "Trouble among the members of the party planning committee results with Pam and Karen hosting a rival Christmas party, but Michael isn't interested in celebrating after being dumped by Carol.",
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "Back from Vacation",
        episodeDate: "January 4, 2007",
        episodeRanking: 8.5,
        episodeDescription:
          "Michael isn't supposed to let anyone know that he and Jan went on vacation together in Jamaica, but he accidentally circulates a compromising photo of them to the office via e-mail.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "Traveling Salesmen",
        episodeDate: "January 11, 2007",
        episodeRanking: 8.6,
        episodeDescription:
          "Dwight does a favor for Angela to keep her from getting in trouble. Andy finds out and uses it against him to get in tighter with Michael. Now Dwight must fess up, which will reveal his relationship with Angela, or risk getting fired.",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "The Return",
        episodeDate: "January 18, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "Andy does the impossible--he makes everyone in the office miss Dwight, who is forced to take a job at Staples. Meanwhile, Oscar comes back to the office and Michael predictably throws a stereotypical Mexican party to celebrate.",
      },
      {
        episodeSeason: 3,
        episodeNum: 14,
        episodeName: "Ben Franklin",
        episodeDate: "February 1, 2007",
        episodeRanking: 8.1,
        episodeDescription:
          "Michael asks Jim to get a male stripper for Phyllis's office bachelorette party, but he gets a Ben Franklin impersonator instead. Meanwhile, the men's bachelor party goes as planned until Michael becomes uncomfortable with the stripper.",
      },
      {
        episodeSeason: 3,
        episodeNum: 15,
        episodeName: "Phyllis' Wedding",
        episodeDate: "February 8, 2007",
        episodeRanking: 8.2,
        episodeDescription:
          "Michael exaggerates the importance of his small role in Phyllis's wedding and makes an ass out of himself, and Pam notices that Phyllis stole all of her wedding ideas from her original wedding plans.",
      },
      {
        episodeSeason: 3,
        episodeNum: 16,
        episodeName: "Business School",
        episodeDate: "February 15, 2007",
        episodeRanking: 8.9,
        episodeDescription:
          "Michael is a guest speaker for Ryan's business class, but they have a falling-out after Michael finds out that Ryan spoke negatively about Dunder-Mifflin. And back at the office, Dwight tries to kill a bat that he found in the ceiling.",
      },
      {
        episodeSeason: 3,
        episodeNum: 17,
        episodeName: "Cocktails",
        episodeDate: "February 22, 2007",
        episodeRanking: 8.5,
        episodeDescription:
          "While Michael and Jan go to their first Dunder Mifflin outing as an official couple, the office workers left behind go out for happy hour. During happy hour, Roy finds out that Jim and Pam kissed at Casino Night.",
      },
      {
        episodeSeason: 3,
        episodeNum: 18,
        episodeName: "The Negotiation",
        episodeDate: "April 5, 2007",
        episodeRanking: 9,
        episodeDescription:
          "Dwight saves Jim from an attack by Roy, but Dwight won't allow Jim to thank him for it. Meanwhile, Darryl asks Michael for a pay raise, and Michael discovers that he is woefully underpaid--so Michael goes to headquarters to ask for one himself.",
      },
      {
        episodeSeason: 3,
        episodeNum: 19,
        episodeName: "Safety Training",
        episodeDate: "April 12, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "Andy returns to the office after weeks of anger management training, determined to make a fresh start with all the Dunder-Mifflin employees. Meanwhile, it's safety training day in the office, and Michael and Dwight are on a mission to illuminate the dangers of the workplace.",
      },
      {
        episodeSeason: 3,
        episodeNum: 20,
        episodeName: "Product Recall",
        episodeDate: "April 26, 2007",
        episodeRanking: 8.7,
        episodeDescription:
          "Michael tries to be proactive during a watermark crisis, but only makes the situation worse. Meanwhile, Angela has trouble being apologetic with customers, and Andy discovers a secret about his new girlfriend.",
      },
      {
        episodeSeason: 3,
        episodeNum: 21,
        episodeName: "Women's Appreciation",
        episodeDate: "May 3, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "Phyllis gets flashed in the parking lot, and Dwight goes all out to secure the premises. Michael ostensibly takes the women in the office to the mall to comfort them, but he's really doing it to get advice about breaking up with Jan.",
      },
      {
        episodeSeason: 3,
        episodeNum: 22,
        episodeName: "Beach Games",
        episodeDate: "May 10, 2007",
        episodeRanking: 9.2,
        episodeDescription:
          'Michael uses "beach day" at Dunder-Mifflin to find out which employee would be his most capable replacement, just in case he receives the promotion to the New York office that he\'s applied for.',
      },
      {
        episodeSeason: 3,
        episodeNum: 23,
        episodeName: "The Job",
        episodeDate: "May 17, 2007",
        episodeRanking: 9.3,
        episodeDescription:
          "Michael appoints Dwight as regional manager, anticipating that he will receive the job at corporate. Jim and Karen also interview for the same position. And Michael gets back together with Jan after she gets a boob job.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "Fun Run",
        episodeDate: "September 27, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "Michael accidentally runs over Meridith in the parking lot, and his guilt causes him to organize a 5-K run for her. Dwight and Angela have a falling-out after he kills her cat, and Jim and Pam's relationship is discovered.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "Dunder Mifflin Infinity",
        episodeDate: "October 4, 2007",
        episodeRanking: 8.3,
        episodeDescription:
          "Michael feels threatened when Ryan returns to the Scranton office to share his ideas about the future of Dunder Mifflin. Jim and Pam's relationship is shared with the entire office, while Angela and Dwight's relationship is on the rocks.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Launch Party",
        episodeDate: "October 11, 2007",
        episodeRanking: 8.4,
        episodeDescription:
          "The Dunder Mifflin Infinity website is launching and Michael is excited about going to the big launch party in New York while Angela plans a satellite party for the Scranton branch. Meanwhile, Dwight competes against the website to see who can sell the most paper in one day.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Money",
        episodeDate: "October 18, 2007",
        episodeRanking: 8.7,
        episodeDescription:
          "As Jan renovates the condo, Michael confronts his growing debt every way he can, which includes pressuring his employees for a loan. Pam and Jim spend a night out on Dwight's family beet farm, now a bed and breakfast.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Local Ad",
        episodeDate: "October 25, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "Michael tries to make a local Dunder Mifflin commercial that is better than the one the professional ad agency made for them. Meanwhile, Andy tries to confide in Dwight about his new relationship with Angela.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Branch Wars",
        episodeDate: "November 1, 2007",
        episodeRanking: 8.5,
        episodeDescription:
          "Michael and Dwight try to play a prank on Karen, who is now manager of the Utica branch, after she tries to steal Stanley from the Scranton office. Meanwhile, Pam, Toby, and Oscar start their own exclusive office book club.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Survivor Man",
        episodeDate: "November 8, 2007",
        episodeRanking: 8.2,
        episodeDescription:
          "After Michael isn't invited to a camping trip with Ryan, he sets out to prove that he can brave it out in the wilderness by himself. Jim, who is in charge of the office while Michael is gone, tries to change the birthday party policy.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "The Deposition",
        episodeDate: "November 15, 2007",
        episodeRanking: 8.7,
        episodeDescription:
          "Michael is put in an awkward position when Jan sues Dunder Mifflin for wrongful termination and he is deposed as a witness. Meanwhile, Kelly begins smack-talking Pam after Darryl beats Jim at Ping-Pong.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "Dinner Party",
        episodeDate: "April 10, 2008",
        episodeRanking: 9.5,
        episodeDescription:
          "Michael invites Jim and Pam and Andy and Angela to a couples-only dinner party, which makes Dwight very jealous. However, the only thing he's missing is a ringside seat to witness Michael and Jan's extremely dysfunctional home life.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "Chair Model",
        episodeDate: "April 17, 2008",
        episodeRanking: 8,
        episodeDescription:
          "Kevin and Andy team up to reclaim the stolen Dunder Mifflin parking spaces, which forces them into a showdown with the other four bosses of the office park. Meanwhile, Michael becomes fascinated by a woman modeling chairs in a catalog.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "Night Out",
        episodeDate: "April 24, 2008",
        episodeRanking: 8.6,
        episodeDescription:
          "Michael and Dwight go to New York to party with Ryan, who is having lots of personal and professional problems. The rest of the office employees work late, and wind up getting locked in the business park.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "Did I Stutter?",
        episodeDate: "May 1, 2008",
        episodeRanking: 8.3,
        episodeDescription:
          "Michael tries to figure out how to respond to Stanley's insubordination during a meeting, and Dwight buys Andy's vehicle and immediately flips it for more money.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "Job Fair",
        episodeDate: "May 8, 2008",
        episodeRanking: 7.8,
        episodeDescription:
          "Dunder-Mifflin participates in a high school job fair, but few students are interested. Jim, Andy, and Kevin play a round of golf with a prospective client. Back at the office, everyone but Dwight and Angela leave for the day.",
      },
      {
        episodeSeason: 4,
        episodeNum: 14,
        episodeName: "Goodbye, Toby",
        episodeDate: "May 15, 2008",
        episodeRanking: 9.3,
        episodeDescription:
          "Michael throws an extravagant going-away party for Toby, and falls in love with the woman who is replacing him. Jim plans to propose to Pam at the party, but gets out-staged. Back at corporate, Ryan is arrested for fraud.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Weight Loss",
        episodeDate: "September 25, 2008",
        episodeRanking: 8.8,
        episodeDescription:
          "Michael tries to motivate the Scranton branch to lose weight as part of an interoffice competition. Jim is lost after Pam leaves for art school in New York, and Angela continues to see Dwight even though she is now engaged to Andy.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "Business Ethics",
        episodeDate: "October 9, 2008",
        episodeRanking: 8.3,
        episodeDescription:
          "A confession at an H.R. business ethics seminar leads to a dispute between Michael and Holly over whether Meredith should be fired. Dwight tries to prove to Jim how long he can go without taking a personal break.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Baby Shower",
        episodeDate: "October 16, 2008",
        episodeRanking: 8,
        episodeDescription:
          "After planning an office baby shower for Jan, Michael is upset when he finds out that she had the baby without him--even though he's already been told that he's not the baby's father.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "Crime Aid",
        episodeDate: "October 23, 2008",
        episodeRanking: 8.1,
        episodeDescription:
          "Michael and Holly have sex for the first time, and Michael holds a fundraiser for the office after it is burglarized. Dwight confides in Phyllis after Andy and Angela set a wedding date, and Jim runs into Pam's ex-fiancé, Roy.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "Employee Transfer",
        episodeDate: "October 30, 2008",
        episodeRanking: 8,
        episodeDescription:
          "Holly is transferred back to New Hampshire after corporate discovers that she and Michael are dating. Dwight tries to apply to Cornell to get under Andy's skin. Jim's brothers and Pam decide to play a trick on Jim when they meet for lunch.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "Customer Survey",
        episodeDate: "November 6, 2008",
        episodeRanking: 8.5,
        episodeDescription:
          "Dwight and Jim believe that something is suspicious about their low customer performance ratings. After consulting with Angela, Andy finds the perfect site for their wedding--Dwight's beet farm.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "Business Trip",
        episodeDate: "November 13, 2008",
        episodeRanking: 8.2,
        episodeDescription:
          "David Wallace sends Michael on a business trip to Winnipeg to help him forget about Holly's transfer to Nashua, and Pam tells Jim that she failed a class and has to stay in New York City.",
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "Frame Toby",
        episodeDate: "November 20, 2008",
        episodeRanking: 8.6,
        episodeDescription:
          "When Michael discovers that corporate has brought back Toby to replace Holly, he tries to frame him with drugs and to get him fired. Meanwhile, Pam has issues with the disgusting microwave. Finally, Jim surprises Pam by buying his parents' house.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "The Surplus",
        episodeDate: "December 4, 2008",
        episodeRanking: 8.8,
        episodeDescription:
          "Michael has to spend the office surplus by they end of the day, but he can't decide between a copier or new chairs. Dwight plays a dirty trick on Angela as they prepare for Andy and Angela's wedding on the beet farm.",
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "Moroccan Christmas",
        episodeDate: "December 11, 2008",
        episodeRanking: 8.4,
        episodeDescription:
          "Phyllis blackmails Angela into doing the work for the Christmas party, which Michael turns into an intervention after Meredith gets drunk and sets her hair on fire. Meanwhile, Dwight corners the market on a popular Christmas gift.",
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "The Duel",
        episodeDate: "January 15, 2009",
        episodeRanking: 8.7,
        episodeDescription:
          "Moments before he leaves for New York for a meeting with David Wallace, Michael tells Andy that Angela and Dwight are seeing each other. Andy and Dwight then decide to have it out in the parking lot.",
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "Prince Family Paper",
        episodeDate: "January 22, 2009",
        episodeRanking: 8,
        episodeDescription:
          "Michael's conscience gets the best of him after he and Dwight go undercover to scout a family-run competitor. Back at the office, everyone else spends the day debating whether Hilary Swank is hot.",
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "Stress Relief",
        episodeDate: "February 1, 2009",
        episodeRanking: 9.7,
        episodeDescription:
          "Dwight's too-realistic fire alarm gives Stanley a heart attack. When he returns, Michael learns that he is the cause of Stanley's stress. To remedy the situation, he forces the office to throw a roast for him.",
      },
      {
        episodeSeason: 5,
        episodeNum: 14,
        episodeName: "Lecture Circuit: Part 1",
        episodeDate: "February 5, 2009",
        episodeRanking: 8.2,
        episodeDescription:
          "While on lecture tour to other Dunder Mifflin branches, Michael and Pam discover that Jim's ex-girlfriend Karen is pregnant. At the office, Andy falls for a prospective client, and Jim and Dwight try to set up Kelly's birthday party.",
      },
      {
        episodeSeason: 5,
        episodeNum: 15,
        episodeName: "Lecture Circuit: Part 2",
        episodeDate: "February 12, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "Michael and Pam go to Nashua and discover that Holly has a new boyfriend. At the office, Jim and Dwight try to come up with a theme for Kelly's birthday party, and Angela gets a new cat.",
      },
      {
        episodeSeason: 5,
        episodeNum: 16,
        episodeName: "Blood Drive",
        episodeDate: "March 5, 2009",
        episodeRanking: 8,
        episodeDescription:
          "Michael holds a lonely hearts party on Valentine's Day at the office, hoping that he will run into a woman he met earlier that day at a blood drive. Meanwhile, Jim and Pam have an awkward lunch with Phillis and Bob Vance.",
      },
      {
        episodeSeason: 5,
        episodeNum: 17,
        episodeName: "Golden Ticket",
        episodeDate: "March 12, 2009",
        episodeRanking: 8.7,
        episodeDescription:
          "Michael asks Dwight to be the scapegoat for one of his business ideas that backfired badly on him. But when that idea has an unexpected positive upside, Dwight still takes credit and Michael becomes furious.",
      },
      {
        episodeSeason: 5,
        episodeNum: 18,
        episodeName: "New Boss",
        episodeDate: "March 19, 2009",
        episodeRanking: 8.3,
        episodeDescription:
          "Michael gets upset when he gets a new boss to act as a buffer between him and David Wallace, and he gets even more upset when he disbands the Party Planning Committee and cancels Michael's fifteenth anniversary party.",
      },
      {
        episodeSeason: 5,
        episodeNum: 19,
        episodeName: "Two Weeks",
        episodeDate: "March 26, 2009",
        episodeRanking: 8.4,
        episodeDescription:
          "As Michael prepares to leave Dunder Mifflin, he announces that he will form his own paper company. Will anybody join him?",
      },
      {
        episodeSeason: 5,
        episodeNum: 20,
        episodeName: "Dream Team",
        episodeDate: "April 9, 2009",
        episodeRanking: 8.3,
        episodeDescription:
          "Michael and Pam begin their first day as the Michael Scott Paper Company putting together the rest of the staff and trying to raise money.",
      },
      {
        episodeSeason: 5,
        episodeNum: 21,
        episodeName: "Michael Scott Paper Company",
        episodeDate: "April 9, 2009",
        episodeRanking: 8.7,
        episodeDescription:
          'Tension and disillusionment begin to emerge as Michael, Pam, and Ryan move the Michael Scott Paper Company into a cramped "workspace" at the business park.',
      },
      {
        episodeSeason: 5,
        episodeNum: 22,
        episodeName: "Heavy Competition",
        episodeDate: "April 16, 2009",
        episodeRanking: 8.7,
        episodeDescription:
          "Dwight chooses loyalty to Dunder Mifflin over loyalty to Michael, which leads to a bitter battle between Michael and Dwight over Dwight's accounts. Back at Dunder Mifflin, Jim pretends to confide in Andy.",
      },
      {
        episodeSeason: 5,
        episodeNum: 23,
        episodeName: "Broke",
        episodeDate: "April 23, 2009",
        episodeRanking: 9.2,
        episodeDescription:
          "The Michael Scott Paper Company is gaining clients by offering lower prices than Dunder Mifflin, but is going broke in the process. However, Dunder Mifflin is losing clients to Michael, and is desperate to buy him out.",
      },
      {
        episodeSeason: 5,
        episodeNum: 24,
        episodeName: "Casual Friday",
        episodeDate: "April 30, 2009",
        episodeRanking: 8.3,
        episodeDescription:
          "Michael returns to Dunder Mifflin and brings Ryan and Pam in as salespeople, but the existing salespeople demand that Michael return the clients they stole back to them. Meanwhile, some employees take the idea of Casual Friday too far.",
      },
      {
        episodeSeason: 5,
        episodeNum: 25,
        episodeName: "Cafe Disco",
        episodeDate: "May 7, 2009",
        episodeRanking: 8.7,
        episodeDescription:
          "Michael tries to create a place to escape from work in the storage room that used to house the Michael Scott Paper Company, while Jim and Pam consider taking off and getting married that day.",
      },
      {
        episodeSeason: 5,
        episodeNum: 26,
        episodeName: "Company Picnic",
        episodeDate: "May 14, 2009",
        episodeRanking: 9,
        episodeDescription:
          "Michael runs into Holly at the company picnic, and the two of them accidentally reveal that the Buffalo branch is closing during a comedy skit before corporate has made the announcement.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "Gossip",
        episodeDate: "September 17, 2009",
        episodeRanking: 8.8,
        episodeDescription:
          "Michael regrets revealing that Stanley is having an affair, so he spreads a bunch of lies about everyone else to cover his tracks--except that one of the lies that he spread actually turns out to be true.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "The Meeting",
        episodeDate: "September 24, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "Michael sabotages--then promotes--Jim's efforts at getting a promotion, while Dwight and Toby try to prove that Darryl has submitted a fraudulent medical claim.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "The Promotion",
        episodeDate: "October 1, 2009",
        episodeRanking: 8,
        episodeDescription:
          "Jim discovers just how hard being the boss can be when David Wallace forces Michael and him to determine which employees will be getting a raise.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Niagara: Part 1",
        episodeDate: "October 8, 2009",
        episodeRanking: 9.4,
        episodeDescription:
          "The Office travels to Niagara Falls to celebrate Jim and Pam's wedding under strict orders not to mention Pam's pregnancy. Michael, Dwight, and Andy all want to hook up with guests at the wedding and Michael and Dwight meet twins.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "Niagara: Part 2",
        episodeDate: "October 8, 2009",
        episodeRanking: 9.4,
        episodeDescription:
          "Pam is forced to deal with an embarrassing injury for Andy the night before her wedding, while Kevin deals with the loss of his dress shoes on the morning of the ceremony.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "Mafia",
        episodeDate: "October 15, 2009",
        episodeRanking: 7.6,
        episodeDescription:
          "Michael meets with an insurance salesman that visits the office and is later convinced by Dwight and Andy that he is part of the mafia.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "The Lover",
        episodeDate: "October 22, 2009",
        episodeRanking: 8.6,
        episodeDescription:
          'Jim and Pam return from their honeymoon and learn, to their horror, that Michael is dating Pam\'s mom. Meanwhile, Dwight gives Jim a "gift"--which actually has a listening device attached to it.',
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "Koi Pond",
        episodeDate: "October 29, 2009",
        episodeRanking: 8.2,
        episodeDescription:
          "Michael is upset when he becomes the butt of all the office jokes after he falls in a koi pond. Andy and Pam go out together on some cold calls, and everybody mistakes them as a married couple.",
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "Double Date",
        episodeDate: "November 5, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "Michael sparks more anger from Pam when he breaks up with her mom on her birthday after he finds out she's 58, and Dwight unsuccessfully tries to get everyone in the office to owe him a favor.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "Murder",
        episodeDate: "November 12, 2009",
        episodeRanking: 8.7,
        episodeDescription:
          "The entire office is preoccupied about rumors of Dunder Mifflin's bankruptcy. Michael tries to create a distraction by engaging everyone in murder-mystery game, but Jim wonders if that is a good idea.",
      },
      {
        episodeSeason: 6,
        episodeNum: 11,
        episodeName: "Shareholder Meeting",
        episodeDate: "November 19, 2009",
        episodeRanking: 8.2,
        episodeDescription:
          'Michael speaks out of line at the Dunder Mifflin shareholders meeting and creates a big problem for management, while Jim discovers that nobody in the office thinks he\'s the "real" boss.',
      },
      {
        episodeSeason: 6,
        episodeNum: 12,
        episodeName: "Scott's Tots",
        episodeDate: "December 3, 2009",
        episodeRanking: 8.3,
        episodeDescription:
          "Ten years ago, Michael promised a group of third graders he would pay for their college tuition if they graduated. Now comes time to pay, and he can't do it. At the office, Dwight's employee of the month idea gets Jim in big trouble.",
      },
      {
        episodeSeason: 6,
        episodeNum: 13,
        episodeName: "Secret Santa",
        episodeDate: "December 10, 2009",
        episodeRanking: 8.5,
        episodeDescription:
          "Michael gets upset when Jim promises Phyllis that she can be the office Santa, but the office Christmas party may be overshadowed by some bad news from David Wallace.",
      },
      {
        episodeSeason: 6,
        episodeNum: 14,
        episodeName: "The Banker",
        episodeDate: "January 21, 2010",
        episodeRanking: 6.8,
        episodeDescription:
          "A banker representing a potential buyer comes to the Scranton branch to interview the H.R. department before the sale goes through.",
      },
      {
        episodeSeason: 6,
        episodeNum: 15,
        episodeName: "Sabre",
        episodeDate: "February 4, 2010",
        episodeRanking: 7.7,
        episodeDescription:
          "Michael hates the changes that Dunder Mifflin's new owner is implementing, so he turns to David Wallace for advice. Jim and Pam find the perfect day care center, but Jim's mistake threatens to ruin the interview.",
      },
      {
        episodeSeason: 6,
        episodeNum: 16,
        episodeName: "Manager and Salesman",
        episodeDate: "February 11, 2010",
        episodeRanking: 8.1,
        episodeDescription:
          "Sabre's CEO wants the Scranton branch to have one manager, and Michael voluntarily steps down and lets Jim become the boss when he finds out that salespeople make more money. However, he soon comes to regret the decision.",
      },
      {
        episodeSeason: 6,
        episodeNum: 17,
        episodeName: "The Delivery: Part 1",
        episodeDate: "March 4, 2010",
        episodeRanking: 8.4,
        episodeDescription:
          'Pam goes into labor and Jim is ready to take her to the hospital, but she refuses to go. Meanwhile, inspired by Pam and Jim\'s baby, Dwight and Angela try to reach a "business agreement" to have a baby of their own.',
      },
      {
        episodeSeason: 6,
        episodeNum: 18,
        episodeName: "The Delivery: Part 2",
        episodeDate: "March 4, 2010",
        episodeRanking: 8.5,
        episodeDescription:
          "After the baby is born, Pam has trouble getting the baby to breastfeed. At the office, Michael takes credit for hooking Jim and Pam up, and tries to do the same thing for Kevin and Erin, making Andy jealous.",
      },
      {
        episodeSeason: 6,
        episodeNum: 19,
        episodeName: "St. Patrick's Day",
        episodeDate: "March 11, 2010",
        episodeRanking: 7.7,
        episodeDescription:
          "It's St. Patrick's Day, and the CEO forces the office to work late because she won't leave. In addition, Michael unsuccessfully tries to suck up to his new boss, and Andy and Erin's first date is delayed because Erin is sick.",
      },
      {
        episodeSeason: 6,
        episodeNum: 20,
        episodeName: "New Leads",
        episodeDate: "March 18, 2010",
        episodeRanking: 7.7,
        episodeDescription:
          "When the sales staff begins trying to boss around everyone in the office, Michael tries to teach them a lesson by withholding a valuable set of sales leads.",
      },
      {
        episodeSeason: 6,
        episodeNum: 21,
        episodeName: "Happy Hour",
        episodeDate: "March 25, 2010",
        episodeRanking: 8.6,
        episodeDescription:
          'Oscar gets everybody in the office to go to Happy Hour so that he can hit on a coworker in shipping. Pam tries to set up Michael with a friend at the bar, but Michael\'s alter ego, "Date Mike," threatens to spoil the entire evening.',
      },
      {
        episodeSeason: 6,
        episodeNum: 22,
        episodeName: "Secretary's Day",
        episodeDate: "April 22, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "Michael creates problems for Andy on Secretary's Day when he tells Erin that Andy was engaged to Angela, and Kevin is upset after Oscar makes a video comparing Kevin to Cookie Monster.",
      },
      {
        episodeSeason: 6,
        episodeNum: 23,
        episodeName: "Body Language",
        episodeDate: "April 29, 2010",
        episodeRanking: 8,
        episodeDescription:
          "Michael is hopeful that a potential client is interested in him, but everyone in the office except Pam thinks he's wasting his time. Meanwhile, Dwight recruits Kelly to apply for the Sabre minority management training program.",
      },
      {
        episodeSeason: 6,
        episodeNum: 24,
        episodeName: "The Cover-Up",
        episodeDate: "May 6, 2010",
        episodeRanking: 8.1,
        episodeDescription:
          "Michael becomes convinced that Donna is having an affair and puts Dwight on the case, but Pam soon discovers that the suspicions may be true. Meanwhile, Darryl gets revenge on Andy for an earlier incident.",
      },
      {
        episodeSeason: 6,
        episodeNum: 25,
        episodeName: "The Chump",
        episodeDate: "May 13, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "Michael continues to see Donna even after learning she's married and meeting her husband, Dwight and Angela take their baby contract to an arbitrator, and Jim and Pam struggle to stay awake at the office.",
      },
      {
        episodeSeason: 6,
        episodeNum: 26,
        episodeName: "Whistleblower",
        episodeDate: "May 20, 2010",
        episodeRanking: 8,
        episodeDescription:
          "Jo comes to the Scranton branch to find the whistle-blower. However, three different people have confessed to Michael, Michael is protecting them, and the person most people think is the culprit is keeping his mouth shut.",
      },
      {
        episodeSeason: 7,
        episodeNum: 1,
        episodeName: "Nepotism",
        episodeDate: "September 23, 2010",
        episodeRanking: 8.4,
        episodeDescription:
          "Everybody demands that Michael fire the new office assistant, but he won't because he's his nephew. Meanwhile, Pam tries to play a prank on Dwight, who has bought the office building, to make up for ruining Jim's prank.",
      },
      {
        episodeSeason: 7,
        episodeNum: 2,
        episodeName: "Counseling",
        episodeDate: "September 30, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          "Michael is forced to go through counseling with Toby, Dwight seeks revenge on a local mall that refused his business, and Pam tries to fake her way to a promotion.",
      },
      {
        episodeSeason: 7,
        episodeNum: 3,
        episodeName: "Andy's Play",
        episodeDate: "October 7, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          'Andy invites the entire office to watch him in the community theater production of "Sweeney Todd," but Erin decides to babysit for Jim and Pam instead, and Michael is upset because he auditioned for the lead and didn\'t get it.',
      },
      {
        episodeSeason: 7,
        episodeNum: 4,
        episodeName: "Sex Ed",
        episodeDate: "October 14, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "A herpes scare causes Michael to get back in touch with his ex-girlfriends, where he decides to reevaluate those relationships. Meanwhile, Andy tries to teach safe sex to his officemates, but he has a clear ulterior motive.",
      },
      {
        episodeSeason: 7,
        episodeNum: 5,
        episodeName: "The Sting",
        episodeDate: "October 21, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "Michael organizes a sting operation to find out the secrets of a rival paper company's salesman who is stealing Dunder Mifflin's clients, and Andy gets Darryl's help to form a band.",
      },
      {
        episodeSeason: 7,
        episodeNum: 6,
        episodeName: "Costume Contest",
        episodeDate: "October 28, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          "It's Halloween at Dunder Mifflin, and Michael is upset that Darryl went over his head with an idea, and Jim and Pam are obsessed with finding out why Danny didn't call Pam back when they were dating four years ago.",
      },
      {
        episodeSeason: 7,
        episodeNum: 7,
        episodeName: "Christening",
        episodeDate: "November 4, 2010",
        episodeRanking: 7.4,
        episodeDescription:
          "During Jim and Pam's daughter's christening, Michael becomes upset over the lack of family-like unity between himself and his employees. So he responds by impulsively joining a teenage church mission to Mexico.",
      },
      {
        episodeSeason: 7,
        episodeNum: 8,
        episodeName: "Viewing Party",
        episodeDate: "November 11, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          'Michael sabotages Erin\'s "Glee" viewing party because of his contempt for Gabe, Jim and Pam discover that Dwight can keep their daughter from crying, and Andy has a bad reaction to a mixture of wine and a Japanese stimulant.',
      },
      {
        episodeSeason: 7,
        episodeNum: 9,
        episodeName: "WUPHF.com",
        episodeDate: "November 18, 2010",
        episodeRanking: 7.7,
        episodeDescription:
          "Some co-workers who invested in Ryan's Internet venture want him to sell, but Michael refuses to go along. Meanwhile, Jim loses his motivation to work when he reaches his commission cap, and Dwight creates a hay festival in the parking lot.",
      },
      {
        episodeSeason: 7,
        episodeNum: 10,
        episodeName: "China",
        episodeDate: "December 2, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          "Pam stands up to Dwight when he makes cutbacks to save money in the building, but will Dwight have the last laugh? Meanwhile, the office is surprised and energized when Michael outsmarts Oscar in a debate about China.",
      },
      {
        episodeSeason: 7,
        episodeNum: 11,
        episodeName: "Classy Christmas",
        episodeDate: "December 9, 2010",
        episodeRanking: 9,
        episodeDescription:
          "Michael throws an elaborate Christmas party to celebrate Holly's temporary return to the Scranton branch, but is disappointed when he learns that she still has a boyfriend.",
      },
      {
        episodeSeason: 7,
        episodeNum: 12,
        episodeName: "Ultimatum",
        episodeDate: "January 20, 2011",
        episodeRanking: 8.3,
        episodeDescription:
          "Michael gets upset when Holly returns from the holidays without an engagement ring, but still together with her boyfriend. Meanwhile, Pam tries to help her co-workers keep with their New Year's resolutions.",
      },
      {
        episodeSeason: 7,
        episodeNum: 13,
        episodeName: "The Seminar",
        episodeDate: "January 27, 2011",
        episodeRanking: 7.6,
        episodeDescription:
          "Andy tries to host a small business seminar at the office. Michael agrees to help by posing as a Greek entrepreneur, and tries to get Holly to play along.",
      },
      {
        episodeSeason: 7,
        episodeNum: 14,
        episodeName: "The Search",
        episodeDate: "February 3, 2011",
        episodeRanking: 8.5,
        episodeDescription:
          "When Jim gets an emergency phone call from Helene, he is forced to leave Michael in the bathroom of a gas station. Meanwhile, Holly, Erin, and Dwight set out on a journey to find Michael. Back at the office, Pam's artwork starts a captioning contest that seems to offend Gabe.",
      },
      {
        episodeSeason: 7,
        episodeNum: 15,
        episodeName: "PDA",
        episodeDate: "February 10, 2011",
        episodeRanking: 8.4,
        episodeDescription:
          "It's Valentine's Day, and the office is fed up with Michael and Holly's PDA, Andy helps Erin solve Gabe's riddles to find her gift, and Jim and Pam get drunk and try to find a place in the office to have sex.",
      },
      {
        episodeSeason: 7,
        episodeNum: 16,
        episodeName: "Threat Level Midnight",
        episodeDate: "February 17, 2011",
        episodeRanking: 9.4,
        episodeDescription:
          'Michael finally finishes his movie "Threat Level Midnight" and screens it for his employees at Dunder Mifflin, but Holly is less than enthusiastic for his finished product.',
      },
      {
        episodeSeason: 7,
        episodeNum: 17,
        episodeName: "Todd Packer",
        episodeDate: "February 24, 2011",
        episodeRanking: 7.5,
        episodeDescription:
          "Everyone is up in arms after Michael convinces Holly to give Todd Packer an office job, and Andy gets upset after Pam gets a new computer for reception but not for him.",
      },
      {
        episodeSeason: 7,
        episodeNum: 18,
        episodeName: "Garage Sale",
        episodeDate: "March 24, 2011",
        episodeRanking: 9.3,
        episodeDescription:
          "Michael plans to propose to Holly the day of the Dunder Mifflin garage sale, but Holly may have to take an extended leave of absence to Colorado because her father is sick.",
      },
      {
        episodeSeason: 7,
        episodeNum: 19,
        episodeName: "Training Day",
        episodeDate: "April 14, 2011",
        episodeRanking: 7.8,
        episodeDescription:
          "Michael makes fast friends with the man coming in to replace him at Dunder Mifflin, but later begins to have second thoughts after seeing him in action.",
      },
      {
        episodeSeason: 7,
        episodeNum: 20,
        episodeName: "Michael's Last Dundies",
        episodeDate: "April 21, 2011",
        episodeRanking: 9,
        episodeDescription:
          'Michael hosts his final "Dundies" as the boss at the Scranton branch, but tension is in the air, and Deangelo Vickers, the new boss, is having trouble with his co-hosting duties.',
      },
      {
        episodeSeason: 7,
        episodeNum: 21,
        episodeName: "Goodbye, Michael",
        episodeDate: "April 28, 2011",
        episodeRanking: 9.8,
        episodeDescription:
          "As the office gets ready for Michael's final day at Dunder Mifflin, Michael doesn't tell anyone that he's leaving a day early. Meanwhile, Deangelo accompanies a nervous Andy on a visit to one of Michael's old clients.",
      },
      {
        episodeSeason: 7,
        episodeNum: 22,
        episodeName: "The Inner Circle",
        episodeDate: "May 5, 2011",
        episodeRanking: 7.6,
        episodeDescription:
          'Tensions rise and feelings are hurt when Deangelo creates an "inner circle" at the office--which is only composed of men.',
      },
      {
        episodeSeason: 7,
        episodeNum: 23,
        episodeName: "Dwight K. Schrute, (Acting) Manager",
        episodeDate: "May 12, 2011",
        episodeRanking: 8.7,
        episodeDescription:
          "When Jim rejects Jo's offer, Dwight becomes acting manager at the Scranton branch, but an accident could cause his tenure to be short-lived.",
      },
      {
        episodeSeason: 7,
        episodeNum: 24,
        episodeName: "Search Committee",
        episodeDate: "May 19, 2011",
        episodeRanking: 8.8,
        episodeDescription:
          "The Scranton branch puts together a search committee to find the next boss, but the pool of interviewees proves to be less than impressive, and Dwight demands an interview in spite of his gun accident.",
      },
      {
        episodeSeason: 8,
        episodeNum: 1,
        episodeName: "The List",
        episodeDate: "September 22, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "New Dunder Mifflin CEO Robert California leaves a piece of paper with a line down the middle that has names of the Scranton staff on either side of it, leading everyone to try and figure out what it means.",
      },
      {
        episodeSeason: 8,
        episodeNum: 2,
        episodeName: "The Incentive",
        episodeDate: "September 29, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Under pressure from Robert to increase branch sales, Andy offers an incentive program to the sales staff, which backfires on him when he offers a very personal grand prize.",
      },
      {
        episodeSeason: 8,
        episodeNum: 3,
        episodeName: "Lotto",
        episodeDate: "October 6, 2011",
        episodeRanking: 7.3,
        episodeDescription:
          "After the entire warehouse staff wins the lottery and quits their job, Darryl becomes depressed and demands to be fired. Meanwhile, the office staff is forced to load the truck for their orders themselves.",
      },
      {
        episodeSeason: 8,
        episodeNum: 4,
        episodeName: "Garden Party",
        episodeDate: "October 13, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Andy claims to be throwing a garden party at Dwight's farm to impress Robert California, but he's really doing it to win the approval of his parents, who appear to favor his younger brother.",
      },
      {
        episodeSeason: 8,
        episodeNum: 5,
        episodeName: "Spooked",
        episodeDate: "October 27, 2011",
        episodeRanking: 7.5,
        episodeDescription:
          "Erin is worried that she is about to get fired after she organizes a disastrous office Halloween party for Robert and his son. Meanwhile, Robert probes the minds of the employees to come up with the perfect spooky story.",
      },
      {
        episodeSeason: 8,
        episodeNum: 6,
        episodeName: "Doomsday",
        episodeDate: "November 3, 2011",
        episodeRanking: 7.7,
        episodeDescription:
          'Dwight installs a "Doomsday Device" on the office computers that could get everyone fired if they make too many mistakes, while Gabe tries to hit on one of Darryl\'s warehouse employees.',
      },
      {
        episodeSeason: 8,
        episodeNum: 7,
        episodeName: "Pam's Replacement",
        episodeDate: "November 10, 2011",
        episodeRanking: 7.7,
        episodeDescription:
          "A pregnant and insecure Pam tries to prove that Jim is attracted to her temp replacement, and Robert and his musician friends take over a jam session with Andy, Kevin, and Darryl.",
      },
      {
        episodeSeason: 8,
        episodeNum: 8,
        episodeName: "Gettysburg",
        episodeDate: "November 17, 2011",
        episodeRanking: 6.9,
        episodeDescription:
          "Andy decides to motivate and inspire everyone by taking them on a field trip to Gettysburg. Some people in the office stay behind and Robert California asks them to come up with Dunder Mifflin/Sabre's next big idea.",
      },
      {
        episodeSeason: 8,
        episodeNum: 9,
        episodeName: "Mrs. California",
        episodeDate: "December 1, 2011",
        episodeRanking: 7.7,
        episodeDescription:
          "Robert brings his wife to the office so that she can find a job, but he gives Andy conflicting messages about whether to hire her. Meanwhile, Dwight opens a gym in the building and tries to persuade Darryl to join.",
      },
      {
        episodeSeason: 8,
        episodeNum: 10,
        episodeName: "Christmas Wishes",
        episodeDate: "December 8, 2011",
        episodeRanking: 7.9,
        episodeDescription:
          "Andy tries to make this year's Christmas the best ever by granting each person's holiday wishes. Meanwhile, Robert California tries to drown his sorrows at the office party.",
      },
      {
        episodeSeason: 8,
        episodeNum: 11,
        episodeName: "Trivia",
        episodeDate: "January 12, 2012",
        episodeRanking: 7.9,
        episodeDescription:
          "Andy hopes to make up for a sales deficiency by entering and winning a bar trivia competition, while Dwight flies to corporate headquarters in Florida to demand a management interview with Robert.",
      },
      {
        episodeSeason: 8,
        episodeNum: 12,
        episodeName: "Pool Party",
        episodeDate: "January 19, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Robert throws a party for the Dunder Mifflin staff at his house before he sells it because of his divorce. At the party, Erin and Dwight agree to flirt with each other to make Andy jealous, and Jim tries in vain to duck out early.",
      },
      {
        episodeSeason: 8,
        episodeNum: 13,
        episodeName: "Jury Duty",
        episodeDate: "February 2, 2012",
        episodeRanking: 7.4,
        episodeDescription:
          'Jim gets caught in a lie about his week of "jury duty," and new questions emerge when Angela gives birth to a "premature" baby.',
      },
      {
        episodeSeason: 8,
        episodeNum: 14,
        episodeName: "Special Project",
        episodeDate: "February 9, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "Andy puts Dwight in charge of a special project in Tallahassee, but Dwight doesn't like the team Andy's assembled for him. Meanwhile, Darryl tries to figure out the meaning of Val's Valentine's gift.",
      },
      {
        episodeSeason: 8,
        episodeNum: 15,
        episodeName: "Tallahassee",
        episodeDate: "February 16, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Dwight refuses to let appendicitis get in the way of leading his new team in Tallahassee, while Andy decides to step in for Erin as secretary in the office.",
      },
      {
        episodeSeason: 8,
        episodeNum: 16,
        episodeName: "After Hours",
        episodeDate: "February 23, 2012",
        episodeRanking: 8.1,
        episodeDescription:
          "In Tallahassee, Dwight and Todd Packer try to romance Nellie to get the VP position, while Jim wonders if a colleague is trying to hit on him. Back in Scranton, Val's boyfriend shows up with a message for Darryl.",
      },
      {
        episodeSeason: 8,
        episodeNum: 17,
        episodeName: "Test the Store",
        episodeDate: "March 1, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Dwight and his team get ready for the grand opening of the Sabre Store, while Andy makes Toby teach self-defense to the Scranton branch employees after he is beat up in the parking lot by a girl.",
      },
      {
        episodeSeason: 8,
        episodeNum: 18,
        episodeName: "Last Day in Florida",
        episodeDate: "March 8, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Jim tries to warn Dwight that he's going to be fired after Robert rejects the Sabre Store idea, but he refuses to listen. Meanwhile, Darryl and Toby try to sell cookies to Kevin, and Erin tells Andy she's not coming back from Florida.",
      },
      {
        episodeSeason: 8,
        episodeNum: 19,
        episodeName: "Get the Girl",
        episodeDate: "March 15, 2012",
        episodeRanking: 6.6,
        episodeDescription:
          "Andy goes to Tallahassee to tell Erin that he loves her and needs her to return to Scranton. Meanwhile, Nellie shows up in Scranton and tries to claim Andy's manager position by offering everyone raises.",
      },
      {
        episodeSeason: 8,
        episodeNum: 20,
        episodeName: "Welcome Party",
        episodeDate: "April 12, 2012",
        episodeRanking: 7.1,
        episodeDescription:
          "Andy tries to break up with his girlfriend after going to Florida to declare his love for Erin, and the office employees are forced against their will to throw a party for the hated Nellie.",
      },
      {
        episodeSeason: 8,
        episodeNum: 21,
        episodeName: "Angry Andy",
        episodeDate: "April 19, 2012",
        episodeRanking: 7,
        episodeDescription:
          "Andy and Erin return to Dunder Mifflin, only to discover that Nellie has taken his job and office and refuses to give them up. Meanwhile, Ryan becomes jealous after Pam tries to play matchmaker for Kelly.",
      },
      {
        episodeSeason: 8,
        episodeNum: 22,
        episodeName: "Fundraiser",
        episodeDate: "April 26, 2012",
        episodeRanking: 7,
        episodeDescription:
          "Andy confronts Robert for the first time after losing the manager position and quitting his job at a fund raiser sponsored by Angela's husband.",
      },
      {
        episodeSeason: 8,
        episodeNum: 23,
        episodeName: "Turf War",
        episodeDate: "May 3, 2012",
        episodeRanking: 7.6,
        episodeDescription:
          "Dwight and Jim fight with the Syracuse over a client after Robert shuts down the Binghamton branch, and Andy sees an opportunity for revenge. Meanwhile Robert tries to figure out the contents of a drunken voicemail to Nellie.",
      },
      {
        episodeSeason: 8,
        episodeNum: 24,
        episodeName: "Free Family Portrait Studio",
        episodeDate: "May 10, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "With former CEO David Wallace's help, Andy launches a plan to get revenge on the Scranton branch. Meanwhile, Dwight launches his own plan to find out if he's the father of Angela's baby.",
      },
      {
        episodeSeason: 9,
        episodeNum: 1,
        episodeName: "New Guys",
        episodeDate: "September 20, 2012",
        episodeRanking: 7.6,
        episodeDescription:
          "Dwight and Jim are intimidated by the office's newest additions, who are considered younger versions of themselves. Meanwhile, Andy tries to make Nellie's life miserable, and Angela tries to get rid of one of her cats.",
      },
      {
        episodeSeason: 9,
        episodeNum: 2,
        episodeName: "Roy's Wedding",
        episodeDate: "September 27, 2012",
        episodeRanking: 7.1,
        episodeDescription:
          "After Roy's wedding, Jim and Pam wonder if they still have any secrets they're hiding from each other. Meanwhile, Clark tricks Erin into a \"news audition,\" and Dwight challenges Nellie's new charity initiative.",
      },
      {
        episodeSeason: 9,
        episodeNum: 3,
        episodeName: "Andy's Ancestry",
        episodeDate: "October 4, 2012",
        episodeRanking: 7.4,
        episodeDescription:
          "Nellie plays a trick on Andy after researching his ancestry, Dwight teaches Erin a new language, and Pam tries to teach Nellie how to drive.",
      },
      {
        episodeSeason: 9,
        episodeNum: 4,
        episodeName: "Work Bus",
        episodeDate: "October 18, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "When Jim convinces Dwight that the building is unsafe, Dwight rents a bus and sets up the office inside. Nellie asks for Andy's help in adopting a baby. Meanwhile, Jim tries to make Pam happy with some pie.",
      },
      {
        episodeSeason: 9,
        episodeNum: 5,
        episodeName: "Here Comes Treble",
        episodeDate: "October 25, 2012",
        episodeRanking: 7,
        episodeDescription:
          "On Halloween, the Cornell a Capella group pays a visit to Andy, Dwight discovers that Nellie takes anxiety pills, and Pam disapproves of Jim's business decision.",
      },
      {
        episodeSeason: 9,
        episodeNum: 6,
        episodeName: "The Boat",
        episodeDate: "November 8, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "Andy has one last chance to captain the family boat before he sells it, Jim, Pam, and Nellie prank Dwight with a radio interview, and Kevin finds out about Oscar's affair with Angela's husband.",
      },
      {
        episodeSeason: 9,
        episodeNum: 7,
        episodeName: "The Whale",
        episodeDate: "November 15, 2012",
        episodeRanking: 7.6,
        episodeDescription:
          "The office trains Dwight to sell to a female client without being offensive, only to discover that the client is Jan Levinson. Angela and Oscar both think the senator is cheating on them, and Jim has trouble on an important conference call.",
      },
      {
        episodeSeason: 9,
        episodeNum: 8,
        episodeName: "The Target",
        episodeDate: "November 29, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Angela orders a hit on Oscar for cheating with her husband, the office makes a tower with their customer complaint cards, Jim wines and dines Stanley and Phyllis in exchange for a favor, and Pam begins her mural.",
      },
      {
        episodeSeason: 9,
        episodeNum: 9,
        episodeName: "Dwight Christmas",
        episodeDate: "December 6, 2012",
        episodeRanking: 8.4,
        episodeDescription:
          "Dwight puts together a Pennsylvania Dutch-themed office Christmas party, but he ends it abruptly because Jim has to leave for his other job. Meanwhile, Erin seeks comfort from a co-worker after a disappointing text from Andy.",
      },
      {
        episodeSeason: 9,
        episodeNum: 10,
        episodeName: "Lice",
        episodeDate: "January 10, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "Pam causes a lice outbreak but lets Meredith take the blame, Jim has a business meeting with Dr. J, and some coworkers try to get Darryl and Val back together.",
      },
      {
        episodeSeason: 9,
        episodeNum: 11,
        episodeName: "Suit Warehouse",
        episodeDate: "January 17, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Dwight and Clark pose as father and son to get an account, Darryl goes for an interview with Jim's new business, and everybody in the office goes crazy over a new espresso machine.",
      },
      {
        episodeSeason: 9,
        episodeNum: 12,
        episodeName: "Customer Loyalty",
        episodeDate: "January 24, 2013",
        episodeRanking: 7.9,
        episodeDescription:
          "Dwight tries to keep Daryl from leaving Dunder Mifflin, Jim misses his daughter's recital because of an important business meeting, and Nellie is worried that Erin will dump Andy for Pete.",
      },
      {
        episodeSeason: 9,
        episodeNum: 13,
        episodeName: "Junior Salesman",
        episodeDate: "January 31, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "Dwight gets to hire a new salesman to replace Jim when he is at his other job. But will he promote Clark or go with one of his unqualified friends instead?",
      },
      {
        episodeSeason: 9,
        episodeNum: 14,
        episodeName: "Vandalism",
        episodeDate: "January 31, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          "Pam tries to find out who vandalized her mural, Darryl finds out that Jim is a slob, and Oscar and Kevin go to Angela and The Senator's child's first birthday party.",
      },
      {
        episodeSeason: 9,
        episodeNum: 15,
        episodeName: "Couples Discount",
        episodeDate: "February 7, 2013",
        episodeRanking: 7.3,
        episodeDescription:
          "Andy returns after three months to an angry office and an even angrier girlfriend, and Jim's Valentines Day with Pam does not go as planned.",
      },
      {
        episodeSeason: 9,
        episodeNum: 16,
        episodeName: "Moving On",
        episodeDate: "February 14, 2013",
        episodeRanking: 8.1,
        episodeDescription:
          "Andy finds out that Erin dumped him for Pete, Dwight gets Angela's help taking care of his aunt, and Pam interviews with a real estate firm whose boss is a carbon-copy of Michael Scott.",
      },
      {
        episodeSeason: 9,
        episodeNum: 17,
        episodeName: "The Farm",
        episodeDate: "March 14, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          "Show follows Dwight Schrute a beet farmer running a bed and breakfast inn.",
      },
      {
        episodeSeason: 9,
        episodeNum: 18,
        episodeName: "Promos",
        episodeDate: "April 4, 2013",
        episodeRanking: 8,
        episodeDescription:
          "The release of the documentary promos creates tension for the Dunder Mifflin employees, Dwight considers a business venture with his girlfriend's family, and Jim and Darryl have an awkward business meeting with baseball player Ryan Howard.",
      },
      {
        episodeSeason: 9,
        episodeNum: 19,
        episodeName: "Stairmageddon",
        episodeDate: "April 11, 2013",
        episodeRanking: 8,
        episodeDescription:
          "Dwight shoots Stanley with a bull tranquilizer after he refuses to go on a sales call, Jim and Pam head to marriage counseling, The Senator comes out of the closet, and Andy tries to find a talent agent.",
      },
      {
        episodeSeason: 9,
        episodeNum: 20,
        episodeName: "Paper Airplane",
        episodeDate: "April 25, 2013",
        episodeRanking: 8,
        episodeDescription:
          "The employees hold a paper airplane competition, Andy gets an acting role in a workplace safety video, and Jim and Pam's marriage tensions continue to build.",
      },
      {
        episodeSeason: 9,
        episodeNum: 21,
        episodeName: "Livin' the Dream",
        episodeDate: "May 2, 2013",
        episodeRanking: 9,
        episodeDescription:
          "Dwight becomes regional manager after Andy quits his job, Jim dedicates more time to his Dunder Mifflin job to save his marriage, and Angela has problems with her new living arrangements after her breakup with The Senator.",
      },
      {
        episodeSeason: 9,
        episodeNum: 22,
        episodeName: "A.A.R.M.",
        episodeDate: "May 9, 2013",
        episodeRanking: 9.5,
        episodeDescription:
          "Dwight prepares for a marriage proposal and hires an assistant for his assistant, Andy auditions for a singing program, Darryl tries to leave his job without a fuss, and Pam has second thoughts about Jim staying in Scranton.",
      },
      {
        episodeSeason: 9,
        episodeNum: 23,
        episodeName: "Finale",
        episodeDate: "May 16, 2013",
        episodeRanking: 9.8,
        episodeDescription:
          "One year later, Dunder Mifflin employees past and present reunite for a panel discussion about the documentary and to attend Dwight and Angela's wedding.",
      },
    ],
  },
  {
    showId: 3,
    showName: "House MD",
    showYear: 2004,
    showImg:
      "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    showGenre: "Drama, Mystery",
    showCast: "Hugh Laurie",
    showSeasonsNum: 8,
    showDescription:
      "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.",
    slug: "house-md",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Pilot",
        episodeDate: "November 16, 2004",
        episodeRanking: 8.6,
        episodeDescription:
          "Young kindergarten teacher Rebecca Adler collapses in her classroom after losing intelligible speech while teaching students.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Paternity",
        episodeDate: "November 23, 2004",
        episodeRanking: 8.2,
        episodeDescription:
          "The team helps a high school boy (16) who has double vision and night terrors. (Clinic Cases: Unvaccinated baby, man with boil on leg.)",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Occam's Razor",
        episodeDate: "November 30, 2004",
        episodeRanking: 8.2,
        episodeDescription:
          "A college boy whose low blood pressure does not respond with IV fluids piques House's curiosity. Clinic Cases: A woman who had a cold last week, man with a sore throat, woman whose leg hurts after running 6 miles, a boy and his MP3 Player.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Maternity",
        episodeDate: "December 7, 2004",
        episodeRanking: 8.4,
        episodeDescription:
          "A nightmare scenario hits Princeton Plainsboro when babies in the maternity ward are hit by a potentially fatal epidemic. Clinic Cases: Woman with a parasite!",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Damned If You Do",
        episodeDate: "December 14, 2004",
        episodeRanking: 8.2,
        episodeDescription:
          "A nun suffering from acute dermatitis and asthma treated by House with possibly the wrong medication comes dangerously close to death.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "The Socratic Method",
        episodeDate: "December 21, 2004",
        episodeRanking: 8.5,
        episodeDescription:
          "A 38-year-old mother, apparently suffering from thrombosis, alcoholism and schizophrenia, has only her underage 15-year-old son as caregiver.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "Fidelity",
        episodeDate: "December 28, 2004",
        episodeRanking: 8.2,
        episodeDescription:
          "A woman comes down with symptoms of African sleeping sickness, but there seems to be no way she could have contracted it. House and his aides must ask a few tough questions and make some tough decisions in order to try to save her.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "Poison",
        episodeDate: "January 25, 2005",
        episodeRanking: 8.1,
        episodeDescription:
          "A high school boy has hallucinations and collapses during an exam. When he does not respond to treatments, and the normal tests are negative, Foreman presents the case to House. Clinic Cases: A happy old lady.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "DNR",
        episodeDate: "February 1, 2005",
        episodeRanking: 8.8,
        episodeDescription:
          "A famous jazz trumpeter, diagnosed with ALS, signs a DNR form, but because House believes the diagnosis wrong, he breaks the law by resuscitating him.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "Histories",
        episodeDate: "February 8, 2005",
        episodeRanking: 8.5,
        episodeDescription:
          "A delusional homeless woman is found unconscious in an acid house exhibiting a variety of symptoms which Foreman thinks she's faking.",
      },
      {
        episodeSeason: 1,
        episodeNum: 11,
        episodeName: "Detox",
        episodeDate: "February 15, 2005",
        episodeRanking: 8.7,
        episodeDescription:
          "A girl crashes a Porsche after her boyfriend starts coughing up blood and continues to have unexplained bleeds. Clinic Cases: Cuddy gives House a month off clinic duties if he can spend a week off his pain meds.",
      },
      {
        episodeSeason: 1,
        episodeNum: 12,
        episodeName: "Sports Medicine",
        episodeDate: "February 22, 2005",
        episodeRanking: 8,
        episodeDescription:
          "A detoxed sports star about to make his comeback breaks his arm due to brittle bones. Clinic Cases: Woman with leg pain, man trying to remove his contact lenses, a dentist with various issues, and a hung over teenager - all in 70 seconds.",
      },
      {
        episodeSeason: 1,
        episodeNum: 13,
        episodeName: "Cursed",
        episodeDate: "March 1, 2005",
        episodeRanking: 8.2,
        episodeDescription:
          "A young boy's fever lasts nearly a week after a Ouija board predicts he will die. Clinic Cases: Chase's case of a man with numb fingers.",
      },
      {
        episodeSeason: 1,
        episodeNum: 14,
        episodeName: "Control",
        episodeDate: "March 15, 2005",
        episodeRanking: 8.7,
        episodeDescription:
          "Can House save a high powered female executive from the same problem that has left him in constant pain? A new head of the hospital board could cause problems. Clinic cases: A boy and his mute dad.",
      },
      {
        episodeSeason: 1,
        episodeNum: 15,
        episodeName: "Mob Rules",
        episodeDate: "March 22, 2005",
        episodeRanking: 8,
        episodeDescription:
          "A Mob informer collapses before trial. Is he faking or is he really in a coma? Clinic Cases: A pair of brothers come in when the youngster gets toys stuck up his nose.",
      },
      {
        episodeSeason: 1,
        episodeNum: 16,
        episodeName: "Heavy",
        episodeDate: "March 29, 2005",
        episodeRanking: 8.4,
        episodeDescription:
          "A morbidly obese ten-year-old girl has a heart attack, and her mother insists that House and his team look past her weight to find the diagnosis. Meanwhile, Vogler pressures House to fire a member of his staff. Clinic Patients: Unidentified man with an infected pierced scrotum; overweight woman with a 30-pound tumor on her ovaries who refuses to have it removed, because she worries she will be unattractive.",
      },
      {
        episodeSeason: 1,
        episodeNum: 17,
        episodeName: "Role Model",
        episodeDate: "April 12, 2005",
        episodeRanking: 8.6,
        episodeDescription:
          "An ambitious and charismatic Black senator campaigning for the presidency falls ill from a mysterious malady, possibly AIDS.",
      },
      {
        episodeSeason: 1,
        episodeNum: 18,
        episodeName: "Babies & Bathwater",
        episodeDate: "April 19, 2005",
        episodeRanking: 8.9,
        episodeDescription:
          "While House and his team scramble to discover what's causing brain and kidney dysfunction in a pregnant woman, Vogler is on the warpath to get House fired.",
      },
      {
        episodeSeason: 1,
        episodeNum: 19,
        episodeName: "Kids",
        episodeDate: "December 3, 2004",
        episodeRanking: 8.3,
        episodeDescription:
          "During a meningitis outbreak which overwhelms the clinic, House is drawn to a single patient: a 12-year-old competitive diver whose symptoms don't quite match everyone else's.",
      },
      {
        episodeSeason: 1,
        episodeNum: 20,
        episodeName: "Love Hurts",
        episodeDate: "December 10, 2004",
        episodeRanking: 8.3,
        episodeDescription:
          "House has to deal with his promised dinner date with Cameron, a mysterious stroke in a clinic patient and a libidinous senior citizen.",
      },
      {
        episodeSeason: 1,
        episodeNum: 21,
        episodeName: "Three Stories",
        episodeDate: "December 17, 2004",
        episodeRanking: 9.6,
        episodeDescription:
          "House's ex Stacy Warner asks him to treat her husband. House takes over a diagnostics class for a day and presents the class with three case studies of leg pain. As House tells his story and the class gradually fills up with listeners, the class learns a lot about how to be better doctors, and Chase, Foreman and Cameron learn some important details of House's past.",
      },
      {
        episodeSeason: 1,
        episodeNum: 22,
        episodeName: "Honeymoon",
        episodeDate: "December 24, 2004",
        episodeRanking: 8.7,
        episodeDescription:
          "House doses his ex-girlfriend's husband in order to get him into hospital after she begs House to treat him. Is House treating Mark differently in order to get back at Stacy for his leg?",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Acceptance",
        episodeDate: "September 13, 2005",
        episodeRanking: 8.4,
        episodeDescription:
          "House treats a patient on death row while Dr. Cameron avoids telling a patient she has a terminal illness.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Autopsy",
        episodeDate: "September 20, 2005",
        episodeRanking: 9.2,
        episodeDescription:
          "A very brave and mature 9-year-old girl has terminal cancer, but that is not what the problem seems to be.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Humpty Dumpty",
        episodeDate: "September 27, 2005",
        episodeRanking: 8,
        episodeDescription:
          'Cuddy joins the team after her handyman falls off of her roof and begins to develop bizarre symptoms. Clinic Cases: African American man who objects to "minority meds."',
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "TB or Not TB",
        episodeDate: "November 1, 2005",
        episodeRanking: 8.1,
        episodeDescription:
          "A doctor campaigns against the epidemic of TB in Africa, possibly at the risk of his own life.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Daddy's Boy",
        episodeDate: "November 8, 2005",
        episodeRanking: 8.1,
        episodeDescription:
          "The team takes care of a student with inexplicable electrical shocks, and House's parents visit.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Spin",
        episodeDate: "November 15, 2005",
        episodeRanking: 7.9,
        episodeDescription:
          "Star bicycle racer collapses, and the team must come up with a diagnosis after the patient admits to blood doping. House and Stacy continue sparring with each other. Clinic Case: Flight attendant poisons himself with gum.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Hunting",
        episodeDate: "November 22, 2005",
        episodeRanking: 8.3,
        episodeDescription:
          "After being accused of assaulting a sick man, House is forced to take on his case. However, despite the fact that he has AIDS, it's clearly not what's killing him.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "The Mistake",
        episodeDate: "November 29, 2005",
        episodeRanking: 8.9,
        episodeDescription:
          "Chaos ensues after Chase's negligence leads to the death of a female patient. Now, after an inquiry from the hospital board, and a subpoena from the patient's brother, it's up to Stacey to protect Chase's career, as well as House's.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "Deception",
        episodeDate: "December 13, 2005",
        episodeRanking: 8.5,
        episodeDescription:
          "A woman collapses at an off-track betting parlor in front of House, and he must battle his new boss to find her diagnosis.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Failure to Communicate",
        episodeDate: "January 10, 2006",
        episodeRanking: 8.6,
        episodeDescription:
          "When a famous writer is brought in with language difficulties, House must assist via phone while waiting for a delayed plane.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "Need to Know",
        episodeDate: "February 7, 2006",
        episodeRanking: 8.2,
        episodeDescription:
          "House and the team must determine what is causing an increasingly deceitful patient's muscle flailing. Stacy makes a decision, and Cameron avoids a test.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "Distractions",
        episodeDate: "February 14, 2006",
        episodeRanking: 8.6,
        episodeDescription:
          "A patient with 40% body burns and inexplicable cardiac and neurological signs is treated by the team, while House pursues disproving an old enemy's medical study.",
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "Skin Deep",
        episodeDate: "February 20, 2006",
        episodeRanking: 8.7,
        episodeDescription:
          "The search for the cause of a supermodel's symptoms causes intense feelings among the team, as new facts are revealed. Meanwhile, House experiences increasing pain in his leg.",
      },
      {
        episodeSeason: 2,
        episodeNum: 14,
        episodeName: "Sex Kills",
        episodeDate: "March 7, 2006",
        episodeRanking: 8.4,
        episodeDescription:
          "House and the team struggle to diagnose one patient in order to save another. Clinic Case: College student claims he has the hots for heifers.",
      },
      {
        episodeSeason: 2,
        episodeNum: 15,
        episodeName: "Clueless",
        episodeDate: "March 28, 2006",
        episodeRanking: 8.5,
        episodeDescription:
          "House must diagnose a man who became sick and experienced difficulty breathing during sex-play but all tests keep returning normal. Wilson experiences close-up what living with House is like. Clinic case: Herpes",
      },
      {
        episodeSeason: 2,
        episodeNum: 16,
        episodeName: "Safe",
        episodeDate: "April 4, 2006",
        episodeRanking: 8.8,
        episodeDescription:
          "6 months after a teenage girl crushes her chest in a car accident and receives a heart transplant she goes into anaphylactic shock in her clean room bedroom after her boyfriend almost kisses her and discovers something on her arm.",
      },
      {
        episodeSeason: 2,
        episodeNum: 17,
        episodeName: "All In",
        episodeDate: "April 11, 2006",
        episodeRanking: 9,
        episodeDescription:
          "On a class field trip, a teacher discovers that her six-year-old student, Ian, is bleeding profusely. Dr. House thinks Ian has the same unknown disease that killed an elderly patient of his years ago.",
      },
      {
        episodeSeason: 2,
        episodeNum: 18,
        episodeName: "Sleeping Dogs Lie",
        episodeDate: "April 18, 2006",
        episodeRanking: 8.2,
        episodeDescription:
          "Cameron gets mad at Foreman because Foreman steals his idea for an article. The case of the week: a lesbian woman has not slept for ten days despite taking a bottle of sleeping pills.",
      },
      {
        episodeSeason: 2,
        episodeNum: 19,
        episodeName: "House vs. God",
        episodeDate: "April 25, 2006",
        episodeRanking: 8.6,
        episodeDescription:
          "House takes on a teenage faith healer, Wilson desperately wants into a poker game, and tensions escalate between Cameron and Foreman.",
      },
      {
        episodeSeason: 2,
        episodeNum: 20,
        episodeName: "Euphoria: Part 1",
        episodeDate: "December 2, 2005",
        episodeRanking: 9.1,
        episodeDescription:
          "A police officer in critical condition has bizarre symptoms, and Dr. Foreman finds himself in an unpleasant situation.",
      },
      {
        episodeSeason: 2,
        episodeNum: 21,
        episodeName: "Euphoria: Part 2",
        episodeDate: "December 3, 2005",
        episodeRanking: 9.3,
        episodeDescription:
          "House tries radical procedures to save Foreman's life. Foreman's father visits.",
      },
      {
        episodeSeason: 2,
        episodeNum: 22,
        episodeName: "Forever",
        episodeDate: "December 9, 2005",
        episodeRanking: 8.1,
        episodeDescription:
          "A dad kisses his wife and baby goodbye before leaving for work, pukes and returns to find his wife with seizure in the bathtub and the baby under water. Foreman is back but changed.",
      },
      {
        episodeSeason: 2,
        episodeNum: 23,
        episodeName: "Who's Your Daddy?",
        episodeDate: "December 16, 2005",
        episodeRanking: 7.8,
        episodeDescription:
          "House cares for a young Katrina victim, the alleged daughter of an old friend of his. He supposedly she had hallucinations because of the heart, but it turns out not to be the cause.House discovers a disease that his grandfather had.",
      },
      {
        episodeSeason: 2,
        episodeNum: 24,
        episodeName: "No Reason",
        episodeDate: "December 23, 2005",
        episodeRanking: 9.5,
        episodeDescription:
          "An old patient of House comes back and seeks revenge upon him in the form of gunshot.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Meaning",
        episodeDate: "September 5, 2006",
        episodeRanking: 8.9,
        episodeDescription:
          "Richard, a husband and father living with brain cancer, drives his wheelchair into a pool at a family BBQ. Everyone but his son think that it was suicide from the pain but House will stop at nothing to figure out his true ailment.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Cane and Able",
        episodeDate: "September 12, 2006",
        episodeRanking: 8.4,
        episodeDescription:
          "House is affected by the fact that he thinks he didn't solve the last case while a young boy, who believes aliens tortured him, is brought in.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Informed Consent",
        episodeDate: "September 19, 2006",
        episodeRanking: 8.6,
        episodeDescription:
          "House and his team face a lot of moral dilemmas when a patient wants them to help him end his life.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Lines in the Sand",
        episodeDate: "September 26, 2006",
        episodeRanking: 9,
        episodeDescription:
          "A ten-year-old boy begins screaming in pain, but nobody knows why, because he is autistic and cannot explain. House refuses to use his office because it has new carpet.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Fools for Love",
        episodeDate: "October 31, 2006",
        episodeRanking: 8.4,
        episodeDescription:
          "A husband and wife being treated cause Foreman to ponder the strength of true love, and House abuses one too many patients with potentially devastating repercussions.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Que Ser√° Ser√°",
        episodeDate: "November 7, 2006",
        episodeRanking: 8.1,
        episodeDescription:
          "An obese man in a coma presents treatment challenges, but finding out what's wrong with him may be the most challenging test of all. Elsewhere, Tritter ramps up his vendetta against House.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "Son of Coma Guy",
        episodeDate: "November 14, 2006",
        episodeRanking: 8.9,
        episodeDescription:
          "When the son of a man in a vegetative state starts going into a coma, the vegetative man is reawakened chemically by House, who hopes to get some clues to the son's problems.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Whac-A-Mole",
        episodeDate: "November 21, 2006",
        episodeRanking: 8.1,
        episodeDescription:
          "A young man collapses at his job, and House makes a game of establishing the diagnosis until things turn critical, and Tritter increases the pressure on Wilson.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "Finding Judas",
        episodeDate: "November 28, 2006",
        episodeRanking: 8.5,
        episodeDescription:
          "While a little girl's life and limbs are in jeopardy, Tritter becomes more manipulative and House suffers withdrawal.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "Merry Little Christmas",
        episodeDate: "December 12, 2006",
        episodeRanking: 8.7,
        episodeDescription:
          "Wilson presents the deal to House and then convinces Cuddy to back him up, meanwhile the team is flummoxed by a patient's condition and various members keep seeking out House for his opinion even though he may not be prepared to assist.",
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "Words and Deeds",
        episodeDate: "January 9, 2007",
        episodeRanking: 8.6,
        episodeDescription:
          "House checks himself into rehab just before his trial, but a different game entirely may be afoot. Elsewhere, the team attempts to treat a firefighter who can't stop shivering.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "One Day, One Room",
        episodeDate: "January 30, 2007",
        episodeRanking: 9.1,
        episodeDescription:
          "Stuck with clinic duty, House almost wishes he had the boring patients back after he encounters a young woman with an STD and the need to talk.",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "Needle in a Haystack",
        episodeDate: "February 6, 2007",
        episodeRanking: 8,
        episodeDescription:
          "A young man is stricken during sex with his girlfriend, and House must determine why his organs are suddenly shutting down. Finding the cause is like looking for a needle in a haystack.",
      },
      {
        episodeSeason: 3,
        episodeNum: 14,
        episodeName: "Insensitive",
        episodeDate: "February 13, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "On Valentine's Day, House meddles in relationships as he works to diagnose a teenager who has a genetic inability to feel pain.",
      },
      {
        episodeSeason: 3,
        episodeNum: 15,
        episodeName: "Half-Wit",
        episodeDate: "March 6, 2007",
        episodeRanking: 9.1,
        episodeDescription:
          "House struggles to find out why a pianist savant is losing his ability to play. Ultimately, a decision must be made as to how much brain is necessary for a normal quality of life.",
      },
      {
        episodeSeason: 3,
        episodeNum: 16,
        episodeName: "Top Secret",
        episodeDate: "March 27, 2007",
        episodeRanking: 8.1,
        episodeDescription:
          "A patient whose relative has called in a favor with Cuddy presents with nonspecific minor symptoms that turn life-threatening, but House is distracted by a dream and an inability to urinate.",
      },
      {
        episodeSeason: 3,
        episodeNum: 17,
        episodeName: "Fetal Position",
        episodeDate: "April 3, 2007",
        episodeRanking: 8.5,
        episodeDescription:
          "When a pregnant woman has a stroke, the team is at a loss after all tests reveal nothing, but when her organs start shutting down Cuddy takes over the case.",
      },
      {
        episodeSeason: 3,
        episodeNum: 18,
        episodeName: "Airborne",
        episodeDate: "April 10, 2007",
        episodeRanking: 9,
        episodeDescription:
          "House and Cuddy are flying back to the US from an international conference in Singapore. While en route a mysterious disease strikes one passenger and an epidemic unfolds, causing House to diagnose in midair since they have missed the halfway mark by passing the north pole. Back in Princeton, Wilson and House's lackeys have a confusing case of what is ailing a woman who came into the clinic and proceeded to have a seizure.",
      },
      {
        episodeSeason: 3,
        episodeNum: 19,
        episodeName: "Act Your Age",
        episodeDate: "April 17, 2007",
        episodeRanking: 8.2,
        episodeDescription:
          "A young girl is ailed with diseases that usually strike people much older than her 6 years of age. But before House can diagnose her, her brother starts exhibiting the same symptoms she was admitted with. During all of this House gives Wilson tickets that a patient had given to him for a play. Ensuing a discussion on why men take women to plays. Wilson decides to take Cuddy and the tug of war with House for her affections begins, although Cuddy insists that she only went with Wilson as a friend.",
      },
      {
        episodeSeason: 3,
        episodeNum: 20,
        episodeName: "House Training",
        episodeDate: "April 24, 2007",
        episodeRanking: 8.3,
        episodeDescription:
          "The cause of a woman's TIA stumps the team, and Foreman's family visits.",
      },
      {
        episodeSeason: 3,
        episodeNum: 21,
        episodeName: "Family",
        episodeDate: "December 1, 2006",
        episodeRanking: 8.4,
        episodeDescription:
          "Wilson is preparing his 14-year-old patient, Nick, for a bone marrow transplant when the donor, Nick's younger brother Matty, suddenly starts sneezing. Since Nick's immune system has been destroyed by the chemotherapy for his cancer, he cannot risk a marrow donation from Matty while Matty is ill. House decides that the fastest way to find out what's wrong with Matty is to make him worse. As the boys get sicker and sicker, House and his team race to cure Matty before both brothers die. Meanwhile, House battles Hector (his newly adopted dog) for supremacy and Foreman ...",
      },
      {
        episodeSeason: 3,
        episodeNum: 22,
        episodeName: "Resignation",
        episodeDate: "December 8, 2006",
        episodeRanking: 8.4,
        episodeDescription:
          "A college girl suddenly coughs up blood during karate class. Foreman resigns. A vegan couple has problems with floating poop. House secretly drugs Wilson with amphetamine.",
      },
      {
        episodeSeason: 3,
        episodeNum: 23,
        episodeName: "The Jerk",
        episodeDate: "December 15, 2006",
        episodeRanking: 8.5,
        episodeDescription:
          "When a teenage chess-player assaults his opponent, the team struggles to determine whether the problem is organic or psychological. Clinic Cases: Spotted sunburn.",
      },
      {
        episodeSeason: 3,
        episodeNum: 24,
        episodeName: "Human Error",
        episodeDate: "December 29, 2006",
        episodeRanking: 8.9,
        episodeDescription:
          "A couple risk their lives getting from Cuba to see House, but his preoccupation with staff issues may cost the woman her life.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "Alone",
        episodeDate: "September 25, 2007",
        episodeRanking: 9,
        episodeDescription:
          "House is off his game without the team, and Wilson uses an extreme tactic to force him into interviews.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "The Right Stuff",
        episodeDate: "October 2, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "House is forced to choose a new staff... and gathers 40 applicants to start narrowing down the field. Meanwhile, an Air Force pilot wants House to treat her secretly so she doesn't ruin her chances of becoming an astronaut.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "97 Seconds",
        episodeDate: "October 9, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "Down to 10 candidates for his team, House splits them into 2 groups to diagnose a patient whose short lifespan has been made even shorter. Foreman leads his own team to diagnose a patient at his new workplace.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Guardian Angels",
        episodeDate: "October 23, 2007",
        episodeRanking: 8.5,
        episodeDescription:
          "A woman seeing her dead mother stumps the recruits, especially once she begins seeing a recent victim.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Mirror Mirror",
        episodeDate: "October 30, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "A victim of a mugging presents with neurological symptoms and begins to mirror the behaviors of his doctors. Foreman joins the new fellows in seeking a diagnosis; Cameron and Chase takes bets on whom House will fire next.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Whatever It Takes",
        episodeDate: "November 6, 2007",
        episodeRanking: 8.6,
        episodeDescription:
          "House is taken by jet to help diagnose a dying CIA agent, leaving Foreman in charge of the team trying to find out why a young woman passed out after a drag car race.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Ugly",
        episodeDate: "November 13, 2007",
        episodeRanking: 8.3,
        episodeDescription:
          "House and his team are hampered by a reality television crew whilst battling over possible diagnoses for a craniofacial surgery patient.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "You Don't Want to Know",
        episodeDate: "November 20, 2007",
        episodeRanking: 8.6,
        episodeDescription:
          "A magician's heart stops during a performance. At first House dismisses the case, but later changes his mind when complications arise. House has a contest to determine the next one to leave the team.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "Games",
        episodeDate: "November 27, 2007",
        episodeRanking: 8.6,
        episodeDescription:
          "House treats a rock musician, and some of the candidates have to get past their personal biases, Wilson misdiagnoses a patient, and the winners are named.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "It's a Wonderful Lie",
        episodeDate: "January 29, 2008",
        episodeRanking: 8.4,
        episodeDescription:
          "House is equally obsessed with a mother and daughter who don't lie, and using Christmas to create discord among the team members.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "Frozen",
        episodeDate: "February 3, 2008",
        episodeRanking: 9.2,
        episodeDescription:
          "When a researcher at a South Pole base becomes ill, House must diagnose the case at a distance. Meanwhile, House tries to find out who Wilson is dating, and his new staff tries to get him cable.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "Don't Ever Change",
        episodeDate: "February 5, 2008",
        episodeRanking: 8.1,
        episodeDescription:
          "A woman collapses at her wedding. She led a different life style before her marriage, House insists she hasn't changed. Wilson starts dating Amber.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "No More Mr. Nice Guy",
        episodeDate: "April 28, 2008",
        episodeRanking: 8.1,
        episodeDescription:
          "House encounters a patient who is too nice for his own good, which is a bigger problem than his emergency room diagnosis; and House competes with Amber for Wilson's attention.",
      },
      {
        episodeSeason: 4,
        episodeNum: 14,
        episodeName: "Living the Dream",
        episodeDate: "December 5, 2007",
        episodeRanking: 8.3,
        episodeDescription:
          'House finds himself at odds with his team when he becomes convinced that an actor on his favorite soap, "Prescription Passion," has a serious medical condition.',
      },
      {
        episodeSeason: 4,
        episodeNum: 15,
        episodeName: "House's Head",
        episodeDate: "December 12, 2007",
        episodeRanking: 9.8,
        episodeDescription:
          "A bus that House was riding crashes. House claims there's a victim on the bus who is dying, but not from the bus accident. He stops at nothing to figure out who the patient is and what is ailing him/her.",
      },
      {
        episodeSeason: 4,
        episodeNum: 16,
        episodeName: "Wilson's Heart",
        episodeDate: "December 19, 2007",
        episodeRanking: 9.8,
        episodeDescription:
          "The team works to save someone close to a central character's heart. The key is inside House's head, but he is in a bad way himself.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Dying Changes Everything",
        episodeDate: "September 16, 2008",
        episodeRanking: 8.4,
        episodeDescription:
          "House's preoccupation with Wilson leaves his team without direction and endangers the patient, a female whose exhaustive work schedule and demanding boss may have caused her condition.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "Not Cancer",
        episodeDate: "September 23, 2008",
        episodeRanking: 8.2,
        episodeDescription:
          "Years after receiving body parts from an organ donor, five out of six recipients die within a few months, but not from organ rejection. House and the team race against time to figure out why before the final surviving recipient, a young woman who received the donor's cornea, mysteriously dies as well. House retains a comical private investigator to investigate patients, doctors, and his estranged friend, Wilson.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Adverse Events",
        episodeDate: "September 30, 2008",
        episodeRanking: 8.1,
        episodeDescription:
          "House's investigator gets information on everyone, which House uses to stir the pot of their lives while the team tries to cure a portraitist whose artistic view now looks like Picasso.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "Birthmarks",
        episodeDate: "October 14, 2008",
        episodeRanking: 9,
        episodeDescription:
          "House tries every delaying tactic available when Wilson forces him to attend his father's funeral. Meanwhile, the team tries to find the cause of a young woman's abdominal pain and hemorrhage that occurred in China.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "Lucky Thirteen",
        episodeDate: "October 21, 2008",
        episodeRanking: 8.5,
        episodeDescription:
          "Thirteen's one night stand collapses at her apartment, and her symptoms are so misleading that the diagnosis may be terminal. Meanwhile, revelation about Wilson and Thirteen occupy House.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "Joy",
        episodeDate: "October 28, 2008",
        episodeRanking: 8.6,
        episodeDescription:
          "House takes on a case where the patient has unexplained blackouts, and his daughter may hold the key to the diagnosis. Meanwhile, Cuddy prepares for her new arrival until there are complications with the birth mother.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "The Itch",
        episodeDate: "November 11, 2008",
        episodeRanking: 8.2,
        episodeDescription:
          "House takes time to dabble in Cameron and Chase's love life while he treats an agoraphobic patient she's brought to the team.",
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "Emancipation",
        episodeDate: "November 18, 2008",
        episodeRanking: 8,
        episodeDescription:
          "The team tries to treat a patient who keeps lying to them, and Foreman exerts some independence.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "Last Resort",
        episodeDate: "November 25, 2008",
        episodeRanking: 8.9,
        episodeDescription:
          "A person takes House, Thirteen and others as hostages. He's seen several doctors but none have found what ails him. As they work towards finding a solution, Thirteen makes decisions which leads her to think about her own condition.",
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "Let Them Eat Cake",
        episodeDate: "December 2, 2008",
        episodeRanking: 8.2,
        episodeDescription:
          "The drug trial brings back memories for Thirteen; Kutner and Taub scramble as they try to salvage a scam and save the team's patient whose gastric bypass may not have saved her life.",
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "Joy to the World",
        episodeDate: "December 9, 2008",
        episodeRanking: 8.4,
        episodeDescription:
          "A teenager collapses on stage, and the outcome will lead to a surprise for Cuddy. Wilson convinces House to be nice to his patients during the holidays. Foreman and Thirteen have issues when a trial patient drops from the program.",
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "Painless",
        episodeDate: "January 19, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "House treats a patient who's worn out by chronic pain. Cuddy tries to do her job and take care of her new child. Foreman and Thirteen's relationship stalls.",
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "Big Baby",
        episodeDate: "January 26, 2009",
        episodeRanking: 8,
        episodeDescription:
          "House maneuvers against a measured Cameron when she takes over Cuddy's duties, Foreman faces an ethical dilemma, and Cuddy has trouble bonding with the baby.",
      },
      {
        episodeSeason: 5,
        episodeNum: 14,
        episodeName: "The Greater Good",
        episodeDate: "February 2, 2009",
        episodeRanking: 8,
        episodeDescription:
          "A physician who gave up her career comes in for treatment, leading to tense encounters with the team. Meanwhile, Cuddy exacts revenge and Foreman's choice has devastating consequences.",
      },
      {
        episodeSeason: 5,
        episodeNum: 15,
        episodeName: "Unfaithful",
        episodeDate: "February 16, 2009",
        episodeRanking: 8.4,
        episodeDescription:
          "House treats a priest who's lost his faith, issues an ultimatum to Foreman and Thirteen, and plays with Cuddy's desire to have him attend - or is it not attend? - her baby's naming ceremony.",
      },
      {
        episodeSeason: 5,
        episodeNum: 16,
        episodeName: "The Softer Side",
        episodeDate: "February 23, 2009",
        episodeRanking: 8.5,
        episodeDescription:
          "House's team resents being made complicit in a web of lies parents have told their son when he's brought in for treatment that may be related to his intersexuality. Meanwhile, no one's content that House is happy.",
      },
      {
        episodeSeason: 5,
        episodeNum: 17,
        episodeName: "The Social Contract",
        episodeDate: "March 9, 2009",
        episodeRanking: 8.7,
        episodeDescription:
          "The team tries to diagnose a condition that leaves the patient saying anything that he thinks, no matter whom it hurts, and Wilson raises House's antennae when he passes up a monster truck rally.",
      },
      {
        episodeSeason: 5,
        episodeNum: 18,
        episodeName: "Here Kitty",
        episodeDate: "March 16, 2009",
        episodeRanking: 8.2,
        episodeDescription:
          "House treats a patient who is convinced she's dying because of a death predicting cat. Meanwhile Taub catches up with an old High School classmate and contemplates leaving the team.",
      },
      {
        episodeSeason: 5,
        episodeNum: 19,
        episodeName: "Locked In",
        episodeDate: "March 30, 2009",
        episodeRanking: 9.1,
        episodeDescription:
          "House is injured in a motorcycle accident. While recovering, he finds an accident victim suffering from a brain injury. House tries to prove the brain damage caused the accident, not vice versa, so he can treat the patient.",
      },
      {
        episodeSeason: 5,
        episodeNum: 20,
        episodeName: "Simple Explanation",
        episodeDate: "April 6, 2009",
        episodeRanking: 9.2,
        episodeDescription:
          "Taub treats a patient whose dying husband gets better as she becomes sicker, while the rest of the team deals with a devastating loss.",
      },
      {
        episodeSeason: 5,
        episodeNum: 21,
        episodeName: "Saviors",
        episodeDate: "April 13, 2009",
        episodeRanking: 8.4,
        episodeDescription:
          "House worries he's lost his mojo when he can't determine the reason for Cameron and Wilson's changed behaviors or his new patient's diagnosis.",
      },
      {
        episodeSeason: 5,
        episodeNum: 22,
        episodeName: "House Divided",
        episodeDate: "April 27, 2009",
        episodeRanking: 9.1,
        episodeDescription:
          "House's Amber hallucination becomes more aggressive as sleep deprivation takes its toll endangering a patient, and Chase's bachelor party ends in the emergency room.",
      },
      {
        episodeSeason: 5,
        episodeNum: 23,
        episodeName: "Under My Skin",
        episodeDate: "December 4, 2008",
        episodeRanking: 9.2,
        episodeDescription:
          "When all of House's efforts to rid himself of Amber fail, he turns to someone unexpected for assistance. Meanwhile, the team is left to fend for itself as they try to save a ballerina's life and career.",
      },
      {
        episodeSeason: 5,
        episodeNum: 24,
        episodeName: "Both Sides Now",
        episodeDate: "December 11, 2008",
        episodeRanking: 9.6,
        episodeDescription:
          "House and his team treat a patient who had his brain split in half, now it seems like one side of his brain is causing some health/behavioral issues. House plays games with Cuddy over the night he detoxed, and those events will cause major changes. Cameron and Chase come to a decision.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "Broken",
        episodeDate: "September 21, 2009",
        episodeRanking: 9.7,
        episodeDescription:
          "House fights his doctors, the staff and his fellow patients when he's forced to stay in the psychiatric hospital under threat of permanently losing his medical license.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "Epic Fail",
        episodeDate: "September 28, 2009",
        episodeRanking: 8.6,
        episodeDescription:
          "Vince hallucinates during testing of a video game, he's developing. House quits his old job after mental hospital. He joins Wilson in cooking class. Foreman takes over on trial.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "The Tyrant",
        episodeDate: "October 5, 2009",
        episodeRanking: 9,
        episodeDescription:
          "Foreman hires Chase and Cameron as his new team. An African tyrant becomes Foreman and co.'s patient. They're not happy. House is back as consultant. House meets Wilson's downstairs neighbor.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Instant Karma",
        episodeDate: "October 12, 2009",
        episodeRanking: 8.5,
        episodeDescription:
          "A wealthy businessman brings his teenage son, who is suffering from inexplicable stomach pains, to Princeton Plainsboro and insists on having Dr. House handle the case. The father of the patient believes the karmic penalty of his financial success is that he is victim to personal tragedy, and that the answer to his son's medical mystery lies in a reverse of fate rather than medical treatment. Meanwhile, Foreman and Chase prepare to present information on the Dibala case.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "Brave Heart",
        episodeDate: "October 19, 2009",
        episodeRanking: 8.5,
        episodeDescription:
          "A cop believes, he's genetically doomed to die of heart failure at 40 (next week), so he takes big risks at work, landing him with Cameron. She gets House to look at him.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "Known Unknowns",
        episodeDate: "November 9, 2009",
        episodeRanking: 8.3,
        episodeDescription:
          "A teenage girl is brought to the hospital with severely swollen appendages after a wild night out.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "Teamwork",
        episodeDate: "November 16, 2009",
        episodeRanking: 8.2,
        episodeDescription:
          "After House's medical license is reinstated, he reclaims his role as Head of Diagnostics in time to treat Hank Hardwick, an adult film star admitted to Princeton Plainsboro for pulsating eye pain. Meanwhile, Cuddy is reminded that the hospial is not conducive to healthy personal relationships, and House angles to form a dream team.",
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "Ignorance Is Bliss",
        episodeDate: "November 23, 2009",
        episodeRanking: 8.3,
        episodeDescription:
          "A man with IQ 178 works as courier and collapses in a bookstore. House is still playing his games for Cuddy's attention. Chase punches him.",
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "Wilson",
        episodeDate: "November 30, 2009",
        episodeRanking: 8.9,
        episodeDescription:
          "When an old friend and former patient of Wilson's experiences paralysis in his right arm, Wilson puts himself on the case. House wagers Wilson that the patient's symptoms result from new cancer cells. Wilson accepts even though he is reluctant to believe the cancer has returned. With the help of the team, Wilson works to find a more optimistic diagnosis, but when things take a turn for the worse, and Wilson must address his inability to separate patient from friend. Meanwhile, Cuddy seeks advice in her search for real estate.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "The Down Low",
        episodeDate: "January 11, 2010",
        episodeRanking: 8.9,
        episodeDescription:
          "When drug dealer Mickey mysteriously collapses while negotiating a sale, his partner-in-crime, Eddie, accompanies him to Princeton Plainsboro for treatment. But with a major deal pending, Mickey is not forthcoming with the necessary personal information the team needs to treat him. As Mickey's condition worsens, the team resorts to old-fashioned detective work to solve the case. Meanwhile, House and Wilson compete for the affection of a new neighbor, and Chase, Thirteen and Taub attempt to play a practical joke on Foreman.",
      },
      {
        episodeSeason: 6,
        episodeNum: 11,
        episodeName: "Remorse",
        episodeDate: "January 25, 2010",
        episodeRanking: 8.7,
        episodeDescription:
          "The team takes on the case of Valerie, an attractive female executive experiencing random episodes of excruciating pain. House agrees to take the case based on Valerie's looks, and while treating her, the men on the team are charmed by Valerie's beauty and personality, with Thirteen looking beyond the superficial to try to discover a link to her illness. Meanwhile, House uncharacteristically attempts to alleviate his conscience by reaching out to a former medical school colleague he wronged.",
      },
      {
        episodeSeason: 6,
        episodeNum: 12,
        episodeName: "Moving the Chains",
        episodeDate: "February 1, 2010",
        episodeRanking: 8,
        episodeDescription:
          "House and the team rush to treat an ailing college football star in time for the patient to compete in NFL tryouts. But when the patient experiences an onslaught of varied and unusual symptoms, the team has trouble reaching a consensus on how to effectively treat him in time. Meanwhile, Foreman's brother Marcus makes a surprise visit to the hospital.",
      },
      {
        episodeSeason: 6,
        episodeNum: 13,
        episodeName: "5 to 9",
        episodeDate: "February 8, 2010",
        episodeRanking: 8.5,
        episodeDescription:
          "This is a hectic day in Cuddy's life from 5AM to 9PM. Giving an insurance company an ultimatum could bankrupt the hospital. She fires an employee for theft. Her child's sick. A patient won't pay for a reattached thumb.",
      },
      {
        episodeSeason: 6,
        episodeNum: 14,
        episodeName: "Private Lives",
        episodeDate: "March 8, 2010",
        episodeRanking: 8,
        episodeDescription:
          "House and the team take on the case of an avid blogger admitted with sudden bruising and bleeding. From her hospital bed, the patient blogs about her symptoms, doctors and prospective diagnoses to her dedicated band of followers and solicits their advice on a course of treatment. Such openness leads the team to contemplate the value of privacy, especially after House and Wilson uncover secrets from one another's past. Meanwhile, Chase is coaxed into testing out the dating scene .",
      },
      {
        episodeSeason: 6,
        episodeNum: 15,
        episodeName: "Black Hole",
        episodeDate: "March 15, 2010",
        episodeRanking: 8,
        episodeDescription:
          "Physics student and his father, Artie, bring in the kid's lover Abby Nash, who nearly suffocated in foam during a planetarium lecture. The team eliminates everything except an allergy to something in her body. House presses Wilson to buy furniture as a way to express his personality.",
      },
      {
        episodeSeason: 6,
        episodeNum: 16,
        episodeName: "Lockdown",
        episodeDate: "April 12, 2010",
        episodeRanking: 8.8,
        episodeDescription:
          "When a newborn disappears from the nursery, Princeton Plainsboro goes on lockdown, preventing anyone from entering, leaving or moving within the hospital. While House and his team members are trapped in various parts of the building, new insights about the team's personal histories, relationships and regrets surface.",
      },
      {
        episodeSeason: 6,
        episodeNum: 17,
        episodeName: "Knight Fall",
        episodeDate: "April 19, 2010",
        episodeRanking: 7.9,
        episodeDescription:
          "At a renaissance festival, a knight fights for the princess's hand. He falls to the ground with red eyes but no wounds. Wilson dates his first ex-wife. House and 13 investigate dressed up at the renaissance festival.",
      },
      {
        episodeSeason: 6,
        episodeNum: 18,
        episodeName: "Open and Shut",
        episodeDate: "April 26, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "A woman in an open marriage suddenly gets strong belly pain. Taub would like an open marriage. Wilson's new relationship with his ex is shaky.",
      },
      {
        episodeSeason: 6,
        episodeNum: 19,
        episodeName: "The Choice",
        episodeDate: "December 3, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "The team takes on the case of an ailing groom-to-be who harbors undisclosed secrets from a previous relationship. As his fianc√©e tries to get answers to her many questions, a frustrated team winnows down the possibilities. Meanwhile, House spends extra-curricular time with his Princeton Plainsboro colleagues, performing a karaoke rendition of a Gladys Knight & The Pips classic with Foreman and Chase.",
      },
      {
        episodeSeason: 6,
        episodeNum: 20,
        episodeName: "Baggage",
        episodeDate: "December 10, 2009",
        episodeRanking: 8.9,
        episodeDescription:
          "At therapy with Dr. Nolan, House tells about a cute amnesiac in ER, Wilson throwing him out and his old apartment being a mess after Alvarez broke in.",
      },
      {
        episodeSeason: 6,
        episodeNum: 21,
        episodeName: "Help Me",
        episodeDate: "December 17, 2009",
        episodeRanking: 9.6,
        episodeDescription:
          "Cuddy, House and members of the team join forces with a search-and-rescue team to provide much-needed medical attention at the scene of an emergency.",
      },
      {
        episodeSeason: 7,
        episodeNum: 1,
        episodeName: "Now What?",
        episodeDate: "September 20, 2010",
        episodeRanking: 8.3,
        episodeDescription:
          "House and Cuddy are exploring the ramifications of those feelings and attempting to make a real relationship work. Meanwhile, due to a colleague's illness, Princeton Plainsboro is left without a neurosurgeon on site, threatening the hospital's accreditation as a Level 1 Trauma Center. As the team attempts treatment to get their sick colleague back to work, they discover there is more to the illness than they originally suspected and turn to House for direction. Instead, House remains elusive, leaving the team on its own.",
      },
      {
        episodeSeason: 7,
        episodeNum: 2,
        episodeName: "Selfish",
        episodeDate: "September 27, 2010",
        episodeRanking: 8.6,
        episodeDescription:
          "When Della, a seemingly healthy and active 14-year-old, suddenly collapses during a skateboarding exhibition, House and his team struggle to diagnose her condition and reassure her parents who already have to cope with their son's terminal illness. After her body rejects a donor lung, and with time running out to save her life, Della's family is left with little hope of securing a new donor and faced with a seemingly impossible decision regarding the fate of both children. Meanwhile, House tries to appease an elderly father and his son at the clinic, and House and ...",
      },
      {
        episodeSeason: 7,
        episodeNum: 3,
        episodeName: "Unwritten",
        episodeDate: "October 4, 2010",
        episodeRanking: 8.3,
        episodeDescription:
          "A famous novelist finishes her last novel and gets ready to shoot herself, when she has a seizure. House gives her a 72 hour psych hold to find out what's wrong with her. House and Wilson go on a go-kart double-date.",
      },
      {
        episodeSeason: 7,
        episodeNum: 4,
        episodeName: "Massage Therapy",
        episodeDate: "October 11, 2010",
        episodeRanking: 7.9,
        episodeDescription:
          "When a patient named Margaret McPherson is admitted to Princeton Plainsboro after suffering severe and uncontrollable vomiting, House and the team make unexpected discoveries about her identity as they assess her symptoms. When the symptoms don't improve, the team looks to the patient's medical history to unearth more about her past. Meanwhile, House gives Chase's new hire a cold welcome, and a visit from House's massage therapist forces House and Cuddy to confront the reservations in their relationship.",
      },
      {
        episodeSeason: 7,
        episodeNum: 5,
        episodeName: "Unplanned Parenthood",
        episodeDate: "October 18, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          "A newborn baby has problems breathing. House and team run diagnosis. House babysits Cuddy's daughter. Did she eat a dime? Foreman finds a new female doctor for the team. House fires her and Taub has to find a new one.",
      },
      {
        episodeSeason: 7,
        episodeNum: 6,
        episodeName: "Office Politics",
        episodeDate: "November 8, 2010",
        episodeRanking: 8.1,
        episodeDescription:
          "It's election season, and in the midst of a tight campaign, an incumbent New Jersey senator's campaign manager falls ill with liver failure and temporary paralysis. Cuddy pushes House to add a female doctor to his team by hiring brilliant third-year medical student Martha Masters in Thirteen's absence. House and the team are wary of the young doctor's lack of experience and medical perspective, but are forced to give their new by-the-book teammate a chance to prove herself. After the campaigning senator makes a surprising announcement, House and the team look to the ...",
      },
      {
        episodeSeason: 7,
        episodeNum: 7,
        episodeName: "A Pox on Our House",
        episodeDate: "November 15, 2010",
        episodeRanking: 8.7,
        episodeDescription:
          "After a 200-year-old medicine jar found on an off-shore shipwreck shatters in a teenage girl's palm, she is admitted to Princeton Plainsboro for symptoms closely linked to smallpox. When the Center for Disease Control's Dr. Dave Broda institutes a lockdown on the hospital and suspends House's team's ability to diagnose, Masters is skeptical about Broda's diagnosis and becomes convinced that the patient is suffering from a different disease. The girl's father soon experiences similar symptoms, and House is forced to make a precarious decision that puts his own life in ...",
      },
      {
        episodeSeason: 7,
        episodeNum: 8,
        episodeName: "Small Sacrifices",
        episodeDate: "November 22, 2010",
        episodeRanking: 7.7,
        episodeDescription:
          "Science and faith are called into question when a patient is admitted to the hospital following his reenactment of the Crucifixion. The patient, Ramon Silva, refuses to undergo the prescribed treatment, and the team learns that after his daughter's cancer was cured, he pledged an oath of self-sacrifice to God. With little time to save Ramon's life, the team struggles to understand his reasoning and seemingly extreme religious convictions, but eventually learn that faith is not an argument. Meanwhile, Taub questions his wife Rachel about her relationship with an ...",
      },
      {
        episodeSeason: 7,
        episodeNum: 9,
        episodeName: "Larger Than Life",
        episodeDate: "January 17, 2011",
        episodeRanking: 8.4,
        episodeDescription:
          "When a woman falls on the subway tracks, Jack jumps down, saves her and faints. Martha finds him in ER. When the hospital uses Taub's photo for promotion, his wife's aroused. House meets Cuddy's mom.",
      },
      {
        episodeSeason: 7,
        episodeNum: 10,
        episodeName: "Carrot or Stick",
        episodeDate: "January 24, 2011",
        episodeRanking: 8,
        episodeDescription:
          "A disciplinary training camp drill instructor collapses with back pain. One of the 24 boys joins him in hospital. Someone has access to Chase's social media account and credit card. Cuddy wants Rachel in a good preschool.",
      },
      {
        episodeSeason: 7,
        episodeNum: 11,
        episodeName: "Family Practice",
        episodeDate: "February 7, 2011",
        episodeRanking: 8.6,
        episodeDescription:
          "Cuddy's mom has heart problems and is admitted. Secrets come out about her mom.",
      },
      {
        episodeSeason: 7,
        episodeNum: 12,
        episodeName: "You Must Remember This",
        episodeDate: "February 14, 2011",
        episodeRanking: 7.9,
        episodeDescription:
          "When a waitress with a perfect memory suffers temporary paralysis, her older sister visits her in the hospital, which triggers high stress levels and even more health complications. The patient's sharp memory proves detrimental when a grudge she's been holding against her sibling gets in the way of receiving proper medical treatment, and Masters discovers that patching a broken sisterhood may prove to be more complex than diagnosing the patient. Meanwhile, Foreman volunteers to help Taub prepare for a medical examination, and House, determined to help Wilson get back ...",
      },
      {
        episodeSeason: 7,
        episodeNum: 13,
        episodeName: "Two Stories",
        episodeDate: "February 21, 2011",
        episodeRanking: 8.9,
        episodeDescription:
          "House entertains a school class on Career Day telling about his patient, a college student, who coughed up his lung. He spices up the story with quotes from movies. He later gets advice from 2 students outside principal's office.",
      },
      {
        episodeSeason: 7,
        episodeNum: 14,
        episodeName: "Recession Proof",
        episodeDate: "February 28, 2011",
        episodeRanking: 7.9,
        episodeDescription:
          "A man cleans crime scenes after losing his real estate company. His wife doesn't know. He suddenly gets a fit at a restaurant. Masters thinks, he lied about his job. Foreman throws Taub out. Cuddy gets an award.",
      },
      {
        episodeSeason: 7,
        episodeNum: 15,
        episodeName: "Bombshells",
        episodeDate: "March 7, 2011",
        episodeRanking: 8.6,
        episodeDescription:
          "Tension reaches new heights when Cuddy faces sobering news that propels her to reevaluate her priorities. While House is distracted by his concern for Cuddy's well-being, the team treats a teenage patient whose worsening symptoms and suspicious body scars indicate more than just physical illness. Sensing the teen's troubled emotional and mental state, Taub turns to the patient's personal life for clues and uncovers disturbing home videos that could put the lives of his peers in danger. Meanwhile, Cuddy remains hopeful that House will be fully present when she needs ...",
      },
      {
        episodeSeason: 7,
        episodeNum: 16,
        episodeName: "Out of the Chute",
        episodeDate: "March 14, 2011",
        episodeRanking: 8.9,
        episodeDescription:
          "Cuddy dumped House. He moves into a luxury hotel and goes on a Vicodin, booze and cute hooker binge. The team gets a trampled rodeo bull rider but needs House to save him. Masters has a crush on their patient.",
      },
      {
        episodeSeason: 7,
        episodeNum: 17,
        episodeName: "Fall from Grace",
        episodeDate: "March 21, 2011",
        episodeRanking: 8.4,
        episodeDescription:
          "A young homeless man who is a former drug addict is found in a park showing signs of olfactory impairment and horrific scars and burn marks on his chest. With an uncertain identity and the patient's severely worsening conditions, the team looks to the patient's personal records and family history in order to understand his detachment. Meanwhile, Cuddy confides in Wilson and expresses her guilt for ending her relationship with House, and just as the team warms up to the patient, they discover a disturbing secret about the man whose life they saved.",
      },
      {
        episodeSeason: 7,
        episodeNum: 18,
        episodeName: "The Dig",
        episodeDate: "April 11, 2011",
        episodeRanking: 8.9,
        episodeDescription:
          "The team treats a patient with a secret home life. Thirteen is released from prison. House enlists Thirteen to participate in a spud gun competition.",
      },
      {
        episodeSeason: 7,
        episodeNum: 19,
        episodeName: "Last Temptation",
        episodeDate: "April 18, 2011",
        episodeRanking: 8.5,
        episodeDescription:
          "Masters faces a career crossroads on her last day as a medical student and struggles with the choice to continue on the path to become a surgeon or to accept the rare opportunity to join House's team officially. Meanwhile, the team treats a 16-year-old girl who inexplicably collapsed days before embarking on an ambitious sailing tour around the globe. Despite the patient's life-changing diagnosis, the patient's family insists on getting her back on the seas in time for her potentially record-breaking launch. But to the team's surprise, including House, Masters makes a...",
      },
      {
        episodeSeason: 7,
        episodeNum: 20,
        episodeName: "Changes",
        episodeDate: "December 2, 2010",
        episodeRanking: 7.9,
        episodeDescription:
          "Arlene Cuddy returns and House and Cuddy's jobs are in danger when Arlene tries to sue the hospital.",
      },
      {
        episodeSeason: 7,
        episodeNum: 21,
        episodeName: "The Fix",
        episodeDate: "December 9, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "When House and Wilson bet on a boxing match and disagree over the outcome, Wilson gives him exactly one day to pay up or prove him wrong.",
      },
      {
        episodeSeason: 7,
        episodeNum: 22,
        episodeName: "After Hours",
        episodeDate: "December 16, 2010",
        episodeRanking: 9.2,
        episodeDescription:
          "Darrien steals a car after getting stabbed and hurries to her friend 13's home for help. Chase brings an ultrasound and helps. House performs surgery on his own leg at home after using experimental drugs.",
      },
      {
        episodeSeason: 7,
        episodeNum: 23,
        episodeName: "Moving On",
        episodeDate: "December 23, 2010",
        episodeRanking: 8.5,
        episodeDescription:
          "A known performance artist collapses during a performance. She ends with House's team, which is what she wanted. House is more self-destructive and irresponsible than usual. Cuddy's sister finds a date for her.",
      },
      {
        episodeSeason: 8,
        episodeNum: 1,
        episodeName: "Twenty Vicodin",
        episodeDate: "October 3, 2011",
        episodeRanking: 8.8,
        episodeDescription:
          'House gets parole at his hearing, but he still has to survive 5 more days in a prison filled with violent criminals. One of them wants 20 Vicodin "or else". He helps the prison doctor diagnose a patient.',
      },
      {
        episodeSeason: 8,
        episodeNum: 2,
        episodeName: "Transplant",
        episodeDate: "October 10, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "A surprising visitor makes House an offer he can't refuse by giving him the opportunity to help the Princeton Plainsboro team treat a unique patient in order to save the life of an organ recipient being administered by Wilson. Although House finds himself back on familiar ground, he quickly realizes that much has changed since he left, and he is forced to work on the case with smart yet timid resident Dr. Chi Park. After several inconclusive treatments and with time running out, House and Dr. Park are left with one last option to examine the patient's medical history ...",
      },
      {
        episodeSeason: 8,
        episodeNum: 3,
        episodeName: "Charity Case",
        episodeDate: "October 17, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "When Benjamin suddenly collapses after making a rare and generous donation, House and Dr. Chi Park are convinced that his extreme altruistic behavior may indicate a deeper medical disorder. With no definitive explanation for Benjamin's loss of consciousness and unresponsiveness to treatment, House pushes just the right buttons to recruit former prison doctor Jessica Adams to volunteer her time and expertise to the case. Benjamin then makes a bold but life-threatening offer that could save another life, and the team must diagnose his disorder before he puts his own ...",
      },
      {
        episodeSeason: 8,
        episodeNum: 4,
        episodeName: "Risky Business",
        episodeDate: "October 31, 2011",
        episodeRanking: 7.9,
        episodeDescription:
          "A businessman, about to move 1000s of jobs to China, needs to see a doctor. House needs a donation. Park bets with House on not getting fired. House tries to raise funds for insider trading in his patient's company.",
      },
      {
        episodeSeason: 8,
        episodeNum: 5,
        episodeName: "The Confession",
        episodeDate: "November 7, 2011",
        episodeRanking: 8.4,
        episodeDescription:
          "There's money now to hire Chase, Taub and Adams. A \"model citizen\" gets a seizure while cheating on his wife in a motel. He's House's new team's first patient. Is Taub dad to any of \"his\" two babies?",
      },
      {
        episodeSeason: 8,
        episodeNum: 6,
        episodeName: "Parents",
        episodeDate: "November 14, 2011",
        episodeRanking: 8,
        episodeDescription:
          "A teenage boy attempting to follow in his late father's footsteps as an entertainer is admitted to Princeton Plainsboro with partial paralysis. As the team searches for a bone marrow match, they uncover a disturbing family secret. Meanwhile, House looks for creative ways to remove his ankle monitor so that he can attend a boxing match in Atlantic City, and he treats a patient who is convinced he is suffering from diabetes. Also, Taub faces a tough decision when his ex-wife Rachel tells him that she wants to move across the country with their infant daughter.",
      },
      {
        episodeSeason: 8,
        episodeNum: 7,
        episodeName: "Dead & Buried",
        episodeDate: "November 21, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "House is more interested in a case that Foreman brings of a 4 year old dead boy than the 14 year old live girl. The team takes care of her while he sees the boy's dad and corpse.",
      },
      {
        episodeSeason: 8,
        episodeNum: 8,
        episodeName: "Perils of Paranoia",
        episodeDate: "November 28, 2011",
        episodeRanking: 7.9,
        episodeDescription:
          "A prosecutor in court thinks, he has a heart attack. Is it an anxiety attack? He has an arsenal hidden from his wife in their home. Taub tries to fix Foreman up with a nurse.",
      },
      {
        episodeSeason: 8,
        episodeNum: 9,
        episodeName: "Better Half",
        episodeDate: "January 23, 2012",
        episodeRanking: 8.1,
        episodeDescription:
          "A man with Alzheimer's is offered a trial treatment after which he pukes blood. He ends with House and co. His wife claims to have an asexual marriage. House doesn't believe in asexual and bets Wilson.",
      },
      {
        episodeSeason: 8,
        episodeNum: 10,
        episodeName: "Runaways",
        episodeDate: "January 30, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "A runaway girl thinks she has asthma. While seeing House, her ear starts bleeding. Further treatment requires adult consent or social services. House enjoys not having an ankle monitor.",
      },
      {
        episodeSeason: 8,
        episodeNum: 11,
        episodeName: "Nobody's Fault",
        episodeDate: "February 6, 2012",
        episodeRanking: 9.2,
        episodeDescription:
          "When a violent incident involving a patient has serious consequences for one staff member, House and the team are placed under review by Dr. Walter Cofield, Foreman's former mentor and current Chief of Neurology. As House and each member of his team recount the details of the dramatic and life-threatening incident, Cofield must weigh the team's unconventional brand of collaboration against their ability to save lives.",
      },
      {
        episodeSeason: 8,
        episodeNum: 12,
        episodeName: "Chase",
        episodeDate: "February 13, 2012",
        episodeRanking: 8.9,
        episodeDescription:
          "Chase is back. His first patient is a cute nun about to make her final vow. While still blaming House, he needs his help with his patient. House and Taub try to one-up each other with pranks.",
      },
      {
        episodeSeason: 8,
        episodeNum: 13,
        episodeName: "Man of the House",
        episodeDate: "February 20, 2012",
        episodeRanking: 8,
        episodeDescription:
          'A marriage counselor collapses during a speaking engagement, but when he is put under close evaluation, the team notice changes in his behavior that conflict with his motivational message on the roles of men and women. Meanwhile, House and his Ukrainian "wife" Dominika make a deal to convince Immigration that they are a happily married couple. Also, House decides to name a team leader.',
      },
      {
        episodeSeason: 8,
        episodeNum: 14,
        episodeName: "Love Is Blind",
        episodeDate: "March 19, 2012",
        episodeRanking: 8,
        episodeDescription:
          "A blind man has just bought an engagement ring when his hearing gets super sensitive. Seizure? House's mom drops by with a surprise. Park has an LSD trip.",
      },
      {
        episodeSeason: 8,
        episodeNum: 15,
        episodeName: "Blowing the Whistle",
        episodeDate: "April 2, 2012",
        episodeRanking: 7.4,
        episodeDescription:
          "A patient is caught between family and a code of honor.",
      },
      {
        episodeSeason: 8,
        episodeNum: 16,
        episodeName: "Gut Check",
        episodeDate: "April 9, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "A hockey player's on-ice fighting takes a turn for the worse.",
      },
      {
        episodeSeason: 8,
        episodeNum: 17,
        episodeName: "We Need the Eggs",
        episodeDate: "April 16, 2012",
        episodeRanking: 7.9,
        episodeDescription:
          'House and the team take on the case of a man who starts tearing blood. Meanwhile, House is interviewing for a new favorite hooker, since his current favorite, Emily, has decided to get married and leave the business. Desperate for Emily "companionship," House teams up with his "wife" Dominika to sabotage Emily\'s budding relationship.',
      },
      {
        episodeSeason: 8,
        episodeNum: 18,
        episodeName: "Body and Soul",
        episodeDate: "April 23, 2012",
        episodeRanking: 8,
        episodeDescription: "The team analyzes the significance of dreams.",
      },
      {
        episodeSeason: 8,
        episodeNum: 19,
        episodeName: "The C Word",
        episodeDate: "April 30, 2012",
        episodeRanking: 9,
        episodeDescription:
          "6 y.o. Emily gets a nose bleed and faints. Her dad gets her to the hospital, her mom's a doctor. Wilson has cancer, House is there for him.",
      },
      {
        episodeSeason: 8,
        episodeNum: 20,
        episodeName: "Post Mortem",
        episodeDate: "December 7, 2011",
        episodeRanking: 8.8,
        episodeDescription:
          "The team treats a fellow doctor wary of their skills. Meanwhile Wilson forces House in a roadtrip.",
      },
      {
        episodeSeason: 8,
        episodeNum: 21,
        episodeName: "Holding On",
        episodeDate: "December 14, 2011",
        episodeRanking: 9.1,
        episodeDescription:
          "A patient's illness has its roots in the body and mind. Wilson, and House, tries to come to term with the cancer.",
      },
      {
        episodeSeason: 8,
        episodeNum: 22,
        episodeName: "Everybody Dies",
        episodeDate: "December 21, 2011",
        episodeRanking: 9.3,
        episodeDescription:
          "Treating a drug addict patient results in House examining his life, his future and confronting his own personal demons.",
      },
    ],
  },
  {
    showId: 4,
    showName: "New Girl",
    showYear: 2011,
    showImg:
      "https://m.media-amazon.com/images/M/MV5BMjA0MDc1NTk0Ml5BMl5BanBnXkFtZTgwMTk2ODA5NDM@._V1_.jpg",
    showGenre: "Comedy, Romance",
    showCast: "Joey Deschanel, Jake Johnson",
    showSeasonsNum: 7,
    showDescription:
      "After a bad break-up, Jess, an offbeat young woman, moves into an apartment loft with three single men. Although they find her behavior very unusual, the men support her - most of the time.",
    slug: "new-girl",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Pilot",
        episodeDate: "September 20, 2011",
        episodeRanking: 7.7,
        episodeDescription:
          "After breaking up with her two-timing boyfriend, schoolteacher Jess Day moves in with three single males: a bartender, a womanizer, and a personal trainer.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Kryptonite",
        episodeDate: "September 27, 2011",
        episodeRanking: 7.3,
        episodeDescription:
          "Nick and Schmidt help Jess get her things out of her ex's apartment. Later, Jess meets new roomie Winston, who's back from playing basketball abroad.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Wedding",
        episodeDate: "October 4, 2011",
        episodeRanking: 7.6,
        episodeDescription:
          "Fearful that he'll run into his ex-girlfriend at a wedding, Nick asks Jess to be his date. Meanwhile, Winston takes his role as an usher seriously.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Naked",
        episodeDate: "November 1, 2011",
        episodeRanking: 8,
        episodeDescription:
          "When Jess walks in on Nick naked, his confidence is sent to an all-time low, just after a pretty co-worker agrees to go out with him.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Cece Crashes",
        episodeDate: "November 8, 2011",
        episodeRanking: 7.8,
        episodeDescription:
          "Cece crashes at the loft after a bad breakup, and convinces Jess that Nick likes her more than just as a roommate.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Thanksgiving",
        episodeDate: "November 15, 2011",
        episodeRanking: 7.8,
        episodeDescription:
          "Jess invites Paul, a music teacher at her school on whom she always has had a crush, to the gang's big Thanksgiving dinner at the loft, which naturally goes horribly awry.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "Bells",
        episodeDate: "November 29, 2011",
        episodeRanking: 7.1,
        episodeDescription:
          "Jess gets jealous when Winston joins her troubled-youth handbell quartet and instantly becomes a natural. Meanwhile Nick and Schmidt engage in class warfare when the toilet breaks and they each have their own idea of how to get it fixed.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "Bad in Bed",
        episodeDate: "December 6, 2011",
        episodeRanking: 7.5,
        episodeDescription:
          "When Jess decides to take her relationship with Paul to the next level, she consults with the guys for some sex advice. Meanwhile, Schmidt worms his way into his boss' baby shower to compete with his office female counterpart.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "The 23rd",
        episodeDate: "December 13, 2011",
        episodeRanking: 7.7,
        episodeDescription:
          "The gang attends Schmidt's holiday office party and Jess frets when she receives an expensive gift from Paul.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "The Story of the 50",
        episodeDate: "January 17, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "When Schmidt's plans for his 29th birthday fall apart, Jess takes charge and enlists the help of her school's party hungry vice-principal. Meanwhile, Nick begrudgingly has his first date at Schmidt's party with a beautiful lawyer who harbors a secret, and the gang argues why one of them has to place a 50 dollar bill in the douchebag jar.",
      },
      {
        episodeSeason: 1,
        episodeNum: 11,
        episodeName: "Jess & Julia",
        episodeDate: "January 31, 2012",
        episodeRanking: 7.9,
        episodeDescription:
          "Nick panics when Julia doesn't want to put a label on their relationship. Meanwhile, Jess enlists Julia to help her get out of a traffic ticket, Winston reconnects with a former booty call and Schmidt is baffled as to why his shower towel is always damp.",
      },
      {
        episodeSeason: 1,
        episodeNum: 12,
        episodeName: "The Landlord",
        episodeDate: "February 7, 2012",
        episodeRanking: 8.1,
        episodeDescription:
          "Against Nick's wishes, Jess makes it her mission to get the loft's cantankerous landlord to like her. In doing so, she inadvertently jeopardizes their living situation and the guys are forced to admit they've made some \"unofficial\" changes to the apartment. Meanwhile Schmidt tries to decipher what he thinks are mixed signals from his boss Kim.",
      },
      {
        episodeSeason: 1,
        episodeNum: 13,
        episodeName: "Valentine's Day",
        episodeDate: "February 14, 2012",
        episodeRanking: 7.9,
        episodeDescription:
          "Single for the first time on Valentine's Day, Jess convinces Schmidt to be her wingman as she attempts to have an attachment-free fling with a handsome stranger. Nick's romantic plans are foiled when he finds himself spending more time with Julia's law firm assistant than with her. Winston becomes one of the girls when Shelby invites him over on the holiday.",
      },
      {
        episodeSeason: 1,
        episodeNum: 14,
        episodeName: "Bully",
        episodeDate: "February 21, 2012",
        episodeRanking: 7.4,
        episodeDescription:
          "When Jess tries to intervene with a classroom bully she finds herself the target of the bad seed student. Schmidt, meanwhile, is thrilled over his post-Valentine's sexcapades, but hates that his paramour wants to keep it a secret; and Nick goes into a tailspin when Julia sends him a cactus.",
      },
      {
        episodeSeason: 1,
        episodeNum: 15,
        episodeName: "Injured",
        episodeDate: "March 6, 2012",
        episodeRanking: 7.9,
        episodeDescription:
          "When Nick is hurt playing a game of touch football and Jess discovers he doesn't have insurance, she brings him to her doctor friend - an OB-GYN. The gang rallies together and Nick evaluates his life when his seemingly innocuous back injury may prove to be more serious than thought.",
      },
      {
        episodeSeason: 1,
        episodeNum: 16,
        episodeName: "Control",
        episodeDate: "March 13, 2012",
        episodeRanking: 7.4,
        episodeDescription:
          'After Jess realizes that Schmidt is unfairly doing all of the housework, she pushes him to "go on strike," and the entire ecosystem of the loft is thrown off balance. Meanwhile, Nick scrambles when he must pay up to Winston after losing a poker game.',
      },
      {
        episodeSeason: 1,
        episodeNum: 17,
        episodeName: "Fancyman Part 1",
        episodeDate: "March 20, 2012",
        episodeRanking: 7.9,
        episodeDescription:
          "Jess reluctantly dates the wealthy father of one of her students. Meanwhile, Nick attempts to buy a new cell phone and Schmidt and Winston get ultra-competitive playing bar trivia.",
      },
      {
        episodeSeason: 1,
        episodeNum: 18,
        episodeName: "Fancyman Part 2",
        episodeDate: "March 27, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Jess's first date with Russell ended with a pat on the back. The second date ends abruptly. He explains he is out of dating practice. Nick's friend visits and helps him get over Julia. Winston finds out about Schmidt & CeCe.",
      },
      {
        episodeSeason: 1,
        episodeNum: 19,
        episodeName: "Secrets",
        episodeDate: "April 3, 2012",
        episodeRanking: 8.2,
        episodeDescription:
          "Winston shares the secret about Schmidt and CeCe with Nick, and Nick tells Jess. Jess is upset CeCe did not tell her when it started and it puts a strain on their friendship. Nick's dating younger women and asks Schmidt for help to handle it.",
      },
      {
        episodeSeason: 1,
        episodeNum: 20,
        episodeName: "Normal",
        episodeDate: "April 10, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "Jess invites Russell to stay overnight at her place and is worried about how the guys will react. Winston gets a job at a radio station but finds it is not what he thought it would be. Nick pitches one of his marketing ideas to Russell.",
      },
      {
        episodeSeason: 1,
        episodeNum: 21,
        episodeName: "Kids",
        episodeDate: "April 17, 2012",
        episodeRanking: 7.9,
        episodeDescription:
          "Jess babysits Russell's pre-teen daughter for the weekend and meets his ex-wife. Then, Schmidt and Cece panic when they think she's pregnant. Also, Nick's new girlfriend may be too young and Winston discovers his new boss is a big baby.",
      },
      {
        episodeSeason: 1,
        episodeNum: 22,
        episodeName: "Tomatoes",
        episodeDate: "April 24, 2012",
        episodeRanking: 7.6,
        episodeDescription:
          "CeCe does not want to admit she cares for Schmidt, so she tells him to date her gorgeous model roommate. He does, but then she gets jealous. Jess meets Russell's first wife and does not think she matches up to Ouli who seems so exciting.",
      },
      {
        episodeSeason: 1,
        episodeNum: 23,
        episodeName: "Backslide",
        episodeDate: "May 1, 2012",
        episodeRanking: 7.6,
        episodeDescription:
          'When Jess and Nick run into their exes Paul and Caroline, the gang fears they both may "backslide" into romantic relationships. Meanwhile, Schmidt desperately tries not to get aroused as he deals with a delicate medical issue, Winston suffers the consequences of a wild night out with his boss and Cece brings Schmidt to a nursing home to meet her grandmother.',
      },
      {
        episodeSeason: 1,
        episodeNum: 24,
        episodeName: "See Ya",
        episodeDate: "May 8, 2012",
        episodeRanking: 7.9,
        episodeDescription:
          "When one of the roommates decides to move out of the loft, the gang makes an unexpected trip to the desert where Winston faces his fear of the dark, Cece and Schmidt's relationship reaches a turning point and Jess and Nick square off with a coyote.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Re-launch",
        episodeDate: "September 25, 2012",
        episodeRanking: 7.4,
        episodeDescription:
          'Jess is laid off from her teaching job and volunteers to be a shot girl at Schmidt\'s "rebranding" party.',
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Katie",
        episodeDate: "September 25, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Out of work, Jess continues zany pursuits such as felt art and cooking unusual dishes. At the bar, a guy mistakes Jess for the blind date he is to meet. They have great sex and she continues to pretend she is Katie. Winston's mother visits.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Fluffer",
        episodeDate: "October 2, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "Jess continues to have great sex with Sam but does not date. Jess feels uncomfortable with a sex only relationship. Nick unwittingly becomes her surrogate boyfriend. Schmidt pretends to be one of Mitt Romney's sons to impress women.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Neighbors",
        episodeDate: "October 9, 2012",
        episodeRanking: 7.1,
        episodeDescription:
          "Schmidt struggles to fit in when Jess befriends a group of 20 year olds who move in across the hall. Nick plays pranks on Schmidt to make him think he is old.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Models",
        episodeDate: "October 23, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Instead of celebrating Cece's birthday watching a movie, Cece wants to go out. Jess joins the models at a wild party at the bar. The next day, Cece is not able to model at a car show, so Jess steps in at the last minute. It does not go well.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Halloween",
        episodeDate: "October 30, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Nick prepares for a visit from Amelia, someone he had a crush on at college. Jess has a job at a haunted house for Halloween. She invites Sam, her non-boyfriend to the haunted house and plans to tell him she wants to be a girlfriend.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Menzies",
        episodeDate: "November 13, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Unable to pay her share of rent and utilities, the guys tell Jess to get a job. She is experiencing her monthly period and is an emotional mess. Nick meets a silent guy who shows him how to be peaceful. Cece wants to go back with Schmidt.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Parents",
        episodeDate: "November 20, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          'When Jess\'s parents, Bob and Joan, show up at the same time for Thanksgiving dinner, Jess takes the opportunity to "parent trap" them into a reconciliation, but her ploy backfires. Meanwhile, Schmidt and his bigger ex-Marine cousin, Big Schmidt, engage in a "manliness" competition.',
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "Eggs",
        episodeDate: "November 27, 2012",
        episodeRanking: 7.6,
        episodeDescription:
          "When Sadie tells Jess and Cece they only have so many eggs available for having children, Jess is worried and insists she and Cece get tests done. Schmidt tries to find confirmation for his sexual prowess. Nick finishes writing his book.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Bathtub",
        episodeDate: "December 4, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Jess wants a bathtub in the apartment, and Winston helps her get one. Schmidt is still interested in CeCe and thinks they would be great together, but he is also still with his boss. Nick meets a woman with man troubles at the bar.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "Santa",
        episodeDate: "December 11, 2012",
        episodeRanking: 8.2,
        episodeDescription:
          "The gang tries to attend a lot of Christmas parties. Cece talks to Schmidt about becoming just friends again. Jess tries to avoid Sam; he tells her he wants to get back together. Nick has trouble adjusting to his adventurous girlfriend.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "Cabin",
        episodeDate: "January 8, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Jess and Sam have a weekend getaway planned. Jess invites Nick and Angie to go with them so she does not have to face Sam alone. Schmidt thinks Winston needs more black friends and experiences.",
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "A Father's Love",
        episodeDate: "January 15, 2013",
        episodeRanking: 7.1,
        episodeDescription:
          "Nick's father visits and Nick is upset. Nick thinks his con-man father is just in town to pull another scheme. Jess tries to find a way to repair their relationship. Meanwhile, Schmidt and Robby try to win Cece back into their hearts.",
      },
      {
        episodeSeason: 2,
        episodeNum: 14,
        episodeName: "Pepperwood",
        episodeDate: "January 22, 2013",
        episodeRanking: 8,
        episodeDescription:
          "Jess makes a real connection with a student in her writing class. She reads the papers to her roommates and Nick thinks the guy is a psychotic killer. Winston and Schmidt argue about what others say about them behind their back.",
      },
      {
        episodeSeason: 2,
        episodeNum: 15,
        episodeName: "Cooler",
        episodeDate: "January 29, 2013",
        episodeRanking: 9.1,
        episodeDescription:
          "Jess is considered to be a cool force when she goes out with the guys, so they go out to find women and leave her at home. Jess hears noises outside and asks the guys and their dates to return. Party games begin, and Nick has to kiss Jess.",
      },
      {
        episodeSeason: 2,
        episodeNum: 16,
        episodeName: "Table 34",
        episodeDate: "February 5, 2013",
        episodeRanking: 8.1,
        episodeDescription:
          "After their shared kiss, Nick and Jess try to avoid each other. Cece decides to go to a dating event for East Indians; Jess and the others also attend. Schmidt makes the event painful for Cece. Sam finds out about Nick & Jess.",
      },
      {
        episodeSeason: 2,
        episodeNum: 17,
        episodeName: "Parking Spot",
        episodeDate: "February 19, 2013",
        episodeRanking: 8.2,
        episodeDescription:
          "A premium parking spot becomes available in the apartment building and the group fights over who deserves it. Nick, Jess, and Schmidt sit in the spot to see who gives up first. Winston meets up with Daisy but does not have a condom.",
      },
      {
        episodeSeason: 2,
        episodeNum: 18,
        episodeName: "Tinfinity",
        episodeDate: "February 26, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Nick & Schmidt celebrate 10 years of being roommates. Nick's chore for the party is a porta-potty. Winston brings a football player to the bar, and Jess decides she wants to go out with him for a kiss. Cece gets a proposal.",
      },
      {
        episodeSeason: 2,
        episodeNum: 19,
        episodeName: "Quick Hardening Caulk",
        episodeDate: "March 19, 2013",
        episodeRanking: 8.5,
        episodeDescription:
          "With Cece engaged, Schmidt is depressed. Schmidt decides an aquarium filled with a rare, unattainable, and endangered species of fish is what will cheer him up. Nick decides to be a take-charge man, and this entices Jess to want Nick.",
      },
      {
        episodeSeason: 2,
        episodeNum: 20,
        episodeName: "Chicago",
        episodeDate: "March 26, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "Nick's father dies and the friends travel to Chicago. Nick's family views him as the responsible one and has him plan an Elvis funeral. Jess impersonates as Elvis to help cut costs. Winston helps Schmidt get over his fear of funerals.",
      },
      {
        episodeSeason: 2,
        episodeNum: 21,
        episodeName: "First Date",
        episodeDate: "April 4, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Jess and Nick go on their first official date, but try to decide if it is really a date or not. Winston and Schmidt are left to themselves and realize Nick is the glue that holds them together. Without Nick, they are not sure what to do.",
      },
      {
        episodeSeason: 2,
        episodeNum: 22,
        episodeName: "Bachelorette Party",
        episodeDate: "April 9, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "Jess holds a bachelorette party for Cece. Cece shows up with her fiancé's aunt and things turn G-Rated. The guys throw Shivrang a bachelor party. Jess tells Nick to get a picture of Shivrang's privates. Schmidt needs a date for the wedding.",
      },
      {
        episodeSeason: 2,
        episodeNum: 23,
        episodeName: "Virgins",
        episodeDate: "April 30, 2013",
        episodeRanking: 8.5,
        episodeDescription:
          "Each of the friends tell their story about how they lost their virginity.",
      },
      {
        episodeSeason: 2,
        episodeNum: 24,
        episodeName: "Winston's Birthday",
        episodeDate: "May 7, 2013",
        episodeRanking: 8.1,
        episodeDescription:
          "It's Winston's birthday and he wants a party. Schmidt is still seeing Elizabeth and wondering where it will lead. Jess's father comes to town for Cece's wedding, and Nick & Jess try to hide their relationship. Jess has a job interview.",
      },
      {
        episodeSeason: 2,
        episodeNum: 25,
        episodeName: "Elaine's Big Day",
        episodeDate: "May 14, 2013",
        episodeRanking: 8.7,
        episodeDescription:
          "Nick and Jess decide if they want their relationship to continue. It's Cece's wedding day and Schmidt thinks she does not want to go through with it. He gets Winston & Nick to help sabotage the wedding. Shivrang has his own big announcement.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "All In",
        episodeDate: "September 17, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Nick and Jess run off to Mexico to give their relationship a chance to grow without the everyday problems of Schmidt and Winston. Meanwhile, Winston finds out he is color blind, and Schmidt makes a commitment to both Cece and Elizabeth.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Nerd",
        episodeDate: "September 24, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          'Jess turns to Nick for advice on how to fit in with a clique of "mean girl" teachers at her new school. Meanwhile, an office party is anything but fun for Schmidt, and Winston plots revenge on Daisy, whom he suspects is cheating on him.',
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Double Date",
        episodeDate: "October 1, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "Thinking Schmidt has chosen to be with Cece, Jess and Nick invite him to go on a double date with them. Nick is caught between loyalty to his friend and loyalty to his girlfriend when he finds out a shocking secret. Meanwhile, Winston promises to get the foursome a table at an ultra-exclusive restaurant that doesn't take reservations.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "The Captain",
        episodeDate: "October 8, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          "After being dumped by Cece and Elizabeth, an unhappy Schmidt tries to break up Jess and Nick. Winston tries to hook his cat up with another before he has to be neutered.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "The Box",
        episodeDate: "October 15, 2013",
        episodeRanking: 7.2,
        episodeDescription:
          "Schmidt worries about being a good person. Nick inherits money from his father and starts a spending spree instead of paying his bills.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Keaton",
        episodeDate: "October 22, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "Jess throws a Halloween Party, but Cece won't attend if Schmidt is there. In an effort to change Schmidt's sullen behavior, Jess, Nick and Winston resort to pretending to be his childhood idol, Michael Keaton.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "Coach",
        episodeDate: "November 5, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "When Coach returns to town and takes the other guys to a strip club, an unhappy Jess retaliates by having a girls' night out with Cece.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Menus",
        episodeDate: "November 12, 2013",
        episodeRanking: 7.4,
        episodeDescription:
          "Coach tells Nick to give him a day to help change Nick's life with diet and exercise. Jess takes action when menus for the same Chinese restaurant keep getting delivered to the loft.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "Longest Night Ever",
        episodeDate: "November 19, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          "Jess is tasked with keeping a frantic Schmidt occupied as Coach and Cece go out on a date. Meanwhile, Nick and Winston meet a frisky bus driver as they search for a missing Ferguson.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "Thanksgiving III",
        episodeDate: "November 26, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          "After Coach accuses him of going soft since he started dating Jess, Nick arranges a camping trip for the gang on Thanksgiving. Winston and Cece bond over their hatred of camping.",
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "Clavado En Un Bar",
        episodeDate: "January 7, 2014",
        episodeRanking: 7.5,
        episodeDescription:
          "The gang try to help Jess decide whether to carry on teaching or take a new fundraising job.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "Basketsball",
        episodeDate: "January 14, 2014",
        episodeRanking: 7.3,
        episodeDescription:
          "Jess pretends to be a fan of the Pistons in an attempt to befriend Coach, to Nick's dismay, who is a Bulls fan. Meanwhile, Schmidt is assigned to mentor an elderly colleague at work and Winston discovers a new career path.",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "Birthday",
        episodeDate: "January 21, 2014",
        episodeRanking: 8.4,
        episodeDescription:
          "Nick struggles to throw Jess the perfect birthday party. Schmidt works overtime to help out Cece in her new job as bartender. Winston and Coach engage in a bake-off.",
      },
      {
        episodeSeason: 3,
        episodeNum: 14,
        episodeName: "Prince",
        episodeDate: "February 2, 2014",
        episodeRanking: 8.6,
        episodeDescription:
          "When Jess and Cece are invited to a party thrown by Prince, the guys try to get inside. Jess panics when Nick tells her that he loves her.",
      },
      {
        episodeSeason: 3,
        episodeNum: 15,
        episodeName: "Exes",
        episodeDate: "February 4, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "When Nick has an awkward run-in with his ex-girlfriend Caroline, Jess tries to convince him that exes can still be friends. Chaos ensues when Schmidt, Winston and Coach bring their dates to Schmidt's loft.",
      },
      {
        episodeSeason: 3,
        episodeNum: 16,
        episodeName: "Sister",
        episodeDate: "February 11, 2014",
        episodeRanking: 7.3,
        episodeDescription:
          "Jess tries to prevent Nick from meeting her irresponsible sister after bailing her out of jail. Schmidt asks Nick to attend a Bar Mitzvah with him. Winston and Bertie have dinner with Coach and Cece.",
      },
      {
        episodeSeason: 3,
        episodeNum: 17,
        episodeName: "Sister II",
        episodeDate: "February 25, 2014",
        episodeRanking: 7.2,
        episodeDescription:
          "When Abby announces that she is staying in the loft permanently, Nick is left to baby-sit her while Jess looks for a place for Abby to live. Winston is nervous about looking at the results of his LAPD entrance exam.",
      },
      {
        episodeSeason: 3,
        episodeNum: 18,
        episodeName: "Sister III",
        episodeDate: "March 4, 2014",
        episodeRanking: 7.3,
        episodeDescription:
          "Jealous of Schmidt and Abby's relationship, Jess moves into Nick's bedroom; however the living arrangement does not make either one of them happy. Meanwhile, Winston struggles to get into better shape for the LAPD obstacle course.",
      },
      {
        episodeSeason: 3,
        episodeNum: 19,
        episodeName: "Fired Up",
        episodeDate: "March 11, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "Jess hires, then has to immediately fire Coach as her school's new volleyball coach. Meanwhile, Schmidt gets sued, and Cece catches the eye of a much younger man.",
      },
      {
        episodeSeason: 3,
        episodeNum: 20,
        episodeName: "Mars Landing",
        episodeDate: "March 25, 2014",
        episodeRanking: 7.4,
        episodeDescription:
          "Jess and Nick face some truths about their relationship, Schmidt, Winston and Coach scramble to make a better second impression on their hot new neighbors, and Cece panics after she drunk-texts Buster.",
      },
      {
        episodeSeason: 3,
        episodeNum: 21,
        episodeName: "Big News",
        episodeDate: "April 15, 2014",
        episodeRanking: 7.6,
        episodeDescription:
          'The morning after their break-up, Jess and Nick try to keep it a secret from the rest of the gang. Meanwhile, Winston passes his police academy entrance exam, and demands that the gang throw him a "Honey Roast".',
      },
      {
        episodeSeason: 3,
        episodeNum: 22,
        episodeName: "Dance",
        episodeDate: "April 29, 2014",
        episodeRanking: 7.5,
        episodeDescription:
          "Jess fears someone is trying to sabotage her first middle school dance and she enlists the gang to help her chaperone on the big night.",
      },
      {
        episodeSeason: 3,
        episodeNum: 23,
        episodeName: "Cruise",
        episodeDate: "May 6, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "Jess and Nick convince the others to go on a cruise with them, but the Grand Romantic package proves too hard to handle for the recent exes, and Schmidt, Winston, Coach and Cece have to repair their fractured friendship.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "The Last Wedding",
        episodeDate: "September 16, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "Jess and Co. attend the last wedding of the summer season and make a bet to see which of them can get lucky.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "Dice",
        episodeDate: "September 23, 2014",
        episodeRanking: 7.6,
        episodeDescription:
          "Schmidt tutors Jess in the not-so-fine-art of dating via mobile apps. Meanwhile, Winston is desperate to make a good impression on his fellow police cadets, which backfires when Nick, Coach and Cece show up at a party thrown by fellow officers.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Julie Berkman's Older Sister",
        episodeDate: "September 30, 2014",
        episodeRanking: 7.3,
        episodeDescription:
          "Jess's dad visits with his new fiancée, who went to high school with Jess. A suspicious Jess attempts to ruin their relationship. Meanwhile, Schmidt is trying to land a sponge ad campaign and enlists the guys' help to disastrous results.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Micro",
        episodeDate: "October 7, 2014",
        episodeRanking: 7.4,
        episodeDescription:
          "Nick hatches a bet with Jess that she's just as superficial as the rest of the guys when it comes to dating. Meanwhile, Winston and Cece team up to trick Schmidt and Coach into thinking they're going to be models.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Landline",
        episodeDate: "October 14, 2014",
        episodeRanking: 8,
        episodeDescription:
          "When Coach's liaison with the school nurse gets messy, vice principal Jess must enforce a new, \"no fraternization\" policy among the teachers. But the tables soon get turned when she finds herself attracted to the hot new science teacher. Meanwhile, Nick is enjoying being Schmidt and Winston's secretary, after the loft gets a new home phone.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Background Check",
        episodeDate: "November 4, 2014",
        episodeRanking: 8.8,
        episodeDescription:
          "Jess admits she might be in possession of certain illegal substances, which complicates Winston's plans as the loft must pass a home visit and a background check as a part of his police academy training. Schmidt kisses Cece.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Goldmine",
        episodeDate: "November 11, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          'Nick pretends to be gay to make his status as Jess\'s "ex" less of an issue to her new bf. To Coach\'s annoyance, Winston works his "Long Game" on their attractive neighbors, Michelle and Viv. Meanwhile, Schmidt panics when Cece considers having a breast reduction.',
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "Teachers",
        episodeDate: "November 18, 2014",
        episodeRanking: 8.1,
        episodeDescription:
          "Jess, Coach and Ryan attend a teacher's conference, led by education guru Brenda Brown. Back at the loft, Nick, Schmidt and Winston try to have a wild weekend while Jess is out of town.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "Thanksgiving IV",
        episodeDate: "November 25, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          'With winter coming and everyone still single, Schmidt initiates a "Bangs-giving"-themed Thanksgiving dinner party, to which everyone must bring someone compatible for someone else.',
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "Girl Fight",
        episodeDate: "December 2, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "Schmidt quickly regrets trying to understand the politics of a girl fight when one breaks out between Jess and Cece. Meanwhile, Nick goes on a date with Tran's granddaughter, whom Winston believes is hiding a secret.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "LAXmas",
        episodeDate: "December 9, 2014",
        episodeRanking: 7.6,
        episodeDescription:
          "As the gang prepares to depart for the holidays, they quickly find they may be home alone when they are all trapped at the airport.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "Shark",
        episodeDate: "January 6, 2015",
        episodeRanking: 7.5,
        episodeDescription:
          "Nick and Coach become concerned when they meet Winston's new training officer; Jess uses Schmidt in hope of influencing a councilwoman to stop the night construction taking place outside the loft.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "Coming Out",
        episodeDate: "January 13, 2015",
        episodeRanking: 7.2,
        episodeDescription:
          "Jessica reveals her relationship to the other teachers, which upsets them. They think her field trip choice has been unduly influenced by her relationship.",
      },
      {
        episodeSeason: 4,
        episodeNum: 14,
        episodeName: "Swuit",
        episodeDate: "February 3, 2015",
        episodeRanking: 7.2,
        episodeDescription:
          "Jess helps Schmidt and Nick pitch their new business venture to entrepreneur Lori Greiner. Meanwhile, Winston and Coach decide they will invest in Cece's future.",
      },
      {
        episodeSeason: 4,
        episodeNum: 15,
        episodeName: "The Crawl",
        episodeDate: "February 10, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "When a new bar opens in the area, it's the final piece of the puzzle for Nick's epic Valentine's Day pub crawl. Jess and Ryan ponder their future.",
      },
      {
        episodeSeason: 4,
        episodeNum: 16,
        episodeName: "Oregon",
        episodeDate: "February 17, 2015",
        episodeRanking: 7.5,
        episodeDescription:
          "Jess takes a bumpy stroll down memory lane when she and the gang travel to her childhood home in Portland, Oregon, for her father's wedding.",
      },
      {
        episodeSeason: 4,
        episodeNum: 17,
        episodeName: "Spiderhunt",
        episodeDate: "February 24, 2015",
        episodeRanking: 8.3,
        episodeDescription:
          "Schmidt invites his girlfriend over for Nick's famous sauce. Jess tries to figure out who CeCe likes and Winston tries to keep it a secret.",
      },
      {
        episodeSeason: 4,
        episodeNum: 18,
        episodeName: "Walk of Shame",
        episodeDate: "March 3, 2015",
        episodeRanking: 7.6,
        episodeDescription:
          "Jess and Cece have a walk of shame after a crazy night out.",
      },
      {
        episodeSeason: 4,
        episodeNum: 19,
        episodeName: "The Right Thing",
        episodeDate: "March 31, 2015",
        episodeRanking: 7.5,
        episodeDescription:
          'Jess crashes a funeral, hoping to delete a "sext" she recently sent to the deceased. Then, Schmidt\'s mom, Louise arrives in town for a visit, and Winston is desperate to be off-duty friends with his police partner, Aly.',
      },
      {
        episodeSeason: 4,
        episodeNum: 20,
        episodeName: "Par 5",
        episodeDate: "April 7, 2015",
        episodeRanking: 7.4,
        episodeDescription:
          "Fawn takes Jess to a charity golf tournament, but the Vice Principal lands in the sand trap in her attempts to make a good impression. Meanwhile, Winston meets a beautiful woman and must lie about being a cop.",
      },
      {
        episodeSeason: 4,
        episodeNum: 21,
        episodeName: "Panty Gate",
        episodeDate: "April 28, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          'Schmidt takes the fall to help Fawn out of a political scandal. Meanwhile, Jess declares herself a "love doctor" and Coach faces a life-changing decision with May.',
      },
      {
        episodeSeason: 4,
        episodeNum: 22,
        episodeName: "Clean Break",
        episodeDate: "May 5, 2015",
        episodeRanking: 9.1,
        episodeDescription:
          "Coach debates with his friends on what he should take to New York. Jess and Nick argue over a mug from their relationship. Schmidt learns of Cece's feelings for him.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Big Mama P",
        episodeDate: "January 5, 2016",
        episodeRanking: 7.9,
        episodeDescription:
          "When Cece and Schmidt ask Jess and Nick to be their Maid of Honor and Best Man, respectively, their first task is to plan the engagement party. But when Jess invites Cece's mom to join in the celebration, Cece is forced to make a surprising announcement to Schmidt.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "What About Fred",
        episodeDate: "January 12, 2016",
        episodeRanking: 7.3,
        episodeDescription:
          "Jess jumps back into the dating pool, but her attempt lands her a dud (guest star Taran Killam), and things get complicated when she falls in love with his perfect parents (guest stars Henry Winkler and Julie Hagerty). Meanwhile, Nick and Schmidt have very different ideas about how to run the bar.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Jury Duty",
        episodeDate: "January 19, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "Jess eagerly reports to jury duty, until she discovers she may be up for a work promotion. Meanwhile, Nick reaches his limit with Cece's messiness in the loft.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "No Girl",
        episodeDate: "January 26, 2016",
        episodeRanking: 7.4,
        episodeDescription:
          "With Jess sequestered at jury duty, Nick turns the loft into an air b-n-b in order to help pay for Schmidt's upcoming bachelor party. Meanwhile, Winston asks Cece for help when he suspects KC is cheating on him in the all-new.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "Bob & Carol & Nick & Schmidt",
        episodeDate: "February 2, 2016",
        episodeRanking: 7.4,
        episodeDescription:
          "Schmidt helps Nick ponder his future after Nick's cousin and his wife visit to ask for a very special handout. Meanwhile, Winston helps Cece shop for a wedding dress.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "Reagan",
        episodeDate: "February 9, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "A beautiful pharmaceutical rep enters the gang's life when she agrees to sublet Jess' room while she is on jury duty.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "Wig",
        episodeDate: "February 16, 2016",
        episodeRanking: 7.3,
        episodeDescription:
          "When Nick's attraction to Reagan starts affecting Schmidt and Cece's relationship, they enact a plan to demystify her, in hopes of helping Nick get over her. Meanwhile, Winston teaches Reagan the art of the breakup.",
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "The Decision",
        episodeDate: "February 23, 2016",
        episodeRanking: 7.3,
        episodeDescription:
          "Reagan causes chaos between Nick and Winston when she tells them she'll sleep with just one of them in an attempt to challenge the guys' indecisiveness. Meanwhile, Schmidt is reunited with his college frenemy, Benjamin, when looking at wedding venues with Cece.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "Heat Wave",
        episodeDate: "March 1, 2016",
        episodeRanking: 7.4,
        episodeDescription:
          'Things heat up between Nick and Reagan over who can provide the loft with the best air conditioning unit. Meanwhile, Winston uses his "cop voice" to help Schmidt prep Cece for a newscaster audition.',
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "Goosebumps Walkaway",
        episodeDate: "March 8, 2016",
        episodeRanking: 7.5,
        episodeDescription:
          "Jess returns from jury duty and attempts to uncover the real identity of a juror sequestered with her. Meanwhile, Reagan prepares to move out of the loft and out of Nick's life, and Winston and Cece help Schmidt get over his fear of public dancing.",
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "The Apartment",
        episodeDate: "March 15, 2016",
        episodeRanking: 7.4,
        episodeDescription:
          "It's time for Cece to move into the loft. While Jess is helping her friend move out of her beloved apartment, she has to finish the school's budget by morning, which the new principal has neglected to tell her. Meanwhile, Winston gets a new partner to avoid having to work side-by-side with Aly.",
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "D-Day",
        episodeDate: "March 22, 2016",
        episodeRanking: 7.9,
        episodeDescription:
          "After Cece receives an exciting new job offer, Jess agrees to help Schmidt with the wedding preparations, but things don't go as planned when Schmidt's dad, Gavin, appears. Meanwhile, Winston and Nick get into a competition over whose job is harder.",
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "Sam, Again",
        episodeDate: "March 29, 2016",
        episodeRanking: 7.2,
        episodeDescription:
          "Jess applies for a job at a progressive new school, but things take a turn when she finds out the principal is dating her ex-boyfriend, Sam. Meanwhile, Nick gets a cold and Schmidt quarantines the roommates to prevent himself from getting sick before his big presentation.",
      },
      {
        episodeSeason: 5,
        episodeNum: 14,
        episodeName: "300 Feet",
        episodeDate: "April 12, 2016",
        episodeRanking: 7.2,
        episodeDescription:
          "When Jess is served a restraining order by her former boyfriend, Sam, she sets out to clear her name with Winston's help. Nick and Schmidt plot against the owner of a trendy new bar that opened on their street.",
      },
      {
        episodeSeason: 5,
        episodeNum: 15,
        episodeName: "Jeff Day",
        episodeDate: "April 19, 2016",
        episodeRanking: 7.2,
        episodeDescription:
          "To turn the tables on a sexist car salesman, Jess invents a male alter ego, which backfires on her. Schmidt and Cece panic over Winston's date, his new prankster girlfriend, to their wedding.",
      },
      {
        episodeSeason: 5,
        episodeNum: 16,
        episodeName: "Helmet",
        episodeDate: "April 19, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "Despite being happy with Sam, Jess confesses to Cece that she had a sex dream about Nick. And Schmidt attempts to help Winston land Furguson a cat audition when he finds out Aly's star boyfriend is a talent agent for pets.",
      },
      {
        episodeSeason: 5,
        episodeNum: 17,
        episodeName: "Road Trip",
        episodeDate: "April 26, 2016",
        episodeRanking: 7.7,
        episodeDescription:
          "After being emasculated in front of Cece, Schmidt insists on a manly bachelor party weekend in Vegas, but the road trip goes awry when the guys end up at a desert biker bar and he must put his newfound bravado to the test.",
      },
      {
        episodeSeason: 5,
        episodeNum: 18,
        episodeName: "A Chill Day In",
        episodeDate: "April 26, 2016",
        episodeRanking: 8.2,
        episodeDescription:
          'Cece and Jess try to have a "chill day" celebrating Cece\'s Bachelorette party.',
      },
      {
        episodeSeason: 5,
        episodeNum: 19,
        episodeName: "Dress",
        episodeDate: "May 3, 2016",
        episodeRanking: 7.2,
        episodeDescription:
          "The wedding is coming up and Jess hasn't finished Cece's wedding dress. Schmidt has been ignoring work while doing the wedding planning.",
      },
      {
        episodeSeason: 5,
        episodeNum: 20,
        episodeName: "Return to Sender",
        episodeDate: "May 3, 2016",
        episodeRanking: 7.4,
        episodeDescription:
          "Jess is introduced to Sam's female best friend; Nick worries that Gavin will leave Schmidt disappointed again; Winston isn't happy about someone's reaction to a birthday present.",
      },
      {
        episodeSeason: 5,
        episodeNum: 21,
        episodeName: "Wedding Eve",
        episodeDate: "May 10, 2016",
        episodeRanking: 8.2,
        episodeDescription:
          "On the night before the wedding, Nick and Winston try to help Schmidt re-write his vows and Jess, thinking that Sam is going to propose to her, rallies the gang into playing True American to avoid giving him an answer.",
      },
      {
        episodeSeason: 5,
        episodeNum: 22,
        episodeName: "Landing Gear",
        episodeDate: "May 10, 2016",
        episodeRanking: 8.9,
        episodeDescription:
          "Schmidt makes a last ditch effort to convince Cece's mom to come to their wedding, but in doing so, he might miss the special day himself.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "House Hunt",
        episodeDate: "September 20, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "Schmidt and Cece have a hard time looking for their new house. In the meantime, Jess attempts to get Nick out of her mind when he returns earlier than expected and Winston tries having a long-distance relationship with Aly.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "Hubbedy Bubby",
        episodeDate: "September 27, 2016",
        episodeRanking: 6.5,
        episodeDescription:
          "Jess and Cece attempt to recruit voters for the upcoming Presidential election to win a bet with Schmidt, while Nick learns the ways of modern phone sex from Winston.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "Single and Sufficient",
        episodeDate: "October 4, 2016",
        episodeRanking: 7.2,
        episodeDescription:
          "Jess and members of her singles-only group accompany Schmidt, Cece, Winston and Aly on a glamping trip, while Nick struggles with the next chapter of his novel set in New Orleans.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Homecoming",
        episodeDate: "October 11, 2016",
        episodeRanking: 7.5,
        episodeDescription:
          "On a trip to New York, Jess helps detective Jake Peralta with a case and meets Captain Ray Holt and Gina Linetti at his precinct, while Nick and Winston attempt to impress Charles Boyle and Cece faces off with her mother-in-law.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "Jaipur Aviv",
        episodeDate: "October 18, 2016",
        episodeRanking: 7.5,
        episodeDescription:
          "While the gang helps Schmidt and Cece remodel their fixer-upper, Jess spearheads a vote to let Reagen eventually move back into the loft; Nick and Winston make a revealing discovery.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "Ready",
        episodeDate: "November 15, 2016",
        episodeRanking: 7.3,
        episodeDescription:
          "When Jess announces she's ready to start dating again, Schmidt encourages her to give workout partner a chance.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "Last Thanksgiving",
        episodeDate: "November 22, 2016",
        episodeRanking: 7.2,
        episodeDescription:
          "Jess and the gang are determined to have the best Thanksgiving ever, but everything falls through when Robby shows up unexpectedly and Schmidt's father arrives with a broken heart.",
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "James Wonder",
        episodeDate: "November 29, 2016",
        episodeRanking: 7.4,
        episodeDescription:
          "Jess tries to impress the president of the Parents' Council to become the principal of her school. Meanwhile, Winston puts his undercover skills to the test and Nick tries to find the perfect wedding gift for Schmidt and Cece.",
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "Es Good",
        episodeDate: "December 6, 2016",
        episodeRanking: 7.1,
        episodeDescription:
          "Schmidt enlists Nick's help to earn his house contractor's respect. Jess and Robby test their ability of being in a casual relationship. Winston and Cece discuss the pros and cons of not being single.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "Christmas Eve Eve",
        episodeDate: "December 13, 2016",
        episodeRanking: 7.6,
        episodeDescription: "Jess plays Secret Santa for the loft.",
      },
      {
        episodeSeason: 6,
        episodeNum: 11,
        episodeName: "Raisin's Back",
        episodeDate: "January 3, 2017",
        episodeRanking: 7.4,
        episodeDescription:
          "Nick tries to keep cool when Regan moves into the loft, while Cece and Winston challenge Schmidt's love of electronic dance music.",
      },
      {
        episodeSeason: 6,
        episodeNum: 12,
        episodeName: "The Cubicle",
        episodeDate: "January 10, 2017",
        episodeRanking: 7.3,
        episodeDescription:
          "Jess goes to the extremes to pay Robby's medical bills upon learning the total.",
      },
      {
        episodeSeason: 6,
        episodeNum: 13,
        episodeName: "Cece's Boys",
        episodeDate: "January 17, 2017",
        episodeRanking: 7.4,
        episodeDescription:
          "Cece enlists Jess and Reagan to help recruit new models for her agency.",
      },
      {
        episodeSeason: 6,
        episodeNum: 14,
        episodeName: "The Hike",
        episodeDate: "January 24, 2017",
        episodeRanking: 7.5,
        episodeDescription:
          "While on a day hike, Jess and Robby discover something unexpected about their relationship. Also, Winston throws a surprise welcome home party for Aly. Meanwhile, Schmidt and Cece fail to impress their new neighbors.",
      },
      {
        episodeSeason: 6,
        episodeNum: 15,
        episodeName: "Glue",
        episodeDate: "February 7, 2017",
        episodeRanking: 7.8,
        episodeDescription:
          "Jess helps Nick out when Reagan lands him a book signing.",
      },
      {
        episodeSeason: 6,
        episodeNum: 16,
        episodeName: "Operation: Bobcat",
        episodeDate: "February 14, 2017",
        episodeRanking: 7.9,
        episodeDescription:
          "Jess tries to convince the gang that she's fine being single on Valentine's Day.",
      },
      {
        episodeSeason: 6,
        episodeNum: 17,
        episodeName: "Rumspringa",
        episodeDate: "February 21, 2017",
        episodeRanking: 7.1,
        episodeDescription:
          "Nick and Schmidt take Jess on a trip to Solvang when she gets nervous about her new job as principal.",
      },
      {
        episodeSeason: 6,
        episodeNum: 18,
        episodeName: "Young Adult",
        episodeDate: "February 28, 2017",
        episodeRanking: 7.6,
        episodeDescription:
          'Jess recruits Nick and "The Pepperwood Chronicles" to help make her a cool principal.',
      },
      {
        episodeSeason: 6,
        episodeNum: 19,
        episodeName: "Socalyalcon VI",
        episodeDate: "March 14, 2017",
        episodeRanking: 7.6,
        episodeDescription:
          "Jess thinks she's been spending too much time acting like Reagan; Schmidt and Cece try to make their new home more secure; Aly tells Winston an embarrassing secret.",
      },
      {
        episodeSeason: 6,
        episodeNum: 20,
        episodeName: "Misery",
        episodeDate: "March 21, 2017",
        episodeRanking: 7.6,
        episodeDescription:
          "Jess avoids her feelings for Nick by taking care of her dad (guest star Rob Reiner) in Portland. While attending a work party with Reagan, Nick panics that they really don't know each other. Meanwhile, Aly prepares to meet Winston's mom (guest star Anna Maria Horsford) for the first time, as Winston admits he hasn't told her they are cops.",
      },
      {
        episodeSeason: 6,
        episodeNum: 21,
        episodeName: "San Diego",
        episodeDate: "March 28, 2017",
        episodeRanking: 8.2,
        episodeDescription:
          "Jess and her dad help each other with their love lives; Nick turns to Aly for help with Reagan; Schmidt considers revealing his first name.",
      },
      {
        episodeSeason: 6,
        episodeNum: 22,
        episodeName: "Five Stars for Beezus",
        episodeDate: "April 4, 2017",
        episodeRanking: 9.2,
        episodeDescription:
          "Jess prepares to tell Nick how she really feels about him. In other events, Nick has a meeting with a book publisher, Aly helps Winston reconnect with someone important and big news comes along for Schmidt and Cece.",
      },
      {
        episodeSeason: 7,
        episodeNum: 1,
        episodeName: "About Three Years Later",
        episodeDate: "April 10, 2018",
        episodeRanking: 7.3,
        episodeDescription:
          "Nick and Jess return from their European romance tour. Cece and Schmidt have issues perfecting their daughter's birthday party. Winston struggles with picking the optimal glamour photo for him and Aly.",
      },
      {
        episodeSeason: 7,
        episodeNum: 2,
        episodeName: "Tuesday Meeting",
        episodeDate: "April 17, 2018",
        episodeRanking: 7.1,
        episodeDescription:
          "Winston and Schmidt help Nick write his new book. Jess and Cece go to lunch and discuss their new jobs. Winston watches three men and a lady.",
      },
      {
        episodeSeason: 7,
        episodeNum: 3,
        episodeName: "Lillypads",
        episodeDate: "April 24, 2018",
        episodeRanking: 7.3,
        episodeDescription:
          "Schmidt and Jess clash over how to best prepare Ruth for preschool. Nick helps Winston to face his fears while trying to write some pages for his editor.",
      },
      {
        episodeSeason: 7,
        episodeNum: 4,
        episodeName: "Where the Road Goes",
        episodeDate: "May 1, 2018",
        episodeRanking: 7.4,
        episodeDescription:
          "The gang gathers for a one-year memorial service for a beloved friend. Meanwhile, Jess discovers Coach owes Nick a large sum of money.",
      },
      {
        episodeSeason: 7,
        episodeNum: 5,
        episodeName: "Godparents",
        episodeDate: "May 8, 2018",
        episodeRanking: 7.2,
        episodeDescription:
          "Winston and Aly choose a godparent for their baby, and Winston struggles with the reality of becoming a father. Schmidt returns to work while Cece takes her turn being a stay-at-home parent and Nick tries to make Ruth like him.",
      },
      {
        episodeSeason: 7,
        episodeNum: 6,
        episodeName: "Mario",
        episodeDate: "May 8, 2018",
        episodeRanking: 7.8,
        episodeDescription:
          "Nick's plan to propose to Jess is thrown off course when they decide to get a dog; Winston sees color for the first time.",
      },
      {
        episodeSeason: 7,
        episodeNum: 7,
        episodeName: "The Curse of the Pirate Bride",
        episodeDate: "May 15, 2018",
        episodeRanking: 8,
        episodeDescription:
          "Jess makes some big decisions, in the first part of the special, one-hour series finale",
      },
      {
        episodeSeason: 7,
        episodeNum: 8,
        episodeName: "Engram Pattersky",
        episodeDate: "May 15, 2018",
        episodeRanking: 8.4,
        episodeDescription:
          "The gang get ready to say goodbye to the loft, but Jess isn't happy with how everyone is coping with their emotions",
      },
    ],
  },
  {
    showId: 5,
    showName: "The Good Place",
    showYear: 2016,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOyVSW-5cLvyCV_DD0svfrmDE7pB8P8K5EA&usqp=CAU",
    showGenre: "Comedy, Drama, Fantasy",
    showCast: "Kristen Bell, Ted Danson",
    showSeasonsNum: 4,
    showDescription:
      "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good.",
    slug: "the-good-place",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Pilot",
        episodeDate: "September 19, 2016",
        episodeRanking: 8,
        episodeDescription:
          "Newly-deceased Eleanor Shellstrop is sent to the Good Place but only by mistake; Eleanor is determined to become a better person in her afterlife with help from friends Chidi and Janet.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Flying",
        episodeDate: "September 19, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "Eleanor tries to prove to Chidi that she's worthy of his help; Tahani and Jianyu try to help Michael cope with a mysterious flaw in his neighborhood.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Tahani Al-Jamil",
        episodeDate: "September 22, 2016",
        episodeRanking: 8,
        episodeDescription:
          "Chidi starts giving Eleanor formal lessons in ethics -- the first lesson is to be kind to your neighbor; Michael and Janet assist Chidi in finding a new hobby.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Jason Mendoza",
        episodeDate: "September 29, 2016",
        episodeRanking: 7.9,
        episodeDescription:
          "Eleanor has a hard time remaining hidden; Michael asks Tahani to assist a neighbor in finding her true purpose.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Category 55 Emergency Doomsday Crisis",
        episodeDate: "October 6, 2016",
        episodeRanking: 8,
        episodeDescription:
          "Teaching Eleanor about ethics becomes a full-time job for Chidi; Michael and Janet must deal with an emergency.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "What We Owe to Each Other",
        episodeDate: "October 13, 2016",
        episodeRanking: 7.9,
        episodeDescription:
          "Eleanor is enlisted to help Michael with an important task that could determine her fate in the Good Place. Meanwhile, Chidi agrees to be the third wheel in an effort to help out his friend.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "The Eternal Shriek",
        episodeDate: "October 20, 2016",
        episodeRanking: 8.4,
        episodeDescription:
          'Eleanor and Chidi find that the only way to save Michael from going to "The Eternal Shriek" ( part of the Bad Place) is to deactivate Janet. Since she is programmed to answer any question, Janet tells them exactly how to do it.',
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "Most Improved Player",
        episodeDate: "October 27, 2016",
        episodeRanking: 8.5,
        episodeDescription:
          "Michael has a private meeting with Eleanor. Meanwhile, Chidi, who has been harboring a secret, contemplates what to do.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "...Someone Like Me as a Member",
        episodeDate: "November 3, 2016",
        episodeRanking: 8.1,
        episodeDescription:
          "Michael's skills are put to the test when he attempts to sort out an unprecedented situation. Meanwhile, Chidi makes a connection elsewhere, much to the dismay of Eleanor, while Janet shows a different side of herself.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "Chidi's Choice",
        episodeDate: "January 5, 2017",
        episodeRanking: 8.3,
        episodeDescription:
          "Michael tasks Chidi with making an important decision, while Eleanor makes a personal discovery and Jianyu makes a big announcement.",
      },
      {
        episodeSeason: 1,
        episodeNum: 11,
        episodeName: "What's My Motivation",
        episodeDate: "January 12, 2017",
        episodeRanking: 8.1,
        episodeDescription:
          "Eleanor and Tahani hatch a plan as Michael makes a surprising discovery. Chidi confides in Eleanor when he learns some interesting news.",
      },
      {
        episodeSeason: 1,
        episodeNum: 12,
        episodeName: "Mindy St. Claire",
        episodeDate: "January 19, 2017",
        episodeRanking: 8.4,
        episodeDescription:
          "Chidi and Tahani help Michael as he faces his first biggest challenge yet; Eleanor, Jianyu and Janet face a huge decision; Eleanor and her friends think about their fates.",
      },
      {
        episodeSeason: 1,
        episodeNum: 13,
        episodeName: "Michael's Gambit",
        episodeDate: "January 19, 2017",
        episodeRanking: 9.5,
        episodeDescription:
          "Shawn has decided that Fake Eleanor, Chidi, Jason and Tahani must decide among themselves in thirty minutes which two of them should go to The Bad Place. Chaos and confusion ensues.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Everything Is Great!",
        episodeDate: "September 20, 2017",
        episodeRanking: 8.6,
        episodeDescription:
          "After Michael erases their memories, Eleanor, Chidi, Tahani and Jason find themselves in the Good Place again, but Eleanor finds a clue she left for herself and tries to put everything together.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Dance Dance Resolution",
        episodeDate: "September 20, 2017",
        episodeRanking: 8.6,
        episodeDescription:
          "Michael continues working out the kinks in his plan and Eleanor discovers a secret.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Team Cockroach",
        episodeDate: "October 5, 2017",
        episodeRanking: 8.1,
        episodeDescription:
          "Michael looks at things from a different angle as Eleanor, Chidi, Tahani and Jason try to make a collective decision.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Existential Crisis",
        episodeDate: "October 12, 2017",
        episodeRanking: 8,
        episodeDescription:
          "Michael experiences an existential crisis; Tahani throws a dinner party; Eleanor reflects on her childhood.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "The Trolley Problem",
        episodeDate: "October 19, 2017",
        episodeRanking: 8.7,
        episodeDescription:
          "Chidi and Eleanor tackle a famous ethical dilemma, leading to a conflict with Michael; Tahani confides in Janet.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Janet and Michael",
        episodeDate: "October 26, 2017",
        episodeRanking: 8.2,
        episodeDescription:
          "When the neighborhood experiences a small glitch, Michael has to resolve the issue with Janet before it gets out of control.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Derek",
        episodeDate: "November 2, 2017",
        episodeRanking: 7.9,
        episodeDescription:
          "Janet creates a problem for Michael; Tahani and Jason plan a wedding; Eleanor reveals a secret to Chidi.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Leap to Faith",
        episodeDate: "January 4, 2018",
        episodeRanking: 8.5,
        episodeDescription:
          "Michael gets a surprise visitor; Eleanor, Chidi, Tahani and Jason try to solve a riddle.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "Best Self",
        episodeDate: "January 11, 2018",
        episodeRanking: 8.5,
        episodeDescription:
          "Michael gets into a bind; Eleanor has an idea that leads Chidi, Tahani, Jason and even Janet to put their feelings on the line.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Rhonda, Diana, Jake, and Trent",
        episodeDate: "January 18, 2018",
        episodeRanking: 8.9,
        episodeDescription:
          "Eleanor, Chidi, Tahani, Janet and Jason go to a place with potentially lasting implications.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "The Burrito",
        episodeDate: "January 25, 2018",
        episodeRanking: 8.9,
        episodeDescription:
          "Eleanor, Chidi, Tahani and Jason consider how much they have (or haven't) improved; Michael must deal with the consequences of his recent actions.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "Somewhere Else",
        episodeDate: "February 1, 2018",
        episodeRanking: 9,
        episodeDescription:
          "Michael makes a plea; Eleanor looks to take the high road; Michael tries to pull a rabbit out of a hat.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Everything Is Bonzer!",
        episodeDate: "September 27, 2018",
        episodeRanking: 8.2,
        episodeDescription:
          "Michael prevents the deaths of Eleanor, Chidi, Tahani and Jason, hoping a second chance at life will allow them to become better people.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "The Brainy Bunch",
        episodeDate: "October 4, 2018",
        episodeRanking: 7.7,
        episodeDescription:
          "Michael is forced to take drastic measures when his grand scheme hits a snag.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "The Snowplow",
        episodeDate: "October 11, 2018",
        episodeRanking: 7.6,
        episodeDescription:
          "An announcement from someone in the group threatens to tear them apart.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Jeremy Bearimy",
        episodeDate: "October 18, 2018",
        episodeRanking: 8.3,
        episodeDescription:
          "The group explores the three main branches of ethical thought.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "The Ballad of Donkey Doug",
        episodeDate: "October 25, 2018",
        episodeRanking: 7.5,
        episodeDescription:
          "Jason visits with some people from his past while Chidi gets help in resolving a problem.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "A Fractured Inheritance",
        episodeDate: "November 1, 2018",
        episodeRanking: 7.8,
        episodeDescription:
          "Eleanor makes a startling discovery that tests her resolve, Tahani looks to make amends and Janet does some bonding.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "The Worst Possible Use of Free Will",
        episodeDate: "November 8, 2018",
        episodeRanking: 8.1,
        episodeDescription:
          "Eleanor recalls some forgotten events from her past.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Don't Let the Good Life Pass You By",
        episodeDate: "November 15, 2018",
        episodeRanking: 8.2,
        episodeDescription:
          "Michael and Janet take an important journey. Eleanor ponders whether she should share a secret.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "Janet(s)",
        episodeDate: "December 6, 2018",
        episodeRanking: 9.1,
        episodeDescription: "With Janet's help, Michael hatches a plan.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "The Book of Dougs",
        episodeDate: "January 10, 2019",
        episodeRanking: 8,
        episodeDescription:
          "Michael's resolve is put to the test. Meanwhile, Jason wrestles with his feelings and Chidi surprises Eleanor.",
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "Chidi Sees the Time-Knife",
        episodeDate: "January 17, 2019",
        episodeRanking: 8.2,
        episodeDescription:
          "Eleanor and the gang meet the judge at the crossroads of all dimensions, time and space to plead their case and Janet makes a reconnection.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "Pandemonium",
        episodeDate: "January 24, 2019",
        episodeRanking: 8.6,
        episodeDescription:
          "Michael's crisis forces Eleanor to assume the title of the neighborhood architect. Tahani makes a discovery about the new humans.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "A Girl from Arizona",
        episodeDate: "September 26, 2019",
        episodeRanking: 7.5,
        episodeDescription:
          "With Eleanor assuming the role of the architect, the group adapts to the challenges facing them when four test subjects inhabit a new neighborhood under their supervision.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "A Girl from Arizona Part 2",
        episodeDate: "October 3, 2019",
        episodeRanking: 7.7,
        episodeDescription:
          "Eleanor, Michael, Janet and Tahani have their hands full when the new residents begin to show their true colors. Jason receives some unsettling news.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Chillaxing",
        episodeDate: "October 10, 2019",
        episodeRanking: 7.5,
        episodeDescription:
          "Michael and Eleanor discover something troubling and turn to an unusual source for help; Tahani lends her expertise to assist with one of the new residents.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Tinker, Tailor, Demon, Spy",
        episodeDate: "October 17, 2019",
        episodeRanking: 8.1,
        episodeDescription:
          "Uncertainty abounds when an unexpected visitor arrives.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Employee of the Bearimy",
        episodeDate: "October 24, 2019",
        episodeRanking: 7.8,
        episodeDescription:
          "Michael and Jason hatch a plan. Eleanor learns firsthand the difficulties of running the neighborhood.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "A Chip Driver Mystery",
        episodeDate: "October 31, 2019",
        episodeRanking: 7.4,
        episodeDescription:
          "One of the new residents creates a division in the ranks.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Help Is Other People",
        episodeDate: "November 7, 2019",
        episodeRanking: 8.3,
        episodeDescription:
          "On the last day of the experiment, Chidi is faced with one final ethical dilemma.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "The Funeral to End All Funerals",
        episodeDate: "November 14, 2019",
        episodeRanking: 8.5,
        episodeDescription:
          "The group awaits the judge's final decision on the fate of human existence.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "The Answer",
        episodeDate: "November 21, 2019",
        episodeRanking: 8.7,
        episodeDescription:
          "In an attempt to plan a better future, Chidi considers his past.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "You've Changed, Man",
        episodeDate: "January 9, 2020",
        episodeRanking: 8.1,
        episodeDescription:
          "As the Judge keeps searching for the device to reboot the Earth in Janets' voids, the 'soul squad' tries to come up with a new afterlife system.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "Mondays, Am I Right?",
        episodeDate: "January 16, 2020",
        episodeRanking: 7.8,
        episodeDescription:
          "Michael runs some tests and Chidi gets some good advice from Jason.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "Patty",
        episodeDate: "January 23, 2020",
        episodeRanking: 8.6,
        episodeDescription: "The group makes some new friends.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "Whenever You're Ready",
        episodeDate: "January 30, 2020",
        episodeRanking: 9.6,
        episodeDescription:
          "Michael works with the Joint Council of Afterlife Affairs to smooth out kinks in the system. Jason and Tahani move on. Eleanor tries to influence Chidi.",
      },
    ],
  },
  {
    showId: 6,
    showName: "Friends",
    showYear: 1994,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0LBw3ciWLCiNXxsnBmp845aoPS2aQkJk3w&usqp=CAU",
    showGenre: "Comedy, Romance",
    showCast: "Jennifer Aniston, Courteney Cox",
    showSeasonsNum: 10,
    showDescription:
      "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
    slug: "friends",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "The One Where Monica Gets a Roommate",
        episodeDate: "September 22, 1994",
        episodeRanking: 8.3,
        episodeDescription:
          'Monica and the gang introduce Rachel to the "real world" after she leaves her fiancé at the altar.',
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "The One with the Sonogram at the End",
        episodeDate: "September 29, 1994",
        episodeRanking: 8,
        episodeDescription:
          "Ross finds out his ex-wife is pregnant. Rachel returns her engagement ring to Barry. Monica becomes stressed when her and Ross's parents come to visit.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "The One with the Thumb",
        episodeDate: "October 6, 1994",
        episodeRanking: 8.1,
        episodeDescription:
          "Monica becomes irritated when everyone likes her new boyfriend more than she does. Chandler resumes his smoking habit. Phoebe is given $7000 when she finds a thumb in a can of soda.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "The One with George Stephanopoulos",
        episodeDate: "October 13, 1994",
        episodeRanking: 8.1,
        episodeDescription:
          "Joey and Chandler take Ross to a hockey game to take his mind off the anniversary of the first time he slept with Carol, while the girls become depressed when they realize they don't have a 'plan'.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "The One with the East German Laundry Detergent",
        episodeDate: "October 20, 1994",
        episodeRanking: 8.4,
        episodeDescription:
          "Eager to spend time with Rachel, Ross pretends his washroom is rat-infested so he can join her at the laundromat. Meanwhile, Joey has Monica pose as his girlfriend, and Chandler struggles to break up with his girlfriend.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "The One with the Butt",
        episodeDate: "October 27, 1994",
        episodeRanking: 8.1,
        episodeDescription:
          "Monica's obsessiveness is put to the test after Rachel cleans the apartment. Joey lands a film role as Al Pacino's butt double. Chandler enjoys a relationship with all of the fun but none of the responsibility.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "The One with the Blackout",
        episodeDate: "November 3, 1994",
        episodeRanking: 9,
        episodeDescription:
          "When New York suffers from a blackout, Ross tries to tell Rachel that he likes her, and Chandler gets stuck in an ATM vestibule with a model.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "The One Where Nana Dies Twice",
        episodeDate: "November 10, 1994",
        episodeRanking: 8.1,
        episodeDescription:
          "Monica and Ross mourn the loss of their grandmother. Chandler is shocked to find that people think he is gay.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "The One Where Underdog Gets Away",
        episodeDate: "November 17, 1994",
        episodeRanking: 8.2,
        episodeDescription:
          "The gang's plans for Thanksgiving go awry after they get locked out of Monica and Rachel's apartment.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "The One with the Monkey",
        episodeDate: "December 15, 1994",
        episodeRanking: 8,
        episodeDescription:
          "The gang make (and break) a pact not to bring dates to their New Years Eve party. Phoebe starts dating a scientist. Ross compensates for his loneliness by getting a monkey.",
      },
      {
        episodeSeason: 1,
        episodeNum: 11,
        episodeName: "The One with Mrs. Bing",
        episodeDate: "January 5, 1995",
        episodeRanking: 8.2,
        episodeDescription:
          "Chandler's flamboyant romance-novelist mother comes to visit, and Joey catches her kissing Ross. Meanwhile, Monica and Phoebe fight over a guy in a coma.",
      },
      {
        episodeSeason: 1,
        episodeNum: 12,
        episodeName: "The One with the Dozen Lasagnas",
        episodeDate: "January 12, 1995",
        episodeRanking: 8.2,
        episodeDescription:
          "Rachel and Paolo's relationship hits a snag when he makes a pss at Phoebe. Ross refuses to find out the sex of his baby until it's born. Chandler and Joey go shopping for a new kitchen table.",
      },
      {
        episodeSeason: 1,
        episodeNum: 13,
        episodeName: "The One with the Boobies",
        episodeDate: "January 19, 1995",
        episodeRanking: 8.6,
        episodeDescription:
          "Joey finds out his dad has a mistress. Rachel tries to even the score after Chandler inadvertently catches a glimpse of her breasts. Phoebe dates a shrink who analyzes the gang.",
      },
      {
        episodeSeason: 1,
        episodeNum: 14,
        episodeName: "The One with the Candy Hearts",
        episodeDate: "February 9, 1995",
        episodeRanking: 8.2,
        episodeDescription:
          "As Valentine's Day approaches; Ross and his date end up at the same restaurant as Carol and Susan, Joey inadvertently sets Chandler up on a blind date with Janice, and the girls burn mementos of their old boyfriends.",
      },
      {
        episodeSeason: 1,
        episodeNum: 15,
        episodeName: "The One with the Stoned Guy",
        episodeDate: "February 16, 1995",
        episodeRanking: 8.2,
        episodeDescription:
          "Monica cooks a gourmet meal for a restaurateur who is looking for a new chef, however he arrives at the apartment stoned. Meanwhile, Ross tries to master 'dirty talk'.",
      },
      {
        episodeSeason: 1,
        episodeNum: 16,
        episodeName: "The One with Two Parts: Part 1",
        episodeDate: "February 23, 1995",
        episodeRanking: 8.1,
        episodeDescription:
          "Phoebe feels neglected when Joey falls for her twin sister. Chandler struggles to fire an attractive co-worker. Ross attends Lamaze classes with Carol and Susan.",
      },
      {
        episodeSeason: 1,
        episodeNum: 17,
        episodeName: "The One with Two Parts: Part 2",
        episodeDate: "February 23, 1995",
        episodeRanking: 8.4,
        episodeDescription:
          "Rachel switches identities with Monica so she can use her health insurance. Meanwhile, Ursula continues to come between Phoebe and Joey.",
      },
      {
        episodeSeason: 1,
        episodeNum: 18,
        episodeName: "The One with All the Poker",
        episodeDate: "March 2, 1995",
        episodeRanking: 8.8,
        episodeDescription:
          "As Rachel interviews for a new job, the girls take on the guys in a game of poker.",
      },
      {
        episodeSeason: 1,
        episodeNum: 19,
        episodeName: "The One Where the Monkey Gets Away",
        episodeDate: "March 9, 1995",
        episodeRanking: 8.1,
        episodeDescription:
          "The gang frantically search for Ross's monkey Marcel after Rachel loses him.",
      },
      {
        episodeSeason: 1,
        episodeNum: 20,
        episodeName: "The One with the Evil Orthodontist",
        episodeDate: "April 6, 1995",
        episodeRanking: 7.8,
        episodeDescription:
          "Rachel and Barry start dating again, despite the fact that he's now engaged to Mindy; Chandler goes nuts when a woman he likes won't return his phone calls.",
      },
      {
        episodeSeason: 1,
        episodeNum: 21,
        episodeName: "The One with the Fake Monica",
        episodeDate: "April 27, 1995",
        episodeRanking: 7.8,
        episodeDescription:
          "Monica befriends the woman who stole her credit card. Ross is forced to give away Marcel. Joey tries to come up with a less ethnic-sounding stage name.",
      },
      {
        episodeSeason: 1,
        episodeNum: 22,
        episodeName: "The One with the Ick Factor",
        episodeDate: "May 4, 1995",
        episodeRanking: 8.3,
        episodeDescription:
          "Monica gets a shock when she finds out her boyfriend is a high school student. Chandler finds out his colleagues don't like him when Phoebe temps as his secretary.",
      },
      {
        episodeSeason: 1,
        episodeNum: 23,
        episodeName: "The One with the Birth",
        episodeDate: "May 11, 1995",
        episodeRanking: 8.7,
        episodeDescription:
          "As Carol goes into labor; Ross and Susan argue, Rachel flirts with Carol's doctor, and Joey assists a pregnant single mother.",
      },
      {
        episodeSeason: 1,
        episodeNum: 24,
        episodeName: "The One Where Rachel Finds Out",
        episodeDate: "May 18, 1995",
        episodeRanking: 8.9,
        episodeDescription:
          "As Ross leaves for China, Chandler accidentally reveals Ross's feelings for Rachel. Joey takes part in a fertility study and is unable to sleep with his new girlfriend.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "The One with Ross's New Girlfriend",
        episodeDate: "September 21, 1995",
        episodeRanking: 8.5,
        episodeDescription:
          "Rachel waits for Ross at the airport, unaware he has a new girlfriend. Meanwhile, Chandler has a frightening experience with Joey's tailor, and Phoebe gives Monica a bad haircut.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "The One with the Breast Milk",
        episodeDate: "September 28, 1995",
        episodeRanking: 8.2,
        episodeDescription:
          "Monica goes shopping with Julie and tries to keep it a secret from Rachel. Ross is grossed out by Carol's breast milk. At his day job, Joey competes with a fellow cologne spritzer.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "The One Where Heckles Dies",
        episodeDate: "October 5, 1995",
        episodeRanking: 8.3,
        episodeDescription:
          "Mr. Heckles dies and leaves all his possessions to Monica and Rachel, Chandler worries he will die alone just like him. Meanwhile, Rachel and Monica argue over a lamp, Phoebe and Ross argue over evolution.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "The One with Phoebe's Husband",
        episodeDate: "October 12, 1995",
        episodeRanking: 7.9,
        episodeDescription:
          "When the gang find out Phoebe married a gay Canadian ice dancer for a green card, more of their secrets are revealed. Meanwhile, Rachel gives Ross bad advice on his relationship with Julie.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "The One with Five Steaks and an Eggplant",
        episodeDate: "October 19, 1995",
        episodeRanking: 8.2,
        episodeDescription:
          "The gang are divided by income issues; Monica, Ross and Chandler make more money, while Rachel, Phoebe, and Joey don't. Chandler also uses a case of mistaken identity to his advantage.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "The One with the Baby on the Bus",
        episodeDate: "November 2, 1995",
        episodeRanking: 8.6,
        episodeDescription:
          "Joey and Chandler are left to babysit Ben when Monica takes Ross to the hospital. Meanwhile, Phoebe loses her singing gig at Central Perk to a professional singer.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "The One Where Ross Finds Out",
        episodeDate: "November 9, 1995",
        episodeRanking: 9,
        episodeDescription:
          "A drunken Rachel calls Ross and reveals her feelings for him on his answering machine. Meanwhile, Monica keeps busy by being Chandler's personal trainer and Phoebe constantly wonders why her current boyfriend won't sleep with her.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "The One with the List",
        episodeDate: "November 16, 1995",
        episodeRanking: 8.5,
        episodeDescription:
          "With help from Chandler and Joey, Ross makes a list of pros and cons to decide whether to be with Julie or Rachel. Meanwhile, Monica gets a job making dessert with a disgusting synthetic chocolate substitute.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "The One with Phoebe's Dad",
        episodeDate: "December 14, 1995",
        episodeRanking: 7.9,
        episodeDescription:
          "Phoebe tracks down her father, but isn't sure whether she should meet him.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "The One with Russ",
        episodeDate: "January 4, 1996",
        episodeRanking: 8,
        episodeDescription:
          "Monica gets back together with 'Fun Bobby' and realizes why he is always so upbeat. Rachel starts dating a guy called Russ who bears an uncanny resemblance to Ross.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "The One with the Lesbian Wedding",
        episodeDate: "January 18, 1996",
        episodeRanking: 8.1,
        episodeDescription:
          "Rachel's mom comes to visit with big news. Monica caters Carol and Susan's wedding. Phoebe becomes 'possessed' by the spirit of a recently deceased client.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "The One After the Superbowl: Part 1",
        episodeDate: "January 28, 1996",
        episodeRanking: 8.6,
        episodeDescription:
          "Ross goes to visit Marcel whilst on a trip to California and discovers he is working in commercials. Joey receives a fan letter from an attractive but unstable woman. Phoebe is asked to sing for children at a library.",
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "The One After the Superbowl: Part 2",
        episodeDate: "January 28, 1996",
        episodeRanking: 8.7,
        episodeDescription:
          "Ross finds Marcel on the set of a new movie, where Chandler bumps into a former schoolmate. Meanwhile, Rachel and Monica compete for the affections of Jean-Claude Van Damme.",
      },
      {
        episodeSeason: 2,
        episodeNum: 14,
        episodeName: "The One with the Prom Video",
        episodeDate: "February 1, 1996",
        episodeRanking: 9.4,
        episodeDescription:
          "The gang watches a home video from the night of Monica and Rachel's prom. Joey gives Chandler a hideous bracelet.",
      },
      {
        episodeSeason: 2,
        episodeNum: 15,
        episodeName: "The One Where Ross and Rachel... You Know",
        episodeDate: "February 8, 1996",
        episodeRanking: 8.9,
        episodeDescription:
          "Monica becomes infatuated with a friend of her parents when she caters a party for him. Ross and Rachel go on their first date. Joey and Chandler refuse to move when they get a new TV and two armchairs.",
      },
      {
        episodeSeason: 2,
        episodeNum: 16,
        episodeName: "The One Where Joey Moves Out",
        episodeDate: "February 15, 1996",
        episodeRanking: 8.6,
        episodeDescription:
          "Joey and Chandler's friendship is jeopardized when Joey decides to move out. Monica worries about her parents finding out about her relationship with Richard when they attend a party together. Rachel and Phoebe go to get tattoos.",
      },
      {
        episodeSeason: 2,
        episodeNum: 17,
        episodeName: "The One Where Eddie Moves In",
        episodeDate: "February 22, 1996",
        episodeRanking: 8.3,
        episodeDescription:
          'Chandler gets a new roommate. Phoebe gets the chance to make a music video for her song "Smelly Cat". Ross and Monica clash when he is always at her and Rachel\'s apartment.',
      },
      {
        episodeSeason: 2,
        episodeNum: 18,
        episodeName: "The One Where Dr. Ramoray Dies",
        episodeDate: "March 21, 1996",
        episodeRanking: 8.4,
        episodeDescription:
          "Joey's soap opera character is killed off after he brags in an interview that he writes his own lines. Chandler is unnerved by Eddie's strange behavior, while Ross and Rachel compare their past lovers as do Richard and Monica.",
      },
      {
        episodeSeason: 2,
        episodeNum: 19,
        episodeName: "The One Where Eddie Won't Go",
        episodeDate: "March 28, 1996",
        episodeRanking: 8.5,
        episodeDescription:
          "Chandler demands that Eddie move out; however, he doesn't seem to get the message. Meanwhile, a book on empowerment for women inspires the girls. In order to pay his bills, Ross convinces Joey to audition for a role he doesn't want.",
      },
      {
        episodeSeason: 2,
        episodeNum: 20,
        episodeName: "The One Where Old Yeller Dies",
        episodeDate: "April 4, 1996",
        episodeRanking: 8.1,
        episodeDescription:
          "Phoebe's world view is shattered when she learns how Old Yeller really ends. Monica becomes jealous when Richard starts hanging out with Chandler and Joey. Rachel panics when she learns that Ross has planned their whole life together.",
      },
      {
        episodeSeason: 2,
        episodeNum: 21,
        episodeName: "The One with the Bullies",
        episodeDate: "April 25, 1996",
        episodeRanking: 8.1,
        episodeDescription:
          "Chandler and Ross run into two bullies at Central Perk. Monica tries her luck at the stock market to avoid taking a job at a 1950s themed diner. Phoebe drives upstate for a second time to meet her father while Joey and Rachel accompany her.",
      },
      {
        episodeSeason: 2,
        episodeNum: 22,
        episodeName: "The One with the Two Parties",
        episodeDate: "May 2, 1996",
        episodeRanking: 9,
        episodeDescription:
          "Chaos ensues when Rachel's recently divorced parents show up at her surprise birthday party, so the gang has to find ways to keep her parents separated otherwise they'll start fighting.",
      },
      {
        episodeSeason: 2,
        episodeNum: 23,
        episodeName: "The One with the Chicken Pox",
        episodeDate: "May 9, 1996",
        episodeRanking: 8,
        episodeDescription:
          "Phoebe catches chicken pox just as an old flame arrives in town on leave from the Navy. Joey gets a job at Chandler's office. Monica is upset that Richard doesn't have any quirks.",
      },
      {
        episodeSeason: 2,
        episodeNum: 24,
        episodeName: "The One with Barry and Mindy's Wedding",
        episodeDate: "May 16, 1996",
        episodeRanking: 8.2,
        episodeDescription:
          "Rachel reluctantly agrees to be maid of honor at her ex-fianc√© Barry's wedding. Monica ponders her future with Richard. Joey has to practice kissing guys to get a role in Warren Beatty's new movie but Ross and Chandler are unwilling to help him.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "The One with the Princess Leia Fantasy",
        episodeDate: "September 19, 1996",
        episodeRanking: 8.4,
        episodeDescription:
          "Monica suffers from insomnia and depression following her breakup with Richard. Joey struggles to accept Chandler and Janice's relationship. Ross confides in Rachel about one of his fantasies.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "The One Where No One's Ready",
        episodeDate: "September 26, 1996",
        episodeRanking: 9,
        episodeDescription:
          "A stressed Ross desperately and insistently tries to get the rest of the gang ready for a black tie event at the museum, while Joey and Chandler clash over personal belongings and personal space.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "The One with the Jam",
        episodeDate: "October 3, 1996",
        episodeRanking: 8,
        episodeDescription:
          "Monica tries to get over Richard by using her free time to make jam and considers artificial insemination through a sperm bank. Phoebe is stalked by a man who mistakes her for Ursula.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "The One with the Metaphorical Tunnel",
        episodeDate: "October 10, 1996",
        episodeRanking: 8,
        episodeDescription:
          "Chandler tries to get over his fear of commitment. Phoebe poses as Joey's agent after she forgets to tell him about an audition. Ross panics after seeing Ben play with a Barbie doll and tries to convince him to play with more manly toys.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "The One with Frank Jr.",
        episodeDate: "October 17, 1996",
        episodeRanking: 8.1,
        episodeDescription:
          "Phoebe has trouble bonding with her half-brother Frank when he comes to visit. Joey attempts to build an entertainment center. Ross is challenged to name the five celebrities he'd like to sleep with most.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "The One with the Flashback",
        episodeDate: "October 31, 1996",
        episodeRanking: 9.1,
        episodeDescription:
          "The gang remember the events three years ago, when several of them almost slept together.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "The One with the Race Car Bed",
        episodeDate: "November 7, 1996",
        episodeRanking: 8.3,
        episodeDescription:
          "Monica buys a bed from Janice's soon to be ex husband. Ross and Rachel have dinner with Rachel's father. Joey leads an acting class.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "The One with the Giant Poking Device",
        episodeDate: "November 14, 1996",
        episodeRanking: 8.3,
        episodeDescription:
          "Chandler is devastated after Joey tells him he saw Janice kissing her ex-husband. Monica accidentally bumps Ben's head into a post when she and Rachel babysit. Phoebe is paranoid if she goes to dentist someone she knows will die.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "The One with the Football",
        episodeDate: "November 21, 1996",
        episodeRanking: 9,
        episodeDescription:
          'Old sibling rivalry between Monica and Ross resurfaces and postpones Thanksgiving dinner when the gang decide to play a game of "touch" football.',
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "The One Where Rachel Quits",
        episodeDate: "December 12, 1996",
        episodeRanking: 8.1,
        episodeDescription:
          "Ross accidentally breaks a little girl's leg and tries to help her sell boxes of cookies which recreates Monica's childhood fixation. Rachel quits her job at Central Perk and Joey's Christmas tree selling conflicts with Phoebe's principles.",
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "The One Where Chandler Can't Remember Which Sister",
        episodeDate: "January 9, 1997",
        episodeRanking: 8.6,
        episodeDescription:
          "A drunken Chandler fools around with one of Joey's sisters - but he can't remember which one. Ross becomes skeptical when a guy at the diner gets Rachel an interview for a position at Bloomingdales.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "The One with All the Jealousy",
        episodeDate: "January 16, 1997",
        episodeRanking: 8.2,
        episodeDescription:
          "Ross becomes insanely jealous of Mark. Monica hooks up with a co-worker, who writes her a poem with a hidden meaning. One of Joey's numerous lies on his resume is exposed when he takes part in a Broadway production.",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "The One Where Monica and Richard Are Just Friends",
        episodeDate: "January 30, 1997",
        episodeRanking: 8.2,
        episodeDescription:
          "Monica's willpower is tested when she bumps into Richard. Joey and Rachel exchange their favorite books. Phoebe dates an athletic guy who doesn't realize he has a \"wardrobe malfunction\".",
      },
      {
        episodeSeason: 3,
        episodeNum: 14,
        episodeName: "The One with Phoebe's Ex-Partner",
        episodeDate: "February 6, 1997",
        episodeRanking: 7.8,
        episodeDescription:
          'Phoebe is reunited with her former singing partner who thinks "Smelly Cat" has hit potential; Chandler dates a woman with a prosthetic leg.',
      },
      {
        episodeSeason: 3,
        episodeNum: 15,
        episodeName: "The One Where Ross and Rachel Take a Break",
        episodeDate: "February 13, 1997",
        episodeRanking: 8.5,
        episodeDescription:
          "Ross seeks solace at a party after a bitter fight with Rachel and ends up in the arms of another woman; Phoebe's date needs an interpreter to communicate.",
      },
      {
        episodeSeason: 3,
        episodeNum: 16,
        episodeName: "The One with the Morning After",
        episodeDate: "February 20, 1997",
        episodeRanking: 9.1,
        episodeDescription:
          "Ross is guilt-ridden after sleeping with Chloe and desperately tries to stop Rachel from finding out and when she does, the rest of the gang listen to them argue and end up trapped in Monica's room for the rest of the night.",
      },
      {
        episodeSeason: 3,
        episodeNum: 17,
        episodeName: "The One Without the Ski Trip",
        episodeDate: "March 6, 1997",
        episodeRanking: 8.3,
        episodeDescription:
          "Monica, Chandler, Phoebe and Joey become stuck in the middle of Ross and Rachel's fight following their break-up.",
      },
      {
        episodeSeason: 3,
        episodeNum: 18,
        episodeName: "The One with the Hypnosis Tape",
        episodeDate: "March 13, 1997",
        episodeRanking: 8.4,
        episodeDescription:
          "Monica goes out with a guy who turns out to be a software billionaire. Chandler's stop smoking hypnosis tape has an unexpected side effect. Phoebe's brother Frank makes a surprise announcement that he is getting married - to a woman twice his age.",
      },
      {
        episodeSeason: 3,
        episodeNum: 19,
        episodeName: "The One with the Tiny T-Shirt",
        episodeDate: "March 27, 1997",
        episodeRanking: 8.1,
        episodeDescription:
          "Rachel goes on her first date, after splitting from Ross, with Mark. Joey clashes with his co-star in his new play. Monica continues to date Pete, even though she is still not attracted to him.",
      },
      {
        episodeSeason: 3,
        episodeNum: 20,
        episodeName: "The One with the Dollhouse",
        episodeDate: "April 10, 1997",
        episodeRanking: 8.1,
        episodeDescription:
          "Monica's aunt dies and leaves her an antique dollhouse that she doesn't want Phoebe to play with; Rachel regrets setting up Chandler with her boss, Joanna.",
      },
      {
        episodeSeason: 3,
        episodeNum: 21,
        episodeName: "The One with the Chick and the Duck",
        episodeDate: "April 17, 1997",
        episodeRanking: 8.7,
        episodeDescription:
          "Joey buys a chick for him and Chandler, Pete offers Monica a job at his restaurant but she is undecided if she should accept it. Ross shows his continued feelings for Rachel when he gives up being on TV for her.",
      },
      {
        episodeSeason: 3,
        episodeNum: 22,
        episodeName: "The One with the Screamer",
        episodeDate: "April 24, 1997",
        episodeRanking: 8.2,
        episodeDescription:
          "Ross witnesses Rachel's date screaming at people. Meanwhile, Joey becomes upset when Kate is offered a job in Los Angeles; Phoebe refuses to hang up the phone when she is placed on hold by her phone company.",
      },
      {
        episodeSeason: 3,
        episodeNum: 23,
        episodeName: "The One with Ross's Thing",
        episodeDate: "May 1, 1997",
        episodeRanking: 8,
        episodeDescription:
          "Ross seeks medical help when he finds a mysterious skin condition on his backside. Phoebe struggles to choose between two guys; Monica can't decide what to do about Pete when she thinks he is going to propose.",
      },
      {
        episodeSeason: 3,
        episodeNum: 24,
        episodeName: "The One with the Ultimate Fighting Champion",
        episodeDate: "May 8, 1997",
        episodeRanking: 8.1,
        episodeDescription:
          "Monica struggles to support Pete in his goal to become the Ultimate Fighting Champion. Chandler is uneasy when his boss playfully slaps his butt. Rachel becomes jealous when Ross starts dating a woman that was introduced to him by Phoebe.",
      },
      {
        episodeSeason: 3,
        episodeNum: 25,
        episodeName: "The One at the Beach",
        episodeDate: "May 15, 1997",
        episodeRanking: 8.8,
        episodeDescription:
          "While at the beach, Phoebe meets a family friend with links to her past; Ross discovers that Rachel still loves him and must decide between her and Bonnie.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "The One with the Jellyfish",
        episodeDate: "September 25, 1997",
        episodeRanking: 9.1,
        episodeDescription:
          "Ross chooses between Rachel and his bald-headed girlfriend Bonnie; Joey, Chandler, and Monica have a perilous encounter with a jellyfish at the beach.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "The One with the Cat",
        episodeDate: "October 2, 1997",
        episodeRanking: 8,
        episodeDescription:
          "Phoebe becomes convinced that the spirit of her dead mother is inside a cat. Chandler and Joey are robbed. Monica goes on a date with a guy from her high school.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "The One with the 'Cuffs",
        episodeDate: "October 9, 1997",
        episodeRanking: 8.5,
        episodeDescription:
          "Monica tries to avoid criticism when she caters a party for her mother. Chandler ends up half naked and handcuffed to a chair in Rachel's boss's office. Joey tries to get educated from a salesman trying to sell him a set of encyclopedias.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "The One with the Ballroom Dancing",
        episodeDate: "October 16, 1997",
        episodeRanking: 8.2,
        episodeDescription:
          "Joey is forced to help Treeger learn how to dance after he threatens to have Monica and Rachel evicted. Phoebe develops a crush on one of her clients. Ross tries to help Chandler quit the gym.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "The One with Joey's New Girlfriend",
        episodeDate: "October 30, 1997",
        episodeRanking: 8.4,
        episodeDescription:
          "Chandler develops feelings for Joey's new girlfriend. Ross and Rachel try to make each other jealous with their dates. Phoebe's cold gives her a sexy singing voice.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "The One with the Dirty Girl",
        episodeDate: "November 6, 1997",
        episodeRanking: 8.5,
        episodeDescription:
          "Ross's new girlfriend is nearly perfect until he discovers her apartment is very dirty. Chandler buys a better birthday present for Kathy than Joey. Phoebe helps Monica cater an event. Rachel is obsessed at finishing a crossword puzzle by herself.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "The One Where Chandler Crosses the Line",
        episodeDate: "November 13, 1997",
        episodeRanking: 8.7,
        episodeDescription:
          "Chandler is guilt-ridden after kissing Kathy. Ross starts playing the keyboard again and everyone except Phoebe thinks he's terrible. Joey dates someone else while still attached to Kathy.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "The One with Chandler in a Box",
        episodeDate: "November 20, 1997",
        episodeRanking: 9.1,
        episodeDescription:
          "Chandler tries to earn Joey's forgiveness by lying in a wooden box for six hours. Monica accidentally gets ice in her eye and her doctor turns out to be Richard's son and it's discovered Rachel exchanges the gifts she received in the past.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "The One Where They're Going to Party!",
        episodeDate: "December 11, 1997",
        episodeRanking: 7.9,
        episodeDescription:
          "Monica ends up having to choose between a head chef position or the catering business she started with Phoebe. Rachel is close to getting a promotion but tragedy strikes. Chandler and Ross are excited when an old friend is coming to town.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "The One with the Girl from Poughkeepsie",
        episodeDate: "December 18, 1997",
        episodeRanking: 8,
        episodeDescription:
          "In order for her kitchen staff to acknowledge her authority, Monica hires Joey so she can fire him in front of them. Chandler unsuccessfully tries to set Rachel up with a co-worker. Ross can't choose between two girls.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "The One with Phoebe's Uterus",
        episodeDate: "January 8, 1998",
        episodeRanking: 8.5,
        episodeDescription:
          "Newlyweds Frank and Alice ask Phoebe to be their surrogate. Joey gets a job as a tour guide at Ross's museum. Chandler asks Monica and Rachel for advice on how to sexually satisfy Kathy.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "The One with the Embryos",
        episodeDate: "January 15, 1998",
        episodeRanking: 9.5,
        episodeDescription:
          "Phoebe's uterus is examined for implantation of the embryos. Meanwhile, a seemingly harmless game between Chandler and Joey against Monica and Rachel escalates into a full blown contest where the stakes are raised higher and higher.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "The One with Rachel's Crush",
        episodeDate: "January 29, 1998",
        episodeRanking: 8.2,
        episodeDescription:
          "After seeing Kathy's play, Chandler becomes convinced she is cheating on him with her co-star. Rachel develops a crush on one of her customers. Monica becomes jealous when she realizes she is no longer the 'hostess'.",
      },
      {
        episodeSeason: 4,
        episodeNum: 14,
        episodeName: "The One with Joey's Dirty Day",
        episodeDate: "February 5, 1998",
        episodeRanking: 8.2,
        episodeDescription:
          "Joey arrives on the set of his latest movie unwashed, after a three-day fishing trip with his dad. Rachel sets up Ross with the niece of her boss. Chandler goes through three phrases to help recover from Kathy cheating on him.",
      },
      {
        episodeSeason: 4,
        episodeNum: 15,
        episodeName: "The One with All the Rugby",
        episodeDate: "February 26, 1998",
        episodeRanking: 8.5,
        episodeDescription:
          "Chandler runs into Janice, and finds her more irritating than ever. Meanwhile, Ross attempts to learn how to play rugby to impress Emily and Monica obsesses over a electric switch.",
      },
      {
        episodeSeason: 4,
        episodeNum: 16,
        episodeName: "The One with the Fake Party",
        episodeDate: "March 19, 1998",
        episodeRanking: 8.2,
        episodeDescription:
          "Rachel organizes a fake good bye party for Emily so she can spend time with Joshua. A side effect from her pregnancy causes Phoebe to have a craving for meat.",
      },
      {
        episodeSeason: 4,
        episodeNum: 17,
        episodeName: "The One with the Free Porn",
        episodeDate: "March 26, 1998",
        episodeRanking: 8.6,
        episodeDescription:
          "Chandler and Joey discover that they're getting a free porn channel on their TV. Monica encourages Ross to tell Emily he loves her just before she leaves for London. Phoebe gets a shock when she visits her OB-GYN.",
      },
      {
        episodeSeason: 4,
        episodeNum: 18,
        episodeName: "The One with Rachel's New Dress",
        episodeDate: "April 2, 1998",
        episodeRanking: 8.2,
        episodeDescription:
          "Rachel has an awkward encounter with Joshua's parents. Phoebe is offered the chance to name one of the triplets. Ross becomes paranoid when Emily goes to London with Susan.",
      },
      {
        episodeSeason: 4,
        episodeNum: 19,
        episodeName: "The One with All the Haste",
        episodeDate: "April 9, 1998",
        episodeRanking: 8.7,
        episodeDescription:
          "Ross proposes to Emily. Monica and Rachel try to win their apartment back from Chandler and Joey.",
      },
      {
        episodeSeason: 4,
        episodeNum: 20,
        episodeName: "The One with All the Wedding Dresses",
        episodeDate: "April 16, 1998",
        episodeRanking: 8.5,
        episodeDescription:
          "Monica tries on Emily's wedding dress, and can't stop wearing it. Jealous of Ross's proposal to Emily, Rachel tries to talk Joshua into marriage. Chandler takes Joey to a sleep clinic when he starts snoring.",
      },
      {
        episodeSeason: 4,
        episodeNum: 21,
        episodeName: "The One with the Invitation",
        episodeDate: "April 23, 1998",
        episodeRanking: 7.1,
        episodeDescription:
          "As Ross and Emily send out wedding invitations, he and Rachel each look back on their relationship together while Joey and Chandler look for a purpose in life.",
      },
      {
        episodeSeason: 4,
        episodeNum: 22,
        episodeName: "The One with the Worst Best Man Ever",
        episodeDate: "April 30, 1998",
        episodeRanking: 8.5,
        episodeDescription:
          "at first Ross chooses Joey to be his best man but after a mishap at his bachelor party, he decides he wants both Joey and Chandler as his best men. Phoebe's mood swings makes Monica and Rachel nervous.",
      },
      {
        episodeSeason: 4,
        episodeNum: 23,
        episodeName: "The One with Ross's Wedding",
        episodeDate: "May 7, 1998",
        episodeRanking: 8.7,
        episodeDescription:
          "Phoebe tries to help Rachel deal with her feelings for Ross as the rest of the gang head to London for Ross and Emily's wedding.",
      },
      {
        episodeSeason: 4,
        episodeNum: 24,
        episodeName: "The One with Ross's Wedding: Part 2",
        episodeDate: "May 7, 1998",
        episodeRanking: 9.2,
        episodeDescription:
          "Phoebe tries to warn the gang that Rachel is coming to London to tell Ross she still loves him. Ross and Emily's parents get into an argument over the bill for the wedding. Monica and Chandler sleep together. The wedding ends with a gaffe.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "The One After Ross Says Rachel",
        episodeDate: "September 24, 1998",
        episodeRanking: 8.9,
        episodeDescription:
          "A humiliated Emily runs away after Ross says Rachel's name at the altar. Meanwhile, Chandler and Monica struggle to get time alone together.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "The One with All the Kissing",
        episodeDate: "October 1, 1998",
        episodeRanking: 9,
        episodeDescription:
          "Chandler must constantly kiss the girls to cover up a kiss he gave to Monica to hide their affair. Phoebe gets irritated when the gang constantly talk about London. Rachel puts Monica in charge of her love life. Ross tries to contact Emily.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "The One Hundredth",
        episodeDate: "October 8, 1998",
        episodeRanking: 8.8,
        episodeDescription:
          'The gang take Phoebe to the hospital after she goes into labor. Monica threatens to go on a date with a male nurse after Chandler claims they are "just goofing around." Joey gets treated for kidney stones.',
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "The One Where Phoebe Hates PBS",
        episodeDate: "October 18, 1998",
        episodeRanking: 8.2,
        episodeDescription:
          "Ross finally gets in touch with Emily and they try to work it out. Chandler gloats after Rachel reveals that Monica's secret boyfriend is the best sex she ever had. Phoebe and Joey debate if a selfless good deed exists.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "The One with the Kips",
        episodeDate: "October 29, 1998",
        episodeRanking: 8.7,
        episodeDescription:
          "Chandler and Monica go away for the weekend but spend the entire time fighting. Ross tries to tell Rachel about his agreement with Emily.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "The One with the Yeti",
        episodeDate: "November 5, 1998",
        episodeRanking: 8,
        episodeDescription:
          "The gang become frustrated with Emily's demands to Ross. Monica and Rachel mistake their new neighbor for a yeti. Phoebe receives a fur coat as a family heirloom from her mother.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "The One Where Ross Moves In",
        episodeDate: "November 12, 1998",
        episodeRanking: 8.3,
        episodeDescription:
          "Ross moves in with Chandler and Joey after Emily's cousin kicks him out of his apartment. Phoebe dates a health inspector. Rachel plays hard-to-get with Danny.",
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "The One with All the Thanksgivings",
        episodeDate: "November 19, 1998",
        episodeRanking: 9.1,
        episodeDescription:
          "The gang remember and share with each other their worst Thanksgivings.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "The One with Ross's Sandwich",
        episodeDate: "December 10, 1998",
        episodeRanking: 9.1,
        episodeDescription:
          "Joey finds himself constantly covering for Chandler and Monica's affair. Ross becomes angry when someone at work eats his sandwich. Phoebe and Rachel enroll in a literature class.",
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "The One with the Inappropriate Sister",
        episodeDate: "December 17, 1998",
        episodeRanking: 8.1,
        episodeDescription:
          "A bored Ross wreaks havoc in Chandler and Joey's lives. Rachel is uncomfortable with Danny's unusually close relationship with his sister. Phoebe runs into trouble whilst collecting donations for the poor during Christmas.",
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "The One with All the Resolutions",
        episodeDate: "January 7, 1999",
        episodeRanking: 9.1,
        episodeDescription:
          "The gang make their New Years resolutions. Chandler struggles to not make jokes about everyone. Rachel uncovers a secret. Ross runs into trouble when he wears leather pants on a date.",
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "The One with Chandler's Work Laugh",
        episodeDate: "January 21, 1999",
        episodeRanking: 8.2,
        episodeDescription:
          "Monica becomes annoyed at how Chandler sucks up to his boss by mimicking his boss's laugh and laughing at his tasteless jokes. Ross hooks up with Janice when he finds out Emily is getting married.",
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "The One with Joey's Bag",
        episodeDate: "February 4, 1999",
        episodeRanking: 8.1,
        episodeDescription:
          "Phoebe's grandmother dies, and Phoebe is shocked when her father turns up at the funeral. Meanwhile, Rachel gives Joey a \"man's bag\" for an audition, and Chandler is scared to tell Monica he doesn't like her massages.",
      },
      {
        episodeSeason: 5,
        episodeNum: 14,
        episodeName: "The One Where Everybody Finds Out",
        episodeDate: "February 11, 1999",
        episodeRanking: 9.7,
        episodeDescription:
          "When Phoebe finds out about Monica and Chandler, she and Rachel attempt to get them to confess their relationship.",
      },
      {
        episodeSeason: 5,
        episodeNum: 15,
        episodeName: "The One with the Girl Who Hits Joey",
        episodeDate: "February 18, 1999",
        episodeRanking: 8.5,
        episodeDescription:
          "Ross makes enemies out of his new neighbors. Chandler freaks out about his relationship with Monica. Joey dates a girl who likes to playfully punch him but she doesn't realize she punches him too hard and Joey is reluctant to tell her.",
      },
      {
        episodeSeason: 5,
        episodeNum: 16,
        episodeName: "The One with the Cop",
        episodeDate: "February 25, 1999",
        episodeRanking: 8.6,
        episodeDescription:
          "Joey has a dream about Monica and becomes convinced he is in love with her. Meanwhile, Phoebe finds a police badge in Central Perk, and Ross tries to get his new sofa into his apartment.",
      },
      {
        episodeSeason: 5,
        episodeNum: 17,
        episodeName: "The One with Rachel's Inadvertent Kiss",
        episodeDate: "March 18, 1999",
        episodeRanking: 8.5,
        episodeDescription:
          "Rachel has an awkward encounter when she interviews for a new job. Monica becomes jealous of Phoebe and Gary. Joey searches for a 'hot girl' in Ross's building.",
      },
      {
        episodeSeason: 5,
        episodeNum: 18,
        episodeName: "The One Where Rachel Smokes",
        episodeDate: "April 8, 1999",
        episodeRanking: 7.9,
        episodeDescription:
          "Rachel takes up smoking to feel more included at work. Joey auditions for a soup commercial with Ross's son Ben, but they end up competing against each other. Monica and Phoebe plan Rachel's surprise birthday party one month in advance.",
      },
      {
        episodeSeason: 5,
        episodeNum: 19,
        episodeName: "The One Where Ross Can't Flirt",
        episodeDate: "April 22, 1999",
        episodeRanking: 8.7,
        episodeDescription:
          "As Joey's grandmother visits to watch him on TV, Ross has trouble flirting with the pizza delivery girl, and Rachel tries to find an earring of Monica's that she has misplaced.",
      },
      {
        episodeSeason: 5,
        episodeNum: 20,
        episodeName: "The One with the Ride Along",
        episodeDate: "April 29, 1999",
        episodeRanking: 8.2,
        episodeDescription:
          "The guys go on a ride-along with Gary. Rachel accidentally deletes a message from Emily on Ross's answering machine.",
      },
      {
        episodeSeason: 5,
        episodeNum: 21,
        episodeName: "The One with the Ball",
        episodeDate: "May 6, 1999",
        episodeRanking: 8.4,
        episodeDescription:
          "Gary asks Phoebe to move in with him but she's reluctant to and to overcome boredom, Ross and Joey start throwing a ball to each other. Rachel buys an expensive cat but it doesn't behave as she hoped it would.",
      },
      {
        episodeSeason: 5,
        episodeNum: 22,
        episodeName: "The One with Joey's Big Break",
        episodeDate: "May 11, 1999",
        episodeRanking: 8.2,
        episodeDescription:
          "Joey drives to Las Vegas to shoot to shoot a new movie where he is in the lead role. Rachel gets an eye infection but is reluctant to seek treatment because of her eye phobia. Phoebe is mad at Ross, but doesn't know why.",
      },
      {
        episodeSeason: 5,
        episodeNum: 23,
        episodeName: "The One in Vegas: Part 1",
        episodeDate: "May 20, 1999",
        episodeRanking: 8.8,
        episodeDescription:
          "The gang go to Las Vegas to visit Joey. Chandler is angry when he finds out Monica had lunch with Richard. Ross and Rachel try to embarrass each other after an awkward encounter.",
      },
      {
        episodeSeason: 5,
        episodeNum: 24,
        episodeName: "The One in Vegas: Part 2",
        episodeDate: "May 20, 1999",
        episodeRanking: 9.1,
        episodeDescription:
          "Chandler and Monica reconcile and hastily decide to get married. Ross and Rachel get drunk and roam the casino. Phoebe deals with a 'lurker' on the slot machines.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "The One After Vegas",
        episodeDate: "September 23, 1999",
        episodeRanking: 8.7,
        episodeDescription:
          "Ross and Rachel deal with the aftermath of their drunken escapade. Phoebe and Joey take a road trip back to New York in Phoebe's grandmother's cab. Monica and Chandler ponder the idea of marriage.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "The One Where Ross Hugs Rachel",
        episodeDate: "September 30, 1999",
        episodeRanking: 8.2,
        episodeDescription:
          "Monica and Chandler try to tell Rachel and Joey that they're moving in together. Phoebe thinks that Ross didn't get the annulment because he still loves Rachel.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "The One with Ross's Denial",
        episodeDate: "October 7, 1999",
        episodeRanking: 8.1,
        episodeDescription:
          "Ross tries to deny he still has feelings for Rachel. Joey interviews for a new roommate. Monica and Chandler argue over what to do with the spare room when they move in together.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "The One Where Joey Loses His Insurance",
        episodeDate: "October 14, 1999",
        episodeRanking: 8.5,
        episodeDescription:
          "Joey's health benefits lapse just as he develops a hernia. Ross is given a professorship at NYU and eager to impress his students, he puts on a fake English accent.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "The One with Joey's Porsche",
        episodeDate: "October 21, 1999",
        episodeRanking: 8.1,
        episodeDescription:
          "Ross and Rachel try to get an annulment, Joey finds the keys to a porsche in Central Perk, and Phoebe, Monica and Chandler babysit the triplets.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "The One on the Last Night",
        episodeDate: "November 4, 1999",
        episodeRanking: 8.5,
        episodeDescription:
          "On the last night before Chandler and Monica move in together, Monica and Rachel argue, and Chandler tries to give Joey money to help him pay the bills.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "The One Where Phoebe Runs",
        episodeDate: "November 11, 1999",
        episodeRanking: 8.3,
        episodeDescription:
          "Rachel is embarrassed by Phoebe's odd running style. Joey gets a new roommate. Chandler tries to impress Monica by cleaning the apartment but forgets how everything is supposed to look.",
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "The One with Ross' Teeth",
        episodeDate: "November 18, 1999",
        episodeRanking: 8.5,
        episodeDescription:
          "Ross goes too far while trying to impress a date by over-whitening his teeth. Rachel uses gossip to get her boss to like her after Phoebe supposedly makes out with Ralph Lauren.",
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "The One Where Ross Got High",
        episodeDate: "November 25, 1999",
        episodeRanking: 9.2,
        episodeDescription:
          "Ross is forced to reveal the reason why Jack and Judy don't like Chandler. Rachel tries to make dessert for the gang. Joey and Ross try to get out of Thanksgiving when they are invited to hang out with Janine and her dancer friends.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "The One with the Routine",
        episodeDate: "December 16, 1999",
        episodeRanking: 8.6,
        episodeDescription:
          "On the set of \"Dick Clark's New Year's Rockin' Eve\", Joey tries to kiss Janine at midnight and Monica and Ross resurrect their dance routine from high school. Meanwhile, Rachel, Phoebe and Chandler look for Monica's Christmas presents.",
      },
      {
        episodeSeason: 6,
        episodeNum: 11,
        episodeName: "The One with the Apothecary Table",
        episodeDate: "January 6, 2000",
        episodeRanking: 8.1,
        episodeDescription:
          "Joey is caught in the middle when Janine tells him she doesn't like Monica and Chandler. Meanwhile, Rachel buys an apothecary table from a store that Phoebe hates.",
      },
      {
        episodeSeason: 6,
        episodeNum: 12,
        episodeName: "The One with the Joke",
        episodeDate: "January 13, 2000",
        episodeRanking: 8,
        episodeDescription:
          "Chandler and Ross argue over a joke. Meanwhile, Joey reluctantly takes a waiter job at Central Perk, and Monica becomes annoyed when Phoebe says she would choose Rachel over her as a girlfriend.",
      },
      {
        episodeSeason: 6,
        episodeNum: 13,
        episodeName: "The One with Rachel's Sister",
        episodeDate: "February 3, 2000",
        episodeRanking: 8.2,
        episodeDescription:
          "Rachel's younger sister arrives in New York and goes on a date with Ross. Meanwhile, Monica won't admit that she is sick.",
      },
      {
        episodeSeason: 6,
        episodeNum: 14,
        episodeName: "The One Where Chandler Can't Cry",
        episodeDate: "February 10, 2000",
        episodeRanking: 8.5,
        episodeDescription:
          "Rachel tries to end the spark between Ross and Jill. When Chandler admits that he can't cry, Monica tries to make it happen. The gang discovers that Phoebe's sister, Ursula, is a porn star and is using Phoebe's name.",
      },
      {
        episodeSeason: 6,
        episodeNum: 15,
        episodeName: "The One That Could Have Been: Part 1",
        episodeDate: "February 17, 2000",
        episodeRanking: 8.5,
        episodeDescription:
          "Barry and Mindy's impending divorce prompts the gang to fantasize about what their lives might be like if they'd all taken different courses.",
      },
      {
        episodeSeason: 6,
        episodeNum: 16,
        episodeName: "The One That Could Have Been: Part 2",
        episodeDate: "February 17, 2000",
        episodeRanking: 8.5,
        episodeDescription:
          "The gang continue to think about how different their lives could have been.",
      },
      {
        episodeSeason: 6,
        episodeNum: 17,
        episodeName: "The One with Unagi",
        episodeDate: "February 24, 2000",
        episodeRanking: 9.1,
        episodeDescription:
          "Rachel and Phoebe take self-defense classes. Chandler and Monica agree to give each other homemade presents for Valentine's Day. Joey tries to get money through medical research.",
      },
      {
        episodeSeason: 6,
        episodeNum: 18,
        episodeName: "The One Where Ross Dates a Student",
        episodeDate: "March 9, 2000",
        episodeRanking: 8.3,
        episodeDescription:
          "Ross jeopardizes his career when he starts dating a student from one of his palaeontology classes. Rachel and Phoebe's apartment catches fire.",
      },
      {
        episodeSeason: 6,
        episodeNum: 19,
        episodeName: "The One with Joey's Fridge",
        episodeDate: "March 23, 2000",
        episodeRanking: 8.3,
        episodeDescription:
          "Joey tries to get everyone to pay for his broken fridge. Ross becomes paranoid when Elizabeth makes plans for spring break. Monica and Chandler compete against Phoebe to find Rachel a date.",
      },
      {
        episodeSeason: 6,
        episodeNum: 20,
        episodeName: "The One with Mac and C.H.E.E.S.E.",
        episodeDate: "April 13, 2000",
        episodeRanking: 7.3,
        episodeDescription:
          "Chandler forgets to write down a message for Joey when the time of his audition for the lead in a TV show is changed.",
      },
      {
        episodeSeason: 6,
        episodeNum: 21,
        episodeName: "The One Where Ross Meets Elizabeth's Dad",
        episodeDate: "April 27, 2000",
        episodeRanking: 8.6,
        episodeDescription:
          'Elizabeth\'s father takes an instant disliking to Ross. Joey almost gets fired from "Mac and C.H.E.E.S.E." after offending the operator of the robot. Phoebe writes a book based on Monica and Chandler.',
      },
      {
        episodeSeason: 6,
        episodeNum: 22,
        episodeName: "The One Where Paul's the Man",
        episodeDate: "May 4, 2000",
        episodeRanking: 9,
        episodeDescription:
          "Paul threatens to have Ross fired from the university if he continues to date Elizabeth. The girls put their names down on a waiting list for a wedding venue.",
      },
      {
        episodeSeason: 6,
        episodeNum: 23,
        episodeName: "The One with the Ring",
        episodeDate: "May 11, 2000",
        episodeRanking: 8.6,
        episodeDescription:
          "Chandler and Phoebe go looking for an engagement ring for Monica. Rachel tries to get Paul to open up to her.",
      },
      {
        episodeSeason: 6,
        episodeNum: 24,
        episodeName: "The One with the Proposal: Part 1",
        episodeDate: "May 18, 2000",
        episodeRanking: 8.7,
        episodeDescription:
          "Chandler's plan to propose to Monica at dinner is interrupted by Richard. Joey accidentally buys a boat at a silent auction. Ross and Elizabeth's relationship comes to a crossroad.",
      },
      {
        episodeSeason: 6,
        episodeNum: 25,
        episodeName: "The One with the Proposal: Part 2",
        episodeDate: "May 18, 2000",
        episodeRanking: 9.3,
        episodeDescription:
          "Chandler continues to pretend to hate the idea of marriage, unaware Richard wants Monica back. Meanwhile, Rachel and Phoebe discuss their 'back-up' plans.",
      },
      {
        episodeSeason: 7,
        episodeNum: 1,
        episodeName: "The One with Monica's Thunder",
        episodeDate: "October 12, 2000",
        episodeRanking: 8.4,
        episodeDescription:
          "The gang celebrate Monica and Chandler's engagement, however Ross and Rachel upstage them by briefly reuniting. Joey tries to dress and act like a nineteen-year-old for an audition.",
      },
      {
        episodeSeason: 7,
        episodeNum: 2,
        episodeName: "The One with Rachel's Book",
        episodeDate: "October 12, 2000",
        episodeRanking: 8.3,
        episodeDescription:
          "Monica learns her parents have spent her entire wedding fund. Phoebe temporarily moves into Ross's apartment, bringing her massage clients with her. Joey mocks Rachel when he finds an erotic novel she is reading.",
      },
      {
        episodeSeason: 7,
        episodeNum: 3,
        episodeName: "The One with Phoebe's Cookies",
        episodeDate: "October 19, 2000",
        episodeRanking: 8.1,
        episodeDescription:
          "Monica tries to figure out Phoebe's grandmother's secret cookie recipe. Meanwhile, Rachel tries to teach Joey how to sail, and Chandler has an awkward encounter when he tries to bond with Jack.",
      },
      {
        episodeSeason: 7,
        episodeNum: 4,
        episodeName: "The One with Rachel's Assistant",
        episodeDate: "October 26, 2000",
        episodeRanking: 8.1,
        episodeDescription:
          'Chaos ensues when Monica and Chandler decide to share each other\'s secrets. Rachel gets a promotion and interviews for an assistant. Joey is offered the chance to go back on "Days of Our Lives".',
      },
      {
        episodeSeason: 7,
        episodeNum: 5,
        episodeName: "The One with the Engagement Picture",
        episodeDate: "November 2, 2000",
        episodeRanking: 8,
        episodeDescription:
          "Chandler struggles to photograph well for his and Monica's engagement picture. Joey teaches Tag how to pick up women, much to Rachel's annoyance. Phoebe and Ross date a couple who are divorcing.",
      },
      {
        episodeSeason: 7,
        episodeNum: 6,
        episodeName: "The One with the Nap Partners",
        episodeDate: "November 9, 2000",
        episodeRanking: 8.9,
        episodeDescription:
          "Joey and Ross accidentally take a nap together - and much to their dismay, find that they like it. Phoebe and Rachel compete to become Monica's maid of honor.",
      },
      {
        episodeSeason: 7,
        episodeNum: 7,
        episodeName: "The One with Ross's Library Book",
        episodeDate: "November 16, 2000",
        episodeRanking: 8.5,
        episodeDescription:
          "Ross and Chandler discovers that Ross's book is in the section of the library where students go to have sex. Monica and Chandler run into Janice and she immediately invites herself to the wedding. They try to avoid her. Meanwhile, Rachel and Phoebe befriend Joey's girlfriend.",
      },
      {
        episodeSeason: 7,
        episodeNum: 8,
        episodeName: "The One Where Chandler Doesn't Like Dogs",
        episodeDate: "November 23, 2000",
        episodeRanking: 8.2,
        episodeDescription:
          "Ross struggles to name all 50 states in a game. Joey compromises Rachel's chances with her crush, Tag, during Thanksgiving dinner. Phoebe sneaks a dog into the apartment, making Chandler extremely nervous.",
      },
      {
        episodeSeason: 7,
        episodeNum: 9,
        episodeName: "The One with All the Candy",
        episodeDate: "December 7, 2000",
        episodeRanking: 8.1,
        episodeDescription:
          "Monica makes candy to get to know her neighbours, Rachel and Tag try to hide their relationship at work and Ross buys Phoebe a bike.",
      },
      {
        episodeSeason: 7,
        episodeNum: 10,
        episodeName: "The One with the Holiday Armadillo",
        episodeDate: "December 14, 2000",
        episodeRanking: 8.5,
        episodeDescription:
          "Ross wants to introduce Ben to Hanukkah. In order to entice Rachel to move back into their refurbished apartment, Phoebe must drive a wedge between Rachel and current roomie Joey.",
      },
      {
        episodeSeason: 7,
        episodeNum: 11,
        episodeName: "The One with All the Cheesecakes",
        episodeDate: "January 4, 2001",
        episodeRanking: 8.6,
        episodeDescription:
          "Chandler refuses to give back a cheesecake accidentally delivered to his apartment; Phoebe gets angry with Joey when he blows off dinner with her for a date.",
      },
      {
        episodeSeason: 7,
        episodeNum: 12,
        episodeName: "The One Where They're Up All Night",
        episodeDate: "January 11, 2001",
        episodeRanking: 8.6,
        episodeDescription:
          "After the gang head up to the roof to see a passing comet, separate events unfold that lead to them all having a sleepless night.",
      },
      {
        episodeSeason: 7,
        episodeNum: 13,
        episodeName: "The One Where Rosita Dies",
        episodeDate: "February 1, 2001",
        episodeRanking: 8.4,
        episodeDescription:
          "Rachel breaks Joey's armchair. Phoebe takes a temp job in a call centre. Ross and Monica find out their parents are selling their childhood home.",
      },
      {
        episodeSeason: 7,
        episodeNum: 14,
        episodeName: "The One Where They All Turn Thirty",
        episodeDate: "February 8, 2001",
        episodeRanking: 8.6,
        episodeDescription:
          "Rachel's 30th birthday prompts the rest of the gang to reminisce about their own 30th celebrations.",
      },
      {
        episodeSeason: 7,
        episodeNum: 15,
        episodeName: "The One with Joey's New Brain",
        episodeDate: "February 15, 2001",
        episodeRanking: 8.4,
        episodeDescription:
          "Joey gets an opportunity to rejoin \"Days of Our Lives\" when his comatose character is implanted with the brain of a female character. Joey approaches her to get some advice on how to play her character, but she's unaware that she's being written out of the show and freaks out at Joey. Later, she tries to give him some pointers, and they end up spending the night together. Ross tells Chandler and Monica that he has a surprise for their wedding, which turns out to be him playing the bagpipes - terribly, as it turns out. Rachel and Phoebe have their eye on a guy at the ...",
      },
      {
        episodeSeason: 7,
        episodeNum: 16,
        episodeName: "The One with the Truth About London",
        episodeDate: "February 22, 2001",
        episodeRanking: 8.7,
        episodeDescription:
          "Chandler is shocked to find out who Monica really wanted to sleep with the night they first got together. Meanwhile, Rachel gets into trouble with Ross when she teaches Ben practical jokes.",
      },
      {
        episodeSeason: 7,
        episodeNum: 17,
        episodeName: "The One with the Cheap Wedding Dress",
        episodeDate: "March 15, 2001",
        episodeRanking: 8.3,
        episodeDescription:
          "Monica takes the other girls to an overpriced store to choose her wedding dress, briefing them as if they were in the military since bargain-hunters are far more ruthless then Rachel can usually handle. The worst shopper is Megan: she grabs the dress Monica wants, then blackmails her over booking the swing band that's the only thing Chandler really wants for the wedding. Meanwhile, Ross and Joey independently meet and date Kristen while helping her move in. The rivals agree to let her choose after one date with each, but they get so carried away cheating on the deal ...",
      },
      {
        episodeSeason: 7,
        episodeNum: 18,
        episodeName: "The One with Joey's Award",
        episodeDate: "March 29, 2001",
        episodeRanking: 8.4,
        episodeDescription:
          "Joey is nominated for a Soapy Award for his part on Days of Our Lives and Rachel is his date to the ceremony. Joey doesn't win the award but takes someone else's award home. Rachel convinces him to take it back because he can't be happy with an award he didn't win. One of Ross' students failed the midterms because he is in love with Ross and can't concentrate in class so Ross changes his grade. But now more students come to Ross pretending to be in love with him in order to get a better grade. When Rachel and Joey take the Soapy back the real winner just throws it ...",
      },
      {
        episodeSeason: 7,
        episodeNum: 19,
        episodeName: "The One with Ross and Monica's Cousin",
        episodeDate: "April 19, 2001",
        episodeRanking: 8.7,
        episodeDescription:
          "Joey auditions for a naked role in a big movie; Rachel and Phoebe plan Monica's wedding shower; Ross becomes attracted to his cousin after she visits.",
      },
      {
        episodeSeason: 7,
        episodeNum: 20,
        episodeName: "The One with Rachel's Big Kiss",
        episodeDate: "April 26, 2001",
        episodeRanking: 8.3,
        episodeDescription:
          "Rachel's college friend can't remember a scandalous kiss from the past; Chandler and Ross argue for possession of Val Kilmer's tuxedo.",
      },
      {
        episodeSeason: 7,
        episodeNum: 21,
        episodeName: "The One with the Vows",
        episodeDate: "May 3, 2001",
        episodeRanking: 7.4,
        episodeDescription:
          "Monica and Chandler are getting married in four weeks and have to write their vows, but neither has a clue what to say, so they reflect on their past.",
      },
      {
        episodeSeason: 7,
        episodeNum: 22,
        episodeName: "The One with Chandler's Dad",
        episodeDate: "May 10, 2001",
        episodeRanking: 8.3,
        episodeDescription:
          "Ross and Rachel hit the freeway together when Monica's Porsche shows up again; Chandler and Monica go off to Vegas to find Chandler's estranged dad.",
      },
      {
        episodeSeason: 7,
        episodeNum: 23,
        episodeName: "The One with Monica and Chandler's Wedding: Part 1",
        episodeDate: "May 17, 2001",
        episodeRanking: 8.9,
        episodeDescription:
          "So close to the wedding, Chandler suddenly realizes the overwhelming meaning of getting married. Meanwhile, Joey acts opposite a famous actor in a movie, but can't bring himself to tell him that he spits when he says his lines.",
      },
      {
        episodeSeason: 7,
        episodeNum: 24,
        episodeName: "The One with Monica and Chandler's Wedding: Part 2",
        episodeDate: "May 17, 2001",
        episodeRanking: 9.2,
        episodeDescription:
          "Ross tries to find Chandler with Phoebe's help. Meanwhile Rachel tries to hinder Monica.",
      },
      {
        episodeSeason: 8,
        episodeNum: 1,
        episodeName: "The One After I Do",
        episodeDate: "September 27, 2001",
        episodeRanking: 8.7,
        episodeDescription:
          "The gang learns that Rachel is pregnant; Joey tries to impress a Broadway director who's dating Chandler's mom; Chandler's shoes make it hard for him to dance.",
      },
      {
        episodeSeason: 8,
        episodeNum: 2,
        episodeName: "The One with the Red Sweater",
        episodeDate: "October 4, 2001",
        episodeRanking: 9.1,
        episodeDescription:
          "Monica, Phoebe and Joey advise Rachel to tell the father about the pregnancy. Chandler and Ross lose the wedding photos.",
      },
      {
        episodeSeason: 8,
        episodeNum: 3,
        episodeName: "The One Where Rachel Tells...",
        episodeDate: "October 11, 2001",
        episodeRanking: 8.7,
        episodeDescription:
          "Even on their honeymoon, Monica is pushy, and is annoyed that Chandler won't jump the line at the airport check-in - especially after the couple in front of them, also on their honeymoon, get bumped up to first class. They try to sneak into the first-class lounge, but are caught - but she at least manages to steal an orange. Joey and Phoebe find that Monica and Chandler have tricked them out of the keys to the master apartment; Joey hopes a false gas leak alert will make super Treeger use his key, but he makes a fireman use an axe, and the wrecked door calls for a big...",
      },
      {
        episodeSeason: 8,
        episodeNum: 4,
        episodeName: "The One with the Videotape",
        episodeDate: "October 18, 2001",
        episodeRanking: 9.3,
        episodeDescription:
          "Ross and Rachel tell everyone about the night they were together. They have two different stories of how it happened until Ross accidentally reveals that he videotaped it. Not surprisingly, everyone wants to see it.",
      },
      {
        episodeSeason: 8,
        episodeNum: 5,
        episodeName: "The One with Rachel's Date",
        episodeDate: "October 25, 2001",
        episodeRanking: 8.1,
        episodeDescription:
          "Phoebe dates Monica's sous-chef Tim and Monica doesn't fire him for Phoebe's sake. When Phoebe decides to dump Tim, Monica can finally fire him. Rachel has a date with Kash, a co-star on Days of Our Lives. Ross thinks it's weird because whoever takes Rachel out, takes his baby out too. He always pictured that his next child would grow up in a happy family. Rachel's date was terrible because she made the mistake of mentioning she was pregnant. Ross reassures her it isn't so bad because when she has the baby she will love someone more than she ever loved anyone.",
      },
      {
        episodeSeason: 8,
        episodeNum: 6,
        episodeName: "The One with the Halloween Party",
        episodeDate: "November 1, 2001",
        episodeRanking: 8.5,
        episodeDescription:
          'Monica and Chandler decide to throw a Halloween party; Phoebe runs into Ursula and her fianc√©e, who knows nothing about the "real" Ursula.',
      },
      {
        episodeSeason: 8,
        episodeNum: 7,
        episodeName: "The One with the Stain",
        episodeDate: "November 8, 2001",
        episodeRanking: 7.8,
        episodeDescription:
          "Chandler hires a maid, whom Monica suspects is stealing her clothing; Eric has trouble forgetting Ursula when he breaks up with her to date Phoebe.",
      },
      {
        episodeSeason: 8,
        episodeNum: 8,
        episodeName: "The One with the Stripper",
        episodeDate: "November 15, 2001",
        episodeRanking: 8.7,
        episodeDescription:
          "Chandler finds out that Monica had a bachelorette party with a stripper, even though they promised not to have bachelor/bachelorette parties. Rachel takes Phoebe along to dinner with Rachel's dad, because she is afraid her dad will be really angry when she tells him she's pregnant. Mr. Green is delighted to hear he will be a grandfather, but freaks out when he finds out that Rachel isn't getting married - so she just tells him that Ross won't marry her. Monica feels bad about having had a bachelorette party, so she organizes a bachelor party including a stripper for ...",
      },
      {
        episodeSeason: 8,
        episodeNum: 9,
        episodeName: "The One with the Rumor",
        episodeDate: "November 22, 2001",
        episodeRanking: 9.3,
        episodeDescription:
          "Monica invites Will, an old school friend of her and Ross over for Thanksgiving dinner, unaware he isn't too fond of Rachel.",
      },
      {
        episodeSeason: 8,
        episodeNum: 10,
        episodeName: "The One with Monica's Boots",
        episodeDate: "December 6, 2001",
        episodeRanking: 8,
        episodeDescription:
          "Monica's expensive new boots hurt her feet, but she's determined to prove to Chandler that her purchase was worth it; Ben goes to school with Sting's son.",
      },
      {
        episodeSeason: 8,
        episodeNum: 11,
        episodeName: "The One with Ross's Step Forward",
        episodeDate: "December 13, 2001",
        episodeRanking: 8,
        episodeDescription:
          "Joey wants to take Rachel to dinner on a pretend date to practice his dating skills, but soon develops romantic feelings for her; Monica, Phoebe, and Chandler are addicted to Mrs. Pacman.",
      },
      {
        episodeSeason: 8,
        episodeNum: 12,
        episodeName: "The One Where Joey Dates Rachel",
        episodeDate: "January 10, 2002",
        episodeRanking: 8.5,
        episodeDescription:
          "Joey wants to take Rachel to dinner on a pretend date to practice his dating skills, but soon develops romantic feelings for her; gang addicted to Mrs. Pacman.",
      },
      {
        episodeSeason: 8,
        episodeNum: 13,
        episodeName: "The One Where Chandler Takes a Bath",
        episodeDate: "January 17, 2002",
        episodeRanking: 8.5,
        episodeDescription:
          "Monica turns Chandler on to the concept of taking a bath to relax; Ross and Rachel toss baby names around while deciding whether to learn the baby's sex.",
      },
      {
        episodeSeason: 8,
        episodeNum: 14,
        episodeName: "The One with the Secret Closet",
        episodeDate: "January 31, 2002",
        episodeRanking: 8.2,
        episodeDescription:
          "Chandler's very curious about a locked closet, but Monica won't tell him what is inside.",
      },
      {
        episodeSeason: 8,
        episodeNum: 15,
        episodeName: "The One with the Birthing Video",
        episodeDate: "February 7, 2002",
        episodeRanking: 8.3,
        episodeDescription:
          "During Valentine's Day, Chandler discovers the miracle of birth seeing an extremely graphic video. Ross hides from Mona that Rachel is now living in his apartment",
      },
      {
        episodeSeason: 8,
        episodeNum: 16,
        episodeName: "The One Where Joey Tells Rachel",
        episodeDate: "February 28, 2002",
        episodeRanking: 8.2,
        episodeDescription:
          "Ross freaks out when Joey tells him that he is in love with Rachel because Ross is afraid that they will get married and raise his kid together. Phoebe dates a guy called Don, who she thinks is Monica's soul-mate and introduces Don to Monica to see what will happen. Monica and Don get along perfectly. Ross goes to tell Joey that he doesn't hate him and Joey promises to never act on his feelings for Rachel because he won't jeopardize his friendship to Ross. But when Ross realizes that Joey really is in love for the first time he tells Joey to tell Rachel. When Joey ...",
      },
      {
        episodeSeason: 8,
        episodeNum: 17,
        episodeName: "The One with the Tea Leaves",
        episodeDate: "March 7, 2002",
        episodeRanking: 8,
        episodeDescription:
          "Chandler and Monica are happy together - their worst problem is his habit to put CDs in the wrong box and their different taste in music. Rachel is desperate to get back on good terms with Joey, so she takes Monica's advice to change the subject to something work-related. However in another uncomfortable conversation she manages to convince Joey that her boss, Mr. Zelner, wants to buy her baby. When Phoebe resumes reading tea leaves, she sees that she'll meet the man of her dreams soon, and takes that to be Jim, who she keeps bumping into. However she soon finds he ...",
      },
      {
        episodeSeason: 8,
        episodeNum: 18,
        episodeName: "The One in Massapequa",
        episodeDate: "March 28, 2002",
        episodeRanking: 8.2,
        episodeDescription:
          "Everyone prepares for the Gellers' 35th wedding anniversary in Long Island; Monica struggles to prepare the perfect toast; Phoebe invites her new boyfriend Parker.",
      },
      {
        episodeSeason: 8,
        episodeNum: 19,
        episodeName: "The One with Joey's Interview",
        episodeDate: "April 4, 2002",
        episodeRanking: 7.4,
        episodeDescription:
          "Joey prepares for his epic interview with Soap Opera Digest, reminiscing about his past acting experiences, his friends and his romantic life.",
      },
      {
        episodeSeason: 8,
        episodeNum: 20,
        episodeName: "The One with the Baby Shower",
        episodeDate: "April 25, 2002",
        episodeRanking: 8.2,
        episodeDescription:
          'Monica and Phoebe throw Rachel a baby shower but forget to invite Rachel\'s mom. Rachel realizes she has no idea how to look after the baby after the birth. Meanwhile, Joey auditions for a job as a host for a new game show called "Bamboozled", and Chandler and Ross help him practice.',
      },
      {
        episodeSeason: 8,
        episodeNum: 21,
        episodeName: "The One with the Cooking Class",
        episodeDate: "May 2, 2002",
        episodeRanking: 8.1,
        episodeDescription:
          "Monica's restaurant get a bad review. After confronting the critic who wrote it, she decides to join a cooking class, with Joey in tow. Rachel gets jealous when Ross hits it off with a woman at the baby department store.",
      },
      {
        episodeSeason: 8,
        episodeNum: 22,
        episodeName: "The One Where Rachel Is Late",
        episodeDate: "May 9, 2002",
        episodeRanking: 8.3,
        episodeDescription:
          "Monica and Phoebe bet on when Rachel's baby will be born as the due date comes and goes as Rachel becomes extremely irritable; Chandler falls asleep at Joey's big movie premiere.",
      },
      {
        episodeSeason: 8,
        episodeNum: 23,
        episodeName: "The One Where Rachel Has a Baby: Part 1",
        episodeDate: "May 16, 2002",
        episodeRanking: 8.8,
        episodeDescription:
          "Ross and Rachel go to the hospital to have their baby, but it's a long labor. They get stuck in a semi-private room, and many other couples come and go before Rachel is ready to deliver - the last couple being Janice and her new husband. Chandler and Monica decide to start trying to have a baby.",
      },
      {
        episodeSeason: 8,
        episodeNum: 24,
        episodeName: "The One Where Rachel Has a Baby: Part 2",
        episodeDate: "May 16, 2002",
        episodeRanking: 8.9,
        episodeDescription:
          "After Rachel gives birth to her baby, she must confront relationship issues around her.",
      },
      {
        episodeSeason: 9,
        episodeNum: 1,
        episodeName: "The One Where No One Proposes",
        episodeDate: "September 26, 2002",
        episodeRanking: 8.6,
        episodeDescription:
          "Rachel, Ross and Joey get together in a guyand figure out that no one was actually going to propose; Mr. Geller walks in on Monica and Chandler having sex.",
      },
      {
        episodeSeason: 9,
        episodeNum: 2,
        episodeName: "The One Where Emma Cries",
        episodeDate: "October 3, 2002",
        episodeRanking: 8.5,
        episodeDescription:
          "Chandler, having trouble getting enough sleep at home, falls asleep in a meeting and accidentally agrees to run his company's Tulsa office.",
      },
      {
        episodeSeason: 9,
        episodeNum: 3,
        episodeName: "The One with the Pediatrician",
        episodeDate: "October 10, 2002",
        episodeRanking: 8.2,
        episodeDescription:
          "Joey arranges a blind date for Phoebe. Chandler is leaving for Tulsa without Monica, because she has got a great job offer.",
      },
      {
        episodeSeason: 9,
        episodeNum: 4,
        episodeName: "The One with the Sharks",
        episodeDate: "October 17, 2002",
        episodeRanking: 8.1,
        episodeDescription:
          "Monica thinks Chandler is aroused by shark documentaries.",
      },
      {
        episodeSeason: 9,
        episodeNum: 5,
        episodeName: "The One with Phoebe's Birthday Dinner",
        episodeDate: "October 31, 2002",
        episodeRanking: 8.5,
        episodeDescription:
          "Phoebe will celebrate her birthday by having a dinner with her friends at a fancy restaurant. But everybody is late to the dinner, due to a series of problems.",
      },
      {
        episodeSeason: 9,
        episodeNum: 6,
        episodeName: "The One with the Male Nanny",
        episodeDate: "November 7, 2002",
        episodeRanking: 8.3,
        episodeDescription:
          "Looking for a new nanny, Ross and Rachel hire a male nanny named Sandy. Monica tells Chandler that a guy at work is the funniest guy she has ever met.",
      },
      {
        episodeSeason: 9,
        episodeNum: 7,
        episodeName: "The One with Ross's Inappropriate Song",
        episodeDate: "November 14, 2002",
        episodeRanking: 8.6,
        episodeDescription:
          "Ross finds a way to make Emma laugh - singing \"Baby Got Back.\" Meanwhile, Phoebe meets Mike's parents, and Joey and Chandler find a video tape in Richard's apartment.",
      },
      {
        episodeSeason: 9,
        episodeNum: 8,
        episodeName: "The One with Rachel's Other Sister",
        episodeDate: "November 21, 2002",
        episodeRanking: 8.8,
        episodeDescription:
          "Rachel's middle sister shows up at Thanksgiving and causes arguments amongst the gang.",
      },
      {
        episodeSeason: 9,
        episodeNum: 9,
        episodeName: "The One with Rachel's Phone Number",
        episodeDate: "December 5, 2002",
        episodeRanking: 8.1,
        episodeDescription:
          "Rachel is ready to start hanging out again. She and Phoebe go to a bar, where they meet two guys.",
      },
      {
        episodeSeason: 9,
        episodeNum: 10,
        episodeName: "The One with Christmas in Tulsa",
        episodeDate: "December 12, 2002",
        episodeRanking: 7.4,
        episodeDescription:
          "Chandler must spend Christmas in Tulsa, which Monica thinks he might have an affair with a former Miss Oklahoma runner-up while he is there. Chandler comes home early to announce that he quit his job.",
      },
      {
        episodeSeason: 9,
        episodeNum: 11,
        episodeName: "The One Where Rachel Goes Back to Work",
        episodeDate: "January 9, 2003",
        episodeRanking: 7.9,
        episodeDescription:
          "Chandler starts looking for a job and is anxious about having a baby, Rachel decides to go back to work, and Phoebe works as an extra on Joey's show.",
      },
      {
        episodeSeason: 9,
        episodeNum: 12,
        episodeName: "The One with Phoebe's Rats",
        episodeDate: "January 16, 2003",
        episodeRanking: 7.9,
        episodeDescription:
          "Ross makes Joey stay away from their new nanny. Mike accidentally kills Phoebe's rat. Gavin gives Rachel a scarf and a kiss for her birthday.",
      },
      {
        episodeSeason: 9,
        episodeNum: 13,
        episodeName: "The One Where Monica Sings",
        episodeDate: "January 30, 2003",
        episodeRanking: 8.1,
        episodeDescription:
          "A night at Mike's piano bar gives Monica a very showy moment in the spotlight; Chandler employs his secret skill to repair Joey's botched eyebrow-waxing job.",
      },
      {
        episodeSeason: 9,
        episodeNum: 14,
        episodeName: "The One with the Blind Dates",
        episodeDate: "February 6, 2003",
        episodeRanking: 8.2,
        episodeDescription:
          "Phoebe and Joey purposely set Ross and Rachel up on bad dates in the hopes they'll get back together. Monica and Chandler babysit Emma.",
      },
      {
        episodeSeason: 9,
        episodeNum: 15,
        episodeName: "The One with the Mugging",
        episodeDate: "February 13, 2003",
        episodeRanking: 8.3,
        episodeDescription:
          "Joey gets a part in a stage-play in a painful way. Ross and Phoebe are mugged outside Central Perk, Phoebe realizes that she mugged Ross 18 years ago. Chandler starts his new career as advertising writer.",
      },
      {
        episodeSeason: 9,
        episodeNum: 16,
        episodeName: "The One with the Boob Job",
        episodeDate: "February 20, 2003",
        episodeRanking: 8.2,
        episodeDescription:
          "When Monica and Chandler both ask Joey for money not wanting the other to know why they are asking for it, Chandler sees that Joey gave money to Monica. Joey makes up that Monica is getting a boob job. Phoebe asks Mike to move in with her, but decides not to when she and Mike argue about their future. Rachel attempts to baby-proof the apartment, but makes Joey go insane when he can't open anything.",
      },
      {
        episodeSeason: 9,
        episodeNum: 17,
        episodeName: "The One with the Memorial Service",
        episodeDate: "March 13, 2003",
        episodeRanking: 8.4,
        episodeDescription:
          "When Chandler and Ross joke around on their college website, Ross is accused of being dead which leads to the fact that he was not popular in college. Joey is not willing to give his favorite stuffed animal, Hugsy, to Emma. Monica helps Phoebe not call Mike.",
      },
      {
        episodeSeason: 9,
        episodeNum: 18,
        episodeName: "The One with the Lottery",
        episodeDate: "April 3, 2003",
        episodeRanking: 8.6,
        episodeDescription:
          "Hoping to win a huge jackpot, the friends pool their money and buy dozens of lottery tickets. However, they bicker over how to spend the fortune if they win, and Monica irritates everyone else by buying tickets just for her and Chandler.",
      },
      {
        episodeSeason: 9,
        episodeNum: 19,
        episodeName: "The One with Rachel's Dream",
        episodeDate: "April 17, 2003",
        episodeRanking: 8.1,
        episodeDescription:
          "Joey is insecure now his Days of Our Lives character Dr. Drake Ramore is getting real dialog, so he asks Rachel to come along to the set, which she loves enough to get romantic dreams, but about Drake, Joey or both? Monica's fancy restaurant Javu is doing great, so she's flat out, too badly to accept joining Chandler on a surprise trip he booked to Vermont. When Phoebe comes sing her gross songs outside Javu, Monica tries to tell her nicely it's inappropriate, lacking style, but Phoebe just gets fancier dress; once told the truth, she starts a nasty row... Meanwhile ...",
      },
      {
        episodeSeason: 9,
        episodeNum: 20,
        episodeName: "The One with the Soap Opera Party",
        episodeDate: "April 24, 2003",
        episodeRanking: 8.2,
        episodeDescription:
          "Joey throws a cast party on the roof of his building where he ends up making out with an attractive professor that Ross had a crush on.",
      },
      {
        episodeSeason: 9,
        episodeNum: 21,
        episodeName: "The One with the Fertility Test",
        episodeDate: "May 1, 2003",
        episodeRanking: 8.2,
        episodeDescription:
          "Still unable to conceive, Monica and Chandler decide to get tests done at a fertility clinic, where they run into Chandler's favorite ex, Janice. Rachel receives a gift certificate for a free massage at a chain massage center. Phoebe chastises Rachel for even thinking about going to a massage chain, which she feels takes away business from independent massage therapists like herself; however, Phoebe actually works at this specific massage chain. Rachel says she won't go and even tears up the gift certificate, but she later tapes it back together, goes for her free ...",
      },
      {
        episodeSeason: 9,
        episodeNum: 22,
        episodeName: "The One with the Donor",
        episodeDate: "May 8, 2003",
        episodeRanking: 7.8,
        episodeDescription:
          "When Joey hears that his girlfriend Charlie is an insecure shopper, he volunteers expert Rachel, who dreads being alone with her, so she makes sure Phoebe comes along, by saying she needs a dazzling outfit for the party she's going to just to save face as her ex Mike is coming too. Gynecologist Dr. Connelly tells Chandler and Monica they should keep trying the natural way, but realistically consider a surrogate mother -a nightmare for Monica- or donor sperm insemination, so Chandler invites his 'perfectly eligible' colleague Zach for dinner; they scare him with ...",
      },
      {
        episodeSeason: 9,
        episodeNum: 23,
        episodeName: "The One in Barbados: Part 1",
        episodeDate: "May 15, 2003",
        episodeRanking: 8.4,
        episodeDescription:
          "Chandler gives advice to David, but that makes David want to propose to Phoebe. Although Phoebe is still in love with Mike. Monica calls Mike who shows up there right in the middle of David's proposal. Mike proposes instead. Phoebe gets back together with Mike, but doesn't accept his proposal. Monica's hair gets all poofy after getting off the plane. Charlie and Ross enjoy themselves when rewriting Ross's speech. Rachel keeps changing her mind on when to tell Joey that she has feelings for him.",
      },
      {
        episodeSeason: 9,
        episodeNum: 24,
        episodeName: "The One in Barbados: Part 2",
        episodeDate: "May 15, 2003",
        episodeRanking: 8.6,
        episodeDescription:
          "To the other friends' fury, it keeps raining except during Ross's speech, which to their amazement is a big hit with the paleontologists. Joey's scientific ignorance decides Charlie to turn her favor to Ross, then they must flee the other academics who intend by tradition to throw the key note-speaker into the pool. Chandler and Phoebe knew better, but Mike accepts to play table tennis against ever-obsessive fluffy monster Monica; when she gets injured, Chandler jumps in and crushes Mike. Rachel can't hide her feelings for Joey anymore, so when he sees Ross and ...",
      },
      {
        episodeSeason: 10,
        episodeNum: 1,
        episodeName: "The One After Joey and Rachel Kiss",
        episodeDate: "September 25, 2003",
        episodeRanking: 8.5,
        episodeDescription:
          "Joey and Ross both attempt to come clean to each other that they're dating Rachel and Charlie. Phoebe finds out Mike has another girlfriend.",
      },
      {
        episodeSeason: 10,
        episodeNum: 2,
        episodeName: "The One Where Ross Is Fine",
        episodeDate: "October 2, 2003",
        episodeRanking: 8.8,
        episodeDescription:
          "Rachel and Joey fear for Ross's state of mind after he finds out about their relationship. Chandler and Monica visit some friends of Phoebe to get advice on adoption. Frank and the triplets come to visit.",
      },
      {
        episodeSeason: 10,
        episodeNum: 3,
        episodeName: "The One with Ross's Tan",
        episodeDate: "October 9, 2003",
        episodeRanking: 8.8,
        episodeDescription:
          "Ross goes to a tanning salon but fails to follow the 'simple' instructions. Joey and Rachel struggle to make the transition from friends to lovers. Monica and Phoebe try to avoid an annoying woman that used to live in their building.",
      },
      {
        episodeSeason: 10,
        episodeNum: 4,
        episodeName: "The One with the Cake",
        episodeDate: "October 23, 2003",
        episodeRanking: 8.3,
        episodeDescription:
          "On Emma's first birthday, Ross and Rachel convince everyone to delay their plans so they can attend her party, however plans go awry when Emma's birthday cake is revealed.",
      },
      {
        episodeSeason: 10,
        episodeNum: 5,
        episodeName: "The One Where Rachel's Sister Babysits",
        episodeDate: "October 30, 2003",
        episodeRanking: 8.2,
        episodeDescription:
          "Rachel's sister Amy comes to visit and moves in with her and Joey. Phoebe constantly and accidentally ruins Mike's proposals. Joey struggles to write a letter of recommendation for Monica and Chandler's adoption agency.",
      },
      {
        episodeSeason: 10,
        episodeNum: 6,
        episodeName: "The One with Ross' Grant",
        episodeDate: "November 6, 2003",
        episodeRanking: 8.2,
        episodeDescription:
          "Ross applies for a paleontology grant and finds out Charlie's ex-boyfriend reviews the applications. Monica and Rachel fight over who has to take Phoebe's ugly painting.",
      },
      {
        episodeSeason: 10,
        episodeNum: 7,
        episodeName: "The One with the Home Study",
        episodeDate: "November 13, 2003",
        episodeRanking: 8.3,
        episodeDescription:
          "Monica and Chandler nervously prepare for a visit from an adoption worker. Phoebe and Mike keep changing their minds about donating their wedding money to charity. Ross fights Rachel's fear of swings.",
      },
      {
        episodeSeason: 10,
        episodeNum: 8,
        episodeName: "The One with the Late Thanksgiving",
        episodeDate: "November 20, 2003",
        episodeRanking: 8.9,
        episodeDescription:
          "Joey, Ross, Rachel and Phoebe convince Monica and Chandler to host Thanksgiving, however the four of them end up arriving to dinner an hour late.",
      },
      {
        episodeSeason: 10,
        episodeNum: 9,
        episodeName: "The One with the Birth Mother",
        episodeDate: "January 8, 2004",
        episodeRanking: 8.6,
        episodeDescription:
          "Nervous and excited, Monica and Chandler travel to Ohio to meet a young pregnant woman, Erica Simmons, who is considering allowing them to adopt her child when it's born.",
      },
      {
        episodeSeason: 10,
        episodeNum: 10,
        episodeName: "The One Where Chandler Gets Caught",
        episodeDate: "January 15, 2004",
        episodeRanking: 8,
        episodeDescription:
          "Chandler and Monica have decided they want to raise their offspring in a suburban house and even find a perfect one in Westchester. Rachel and Phoebe see Chandler enter a car with his realtor, Nancy, and think he's cheating on Monica. After that misunderstanding is cleared, the other Friends are shocked the couple wants to leave Manhattan, and everybody starts reminiscing about living in New York as a gang, until Nancy calls about their bid on the house.",
      },
      {
        episodeSeason: 10,
        episodeNum: 11,
        episodeName: "The One Where the Stripper Cries",
        episodeDate: "February 5, 2004",
        episodeRanking: 9,
        episodeDescription:
          "Old secrets come to light when Ross and Chandler attend a college reunion. Monica and Rachel throw Phoebe a bachelorette party. Joey appears as a celebrity partner on a game show.",
      },
      {
        episodeSeason: 10,
        episodeNum: 12,
        episodeName: "The One with Phoebe's Wedding",
        episodeDate: "February 12, 2004",
        episodeRanking: 8.9,
        episodeDescription:
          "Chaos ensues as Phoebe and Mike prepare to get married.",
      },
      {
        episodeSeason: 10,
        episodeNum: 13,
        episodeName: "The One Where Joey Speaks French",
        episodeDate: "February 19, 2004",
        episodeRanking: 8.5,
        episodeDescription:
          "Phoebe tries to teach Joey to speak French for an audition; Ross and Rachel head out to Long Island after her dad has a heart attack.",
      },
      {
        episodeSeason: 10,
        episodeNum: 14,
        episodeName: "The One with Princess Consuela",
        episodeDate: "February 26, 2004",
        episodeRanking: 8.6,
        episodeDescription:
          "When Phoebe goes to get her name changed she realizes she can change it to anything she wants, so she changes it to Princess Consuela Banana Hammock, to Mike's displeasure. Chandler finds out that Monica never changed her last name. Monica and Chandler take Joey to their house to convince him it is a good move and he tries to find anything wrong with the house so they won't buy it. Rachel goes to a job interview at a restaurant but her current boss is sitting right beyond her, costing her her job at Ralph Lauren. When cleaning out her office, she bumps into Mark who ...",
      },
      {
        episodeSeason: 10,
        episodeNum: 15,
        episodeName: "The One Where Estelle Dies",
        episodeDate: "April 22, 2004",
        episodeRanking: 8.5,
        episodeDescription:
          "Ross tries to get Rachel to go back to Ralph Lauren, Joey doesn't know that his agent has died, and Monica and Chandler bump into Janice.",
      },
      {
        episodeSeason: 10,
        episodeNum: 16,
        episodeName: "The One with Rachel's Going Away Party",
        episodeDate: "April 29, 2004",
        episodeRanking: 8.9,
        episodeDescription:
          "The gang throws Rachel a goodbye party, during which she says goodbye to everybody individually.",
      },
      {
        episodeSeason: 10,
        episodeNum: 17,
        episodeName: "The Last One",
        episodeDate: "May 6, 2004",
        episodeRanking: 9.7,
        episodeDescription:
          "Phoebe races Ross to the airport in a bid to stop Rachel from leaving for Paris. Monica and Chandler pack up their apartment ahead of their move to their new house, and Joey buys Chandler a new chick and duck as a leaving present.",
      },
    ],
  },
  {
    showId: 7,
    showName: "Black Mirror",
    showYear: 2011,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs60IFlibKXwJtzqLOjjo6ZgL3ShYtUJng4Q&usqp=CAU",
    showGenre: "Drama, Mystery, Sci-Fi",
    showCast: "Wunmi Mosaku, Monica Dolan",
    showSeasonsNum: 6,
    showDescription:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    slug: "black-mirror",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "The National Anthem",
        episodeDate: "December 4, 2011",
        episodeRanking: "7.6",
        episodeDescription:
          "Prime Minister Michael Callow faces a shocking dilemma when Princess Susannah, a much-loved member of the Royal Family, is kidnapped.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Fifteen Million Merits",
        episodeDate: "December 11, 2011",
        episodeRanking: "8.0",
        episodeDescription:
          "In a world where people's lives consist of riding exercise bikes to gain credits, Bing tries to help a woman get on to a singing competition show.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "The Entire History of You",
        episodeDate: "December 18, 2011",
        episodeRanking: "8.5",
        episodeDescription:
          "In the near future, everyone has access to a memory implant that records everything they do, see and hear. You need never forget a face again - but is that always a good thing?",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Be Right Back",
        episodeDate: "February 11, 2013",
        episodeRanking: "8.0",
        episodeDescription:
          "After learning about a new service that lets people stay in touch with the deceased, a lonely, grieving Martha reconnects with her late lover.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "White Bear",
        episodeDate: "February 18, 2013",
        episodeRanking: "8.0",
        episodeDescription:
          "Victoria wakes up and cannot remember anything about her life. Everyone she encounters refuses to communicate with her, and they all seem to know something she doesn't. But what?",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "The Waldo Moment",
        episodeDate: "February 25, 2013",
        episodeRanking: "6.6",
        episodeDescription:
          "A failed comedian who voices a popular cartoon bear named Waldo finds himself mixing in politics when TV executives want Waldo to run for office.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "White Christmas",
        episodeDate: "December 16, 2014",
        episodeRanking: "9.1",
        episodeDescription:
          "Three interconnected tales of technology run amok during the Christmas season are told by two men at a remote outpost in a frozen wilderness.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Nosedive",
        episodeDate: "October 21, 2016",
        episodeRanking: "8.3",
        episodeDescription:
          "A woman desperate to boost her social media score hits the jackpot when she's invited to a swanky wedding, but the trip doesn't go as planned.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Playtest",
        episodeDate: "October 21, 2016",
        episodeRanking: "8.1",
        episodeDescription:
          "An American traveler short on cash signs up to test a revolutionary new gaming system, but soon can't tell where the hot game ends and reality begins.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Shut Up and Dance",
        episodeDate: "October 21, 2016",
        episodeRanking: "8.4",
        episodeDescription:
          "When withdrawn Kenny stumbles headlong into an online trap, he is quickly forced into an uneasy alliance with shifty Hector, both at the mercy of persons unknown.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "San Junipero",
        episodeDate: "October 21, 2016",
        episodeRanking: "8.5",
        episodeDescription:
          "When Yorkie and Kelly visit San Junipero, a fun-loving beach town full of surf, sun and sex, their lives are changed.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Men Against Fire",
        episodeDate: "October 21, 2016",
        episodeRanking: "7.5",
        episodeDescription:
          "Future soldiers Stripe and Raiman must protect frightened villagers from an infestation of vicious feral mutants.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Hated in the Nation",
        episodeDate: "October 21, 2016",
        episodeRanking: "8.5",
        episodeDescription:
          "In near-future London, police detective Karin Parke, and her tech-savvy sidekick Blue, investigate a string of mysterious deaths with a sinister link to social media.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "USS Callister",
        episodeDate: "December 29, 2017",
        episodeRanking: "8.3",
        episodeDescription:
          "Capt. Robert Daly presides over his crew with wisdom and courage. But a new recruit will soon discover nothing on this spaceship is what it seems.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "Arkangel",
        episodeDate: "December 29, 2017",
        episodeRanking: "7.3",
        episodeDescription:
          "After nearly losing her daughter, a mother invests in a new technology that allows her to keep track of her.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Crocodile",
        episodeDate: "December 29, 2017",
        episodeRanking: "7.3",
        episodeDescription:
          "An insurance agent investigates a minor traffic incident using a device that manifests peoples' memories, but one of her witnesses has something to hide.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Hang the DJ",
        episodeDate: "December 29, 2017",
        episodeRanking: "8.7",
        episodeDescription:
          "Paired up by a dating program that puts an expiration date on all relationships, Frank and Amy soon begin to question the system's logic.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Metalhead",
        episodeDate: "December 29, 2017",
        episodeRanking: "6.6",
        episodeDescription:
          "In the post-apocalyptic landscape of the Scottish Moors, a woman attempts to survive the land full of 'dogs'.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Black Museum",
        episodeDate: "December 29, 2017",
        episodeRanking: "8.6",
        episodeDescription:
          "A woman enters the Black Museum, where the proprietor tells his stories relating to the artifacts.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Striking Vipers",
        episodeDate: "June 5, 2019",
        episodeRanking: "6.8",
        episodeDescription:
          "Two estranged college friends reunite in later life, triggering a series of events that could alter their lives forever.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "Smithereens",
        episodeDate: "June 5, 2019",
        episodeRanking: "7.5",
        episodeDescription:
          "A cab driver with an agenda becomes the center of attention on a day that rapidly spirals out of control.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Rachel, Jack and Ashley Too",
        episodeDate: "June 5, 2019",
        episodeRanking: "6.1",
        episodeDescription:
          "A lonely teenager yearns to connect with her favorite pop star - whose charmed existence isn't quite as rosy as it appears...",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "Joan Is Awful",
        episodeDate: "June 15, 2023",
        episodeRanking: "7.4",
        episodeDescription:
          "An average woman is stunned to discover a global streaming platform has launched a prestige TV drama adaptation of her life - in which she is portrayed by Hollywood A-lister Salma Hayek.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "Loch Henry",
        episodeDate: "June 15, 2023",
        episodeRanking: "7.3",
        episodeDescription:
          "A young couple travel to a sleepy Scottish town to start work on a genteel nature documentary - but find themselves drawn to a juicy local story involving shocking events of the past.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "Beyond the Sea",
        episodeDate: "June 15, 2023",
        episodeRanking: "7.4",
        episodeDescription:
          "In an alternative 1969, two men on a perilous high-tech mission wrestle with the consequences of an unimaginable tragedy.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Mazey Day",
        episodeDate: "June 15, 2023",
        episodeRanking: "5.3",
        episodeDescription:
          "A troubled starlet is dogged by invasive paparazzi while dealing with the consequences of a hit-and-run incident.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "Demon 79",
        episodeDate: "June 15, 2023",
        episodeRanking: "6.7",
        episodeDescription:
          "Northern England, 1979. A meek sales assistant is told she must commit terrible acts to prevent a disaster.",
      },
    ],
  },
  {
    showId: 8,
    showName: "South Park",
    showYear: 1997,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScL48fRHJafQCZipKOAo0BSKpJ3yb4CCdXVw&usqp=CAU",
    showGenre: "Animation, Comedy",
    showCast: "Trey Parker, Matt Stone",
    showSeasonsNum: 24,
    showDescription:
      "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
    slug: "south-park",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Cartman Gets an Anal Probe",
        episodeDate: "13-Aug-97",
        episodeRanking: "-",
        episodeDescription:
          "While the boys are waiting for the school bus, Cartman explains the odd nightmare he had the previous night involving alien visitors.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Weight Gain 4000",
        episodeDate: "20-Aug-97",
        episodeRanking: "-",
        episodeDescription:
          "When Cartman's environmental essay wins a national contest, America's sweetheart, Kathie Lee Gifford, comes to South Park to present the award.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Volcano",
        episodeDate: "27-Aug-97",
        episodeRanking: "-",
        episodeDescription:
          "A weekend trip to experience the finer points of camping, fishing and blowing animals to smithereens is threatened by an erupting volcano.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Big Gay Al's Big Gay Boat Ride",
        episodeDate: "03-Sep-97",
        episodeRanking: "-",
        episodeDescription:
          "When Stan discovers his new dog Sparky is gay, he becomes so confused he loses his will to play in the big Homecoming Football game against North Park.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "An Elephant Makes Love to a Pig",
        episodeDate: "10-Sep-97",
        episodeRanking: "-",
        episodeDescription:
          "Kyle's mom won't let him keep his new pet, an elephant because it's so huge. So the boys turn to Dr. Mephesto to genetically engineer a smaller elephant.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Death",
        episodeDate: "17-Sep-97",
        episodeRanking: "-",
        episodeDescription:
          "Grandpa's sole birthday wish is for Stan to take part in his assisted suicide. Meanwhile, Mrs. Broflovski has organized a protest against the boys' favorite TV show, \"Terrance and Phillip\".",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "Pinkeye",
        episodeDate: "29-Oct-97",
        episodeRanking: "-",
        episodeDescription:
          "A mishap at the morgue transforms the residents of South Park into brain-eating zombies and threatens the boys' night of Trick-or-Treating.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "Starvin' Marvin",
        episodeDate: "19-Nov-97",
        episodeRanking: "-",
        episodeDescription:
          "Mistaking Cartman for a starving African child, government authorities send him to Ethiopia where he runs into Sally Struthers.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "Mr. Hankey, the Christmas Poo",
        episodeDate: "17-Dec-97",
        episodeRanking: "-",
        episodeDescription:
          "While South Park Elementary is attempting to stage a non-denominational holiday play that won't offend (or entertain) anyone, Kyle checks himself into the South Park mental asylum.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "Damien",
        episodeDate: "04-Feb-98",
        episodeRanking: "-",
        episodeDescription:
          "After being shunned by the others kids, Damien, the Son of Satan, calls upon his father to fight Jesus in the ultimate Pay-Per-View Boxing Match between good and evil.",
      },
      {
        episodeSeason: 1,
        episodeNum: 11,
        episodeName: "Tom's Rhinoplasty",
        episodeDate: "11-Feb-98",
        episodeRanking: "-",
        episodeDescription:
          "While Mr. Garrison deserts the class for a visit to Tom's Rhinoplasty, Stan, Kyle, Kenny, and Cartman all compete for the attention of Ms. Ellen, the new substitute teacher.",
      },
      {
        episodeSeason: 1,
        episodeNum: 12,
        episodeName: "Mecha-Streisand",
        episodeDate: "18-Feb-98",
        episodeRanking: "-",
        episodeDescription:
          "The boys' discovery of a prehistoric relic spawns a monster that threatens to destroy South Park and the world.",
      },
      {
        episodeSeason: 1,
        episodeNum: 13,
        episodeName: "Cartman's Mom is a Dirty Slut",
        episodeDate: "25-Feb-98",
        episodeRanking: "-",
        episodeDescription:
          "Who is Eric Cartman's father? It could be anyone who attended South Park's 12th Annual Drunken Barn Dance.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Terrance and Phillip in Not Without My Anus",
        episodeDate: "01-Apr-98",
        episodeRanking: "-",
        episodeDescription:
          "Terrance and Phillip must save Terrance's little daughter, Sally, and all of Canada from an evil dictator.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Cartman's Mom is Still a Dirty Slut",
        episodeDate: "22-Apr-98",
        episodeRanking: "-",
        episodeDescription:
          "The boys wait for Dr. Mephesto to regain consciousness and reveal the identity of Cartman's father.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Ike's Wee Wee",
        episodeDate: "20-May-98",
        episodeRanking: "-",
        episodeDescription:
          "Mr. Mackey, the school counselor, is fired and turns to drugs and alcohol. Meanwhile, when the boys find out what it means to be circumcised they try to save Ike from his bris.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Chickenlover",
        episodeDate: "27-May-98",
        episodeRanking: "-",
        episodeDescription:
          "When Barbrady resigns, anarchy ensues and the boys pitch in to help.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Conjoined Fetus Lady",
        episodeDate: "03-Jun-98",
        episodeRanking: "-",
        episodeDescription:
          "The boys go to China to compete in a dodgeball championship. The town holds an appreciation week for the school nurse.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "The Mexican Staring Frog of Southern Sri Lanka",
        episodeDate: "10-Jun-98",
        episodeRanking: "-",
        episodeDescription:
          "Jimbo and Ned's efforts to drive up the ratings for their new hunting show on the cable access channel threatens to edge out an old favorite, Jesus and Pals.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "City on the Edge of Forever (Flashbacks)",
        episodeDate: "17-Jun-98",
        episodeRanking: "-",
        episodeDescription:
          "A freak accident leaves the South Park Elementary school bus teetering precariously on the edge of a cliff.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Summer Sucks",
        episodeDate: "24-Jun-98",
        episodeRanking: "-",
        episodeDescription:
          "The entire town is gearing up for the annual 4th of July celebration when a ban on fireworks is imposed.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "Chef's Chocolate Salty Balls",
        episodeDate: "19-Aug-98",
        episodeRanking: "-",
        episodeDescription:
          "South Park's first film festival attracts crowds of pretentious, tofu-eating movie lovers to the quiet mountain town.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Chickenpox",
        episodeDate: "26-Aug-98",
        episodeRanking: "-",
        episodeDescription:
          "The kids' parents only have their best interests at heart when they arrange for Stan, Kyle and Cartman to be exposed to the chickenpox virus.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "Roger Ebert Should Lay off the Fatty Foods",
        episodeDate: "02-Sep-98",
        episodeRanking: "-",
        episodeDescription:
          "Is the new planetarium a harmless place to learn about the solar system, or the scene of a diabolical plot to control the minds of South Park's citizens?",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "Clubhouses",
        episodeDate: "23-Sep-98",
        episodeRanking: "-",
        episodeDescription:
          "Stan and Kyle are psyched to have Wendy and Bebe visit their clubhouse for a game of Truth or Dare, but first they have to build one.",
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "Cow Days",
        episodeDate: "30-Sep-98",
        episodeRanking: "-",
        episodeDescription:
          'South Park\'s 14th Annual "Cow Days" rodeo and carnival is here and the boys are determined to win Terrance and Phillip dolls.',
      },
      {
        episodeSeason: 2,
        episodeNum: 14,
        episodeName: "Chef Aid",
        episodeDate: "07-Oct-98",
        episodeRanking: "-",
        episodeDescription:
          "After a huge loss in court, Chef is left penniless, but he has some very famous and talented friends in the music business who want to help their old mentor.",
      },
      {
        episodeSeason: 2,
        episodeNum: 15,
        episodeName: "Spookyfish",
        episodeDate: "28-Oct-98",
        episodeRanking: "-",
        episodeDescription:
          "When Sharon Marsh's Aunt Flo makes a monthly visit, she brings a mysterious pet fish for Stan.",
      },
      {
        episodeSeason: 2,
        episodeNum: 16,
        episodeName: "Merry Christmas Charlie Manson!",
        episodeDate: "09-Dec-98",
        episodeRanking: "-",
        episodeDescription:
          "Dinner with Cartman's family takes a bizarre twist when Uncle Howard shows up after breaking out of prison with the help of his cellmate, Charlie Manson.",
      },
      {
        episodeSeason: 2,
        episodeNum: 17,
        episodeName: "Gnomes",
        episodeDate: "16-Dec-98",
        episodeRanking: "-",
        episodeDescription:
          "Cartman, Stan, Kyle and Kenny are assigned to write a report with Tweek, the very nervous and highly caffeinated boy who insists gnomes are stealing his underpants.",
      },
      {
        episodeSeason: 2,
        episodeNum: 18,
        episodeName: "Prehistoric Ice Man",
        episodeDate: "20-Jan-99",
        episodeRanking: "-",
        episodeDescription:
          "The boys' discovery of a man encased in ice threatens Stan and Kyle's friendship.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Rainforest Shmainforest",
        episodeDate: "07-Apr-99",
        episodeRanking: "-",
        episodeDescription:
          'The boys travel to the Costa Rica as a part of the "Getting Gay with Kids" choir tour.',
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Spontaneous Combustion",
        episodeDate: "14-Apr-99",
        episodeRanking: "-",
        episodeDescription:
          "When the citizens of South Park start exploding randomly, the mayor enlists Stan's dad, the resident geologist, to find a solution to the problem.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "The Succubus",
        episodeDate: "21-Apr-99",
        episodeRanking: "-",
        episodeDescription:
          "Chef's parents arrive in South Park from Scotland fresh from an encounter with the Loch Ness Monster to attend Chef's wedding.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Jakovasaurs",
        episodeDate: "16-Jun-99",
        episodeRanking: "-",
        episodeDescription:
          "The boys discover a prehistoric creature called a Jakovasaur while camping at Stark's Pond.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Tweek vs. Craig",
        episodeDate: "23-Jun-99",
        episodeRanking: "-",
        episodeDescription:
          "The boys instigate a fight between Tweek and Craig in shop class. Meanwhile, Mr. Adler, the shop teacher, is haunted by a recurring dream of his lost love.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Sexual Harassment Panda",
        episodeDate: "07-Jul-99",
        episodeRanking: "-",
        episodeDescription:
          'After Sexual Harassment Panda "educates" the children, Cartman sues Stan for sexual harassment, and a flurry of other lawsuits follow.',
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "Cat Orgy",
        episodeDate: "14-Jul-99",
        episodeRanking: "-",
        episodeDescription:
          "While all the adults are gathering at Mr. Mackey's house to watch a meteor shower Shelly Marsh is left babysit Cartman.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Two Guys Naked in a Hot Tub",
        episodeDate: "21-Jul-99",
        episodeRanking: "-",
        episodeDescription:
          "Stan's parents drag him along to Mr. Mackey's meteor shower party, where he is sent down into the basement to play with Pip, Butters and Dougie.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "Jewbilee",
        episodeDate: "28-Jul-99",
        episodeRanking: "-",
        episodeDescription:
          "Kyle invites Kenny to join him and Ike at Jewbilee, a camp for Jewish kids.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "Korn's Groovy Pirate Ghost Mystery",
        episodeDate: "27-Oct-99",
        episodeRanking: "-",
        episodeDescription:
          "Korn comes to South Park for a Halloween concert and helps the boys solve a spooky pirate ghost mystery.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "Chinpokomon",
        episodeDate: "03-Nov-99",
        episodeRanking: "-",
        episodeDescription:
          "Stan, Kyle, Cartman and Kenny are caught up in the latest fad from Japan: Chinpoko Mon!",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "Hooked on Monkey Fonics",
        episodeDate: "10-Nov-99",
        episodeRanking: "-",
        episodeDescription:
          "To help Cartman win the school spelling bee, Cartman's Mom gives him the Hooked on Monkey Fonics spelling system.",
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "Starvin' Marvin in Space",
        episodeDate: "17-Nov-99",
        episodeRanking: "-",
        episodeDescription:
          "Starvin' Marvin returns to South Park with an alien spaceship and enlists Cartman, Stan, Kyle and Kenny's help to seek out a new home for his starving people.",
      },
      {
        episodeSeason: 3,
        episodeNum: 14,
        episodeName: "The Red Badge of Gayness",
        episodeDate: "24-Nov-99",
        episodeRanking: "-",
        episodeDescription:
          "Cartman has visions of glory as he suits up for the Confederacy in the annual reenactment of a Civil War battle, and leads the drunken rebels to defeat the union.",
      },
      {
        episodeSeason: 3,
        episodeNum: 15,
        episodeName: "Mr. Hankey's Christmas Classics",
        episodeDate: "01-Dec-99",
        episodeRanking: "-",
        episodeDescription:
          "An extravaganza of holiday songs are performed in unique South Park style, hosted by Mr. Hankey.",
      },
      {
        episodeSeason: 3,
        episodeNum: 16,
        episodeName: "Are You There God? It's Me, Jesus",
        episodeDate: "29-Dec-99",
        episodeRanking: "-",
        episodeDescription:
          "People from all over the world start to gather outside Jesus' house waiting for a millennium miracle.",
      },
      {
        episodeSeason: 3,
        episodeNum: 17,
        episodeName: "World Wide Recorder Concert",
        episodeDate: "12-Jan-00",
        episodeRanking: "-",
        episodeDescription:
          'The children of South Park are invited to Arkansas for the "Four Million Child Blow 2000," the first worldwide recorder concert.',
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "The Tooth Fairy Tats 2000",
        episodeDate: "05-Apr-00",
        episodeRanking: "-",
        episodeDescription:
          "When Cartman discovers the Tooth Fairy is paying a premium price for his lost teeth, he and the boys seize the opportunity to make some cash.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "Cartman's Silly Hate Crime 2000",
        episodeDate: "12-Apr-00",
        episodeRanking: "-",
        episodeDescription:
          "Cartman is pursued by the FBI for committing a hate crime and lands in juvenile hall.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Timmy 2000",
        episodeDate: "19-Apr-00",
        episodeRanking: "-",
        episodeDescription:
          "When Timmy is diagnosed with Attention Deficit Disorder, it triggers a wave of prescription drug abuse at South Park Elementary.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Quintuplets 2000",
        episodeDate: "26-Apr-00",
        episodeRanking: "-",
        episodeDescription:
          "8-year-old contorting quintuplets from Romania defect to the United States and seek shelter with Stan's family.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Cartman Joins NAMBLA",
        episodeDate: "21-Jun-00",
        episodeRanking: "-",
        episodeDescription:
          "Cartman decides to seek friendship using the Internet, and finds an older man who is more than willing to be his friend...and more.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Cherokee Hair Tampons",
        episodeDate: "28-Jun-00",
        episodeRanking: "-",
        episodeDescription:
          "Kyle needs a kidney transplant and Cartman is discovered to be the perfect donor. Cartman gladly offers his kidney to Kyle -- for the price of $10 million dollars.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "Chef Goes Nanners",
        episodeDate: "05-Jul-00",
        episodeRanking: "-",
        episodeDescription:
          "Chef's passionate protest declaring the South Park flag racist enflames the entire town.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "Something You Can Do with Your Finger",
        episodeDate: "12-Jul-00",
        episodeRanking: "-",
        episodeDescription: "Fingerbang",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "Do the Handicapped Go to Hell?",
        episodeDate: "19-Jul-00",
        episodeRanking: "-",
        episodeDescription:
          "The boys learn in Sunday school that they must confess their sins, but worry about Timmy since all he can say is his own name.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "Probably",
        episodeDate: "26-Jul-00",
        episodeRanking: "-",
        episodeDescription:
          "Cartman's flock begins to grow and the children begin plans to build him a Church. Meanwhile, Satan turns to God for advice.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "Fourth Grade",
        episodeDate: "08-Nov-00",
        episodeRanking: "-",
        episodeDescription:
          "The boys devise a plan to travel back in time a full year and return to the third grade, with the help of Timmy and his electronic wheelchair.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "Trapper Keeper",
        episodeDate: "15-Nov-00",
        episodeRanking: "-",
        episodeDescription:
          "When Cartman finally stops bragging about his new Trapper Keeper, a stranger informs him that it will eventually take over the world and destroy humankind, if they don't destroy it first.",
      },
      {
        episodeSeason: 4,
        episodeNum: 14,
        episodeName: "Helen Keller! The Musical",
        episodeDate: "22-Nov-00",
        episodeRanking: "-",
        episodeDescription:
          "When Butters informs the fourth graders that the Kindergarteners' school play is a magnificent sight to behold, they go through a lot of pain to make sure they beat the tiny tots' show.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Pip",
        episodeDate: "29-Nov-00",
        episodeRanking: "-",
        episodeDescription:
          "When Pip is offered the opportunity to become a gentleman he goes to London only to discover that Miss Havisham plans to break his heart.",
      },
      {
        episodeSeason: 4,
        episodeNum: 15,
        episodeName: "Fat Camp",
        episodeDate: "06-Dec-00",
        episodeRanking: "-",
        episodeDescription:
          "Cartman's family and friends have intervened and are forcing him to trim down. While Cartman's away, Kenny's star is on the rise when he gets his own reality TV show.",
      },
      {
        episodeSeason: 4,
        episodeNum: 16,
        episodeName: "The Wacky Molestation Adventure",
        episodeDate: "13-Dec-00",
        episodeRanking: "-",
        episodeDescription:
          "To get back at his parents for not letting him go to a concert, Kyle tells the police that his parents molested him. Soon, the whole town is free of adults and divided into two rival cities.",
      },
      {
        episodeSeason: 4,
        episodeNum: 17,
        episodeName: "A Very Crappy Christmas",
        episodeDate: "20-Dec-00",
        episodeRanking: "-",
        episodeDescription:
          "When Mr. Hankey skips Christmas, the boys find him living with his alcoholic wife and their three little nuggets. He tells them that no one is into Christmas anymore.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "It Hits the Fan",
        episodeDate: "20-Jun-01",
        episodeRanking: "-",
        episodeDescription:
          'The boys and Chef must stop the world from chanting the curse word "shit" because when spoken it causes people to "puke their own guts out".',
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Cripple Fight",
        episodeDate: "27-Jun-01",
        episodeRanking: "-",
        episodeDescription:
          "Big Gay Al becomes the boys' scoutmaster and a fight ensues between two handicapped children, Jimmy Swanson and Timmy.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "Super Best Friends",
        episodeDate: "04-Jul-01",
        episodeRanking: "-",
        episodeDescription:
          "A cult comes to South Park and it is up to Stan, Jesus and his super hero comrades to save the world.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Scott Tenorman Must Die",
        episodeDate: "11-Jul-01",
        episodeRanking: "-",
        episodeDescription:
          "Cartman repeatedly tries to take revenge on an 8th/9th grader who keeps making fun of him.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "Terrance and Phillip: Behind the Blow",
        episodeDate: "18-Jul-01",
        episodeRanking: "-",
        episodeDescription:
          "The boys try to reunite Terrance and Phillip who are feuding so they can perform at an Earth Day assembly.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "Cartmanland",
        episodeDate: "25-Jul-01",
        episodeRanking: "-",
        episodeDescription:
          "Kyle develops a deadly hemorrhoid and begins to lose his faith in God when Cartman inherits $1 million from his grandmother, which he uses to buy his own amusement park.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "Proper Condom Use",
        episodeDate: "01-Aug-01",
        episodeRanking: "-",
        episodeDescription:
          'The school is forced to teach sex education to the students at a younger age after the boys are found "milking" dogs.',
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "Towelie",
        episodeDate: "08-Aug-01",
        episodeRanking: "-",
        episodeDescription:
          "In order to get their video game console back, the boys must bring a talking towel to the government.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "Osama bin Laden Has Farty Pants",
        episodeDate: "07-Nov-01",
        episodeRanking: "-",
        episodeDescription:
          "The boys go to Afghanistan to return a goat given as a gift.",
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "How to Eat with Your Butt",
        episodeDate: "14-Nov-01",
        episodeRanking: "-",
        episodeDescription:
          "Cartman puts Kenny's picture on a milk carton which brings a family from another state looking for him.",
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "The Entity",
        episodeDate: "21-Nov-01",
        episodeRanking: "-",
        episodeDescription:
          "Kyle's cousin, who is also named Kyle, comes to stay in South Park.;Mr. Garrison, tired of the airlines, decides to invent his own vehicle.",
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "Here Comes the Neighborhood",
        episodeDate: "28-Nov-01",
        episodeRanking: "-",
        episodeDescription:
          "Token is tired of being teased for being rich, and he brings wealthier families to South Park.",
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "Kenny Dies",
        episodeDate: "05-Dec-01",
        episodeRanking: "-",
        episodeDescription:
          "Kenny succumbs to an illness; Cartman acquires stem cells for research.",
      },
      {
        episodeSeason: 5,
        episodeNum: 14,
        episodeName: "Butters' Very Own Episode",
        episodeDate: "12-Dec-01",
        episodeRanking: "-",
        episodeDescription:
          "Butters goes on a chase to find out what his father bought his mother for their anniversary.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "Jared Has Aides",
        episodeDate: "06-Mar-02",
        episodeRanking: "-",
        episodeDescription:
          "After meeting Jared Fogle, famous for losing weight by eating Subway sandwiches, the boys form a get-rich-quick scheme involving Butters becoming the weight-loss spokesman for City Wok.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "Asspen",
        episodeDate: "13-Mar-02",
        episodeRanking: "-",
        episodeDescription:
          "The boys and their parents travel to Aspen for a winter vacation. Stan is challenged by teenagers to a ski race while the boys' parents are trapped at a TimeShare meeting.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "Freak Strike",
        episodeDate: "20-Mar-02",
        episodeRanking: "-",
        episodeDescription:
          'The boys convince Butters to appear on "The Maury Povich Show" with a fake facial deformity in order to receive the show\'s prizes.',
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "Fun with Veal",
        episodeDate: "27-Mar-02",
        episodeRanking: "-",
        episodeDescription:
          "The boys are on a mission to rescue a bunch of baby cows from certain slaughter.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "The New Terrance and Phillip Movie Trailer",
        episodeDate: "03-Apr-02",
        episodeRanking: "-",
        episodeDescription:
          "The boys are anxious to see a new movie trailer during a commercial break, and, after Stan's TV is destroyed, frantically run around town in search of a working TV.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "Professor Chaos",
        episodeDate: "10-Apr-02",
        episodeRanking: "-",
        episodeDescription:
          "Butters decides to wreak havoc on South Park as a super-villain after being relieved of his duty of being the boys' new fourth friend. Meanwhile, the boys hold auditions to find a replacement friend.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "The Simpsons Already Did It",
        episodeDate: "26-Jun-02",
        episodeRanking: "-",
        episodeDescription:
          "Professor Chaos (Butters) proposes numerous evil plans, only to be informed by General Disarray (Dougie) that they have been done before. Cartman builds a miniature society with aquarium creatures.",
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "Red Hot Catholic Love",
        episodeDate: "03-Jul-02",
        episodeRanking: "-",
        episodeDescription:
          "Priest Maxi attempts to uncover the Catholic Church's child molestation cases; South Park parents convert their families to atheism. Oh, and people crap out of their mouths.",
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "Free Hat",
        episodeDate: "10-Jul-02",
        episodeRanking: "-",
        episodeDescription:
          "Stan, Kyle, Cartman, and Tweek are on a mission to stop Steven Spielberg and George Lucas from editing their classic films, though the boys' supporters are more concerned about freeing a certain criminal from prison.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "Bebe's Boobs Destroy Society",
        episodeDate: "17-Jul-02",
        episodeRanking: "-",
        episodeDescription:
          "At exactly the same time Bebe starts developing breasts, the boys of South Park Elementary suddenly begin to notice how cool she is.",
      },
      {
        episodeSeason: 6,
        episodeNum: 11,
        episodeName: "Child Abduction is Not Funny",
        episodeDate: "24-Jul-02",
        episodeRanking: "-",
        episodeDescription:
          "Numerous news reports about missing children in other cities incite panic among South Park parents.",
      },
      {
        episodeSeason: 6,
        episodeNum: 12,
        episodeName: "A Ladder to Heaven",
        episodeDate: "06-Nov-02",
        episodeRanking: "-",
        episodeDescription:
          "After realizing that Kenny was the one with their candy shopping spree raffle ticket before he died, the boys construct a ladder leading to heaven in an attempt to find out from Kenny the location of the ticket.",
      },
      {
        episodeSeason: 6,
        episodeNum: 13,
        episodeName:
          "The Return of the Fellowship of the Ring to the Two Towers",
        episodeDate: "13-Nov-02",
        episodeRanking: "-",
        episodeDescription:
          'A mix-up lands a "Lord of the Rings" video tape with Randy and Sharon Marsh, and a hardcore porno tape with the boys.',
      },
      {
        episodeSeason: 6,
        episodeNum: 14,
        episodeName: "The Death Camp of Tolerance",
        episodeDate: "20-Nov-02",
        episodeRanking: "-",
        episodeDescription:
          "Mr. Garrison, newly promoted to fourth-grade teacher, attempts to use his homosexuality to get fired so he can sue the school for a substantial sum of money. The students' disgust with Garrison's outrageously inappropriate behavior with his new partner Mr. Slave incurs the anger of their parents, who attempt to teach their children to be tolerant of homosexuals.",
      },
      {
        episodeSeason: 6,
        episodeNum: 15,
        episodeName: "The Biggest Douche in the Universe",
        episodeDate: "27-Nov-02",
        episodeRanking: "-",
        episodeDescription:
          'After the events in "A Ladder to Heaven", in which Cartman drinks Kenny\'s soul, Cartman becomes sick and travels with the boys and Chef to have Kenny\'s spirit exorcised. Stan has a run-in with famous TV "psychic" John Edward.',
      },
      {
        episodeSeason: 6,
        episodeNum: 16,
        episodeName: "My Future Self n' Me",
        episodeDate: "04-Dec-02",
        episodeRanking: "-",
        episodeDescription:
          'Stan is suspicious when an alcoholic, drug-addicted future version of himself "travels back" in time and meets him.',
      },
      {
        episodeSeason: 6,
        episodeNum: 17,
        episodeName: "Red Sleigh Down",
        episodeDate: "11-Dec-02",
        episodeRanking: "-",
        episodeDescription:
          'Cartman, concerned about being on Santa\'s "naughty list", takes Stan and Kyle on a mission to bring Christmas to a war-torn Iraq.',
      },
      {
        episodeSeason: 7,
        episodeNum: 4,
        episodeName: "Cancelled",
        episodeDate: "19-Mar-03",
        episodeRanking: "-",
        episodeDescription:
          "The boys learn that Earth is a reality show for aliens and must save it from cancellation.",
      },
      {
        episodeSeason: 7,
        episodeNum: 2,
        episodeName: "Krazy Kripples",
        episodeDate: "26-Mar-03",
        episodeRanking: "-",
        episodeDescription:
          "Timmy and Jimmy start a club for cripples. Christopher Reeve comes to town to promote stem cell research.",
      },
      {
        episodeSeason: 7,
        episodeNum: 3,
        episodeName: "Toilet Paper",
        episodeDate: "02-Apr-03",
        episodeRanking: "-",
        episodeDescription:
          "Kyle feels guilty after he and the boys TP their art teacher's house.",
      },
      {
        episodeSeason: 7,
        episodeNum: 1,
        episodeName: "I'm a Little Bit Country",
        episodeDate: "09-Apr-03",
        episodeRanking: "-",
        episodeDescription:
          "The boys enter an anti-war demonstration; Cartman travels back in time to the American Revolutionary War era.",
      },
      {
        episodeSeason: 7,
        episodeNum: 5,
        episodeName: "Fat Butt and Pancake Head",
        episodeDate: "16-Apr-03",
        episodeRanking: "-",
        episodeDescription:
          "Cartman's hand puppet Jennifer Lopez gets major publicity, which angers the real Jennifer Lopez.",
      },
      {
        episodeSeason: 7,
        episodeNum: 6,
        episodeName: "Lil' Crime Stoppers",
        episodeDate: "23-Apr-03",
        episodeRanking: "-",
        episodeDescription: "The boys pretend to be police detectives.",
      },
      {
        episodeSeason: 7,
        episodeNum: 7,
        episodeName: "Red Man's Greed",
        episodeDate: "30-Apr-03",
        episodeRanking: "-",
        episodeDescription:
          "The town is taken over by Native Americans who want to create a highway.",
      },
      {
        episodeSeason: 7,
        episodeNum: 8,
        episodeName: "South Park is Gay!",
        episodeDate: "22-Oct-03",
        episodeRanking: "-",
        episodeDescription: "The men and boys of town become metrosexual.",
      },
      {
        episodeSeason: 7,
        episodeNum: 9,
        episodeName: "Christian Rock Hard",
        episodeDate: "29-Oct-03",
        episodeRanking: "-",
        episodeDescription:
          "Cartman, Token, and Butters form a Christian music band. Stan, Kyle, and Kenny learn about downloading free music off the Internet.",
      },
      {
        episodeSeason: 7,
        episodeNum: 10,
        episodeName: "Grey Dawn",
        episodeDate: "05-Nov-03",
        episodeRanking: "-",
        episodeDescription:
          "The elderly have their driver's licenses taken away, against which the AARP retaliates.",
      },
      {
        episodeSeason: 7,
        episodeNum: 11,
        episodeName: "Casa Bonita",
        episodeDate: "12-Nov-03",
        episodeRanking: "-",
        episodeDescription:
          "Cartman tries to get himself invited to Kyle's birthday party at Casa Bonita, a Disneyland-like Mexican restaurant.",
      },
      {
        episodeSeason: 7,
        episodeNum: 12,
        episodeName: "All About Mormons",
        episodeDate: "19-Nov-03",
        episodeRanking: "-",
        episodeDescription:
          "Stan befriends a boy and his family, who are all Mormons.",
      },
      {
        episodeSeason: 7,
        episodeNum: 13,
        episodeName: "Butt Out",
        episodeDate: "03-Dec-03",
        episodeRanking: "-",
        episodeDescription:
          "The town calls in Rob Reiner to combat the spread of smoking among children after the boys are caught doing so.",
      },
      {
        episodeSeason: 7,
        episodeNum: 14,
        episodeName: "Raisins",
        episodeDate: "10-Dec-03",
        episodeRanking: "-",
        episodeDescription:
          "The boys take Stan to Raisins, a Hooters-like restaurant after Wendy breaks up with him. Butters meets a girl who seems interested in him.",
      },
      {
        episodeSeason: 7,
        episodeNum: 15,
        episodeName: "It's Christmas in Canada",
        episodeDate: "17-Dec-03",
        episodeRanking: "-",
        episodeDescription:
          "Kyle and the boys fly to Canada during Christmastime to see the Canadian Prime Minister after Ike's biological parents take him back to Canada.",
      },
      {
        episodeSeason: 8,
        episodeNum: 1,
        episodeName: "Good Times with Weapons",
        episodeDate: "17-Mar-04",
        episodeRanking: "-",
        episodeDescription:
          "The boys buy weapons at a fair and imagine themselves as anime characters.",
      },
      {
        episodeSeason: 8,
        episodeNum: 3,
        episodeName: "Up the Down Steroid",
        episodeDate: "24-Mar-04",
        episodeRanking: "-",
        episodeDescription:
          "Jimmy uses steroids to cheat in the Special Olympics. Cartman disguises himself as being mentally retarded to win the prize.",
      },
      {
        episodeSeason: 8,
        episodeNum: 4,
        episodeName: "The Passion of the Jew",
        episodeDate: "31-Mar-04",
        episodeRanking: "-",
        episodeDescription:
          "Kyle develops feelings of anti-Semitism after watching Mel Gibson's The Passion of the Christ.",
      },
      {
        episodeSeason: 8,
        episodeNum: 5,
        episodeName: "You Got F'd in the A",
        episodeDate: "07-Apr-04",
        episodeRanking: "-",
        episodeDescription:
          "Stan must form a dance group to compete against rivals from Orange County in a spoof of You Got Served.",
      },
      {
        episodeSeason: 8,
        episodeNum: 2,
        episodeName: "AWESOM-O",
        episodeDate: "14-Apr-04",
        episodeRanking: "-",
        episodeDescription:
          "Cartman pretends to be a robot so he can hear private secrets from Butters.",
      },
      {
        episodeSeason: 8,
        episodeNum: 7,
        episodeName: "The Jeffersons",
        episodeDate: "21-Apr-04",
        episodeRanking: "-",
        episodeDescription:
          "All the children want to be friends with a rich new neighbor who is under investigation by the police.",
      },
      {
        episodeSeason: 8,
        episodeNum: 6,
        episodeName: "Goobacks",
        episodeDate: "28-Apr-04",
        episodeRanking: "-",
        episodeDescription:
          "The town becomes angry when immigrants from the year 3045 arrive and take the residents' jobs for lower wages.",
      },
      {
        episodeSeason: 8,
        episodeNum: 8,
        episodeName: "Douche and Turd",
        episodeDate: "27-Oct-04",
        episodeRanking: "-",
        episodeDescription:
          "Stan is forced to vote in an election for the school's new mascot.",
      },
      {
        episodeSeason: 8,
        episodeNum: 9,
        episodeName: "Something Wall-Mart This Way Comes",
        episodeDate: "03-Nov-04",
        episodeRanking: "-",
        episodeDescription:
          "When a Wall-Mart store comes to South Park, all the independent stores go out of business.",
      },
      {
        episodeSeason: 8,
        episodeNum: 10,
        episodeName: "Pre-School",
        episodeDate: "10-Nov-04",
        episodeRanking: "-",
        episodeDescription: "A face from the past causes trouble for the boys.",
      },
      {
        episodeSeason: 8,
        episodeNum: 11,
        episodeName: "Quest for Ratings",
        episodeDate: "17-Nov-04",
        episodeRanking: "-",
        episodeDescription:
          "The boys' school news show is in competition against a rival television program created by Craig.",
      },
      {
        episodeSeason: 8,
        episodeNum: 12,
        episodeName: "Stupid Spoiled Whore Video Playset",
        episodeDate: "01-Dec-04",
        episodeRanking: "-",
        episodeDescription:
          "Wendy feels left out when all the fourth grade girls start acting like Paris Hilton.",
      },
      {
        episodeSeason: 8,
        episodeNum: 13,
        episodeName: "Cartman's Incredible Gift",
        episodeDate: "08-Dec-04",
        episodeRanking: "-",
        episodeDescription:
          "Cartman gains paranormal powers and uses them to become a psychic detective for hire.",
      },
      {
        episodeSeason: 8,
        episodeNum: 14,
        episodeName: "Woodland Critter Christmas",
        episodeDate: "15-Dec-04",
        episodeRanking: "-",
        episodeDescription:
          "Stan helps the Woodland Critters, who await the birth of their savior.",
      },
      {
        episodeSeason: 9,
        episodeNum: 1,
        episodeName: "Mr. Garrison's Fancy New Vagina",
        episodeDate: "09-Mar-05",
        episodeRanking: "-",
        episodeDescription:
          'A sex change turns Mr. Garrison into "Mrs. Garrison".',
      },
      {
        episodeSeason: 9,
        episodeNum: 2,
        episodeName: "Die Hippie, Die",
        episodeDate: "16-Mar-05",
        episodeRanking: "-",
        episodeDescription:
          "Cartman seeks to rid South Park of its growing hippie population. Stan, Kyle, and Kenny become more like hippies.",
      },
      {
        episodeSeason: 9,
        episodeNum: 3,
        episodeName: "Wing",
        episodeDate: "23-Mar-05",
        episodeRanking: "-",
        episodeDescription:
          "The boys start a talent agency in hopes of making money from Token.",
      },
      {
        episodeSeason: 9,
        episodeNum: 4,
        episodeName: "Best Friends Forever",
        episodeDate: "30-Mar-05",
        episodeRanking: "-",
        episodeDescription:
          "Kenny is killed by heaven after becoming master of the PSP, but the town brings him back to life; leaving him in a persistent vegetative state.",
      },
      {
        episodeSeason: 9,
        episodeNum: 5,
        episodeName: "The Losing Edge",
        episodeDate: "06-Apr-05",
        episodeRanking: "-",
        episodeDescription:
          "The boys try to lose their baseball games on purpose so they can avoid playing all summer. Randy gets into training to fight the other fathers at the games.",
      },
      {
        episodeSeason: 9,
        episodeNum: 6,
        episodeName: "The Death of Eric Cartman",
        episodeDate: "13-Apr-05",
        episodeRanking: "-",
        episodeDescription:
          "The kids of South Park agree to ignore Cartman, leading him to think that he is dead.",
      },
      {
        episodeSeason: 9,
        episodeNum: 7,
        episodeName: "Erection Day",
        episodeDate: "20-Apr-05",
        episodeRanking: "-",
        episodeDescription:
          "Jimmy starts getting erections and worries about performing in the school talent show.",
      },
      {
        episodeSeason: 9,
        episodeNum: 8,
        episodeName: "Two Days Before the Day After Tomorrow",
        episodeDate: "19-Oct-05",
        episodeRanking: "-",
        episodeDescription:
          "A state of emergency is declared in South Park after it is announced that global warming is coming.",
      },
      {
        episodeSeason: 9,
        episodeNum: 9,
        episodeName: "Marjorine",
        episodeDate: "26-Oct-05",
        episodeRanking: "-",
        episodeDescription:
          "Butters is forced to fake his own death in order to snoop in on the girls' sleepover as Marjorine, the new girl.",
      },
      {
        episodeSeason: 9,
        episodeNum: 10,
        episodeName: "Follow That Egg!",
        episodeDate: "02-Nov-05",
        episodeRanking: "-",
        episodeDescription:
          "After learning Mr. Slave will marry Big Gay Al, Mrs. Garrison vows to stop same-sex marriage from being approved. A project involving an egg makes Stan and Kyle into rivals.",
      },
      {
        episodeSeason: 9,
        episodeNum: 11,
        episodeName: "Ginger Kids",
        episodeDate: "09-Nov-05",
        episodeRanking: "-",
        episodeDescription:
          "Cartman suffers from a mysterious and sudden onset of the 'disease' Gingervitis. He then starts a campaign to give children in his assumed position \"more than equal\" rights.",
      },
      {
        episodeSeason: 9,
        episodeNum: 12,
        episodeName: "Trapped in the Closet",
        episodeDate: "16-Nov-05",
        episodeRanking: "-",
        episodeDescription:
          "Stan looks to a new religion for answers. Tom Cruise, R. Kelly, and John Travolta lock themselves in Stan's closet.",
      },
      {
        episodeSeason: 9,
        episodeNum: 13,
        episodeName: "Free Willzyx",
        episodeDate: "30-Nov-05",
        episodeRanking: "-",
        episodeDescription:
          'A "talking" whale inspires the boys to risk everything to "return him to his family on the moon".',
      },
      {
        episodeSeason: 9,
        episodeNum: 14,
        episodeName: "Bloody Mary",
        episodeDate: "07-Dec-05",
        episodeRanking: "-",
        episodeDescription:
          "Randy's drinking problem reaches its peak. A Virgin Mary statue in a neighboring town begins to bleed from its rectum.",
      },
      {
        episodeSeason: 10,
        episodeNum: 1,
        episodeName: "The Return of Chef",
        episodeDate: "22-Mar-06",
        episodeRanking: "-",
        episodeDescription:
          'Chef leaves South Park to join the "Super Adventure Club". When he returns, the boys notice there\'s something wrong with him.',
      },
      {
        episodeSeason: 10,
        episodeNum: 2,
        episodeName: "Smug Alert!",
        episodeDate: "29-Mar-06",
        episodeRanking: "-",
        episodeDescription:
          "Stan persuades everyone in town to buy hybrid cars, not realizing the new cars cause a different kind of dangerous emission.",
      },
      {
        episodeSeason: 10,
        episodeNum: 3,
        episodeName: "Cartoon Wars Part I",
        episodeDate: "05-Apr-06",
        episodeRanking: "-",
        episodeDescription:
          "The town is in panic when Family Guy angers the Muslim world by attempting to air an image of Mohammed. Kyle agrees to help Cartman have the next uncensored episode pulled.",
      },
      {
        episodeSeason: 10,
        episodeNum: 4,
        episodeName: "Cartoon Wars Part II",
        episodeDate: "12-Apr-06",
        episodeRanking: "-",
        episodeDescription:
          "Cartman meets with the president of FOX in an attempt to cancel Family Guy.",
      },
      {
        episodeSeason: 10,
        episodeNum: 5,
        episodeName: "A Million Little Fibers",
        episodeDate: "19-Apr-06",
        episodeRanking: "-",
        episodeDescription:
          "Broke and needing to pay for his rent, Towelie gets high and decides to publish his memoirs. However, every time he gets high, something goes wrong.",
      },
      {
        episodeSeason: 10,
        episodeNum: 6,
        episodeName: "ManBearPig",
        episodeDate: "26-Apr-06",
        episodeRanking: "-",
        episodeDescription:
          'Al Gore gets the boys trapped in the Cave Of The Winds while trying to kill the purported "Manbearpig".',
      },
      {
        episodeSeason: 10,
        episodeNum: 7,
        episodeName: "Tsst",
        episodeDate: "03-May-06",
        episodeRanking: "-",
        episodeDescription:
          "When Cartman's mom realizes she can't control her son anymore, she gets help from an expert.",
      },
      {
        episodeSeason: 10,
        episodeNum: 8,
        episodeName: "Make Love, Not Warcraft",
        episodeDate: "04-Oct-06",
        episodeRanking: "-",
        episodeDescription:
          "The boys dedicate their lives to defeat a mad gamer, and save the World of Warcraft.",
      },
      {
        episodeSeason: 10,
        episodeNum: 9,
        episodeName: "Mystery of the Urinal Deuce",
        episodeDate: "11-Oct-06",
        episodeRanking: "-",
        episodeDescription:
          'Cartman "discovers" the true culprit behind the 9/11 attacks. Mr. Mackey is determined to find out who defecated in the urinal at South Park Elementary.',
      },
      {
        episodeSeason: 10,
        episodeNum: 10,
        episodeName: "Miss Teacher Bangs a Boy",
        episodeDate: "18-Oct-06",
        episodeRanking: "-",
        episodeDescription:
          "A South Park Elementary School teacher is conducting an illicit affair with a student. As the new School Hallway Monitor, Cartman takes it personally when an infraction is committed in his jurisdiction.",
      },
      {
        episodeSeason: 10,
        episodeNum: 11,
        episodeName: "Hell on Earth 2006",
        episodeDate: "25-Oct-06",
        episodeRanking: "-",
        episodeDescription:
          "Satan decides to throw a big party on Earth, but has trouble deciding who to invite. He wants to invite lots of celebrities that are alive, but is running out of room for his friends.",
      },
      {
        episodeSeason: 10,
        episodeNum: 12,
        episodeName: "Go God Go",
        episodeDate: "01-Nov-06",
        episodeRanking: "-",
        episodeDescription:
          "Cartman, unable to wait for the Nintendo Wii, freezes himself until it is released. After an avalanche he becomes trapped and wakes up in the future. Ms. Garrison meets Richard Dawkins.",
      },
      {
        episodeSeason: 10,
        episodeNum: 13,
        episodeName: "Go God Go XII",
        episodeDate: "08-Nov-06",
        episodeRanking: "-",
        episodeDescription:
          "Cartman tries to escape from the future while the war rages on between the Atheist factions.",
      },
      {
        episodeSeason: 10,
        episodeNum: 14,
        episodeName: "Stanley's Cup",
        episodeDate: "15-Nov-06",
        episodeRanking: "-",
        episodeDescription:
          "Stan's bike is towed that he needs for his paper route. To get it back he is forced to coach a pee-wee hockey team.",
      },
      {
        episodeSeason: 11,
        episodeNum: 1,
        episodeName: "With Apologies to Jesse Jackson",
        episodeDate: "07-Mar-07",
        episodeRanking: "-",
        episodeDescription:
          "Randy says n*ggers on Wheel of Fortune and Cartman gets into a fight with a midget.",
      },
      {
        episodeSeason: 11,
        episodeNum: 2,
        episodeName: "Cartman Sucks",
        episodeDate: "14-Mar-07",
        episodeRanking: "-",
        episodeDescription:
          'Cartman pulls his "best trick ever" on Butters and gets him put in a special camp where they "pray the gay away".',
      },
      {
        episodeSeason: 11,
        episodeNum: 3,
        episodeName: "Lice Capades",
        episodeDate: "21-Mar-07",
        episodeRanking: "-",
        episodeDescription:
          "A hair lice infection hits South Park Elementary. Can Clyde hide his terrible discovery from the others?",
      },
      {
        episodeSeason: 11,
        episodeNum: 4,
        episodeName: "The Snuke",
        episodeDate: "28-Mar-07",
        episodeRanking: "-",
        episodeDescription:
          "Hillary Clinton's campaign rally arrives in town. Cartman suspects a terrorist threat from the new Muslim student.",
      },
      {
        episodeSeason: 11,
        episodeNum: 5,
        episodeName: "Fantastic Easter Special",
        episodeDate: "04-Apr-07",
        episodeRanking: "-",
        episodeDescription:
          "Stan wonders how Easter Eggs and Jesus dying on the cross are linked. He soon falls in with an eccentric society guarding a timeless secret.",
      },
      {
        episodeSeason: 11,
        episodeNum: 6,
        episodeName: "D-Yikes!",
        episodeDate: "11-Apr-07",
        episodeRanking: "-",
        episodeDescription:
          "Ms. Garrison gets dumped yet again, and lets her anger out on her fourth grade class.",
      },
      {
        episodeSeason: 11,
        episodeNum: 7,
        episodeName: "Night of the Living Homeless",
        episodeDate: "18-Apr-07",
        episodeRanking: "-",
        episodeDescription:
          "South Park is overrun with the homeless. The boys must figure out a way to get rid of them.",
      },
      {
        episodeSeason: 11,
        episodeNum: 8,
        episodeName: "Le Petit Tourette",
        episodeDate: "03-Oct-07",
        episodeRanking: "-",
        episodeDescription:
          "Cartman discovers the joys of having Tourette's syndrome.",
      },
      {
        episodeSeason: 11,
        episodeNum: 9,
        episodeName: "More Crap",
        episodeDate: "10-Oct-07",
        episodeRanking: "-",
        episodeDescription:
          "Randy becomes a town hero when everyone sees the size of his crap.",
      },
      {
        episodeSeason: 11,
        episodeNum: 10,
        episodeName: "Imaginationland Episode I",
        episodeDate: "17-Oct-07",
        episodeRanking: "-",
        episodeDescription:
          "Kyle regrets making a bet with Cartman, and the boys enter a mysterious land full of imaginary creatures.",
      },
      {
        episodeSeason: 11,
        episodeNum: 11,
        episodeName: "Imaginationland, Episode II",
        episodeDate: "24-Oct-07",
        episodeRanking: "-",
        episodeDescription:
          "Cartman is determined to find Kyle while Butters remains trapped in Imaginationland as the evil creatures break through the barrier...",
      },
      {
        episodeSeason: 11,
        episodeNum: 12,
        episodeName: "Imaginationland, Episode III",
        episodeDate: "31-Oct-07",
        episodeRanking: "-",
        episodeDescription:
          "Stan and Butters prepare for the battle of their lives, while Cartman takes his case to the Supreme Court.",
      },
      {
        episodeSeason: 11,
        episodeNum: 13,
        episodeName: "Guitar Queer-O",
        episodeDate: "07-Nov-07",
        episodeRanking: "-",
        episodeDescription:
          "Stan and Kyle become hooked on guitar hero, but Stan's superior skill threatens his and Kyle's friendship.",
      },
      {
        episodeSeason: 11,
        episodeNum: 14,
        episodeName: "The List",
        episodeDate: "14-Nov-07",
        episodeRanking: "-",
        episodeDescription:
          "The boys try to obtain the list that the girls have made rating how attractive the boys are.",
      },
      {
        episodeSeason: 12,
        episodeNum: 1,
        episodeName: "Tonsil Trouble",
        episodeDate: "12-Mar-08",
        episodeRanking: "-",
        episodeDescription:
          "Cartman has his tonsils removed but is accidentally given HIV as a result of a blood transfusion.",
      },
      {
        episodeSeason: 12,
        episodeNum: 2,
        episodeName: "Britney's New Look",
        episodeDate: "19-Mar-08",
        episodeRanking: "-",
        episodeDescription:
          "The boys travel with Britney Spears to the North Pole and discover the secret of her popularity.",
      },
      {
        episodeSeason: 12,
        episodeNum: 3,
        episodeName: "Major Boobage",
        episodeDate: "26-Mar-08",
        episodeRanking: "-",
        episodeDescription:
          "Kenny becomes addicted to the latest drug. To get people off this, Gerald proposes a ban on Cats.",
      },
      {
        episodeSeason: 12,
        episodeNum: 4,
        episodeName: "Canada on Strike",
        episodeDate: "02-Apr-08",
        episodeRanking: "-",
        episodeDescription:
          "The head of the World Canadian Bureau leads the country into a long and painful strike.",
      },
      {
        episodeSeason: 12,
        episodeNum: 5,
        episodeName: "Eek, A Penis!",
        episodeDate: "09-Apr-08",
        episodeRanking: "-",
        episodeDescription:
          "Mrs. Garrison goes in search of a way of becoming a man while Cartman is left to substitute.",
      },
      {
        episodeSeason: 12,
        episodeNum: 6,
        episodeName: "Over Logging",
        episodeDate: "16-Apr-08",
        episodeRanking: "-",
        episodeDescription:
          "Randy moves the Marsh family towards California after the internet has gone.",
      },
      {
        episodeSeason: 12,
        episodeNum: 7,
        episodeName: "Super Fun Time",
        episodeDate: "23-Apr-08",
        episodeRanking: "-",
        episodeDescription:
          "Mr. Garrison's field trip turns into a dangerous situation when everyone is taken hostage, while Butters is forced by Cartman to accompany him to the nearby amusement park.",
      },
      {
        episodeSeason: 12,
        episodeNum: 8,
        episodeName: "The China Probrem",
        episodeDate: "08-Oct-08",
        episodeRanking: "-",
        episodeDescription:
          "Cartman must confront the Chinese alone while the American people are haunted by the memory of recent tragic events.",
      },
      {
        episodeSeason: 12,
        episodeNum: 9,
        episodeName: "Breast Cancer Show Ever",
        episodeDate: "15-Oct-08",
        episodeRanking: "-",
        episodeDescription:
          "Wendy gets into trouble after threatening to beat Cartman after school.",
      },
      {
        episodeSeason: 12,
        episodeNum: 10,
        episodeName: "Pandemic",
        episodeDate: "22-Oct-08",
        episodeRanking: "-",
        episodeDescription:
          "While the world struggles to contain the latest epedemic of epic proportions, the boys find a way to make money off of it.",
      },
      {
        episodeSeason: 12,
        episodeNum: 11,
        episodeName: "Pandemic 2: The Startling",
        episodeDate: "29-Oct-08",
        episodeRanking: "-",
        episodeDescription:
          "Randy bravely documents the destruction whilst trying to save his family.",
      },
      {
        episodeSeason: 12,
        episodeNum: 12,
        episodeName: "About Last Night...",
        episodeDate: "05-Nov-08",
        episodeRanking: "-",
        episodeDescription:
          "All the president candidates aren't who they seem to be...",
      },
      {
        episodeSeason: 12,
        episodeNum: 13,
        episodeName: "Elementary School Musical",
        episodeDate: "12-Nov-08",
        episodeRanking: "-",
        episodeDescription:
          "The boys realize they aren't the cool kids anymore, while Stan realizes that he could lose Wendy if he doesn't get on board with the latest fad to hit South Park Elementary",
      },
      {
        episodeSeason: 12,
        episodeNum: 14,
        episodeName: "The Ungroundable",
        episodeDate: "19-Nov-08",
        episodeRanking: "-",
        episodeDescription:
          "Butters is sure he‚Äôs seen a Vampire at school but he can‚Äôt get anyone to listen to him. Meanwhile, the Goth Kids are angry and frustrated when the other kids can‚Äôt tell the difference between a Goth Kid and a Vampire Kid.",
      },
      {
        episodeSeason: 13,
        episodeNum: 1,
        episodeName: "The Ring",
        episodeDate: "11-Mar-09",
        episodeRanking: "-",
        episodeDescription:
          "Thinking it's his way into her heart and other body parts, Kenny takes his new girlfriend to a Jonas Brothers concert. His dream of taking their relationship to the next level is crushed with the Jonas Brothers giving them purity rings.",
      },
      {
        episodeSeason: 13,
        episodeNum: 2,
        episodeName: "The Coon",
        episodeDate: "18-Mar-09",
        episodeRanking: "-",
        episodeDescription:
          "The Coon rises from the trash and takes his place as a lone vigilante.",
      },
      {
        episodeSeason: 13,
        episodeNum: 3,
        episodeName: "Margaritaville",
        episodeDate: "25-Mar-09",
        episodeRanking: "-",
        episodeDescription:
          "The economy is making everyone's life difficult, but Randy has a solution.",
      },
      {
        episodeSeason: 13,
        episodeNum: 4,
        episodeName: "Eat, Pray, Queef",
        episodeDate: "01-Apr-09",
        episodeRanking: "-",
        episodeDescription:
          "There is a new television series which freaks the boys out, called The Queef Sisters.",
      },
      {
        episodeSeason: 13,
        episodeNum: 5,
        episodeName: "Fishsticks",
        episodeDate: "08-Apr-09",
        episodeRanking: "-",
        episodeDescription:
          "Cartman decides to help Jimmy with his comedy routine. Everyone loves the new joke they come up with. The joke starts to take off and it even hits all the late night talk shows. The boys are thrilled with how popular it‚Äôs become until somebody tries to take all the credit.",
      },
      {
        episodeSeason: 13,
        episodeNum: 6,
        episodeName: "Pinewood Derby",
        episodeDate: "15-Apr-09",
        episodeRanking: "-",
        episodeDescription:
          "Randy is determined that Stan will win this year's Pinewood Derby. He comes up with a plan that will assure Stan a first place trophy.",
      },
      {
        episodeSeason: 13,
        episodeNum: 7,
        episodeName: "Fatbeard",
        episodeDate: "22-Apr-09",
        episodeRanking: "-",
        episodeDescription:
          "Butters and a small group of recruits join Cartman in his dream of living on skull island where they will frolic in crystal clear waterfalls and discover buried treasure. Cartman promises that paradise awaits if they can just get to Somalia.",
      },
      {
        episodeSeason: 13,
        episodeNum: 8,
        episodeName: "Dead Celebrities",
        episodeDate: "07-Oct-09",
        episodeRanking: "-",
        episodeDescription:
          "Ike is being tormented by paranormal forces. Kyle brings in professional ghost hunters to help save his little brother.",
      },
      {
        episodeSeason: 13,
        episodeNum: 9,
        episodeName: "Butters' Bottom Bitch",
        episodeDate: "14-Oct-09",
        episodeRanking: "-",
        episodeDescription:
          "Butters is determined to get his first kiss so his friends won't make fun of him anymore.",
      },
      {
        episodeSeason: 13,
        episodeNum: 10,
        episodeName: "W.T.F.",
        episodeDate: "21-Oct-09",
        episodeRanking: "-",
        episodeDescription: "The boys decide to take up wrestling.",
      },
      {
        episodeSeason: 13,
        episodeNum: 11,
        episodeName: "Whale Whores",
        episodeDate: "28-Oct-09",
        episodeRanking: "-",
        episodeDescription:
          "Stan joins the whale wars crew and fights against the Japanese protecting the world's whales and dolphins.",
      },
      {
        episodeSeason: 13,
        episodeNum: 12,
        episodeName: "The F Word",
        episodeDate: "04-Nov-09",
        episodeRanking: "-",
        episodeDescription:
          "The boys fight back against the loud and obnoxious Motorcycle Riders that are disrupting everyone in South Park.",
      },
      {
        episodeSeason: 13,
        episodeNum: 13,
        episodeName: "Dances with Smurfs",
        episodeDate: "11-Nov-09",
        episodeRanking: "-",
        episodeDescription:
          "Cartman takes over the morning announcements and uses his new position to attack Wendy.",
      },
      {
        episodeSeason: 13,
        episodeNum: 14,
        episodeName: "Pee",
        episodeDate: "18-Nov-09",
        episodeRanking: "-",
        episodeDescription:
          'The boys and Jimmy visit the "Pi Pi Waterland" and experience a urine catastrophe in a parody of 2012.',
      },
      {
        episodeSeason: 14,
        episodeNum: 1,
        episodeName: "Sexual Healing",
        episodeDate: "17-Mar-10",
        episodeRanking: "-",
        episodeDescription:
          "The nation‚Äôs top scientists come together to put a stop to the recent phenomenon of rich, successful men who suddenly want to have sex with many, many women. After extensive testing, some of the fourth grade boys in South Park Elementary are diagnosed as sex addicts.",
      },
      {
        episodeSeason: 14,
        episodeNum: 2,
        episodeName: "The Tale of Scrotie McBoogerballs",
        episodeDate: "24-Mar-10",
        episodeRanking: "-",
        episodeDescription:
          "The boys are given a controversial book to read in school that both excites and inspires them to write one of their own. When the boys discover that Stan's mom has found their masterpiece, their new motivation is how they can stay out of trouble.",
      },
      {
        episodeSeason: 14,
        episodeNum: 3,
        episodeName: "Medicinal Fried Chicken",
        episodeDate: "31-Mar-10",
        episodeRanking: "-",
        episodeDescription:
          "Cartman‚Äôs favorite restaurant has been shut down and replaced by a store that sells medicinal marijuana. Randy is desperate to get a prescription card to buy pot and Cartman will do anything to get his beloved fried chicken back.",
      },
      {
        episodeSeason: 14,
        episodeNum: 4,
        episodeName: "You Have 0 Friends",
        episodeDate: "07-Apr-10",
        episodeRanking: "-",
        episodeDescription:
          'Kyle "friends" the wrong person on facebook and now all of his old friends are deserting him. His situation is desperate. Kyle looks for help from the one person who has always been there for him. Stan gets sucked into Facebook.',
      },
      {
        episodeSeason: 14,
        episodeNum: 5,
        episodeName: "200",
        episodeDate: "14-Apr-10",
        episodeRanking: "-",
        episodeDescription:
          "While on a school field trip, Stan accidentally insults Tom Cruise (again), which sets off a chain reaction of enraged celebrities. As a result, 200 previously ridiculed celebrities stand strong in a class action lawsuit against the town of South Park. This could be the thing that destroys South Park forever. So it is up to Stan to come with a plan to sort out this predicament or they are all doomed.",
      },
      {
        episodeSeason: 14,
        episodeNum: 6,
        episodeName: "201",
        episodeDate: "21-Apr-10",
        episodeRanking: "-",
        episodeDescription:
          "Angry celebrities, violent ginger kids and Mecha Streisand are about to destroy South Park and all anyone wants to know is, ‚ÄúWho is Eric Cartman‚Äôs father?‚Äù",
      },
      {
        episodeSeason: 14,
        episodeNum: 7,
        episodeName: "Crippled Summer",
        episodeDate: "28-Apr-10",
        episodeRanking: "-",
        episodeDescription:
          "Competition is the name of the game this summer. There is no time for Jimmy and his friends to slack off. They're working to be this year's champions at summer camp. Jimmy suits up and prepares to shred in the annual surfing contest. Meanwhile Towelie goes through drug therapy.",
      },
      {
        episodeSeason: 14,
        episodeNum: 8,
        episodeName: "Poor and Stupid",
        episodeDate: "06-Oct-10",
        episodeRanking: "-",
        episodeDescription:
          "Cartman wants to race with the pros and he's ready to do whatever it takes to make it happen. He's afraid that no matter how hard he tries, he'll never reach the the level of the other NASCAR drivers. Working with Butters as his pit boss, Cartman pulls out all the stops to compete in the race of his life.",
      },
      {
        episodeSeason: 14,
        episodeNum: 9,
        episodeName: "It's a Jersey Thing",
        episodeDate: "13-Oct-10",
        episodeRanking: "-",
        episodeDescription:
          "New Jersey is rapidly taking over the nation, one state at a time and their next stop is South Park. As the Jerseyites spill into Colorado and approach South Park, Randy and the boys stand strong against the onslaught.",
      },
      {
        episodeSeason: 14,
        episodeNum: 10,
        episodeName: "Insheeption",
        episodeDate: "20-Oct-10",
        episodeRanking: "-",
        episodeDescription:
          "When he's sent to the school counselor to talk about his disorder, Stan realizes that he's not the only one who has a problem. When Mr. Mackey and Stan agree to surrender themselves to the hoarding experts, Stan gets a more than a glimpse of what it was like for Mr. Mackey in the 4th grade at South Park Elementary.",
      },
      {
        episodeSeason: 14,
        episodeNum: 11,
        episodeName: "Coon 2: Hindsight",
        episodeDate: "27-Oct-10",
        episodeRanking: "-",
        episodeDescription: "Coon and Friends",
      },
      {
        episodeSeason: 14,
        episodeNum: 12,
        episodeName: "Mysterion Rises",
        episodeDate: "03-Nov-10",
        episodeRanking: "-",
        episodeDescription:
          "Led by Mysterion, Coon and Friends are working together to help the people in the Gulf who are at the mercy of the dark lord, Cthulhu. The Coon, scorned by his fellow super heroes and now working alone, is out for revenge.",
      },
      {
        episodeSeason: 14,
        episodeNum: 13,
        episodeName: "Coon vs. Coon & Friends",
        episodeDate: "10-Nov-10",
        episodeRanking: "-",
        episodeDescription:
          "Coon and Friends find themselves at the mercy of Cartman who now has the dark lord, Cthulhu, doing his bidding. Kenny wrestles with the curse of his super power through his alter ego, Mysterion.",
      },
      {
        episodeSeason: 14,
        episodeNum: 14,
        episodeName: "Cr√®me Fraiche",
        episodeDate: "17-Nov-10",
        episodeRanking: "-",
        episodeDescription:
          "Stan's life is a shambles both at home and in school. Randy's obsession with the Food Network Is changing everything. It even forces Sharon to explore a new interest of her own.",
      },
      {
        episodeSeason: 15,
        episodeNum: 1,
        episodeName: "HUMANCENTiPAD",
        episodeDate: "27-Apr-11",
        episodeRanking: "-",
        episodeDescription:
          "Kyle is intimately involved in the development of a revolutionary new product that is about to be launched by Apple. Meanwhile, Cartman doesn't even have a regular iPad yet. He blames his mother.",
      },
      {
        episodeSeason: 15,
        episodeNum: 2,
        episodeName: "Funnybot",
        episodeDate: "04-May-11",
        episodeRanking: "-",
        episodeDescription:
          "At the schools first annual Comedy Awards, Jimmy announces that the Germans are the least funny people in the world. Germany is highly insulted. They vow that retaliation toward the kids at South Park Elementary will be swift and brutal.",
      },
      {
        episodeSeason: 15,
        episodeNum: 3,
        episodeName: "Royal Pudding",
        episodeDate: "11-May-11",
        episodeRanking: "-",
        episodeDescription:
          "It is a joyous time for all Canadians as the royal wedding commences. But just as the prince and princess are about to be joined for all eternity, the princess is abducted! All Canadians are called upon to help save the princess. Ike answers the call to arms.",
      },
      {
        episodeSeason: 15,
        episodeNum: 4,
        episodeName: "T.M.I.",
        episodeDate: "18-May-11",
        episodeRanking: "-",
        episodeDescription:
          "Cartman is furious when the school posts the kids' penis sizes on the bulletin board. He throws an absolute fit and once again finds himself in the principal's office. This time he gets sent to anger management therapy.",
      },
      {
        episodeSeason: 15,
        episodeNum: 5,
        episodeName: "Crack Baby Athletic Association",
        episodeDate: "25-May-11",
        episodeRanking: "-",
        episodeDescription:
          "Kyle gets in on the ground floor of Cartman‚Äôs latest business venture, The Crack Baby Athletic Association.",
      },
      {
        episodeSeason: 15,
        episodeNum: 6,
        episodeName: "City Sushi",
        episodeDate: "01-Jun-11",
        episodeRanking: "-",
        episodeDescription:
          "Butters is taken to a psychiatrist who claims that he has Multiple Personality Disorder, in which he needs medication for. Meanwhile, a new restaurant opens next to South Park's City Wok.",
      },
      {
        episodeSeason: 15,
        episodeNum: 7,
        episodeName: "You're Getting Old",
        episodeDate: "08-Jun-11",
        episodeRanking: "-",
        episodeDescription:
          "After Stan celebrates his 10th birthday, he begins to see everything differently. The other boys think he's become a major buzzkill and start to avoid hanging out with him. When Stan and Kyle have a major blow up, the very fabric of South Park begins to unravel.",
      },
      {
        episodeSeason: 15,
        episodeNum: 8,
        episodeName: "Ass Burgers",
        episodeDate: "05-Oct-11",
        episodeRanking: "-",
        episodeDescription:
          "Cartman tries to give himself Asperger's Syndrome in an unusual way. Meanwhile, Stan doesn't seem to be able to get his life back to normal no matter what he tries.",
      },
      {
        episodeSeason: 15,
        episodeNum: 9,
        episodeName: "The Last of the Meheecans",
        episodeDate: "12-Oct-11",
        episodeRanking: "-",
        episodeDescription:
          "Butters ends up living in Mexico. When several mexicans believe it is best to cross over to Mexico, Cartman joins the Border Patrol.",
      },
      {
        episodeSeason: 15,
        episodeNum: 10,
        episodeName: "Bass to Mouth",
        episodeDate: "19-Oct-11",
        episodeRanking: "-",
        episodeDescription:
          "The students of South Park Elementary are the victims of a new gossip website. An elusive hacker has somehow gained access into the student's confidential phone calls and e-mails and is posting all their juicy stories. The boys are shocked when they discover the identity of the hacker.",
      },
      {
        episodeSeason: 15,
        episodeNum: 11,
        episodeName: "Broadway Bro Down",
        episodeDate: "26-Oct-11",
        episodeRanking: "-",
        episodeDescription:
          "Sharon is thrilled that Randy is making an effort to do more things that she enjoys. But, after he takes her to see a hit musical in Denver, Randy becomes Broadway‚Äôs biggest fan. Sharon is whisked away to New York and treated to every musical on the Great White Way.",
      },
      {
        episodeSeason: 15,
        episodeNum: 12,
        episodeName: "1%",
        episodeDate: "02-Nov-11",
        episodeRanking: "-",
        episodeDescription:
          "The kids at South Park Elementary are being punished for Cartman's failings in the physical education department. What will Cartman do when they all gang up on him?",
      },
      {
        episodeSeason: 15,
        episodeNum: 13,
        episodeName: "A History Channel Thanksgiving",
        episodeDate: "09-Nov-11",
        episodeRanking: "-",
        episodeDescription:
          "After watching a Thanksgiving special on The History Channel, the boys believe that aliens were involved in the original feast. But, questions remain... was the first Thanksgiving haunted? Is alien technology responsible for stuffing? The truth could change Thanksgiving for everyone.",
      },
      {
        episodeSeason: 15,
        episodeNum: 14,
        episodeName: "The Poor Kid",
        episodeDate: "16-Nov-11",
        episodeRanking: "-",
        episodeDescription:
          'When Kenny\'s parents are arrested, the McCormick kids are put in an agnostic foster home. Cartman finds out he is the second poorest kid and attempts to get himself put in a foster home on Hawaii; this plan backfires. Cartman ends up living with Kenny where he or Kenny are no longer the "poor kids".',
      },
      {
        episodeSeason: 16,
        episodeNum: 1,
        episodeName: "Reverse Cowgirl",
        episodeDate: "14-Mar-12",
        episodeRanking: "-",
        episodeDescription:
          "When one of the boys leaves the toilet seat up after he uses the bathroom, an unspeakable tragedy occurs.",
      },
      {
        episodeSeason: 16,
        episodeNum: 2,
        episodeName: "Cash For Gold",
        episodeDate: "21-Mar-12",
        episodeRanking: "-",
        episodeDescription: "Cartman launches his own gem shopping channel.",
      },
      {
        episodeSeason: 16,
        episodeNum: 3,
        episodeName: "Faith Hilling",
        episodeDate: "28-Mar-12",
        episodeRanking: "-",
        episodeDescription:
          "The kids are in danger when new trends start to evolve and shift at a rapid pace.",
      },
      {
        episodeSeason: 16,
        episodeNum: 4,
        episodeName: "Jewpacabra",
        episodeDate: "04-Apr-12",
        episodeRanking: "-",
        episodeDescription:
          "The town's big Easter Egg Hunt is in jeopardy when Cartman produces video evidence of a mysterious creature lurking in the woods.",
      },
      {
        episodeSeason: 16,
        episodeNum: 5,
        episodeName: "Butterballs",
        episodeDate: "11-Apr-12",
        episodeRanking: "-",
        episodeDescription: "Butters is the victim of an unlikely bully.",
      },
      {
        episodeSeason: 16,
        episodeNum: 6,
        episodeName: "I Should Have Never Gone Ziplining",
        episodeDate: "18-Apr-12",
        episodeRanking: "-",
        episodeDescription:
          "The boys' ziplining adventure becomes a terrifying test of survival.",
      },
      {
        episodeSeason: 16,
        episodeNum: 7,
        episodeName: "Cartman Finds Love",
        episodeDate: "25-Apr-12",
        episodeRanking: "-",
        episodeDescription:
          "The time has finally come for Cartman to let a special someone know exactly how he feels.",
      },
      {
        episodeSeason: 16,
        episodeNum: 8,
        episodeName: "Sarcastaball",
        episodeDate: "26-Sep-12",
        episodeRanking: "-",
        episodeDescription:
          "South Park Elementary takes steps to address football's concussion crisis.",
      },
      {
        episodeSeason: 16,
        episodeNum: 9,
        episodeName: "Raising the Bar",
        episodeDate: "03-Oct-12",
        episodeRanking: "-",
        episodeDescription:
          "Cartman finally admits he's fat and immediately gets a mobility scooter.",
      },
      {
        episodeSeason: 16,
        episodeNum: 10,
        episodeName: "Insecurity",
        episodeDate: "10-Oct-12",
        episodeRanking: "-",
        episodeDescription: "Cartman signs up for a home security system.",
      },
      {
        episodeSeason: 16,
        episodeNum: 11,
        episodeName: "Going Native",
        episodeDate: "17-Oct-12",
        episodeRanking: "-",
        episodeDescription:
          "It is time for Butters to begin a journey where he will follow in the path of his Hawaiian ancestors.",
      },
      {
        episodeSeason: 16,
        episodeNum: 12,
        episodeName: "A Nightmare on Face Time",
        episodeDate: "24-Oct-12",
        episodeRanking: "-",
        episodeDescription:
          "Randy's big plans for Halloween night keep Stan from trick or treating with his friends.",
      },
      {
        episodeSeason: 16,
        episodeNum: 13,
        episodeName: "A Scause For Applause",
        episodeDate: "31-Oct-12",
        episodeRanking: "-",
        episodeDescription:
          "A serious doping scandal shakes everyone's faith in a beloved icon. Everyone who once supported the fallen hero is now cutting off their symbolic yellow wristbands.",
      },
      {
        episodeSeason: 16,
        episodeNum: 14,
        episodeName: "Obama Wins!",
        episodeDate: "07-Nov-12",
        episodeRanking: "-",
        episodeDescription:
          "Eric Cartman is hiding something in his bedroom that could change the entire outcome of the Presidential election.",
      },
      {
        episodeSeason: 17,
        episodeNum: 1,
        episodeName: "Let Go, Let Gov",
        episodeDate: "25-Sep-13",
        episodeRanking: "-",
        episodeDescription:
          "Cartman infiltrates the NSA and doesn't like what he finds in his personal file.",
      },
      {
        episodeSeason: 17,
        episodeNum: 2,
        episodeName: "Informative Murder Porn",
        episodeDate: "02-Oct-13",
        episodeRanking: "-",
        episodeDescription:
          "The boys use the game of Minecraft as a distraction to keep their parents from hurting each other.",
      },
      {
        episodeSeason: 17,
        episodeNum: 3,
        episodeName: "World War Zimmerman",
        episodeDate: "09-Oct-13",
        episodeRanking: "-",
        episodeDescription: "Cartman sees Token as a threat to all humanity.",
      },
      {
        episodeSeason: 17,
        episodeNum: 4,
        episodeName: "Goth Kids 3: Dawn of the Posers",
        episodeDate: "23-Oct-13",
        episodeRanking: "-",
        episodeDescription:
          "The Goth Kids are being sent away to a camp for troubled children.",
      },
      {
        episodeSeason: 17,
        episodeNum: 5,
        episodeName: "Taming Strange",
        episodeDate: "30-Oct-13",
        episodeRanking: "-",
        episodeDescription:
          "When Ike hits puberty, he and Kyle start to grow apart. To save their relationship, Kyle takes Ike to see a live performance of Yo Gabba Gabba!.",
      },
      {
        episodeSeason: 17,
        episodeNum: 6,
        episodeName: "Ginger Cow",
        episodeDate: "06-Nov-13",
        episodeRanking: "-",
        episodeDescription: "Cartman's latest prank brings peace to the world.",
      },
      {
        episodeSeason: 17,
        episodeNum: 7,
        episodeName: "Black Friday",
        episodeDate: "13-Nov-13",
        episodeRanking: "-",
        episodeDescription:
          "The boys prepare to battle the crowds already lining up for the first official day of holiday shopping.",
      },
      {
        episodeSeason: 17,
        episodeNum: 8,
        episodeName: "A Song of Ass and Fire",
        episodeDate: "20-Nov-13",
        episodeRanking: "-",
        episodeDescription:
          "Black Friday is almost here and the battle for the new gaming devices is heating up. Princess Kenny's betrayal has left Cartman out for revenge.",
      },
      {
        episodeSeason: 17,
        episodeNum: 9,
        episodeName: "Titties and Dragons",
        episodeDate: "04-Dec-13",
        episodeRanking: "-",
        episodeDescription:
          "The doors to the mall will finally open for the biggest Black Friday sale in history. The boys are divided over which gaming device to buy and a bloody battle will determine whether Xbox or Sony will be the winner.",
      },
      {
        episodeSeason: 17,
        episodeNum: 10,
        episodeName: "The Hobbit",
        episodeDate: "11-Dec-13",
        episodeRanking: "-",
        episodeDescription:
          "When Wendy tries to fix one of her girlfriends up with Butters, she ends up in the counselor's office.",
      },
      {
        episodeSeason: 18,
        episodeNum: 1,
        episodeName: "Go Fund Yourself",
        episodeDate: "24-Sep-14",
        episodeRanking: "-",
        episodeDescription:
          "The boys name their new start-up company, The Washington Redskins.",
      },
      {
        episodeSeason: 18,
        episodeNum: 2,
        episodeName: "Gluten Free Ebola",
        episodeDate: "01-Oct-14",
        episodeRanking: "-",
        episodeDescription: "South Park goes gluten free.",
      },
      {
        episodeSeason: 18,
        episodeNum: 3,
        episodeName: "The Cissy",
        episodeDate: "08-Oct-14",
        episodeRanking: "-",
        episodeDescription:
          "Randy is harboring a giant secret and the pressure is getting to him. Meanwhile, Cartman calls Stan a cissy.",
      },
      {
        episodeSeason: 18,
        episodeNum: 4,
        episodeName: "Handicar",
        episodeDate: "15-Oct-14",
        episodeRanking: "-",
        episodeDescription:
          "Timmy's successful new car service makes him a lot of enemies.",
      },
      {
        episodeSeason: 18,
        episodeNum: 5,
        episodeName: "The Magic Bush",
        episodeDate: "29-Oct-14",
        episodeRanking: "-",
        episodeDescription:
          "Graphic video from an unknown drone is uploaded on the internet.",
      },
      {
        episodeSeason: 18,
        episodeNum: 6,
        episodeName: "Freemium Isn't Free",
        episodeDate: "05-Nov-14",
        episodeRanking: "-",
        episodeDescription:
          "Stan is addicted to the new Terrance and Phillip mobile game.",
      },
      {
        episodeSeason: 18,
        episodeNum: 7,
        episodeName: "Grounded Vindaloop",
        episodeDate: "12-Nov-14",
        episodeRanking: "-",
        episodeDescription:
          "Butters is convinced he's living in a virtual reality.",
      },
      {
        episodeSeason: 18,
        episodeNum: 8,
        episodeName: "Cock Magic",
        episodeDate: "19-Nov-14",
        episodeRanking: "-",
        episodeDescription:
          "There are illegal goings-on in the basement of City Wok.",
      },
      {
        episodeSeason: 18,
        episodeNum: 9,
        episodeName: "#REHASH",
        episodeDate: "03-Dec-14",
        episodeRanking: "-",
        episodeDescription:
          "Kyle just wants to play video games with his little brother. But, when Ike doesn't want to play with him anymore, Kyle is afraid that the next generation is passing him by.",
      },
      {
        episodeSeason: 18,
        episodeNum: 10,
        episodeName: "#HappyHolograms",
        episodeDate: "10-Dec-14",
        episodeRanking: "-",
        episodeDescription:
          "CartmanBrah is trending as the country prepares to watch the biggest Holiday Spectacular ever.",
      },
      {
        episodeSeason: 19,
        episodeNum: 1,
        episodeName: "Stunning and Brave",
        episodeDate: "16-Sep-15",
        episodeRanking: "-",
        episodeDescription:
          "There is a new principal at the helm of South Park Elementary. He forces the boys to confront the damage they‚Äôve done through their history of racism and unconscious bias. It is the most stunning and brave South Park ever.",
      },
      {
        episodeSeason: 19,
        episodeNum: 2,
        episodeName: "Where My Country Gone?",
        episodeDate: "23-Sep-15",
        episodeRanking: "-",
        episodeDescription:
          "Garrison wants to build a wall to keep out all of the undocumented immigrants.",
      },
      {
        episodeSeason: 19,
        episodeNum: 3,
        episodeName: "The City Part of Town",
        episodeDate: "30-Sep-15",
        episodeRanking: "-",
        episodeDescription:
          "The town of South Park is gentrifying, Kenny gets a job at City Wok.",
      },
      {
        episodeSeason: 19,
        episodeNum: 4,
        episodeName: "You're Not Yelping",
        episodeDate: "14-Oct-15",
        episodeRanking: "-",
        episodeDescription:
          "A new Mexican restaurant opens in South Park and Eric Cartman will give his expert advice to the owner.",
      },
      {
        episodeSeason: 19,
        episodeNum: 5,
        episodeName: "Safe Space",
        episodeDate: "21-Oct-15",
        episodeRanking: "-",
        episodeDescription:
          "Randy has to deal with uncomfortable confrontations every time he shops at the new Whole Foods. He feels exposed at every turn and it‚Äôs ruining his Whole Foods experience. Randy and Cartman are both seeking a safe space.",
      },
      {
        episodeSeason: 19,
        episodeNum: 6,
        episodeName: "Tweek x Craig",
        episodeDate: "28-Oct-15",
        episodeRanking: "-",
        episodeDescription:
          "The news of a romantic relationship between Tweek and Craig hits South Park Elementary. Meanwhile, Cartman, who struggles to understand his friends‚Äô relationship, finds he has an admirer of his own.",
      },
      {
        episodeSeason: 19,
        episodeNum: 7,
        episodeName: "Naughty Ninjas",
        episodeDate: "11-Nov-15",
        episodeRanking: "-",
        episodeDescription:
          "When Kenny leads the boys in playing Ninja Warriors, a foreign terrorist organization takes notice.",
      },
      {
        episodeSeason: 19,
        episodeNum: 8,
        episodeName: "Sponsored Content",
        episodeDate: "18-Nov-15",
        episodeRanking: "-",
        episodeDescription:
          "Jimmy is sent to the principal‚Äôs office for using an inappropriate word in the school paper. His integrity as a newsman runs head on into PC Principals ideology. Will Jimmy be the undoing of PC Principal?",
      },
      {
        episodeSeason: 19,
        episodeNum: 9,
        episodeName: "Truth and Advertising",
        episodeDate: "02-Dec-15",
        episodeRanking: "-",
        episodeDescription:
          "Being the crack reporter that he is, Jimmy sets out to learn everything he can about what makes Leslie tick. Meanwhile, Principal Victoria and Mr. Garrison return to a South Park that has become unrecognizable.",
      },
      {
        episodeSeason: 19,
        episodeNum: 10,
        episodeName: "PC Principal Final Justice",
        episodeDate: "09-Dec-15",
        episodeRanking: "-",
        episodeDescription:
          "The gentrification of South Park is pricing Randy right out of town. Meanwhile, Kyle‚Äôs distrust of Stan has broken their friendship and thrown Kyle into a dangerous alliance.",
      },
      {
        episodeSeason: 20,
        episodeNum: 1,
        episodeName: "Member Berries",
        episodeDate: "14-Sep-16",
        episodeRanking: "-",
        episodeDescription:
          "Mr. Garrison is still on the campaign trail as the National Anthem gets a reboot by an American Icon.",
      },
      {
        episodeSeason: 20,
        episodeNum: 2,
        episodeName: "Skank Hunt",
        episodeDate: "21-Sep-16",
        episodeRanking: "-",
        episodeDescription:
          "The boys decide they have to take down Cartman but meanwhile, Skank Hunt takes his rein of terror global.",
      },
      {
        episodeSeason: 20,
        episodeNum: 3,
        episodeName: "The Damned",
        episodeDate: "28-Sep-16",
        episodeRanking: "-",
        episodeDescription:
          "Gerald is thrilled with the media attention as he continues to troll everyone and anyone.",
      },
      {
        episodeSeason: 20,
        episodeNum: 4,
        episodeName: "Wieners Out",
        episodeDate: "12-Oct-16",
        episodeRanking: "-",
        episodeDescription:
          "Kyle feels tremendous guilt over the rift between the boys and the girls. When he tries to bring them together, things only get worse. The boys finally band together to stand up for their rights.",
      },
      {
        episodeSeason: 20,
        episodeNum: 5,
        episodeName: "Douche and a Danish",
        episodeDate: "19-Oct-16",
        episodeRanking: "-",
        episodeDescription:
          "The kids get pulled in to the search for the notorious Skankhunt42. Meanwhile, Gerald joins forces with the other trolls to stop Denmark from launching TrollTrace.com.",
      },
      {
        episodeSeason: 20,
        episodeNum: 6,
        episodeName: "Fort Collins",
        episodeDate: "26-Oct-16",
        episodeRanking: "-",
        episodeDescription:
          "An entire city in Colorado gets hacked. Gerald and Cartman may lose everything when their complete history of internet activity becomes public.",
      },
      {
        episodeSeason: 20,
        episodeNum: 7,
        episodeName: "Oh, Jeez",
        episodeDate: "09-Nov-16",
        episodeRanking: "-",
        episodeDescription:
          "PC Principal tries one more time to make peace between the boys and the girls. Meanwhile Gerald comes face-to-face with the Troll Hunter.",
      },
      {
        episodeSeason: 20,
        episodeNum: 8,
        episodeName: "Members Only",
        episodeDate: "16-Nov-16",
        episodeRanking: "-",
        episodeDescription:
          "Gerald tries anything to escape the Troll Hunter‚Äôs revenge. Meanwhile, Cartman and Heidi make their way to SpaceX to try to get on the first rocket leaving for Mars.",
      },
      {
        episodeSeason: 20,
        episodeNum: 9,
        episodeName: "Not Funny",
        episodeDate: "30-Nov-16",
        episodeRanking: "-",
        episodeDescription:
          "Cartman is certain Heidi can solve the problem of getting them to Mars because she‚Äôs really funny. Gerald tries to save himself by reasoning with the Troll Hunter while Garrison explores his new found military power.",
      },
      {
        episodeSeason: 20,
        episodeNum: 10,
        episodeName: "The End of Serialization as We Know It",
        episodeDate: "07-Dec-16",
        episodeRanking: "-",
        episodeDescription:
          "As TROLLTRACE goes live, Sheila logs on to see Gerald‚Äôs on-line activity. At SpaceX, Cartman tries to convince the scientists that going to Mars is a bad idea. And defying their mom, Kyle and Ike get all the kids together to try to save the world from certain destruction..",
      },
      {
        episodeSeason: 21,
        episodeNum: 1,
        episodeName: "White People Renovating Houses",
        episodeDate: "13-Sep-17",
        episodeRanking: "-",
        episodeDescription:
          "Randy comes to grips with what it means to be white in today‚Äôs society.",
      },
      {
        episodeSeason: 21,
        episodeNum: 2,
        episodeName: "Put It Down",
        episodeDate: "20-Sep-17",
        episodeRanking: "-",
        episodeDescription:
          "When Tweek is caught in the middle of a petty conflict, it drives his relationship with Craig to the brink.",
      },
      {
        episodeSeason: 21,
        episodeNum: 3,
        episodeName: "Holiday Special",
        episodeDate: "27-Sep-17",
        episodeRanking: "-",
        episodeDescription:
          "In a return to form, a forbidden love story between a white man and a Native American man unfolds.",
      },
      {
        episodeSeason: 21,
        episodeNum: 4,
        episodeName: "Franchise Prequel",
        episodeDate: "11-Oct-17",
        episodeRanking: "-",
        episodeDescription:
          "Facebook is the ultimate weapon for Professor Chaos.",
      },
      {
        episodeSeason: 21,
        episodeNum: 5,
        episodeName: "Hummels & Heroin",
        episodeDate: "18-Oct-17",
        episodeRanking: "-",
        episodeDescription:
          "Beloved entertainers are being cut down in their prime due to massive overdoses of opiates. Stan is about to be exposed as the source of the illegal drugs.",
      },
      {
        episodeSeason: 21,
        episodeNum: 6,
        episodeName: "Sons A Witches",
        episodeDate: "25-Oct-17",
        episodeRanking: "-",
        episodeDescription:
          "At the annual Halloween get together, a witch casts a spell that terrorizes everyone in South Park.",
      },
      {
        episodeSeason: 21,
        episodeNum: 7,
        episodeName: "Doubling Down",
        episodeDate: "08-Nov-17",
        episodeRanking: "-",
        episodeDescription:
          "Kyle is playing with fire when he gets in the middle of Cartman and Heidi‚Äôs relationship.",
      },
      {
        episodeSeason: 21,
        episodeNum: 8,
        episodeName: "Moss Piglets",
        episodeDate: "15-Nov-17",
        episodeRanking: "-",
        episodeDescription:
          "Jimmy and Timmy‚Äôs experiment could win them first prize in the annual science fair.",
      },
      {
        episodeSeason: 21,
        episodeNum: 9,
        episodeName: "SUPER HARD PCness",
        episodeDate: "29-Nov-17",
        episodeRanking: "-",
        episodeDescription:
          "It‚Äôs never been more challenging to be a PC Principal.",
      },
      {
        episodeSeason: 21,
        episodeNum: 10,
        episodeName: "Splatty Tomato",
        episodeDate: "06-Dec-17",
        episodeRanking: "-",
        episodeDescription:
          "The children of South Park claim to have seen Mr. Garrison lurking around town. The townspeople are angry that the President is scaring their children.",
      },
      {
        episodeSeason: 22,
        episodeNum: 1,
        episodeName: "Dead Kids",
        episodeDate: "26-Sep-18",
        episodeRanking: "-",
        episodeDescription:
          "Randy is desperate to help Sharon get her emotions under control and Cartman unexpectedly fails his math test.",
      },
      {
        episodeSeason: 22,
        episodeNum: 2,
        episodeName: "A Boy And A Priest",
        episodeDate: "03-Oct-18",
        episodeRanking: "-",
        episodeDescription:
          "A very special relationship has developed between Butters and the Parish Priest. When the town finds the church doors locked and no sign of the pair, they call in the Catholic Church",
      },
      {
        episodeSeason: 22,
        episodeNum: 3,
        episodeName: "The Problem with a Poo",
        episodeDate: "10-Oct-18",
        episodeRanking: "-",
        episodeDescription:
          "Mr. Hankey‚Äôs offensive behavior puts him in jeopardy of being fired as the Director of the Annual Christmas Pageant.",
      },
      {
        episodeSeason: 22,
        episodeNum: 4,
        episodeName: "Tegridy Farms",
        episodeDate: "17-Oct-18",
        episodeRanking: "-",
        episodeDescription:
          "Butters is selling vape pens and all kinds of fruity-flavored vape accessories at school. Meanwhile, Randy decides he should move the family to the country and take up farming.",
      },
      {
        episodeSeason: 22,
        episodeNum: 5,
        episodeName: "The Scoots",
        episodeDate: "31-Oct-18",
        episodeRanking: "-",
        episodeDescription:
          "The kids plan to use the latest revolution in mobility to get more candy on Halloween than they have ever gotten before.",
      },
      {
        episodeSeason: 22,
        episodeNum: 6,
        episodeName: "Time To Get Cereal",
        episodeDate: "07-Nov-18",
        episodeRanking: "-",
        episodeDescription:
          "When dead citizens start popping up all over town, the boys realize they need Al Gore‚Äôs help. The boys are willing to do almost anything to save the town, and themselves, but it may be just too late.",
      },
      {
        episodeSeason: 22,
        episodeNum: 7,
        episodeName: "Nobody Got Cereal?",
        episodeDate: "14-Nov-18",
        episodeRanking: "-",
        episodeDescription:
          "The boys break out of jail and are on the run from the police and ManBearPig.",
      },
      {
        episodeSeason: 22,
        episodeNum: 8,
        episodeName: "Buddha Box",
        episodeDate: "28-Nov-18",
        episodeRanking: "-",
        episodeDescription:
          "Cartman just can‚Äôt deal with people any longer. They get in the way of what‚Äôs most important in his life.",
      },
      {
        episodeSeason: 22,
        episodeNum: 9,
        episodeName: "Unfulfilled",
        episodeDate: "05-Dec-18",
        episodeRanking: "-",
        episodeDescription:
          "The citizens of South Park are enjoying all the perks of being a company town when the Amazon Fulfillment Center moves in. Everything is just swell until the contradictions inherent in capitalism threaten to bring down the entire system down.",
      },
      {
        episodeSeason: 22,
        episodeNum: 10,
        episodeName: "Bike Parade",
        episodeDate: "12-Dec-18",
        episodeRanking: "-",
        episodeDescription:
          "Despite the chaos at the Amazon Fulfillment Center, the Bike Parade is still on. The boys‚Äô chance of winning is in jeopardy when Kenny resists commercialism in solidarity with the striking workers.",
      },
      {
        episodeSeason: 23,
        episodeNum: 1,
        episodeName: "Mexican Joker",
        episodeDate: "25-Sep-19",
        episodeRanking: "-",
        episodeDescription:
          "In the pilot episode of the new hit series, Tegridy Farms, Randy battles home-grown weed and comes to terms with the fact that he might be a towel. Meanwhile, Kyle goes to camp.",
      },
      {
        episodeSeason: 23,
        episodeNum: 2,
        episodeName: "Band in China",
        episodeDate: "02-Oct-19",
        episodeRanking: "-",
        episodeDescription:
          "Randy lands himself in big trouble on a visit to China. Meanwhile, Stan starts a band to work out his frustration over having to move away from South Park.",
      },
      {
        episodeSeason: 23,
        episodeNum: 3,
        episodeName: "Shots!!!",
        episodeDate: "09-Oct-19",
        episodeRanking: "-",
        episodeDescription:
          "This week, Randy revels in a Tegridy Farms milestone. Meanwhile, Cartman stands his ground and refuses to get a shot.",
      },
      {
        episodeSeason: 23,
        episodeNum: 4,
        episodeName: "Let Them Eat Goo",
        episodeDate: "16-Oct-19",
        episodeRanking: "-",
        episodeDescription:
          "The citizens of South Park are moving toward a completely plant-based diet. Cartman is pretty sure the new food in the cafeteria gave him a heart attack.",
      },
      {
        episodeSeason: 23,
        episodeNum: 5,
        episodeName: "Tegridy Farms Halloween Special",
        episodeDate: "30-Oct-19",
        episodeRanking: "-",
        episodeDescription:
          "It‚Äôs Halloween and Randy is dealing with his daughter‚Äôs marijuana problem. Butters gets an unexpected surprise when he visits the Egyptian Artifact exhibit at the Denver Museum.",
      },
      {
        episodeSeason: 23,
        episodeNum: 6,
        episodeName: "Season Finale",
        episodeDate: "06-Nov-19",
        episodeRanking: "-",
        episodeDescription:
          "The Mayor has evidence that Randy blew up his neighbor‚Äôs yards in protest over homegrown weed and then blamed it on a Mexican Joker. Now the citizens of South Park have had enough of Randy and Tegridy Farms and they just want to lock him up.",
      },
      {
        episodeSeason: 23,
        episodeNum: 7,
        episodeName: "Board Girls",
        episodeDate: "13-Nov-19",
        episodeRanking: "-",
        episodeDescription:
          "In the season opener, an even stronger woman causes big problems for PC Principal. Cartman, Stan, and the rest of the boys meet their match when some of the girls join their board gamers club.",
      },
      {
        episodeSeason: 23,
        episodeNum: 8,
        episodeName: "Turd Burglars",
        episodeDate: "27-Nov-19",
        episodeRanking: "-",
        episodeDescription:
          "Kyle‚Äôs mom looks so good after her fecal transplant that everyone wants to get their hands on her goods. Cartman and the boys jump into the quest for the best microbiome.",
      },
      {
        episodeSeason: 23,
        episodeNum: 9,
        episodeName: "Basic Cable",
        episodeDate: "04-Dec-19",
        episodeRanking: "-",
        episodeDescription:
          "Scott Malkinson‚Äôs future with the new girl in his class depends on him getting the latest and greatest streaming platform. Scott‚Äôs dad works for the local cable company and refuses to move beyond basic cable.",
      },
      {
        episodeSeason: 23,
        episodeNum: 10,
        episodeName: "Christmas Snow",
        episodeDate: "11-Dec-19",
        episodeRanking: "-",
        episodeDescription:
          "It's a bleak Christmas Season in South Park this year and it's all Santa's fault. He is single handedly stealing the joy from the holiday. The town just wants their Christmas Spirit back but that will take a Christmas miracle.",
      },
      {
        episodeSeason: 24,
        episodeNum: 1,
        episodeName: "The Pandemic Special",
        episodeDate: "30-Sep-20",
        episodeRanking: "-",
        episodeDescription:
          "Randy comes to terms with his role in the COVID-19 outbreak as the on-going pandemic presents continued challenges to the citizens of South Park. The kids happily head back to school but nothing resembles the normal that they once knew; not their teachers, not their homeroom, not even Eric Cartman.",
      },
      {
        episodeSeason: 24,
        episodeNum: 2,
        episodeName: "South ParQ Vaccination Special",
        episodeDate: "10-Mar-21",
        episodeRanking: "-",
        episodeDescription:
          "The citizens of South ParQ are clamoring for the COVID-19 vaccine. A hilarious new militant group tries to stop the boys from getting their teacher vaccinated.",
      },
    ],
  },
  {
    showId: 9,
    showName: "Peaky Blinders",
    showYear: 2013,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbhZYpgJTumt6xVoPd5kpREPpMjBUYDMVZw&usqp=CAU",
    showGenre: "Comedy, Drama",
    showCast: "Cillian Murphy, Paul Anderson",
    showSeasonsNum: 6,
    showDescription:
      "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    slug: "peaky-blinders",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Episode #1.1",
        episodeDate: "September 30, 2014",
        episodeRanking: "8.0",
        episodeDescription:
          "Thomas Shelby plans to fix a horse race; some guns turn up stolen.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Episode #1.2",
        episodeDate: "September 30, 2014",
        episodeRanking: "8.2",
        episodeDescription:
          "Thomas Shelby starts a feud with a gypsy family and finally meets with Inspector Campbell to talk about the stolen guns.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Episode #1.3",
        episodeDate: "September 30, 2014",
        episodeRanking: "8.1",
        episodeDescription:
          "Thomas is livid to find out that Ada and Freddie are married; IRA sympathizers tries to get information from Thomas about the stolen guns.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Episode #1.4",
        episodeDate: "September 30, 2014",
        episodeRanking: "8.5",
        episodeDescription:
          "Thomas attempts to make a deal with Campbell; The Peaky's war with the Lees intensifies.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Episode #1.5",
        episodeDate: "September 30, 2014",
        episodeRanking: "8.8",
        episodeDescription:
          "The Shelbys get a surprise visit by an almost forgotten relative. Thomas has one more dangerous plan with the cops.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Episode #1.6",
        episodeDate: "September 30, 2014",
        episodeRanking: "9.1",
        episodeDescription:
          "Tommy and the Peaky Blinders prepare for a big operation, that quickly becomes way trickier than they thought.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Episode #2.1",
        episodeDate: "October 2, 2014",
        episodeRanking: "8.4",
        episodeDescription:
          "When Birmingham crime boss Tommy Shelby's beloved Garrison pub is bombed, he finds himself blackmailed into murdering an Irish dissident.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Episode #2.2",
        episodeDate: "October 9, 2014",
        episodeRanking: "8.3",
        episodeDescription:
          "After murdering an Irish dissident, Tommy has no choice but to be a pawn in Inspector Campbell's treacherous political game.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Episode #2.3",
        episodeDate: "October 16, 2014",
        episodeRanking: "8.5",
        episodeDescription:
          "After joining London crime boss Alfie Solomons in a business venture, Tommy worries that Alfie's newly revealed volatility could pose a problem.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Episode #2.4",
        episodeDate: "October 23, 2014",
        episodeRanking: "8.4",
        episodeDescription:
          "The Peaky Blinders take over London's Eden Club; Sabini convinces his old adversary Alfie Solomons to join forces and eradicate the gang.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Episode #2.5",
        episodeDate: "October 30, 2014",
        episodeRanking: "8.7",
        episodeDescription:
          "The Peaky Blinders are under attack. Tommy's power base in London is obliterated, and both Arthur and Michael are arrested and imprisoned.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Episode #2.6",
        episodeDate: "November 6, 2014",
        episodeRanking: "9.5",
        episodeDescription:
          "Tommy plans to execute the mission given to him by Campbell: the assassination of a high-ranking member of the military establishment.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Episode #3.1",
        episodeDate: "May 31, 2016",
        episodeRanking: "8.1",
        episodeDescription:
          "It is Thomas Shelby's long-awaited wedding day. A mysterious visitor imperils the entire Shelby family, and Tommy finds himself pulled into a web of intrigue more lethal than anything he has yet encountered.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Episode #3.2",
        episodeDate: "May 31, 2016",
        episodeRanking: "8.8",
        episodeDescription:
          "Tommy discovers the extent of the mission given to him and the extreme lengths his new paymasters are willing to go to in their quest for power. Meanwhile his own family's activities lead to escalating danger in Birmingham.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Episode #3.3",
        episodeDate: "May 31, 2016",
        episodeRanking: "8.6",
        episodeDescription:
          "Tommy travels to Wales seeking absolution and uncovers a traitor in the Economic League. Michael develops a taste for guns. Arthur gets good news.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Episode #3.4",
        episodeDate: "May 31, 2016",
        episodeRanking: "8.6",
        episodeDescription:
          "Polly goes to confession, igniting a chain of events that reveals a trap being laid at the Shelbys' expense. Tommy plans an exit from dirty business.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Episode #3.5",
        episodeDate: "May 31, 2016",
        episodeRanking: "8.3",
        episodeDescription:
          "As the Russians test the Peaky Blinders, Tommy realises that he is seriously outmaneuvered. But he has an ace up his sleeve.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Episode #3.6",
        episodeDate: "May 31, 2016",
        episodeRanking: "9.5",
        episodeDescription:
          "As Tommy prepares to commit the most audacious crime of his career, an unexpected blow forces him to face his worst fears in a race against time.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "The Noose",
        episodeDate: "December 21, 2017",
        episodeRanking: "9.4",
        episodeDescription:
          "It is Christmas and Tommy Shelby receives a letter that makes him realize that he and every member of the family are in danger. He knows that it is time for the family to bury their differences and face the enemy together.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "Heathens",
        episodeDate: "December 21, 2017",
        episodeRanking: "9.0",
        episodeDescription:
          "As the Shelbys come to terms with shocking events, Tommy makes a decision he may come to regret. Meanwhile, a bold new enemy makes his move.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Blackbird",
        episodeDate: "December 21, 2017",
        episodeRanking: "8.5",
        episodeDescription:
          "Luca Changretta understands the complexity of his enemy, as the weight of gypsy tradition hangs upon Arthur. But could there be a traitor within the Peaky Blinders' midst?",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Dangerous",
        episodeDate: "December 21, 2017",
        episodeRanking: "8.5",
        episodeDescription:
          "In a daring cat and mouse chase, will Tommy be outwitted by his enemies? And with the return of an old friend, Tommy tries to distract himself with other pursuits.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "The Duel",
        episodeDate: "December 21, 2017",
        episodeRanking: "8.7",
        episodeDescription:
          "Tommy prepares himself as the bloody battle lines are drawn between the Peaky Blinders and Changretta. A deal is struck - with potentially devastating consequences.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "The Company",
        episodeDate: "December 21, 2017",
        episodeRanking: "9.4",
        episodeDescription:
          "During the fight between Goliath and Bonnie Gold events escalate. Then Audrey Changretta appears at a funeral, waving a white flag. She proposes to declare the Vendetta between her family and the Shelbys settled. And she names her price.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Black Tuesday",
        episodeDate: "October 4, 2019",
        episodeRanking: "8.3",
        episodeDescription:
          "In the wake of the Wall Street Crash, Tommy faces new dangers from unexpected quarters.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "Black Cats",
        episodeDate: "October 4, 2019",
        episodeRanking: "8.7",
        episodeDescription:
          "As the Peaky Blinders come under fire, Tommy is warned about a traitor in his midst.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Strategy",
        episodeDate: "October 4, 2019",
        episodeRanking: "8.4",
        episodeDescription:
          "As the charismatic Mosley shows his hand, Tommy makes a treacherous new alliance.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "The Loop",
        episodeDate: "October 4, 2019",
        episodeRanking: "8.8",
        episodeDescription:
          "Tommy agrees to dangerous new partnerships, and a Shelby party promises fireworks.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "The Shock",
        episodeDate: "October 4, 2019",
        episodeRanking: "8.5",
        episodeDescription:
          "As Tommy reveals his intentions for Mosley, someone close to the Shelbys is targeted.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "Mr. Jones",
        episodeDate: "October 4, 2019",
        episodeRanking: "9.2",
        episodeDescription:
          "Family tensions surface after an unexpected announcement. Tommy puts his plan for Oswald Mosley into action, but has he underestimated his opponent?",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "Black Day",
        episodeDate: "June 10, 2022",
        episodeRanking: "8.8",
        episodeDescription:
          "Tommy sets off to North America, where the end of Prohibition brings new opportunities. But he faces new danger from an old adversary who is finally making his move.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "Black Shirt",
        episodeDate: "June 10, 2022",
        episodeRanking: "8.2",
        episodeDescription:
          "Tommy gets involved in a power game with fascists, freedom fighters and Boston gangsters. As the players plan to double cross him, Tommy visits an old ally in Camden.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "Gold",
        episodeDate: "June 10, 2022",
        episodeRanking: "8.0",
        episodeDescription:
          "Faced with devastating news, Tommy goes on a quest to discover who it was that placed a curse on his family. In Birmingham, Ada takes charge, and Arthur takes on some new recruits.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Sapphire",
        episodeDate: "June 10, 2022",
        episodeRanking: "8.0",
        episodeDescription:
          "Tommy establishes a connection between crime and political power that could alter the course of history. He also receives life-changing news from an unexpected source.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "The Road to Hell",
        episodeDate: "June 10, 2022",
        episodeRanking: "8.0",
        episodeDescription:
          "In the light of extraordinary personal revelations, Tommy takes a course of action that will change everything. Meanwhile, his enemies' plans start to fall into place.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "Lock and Key",
        episodeDate: "June 10, 2022",
        episodeRanking: "9.3",
        episodeDescription:
          "As the clouds of the coming storm gather, Tommy Shelby faces the consequences of his experiences and his actions.",
      },
    ],
  },
  {
    showId: 10,
    showName: "Stranger Things",
    showYear: 2016,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0zwNfZ5SVzLrhXouwaYkIEE16BeeUvIJ3A&usqp=CAU",
    showGenre: "Drama, Fantady, Horror",
    showCast: "Millie Bobby Brown, Finn Wolfhard",
    showSeasonsNum: 4,
    showDescription:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    slug: "stranger-things",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Chapter One: The Vanishing of Will Byers",
        episodeDate: "July 15, 2016",
        episodeRanking: 8.6,
        episodeDescription:
          "At the U.S. Dept. of Energy an unexplained event occurs. Then when a young Dungeons and Dragons playing boy named Will disappears after a night with his friends his mother Joyce and the town of Hawkins are plunged into darkness.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Chapter Two: The Weirdo on Maple Street",
        episodeDate: "July 15, 2016",
        episodeRanking: 8.5,
        episodeDescription:
          "Mike hides the mysterious girl in his house. Joyce gets a strange phone call.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Chapter Three: Holly, Jolly",
        episodeDate: "July 15, 2016",
        episodeRanking: 8.9,
        episodeDescription:
          "An increasingly concerned Nancy looks for Barb and finds out what Jonathan's been up to. Joyce is convinced Will is trying to talk to her.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Chapter Four: The Body",
        episodeDate: "July 15, 2016",
        episodeRanking: 9,
        episodeDescription:
          "Refusing to believe Will is dead Joyce tries to connect with her son. The boys give Eleven a makeover. Jonathan and Nancy form an unlikely alliance.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Chapter Five: The Flea and the Acrobat",
        episodeDate: "July 15, 2016",
        episodeRanking: 8.8,
        episodeDescription:
          'Hopper breaks into the lab to find the truth about Will\'s death. The boys try to locate the "gate" that will take them to Will.',
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Chapter Six: The Monster",
        episodeDate: "July 15, 2016",
        episodeRanking: 8.9,
        episodeDescription:
          "Hopper and Joyce find the truth about the lab's experiments. After their fight the boys look for the missing Eleven.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "Chapter Seven: The Bathtub",
        episodeDate: "July 15, 2016",
        episodeRanking: 9.1,
        episodeDescription:
          "The government comes searching for Eleven. Eleven looks for Will and Barb in the Upside Down.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "Chapter Eight: The Upside Down",
        episodeDate: "July 15, 2016",
        episodeRanking: 9.3,
        episodeDescription:
          "Joyce and Hopper are taken in for questioning. Nancy and Jonathan prepare to fight the monster and save Will.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Chapter One: MADMAX",
        episodeDate: "October 27, 2017",
        episodeRanking: 8.3,
        episodeDescription:
          "As the town preps for Halloween a highscoring rival shakes things up at the arcade and a skeptical Hopper inspects a field of rotting pumpkins.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Chapter Two: Trick or Treat, Freak",
        episodeDate: "October 27, 2017",
        episodeRanking: 8.5,
        episodeDescription:
          "After Will sees something terrible on trickortreat night Mike wonders whether Eleven's still out there. Nancy wrestles with the truth about Barb.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Chapter Three: The Pollywog",
        episodeDate: "October 27, 2017",
        episodeRanking: 8.7,
        episodeDescription:
          "Dustin adopts a strange new pet and Eleven grows increasingly impatient. A wellmeaning Bob urges Will to stand up to his fears.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Chapter Four: Will the Wise",
        episodeDate: "October 27, 2017",
        episodeRanking: 8.7,
        episodeDescription:
          "An ailing Will opens up to Joyce with disturbing results. While Hopper digs for the truth Eleven unearths a surprising discovery.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Chapter Five: Dig Dug",
        episodeDate: "October 27, 2017",
        episodeRanking: 8.9,
        episodeDescription:
          'Nancy and Jonathan swap conspiracy theories with a new ally as Eleven searches for someone from her past. "Bob the Brain" tackles a difficult problem.',
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Chapter Six: The Spy",
        episodeDate: "October 27, 2017",
        episodeRanking: 9.2,
        episodeDescription:
          "Will's connection to a shadowy evil grows stronger but no one's quite sure how to stop it. Elsewhere Dustin and Steve forge an unlikely bond.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Chapter Seven: The Lost Sister",
        episodeDate: "October 27, 2017",
        episodeRanking: 6.1,
        episodeDescription:
          "Psychic visions draw Eleven to a band of violent outcasts and an angry girl with a shadowy past.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Chapter Eight: The Mind Flayer",
        episodeDate: "October 27, 2017",
        episodeRanking: 9.3,
        episodeDescription:
          "An unlikely hero steps forward when a deadly development puts the Hawkins lab on lockdown trapping Will and several others inside.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "Chapter Nine: The Gate",
        episodeDate: "October 27, 2017",
        episodeRanking: 9.4,
        episodeDescription:
          "Eleven makes plans to finish what she started while the survivors turn up the heat on the monstrous force that's holding Will hostage.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Chapter One: Suzie, Do You Copy?",
        episodeDate: "July 4, 2019",
        episodeRanking: 8,
        episodeDescription:
          "Summer brings new jobs and budding romance. But the mood shifts when Dustin's radio picks up a Russian broadcast and Will senses something is wrong.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Chapter Two: The Mall Rats",
        episodeDate: "July 4, 2019",
        episodeRanking: 8.1,
        episodeDescription:
          "Nancy and Jonathan follow a lead Steve and Robin sign on to a secret mission and Max and Eleven go shopping. A rattled Billy has troubling visions.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Chapter Three: The Case of the Missing Lifeguard",
        episodeDate: "July 4, 2019",
        episodeRanking: 8.5,
        episodeDescription:
          "With El and Max looking for Billy Will declares a day without girls. Steve and Dustin go on a stakeout and Joyce and Hopper return to Hawkins Lab.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Chapter Four: The Sauna Test",
        episodeDate: "July 4, 2019",
        episodeRanking: 9.1,
        episodeDescription:
          "A code red brings the gang back together to face a frighteningly familiar evil. Karen urges Nancy to keep digging and Robin finds a useful map.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Chapter Five: The Flayed",
        episodeDate: "July 4, 2019",
        episodeRanking: 8.7,
        episodeDescription:
          "Strange surprises lurk inside an old farmhouse and deep beneath the Starcourt Mall. Meanwhile the Mind Flayer is gathering strength.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Chapter Six: E Pluribus Unum",
        episodeDate: "July 4, 2019",
        episodeRanking: 8.8,
        episodeDescription:
          "Dr. Alexei reveals what the Russians have been building and Eleven sees where Billy has been. Dustin and Erica stage a daring rescue.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "Chapter Seven: The Bite",
        episodeDate: "July 4, 2019",
        episodeRanking: 8.9,
        episodeDescription:
          "With time running out and an assassin close behind Hopper's crew races back to Hawkins where El and the kids are preparing for war.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Chapter Eight: The Battle of Starcourt",
        episodeDate: "July 4, 2019",
        episodeRanking: 9.4,
        episodeDescription:
          "Terror reigns in the food court when the Mind Flayer comes to collect. But down below in the dark the future of the world is at stake.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "Chapter One: The Hellfire Club",
        episodeDate: "May 27, 2022",
        episodeRanking: 8.1,
        episodeDescription:
          "Still reeling from the events last year, the gang tries to move on with their lives. However, a threat is brewing both on Earth and the Upside Down.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "Chapter Two: Vecna's Curse",
        episodeDate: "May 27, 2022",
        episodeRanking: 8.1,
        episodeDescription:
          "A plane brings Mike to California -- and a dead body brings Hawkins to a halt. Nancy goes looking for leads. A shaken Eddie tells the gang what he saw.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Chapter Three: The Monster and the Superhero",
        episodeDate: "May 27, 2022",
        episodeRanking: 8.3,
        episodeDescription:
          "Murray and Joyce fly to Alaska, and El faces serious consequences. Robin and Nancy dig up dirt on Hawkins' demons. Dr. Owens delivers sobering news.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Chapter Four: Dear Billy",
        episodeDate: "May 27, 2022",
        episodeRanking: 9.4,
        episodeDescription:
          "Max is in grave danger - and running out of time. A patient at Pennhurst asylum has visitors. Elsewhere, in Russia, Hopper is hard at work.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Chapter Five: The Nina Project",
        episodeDate: "May 27, 2022",
        episodeRanking: 8.1,
        episodeDescription:
          "Owens takes El to Nevada, where she's forced to confront her past, while the Hawkins kids comb a crumbling house for clues. Vecna claims another victim.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Chapter Six: The Dive",
        episodeDate: "May 27, 2022",
        episodeRanking: 8.5,
        episodeDescription:
          "Behind the Iron Curtain, a risky rescue mission gets underway. The California crew seeks help from a hacker. Steve takes one for the team.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Chapter Seven: The Massacre at Hawkins Lab",
        episodeDate: "May 27, 2022",
        episodeRanking: 9.6,
        episodeDescription:
          "As Hopper braces to battle a monster, Dustin dissects Vecna's motives -- and decodes a message from beyond. El finds strength in a distant memory.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "Chapter Eight: Papa",
        episodeDate: "July 1, 2022",
        episodeRanking: 8.6,
        episodeDescription:
          "Nancy has sobering visions, and El passes an important test. Back in Hawkins, the gang gathers supplies and prepares for battle.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "Chapter Nine: The Piggyback",
        episodeDate: "July 1, 2022",
        episodeRanking: 9.1,
        episodeDescription:
          "With selfless hearts and a clash of metal, heroes fight from every corner of the battlefield to save Hawkins - and the world itself.",
      },
    ],
  },
  {
    showId: 11,
    showName: "Parks and Recreation",
    showYear: 2009,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXE-Q6sNaXwdyGUE7R8j_6kktANIzvJq3Yg&usqp=CAU",
    showGenre: "Comedy",
    showCast: "Amy Poehler, Nick Offerman",
    showSeasonsNum: 7,
    showDescription:
      "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place.",
    slug: "parks-and-recreation",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Pilot",
        episodeDate: "April 9, 2009",
        episodeRanking: 7,
        episodeDescription:
          "In an attempt to beautify her town, Leslie Knope takes on the seemingly simple job of helping turn an abandoned construction pit into a park.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Canvassing",
        episodeDate: "April 16, 2009",
        episodeRanking: 7.1,
        episodeDescription:
          "Leslie gets a town hall meeting to discuss her park idea, but she finds out that public reception is less than receptive.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "The Reporter",
        episodeDate: "April 23, 2009",
        episodeRanking: 7.1,
        episodeDescription:
          "Leslie gets a newspaper reporter to do a story about her and the park idea, but becomes upset when she finds out that the reporter slept with Mark.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Boys' Club",
        episodeDate: "April 30, 2009",
        episodeRanking: 7.3,
        episodeDescription:
          "Leslie tries to infiltrate the boys' club of politics by crashing an after-work gathering at the town hall. Trying to fit in, she opens a gift basket breaking the local government ethics, and then is called before an ethics committee.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "The Banquet",
        episodeDate: "May 7, 2009",
        episodeRanking: 7.2,
        episodeDescription:
          "At a banquet honouring her mother, Leslie tries to convince a local zoning official to support her park project. But sensing resistance, Lesie resorts to blackmail. Meanwhile, Tom and Mark ditch the festivities to hit the bars.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Rock Show",
        episodeDate: "May 14, 2009",
        episodeRanking: 7.7,
        episodeDescription:
          "Leslie doesn't realize that a dinner with a much older man from the zoning commission is actually a date set up by her mom. Andy gets his cast taken off, but Ann gets mad when she finds out it could have been off two weeks ago.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Pawnee Zoo",
        episodeDate: "September 17, 2009",
        episodeRanking: 8,
        episodeDescription:
          "Leslie becomes a political lightning rod when the penguin wedding she sets up at the Pawnee Zoo turns out to be for two male penguins.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "The Stakeout",
        episodeDate: "September 24, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "Leslie sets up a stakeout with Tom to find out who's growing marijuana in the community garden she set up in the pit, but it also gives her an opportunity to scout out Ann and Mark's first date.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Beauty Pageant",
        episodeDate: "October 1, 2009",
        episodeRanking: 7.7,
        episodeDescription:
          "Leslie serves as a judge in the Miss Pawnee Beauty Pageant but is disappointed with the results, and Ann finds out that her ex-boyfriend Andy is living in the pit.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Practice Date",
        episodeDate: "October 8, 2009",
        episodeRanking: 8.3,
        episodeDescription:
          'Ann helps a nervous Leslie get ready for her first date with Dave by giving her a "practice date," while everybody else at the office tries to dig up the juiciest dirt on each other.',
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Sister City",
        episodeDate: "October 15, 2009",
        episodeRanking: 7.7,
        episodeDescription:
          "Leslie welcomes a delegation from Pawnee's sister city in Venezuela, whose goal is to humiliate their hosts.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Kaboom",
        episodeDate: "October 22, 2009",
        episodeRanking: 7.7,
        episodeDescription:
          "Andy is injured when Leslie goes out on her own to fill the hole, and he decides to sue Pawnee as a result.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Greg Pikitis",
        episodeDate: "October 29, 2009",
        episodeRanking: 8.3,
        episodeDescription:
          "Leslie tries to stop a high school punk who vandalizes the park every Halloween, but will he get the last laugh? Meanwhile, Ann's Halloween party is a bore until Tom saves the day.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Ron and Tammy",
        episodeDate: "November 5, 2009",
        episodeRanking: 8.4,
        episodeDescription:
          "Ron's ex-wife uses sex to manipulate Ron and get Leslie's vacant lot to build a library, while Leslie gets Andy a job in the building as a shoe-shine man.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "The Camel",
        episodeDate: "November 12, 2009",
        episodeRanking: 7.9,
        episodeDescription:
          "After one of the murals in City Hall is defaced, Leslie and the Parks Department compete to come up with a new design. Meanwhile, Andy and Ron share an uncomfortable moment at the shoeshine stand.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Hunting Trip",
        episodeDate: "November 19, 2009",
        episodeRanking: 8.8,
        episodeDescription:
          "Leslie tries to prove she can hang with the guys so she invites herself on Ron's annual hunting trip, but things don't go as planned. Meanwhile, April and Andy bond in the office while everyone is away.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "Tom's Divorce",
        episodeDate: "December 3, 2009",
        episodeRanking: 7.8,
        episodeDescription:
          "Leslie accidentally finds out that Tom is getting a divorce and tries to lift his spirits by sending him to dinner and a strip club, but Tom doesn't tell her that it was just a sham Green Card marriage.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "Christmas Scandal",
        episodeDate: "December 10, 2009",
        episodeRanking: 8,
        episodeDescription:
          "Leslie is falsely accused of having sexual relations with a sleazy Pawnee councilman. Meanwhile, the rest of the office takes on Leslie's work while she deals with the scandal, and officer Dave has more surprising news for Leslie.",
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "The Set Up",
        episodeDate: "January 14, 2010",
        episodeRanking: 8.1,
        episodeDescription:
          "Ann sets Leslie up on a blind date with a rude MRI technician, and Mark becomes jealous because he thinks Ann is saving another prospect for Leslie for herself. Meanwhile, Tom helps Ron find an assistant.",
      },
      {
        episodeSeason: 2,
        episodeNum: 14,
        episodeName: "Leslie's House",
        episodeDate: "January 21, 2010",
        episodeRanking: 8,
        episodeDescription:
          "Did Leslie abuse her power by bringing in community center teachers to her house to help throw a dinner party to impress her new suitor?",
      },
      {
        episodeSeason: 2,
        episodeNum: 15,
        episodeName: "Sweetums",
        episodeDate: "February 4, 2010",
        episodeRanking: 7.9,
        episodeDescription:
          "Leslie and Ron become adversaries when a dishonest candy company vies for a concessions contract, while everybody else in the department reluctantly helps Tom move out of his house.",
      },
      {
        episodeSeason: 2,
        episodeNum: 16,
        episodeName: "Galentine's Day",
        episodeDate: "February 11, 2010",
        episodeRanking: 7.6,
        episodeDescription:
          "Leslie and Justin try to reunite Leslie's Mom with an old flame for Valentine's Day, only to discover he's a total loon. And Justin's rude behavior during the entire episode causes Leslie to look at him in a new light.",
      },
      {
        episodeSeason: 2,
        episodeNum: 17,
        episodeName: "Woman of the Year",
        episodeDate: "March 4, 2010",
        episodeRanking: 8,
        episodeDescription:
          'Leslie is upset when Ron wins a coveted "Woman of the Year" award, Tom looks for investors for a new night club, and Andy considers moving into his own place.',
      },
      {
        episodeSeason: 2,
        episodeNum: 18,
        episodeName: "The Possum",
        episodeDate: "March 11, 2010",
        episodeRanking: 8,
        episodeDescription:
          "Leslie puts together a task force at the mayor's request to catch a possum at the golf course, while Mark forces Ron to get his personal building up to code.",
      },
      {
        episodeSeason: 2,
        episodeNum: 19,
        episodeName: "Park Safety",
        episodeDate: "March 18, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          "Leslie goes on a crusade to improve park safety after Jerry is mugged, which is later discovered to be a lie. Meanwhile, Ron tries to teach the office self-defense, but winds up injuring Andy instead.",
      },
      {
        episodeSeason: 2,
        episodeNum: 20,
        episodeName: "Summer Catalog",
        episodeDate: "March 25, 2010",
        episodeRanking: 7.9,
        episodeDescription:
          "Preparing the Summer Events Catalog, Leslie decides to take Ron and the past directors of the Parks Department out for a picnic lunch. Tom enlists the help of Ann and Mark to pose for the cover photo.",
      },
      {
        episodeSeason: 2,
        episodeNum: 21,
        episodeName: "94 Meetings",
        episodeDate: "April 29, 2010",
        episodeRanking: 8.6,
        episodeDescription:
          "Leslie goes all out to save a gazebo at a mansion on the historical register from being destroyed, while April gets in trouble with Ron when she accidentally schedules 93 meetings for him on the same day.",
      },
      {
        episodeSeason: 2,
        episodeNum: 22,
        episodeName: "Telethon",
        episodeDate: "May 6, 2010",
        episodeRanking: 8.3,
        episodeDescription:
          "Leslie struggles to stay awake and fill the overnight hours at a local telethon when Tom and celebrity guest Detlef Schrempf are sidetracked at a nightclub, and the answer to her problems could be a surprise marriage proposal.",
      },
      {
        episodeSeason: 2,
        episodeNum: 23,
        episodeName: "The Master Plan",
        episodeDate: "May 13, 2010",
        episodeRanking: 8.6,
        episodeDescription:
          "Everyone is excited about celebrating April's 21st birthday except Leslie, who is preoccupied with the prospect of her budget being cut by the state auditor's office.",
      },
      {
        episodeSeason: 2,
        episodeNum: 24,
        episodeName: "Freddy Spaghetti",
        episodeDate: "May 20, 2010",
        episodeRanking: 8.7,
        episodeDescription:
          "The government is shut down and the parks are closed, but Leslie tries to skirt the rules to hold a children's concert in the vacant lot. Meanwhile, will April's jealousy of Ann keep her from getting together with Andy?",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Go Big or Go Home",
        episodeDate: "January 20, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Leslie encourages Ann to go on a date with Chris so that she can ask for money for Leslie's department, while Ron, Andy, and Tom put together a two-team youth basketball league.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Flu Season",
        episodeDate: "January 27, 2011",
        episodeRanking: 9,
        episodeDescription:
          "Leslie gets the flu right before an important fund-raising pitch for the Harvest Festival, Chris tries frantically to avoid catching the bug, and Ron hires Andy to replace April while she is out.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Time Capsule",
        episodeDate: "February 3, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "A crackpot handcuffs himself to a pipe in Leslie's office and demands that \"Twilight\" be placed in the Pawnee Time Capsule, and Chris tries to help Andy woo April in spite of Ann's reservations.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Ron & Tammy 2",
        episodeDate: "February 10, 2011",
        episodeRanking: 8.6,
        episodeDescription:
          "After Ron breaks up with Tom's ex-wife, he decides to get back together with his Tammy, much to everyone's horror. Meanwhile, Leslie and Ben try to get the local police to donate their services to the upcoming Harvest Festival.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Media Blitz",
        episodeDate: "February 17, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Leslie hits the Pawnee media circuit to promote the Harvest Festival, but Ben freaks out on air when his past is exposed. Meanwhile, April threatens Andy that she'll leave for Indianapolis unless he does her chores.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Indianapolis",
        episodeDate: "February 24, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Leslie and Ron go to Indianapolis to receive a commendation from the state. While there, Ron finds out his favorite steak house is closed and Leslie thinks Chris is cheating on Ann. Meanwhile, Tom throws a party for a fragrance designer.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "Harvest Festival",
        episodeDate: "March 17, 2011",
        episodeRanking: 8.8,
        episodeDescription:
          'On the day before the Harvest Festival, a local Native American leader places a "curse" on the event because Leslie refuses to give in to his demands.',
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Camping",
        episodeDate: "March 24, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Leslie sets up a camping trip to brainstorm for new ideas, but she's the one who surprisingly can't come up with anything. Meanwhile, Chris returns to Pawnee as temporary city manager, causing further confusion for Ann.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "Andy and April's Fancy Party",
        episodeDate: "April 14, 2011",
        episodeRanking: 9,
        episodeDescription:
          "Andy and April's party turns into a surprise wedding, but Leslie does not approve. Meanwhile, Ben debates whether to stay in Pawnee, and Donna gives Ann advice at a singles mixer.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "Soulmates",
        episodeDate: "April 21, 2011",
        episodeRanking: 8.6,
        episodeDescription:
          "Leslie is matched up with Tom on an Internet dating website, while Chris and Ron compete in a hamburger cook-off.",
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "Jerry's Painting",
        episodeDate: "April 28, 2011",
        episodeRanking: 8.7,
        episodeDescription:
          "Chris deals with community uproar over Jerry's new painting, which features a nude Leslie, and Ben tries to help teach Andy and April responsibility after he moves in with them.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "Eagleton",
        episodeDate: "May 5, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Leslie is forced to deal with a former beloved colleague-turned bitter enemy when a neighboring town separates a shared park with a fence. Meanwhile, Ron fears the worst when Leslie finds out about his birthday.",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "The Fight",
        episodeDate: "May 12, 2011",
        episodeRanking: 8.9,
        episodeDescription:
          "While Tom invites everyone to the Snakehole as he debuts a new drink, Leslie encourages Ann to apply for a job with the city. However, at the nightclub, Leslie and Ann get into a fight over their dating habits.",
      },
      {
        episodeSeason: 3,
        episodeNum: 14,
        episodeName: "Road Trip",
        episodeDate: "May 12, 2011",
        episodeRanking: 8.6,
        episodeDescription:
          'The romantic tension between Leslie and Ben reaches dangerous levels when they take a work-related road trip to Indianapolis, Tom\'s "game show" creates tension between Andy and April, and Ron teaches government to a nine year old.',
      },
      {
        episodeSeason: 3,
        episodeNum: 15,
        episodeName: "The Bubble",
        episodeDate: "May 19, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Leslie's mom makes a pass at Ben, not knowing that he and Leslie are dating. Meanwhile, Chris makes radical changes in the office, and nobody is happy with them.",
      },
      {
        episodeSeason: 3,
        episodeNum: 16,
        episodeName: "Li'l Sebastian",
        episodeDate: "May 19, 2011",
        episodeRanking: 8.9,
        episodeDescription:
          "While the department sets up a memorial service for Li'l Sebastian, Ron finds out about Leslie and Ben, Tom considers taking a job in the private sector, and Chris deals with his own mortality after he discovers that he has tendinitis.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "I'm Leslie Knope",
        episodeDate: "September 22, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Leslie decides to run for political office, which means that she has to break up with Ben. Meanwhile, Ron goes into hiding from Tammy 1, and Tom tries to recruit Andy for his latest business venture.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "Ron and Tammys",
        episodeDate: "September 29, 2011",
        episodeRanking: 8.7,
        episodeDescription:
          "Ron becomes a wimp after he and Tammy 1 get back together and Leslie tries to save him, Ben discovers that Tom's business is hemorrhaging money, and Ann has a frustrating experience shooting a diabetes PSA with Chris.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Born and Raised",
        episodeDate: "October 6, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Leslie is accused of not being born in Pawnee while she is trying to promote her new book about the city. Meanwhile, Ann tries in vain to have a five-minute conversation with Ron and April.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Pawnee Rangers",
        episodeDate: "October 13, 2011",
        episodeRanking: 8.3,
        episodeDescription:
          "Ron's Pawnee Rangers and Leslie's competing scout group, the Pawnee Goddesses, share a weekend in the wilderness, Ben joins Tom and Donna on \"Treat Yo Self Day,\" and Chris takes an interest in Jerry's daughter.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Meet 'N' Greet",
        episodeDate: "October 27, 2011",
        episodeRanking: 7.8,
        episodeDescription:
          "Leslie's opportunity to stump for votes in the business community is sabotaged by Tom, who wants to promote Entertainment 7Twenty. Meanwhile, Andy and April throw a Halloween party, but don't give Ben advance notice.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "End of the World",
        episodeDate: "November 3, 2011",
        episodeRanking: 8.6,
        episodeDescription:
          "A cult predicting the end of the world reserves a park, Leslie becomes jealous when another woman takes interest in Ben, Tom throws a huge party for the closing of Entertainment 7Twenty, and Andy and April try to do something stupid.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "The Treaty",
        episodeDate: "November 10, 2011",
        episodeRanking: 8,
        episodeDescription:
          "Leslie and Ben argue over their relationship and ruin the high school Model U.N. they are hosting, Chris wonders where his relationship with Jerry's daughter is going wrong, and Ron tries to get Tom to take back his old job.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "Smallest Park",
        episodeDate: "November 17, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Leslie tries to manipulate a new park project to extend her working relationship with Ben, Tom and Jerry work together to create a new department logo, and Andy tries to find the right college course to sign up for.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "The Trial of Leslie Knope",
        episodeDate: "December 1, 2011",
        episodeRanking: 8.5,
        episodeDescription:
          "Chris brings Leslie up on ethics charges for her relationship with Ben.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "Citizen Knope",
        episodeDate: "December 8, 2011",
        episodeRanking: 8.5,
        episodeDescription:
          "Leslie tries to keep herself busy during her suspension from the department, but gets some bad news about her campaign. Meanwhile, Ben searches for a job in the private sector, and the office makes the perfect Christmas gift for Leslie.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "The Comeback Kid",
        episodeDate: "January 12, 2012",
        episodeRanking: 8.6,
        episodeDescription:
          "Leslie appoints Ann as her new campaign manager, but her attempt to relaunch the campaign goes off to a horrendous start, while Chris discovers that Ben is depressed after leaving his job.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "Campaign Ad",
        episodeDate: "January 19, 2012",
        episodeRanking: 8.4,
        episodeDescription:
          "Leslie tries to keep Ben from making a negative campaign ad against a popular new candidate, Andy takes a visit to the doctor, and Ron becomes uncomfortable when Chris suddenly starts trying to hang out with him.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "Bowling for Votes",
        episodeDate: "January 26, 2012",
        episodeRanking: 8.7,
        episodeDescription:
          "Leslie unsuccessfully tries to win over a focus group member who made a negative comment by going bowling with him, and Chris gets some bad relationship news while calling for campaign donations.",
      },
      {
        episodeSeason: 4,
        episodeNum: 14,
        episodeName: "Operation Ann",
        episodeDate: "February 2, 2012",
        episodeRanking: 8.2,
        episodeDescription:
          "Ann's friends try to set her up on a date for Valentine's Day, while Ron and Andy try to help Ben solve Leslie's series of complicated riddles to reveal the location of their Valentine's Day date.",
      },
      {
        episodeSeason: 4,
        episodeNum: 15,
        episodeName: "Dave Returns",
        episodeDate: "February 16, 2012",
        episodeRanking: 8,
        episodeDescription:
          "While Leslie tries to get an endorsement from the police chief, Dave returns to tell Leslie that he's still in love with her. Meanwhile, Andy tries to put together a campaign theme song.",
      },
      {
        episodeSeason: 4,
        episodeNum: 16,
        episodeName: "Sweet Sixteen",
        episodeDate: "February 23, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "Leslie's attempts to balance her campaign with her job results in major blunders on both fronts, Chris becomes attached to Andy's dog Champion, and April gets fed up with Tom and Ann coming to her for relationship advice.",
      },
      {
        episodeSeason: 4,
        episodeNum: 17,
        episodeName: "Campaign Shake-Up",
        episodeDate: "March 1, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Leslie and Ben have their work cut out for them when Bobby Newport hires a Washington professional as his campaign manager, while Ron gets the department to tackle a project in Leslie's absence to get Chris off his back.",
      },
      {
        episodeSeason: 4,
        episodeNum: 18,
        episodeName: "Lucky",
        episodeDate: "March 8, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Leslie's campaign could be in big trouble when she records a TV interview after a couple of drinks. Meanwhile, April tries to set Chris up with Andy's women's studies professor, but things go unexpectedly.",
      },
      {
        episodeSeason: 4,
        episodeNum: 19,
        episodeName: "Live Ammo",
        episodeDate: "April 19, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Leslie could pay a steep political price for saving the Parks Department budget from getting cut, and Chris considers Ron for a promotion--which could actually be short-lived.",
      },
      {
        episodeSeason: 4,
        episodeNum: 20,
        episodeName: "The Debate",
        episodeDate: "April 26, 2012",
        episodeRanking: 8.9,
        episodeDescription:
          "The candidates debate on television; Chris, Anne, and Tom act as Leslie's \"spin team\" for the media. Meanwhile, Ron, April, Donna, and Andy throw a party for Leslie's campaign supporters, but experience a few set backs in the process.",
      },
      {
        episodeSeason: 4,
        episodeNum: 21,
        episodeName: "Bus Tour",
        episodeDate: "May 3, 2012",
        episodeRanking: 8.3,
        episodeDescription:
          "Leslie's campaign momentum is halted when Bobby Newport's dad dies a couple of days before the election, and Andy tries to figure out who tried to throw a pie at Leslie on the campaign trail.",
      },
      {
        episodeSeason: 4,
        episodeNum: 22,
        episodeName: "Win, Lose or Draw",
        episodeDate: "May 10, 2012",
        episodeRanking: 9.1,
        episodeDescription:
          "It's election day for Leslie, and Ben is contemplating an offer to help work on a campaign in Washington. Meanwhile, Andy tries to help April rescue the files she deleted from the Parks Department computers.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Ms. Knope Goes to Washington",
        episodeDate: "September 20, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Leslie and Andy go to Washington on business--and to see Ben and April. Back in Pawnee, Ron is in charge of the employee barbecue, and Tom and Ann pretend to still be together.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "Soda Tax",
        episodeDate: "September 27, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Leslie faces threats and backlash if she votes in favor of a \"soda tax,\" Ben tries to suck to his interns after he discovers that they're politically connected, and Andy's efforts to get in shape send Chris into a depression.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "How a Bill Becomes a Law",
        episodeDate: "October 4, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Leslie is forced to make a sacrifice to assure passage of a bill, Ron meets a single woman while fixing a pothole, and Ben and April are stuck in a parking lot and can't make it back to Pawnee.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "Sex Education",
        episodeDate: "October 18, 2012",
        episodeRanking: 8.1,
        episodeDescription:
          "Leslie gets in trouble with her initiative to teach safe sex to senior citizens, Ron tries to help Tom overcome his addiction to social media, and Ben and April suspect that the candidate they work for is a robot.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "Halloween Surprise",
        episodeDate: "October 25, 2012",
        episodeRanking: 8.7,
        episodeDescription:
          "Leslie's future with Ben is on hold after he gets a new job offer, Leslie and Ann give Jerry a heart attack, and Ron's new relationship is in jeopardy because of his girlfriend's kids.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "Ben's Parents",
        episodeDate: "November 8, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Ben's parents ruin Leslie and Ben's engagement party, Chris becomes sad over their engagement, and Tom prepares a new business pitch for Ron.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "Leslie vs. April",
        episodeDate: "November 15, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Leslie and April clash over a proposed dog park, Ben receives a slew of job offers, and Andy uses his detective skills to find out who stole his computer.",
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "Pawnee Commons",
        episodeDate: "November 29, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Leslie wants to reject a great park idea just because the designer comes from Eagleton, Tom begins his new business venture with a new fiscal approach, and Andy and April find a way to make Andy's new security job more exciting.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "Ron and Diane",
        episodeDate: "December 6, 2012",
        episodeRanking: 9,
        episodeDescription:
          "Tammy shows up at an awards ceremony to sabotage Ron's new relationship, and four of Jerry's co-workers are shocked that he's throwing a Christmas party without them.",
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "Two Parties",
        episodeDate: "January 17, 2013",
        episodeRanking: 8.9,
        episodeDescription:
          "Leslie's bachelorette party is ruined after councilman Jamm backs out of a promise, and Chris throws Ben a bachelor party that everyone will remember.",
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "Women in Garbage",
        episodeDate: "January 24, 2013",
        episodeRanking: 8.1,
        episodeDescription:
          "Leslie and April volunteer to work on a garbage truck to fight sexism in city government, Ron has a frightening experience babysitting Diane's girls, and Andy and Ben try to teach basketball to Tom.",
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "Ann's Decision",
        episodeDate: "February 7, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "Ann wants to find a sperm donor, Chris, Ron, and Tom help Ben find a wedding caterer, and April replaces Leslie at a public hearing about a new park.",
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "Emergency Response",
        episodeDate: "February 14, 2013",
        episodeRanking: 8.6,
        episodeDescription:
          "The department has to put together an last-minute fund-raising gala for the new park without Leslie, who has been called away on an emergency disaster drill. Meanwhile, Andy takes his police officer exam.",
      },
      {
        episodeSeason: 5,
        episodeNum: 14,
        episodeName: "Leslie and Ben",
        episodeDate: "February 21, 2013",
        episodeRanking: 9.3,
        episodeDescription:
          "The clock is ticking -- Leslie and Ben have two hours to complete a years-long project. Meanwhile, Ron gets in trouble when his temper gets the best of him.",
      },
      {
        episodeSeason: 5,
        episodeNum: 15,
        episodeName: "Correspondents' Lunch",
        episodeDate: "February 21, 2013",
        episodeRanking: 7.9,
        episodeDescription:
          "Leslie discovers that a newspaper reporter has hacked her e-mail account, Ben begins his new job, and Ann decides that she wants Chris to be her sperm donor.",
      },
      {
        episodeSeason: 5,
        episodeNum: 16,
        episodeName: "Bailout",
        episodeDate: "March 14, 2013",
        episodeRanking: 8.2,
        episodeDescription:
          "Leslie devises a bailout plan for Ricky's Records, home to Pawnee's children's music scene. Meanwhile, Ron speaks out against her pro-government plans. Ann promises to write April's recommendation letter only if they become best friends.",
      },
      {
        episodeSeason: 5,
        episodeNum: 17,
        episodeName: "Partridge",
        episodeDate: "April 4, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "Ben and Leslie go to Ben's hometown in Minnesota so he can get the key to the city, an honor given to all former mayors of the town except Ben, councilman Jamm sues Ron for punching him, and Chris and Ann try to test their compatibility.",
      },
      {
        episodeSeason: 5,
        episodeNum: 18,
        episodeName: "Animal Control",
        episodeDate: "April 11, 2013",
        episodeRanking: 8.3,
        episodeDescription:
          "Leslie faces a roadblock while searching for a new head of Animal Control, Ann convinces Ron to go see a doctor, and Ben asks local fragrance mogul Dennis Feinstein for a charitable donation.",
      },
      {
        episodeSeason: 5,
        episodeNum: 19,
        episodeName: "Article Two",
        episodeDate: "April 18, 2013",
        episodeRanking: 8,
        episodeDescription:
          "A concerned citizen fights Leslie's efforts to remove some outdated Pawnee laws, and April and Ron are forced to take Chris's management training course.",
      },
      {
        episodeSeason: 5,
        episodeNum: 20,
        episodeName: "Jerry's Retirement",
        episodeDate: "April 18, 2013",
        episodeRanking: 8.2,
        episodeDescription:
          "Leslie throws a last-minute retirement party for Jerry, Tom discovers that he's the new Jerry in the office, and Ann and Chris weigh their options for conception.",
      },
      {
        episodeSeason: 5,
        episodeNum: 21,
        episodeName: "Swing Vote",
        episodeDate: "April 25, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "After a bill to fund a local putt-putt course is introduced, Leslie and Ron compete for Jamm's swing vote. Meanwhile, Andy decides to retire from the band, and Ann tries to help Tom break up with Mona-Lisa.",
      },
      {
        episodeSeason: 5,
        episodeNum: 22,
        episodeName: "Are You Better Off?",
        episodeDate: "May 2, 2013",
        episodeRanking: 8.4,
        episodeDescription:
          "A group of citizens organizes a Leslie Knope recall, Andy finds a positive pregnancy test outside Ron's cabin, and Tom considers a lucrative offer to sell Rent-a-Swag.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "London: Part 1",
        episodeDate: "September 26, 2013",
        episodeRanking: 8.6,
        episodeDescription:
          "Ron gets married, Leslie goes to London to receive an award, Ben and Andy try to get a grant from a rich Englishman, and Tom discovers the identity of his new business rival.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "London: Part 2",
        episodeDate: "September 26, 2013",
        episodeRanking: 8.7,
        episodeDescription:
          "Ron's honeymoon doesn't go as planned, Leslie gives an unpopular speech at her award ceremony, Andy considers a business proposal, and Tom attempts to compromise with his rival.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "The Pawnee-Eagleton Tip Off Classic",
        episodeDate: "October 3, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Leslie gloats instead of trying to help when she learns of Eagleton's budget crisis, Ron tries to get himself off the grid, and Ann takes April on a road trip to Bloomington.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Doppelg√§ngers",
        episodeDate: "October 10, 2013",
        episodeRanking: 8.1,
        episodeDescription:
          "While the parks department works side-by-side with their former Eagleton counterparts, Leslie is blindsided and heartbroken by the news that Ann and Chris are leaving Pawnee.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "Gin It Up!",
        episodeDate: "October 17, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          'Leslie and the department get caught in a overblown mini-scandal, Tom falls for a visiting doctor, and Ben tries to help Ron draw up a "real" will.',
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "Filibuster",
        episodeDate: "November 14, 2013",
        episodeRanking: 8.1,
        episodeDescription:
          "Leslie blows off Ben's birthday party to filibuster councilman Jamm's motion, Andy pays a surprise visit to April, Tom tries to win a stuffed bear for Nadia, and Ron gets frustrated by an arcade hunting game.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "Recall Vote",
        episodeDate: "November 14, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "Leslie goes into a funk after she loses the recall election, the rest of the office sets up a Haunted House, and Tom turns to Ron and a local online trendsetter to help save Rent-a-Swag.",
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "Fluoride",
        episodeDate: "November 21, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Leslie's new bold attitude as a lame duck costs Ben his job at Sweetums, Ron helps Chris build a crib, and the department tries to find the perfect dog that matches the personality for every Parks Department employee.",
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "The Cones of Dunshire",
        episodeDate: "November 21, 2013",
        episodeRanking: 8.3,
        episodeDescription:
          "Chris mediates one final skirmish between Leslie and councilman Jamm, Ben begins a new job as an accountant, and Ron lets Donna and Tom try to sell one of his cabins.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "Second Chunce",
        episodeDate: "January 9, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "Leslie has a new opportunity to run for city council just as her term is ending, Tom comes up with a new business venture after selling Rent-a-Swag, and Chris and Ann decide to find out the sex of their baby.",
      },
      {
        episodeSeason: 6,
        episodeNum: 11,
        episodeName: "New Beginnings",
        episodeDate: "January 16, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "Leslie battles with Tom on her first day back with the Parks Department, the gang pranks Ben on his first day as City Manager, and Chris and Ann shop for a ring after their engagement.",
      },
      {
        episodeSeason: 6,
        episodeNum: 12,
        episodeName: "Farmers Market",
        episodeDate: "January 23, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "A workplace dispute between Leslie and Ben interferes with their personal life, Andy gets a job playing at a child's birthday party, and Ann's complaints about Chris ruins the department's \"Whine and Cheese Club.\"",
      },
      {
        episodeSeason: 6,
        episodeNum: 13,
        episodeName: "Ann and Chris",
        episodeDate: "January 30, 2014",
        episodeRanking: 8.9,
        episodeDescription:
          "On Ann and Chris's last night in Pawnee, Leslie throws a grand farewell party and attempts to fulfill one last promise. Meanwhile, Tom, Ben, Ron, and Andy struggle to find the perfect going away gift for Chris.",
      },
      {
        episodeSeason: 6,
        episodeNum: 14,
        episodeName: "Anniversaries",
        episodeDate: "February 27, 2014",
        episodeRanking: 8,
        episodeDescription:
          "Ben tries to surprise Leslie with an anniversary gift; Tom and Andy help Leslie put a positive spin on the merger; April flexes her authority as Donna's boss.",
      },
      {
        episodeSeason: 6,
        episodeNum: 15,
        episodeName: "The Wall",
        episodeDate: "March 6, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "Leslie's efforts to take down the wall separating Eagleton and Pawnee yield unexpected results; Ben and Tom meet with possible sponsors for the concert; Ron finds a new hobby.",
      },
      {
        episodeSeason: 6,
        episodeNum: 16,
        episodeName: "New Slogan",
        episodeDate: "March 13, 2014",
        episodeRanking: 7.5,
        episodeDescription:
          "A pair of radio shock jocks threaten to ruin Leslie's town slogan contest, April and Donna help Tom find a restaurant site, and Andy discovers Ron's alter-ego, Duke Silver.",
      },
      {
        episodeSeason: 6,
        episodeNum: 17,
        episodeName: "Galentine's Day",
        episodeDate: "March 20, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "Leslie throws a hasty Galentine's Day in an attempt to find a replacement for Ann. Tom and Ben look to finalize a deal on tents for the Unity Concert, while Ron finds himself looking after Andy.",
      },
      {
        episodeSeason: 6,
        episodeNum: 18,
        episodeName: "Prom",
        episodeDate: "April 3, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "The Parks Department puts together the high school prom, and Ron tries to keep Leslie from bringing on a high school student as her summer intern.",
      },
      {
        episodeSeason: 6,
        episodeNum: 19,
        episodeName: "Flu Season 2",
        episodeDate: "April 10, 2014",
        episodeRanking: 8.5,
        episodeDescription:
          "Leslie makes a shocking personal discovery while she and Andy try to get a headline act for the Unity Concert. Meanwhile, Ben is upset about his parents selling the beach house, and Tom gets a sommelier for his bistro.",
      },
      {
        episodeSeason: 6,
        episodeNum: 20,
        episodeName: "One in 8,000",
        episodeDate: "April 17, 2014",
        episodeRanking: 8.3,
        episodeDescription:
          "Leslie and Ben run a charity auction to raise funds for the unity concert. April steps in to manage Andy's schedule, while Donna asks Ron for help with her ex-boyfriend.",
      },
      {
        episodeSeason: 6,
        episodeNum: 21,
        episodeName: "Moving Up: Part 1",
        episodeDate: "April 24, 2014",
        episodeRanking: 9,
        episodeDescription:
          "Leslie debates whether to take the job with the National Parks Service during a convention in San Francisco while Ben tries to get free wifi for Pawnee. Meanwhile in Pawnee, Tom decides to open his bistro early.",
      },
      {
        episodeSeason: 6,
        episodeNum: 22,
        episodeName: "Moving Up: Part 2",
        episodeDate: "April 24, 2014",
        episodeRanking: 9.4,
        episodeDescription:
          "During the Unity Concert, Leslie invites some coworkers to join her at her new job in Chicago, while Andy thinks about reuniting Mouse Rat. Meanwhile, Tom's Bistro prepares for the Unity Concert after-party.",
      },
      {
        episodeSeason: 7,
        episodeNum: 1,
        episodeName: "2017",
        episodeDate: "January 13, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "Leslie competes with a tech company for land, which she wants to turn into a national park.",
      },
      {
        episodeSeason: 7,
        episodeNum: 2,
        episodeName: "Ron & Jammy",
        episodeDate: "January 13, 2015",
        episodeRanking: 8.2,
        episodeDescription:
          "Leslie and Ron help councilman Jamm escape Tammy's evil clutches, April decides to pursue a new career, and Tom and Andy go to Chicago after Tom receives a message from one of his exes.",
      },
      {
        episodeSeason: 7,
        episodeNum: 3,
        episodeName: "William Henry Harrison",
        episodeDate: "January 20, 2015",
        episodeRanking: 7.4,
        episodeDescription:
          "Leslie tries to find a historical connection to enhance the National Parks Service's bid, while Ron's group counters with a celebrity investor.",
      },
      {
        episodeSeason: 7,
        episodeNum: 4,
        episodeName: "Leslie and Ron",
        episodeDate: "January 20, 2015",
        episodeRanking: 9.6,
        episodeDescription:
          "The gang locks Leslie and Ron in the old Parks Department office overnight and force them to settle their differences and end their feud.",
      },
      {
        episodeSeason: 7,
        episodeNum: 5,
        episodeName: "Gryzzlbox",
        episodeDate: "January 27, 2015",
        episodeRanking: 8.2,
        episodeDescription:
          'Leslie and Ben think Gryzzl is illegally data-mining Pawnee residents, Tom helps Andy try to get the rights to his "Johnny Karate" TV character, and April encourages an intern to quit the Parks Department.',
      },
      {
        episodeSeason: 7,
        episodeNum: 6,
        episodeName: "Save JJ's",
        episodeDate: "January 27, 2015",
        episodeRanking: 8.1,
        episodeDescription:
          "In hope of keeping JJ's diner open, Leslie organizes a rally; Tom has a surprise gift for Donna.",
      },
      {
        episodeSeason: 7,
        episodeNum: 7,
        episodeName: "Donna and Joe",
        episodeDate: "February 3, 2015",
        episodeRanking: 8.5,
        episodeDescription:
          "On the night before Donna and Joe's wedding, Ben receives an offer to run for Congress and Ron causes a problem for Tom's new relationship.",
      },
      {
        episodeSeason: 7,
        episodeNum: 8,
        episodeName: "Ms. Ludgate-Dwyer Goes to Washington",
        episodeDate: "February 3, 2015",
        episodeRanking: 8.1,
        episodeDescription:
          "During a business trip to Washington, April tells Leslie that she wants to quit her job. Back in Pawnee, Andy, Ben and Ron may have found her the perfect new job.",
      },
      {
        episodeSeason: 7,
        episodeNum: 9,
        episodeName: "Pie-Mary",
        episodeDate: "February 10, 2015",
        episodeRanking: 8.4,
        episodeDescription:
          "A traditional pie-baking competition causes problems for Ben's campaign, Ron goes on a scavenger hunt to find one of his house keys that April lost, and Gary loses his wedding ring in a drain outside the building.",
      },
      {
        episodeSeason: 7,
        episodeNum: 10,
        episodeName: "The Johnny Karate Super Awesome Musical Explosion Show",
        episodeDate: "February 10, 2015",
        episodeRanking: 8.5,
        episodeDescription:
          "The last episode of Andy's TV show brings his friends together.",
      },
      {
        episodeSeason: 7,
        episodeNum: 11,
        episodeName: "Two Funerals",
        episodeDate: "February 17, 2015",
        episodeRanking: 8.6,
        episodeDescription:
          "Ben has to appoint a new mayor after mayor Gunderson dies, Ron grieves over the death of his barber, and Leslie helps Tom set up a predictably over-the-top marriage proposal.",
      },
      {
        episodeSeason: 7,
        episodeNum: 12,
        episodeName: "One Last Ride",
        episodeDate: "February 24, 2015",
        episodeRanking: 9.6,
        episodeDescription:
          "As the team gathers one final time before they go their separate ways, we look 10 years into the future for each team member.",
      },
    ],
  },
  {
    showId: 12,
    showName: "Mr. Robot",
    showYear: 2015,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_0IgmSyTaXZh_coPo_LQiyAvgSmr-BiT-w&usqp=CAU",
    showGenre: "Crime, Drama, Thriller",
    showCast: "Rami Malek, Christian Slater",
    showSeasonsNum: 4,
    showDescription:
      "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
    slug: "mr-robot",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "eps1.0_hellofriends.mov",
        episodeDate: "June 24, 2015",
        episodeRanking: 9.3,
        episodeDescription:
          "A notorious hacker takes an interest in cyber security engineer and vigilante styled computer hacker Elliot, while an evil corporation is hacked.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "eps1.1_ones-and-zer0es.mpeg",
        episodeDate: "July 1, 2015",
        episodeRanking: 8.6,
        episodeDescription:
          "Elliot is hesitant about fsociety; Elliot is offered a new job; Elliot worries about Shayla's association with Fernando Vera; Ollie is given a CD outside of Allsafe; Mr. Robot makes Elliot talk about his father.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "eps1.2_d3bug.mkv",
        episodeDate: "July 8, 2015",
        episodeRanking: 8.3,
        episodeDescription:
          "Elliot tries to live a bug-free life, but is quickly drawn back in; Tyrell takes matters into his own hands when the CTO position becomes available; Ollie gets blackmailed; Gideon starts getting suspicious of the infected server.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "eps1.3_da3m0ns.mp4",
        episodeDate: "July 15, 2015",
        episodeRanking: 8.1,
        episodeDescription:
          "While dealing with his withdrawal, Elliot suffers a series of hallucinations about his life, while Shayla helps Angela take an unexpected trip.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "eps1.4_3xpl0its.wmv",
        episodeDate: "July 22, 2015",
        episodeRanking: 8.5,
        episodeDescription:
          "Fsociety attempts to penetrate Steel Mountain, the most secure data facility in America, while Angela makes an important decision.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "eps1.5_br4ve-trave1er.asf",
        episodeDate: "July 29, 2015",
        episodeRanking: 9.2,
        episodeDescription:
          "Elliot attempts to hack Vera out of jail in order to save someone he cares about; Tyrell's \"game\" gets crazy; and Angela digs deeper into her mother's death.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "eps1.6_v1ew-s0urce.flv",
        episodeDate: "August 5, 2015",
        episodeRanking: 8.5,
        episodeDescription:
          "Elliot misses Shayla. Angela makes a deal with Colby. Sharon Knowles has an encounter with Tyrell.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "eps1.7_wh1ter0se.m4v",
        episodeDate: "August 12, 2015",
        episodeRanking: 9.5,
        episodeDescription:
          "Allsafe is hacked and Elliot is meeting White Rose. Tyrell is interrogated by the police and Elliot remembers who he really is.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "eps1.8_m1rr0r1ng.qt",
        episodeDate: "August 19, 2015",
        episodeRanking: 9.3,
        episodeDescription:
          "Elliot has to face the challenges of his past, and become accustomed to his new found family.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "eps1.9_zer0-day.avi",
        episodeDate: "September 2, 2015",
        episodeRanking: 8.9,
        episodeDescription:
          "Another huge discovery for Elliot surrounding his family and fsociety, Tyrell's world starts to close around him and Angela has a rather unexpected visitor.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "eps2.0_unm4sk-pt1.tc",
        episodeDate: "July 10, 2016",
        episodeRanking: 8.3,
        episodeDescription:
          "Elliot keeps seeing his psychologist, Krista. The new character Susan Jacobs is having trouble with technology. Gideon pays a visit to Elliot complaining he's been targeted for a crime Elliot might have committed. Fsociety are back in action, asking E Corp for 5.9 million dollars in 24 hours.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "eps2.0_unm4sk-pt2.tc",
        episodeDate: "July 13, 2016",
        episodeRanking: 8.3,
        episodeDescription:
          "Ray takes an interest in Elliot, who continues to clash with Mr. Robot; Angela decides to stay at E Corp, believing she has value there; Joanna trysts and receives a mysterious gift; Scott follows fsociety's demands; Gideon continues cooperating with the FBI, but his luck continues to worsen; Price asks for more bailout money.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "eps2.1_k3rnel-pan1c.ksd",
        episodeDate: "July 20, 2016",
        episodeRanking: 8.5,
        episodeDescription:
          "Elliot vows to beat Mr. Robot; Angela gets a glimpse behind the curtain at E Corp; and fsociety stirs up trouble.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "eps2.2_init_1.asec",
        episodeDate: "July 27, 2016",
        episodeRanking: 8.4,
        episodeDescription:
          "Elliot vows to beat Mr. Robot; Angela gets a glimpse behind the curtain at E Corp; and fsociety stirs up trouble.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "eps2.3_logic-b0mb.hc",
        episodeDate: "August 3, 2016",
        episodeRanking: 8.9,
        episodeDescription:
          "Elliot can't quit the game; Dom and the FBI head to China to investigate 5/9; Joanna is haunted; and Darlene calls on Angela for help.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "eps2.4_m4ster-s1ave.aes",
        episodeDate: "August 10, 2016",
        episodeRanking: 9.1,
        episodeDescription:
          "Mr. Robot has an original way to show Elliot that he can be useful. Darlene and Angela take a shot at their plan.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "eps2.5_h4ndshake.sme",
        episodeDate: "August 17, 2016",
        episodeRanking: 9.3,
        episodeDescription:
          "Mr. Robot and Elliot try to keep the peace. Fsociety releases a video honoring Uncle Sam. Darlene acts upon an old desire.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "eps2.6_succ3ss0r.p12",
        episodeDate: "August 24, 2016",
        episodeRanking: 8.6,
        episodeDescription:
          "The latest fsociety leak has Dom trying her best to spin the case in the FBI's favor; Angela defends her career choices; Darlene makes it known that her circle of trust is shrinking.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "eps2.7_init_5.fve",
        episodeDate: "August 31, 2016",
        episodeRanking: 8.6,
        episodeDescription:
          "Angela wants more from Evil Corp; Dark Army's allegiance is in question; Elliot and Darlene seek answers.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "eps2.8_h1dden-pr0cess.axx",
        episodeDate: "September 7, 2016",
        episodeRanking: 9.3,
        episodeDescription:
          "Elliot wonders if Mr. Robot has been lying to him; Darlene attempts to do the right thing; Dom and the FBI get closer.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "eps2.9_pyth0n-pt1.p7z",
        episodeDate: "September 14, 2016",
        episodeRanking: 8.6,
        episodeDescription:
          "Angela makes an acquaintance; Dom begins seeing the scope of things; an old friend reveals everything to Elliot.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "eps2.9_pyth0n-pt2.p7z",
        episodeDate: "September 21, 2016",
        episodeRanking: 9,
        episodeDescription:
          "Angela makes an unexpected acquaintance; Darlene realizes she's in deep; and an old friend reveals all to Elliot.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "eps3.0_power-saver-mode.h",
        episodeDate: "October 11, 2017",
        episodeRanking: 8.8,
        episodeDescription:
          "Elliot realizes his mission, and needs help from Angela; Darlene worries about them coming out clean",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "eps3.1_undo.gz",
        episodeDate: "October 18, 2017",
        episodeRanking: 9.2,
        episodeDescription:
          "Elliot becomes encouraged trying to undo five/nine; Darlene gets stuck between a rock and a hard place; Mr. Robot sparks a panic.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "eps3.2_legacy.so",
        episodeDate: "October 25, 2017",
        episodeRanking: 8.8,
        episodeDescription: "The former interim CTO of E Corp returns.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "eps3.3_m3tadata.par2",
        episodeDate: "November 1, 2017",
        episodeRanking: 8.4,
        episodeDescription:
          "Dom has a close call; Elliot chases himself with Darlene on the lookout.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "eps3.4_runtime-err0r.r00",
        episodeDate: "November 8, 2017",
        episodeRanking: 9.7,
        episodeDescription:
          "Elliot tries to piece everything together and stop Stage 2 as chaos quickly unfolds at E Corp; Angela tries to do a job intended for Elliot while avoiding imminent threats; Darlene brings Elliot up to speed and tells him the truth.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "eps3.5_kill-pr0cess.inc",
        episodeDate: "November 15, 2017",
        episodeRanking: 9.7,
        episodeDescription:
          "Elliot faces off with Mr. Robot; Dom gets tired of the red tape; Tyrell has a new plan.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "eps3.6_fredrick+tanya.chk",
        episodeDate: "November 22, 2017",
        episodeRanking: 9.1,
        episodeDescription:
          "Mr. Robot wants answers; the FBI closes in; Angela hits the rewind button.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "eps3.7_dont-delete-me.ko",
        episodeDate: "November 29, 2017",
        episodeRanking: 9.2,
        episodeDescription:
          "Elliot nearly loses all hope after the recent tragedy, but ends up having to take Trenton's brother to the movies; Elliot wants to pay his respects to Trenton and Mobley; Elliot receives an important email.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "eps3.8_stage3.torrent",
        episodeDate: "December 6, 2017",
        episodeRanking: 8.7,
        episodeDescription:
          "Elliot trolls a former ally; Mr Robot leaves cryptic text; Tyrell gets new commands.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "shutdown -r",
        episodeDate: "December 13, 2017",
        episodeRanking: 9.6,
        episodeDescription:
          "Elliot tries to save Darlene, but things don't go as planned; Mr Robot must decide whether to step up or step back.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "401 Unauthorized",
        episodeDate: "October 6, 2019",
        episodeRanking: 9.4,
        episodeDescription:
          "During the Christmas season, Elliot and Mr. Robot make their return; Darlene deals with real trouble; Tyrell is bored; Dom becomes paranoid.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "402 Payment Required",
        episodeDate: "October 13, 2019",
        episodeRanking: 8.9,
        episodeDescription:
          "Elliot and Darlene reconnect; Price gives Elliot some background info and plays his hand; Dom completes the interview, but her lack of confidence raises suspicion with Janice; Some unexpected threats become known to Elliot and Mr. Robot.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "403 Forbidden",
        episodeDate: "October 20, 2019",
        episodeRanking: 8.8,
        episodeDescription:
          "Elliot's newest hack helps him share his emotions; Whiterose puts the pieces in motion; Elliot and Darlene have a disagreement; Vera plans his next move; In flashbacks, some key moments in Whiterose's life are revealed.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "404 Not Found",
        episodeDate: "October 27, 2019",
        episodeRanking: 8.9,
        episodeDescription:
          "Tyrell, Elliot, and Mr. Robot go on a perilous journey through the woods; Darlene deals with her feelings when she has to take a drunk Santa home; Dom is aroused and has a nightmare.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "405 Method Not Allowed",
        episodeDate: "November 3, 2019",
        episodeRanking: 9.7,
        episodeDescription:
          "Dom has an unpleasant Christmas. Darlene and Elliot perform a daring infiltration. Krista prepares for a date.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "406 Not Acceptable",
        episodeDate: "November 10, 2019",
        episodeRanking: 9.2,
        episodeDescription:
          "Elliot blackmails Olivia to make an important phone call; Dom struggles when she's ordered to do something distressing; Vera gets information out of Krista; Whiterose wants Elliot brought directly to her.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "407 Proxy Authentication Required",
        episodeDate: "November 17, 2019",
        episodeRanking: 9.9,
        episodeDescription:
          "Vera holds Krista hostage as he tries to force Elliot into joining him by understanding Mr. Robot. Elliot realizes a shocking truth.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "408 Request Timeout",
        episodeDate: "November 24, 2019",
        episodeRanking: 9.3,
        episodeDescription:
          "Janice tries to get Elliot's location from Dom and Darlene. Elliot goes to the Queens Museum.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "409 Conflict",
        episodeDate: "December 1, 2019",
        episodeRanking: 9.8,
        episodeDescription:
          "Mr. Robot and Darlene attempt to take down the Deus group as Elliot remains unstable; Price faces off with Whiterose; Whiterose tries to manipulate Elliot; Mr. Robot struggles to figure out how to help Elliot find himself.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "410 Gone",
        episodeDate: "December 8, 2019",
        episodeRanking: 8.3,
        episodeDescription:
          "Darlene and Dom hit the road. Elliot is not done yet.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "eXit",
        episodeDate: "December 15, 2019",
        episodeRanking: 9.5,
        episodeDescription:
          "Enough is enough. Elliot goes to the Washington Township Power Plant.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "whoami",
        episodeDate: "December 22, 2019",
        episodeRanking: 9.6,
        episodeDescription:
          "Elliot wakes up in an abandoned lot following the explosion at the Washington Township plant, which is no longer there.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "Hello, Elliot",
        episodeDate: "December 22, 2019",
        episodeRanking: 9.8,
        episodeDescription:
          "Elliot gets to Coney Island, and the delusion begins to slip. Mr. Robot reveals the truth.",
      },
    ],
  },
  {
    showId: 13,
    showName: "Sherlock",
    showYear: 2010,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wzYGk5Z93viaFpHNAQGokYk_VcaWMfLK6g&usqp=CAU",
    showGenre: "Crime, Drama, Mystery",
    showCast: "Benedict Cumberbatch, Martin Freeman",
    showSeasonsNum: 4,
    showDescription:
      "The quirky spin on Conan Doyle's iconic sleuth pitches him as a 'high-functioning sociopath' in modern-day London. Assisting him in his investigations: Afghanistan War vet John Watson, who's introduced to Holmes by a mutual acquaintance.",
    slug: "sherlock",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "A Study in Pink",
        episodeDate: "October 24, 2010",
        episodeRanking: 8.9,
        episodeDescription:
          "War vet Dr. John Watson returns to London in need of a place to stay. He meets Sherlock Holmes, a consulting detective, and the two soon find themselves digging into a string of serial 'suicides'.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "The Blind Banker",
        episodeDate: "October 31, 2010",
        episodeRanking: 7.9,
        episodeDescription:
          "Mysterious symbols and murders are showing up all over London, leading Sherlock and John to a secret Chinese crime syndicate called Black Lotus.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "The Great Game",
        episodeDate: "November 7, 2010",
        episodeRanking: 9.0,
        episodeDescription:
          "Mycroft needs Sherlock's help, but a remorseless criminal mastermind puts Sherlock on a distracting crime-solving spree via a series of hostage human bombs through which he speaks.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "A Scandal in Belgravia",
        episodeDate: "May 6, 2012",
        episodeRanking: 9.4,
        episodeDescription:
          "Sherlock must confiscate something of importance from a mysterious woman named Irene Adler.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "The Hounds of Baskerville",
        episodeDate: "May 13, 2012",
        episodeRanking: 8.3,
        episodeDescription:
          "Sherlock and John investigate the ghosts of a young man who has been seeing monstrous hounds out in the woods where his father died",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "The Reichenbach Fall",
        episodeDate: "May 20, 2012",
        episodeRanking: 9.6,
        episodeDescription:
          "Jim Moriarty hatches a mad scheme to turn the whole city against Sherlock.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "The Empty Hearse",
        episodeDate: "January 19, 2014",
        episodeRanking: 8.8,
        episodeDescription:
          "Mycroft calls Sherlock back to London to investigate an underground terrorist organization.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "The Sign of Three",
        episodeDate: "January 26, 2014",
        episodeRanking: 8.9,
        episodeDescription:
          "Sherlock tries to give the perfect best man speech at John's wedding when he suddenly realizes a murder is about to take place.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "His Last Vow",
        episodeDate: "February 2, 2014",
        episodeRanking: 9.2,
        episodeDescription:
          "Sherlock goes up against Charles Augustus Magnussen, media tycoon and a notorious blackmailer.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "The Six Thatchers",
        episodeDate: "January 1, 2017",
        episodeRanking: 7.6,
        episodeDescription:
          "Sherlock takes on the case of finding out who is going around and smashing six unique head statues of late Prime Minister Margaret Thatcher.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "The Lying Detective",
        episodeDate: "January 8, 2017",
        episodeRanking: 9.1,
        episodeDescription:
          "Sherlock goes up against the powerful and seemingly unassailable Culverton Smith - a man with a very dark secret indeed.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "The Final Problem",
        episodeDate: "January 15, 2017",
        episodeRanking: 8.2,
        episodeDescription:
          "A dark secret in the Holmes family rears its head with a vengeance, putting Sherlock and friends through a series of sick, manipulative psychological and potentially fatal games.",
      },
    ],
  },
  {
    showId: 14,
    showName: "Community",
    showYear: 2009,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qmnZ_jxXvvv_1tqkpK94cGD-OHPqxY39lw&usqp=CAU",
    showGenre: "Comedy",
    showCast: "Joel McHale, Danny Pudi",
    showSeasonsNum: 6,
    showDescription:
      "A suspended lawyer is forced to enroll in a community college with an eccentric staff and student body.",
    slug: "community",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Pilot",
        episodeDate: "September 17, 2009",
        episodeRanking: 7.7,
        episodeDescription:
          "An ex-lawyer is forced to return to community college to get a degree. However, he tries to use the skills he learned as a lawyer to get the answers to all his tests and pick up on a sexy woman in his Spanish class.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Spanish 101",
        episodeDate: "September 24, 2009",
        episodeRanking: 7.8,
        episodeDescription:
          "Jeff takes steps to ensure that Britta will be his partner in Spanish class, but winds up with Pierce instead.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Introduction to Film",
        episodeDate: "October 1, 2009",
        episodeRanking: 8.2,
        episodeDescription:
          'Britta comes between Abed and his father when she signs him up for a film class, and Jeff risks failing a class unless he "seizes the day."',
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Social Psychology",
        episodeDate: "October 8, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "Jeff and Shirley bond by making fun of Britta's new hippie boyfriend, which doesn't go well for any involved. Meanwhile, Troy and Abed become pawns in Annie's psychology experiment.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Advanced Criminal Law",
        episodeDate: "October 15, 2009",
        episodeRanking: 7.8,
        episodeDescription:
          "Se√±or Chang is on the hunt for a cheater and threatens to fail the entire class if the culprit doesn't come forward. When someone confesses, Jeff comes to their defense. Meanwhile, Annie recruits Pierce to write the new school song.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Football, Feminism and You",
        episodeDate: "October 22, 2009",
        episodeRanking: 7.7,
        episodeDescription:
          "Jeff talks Troy into playing for the college's football team, sparking Annie's anger. Pierce helps the dean come up with a new mascot, and Britta tries to become Shirley's bathroom friend.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "Introduction to Statistics",
        episodeDate: "October 29, 2009",
        episodeRanking: 8.7,
        episodeDescription:
          "Will Jeff blow off Annie's Halloween party and sell out his other classmates in order to get a chance to score with a sexy professor?",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "Home Economics",
        episodeDate: "November 5, 2009",
        episodeRanking: 7.9,
        episodeDescription:
          "When Jeff loses his home and his car, he is forced to move into Abed's dorm room. Troy has a big date, but why is a jealous Annie trying to help? Meanwhile, Pierce becomes the keyboardist for Vaughn's band.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "Debate 109",
        episodeDate: "November 12, 2009",
        episodeRanking: 8.8,
        episodeDescription:
          "Jeff reluctantly agrees to be Annie's debate partner, Britta humors Pierce by letting him try hypnotherapy on her to get her to stop smoking, and the gang begins to think that Abed's films may predict their future.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "Environmental Science",
        episodeDate: "November 19, 2009",
        episodeRanking: 8.2,
        episodeDescription:
          "Jeff hangs out with Senor Chang to get out of an essay, angering the rest of the group. Meanwhile, Abed and Troy search for their missing lab mouse, and Pierce helps Shirley out with a presentation.",
      },
      {
        episodeSeason: 1,
        episodeNum: 11,
        episodeName: "Politics of Human Sexuality",
        episodeDate: "December 3, 2009",
        episodeRanking: 7.8,
        episodeDescription:
          'Annie helps the dean put on an "STD Fair," but doesn\'t want to perform an embarrassing demonstration. Meanwhile Jeff finds a companion for a double date with Pierce, and Troy finds out that Abed is a better athlete than him.',
      },
      {
        episodeSeason: 1,
        episodeNum: 12,
        episodeName: "Comparative Religion",
        episodeDate: "December 10, 2009",
        episodeRanking: 8.4,
        episodeDescription:
          "Shirley throws a Christmas party for the gang and much to her surprise learns her classmates come from various religious backgrounds. Meanwhile, Jeff is challenged by the school bully and faces the reality that he may fail Spanish 101.",
      },
      {
        episodeSeason: 1,
        episodeNum: 13,
        episodeName: "Investigative Journalism",
        episodeDate: "January 14, 2010",
        episodeRanking: 8,
        episodeDescription:
          "The gang decides not to let an obnoxious student from their Spanish class into the study group. The dean appoints Jeff as editor of the student paper, where Annie is working on a story that could expose the dean as a racist.",
      },
      {
        episodeSeason: 1,
        episodeNum: 14,
        episodeName: "Interpretive Dance",
        episodeDate: "January 21, 2010",
        episodeRanking: 7.9,
        episodeDescription:
          "Jeff runs in to problems when the study group and the dean discover that he's seeing a professor, while Troy and Britta discover each other's secret that they are both taking dance classes.",
      },
      {
        episodeSeason: 1,
        episodeNum: 15,
        episodeName: "Romantic Expressionism",
        episodeDate: "February 4, 2010",
        episodeRanking: 8,
        episodeDescription:
          "When Annie starts hanging out with Britta's ex-boyfriend Vaughn, Britta and Jeff vow to protect her. Meanwhile, Pierce feels left out at Troy and Abed's movie night.",
      },
      {
        episodeSeason: 1,
        episodeNum: 16,
        episodeName: "Communication Studies",
        episodeDate: "February 11, 2010",
        episodeRanking: 8.4,
        episodeDescription:
          "Jeff sets out to fix his relationship with Britta after things get awkward with a drunken phone call. Meanwhile, Annie and Shirley make plans to humiliate Se√±or Chang in order to defend Troy and Pierce's dignity.",
      },
      {
        episodeSeason: 1,
        episodeNum: 17,
        episodeName: "Physical Education",
        episodeDate: "March 4, 2010",
        episodeRanking: 9,
        episodeDescription:
          "Jeff refuses to participate in a pool class because the teacher forces him to play in gym shorts, and the study group discovers a white version of Abed at the college.",
      },
      {
        episodeSeason: 1,
        episodeNum: 18,
        episodeName: "Basic Genealogy",
        episodeDate: "March 11, 2010",
        episodeRanking: 8,
        episodeDescription:
          "It's Family Day at Greendale. Pierce tries to build a relationship with his stepdaughter, but she has eyes for Jeff instead. Britta gets in trouble with Troy's Nana, and Shirley's kids cause problems for Abed's father.",
      },
      {
        episodeSeason: 1,
        episodeNum: 19,
        episodeName: "Beginner Pottery",
        episodeDate: "March 18, 2010",
        episodeRanking: 8.4,
        episodeDescription:
          "Jeff signs up for a pottery class for an easy credit, but winds up failing the class when his jealousy of another student gets the best of him. Meanwhile, Pierce's incompetence could ruin his group's grade in boating class.",
      },
      {
        episodeSeason: 1,
        episodeNum: 20,
        episodeName: "The Science of Illusion",
        episodeDate: "March 25, 2010",
        episodeRanking: 8.4,
        episodeDescription:
          "Britta's April Fool's Day prank has disastrous consequences, but she refuses to confess that she was responsible. Annie and Shirley temporarily work as security guards, but both of them want to be the \"bad cop.\"",
      },
      {
        episodeSeason: 1,
        episodeNum: 21,
        episodeName: "Contemporary American Poultry",
        episodeDate: "April 22, 2010",
        episodeRanking: 9.3,
        episodeDescription:
          "Jeff's plan to get chicken fingers from the school cafeteria for the study group quickly evolves into a mafia movie-style endeavor with Abed calling all the shots.",
      },
      {
        episodeSeason: 1,
        episodeNum: 22,
        episodeName: "The Art of Discourse",
        episodeDate: "April 29, 2010",
        episodeRanking: 7.9,
        episodeDescription:
          "Shirley gets Pierce kicked out the study group, Jeff and Britta plot revenge on a group of high schoolers who make fun of them for attending community college, and Troy helps Abed accomplish some of his movie-clich√©d social goals.",
      },
      {
        episodeSeason: 1,
        episodeNum: 23,
        episodeName: "Modern Warfare",
        episodeDate: "May 6, 2010",
        episodeRanking: 9.8,
        episodeDescription:
          "Greendale Community College is transformed into an apocalyptic war zone when the dean promises the winner of a paintball competition priority registration, and it could fan the flames of sexual tension between Jeff and Britta.",
      },
      {
        episodeSeason: 1,
        episodeNum: 24,
        episodeName: "English as a Second Language",
        episodeDate: "May 13, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          "Annie uses inside information about Se√±or Chang to get him fired so that the study group will be forced to stay together and take Spanish again. Meanwhile, Troy discovers that he has a natural skill for plumbing.",
      },
      {
        episodeSeason: 1,
        episodeNum: 25,
        episodeName: "Pascal's Triangle Revisited",
        episodeDate: "May 20, 2010",
        episodeRanking: 8.5,
        episodeDescription:
          "Britta and Professor Slater fight for the affection of Jeff. Meanwhile, Troy is confused when Abed doesn't invite him to move into his dorm room.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Anthropology 101",
        episodeDate: "September 23, 2010",
        episodeRanking: 8.7,
        episodeDescription:
          "Jeff and Britta engage in a dangerous game of relationship one-upsmanship in response to Britta's embarrassing moment at the end of the previous school year, which could cause the entire study group to fall apart.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Accounting for Lawyers",
        episodeDate: "September 30, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          "Jeff blows off the study group and their break-dancing competition to hang out with his old co-workers at the law firm, but Annie tries to prove that one of them is the person who turned him in and got him fired.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "The Psychology of Letting Go",
        episodeDate: "October 7, 2010",
        episodeRanking: 8,
        episodeDescription:
          "Pierce's religion convinces him that the spirit of his dead mother is captured in a cheap lava lamp, Jeff has a crisis of faith when he learns he has high cholesterol, and Britta and Annie try to raise money for the oil spill.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Basic Rocket Science",
        episodeDate: "October 14, 2010",
        episodeRanking: 8.7,
        episodeDescription:
          "Everyone in the study group except Abed is stuck in a crude 1980s space simulator as it is towed off campus, and Abed leads the team given the difficult assignment of bringing them home.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Messianic Myths and Ancient Peoples",
        episodeDate: "October 21, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          'Shirley asks Abed to make a film about Jesus, but he quickly angers Shirley by turning it into a self-indulgent mess. Meanwhile, Pierce begins blowing off the study group to hang out with the "hipsters."',
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Epidemiology",
        episodeDate: "October 28, 2010",
        episodeRanking: 9.3,
        episodeDescription:
          "The study group is left to fend for themselves by Dean Pelton during a rabies outbreak due to tainted food at Greendale's Halloween party.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Aerodynamics of Gender",
        episodeDate: "November 4, 2010",
        episodeRanking: 8.4,
        episodeDescription:
          "Britta, Annie and Shirley discover that Abed is skilled at insulting the mean girls, so they use him to their advantage. Meanwhile, Troy and Jeff find a secret garden with a trampoline, which they use for relaxation.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Cooperative Calligraphy",
        episodeDate: "November 11, 2010",
        episodeRanking: 9.1,
        episodeDescription:
          "Chaos and mistrust tear the study group apart as they try to figure out who stole Annie's pen, causing them to miss the Greendale Puppy Parade.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "Conspiracy Theories and Interior Design",
        episodeDate: "November 18, 2010",
        episodeRanking: 9.4,
        episodeDescription:
          "Dean Pelton tries to bust Jeff for a phony night school credit, which only unveils a series of conspiracies, plots, and double-crosses between Jeff, Annie, and the dean.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Mixology Certification",
        episodeDate: "December 2, 2010",
        episodeRanking: 8.4,
        episodeDescription:
          'The study group takes Troy out to a bar to celebrate his 21st birthday. While there, Annie assumes a new identity, Abed is propositioned by a man, one of Shirley\'s secrets is discovered, and Britta and Jeff fight over the "cool" bars.',
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "Abed's Uncontrollable Christmas",
        episodeDate: "December 9, 2010",
        episodeRanking: 8.7,
        episodeDescription:
          "When Abed wakes up to discover that everything is in stop motion animation, Professor Duncan and the study group help him try to discover the true meaning of Christmas.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "Asian Population Studies",
        episodeDate: "January 20, 2011",
        episodeRanking: 8,
        episodeDescription:
          "Annie lobbies for her new crush, who is also Jeff's rival, to join the study group, but a jealous Jeff counters with Chang. Meanwhile, Shirley announces that she's pregnant, but she doesn't know that it could be Chang's.",
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "Celebrity Pharmacology",
        episodeDate: "January 27, 2011",
        episodeRanking: 7.9,
        episodeDescription:
          "Pierce bribes Annie into getting him a bigger role in her anti-drug play, Jeff gets in trouble when he sends a lewd text message from Britta's phone, and Shirley rejects Chang's attempts to be friendly to her.",
      },
      {
        episodeSeason: 2,
        episodeNum: 14,
        episodeName: "Advanced Dungeons & Dragons",
        episodeDate: "February 3, 2011",
        episodeRanking: 9.5,
        episodeDescription:
          "The study group plays Dungeons & Dragons with another classmate to improve his spirits, but Pierce's jealousies cause their good intentions to backfire.",
      },
      {
        episodeSeason: 2,
        episodeNum: 15,
        episodeName: "Early 21st Century Romanticism",
        episodeDate: "February 10, 2011",
        episodeRanking: 8,
        episodeDescription:
          "Jeff hangs out with Professor Duncan after a fight with the study group, but Chang tags along and starts a party. Meanwhile, Abed and Troy fight for a librarian's affection, and Britta goes to a dance with a girl she thinks is a lesbian.",
      },
      {
        episodeSeason: 2,
        episodeNum: 16,
        episodeName: "Intermediate Documentary Filmmaking",
        episodeDate: "February 17, 2011",
        episodeRanking: 8.8,
        episodeDescription:
          "Pierce pretends to be dying so that he can bequeath a series of cryptic and sometimes mean-spirited gifts to his study partners, and Abed decides to shoot a documentary film of the situation.",
      },
      {
        episodeSeason: 2,
        episodeNum: 17,
        episodeName: "Intro to Political Science",
        episodeDate: "February 24, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Anticipating a visit from the vice president, dean Pelton holds an election for student body president. An idealistic Annie decides to run, but Jeff decides to run against her to spite her and show how stupid politics can be.",
      },
      {
        episodeSeason: 2,
        episodeNum: 18,
        episodeName: "Custody Law and Eastern European Diplomacy",
        episodeDate: "March 17, 2011",
        episodeRanking: 7.4,
        episodeDescription:
          "Jeff uses Shirley's parental rights waiver against Chang as a way to get Chang out of the apartment, while Britta is afraid to tell Abed and Troy that their new friend is a war criminal.",
      },
      {
        episodeSeason: 2,
        episodeNum: 19,
        episodeName: "Critical Film Studies",
        episodeDate: "March 24, 2011",
        episodeRanking: 9,
        episodeDescription:
          "Jeff's \"Pulp Fiction\"-themed surprise party for Abed is spoiled when Abed tells him over dinner that he's done with pop culture.",
      },
      {
        episodeSeason: 2,
        episodeNum: 20,
        episodeName: "Competitive Wine Tasting",
        episodeDate: "April 14, 2011",
        episodeRanking: 7.5,
        episodeDescription:
          "Jeff suspects something isn't quite right when an attractive classmate gets engaged to marry Pierce .",
      },
      {
        episodeSeason: 2,
        episodeNum: 21,
        episodeName: "Paradigms of Human Memory",
        episodeDate: "April 21, 2011",
        episodeRanking: 9.1,
        episodeDescription:
          "While working on the final diorama for their anthropology class, Chang discovers the cache of items stolen by Troy's monkey.",
      },
      {
        episodeSeason: 2,
        episodeNum: 22,
        episodeName: "Applied Anthropology and Culinary Arts",
        episodeDate: "April 28, 2011",
        episodeRanking: 8,
        episodeDescription:
          "As the semester draws to a close, the anthropology class final is disrupted when Shirley goes into labor one month ahead of schedule.",
      },
      {
        episodeSeason: 2,
        episodeNum: 23,
        episodeName: "A Fistful of Paintballs",
        episodeDate: "May 5, 2011",
        episodeRanking: 9.7,
        episodeDescription:
          'In a "spaghetti western" parody, Pierce tries to get revenge on the rest of the study group during this year\'s paintball tournament.',
      },
      {
        episodeSeason: 2,
        episodeNum: 24,
        episodeName: "For a Few Paintballs More",
        episodeDate: "May 12, 2011",
        episodeRanking: 9.6,
        episodeDescription:
          "When the study group learns that there's a sinister plot behind the paintball tournament, they unite the remaining players to defeat the enemy.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Biology 101",
        episodeDate: "September 22, 2011",
        episodeRanking: 8,
        episodeDescription:
          "Jeff's plan to keep Pierce out of the Study Group backfires when he gets kicked out instead, Abed copes with bad news about Cougar Town, and Dean Pelton's authority is challenged by another Greendale dean.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Geography of Global Conflict",
        episodeDate: "September 29, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "When another over-achieving student steals Annie's idea for a Model U.N. club, the Study Group comes to her rescue. Meanwhile, new security cop Chang tries to stop Britta's last-ditch efforts to create a campus disturbance.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Competitive Ecology",
        episodeDate: "October 6, 2011",
        episodeRanking: 8,
        episodeDescription:
          'Chaos ensues when the Study Group tries to divide itself up into biology lab partners, and Chang appoints himself security "detective," and tries to solve a mystery that is only in his head.',
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Remedial Chaos Theory",
        episodeDate: "October 13, 2011",
        episodeRanking: 9.8,
        episodeDescription:
          "At Abed and Troy's housewarming party, Jeff decides to let the decision on who gets the pizza rest on the roll of the dice, leaving Abed to contemplate six alternate realities.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Horror Fiction in Seven Spooky Steps",
        episodeDate: "October 27, 2011",
        episodeRanking: 8.8,
        episodeDescription:
          "During her pre-Halloween party, Britta gets everyone to tell a spooky story so that she can find out which member of the study group scored out as a psychopath on their psychology profiles.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Advanced Gay",
        episodeDate: "November 3, 2011",
        episodeRanking: 7.6,
        episodeDescription:
          "Pierce gets a visit from his bigoted father after his wipes become a hit in the gay community, and the dean of the School of Refrigeration recruits Troy to become his student.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "Studies in Modern Movement",
        episodeDate: "November 10, 2011",
        episodeRanking: 8.6,
        episodeDescription:
          "The study group helps Annie move in with Troy and Abed - except for Jeff, who lies to get out of it but is busted by dean Pelton.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Documentary Filmmaking: Redux",
        episodeDate: "November 17, 2011",
        episodeRanking: 9.1,
        episodeDescription:
          "The dean is given the task of making a Greendale commercial, but the shoot soon goes over budget and spirals out of control - with Abed documenting the experience.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "Foosball and Nocturnal Vigilantism",
        episodeDate: "December 1, 2011",
        episodeRanking: 8.4,
        episodeDescription:
          "Shirley teaches Jeff foosball so that he can beat a team of cocky, obnoxious Germans, while Annie creates an overly elaborate ruse so that she doesn't have to tell Abed that she broke his special edition The Dark Knight DVD.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "Regional Holiday Music",
        episodeDate: "December 8, 2011",
        episodeRanking: 8.6,
        episodeDescription:
          'A holiday-themed parody of "Glee" in which Abed tries to persuade each member of the Study Group to join the glee club so that they can qualify for regionals.',
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "Urban Matrimony and the Sandwich Arts",
        episodeDate: "March 15, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          'Pierce comes to Shirley with a business proposal just as she\'s about to get married to Andre. Meanwhile, Troy and Abed try to act "normal" for the wedding, Britta discovers a new skill, and Jeff struggles with his toast.',
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "Contemporary Impressionists",
        episodeDate: "March 22, 2012",
        episodeRanking: 8,
        episodeDescription:
          "The members of the Study Group take jobs as celebrity impersonators to pay off Abed's debt to a celebrity impersonator business, but can Jeff be Ryan Seacrest without his fragile ego spiral out of control?",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "Digital Exploration of Interior Design",
        episodeDate: "March 29, 2012",
        episodeRanking: 8.2,
        episodeDescription:
          "When Britta falls for the human embodiment of the Subway sandwich chain, Shirley and Pierce hope to use the situation to their advantage.",
      },
      {
        episodeSeason: 3,
        episodeNum: 14,
        episodeName: "Pillows and Blankets",
        episodeDate: "April 5, 2012",
        episodeRanking: 9.3,
        episodeDescription:
          "The students of Greendale are drawn into an epic pillow fight as Troy and Abed start a war that threatens to destroy their unique friendship.",
      },
      {
        episodeSeason: 3,
        episodeNum: 15,
        episodeName: "Origins of Vampire Mythology",
        episodeDate: "April 12, 2012",
        episodeRanking: 8.1,
        episodeDescription:
          "While Britta struggles to stay away from her old carny boyfriend, Jeff becomes obsessed with their relationship. Meanwhile, the dean stops by Troy and Abed's to recruit Troy for the dean of the school of refrigeration.",
      },
      {
        episodeSeason: 3,
        episodeNum: 16,
        episodeName: "Virtual Systems Analysis",
        episodeDate: "April 19, 2012",
        episodeRanking: 8.6,
        episodeDescription:
          "After sending Troy and Britta on a date, Annie volunteers to keep Abed company in his Dreamatorium.",
      },
      {
        episodeSeason: 3,
        episodeNum: 17,
        episodeName: "Basic Lupine Urology",
        episodeDate: "April 26, 2012",
        episodeRanking: 9.5,
        episodeDescription:
          "When the yam the study group was growing for biology class is killed, Troy and Abed are on the case.",
      },
      {
        episodeSeason: 3,
        episodeNum: 18,
        episodeName: "Course Listing Unavailable",
        episodeDate: "May 3, 2012",
        episodeRanking: 8.2,
        episodeDescription:
          "A fellow student has died and Biology class has been canceled, meaning everyone has to retake it in summer school. When the memorial service turns into a riot, Chang is granted special authoritative powers.",
      },
      {
        episodeSeason: 3,
        episodeNum: 19,
        episodeName: "Curriculum Unavailable",
        episodeDate: "May 10, 2012",
        episodeRanking: 9.2,
        episodeDescription:
          "When Abed claims the Dean has been replaced by a doppelg√§nger he is forced to take psychiatric treatment. Naturally, the rest of the study group joins him at his session with Dr. Heidi.",
      },
      {
        episodeSeason: 3,
        episodeNum: 20,
        episodeName: "Digital Estate Planning",
        episodeDate: "May 17, 2012",
        episodeRanking: 9.5,
        episodeDescription:
          "The study group must help Pierce win a video game so that he can claim his inheritance from his father, but somebody may be out to ensure that he loses.",
      },
      {
        episodeSeason: 3,
        episodeNum: 21,
        episodeName: "The First Chang Dynasty",
        episodeDate: "May 17, 2012",
        episodeRanking: 9.1,
        episodeDescription:
          'The Study Group, now known as the "Greendale Seven," launches a plot to rescue the real dean Pelton and end Chang\'s reign of terror over Greendale.',
      },
      {
        episodeSeason: 3,
        episodeNum: 22,
        episodeName: "Introduction to Finality",
        episodeDate: "May 17, 2012",
        episodeRanking: 8.8,
        episodeDescription:
          "Jeff faces an old nemesis as Shirley and Pierce square off in Greendale court, Abed succumbs to his evil alter ego, and Troy decides to meet his destiny at air conditioning school.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "History 101",
        episodeDate: "February 7, 2013",
        episodeRanking: 7.2,
        episodeDescription:
          "While the Dean creates a Hunger Games-style competition for admission into a History of Ice Cream class, the final class Jeff needs to graduate and a fear of graduation causes Abed to retreat to his happy place.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "Paranormal Parentage",
        episodeDate: "February 14, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          'The study group\'s Halloween plans are put on hold when Pierce locks himself in the panic room of his "haunted" mansion.',
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Conventions of Space and Time",
        episodeDate: "February 21, 2013",
        episodeRanking: 7.2,
        episodeDescription:
          "At the Inspector SpaceTime Convention, Abed finds a new \"soulmate,\" Jeff discovers he looks like one of the show's villains, Shirley and Pierce join a focus group, and Annie pretends to be Jeff's wife.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Alternative History of the German Invasion",
        episodeDate: "February 28, 2013",
        episodeRanking: 7,
        episodeDescription:
          'The Study Group loses access to the study room to the German foosballers, and Chang returns to campus, claiming to be suffering from "Changnesia."',
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Cooperative Escapism in Familial Relations",
        episodeDate: "March 7, 2013",
        episodeRanking: 7.4,
        episodeDescription:
          "While Jeff and Britta spend Thanksgiving with Jeff's newly-discovered father and brother, the rest of the Study Group tries to escape from Shirley's dysfunctional family Thanksgiving celebration.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Advanced Documentary Filmmaking",
        episodeDate: "March 14, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          "Abed makes a new documentary chronicling Greendale's effort to get a research grant for \"Changnesia,\" as well as Jeff's efforts to prove that Chang is faking his disease.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Economics of Marine Biology",
        episodeDate: "March 21, 2013",
        episodeRanking: 6.7,
        episodeDescription:
          'Dean Pelton and Annie try to land a "whale" student while Jeff is assigned to keep Pierce occupied. Meanwhile, Troy and Shirley take a physical education education course, and Abed creates a fraternity to annoy the dean.',
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "Herstory of Dance",
        episodeDate: "April 4, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "While the dean sets up a Sadie Hawkins dance, Britta puts together a competing Sophie B. Hawkins dance. Meanwhile, Abed is set up with two dates to both dances by Annie and Shirley.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "Intro to Felt Surrogacy",
        episodeDate: "April 11, 2013",
        episodeRanking: 6.8,
        episodeDescription:
          "Dean Pelton prompts the study group to use puppets to relive the traumatic events of a recent adventure.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "Intro to Knots",
        episodeDate: "April 18, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "Jeff organizes a lovely holiday gathering at his apartment but Annie secretly invites Professor Cornwallis, to get in his good graces.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "Basic Human Anatomy",
        episodeDate: "April 25, 2013",
        episodeRanking: 8,
        episodeDescription:
          "When Annie and Shirley learn that Leonard is actually holding the spot as the class valedictorian, they join forces to bring him down.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "Heroic Origins",
        episodeDate: "May 2, 2013",
        episodeRanking: 8.2,
        episodeDescription:
          "Abed's research into the study group's history uncovers an overlooked series of chance encounters that led each of them to Greendale.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "Advanced Introduction to Finality",
        episodeDate: "May 9, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "A plan to celebrate Jeff's early graduation is unexpectedly disrupted by the study group's evil doppelgangers from the Darkest Timeline.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Repilot",
        episodeDate: "January 2, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "Having failed in his second go-round as a lawyer, and unable to gather evidence for a potential lawsuit against Greendale, Jeff tries to convince the other former members of the Study Group to sue the school.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "Introduction to Teaching",
        episodeDate: "January 2, 2014",
        episodeRanking: 8.5,
        episodeDescription:
          "Jeff blows off his new teaching job at Greendale until Annie signs up for his class and forces him to teach, and Abed loses his religion when he takes a course about whether Nicolas Cage is good or bad.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Basic Intergluteal Numismatics",
        episodeDate: "January 9, 2014",
        episodeRanking: 9,
        episodeDescription:
          "The college is imbued with panic when an unidentified person returns to dropping coins down people's butts and Annie takes it upon herself to find out who is behind it all.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "Cooperative Polygraphy",
        episodeDate: "January 16, 2014",
        episodeRanking: 9.3,
        episodeDescription:
          "After Pierce's unexpected passing, a team of investigators headed by the no-nonsense Mr. Stone arrives at Greendale to subject the study group to lie detector tests before they can be considered for distributions under the will.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "Geothermal Escapism",
        episodeDate: "January 23, 2014",
        episodeRanking: 9.4,
        episodeDescription:
          'As a going-away present to Troy before his around-the-world trip, Abed sets up a high-stakes game of "Hot Lava" at the college, but Britta suspects that the game is just masking his real feelings about Troy\'s departure.',
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "Analysis of Cork-Based Networking",
        episodeDate: "January 30, 2014",
        episodeRanking: 8.1,
        episodeDescription:
          "Annie and Hickey fight Greendale bureaucracy to install a bulletin board, Abed learns a lesson about sign language, and the others discover the challenges of planning a properly sensitive school dance.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "Bondage and Beta Male Sexuality",
        episodeDate: "February 27, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "Jeff helps Duncan score a date with Britta, and Abed has a Hickey encounter on his way to the movie theater.",
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "App Development and Condiments",
        episodeDate: "March 6, 2014",
        episodeRanking: 9,
        episodeDescription:
          "When a new app is beta tested on Greendale students, the campus soon descends into a dystopian society where status is determined by app standing.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "VCR Maintenance and Educational Publishing",
        episodeDate: "March 13, 2014",
        episodeRanking: 8,
        episodeDescription:
          "Whilst cleaning the storage room Jeff, Hickey and Shirley find a pile of unused hidden textbooks and plot a way to make the best out of it. Meanwhile, Annie and Abed are trying to find a new roommate.",
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "Advanced Advanced Dungeons & Dragons",
        episodeDate: "March 20, 2014",
        episodeRanking: 8.4,
        episodeDescription:
          'The group proposes a "sequel" to Dungeons & Dragons night when they need to get a skeptical professor Hickey to bond with his estranged son.',
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "G.I. Jeff",
        episodeDate: "April 3, 2014",
        episodeRanking: 7.9,
        episodeDescription:
          'The entire group becomes part of the cast of a classic "G.I. Joe" cartoon from the 1980s, which turns out to be part of Jeff\'s coping mechanism as he deals with a monumental life event.',
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "Basic Story",
        episodeDate: "April 10, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "After a liability audit, the Save Greendale Committee discovered that they have, in fact, saved Greendale - until they discover that as a result of the successful audit, the school is being sold to Subway.",
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "Basic Sandwich",
        episodeDate: "April 17, 2014",
        episodeRanking: 8.1,
        episodeDescription:
          "When the group learns about Greendale's first dean, they embark on a mission to find his old computer lab; Subway enlists Chang to spy on the group as part of its plan to take over the school.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "Ladders",
        episodeDate: "March 17, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "Dean Pelton hires an administrative consultant to organize things at Greendale.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "Lawnmower Maintenance & Postnatal Care",
        episodeDate: "March 17, 2015",
        episodeRanking: 7.5,
        episodeDescription:
          "Jeff and Frankie ask an inventor for help extracting Dean Pelton from his virtual reality world.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "Basic Crisis Room Decorum",
        episodeDate: "March 24, 2015",
        episodeRanking: 7.6,
        episodeDescription:
          "The Greendale gang goes on the offensive when a rival college releases an attack ad.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Queer Studies & Advanced Waxing",
        episodeDate: "March 31, 2015",
        episodeRanking: 8,
        episodeDescription:
          'Dean Pelton is asked to lie; Chang auditions for a stage adaptation of "The Karate Kid."',
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "Laws of Robotics & Party Rights",
        episodeDate: "April 7, 2015",
        episodeRanking: 7.6,
        episodeDescription:
          "A prisoner attends Greendale via telerobot; Britta tries to get around one of Annie's rules.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "Basic Email Security",
        episodeDate: "April 14, 2015",
        episodeRanking: 7.5,
        episodeDescription:
          "A hacker threatens to publish emails unless a scheduled appearance by a racist comic is canceled.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "Advanced Safety Features",
        episodeDate: "April 21, 2015",
        episodeRanking: 7.3,
        episodeDescription:
          "An ex-boyfriend persuades Britta to join a guerilla marketing campaign.",
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "Intro to Recycled Cinema",
        episodeDate: "April 28, 2015",
        episodeRanking: 7.8,
        episodeDescription:
          "The committee, along with a movie producer named Maury, help Abed complete his unfinished film.",
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "Grifting 101",
        episodeDate: "May 5, 2015",
        episodeRanking: 7.6,
        episodeDescription:
          "When a clever clever con man, Professor DeSalvo, uses his class to cheat the study group, they enlist Jeff to get revenge. The situation goes awry as Britta and Dean Pelton get involved in Jeff and Professor DeSalvo's scamming competition.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "Basic RV Repair and Palmistry",
        episodeDate: "May 12, 2015",
        episodeRanking: 7.5,
        episodeDescription:
          "While on a road trip to get rid of a Greendale artifact, Abed turns a situation into a feature film.",
      },
      {
        episodeSeason: 6,
        episodeNum: 11,
        episodeName: "Modern Espionage",
        episodeDate: "May 19, 2015",
        episodeRanking: 9,
        episodeDescription:
          "When a secret game of paintball occurs on campus, Frankie threatens to expel those who participate.",
      },
      {
        episodeSeason: 6,
        episodeNum: 12,
        episodeName: "Wedding Videography",
        episodeDate: "May 26, 2015",
        episodeRanking: 8.6,
        episodeDescription:
          "A marriage proposal in Jeff's law class exposes a connection between the future bride and groom.",
      },
      {
        episodeSeason: 6,
        episodeNum: 13,
        episodeName: "Emotional Consequences of Broadcast Television",
        episodeDate: "June 2, 2015",
        episodeRanking: 9.5,
        episodeDescription:
          "As their sixth year at Greendale draws to a close, Abed asks everyone to imagine pitching a TV show about what they would do in season seven.",
      },
    ],
  },
  {
    showId: 15,
    showName: "Game of Thrones",
    showYear: 2011,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qsnvWv1_R4nRkKuntpWnQlNhS3Apx6DJHA&usqp=CAU",
    showGenre: "Action, Adventure, Drama",
    showCast: "Emilia Clarke, Kit Harrington",
    showSeasonsNum: 8,
    showDescription:
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.",
    slug: "game-of-thrones",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Winter Is Coming",
        episodeDate: "April 17, 2011",
        episodeRanking: 9.1,
        episodeDescription:
          "Eddard Stark is torn between his family and an old friend when asked to serve at the side of King Robert Baratheon; Viserys plans to wed his sister to a nomadic warlord in exchange for an army.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "The Kingsroad",
        episodeDate: "April 24, 2011",
        episodeRanking: 8.8,
        episodeDescription:
          "While Bran recovers from his fall, Ned takes only his daughters to King's Landing. Jon Snow goes with his uncle Benjen to the Wall. Tyrion joins them.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Lord Snow",
        episodeDate: "May 1, 2011",
        episodeRanking: 8.7,
        episodeDescription:
          "Jon begins his training with the Night's Watch; Ned confronts his past and future at King's Landing; Daenerys finds herself at odds with Viserys.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Cripples, Bastards, and Broken Things",
        episodeDate: "May 8, 2011",
        episodeRanking: 8.8,
        episodeDescription:
          "Eddard investigates Jon Arryn's murder. Jon befriends Samwell Tarly, a coward who has come to join the Night's Watch.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "The Wolf and the Lion",
        episodeDate: "May 15, 2011",
        episodeRanking: 9.1,
        episodeDescription:
          "Catelyn has captured Tyrion and plans to bring him to her sister, Lysa Arryn, at the Vale, to be tried for his, supposed, crimes against Bran. Robert plans to have Daenerys killed, but Eddard refuses to be a part of it and quits.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "A Golden Crown",
        episodeDate: "May 22, 2011",
        episodeRanking: 9.2,
        episodeDescription:
          "While recovering from his battle with Jaime, Eddard is forced to run the kingdom while Robert goes hunting. Tyrion demands a trial by combat for his freedom. Viserys is losing his patience with Drogo.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "You Win or You Die",
        episodeDate: "May 29, 2011",
        episodeRanking: 9.2,
        episodeDescription:
          "Robert has been injured while hunting and is dying. Jon and the others finally take their vows to the Night's Watch. A man, sent by Robert, is captured for trying to poison Daenerys. Furious, Drogo vows to attack the Seven Kingdoms.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "The Pointy End",
        episodeDate: "June 5, 2011",
        episodeRanking: 9,
        episodeDescription:
          "The Lannisters press their advantage over the Starks; Robb rallies his father's northern allies and heads south to war; The White Walkers attack the Wall; Tyrion returns to his father with some new friends.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "Baelor",
        episodeDate: "June 12, 2011",
        episodeRanking: 9.6,
        episodeDescription:
          "Robb goes to war against the Lannisters. Jon finds himself struggling on deciding if his place is with Robb or the Night's Watch. Drogo has fallen ill from a fresh battle wound. Daenerys is desperate to save him.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "Fire and Blood",
        episodeDate: "June 19, 2011",
        episodeRanking: 9.5,
        episodeDescription:
          "Robb vows to get revenge on the Lannisters. Jon must officially decide if his place is with Robb or the Night's Watch. Daenerys says her final goodbye to Drogo.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "The North Remembers",
        episodeDate: "April 1, 2012",
        episodeRanking: 8.8,
        episodeDescription:
          "Tyrion arrives at King's Landing to take his father's place as Hand of the King. Stannis Baratheon plans to take the Iron Throne for his own. Robb tries to decide his next move in the war. The Night's Watch arrive at the house of Craster.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "The Night Lands",
        episodeDate: "April 8, 2012",
        episodeRanking: 8.5,
        episodeDescription:
          "Arya makes friends with Gendry. Tyrion tries to take control of the Small Council. Theon arrives at his home, Pyke, in order to persuade his father into helping Robb with the war. Jon tries to investigate Craster's secret.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "What Is Dead May Never Die",
        episodeDate: "April 15, 2012",
        episodeRanking: 8.8,
        episodeDescription:
          "Tyrion tries to see who he can trust in the Small Council. Catelyn visits Renly to try and persuade him to join Robb in the war. Theon must decide if his loyalties lie with his own family or with Robb.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Garden of Bones",
        episodeDate: "April 22, 2012",
        episodeRanking: 8.8,
        episodeDescription:
          "Lord Baelish arrives at Renly's camp just before he faces off against Stannis. Daenerys and her company are welcomed into the city of Qarth. Arya, Gendry, and Hot Pie find themselves imprisoned at Harrenhal.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "The Ghost of Harrenhal",
        episodeDate: "April 29, 2012",
        episodeRanking: 8.8,
        episodeDescription:
          "Tyrion investigates a secret weapon that King Joffrey plans to use against Stannis. Meanwhile, as a token for saving his life, Jaqen H'ghar offers to kill three people that Arya chooses.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "The Old Gods and the New",
        episodeDate: "May 6, 2012",
        episodeRanking: 9.1,
        episodeDescription:
          "Theon seizes control of Winterfell. Jon captures a wildling, named Ygritte. The people of King's Landing begin to turn against King Joffrey. Daenerys looks to buy ships to sail for the Seven Kingdoms.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "A Man Without Honor",
        episodeDate: "May 13, 2012",
        episodeRanking: 8.9,
        episodeDescription:
          "Bran and Rickon have escaped Winterfell. Theon tries to hunt them down. Daenerys' dragons have been stolen. Jon travels through the wilderness with Ygritte as his prisoner. Sansa has bled and is now ready to have Joffrey's children.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "The Prince of Winterfell",
        episodeDate: "May 20, 2012",
        episodeRanking: 8.8,
        episodeDescription:
          "Stannis is just days from King's Landing. Tyrion prepares for his arrival. Jon and Qhorin are taken prisoner by the wildlings. Catelyn is arrested for releasing Jaime. Arya, Gendry, and Hot Pie plan to escape from Harrenhal.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "Blackwater",
        episodeDate: "May 27, 2012",
        episodeRanking: 9.7,
        episodeDescription:
          "Stannis Baratheon's fleet and army arrive at King's Landing and the battle for the city begins. Cersei plans for her and her children's future.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Valar Morghulis",
        episodeDate: "June 3, 2012",
        episodeRanking: 9.4,
        episodeDescription:
          "Joffrey puts Sansa aside for Margaery Tyrell. Robb marries Talisa Maegyr. Jon prepares to meet Mance Rayder. Arya says farewell to Jaqen H'ghar. Daenerys tries to rescue her dragons.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Valar Dohaeris",
        episodeDate: "March 31, 2013",
        episodeRanking: 8.8,
        episodeDescription:
          "Jon is brought before Mance Rayder, the King Beyond the Wall, while the Night's Watch survivors retreat south. In King's Landing, Tyrion asks for his reward. Littlefinger offers Sansa a way out.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Dark Wings, Dark Words",
        episodeDate: "April 7, 2013",
        episodeRanking: 8.6,
        episodeDescription:
          "Bran and company meet Jojen and Meera Reed. Arya, Gendry, and Hot Pie meet the Brotherhood. Jaime travels through the wilderness with Brienne. Sansa confesses her true feelings about Joffery to Margaery.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Walk of Punishment",
        episodeDate: "April 14, 2013",
        episodeRanking: 8.9,
        episodeDescription:
          "Robb and Catelyn arrive at Riverrun for Lord Hoster Tully's funeral. Tywin names Tyrion the new Master of Coin. Arya says goodbye to Hot Pie. The Night's Watch returns to Craster's. Brienne and Jaime are taken prisoner.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "And Now His Watch Is Ended",
        episodeDate: "April 21, 2013",
        episodeRanking: 9.6,
        episodeDescription:
          "Jaime mopes over his lost hand. Cersei is growing uncomfortable with the Tyrells. The Night's Watch is growing impatient with Craster. Daenerys buys the Unsullied.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Kissed by Fire",
        episodeDate: "April 28, 2013",
        episodeRanking: 9,
        episodeDescription:
          "Robb's army is falling apart. Jaime reveals a story, to Brienne, that he has never told anyone. Jon breaks his vows. The Hound is granted his freedom. The Lannisters hatch a new plan.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "The Climb",
        episodeDate: "May 5, 2013",
        episodeRanking: 8.8,
        episodeDescription:
          "Jon and the wildlings scale the Wall. The Brotherhood sells Gendry to Melisandre. Robb does what he can to win back the Freys. Tyrion tells Sansa about their engagement.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "The Bear and the Maiden Fair",
        episodeDate: "May 12, 2013",
        episodeRanking: 8.7,
        episodeDescription:
          "Jon and the wildlings travel south of the Wall. Talisa tells Robb that she's pregnant. Arya runs away from the Brotherhood. Daenerys arrives at Yunkai. Jaime leaves Brienne behind at Harrenhal.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Second Sons",
        episodeDate: "May 19, 2013",
        episodeRanking: 9,
        episodeDescription:
          "Daenerys tries to persuade the Second Sons to join her against Yunkai. Stannis releases Davos from the dungeons. Sam and Gilly are attacked by a White Walker. Sansa and Tyrion wed.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "The Rains of Castamere",
        episodeDate: "June 2, 2013",
        episodeRanking: 9.9,
        episodeDescription:
          "Robb and Catelyn arrive at the Twins for the wedding. Jon is put to the test to see where his loyalties truly lie. Bran's group decides to split up. Daenerys plans an invasion of Yunkai.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "Mhysa",
        episodeDate: "June 9, 2013",
        episodeRanking: 9.2,
        episodeDescription:
          "Bran and company travel beyond the Wall. Sam returns to Castle Black. Jon says goodbye to Ygritte. Jaime returns to King's Landing. The Night's Watch asks for help from Stannis.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "Two Swords",
        episodeDate: "April 6, 2014",
        episodeRanking: 9.1,
        episodeDescription:
          "Tyrion welcomes a guest to King's Landing. At Castle Black, Jon stands trial. Daenerys is pointed to Meereen, the mother of all slave cities. Arya runs into an old enemy.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "The Lion and the Rose",
        episodeDate: "April 13, 2014",
        episodeRanking: 9.7,
        episodeDescription:
          "Joffrey and Margaery's wedding has come. Tyrion breaks up with Shae. Ramsay tries to prove his worth to his father. Bran and company find a Weirwood tree.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Breaker of Chains",
        episodeDate: "April 20, 2014",
        episodeRanking: 8.9,
        episodeDescription:
          "Tyrion is arrested for the murder of Joffrey and awaits trial. Sansa escapes King's Landing. Sam sends Gilly to Mole's Town as the Night's Watch finds itself in a tight spot. Meereen challenges Daenerys.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Oathkeeper",
        episodeDate: "April 27, 2014",
        episodeRanking: 8.8,
        episodeDescription:
          "Jaime entrusts a task to Brienne. Daenerys frees Meereen. Jon is given permission to lead a group of Night's Watchmen to Craster's Keep. Bran and company are taken hostage.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "First of His Name",
        episodeDate: "May 4, 2014",
        episodeRanking: 8.7,
        episodeDescription:
          "Tommen is crowned King of the Seven Kingdoms. Cersei builds her case against Tyrion. Sansa and Lord Baelish arrive at the Eyrie. The Night's Watch attacks Craster's Keep.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "The Laws of Gods and Men",
        episodeDate: "May 11, 2014",
        episodeRanking: 9.7,
        episodeDescription:
          "Tyrion's trial has come. Yara and her troops storm the Dreadfort to free Theon. Daenerys meets Hizdar zo Loraq. Stannis makes a deal with the Iron Bank of Braavos.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Mockingbird",
        episodeDate: "May 18, 2014",
        episodeRanking: 9.1,
        episodeDescription:
          "Tyrion tries to find a champion. Daenerys sleeps with Daario. The Hound becomes wounded. Jon's advice is ignored at Castle Black. Brienne and Podrick receive a tip on Arya's whereabouts.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "The Mountain and the Viper",
        episodeDate: "June 1, 2014",
        episodeRanking: 9.7,
        episodeDescription:
          "Theon helps Ramsay seize Moat Cailin. The wildlings attack Mole's Town. Sansa comes up with a story to protect Lord Baelish. Daenerys finds out a secret about Jorah Mormont. Oberyn Martell faces Gregor Clegane, the Mountain.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "The Watchers on the Wall",
        episodeDate: "June 8, 2014",
        episodeRanking: 9.6,
        episodeDescription:
          "The battle between the Night's Watch and the wildlings has come.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "The Children",
        episodeDate: "June 15, 2014",
        episodeRanking: 9.7,
        episodeDescription:
          "Jon makes an important decision. Daenerys experiences new consequences. Brienne and Podrick have an unexpected encounter. Bran achieves a goal, while Tyrion makes an important discovery.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "The Wars to Come",
        episodeDate: "April 12, 2015",
        episodeRanking: 8.5,
        episodeDescription:
          "Cersei and Jaime adjust to a world without Tywin. Tyrion and Varys arrive at Pentos. In Meereen, a new enemy emerges. Jon is caught between two kings.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "The House of Black and White",
        episodeDate: "April 19, 2015",
        episodeRanking: 8.5,
        episodeDescription:
          "Arya arrives in Braavos. Jaime takes on a secret mission. Ellaria Sand seeks revenge for Oberyn's death. Stannis makes Jon a generous offer as the Night's Watch elects a new Lord Commander. Daenerys is faced with a difficult decision.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "High Sparrow",
        episodeDate: "April 26, 2015",
        episodeRanking: 8.5,
        episodeDescription:
          "Tommen and Margaery wed. Arya has trouble adapting to her new life. Littlefinger reveals his plans to Sansa. Jon gives his first orders as Lord Commander. Tyrion and Varys arrive in Volantis.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "Sons of the Harpy",
        episodeDate: "May 3, 2015",
        episodeRanking: 8.7,
        episodeDescription:
          "Jorah Mormont sets sail alongside his prisoner, Tyrion. Cersei makes a move against the Tyrells. Jaime and Bronn sneak into Dorne. Ellaria and the Sand Snakes make their plans. Melisandre tempts Jon. The Harpies attack.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "Kill the Boy",
        episodeDate: "May 10, 2015",
        episodeRanking: 8.6,
        episodeDescription:
          "Daenerys arrests the heads of Meereen's great families. Jon makes a difficult decision. Theon is forced to face Sansa. Stannis rides south. Tyrion and Jorah enter the ruins of Old Valyria.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "Unbowed, Unbent, Unbroken",
        episodeDate: "May 17, 2015",
        episodeRanking: 8,
        episodeDescription:
          "Arya is put to the test. Tyrion and Jorah are captured by slavers. Loras Tyrell is judged by the Sparrows. Jaime and Bronn face the Sand Snakes. Sansa marries Ramsay Bolton.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "The Gift",
        episodeDate: "May 24, 2015",
        episodeRanking: 9,
        episodeDescription:
          "Jon heads east as trouble begins to stir for Sam and Gilly at Castle Black. Sansa asks Theon for help. Tyrion and Jorah are sold as slaves. Cersei savors her triumph over the Tyrells as new plots are developed in the shadows.",
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "Hardhome",
        episodeDate: "May 31, 2015",
        episodeRanking: 9.9,
        episodeDescription:
          "Tyrion advises Daenerys. Sansa forces Theon to tell her a secret. Cersei remains stubborn. Arya meets her first target. Jon and Tormund meet with the wildling elders.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "The Dance of Dragons",
        episodeDate: "June 7, 2015",
        episodeRanking: 9.5,
        episodeDescription:
          "Jon and the wildlings return to Castle Black. Jaime meets with Doran Martell. Stannis makes a hard choice. Arya runs into Meryn Trant. Daenerys attends the grand reopening of the fighting pits.",
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "Mother's Mercy",
        episodeDate: "June 14, 2015",
        episodeRanking: 9.1,
        episodeDescription:
          "Stannis arrives at Winterfell. Tyrion runs Meereen as Daario and Jorah go after Daenerys. Jaime and Myrcella leave Dorne. Jon sends Sam and Gilly to Oldtown. Arya challenges the Many-Faced God. Cersei confesses her sins.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "The Red Woman",
        episodeDate: "April 24, 2016",
        episodeRanking: 8.5,
        episodeDescription:
          "The fate of Jon Snow is revealed. Daenerys is brought before Khal Moro. Tyrion gets used to living in Meereen. Ramsay sends his dogs after Theon and Sansa. Ellaria and the Sand Snakes make their move. Cersei mourns for Myrcella.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "Home",
        episodeDate: "May 1, 2016",
        episodeRanking: 9.4,
        episodeDescription:
          "Bran trains with the Three-Eyed Raven. Tommen meets with Cersei. Tyrion makes a bold move. Theon leaves while at Pyke new issues arise. Ramsay's brother is born. Davos asks Melisandre for a miracle.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "Oathbreaker",
        episodeDate: "May 8, 2016",
        episodeRanking: 8.7,
        episodeDescription:
          "Daenerys arrives at Vaes Dothrak. Sam and Gilly sail for Horn Hill. Arya trains as No One. Varys finds information on the Sons of the Harpy. Ramsay receives a gift. Tommen meets with the High Sparrow. At Castle Black, a miracle occurs.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Book of the Stranger",
        episodeDate: "May 15, 2016",
        episodeRanking: 9.1,
        episodeDescription:
          "Sansa arrives at Castle Black. Tyrion makes a deal with the slave masters. Jorah and Daario sneak into Vaes Dothrak. Ramsay sends a letter to Jon. Theon arrives at Pyke. Cersei and Olenna Tyrell plot against the High Sparrow.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "The Door",
        episodeDate: "May 22, 2016",
        episodeRanking: 9.7,
        episodeDescription:
          "Sansa and Jon make plans. Arya is given another chance to prove herself. Jorah confesses a secret to Daenerys. Tyrion meets with a red priestess. Yara finds her rule tested. Bran discovers the origin of the White Walkers.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "Blood of My Blood",
        episodeDate: "May 29, 2016",
        episodeRanking: 8.4,
        episodeDescription:
          "Bran and Meera find a new ally. Gilly meets Sam's family. Arya makes a difficult choice. The Lannisters and Tyrells march against the High Sparrow.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "The Broken Man",
        episodeDate: "June 5, 2016",
        episodeRanking: 8.6,
        episodeDescription:
          "Jon and Sansa gather troops. Jaime arrives at Riverrun. Olenna Tyrell plans to leave King's Landing. Theon and Yara plan a destination. Arya makes plans to leave.",
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "No One",
        episodeDate: "June 12, 2016",
        episodeRanking: 8.4,
        episodeDescription:
          "Brienne arrives at Riverrun. Arya seeks shelter. Jaime meets with Edmure Tully. Cersei challenges the Faith. Sandor Clegane hunts for revenge. Tyrion faces the consequences of earlier decisions.",
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "Battle of the Bastards",
        episodeDate: "June 19, 2016",
        episodeRanking: 9.9,
        episodeDescription:
          "Jon and Sansa face Ramsay Bolton on the fields of Winterfell. Daenerys strikes back at her enemies. Theon and Yara arrive in Meereen.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "The Winds of Winter",
        episodeDate: "June 26, 2016",
        episodeRanking: 9.9,
        episodeDescription:
          "Cersei and Loras Tyrell stand trial by the gods. Daenerys prepares to set sail for Westeros. Davos confronts Melisandre. Sam and Gilly arrive in the Citadel. Bran discovers a long-kept secret. Lord Frey has an uninvited guest.",
      },
      {
        episodeSeason: 7,
        episodeNum: 1,
        episodeName: "Dragonstone",
        episodeDate: "July 16, 2017",
        episodeRanking: 8.6,
        episodeDescription:
          'Jon organizes the North\'s defenses. Cersei tries to even the odds. Daenerys comes home. Arya reminds the Freys "the North remembers." Sam adapts to life in Oldtown. The Night King makes his way south.',
      },
      {
        episodeSeason: 7,
        episodeNum: 2,
        episodeName: "Stormborn",
        episodeDate: "July 23, 2017",
        episodeRanking: 8.9,
        episodeDescription:
          "Daenerys receives an unexpected visitor. Jon faces resistance. Tyrion plans the conquest of Westeros. Cersei gathers her allies. Arya has a reunion with old friends. Sam risks his career and life.",
      },
      {
        episodeSeason: 7,
        episodeNum: 3,
        episodeName: "The Queen's Justice",
        episodeDate: "July 30, 2017",
        episodeRanking: 9.2,
        episodeDescription:
          "Jon and Daenerys finally meet. Cersei gains a new ally. Sansa receives an unexpected visitor. Sam is confronted for his actions.",
      },
      {
        episodeSeason: 7,
        episodeNum: 4,
        episodeName: "The Spoils of War",
        episodeDate: "August 6, 2017",
        episodeRanking: 9.8,
        episodeDescription:
          "Daenerys takes matters into her own hands. Arya reaches her destination. Jaime and Bronn collect the spoils from the war with the Tyrells.",
      },
      {
        episodeSeason: 7,
        episodeNum: 5,
        episodeName: "Eastwatch",
        episodeDate: "August 13, 2017",
        episodeRanking: 8.8,
        episodeDescription:
          "Daenerys demands loyalty from the surviving Lannister soldiers; Jon heeds Bran's warning about White Walkers on the move; Cersei vows to vanquish anyone or anything that stands in her way.",
      },
      {
        episodeSeason: 7,
        episodeNum: 6,
        episodeName: "Beyond the Wall",
        episodeDate: "August 20, 2017",
        episodeRanking: 9,
        episodeDescription:
          "Jon and his team go beyond the wall to capture a wight. Daenerys has to make a tough decision.",
      },
      {
        episodeSeason: 7,
        episodeNum: 7,
        episodeName: "The Dragon and the Wolf",
        episodeDate: "August 27, 2017",
        episodeRanking: 9.4,
        episodeDescription:
          "Everyone meets in King's Landing to discuss the fate of the realm. In Winterfell, Sansa confronts Arya. Sam reaches Winterfell, where he and Bran discover a shocking secret about Jon Snow.",
      },
      {
        episodeSeason: 8,
        episodeNum: 1,
        episodeName: "Winterfell",
        episodeDate: "April 14, 2019",
        episodeRanking: 7.6,
        episodeDescription:
          "Jon and Daenerys arrive in Winterfell and are met with skepticism. Sam learns about the fate of his family. Cersei gives Euron the reward he aims for. Theon follows his heart.",
      },
      {
        episodeSeason: 8,
        episodeNum: 2,
        episodeName: "A Knight of the Seven Kingdoms",
        episodeDate: "April 21, 2019",
        episodeRanking: 7.9,
        episodeDescription:
          "Jaime faces judgment and Winterfell prepares for the battle to come.",
      },
      {
        episodeSeason: 8,
        episodeNum: 3,
        episodeName: "The Long Night",
        episodeDate: "April 28, 2019",
        episodeRanking: 7.5,
        episodeDescription:
          "The Night King and his army have arrived at Winterfell and the great battle begins.",
      },
      {
        episodeSeason: 8,
        episodeNum: 4,
        episodeName: "The Last of the Starks",
        episodeDate: "May 5, 2019",
        episodeRanking: 5.5,
        episodeDescription:
          "The Battle of Winterfell is over and a new chapter for Westeros begins.",
      },
      {
        episodeSeason: 8,
        episodeNum: 5,
        episodeName: "The Bells",
        episodeDate: "May 12, 2019",
        episodeRanking: 6,
        episodeDescription:
          "Forces have arrived at King's Landing for the final battle.",
      },
      {
        episodeSeason: 8,
        episodeNum: 6,
        episodeName: "The Iron Throne",
        episodeDate: "May 19, 2019",
        episodeRanking: 4.1,
        episodeDescription:
          "In the aftermath of the devastating attack on King's Landing, Daenerys must face the survivors.",
      },
    ],
  },
  {
    showId: 16,
    showName: "The Summer I Turned Pretty",
    showYear: 2022,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0czkna_g3Cw9rzSZNTzOEiir39wKqFuRRw&usqp=CAU",
    showGenre: "Drama, Romance",
    showCast: "Lola Tung, Christopher Briney",
    showSeasonsNum: 2,
    showDescription:
      "A love triangle between one girl and two brothers. A story about first love, first heartbreak, and the magic of that one perfect summer.",
    slug: "the-summer-i-turned-pretty",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Summer House",
        episodeDate: "June 17, 2022",
        episodeRanking: 7.2,
        episodeDescription:
          "Belly, her brother, and mom head to Cousins beach to stay with Susannah Fisher and her sons, Conrad and Jeremiah. These two close families have spent every summer together. But this summer in Cousins is different.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Summer Dress",
        episodeDate: "June 17, 2022",
        episodeRanking: 7.3,
        episodeDescription:
          "It's Belly's first day as a debutante, she begins to wonder if she made the right choice when she said yes to Susannah's invitation. Cam complicates Belly and the Fisher Boys' relationship meanwhile, Laurel is intrigued by a fellow author.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Summer Nights",
        episodeDate: "June 17, 2022",
        episodeRanking: 7.4,
        episodeDescription:
          "It's Belly's birthday, her best friend, Taylor, arrives to celebrate. Conrad's friendship with Cleveland grows while the friendships between Belly, Taylor and the Fisher Boys are tested. Laurel and Susannah's secret finally comes to light.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Summer Heat",
        episodeDate: "June 17, 2022",
        episodeRanking: 7.5,
        episodeDescription:
          "It's the 4th of July, the fathers have come to Cousins for Susannah's annual party at the beach house. Tensions flare between Conrad and his father. Belly and the Fisher brothers make margaritas, and chaos ensues with dire consequences.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Summer Catch",
        episodeDate: "June 17, 2022",
        episodeRanking: 7.5,
        episodeDescription:
          "Believing that Conrad might act on his feelings for her, Belly makes a decision that proves painful and straining on the brothers' relationship. Steve finally gets to work in the country club. Laurel and Susannah have a night out.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Summer Tides",
        episodeDate: "June 17, 2022",
        episodeRanking: 7.6,
        episodeDescription:
          "Taylor returns to play in the Cousins beach charity volleyball tournament. Steven finds himself in over his head with Shayla's wealthy friends, and Cleveland helps emotionally distraught Conrad. As the summer heats up so too the emotions.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "Summer Love",
        episodeDate: "June 17, 2022",
        episodeRanking: 8.2,
        episodeDescription:
          "The night of Belly's debutante ball is jeopardized when Susannah's secret she's been harboring all summer is revealed. A brother steps in to save Belly and a confession from Conrad alters the trajectory of Belly's summer forever.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Love Lost",
        episodeDate: "July 14, 2023",
        episodeRanking: 7.4,
        episodeDescription:
          "It's the last day of school for Belly and she tries to let loose with Steven and Taylor, but some things are too big to leave behind.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Love Scene",
        episodeDate: "July 14, 2023",
        episodeRanking: 7.8,
        episodeDescription:
          "Belly joins Jeremiah on an important search, but when tension over their past threatens to get in the way, they have to find a way to heal their rift in order to help Conrad.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Love Sick",
        episodeDate: "July 14, 2023",
        episodeRanking: 7.9,
        episodeDescription:
          "The summer house is for sale, but Belly, Jeremiah, and Conrad won't let it go so easily. While Conrad works on a secret plan, Belly and Jeremiah try a more direct route.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Love Game",
        episodeDate: "July 21, 2023",
        episodeRanking: 7.0,
        episodeDescription:
          "All's fair in love and boardwalk games. A day of competition with old and new friends stokes big feelings for Belly, Conrad and Jeremiah, and leads to an even bigger surprise that will affect them all.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Love Fool",
        episodeDate: "July 28, 2023",
        episodeRanking: 7.3,
        episodeDescription:
          "Belly and the gang break into a familiar spot for the night after being forced out of the summer house by Aunt Julia.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Love Fest",
        episodeDate: "August 4, 2023",
        episodeRanking: 8.0,
        episodeDescription:
          "As their time in Cousins winds down, Belly finds herself wondering: What Would Susannah Do? Throw a massive party, obviously. But will the festivities bring them the closure they need, or just stir up new problems for everyone?",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Love Affair",
        episodeDate: "August 11, 2023",
        episodeRanking: 7.9,
        episodeDescription:
          "Some hangovers are worse than others. Belly wakes up to a reminder of the mistakes she made last night. But is it too late to fix everything?",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Love Triangle",
        episodeDate: "August 18, 2023",
        episodeRanking: 7.7,
        episodeDescription:
          "After a painful revelation, Belly, Jeremiah, and Conrad are trapped in close quarters for the night. Emotions run high as Belly must reckon with past and present to decide her future.",
      },
    ],
  },
  {
    showId: 17,
    showName: "Modern Family",
    showYear: 2009,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nrkvjDOhcZBAlnNAlp1JVUTZCCSjQWsRNA&usqp=CAU",
    showGenre: "Comedy, Drama, Romance",
    showCast: "Ed O'Neil, Sofia Vergara",
    showSeasonsNum: 11,
    showDescription:
      "Three different but related families face trials and tribulations in their own uniquely comedic ways.",
    slug: "modern-family",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Pilot",
        episodeDate: "September 23, 2009",
        episodeRanking: 8.2,
        episodeDescription:
          "Jay must adapt to his young new wife, Gloria and her son. Meanwhile, Claire deals with her own family. Mitchell and Cam decide to adopt a baby.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "The Bicycle Thief",
        episodeDate: "September 30, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "After buying a new bike for his son, Phil ends up lying when it gets stolen. Jay tries bonding with Manny. Cam and Mitchell begin daycare classes for Lily.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "Come Fly with Me",
        episodeDate: "October 7, 2009",
        episodeRanking: 8,
        episodeDescription:
          "Jay takes Phil on a model-airplane excursion with disastrous results. While Manny is at their house, Claire must get used to the fact they are actually siblings.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "The Incident",
        episodeDate: "October 14, 2009",
        episodeRanking: 8.2,
        episodeDescription:
          "Jay's ex-wife shows up for the first time following a nasty incident at Gloria and Jay's wedding.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Coal Digger",
        episodeDate: "October 21, 2009",
        episodeRanking: 8.3,
        episodeDescription:
          "A conflict between Manny and Luke spreads to their respective parents during a football game.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Run for Your Wife",
        episodeDate: "October 28, 2009",
        episodeRanking: 7.8,
        episodeDescription:
          "Claire and Phil have mixed feelings regarding the first day of school for the kids. Jay and Gloria argue about an outfit for Manny, and a minor problem with Lily gets blown out of proportion by Mitchell and Cameron.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "En Garde",
        episodeDate: "November 4, 2009",
        episodeRanking: 8,
        episodeDescription:
          "The whole family comes out to support Manny's newfound interest - fencing. It turns out he's quite masterful in the sport, but Jay's proud enthusiasm triggers an old childhood wound for Mitchell. Meanwhile Phil is determined to find where Luke's hidden talents lie.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "Great Expectations",
        episodeDate: "November 18, 2009",
        episodeRanking: 7.9,
        episodeDescription:
          "Jay has a sleepover for his grandkids, but Haley is looking for a way out. Claire tries to get a perfect anniversary gift for Phil, and Mitchell and Cameron discover that their ladyfriend is crazy and jealous of their daughter.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "Fizbo",
        episodeDate: "November 25, 2009",
        episodeRanking: 8.7,
        episodeDescription:
          "Cameron breaks out his favorite clown costume to make Luke's birthday party a hit. However, a series of accidents causes the party to break into chaos and leads to an unfortunate injury.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "Undeck the Halls",
        episodeDate: "December 9, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "Phil and Claire cancel Christmas for their kids until they confess to wrongdoings at the house. Jay is hesitant to celebrate Gloria and Manny's holiday traditions. Mitchell and Cameron take Lily to meet Santa.",
      },
      {
        episodeSeason: 1,
        episodeNum: 11,
        episodeName: "Up All Night",
        episodeDate: "January 6, 2010",
        episodeRanking: 8,
        episodeDescription:
          "Manny's dad shows up bearing extravagant gifts, Mitchell and Cameron fight over how to care for their daughter when she cries at night, and Claire tries to impress the firefighters who responded to Phil's kidney stone 911 call.",
      },
      {
        episodeSeason: 1,
        episodeNum: 12,
        episodeName: "Not in My House",
        episodeDate: "January 13, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "Gloria plots to get rid of Jay's new \"dog butler,\" Cameron's helpful nature gets himself in trouble with Mitchell, and Claire asks Phil to punish their son for looking at nude pictures, not knowing they're Phil's.",
      },
      {
        episodeSeason: 1,
        episodeNum: 13,
        episodeName: "Fifteen Percent",
        episodeDate: "January 20, 2010",
        episodeRanking: 8,
        episodeDescription:
          "Mitchell tells Jay that one of his friends is gay to teach him a lesson, Claire gets frustrated with Phil's new master remote control, and Gloria gives Manny's \"date\" a makeover to improve her self-esteem.",
      },
      {
        episodeSeason: 1,
        episodeNum: 14,
        episodeName: "Moon Landing",
        episodeDate: "February 3, 2010",
        episodeRanking: 8.1,
        episodeDescription:
          'Claire feels like a loser when she catches up with an old friend from work, Jay and Cameron have an unpleasant "encounter" in a locker room, and Mitchell tries to give legal advice to Gloria after she has a wreck.',
      },
      {
        episodeSeason: 1,
        episodeNum: 15,
        episodeName: "My Funky Valentine",
        episodeDate: "February 10, 2010",
        episodeRanking: 8.7,
        episodeDescription:
          "Jay takes Gloria to see David Brenner. Mitchell and Cameron try to set Manny up on a date. Phil and Claire try to spice things up by going on a romantic getaway.",
      },
      {
        episodeSeason: 1,
        episodeNum: 16,
        episodeName: "Fears",
        episodeDate: "March 3, 2010",
        episodeRanking: 7.9,
        episodeDescription:
          "Haley confronts a terrifying driving examiner in her third attempt to pass the road test. Alex is nervous about a school dance. Gloria taunts Jay and Manny to ride a roller coaster. Phil and Luke look for treasure under the house.",
      },
      {
        episodeSeason: 1,
        episodeNum: 17,
        episodeName: "Truth Be Told",
        episodeDate: "March 10, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "Jay accidentally kills Manny's pet turtle and lies about it, Claire becomes jealous when Phil's ex-girlfriend pays a visit, and Mitchell makes a bold decision after he misses a family day because he's called in to work.",
      },
      {
        episodeSeason: 1,
        episodeNum: 18,
        episodeName: "Starry Night",
        episodeDate: "March 24, 2010",
        episodeRanking: 8.1,
        episodeDescription:
          "Jay and Mitchell attempt to bond while watching a meteor shower, but things don't go according to plan. Gloria and Cameron try to find something else to occupy their time. Claire and Phil try to help their kids with their school projects.",
      },
      {
        episodeSeason: 1,
        episodeNum: 19,
        episodeName: "Game Changer",
        episodeDate: "March 31, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "Jay takes on Gloria and Manny in the ultimate chess game. Claire goes all out to find a cool new electronic gadget for Phil's birthday gift, and Cameron pokes his nose into a neighbor's affairs.",
      },
      {
        episodeSeason: 1,
        episodeNum: 20,
        episodeName: "Benched",
        episodeDate: "April 14, 2010",
        episodeRanking: 7.7,
        episodeDescription:
          "Jay and Phil vie for the same coaching position on Manny and Luke's basketball team. Mitchell helps Cameron with a job interview, and Gloria and Claire talk about their kids growing up.",
      },
      {
        episodeSeason: 1,
        episodeNum: 21,
        episodeName: "Travels with Scout",
        episodeDate: "April 28, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "Cameron wants to join Dylan's band. Claire is suspicious when Phil's father pays a visit, and Manny is traumatized by a horror movie.",
      },
      {
        episodeSeason: 1,
        episodeNum: 22,
        episodeName: "Airport 2010",
        episodeDate: "May 5, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          "Gloria's birthday present to Jay of a trip to Hawaii becomes a vacation for the entire family.",
      },
      {
        episodeSeason: 1,
        episodeNum: 23,
        episodeName: "Hawaii",
        episodeDate: "May 12, 2010",
        episodeRanking: 8.5,
        episodeDescription:
          "Jay's plan to relax in Hawaii are thwarted. Phil tries to make the vacation special for Claire, but this results in the kids being unsupervised. Mitchell and Cameron debate on what to see.",
      },
      {
        episodeSeason: 1,
        episodeNum: 24,
        episodeName: "Family Portrait",
        episodeDate: "May 19, 2010",
        episodeRanking: 8.6,
        episodeDescription:
          "Claire goes through great lengths to organize a family portrait. Gloria and Phil have an awkward moment while taking Manny and Alex to a Lakers game. Cameron becomes a wedding singer, and Jay has to help Luke with a school project.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "The Old Wagon",
        episodeDate: "September 22, 2010",
        episodeRanking: 8,
        episodeDescription:
          "The Dunphys get nostalgic when Phil has to get rid of their station wagon. Cameron begs Jay to intervene when Mitchell wants to build Lily a castle, and Manny invites a girl over to study.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "The Kiss",
        episodeDate: "September 29, 2010",
        episodeRanking: 8.1,
        episodeDescription:
          "Cameron is upset with Mitchell's lack of public affection, Gloria gets back at Jay for disrespecting her Colombian traditions, and Claire goes overboard as Alex tries to get her first kiss.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Earthquake",
        episodeDate: "October 6, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "When an earthquake hits the area, Claire gets locked in the bathroom with a plumber, Cameron and Mitchell use it as an excuse to get out of brunch with an obnoxious friend, and Manny reevaluates the meaning of life while on a trip with Jay.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Strangers on a Treadmill",
        episodeDate: "October 13, 2010",
        episodeRanking: 8,
        episodeDescription:
          "Mitchell and Claire agree to break some embarrassing news to each other's significant others, Jay makes a fool of himself at what he thinks is a quinceanera, and Haley helps Alex try to make a popular friend.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Unplugged",
        episodeDate: "October 20, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          "Phil, Claire, and the kids try to improve their communication skills by giving up their electronic devices. Gloria is getting obsessed over a neighbor's barking dog, and Mitchell and Cameron try to find a preschool for Lily.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Halloween",
        episodeDate: "October 27, 2010",
        episodeRanking: 8.5,
        episodeDescription:
          "Claire needs the family's help to run Halloween smoothly at their house. Jay and Manny have fun at Gloria's expense, and the holiday brings back painful memories for Cameron.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Chirp",
        episodeDate: "November 3, 2010",
        episodeRanking: 7.7,
        episodeDescription:
          "While Claire and Haley get sick at the same time, Phil wages battle against a chirping smoke detector. Manny accidentally gets one of Jay's employees fired, and Cameron wants to put Lily in a TV commercial.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Manny Get Your Gun",
        episodeDate: "November 17, 2010",
        episodeRanking: 8.4,
        episodeDescription:
          "A birthday dinner for Manny at a family restaurant turns into a race for Phil and Claire and a chance for Cameron to socialize at a shopping mall while looking for a gift.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "Mother Tucker",
        episodeDate: "November 24, 2010",
        episodeRanking: 7.6,
        episodeDescription:
          "Jay and Manny's online diagnosis of Jay's illness makes matters worse. A visit from Cameron's mother sends Mitchell into a frenzy. Phil is more upset about Haley's breakup with Dylan than she is.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Dance Dance Revelation",
        episodeDate: "December 8, 2010",
        episodeRanking: 7.5,
        episodeDescription:
          "Claire is threatened when Gloria becomes her co-chair for a school dance, Jay bullies Phil into taking a stand during a trip to the mall, and Mitchell and Cameron discover that their daughter is a biter.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "Slow Down Your Neighbors",
        episodeDate: "January 5, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Claire tries to stop a woman from speeding in the neighborhood, which creates a business conflict for Phil. Meanwhile, Mitchell and Cameron befriend a strange new neighbor, and Gloria and Manny learn how to ride a bicycle.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "Our Children, Ourselves",
        episodeDate: "January 12, 2011",
        episodeRanking: 7.8,
        episodeDescription:
          "Phil and Claire question their intelligence after a comment by Alex, Mitchell suspects that he fathered a child 8 years ago, and Gloria tells an embarrassing lie about Jay to cover up his rudeness to another couple.",
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "Caught in the Act",
        episodeDate: "January 19, 2011",
        episodeRanking: 9,
        episodeDescription:
          "Phil and Claire's kids walk in on them having sex while delivering their anniversary present, Gloria tries to keep Claire from seeing an angry e-mail, and Mitchell and Cameron contemplate how to cover up a juice stain on a rug.",
      },
      {
        episodeSeason: 2,
        episodeNum: 14,
        episodeName: "Bixby's Back",
        episodeDate: "February 9, 2011",
        episodeRanking: 8,
        episodeDescription:
          "Phil and Clair try to revisit an old Valentine's Day act, Jay tries to surprise Gloria with a romantic dinner, Mitchell and Cameron disagree over Mitchell's assistant's crush, and Manny gives Haley relationship advice.",
      },
      {
        episodeSeason: 2,
        episodeNum: 15,
        episodeName: "Princess Party",
        episodeDate: "February 16, 2011",
        episodeRanking: 7.5,
        episodeDescription:
          "Dede hooks up with Claire's high school boyfriend the night before Lily's birthday party. Meanwhile, Mitchell won't let Cameron play Fizbo the Clown at the party, while Gloria self-medicates to cope with Dede.",
      },
      {
        episodeSeason: 2,
        episodeNum: 16,
        episodeName: "Regrets Only",
        episodeDate: "February 23, 2011",
        episodeRanking: 8,
        episodeDescription:
          "Gloria helps Phil figure out why Claire is mad at him, Mitchell forgets to send out invitations to Cameron's fund raiser, and Alex tries to prove that Haley is lying when she says she has a job as a waitress.",
      },
      {
        episodeSeason: 2,
        episodeNum: 17,
        episodeName: "Two Monkeys and a Panda",
        episodeDate: "March 2, 2011",
        episodeRanking: 7.7,
        episodeDescription:
          "Phil spends the day at the spa while Claire tries to replace Haley's favorite sweater, Cameron discovers Mitchell's dirty secret about Lily's adoption, and Jay and Gloria argue over their final resting place.",
      },
      {
        episodeSeason: 2,
        episodeNum: 18,
        episodeName: "Boys' Night",
        episodeDate: "March 23, 2011",
        episodeRanking: 8.3,
        episodeDescription:
          "Phil and Claire have some trepidation when they find out that Luke has befriended their crotchety old neighbor, Mr. Kleezak; Jay's attempt to avoid sitting through a symphony concert with Gloria and Manny lands him in the middle of Mitchell and Cameron's \"boys' night out\"; and Haley has her own adventures in babysitting with Lily.",
      },
      {
        episodeSeason: 2,
        episodeNum: 19,
        episodeName: "The Musical Man",
        episodeDate: "April 13, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Phil's new real estate ad creates embarrassment for Claire and Haley, Cameron goes over the top while directing a school musical, and Jay's brother comes to town with some surprising news.",
      },
      {
        episodeSeason: 2,
        episodeNum: 20,
        episodeName: "Someone to Watch Over Lily",
        episodeDate: "April 20, 2011",
        episodeRanking: 8,
        episodeDescription:
          "Mitchell and Cameron try to determine Lily's guardian in case something happens to them, Claire is scared that Luke will turn out like Phil, and Haley bonds with Alex after she is forced to take Alex to cello practice.",
      },
      {
        episodeSeason: 2,
        episodeNum: 21,
        episodeName: "Mother's Day",
        episodeDate: "May 4, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Cameron is upset that Mitchell thinks he's the \"Mom\" of the family, Claire and Gloria take the kids on a disastrous hike, and Phil witnesses Jay tearing up while they prepare Mother's Day dinner.",
      },
      {
        episodeSeason: 2,
        episodeNum: 22,
        episodeName: "Good Cop Bad Dog",
        episodeDate: "May 11, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Phil and Claire trade discipline roles for the day, Gloria forces Jay to listen to a horrible business proposal, and Mitchell tries to convince a sick Cameron to let him go to the Lady Gaga concert without him.",
      },
      {
        episodeSeason: 2,
        episodeNum: 23,
        episodeName: "See You Next Fall",
        episodeDate: "May 18, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Haley tries to convince Alex not to deliver an angry graduation speech, Jay has a botched Botox procedure, and Cameron gets upset with Mitchell because he keeps laughing at his accidents.",
      },
      {
        episodeSeason: 2,
        episodeNum: 24,
        episodeName: "The One That Got Away",
        episodeDate: "May 25, 2011",
        episodeRanking: 8,
        episodeDescription:
          "Jay wants nothing more than to have a quiet birthday out fishing on the lake, but the family take that as him wanting a big celebration, and in their frantic scramble to put everything together, Claire and Mitchell wind up trapped in the yard of their childhood home; Phil runs into his old college nemesis while at the mall with Gloria and Lily; Cameron gets himself into some hot water at the bakery, and the kids frantically do some creative editing on grandpa's birthday video, all of which leaves Jay with a headache.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Dude Ranch",
        episodeDate: "September 21, 2011",
        episodeRanking: 7.9,
        episodeDescription:
          "The family's dude ranch vacation turns into disaster when Dylan proposes to Haley, Alex gets an unexpected first kiss, their cowboy guide keeps hitting on Gloria, and Phil goes out of his way to impress Jay.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "When Good Kids Go Bad",
        episodeDate: "September 21, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Lily has problems with Mitchell and Cameron's plans to adopt another child, Jay tries to get Manny to confess to stealing a locket at school, and Claire goes to extreme lengths to prove that she was right in an argument.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Phil on Wire",
        episodeDate: "September 28, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Phil tries to learn tightrope walking, Haley and Alex wind up in the same math class, Gloria becomes upset over Jay's pampering of the dog, and Mitchell joins Cameron on a juice fast.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Door to Door",
        episodeDate: "October 5, 2011",
        episodeRanking: 7.8,
        episodeDescription:
          "Claire recruits her family to help gather signatures for a petition to get a stop sign, Gloria loses the family dog, Jay helps Manny try to sell wrapping paper for school, and Cameron leaves a mess in the kitchen for Mitchell.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Hit and Run",
        episodeDate: "October 12, 2011",
        episodeRanking: 7.8,
        episodeDescription:
          'Claire leaves Phil at home to watch the kids while she applies to run for public office, Mitchell and Cameron are victimized by a hit-and-run driver, and an annoying client asks Jay to "wow" him.',
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Go Bullfrogs!",
        episodeDate: "October 19, 2011",
        episodeRanking: 7.7,
        episodeDescription:
          "While Phil takes Haley on a tour of his alma mater, Claire goes out on the town with a man she mistakenly assumes is Mitchell and Cameron's gay friend. Meanwhile, Gloria is alarmed and curious about Manny's mail-order package.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "Treehouse",
        episodeDate: "November 2, 2011",
        episodeRanking: 8.2,
        episodeDescription:
          "Phil tries to build a treehouse, Haley struggles with writing a college admissions essay, Cameron hits on a single woman to win a bet with Mitchell, and Jay doesn't want to go out salsa dancing with Gloria and another couple.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "After the Fire",
        episodeDate: "November 16, 2011",
        episodeRanking: 7.8,
        episodeDescription:
          "As the family collects goods for a family whose house burned down, Jay makes an embarrassing remark to Phil during a massage, Claire is jealous of Mitchell's friendship with Gloria, and Cameron struggles with a moving van in a parking lot.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "Punkin Chunkin",
        episodeDate: "November 23, 2011",
        episodeRanking: 7.8,
        episodeDescription:
          "Phil is upset that Claire is stifling his creativity, Mitchell doesn't believe Cameron's \"punkin chunkin\" story, Gloria won't let Jay tell Manny that his Thanksgiving centerpiece is horrible, and Hayley and Alex get in an accident.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "Express Christmas",
        episodeDate: "December 7, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          'Phil proposes that the entire family celebrate "Express Christmas" together on December 16, when they discover that they won\'t be spending Christmas Day together.',
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "Lifetime Supply",
        episodeDate: "January 4, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "After having a doctor's visit but then missing the call with the test results, Phil automatically jumps to conclusions and starts saying his goodbyes. Meanwhile Javier pops up unannounced again and takes Manny to the horse races for a belated birthday celebration, and a subtle competition ensues when Mitchell brings home an environmental law award and it becomes a game of who has the bigger trophy.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "Egg Drop",
        episodeDate: "January 11, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "While Jay and Claire become hyper-competitive while working on their boys' science project, Gloria tries to help Phil with his real estate seminar. Meanwhile, Cameron and Mitchell interview a potential birth mother.",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "Little Bo Bleep",
        episodeDate: "January 18, 2012",
        episodeRanking: 8.5,
        episodeDescription:
          'Claire\'s family tries to help her prepare for her political debate, Lily begins saying the "F word" right before her appearance as a flower girl at a wedding, and Jay begins to wonder if his dog Stella is suicidal.',
      },
      {
        episodeSeason: 3,
        episodeNum: 14,
        episodeName: "Me? Jealous?",
        episodeDate: "February 8, 2012",
        episodeRanking: 7.9,
        episodeDescription:
          "Claire thinks Phil's prospective new client is hitting on her, tensions rise as Mitchell and Cameron temporarily stay with Jay and Gloria, and Alex becomes jealous when Hayley volunteers as a Big Sister.",
      },
      {
        episodeSeason: 3,
        episodeNum: 15,
        episodeName: "Aunt Mommy",
        episodeDate: "February 15, 2012",
        episodeRanking: 8.1,
        episodeDescription:
          "Claire makes a drunken decision to donate her egg for Mitchell and Cameron's next child, while Manny gets hurt after Jay gets him into a football game.",
      },
      {
        episodeSeason: 3,
        episodeNum: 16,
        episodeName: "Virgin Territory",
        episodeDate: "February 22, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "Alex accidentally reveals a secret about Haley to their dad, Cameron fakes a back injury to catch Claire in a lie, Mitchell confesses a secret about one of Jay's proudest moments, and Luke helps Manny try to impress a girl.",
      },
      {
        episodeSeason: 3,
        episodeNum: 17,
        episodeName: "Leap Day",
        episodeDate: "February 29, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Claire, Hayley, and Alex's cycles ruin Phil's big Leap Day plans, Mitchell tries to throw an elaborate party for Cameron's \"tenth\" birthday, and Gloria wants Jay to get in a fight.",
      },
      {
        episodeSeason: 3,
        episodeNum: 18,
        episodeName: "Send Out the Clowns",
        episodeDate: "March 14, 2012",
        episodeRanking: 7.5,
        episodeDescription:
          "Cameron reunites an old clown act despite Mitchell's warnings, Phil plays hardball with a rival to get a listing, Manny's new \"friend\" has a crush on Gloria, and Claire wants her daughters to friend her on Facebook.",
      },
      {
        episodeSeason: 3,
        episodeNum: 19,
        episodeName: "Election Day",
        episodeDate: "April 11, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "It's Claire's election day, and the entire family tries in vain to pitch in to help her win the vote. Meanwhile, Haley anxiously awaits her final chance to get accepted into a college.",
      },
      {
        episodeSeason: 3,
        episodeNum: 20,
        episodeName: "The Last Walt",
        episodeDate: "April 18, 2012",
        episodeRanking: 7.6,
        episodeDescription:
          "Cameron's dad is visiting from the farm, and when Jay comes over, it's two manly men squaring off.",
      },
      {
        episodeSeason: 3,
        episodeNum: 21,
        episodeName: "Planes, Trains and Cars",
        episodeDate: "May 2, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "Phil makes an impulsive car purchase and wonders how Claire will react, Jay struggles to get himself and his family to a weekend with the guys at Pebble Beach, and Mitchell and Cameron lose Lily's stuffed bunny on the subway.",
      },
      {
        episodeSeason: 3,
        episodeNum: 22,
        episodeName: "Disneyland",
        episodeDate: "May 9, 2012",
        episodeRanking: 8.2,
        episodeDescription:
          "Visiting the happiest place on earth triggers old memories and creates new ones.",
      },
      {
        episodeSeason: 3,
        episodeNum: 23,
        episodeName: "Tableau Vivant",
        episodeDate: "May 16, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Jay and Gloria argue about how a waitress is closer to Jay than Gloria. Luke is awarded a medal for putting out a fire he started, Phil tries to fire Mitchell, and Claire and Cam fight about Cam's parenting strategies.",
      },
      {
        episodeSeason: 3,
        episodeNum: 24,
        episodeName: "Baby on Board",
        episodeDate: "May 23, 2012",
        episodeRanking: 8.6,
        episodeDescription:
          "Jay and Manny are left to accompany Lily at her recital as Mitchell and Cameron bring Gloria along as translator as they adopt a Mexican child. Meanwhile, Haley has a surprise announcement about her plans after high school.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "Bringing Up Baby",
        episodeDate: "September 26, 2012",
        episodeRanking: 8.3,
        episodeDescription:
          "Gloria tries to surprise Jay with news on his birthday that she is pregnant, while Phil surprises Jay with a fishing trip. Meanwhile, Mitchell and Cameron debate getting Lily a cat after she loses out on getting a baby brother.",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "Schooled",
        episodeDate: "October 10, 2012",
        episodeRanking: 8.6,
        episodeDescription:
          "Phil and Claire get emotional as they send Haley off to school, Manny makes Jay and Gloria take a parenting class, and Mitchell and Cameron clash with lesbian parents from Lily's school.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Snip",
        episodeDate: "October 10, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Claire has problems with the kids as Phil prepares to get a vasectomy, Gloria refuses to wear maternity clothes, and Mitchell encourages Cameron to get a job.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "The Butler's Escape",
        episodeDate: "October 17, 2012",
        episodeRanking: 7.6,
        episodeDescription:
          "Phil is upset that Luke wants to give up magic, Jay tries to get away from Gloria's snoring, Mitchell does errands as Cameron starts his new job as music teacher, and Alex suddenly becomes more sarcastic.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Open House of Horrors",
        episodeDate: "October 24, 2012",
        episodeRanking: 7.9,
        episodeDescription:
          "Claire tries to scare Phil on Halloween night, Cameron tries to show off his new slimmer body at his Halloween party, and Mitchell's white lie about Lily's mother gets him in trouble.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Yard Sale",
        episodeDate: "October 31, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "A yard sale at Jay's house reveals a secret in Gloria's past, Phil's wild side when he tries Jay's old motorcycle, and concern that Alex's new boyfriend might be gay.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Arrested",
        episodeDate: "November 7, 2012",
        episodeRanking: 8.5,
        episodeDescription:
          "When Haley is arrested for underage drinking, Phil, Claire, and Mitchell must intervene, leaving Cameron in charge of the kids. Jay's ex-wife, DeDe, makes a surprise visit, and he desperately tries to hide Gloria's pregnancy from her.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "Mistery Date",
        episodeDate: "November 14, 2012",
        episodeRanking: 8.2,
        episodeDescription:
          "While Claire and the kids are away at one of Alex's competitions, one of Cam's friends has a \"date\" with Phil. Meanwhile, Mitchell has a breakthrough with Jay on a shopping trip, and Cameron gets Jay and Gloria a surprise gift.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "When a Tree Falls",
        episodeDate: "November 28, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          'Mitchell and Cameron fight to save a tree, Phil and Jay literally come to blows at a kids\' birthday party, Claire goes shopping with Gloria--who is suffering from "pregnancy brain," and Alex tries to get an embarrassing photo of Haley.',
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "Diamond in the Rough",
        episodeDate: "December 12, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "Gloria buys a microphone so she can sing to her unborn baby. Claire and Cameron try to renovate a baseball field so Luke's and Manny's baseball team has a place to play.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "New Year's Eve",
        episodeDate: "January 9, 2013",
        episodeRanking: 8.1,
        episodeDescription:
          "On New Year's Eve, Jay plays poker with Billy Dee Williams, Phil and Claire try to rekindle their romance, Mitchell and Cameron search for a bar where they fit in, and Haley and Alex stay home to babysit.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "Party Crasher",
        episodeDate: "January 16, 2013",
        episodeRanking: 8.4,
        episodeDescription:
          "Jay and Gloria throw a surprise birthday party for Manny, but their unborn baby may have other plans. Meanwhile, Haley dates a man twice her age, and Cameron becomes jealous of Mitchell and Lily's relationship",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "Fulgencio",
        episodeDate: "January 23, 2013",
        episodeRanking: 8.9,
        episodeDescription:
          "Jay fights with his mother in law over naming the baby, Phil unsuccessfully tries to solve his kids' problems, and Mitchell and Cameron try to curb Lily's snarkiness.",
      },
      {
        episodeSeason: 4,
        episodeNum: 14,
        episodeName: "A Slight at the Opera",
        episodeDate: "February 6, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          'Cam is left without a lead on the first school performance of "Phantom of the Opera," Phil and Mitchell play golf with Jay, and Haley and her boyfriend help Claire take care of the baby.',
      },
      {
        episodeSeason: 4,
        episodeNum: 15,
        episodeName: "Heart Broken",
        episodeDate: "February 13, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "Phil and Claire's Valentine's plans land Claire in the emergency room, Jay and Gloria try to be intimate for the first time after the baby, and Mitchell has a wild Valentine's night after drinking and blacking out at his party.",
      },
      {
        episodeSeason: 4,
        episodeNum: 16,
        episodeName: "Bad Hair Day",
        episodeDate: "February 20, 2013",
        episodeRanking: 7.4,
        episodeDescription:
          "Claire runs into an old lover at her college reunion, a mishap causes Cam to give the baby a disastrous haircut, and Jay has to put his bowling match on hold to build up Manny's confidence.",
      },
      {
        episodeSeason: 4,
        episodeNum: 17,
        episodeName: "Best Men",
        episodeDate: "February 27, 2013",
        episodeRanking: 8,
        episodeDescription:
          "Mitchell and Cameron are co-best men for a friend's wedding, but the bride has cold feet. Meanwhile, Manny has a crush on the nanny, Phil helps Luke get a date, and Claire and Haley go together to Alex's concert.",
      },
      {
        episodeSeason: 4,
        episodeNum: 18,
        episodeName: "The Wow Factor",
        episodeDate: "March 27, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "Claire and Cam clash over a fountain as they try to flip a house, Mitchell confronts a playground bully, Jay spends the day alone with Joe, and Phil tries to teach the girls about home repairs.",
      },
      {
        episodeSeason: 4,
        episodeNum: 19,
        episodeName: "The Future Dunphys",
        episodeDate: "April 3, 2013",
        episodeRanking: 7.9,
        episodeDescription:
          "Phil and Claire get a possible glimpse at their future children, Gloria helps Lily get in touch with her Vietnamese heritage, and Jay tries to help Manny get into a prestigious prep school.",
      },
      {
        episodeSeason: 4,
        episodeNum: 20,
        episodeName: "Flip Flop",
        episodeDate: "April 10, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "Phil pulls out all the stops to flip Cameron and Claire's house and avoid embarrassment from a rival realtor, and Gloria is jealous of Manny's. relationship with her ex-husband Javier's new girlfriend.",
      },
      {
        episodeSeason: 4,
        episodeNum: 21,
        episodeName: "Career Day",
        episodeDate: "May 1, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "Phil's rival, Gil Thorpe, offers Claire a job, Lily gets a extra-generous gift from the Tooth Fairy, and Jay decides to begin working on his novel.",
      },
      {
        episodeSeason: 4,
        episodeNum: 22,
        episodeName: "My Hero",
        episodeDate: "May 8, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Cam is jealous of Mitchell's ex-boyfriend, Claire tries to avoid her dad's job offer, Manny has to write an essay about his hero, Phil tries to teach Gloria to skate, and Hayley tries to help Alex flirt with boys.",
      },
      {
        episodeSeason: 4,
        episodeNum: 23,
        episodeName: "Games People Play",
        episodeDate: "May 15, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "The Dunphys take an RV trip together, Mitchell and Cam become over-competitive at Lily's gymnastics meet, and Jay and Gloria are upset that they weren't invited to a party.",
      },
      {
        episodeSeason: 4,
        episodeNum: 24,
        episodeName: "Goodnight Gracie",
        episodeDate: "May 22, 2013",
        episodeRanking: 8.2,
        episodeDescription:
          "The family goes to Florida for Phil's mother's funeral. Phil has to honor his mom's odd last request, Jay sees a familiar face, Mitchell defends Gloria in court, and Cameron makes some new friends.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Suddenly, Last Summer",
        episodeDate: "September 25, 2013",
        episodeRanking: 8.1,
        episodeDescription:
          "Mitchell and Cam go behind each other's backs to set up the perfect marriage proposal, Gloria is sad about sending Manny to Colombia, and Phil and Claire try to arrange the kids' vacations to maximize their \"alone time.\"",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "First Days",
        episodeDate: "September 25, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Manny and Luke have their first day of high school, Cam works as a substitute social studies teacher, Claire begins her new job working for her dad, and Mitchell's boss hits on Haley.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Larry's Wife",
        episodeDate: "October 2, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          "Mitchell leaves the wedding plans to Cam, who is busy preparing a cat funeral for Lily. Meanwhile, Phil tries to cater his real estate business to divorced women, and Gloria thinks her baby may be cursed.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "Farm Strong",
        episodeDate: "October 9, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "Cam's sister comes to town with good news, Phil and Claire agree to skip Luke's soccer game, Gloria refuses to admit she needs glasses, and Alex thinks Jay is cheating at Words With Friends.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "The Late Show",
        episodeDate: "October 16, 2013",
        episodeRanking: 8.1,
        episodeDescription:
          "Jay pulled a lot of strings to get reservations at the hottest new restaurant for a family adult's night out. Unfortunately, in each household everyone is running late.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "The Help",
        episodeDate: "October 23, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "Phil tries to get dad back in the dating scene, Jay does not like Gloria's new choice for a nanny, and Mitchell and Cameron are not impressed with their old friend Pepper's plans for their wedding.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "A Fair to Remember",
        episodeDate: "November 13, 2013",
        episodeRanking: 7.9,
        episodeDescription:
          'At a local fair, Phil tries to surprise Claire with an anniversary gift, Jay works as a "police officer," Manny enters a cake baking contest, Luke confronts a crush, and Cameron tries to rally the football team.',
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "ClosetCon '13",
        episodeDate: "November 20, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "Claire joins Jay at a closet convention; Cam, Mitchell and Lily visit Cam's childhood Missouri farm, Phil breaks Jay's priceless Apollo 13 model, and Hayley and Alex fight over the pizza delivery guy.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "The Big Game",
        episodeDate: "December 4, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          "Cam tries to break a school record as freshman football coach, Phil is on the verge of his first month without selling a house, Claire still struggles with being the boss's daughter, and Mitchell tries to let his boss down easily.",
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "The Old Man & the Tree",
        episodeDate: "December 11, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Luke helps Phil try to reach Canada on his elliptical machine, Jay and Manny try to get a Christmas tree in the wild, Gloria is jealous of Claire and her mom, and a mix-up lands Cam and Lily with the homeless at Christmas.",
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "And One to Grow On",
        episodeDate: "January 8, 2014",
        episodeRanking: 7.5,
        episodeDescription:
          "Phil tricks Luke into taking a dance class, but the joke is on him when the white lie indirectly lands him in the slammer. Meanwhile, Jay and Gloria throw a birthday party for Manny and Joe but are worried that Manny might be hitting on girls who are way out of his league. And Mitch and Cam are having more problems with planning their wedding when they get a rude awakening in the cutthroat world of booking a wedding venue.",
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "Under Pressure",
        episodeDate: "January 15, 2014",
        episodeRanking: 8.5,
        episodeDescription:
          "The parents go to open house at school, Alex goes see a therapist, Manny and Luke have a double date with twins, and Mitchell doesn't feel like he's \"green\" enough after speaking to his neighbor.",
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "Three Dinners",
        episodeDate: "January 22, 2014",
        episodeRanking: 8.1,
        episodeDescription:
          "Phil and Claire take Hayley to dinner to discuss her future, Shorty tells Jay that he and his wife are moving to Costa Rica, and Mitchell and Cam unknowingly interrupt a couple's surprise engagement dinner.",
      },
      {
        episodeSeason: 5,
        episodeNum: 14,
        episodeName: "iSpy",
        episodeDate: "February 5, 2014",
        episodeRanking: 7.9,
        episodeDescription:
          'Gloria is suspicious of Jay after he says "baby" in a dream, Phil and Claire spy on Haley, Luke and Manny, and Mitchell is reluctant to share some juicy gossip with Cameron.',
      },
      {
        episodeSeason: 5,
        episodeNum: 15,
        episodeName: "The Feud",
        episodeDate: "February 26, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "The feud between Phil and Gil Thorpe reaches a new level, a lice outbreak hits the family, Haley and Alex are trapped in the basement by a possum, and Manny and Gloria are embarrassed during a school field trip.",
      },
      {
        episodeSeason: 5,
        episodeNum: 16,
        episodeName: "Spring-A-Ding-Fling",
        episodeDate: "March 5, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "A returning teacher steals Cam's thunder at the school dance he organized, Mitchell discovers that his new boss is evil, Hayley goes with Phil to an awards show, and Jay and Gloria try to get Lily to confess.",
      },
      {
        episodeSeason: 5,
        episodeNum: 17,
        episodeName: "Other People's Children",
        episodeDate: "March 12, 2014",
        episodeRanking: 7.9,
        episodeDescription:
          "Gloria and Claire take Lily dress shopping, Jay teaches woodworking to Luke, Cameron tries to get out of a museum trip, and Phil helps Andy make a video for his girlfriend--which Hayley thinks is lame.",
      },
      {
        episodeSeason: 5,
        episodeNum: 18,
        episodeName: "Vegas",
        episodeDate: "March 26, 2014",
        episodeRanking: 9.2,
        episodeDescription:
          "On a trip to Las Vegas, Jay wheels and deals to get a better room, Claire tries to win back the money she lost last year, Phil tries to get into a magician's club, and Cameron chooses a bachelor party over a spa day with Mitchell.",
      },
      {
        episodeSeason: 5,
        episodeNum: 19,
        episodeName: "A Hard Jay's Night",
        episodeDate: "April 2, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "Jay's plans to host a family evening are derailed when Phil gets in trouble trying to sell Gloria's old apartment and Mitchell doesn't approve of the wedding topper Cameron's father made.",
      },
      {
        episodeSeason: 5,
        episodeNum: 20,
        episodeName: "Australia",
        episodeDate: "April 23, 2014",
        episodeRanking: 8.1,
        episodeDescription:
          "The family joins Phil in Australia as he fulfills his late mother's wishes to discover where his parents had their honeymoon.",
      },
      {
        episodeSeason: 5,
        episodeNum: 21,
        episodeName: "Sleeper",
        episodeDate: "April 30, 2014",
        episodeRanking: 7.6,
        episodeDescription:
          "Phil has to tell an elaborate lie to Claire when he messes up a household task. Gloria is put in charge of the family portrait, and Jay enters Stella in a dog show.",
      },
      {
        episodeSeason: 5,
        episodeNum: 22,
        episodeName: "Message Received",
        episodeDate: "May 7, 2014",
        episodeRanking: 8.3,
        episodeDescription:
          "Mitchell and Cameron have to sell a few prized possessions to afford their wedding. Phil and Claire are the victims of a practical joke pulled off by their kids. Jay, Gloria and Manny are each forced to confront a fear.",
      },
      {
        episodeSeason: 5,
        episodeNum: 23,
        episodeName: "The Wedding, Part 1",
        episodeDate: "May 14, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          "Preparations for Mitchell and Cameron's wedding become a logistical nightmare, especially when a wildfire pushes the wedding time four hours ahead of schedule.",
      },
      {
        episodeSeason: 5,
        episodeNum: 24,
        episodeName: "The Wedding, Part 2",
        episodeDate: "May 21, 2014",
        episodeRanking: 8.6,
        episodeDescription:
          "A series of mishaps and unruly guests threaten to undermine Mitchell and Camerson's wedding.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "The Long Honeymoon",
        episodeDate: "September 24, 2014",
        episodeRanking: 8,
        episodeDescription:
          "Cameron isn't ready to conclude his honeymoon with Mitchell after their wedding. Gloria takes Jay to task over his appearance. The Dunphys must ready themselves for the return to school.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "Don't Push",
        episodeDate: "October 1, 2014",
        episodeRanking: 8,
        episodeDescription:
          "Phil, Luke, and Haley cause nothing but aggravation for Alex when they tag along on her tour of Caltech. Jay and Gloria have trouble finding the perfect gifts for their anniversary.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "The Cold",
        episodeDate: "October 8, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "The Dunphys are down with a cold, thanks to Phil. Jay and Gloria try to help Manny deal with playing football, and Cameron doesn't know how much playtime to give him. Mitchell debates with Lily's new friend, Sydney.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Marco Polo",
        episodeDate: "October 15, 2014",
        episodeRanking: 7.9,
        episodeDescription:
          "Things become tense when the Dunphys temporarily move into a hotel, Gloria is suspicious of Manny's new girlfriend, and Mitchell discovers that he has jinxed Cameron's football team.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "Won't You Be Our Neighbor",
        episodeDate: "October 22, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "The Dunphys try to persuade the perfect couple to move in next door, Manny dates the daughter of Jay's biggest nemesis, and Mitchell and Cameron try to get Lily a new teacher.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "Halloween 3: AwesomeLand",
        episodeDate: "October 29, 2014",
        episodeRanking: 7.6,
        episodeDescription:
          "Phil takes over Halloween decorating duties from Claire. Jay is upset when he wants to dress up as Prince Charming but Gloria buys him a Shrek costume. Mitchell has a problem in court with the stenographer working in a scary costume.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "Queer Eyes, Full Hearts",
        episodeDate: "November 12, 2014",
        episodeRanking: 8.1,
        episodeDescription:
          "Haley and Andy start spending a lot of time together. Gloria wants Manny to learn Spanish at school instead of French, and a reporter takes more than a passing interest in Cameron and Mitchell's lives.",
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "Three Turkeys",
        episodeDate: "November 19, 2014",
        episodeRanking: 8.4,
        episodeDescription:
          "Phil and Luke take over Thanksgiving duties but Claire readies an emergency plan. Jay and Gloria get their holiday plans interrupted and regret not telling anyone. Cameron has to think of a way to get Lily to wear a dress for dinner.",
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "Strangers in the Night",
        episodeDate: "December 3, 2014",
        episodeRanking: 7.5,
        episodeDescription:
          "Jay and Gloria try to get out of parties they must attend. Mitchell's kind gesture to a co-worker backfires on him, and Phil and Claire think Alex is lying when she tells them she found a boyfriend.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "Haley's 21st Birthday",
        episodeDate: "December 10, 2014",
        episodeRanking: 8.1,
        episodeDescription:
          "Haley celebrates her 21st birthday, but will anything go wrong?",
      },
      {
        episodeSeason: 6,
        episodeNum: 11,
        episodeName: "The Day We Almost Died",
        episodeDate: "January 7, 2015",
        episodeRanking: 8.3,
        episodeDescription:
          "While driving out to get breakfast, the Dunphys including Manny have a near death experience causing everyone to reevaluate their lives. Claire resolves to be more fun and less uptight, Haley and Alex agree not to fight anymore, Manny refuses to ever ride in a car again, Luke wants to check off his bucket list, Phil decides to be a take action type of guy and the rest of the family has to bear the brunt of all the new attitudes.",
      },
      {
        episodeSeason: 6,
        episodeNum: 12,
        episodeName: "The Big Guns",
        episodeDate: "January 14, 2015",
        episodeRanking: 7.6,
        episodeDescription:
          "The Dunphys want their neighbors to move their boat out the driveway, Jay is determined to potty train his son while Manny learns the hard way he wasn't a special child, and Mitchell disapproves when Cam trains Lily to be Fizbo's sidekick.",
      },
      {
        episodeSeason: 6,
        episodeNum: 13,
        episodeName: "Rash Decisions",
        episodeDate: "February 4, 2015",
        episodeRanking: 7.5,
        episodeDescription:
          "When Phil thinks Luke is giving him the cold shoulder. Andy becomes Phil's new right-hand man. Meanwhile, Jay may have to give Stella away because Joe is allergic to her, and Mitchell savors being the popular guy in the office.",
      },
      {
        episodeSeason: 6,
        episodeNum: 14,
        episodeName: "Valentine's Day 4: Twisted Sister",
        episodeDate: "February 11, 2015",
        episodeRanking: 7.8,
        episodeDescription:
          "Claire has difficulty in accepting that Phil is more interested by her alter-ego Juliana. Gloria's sister tries to seduce Jay. Mitch and Cam have to get back a present for their friend Anders.",
      },
      {
        episodeSeason: 6,
        episodeNum: 15,
        episodeName: "Fight or Flight",
        episodeDate: "February 18, 2015",
        episodeRanking: 7.9,
        episodeDescription:
          "A single first-class upgrade comes between Phil and Claire, Sal abandons her baby during Mitchell and Cam's baby shower, Jay helps Manny confront a bully, and Alex and Haley help Luke break up with a girl via text message.",
      },
      {
        episodeSeason: 6,
        episodeNum: 16,
        episodeName: "Connection Lost",
        episodeDate: "February 25, 2015",
        episodeRanking: 9.5,
        episodeDescription:
          "Claire is stuck at an airport and trying to digitally track down Haley after an argument.",
      },
      {
        episodeSeason: 6,
        episodeNum: 17,
        episodeName: "Closet? You'll Love It!",
        episodeDate: "March 4, 2015",
        episodeRanking: 7.8,
        episodeDescription:
          "Jay and Claire scramble to shoot a commercial in response, but there might be some creative differences between father and daughter. A peeping-Tom in the neighborhood keeps using a drone to spy on Gloria.",
      },
      {
        episodeSeason: 6,
        episodeNum: 18,
        episodeName: "Spring Break",
        episodeDate: "March 25, 2015",
        episodeRanking: 7.4,
        episodeDescription:
          "Hayley gets Alex drunk at a concert, Phil becomes jealous of Luke's increasing abilities, Cam gets in trouble over a song at a talent show, and Mitchell and Jay try to go behind their spouses' backs.",
      },
      {
        episodeSeason: 6,
        episodeNum: 19,
        episodeName: "Grill, Interrupted",
        episodeDate: "April 1, 2015",
        episodeRanking: 7.6,
        episodeDescription:
          "Jay isn't impressed with Phil's birthday gift, Alex isn't excited about her acceptance to Cal Tech, Mitch and Cam get an inheritance, Andy sees Hayley for the first time since the hospital, and the boys sneak alcohol behind Gloria's back.",
      },
      {
        episodeSeason: 6,
        episodeNum: 20,
        episodeName: "Knock 'Em Down",
        episodeDate: "April 22, 2015",
        episodeRanking: 8.1,
        episodeDescription:
          "Jay agrees to sub on Cam's bowling team, not knowing it's an all-gay league. Phil and Claire finally bond with their neighbors over an offensive statue. Gloria and Mitchell agree to a night out with Haley to prove they're not too old.",
      },
      {
        episodeSeason: 6,
        episodeNum: 21,
        episodeName: "Integrity",
        episodeDate: "April 29, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "Jay talks Phil into standing up to Claire, but freaks out when Phil turns the tables on him. Claire lobbies for Luke to win a school award. Mitch and Cam finally address a sensitive topic while babysitting for Joe.",
      },
      {
        episodeSeason: 6,
        episodeNum: 22,
        episodeName: "Patriot Games",
        episodeDate: "May 6, 2015",
        episodeRanking: 8,
        episodeDescription:
          "Alex is not satisfied when she is named co-valedictorian, and neither is her competitor. Gloria prepares to take her citizenship exam until she finds out the real reason Jay wants her to take it. Mitch and Cam consider joining a protest.",
      },
      {
        episodeSeason: 6,
        episodeNum: 23,
        episodeName: "Crying Out Loud",
        episodeDate: "May 13, 2015",
        episodeRanking: 8.3,
        episodeDescription:
          'Claire thinks about leaving her job with her father. Phil, Haley and Luke take Alex on her "senior ditch day". Mitch and Cam are worried that Lily doesn\'t show empathy. Gloria tries to drive a wedge between Manny and his girlfriend.',
      },
      {
        episodeSeason: 6,
        episodeNum: 24,
        episodeName: "American Skyper",
        episodeDate: "May 20, 2015",
        episodeRanking: 8.8,
        episodeDescription:
          "As Alex finally graduates from high school, Phil uses Skype because he stuck in Seattle. Mitchell loses his job and Claire has to find the perfect gift for Alex while Andy is caught between Haley and Beth.",
      },
      {
        episodeSeason: 7,
        episodeNum: 1,
        episodeName: "Summer Lovin'",
        episodeDate: "September 23, 2015",
        episodeRanking: 7.8,
        episodeDescription:
          "Haley loses out on Andy and gets back with Dylan. Alex and Sanjay plan their breakup for when they leave for school. Mitchell takes up art instead of finding a new job. Jay and Gloria try to get Joe in a good preschool.",
      },
      {
        episodeSeason: 7,
        episodeNum: 2,
        episodeName: "The Day Alex Left for College",
        episodeDate: "September 30, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "Haley drops Alex off at school, where they meet her intense new roommate. Phil asks Luke to help him show a house, but he'd rather be with his friends. And everybody else is looking for an excuse to get out of Lily's soccer game.",
      },
      {
        episodeSeason: 7,
        episodeNum: 3,
        episodeName: "The Closet Case",
        episodeDate: "October 7, 2015",
        episodeRanking: 7.8,
        episodeDescription:
          "Mitchell takes a job with his dad's rival. Luke and Manny visit Alex at college to meet a girl. Gloria is upset when a cheerleader doesn't decorate Manny's locker. Phil and Claire play chicken when Dylan moves into the house.",
      },
      {
        episodeSeason: 7,
        episodeNum: 4,
        episodeName: "She Crazy",
        episodeDate: "October 14, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          'Phil builds a habitat for the duck eggs and convinces Lily to help him hatch them; Claire is anxious about telling Jay her ideas for closets; Gloria and Manny assist each other with their "crushes"; Cam bonds with frat guys.',
      },
      {
        episodeSeason: 7,
        episodeNum: 5,
        episodeName: "The Verdict",
        episodeDate: "October 21, 2015",
        episodeRanking: 7.4,
        episodeDescription:
          "Claire is excited to give Haley and Alex a great experience for \"Bring Your Daughter to Work Day\" but the staff is not making it easy, and Phil takes Luke and Manny's class out for community service day, which becomes a teachable moment in more ways than one. Elsewhere, Gloria is thrilled to be on jury duty leaving Jay to help out at Joe's pre-school and he is not happy about it at all. Cam and Mitch disagree over which of their friends to invite to their party, so could Gloria help mediate?",
      },
      {
        episodeSeason: 7,
        episodeNum: 6,
        episodeName: "The More You Ignore Me",
        episodeDate: "November 11, 2015",
        episodeRanking: 7.5,
        episodeDescription:
          "Luke is arrested, and Phil is surprised by Claire's reaction. Mitchell has a new job offer to ponder. Cameron helps Gloria uncover the secret recipe for her family's sauce. Jay is set to receive an award from the Chamber of Commerce.",
      },
      {
        episodeSeason: 7,
        episodeNum: 7,
        episodeName: "Phil's Sexy, Sexy House",
        episodeDate: "November 18, 2015",
        episodeRanking: 8.7,
        episodeDescription:
          "Haley sneaks into the fancy house Phil is selling for some alone time, but discovers that other people had the same idea. Meanwhile, Jay secretly plans a trip for the family, and Manny tries to use his brother Joe to impress a girl.",
      },
      {
        episodeSeason: 7,
        episodeNum: 8,
        episodeName: "Clean Out Your Junk Drawer",
        episodeDate: "December 2, 2015",
        episodeRanking: 7.9,
        episodeDescription:
          "Gloria pays for all three couples to have a Sunday afternoon group therapy session, but nobody else is taking it seriously. Meanwhile, Haley and Alex discuss whether they should dump their boyfriends.",
      },
      {
        episodeSeason: 7,
        episodeNum: 9,
        episodeName: "White Christmas",
        episodeDate: "December 9, 2015",
        episodeRanking: 8.3,
        episodeDescription:
          'Gloria makes plans for the family to have a "White Christmas," but the weather does not cooperate. Jay makes a decision about the future of his business. Alex makes a new friend. Haley and Andy continue to fool around in secret.',
      },
      {
        episodeSeason: 7,
        episodeNum: 10,
        episodeName: "Playdates",
        episodeDate: "January 6, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "The Dunphy kids make a last-minute birthday surprise for Mitchell, and run into Ray Liotta. Jay is uncomfortable with the father of Joe's new play date. Claire asks Phil to not pick up the bill at lunch. Cam helps Lily with a new crush.",
      },
      {
        episodeSeason: 7,
        episodeNum: 11,
        episodeName: "Spread Your Wings",
        episodeDate: "January 13, 2016",
        episodeRanking: 8,
        episodeDescription:
          "While Phil visits a lonely Alex at CalTech, Claire tries to get rid of the ducks. Gloria and Cam have to steal some peppers to fill their sauce recipe. Jay helps Mitchell with Lily's sleepover.",
      },
      {
        episodeSeason: 7,
        episodeNum: 12,
        episodeName: "Clean for a Day",
        episodeDate: "February 10, 2016",
        episodeRanking: 7.5,
        episodeDescription:
          "Claire's efforts at cleaning house brings resistance from her family and a bittersweet memory for Alex. While Jay sneaks off for flying lessons with Cameron, Mitchell tries to help Gloria learn how to play golf.",
      },
      {
        episodeSeason: 7,
        episodeNum: 13,
        episodeName: "Thunk in the Trunk",
        episodeDate: "February 17, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "Claire's new position means Phil feels like a housewife. Gloria's provocative sauce ad gets Jay jealous. Mitch and Cam rent the apartment above their own, but end up spying on their guests",
      },
      {
        episodeSeason: 7,
        episodeNum: 14,
        episodeName: "The Storm",
        episodeDate: "February 24, 2016",
        episodeRanking: 8.1,
        episodeDescription:
          "During an electrical storm, Phil tries too hard to prove that he's useful, Jay desperately tries to make an appointment at a bar, Manny has an embarrassing moment with Claire, and Mitch and Cam try to save Lily's failing birthday party.",
      },
      {
        episodeSeason: 7,
        episodeNum: 15,
        episodeName: "I Don't Know How She Does It",
        episodeDate: "March 2, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "Claire doesn't tell Phil that she's using an assistant to do all her family chores. Jay, Gloria and Manny each try to keep an embarrassing secret from each other. Mitch and Cam try to find out why they've been blacklisted at gay weddings.",
      },
      {
        episodeSeason: 7,
        episodeNum: 16,
        episodeName: "The Cover-Up",
        episodeDate: "March 16, 2016",
        episodeRanking: 8.1,
        episodeDescription:
          "Phil hides a secret about his new client from Claire, but Claire has her own secret about her yoga instructor. Jay needs help to find the identity of an online troll. Cam has an accident while forcing Lily to learn how to ride a bike.",
      },
      {
        episodeSeason: 7,
        episodeNum: 17,
        episodeName: "Express Yourself",
        episodeDate: "March 23, 2016",
        episodeRanking: 7.7,
        episodeDescription:
          "Phil talks Claire into a last-minute trip to Paris, and Andy has a wild night out in Las Vegas with Haley. Jay's bathroom remodeling project frustrates Gloria, and Mitchell can't sleep when Cameron's sister comes to visit.",
      },
      {
        episodeSeason: 7,
        episodeNum: 18,
        episodeName: "The Party",
        episodeDate: "April 6, 2016",
        episodeRanking: 8.7,
        episodeDescription:
          "Manny and Luke are in charge of babysitting Lily so that the adults can enjoy a day to themselves. Claire and Gloria have a lovely trip to the spa planned; Phil and Mitch nerd out in the movies; Jay and Cam go to a sports bar to watch the big fight. Things started going awry though when the fire alarm goes off back at the house, Claire is convinced the boys are secretly throwing a party.",
      },
      {
        episodeSeason: 7,
        episodeNum: 19,
        episodeName: "Man Shouldn't Lie",
        episodeDate: "April 13, 2016",
        episodeRanking: 7.7,
        episodeDescription:
          "Claire takes in a stray dog and tries to hide it from Phil. Gloria persuades a reluctant Jay to make a new friend. Mitchell tries to persuade the drummer in a Christian rock band he suspects of being gay to come out of the closet.",
      },
      {
        episodeSeason: 7,
        episodeNum: 20,
        episodeName: "Promposal",
        episodeDate: "May 4, 2016",
        episodeRanking: 7.5,
        episodeDescription:
          "Mitchell helps Luke out with his \"promprosal,\" sparking Cam's jealousy. Claire discovers that there is a mole for Jay in the company. Phil and Gloria confront a competitor who stole Gloria's sauce recipe.",
      },
      {
        episodeSeason: 7,
        episodeNum: 21,
        episodeName: "Crazy Train",
        episodeDate: "May 11, 2016",
        episodeRanking: 8,
        episodeDescription:
          "The family travels by train to Dede's wedding. Phil and Cam help a mystery writer with his book, Jay's comment puts the wedding in jeopardy, Claire helps Mitch write the toast, and Luke and Alex meet possible romantic interests.",
      },
      {
        episodeSeason: 7,
        episodeNum: 22,
        episodeName: "Double Click",
        episodeDate: "May 18, 2016",
        episodeRanking: 8.2,
        episodeDescription:
          "Jay struggles as he returns to the job, and Claire is in a no-win situation having to fire an employee. Mitchell and Cam fight over who keeps Lily for the summer. Meanwhile, Phil and the kids struggle with relationships and change.",
      },
      {
        episodeSeason: 8,
        episodeNum: 1,
        episodeName: "A Tale of Three Cities",
        episodeDate: "September 21, 2016",
        episodeRanking: 8.1,
        episodeDescription:
          "The three families will be in three different locations: the Dunphys will be in New York, Jay and Gloria will attend a wedding in Mexico, and Mitchell and Cameron will attend a funeral in Missouri.",
      },
      {
        episodeSeason: 8,
        episodeNum: 2,
        episodeName: "A Stereotypical Day",
        episodeDate: "September 28, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "Jay wants to make a good impression on a family moving in across the street; Manny tries to attract a radical thinker; the Pritchett family uses Alex's bout of mono to their advantage; Cam and Mitchell try to teach a message of acceptance.",
      },
      {
        episodeSeason: 8,
        episodeNum: 3,
        episodeName: "Blindsided",
        episodeDate: "October 5, 2016",
        episodeRanking: 7.4,
        episodeDescription:
          "The Dunphys and Pritchetts are competing when Luke decided his best shot at getting into college is to win the senior class president election against Manny. The election seems much more important to Jay, Gloria, and Claire, though. Now that Haley has started her own promotion business, Phil introduces her to Merv Schechter, a marketing guru. When Cam finds out his star football player is moving, he does everything in his power to keep him, which means a crowded situation at home.",
      },
      {
        episodeSeason: 8,
        episodeNum: 4,
        episodeName: "Weathering Heights",
        episodeDate: "October 12, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "Phil is excited when he's invited to appear in a real estate segment for the local news; Phil meets his weatherman hero, Rainer Shine; Jay tries to improve Manny's video interview for a college application.",
      },
      {
        episodeSeason: 8,
        episodeNum: 5,
        episodeName: "Halloween 4: The Revenge of Rod Skyhook",
        episodeDate: "October 26, 2016",
        episodeRanking: 7.7,
        episodeDescription:
          "The Dunphy's try to kick start Luke's Halloween party; Cam confronts his Halloween nemesis; Jay plans to go to a party at an old enemy's home to deliver an unforgettable trick.",
      },
      {
        episodeSeason: 8,
        episodeNum: 6,
        episodeName: "Grab It",
        episodeDate: "November 9, 2016",
        episodeRanking: 7.2,
        episodeDescription:
          "Phil considers becoming a member at Jay's favorite refuge; Claire is mistaken about her influence on Alex's choices; Cam holds back on telling Mitchell what his play is really about.",
      },
      {
        episodeSeason: 8,
        episodeNum: 7,
        episodeName: "Thanksgiving Jamboree",
        episodeDate: "November 16, 2016",
        episodeRanking: 7.3,
        episodeDescription:
          "Cameron spares no expense for his Thanksgiving jamboree; Hayley tells Phil she'd rather spend the holiday with her new boyfriend; Jay works to keep his blood pressure down; Alex and Dwight get closer.",
      },
      {
        episodeSeason: 8,
        episodeNum: 8,
        episodeName: "The Alliance",
        episodeDate: "November 30, 2016",
        episodeRanking: 8.4,
        episodeDescription:
          "Hayley's day with Rainer Shine's daughter doesn't go as expected; Luke unintentionally helps Jay with his petition; Gloria, Phil and Cam have a secret meeting.",
      },
      {
        episodeSeason: 8,
        episodeNum: 9,
        episodeName: "Snow Ball",
        episodeDate: "December 14, 2016",
        episodeRanking: 7.3,
        episodeDescription:
          "Manny and Luke's efforts to put on the school's winter dance get complicated due to a texting error; Gloria, Claire, Mitchell and Cam volunteer at the dance while Jay tries to get out of it by pretending he wants to spend time with Phil.",
      },
      {
        episodeSeason: 8,
        episodeNum: 10,
        episodeName: "Ringmaster Keifth",
        episodeDate: "January 4, 2017",
        episodeRanking: 7.4,
        episodeDescription:
          "Cam wants to throw a New Year's Day feast for the family. Phil's father arrives with his new girlfriend, who happens to be Phil's childhood babysitter. Gloria and Jay must decide who will look after little Joe if something should happen to them.",
      },
      {
        episodeSeason: 8,
        episodeNum: 11,
        episodeName: "Sarge & Pea",
        episodeDate: "January 11, 2017",
        episodeRanking: 7.2,
        episodeDescription:
          "Cam goes to the extremes to confront a parent who robbed him of a precious Lily moment during her dance recital.",
      },
      {
        episodeSeason: 8,
        episodeNum: 12,
        episodeName: "Do You Believe in Magic",
        episodeDate: "February 8, 2017",
        episodeRanking: 7.8,
        episodeDescription:
          "Phil calls upon his alter ego to inject some sizzle back into his marriage; Jay shows favoritism in his parenting; Haley and Sal try to stand up to men in their lives.",
      },
      {
        episodeSeason: 8,
        episodeNum: 13,
        episodeName: "Do It Yourself",
        episodeDate: "February 15, 2017",
        episodeRanking: 7.3,
        episodeDescription:
          "Phil talks Jay into investing in a property he has long wanted to develop; Claire's culinary ventures aren't as successful as she thinks; Cam and Mitchell try to teach Lily the value of hard work.",
      },
      {
        episodeSeason: 8,
        episodeNum: 14,
        episodeName: "Heavy Is the Head",
        episodeDate: "February 22, 2017",
        episodeRanking: 7.2,
        episodeDescription:
          "Phil and Jay get an offer to sell a land investment for a 20 percent profit but turn it down. Cam is petrified to have an MRI so Mitchell tries to ease his fear. Gloria arranges a birthday surprise at Claire's work at an inconvenient time.",
      },
      {
        episodeSeason: 8,
        episodeNum: 15,
        episodeName: "Finding Fizbo",
        episodeDate: "March 1, 2017",
        episodeRanking: 6.8,
        episodeDescription:
          "After seeing an online video of his Fizbo costume being desecrated, Cam sets out to restore the character's good name; Phil meets his soon-to-be stepbrother; Manny enlists Gloria, Claire and Haley to do a read-through of his newest play.",
      },
      {
        episodeSeason: 8,
        episodeNum: 16,
        episodeName: "Basketball",
        episodeDate: "March 8, 2017",
        episodeRanking: 7.2,
        episodeDescription:
          "NBA stars Charles Barkley and DeAndre Jordan attend the charity basketball game Phil is playing in; Gloria's nemesis tries to shame her for lack of support at Manny's school; Claire tries to keep a work mistake secret from Jay.",
      },
      {
        episodeSeason: 8,
        episodeNum: 17,
        episodeName: "Pig Moon Rising",
        episodeDate: "March 15, 2017",
        episodeRanking: 7.6,
        episodeDescription:
          "Mitchell accidentally knocks over an urn containing the ashes of Cam's beloved pet pig, Lilly; Cam tries to catch Mitchell in a lie.",
      },
      {
        episodeSeason: 8,
        episodeNum: 18,
        episodeName: "Five Minutes",
        episodeDate: "March 29, 2017",
        episodeRanking: 7.7,
        episodeDescription:
          "Mitch and Cam fight the effects of sleeping pills while rushing to catch a flight; Haley and Rainer re-evaluate their relationship; Phil and Claire meet Alex's new boyfriend when they pay her a surprise visit.",
      },
      {
        episodeSeason: 8,
        episodeNum: 19,
        episodeName: "Frank's Wedding",
        episodeDate: "April 5, 2017",
        episodeRanking: 7.4,
        episodeDescription:
          "Phil gets the Dunphy clan to show up in costume for Frank's Roaring '20s-themed wedding; Jay masters the art of saying no; Cam stands up to his sister, Pam.",
      },
      {
        episodeSeason: 8,
        episodeNum: 20,
        episodeName: "All Things Being Equal",
        episodeDate: "May 3, 2017",
        episodeRanking: 6.1,
        episodeDescription:
          "Gloria, Claire, Haley, Alex, Lily, Luke, and Manny show support for gender equality and the women's movement in their own ways; Jay and Phil butt heads over their parking attendant; Cam feels jealous when Pam prefers Mitchell's help with the baby.",
      },
      {
        episodeSeason: 8,
        episodeNum: 21,
        episodeName: "Alone Time",
        episodeDate: "May 10, 2017",
        episodeRanking: 7.7,
        episodeDescription:
          "Mitch and Jay end up at the same resort when they separately seek out a retreat from the family; Phil and Claire struggle to enjoy empty-nester life; not knowing what to do with himself while Mitch is away, Cam drops in on Gloria.",
      },
      {
        episodeSeason: 8,
        episodeNum: 22,
        episodeName: "The Graduates",
        episodeDate: "May 17, 2017",
        episodeRanking: 7.8,
        episodeDescription:
          "Jay picks up the pieces after Manny's father takes him out to celebrate graduation; the family prepares for Luke and Manny's big day.",
      },
      {
        episodeSeason: 9,
        episodeNum: 1,
        episodeName: "Lake Life",
        episodeDate: "September 27, 2017",
        episodeRanking: 7.9,
        episodeDescription:
          "Jay takes the family on a lake house in efforts to make memories.",
      },
      {
        episodeSeason: 9,
        episodeNum: 2,
        episodeName: "The Long Goodbye",
        episodeDate: "October 4, 2017",
        episodeRanking: 7.3,
        episodeDescription:
          "Manny leaves for college and it's hard to say goodbye to his family. Haley starts working for Luke at the club and Phil and Claire visit Alex at college. Cam and Mitchell have problems with their kitchen.",
      },
      {
        episodeSeason: 9,
        episodeNum: 3,
        episodeName: "Catch of the Day",
        episodeDate: "October 11, 2017",
        episodeRanking: 7.4,
        episodeDescription:
          "Phil is superstitious and thinks he's in for a day of bad luck. Mitch thinks Cam is undermining on the kitchen renovation. Can Gloria admit she had an accident?",
      },
      {
        episodeSeason: 9,
        episodeNum: 4,
        episodeName: "Sex, Lies & Kickball",
        episodeDate: "October 18, 2017",
        episodeRanking: 7.1,
        episodeDescription:
          "Jay's best friend visits from Costa Rica but spends more time with Gloria. Alex wants to prove to Claire that her relationship with Ben is sexual.",
      },
      {
        episodeSeason: 9,
        episodeNum: 5,
        episodeName: "It's the Great Pumpkin, Phil Dunphy",
        episodeDate: "October 25, 2017",
        episodeRanking: 7.3,
        episodeDescription:
          "Phil and Claire try to prove to their kids that Halloween is for adults. Mitch confronts Jay on the time it takes to renovate their kitchen. Cam oversteps as a house guest.",
      },
      {
        episodeSeason: 9,
        episodeNum: 6,
        episodeName: "Ten Years Later",
        episodeDate: "November 1, 2017",
        episodeRanking: 7.3,
        episodeDescription:
          "Claire and Mitchell try to make up for less than enthusiastic support of Jay marrying Gloria 10 years ago by organizing an anniversary party for them. Phil discovers that he failed to become a magician decades earlier due to a betrayal.",
      },
      {
        episodeSeason: 9,
        episodeNum: 7,
        episodeName: "Winner Winner Turkey Dinner",
        episodeDate: "November 15, 2017",
        episodeRanking: 7.7,
        episodeDescription:
          "Everyone is celebrating their triumph on the thanksgiving while the truth is that all of them cheated.",
      },
      {
        episodeSeason: 9,
        episodeNum: 8,
        episodeName: "Brushes with Celebrity",
        episodeDate: "November 29, 2017",
        episodeRanking: 7.4,
        episodeDescription:
          "Each member of the family reminisce about run-ins with celebrities.",
      },
      {
        episodeSeason: 9,
        episodeNum: 9,
        episodeName: "Tough Love",
        episodeDate: "December 6, 2017",
        episodeRanking: 7.2,
        episodeDescription:
          "Phil and Claire go out of their comfort zone when he goes on a survival camping trip and she has to drive a big rig. Gloria is upset over Manny dating his female professor. A student in Cameron's detention class is an undercover cop.",
      },
      {
        episodeSeason: 9,
        episodeNum: 10,
        episodeName: "No Small Feet",
        episodeDate: "December 13, 2017",
        episodeRanking: 7.1,
        episodeDescription:
          "When Claire lands a big opportunity for Pritchett's Closets, Jay expects a little validation for his contribution and takes over her celebration when he doesn't get one. Pam's charming but grifting ex-boyfriend Bo (James Van Der Beek) shows up to win his family back and Mitchell sees this as the perfect opportunity to get Pam out of the house. Meanwhile, Luke and Alex stumble upon a successful online business (online store for feet fetishists) that finally gets them on their feet. Finally, Phil has to make a sale to pay the bills but his new age client comes to ...",
      },
      {
        episodeSeason: 9,
        episodeNum: 11,
        episodeName: "He Said, She Shed",
        episodeDate: "January 3, 2018",
        episodeRanking: 7.1,
        episodeDescription:
          "Jay teaches Joe how to play golf but he and Gloria both push him into becoming too competitive. Mitch and Cam host a party for Lily and her friends. Claire thinks that the Homeowners Association turned her application to build a shed on her own property.",
      },
      {
        episodeSeason: 9,
        episodeNum: 12,
        episodeName: "Dear Beloved Family",
        episodeDate: "January 10, 2018",
        episodeRanking: 7.4,
        episodeDescription:
          'Phil is sick and wants Claire to find his surgery bear. Jay and Gloria are having issues over explaining Joe about "the death" scenario whilst Cam is furious at Mitchell as he has a crush on someone.',
      },
      {
        episodeSeason: 9,
        episodeNum: 13,
        episodeName: "In Your Head",
        episodeDate: "January 17, 2018",
        episodeRanking: 7.3,
        episodeDescription:
          "When Luke goes missing after a night out in a sketchy neighborhood, Manny, Phil and Gloria team up to track him down. Meanwhile, Haley is desperate to land an interview with the creator of a popular lifestyle website and interrupts Alex during one of her college classes. Alex's professor, Arvin Fennerman (Chris Geere), then proceeds to try and give Haley a piece of his mind.",
      },
      {
        episodeSeason: 9,
        episodeNum: 14,
        episodeName: "Written in the Stars",
        episodeDate: "February 28, 2018",
        episodeRanking: 7.5,
        episodeDescription:
          "On Valentine's Day, Mitch and Cam ruin Luke's date, Jay and Gloria do some role playing and Joe has a crush on Claire.",
      },
      {
        episodeSeason: 9,
        episodeNum: 15,
        episodeName: "Spanks for the Memories",
        episodeDate: "March 7, 2018",
        episodeRanking: 6.9,
        episodeDescription:
          "When Jay overhears Gloria talking about spanking, he thinks she's bored in the bedroom. After Mitchell gets a great new job, he and Cam throw a party to rub it in Cam's friend's face.",
      },
      {
        episodeSeason: 9,
        episodeNum: 16,
        episodeName: "Wine Weekend",
        episodeDate: "March 21, 2018",
        episodeRanking: 7.5,
        episodeDescription:
          "The family go wine tasting and stay in Haley's boss's country house which has one important rule, don't touch the tiara. Meanwhile, Gloria and Mitch are invited to a party at Oprah's house but can't bring anyone else.",
      },
      {
        episodeSeason: 9,
        episodeNum: 17,
        episodeName: "Royal Visit",
        episodeDate: "March 28, 2018",
        episodeRanking: 7.2,
        episodeDescription:
          "Haley's brilliant astrophysicist boyfriend and Alex's simple but heroic fireman hunk meet the family. Jay and Gloria meet Joe's pal's perfect parents. On couples retreat, anechoic chamber traumatizes Mitch and Cam meets his baseball idol.",
      },
      {
        episodeSeason: 9,
        episodeNum: 18,
        episodeName: "Daddy Issues",
        episodeDate: "April 4, 2018",
        episodeRanking: 8.2,
        episodeDescription:
          "When Jorge, Gloria's ex-boyfriend, stops by for a visit, his resemblance to Manny makes Jay question Manny's paternity. Phil agonizes over the perfect gift for Claire for the anniversary. Cam and Mitch deal with Lily's women's troubles.",
      },
      {
        episodeSeason: 9,
        episodeNum: 19,
        episodeName: "CHiPs and Salsa",
        episodeDate: "April 11, 2018",
        episodeRanking: 7,
        episodeDescription:
          "When Haley hears that her loopy boss is looking for a product with the magical properties of peppers, she tries to gain favor by convincing Gloria to sell her salsa to NERP; Mitchell gets Cam the police ride-along he's always dreamed of.",
      },
      {
        episodeSeason: 9,
        episodeNum: 20,
        episodeName: "Mother!",
        episodeDate: "May 2, 2018",
        episodeRanking: 7.4,
        episodeDescription:
          "When DeDe arrives for a surprise visit, Mitchell and Cam come to an understanding regarding her influence on their lives. Phil, Luke, Alex and Haley have bad news for Claire and compete for the right timing to tell her.",
      },
      {
        episodeSeason: 9,
        episodeNum: 21,
        episodeName: "The Escape",
        episodeDate: "May 9, 2018",
        episodeRanking: 7.5,
        episodeDescription:
          "Haley meets Arvin's parents but when things don't go as planned, fate leads to an unexpected reunion with all of her ex-boyfriends. Meanwhile, the family seizes on a nursing home visit with Jay's mean sister, Becky, to settle old scores. But as Jay, Claire and Mitchell compete for her time, Phil, Cam and Gloria end up getting trapped in the home's basement with no way out.",
      },
      {
        episodeSeason: 9,
        episodeNum: 22,
        episodeName: "Clash of Swords",
        episodeDate: "May 16, 2018",
        episodeRanking: 6.7,
        episodeDescription:
          'In the Season 9 finale, Mitchell sneaks out to "Hero-Con" with fanboy Phil, dressed as their favorite characters from the show "Clash of Swords." It\'s great until Phil commits the ultimate fan faux pas. In a clash of another kind, Gloria\'s dinosaur party for Joe is ruined when her nemesis, Dr. Donna Duncan, upstages her with a far bigger and better party right next door.',
      },
      {
        episodeSeason: 10,
        episodeNum: 1,
        episodeName: "I Love a Parade",
        episodeDate: "September 26, 2018",
        episodeRanking: 6.7,
        episodeDescription:
          "The Pritchett-Dunphy-Tucker clan are going to be setting off more than a few fireworks when they get together at the annual Fourth of July parade where Jay will be acting as the grand marshal. Meanwhile, Haley's goodbye with Arvin before his trip to Switzerland doesn't go as well as she pictured it and is distracted by the return of an old flame.",
      },
      {
        episodeSeason: 10,
        episodeNum: 2,
        episodeName: "Kiss and Tell",
        episodeDate: "October 3, 2018",
        episodeRanking: 8,
        episodeDescription:
          "Haley needs a little help deciding whether or not to tell Arvin about her kiss with Dylan and goes to Mitch and Cam for their advice. Meanwhile, Gloria suspects Manny's Canadian girlfriend is made up and wants to find out the real truth.",
      },
      {
        episodeSeason: 10,
        episodeNum: 3,
        episodeName: "A Sketchy Area",
        episodeDate: "October 10, 2018",
        episodeRanking: 7.2,
        episodeDescription:
          "Phil stumbles into an exciting new career after dropping by Luke's college; while Claire deals with her dad, Jay, and the merger of Pritchett's Closets with a tech-savvy, hipper company. Meanwhile, Mitch's new high-profile case as an assistant district attorney is marred by an unflattering courtroom sketch by the resident artist.",
      },
      {
        episodeSeason: 10,
        episodeNum: 4,
        episodeName: "Torn Between Two Lovers",
        episodeDate: "October 17, 2018",
        episodeRanking: 7.3,
        episodeDescription:
          "Haley can't seem to choose between her past and present relationships and is forced to make a decision. Meanwhile, Manny returns to college and dorm life while his girlfriend, Sherry, continues to stay at Jay and Gloria's, and might be overstaying her welcome.",
      },
      {
        episodeSeason: 10,
        episodeNum: 5,
        episodeName: "Good Grief",
        episodeDate: "October 24, 2018",
        episodeRanking: 7.3,
        episodeDescription:
          "It's an epic Halloween full of costumes, tricks and treats for the Dunphy-Pritchett-Tucker clan as they deal with huge, unexpected news.",
      },
      {
        episodeSeason: 10,
        episodeNum: 6,
        episodeName: "On the Same Paige",
        episodeDate: "October 31, 2018",
        episodeRanking: 7.5,
        episodeDescription:
          "Phil learns that his real estate class will be cancelled if any additional students drop it. So, he turns on his powers of charm and flattery to keep one particular student, Paige, from leaving while Luke asks her out by inviting her over to dinner. Meanwhile, Jay may unknowingly be flirting with the mother of Joe's classmate and tries to set boundaries",
      },
      {
        episodeSeason: 10,
        episodeNum: 7,
        episodeName: "Did the Chicken Cross the Road?",
        episodeDate: "November 7, 2018",
        episodeRanking: 7.4,
        episodeDescription:
          "Alex has an interview for a job and Luke helps her vanquish her fears. Phil believes that he was a Russian Spy in High School. Haley learns unexpected news while Cameron adopts a chicken. Jay and Gloria disagree over Joe's education.",
      },
      {
        episodeSeason: 10,
        episodeNum: 8,
        episodeName: "Kids These Days",
        episodeDate: "November 28, 2018",
        episodeRanking: 7.2,
        episodeDescription:
          "Haley needs motherly advice from Claire as she considers her future with Dylan and her career; Jay and Cam's less than politically correct coaching style earns them a class on sensitivity; Mitch runs into Phil's nemesis at an unlikely place.",
      },
      {
        episodeSeason: 10,
        episodeNum: 9,
        episodeName: "Putting Down Roots",
        episodeDate: "December 5, 2018",
        episodeRanking: 7.5,
        episodeDescription:
          "When Dede's husband comes to town to bequeath her possessions to the family, Jay and Gloria feel sorry for him and invite him to stay with them while he is in town.",
      },
      {
        episodeSeason: 10,
        episodeNum: 10,
        episodeName: "Stuck in a Moment",
        episodeDate: "December 12, 2018",
        episodeRanking: 7.5,
        episodeDescription:
          "Haley works to figure out the best time to give the family a Christmas gift they will never forget; Phil borrows the family Christmas tree for a house-showing; Jay, Gloria and Joe deal with unwelcome holiday visitors.",
      },
      {
        episodeSeason: 10,
        episodeNum: 11,
        episodeName: "A Moving Day",
        episodeDate: "January 9, 2019",
        episodeRanking: 7,
        episodeDescription:
          "Claire and Phil aren't convinced that Haley and Dylan can make it on their own as they move them into their new apartment before the baby arrives; Pameron gets out of prison early and has a bone to pick with Mitchell.",
      },
      {
        episodeSeason: 10,
        episodeNum: 12,
        episodeName: "Blasts from the Past",
        episodeDate: "January 16, 2019",
        episodeRanking: 6.7,
        episodeDescription:
          "Phil and Claire postpone their planned cycling tour through Italy when Dylan's hippy mother comes to meet them; Mitch's old issue of Playgirl magazine makes Cam jealous; Gloria and Manny investigate the legend of Jay's heroic great uncle.",
      },
      {
        episodeSeason: 10,
        episodeNum: 13,
        episodeName: "Whanex?",
        episodeDate: "January 23, 2019",
        episodeRanking: 6.8,
        episodeDescription:
          "Cam must contend with a bully at the school; Jay has technical trouble during a video conference; the local mall holds a photo shoot for its new ad campaign, and Gloria tricks Phil and Joe into participating.",
      },
      {
        episodeSeason: 10,
        episodeNum: 14,
        episodeName: "We Need to Talk About Lily",
        episodeDate: "January 30, 2019",
        episodeRanking: 7.3,
        episodeDescription:
          "Phil thinks he found Pepper his dream home; in an attempt to connect with Lily, Mitch and Cam get invited to an exclusive event for her favorite vlogger.",
      },
      {
        episodeSeason: 10,
        episodeNum: 15,
        episodeName: "SuperShowerBabyBowl",
        episodeDate: "February 20, 2019",
        episodeRanking: 7.2,
        episodeDescription:
          "Jay hosts a Super Bowl party at the same time as Claire hosts a baby shower for Haley, both at Jay's house.",
      },
      {
        episodeSeason: 10,
        episodeNum: 16,
        episodeName: "Red Alert",
        episodeDate: "February 27, 2019",
        episodeRanking: 6.9,
        episodeDescription:
          "Lily reaches a womanly milestone that Cam and Mitch are not prepared for at all, so they call in reinforcements.",
      },
      {
        episodeSeason: 10,
        episodeNum: 17,
        episodeName: "The Wild",
        episodeDate: "March 13, 2019",
        episodeRanking: 7.2,
        episodeDescription:
          "Mitch, Cam and Phil crash Jay's annual hiking trip to find an elusive bald eagle after Gloria asks them to keep an eye on him; Gloria, Alex, Claire and Haley get together to plan her baby shower.",
      },
      {
        episodeSeason: 10,
        episodeNum: 18,
        episodeName: "Stand by Your Man",
        episodeDate: "March 20, 2019",
        episodeRanking: 7.2,
        episodeDescription:
          "Dylan and Luke are really impressed with Bill's tales of heroism and survival as a firefighter, which make Phil feel emasculated.",
      },
      {
        episodeSeason: 10,
        episodeNum: 19,
        episodeName: "Yes-Woman",
        episodeDate: "April 3, 2019",
        episodeRanking: 7.5,
        episodeDescription:
          "In an effort to be less negative, Claire inadvertently approves of Luke's new relationship with someone from his work; Phil tries to surprise Alex at school right before she receives an award she didn't tell him about.",
      },
      {
        episodeSeason: 10,
        episodeNum: 20,
        episodeName: "Can't Elope",
        episodeDate: "April 10, 2019",
        episodeRanking: 8,
        episodeDescription:
          "Haley and Dylan's plan to quietly elope before the babies are born doesn't go as smoothly as they had hoped; Jay continues to try and get his new business off the ground by courting an Instagram celebrity.",
      },
      {
        episodeSeason: 10,
        episodeNum: 21,
        episodeName: "Commencement",
        episodeDate: "May 1, 2019",
        episodeRanking: 7.2,
        episodeDescription:
          "Cam finally gets a chance to shine when he is asked to preside over the high school graduation ceremony at the last minute; Jay gives the commencement address; Claire runs into her former high school rival who brings out the worst in her.",
      },
      {
        episodeSeason: 10,
        episodeNum: 22,
        episodeName: "A Year of Birthdays",
        episodeDate: "May 8, 2019",
        episodeRanking: 8.7,
        episodeDescription:
          "The birth of Haley and Dylan's twins approaches as a look back at how the family celebrated their birthdays over the past year is discussed.",
      },
      {
        episodeSeason: 11,
        episodeNum: 1,
        episodeName: "New Kids on the Block",
        episodeDate: "September 25, 2019",
        episodeRanking: 6.6,
        episodeDescription:
          "Haley is determined to follow the advice in her parenting books, but Phil and Claire think their old methods are better; Manny is set to direct Jay's dog bed commercial in hopes of winning his ex-girlfriend back.",
      },
      {
        episodeSeason: 11,
        episodeNum: 2,
        episodeName: "Snapped",
        episodeDate: "October 2, 2019",
        episodeRanking: 7.3,
        episodeDescription:
          "Claire needs to get everyone out of the house before they make her look bad in front of a reporter from an important women's business magazine; Cam and Mitchell welcome a high-tech smart refrigerator into their home; Phil is suspicious of Gloria when a student of his is injured.",
      },
      {
        episodeSeason: 11,
        episodeNum: 3,
        episodeName: "Perfect Pairs",
        episodeDate: "October 9, 2019",
        episodeRanking: 7.2,
        episodeDescription:
          "Phil, Claire, Alex and Luke realize the babies might help them with a few things on their to-do lists, so they offer to give Haley the day off.",
      },
      {
        episodeSeason: 11,
        episodeNum: 4,
        episodeName: "Pool Party",
        episodeDate: "October 16, 2019",
        episodeRanking: 7.2,
        episodeDescription:
          "Mitch and Cam help Lily overcome her insecurities about wearing a bathing suit to a pool party; with Gloria's new internship taking up so much of her time, Jay starts feeling particularly neglected.",
      },
      {
        episodeSeason: 11,
        episodeNum: 5,
        episodeName: "The Last Halloween",
        episodeDate: "October 30, 2019",
        episodeRanking: 7.8,
        episodeDescription:
          "Phil is determined to scare Claire on Halloween; Gloria feels self-conscious about her age when someone correctly assumes she is Jay's wife; Mitch and Cam go to a carnival after Lily decides to go to her first Halloween party alone.",
      },
      {
        episodeSeason: 11,
        episodeNum: 6,
        episodeName: "A Game of Chicken",
        episodeDate: "November 6, 2019",
        episodeRanking: 6.8,
        episodeDescription:
          "Gloria uses her alone time with the twins as an opportunity to secretly baptize them before Haley and Dylan get home; Claire deals with the fallout from the smart closet fiasco; Cam feuds with his school's mascot.",
      },
      {
        episodeSeason: 11,
        episodeNum: 7,
        episodeName: "The Last Thanksgiving",
        episodeDate: "November 20, 2019",
        episodeRanking: 7.3,
        episodeDescription:
          "Cameron and Mitchell's friends mistakenly assume they have split up; Haley attempts to cook Thanksgiving dinner as a thank you for Claire and Phil's support with the twins; Jay invites Phil and Dylan out to fly his model plane.",
      },
      {
        episodeSeason: 11,
        episodeNum: 8,
        episodeName: "Tree's a Crowd",
        episodeDate: "December 4, 2019",
        episodeRanking: 7,
        episodeDescription:
          "The Dunphy house is bursting at the seams when Dylan's hippie mom moves in and Claire's lonely stepdad, Jerry, wants to pay them a visit; Jay and Gloria attempt to help Manny get over his big breakup with Sherry.",
      },
      {
        episodeSeason: 11,
        episodeNum: 9,
        episodeName: "The Last Christmas",
        episodeDate: "December 11, 2019",
        episodeRanking: 7.6,
        episodeDescription:
          "Mitchell suspects Cameron has an ulterior motive for keeping everyone happy for Christmas dinner; Claire tries to dodge Jay's job offer to work at his dog bed company; Luke deals with the consequences of kissing Manny's ex-girlfriend.",
      },
      {
        episodeSeason: 11,
        episodeNum: 10,
        episodeName: "The Prescott",
        episodeDate: "January 8, 2020",
        episodeRanking: 8.1,
        episodeDescription:
          "Alex's company puts her up at a new luxury apartment building with a number of high-profile residents that the family is eager to take advantage of; Phil is on a mission to review the restaurant's famous sliders for his food blog.",
      },
      {
        episodeSeason: 11,
        episodeNum: 11,
        episodeName: "Legacy",
        episodeDate: "January 15, 2020",
        episodeRanking: 7.7,
        episodeDescription:
          "Phil pays a visit to his dad after hearing some concerning news about him; Jay gives Claire and Mitch a bunch of their old childhood memorabilia that triggers them to reevaluate a long-held story about their first family vacation.",
      },
      {
        episodeSeason: 11,
        episodeNum: 12,
        episodeName: "Dead on a Rival",
        episodeDate: "January 22, 2020",
        episodeRanking: 6.8,
        episodeDescription:
          "Mitchell learns a valuable lesson when a former resident of the house shows up unexpectedly; the Dunphy's old neighbor-turned-tech-titan, Kenneth, comes to visit with a big surprise for Phil; Manny's dad has a big opportunity for his son.",
      },
      {
        episodeSeason: 11,
        episodeNum: 13,
        episodeName: "Paris",
        episodeDate: "February 12, 2020",
        episodeRanking: 7.7,
        episodeDescription:
          "The Pritchett-Dunphy-Tucker clan heads to Paris so Jay can accept a lifetime achievement award for his work in the closet industry; Claire has a secret rendezvous; Cam finally gets a chance to perform as Fizbo on the streets of Paris.",
      },
      {
        episodeSeason: 11,
        episodeNum: 14,
        episodeName: "Spuds",
        episodeDate: "February 19, 2020",
        episodeRanking: 7.6,
        episodeDescription:
          "Phil and Claire take Haley and Dylan to dinner to reassure them they are not bad parents; Mitch and Cam chaperone on Lily's first date; Jay and Gloria attend Joe's school play.",
      },
      {
        episodeSeason: 11,
        episodeNum: 15,
        episodeName: "Baby Steps",
        episodeDate: "March 18, 2020",
        episodeRanking: 7.2,
        episodeDescription:
          "Claire lands an interview for her dream job but is thwarted on her way to the interview by Phil's tricky staircase; Cam and Mitch debate the pros and cons of adopting another baby.",
      },
      {
        episodeSeason: 11,
        episodeNum: 16,
        episodeName: "I'm Going to Miss This",
        episodeDate: "April 1, 2020",
        episodeRanking: 7.3,
        episodeDescription:
          "Mitchell is having a hard time letting go of his old life and Gloria steps in to help him; Haley, Luke and Alex decide to throw a party at the Dunphy house when Claire and Phil leave for a trip; Dylan's mom takes the twins for the night.",
      },
      {
        episodeSeason: 11,
        episodeNum: 17,
        episodeName: "Finale Part 1",
        episodeDate: "April 8, 2020",
        episodeRanking: 8.3,
        episodeDescription:
          "Mitchell and Cam settle into their new normal; Phil and Claire decide that one of the kids needs to move out; as Gloria becomes more successful at work, she notices Jay and the kids don't seem to need her as much.",
      },
      {
        episodeSeason: 11,
        episodeNum: 18,
        episodeName: "Finale Part 2",
        episodeDate: "April 8, 2020",
        episodeRanking: 8.6,
        episodeDescription:
          "Phil and Claire tell their kids that one of them have to move out as there is not enough room for 3 adult children and grand kids anymore. Cam is offered his dream job and Jay attempts to learn how to speak like a true Colombian.",
      },
    ],
  },
  {
    showId: 18,
    showName: "True Detective",
    showYear: 2014,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65Aji1CFFgB6VJ5PVNWs9dP4Pr2icD0gagQ&usqp=CAU",
    showGenre: "Crime, Drama, Mystery",
    showCast: "Vince Vaughn, Colin Farrell",
    showSeasonsNum: 3,
    showDescription:
      "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
    slug: "true-detective",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "The Long Bright Dark",
        episodeDate: "January 12, 2014",
        episodeRanking: 8.9,
        episodeDescription:
          "In 2012, former detective partners Rust Cohle and Martin Hart recap one of their very first cases together involving a serial killer, back in 1995.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Seeing Things",
        episodeDate: "January 19, 2014",
        episodeRanking: 8.8,
        episodeDescription:
          "Cohle and Hart travel around trying to track down leads to their case. Darker sides of Hart's personal and family lives are revealed.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "The Locked Room",
        episodeDate: "January 26, 2014",
        episodeRanking: 9.1,
        episodeDescription:
          "Cohle and Martin finally get a new wind in the case and can confirm a suspect. Martin's mistress gets on with somebody else leaving him furious. Cohle's theory becomes increasingly more convincing than ever.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Who Goes There",
        episodeDate: "February 9, 2014",
        episodeRanking: 9.6,
        episodeDescription:
          "Martin is faced with marital problems. The search for Reggie Ledoux leads the detectives to a motorcycle gang called the Iron Crusaders, which Rust worked undercover in the past.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "The Secret Fate of All Life",
        episodeDate: "February 16, 2014",
        episodeRanking: 9.5,
        episodeDescription:
          "Hart and Cohle share the spoils of a solved case; Papania and Gilbough confront the detectives with troubling new intelligence.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Haunted Houses",
        episodeDate: "February 23, 2014",
        episodeRanking: 9.2,
        episodeDescription:
          "Cohle's activities in 2002, when his partnership with Hart disintegrated and he quit the force, are recalled by Maggie.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "After You've Gone",
        episodeDate: "March 2, 2014",
        episodeRanking: 9.2,
        episodeDescription:
          "Cohle and Hart try to discover if a series of missing persons reports could be related to the Dora Lange murder and the Tuttle family.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "Form and Void",
        episodeDate: "March 9, 2014",
        episodeRanking: 9.5,
        episodeDescription:
          "An overlooked detail provides Hart and Cohle with an important new lead in their 17-year-old case.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "The Western Book of the Dead",
        episodeDate: "June 21, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "A bizarre murder brings together three police officers and a career criminal in the corrupt city of Vinci, California.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Night Finds You",
        episodeDate: "June 28, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "Ray, Ani, and Paul are assigned to Casper's murder case. Frank tries to keep his business deals going, even after Caspere's death.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Maybe Tomorrow",
        episodeDate: "July 5, 2015",
        episodeRanking: 7.4,
        episodeDescription:
          "Paul works the prostitute angle; Frank receives the first casualty in a secret war.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Down Will Come",
        episodeDate: "July 12, 2015",
        episodeRanking: 8.2,
        episodeDescription:
          "The detail works a pawn shop lead to close in on a suspect in the Caspere case. Frank revisits his past to pay for the present.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "Other Lives",
        episodeDate: "July 19, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "Ray and Frank consider new life choices; Ani and Paul go up to the coast to follow a lead.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Church in Ruins",
        episodeDate: "July 26, 2015",
        episodeRanking: 8.3,
        episodeDescription:
          "Desperate to locate a missing woman with intel about Caspere, Frank meets with Mexican drug dealers; Ani infiltrates an exclusive inner circle, with Ray and Paul keeping close tabs.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Black Maps and Motel Rooms",
        episodeDate: "August 2, 2015",
        episodeRanking: 8.7,
        episodeDescription:
          "As Ani, Paul, and Ray get closer to finding out the truth about Caspere, circumstances become more dangerous for them all and everyone around them. Frank deals with an inside betrayal, learns important information, and plans his next move.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Omega Station",
        episodeDate: "August 9, 2015",
        episodeRanking: 8.1,
        episodeDescription:
          "Ray and Ani attempt to escape their desperate situation while Frank ties up some loose ends.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "The Great War and Modern Memory",
        episodeDate: "January 13, 2019",
        episodeRanking: 8.6,
        episodeDescription:
          "The disappearance of a young brother and sister leads to a frantic search which will haunt one detective for the rest of his life.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "Kiss Tomorrow Goodbye",
        episodeDate: "January 13, 2019",
        episodeRanking: 8.1,
        episodeDescription:
          "As the search for Julie continues, the doll discovered at the crime scene provokes a reaction, while Wayne and Roland learn of a potential suspect.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "The Big Never",
        episodeDate: "January 20, 2019",
        episodeRanking: 7.8,
        episodeDescription:
          "The search for Julie brings Wayne and Amelia together again, Wayne and Roland retrace their investigation to spot missed clues, while one White Finger resident receives a warning.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "The Hour and the Day",
        episodeDate: "January 27, 2019",
        episodeRanking: 8.1,
        episodeDescription:
          "Wayne and Roland investigate possible connections between the local church and the Purcell crimes as tensions in West Finger reach boiling point.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "If You Have Ghosts",
        episodeDate: "February 1, 2019",
        episodeRanking: 8.4,
        episodeDescription:
          "In 1980, all hell breaks loose at the home of Woodard, while in the present, Wayne and Roland reconnect after Wayne makes a discovery.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Hunters in the Dark",
        episodeDate: "February 10, 2019",
        episodeRanking: 8.4,
        episodeDescription:
          "In 1990, Wayne and Roland revisit the Purcell case to uncover previously hidden or forgotten clues, while Tom looks for answers and two faces from the past resurface.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "The Final Country",
        episodeDate: "February 17, 2019",
        episodeRanking: 8.6,
        episodeDescription:
          "In 1990, following an apparent suicide, the Purcell case is deemed solved, but Wayne and Roland have other ideas, which leads them to a defining course of action.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Now Am Found",
        episodeDate: "February 24, 2019",
        episodeRanking: 8,
        episodeDescription:
          "Wayne struggles to hold on to his memories, and his grip on reality, as the truth behind the Purcell case is finally revealed.",
      },
    ],
  },
  {
    showId: 19,
    showName: "How I Met Your Mother",
    showYear: 2005,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_w5sPM3VDFSR2Qk3X2dI_qhjB7SG4Ls88Q&usqp=CAU",
    showGenre: "Comedy, Drama, Romance",
    showCast: "Josh Radnor, Jason Segel",
    showSeasonsNum: 9,
    showDescription:
      "A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.",
    slug: "how-i-met-your-mother",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Pilot",
        episodeDate: "September 19, 2005",
        episodeRanking: 8.5,
        episodeDescription:
          "It's the year 2030 and an older Ted Mosby is telling the story to his son and daughter about how he met and will eventually marry their mother. This is where we meet for the first time Ted, Lily, Marshall, Barney and Robin.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "Purple Giraffe",
        episodeDate: "September 26, 2005",
        episodeRanking: 8.2,
        episodeDescription:
          "Ted throws a party in hopes of seeing Robin again, but when she doesn't show up, he throws another... and another.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "The Sweet Taste of Liberty",
        episodeDate: "October 3, 2005",
        episodeRanking: 8.1,
        episodeDescription:
          "Barney's plan to meet girls at the airport backfires as he and Ted are picked up by airport security. Meanwhile, Lily gets jealous of Robin.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "Return of the Shirt",
        episodeDate: "October 10, 2005",
        episodeRanking: 8,
        episodeDescription:
          "Ted reconnects with an old flame and soon remembers why he dumped her in the first place. Barney pays Robin to say outrageous things on the air.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "Okay Awesome",
        episodeDate: "October 17, 2005",
        episodeRanking: 8.3,
        episodeDescription:
          "Robin, Ted, and Barney go to a hot new club, leaving the engaged Marshall and Lily to a more adult, albeit boring, evening of wine tasting.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "The Slutty Pumpkin",
        episodeDate: "October 24, 2005",
        episodeRanking: 8.1,
        episodeDescription:
          "Marshall and Lily enter a Halloween costume party and Robin brings her new boyfriend. Ted and Barney go to the same Halloween party they go to every year where Ted looks for his lost love, the Slutty Pumpkin.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "Matchmaker",
        episodeDate: "November 7, 2005",
        episodeRanking: 7.7,
        episodeDescription:
          "When Ted signs up with a matchmaking service, he learns that love is not a science. Marshall and Lily confront a creature living in their apartment.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "The Duel",
        episodeDate: "November 14, 2005",
        episodeRanking: 8.1,
        episodeDescription:
          "Lily moves in with Marshall and Ted, and when Ted suspects that he's being edged out of the apartment, he and Marshall decide to settle it like men.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "Belly Full of Turkey",
        episodeDate: "November 21, 2005",
        episodeRanking: 8,
        episodeDescription:
          "Thanksgiving with Marshall's family is stressful when Lily thinks she might be pregnant. Robin, Barney, and Ted spend the holiday volunteering.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "The Pineapple Incident",
        episodeDate: "November 28, 2005",
        episodeRanking: 9.2,
        episodeDescription:
          "After an alcohol-induced blackout, Ted awakens to find a strange woman and a pineapple in his bed.",
      },
      {
        episodeSeason: 1,
        episodeNum: 11,
        episodeName: "The Limo",
        episodeDate: "December 19, 2005",
        episodeRanking: 8.3,
        episodeDescription:
          "It's New Year's Eve 2005 and Ted spends a large portion of his Christmas bonus for a limo for him and the gang. In addition, he has outlined a plan for how they will ring in the New Year. Unfortunately, things don't always go as planned.",
      },
      {
        episodeSeason: 1,
        episodeNum: 12,
        episodeName: "The Wedding",
        episodeDate: "January 9, 2006",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted's romantic hopes are dashed when he invites Robin to a fancy wedding, only to discover that the bride-to-be won't allow him to bring a date.",
      },
      {
        episodeSeason: 1,
        episodeNum: 13,
        episodeName: "Drumroll, Please",
        episodeDate: "January 23, 2006",
        episodeRanking: 8.7,
        episodeDescription:
          "Robin is emotionally torn when Ted meets an exciting new woman, Victoria, at the wedding. Afterward, though, he doesn't know how to contact her.",
      },
      {
        episodeSeason: 1,
        episodeNum: 14,
        episodeName: "Zip, Zip, Zip",
        episodeDate: "February 6, 2006",
        episodeRanking: 8.2,
        episodeDescription:
          "Hiding in the bathroom, Marshall and Lily wait for Ted and Victoria to consummate their relationship, and Barney gets the wrong idea from Robin.",
      },
      {
        episodeSeason: 1,
        episodeNum: 15,
        episodeName: "Game Night",
        episodeDate: "February 27, 2006",
        episodeRanking: 9.1,
        episodeDescription:
          "Marshall's game night leads to some startling and very embarrassing revelations.",
      },
      {
        episodeSeason: 1,
        episodeNum: 16,
        episodeName: "Cupcake",
        episodeDate: "March 6, 2006",
        episodeRanking: 7.9,
        episodeDescription:
          "Just as Ted and Victoria's relationship is beginning to flourish, she's offered a scholarship to a culinary institute in Germany.",
      },
      {
        episodeSeason: 1,
        episodeNum: 17,
        episodeName: "Life Among the Gorillas",
        episodeDate: "March 20, 2006",
        episodeRanking: 7.7,
        episodeDescription:
          "With Victoria in Germany, Ted faces the pitfalls of long-distance relationships. Marshall has trouble fitting in at Barney's company.",
      },
      {
        episodeSeason: 1,
        episodeNum: 18,
        episodeName: "Nothing Good Happens After 2 AM",
        episodeDate: "April 10, 2006",
        episodeRanking: 8.5,
        episodeDescription:
          "With Victoria on his mind, Ted has conflicted feelings when Robin invites him over for a late-night rendevouz.",
      },
      {
        episodeSeason: 1,
        episodeNum: 19,
        episodeName: "Mary the Paralegal",
        episodeDate: "April 24, 2006",
        episodeRanking: 8.8,
        episodeDescription:
          "Ted needs a date to take to Robin's awards banquet, so Barney hooks him up with Mary, who may be a call girl.",
      },
      {
        episodeSeason: 1,
        episodeNum: 20,
        episodeName: "Best Prom Ever",
        episodeDate: "May 1, 2006",
        episodeRanking: 7.9,
        episodeDescription:
          "With her wedding day fast approaching, Lily, along with Barney and Robin, crashes a high school prom to scope out a potential band for the reception.",
      },
      {
        episodeSeason: 1,
        episodeNum: 21,
        episodeName: "Milk",
        episodeDate: "May 8, 2006",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted is excited when a matchmaking service claims to have found his soul mate, but he postpones his date to help Lily, who has a surprising revelation.",
      },
      {
        episodeSeason: 1,
        episodeNum: 22,
        episodeName: "Come On",
        episodeDate: "May 15, 2006",
        episodeRanking: 8.9,
        episodeDescription:
          "Ted makes a final attempt to win Robin's heart. Marshall and Lily's relationship is in jeopardy.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Where Were We?",
        episodeDate: "September 18, 2006",
        episodeRanking: 8.1,
        episodeDescription:
          "Marshall becomes predictably depressed and pathetic after the breakup. And it only gets worse when he discovers that Lily may be back in town.",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "The Scorpion and the Toad",
        episodeDate: "September 25, 2006",
        episodeRanking: 8.2,
        episodeDescription:
          "Barney gets Marshall back out on the singles market, but Barney keeps taking all the prospects from him. And Ted's convinced that Lily is back because she wants Marshall back, even though she says she's never been better.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "Brunch",
        episodeDate: "October 2, 2006",
        episodeRanking: 8.5,
        episodeDescription:
          "Ted discovers that his parents are keeping a secret from him after his dad acts as Barney's wingman, and Marshall and Lily intentionally try to get each other sexually aroused.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Ted Mosby, Architect",
        episodeDate: "October 9, 2006",
        episodeRanking: 8.8,
        episodeDescription:
          "Barney tells Ted that single women like architects. But will Ted use this useful tidbit of information to cheat on Robin after they have their first fight?",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "World's Greatest Couple",
        episodeDate: "October 16, 2006",
        episodeRanking: 8.8,
        episodeDescription:
          "Lily gets introduced to Barney's bachelor pad when she needs a place to stay, and Marshall finds a unlikely new friend to join him for brunch, concerts and musicals.",
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Aldrin Justice",
        episodeDate: "October 23, 2006",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted gets Lily a job at his firm, but she only makes trouble for Ted when he refuses to stand up to his boss. And Barney sleeps with Marshall's law school professor to help his grades, but she's less than impressed with his prowess.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Swarley",
        episodeDate: "November 6, 2006",
        episodeRanking: 9,
        episodeDescription:
          "The guys tell Marshall to stay away from his new date because she has \"crazy eyes,\" but she couldn't be any crazier than Lily after she learns that Marshall's going out on his first new date.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "Atlantic City",
        episodeDate: "November 13, 2006",
        episodeRanking: 8,
        episodeDescription:
          "Marshall and Lily elope to Atlantic City, but they discover that getting married in Atlantic City isn't as easy as getting married in Las Vegas.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "Slap Bet",
        episodeDate: "November 20, 2006",
        episodeRanking: 9.5,
        episodeDescription:
          "The gang discovers that Robin's been hiding a huge secret, but they have no idea what it is. Marshall thinks she is married, and Barney thinks she was a porn star.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "Single Stamina",
        episodeDate: "November 27, 2006",
        episodeRanking: 8.2,
        episodeDescription:
          "Barney's gay black brother is in town, but he doesn't want to tell Barney that he's getting married because he'll be losing his only single sidekick.",
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "How Lily Stole Christmas",
        episodeDate: "December 11, 2006",
        episodeRanking: 8.1,
        episodeDescription:
          "Lily takes away her Christmas display after she finds out that Ted called her a bad name while she was broken up with Marshall, and Barney is too sick for his Christmas plans.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "First Time in New York",
        episodeDate: "January 8, 2007",
        episodeRanking: 8.1,
        episodeDescription:
          "Robin tries to keep her younger sister from losing her virginity while on vacation in New York, which causes everyone to reminisce about their first times.",
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "Columns",
        episodeDate: "January 22, 2007",
        episodeRanking: 7.9,
        episodeDescription:
          "Barney asks Lily to paint a nude picture of him after finding her painting of Marshall. And Ted can't find an opportune time to fire his old boss, who now works for him but still keeps undermining his work.",
      },
      {
        episodeSeason: 2,
        episodeNum: 14,
        episodeName: "Monday Night Football",
        episodeDate: "February 5, 2007",
        episodeRanking: 8.4,
        episodeDescription:
          "Everybody misses the Super Bowl because of a funeral. Therefore, they all try to go 24 hours without finding out who won so that they can watch the game together on Monday night.",
      },
      {
        episodeSeason: 2,
        episodeNum: 15,
        episodeName: "Lucky Penny",
        episodeDate: "February 12, 2007",
        episodeRanking: 8.4,
        episodeDescription:
          "When Ted misses his important business trip to Chicago, he tries to trace his steps back to the original incident that triggered the series of events that made him miss the flight.",
      },
      {
        episodeSeason: 2,
        episodeNum: 16,
        episodeName: "Stuff",
        episodeDate: "February 19, 2007",
        episodeRanking: 8.5,
        episodeDescription:
          "Ted tries to get rid of everything he received from other women at Robin's request, but getting rid of the stuff Robin received from other men won't be as easy. Meanwhile, Barney gets revenge on Lily for making him attend her terrible play.",
      },
      {
        episodeSeason: 2,
        episodeNum: 17,
        episodeName: "Arrivederci, Fiero",
        episodeDate: "February 26, 2007",
        episodeRanking: 8.2,
        episodeDescription:
          "When Marshall's car doesn't quite make it to 200,000 miles without dying completely, everybody reminisces about their greatest memories with the car.",
      },
      {
        episodeSeason: 2,
        episodeNum: 18,
        episodeName: "Moving Day",
        episodeDate: "March 19, 2007",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted and Robin decide to move in together, but nobody appears to be happy with the new living arrangements--especially Barney.",
      },
      {
        episodeSeason: 2,
        episodeNum: 19,
        episodeName: "Bachelor Party",
        episodeDate: "April 9, 2007",
        episodeRanking: 8.4,
        episodeDescription:
          "Ted changes Barney's bachelor party plans for Marshall at the last minute, so that it won't just consist of gambling and cheap strippers. And Robin gets Lily an inappropriate shower party gift.",
      },
      {
        episodeSeason: 2,
        episodeNum: 20,
        episodeName: "Showdown",
        episodeDate: "April 30, 2007",
        episodeRanking: 8.9,
        episodeDescription:
          'Barney becomes a contestant on "The Price Is Right" so that he can confront Bob Barker, because he believes that the game show host is his biological father.',
      },
      {
        episodeSeason: 2,
        episodeNum: 21,
        episodeName: "Something Borrowed",
        episodeDate: "May 7, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "Marshall and Lily's wedding is destined to become a disaster, until fate intervenes and makes it perfect.",
      },
      {
        episodeSeason: 2,
        episodeNum: 22,
        episodeName: "Something Blue",
        episodeDate: "May 14, 2007",
        episodeRanking: 8.8,
        episodeDescription:
          "As the happy couple celebrate their wedding, Ted and Robin tell Barney about the latest development of their relationship.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "Wait for It",
        episodeDate: "September 24, 2007",
        episodeRanking: 8.3,
        episodeDescription:
          "Ted's still not ready to date months after his breakup with Robin. But when Robin returns to New York with an exotic new boyfriend, he decides it's time to finally do something adventurous.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "We're Not from Here",
        episodeDate: "October 1, 2007",
        episodeRanking: 7.6,
        episodeDescription:
          "Ted and Barney pose as tourists to pick up on a couple of New York women, and Robin starts getting fed up with her new boyfriend.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Third Wheel",
        episodeDate: "October 8, 2007",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted has a chance for a threesome with two women, but Barney and Lily try to sabotage it. Meanwhile, Robin's date also goes better than expected, if only she can find a razor.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "Little Boys",
        episodeDate: "October 15, 2007",
        episodeRanking: 7.7,
        episodeDescription:
          "Robin tries to date a guy with a child, even though she does not like or want children. Meanwhile, Ted finds it impossible to make it with a woman he knows that Barney slept with a year ago.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "How I Met Everyone Else",
        episodeDate: "October 22, 2007",
        episodeRanking: 9,
        episodeDescription:
          "While everyone meets Ted's new crazy girlfriend, everyone recounts their stories of how they met everyone else. But the stories turn out to have several inconsistencies.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "I'm Not That Guy",
        episodeDate: "October 29, 2007",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted discovers that a porn star is using his name. Marshall is wined and dined by a firm that defends polluters, and Lily's spending habits may force him to take the job.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "Dowisetrepla",
        episodeDate: "November 5, 2007",
        episodeRanking: 8,
        episodeDescription:
          "Marshall and Lily decide to buy a new home, which forces Lily to finally confront Marshall about her credit card debt.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Spoiler Alert",
        episodeDate: "November 12, 2007",
        episodeRanking: 9.1,
        episodeDescription:
          "The guys shatter Ted's impressions of his new girlfriend by telling him she talks too much. Ted responds by turning the tables on his friends, and they react by pointing out Ted's worst flaw.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "Slapsgiving",
        episodeDate: "November 19, 2007",
        episodeRanking: 9,
        episodeDescription:
          'Marshall warns Barney that the third slap in their "slap bet" will be coming on Thanksgiving night. Meanwhile, Ted and Robin sleep together on the night before Thanksgiving.',
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "The Yips",
        episodeDate: "November 26, 2007",
        episodeRanking: 7.9,
        episodeDescription:
          "Barney has trouble hitting on women at the Victoria's Secret after party and so has to return to the woman who took his virginity.",
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "The Platinum Rule",
        episodeDate: "December 10, 2007",
        episodeRanking: 8.5,
        episodeDescription:
          "Barney and the gang try to convince Ted not to date the doctor that is removing his tattoo by giving examples of the Platinum Rule.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "No Tomorrow",
        episodeDate: "March 17, 2008",
        episodeRanking: 8.2,
        episodeDescription:
          "On St-Patrick's Day, Ted follows Barney to a bar to party like there's no tomorrow, while Robin discovers something strange about Marshall and Lily's new apartment.",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "Ten Sessions",
        episodeDate: "March 24, 2008",
        episodeRanking: 8.8,
        episodeDescription:
          "As the search for Mrs. Right continues, Ted woos his dermatologist Stella -- but her receptionist, Abby, seems more interested in him.",
      },
      {
        episodeSeason: 3,
        episodeNum: 14,
        episodeName: "The Bracket",
        episodeDate: "March 31, 2008",
        episodeRanking: 8.7,
        episodeDescription:
          "One of Barney's exes is sabotaging his love life, but he doesn't know who. So he makes a NCAA Basketball Tournament-style bracket to figure out which women he wronged the worst.",
      },
      {
        episodeSeason: 3,
        episodeNum: 15,
        episodeName: "The Chain of Screaming",
        episodeDate: "April 14, 2008",
        episodeRanking: 8,
        episodeDescription:
          "Marshall cries in front of his boss after he chews him out, and everybody gives Marshall their own unique advice on how to confront his boss about the situation.",
      },
      {
        episodeSeason: 3,
        episodeNum: 16,
        episodeName: "Sandcastles in the Sand",
        episodeDate: "April 21, 2008",
        episodeRanking: 8.2,
        episodeDescription:
          "Robin gives romance a second try with an old boyfriend, only to have him break her heart...again.",
      },
      {
        episodeSeason: 3,
        episodeNum: 17,
        episodeName: "The Goat",
        episodeDate: "April 28, 2008",
        episodeRanking: 8.2,
        episodeDescription:
          'Barney is upset because he violated his own "bro code" by sleeping with Robin. How will Ted react when he learns that Barney slept with his ex-girlfriend?',
      },
      {
        episodeSeason: 3,
        episodeNum: 18,
        episodeName: "Rebound Bro",
        episodeDate: "May 5, 2008",
        episodeRanking: 8.1,
        episodeDescription:
          "Barney finds a new wingman to replace Ted, but he's painfully shy and awkward around women. Meanwhile Ted discovers that his new girlfriend Stella hasn't had sex in 5 years.",
      },
      {
        episodeSeason: 3,
        episodeNum: 19,
        episodeName: "Everything Must Go",
        episodeDate: "May 12, 2008",
        episodeRanking: 7.7,
        episodeDescription:
          "Barney helps Abby get back at Ted by staging a fake proposal, but Abby doesn't realize that it's fake. Lily decides to sell some of her paintings so that she and Marshall can pay for floor repairs at their new place.",
      },
      {
        episodeSeason: 3,
        episodeNum: 20,
        episodeName: "Miracles",
        episodeDate: "May 19, 2008",
        episodeRanking: 8.7,
        episodeDescription:
          "Ted breaks up with Stella but immediately wants to take it back after a life-changing experience. However, Stella doesn't realize that he broke up with her. Meanwhile, Barney has a serious accident on his way to see Ted in the hospital.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "Do I Know You?",
        episodeDate: "22 Sep. 2008",
        episodeRanking: 8.6,
        episodeDescription:
          "Ted and Stella get engaged, but Ted soon learns that he doesn't know anything about her. Meanwhile, Barney confesses to Lily that he's in love with Robin",
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "The Best Burger in New York",
        episodeDate: "29 Sep. 2008",
        episodeRanking: 8.5,
        episodeDescription:
          "Marshall claims that he had the best hamburger in the world during his first week in New York City, but he forgot where the burger joint is located. The gang then hits the streets of Manhattan to help him find it.",
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "I Heart NJ",
        episodeDate: "6 Oct. 2008",
        episodeRanking: 7.7,
        episodeDescription:
          "Ted does not want to move in with Stella because he hates New Jersey. Robin prematurely quits her TV job because she incorrectly thinks that she already has a new job.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "Intervention",
        episodeDate: "13 Oct. 2008",
        episodeRanking: 8.8,
        episodeDescription:
          "Ted, Robin, Marshall, and Lily all begin getting cold feet because of their imminent life changes, and Barney tries to prove that he can pick up a woman while posing as an 80-year-old man.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Shelter Island",
        episodeDate: "20 Oct. 2008",
        episodeRanking: 8.3,
        episodeDescription:
          'Ted and Stella move up their wedding date, but the wedding may not go off as planned after Ted breaks the "No Exes Rule" and invites Robin to come in from Japan for the wedding.',
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Happily Ever After",
        episodeDate: "3 Nov. 2008",
        episodeRanking: 8,
        episodeDescription:
          "The gang tries to hide from Stella when they discover that they are eating at the same restaurant.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Not a Father's Day",
        episodeDate: "10 Nov. 2008",
        episodeRanking: 7.8,
        episodeDescription:
          "While Barney celebrates a pregnancy false alarm, Marshall and Lily try to figure out if it's time to have a baby.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "Woooo!",
        episodeDate: "17 Nov. 2008",
        episodeRanking: 8,
        episodeDescription:
          'Lily is disappointed to discover that Robin is secretly a "Woooo! Girl," and Barney secretly sabotages Ted\'s chance to get the contract to design a new bank skyscraper.',
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "The Naked Man",
        episodeDate: "24 Nov. 2008",
        episodeRanking: 9.2,
        episodeDescription:
          "When the gang learns that a bold, desperation date move got Robin into bed, Ted and Barney decide to try it out for themselves.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "The Fight",
        episodeDate: "8 Dec. 2008",
        episodeRanking: 8.3,
        episodeDescription:
          "The guys get invited to fight alongside Doug the Bartender. However, the fight doesn't go exactly how they imagined it to.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "Little Minnesota",
        episodeDate: "15 Dec. 2008",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted tries to keep his irresponsible sister from hooking up with Barney during her trip to New York, and Robin starts hanging out with Marshall at a bar for Minnesotans, not telling them that she's really Canadian.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "Benefits",
        episodeDate: "12 Jan. 2009",
        episodeRanking: 8.6,
        episodeDescription:
          "Ted and Robin discover that sex with each other solve their fights as roommates, which makes Barney very jealous and angry. Meanwhile, Marshall reveals that he's too embarrassed to use the office bathroom.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "Three Days of Snow",
        episodeDate: "19 Jan. 2009",
        episodeRanking: 8.5,
        episodeDescription:
          "Ted and Barney get an opportunity to run their own bar during a historic blizzard, while Marshall and Lily try to defy the odds and continue one of their cherished traditions.",
      },
      {
        episodeSeason: 4,
        episodeNum: 14,
        episodeName: "The Possimpible",
        episodeDate: "2 Feb. 2009",
        episodeRanking: 8.4,
        episodeDescription:
          "Robin needs to find a television job in seven days or else she loses her work visa, and Barney volunteers to come to her aid. Meanwhile, Ted, Marshall, and Lily consider cleaning up their resumes",
      },
      {
        episodeSeason: 4,
        episodeNum: 15,
        episodeName: "The Stinsons",
        episodeDate: "2 Mar. 2009",
        episodeRanking: 8.3,
        episodeDescription:
          'The guys find out that Barney is pretending to have a wife and son to make his mother happy, but the charade is blown when Ted makes a move on Barney\'s "wife."',
      },
      {
        episodeSeason: 4,
        episodeNum: 16,
        episodeName: "Sorry, Bro",
        episodeDate: "9 Mar. 2009",
        episodeRanking: 7.7,
        episodeDescription:
          "Ted meets with his ex-girlfriend from college--a girlfriend who cheated on him constantly and Marshall and Lily can't stand, and Marshall tells the story about how he forgot to bring his pants to work.",
      },
      {
        episodeSeason: 4,
        episodeNum: 17,
        episodeName: "The Front Porch",
        episodeDate: "16 Mar. 2009",
        episodeRanking: 8.3,
        episodeDescription:
          "Ted becomes angry with Lily when he finds out that she has been sabotaging all his relationships that she did not approve of, including his relationship with Robin.",
      },
      {
        episodeSeason: 4,
        episodeNum: 18,
        episodeName: "Old King Clancy",
        episodeDate: "23 Mar. 2009",
        episodeRanking: 7.6,
        episodeDescription:
          "Barney and Marshall don't tell Ted that the plans for the building he has been working on have been scrapped, and the guys try to figure out which Canadian celebrity Robin slept with.",
      },
      {
        episodeSeason: 4,
        episodeNum: 19,
        episodeName: "Murtaugh",
        episodeDate: "30 Mar. 2009",
        episodeRanking: 8.4,
        episodeDescription:
          "Barney tries to do all the items on Ted's \"I'm too old for this stuff\" list while Marshall's over-competitive side comes out when he coaches Lily's kindergarten basketball team.",
      },
      {
        episodeSeason: 4,
        episodeNum: 20,
        episodeName: "Mosbius Designs",
        episodeDate: "13 Apr. 2009",
        episodeRanking: 7.6,
        episodeDescription:
          "Ted's plans to make his own design firm in his apartment hit a snag when his personal assistant begins sleeping with Robin, and Marshall tries to find a way to make himself indispensable at his workplace.",
      },
      {
        episodeSeason: 4,
        episodeNum: 21,
        episodeName: "The Three Days Rule",
        episodeDate: "27 Apr. 2009",
        episodeRanking: 8.7,
        episodeDescription:
          "Ted gets around the three-day rule by texting a woman he just met, but he doesn't realize that he's actually texting Barney and Marshall.",
      },
      {
        episodeSeason: 4,
        episodeNum: 22,
        episodeName: "Right Place Right Time",
        episodeDate: "May 4, 2009",
        episodeRanking: 8.2,
        episodeDescription:
          "Ted recounts the series of random events that lead up to the chance meeting with the woman who would eventually become his wife.",
      },
      {
        episodeSeason: 4,
        episodeNum: 23,
        episodeName: "As Fast as She Can",
        episodeDate: "May 11, 2009",
        episodeRanking: 7.7,
        episodeDescription:
          "Stella's boyfriend Tony breaks up with her after having a conversation with Ted, prompting Stella to come back to Ted with a surprising request.",
      },
      {
        episodeSeason: 4,
        episodeNum: 24,
        episodeName: "The Leap",
        episodeDate: "May 18, 2009",
        episodeRanking: 8.7,
        episodeDescription:
          "While Ted struggles with an unorthodox architecture project, Robin finds out that Barney is in love with her, and Marshall threatens to take a long-considered leap from the roof to a neighboring building.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "Definitions",
        episodeDate: "September 21, 2009",
        episodeRanking: 8.5,
        episodeDescription:
          'As Ted begins his new career as a professor and is about to meet his future wife, Lily forces Barney and Robin to have "the talk" and define their new relationship.',
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "Double Date",
        episodeDate: "September 28, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted goes on a blind date with the same woman he went on a blind date with seven years ago, and Barney and Marshall find Lily's stripper look-alike.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Robin 101",
        episodeDate: "October 5, 2009",
        episodeRanking: 8.3,
        episodeDescription:
          "When Robin fears that Barney is cheating on her, she soon discovers that he is spending his evenings with Ted learning everything there is to know on how to date her",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "The Sexless Innkeeper",
        episodeDate: "October 12, 2009",
        episodeRanking: 8,
        episodeDescription:
          "When Lily and Marshall realize that Robin and Barney are the perfect double-date friends, they try too hard to impress and come on too strong. Meanwhile, Ted gets a new nickname from Barney after an unsuccessful hook-up.",
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "Duel Citizenship",
        episodeDate: "October 19, 2009",
        episodeRanking: 7.8,
        episodeDescription:
          "While Barney tries to convince Robin to become an American citizen, Ted and Marshall's fabled road trip takes a wrong turn when Marshall invites Lily.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "Bagpipes",
        episodeDate: "November 2, 2009",
        episodeRanking: 7.8,
        episodeDescription:
          "Despite their best efforts to be the perfect couple, Barney's know-it-all attitude gets him in trouble with Robin and they are forced to ask Marshall and Lily for relationship advice.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "The Rough Patch",
        episodeDate: "November 9, 2009",
        episodeRanking: 7.8,
        episodeDescription:
          "After Barney and Robin hit a rough patch in their relationship, Lily devises the perfect plan to break them up, calling in help from Robin's famous friend, Alan Thicke.",
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "The Playbook",
        episodeDate: "November 16, 2009",
        episodeRanking: 9.4,
        episodeDescription:
          'When Barney hooks up with a woman Lily had been saving for Ted, she gets revenge by stealing his "playbook," which contains all the moves he uses to pick up women. But will Barney have the last laugh?',
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "Slapsgiving 2: Revenge of the Slap",
        episodeDate: "November 23, 2009",
        episodeRanking: 8,
        episodeDescription:
          'Barney freaks out when Marshall bequeaths a "slap bet" slap to Ted and Robin. Meanwhile, Lily\'s estranged father shows up for Thanksgiving.',
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "The Window",
        episodeDate: "December 7, 2009",
        episodeRanking: 8.1,
        episodeDescription:
          "Maggie a girl next door Ted has wanted to date for years has suddenly broken up with her latest boyfriend, giving him and many other guys a chance to score with her.",
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "Last Cigarette Ever",
        episodeDate: "December 14, 2009",
        episodeRanking: 7.8,
        episodeDescription:
          "Although he vowed to Robin and Marshall that he would never tell them, Ted finally tells his kids that at one time both Robin and Marshall used to smoke. In 2009, they both felt like they had good reason to do so. Marshall, only an occasional smoker, always said that each cigarette was his last. But when his old boss, the meanest man nicknamed Artillery Arthur, became his new boss, he thought he was going to be fired - again. So when Marshall found out that Arthur was a smoker, Marshall used it as a bonding mechanism to keep his job. Robin, at the time anchoring the ...",
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "Girls vs. Suits",
        episodeDate: "January 11, 2010",
        episodeRanking: 9.1,
        episodeDescription:
          'Barney chooses between wearing suits and sleeping with a sexy bartender. Meanwhile, Ted gets ever closer to meeting "the mother".',
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "Jenkins",
        episodeDate: "January 18, 2010",
        episodeRanking: 8.6,
        episodeDescription:
          'When Marshall finds out he\'s the "reacher" in his relationship with Lily and not the "settler," he considers pursuing a sexy and cool female coworker. Meanwhile, Ted finds out Robin is a drinking game for his architecture students.',
      },
      {
        episodeSeason: 5,
        episodeNum: 14,
        episodeName: "Perfect Week",
        episodeDate: "February 1, 2010",
        episodeRanking: 8.8,
        episodeDescription:
          "When Barney is about to complete the perfect week - landing seven different girls in seven days - the gang roots him on in order to forget about their own miserable week.",
      },
      {
        episodeSeason: 5,
        episodeNum: 15,
        episodeName: "Rabbit or Duck",
        episodeDate: "February 8, 2010",
        episodeRanking: 8,
        episodeDescription:
          "Barney runs into problems when he displays his cell phone number during the Super Bowl, Ted asks Marshall and Lily to arrange a marriage for him, and Robin thinks that her co-anchor has asked her out on a date.",
      },
      {
        episodeSeason: 5,
        episodeNum: 16,
        episodeName: "Hooked",
        episodeDate: "March 1, 2010",
        episodeRanking: 7.7,
        episodeDescription:
          "When the gang tries to convince Ted that he is being strung along by Tiffany, they reflect about relationships where each of them has been in the same situation.",
      },
      {
        episodeSeason: 5,
        episodeNum: 17,
        episodeName: "Of Course",
        episodeDate: "March 8, 2010",
        episodeRanking: 8.3,
        episodeDescription:
          "After the guys discover that Robin deliberately got Barney hooked up with an incompatible female writer, they find out that that they didn't realize that Robin hasn't been handling their breakup very well.",
      },
      {
        episodeSeason: 5,
        episodeNum: 18,
        episodeName: "Say Cheese",
        episodeDate: "March 22, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          'Ted angers Lily when he brings a random date to her birthday party, so she is forced to remind him of all the other random women he has brought along to important functions, only to discover that they weren\'t "the one."',
      },
      {
        episodeSeason: 5,
        episodeNum: 19,
        episodeName: "Zoo or False",
        episodeDate: "April 12, 2010",
        episodeRanking: 7.6,
        episodeDescription:
          "Marshall comes up with a number of different outrageous and embarrassing stories to explain how he was mugged in Central Park, but which of his stories is the truth?",
      },
      {
        episodeSeason: 5,
        episodeNum: 20,
        episodeName: "Home Wreckers",
        episodeDate: "April 19, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          'Ted reacts to his mom\'s second wedding by making the capricious decision to buy his "dream house," while everyone tries to figure out whether Barney or Robin cried at the wedding.',
      },
      {
        episodeSeason: 5,
        episodeNum: 21,
        episodeName: "Twin Beds",
        episodeDate: "May 3, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "As Robin contemplates moving in with her new boyfriend Don, Ted and Barney both decide that they want her back. Meanwhile, Marshall and Lily think they've revolutionized modern marriage when they begin sleeping in separate beds.",
      },
      {
        episodeSeason: 5,
        episodeNum: 22,
        episodeName: "Robots vs. Wrestlers",
        episodeDate: "May 10, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          'Barney is worried that the old gang is falling apart when Ted blows off a "Wrestlers vs. Robots" competition so that he can stay at a snobby party.',
      },
      {
        episodeSeason: 5,
        episodeNum: 23,
        episodeName: "The Wedding Bride",
        episodeDate: "May 17, 2010",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted is livid when he discovers that the man Stella left Ted for at the altar wrote a blockbuster movie about the incident, and portrays Ted as the bumbling, mean-spirited bad guy.",
      },
      {
        episodeSeason: 5,
        episodeNum: 24,
        episodeName: "Doppelgangers",
        episodeDate: "May 24, 2010",
        episodeRanking: 8.5,
        episodeDescription:
          "Marshall and Lily think they've spotted Barney's doppelganger, which means that they can start trying to have a baby, but it's really Barney in disguise. Meanwhile, Ted goes blonde and Robin considers taking an anchor job in Chicago.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "Big Days",
        episodeDate: "September 20, 2010",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted musters up the courage to talk to a girl at the bar, but then discovers she's there with one of his exes. Meanwhile, Lily is mad at Marshall because he told his dad they're trying to have a baby, and Robin lets herself go.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "Cleaning House",
        episodeDate: "September 27, 2010",
        episodeRanking: 8.3,
        episodeDescription:
          "The gang accompanies Barney and his brother James after they find the man who may be Barney's father, but it turns out to be James' father instead.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "Unfinished",
        episodeDate: "October 4, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "When Ted declines Barney's offer to design the new GNB building, Barney tries to woo him by using all of his best womanizing tactics. Meanwhile, Robin is still not over her relationship with Don and drunk dials him.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Subway Wars",
        episodeDate: "October 11, 2010",
        episodeRanking: 8.6,
        episodeDescription:
          "The guys race each other, each using a different form of transportation, from the pub to a restaurant seven miles away because a friend claims that Woody Allen is there.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "Architect of Destruction",
        episodeDate: "October 18, 2010",
        episodeRanking: 7.8,
        episodeDescription:
          "Is Ted having second thoughts about designing GNB's new skyscraper because it would tear down a landmark, or because he's trying to impress a woman? Meanwhile, Lily shares a secret about Robin's new boyfriend with Marshall.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "Baby Talk",
        episodeDate: "October 25, 2010",
        episodeRanking: 7.7,
        episodeDescription:
          "Marshall takes steps to make sure that he and Lily have a baby boy, but Lily has other ideas. Meanwhile, when Ted begins dating Robin's co-anchor, Barney is inspired to use baby talk to pick up women, and Robin feels betrayed.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "Canning Randy",
        episodeDate: "November 1, 2010",
        episodeRanking: 7.7,
        episodeDescription:
          "Marshall struggles to fire an incompetent employee, everyone tries to figure out whom Robin slept with Halloween night, and Zoey, the GNB skyscraper protester, finds a way to turn Ted's class against him.",
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "Natural History",
        episodeDate: "November 8, 2010",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted and Zoey's feud continues during a fundraiser at the Museum of Natural History. Meanwhile, Marshall confesses to Lily that he enjoys his job at GNB, and a prank by Barney and Robin may lead Barney to his real father.",
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "Glitter",
        episodeDate: "November 15, 2010",
        episodeRanking: 8.5,
        episodeDescription:
          "While Barney finds a new video from Robin's Canadian teen star past, Lily fears that a baby could come between her friendship with Robin. Meanwhile, Ted's obnoxious old friend, \"Punchy,\" comes from Cleveland for a visit.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "Blitzgiving",
        episodeDate: "November 22, 2010",
        episodeRanking: 9.1,
        episodeDescription:
          "When Ted leaves the bar early to prepare a Thanksgiving feast for his friends, the gang winds up partying all night with The Blitz, an old friend from college who has bad luck. As a result, Ted is forced to spend Thanksgiving with Zoey.",
      },
      {
        episodeSeason: 6,
        episodeNum: 11,
        episodeName: "The Mermaid Theory",
        episodeDate: "December 6, 2010",
        episodeRanking: 8,
        episodeDescription:
          'Ted goes on a boating trip with Zoey\'s husband, "The Captain." Meanwhile, Barney\'s "Mermaid Theory" prevents Marshal from having a nice dinner with Robin, and the narrator tries to recall the details of a fight between Lily and Barney.',
      },
      {
        episodeSeason: 6,
        episodeNum: 12,
        episodeName: "False Positive",
        episodeDate: "December 13, 2010",
        episodeRanking: 8.2,
        episodeDescription:
          "Barney and Robin contemplate drastic positive changes in their lives when Marshall and Lily announce that Lily is pregnant, but renege on their promises when Marshall and Lily tell them that it was a false positive.",
      },
      {
        episodeSeason: 6,
        episodeNum: 13,
        episodeName: "Bad News",
        episodeDate: "January 3, 2011",
        episodeRanking: 9,
        episodeDescription:
          "Marshall suspects that he is the reason Lily can't get pregnant after meeting a fertility doctor who also happens to be Barney's doppelganger. Meanwhile, Robin's embarrassing past is revealed at work by her former co-anchor.",
      },
      {
        episodeSeason: 6,
        episodeNum: 14,
        episodeName: "Last Words",
        episodeDate: "January 17, 2011",
        episodeRanking: 8.7,
        episodeDescription:
          "The gang tries to support Marshall and Lily tries to help his mom during Marshall's father's funeral, but Marshall becomes preoccupied when he discovers that he has one final voicemail message from him.",
      },
      {
        episodeSeason: 6,
        episodeNum: 15,
        episodeName: "Oh Honey",
        episodeDate: "February 7, 2011",
        episodeRanking: 8.8,
        episodeDescription:
          "Ted discovers that he is in love with Zoey after she tries to set him up on a date with her naive cousin, and he cuts off their friendship as a result. But little does he know that her marriage status has changed and she loves him too.",
      },
      {
        episodeSeason: 6,
        episodeNum: 16,
        episodeName: "Desperation Day",
        episodeDate: "February 14, 2011",
        episodeRanking: 8,
        episodeDescription:
          "Lily goes to Minnesota to bring Marshall back, but he's not ready to leave yet. Meanwhile, Ted and Zoey's relationship gets off to a rocky start, and Barney searches for a female \"victim\" the night before Valentine's Day.",
      },
      {
        episodeSeason: 6,
        episodeNum: 17,
        episodeName: "Garbage Island",
        episodeDate: "February 21, 2011",
        episodeRanking: 7.6,
        episodeDescription:
          "The Captain asks Ted to help find out who stole Zoey away from him, Marshall withholds sex until he does something to help the environment, and Barney is reluctant to admit that he has a crush on Robin's friend.",
      },
      {
        episodeSeason: 6,
        episodeNum: 18,
        episodeName: "A Change of Heart",
        episodeDate: "February 28, 2011",
        episodeRanking: 8.3,
        episodeDescription:
          "The gang gets mad at Barney when he lies to Nora and says he wants to get married and have a family to impress her, and Robin begins dating a guy who seems to possess several canine characteristics.",
      },
      {
        episodeSeason: 6,
        episodeNum: 19,
        episodeName: "Legendaddy",
        episodeDate: "March 21, 2011",
        episodeRanking: 8.3,
        episodeDescription:
          "Barney finally meets his biological father, but is disappointed to discover that he leads a boring life and is nothing like him.",
      },
      {
        episodeSeason: 6,
        episodeNum: 20,
        episodeName: "The Exploding Meatball Sub",
        episodeDate: "April 11, 2011",
        episodeRanking: 7.7,
        episodeDescription:
          "Despite Zoey still opposing the new GNB headquarters being built on the Arcadian Hotel site, Ted and Zoey's personal relationship is thriving. That issue is only one of the many disagreements in their life, which Ted likens to the two challenging each other mentally. On the other hand, he sees Marshall and Lily's relationship as being boring, as they agree on everything to the point of them almost melding into one person. Lily and Marshall, on the other hand, see their relationship as being supportive, the way that relationships should be, whereas they see Ted and ...",
      },
      {
        episodeSeason: 6,
        episodeNum: 21,
        episodeName: "Hopeless",
        episodeDate: "April 18, 2011",
        episodeRanking: 7.9,
        episodeDescription:
          "When Barney tries to bond with his father, he asks the gang to help make his life seem more exciting by lying about their own lives. Meanwhile, Robin runs into a guy she has a crush on.",
      },
      {
        episodeSeason: 6,
        episodeNum: 22,
        episodeName: "The Perfect Cocktail",
        episodeDate: "May 2, 2011",
        episodeRanking: 7.9,
        episodeDescription:
          "When Marshall switches sides on the Arcadian dispute, his friendship with Barney is compromised and the gang is banned from the bar. Meanwhile, Ted finally finds the courage to confront Zoey about the same topic.",
      },
      {
        episodeSeason: 6,
        episodeNum: 23,
        episodeName: "Landmarks",
        episodeDate: "May 9, 2011",
        episodeRanking: 7.8,
        episodeDescription:
          "Ted is forced to make the final decision on whether he thinks The Arcadian should be declared a landmark, and his future with Zoey and Barney's future at GNB hinge on his decision.",
      },
      {
        episodeSeason: 6,
        episodeNum: 24,
        episodeName: "Challenge Accepted",
        episodeDate: "May 16, 2011",
        episodeRanking: 8.5,
        episodeDescription:
          "In the aftermath of Ted and Zoey's break-up, Ted is having second thoughts. He is freaking out about an issue with the GNB headquarters, and historically when Ted freaks out about something, he turns to dating an old girlfriend if only for something comfortable and familiar, however bad returning to that relationship ended up being. When Barney and Robin find out that Ted is going to meet Zoey to get back together with her, they have to try and figure out where that meeting place is so that they can stop him. Beyond piecing together this puzzle, Barney and Robin's ...",
      },
      {
        episodeSeason: 7,
        episodeNum: 1,
        episodeName: "The Best Man",
        episodeDate: "September 19, 2011",
        episodeRanking: 8.6,
        episodeDescription:
          "While Barney prepares for his wedding to a mystery bride, he and Ted reminisce about Punchy's wedding, including when Marshall and Lily announced they were having a baby. Meanwhile, Robin considers telling Barney she has feelings for him.",
      },
      {
        episodeSeason: 7,
        episodeNum: 2,
        episodeName: "The Naked Truth",
        episodeDate: "September 19, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Ted tries to choose a date for the Architect's Ball, an embarrassing Internet video could cost Marshall a new job, and Barney makes a bold move to prove to Nora that he's a changed man.",
      },
      {
        episodeSeason: 7,
        episodeNum: 3,
        episodeName: "Ducky Tie",
        episodeDate: "September 26, 2011",
        episodeRanking: 8.9,
        episodeDescription:
          "At the Architect's Ball, Ted runs into Victoria, who tells him that she's getting married. Meanwhile, Barney places an unlikely wager with Marshall and Lily in order to see Lily's breasts.",
      },
      {
        episodeSeason: 7,
        episodeNum: 4,
        episodeName: "The Stinson Missile Crisis",
        episodeDate: "October 3, 2011",
        episodeRanking: 8.1,
        episodeDescription:
          "Jealous over Barney's relationship with Nora, Robin tells her court-appointed therapist the series of events that led up to the assault that she committed.",
      },
      {
        episodeSeason: 7,
        episodeNum: 5,
        episodeName: "Field Trip",
        episodeDate: "October 10, 2011",
        episodeRanking: 7.5,
        episodeDescription:
          "Robin tries to date her therapist, Marshall thinks his boss has gone soft on environmentalism, Barney suspects that Nora may be lying about her age, and Ted takes his Intro to Architecture class on the worst field trip ever.",
      },
      {
        episodeSeason: 7,
        episodeNum: 6,
        episodeName: "Mystery vs. History",
        episodeDate: "October 17, 2011",
        episodeRanking: 7.7,
        episodeDescription:
          "Ted agrees to go on a date without researching her on the Internet beforehand; Barney urges Marshall and Lily to find out and reveal the gender of their child; and Kevin tries but fails to avoid passing judgment on the group.",
      },
      {
        episodeSeason: 7,
        episodeNum: 7,
        episodeName: "Noretta",
        episodeDate: "October 24, 2011",
        episodeRanking: 7.7,
        episodeDescription:
          "Kevin's declaration that everybody marries their parents ruins Marshall and Lily's romantic evening, but will anything keep Barney from getting lucky with Nora? And will Kevin finally get fed up with Ted and Robin's close relationship?",
      },
      {
        episodeSeason: 7,
        episodeNum: 8,
        episodeName: "The Slutty Pumpkin Returns",
        episodeDate: "October 31, 2011",
        episodeRanking: 7.4,
        episodeDescription:
          "Ted finds his long-lost crush from a Halloween party 10 years ago, but will there be any chemistry? Meanwhile, Lily's \"pregnancy brain\" convinces her to move to the suburbs, and Barney finds out he's one-quarter Canadian.",
      },
      {
        episodeSeason: 7,
        episodeNum: 9,
        episodeName: "Disaster Averted",
        episodeDate: "November 7, 2011",
        episodeRanking: 8.3,
        episodeDescription:
          'The gang explains to Kevin the origins of the "No Boogie-Boarding" sign in front of MacLaren\'s, which has to do with Hurricane Irene. Meanwhile, Barney negotiates with Marshall about how to get out of wearing the ducky tie.',
      },
      {
        episodeSeason: 7,
        episodeNum: 10,
        episodeName: "Tick Tick Tick",
        episodeDate: "November 14, 2011",
        episodeRanking: 9,
        episodeDescription:
          "Barney and Robin are afraid to break the news to Nora and Kevin that they cheated with each other and want to get back together, while Ted and Marshall get stoned together at a concert.",
      },
      {
        episodeSeason: 7,
        episodeNum: 11,
        episodeName: "The Rebound Girl",
        episodeDate: "November 21, 2011",
        episodeRanking: 8,
        episodeDescription:
          'While Robin tries to talk Marshall and Lily out of moving to Long Island, Ted and Barney make the decision to become "bro-parents."',
      },
      {
        episodeSeason: 7,
        episodeNum: 12,
        episodeName: "Symphony of Illumination",
        episodeDate: "December 5, 2011",
        episodeRanking: 8.8,
        episodeDescription:
          "After Robin tells Barney that she's pregnant with his child, she receives some shocking news from her doctor. Meanwhile, a neighborhood teen plays a trick on Marshall while he decorates his house with Christmas lights.",
      },
      {
        episodeSeason: 7,
        episodeNum: 13,
        episodeName: "Tailgate",
        episodeDate: "January 2, 2012",
        episodeRanking: 7.8,
        episodeDescription:
          "After celebrating New Year's Eve, Marshall visits his father's graveside to carry on their tradition of tailgating. Meanwhile, Barney and Ted open a bar called \"Puzzles,\" and Robin is forced to fill in for an inebriated news anchor.",
      },
      {
        episodeSeason: 7,
        episodeNum: 14,
        episodeName: "46 Minutes",
        episodeDate: "January 16, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "While Marshall and Lily spend their first night in their new home after deciding to permanently move to Long Island, Barney takes over as group leader in Manhattan--both with disastrous results.",
      },
      {
        episodeSeason: 7,
        episodeNum: 15,
        episodeName: "The Burning Beekeeper",
        episodeDate: "February 6, 2012",
        episodeRanking: 7.4,
        episodeDescription:
          "Lily and Marshall throw a housewarming party where Ted nearly comes to blows with Marshall's boss; Barney hits on a crazy divorcee.",
      },
      {
        episodeSeason: 7,
        episodeNum: 16,
        episodeName: "The Drunk Train",
        episodeDate: "February 13, 2012",
        episodeRanking: 8.1,
        episodeDescription:
          'Kevin proposes to Robin, but will he take it back when Robin tells him she can\'t have children? Meanwhile, Barney and Ted try to score on the "drunk train" to Long Island, but something is surprisingly holding Barney back.',
      },
      {
        episodeSeason: 7,
        episodeNum: 17,
        episodeName: "No Pressure",
        episodeDate: "February 20, 2012",
        episodeRanking: 8.4,
        episodeDescription:
          "While Ted waits to find out whether Robin loves him back, he discovers that Marshall and Lily have been trying to influence him in opposite directions to win a bet. Meanwhile, Barney tries to find Marshall and Lily's sex tape.",
      },
      {
        episodeSeason: 7,
        episodeNum: 18,
        episodeName: "Karma",
        episodeDate: "February 27, 2012",
        episodeRanking: 8,
        episodeDescription:
          'Barney gets played and heart-broken over a stripper named "Karma," Robin becomes bored with her life on Long Island with Marshall and Lily, while Ted searches for a hobby to fill the empty space in Robin\'s old room.',
      },
      {
        episodeSeason: 7,
        episodeNum: 19,
        episodeName: "The Broath",
        episodeDate: "March 19, 2012",
        episodeRanking: 8.6,
        episodeDescription:
          "The gang tries to break up Barney and Quinn after learning they plan on moving in together, leaving Robin and Ted to fight over who deserves to sublet her apartment.",
      },
      {
        episodeSeason: 7,
        episodeNum: 20,
        episodeName: "Trilogy Time",
        episodeDate: "April 9, 2012",
        episodeRanking: 8.6,
        episodeDescription:
          "As Ted, Marshall, and Barney get together for their triennial viewing of the original Star Wars trilogy, Ted begins to question if he will ever end up where he wants to be - especially now that Barney and Quinn are getting serious.",
      },
      {
        episodeSeason: 7,
        episodeNum: 21,
        episodeName: "Now We're Even",
        episodeDate: "April 16, 2012",
        episodeRanking: 8,
        episodeDescription:
          "Just as Ted starts to settle into his new apartment alone, Barney tries to entice him into going out every single night. Meanwhile, Lily has a naughty dream about someone other than Marshall, and Robin finally becomes a famous news anchor.",
      },
      {
        episodeSeason: 7,
        episodeNum: 22,
        episodeName: "Good Crazy",
        episodeDate: "April 30, 2012",
        episodeRanking: 7.7,
        episodeDescription:
          "Barney tries to set Ted up on dates so that he can forget about Robin, while also plotting to get Quinn out of her stripping job. Meanwhile, Lily sends Marshall on a getaway so that he will stop stressing over the baby.",
      },
      {
        episodeSeason: 7,
        episodeNum: 23,
        episodeName: "The Magician's Code: Part 1",
        episodeDate: "May 14, 2012",
        episodeRanking: 8.5,
        episodeDescription:
          "Ted and Robin take care of Lily when she goes into labor because Marshall is drunk and stuck in Atlantic City with Barney.",
      },
      {
        episodeSeason: 7,
        episodeNum: 24,
        episodeName: "The Magician's Code: Part 2",
        episodeDate: "May 14, 2012",
        episodeRanking: 8.9,
        episodeDescription:
          "Ted makes a fateful phone call to his old girlfriend Victoria, Barney's magic trick gets him in trouble with airport security just as he's about to leave on a trip with Quinn, and Robin tries to take the perfect birth announcement photo.",
      },
      {
        episodeSeason: 8,
        episodeNum: 1,
        episodeName: "Farhampton",
        episodeDate: "September 24, 2012",
        episodeRanking: 8.6,
        episodeDescription:
          "Ted convinces Victoria to take a brief detour before they leave together after she leaves her fianc√© at the altar, and Barney's engagement to Quinn may be short-lived after she finds about his past relationship with Robin.",
      },
      {
        episodeSeason: 8,
        episodeNum: 2,
        episodeName: "The Pre-Nup",
        episodeDate: "October 1, 2012",
        episodeRanking: 7.4,
        episodeDescription:
          "Barney's ridiculous pre-nup that he asks Quinn to sign gives the other guys ideas of their own, but the girls find a way to retaliate.",
      },
      {
        episodeSeason: 8,
        episodeNum: 3,
        episodeName: "Nannies",
        episodeDate: "October 8, 2012",
        episodeRanking: 7.3,
        episodeDescription:
          "When Lily and Marshall have trouble finding a nanny, they learn it's because of an elaborate scheme Barney came up with to meet girls. Meanwhile, Robin and Ted butt heads over who has a more serious relationship.",
      },
      {
        episodeSeason: 8,
        episodeNum: 4,
        episodeName: "Who Wants to Be a Godparent",
        episodeDate: "October 15, 2012",
        episodeRanking: 7.5,
        episodeDescription:
          "When Lily and Marshall can't decide on godparents for Marvin, they put the gang to the test to see who would make the best one.",
      },
      {
        episodeSeason: 8,
        episodeNum: 5,
        episodeName: "The Autumn of Breakups",
        episodeDate: "November 5, 2012",
        episodeRanking: 7.5,
        episodeDescription:
          "As the season of break-ups continues, Ted and Victoria must choose the next step in their long and complicated relationship. Meanwhile, Robin worries about Barney when he chooses a dog to be his wingman.",
      },
      {
        episodeSeason: 8,
        episodeNum: 6,
        episodeName: "Splitsville",
        episodeDate: "November 12, 2012",
        episodeRanking: 7.5,
        episodeDescription:
          "When Robin is hesitant to break up with Nick, Barney takes matters into his own hands. Meanwhile, Lily and Marshall are desperate for some private time.",
      },
      {
        episodeSeason: 8,
        episodeNum: 7,
        episodeName: "The Stamp Tramp",
        episodeDate: "November 19, 2012",
        episodeRanking: 7.4,
        episodeDescription:
          "Marshall gets in the doghouse at work after he recommends a friend for a job, Robin helps Barney find a new strip club, and Ted is embarrassed after watching his video diary from college.",
      },
      {
        episodeSeason: 8,
        episodeNum: 8,
        episodeName: "Twelve Horny Women",
        episodeDate: "November 26, 2012",
        episodeRanking: 7.5,
        episodeDescription:
          "While Marshall faces the most important court case of his career against his new arch-nemesis, Brad Morris, the rest of the gang tries to figure out which one was the biggest bad-ass in their youth.",
      },
      {
        episodeSeason: 8,
        episodeNum: 9,
        episodeName: "Lobster Crawl",
        episodeDate: "December 3, 2012",
        episodeRanking: 7.5,
        episodeDescription:
          "Robin has a plan to get Barney out of her system for good, Ted witnesses Marvin's first crawl while babysitting for Marshall and Lily, and Barney has a new business idea after destroying a beloved tie.",
      },
      {
        episodeSeason: 8,
        episodeNum: 10,
        episodeName: "The Over-Correction",
        episodeDate: "December 10, 2012",
        episodeRanking: 8.1,
        episodeDescription:
          "Robin tries to get Barney's \"Playbook\" out of jealousy over his new girlfriend, Marshall catches his mom having sex with Lily's dad, and Ted tries to get everything back that was borrowed from him and never returned.",
      },
      {
        episodeSeason: 8,
        episodeNum: 11,
        episodeName: "The Final Page: Part One",
        episodeDate: "December 17, 2012",
        episodeRanking: 8.5,
        episodeDescription:
          "Ted wants to rub his new building in the face of an old professor, Barney is the victim of a lengthy jinx, Marshall and Lily run into an annoying old acquaintance, and Robin gets an opportunity to fire Patrice.",
      },
      {
        episodeSeason: 8,
        episodeNum: 12,
        episodeName: "The Final Page: Part Two",
        episodeDate: "December 17, 2012",
        episodeRanking: 9.4,
        episodeDescription:
          "Will Ted go to the opening of his new building with Robin as his date, or will he break his promise to Barney and tell her that Barney is proposing to Patrice? Meanwhile, Marshall and Lily have big plans for a rare night out.",
      },
      {
        episodeSeason: 8,
        episodeNum: 13,
        episodeName: "Band or DJ?",
        episodeDate: "January 14, 2013",
        episodeRanking: 7.9,
        episodeDescription:
          "Robin's dad denies Barney permission to marry his daughter, Marshall and Lily deal with Marvin's constipation, and why is Ted so dead-set against hiring a band for Barney and Robin's wedding?",
      },
      {
        episodeSeason: 8,
        episodeNum: 14,
        episodeName: "Ring Up!",
        episodeDate: "January 21, 2013",
        episodeRanking: 7.9,
        episodeDescription:
          "Barney convinces Ted to sleep with a 20 year old until Barney learns her identity, Robin discovers that her engagement ring makes her invisible, and a leather cuff improves Marshall and Lily's love life.",
      },
      {
        episodeSeason: 8,
        episodeNum: 15,
        episodeName: "P.S. I Love You",
        episodeDate: "February 4, 2013",
        episodeRanking: 8.2,
        episodeDescription:
          "Robin's past as a Canadian pop star is revisited when Barney uncovers the lost episode of a music documentary series in which she was featured as Robin Sparkles. Marshall and Lily have some concerns about Ted's latest girlfriend.",
      },
      {
        episodeSeason: 8,
        episodeNum: 16,
        episodeName: "Bad Crazy",
        episodeDate: "February 11, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          "Ted's attempt to break up with his crazy new girlfriend does not go as planned, and Robin's fear of holding Marvin leads to an adventure with Mike Tyson.",
      },
      {
        episodeSeason: 8,
        episodeNum: 17,
        episodeName: "The Ashtray",
        episodeDate: "February 18, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "When Ted receives an unexpected call from The Captain, the gang reminisced about their last awkward encounter with him.",
      },
      {
        episodeSeason: 8,
        episodeNum: 18,
        episodeName: "Weekend at Barney's",
        episodeDate: "February 25, 2013",
        episodeRanking: 8.1,
        episodeDescription:
          'Barney is forced to break out "The Playbook" one final time to keep Ted from getting back together with Jeanette and taking her to his wedding, and Marshall embarrasses Lily at an art exhibition.',
      },
      {
        episodeSeason: 8,
        episodeNum: 19,
        episodeName: "The Fortress",
        episodeDate: "March 18, 2013",
        episodeRanking: 8,
        episodeDescription:
          "It's weeks before Barney and Robin's wedding, and one of the many things they still have to decide is where to live. The one thing Robin insists is that they don't live at Barney's apartment. So it goes on the market. However, Barney doesn't want to sell it to just anyone, but someone who is worthy of what was and will always be in his heart his \"Fortress of Barnitude\". Robin has a slightly different idea, which isn't as easy to achieve as she would like when she and others learn more and more about with what Barney has equipped his apartment. Meanwhile, Lily hasn't ...",
      },
      {
        episodeSeason: 8,
        episodeNum: 20,
        episodeName: "The Time Travelers",
        episodeDate: "March 25, 2013",
        episodeRanking: 8.4,
        episodeDescription:
          'Ted and Barney run into their future selves as they debate whether to go to "Wrestlers vs. Robots," while Robin and Marshall argue over who gets credit for a new drink at McLaren\'s.',
      },
      {
        episodeSeason: 8,
        episodeNum: 21,
        episodeName: "Romeward Bound",
        episodeDate: "April 15, 2013",
        episodeRanking: 7.4,
        episodeDescription: "The Captain",
      },
      {
        episodeSeason: 8,
        episodeNum: 22,
        episodeName: "The Bro Mitzvah",
        episodeDate: "April 29, 2013",
        episodeRanking: 8.8,
        episodeDescription:
          "Ted and Marshall turn Barney's bachelor party into the worst night of his life, or is that exactly what they want him to believe?",
      },
      {
        episodeSeason: 8,
        episodeNum: 23,
        episodeName: "Something Old",
        episodeDate: "May 6, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "Robin searches for a locket that she buried in Central Park for her wedding, Ted helps Marshall and Lily pack for Italy, and Barney plays laser tag with his future father in law.",
      },
      {
        episodeSeason: 8,
        episodeNum: 24,
        episodeName: "Something New",
        episodeDate: "May 13, 2013",
        episodeRanking: 8.8,
        episodeDescription:
          "As the wedding approaches, Barney and Robin deliberately ruin an obnoxious couple's evening, Marshall and Lily's plans for Italy hit a snag and Ted tells Lily that he's moving to Chicago.",
      },
      {
        episodeSeason: 9,
        episodeNum: 1,
        episodeName: "The Locket",
        episodeDate: "September 23, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Lily meets an interesting person on the train to Farhampton, Marshall gets kicked off his flight to New York, Barney and Robin discover that they might be related, and Ted prepares to deliver a personal gift to Robin.",
      },
      {
        episodeSeason: 9,
        episodeNum: 2,
        episodeName: "Coming Back",
        episodeDate: "September 23, 2013",
        episodeRanking: 7.7,
        episodeDescription:
          "Marshall is forced to rent a car to get to New York, causing Lily to start drinking and accidentally reveal to Barney some bad news about his brother's marriage.",
      },
      {
        episodeSeason: 9,
        episodeNum: 3,
        episodeName: "Last Time in New York",
        episodeDate: "September 30, 2013",
        episodeRanking: 7.6,
        episodeDescription:
          "Barney and Robin try to have sex before the elderly wedding guests arrive, Ted reveals a list to Lily of things to do before he leaves New York, and Marshall has problems traveling through Packer Country.",
      },
      {
        episodeSeason: 9,
        episodeNum: 4,
        episodeName: "The Broken Code",
        episodeDate: "October 7, 2013",
        episodeRanking: 7.3,
        episodeDescription:
          "Barney gives Ted's Best Man duties to The Karate Kid's William Zabka over the incident at the carousel, and Lily gives Robin a lousy bridal party.",
      },
      {
        episodeSeason: 9,
        episodeNum: 5,
        episodeName: "The Poker Game",
        episodeDate: "October 14, 2013",
        episodeRanking: 7.2,
        episodeDescription:
          "Barney is upset after Robin wins James's wedding ring during the poker game, and Ted argues with Marshall and Lily over whether he gave them a wedding gift.",
      },
      {
        episodeSeason: 9,
        episodeNum: 6,
        episodeName: "Knight Vision",
        episodeDate: "October 21, 2013",
        episodeRanking: 7.5,
        episodeDescription:
          "When Ted finds himself with three prospects to be his date for the wedding weekend, he chooses poorly. Meanwhile, Barney and Robin have a confrontation with their minister, and Marshall learns more about his driving companion, Daphne.",
      },
      {
        episodeSeason: 9,
        episodeNum: 7,
        episodeName: "No Questions Asked",
        episodeDate: "October 28, 2013",
        episodeRanking: 7.4,
        episodeDescription:
          'When Daphne sends a troubling text message to Lily, Marshall enlists the gang\'s help to remove the message while enforcing the "No Questions Asked" rule.',
      },
      {
        episodeSeason: 9,
        episodeNum: 8,
        episodeName: "The Lighthouse",
        episodeDate: "November 4, 2013",
        episodeRanking: 7.3,
        episodeDescription:
          "When Robin and Loretta's conflict escalates, Barney is caught in the middle. Meanwhile, Marshall and Daphne deal with a stowaway on their road trip, and Ted and Cassie try to enjoy a trip to a lighthouse.",
      },
      {
        episodeSeason: 9,
        episodeNum: 9,
        episodeName: "Platonish",
        episodeDate: "November 11, 2013",
        episodeRanking: 8.2,
        episodeDescription:
          'After Robin finds out her mother isn\'t coming to the wedding, the group recalls a fateful night six months ago when Barney accepted the "challenge" of a lifetime, and Ted made a decision about his pursuit of Robin.',
      },
      {
        episodeSeason: 9,
        episodeNum: 10,
        episodeName: "Mom and Dad",
        episodeDate: "November 18, 2013",
        episodeRanking: 6.7,
        episodeDescription:
          'Barney and James fight over which one of their fathers will get back together with their mom, Ted becomes a victim of "Zabkatage," and Daphne becomes inexplicably upset with Marshall.',
      },
      {
        episodeSeason: 9,
        episodeNum: 11,
        episodeName: "Bedtime Stories",
        episodeDate: "November 25, 2013",
        episodeRanking: 5.8,
        episodeDescription:
          "On the bus to Farhampton, Marshall tells Marvin bedtime stories about Ted, Robin and Barney in rhyme.",
      },
      {
        episodeSeason: 9,
        episodeNum: 12,
        episodeName: "The Rehearsal Dinner",
        episodeDate: "December 2, 2013",
        episodeRanking: 7.8,
        episodeDescription:
          "Barney becomes fixated on having his rehearsal dinner at a laser tag arena, much to Robin's dismay. Meanwhile, Ted doesn't come through on a promise, which aggravates Lily.",
      },
      {
        episodeSeason: 9,
        episodeNum: 13,
        episodeName: "Bass Player Wanted",
        episodeDate: "December 16, 2013",
        episodeRanking: 8.2,
        episodeDescription:
          "The gang encounters a guy at the wedding who intentionally stirs up trouble among them, and Marshall finally arrives at the Farhampton Inn.",
      },
      {
        episodeSeason: 9,
        episodeNum: 14,
        episodeName: "Slapsgiving 3: Slappointment in Slapmarra",
        episodeDate: "January 13, 2014",
        episodeRanking: 6,
        episodeDescription:
          "In an attempt to deliver a devastating final slap to Barney, Marshall explains how he mastered the Slap of A Million Exploding Suns.",
      },
      {
        episodeSeason: 9,
        episodeNum: 15,
        episodeName: "Unpause",
        episodeDate: "January 20, 2014",
        episodeRanking: 8.4,
        episodeDescription:
          'Robin and Ted take advantage of Barney when he becomes "truth serum drunk," and Marshall does everything he can to remain in "pause" with Lily and avoid their fight.',
      },
      {
        episodeSeason: 9,
        episodeNum: 16,
        episodeName: "How Your Mother Met Me",
        episodeDate: "January 27, 2014",
        episodeRanking: 9.5,
        episodeDescription:
          "The story of The Mother, from her traumatic 21st birthday to a number of close calls with meeting Ted to the night before Barney and Robin's wedding.",
      },
      {
        episodeSeason: 9,
        episodeNum: 17,
        episodeName: "Sunrise",
        episodeDate: "February 3, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          "While out looking for Barney on the day of the wedding, Robin and Ted reminisce about past relationships. Meanwhile, Marshall and Lily finally resolve their issues and Barney befriends two young guys eager to meet women.",
      },
      {
        episodeSeason: 9,
        episodeNum: 18,
        episodeName: "Rally",
        episodeDate: "February 24, 2014",
        episodeRanking: 8,
        episodeDescription:
          "On their wedding day, Barney has a massive hangover. The gang tries to help him get over the hangover by finding the correct ingredients.",
      },
      {
        episodeSeason: 9,
        episodeNum: 19,
        episodeName: "Vesuvius",
        episodeDate: "March 3, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "Lily is concerned that Robin is not acting appropriately on her wedding day, Ted helps Barney pick his wedding suit, and the gang watch an embarrassing movie based on Ted's life.",
      },
      {
        episodeSeason: 9,
        episodeNum: 20,
        episodeName: "Daisy",
        episodeDate: "March 10, 2014",
        episodeRanking: 8.5,
        episodeDescription:
          "The guys try to figure out where Lily went after her fight with Marshall and why. Meanwhile, after a talk with her mother, Robin is concerned that she is marrying her father.",
      },
      {
        episodeSeason: 9,
        episodeNum: 21,
        episodeName: "Gary Blauman",
        episodeDate: "March 17, 2014",
        episodeRanking: 8.3,
        episodeDescription:
          "Ted wants to get a wedding guest he especially despises to leave, but Lily wants him to stay because she likes him.",
      },
      {
        episodeSeason: 9,
        episodeNum: 22,
        episodeName: "The End of the Aisle",
        episodeDate: "March 24, 2014",
        episodeRanking: 8.9,
        episodeDescription:
          "With only half an hour to go, both Barney and Robin have panic attacks about their upcoming nuptials. Meanwhile, Marshall and Lily rewrite their old wedding vows.",
      },
      {
        episodeSeason: 9,
        episodeNum: 23,
        episodeName: "Last Forever: Part One",
        episodeDate: "March 31, 2014",
        episodeRanking: 6.7,
        episodeDescription:
          'After Barney and Robin\'s wedding, Ted builds up the courage to approach "the mother" at the train station. Meanwhile, three years after the wedding, Barney and Robin drop a bombshell on the group.',
      },
      {
        episodeSeason: 9,
        episodeNum: 24,
        episodeName: "Last Forever: Part Two",
        episodeDate: "March 31, 2014",
        episodeRanking: 5.5,
        episodeDescription:
          "As the years go on, changes cause the group to drift apart, but they reunite one more time for Ted's wedding. Meanwhile, a monumental event causes Barney to finally change his ways.",
      },
    ],
  },
  {
    showId: 20,
    showName: "Brooklyn Nine-Nine",
    showYear: 2013,
    showImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNCOEaZ8AAhr7kMrcZwp2-FswVyG9-7QlhA&usqp=CAU",
    showGenre: "Comedy, Crime",
    showCast: "Andy Samberg, Stephanie Beatriz",
    showSeasonsNum: 8,
    showDescription:
      "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
    slug: "brooklyn-nine-nine",
    episodes: [
      {
        episodeSeason: 1,
        episodeNum: 1,
        episodeName: "Pilot",
        episodeDate: "January 16, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "Detective Jake Peralta finds his work scrutinized when new Captain, Ray Holt, takes over at his precinct.",
      },
      {
        episodeSeason: 1,
        episodeNum: 2,
        episodeName: "The Tagger",
        episodeDate: "January 23, 2014",
        episodeRanking: 7.5,
        episodeDescription:
          "When Jake arrives late for work, Captain Holt decides to shadow him. However, the arrest they make proves complicated. Meanwhile, a psychic friend of Gina's gets inside Charles' head.",
      },
      {
        episodeSeason: 1,
        episodeNum: 3,
        episodeName: "The Slump",
        episodeDate: "January 30, 2014",
        episodeRanking: 7.6,
        episodeDescription:
          "With a backlog of unsolved cases, Jake finds himself in a slump. Meanwhile, Amy is put in charge of the Junior Police Program for at risk kids, but her efforts to inspire them fall flat.",
      },
      {
        episodeSeason: 1,
        episodeNum: 4,
        episodeName: "M.E. Time",
        episodeDate: "February 6, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "Jake meets an attractive Medical Examiner, but their relationship slows down her work, much to his colleagues' annoyance. Meanwhile, Amy desperately tries to impress Holt.",
      },
      {
        episodeSeason: 1,
        episodeNum: 5,
        episodeName: "The Vulture",
        episodeDate: "February 13, 2014",
        episodeRanking: 8,
        episodeDescription:
          "A detective from Major Crimes takes over Jake's nearly solved murder case and steals his thunder.",
      },
      {
        episodeSeason: 1,
        episodeNum: 6,
        episodeName: "Halloween",
        episodeDate: "February 20, 2014",
        episodeRanking: 8.5,
        episodeDescription:
          "Jake makes a foolish bet with Holt that he can steal his Medal of Valor before Halloween is over, while Amy is forced to wear a costume while undercover with Charles.",
      },
      {
        episodeSeason: 1,
        episodeNum: 7,
        episodeName: "48 Hours",
        episodeDate: "February 27, 2014",
        episodeRanking: 8.1,
        episodeDescription:
          "Jake stupidly arrests a male suspect despite having no evidence and only has 48 hours to prove he did it or release him without charge.",
      },
      {
        episodeSeason: 1,
        episodeNum: 8,
        episodeName: "Old School",
        episodeDate: "March 6, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "Jake is horrified when his hero, Jimmy Brogan, a crime writer, accompanies him on the job, and threatens to quote him in a damning article. Meanwhile, Rosa has to work on her attitude in court.",
      },
      {
        episodeSeason: 1,
        episodeNum: 9,
        episodeName: "Sal's Pizza",
        episodeDate: "March 13, 2014",
        episodeRanking: 7.6,
        episodeDescription:
          "Jake's favorite pizza place burns down and he is determined to prove the owner was not responsible. Meanwhile, Amy is jealous of Rosa's being offered a promotion, and Terry and Gina have to hire a new IT specialist.",
      },
      {
        episodeSeason: 1,
        episodeNum: 10,
        episodeName: "Thanksgiving",
        episodeDate: "March 20, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          "Amy hosts a Thanksgiving dinner at her apartment for everyone at the precinct, but it soon turns into a disaster.",
      },
      {
        episodeSeason: 1,
        episodeNum: 11,
        episodeName: "Christmas",
        episodeDate: "March 27, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          "When Holt receives death threats, he surprisingly puts Jake in charge of his security. Meanwhile, Terry undergoes a psych evaluation, and Amy tries to make the perfect holiday card for Holt.",
      },
      {
        episodeSeason: 1,
        episodeNum: 12,
        episodeName: "Pontiac Bandit",
        episodeDate: "April 3, 2014",
        episodeRanking: 8.1,
        episodeDescription:
          "Jake convinces Rosa to make a deal with a criminal in order to catch a car thief, while Charles makes an awkward return to the precinct, and Holt tries to get rid of two puppies.",
      },
      {
        episodeSeason: 1,
        episodeNum: 13,
        episodeName: "The Bet",
        episodeDate: "April 10, 2014",
        episodeRanking: 8.8,
        episodeDescription:
          "While Holt holds a celebration for Charles after he is awarded the Medal of Valor, Amy is forced to go on a ridiculous date with Jake after she loses their long-running bet.",
      },
      {
        episodeSeason: 1,
        episodeNum: 14,
        episodeName: "The Ebony Falcon",
        episodeDate: "April 17, 2014",
        episodeRanking: 7.6,
        episodeDescription:
          "Jake begins to have second thoughts about putting Terry back in the field for a dangerous undercover assignment, while Rosa and Amy try to help Gina after she is robbed.",
      },
      {
        episodeSeason: 1,
        episodeNum: 15,
        episodeName: "Operation: Broken Feather",
        episodeDate: "April 24, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          "Jake is hurt when Amy tells him that she is considering leaving the precinct, while Terry helps Holt redesign the precinct to make everyone more productive.",
      },
      {
        episodeSeason: 1,
        episodeNum: 16,
        episodeName: "The Party",
        episodeDate: "May 1, 2014",
        episodeRanking: 8.5,
        episodeDescription:
          "The officers in the precinct head over to Holt's house to celebrate his birthday, but they wind up making a poor impression on his husband.",
      },
      {
        episodeSeason: 1,
        episodeNum: 17,
        episodeName: "Full Boyle",
        episodeDate: "May 8, 2014",
        episodeRanking: 7.9,
        episodeDescription:
          'Jake tries to keep Charles from going "full Boyle" on his new girlfriend. Meanwhile, Rosa and Amy are reluctant to help an amateur caped crime fighter, and Holt faces competition for the presidency of a police organization he founded.',
      },
      {
        episodeSeason: 1,
        episodeNum: 18,
        episodeName: "The Apartment",
        episodeDate: "May 15, 2014",
        episodeRanking: 7.7,
        episodeDescription:
          "Due to his crippling debt, Jake faces losing his apartment, and asks Gina for help. Rosa and Charles clash with one of the weekend officers, and Holt and Terry ask their officers to conduct self-evaluations.",
      },
      {
        episodeSeason: 1,
        episodeNum: 19,
        episodeName: "Tactical Village",
        episodeDate: "May 22, 2014",
        episodeRanking: 8.5,
        episodeDescription:
          "Jake tries to set a new record on a training course, Rosa is angry when she does not get an invite to Charles' wedding, and Gina helps Holt overcome his newfound addiction to a game on his smartphone.",
      },
      {
        episodeSeason: 1,
        episodeNum: 20,
        episodeName: "Fancy Brudgom",
        episodeDate: "May 29, 2014",
        episodeRanking: 7.6,
        episodeDescription:
          "Jake tries to convince Charles to stand up to Vivian before the wedding, Terry struggles to stick to a diet after Amy and Gina give up, and Holt tries to get Rosa to make a sincere apology to an officer she offended.",
      },
      {
        episodeSeason: 1,
        episodeNum: 21,
        episodeName: "Unsolvable",
        episodeDate: "June 5, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          'Jake and Terry try to solve an apparently unsolvable case, Amy lies to Holt in order to dodge work and escape for a romantic weekend away, while Gina and Rosa introduce Charles to "Babylon", their secret bathroom.',
      },
      {
        episodeSeason: 1,
        episodeNum: 22,
        episodeName: "Charges and Specs",
        episodeDate: "June 12, 2014",
        episodeRanking: 8.9,
        episodeDescription:
          "Jake's latest investigation results in administrative leave, and, ultimately, his firing from the NYPD. Meanwhile, Charles goes into a funk after Vivian breaks up with him before their wedding, and the others try to cheer him up.",
      },
      {
        episodeSeason: 2,
        episodeNum: 1,
        episodeName: "Undercover",
        episodeDate: "January 15, 2015",
        episodeRanking: 8.2,
        episodeDescription:
          "Jake's undercover operation ends in a successful sting, until he learns one mobster has gotten away. Jake enlists Charles' help to track him down, and Holt tests the squad with practice drills. But can Charles keep his new secret from Jake?",
      },
      {
        episodeSeason: 2,
        episodeNum: 2,
        episodeName: "Chocolate Milk",
        episodeDate: "January 22, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "Holt's old nemesis is in charge of the precinct inspection, Peralta and Jeffords investigate a stabbing before Jeffords goes in for his vasectomy, and Boyle needs a plus-one for his ex-wife's wedding.",
      },
      {
        episodeSeason: 2,
        episodeNum: 3,
        episodeName: "The Jimmy Jab Games",
        episodeDate: "January 29, 2015",
        episodeRanking: 8.3,
        episodeDescription:
          "The precinct holds a competition while on stand-by for a motorcade, Holt has another run-in with Deputy Chief Wuntch, Boyle needs to get an incriminating videotape from Hitchcock, and Rosa thinks Peralta still has feelings for Santiago.",
      },
      {
        episodeSeason: 2,
        episodeNum: 4,
        episodeName: "Halloween II",
        episodeDate: "October 19, 2014",
        episodeRanking: 8.8,
        episodeDescription:
          "The Peralta/Holt annual Halloween bet continues when Jake challenges the Captain that he can steal his watch before midnight. Meanwhile, Gina is upset that her dance team, Floorgasm, kicks her off the squad and Terry confronts her about her bad attitude.",
      },
      {
        episodeSeason: 2,
        episodeNum: 5,
        episodeName: "The Mole",
        episodeDate: "November 2, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          'There\'s a mole in the precinct and Holt and Jake need to find out who it is before Deputy Chief Madeline Wuntch gets wind of it. Meanwhile, Terry and Rosa visit a "silent" disco to uncover new leads for their new drug task force.',
      },
      {
        episodeSeason: 2,
        episodeNum: 6,
        episodeName: "Jake and Sophia",
        episodeDate: "November 9, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          "Jake hits it off with a woman at a bar, but later finds out she is the attorney for a perp he is trying to put in jail. Meanwhile, Gina and Charles work to put their relationship behind them, and Amy is pressured into running for union rep.",
      },
      {
        episodeSeason: 2,
        episodeNum: 7,
        episodeName: "Lockdown",
        episodeDate: "November 16, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "The precinct goes into lockdown mode on Thanksgiving night, and Jake, who was left in charge, is confident in his ability to keep spirits high and avoid chaos. Amy is less confident, as things spiral out of control.",
      },
      {
        episodeSeason: 2,
        episodeNum: 8,
        episodeName: "USPIS",
        episodeDate: "November 23, 2014",
        episodeRanking: 7.9,
        episodeDescription:
          "While attempting to catch a drug dealer, Jake and Charles reluctantly join forces with the nerdy lead investigator at the U.S. Postal Service, Jack Danger. Meanwhile, the rest of the team helps Amy quit smoking.",
      },
      {
        episodeSeason: 2,
        episodeNum: 9,
        episodeName: "The Road Trip",
        episodeDate: "November 30, 2014",
        episodeRanking: 8.2,
        episodeDescription:
          "Jake and Amy have a case early in the morning, so they stay at a hotel overnight. Jake invites Sophia and Amy's boyfriend not knowing that Amy is planning on breaking up with him.",
      },
      {
        episodeSeason: 2,
        episodeNum: 10,
        episodeName: "The Pontiac Bandit Returns",
        episodeDate: "December 7, 2014",
        episodeRanking: 8.3,
        episodeDescription:
          'The Pontiac Bandit aka Doug Judy, is back in custody, after jamming up Jake and Rosa in his previous encounter with them. But when Rosa discovers that Judy knows the whereabouts of the "Giggle Pig" drug leader, Capt. Holt offers the perp a plea deal to help track down the drug kingpin. Meanwhile, Gina and Boyle are nervous that their parents might be getting too close, and Santiago makes Holt a Christmas gift against his wishes.',
      },
      {
        episodeSeason: 2,
        episodeNum: 11,
        episodeName: "Stakeout",
        episodeDate: "December 14, 2014",
        episodeRanking: 7.8,
        episodeDescription:
          "Jake and Boyle go on a stakeout and tensions rise between the two, Rosa shows interest in Holt's nephew, and Terry writes a book for his daughters. Santiago and Gina are displeased when they assume the characters in the book are based on them.",
      },
      {
        episodeSeason: 2,
        episodeNum: 12,
        episodeName: "Beach House",
        episodeDate: "January 4, 2015",
        episodeRanking: 8.3,
        episodeDescription:
          "The precinct's annual getaway to Boyle's beach house is ruined when Holt guilts Peralta into inviting him along for the festivities.",
      },
      {
        episodeSeason: 2,
        episodeNum: 13,
        episodeName: "Payback",
        episodeDate: "January 11, 2015",
        episodeRanking: 8,
        episodeDescription:
          "Jake goes to great lengths to keep Terry's secret from the rest of the precinct, and Amy gets her chance to partner up with Captain Holt.",
      },
      {
        episodeSeason: 2,
        episodeNum: 14,
        episodeName: "Defense Rests",
        episodeDate: "January 25, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "Jake tries to impress Sophia's boss. Gina refuses to give her blessing to her mom's engagement. Holt faces a difficult decision.",
      },
      {
        episodeSeason: 2,
        episodeNum: 15,
        episodeName: "Windbreaker City",
        episodeDate: "February 8, 2015",
        episodeRanking: 8.2,
        episodeDescription:
          "Jake is heartbroken over Sophia, but his spirits are lifted when the squad is invited to a Homeland Security terrorist training simulation.",
      },
      {
        episodeSeason: 2,
        episodeNum: 16,
        episodeName: "The Wednesday Incident",
        episodeDate: "February 15, 2015",
        episodeRanking: 8,
        episodeDescription:
          "Peralta sets out to prove that--for once--he is not the source of Captain Holt's bad mood. Boyle apprehends a notorious bank robber, who turns out to be a harmless-looking old man whom nobody else believes committed the crime.",
      },
      {
        episodeSeason: 2,
        episodeNum: 17,
        episodeName: "Boyle-Linetti Wedding",
        episodeDate: "March 1, 2015",
        episodeRanking: 8.2,
        episodeDescription:
          "It's the day of Gina and Charles' parents' wedding, and the whole squad is given a job to fulfill for the ceremony. However, Jake and Amy get sidetracked chasing a criminal, and Terry struggles to officiate the wedding.",
      },
      {
        episodeSeason: 2,
        episodeNum: 18,
        episodeName: "Captain Peralta",
        episodeDate: "March 8, 2015",
        episodeRanking: 7.8,
        episodeDescription:
          "Jake's mainly absentee father, Roger (guest star Bradley Whitford), comes to town to spend some time with his son. Jake can't wait to see him, but Charles is skeptical of Roger's intentions. Meanwhile, Holt tasks Amy, Terry, Gina and Rosa with an impossible brain teaser in exchange for Beyonc√© tickets.",
      },
      {
        episodeSeason: 2,
        episodeNum: 19,
        episodeName: "Sabotage",
        episodeDate: "March 15, 2015",
        episodeRanking: 7.9,
        episodeDescription:
          "Amy and Rosa investigate Jake's claim that somebody is trying to sabotage him and get him fired. Boyle partners up with Hitchcock and Scully to solve a case. Captain Holt refuses to lie with Terry about attending Gina's dance performance.",
      },
      {
        episodeSeason: 2,
        episodeNum: 20,
        episodeName: "AC/DC",
        episodeDate: "April 26, 2015",
        episodeRanking: 7.7,
        episodeDescription:
          "Jake is badly injured trying to chase a suspect, but he refuses to take time off from the job. Holt and Rosa have an awkward dinner date with their significant others, so they invite Amy and Gina along as well.",
      },
      {
        episodeSeason: 2,
        episodeNum: 21,
        episodeName: "Det. Dave Majors",
        episodeDate: "May 3, 2015",
        episodeRanking: 8,
        episodeDescription:
          "Jake is jealous when a detective from another precinct wants to ask Amy out on a date. Linetti and Boyle try to keep Jeffords from taking a job with a private firm, but captain Holt seems to be pushing him out the door.",
      },
      {
        episodeSeason: 2,
        episodeNum: 22,
        episodeName: "The Chopper",
        episodeDate: "May 10, 2015",
        episodeRanking: 8.6,
        episodeDescription:
          "When Wuntch lets Jake work his dream case, Holt worries she is setting them up to fail. Meanwhile, Terry hopes to get his girls off the wait list for a magnet school by hosting a field trip.",
      },
      {
        episodeSeason: 2,
        episodeNum: 23,
        episodeName: "Johnny and Dora",
        episodeDate: "May 17, 2015",
        episodeRanking: 9.1,
        episodeDescription:
          "When Jake and Amy go under cover to catch an identity thief, the investigation brings them closer.",
      },
      {
        episodeSeason: 3,
        episodeNum: 1,
        episodeName: "New Captain",
        episodeDate: "January 7, 2016",
        episodeRanking: 8.3,
        episodeDescription:
          "Nobody in the precinct likes the new captain, Wuntch continues to humiliate Holt as he takes his new job in Public Relations, and Jake and Amy try to figure out what to do next after their kiss.",
      },
      {
        episodeSeason: 3,
        episodeNum: 2,
        episodeName: "The Funeral",
        episodeDate: "January 7, 2016",
        episodeRanking: 7.7,
        episodeDescription:
          "The Nine-Nine gets another personnel change that could put Jake and Amy's budding relationship at risk. Meanwhile, Terry assists Holt with an important public relations matter, and Rosa and Gina try to convince Charles to rethink his affection for a fellow officer.",
      },
      {
        episodeSeason: 3,
        episodeNum: 3,
        episodeName: "Boyle's Hunch",
        episodeDate: "January 14, 2016",
        episodeRanking: 7.8,
        episodeDescription:
          "Jake thinks Boyle might have met his soul-mate in Genevieve, an art gallery owner, and he tries to help set them up. Meanwhile, Rosa deals with inter-precinct theft and Holt seeks Amy's help with an image campaign.",
      },
      {
        episodeSeason: 3,
        episodeNum: 4,
        episodeName: "The Oolong Slayer",
        episodeDate: "January 14, 2016",
        episodeRanking: 8.5,
        episodeDescription:
          "Jake and Holt both get in trouble when they work on a serial killer case together in secret. The Vulture asks Amy and Rosa set up his birthday party. Boyle introduces Terry to a delicious new snack.",
      },
      {
        episodeSeason: 3,
        episodeNum: 5,
        episodeName: "Halloween III",
        episodeDate: "January 21, 2016",
        episodeRanking: 9,
        episodeDescription:
          "For this year's Halloween challenge, Jake and Holt divide the precinct into teams as they try to see who can steal a crown held under lock and key in the interrogation room.",
      },
      {
        episodeSeason: 3,
        episodeNum: 6,
        episodeName: "Into the Woods",
        episodeDate: "January 28, 2016",
        episodeRanking: 7.8,
        episodeDescription:
          "Jake and Charles talk Terry into going camping; Rosa receives relationship advice from Holt; Gina helps Amy prepare for a presentation.",
      },
      {
        episodeSeason: 3,
        episodeNum: 7,
        episodeName: "The Mattress",
        episodeDate: "February 4, 2016",
        episodeRanking: 7.8,
        episodeDescription:
          "Jake and Amy work together on a case, and wind up arguing over Jake's old, worn-out mattress. Meanwhile, Boyle scratches Holt's prized car, and the teenage boy Rosa sponsors as a \"big brother\" is in trouble with the law.",
      },
      {
        episodeSeason: 3,
        episodeNum: 8,
        episodeName: "Ava",
        episodeDate: "February 11, 2016",
        episodeRanking: 8.2,
        episodeDescription:
          "Jake entertains Terry's pregnant wife, Sharon, until her water breaks sooner than expected and crisis ensues at the precinct.",
      },
      {
        episodeSeason: 3,
        episodeNum: 9,
        episodeName: "The Swedes",
        episodeDate: "February 18, 2016",
        episodeRanking: 7.8,
        episodeDescription:
          "Jake and Rosa investigate a case in which they have to assist InterPol. Amy and Terry team up to help Gina study for an exam, while Captain Holt recruits Charles to double with him in a squash tournament.",
      },
      {
        episodeSeason: 3,
        episodeNum: 10,
        episodeName: "Yippie Kayak",
        episodeDate: "February 25, 2016",
        episodeRanking: 8.8,
        episodeDescription:
          'Jake, Charles and Gina get into trouble while doing last-minute Christmas shopping, Terry tries to make it through the holidays without a call from the precinct, and Amy takes part in a "Polar Swim" with Holt and Diaz.',
      },
      {
        episodeSeason: 3,
        episodeNum: 11,
        episodeName: "Hostage Situation",
        episodeDate: "March 3, 2016",
        episodeRanking: 7.7,
        episodeDescription:
          "Jake helps Charles reclaim the rights to his sperm from his ex-wife, Amy accidentally breaks Terry's nose after asking for a recommendation, and Gina helps interrogate a suspect who refuses to speak to anyone but her.",
      },
      {
        episodeSeason: 3,
        episodeNum: 12,
        episodeName: "9 Days",
        episodeDate: "March 10, 2016",
        episodeRanking: 8,
        episodeDescription:
          "Peralta and Holt contract the Mumps while working on a cold case. Terry takes over the precinct in his place, but his ambitious plans ultimately fail. Boyle is sad over the death of his dog, but Diaz doesn't understand it.",
      },
      {
        episodeSeason: 3,
        episodeNum: 13,
        episodeName: "The Cruise",
        episodeDate: "March 17, 2016",
        episodeRanking: 8.1,
        episodeDescription:
          "Jake comes face-to-face with his old nemesis Doug Judy as he and Amy go on a cruise. Meanwhile, Holt's sister comes to town for a visit, and Diaz and Boyle fight over a rent-controlled apartment which was a crime scene.",
      },
      {
        episodeSeason: 3,
        episodeNum: 14,
        episodeName: "Karen Peralta",
        episodeDate: "March 24, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "On Jake's birthday, his Mom tells him she is back together with his hated father. Meanwhile, Charles has an embarrassing moment with a body cam, and Holt's \"Escape the Room\" exercise for the Nine-Nine does not go as planned.",
      },
      {
        episodeSeason: 3,
        episodeNum: 15,
        episodeName: "The 9-8",
        episodeDate: "March 31, 2016",
        episodeRanking: 8,
        episodeDescription:
          "Chaos ensues when the Nine-Nine is forced to share their station with the Nine-Eight precinct while their station is closed, and Charles consequently becomes jealous of Jake's old partner, who is an officer in the Nine-Eight.",
      },
      {
        episodeSeason: 3,
        episodeNum: 16,
        episodeName: "House Mouses",
        episodeDate: "April 7, 2016",
        episodeRanking: 7.8,
        episodeDescription:
          "When Jake insults Hitchcock and Scully's work ethic in the precinct, they force their way into one of his cases in attempt to prove themselves. Meanwhile, Amy and Gina help Rosa conquer one of her biggest fears, and Holt and Boyle work a celebrity case.",
      },
      {
        episodeSeason: 3,
        episodeNum: 17,
        episodeName: "Adrian Pimento",
        episodeDate: "April 14, 2016",
        episodeRanking: 7.8,
        episodeDescription:
          "The precinct gains a new detective who has just completed a 12-year undercover job with the mob, Charles' latest mess prompts the janitors to refuse to clean the precinct, and Gina directs a video for Holt.",
      },
      {
        episodeSeason: 3,
        episodeNum: 18,
        episodeName: "Cheddar",
        episodeDate: "April 21, 2016",
        episodeRanking: 7.8,
        episodeDescription:
          "While Holt is en route to visit Kevin in Paris, Jake and Amy inadvertently lose his dog. Meanwhile, Charles has laser eye surgery, and the sexual tension between Rosa and Adrian Pimento disgusts Terry.",
      },
      {
        episodeSeason: 3,
        episodeNum: 19,
        episodeName: "Terry Kitties",
        episodeDate: "April 28, 2016",
        episodeRanking: 7.7,
        episodeDescription:
          "Terry enlists Jake's help in solving a twenty year old case which his old precinct never let him forget, Charles allows Adrian Pimento to stay at his place and soon regrets it, while Amy, Rosa and Holt attend a class together.",
      },
      {
        episodeSeason: 3,
        episodeNum: 20,
        episodeName: "Paranoia",
        episodeDate: "May 5, 2016",
        episodeRanking: 8.2,
        episodeDescription:
          "The precinct tries to set up perfect bachelor and bachelorette parties for Adrian and Rosa after they announce their engagement, but Adrian's party falls apart when he tells everyone that someone is stalking him and steals the party bus.",
      },
      {
        episodeSeason: 3,
        episodeNum: 21,
        episodeName: "Maximum Security",
        episodeDate: "May 12, 2016",
        episodeRanking: 8.1,
        episodeDescription:
          "With Adrian off the grid and in hiding, the rest of the squad scramble to track down the sister of Figgis, the mobster behind the operation, and throw a fake funeral to flush out Figgis' hit man.",
      },
      {
        episodeSeason: 3,
        episodeNum: 22,
        episodeName: "Bureau",
        episodeDate: "May 19, 2016",
        episodeRanking: 8.7,
        episodeDescription:
          "While Amy continues to work on Figgis' sister Maura on the inside, Jake, Rosa and Holt team up with Bob Annderson to track down the FBI mole. Meanwhile, Gina helps Terry work out the culprit behind a press leak.",
      },
      {
        episodeSeason: 3,
        episodeNum: 23,
        episodeName: "Greg and Larry",
        episodeDate: "May 26, 2016",
        episodeRanking: 9,
        episodeDescription:
          "After a surprising turn of events in the Nine-Nine's attempt to track down Adrian Pimento's hitman, the precinct drops everything when they suspect Holt is in danger.",
      },
      {
        episodeSeason: 4,
        episodeNum: 1,
        episodeName: "Coral Palms, Part 1",
        episodeDate: "September 20, 2016",
        episodeRanking: 8.2,
        episodeDescription:
          'Jake and Holt adjust to their new lives in Florida under the Witness Protection Program while Jimmy "The Butcher" Figgis remains on the loose.',
      },
      {
        episodeSeason: 4,
        episodeNum: 2,
        episodeName: "Coral Palms, Part 2",
        episodeDate: "September 27, 2016",
        episodeRanking: 8.2,
        episodeDescription:
          'Jake and Holt plan their attack on Jimmy "The Butcher" Figgis, only to end up on the other side of the interrogation table.',
      },
      {
        episodeSeason: 4,
        episodeNum: 3,
        episodeName: "Coral Palms, Part 3",
        episodeDate: "October 4, 2016",
        episodeRanking: 8.4,
        episodeDescription:
          "The team goes to Florida to help Jake and Holt take down Jimmy Figgis, but their plan falls through due to an unexpected injury and another interruption from Sheriff Reynolds.",
      },
      {
        episodeSeason: 4,
        episodeNum: 4,
        episodeName: "The Night Shift",
        episodeDate: "October 11, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "Jake, on his first case back at the precinct, commandeers the vehicle of Jess Day, (from New Girl) who's visiting New York. In the meantime, Holt tries to increase office morale and Amy wants to know why Rosa is taking such long breaks.",
      },
      {
        episodeSeason: 4,
        episodeNum: 5,
        episodeName: "Halloween IV",
        episodeDate: "October 18, 2016",
        episodeRanking: 8.8,
        episodeDescription:
          "The squad competes in the annual Halloween heist to win the title of Ultimate Detective Slash Genius.",
      },
      {
        episodeSeason: 4,
        episodeNum: 6,
        episodeName: "Monster in the Closet",
        episodeDate: "November 15, 2016",
        episodeRanking: 7.9,
        episodeDescription:
          "The Nine-Nine throws a wedding for Pimento and Rosa.",
      },
      {
        episodeSeason: 4,
        episodeNum: 7,
        episodeName: "Mr. Santiago",
        episodeDate: "November 22, 2016",
        episodeRanking: 8.2,
        episodeDescription:
          "Amy's father, a former cop, comes to Thanksgiving dinner and Jake tries to impress him, leaving Charles on turkey duty. In the meantime, Holt helps Pimento come to terms with the fact that he can no longer be a police officer.",
      },
      {
        episodeSeason: 4,
        episodeNum: 8,
        episodeName: "Skyfire Cycle",
        episodeDate: "November 29, 2016",
        episodeRanking: 7.8,
        episodeDescription:
          "Terry meets his lifelong hero, a famous author who's received death threats. In other events, Gina tries to choose the location of the Boyle family vacation and Amy sides with Kevin in his argument with Holt over a math puzzle.",
      },
      {
        episodeSeason: 4,
        episodeNum: 9,
        episodeName: "The Overmining",
        episodeDate: "December 6, 2016",
        episodeRanking: 8,
        episodeDescription: "Jake and Holt help Captain CJ with a big case.",
      },
      {
        episodeSeason: 4,
        episodeNum: 10,
        episodeName: "Captain Latvia",
        episodeDate: "December 13, 2016",
        episodeRanking: 7.6,
        episodeDescription:
          "Jake and Charles face off against a Latvian criminal ring when Jake helps Charles find his son's favorite toy for Christmas.",
      },
      {
        episodeSeason: 4,
        episodeNum: 11,
        episodeName: "The Fugitive, Part 1",
        episodeDate: "January 1, 2017",
        episodeRanking: 8.5,
        episodeDescription:
          "The squad goes on a manhunt for a group of convicts who've escaped from a prison van on the streets of Brooklyn. When one fugitive is still loose, Jake gains a surprising ally.",
      },
      {
        episodeSeason: 4,
        episodeNum: 12,
        episodeName: "The Fugitive, Part 2",
        episodeDate: "January 1, 2017",
        episodeRanking: 8.5,
        episodeDescription:
          "The squad goes on a manhunt for a group of convicts who've escaped from a prison van on the streets of Brooklyn. When one fugitive is still loose, Jake gains a surprising ally.",
      },
      {
        episodeSeason: 4,
        episodeNum: 13,
        episodeName: "The Audit",
        episodeDate: "April 11, 2017",
        episodeRanking: 7.7,
        episodeDescription:
          "The squad tries to save their precinct from getting shut down when it's being audited by Amy's ex-boyfriend Teddy.",
      },
      {
        episodeSeason: 4,
        episodeNum: 14,
        episodeName: "Serve & Protect",
        episodeDate: "April 18, 2017",
        episodeRanking: 7.9,
        episodeDescription:
          "Jake and Rosa investigate a case of burglary that occurred on the set of one of their favorite detective shows as Terry's ex takes over auditing the Nine-Nine.",
      },
      {
        episodeSeason: 4,
        episodeNum: 15,
        episodeName: "The Last Ride",
        episodeDate: "April 25, 2017",
        episodeRanking: 8.3,
        episodeDescription:
          "Jake and Charles search for a bike thief on what may be their last case together.",
      },
      {
        episodeSeason: 4,
        episodeNum: 16,
        episodeName: "Moo Moo",
        episodeDate: "May 2, 2017",
        episodeRanking: 8.9,
        episodeDescription:
          "Terry and Holt have different ideas for dealing with a fellow police officer who creates trouble for Terry in his own neighborhood.",
      },
      {
        episodeSeason: 4,
        episodeNum: 17,
        episodeName: "Cop-Con",
        episodeDate: "May 9, 2017",
        episodeRanking: 8.3,
        episodeDescription:
          "Holt tells the squad to be on their best behavior at Cop-Con.",
      },
      {
        episodeSeason: 4,
        episodeNum: 18,
        episodeName: "Chasing Amy",
        episodeDate: "May 9, 2017",
        episodeRanking: 8,
        episodeDescription: "Amy disappears just before the Sergeant exam.",
      },
      {
        episodeSeason: 4,
        episodeNum: 19,
        episodeName: "Your Honor",
        episodeDate: "May 16, 2017",
        episodeRanking: 8,
        episodeDescription:
          "Captain Holt's mother comes to the precinct for help when her house is robbed.",
      },
      {
        episodeSeason: 4,
        episodeNum: 20,
        episodeName: "The Slaughterhouse",
        episodeDate: "May 16, 2017",
        episodeRanking: 8,
        episodeDescription:
          "Jake and Rosa attempt to earn their idol's respect.",
      },
      {
        episodeSeason: 4,
        episodeNum: 21,
        episodeName: "The Bank Job",
        episodeDate: "May 23, 2017",
        episodeRanking: 8.5,
        episodeDescription:
          "Jake and Rosa learn there's more to Lieutenant Hawkins' team than meets the eye as they continue searching for bank robbers.",
      },
      {
        episodeSeason: 4,
        episodeNum: 22,
        episodeName: "Crime & Punishment",
        episodeDate: "May 23, 2017",
        episodeRanking: 8.6,
        episodeDescription:
          "Jake and Rosa are framed for a crime they didn't commit.",
      },
      {
        episodeSeason: 5,
        episodeNum: 1,
        episodeName: "The Big House Pt. 1",
        episodeDate: "March 8, 2017",
        episodeRanking: 8.5,
        episodeDescription:
          "Jake and Rosa each adjust differently to life in prison.",
      },
      {
        episodeSeason: 5,
        episodeNum: 2,
        episodeName: "The Big House Pt. 2",
        episodeDate: "October 3, 2017",
        episodeRanking: 8.4,
        episodeDescription:
          "Jake is torn between the warden and Romero, while a local mobster claims he can prove that Hawkins is guilty.",
      },
      {
        episodeSeason: 5,
        episodeNum: 3,
        episodeName: "Kicks",
        episodeDate: "October 10, 2017",
        episodeRanking: 8,
        episodeDescription:
          "Jake must pass an official evaluation performed by Holt in order to solve a real case.",
      },
      {
        episodeSeason: 5,
        episodeNum: 4,
        episodeName: "HalloVeen",
        episodeDate: "October 17, 2017",
        episodeRanking: 9.5,
        episodeDescription:
          'The Nine-Nine has their fifth annual Halloween heist, and everyone has until midnight to claim the title of "Amazing Human/Genius".',
      },
      {
        episodeSeason: 5,
        episodeNum: 5,
        episodeName: "Bad Beat",
        episodeDate: "November 7, 2017",
        episodeRanking: 8,
        episodeDescription:
          "Jake, Terry and Holt go undercover at an illegal gambling club to track down an arms dealer.",
      },
      {
        episodeSeason: 5,
        episodeNum: 6,
        episodeName: "The Venue",
        episodeDate: "November 14, 2017",
        episodeRanking: 7.8,
        episodeDescription:
          "The Vulture returns and threatens to take away something important from Jake and Amy.",
      },
      {
        episodeSeason: 5,
        episodeNum: 7,
        episodeName: "Two Turkeys",
        episodeDate: "November 21, 2017",
        episodeRanking: 8.1,
        episodeDescription:
          "Jake and Amy bring their parents together for Thanksgiving.",
      },
      {
        episodeSeason: 5,
        episodeNum: 8,
        episodeName: "Return to Skyfire",
        episodeDate: "November 28, 2017",
        episodeRanking: 7.5,
        episodeDescription:
          "When DC Parlov returns to the precinct to report his latest manuscript being stolen, Terry, Jake and Rosa go undercover at a fantasy convention to catch the culprit.",
      },
      {
        episodeSeason: 5,
        episodeNum: 9,
        episodeName: "99",
        episodeDate: "December 5, 2017",
        episodeRanking: 8.8,
        episodeDescription:
          "Holt learns he's in the running to become Chief Commissioner of the NYPD when the squad is in LA for a funeral, but when they miss their flight back to New York, Jake tries to get Holt back in time for the interview.",
      },
      {
        episodeSeason: 5,
        episodeNum: 10,
        episodeName: "Game Night",
        episodeDate: "December 12, 2017",
        episodeRanking: 8.6,
        episodeDescription: "Jake helps Rosa break big news to her parents.",
      },
      {
        episodeSeason: 5,
        episodeNum: 11,
        episodeName: "The Favor",
        episodeDate: "December 12, 2017",
        episodeRanking: 8,
        episodeDescription:
          "Holt owes Seamus Murphy a favor, so the precinct searches for a loophole that will allow the captain to keep his end of the bargain without breaking the law.",
      },
      {
        episodeSeason: 5,
        episodeNum: 12,
        episodeName: "Safe House",
        episodeDate: "March 18, 2018",
        episodeRanking: 8.7,
        episodeDescription:
          "After Seamus threatens Kevin, Holt devises an elaborate plan to hide him in a safe house, with Jake as his guard. Kevin is miserable as the 99 works overtime to find Seamus and take him down.",
      },
      {
        episodeSeason: 5,
        episodeNum: 13,
        episodeName: "The Negotiation",
        episodeDate: "March 25, 2018",
        episodeRanking: 8.3,
        episodeDescription:
          "Jake runs into a familiar face when he's called in to negotiate a hostage situation with a jewel thief.",
      },
      {
        episodeSeason: 5,
        episodeNum: 14,
        episodeName: "The Box",
        episodeDate: "April 1, 2018",
        episodeRanking: 9.6,
        episodeDescription:
          "Jake and Holt spend all night trying to get a confession out of a suspect.",
      },
      {
        episodeSeason: 5,
        episodeNum: 15,
        episodeName: "The Puzzle Master",
        episodeDate: "April 8, 2018",
        episodeRanking: 7.7,
        episodeDescription:
          "Jake and Amy investigate a series of arsons connected to Amy's favorite crossword puzzle author.",
      },
      {
        episodeSeason: 5,
        episodeNum: 16,
        episodeName: "NutriBoom",
        episodeDate: "April 15, 2018",
        episodeRanking: 7.8,
        episodeDescription:
          "Jake and Charles get suckered into a pyramid scheme.",
      },
      {
        episodeSeason: 5,
        episodeNum: 17,
        episodeName: "DFW",
        episodeDate: "April 15, 2018",
        episodeRanking: 7.8,
        episodeDescription:
          "Jake meets his half-sister and she invites herself to stay.",
      },
      {
        episodeSeason: 5,
        episodeNum: 18,
        episodeName: "Gray Star Mutual",
        episodeDate: "April 22, 2018",
        episodeRanking: 8,
        episodeDescription:
          "Pimento shows up as the insurance agent when a fire destroys Charles' food truck.",
      },
      {
        episodeSeason: 5,
        episodeNum: 19,
        episodeName: "Bachelor/ette Party",
        episodeDate: "April 29, 2018",
        episodeRanking: 8.5,
        episodeDescription:
          "Charles plans a scavenger hunt for Jake's bachelor party; Amy's bachelorette party escalates when it's discovered she once slept with a member of her soon-to-be wedding band.",
      },
      {
        episodeSeason: 5,
        episodeNum: 20,
        episodeName: "Show Me Going",
        episodeDate: "May 6, 2018",
        episodeRanking: 8.4,
        episodeDescription:
          "The Nine-Nine fears for Rosa's safety when she responds to an active shooter alert.",
      },
      {
        episodeSeason: 5,
        episodeNum: 21,
        episodeName: "White Whale",
        episodeDate: "May 13, 2018",
        episodeRanking: 8,
        episodeDescription:
          "Rosa and Amy track down a killer who's managed to elude them for seven years; Terry helps Jake with his wedding chores; Holt and his rival try to convince each other to resign from the campaign for Commissioner.",
      },
      {
        episodeSeason: 5,
        episodeNum: 22,
        episodeName: "Jake & Amy",
        episodeDate: "May 20, 2018",
        episodeRanking: 9.2,
        episodeDescription:
          "The squad rushes to save Jake and Amy's wedding day from a major threat.",
      },
      {
        episodeSeason: 6,
        episodeNum: 1,
        episodeName: "Honeymoon",
        episodeDate: "March 28, 2019",
        episodeRanking: 8.4,
        episodeDescription:
          "Jake and Amy go on their honeymoon; Gina and Charles get into a family squabble; Terry tries to live up to his new nickname.",
      },
      {
        episodeSeason: 6,
        episodeNum: 2,
        episodeName: "Hitchcock & Scully",
        episodeDate: "April 4, 2019",
        episodeRanking: 8.8,
        episodeDescription:
          "Jake and Charles investigate a case of Hitchcock and Scully's from the 1980s; meanwhile, Amy's uniformed officers and Terry's detectives fight over limited resources.",
      },
      {
        episodeSeason: 6,
        episodeNum: 3,
        episodeName: "The Tattler",
        episodeDate: "April 11, 2019",
        episodeRanking: 7.6,
        episodeDescription:
          "Jake and Gina attend their 20th high school reunion. Back at the Nine-Nine, Charles helps Rosa with her love life.",
      },
      {
        episodeSeason: 6,
        episodeNum: 4,
        episodeName: "Four Movements",
        episodeDate: "April 18, 2019",
        episodeRanking: 7.4,
        episodeDescription:
          "Gina plays a high-stakes game of chess with Capt. Holt; Rosa and Amy take Gina out for a fancy brunch; Jake and Gina must use their wits to infiltrate a posh club.",
      },
      {
        episodeSeason: 6,
        episodeNum: 5,
        episodeName: "A Tale of Two Bandits",
        episodeDate: "April 25, 2019",
        episodeRanking: 8.2,
        episodeDescription:
          "Terry believes the Pontiac Bandit has gone back to stealing cars, but Jake tries to prove him wrong; the rest of the squad fight to keep Shaw's a police bar when some firemen stake a claim to it.",
      },
      {
        episodeSeason: 6,
        episodeNum: 6,
        episodeName: "The Crime Scene",
        episodeDate: "May 2, 2019",
        episodeRanking: 8.5,
        episodeDescription:
          "Jake and Rosa must deal with a mother in mourning when they work on a difficult murder case with confusing evidence.",
      },
      {
        episodeSeason: 6,
        episodeNum: 7,
        episodeName: "The Honeypot",
        episodeDate: "May 9, 2019",
        episodeRanking: 8.5,
        episodeDescription:
          "Jake and Holt clash over the merits of a new hire in the 99th precinct. Terry, Amy, Rosa and Charles try to do something about the cluttered bullpen.",
      },
      {
        episodeSeason: 6,
        episodeNum: 8,
        episodeName: "He Said, She Said",
        episodeDate: "May 16, 2019",
        episodeRanking: 7,
        episodeDescription:
          'Jake and Amy investigate a difficult "he said, she said" case of sexual assault. Holt becomes suspicious after learning his lifelong arch nemesis died in a prison transport accident.',
      },
      {
        episodeSeason: 6,
        episodeNum: 9,
        episodeName: "The Golden Child",
        episodeDate: "May 30, 2019",
        episodeRanking: 8.1,
        episodeDescription:
          "Jake helps Amy navigate the complicated relationship she has with her brother, David. Charles introduces some drama into an undercover mission involving Terry and Holt.",
      },
      {
        episodeSeason: 6,
        episodeNum: 10,
        episodeName: "Gintars",
        episodeDate: "June 6, 2019",
        episodeRanking: 7.4,
        episodeDescription:
          "A visitor from Latvia causes Charles and Jake to investigate Nikolaj's family. Holt and Amy bring in famed forensic scientist Dr. Yee to help close a case for Rosa.",
      },
      {
        episodeSeason: 6,
        episodeNum: 11,
        episodeName: "The Therapist",
        episodeDate: "June 13, 2019",
        episodeRanking: 8.1,
        episodeDescription:
          "Charles gets Jake involved in a case where a therapist reports one of his patients missing; Holt learns that Rosa has a new girlfriend whom everyone else has met; Amy thinks she mistakenly received a package for Terry.",
      },
      {
        episodeSeason: 6,
        episodeNum: 12,
        episodeName: "Casecation",
        episodeDate: "June 20, 2019",
        episodeRanking: 7.6,
        episodeDescription:
          "Work is so busy for Jake and Amy that they end up celebrating their anniversary while standing guard over a comatose patient in the hospital.",
      },
      {
        episodeSeason: 6,
        episodeNum: 13,
        episodeName: "The Bimbo",
        episodeDate: "June 27, 2019",
        episodeRanking: 7.9,
        episodeDescription:
          "Holt and Jake investigate a case at Kevin's university. Back at the precinct, Terry and Amy take the squad out for lunch.",
      },
      {
        episodeSeason: 6,
        episodeNum: 14,
        episodeName: "Ticking Clocks",
        episodeDate: "July 4, 2019",
        episodeRanking: 8.4,
        episodeDescription:
          "Jake and the squad must track down a hacker who has infiltrated the Nine-Nine's servers; Rosa deals with relationship issues; Hitchcock and Scully attempt to cook the perfect lasagna.",
      },
      {
        episodeSeason: 6,
        episodeNum: 15,
        episodeName: "Return of the King",
        episodeDate: "May 2, 2019",
        episodeRanking: 6.4,
        episodeDescription:
          "When Gina returns to the Nine-Nine, Jake and Terry get drawn into her life. Holt learns that Charles' son, Nikolaj, may be a genius; Rosa copes with an injury.",
      },
      {
        episodeSeason: 6,
        episodeNum: 16,
        episodeName: "Cinco de Mayo",
        episodeDate: "May 9, 2019",
        episodeRanking: 9.2,
        episodeDescription:
          "In order to distract Terry from the stress of his upcoming lieutenant's exam, Jake, Holt and the squad decide to hold the annual Halloween Heist on a new date, Cinco de Mayo.",
      },
      {
        episodeSeason: 6,
        episodeNum: 17,
        episodeName: "Sicko",
        episodeDate: "May 16, 2019",
        episodeRanking: 8.5,
        episodeDescription:
          "Jake and Charles investigate a dangerous serial killer. Holt continues to spar with his rival, Commissioner Kelly. Terry tries to find a way to stay at the Nine-Nine.",
      },
      {
        episodeSeason: 6,
        episodeNum: 18,
        episodeName: "Suicide Squad",
        episodeDate: "May 16, 2019",
        episodeRanking: 9.1,
        episodeDescription:
          "Desperate circumstances call for desperate measures, as Jake, Holt, Amy, Terry, Rosa and Charles must ally themselves with old enemies.",
      },
      {
        episodeSeason: 7,
        episodeNum: 1,
        episodeName: "Manhunter",
        episodeDate: "March 26, 2020",
        episodeRanking: 8.1,
        episodeDescription:
          "Jake leads a manhunt after an assassination attempt on a city councilor; Holt adjusts to his new position as a uniformed officer.",
      },
      {
        episodeSeason: 7,
        episodeNum: 2,
        episodeName: "Captain Kim",
        episodeDate: "March 26, 2020",
        episodeRanking: 8.3,
        episodeDescription:
          "The new captain of the Nine-Nine invites the squad over to her house for a dinner party.",
      },
      {
        episodeSeason: 7,
        episodeNum: 3,
        episodeName: "Pimemento",
        episodeDate: "February 13, 2020",
        episodeRanking: 8.6,
        episodeDescription:
          "Adrian Pimento shows up unexpectedly to seek Jake and Charles' help after claiming someone is trying to kill him; the rest of the squad endures a workplace conflict seminar.",
      },
      {
        episodeSeason: 7,
        episodeNum: 4,
        episodeName: "The Jimmy Jab Games II",
        episodeDate: "February 20, 2020",
        episodeRanking: 7.9,
        episodeDescription:
          "Competitive juices are flowing as Jake and the squad compete in the second Jimmy Jab Games.",
      },
      {
        episodeSeason: 7,
        episodeNum: 5,
        episodeName: "Debbie",
        episodeDate: "February 27, 2020",
        episodeRanking: 7.3,
        episodeDescription:
          "When cocaine and weapons are stolen from the evidence lock-up, the squad must investigate the Nine-Nine itself.",
      },
      {
        episodeSeason: 7,
        episodeNum: 6,
        episodeName: "Trying",
        episodeDate: "March 5, 2020",
        episodeRanking: 7.8,
        episodeDescription:
          "Jake and Amy work an uncrackable case while Holt adjusts to a new beat. Hitchcock looks for the love of his life.",
      },
      {
        episodeSeason: 7,
        episodeNum: 7,
        episodeName: "Ding Dong",
        episodeDate: "March 12, 2020",
        episodeRanking: 8.7,
        episodeDescription:
          "Capt. Holt deals with a personal loss; Jake must decide whether to take Terry or Charles to an exclusive event.",
      },
      {
        episodeSeason: 7,
        episodeNum: 8,
        episodeName: "The Takeback",
        episodeDate: "May 7, 2020",
        episodeRanking: 8.2,
        episodeDescription:
          "Doug Judy is back, and this time, things between him and Jake are personal; Amy and Charles try to find the perfect new vending machine for the Nine-Nine.",
      },
      {
        episodeSeason: 7,
        episodeNum: 9,
        episodeName: "Dillman",
        episodeDate: "May 14, 2020",
        episodeRanking: 8.7,
        episodeDescription:
          "When a prank goes disastrously awry, things at the Nine-Nine take a distinctly Agatha Christie turn.",
      },
      {
        episodeSeason: 7,
        episodeNum: 10,
        episodeName: "Admiral Peralta",
        episodeDate: "April 2, 2020",
        episodeRanking: 8,
        episodeDescription:
          "Jake and his father deal with unsettled family business; Amy and Rosa work a high-profile case; Terry wants to join the NYPD band.",
      },
      {
        episodeSeason: 7,
        episodeNum: 11,
        episodeName: "Valloweaster",
        episodeDate: "April 9, 2020",
        episodeRanking: 8.3,
        episodeDescription:
          "The squad competes in an effort to determine who is the greatest human/genius.",
      },
      {
        episodeSeason: 7,
        episodeNum: 12,
        episodeName: "Ransom",
        episodeDate: "April 16, 2020",
        episodeRanking: 8.8,
        episodeDescription:
          "Holt asks for Jake's help in a case that is exceptionally meaningful to him. Charles and Terry work together on a side business.",
      },
      {
        episodeSeason: 7,
        episodeNum: 13,
        episodeName: "Lights Out",
        episodeDate: "April 23, 2020",
        episodeRanking: 9.3,
        episodeDescription:
          "The entire squad is on high alert when a massive blackout hits Brooklyn.",
      },
      {
        episodeSeason: 8,
        episodeNum: 1,
        episodeName: "The Good Ones",
        episodeDate: "January 1, 2021",
        episodeRanking: 4.8,
        episodeDescription:
          "Amy returns from maternity leave; Jake and Rosa work a difficult case.",
      },
      {
        episodeSeason: 8,
        episodeNum: 2,
        episodeName: "The Lake House",
        episodeDate: "August 12, 2021",
        episodeRanking: 7.9,
        episodeDescription:
          "The squad takes Capt. Holt up on an offer for a weekend getaway.",
      },
      {
        episodeSeason: 8,
        episodeNum: 3,
        episodeName: "Blue Flu",
        episodeDate: "August 19, 2021",
        episodeRanking: 7,
        episodeDescription:
          "Captain Holt and Amy manage an understaffed precinct; Jake and Charles investigate.",
      },
      {
        episodeSeason: 8,
        episodeNum: 4,
        episodeName: "Balancing",
        episodeDate: "August 19, 2021",
        episodeRanking: 7.8,
        episodeDescription:
          "Jake and Amy create a system to balance work and childcare; Rosa gets a new houseguest.",
      },
      {
        episodeSeason: 8,
        episodeNum: 5,
        episodeName: "PB&J",
        episodeDate: "August 26, 2021",
        episodeRanking: 8,
        episodeDescription: "Jake takes an old friend for a ride.",
      },
      {
        episodeSeason: 8,
        episodeNum: 6,
        episodeName: "The Set Up",
        episodeDate: "August 26, 2021",
        episodeRanking: 6.7,
        episodeDescription:
          "When the FBI takes over a high-profile case, Jake keeps digging; Amy and Rosa negotiate with O'Sullivan and the police union.",
      },
      {
        episodeSeason: 8,
        episodeNum: 7,
        episodeName: "Game of Boyles",
        episodeDate: "September 2, 2021",
        episodeRanking: 8.1,
        episodeDescription:
          "Terry, Jake and Charles visit the Boyle Family Farm; Amy and Rosa help out Capt. Holt.",
      },
      {
        episodeSeason: 8,
        episodeNum: 8,
        episodeName: "Renewal",
        episodeDate: "September 2, 2021",
        episodeRanking: 8.1,
        episodeDescription:
          "The squad comes together to work an important high-stakes case.",
      },
      {
        episodeSeason: 8,
        episodeNum: 9,
        episodeName: "The Last Day Pt 1",
        episodeDate: "September 16, 2021",
        episodeRanking: 9.4,
        episodeDescription:
          "The squad takes stock of their eight years together and look toward's their future.",
      },
      {
        episodeSeason: 8,
        episodeNum: 10,
        episodeName: "The Last Day Pt 2",
        episodeDate: "September 16, 2021",
        episodeRanking: 9.6,
        episodeDescription:
          "The squad takes stock of their eight years together and look towards their future.",
      },
    ],
  },
];

export default SHOW_DATA;
