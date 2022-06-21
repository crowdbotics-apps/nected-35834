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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bd22f90-b511-4f0a-9bc4-8aaf4bd0ddb5"
        }}
        style={styles.ImageBackground_63_9}
      />
      <View style={styles.View_63_10}>
        <Text style={styles.Text_63_10}>
          Nected, Empowering creators to become creator-prenuer, much faster!
        </Text>
      </View>
      <View style={styles.View_63_11}>
        <Text style={styles.Text_63_11}>
          Lightweight &amp; easy to set up AI-powered CRM acting as Digital
          Sales &amp; Marketing assistant for creators to help them run &amp;
          scale their business efficiently.
        </Text>
      </View>
      <View style={styles.View_63_16}>
        <View style={styles.View_63_17} />
        <View style={styles.View_63_18}>
          <View style={styles.View_63_19} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf62c8af-f4c5-48ef-a3ac-4963bdaf8a73"
            }}
            style={styles.ImageBackground_63_29}
          />
        </View>
        <View style={styles.View_63_22}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1427efb5-74bc-4846-a42d-eb2c585eb147"
            }}
            style={styles.ImageBackground_I63_22_1_5}
          />
        </View>
        <View style={styles.View_63_23}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb41bf93-4f73-4f4b-b903-e81cbb778692"
            }}
            style={styles.ImageBackground_I63_23_1_3}
          />
        </View>
        <View style={styles.View_63_25}>
          <Text style={styles.Text_63_25}>
            Nected is for global creators, turning into creator-preneurs,
            helping them Leverage the power of AI to Simplify their business
            endeavors, without much need for team &amp; capital.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_63_12}>
        <View style={styles.View_63_13} />
        <View style={styles.View_63_14}>
          <Text style={styles.Text_63_14}>Get Early Access</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7292f5fe-d3e1-471b-9fdf-ea966c75a8da"
          }}
          style={styles.ImageBackground_63_15}
        />
      </View>
      <View style={styles.View_63_83}>
        <View style={styles.View_63_32}>
          <Text style={styles.Text_63_32}>
            Talking about creators for whom are we building for:
          </Text>
        </View>
        <View style={styles.View_63_42}>
          <View style={styles.View_63_33}>
            <Text style={styles.Text_63_33}>For passionate creators</Text>
          </View>
          <View style={styles.View_63_34}>
            <Text style={styles.Text_63_34}>
              Anything is achievable as long as we have the passion, focus, and
              support, and who could be the best example if not the creators?
              What we want from you is to let out your passion, drive, and focus
              to create what you love and leave the rest to us.
            </Text>
          </View>
          <View style={styles.View_63_35}>
            <View style={styles.View_63_36}>
              <View style={styles.View_63_37} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba0d7ec1-1ef7-4368-be7c-e319f74e1a40"
                }}
                style={styles.ImageBackground_63_38}
              />
            </View>
            <View style={styles.View_63_39}>
              <View style={styles.View_63_40} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f1fa6f1-1b27-4825-941a-cae4e569045a"
                }}
                style={styles.ImageBackground_63_41}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_63_63}>
          <View style={styles.View_63_64}>
            <Text style={styles.Text_63_64}>
              For more hustle &amp; less hassle
            </Text>
          </View>
          <View style={styles.View_63_65}>
            <Text style={styles.Text_63_65}>
              Anything is achievable as long as we have the passion, focus, and
              support, and who could be the best example if not the creators?
              What we want from you is to let out your passion, drive, and focus
              to create what you love and leave the rest to us.
            </Text>
          </View>
          <View style={styles.View_63_66}>
            <View style={styles.View_63_67}>
              <View style={styles.View_63_68} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f0a8659-8276-4402-8bba-ba04257ef10a"
                }}
                style={styles.ImageBackground_63_69}
              />
            </View>
            <View style={styles.View_63_70}>
              <View style={styles.View_63_71} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb30453f-40c7-42c2-8f84-28c43ab7838b"
                }}
                style={styles.ImageBackground_63_72}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_63_73}>
          <View style={styles.View_63_74}>
            <Text style={styles.Text_63_74}>For passionate creators</Text>
          </View>
          <View style={styles.View_63_75}>
            <Text style={styles.Text_63_75}>
              Anything is achievable as long as we have the passion, focus, and
              support, and who could be the best example if not the creators?
              What we want from you is to let out your passion, drive, and focus
              to create what you love and leave the rest to us.
            </Text>
          </View>
          <View style={styles.View_63_76}>
            <View style={styles.View_63_77}>
              <View style={styles.View_63_78} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93031ffb-da5d-4296-a377-9d3a641dfb04"
                }}
                style={styles.ImageBackground_63_79}
              />
            </View>
            <View style={styles.View_63_80}>
              <View style={styles.View_63_81} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/250f3bac-4e0e-42dd-b046-c3dd310814a7"
                }}
                style={styles.ImageBackground_63_82}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_63_151}>
        <View style={styles.View_63_84}>
          <Text style={styles.Text_63_84}>
            Our AI-led virtual sales assistant would help you:
          </Text>
        </View>
        <View style={styles.View_63_90}>
          <View style={styles.View_63_91}>
            <Text style={styles.Text_63_91}>
              Never lose any leads in your DMs or comments with our simplified
              AI-powered chatbot that segregates your queries. Get one link in
              bio for all discovery and conver...
            </Text>
          </View>
          <View style={styles.View_63_92}>
            <View style={styles.View_63_93}>
              <Text style={styles.Text_63_93}>read more</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ceea995-6941-4b66-9d41-35e6138bcb70"
              }}
              style={styles.ImageBackground_63_94}
            />
          </View>
          <View style={styles.View_63_95}>
            <Text style={styles.Text_63_95}>Drive More Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afb223e2-5ba4-4905-baa5-48277f075c82"
            }}
            style={styles.ImageBackground_63_96}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a5db8e7-fe34-4142-a46f-1a06e9b99b68"
            }}
            style={styles.ImageBackground_63_97}
          />
        </View>
        <View style={styles.View_63_102}>
          <View style={styles.View_63_103}>
            <Text style={styles.Text_63_103}>
              Never lose any leads in your DMs or comments with our simplified
              AI-powered chatbot that segregates your queries. Get one link in
              bio for all discovery and conver...
            </Text>
          </View>
          <View style={styles.View_63_104}>
            <View style={styles.View_63_105}>
              <Text style={styles.Text_63_105}>read more</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e309a6c-d2e4-40e6-b602-ac7e365103a2"
              }}
              style={styles.ImageBackground_63_106}
            />
          </View>
          <View style={styles.View_63_107}>
            <Text style={styles.Text_63_107}>Drive More Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b81f5888-b3f9-440e-96ac-ad2390b23890"
            }}
            style={styles.ImageBackground_63_108}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b23a1424-496a-49b0-96b3-7c7b26c009ec"
            }}
            style={styles.ImageBackground_63_109}
          />
        </View>
        <View style={styles.View_63_114}>
          <View style={styles.View_63_115}>
            <Text style={styles.Text_63_115}>
              Never lose any leads in your DMs or comments with our simplified
              AI-powered chatbot that segregates your queries. Get one link in
              bio for all discovery and conver...
            </Text>
          </View>
          <View style={styles.View_63_116}>
            <View style={styles.View_63_117}>
              <Text style={styles.Text_63_117}>read more</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c75d032-7065-413b-accc-6d4c4a45ba70"
              }}
              style={styles.ImageBackground_63_118}
            />
          </View>
          <View style={styles.View_63_119}>
            <Text style={styles.Text_63_119}>Drive More Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f4372f9-595f-41c0-b89d-185115cd5319"
            }}
            style={styles.ImageBackground_63_120}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/304ee198-22a3-42e2-9ab9-214dd74b2f12"
            }}
            style={styles.ImageBackground_63_121}
          />
        </View>
        <View style={styles.View_63_126}>
          <View style={styles.View_63_127}>
            <Text style={styles.Text_63_127}>
              Never lose any leads in your DMs or comments with our simplified
              AI-powered chatbot that segregates your queries. Get one link in
              bio for all discovery and conver...
            </Text>
          </View>
          <View style={styles.View_63_128}>
            <View style={styles.View_63_129}>
              <Text style={styles.Text_63_129}>read more</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db5a5032-f2e1-473c-b4a6-8fa718fcec21"
              }}
              style={styles.ImageBackground_63_130}
            />
          </View>
          <View style={styles.View_63_131}>
            <Text style={styles.Text_63_131}>Drive More Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9665baa-1c32-4775-bf6b-2a1b35a2c78c"
            }}
            style={styles.ImageBackground_63_132}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/881c893f-9da5-41b1-ba38-44d9037cc870"
            }}
            style={styles.ImageBackground_63_133}
          />
        </View>
        <View style={styles.View_63_138}>
          <View style={styles.View_63_139}>
            <Text style={styles.Text_63_139}>
              Never lose any leads in your DMs or comments with our simplified
              AI-powered chatbot that segregates your queries. Get one link in
              bio for all discovery and conver...
            </Text>
          </View>
          <View style={styles.View_63_140}>
            <View style={styles.View_63_141}>
              <Text style={styles.Text_63_141}>read more</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/489fc377-2356-4166-ae96-a08f19cf388e"
              }}
              style={styles.ImageBackground_63_142}
            />
          </View>
          <View style={styles.View_63_143}>
            <Text style={styles.Text_63_143}>Drive More Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48dec101-e91f-4b40-b0df-deea1e2fc3a3"
            }}
            style={styles.ImageBackground_63_144}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46dcaefc-e513-4658-a359-843f24c54a12"
            }}
            style={styles.ImageBackground_63_145}
          />
        </View>
        <View style={styles.View_63_85}>
          <View style={styles.View_63_86} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07365fb1-560d-485d-bde9-b298d7981a09"
            }}
            style={styles.ImageBackground_63_87}
          />
        </View>
      </View>
      <View style={styles.View_63_152}>
        <Text style={styles.Text_63_152}>
          Built by seasoned entrepreneurs with a proven record of building
          category-defining startups:
        </Text>
      </View>
      <View style={styles.View_63_159}>
        <View style={styles.View_63_154}>
          <Text style={styles.Text_63_154}>
            Prabhat is a seasoned leader, an avid growth-hacker, and loves
            solving complex problems through technology. He is a highly curious
            &amp; quite data-driven person. He co-founded TravelTriangle with
            his school friends &amp; scaled it up to make it the leading holiday
            marketplace in India. Before co-founding Nected, he was Head of
            Engineering &amp; Data Science at OkCredit. In his free time, he
            loved writing &amp; sharing his knowledge about startups &amp;
            entrepreneurship &amp; is also a part of the LinkedIn Creator
            Management Program.
          </Text>
        </View>
        <View style={styles.View_63_158}>
          <View style={styles.View_63_155}>
            <Text style={styles.Text_63_155}>Prabhat Gupta</Text>
          </View>
          <View style={styles.View_63_156}>
            <Text style={styles.Text_63_156}>Founder</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/013cce96-b31c-4868-b4db-afa6d9c850fc"
          }}
          style={styles.ImageBackground_63_157}
        />
      </View>
      <View style={styles.View_63_160}>
        <View style={styles.View_63_161}>
          <Text style={styles.Text_63_161}>
            Prabhat is a seasoned leader, an avid growth-hacker, and loves
            solving complex problems through technology. He is a highly curious
            &amp; quite data-driven person. He co-founded TravelTriangle with
            his school friends &amp; scaled it up to make it the leading holiday
            marketplace in India. Before co-founding Nected, he was Head of
            Engineering &amp; Data Science at OkCredit. In his free time, he
            loved writing &amp; sharing his knowledge about startups &amp;
            entrepreneurship &amp; is also a part of the LinkedIn Creator
            Management Program.
          </Text>
        </View>
        <View style={styles.View_63_162}>
          <View style={styles.View_63_163}>
            <Text style={styles.Text_63_163}>Prabhat Gupta</Text>
          </View>
          <View style={styles.View_63_164}>
            <Text style={styles.Text_63_164}>Founder</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef346eba-7096-44f2-b57c-d5f9c3e3e4a0"
          }}
          style={styles.ImageBackground_63_165}
        />
      </View>
      <View style={styles.View_63_166}>
        <View style={styles.View_63_167}>
          <Text style={styles.Text_63_167}>Terms &amp; Conditions</Text>
        </View>
        <View style={styles.View_63_168}>
          <Text style={styles.Text_63_168}>Privacy Policy</Text>
        </View>
        <View style={styles.View_63_170}>
          <Text style={styles.Text_63_170}>
            © 2022 Nected pvt. ltd. All rights reserved
          </Text>
        </View>
      </View>
      <View style={styles.View_63_175}>
        <View style={styles.View_63_171} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ea52034-07dc-46f7-97a0-31910e61f424"
          }}
          style={styles.ImageBackground_63_172}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98d5aae3-079d-4834-a7b9-2a4dd1b10e57"
          }}
          style={styles.ImageBackground_63_173}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7e7df81-249c-43e9-bb9d-0f16c5c307b7"
          }}
          style={styles.ImageBackground_63_174}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("1028%") },
  ImageBackground_63_9: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_63_10: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_63_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_11: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_63_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_16: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("73%")
  },
  View_63_17: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 242, 255, 1)"
  },
  View_63_18: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_19: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 242, 255, 1)"
  },
  ImageBackground_63_29: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_22: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I63_22_1_5: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_23: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I63_23_1_3: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_25: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_63_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_12: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("55%")
  },
  View_63_13: {
    width: wp("60%"),
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
  View_63_14: {
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_63_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_15: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("3%")
  },
  View_63_83: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("252%"),
    minHeight: hp("252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("143%")
  },
  View_63_32: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_42: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  View_63_33: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_63_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_34: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_63_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_35: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_36: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_63_37: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_38: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_39: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_40: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_41: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_63: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("105%")
  },
  View_63_64: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_63_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_65: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_63_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_66: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_67: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_63_68: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_69: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_70: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_71: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_72: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_73: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("183%")
  },
  View_63_74: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_63_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_75: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_63_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_76: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_77: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_63_78: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_79: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_80: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_81: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_82: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_151: {
    width: wp("135%"),
    minWidth: wp("135%"),
    height: hp("252%"),
    minHeight: hp("252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("407%")
  },
  View_63_84: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_63_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_90: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  View_63_91: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_63_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_92: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("36%")
  },
  View_63_93: {
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
  Text_63_93: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_94: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%")
  },
  View_63_95: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_63_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_96: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_63_97: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_63_102: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67%")
  },
  View_63_103: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_63_103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_104: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("36%")
  },
  View_63_105: {
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
  Text_63_105: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_106: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%")
  },
  View_63_107: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_63_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_108: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_63_109: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_63_114: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115%")
  },
  View_63_115: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_63_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_116: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("36%")
  },
  View_63_117: {
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
  Text_63_117: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_118: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%")
  },
  View_63_119: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_63_119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_120: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_63_121: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_63_126: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("163%")
  },
  View_63_127: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_63_127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_128: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("36%")
  },
  View_63_129: {
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
  Text_63_129: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_130: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%")
  },
  View_63_131: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_63_131: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_132: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_63_133: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_63_138: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("211%")
  },
  View_63_139: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_63_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_140: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("36%")
  },
  View_63_141: {
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
  Text_63_141: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%")
  },
  View_63_143: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_63_143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_144: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_63_145: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_63_85: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%")
  },
  View_63_86: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_63_87: {
    width: wp("57%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_63_152: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("673%"),
    justifyContent: "flex-start"
  },
  Text_63_152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_159: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("139%"),
    minHeight: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("712%")
  },
  View_63_154: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_63_154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_158: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("131%")
  },
  View_63_155: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_156: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_63_156: {
    color: "rgba(178, 178, 178, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_157: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_160: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("139%"),
    minHeight: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("861%")
  },
  View_63_161: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_63_161: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_162: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("131%")
  },
  View_63_163: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_164: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_63_164: {
    color: "rgba(178, 178, 178, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_165: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_166: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1010%")
  },
  View_63_167: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_168: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_168: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_170: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_63_170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_175: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_63_171: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_63_172: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_63_173: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_63_174: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
