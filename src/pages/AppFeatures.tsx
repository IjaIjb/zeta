import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const AppFeatures = () => {

  const features = [
    {
      category: "Health Monitoring & Tracking",
      items: [
        {
          title: "Real-time Vital Tracking",
          subItems: ["Monitors heart rate, blood pressure, oxygen saturation, and more."]
        },
        {
          title: "Sleep Monitoring & Analysis",
          subItems: ["Tracks sleep patterns, provides insights on sleep quality, and suggests improvements."]
        },
        {
          title: "Diet & Nutrition Tracking",
          subItems: ["Logs daily meals and calculates calorie, macronutrient, and micronutrient intake."]
        },
        {
          title: "Activity and Fitness Goals",
          subItems: ["Tracks steps, workouts, and other physical activities, with progress reports."]
        },
        {
          title: "Weight Management",
          subItems: ["Assists users in setting and achieving weight-related goals."]
        },
        {
          title: "Water Intake Reminders",
          subItems: ["Notifies users to stay hydrated based on their daily water goals."]
        },
        {
          title: "Chronic Condition Management",
          subItems: ["Tracks conditions like diabetes or hypertension with reminders and logs."]
        },
        {
          title: "Symptom Tracker",
          subItems: ["Logs symptoms and correlates them with health trends."]
        },
        {
          title: "Menstrual Cycle Tracker",
          subItems: ["Tracks and predicts menstrual cycles with health insights."]
        },
        {
          title: "Medication Reminders",
          subItems: ["Notifies users to take medications on schedule."]
        }
      ]
    },
    {
      category: "Personalized Health Insights",
      items: [
        {
          title: "Longevity Prediction (AI-powered)",
          subItems: ["Provides insights into how lifestyle changes can improve lifespan."]
        },
        {
          title: "Disease Risk Assessment",
          subItems: ["Evaluates risk levels for common diseases based on health data."]
        },
        {
          title: "Genetic Predisposition Reports",
          subItems: ["Offers insights into hereditary health risks."]
        },
        {
          title: "Tailored Exercise Plans",
          subItems: ["Suggests activities suited to the user’s goals and current health."]
        },
        {
          title: "Personalized Diet Suggestions",
          subItems: ["Recommends meals based on health goals and dietary preferences."]
        },
        {
          title: "Mental Health Monitoring",
          subItems: ["Tracks mood and stress levels, offering resources for emotional well-being."]
        },
        {
          title: "Custom Supplement Recommendations",
          subItems: ["Suggests vitamins and supplements based on nutritional gaps."]
        },
        {
          title: "Sleep Improvement Tips",
          subItems: ["Provides actionable advice to enhance sleep quality."]
        },
        {
          title: "Fitness Progress Reports",
          subItems: ["Tracks improvements and achievements in physical activity."]
        },
        {
          title: "Daily Health Summary Notifications",
          subItems: ["Sends a snapshot of health stats and suggestions for the day."]
        }
      ]
    },

    {
      category: " AI-Powered Assistance",
      items: [
        {
          title: "Health Chatbot for Guidance",
          subItems: ["AI-powered virtual assistant to answer health queries."]
        },
        {
          title: "Symptom Checker",
          subItems: ["AI-guided triage to evaluate symptoms and suggest next steps."]
        },
        {
          title: "Voice Commands",
          subItems: ["Enables users to interact with the app hands-free."]
        },
        {
          title: "Lifestyle Recommendations",
          subItems: ["Offers tips for healthy living tailored to user preferences."]
        },
        {
          title: "Mindfulness & Meditation Coach",
          subItems: ["Guides users through relaxation techniques."]
        },
        {
          title: "AI-based Workout Suggestions",
          subItems: ["Suggests exercises based on fitness levels and goals."]
        },
        {
          title: " Stress Level Analysis",
          subItems: ["Monitors and provides tips to reduce stress"]
        },

        {
          title: " Health Risk Prediction Alerts",
          subItems: ["Notifies users of potential health risks and steps to mitigate them."]
        },
        {
          title: " Mood Tracker & Suggestions",
          subItems: ["Logs mood changes and recommends activities for emotional balance."]
        },
        {
          title: "AI-generated Health Reports",
          subItems: ["Summarizes key health data into shareable reports."]
        }
      ]
    },


    {
      category: "Tokenization System",
      items: [
        {
          title: "Reward System for Healthy Habits",
          subItems: ["Earn tokens for completing exercises and sticking to routines."]
        },
        {
          title: "Leaderboard and Community Engagement",
          subItems: ["Encourages friendly competition with leaderboards."]
        },
        {
          title: "Token Wallet",
          subItems: ["Tracks earned tokens and their redemption options."]
        },
        {
          title: "Daily and Weekly Challenges",
          subItems: ["Offers token bonuses for achieving specific milestones"]
        },
        {
          title: "Premium Differentiation",
          subItems: ["Premium users enjoy exclusive token multipliers."]
        },
    
      ]
    },



    {
      category: "Doctor Matching System",
      items: [
        {
          title: "Real-Time Symptom Escalatio",
          subItems: ["Alerts users about severe symptoms and offers doctor matching."]
        },
        {
          title: "Doctor Matchmaking",
          subItems: ["Connects users to appropriate specialists."]
        },
        {
          title: " Teleconsultation Integration",
          subItems: ["Enables video or chat consultations with doctors."]
        },
        {
          title: " Medical History Sharing",
          subItems: ["Users can securely share detailed reports with matched doctors."]
        }
    
      ]
    },

    {
      category: "Skin Care AI",
      items: [
        {
          title: "Camera-Based Skin Analysis",
          subItems: ["Uses AI to analyze skin conditions via the smartphone camera."]
        },
        {
          title: "Personalized Skin Care Insights",
          subItems: ["Offers tailored recommendations for skin health"]
        },
        {
          title: "Interactive Chat with AI Skin Advisor",
          subItems: ["Provides instant tips and routines for optimal skincare."]
        },
        {
          title: "Skin Monitoring Over Time",
          subItems: ["Tracks improvements and adjusts recommendations."]
        },
        {
          title: " Skin Health Risk Alerts",
          subItems: ["Warns users about potential skin issues."]
        }
    
      ]
    },
    
    {
      category: "Hospital & Pharmacist Locator",
      items: [
        {
          title: "Nearby Hospitals & Clinics",
          subItems: ["Displays hospitals and clinics within a user-defined radius."]
        },
        {
          title: "Nearby Pharmacists",
          subItems: ["Shows pharmacies nearby, complete with contact and navigation details."]
        },
        {
          title: "Filter & Search Options",
          subItems: ["Allows users to search for specific healthcare services or specialties."]
        },
        {
          title: " Live Navigation",
          subItems: ["Integrates with maps for directions to selected locations."]
        }
    
      ]
    },


    {
      category: "Diagnostics & Reports",
      items: [
        {
          title: "Integration with Wearable Devices",
          subItems: ["Syncs data from smartwatches and fitness trackers."]
        },
        {
          title: "Digital Health Records Storage",
          subItems: ["Stores lab results, prescriptions, and medical history."]
        },
        {
          title: "Medical Imaging Analysis",
          subItems: ["AI-powered insights from uploaded scans (e.g., X-rays)."]
        },
        {
          title: "Family Health History Tracker",
          subItems: ["Helps track genetic predispositions."]
        },
        {
          title: "Detailed Blood Work Insights",
          subItems: ["Offers insights into lab results with explanations."]
        },
        {
          title: "Health Report Sharing",
          subItems: ["Generates shareable, detailed health reports for doctors, ensuring informed consultations."]
        }
    
      ]
    },

    {
      category: "Social & Community Features",
      items: [
        {
          title: "Health Challenges & Leaderboards",
          subItems: ["Promotes friendly competition for health goals."]
        },
        {
          title: "Community Forums & Support Groups",
          subItems: ["Connects users with like-minded individuals."]
        },
        {
          title: "Virtual Health Coaching",
          subItems: ["Offers one-on-one coaching from experts."]
        },
        {
          title: "Family Account Linking",
          subItems: ["Enables tracking and support for family members."]
        },
        {
          title: "Health Goal Sharing",
          subItems: ["Shares achievements and goals with friends."]
        }
      ]
    },

    {
      category: "E-commerce Marketplace",
      items: [
        {
          title: "Health & Wellness Product Store",
          subItems: ["Offers supplements, fitness equipment, and wearable devices."]
        },
        {
          title: "AI-driven Product Recommendations",
          subItems: ["Suggests products based on health data."]
        },
        {
          title: "Service Bookings",
          subItems: ["Allows users to book lab tests, consultations, and fitness classes."]
        }
      ]
    },
  ];
  return (
    <div>
          <div className="bg-[#262626] h-full  relative">
      <div className="bg-black">
        <div
          className="about-transition_main-img bg-cover bg-center h-full"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce338/65b7eb0c290e7bf3aaab98f0_tranisiton-bg.webp')",
          }}
        >
          <div className="lg:p-3 p-2 w-full flex justify-center">
            <div className="max-w-[2000px] lg:px-14 px-3 w-full">
              <div className="flex justify-center">
                <Navbar />
              </div>
      
            </div>
          </div>
        </div>
      </div>

      <div className="my-20">
        <div id="get-in-touch" className="flex justify-center ">
        <header className="text-center pt-20">
        <h1 className="text-4xl font-bold text-gray-200">Zetakree App Features</h1>
        <p className="text-gray-400 mt-2">
          Explore the innovative features that make our app unique and powerful.
        </p>
      </header>
        </div>

      </div>
      <div className="md:px-20 px-4 flex w-full  justify-center ">

      <main className=" mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <section
            key={index}
            className="bg-black shadow-lg rounded-lg p-4 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-green-600 mb-3">
              {feature.category}
            </h2>
            <ul className="space-y-4">
              {feature.items.map((item, idx) => (
                <li key={idx}>
                  <h3 className="font-bold text-gray-200">{item.title}</h3>
                  <ul className="list-disc ml-5 mt-2 text-gray-400">
                    {item.subItems.map((subItem, subIdx) => (
                      <li key={subIdx}>{subItem}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default AppFeatures