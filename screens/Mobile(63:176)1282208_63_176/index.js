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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c739a478-c532-46f1-ac44-d2fc460bc208"
        }}
        style={styles.ImageBackground_63_177}
      />
      <View style={styles.View_63_178}>
        <Text style={styles.Text_63_178}>
          Nected, Empowering creators to become creator-prenuer, much faster!
        </Text>
      </View>
      <View style={styles.View_63_179}>
        <Text style={styles.Text_63_179}>
          Lightweight &amp; easy to set up AI-powered CRM acting as Digital
          Sales &amp; Marketing assistant for creators to help them run &amp;
          scale their business efficiently.
        </Text>
      </View>
      <View style={styles.View_63_180}>
        <View style={styles.View_63_181} />
        <View style={styles.View_63_182}>
          <View style={styles.View_63_183} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35268cae-d9ab-4c12-93fe-e91796a208d6"
            }}
            style={styles.ImageBackground_63_184}
          />
        </View>
        <View style={styles.View_63_186}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab497856-b084-4de7-a9ab-e2cf862f8627"
            }}
            style={styles.ImageBackground_I63_186_1_5}
          />
        </View>
        <View style={styles.View_63_187}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e573a4b9-5081-4012-ba94-7bf71b2ef226"
            }}
            style={styles.ImageBackground_I63_187_1_3}
          />
        </View>
        <View style={styles.View_63_189}>
          <Text style={styles.Text_63_189}>
            Nected is for global creators, turning into creator-preneurs,
            helping them Leverage the power of AI to Simplify their business
            endeavors, without much need for team &amp; capital.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_63_190}>
        <View style={styles.View_63_191} />
        <View style={styles.View_63_192}>
          <Text style={styles.Text_63_192}>Get Early Access</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab2d7c22-697a-4a45-94d5-f186cd2e172b"
          }}
          style={styles.ImageBackground_63_193}
        />
      </View>
      <View style={styles.View_63_194}>
        <View style={styles.View_63_195}>
          <Text style={styles.Text_63_195}>
            Talking about creators for whom are we building for:
          </Text>
        </View>
        <View style={styles.View_63_196}>
          <View style={styles.View_63_197}>
            <Text style={styles.Text_63_197}>For passionate creators</Text>
          </View>
          <View style={styles.View_63_198}>
            <Text style={styles.Text_63_198}>
              Anything is achievable as long as we have the passion, focus, and
              support, and who could be the best example if not the creators?
              What we want from you is to let out your passion, drive, and focus
              to create what you love and leave the rest to us.
            </Text>
          </View>
          <View style={styles.View_63_199}>
            <View style={styles.View_63_200}>
              <View style={styles.View_63_201} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18b3bec5-1380-481b-8361-96406a10a6a8"
                }}
                style={styles.ImageBackground_63_202}
              />
            </View>
            <View style={styles.View_63_203}>
              <View style={styles.View_63_204} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c6774a0-de46-4901-86cf-8f63592fb382"
                }}
                style={styles.ImageBackground_63_205}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_63_206}>
          <View style={styles.View_63_207}>
            <Text style={styles.Text_63_207}>
              For more hustle &amp; less hassle
            </Text>
          </View>
          <View style={styles.View_63_208}>
            <Text style={styles.Text_63_208}>
              Anything is achievable as long as we have the passion, focus, and
              support, and who could be the best example if not the creators?
              What we want from you is to let out your passion, drive, and focus
              to create what you love and leave the rest to us.
            </Text>
          </View>
          <View style={styles.View_63_209}>
            <View style={styles.View_63_210}>
              <View style={styles.View_63_211} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/046a31f4-c412-4d5c-84c5-412b60e4552f"
                }}
                style={styles.ImageBackground_63_212}
              />
            </View>
            <View style={styles.View_63_213}>
              <View style={styles.View_63_214} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/407dfb93-ccf9-49d1-8e41-bea635e61977"
                }}
                style={styles.ImageBackground_63_215}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_63_216}>
          <View style={styles.View_63_217}>
            <Text style={styles.Text_63_217}>For passionate creators</Text>
          </View>
          <View style={styles.View_63_218}>
            <Text style={styles.Text_63_218}>
              Anything is achievable as long as we have the passion, focus, and
              support, and who could be the best example if not the creators?
              What we want from you is to let out your passion, drive, and focus
              to create what you love and leave the rest to us.
            </Text>
          </View>
          <View style={styles.View_63_219}>
            <View style={styles.View_63_220}>
              <View style={styles.View_63_221} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1115096-6ac1-4e23-a421-161de2a412e9"
                }}
                style={styles.ImageBackground_63_222}
              />
            </View>
            <View style={styles.View_63_223}>
              <View style={styles.View_63_224} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e1dc4e8-2e20-47ae-81ee-08f90121255c"
                }}
                style={styles.ImageBackground_63_225}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_63_226}>
        <View style={styles.View_63_227}>
          <Text style={styles.Text_63_227}>
            Our AI-led virtual sales assistant would help you:
          </Text>
        </View>
        <View style={styles.View_63_228}>
          <View style={styles.View_63_229}>
            <Text style={styles.Text_63_229}>
              Never lose any leads in your DMs or comments with our simplified
              AI-powered chatbot that segregates your queries. Get one link in
              bio for all discovery and conver...
            </Text>
          </View>
          <View style={styles.View_63_230}>
            <View style={styles.View_63_231}>
              <Text style={styles.Text_63_231}>read more</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c13a1209-56bc-459c-8474-4d0a88533bd2"
              }}
              style={styles.ImageBackground_63_232}
            />
          </View>
          <View style={styles.View_63_233}>
            <Text style={styles.Text_63_233}>Drive More Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c1f5972-ad06-416b-9e7c-7eb010503972"
            }}
            style={styles.ImageBackground_63_234}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69584548-b2a4-4c22-81a3-7b933b3ed3ae"
            }}
            style={styles.ImageBackground_63_235}
          />
        </View>
        <View style={styles.View_63_240}>
          <View style={styles.View_63_241}>
            <Text style={styles.Text_63_241}>
              Never lose any leads in your DMs or comments with our simplified
              AI-powered chatbot that segregates your queries. Get one link in
              bio for all discovery and conver...
            </Text>
          </View>
          <View style={styles.View_63_242}>
            <View style={styles.View_63_243}>
              <Text style={styles.Text_63_243}>read more</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21bd2356-46e4-4cd5-997f-7c407d565e7c"
              }}
              style={styles.ImageBackground_63_244}
            />
          </View>
          <View style={styles.View_63_245}>
            <Text style={styles.Text_63_245}>Drive More Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/591d3bcc-2923-492a-a46d-13a11b9fd37d"
            }}
            style={styles.ImageBackground_63_246}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee795dc2-ff87-42d4-8b55-9ec670b0a236"
            }}
            style={styles.ImageBackground_63_247}
          />
        </View>
        <View style={styles.View_63_252}>
          <View style={styles.View_63_253}>
            <Text style={styles.Text_63_253}>
              Never lose any leads in your DMs or comments with our simplified
              AI-powered chatbot that segregates your queries. Get one link in
              bio for all discovery and conver...
            </Text>
          </View>
          <View style={styles.View_63_254}>
            <View style={styles.View_63_255}>
              <Text style={styles.Text_63_255}>read more</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f90393a0-9db3-4c57-b18e-8507758a8580"
              }}
              style={styles.ImageBackground_63_256}
            />
          </View>
          <View style={styles.View_63_257}>
            <Text style={styles.Text_63_257}>Drive More Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c224156a-a619-41ab-881a-7dda171f4646"
            }}
            style={styles.ImageBackground_63_258}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2475d265-0536-4e7d-8cc1-25d903195af6"
            }}
            style={styles.ImageBackground_63_259}
          />
        </View>
        <View style={styles.View_63_264}>
          <View style={styles.View_63_265}>
            <Text style={styles.Text_63_265}>
              Never lose any leads in your DMs or comments with our simplified
              AI-powered chatbot that segregates your queries. Get one link in
              bio for all discovery and conver...
            </Text>
          </View>
          <View style={styles.View_63_266}>
            <View style={styles.View_63_267}>
              <Text style={styles.Text_63_267}>read more</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79e3767f-831f-47e1-9034-f4b4533bb9c7"
              }}
              style={styles.ImageBackground_63_268}
            />
          </View>
          <View style={styles.View_63_269}>
            <Text style={styles.Text_63_269}>Drive More Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9ca7343-7fd6-43f3-917d-804dc6f45b18"
            }}
            style={styles.ImageBackground_63_270}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99ffdd39-c7cd-4b0f-b4c5-cc4bdd41b053"
            }}
            style={styles.ImageBackground_63_271}
          />
        </View>
        <View style={styles.View_63_276}>
          <View style={styles.View_63_277}>
            <Text style={styles.Text_63_277}>
              Never lose any leads in your DMs or comments with our simplified
              AI-powered chatbot that segregates your queries. Get one link in
              bio for all discovery and conver...
            </Text>
          </View>
          <View style={styles.View_63_278}>
            <View style={styles.View_63_279}>
              <Text style={styles.Text_63_279}>read more</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a347976e-73ff-49cf-a20f-ed00f7651bd6"
              }}
              style={styles.ImageBackground_63_280}
            />
          </View>
          <View style={styles.View_63_281}>
            <Text style={styles.Text_63_281}>Drive More Sales</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5dd5fb5-6a7c-4632-950e-e4f1a2a85036"
            }}
            style={styles.ImageBackground_63_282}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/889f39f5-9ba7-4e1c-a27e-9299a746ad75"
            }}
            style={styles.ImageBackground_63_283}
          />
        </View>
        <View style={styles.View_63_288}>
          <View style={styles.View_63_289} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/898a728f-3992-4fe5-9d06-34f2c0bee218"
            }}
            style={styles.ImageBackground_63_290}
          />
        </View>
      </View>
      <View style={styles.View_63_293}>
        <Text style={styles.Text_63_293}>
          Built by seasoned entrepreneurs with a proven record of building
          category-defining startups:
        </Text>
      </View>
      <View style={styles.View_63_294}>
        <View style={styles.View_63_295}>
          <Text style={styles.Text_63_295}>
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
        <View style={styles.View_63_296}>
          <View style={styles.View_63_297}>
            <Text style={styles.Text_63_297}>Prabhat Gupta</Text>
          </View>
          <View style={styles.View_63_298}>
            <Text style={styles.Text_63_298}>Founder</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe6e7131-f28f-4220-a5fe-f6099cef189b"
          }}
          style={styles.ImageBackground_63_299}
        />
      </View>
      <View style={styles.View_63_300}>
        <View style={styles.View_63_301}>
          <Text style={styles.Text_63_301}>
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
        <View style={styles.View_63_302}>
          <View style={styles.View_63_303}>
            <Text style={styles.Text_63_303}>Prabhat Gupta</Text>
          </View>
          <View style={styles.View_63_304}>
            <Text style={styles.Text_63_304}>Founder</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0454b22-7154-4bd5-a706-07017694bd05"
          }}
          style={styles.ImageBackground_63_305}
        />
      </View>
      <View style={styles.View_63_306}>
        <View style={styles.View_63_307}>
          <Text style={styles.Text_63_307}>Terms &amp; Conditions</Text>
        </View>
        <View style={styles.View_63_308}>
          <Text style={styles.Text_63_308}>Privacy Policy</Text>
        </View>
        <View style={styles.View_63_309}>
          <Text style={styles.Text_63_309}>
            © 2022 Nected pvt. ltd. All rights reserved
          </Text>
        </View>
      </View>
      <View style={styles.View_63_310}>
        <View style={styles.View_63_311} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75efe0c7-b7f7-4417-9b83-5c69c38c43ac"
          }}
          style={styles.ImageBackground_63_317}
        />
      </View>
      <View style={styles.View_63_322}>
        <View style={styles.View_63_318} />
        <View style={styles.View_63_319}>
          <Text style={styles.Text_63_319}>Product</Text>
        </View>
        <View style={styles.View_63_320}>
          <Text style={styles.Text_63_320}>Features</Text>
        </View>
        <View style={styles.View_63_321}>
          <Text style={styles.Text_63_321}>Team</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_63_177: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_63_178: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_63_178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_179: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_63_179: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_180: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("84%")
  },
  View_63_181: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 242, 255, 1)"
  },
  View_63_182: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_183: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 242, 255, 1)"
  },
  ImageBackground_63_184: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_186: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I63_186_1_5: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_187: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I63_187_1_3: {
    flexGrow: 1,
    width: wp("29%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_189: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_63_189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_190: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("63%")
  },
  View_63_191: {
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
  View_63_192: {
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_63_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_193: {
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
  View_63_194: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("288%"),
    minHeight: hp("288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("164%")
  },
  View_63_195: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_195: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_196: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%")
  },
  View_63_197: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_63_197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_198: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_63_198: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_199: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_200: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_63_201: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_202: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_203: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_204: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_205: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_206: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("120%")
  },
  View_63_207: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_63_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_208: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_63_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_209: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_210: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_63_211: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_212: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_213: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_214: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_215: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_216: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("208%")
  },
  View_63_217: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_63_217: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_218: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_63_218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_219: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_220: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_63_221: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_222: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_223: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_63_224: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_63_225: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_226: {
    width: wp("135%"),
    minWidth: wp("135%"),
    height: hp("288%"),
    minHeight: hp("288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("465%")
  },
  View_63_227: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_63_227: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_228: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%")
  },
  View_63_229: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_63_229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_230: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("41%")
  },
  View_63_231: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_231: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_232: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%")
  },
  View_63_233: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_63_233: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_234: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_63_235: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_63_240: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77%")
  },
  View_63_241: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_63_241: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_242: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("41%")
  },
  View_63_243: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_243: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_244: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%")
  },
  View_63_245: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_63_245: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_246: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_63_247: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_63_252: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("132%")
  },
  View_63_253: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_63_253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_254: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("41%")
  },
  View_63_255: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_255: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_256: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%")
  },
  View_63_257: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_63_257: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_258: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_63_259: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_63_264: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("187%")
  },
  View_63_265: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_63_265: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_266: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("41%")
  },
  View_63_267: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_267: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_268: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%")
  },
  View_63_269: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_63_269: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_270: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_63_271: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_63_276: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("241%")
  },
  View_63_277: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_63_277: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_278: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("41%")
  },
  View_63_279: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_279: {
    color: "rgba(45, 124, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_280: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%")
  },
  View_63_281: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_63_281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_282: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_63_283: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_63_288: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%")
  },
  View_63_289: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_63_290: {
    width: wp("57%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_63_293: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("768%"),
    justifyContent: "flex-start"
  },
  Text_63_293: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_294: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("159%"),
    minHeight: hp("159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("813%")
  },
  View_63_295: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_63_295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_296: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("149%")
  },
  View_63_297: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_297: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_298: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_63_298: {
    color: "rgba(178, 178, 178, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_299: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_300: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("159%"),
    minHeight: hp("159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("983%")
  },
  View_63_301: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_63_301: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_302: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("149%")
  },
  View_63_303: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_303: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_304: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_63_304: {
    color: "rgba(178, 178, 178, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_63_305: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_63_306: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1153%")
  },
  View_63_307: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_308: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_63_308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_309: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_63_309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_310: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  View_63_311: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_63_317: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_63_322: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("7%")
  },
  View_63_318: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_63_319: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_63_319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_320: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_63_320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_63_321: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_63_321: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
