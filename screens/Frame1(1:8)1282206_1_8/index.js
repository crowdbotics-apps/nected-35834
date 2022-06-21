import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_9}>
        <Text style={styles.Text_1_9}>
          Nected, Empowering creators to become creator-prenuer, much faster!
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a18c1335-0503-4f4d-8586-8a8048c9c066"
        }}
        style={styles.ImageBackground_1_10}
      />
      <View style={styles.View_1_11}>
        <Text style={styles.Text_1_11}>
          Lightweight &amp; easy to set up AI-powered CRM acting as Digital
          Sales &amp; Marketing assistant for creators to help them run &amp;
          scale their business efficiently.
        </Text>
      </View>
      <View style={styles.View_1_12}>
        <View style={styles.View_1_13} />
        <View style={styles.View_1_14}>
          <Text style={styles.Text_1_14}>Get Early Access</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edc84a85-8c95-4e77-81d3-4ec2dddac614"
          }}
          style={styles.ImageBackground_1_15}
        />
      </View>
      <View style={styles.View_1_16}>
        <View style={styles.View_1_17} />
        <View style={styles.View_1_18}>
          <Text style={styles.Text_1_18}>Get Early Access</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56a32846-6871-488f-a81f-7a93fbb24650"
          }}
          style={styles.ImageBackground_1_19}
        />
      </View>
      <View style={styles.View_1_20}>
        <Text style={styles.Text_1_20}>
          Our AI-led virtual sales assistant would help you:
        </Text>
      </View>
      <View style={styles.View_1_21}>
        <View style={styles.View_1_22}>
          <Text style={styles.Text_1_22}>
            Never lose any leads in your DMs or comments with our simplified
            AI-powered chatbot that segregates your queries. Get one link in bio
            for all discovery and conver...
          </Text>
        </View>
        <View style={styles.View_1_23}>
          <View style={styles.View_1_24}>
            <Text style={styles.Text_1_24}>read more</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c6a08a9-3b6b-4854-ade3-98944e66ee23"
            }}
            style={styles.ImageBackground_1_25}
          />
        </View>
        <View style={styles.View_1_26}>
          <Text style={styles.Text_1_26}>Drive More Sales</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68c8100a-dc30-4ba3-999a-dda7676bf1da"
          }}
          style={styles.ImageBackground_1_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae9f6dfd-3cf6-4ba9-b280-6281300ff7e6"
          }}
          style={styles.ImageBackground_261_54}
        />
      </View>
      <View style={styles.View_1_33}>
        <View style={styles.View_1_34}>
          <Text style={styles.Text_1_34}>
            Never lose any leads in your DMs or comments with our simplified
            AI-powered chatbot that segregates your queries. Get one link in bio
            for all discovery and conver...
          </Text>
        </View>
        <View style={styles.View_1_35}>
          <View style={styles.View_1_36}>
            <Text style={styles.Text_1_36}>read more</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1772ef45-2687-4989-a36c-70aca572975e"
            }}
            style={styles.ImageBackground_1_37}
          />
        </View>
        <View style={styles.View_1_38}>
          <Text style={styles.Text_1_38}>Drive More Sales</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01063480-7a2a-45f1-8c0e-862df9b25b64"
          }}
          style={styles.ImageBackground_1_39}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d71f31ed-0e87-4b5c-b856-0a0c90df0d66"
          }}
          style={styles.ImageBackground_261_62}
        />
      </View>
      <View style={styles.View_1_45}>
        <View style={styles.View_1_46}>
          <Text style={styles.Text_1_46}>
            Never lose any leads in your DMs or comments with our simplified
            AI-powered chatbot that segregates your queries. Get one link in bio
            for all discovery and conver...
          </Text>
        </View>
        <View style={styles.View_1_47}>
          <View style={styles.View_1_48}>
            <Text style={styles.Text_1_48}>read more</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/892ed26c-ce76-4abb-bfe4-bf675c55f76f"
            }}
            style={styles.ImageBackground_1_49}
          />
        </View>
        <View style={styles.View_1_50}>
          <Text style={styles.Text_1_50}>Drive More Sales</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e6dc8c1-d50e-4b19-bbf3-1b0919223a7a"
          }}
          style={styles.ImageBackground_1_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46a43eea-ed19-4328-84aa-aa37ddfde084"
          }}
          style={styles.ImageBackground_261_67}
        />
      </View>
      <View style={styles.View_1_57}>
        <View style={styles.View_1_58}>
          <Text style={styles.Text_1_58}>
            Never lose any leads in your DMs or comments with our simplified
            AI-powered chatbot that segregates your queries. Get one link in bio
            for all discovery and conver...
          </Text>
        </View>
        <View style={styles.View_1_59}>
          <View style={styles.View_1_60}>
            <Text style={styles.Text_1_60}>read more</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad73d41f-9870-46b0-9652-ba07f6336826"
            }}
            style={styles.ImageBackground_1_61}
          />
        </View>
        <View style={styles.View_1_62}>
          <Text style={styles.Text_1_62}>Drive More Sales</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1c65874-4387-4969-91f0-fd2b430ce714"
          }}
          style={styles.ImageBackground_1_63}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec5bd2ff-88b6-44bc-9bc1-60238b84d2c2"
          }}
          style={styles.ImageBackground_261_83}
        />
      </View>
      <View style={styles.View_1_69}>
        <View style={styles.View_1_70}>
          <Text style={styles.Text_1_70}>
            Never lose any leads in your DMs or comments with our simplified
            AI-powered chatbot that segregates your queries. Get one link in bio
            for all discovery and conver...
          </Text>
        </View>
        <View style={styles.View_1_71}>
          <View style={styles.View_1_72}>
            <Text style={styles.Text_1_72}>read more</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e2d5217-0280-4e7f-8341-6128ff1c585f"
            }}
            style={styles.ImageBackground_1_73}
          />
        </View>
        <View style={styles.View_1_74}>
          <Text style={styles.Text_1_74}>Drive More Sales</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24146cd8-5fc2-4b9b-a9b0-aec36fda7e16"
          }}
          style={styles.ImageBackground_1_75}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2ce862d-13ba-46b1-b8d6-dcce9fadc49d"
          }}
          style={styles.ImageBackground_261_75}
        />
      </View>
      <View style={styles.View_1_85}>
        <View style={styles.View_1_86} />
        <View style={styles.View_1_87}>
          <View style={styles.View_1_88} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bb87ab4-5604-46c7-a864-75562cc97564"
            }}
            style={styles.ImageBackground_1_89}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59c5aad7-d787-4654-92e1-5d5aa71ef85a"
            }}
            style={styles.ImageBackground_1_90}
          />
        </View>
        <View style={styles.View_1_91}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/167a5280-603d-4050-bbfd-e6d5354b208f"
            }}
            style={styles.ImageBackground_I1_91_1_5}
          />
        </View>
        <View style={styles.View_1_92}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77eee4f1-61d7-451b-b709-d534f497ca4d"
            }}
            style={styles.ImageBackground_I1_92_1_3}
          />
        </View>
        <View style={styles.View_1_93}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57267a65-73fd-4214-94ba-ffcb029aa070"
            }}
            style={styles.ImageBackground_I1_93_1_7}
          />
        </View>
        <View style={styles.View_1_94}>
          <Text style={styles.Text_1_94}>
            Nected is for global creators, turning into creator-preneurs,
            helping them Leverage the power of AI to Simplify their business
            endeavors, without much need for team &amp; capital.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_1_95}>
        <View style={styles.View_1_96}>
          <View style={styles.View_1_97}>
            <View style={styles.View_1_98}>
              <View style={styles.View_1_99} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2df12cb-2f11-4289-83d4-e05aa4e8b1ab"
                }}
                style={styles.ImageBackground_261_103}
              />
            </View>
            <View style={styles.View_1_101}>
              <View style={styles.View_1_102} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16f9f329-ad55-4195-9c79-541024b4f5fc"
                }}
                style={styles.ImageBackground_261_104}
              />
            </View>
          </View>
          <View style={styles.View_1_104}>
            <Text style={styles.Text_1_104}>
              For more hustle &amp; less hassle
            </Text>
          </View>
          <View style={styles.View_1_105}>
            <Text style={styles.Text_1_105}>
              Anything is achievable as long as we have the passion, focus, and
              support, and who could be the best example if not the creators?
              What we want from you is to let out your passion, drive, and focus
              to create what you love and leave the rest to us.
            </Text>
          </View>
        </View>
        <View style={styles.View_1_106}>
          <View style={styles.View_261_88}>
            <View style={styles.View_261_89}>
              <View style={styles.View_261_90} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cd72213-c7cb-429b-a29f-bb07780ec2f0"
                }}
                style={styles.ImageBackground_261_97}
              />
            </View>
            <View style={styles.View_261_92}>
              <View style={styles.View_261_93} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0929fb5-06e6-492b-8edf-d92c953da820"
                }}
                style={styles.ImageBackground_261_98}
              />
            </View>
          </View>
          <View style={styles.View_1_114}>
            <Text style={styles.Text_1_114}>For passionate creators</Text>
          </View>
          <View style={styles.View_1_115}>
            <Text style={styles.Text_1_115}>
              Anything is achievable as long as we have the passion, focus, and
              support, and who could be the best example if not the creators?
              What we want from you is to let out your passion, drive, and focus
              to create what you love and leave the rest to us.
            </Text>
          </View>
        </View>
        <View style={styles.View_1_116}>
          <View style={styles.View_1_117}>
            <View style={styles.View_1_118}>
              <View style={styles.View_1_119} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/873e5323-186c-460e-9d6e-4dd102273851"
                }}
                style={styles.ImageBackground_261_109}
              />
            </View>
            <View style={styles.View_1_121}>
              <View style={styles.View_1_122} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c442371c-7cf3-43c0-a98e-a26b4cf05e39"
                }}
                style={styles.ImageBackground_261_110}
              />
            </View>
          </View>
          <View style={styles.View_1_124}>
            <Text style={styles.Text_1_124}>
              For one wanting to be creator-prenuer faster
            </Text>
          </View>
          <View style={styles.View_1_125}>
            <Text style={styles.Text_1_125}>
              Anything is achievable as long as we have the passion, focus, and
              support, and who could be the best example if not the creators?
              What we want from you is to let out your passion, drive, and focus
              to create what you love and leave the rest to us.
            </Text>
          </View>
        </View>
        <View style={styles.View_1_126}>
          <Text style={styles.Text_1_126}>
            Talking about creators for whom are we building for:
          </Text>
        </View>
      </View>
      <View style={styles.View_1_127}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54089042-1a57-419a-b325-e56fe9dc4d66"
          }}
          style={styles.ImageBackground_1_128}
        />
        <View style={styles.View_1_129}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2faa6685-ef81-4dc1-b0e2-475bd5b8d1aa"
            }}
            style={styles.ImageBackground_1_130}
          />
          <View style={styles.View_1_131}>
            <Text style={styles.Text_1_131}>
              Prabhat is a seasoned leader, an avid growth-hacker, and loves
              solving complex problems through technology. He is a highly
              curious &amp; quite data-driven person. He co-founded
              TravelTriangle with his school friends &amp; scaled it up to make
              it the leading holiday marketplace in India. Before co-founding
              Nected, he was Head of Engineering &amp; Data Science at OkCredit.
              In his free time, he loved writing &amp; sharing his knowledge
              about startups &amp; entrepreneurship &amp; is also a part of the
              LinkedIn Creator Management Program.
            </Text>
          </View>
          <View style={styles.View_1_132}>
            <Text style={styles.Text_1_132}>Prabhat Gupta</Text>
          </View>
          <View style={styles.View_1_133}>
            <Text style={styles.Text_1_133}>Founder</Text>
          </View>
        </View>
        <View style={styles.View_1_134}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25da61a5-137f-4343-8ba9-ee3ab9dcecbe"
            }}
            style={styles.ImageBackground_1_135}
          />
          <View style={styles.View_1_136}>
            <Text style={styles.Text_1_136}>
              Mukul is a tech and product enthusiast. He co-founded FastFox,
              which he sold to Elara Group in 2019. Mukul has been a startup guy
              throughout (Knowlarity, UrbanTouch, Payu) right from the early
              days. Before starting up Nected, he was Group CTO at Docquity. He
              loves to read about technology and listen to music in his free
              time.
            </Text>
          </View>
          <View style={styles.View_1_137}>
            <Text style={styles.Text_1_137}>Mukul Bhati</Text>
          </View>
          <View style={styles.View_1_138}>
            <Text style={styles.Text_1_138}>Founder</Text>
          </View>
        </View>
        <View style={styles.View_1_139}>
          <Text style={styles.Text_1_139}>
            Built by seasoned entrepreneurs with a proven record of building
            category-defining startups:
          </Text>
        </View>
      </View>
      <View style={styles.View_1_140}>
        <Text style={styles.Text_1_140}>Product</Text>
      </View>
      <View style={styles.View_1_141}>
        <View style={styles.View_1_142}>
          <Text style={styles.Text_1_142}>Terms &amp; Conditions</Text>
        </View>
        <View style={styles.View_63_169}>
          <Text style={styles.Text_63_169}>
            © 2022 Nected pvt. ltd. All rights reserved
          </Text>
        </View>
        <View style={styles.View_1_143}>
          <Text style={styles.Text_1_143}>Privacy Policy</Text>
        </View>
      </View>
      <View style={styles.View_1_144}>
        <Text style={styles.Text_1_144}>Features</Text>
      </View>
      <View style={styles.View_1_145}>
        <Text style={styles.Text_1_145}>Team</Text>
      </View>
      <View style={styles.View_1_146}>
        <View style={styles.View_1_147} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad9690e5-c16d-4c05-b4a9-f971085c5539"
          }}
          style={styles.ImageBackground_1_148}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("818%") },
  View_1_9: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_1_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 45,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_10: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  View_1_11: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_1_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_12: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("72%")
  },
  View_1_13: {
    width: wp("15%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 124, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_14: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_15: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3%")
  },
  View_1_16: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("4%")
  },
  View_1_17: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 124, 255, 1)",
    borderColor: "rgba(45, 124, 255, 1)",
    borderWidth: 1
  },
  View_1_18: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_18: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_19: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%")
  },
  View_1_20: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("430%"),
    justifyContent: "flex-start"
  },
  Text_1_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_21: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("452%")
  },
  View_1_22: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_1_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_23: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("31%")
  },
  View_1_24: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_24: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_25: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_1_26: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_27: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_261_54: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_33: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("453%")
  },
  View_1_34: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_1_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_35: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("31%")
  },
  View_1_36: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_36: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_37: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_1_38: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_39: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_261_62: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_45: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("500%")
  },
  View_1_46: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_1_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_47: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("29%")
  },
  View_1_48: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_48: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_49: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_1_50: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_51: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_261_67: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_57: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("543%")
  },
  View_1_58: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_1_58: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_59: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("31%")
  },
  View_1_60: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_60: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_61: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_1_62: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_63: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_261_83: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_69: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("500%")
  },
  View_1_70: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_1_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_71: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("29%")
  },
  View_1_72: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_72: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_73: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_1_74: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_75: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_261_75: {
    width: wp("8%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_85: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("98%")
  },
  View_1_86: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 242, 255, 1)"
  },
  View_1_87: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_88: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 242, 255, 1)"
  },
  ImageBackground_1_89: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_90: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("112%"),
    minHeight: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11%"),
    top: hp("2%")
  },
  View_1_91: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_91_1_5: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_92: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_92_1_3: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_93: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_93_1_7: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_94: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_95: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("234%"),
    minHeight: hp("234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("171%")
  },
  View_1_96: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%")
  },
  View_1_97: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_98: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_1_99: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_261_103: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_101: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_102: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_261_104: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_104: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_1_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_105: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_1_105: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_106: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%")
  },
  View_261_88: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  View_261_89: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_261_90: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_261_97: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_261_92: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_261_93: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_261_98: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_114: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_1_114: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_115: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_1_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_116: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("175%")
  },
  View_1_117: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  View_1_118: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  View_1_119: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_261_109: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_121: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_122: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_261_110: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_124: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_125: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_1_125: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_126: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_127: {
    width: wp("126%"),
    minWidth: wp("126%"),
    height: hp("201%"),
    minHeight: hp("201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-36%"),
    top: hp("593%")
  },
  ImageBackground_1_128: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("201%"),
    minHeight: hp("201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_129: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("47%")
  },
  ImageBackground_1_130: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_131: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_1_131: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_132: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_1_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_133: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_1_133: {
    color: "rgba(178, 178, 178, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_134: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("121%")
  },
  ImageBackground_1_135: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_136: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_1_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_137: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_1_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_138: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_1_138: {
    color: "rgba(178, 178, 178, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_139: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_1_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_140: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_1_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_141: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("806%")
  },
  View_1_142: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_169: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_143: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_144: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_1_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_145: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_1_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_146: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("430%")
  },
  View_1_147: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_1_148: {
    width: wp("14%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
