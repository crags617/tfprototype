function search_alert()
{
alert("Ambitious! Lets just look for IT support.. okay?");
}

function location_alert()
{
alert("SF rules, lets just look there.");
}

function notready_alert()
{
alert("Naht today.");
}

var myobj = (function() {
	//give ids to the textbox forms so that they are easy to find, then make some jQuery(#search).text() -- this will tell you the text for the item that got clicked
    var initfn = function() { //sets up event handlers
        jQuery("#background").append("<div id='more1'><p>Aspiration is a unique and trusted nonprofit technology assistance provider, and our mission is to help nonprofits and foundations use software tools more effectively and sustainably. We offer end-user training, mentoring, and support, strategic consulting, product management and community strategy services, and collaborative knowledge sharing events. In support of these offerings, Aspiration maintains two knowledge aggregation sites: <a href='http://www.socialsourcecommons.org'>SocialSourceCommons.org</a> is a comprehensive inventory of nonprofit and NGO-related software tools, and <a href='http://www.answr.net'>Answr.net</a> is an interactive question-and-answer platform providing best practices and how-to's on a range of nonprofit technology issues. For more on Aspiration, see <a href='http://aspirationtech.org/about'>our website</a>.</p>");
        jQuery("#strategy").append("<div id='more2'><p>TechFinder will serve as the third component in Aspiration's online platform model, providing a services directory to complement existing knowledge resources. The three sites will be integrated via open API's (Application Programmer Interfaces), so that TechFinder data can be displayed on SSC and Answr pages as well. For more information on this, see <a href='http://tfprototype.aspirationtech.org/project-resources/white-paper/'>The Vision for a New TechFinder (White Paper)</a> under Project Resources.</p><p>Essentially, our three online platforms will strive to address the three fundamental nonprofit support questions:</p><ul><li>Social Source Commons: “What software is out there to support our work?”</li><li>Answr: “How do I use it effectively?”</li><li>TechFinder: “Who can help me deploy and use it?”</li></ul>");
        jQuery("#features").append("<div id='more3'><p>The target users for TechFinder will be nonprofit technology decision makers and nonprofit technology service providers.</p><p>Nonprofit staff will be able to:</p><ul><li>Search or browse for technology services by:</li><ul><li>Service needs</li><li>Location</li><li>Ratings and reviews</li><li>Languages spoken</li><li>Programmatic specializations</li></ul><li>View newly listed service providers</li><li>Rate a service provider</li><li>Write and read reviews of service providers</li><li>Add a new service provider to the database, or update information about an existing record</li><li>Maintain a profile and get recommendations based on past searches and reviews</li></ul><p>Technology service providers will be able to:</p><ul><li>Maintain a service provider profile</li><li>Receive notification when reviewed by users as well as about how many times their profile has been viewed</li><li>Search or browse for other providers</li><li>List tools they have experience with</li></ul>");
        jQuery("#feedback").append("<div id='more4'><p>Aspiration believes that all nonprofit technology development projects should be driven from the outset by the users who will ultimately employ the solution.</p><p>As such, we are inviting broad participation as we design and build out TechFinder, asking for feedback on a range of choice points regarding both the site's physical layout as well as its functionality.</p><p>The first area we'll ask for feedback on is TechFinder's <b>search function</b>, which will utilize an optimal combination of free-write and drop-down search boxes to allow for quick and efficient searches, as well as effective Advanced Search or filter options for browsing. Options we will present are:</p><ul><li>Free-write search box for location, or drop-down until more locations are covered</li><li>One free-write searchbox for technology and service keywords, or one free-write keyword search box with a dropdown for select services</li><li>Content beneath search box: general or categorized recommendations, top service request, recently added or recently reviewed providers</li><li>Advanced search options: filters that show up for each search, separate advanced search page, ability to browse by category</li></ul><p>The other crucial area we invite community participation on is TechFinder's <b>rating and review system</b>, which will constitute a simple, effective way to offer and access both quick and detailed feedback on service providers.</p><p>Possibilities for this system include:</p><ul><li>One click rating: “recommend” without rating scale or written review</li><li>General rating scale:</li><ul><li>Rate 1-5 based on desire to re-use service</li><li>Rate 1-100% based on likelihood of re-using service</li><li>Rate 1-5 “overall” with optional specific ratings in categories such as appropriate pricing, professionalism, responsiveness, helpfulness, friendliness, and flexibility</li></ul><li>Option to view “rating details”: rating distribution chart, rating over time</li><li>A rating algorithm that puts more weight on more recent ratings</li><li>The ability to rate a review useful</li><li>Required categories for written reviews such as what the particular service the provider was used for or where the reviewer is from</li></ul></div>");
        jQuery("#participation").append("<div id='more5'><p>As we move forward, we plan on collecting feedback by presenting choice points composed of screenshots, examples, or descriptions, as well as posing more open-ended questions. In addition to engaging directly with our TechFinder advisory group, channels on which we will engage the broader community will include:</p><ul><li><a href='http://blog.socialsourcecommons.org'><b>Blogging</b></a>: We'll think out loud as we move along the path from concept to reality with interaction through comments as well as embedded surveys.</li><li><a href='http://www.facebook.com/AspirationTech'><b>Social media</b></a>: We'll post pictures and use status updates to get feedback from our friends through “likes” and comments, and <a href='mailto:tfprototype@aspirationtech.org'>email tfprototype@aspirationtech.org</a>.</li><li><b>Webinars</b>: We'll walk through some potential layouts and uses of TechFinder as another means of collecting feedback from anyone interested.</li></ul></div>");
        jQuery("#more1").hide();
        jQuery("#more2").hide();
        jQuery("#more3").hide();
        jQuery("#more4").hide();
        jQuery("#more5").hide();
        jQuery("#background").click(function (ev) { //adds click handlers
            jQuery("#more1").toggle();
        });
        jQuery("#strategy").click(function (ev) { //adds click handlers
            jQuery("#more2").toggle();
        });
        jQuery("#features").click(function (ev) { //adds click handlers
            jQuery("#more3").toggle();
        });
        jQuery("#feedback").click(function (ev) { //adds click handlers
            jQuery("#more4").toggle();
        });
        jQuery("#participation").click(function (ev) { //adds click handlers
            jQuery("#more5").toggle();
        });
    };
    return {
        init: initfn //gives back method name and function
    };
}());

jQuery(myobj.init); // register my init function to be fired after the page loads:
