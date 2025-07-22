import * as v2 from "react";
import _r, { useState as q, useEffect as ve, createContext as pn, useContext as gn, useMemo as Z, useCallback as He, useRef as Ve, cloneElement as or, Fragment as Xr, useId as tc, createElement as O1, forwardRef as ct, useImperativeHandle as S2, Children as mn, isValidElement as Kr, memo as G1 } from "react";
import { createPortal as hn } from "react-dom";
const Or = "active", z = "dark", s0 = "disabled", S0 = "$", Jr = S0.concat("color-background"), rc = Jr.concat("-utility-dark"), Q1 = Jr.concat("-utility-light"), k2 = S0.concat("color-border"), vn = k2.concat("-blue-500"), oc = k2.concat("-disabled"), nc = k2.concat("-gray-100"), ac = k2.concat("-gray-200"), sc = k2.concat("-gray-500"), yn = k2.concat("-gray-700"), Cn = S0.concat("color-input"), z1 = Cn.concat("-active"), ic = Cn.concat("-disabled"), j2 = S0.concat("color-layer"), Z1 = j2.concat("-01"), lc = j2.concat("-01-hover"), cc = j2.concat("-01-inverted"), uc = j2.concat("-02"), dc = j2.concat("-03"), fc = j2.concat("-disabled"), vt = S0.concat("color-support"), pc = vt.concat("-advice-primary"), gc = vt.concat("-advice-secondary"), U1 = vt.concat("-error-primary"), mc = vt.concat("-error-secondary"), hc = vt.concat("-info-primary"), vc = vt.concat("-info-secondary"), yc = vt.concat("-success-primary"), Cc = vt.concat("-success-secondary"), xc = vt.concat("-warning-primary"), bc = vt.concat("-warning-secondary"), xn = S0.concat("bg"), nr = xn.concat("-text"), wc = xn.concat("-black"), Ac = nr.concat("-black"), Sc = nr.concat("-disabled"), kc = nr.concat("-primary"), jc = nr.concat("-secondary"), Bc = nr.concat("-white"), Ec = xn.concat("-white"), bn = S0.concat("color"), B2 = bn.concat("-text"), Dc = bn.concat("-black"), Mc = B2.concat("-black"), qr = B2.concat("-disabled"), it = B2.concat("-primary"), O0 = B2.concat("-secondary"), h2 = B2.concat("-white"), Hc = B2.concat("-error"), Rc = bn.concat("-white"), ar = S0.concat("color-feedback"), Y1 = ar.concat("-success"), $1 = ar.concat("-error"), W1 = ar.concat("-info"), Lc = ar.concat("-warning"), X1 = ar.concat("-advice"), Ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  active: Or,
  bgBlack: wc,
  bgTextBlack: Ac,
  bgTextDisabled: Sc,
  bgTextPrimary: kc,
  bgTextSecondary: jc,
  bgTextWhite: Bc,
  bgWhite: Ec,
  colorBackground: Jr,
  colorBackgroundUtilityDark: rc,
  colorBackgroundUtilityLight: Q1,
  colorBlack: Dc,
  colorBorderBlue500: vn,
  colorBorderDisabled: oc,
  colorBorderGray100: nc,
  colorBorderGray200: ac,
  colorBorderGray500: sc,
  colorBorderGray700: yn,
  colorInput: Cn,
  colorInputActive: z1,
  colorInputDisabled: ic,
  colorLayer1: Z1,
  colorLayer1Hover: lc,
  colorLayer1Inverted: cc,
  colorLayer2: uc,
  colorLayer3: dc,
  colorLayerDisabled: fc,
  colorSupportAdvicePrimary: pc,
  colorSupportAdviceSecondary: gc,
  colorSupportErrorPrimary: U1,
  colorSupportErrorSecondary: mc,
  colorSupportInfoPrimary: hc,
  colorSupportInfoSecondary: vc,
  colorSupportSuccessPrimary: yc,
  colorSupportSuccessSecondary: Cc,
  colorSupportWarningPrimary: xc,
  colorSupportWarningSecondary: bc,
  colorTextBlack: Mc,
  colorTextDisabled: qr,
  colorTextError: Hc,
  colorTextPrimary: it,
  colorTextSecondary: O0,
  colorTextWhite: h2,
  colorWhite: Rc,
  dark: z,
  disabled: s0,
  feedbackColorAdvice: X1,
  feedbackColorError: $1,
  feedbackColorInfo: W1,
  feedbackColorSuccess: Y1,
  feedbackColorWarning: Lc,
  prefix: S0
}, Symbol.toStringTag, { value: "Module" })), P0 = S0.concat("effect"), Nc = P0.concat("-border-1"), Pc = P0.concat("-border-2"), Vc = P0.concat("-border-3"), Tc = P0.concat("-border-4"), Fc = P0.concat("-border-5"), _c = P0.concat("-border-6"), Oc = P0.concat("-border-7"), Gc = P0.concat("-border-8"), Qc = P0.concat("-border-9"), K1 = P0.concat("-corner-1"), tr = P0.concat("-corner-2"), J1 = P0.concat("-corner-3"), zc = P0.concat("-shadow-1"), Zc = P0.concat("-shadow-2"), Uc = P0.concat("-shadow-3"), Yc = P0.concat("-shadow-4"), $c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Border1: Nc,
  Border2: Pc,
  Border3: Vc,
  Border4: Tc,
  Border5: Fc,
  Border6: _c,
  Border7: Oc,
  Border8: Gc,
  Border9: Qc,
  Corner1: K1,
  Corner2: tr,
  Corner3: J1,
  Shadow1: zc,
  Shadow2: Zc,
  Shadow3: Uc,
  Shadow4: Yc,
  base: P0
}, Symbol.toStringTag, { value: "Module" })), d0 = S0.concat("font"), q1 = d0.concat("-heading-h1-bold"), es = d0.concat("-heading-h2-bold"), ts = d0.concat("-heading-h3-bold"), eo = d0.concat("-heading-h4-bold"), to = d0.concat("-heading-h5-bold"), E2 = d0.concat("-heading-h6-bold"), rs = d0.concat("-heading-h4-medium"), os = d0.concat("-heading-h5-medium"), ns = d0.concat("-heading-h6-medium"), Y0 = d0.concat("-body-regular"), ro = d0.concat("-body-medium"), sr = d0.concat("-body-bold"), as = d0.concat("-body-caps"), n0 = d0.concat("-small-regular"), oo = d0.concat("-small-medium"), N0 = d0.concat("-small-bold"), ss = d0.concat("-small-caps"), Qe = d0.concat("-xsmall-regular"), is = d0.concat("-xsmall-medium"), no = d0.concat("-xsmall-bold"), wn = d0.concat("-xsmall-caps"), lt = d0.concat("-xxsmall-regular"), ls = d0.concat("-xxsmall-medium"), ao = d0.concat("-xxsmall-bold"), cs = d0.concat("-xxsmall-caps"), Wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BodyBold: sr,
  BodyCaps: as,
  BodyMedium: ro,
  BodyRegular: Y0,
  Heading1: q1,
  Heading2: es,
  Heading3: ts,
  Heading4: eo,
  Heading5: to,
  Heading6: E2,
  HeadingMedium4: rs,
  HeadingMedium5: os,
  HeadingMedium6: ns,
  SmallBold: N0,
  SmallCaps: ss,
  SmallMedium: oo,
  SmallRegular: n0,
  XSmallBold: no,
  XSmallCaps: wn,
  XSmallMedium: is,
  XSmallRegular: Qe,
  XXSmallBold: ao,
  XXSmallCaps: cs,
  XXSmallMedium: ls,
  XXSmallRegular: lt,
  base: d0
}, Symbol.toStringTag, { value: "Module" })), An = S0.concat("misc"), Xc = An.concat("-pl11a"), Kc = An.concat("-px11a"), Jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base: An,
  miscPaddingLeft11a: Xc,
  miscPaddingX11a: Kc
}, Symbol.toStringTag, { value: "Module" })), I = S0.concat("spacing"), Sn = I.concat("-m00"), us = I.concat("-m01"), qc = I.concat("-m02"), e3 = I.concat("-m03"), t3 = I.concat("-m04"), r3 = I.concat("-m05"), o3 = I.concat("-m06"), n3 = I.concat("-m07"), a3 = I.concat("-m08"), s3 = I.concat("-m09"), i3 = I.concat("-m10"), l3 = I.concat("-m11"), c3 = I.concat("-m12"), u3 = I.concat("-mx00"), d3 = I.concat("-mx01"), f3 = I.concat("-mx02"), p3 = I.concat("-mx03"), g3 = I.concat("-mx04"), m3 = I.concat("-mx05"), h3 = I.concat("-mx06"), v3 = I.concat("-mx07"), y3 = I.concat("-mx08"), C3 = I.concat("-mx09"), x3 = I.concat("-mx10"), b3 = I.concat("-mx11"), w3 = I.concat("-mx12"), A3 = I.concat("-mxauto"), S3 = I.concat("-my00"), k3 = I.concat("-my01"), j3 = I.concat("-my02"), B3 = I.concat("-my03"), E3 = I.concat("-my04"), D3 = I.concat("-my05"), M3 = I.concat("-my06"), H3 = I.concat("-my07"), R3 = I.concat("-my08"), L3 = I.concat("-my09"), I3 = I.concat("-my10"), N3 = I.concat("-my11"), P3 = I.concat("-my12"), V3 = I.concat("-mb00"), T3 = I.concat("-mb01"), ds = I.concat("-mb02"), fs = I.concat("-mb03"), ps = I.concat("-mb04"), Gr = I.concat("-mb05"), F3 = I.concat("-mb06"), _3 = I.concat("-mb07"), O3 = I.concat("-mb08"), G3 = I.concat("-mb09"), Q3 = I.concat("-mb10"), z3 = I.concat("-mb11"), Z3 = I.concat("-mb12"), U3 = I.concat("-ml00"), gs = I.concat("-ml01"), Y3 = I.concat("-ml02"), Qr = I.concat("-ml03"), $3 = I.concat("-ml04"), W3 = I.concat("-ml05"), X3 = I.concat("-ml06"), K3 = I.concat("-ml07"), J3 = I.concat("-ml08"), q3 = I.concat("-ml09"), e5 = I.concat("-ml10"), t5 = I.concat("-ml11"), r5 = I.concat("-ml12"), o5 = I.concat("-mr00"), n5 = I.concat("-mr01"), so = I.concat("-mr02"), y2 = I.concat("-mr03"), a5 = I.concat("-mr04"), s5 = I.concat("-mr05"), i5 = I.concat("-mr06"), l5 = I.concat("-mr07"), c5 = I.concat("-mr08"), u5 = I.concat("-mr09"), d5 = I.concat("-mr10"), f5 = I.concat("-mr11"), p5 = I.concat("-mr12"), g5 = I.concat("-mt00"), m5 = I.concat("-mt01"), ms = I.concat("-mt02"), zr = I.concat("-mt03"), h5 = I.concat("-mt04"), v5 = I.concat("-mt05"), y5 = I.concat("-mt06"), C5 = I.concat("-mt07"), x5 = I.concat("-mt08"), b5 = I.concat("-mt09"), w5 = I.concat("-mt10"), A5 = I.concat("-mt11"), S5 = I.concat("-mt12"), hs = I.concat("-p00"), k5 = I.concat("-p01"), vs = I.concat("-p02"), Zr = I.concat("-p03"), D2 = I.concat("-p04"), io = I.concat("-p05"), j5 = I.concat("-p06"), B5 = I.concat("-p07"), E5 = I.concat("-p08"), D5 = I.concat("-p09"), M5 = I.concat("-p10"), H5 = I.concat("-p11"), R5 = I.concat("-p12"), L5 = I.concat("-px00"), I5 = I.concat("-px01"), N5 = I.concat("-px02"), kn = I.concat("-px03"), jn = I.concat("-px04"), J2 = I.concat("-px05"), P5 = I.concat("-px06"), V5 = I.concat("-px07"), T5 = I.concat("-px08"), F5 = I.concat("-px09"), _5 = I.concat("-px10"), O5 = I.concat("-px11"), G5 = I.concat("-px12"), ys = I.concat("-py00"), Q5 = I.concat("-py01"), tn = I.concat("-py02"), Bn = I.concat("-py03"), Ur = I.concat("-py04"), z5 = I.concat("-py05"), Z5 = I.concat("-py06"), U5 = I.concat("-py07"), Y5 = I.concat("-py08"), $5 = I.concat("-py09"), W5 = I.concat("-py10"), X5 = I.concat("-py11"), K5 = I.concat("-py12"), J5 = I.concat("-pb00"), q5 = I.concat("-pb01"), e4 = I.concat("-pb02"), t4 = I.concat("-pb03"), Cs = I.concat("-pb04"), r4 = I.concat("-pb05"), o4 = I.concat("-pb06"), n4 = I.concat("-pb07"), a4 = I.concat("-pb08"), s4 = I.concat("-pb09"), i4 = I.concat("-pb10"), l4 = I.concat("-pb11"), c4 = I.concat("-pb12"), u4 = I.concat("-pl00"), d4 = I.concat("-pl01"), xs = I.concat("-pl02"), rn = I.concat("-pl03"), f4 = I.concat("-pl04"), bs = I.concat("-pl05"), ws = I.concat("-pl06"), As = I.concat("-pl07"), p4 = I.concat("-pl08"), g4 = I.concat("-pl09"), m4 = I.concat("-pl10"), h4 = I.concat("-pl11"), v4 = I.concat("-pl12"), y4 = I.concat("-pr00"), C4 = I.concat("-pr01"), En = I.concat("-pr02"), on = I.concat("-pr03"), Ss = I.concat("-pr04"), x4 = I.concat("-pr05"), Dn = I.concat("-pr06"), b4 = I.concat("-pr07"), ks = I.concat("-pr08"), w4 = I.concat("-pr09"), A4 = I.concat("-pr10"), S4 = I.concat("-pr11"), k4 = I.concat("-pr12"), j4 = I.concat("-pt00"), B4 = I.concat("-pt01"), E4 = I.concat("-pt02"), D4 = I.concat("-pt03"), M4 = I.concat("-pt04"), H4 = I.concat("-pt05"), R4 = I.concat("-pt06"), L4 = I.concat("-pt07"), I4 = I.concat("-pt08"), N4 = I.concat("-pt09"), P4 = I.concat("-pt10"), V4 = I.concat("-pt11"), T4 = I.concat("-pt12"), F4 = I.concat("-00"), _4 = I.concat("-01"), O4 = I.concat("-02"), G4 = I.concat("-03"), Q4 = I.concat("-04"), z4 = I.concat("-05"), Z4 = I.concat("-06"), U4 = I.concat("-07"), Y4 = I.concat("-08"), $4 = I.concat("-09"), W4 = I.concat("-10"), X4 = I.concat("-11"), K4 = I.concat("-12"), J4 = I.concat("-h-00"), q4 = I.concat("-h-01"), e6 = I.concat("-h-02"), t6 = I.concat("-h-03"), r6 = I.concat("-h-04"), o6 = I.concat("-h-05"), n6 = I.concat("-h-06"), a6 = I.concat("-h-07"), s6 = I.concat("-h-08"), i6 = I.concat("-h-09"), l6 = I.concat("-h-10"), c6 = I.concat("-h-11"), u6 = I.concat("-h-12"), d6 = I.concat("-v-00"), f6 = I.concat("-v-01"), p6 = I.concat("-v-02"), g6 = I.concat("-v-03"), m6 = I.concat("-v-04"), h6 = I.concat("-v-05"), js = I.concat("-v-06"), v6 = I.concat("-v-07"), y6 = I.concat("-v-08"), C6 = I.concat("-v-09"), x6 = I.concat("-v-10"), b6 = I.concat("-v-11"), w6 = I.concat("-v-12"), A6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base: I,
  margin0: Sn,
  margin1: us,
  margin10: i3,
  margin11: l3,
  margin12: c3,
  margin2: qc,
  margin3: e3,
  margin4: t3,
  margin5: r3,
  margin6: o3,
  margin7: n3,
  margin8: a3,
  margin9: s3,
  marginBottom0: V3,
  marginBottom1: T3,
  marginBottom10: Q3,
  marginBottom11: z3,
  marginBottom12: Z3,
  marginBottom2: ds,
  marginBottom3: fs,
  marginBottom4: ps,
  marginBottom5: Gr,
  marginBottom6: F3,
  marginBottom7: _3,
  marginBottom8: O3,
  marginBottom9: G3,
  marginLeft0: U3,
  marginLeft1: gs,
  marginLeft10: e5,
  marginLeft11: t5,
  marginLeft12: r5,
  marginLeft2: Y3,
  marginLeft3: Qr,
  marginLeft4: $3,
  marginLeft5: W3,
  marginLeft6: X3,
  marginLeft7: K3,
  marginLeft8: J3,
  marginLeft9: q3,
  marginRight0: o5,
  marginRight1: n5,
  marginRight10: d5,
  marginRight11: f5,
  marginRight12: p5,
  marginRight2: so,
  marginRight3: y2,
  marginRight4: a5,
  marginRight5: s5,
  marginRight6: i5,
  marginRight7: l5,
  marginRight8: c5,
  marginRight9: u5,
  marginTop0: g5,
  marginTop1: m5,
  marginTop10: w5,
  marginTop11: A5,
  marginTop12: S5,
  marginTop2: ms,
  marginTop3: zr,
  marginTop4: h5,
  marginTop5: v5,
  marginTop6: y5,
  marginTop7: C5,
  marginTop8: x5,
  marginTop9: b5,
  marginX0: u3,
  marginX1: d3,
  marginX10: x3,
  marginX11: b3,
  marginX12: w3,
  marginX2: f3,
  marginX3: p3,
  marginX4: g3,
  marginX5: m3,
  marginX6: h3,
  marginX7: v3,
  marginX8: y3,
  marginX9: C3,
  marginXAuto: A3,
  marginY0: S3,
  marginY1: k3,
  marginY10: I3,
  marginY11: N3,
  marginY12: P3,
  marginY2: j3,
  marginY3: B3,
  marginY4: E3,
  marginY5: D3,
  marginY6: M3,
  marginY7: H3,
  marginY8: R3,
  marginY9: L3,
  padding0: hs,
  padding1: k5,
  padding10: M5,
  padding11: H5,
  padding12: R5,
  padding2: vs,
  padding3: Zr,
  padding4: D2,
  padding5: io,
  padding6: j5,
  padding7: B5,
  padding8: E5,
  padding9: D5,
  paddingBottom0: J5,
  paddingBottom1: q5,
  paddingBottom10: i4,
  paddingBottom11: l4,
  paddingBottom12: c4,
  paddingBottom2: e4,
  paddingBottom3: t4,
  paddingBottom4: Cs,
  paddingBottom5: r4,
  paddingBottom6: o4,
  paddingBottom7: n4,
  paddingBottom8: a4,
  paddingBottom9: s4,
  paddingLeft0: u4,
  paddingLeft1: d4,
  paddingLeft10: m4,
  paddingLeft11: h4,
  paddingLeft12: v4,
  paddingLeft2: xs,
  paddingLeft3: rn,
  paddingLeft4: f4,
  paddingLeft5: bs,
  paddingLeft6: ws,
  paddingLeft7: As,
  paddingLeft8: p4,
  paddingLeft9: g4,
  paddingRight0: y4,
  paddingRight1: C4,
  paddingRight10: A4,
  paddingRight11: S4,
  paddingRight12: k4,
  paddingRight2: En,
  paddingRight3: on,
  paddingRight4: Ss,
  paddingRight5: x4,
  paddingRight6: Dn,
  paddingRight7: b4,
  paddingRight8: ks,
  paddingRight9: w4,
  paddingTop0: j4,
  paddingTop1: B4,
  paddingTop10: P4,
  paddingTop11: V4,
  paddingTop12: T4,
  paddingTop2: E4,
  paddingTop3: D4,
  paddingTop4: M4,
  paddingTop5: H4,
  paddingTop6: R4,
  paddingTop7: L4,
  paddingTop8: I4,
  paddingTop9: N4,
  paddingX0: L5,
  paddingX1: I5,
  paddingX10: _5,
  paddingX11: O5,
  paddingX12: G5,
  paddingX2: N5,
  paddingX3: kn,
  paddingX4: jn,
  paddingX5: J2,
  paddingX6: P5,
  paddingX7: V5,
  paddingX8: T5,
  paddingX9: F5,
  paddingY0: ys,
  paddingY1: Q5,
  paddingY10: W5,
  paddingY11: X5,
  paddingY12: K5,
  paddingY2: tn,
  paddingY3: Bn,
  paddingY4: Ur,
  paddingY5: z5,
  paddingY6: Z5,
  paddingY7: U5,
  paddingY8: Y5,
  paddingY9: $5,
  space0: F4,
  space1: _4,
  space10: W4,
  space11: X4,
  space12: K4,
  space2: O4,
  space3: G4,
  space4: Q4,
  space5: z4,
  space6: Z4,
  space7: U4,
  space8: Y4,
  space9: $4,
  spaceH0: J4,
  spaceH1: q4,
  spaceH10: l6,
  spaceH11: c6,
  spaceH12: u6,
  spaceH2: e6,
  spaceH3: t6,
  spaceH4: r6,
  spaceH5: o6,
  spaceH6: n6,
  spaceH7: a6,
  spaceH8: s6,
  spaceH9: i6,
  spaceV0: d6,
  spaceV1: f6,
  spaceV10: x6,
  spaceV11: b6,
  spaceV12: w6,
  spaceV2: p6,
  spaceV3: g6,
  spaceV4: m6,
  spaceV5: h6,
  spaceV6: js,
  spaceV7: v6,
  spaceV8: y6,
  spaceV9: C6
}, Symbol.toStringTag, { value: "Module" })), w0 = S0.concat("color-badge"), S6 = w0.concat("-cyan-800"), Mn = w0.concat("-gray-500"), Bs = w0.concat("-green-150"), Es = w0.concat("-green-600"), Ds = w0.concat("-orange-150"), k6 = w0.concat("-cyan-100"), j6 = w0.concat("-cyan-300"), Ms = w0.concat("-cyan-500"), Hs = w0.concat("-cyan-700"), Rs = w0.concat("-gray-100"), B6 = w0.concat("-gray-400"), E6 = w0.concat("-green-100"), D6 = w0.concat("-green-400"), M6 = w0.concat("-orange-100"), Ls = w0.concat("-orange-400"), Is = w0.concat("-red-150"), Ns = w0.concat("-red-600"), Ps = w0.concat("-yellow-150"), Vs = w0.concat("-yellow-400"), Ts = w0.concat("-auxiliary-300"), Fs = w0.concat("-auxiliary-600"), H6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base: w0,
  colorBadgeAuxiliary300: Ts,
  colorBadgeAuxiliary600: Fs,
  colorBadgeCyan100: k6,
  colorBadgeCyan300: j6,
  colorBadgeCyan500: Ms,
  colorBadgeCyan700: Hs,
  colorBadgeCyan800: S6,
  colorBadgeGray100: Rs,
  colorBadgeGray400: B6,
  colorBadgeGray500: Mn,
  colorBadgeGreen100: E6,
  colorBadgeGreen150: Bs,
  colorBadgeGreen400: D6,
  colorBadgeGreen600: Es,
  colorBadgeOrange100: M6,
  colorBadgeOrange150: Ds,
  colorBadgeOrange400: Ls,
  colorBadgeRed150: Is,
  colorBadgeRed600: Ns,
  colorBadgeYellow150: Ps,
  colorBadgeYellow400: Vs
}, Symbol.toStringTag, { value: "Module" })), A0 = S0.concat("color-button"), R6 = A0.concat("-disabled"), L6 = A0.concat("-primary"), I6 = A0.concat("-primary-active"), N6 = A0.concat("-primary-hover"), P6 = A0.concat("-secondary"), V6 = A0.concat("-secondary-active"), T6 = A0.concat("-secondary-hover"), F6 = A0.concat("-danger"), _6 = A0.concat("-danger-active"), O6 = A0.concat("-danger-hover"), G6 = A0.concat("-tertiary"), Q6 = A0.concat("-tertiary-active"), z6 = A0.concat("-tertiary-hover"), Z6 = A0.concat("-white"), U6 = A0.concat("-white-active"), Y6 = A0.concat("-white-hover"), $6 = A0.concat("-icon"), W6 = A0.concat("-icon-active"), X6 = A0.concat("-icon-disabled"), K6 = A0.concat("-icon-hover"), J6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base: A0,
  colorButtonDanger: F6,
  colorButtonDangerActive: _6,
  colorButtonDangerHover: O6,
  colorButtonDisabled: R6,
  colorButtonIcon: $6,
  colorButtonIconActive: W6,
  colorButtonIconDisabled: X6,
  colorButtonIconHover: K6,
  colorButtonPrimary: L6,
  colorButtonPrimaryActive: I6,
  colorButtonPrimaryHover: N6,
  colorButtonSecondary: P6,
  colorButtonSecondaryActive: V6,
  colorButtonSecondaryHover: T6,
  colorButtonTertiary: G6,
  colorButtonTertiaryActive: Q6,
  colorButtonTertiaryHover: z6,
  colorButtonWhite: Z6,
  colorButtonWhiteActive: U6,
  colorButtonWhiteHover: Y6
}, Symbol.toStringTag, { value: "Module" })), M2 = S0.concat("color-icon"), Hn = M2.concat("-active"), Bt = M2.concat("-default"), _s = M2.concat("-disabled"), q6 = M2.concat("-white"), eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base: M2,
  colorIconActive: Hn,
  colorIconDefault: Bt,
  colorIconDisabled: _s,
  colorIconWhite: q6
}, Symbol.toStringTag, { value: "Module" })), C2 = S0.concat("color-link"), Os = C2.concat("-disabled"), tu = C2.concat("-hover"), Gs = C2.concat("-visited"), ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base: C2,
  colorLinkDisabled: Os,
  colorLinkHover: tu,
  colorLinkVisited: Gs
}, Symbol.toStringTag, { value: "Module" })), ou = S0.concat("tabs"), Rn = S0.concat("tab"), nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base: ou,
  tab: Rn
}, Symbol.toStringTag, { value: "Module" })), Qs = S0.concat("tabs-navigation"), au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base: Qs,
  tab: Rn
}, Symbol.toStringTag, { value: "Module" })), su = {
  50: "#e6f5fa",
  100: "#cceaf6",
  150: "#b3e0f1",
  200: "#99d5ed",
  300: "#66c0e3",
  400: "#33abda",
  500: "#0096d1",
  600: "#0078a7",
  700: "#005a7d",
  800: "#003c54",
  850: "#002d3f",
  900: "#001e2a",
  950: "#000f15"
}, iu = {
  50: "#e6f5fc",
  100: "#ccebf9",
  150: "#b3e2f6",
  200: "#99d8f3",
  300: "#66c4ee",
  400: "#33b1e8",
  500: "#009de2",
  600: "#007eb5",
  700: "#005e88",
  800: "#003f5a",
  850: "#002f44",
  900: "#001f2d",
  950: "#001017"
}, lu = {
  50: "#fbfcfe",
  100: "#f7fafe",
  150: "#f3f7fd",
  200: "#eff5fc",
  300: "#e7effb",
  400: "#dfeaf9",
  500: "#d7e5f8",
  600: "#b2caea",
  700: "#8dafdc",
  800: "#6993cd",
  850: "#5686c6",
  900: "#4478bf",
  950: "#316bb8"
}, cu = {
  50: "#f8fbff",
  100: "#f1f7ff",
  150: "#eaf3fe",
  200: "#e3effe",
  300: "#d6e6fe",
  400: "#c8defd",
  500: "#bad6fd",
  600: "#96b7e6",
  700: "#7199cf",
  800: "#4d7ab9",
  850: "#3b6bad",
  900: "#285ca2",
  950: "#164c96"
}, uu = {
  50: "#f7fbfc",
  100: "#eef6f9",
  150: "#e6f2f6",
  200: "#ddedf3",
  300: "#cce4ee",
  400: "#bbdbe8",
  500: "#aad2e2",
  600: "#88a8b5",
  700: "#667e88",
  800: "#44545a",
  850: "#333f44",
  900: "#222a2d",
  950: "#111517"
}, du = {
  50: "#f4fbfe",
  100: "#eaf7fc",
  150: "#dff3fb",
  200: "#d4eff9",
  300: "#bfe6f6",
  400: "#a9def3",
  500: "#94d6f0",
  600: "#76abc0",
  700: "#598090",
  800: "#3b5660",
  850: "#2c4048",
  900: "#1e2b30",
  950: "#0f1518"
}, fu = {
  50: "#efefef",
  100: "#dfdfdf",
  150: "#d0d0d0",
  200: "#c0c0c0",
  300: "#a0a0a0",
  400: "#818181",
  500: "#616161",
  600: "#4e4e4e",
  700: "#3a3a3a",
  800: "#272727",
  850: "#1d1d1d",
  900: "#131313",
  950: "#0a0a0a"
}, pu = {
  50: "#e6f3ee",
  100: "#cce7dd",
  150: "#b3dacb",
  200: "#99ceba",
  300: "#66b698",
  400: "#339d75",
  500: "#008553",
  600: "#006a42",
  700: "#005032",
  800: "#003521",
  850: "#002819",
  900: "#001b11",
  950: "#000d08"
}, gu = {
  50: "#e5f2ee",
  100: "#cce6dc",
  150: "#b3dacb",
  200: "#99cdb9",
  300: "#66b497",
  400: "#339b74",
  500: "#008251",
  600: "#006841",
  700: "#004e31",
  800: "#003420",
  850: "#002718",
  900: "#001a10",
  950: "#000d08"
}, mu = {
  50: "#fff3e8",
  100: "#ffe7d2",
  150: "#ffdcbb",
  200: "#ffd0a4",
  300: "#ffb877",
  400: "#ffa149",
  500: "#ff891c",
  600: "#cc6e16",
  700: "#995211",
  800: "#66370b",
  850: "#4d2908",
  900: "#331b06",
  950: "#1a0e03"
}, hu = {
  50: "#fff2e6",
  100: "#ffe4cc",
  150: "#ffd7b3",
  200: "#ffca99",
  300: "#ffaf66",
  400: "#ff9533",
  500: "#ff7a00",
  600: "#cc6200",
  700: "#994900",
  800: "#663100",
  850: "#4d2500",
  900: "#331800",
  950: "#1a0c00"
}, vu = {
  50: "#e6eff8",
  100: "#ccdef2",
  150: "#b3ceeb",
  200: "#99bee4",
  300: "#669dd7",
  400: "#337dc9",
  500: "#005cbc",
  600: "#004a96",
  700: "#003771",
  800: "#00254b",
  850: "#001c38",
  900: "#001226",
  950: "#000913"
}, yu = {
  50: "#e6f0fb",
  100: "#cce1f7",
  150: "#b3d2f3",
  200: "#99c3ef",
  300: "#66a5e7",
  400: "#3387df",
  500: "#0069d7",
  600: "#0054ac",
  700: "#003f81",
  800: "#002a56",
  850: "#002041",
  900: "#00152b",
  950: "#000b16"
}, Cu = {
  50: "#f3eefa",
  100: "#e6def5",
  150: "#dacdf0",
  200: "#cebceb",
  300: "#b59be0",
  400: "#9d79d6",
  500: "#8458cc",
  600: "#6a46a3",
  700: "#4f357a",
  800: "#352352",
  850: "#281a3d",
  900: "#1a1229",
  950: "#0d0914"
}, xu = {
  50: "#f3edfc",
  100: "#e8dbf8",
  150: "#dcc9f5",
  200: "#d0b7f2",
  300: "#b992eb",
  400: "#a16ee5",
  500: "#8a4ade",
  600: "#6e3bb2",
  700: "#532c85",
  800: "#371e59",
  850: "#291643",
  900: "#1c0f2c",
  950: "#0e0716"
}, bu = {
  50: "#fbe6e9",
  100: "#f6ccd2",
  150: "#f2b3bc",
  200: "#ee99a6",
  300: "#e56679",
  400: "#dd334d",
  500: "#d40020",
  600: "#aa001a",
  700: "#7f0013",
  800: "#55000d",
  850: "#40000a",
  900: "#2a0006",
  950: "#150003"
}, wu = {
  50: "#fbe6e6",
  100: "#f6cccc",
  150: "#f2b3b3",
  200: "#ed9999",
  300: "#e46666",
  400: "#db3333",
  500: "#d20000",
  600: "#a80000",
  700: "#7e0000",
  800: "#540000",
  850: "#3f0000",
  900: "#2a0000",
  950: "#150000"
}, Au = {
  50: "#e7f2f5",
  100: "#cfe5ec",
  150: "#b8d8e2",
  200: "#a0cbd9",
  300: "#70b1c5",
  400: "#4197b2",
  500: "#117d9f",
  600: "#0e647f",
  700: "#0a4b5f",
  800: "#073240",
  850: "#052630",
  900: "#031920",
  950: "#020d10"
}, Su = {
  50: "#e6f5f8",
  100: "#cceaf2",
  150: "#b3e0eb",
  200: "#99d5e5",
  300: "#66c1d7",
  400: "#33acca",
  500: "#0097bd",
  600: "#007997",
  700: "#005b71",
  800: "#003c4c",
  850: "#002d39",
  900: "#001e26",
  950: "#000f13"
}, ku = {
  50: "#f7eef3",
  100: "#efdde7",
  150: "#e7cddb",
  200: "#dfbccf",
  300: "#d09ab8",
  400: "#c079a0",
  500: "#b05788",
  600: "#8d466d",
  700: "#6a3452",
  800: "#462336",
  850: "#351a29",
  900: "#23111b",
  950: "#12090e"
}, ju = {
  50: "#f6eef2",
  100: "#eddce4",
  150: "#e3cbd7",
  200: "#dab9c9",
  300: "#c896af",
  400: "#b57394",
  500: "#a35079",
  600: "#824061",
  700: "#623049",
  800: "#412030",
  850: "#311824",
  900: "#211018",
  950: "#10080c"
}, Bu = {
  50: "#fff9e8",
  100: "#fff2d2",
  150: "#ffecbb",
  200: "#ffe5a4",
  300: "#ffd977",
  400: "#ffcc49",
  500: "#ffbf1c",
  600: "#cc9916",
  700: "#997311",
  800: "#664c0b",
  850: "#4d3908",
  900: "#332606",
  950: "#1a1303"
}, Eu = {
  50: "#fff6e6",
  100: "#ffeecc",
  150: "#ffe5b3",
  200: "#ffdc99",
  300: "#ffcb66",
  400: "#ffb933",
  500: "#ffa800",
  600: "#cc8600",
  700: "#996500",
  800: "#664300",
  850: "#4d3200",
  900: "#332200",
  950: "#1a1100"
}, Du = "#f3f7fd", Mu = "#818181", Hu = "#dfdfdf", Ru = "#005cbc", Lu = "#fbfcfe", Iu = "#d0d0d0", Nu = "#005cbc", Pu = "#003771", Vu = "#a0a0a0", Tu = "#000000", Fu = "#a0a0a0", x2 = "#3a3a3a", _u = "#616161", Ou = "#ffffff", Gu = "#131313", Qu = "#66a5e7", zu = "#0054ac", Zu = "#c0c0c0", Uu = "#c0c0c0", b2 = "#efefef", Yu = "#d0d0d0", $u = "#3a3a3a", Wu = "#616161", Xu = "#a0a0a0", Ku = "#efefef", Ju = "#efefef", qu = "#d0d0d0", ed = "#616161", td = "#3a3a3a", rd = "#f3f7fd", od = "#fbfcfe", nd = "#eff5fc", ad = "#b2caea", sd = "#272727", id = "#818181", ld = "#dfdfdf", cd = "#272727, 0.8", ud = "#131313", dd = "#1d1d1d", fd = "#272727", pd = "#0a0a0a", gd = "#f8fbff", md = "#272727", hd = "#616161", vd = "#d7e5f8", yd = "#dfdfdf", Cd = "#3a3a3a", xd = "#3a3a3a", bd = "#3a3a3a", wd = "#efefef", Ad = "#006a42", Sd = "#cce7dd", kd = "#d40020", jd = "#fbe6e9", Bd = "#005a7d", Ed = "#cceaf6", Dd = "#995211", Md = "#fff2d2", Hd = "#ff891c", Rd = "#008251", Ld = "#cce6dc", Id = "#d20000", Nd = "#fae5e5", Pd = "#007eb5", Vd = "#ccebf9", Td = "#ffa800", Fd = "#ffeecc", _d = "#ff7f00", Od = "#005cbc", Gd = "#dfeaf9", Qd = "#337dc9", zd = "#a0a0a0", Zd = "#d0d0d0", Ud = "#fbfcfe", Yd = "#c0c0c0", $d = "#0069d7", Wd = "#3a3a3a", Xd = "#3387df", Kd = "#616161", Jd = "#818181", qd = "#272727", e7 = "#4e4e4e", t7 = "linear-gradient(145deg, #004A96 20.55%, #337DC9 79.48%)", r7 = "linear-gradient(145deg, #337dc9 20.55%, #004a96 79.48%)", o7 = "linear-gradient(180deg, #117d9f 0%, #70b1c5 100%)", n7 = "linear-gradient(180deg, #70b1c5 0%, #117d9f 100%)", a7 = "linear-gradient(145deg, #0054ac 20.55%, #3387df 79.48%)", s7 = "linear-gradient(145deg, #3387df 20.55%, #0054ac 79.48%)", i7 = "linear-gradient(180deg, #0097bd 0%, #66c1d7 100%)", l7 = "linear-gradient(180deg, #66c1d7 0%, #0097bd 100%)", c7 = "#005cbc", u7 = "#004a96", d7 = "#003771", f7 = "#117d9f", p7 = "#0e647f", g7 = "#0a4b5f", m7 = "#005cbc", h7 = "#004a96", v7 = "#005cbc", y7 = "#004a96", C7 = "#d0d0d0", x7 = "#0069d7", b7 = "#0054ac", w7 = "#003f81", A7 = "#007997", S7 = "#005b71", k7 = "#003c4c", j7 = "#3387df", B7 = "#0069d7", E7 = "#3387df", D7 = "#0069d7", M7 = "#818181", H7 = "#e7eff8", R7 = "#eff5fc", L7 = "#dfeaf9", I7 = "#005cbc", N7 = "#005cbc", P7 = "#d7e5f8", V7 = "#f8fcfe", T7 = "#1d1d1d", F7 = "#131313", _7 = "#272727", O7 = "#0069d7", G7 = "#3387df", Q7 = "#616161", z7 = "#1d1d1d", Z7 = "#005cbc", U7 = "#004a96", Y7 = "#a0a0a0", $7 = "#3387df", W7 = "#0069d7", X7 = "#616161", Hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BackgroundPageDefault: Du,
  BackgroundPageDefaultDark: Gu,
  BackgroundUtilDark: Mu,
  BackgroundUtilLight: Hu,
  InputActive: Ru,
  InputBackground: Lu,
  InputDisabled: Iu,
  LinkBackground: Nu,
  LinkBackgroundDark: Qu,
  LinkDisabled: Vu,
  LinkDisabledDark: Zu,
  LinkHover: Pu,
  LinkHoverDark: zu,
  TextBlack: Tu,
  TextDisabled: Fu,
  TextDisabledDark: Uu,
  TextPrimary: x2,
  TextPrimaryDark: b2,
  TextSecondary: _u,
  TextSecondaryDark: Yu,
  TextWhite: Ou,
  auxiliary: su,
  auxiliaryDark: iu,
  blue: lu,
  blueDark: cu,
  colorBackgroundDefault: rd,
  colorBackgroundDefaultDark: ud,
  colorBackgroundInverse: sd,
  colorBackgroundInverseDark: gd,
  colorBackgroundLayer1: od,
  colorBackgroundLayer1Dark: dd,
  colorBackgroundLayer2: nd,
  colorBackgroundLayer2Dark: fd,
  colorBackgroundLayer3: ad,
  colorBackgroundLayer3Dark: pd,
  colorBackgroundOverlay: cd,
  colorBackgroundUtilityDark: id,
  colorBackgroundUtilityDarkDark: md,
  colorBackgroundUtilityLight: ld,
  colorBackgroundUtilityLightDark: hd,
  colorBorderDefault: vd,
  colorBorderDefaultDark: Cd,
  colorBorderDivider: yd,
  colorBorderDividerDark: xd,
  colorButtonBorderless: v7,
  colorButtonBorderlessDark: E7,
  colorButtonBorderlessHover: y7,
  colorButtonBorderlessHoverDark: D7,
  colorButtonDisabled: C7,
  colorButtonDisabledDark: M7,
  colorButtonGroupActive: I7,
  colorButtonGroupActiveDark: O7,
  colorButtonGroupBorder: P7,
  colorButtonGroupBorderDark: Q7,
  colorButtonGroupDefault: H7,
  colorButtonGroupDefaultDark: T7,
  colorButtonGroupDisabled: V7,
  colorButtonGroupDisabledDark: z7,
  colorButtonGroupHover: R7,
  colorButtonGroupHoverDark: F7,
  colorButtonGroupSelected: L7,
  colorButtonGroupSelectedDark: _7,
  colorButtonGroupText: N7,
  colorButtonGroupTextDark: G7,
  colorButtonOutlined: m7,
  colorButtonOutlinedDark: j7,
  colorButtonOutlinedHover: h7,
  colorButtonOutlinedHoverDark: B7,
  colorButtonPrimary: c7,
  colorButtonPrimaryDark: x7,
  colorButtonPrimaryHover: u7,
  colorButtonPrimaryHoverDark: b7,
  colorButtonPrimaryPressed: d7,
  colorButtonPrimaryPressedDark: w7,
  colorButtonSecondary: f7,
  colorButtonSecondaryDark: A7,
  colorButtonSecondaryHover: p7,
  colorButtonSecondaryHoverDark: S7,
  colorButtonSecondaryPressed: g7,
  colorButtonSecondaryPressedDark: k7,
  colorFeedbackAdvice: Hd,
  colorFeedbackAdviceDark: _d,
  colorFeedbackError: kd,
  colorFeedbackErrorBackground: jd,
  colorFeedbackErrorBackgroundDark: Nd,
  colorFeedbackErrorDark: Id,
  colorFeedbackInfo: Bd,
  colorFeedbackInfoBackground: Ed,
  colorFeedbackInfoBackgroundDark: Vd,
  colorFeedbackInfoDark: Pd,
  colorFeedbackSuccess: Ad,
  colorFeedbackSuccessBackground: Sd,
  colorFeedbackSuccessBackgroundDark: Ld,
  colorFeedbackSuccessDark: Rd,
  colorFeedbackWarning: Dd,
  colorFeedbackWarningBackground: Md,
  colorFeedbackWarningBackgroundDark: Fd,
  colorFeedbackWarningDark: Td,
  colorGradientPrimary1: t7,
  colorGradientPrimary1Dark: a7,
  colorGradientPrimary2: r7,
  colorGradientPrimary2Dark: s7,
  colorGradientSecondary1: o7,
  colorGradientSecondary1Dark: i7,
  colorGradientSecondary2: n7,
  colorGradientSecondary2Dark: l7,
  colorIconDefault: bd,
  colorIconInverse: wd,
  colorInteractionActive: Od,
  colorInteractionActiveDark: $d,
  colorInteractionDisabled: zd,
  colorInteractionDisabledBackground: Zd,
  colorInteractionDisabledBackgroundDark: Jd,
  colorInteractionDisabledDark: Kd,
  colorInteractionFocus: Qd,
  colorInteractionFocusDark: Xd,
  colorInteractionFormBackground: Ud,
  colorInteractionFormBackgroundDark: qd,
  colorInteractionFormBorder: Yd,
  colorInteractionFormBorderDark: e7,
  colorInteractionHover: Gd,
  colorInteractionHoverDark: Wd,
  colorLinkDefault: Z7,
  colorLinkDefaultDark: $7,
  colorLinkDisabled: Y7,
  colorLinkDisabledDark: X7,
  colorLinkHover: U7,
  colorLinkHoverDark: W7,
  colorTextInverse: Ku,
  colorTextInverseDark: td,
  colorTextPrimary: $u,
  colorTextPrimaryDark: Ju,
  colorTextSecondary: Wu,
  colorTextSecondaryDark: qu,
  colorTextTertiary: Xu,
  colorTextTertiaryDark: ed,
  cyan: uu,
  cyanDark: du,
  gray: fu,
  green: pu,
  greenDark: gu,
  orange: mu,
  orangeDark: hu,
  primary: vu,
  primaryDark: yu,
  purple: Cu,
  purpleDark: xu,
  red: bu,
  redDark: wu,
  secondary: Au,
  secondaryDark: Su,
  tertiary: ku,
  tertiaryDark: ju,
  yellow: Bu,
  yellowDark: Eu
}, Symbol.toStringTag, { value: "Module" }));
var K7 = /* @__PURE__ */ ((e) => (e.auxiliary = "auxiliary", e.blue = "blue", e.cyan = "cyan", e.gray = "gray", e.green = "green", e.orange = "orange", e.primary = "primary", e.purple = "purple", e.red = "red", e.secondary = "secondary", e.tertiary = "tertiary", e.yellow = "yellow", e))(K7 || {}), J7 = /* @__PURE__ */ ((e) => (e[e.one = 50] = "one", e[e.two = 100] = "two", e[e.three = 150] = "three", e[e.four = 200] = "four", e[e.five = 300] = "five", e[e.six = 400] = "six", e[e.seven = 500] = "seven", e[e.eight = 600] = "eight", e[e.nine = 700] = "nine", e[e.ten = 800] = "ten", e[e.jack = 850] = "jack", e[e.queen = 900] = "queen", e[e.king = 950] = "king", e))(J7 || {}), Pr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function q7(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nn = { exports: {} }, Y2 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h1;
function e8() {
  if (h1) return Y2;
  h1 = 1;
  var e = _r, a = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, u, m) {
    var g, b = {}, y = null, p = null;
    m !== void 0 && (y = "" + m), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (g in u) s.call(u, g) && !l.hasOwnProperty(g) && (b[g] = u[g]);
    if (f && f.defaultProps) for (g in u = f.defaultProps, u) b[g] === void 0 && (b[g] = u[g]);
    return { $$typeof: a, type: f, key: y, ref: p, props: b, _owner: i.current };
  }
  return Y2.Fragment = n, Y2.jsx = d, Y2.jsxs = d, Y2;
}
var $2 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v1;
function t8() {
  return v1 || (v1 = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _r, a = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), f = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, x = "@@iterator";
    function A(P) {
      if (P === null || typeof P != "object")
        return null;
      var Y = v && P[v] || P[x];
      return typeof Y == "function" ? Y : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(P) {
      {
        for (var Y = arguments.length, ie = new Array(Y > 1 ? Y - 1 : 0), Be = 1; Be < Y; Be++)
          ie[Be - 1] = arguments[Be];
        E("error", P, ie);
      }
    }
    function E(P, Y, ie) {
      {
        var Be = S.ReactDebugCurrentFrame, Fe = Be.getStackAddendum();
        Fe !== "" && (Y += "%s", ie = ie.concat([Fe]));
        var e0 = ie.map(function(Ne) {
          return String(Ne);
        });
        e0.unshift("Warning: " + Y), Function.prototype.apply.call(console[P], console, e0);
      }
    }
    var R = !1, V = !1, N = !1, L = !1, F = !1, Q;
    Q = Symbol.for("react.module.reference");
    function G(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === s || P === l || F || P === i || P === m || P === g || L || P === p || R || V || N || typeof P == "object" && P !== null && (P.$$typeof === y || P.$$typeof === b || P.$$typeof === d || P.$$typeof === f || P.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === Q || P.getModuleId !== void 0));
    }
    function J(P, Y, ie) {
      var Be = P.displayName;
      if (Be)
        return Be;
      var Fe = Y.displayName || Y.name || "";
      return Fe !== "" ? ie + "(" + Fe + ")" : ie;
    }
    function X(P) {
      return P.displayName || "Context";
    }
    function re(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case m:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case f:
            var Y = P;
            return X(Y) + ".Consumer";
          case d:
            var ie = P;
            return X(ie._context) + ".Provider";
          case u:
            return J(P, P.render, "ForwardRef");
          case b:
            var Be = P.displayName || null;
            return Be !== null ? Be : re(P.type) || "Memo";
          case y: {
            var Fe = P, e0 = Fe._payload, Ne = Fe._init;
            try {
              return re(Ne(e0));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var je = Object.assign, Me = 0, se, fe, De, W, ee, _e, qe;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function B0() {
      {
        if (Me === 0) {
          se = console.log, fe = console.info, De = console.warn, W = console.error, ee = console.group, _e = console.groupCollapsed, qe = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        Me++;
      }
    }
    function H0() {
      {
        if (Me--, Me === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: je({}, P, {
              value: se
            }),
            info: je({}, P, {
              value: fe
            }),
            warn: je({}, P, {
              value: De
            }),
            error: je({}, P, {
              value: W
            }),
            group: je({}, P, {
              value: ee
            }),
            groupCollapsed: je({}, P, {
              value: _e
            }),
            groupEnd: je({}, P, {
              value: qe
            })
          });
        }
        Me < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var m0 = S.ReactCurrentDispatcher, Ye;
    function ye(P, Y, ie) {
      {
        if (Ye === void 0)
          try {
            throw Error();
          } catch (Fe) {
            var Be = Fe.stack.trim().match(/\n( *(at )?)/);
            Ye = Be && Be[1] || "";
          }
        return `
` + Ye + P;
      }
    }
    var We = !1, ce;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new ue();
    }
    function ge(P, Y) {
      if (!P || We)
        return "";
      {
        var ie = ce.get(P);
        if (ie !== void 0)
          return ie;
      }
      var Be;
      We = !0;
      var Fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var e0;
      e0 = m0.current, m0.current = null, B0();
      try {
        if (Y) {
          var Ne = function() {
            throw Error();
          };
          if (Object.defineProperty(Ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ne, []);
            } catch (i0) {
              Be = i0;
            }
            Reflect.construct(P, [], Ne);
          } else {
            try {
              Ne.call();
            } catch (i0) {
              Be = i0;
            }
            P.call(Ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (i0) {
            Be = i0;
          }
          P();
        }
      } catch (i0) {
        if (i0 && Be && typeof i0.stack == "string") {
          for (var Pe = i0.stack.split(`
`), h0 = Be.stack.split(`
`), f0 = Pe.length - 1, v0 = h0.length - 1; f0 >= 1 && v0 >= 0 && Pe[f0] !== h0[v0]; )
            v0--;
          for (; f0 >= 1 && v0 >= 0; f0--, v0--)
            if (Pe[f0] !== h0[v0]) {
              if (f0 !== 1 || v0 !== 1)
                do
                  if (f0--, v0--, v0 < 0 || Pe[f0] !== h0[v0]) {
                    var E0 = `
` + Pe[f0].replace(" at new ", " at ");
                    return P.displayName && E0.includes("<anonymous>") && (E0 = E0.replace("<anonymous>", P.displayName)), typeof P == "function" && ce.set(P, E0), E0;
                  }
                while (f0 >= 1 && v0 >= 0);
              break;
            }
        }
      } finally {
        We = !1, m0.current = e0, H0(), Error.prepareStackTrace = Fe;
      }
      var et = P ? P.displayName || P.name : "", T0 = et ? ye(et) : "";
      return typeof P == "function" && ce.set(P, T0), T0;
    }
    function K(P, Y, ie) {
      return ge(P, !1);
    }
    function le(P) {
      var Y = P.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function me(P, Y, ie) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return ge(P, le(P));
      if (typeof P == "string")
        return ye(P);
      switch (P) {
        case m:
          return ye("Suspense");
        case g:
          return ye("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case u:
            return K(P.render);
          case b:
            return me(P.type, Y, ie);
          case y: {
            var Be = P, Fe = Be._payload, e0 = Be._init;
            try {
              return me(e0(Fe), Y, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, Xe = {}, R0 = S.ReactDebugCurrentFrame;
    function te(P) {
      if (P) {
        var Y = P._owner, ie = me(P.type, P._source, Y ? Y.type : null);
        R0.setExtraStackFrame(ie);
      } else
        R0.setExtraStackFrame(null);
    }
    function ne(P, Y, ie, Be, Fe) {
      {
        var e0 = Function.call.bind(Te);
        for (var Ne in P)
          if (e0(P, Ne)) {
            var Pe = void 0;
            try {
              if (typeof P[Ne] != "function") {
                var h0 = Error((Be || "React class") + ": " + ie + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h0.name = "Invariant Violation", h0;
              }
              Pe = P[Ne](Y, Ne, Be, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f0) {
              Pe = f0;
            }
            Pe && !(Pe instanceof Error) && (te(Fe), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Be || "React class", ie, Ne, typeof Pe), te(null)), Pe instanceof Error && !(Pe.message in Xe) && (Xe[Pe.message] = !0, te(Fe), k("Failed %s type: %s", ie, Pe.message), te(null));
          }
      }
    }
    var Ie = Array.isArray;
    function t0(P) {
      return Ie(P);
    }
    function $e(P) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ie = Y && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return ie;
      }
    }
    function V0(P) {
      try {
        return rt(P), !1;
      } catch {
        return !0;
      }
    }
    function rt(P) {
      return "" + P;
    }
    function Ot(P) {
      if (V0(P))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $e(P)), rt(P);
    }
    var L2 = S.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Gt, I2;
    function N2(P) {
      if (Te.call(P, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function lr(P) {
      if (Te.call(P, "key")) {
        var Y = Object.getOwnPropertyDescriptor(P, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function go(P, Y) {
      typeof P.ref == "string" && L2.current;
    }
    function dt(P, Y) {
      {
        var ie = function() {
          Gt || (Gt = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ie.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function q0(P, Y) {
      {
        var ie = function() {
          I2 || (I2 = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ie.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var K0 = function(P, Y, ie, Be, Fe, e0, Ne) {
      var Pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: P,
        key: Y,
        ref: ie,
        props: Ne,
        // Record the component responsible for creating this element.
        _owner: e0
      };
      return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.defineProperty(Pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
    };
    function P2(P, Y, ie, Be, Fe) {
      {
        var e0, Ne = {}, Pe = null, h0 = null;
        ie !== void 0 && (Ot(ie), Pe = "" + ie), lr(Y) && (Ot(Y.key), Pe = "" + Y.key), N2(Y) && (h0 = Y.ref, go(Y, Fe));
        for (e0 in Y)
          Te.call(Y, e0) && !ir.hasOwnProperty(e0) && (Ne[e0] = Y[e0]);
        if (P && P.defaultProps) {
          var f0 = P.defaultProps;
          for (e0 in f0)
            Ne[e0] === void 0 && (Ne[e0] = f0[e0]);
        }
        if (Pe || h0) {
          var v0 = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          Pe && dt(Ne, v0), h0 && q0(Ne, v0);
        }
        return K0(P, Pe, h0, Fe, Be, L2.current, Ne);
      }
    }
    var Dt = S.ReactCurrentOwner, cr = S.ReactDebugCurrentFrame;
    function ft(P) {
      if (P) {
        var Y = P._owner, ie = me(P.type, P._source, Y ? Y.type : null);
        cr.setExtraStackFrame(ie);
      } else
        cr.setExtraStackFrame(null);
    }
    var Mt;
    Mt = !1;
    function Jt(P) {
      return typeof P == "object" && P !== null && P.$$typeof === a;
    }
    function be() {
      {
        if (Dt.current) {
          var P = re(Dt.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function ur(P) {
      return "";
    }
    var dr = {};
    function $0(P) {
      {
        var Y = be();
        if (!Y) {
          var ie = typeof P == "string" ? P : P.displayName || P.name;
          ie && (Y = `

Check the top-level render call using <` + ie + ">.");
        }
        return Y;
      }
    }
    function L0(P, Y) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var ie = $0(Y);
        if (dr[ie])
          return;
        dr[ie] = !0;
        var Be = "";
        P && P._owner && P._owner !== Dt.current && (Be = " It was passed a child from " + re(P._owner.type) + "."), ft(P), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, Be), ft(null);
      }
    }
    function V2(P, Y) {
      {
        if (typeof P != "object")
          return;
        if (t0(P))
          for (var ie = 0; ie < P.length; ie++) {
            var Be = P[ie];
            Jt(Be) && L0(Be, Y);
          }
        else if (Jt(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var Fe = A(P);
          if (typeof Fe == "function" && Fe !== P.entries)
            for (var e0 = Fe.call(P), Ne; !(Ne = e0.next()).done; )
              Jt(Ne.value) && L0(Ne.value, Y);
        }
      }
    }
    function Ke(P) {
      {
        var Y = P.type;
        if (Y == null || typeof Y == "string")
          return;
        var ie;
        if (typeof Y == "function")
          ie = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === b))
          ie = Y.propTypes;
        else
          return;
        if (ie) {
          var Be = re(Y);
          ne(ie, P.props, "prop", Be, P);
        } else if (Y.PropTypes !== void 0 && !Mt) {
          Mt = !0;
          var Fe = re(Y);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Fe || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qt(P) {
      {
        for (var Y = Object.keys(P.props), ie = 0; ie < Y.length; ie++) {
          var Be = Y[ie];
          if (Be !== "children" && Be !== "key") {
            ft(P), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Be), ft(null);
            break;
          }
        }
        P.ref !== null && (ft(P), k("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    var G0 = {};
    function T2(P, Y, ie, Be, Fe, e0) {
      {
        var Ne = G(P);
        if (!Ne) {
          var Pe = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (Pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h0 = ur();
          h0 ? Pe += h0 : Pe += be();
          var f0;
          P === null ? f0 = "null" : t0(P) ? f0 = "array" : P !== void 0 && P.$$typeof === a ? (f0 = "<" + (re(P.type) || "Unknown") + " />", Pe = " Did you accidentally export a JSX literal instead of a component?") : f0 = typeof P, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f0, Pe);
        }
        var v0 = P2(P, Y, ie, Fe, e0);
        if (v0 == null)
          return v0;
        if (Ne) {
          var E0 = Y.children;
          if (E0 !== void 0)
            if (Be)
              if (t0(E0)) {
                for (var et = 0; et < E0.length; et++)
                  V2(E0[et], P);
                Object.freeze && Object.freeze(E0);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              V2(E0, P);
        }
        if (Te.call(Y, "key")) {
          var T0 = re(P), i0 = Object.keys(Y).filter(function(t2) {
            return t2 !== "key";
          }), Ht = i0.length > 0 ? "{key: someKey, " + i0.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!G0[T0 + Ht]) {
            var e2 = i0.length > 0 ? "{" + i0.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ht, T0, e2, T0), G0[T0 + Ht] = !0;
          }
        }
        return P === s ? Qt(v0) : Ke(v0), v0;
      }
    }
    function pt(P, Y, ie) {
      return T2(P, Y, ie, !0);
    }
    function F2(P, Y, ie) {
      return T2(P, Y, ie, !1);
    }
    var fr = F2, qt = pt;
    $2.Fragment = s, $2.jsx = fr, $2.jsxs = qt;
  }()), $2;
}
process.env.NODE_ENV === "production" ? nn.exports = e8() : nn.exports = t8();
var t = nn.exports;
const r8 = () => {
  const [e, a] = q(
    y1()
  );
  return ve(() => {
    const n = () => {
      a(y1());
    };
    return window.addEventListener("resize", n), () => {
      window.removeEventListener("resize", n);
    };
  }, []), e;
}, y1 = () => {
  const { innerHeight: e, innerWidth: a } = window;
  return {
    height: e,
    width: a
  };
}, o8 = () => {
  const [e, a] = q(C1());
  return ve(() => {
    const n = () => {
      a(C1());
    };
    return window.addEventListener("scroll", n), () => {
      window.removeEventListener("scroll", n);
    };
  }, []), e;
}, C1 = () => {
  const { scrollX: e, scrollY: a } = window;
  return {
    scrollX: e,
    scrollY: a
  };
}, Nt = {
  desktop: 1440,
  "tablet-landscape": 1024,
  "tablet-portrait": 744,
  tablet: 744,
  mobile: 430
}, n8 = {
  breakpoints: Nt,
  currentBreakpoint: "desktop",
  isDesktop: !0,
  isMax: !1,
  isMobile: !1,
  isTablet: !1,
  isTabletLandscape: !1,
  isTabletPortrait: !1,
  scrollX: 0,
  scrollY: 0
}, zs = pn(n8), Rg = ({
  children: e
}) => {
  const {
    // height,
    width: a
  } = r8(), { scrollX: n, scrollY: s } = o8(), i = Z(
    () => s8(a),
    [a]
  ), l = Z(() => a8(a), [a]), d = i === "desktop", f = i === "mobile", u = i === "tablet-landscape", m = i === "tablet-portrait", g = m || u;
  return /* @__PURE__ */ t.jsx(
    zs.Provider,
    {
      value: {
        breakpoints: Nt,
        currentBreakpoint: i,
        // greaterThanMinWidthForHorizontalFooter,
        // height,
        isDesktop: d,
        isMax: l,
        isMobile: f,
        isTablet: g,
        isTabletLandscape: u,
        isTabletPortrait: m,
        scrollX: n,
        scrollY: s
        // width,
      },
      children: e
    }
  );
}, a8 = (e) => e >= Nt.desktop, s8 = (e) => {
  let a = "desktop";
  return e <= Nt.mobile ? a = "mobile" : e <= Nt["tablet-portrait"] && e > Nt.mobile ? a = "tablet-portrait" : e <= Nt["tablet-landscape"] && e > Nt["tablet-portrait"] && (a = "tablet-landscape"), a;
}, lo = () => gn(zs), i8 = {
  isDark: !1
}, Ln = pn(i8), Lg = ({
  children: e,
  initialValue: a = !1
}) => {
  const [n] = q(a);
  return /* @__PURE__ */ t.jsx(
    Ln.Provider,
    {
      value: {
        isDark: n
      },
      children: e
    }
  );
}, $ = () => gn(Ln), Ig = () => {
  const [e, a] = q({});
  return ve(() => {
    const n = (s) => {
      try {
        const i = typeof s.data == "string" ? JSON.parse(s.data) : s.data, { key: l, message: d, source: f } = i;
        if (l === "storybook-channel" || d === "reload-tab-complete" || d === "reloading-tab" || f === "react-devtools-detector")
          return;
        a(i);
      } catch {
      }
    };
    return window.addEventListener("message", n), () => {
      window.removeEventListener("message", n);
    };
  }, []), { messageData: e };
};
function l8(e) {
  ve(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [e]);
}
const In = (e) => {
  ve(() => {
    console.warn(`This version of ${e} is no longer in use, and support is no longer available. Please replace it with the latest version from the main library to access the most up-to-date functionalities.`);
  }, []);
}, x1 = (e) => e == null ? "" : typeof e == "string" ? e : String(e), j = (e) => {
  const a = [];
  return e.forEach((n) => {
    if (Array.isArray(n)) {
      n.forEach((i) => {
        const l = x1(i);
        l.length < 1 || a.push(l);
      });
      return;
    }
    const s = x1(n);
    s.length < 1 || a.push(s);
  }), a.join(" ");
}, Ng = ({ ...e }) => {
  const a = j(["flex", e.className ?? ""]);
  return /* @__PURE__ */ t.jsx("div", { className: a, style: e.style ? { ...e.style } : {}, children: e.children });
}, c8 = (e, a) => {
  switch (e) {
    case "body":
      switch (a) {
        case "regular":
          return Y0;
        case "bold":
          return sr;
        case "caps":
          return as;
        case "medium":
          return ro;
      }
    case "small":
      switch (a) {
        case "regular":
          return n0;
        case "bold":
          return N0;
        case "caps":
          return ss;
        case "medium":
          return oo;
      }
    case "xsmall":
      switch (a) {
        case "regular":
          return Qe;
        case "bold":
          return no;
        case "caps":
          return wn;
        case "medium":
          return is;
      }
    case "xxsmall":
      switch (a) {
        case "regular":
          return lt;
        case "bold":
          return ao;
        case "caps":
          return cs;
        case "medium":
          return ls;
      }
  }
}, u8 = (e) => {
  switch (e) {
    case 1:
      return q1;
    case 2:
      return es;
    case 3:
      return ts;
    case 4:
      return eo;
    case 5:
      return to;
    case 6:
      return E2;
    case "medium4":
      return rs;
    case "medium5":
      return os;
    case "medium6":
      return ns;
    default:
      return "";
  }
}, xe = ({
  children: e,
  className: a,
  size: n = "body",
  headingLevel: s,
  isDark: i,
  style: l,
  variant: d = "regular",
  textColorClass: f,
  ...u
}) => {
  const { isDark: m } = $(), g = Z(
    () => i ?? m,
    [i, m]
  ), b = j([
    "font",
    "font-typography",
    f ?? it,
    g ? z : "",
    s ? u8(s) : c8(n, d),
    a ?? ""
  ]), y = {
    ...l ?? {}
  };
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      ...u,
      className: b,
      style: y,
      children: e
    }
  );
}, Pg = ({ children: e, xxxlarge: a, xxlarge: n, xlarge: s, large: i, medium: l, small: d, ...f }) => {
  const u = () => {
    const m = {
      display: "grid",
      gridGap: "24px",
      // Default gutter
      padding: "0 24px",
      // Padding for content
      gridTemplateColumns: "repeat(16, 1fr)"
      // Default to 16 columns
    };
    if (typeof window < "u") {
      const g = window.innerWidth;
      return g >= 1920 ? {
        ...m,
        maxWidth: "1920px",
        margin: "0 auto",
        gridTemplateColumns: `repeat(${a || 16}, 1fr)`
        // Use xxxlarge prop for large screens
      } : g >= 1366 ? {
        ...m,
        maxWidth: "1366px",
        margin: "0 auto",
        gridTemplateColumns: `repeat(${n || 16}, 1fr)`
        // Use xxlarge prop for mid-large screens
      } : g >= 1024 ? {
        ...m,
        maxWidth: "1024px",
        margin: "0 auto",
        gridTemplateColumns: `repeat(${s || 16}, 1fr)`
        // Use xlarge for smaller screens
      } : g >= 640 ? {
        ...m,
        maxWidth: "1023px",
        margin: "0 auto",
        gridTemplateColumns: `repeat(${i || 8}, 1fr)`
        // Use large for mobile screens
      } : g >= 480 ? {
        ...m,
        maxWidth: "639px",
        margin: "0 auto",
        gridTemplateColumns: `repeat(${l || 8}, 1fr)`
        // Use medium for smaller mobile screens
      } : {
        ...m,
        maxWidth: "479px",
        margin: "0 auto",
        gridTemplateColumns: `repeat(${d || 4}, 1fr)`
        // Use small for very small screens
      };
    }
    return m;
  };
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: f.className,
      style: {
        ...u(),
        ...f.style ? { ...f.style } : {}
      },
      children: e
    }
  );
}, Vg = ({
  className: e,
  isDark: a,
  size: n,
  style: s,
  ...i
}) => {
  const { isDark: l } = $(), d = j([
    "column",
    a ?? l ? z : "",
    n,
    e ?? ""
  ]), f = {
    ...s ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsx("div", { className: d, style: f, children: i.children });
}, Tg = ({
  className: e,
  isDark: a,
  style: n,
  ...s
}) => {
  const { isDark: i } = $(), l = j([
    "page",
    a ?? i ? z : "",
    e ?? ""
  ]), d = {
    ...n ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsx("div", { className: l, style: d, children: /* @__PURE__ */ t.jsx("div", { className: "inner", children: s.children }) });
}, Fg = ({
  children: e,
  className: a,
  isDark: n,
  margin: s,
  marginBottom: i,
  marginHorizontal: l,
  marginLeft: d,
  marginRight: f,
  marginTop: u,
  marginVertical: m,
  padding: g,
  paddingBottom: b,
  paddingHorizontal: y,
  paddingLeft: p,
  paddingRight: v,
  paddingTop: x,
  paddingVertical: A,
  size: S,
  style: k,
  ...E
}) => {
  const { isDark: R } = $(), V = j([
    "space",
    n ?? R ? z : "",
    S ? p8(S) : "",
    d8(
      s,
      l,
      m,
      i,
      d,
      f,
      u
    ),
    f8(
      g,
      y,
      A,
      b,
      p,
      v,
      x
    ),
    a ?? ""
  ]), N = {
    ...k ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      ...E,
      className: V,
      style: N,
      children: e
    }
  );
}, Z0 = (e) => e.toString().padStart(2, "0"), d8 = (e, a, n, s, i, l, d) => {
  if (e !== void 0)
    return `${I}-m${Z0(e)}`;
  const f = [];
  return a !== void 0 && f.push(`${I}-mx${Z0(a)}`), n !== void 0 && f.push(`${I}-my${Z0(n)}`), s !== void 0 && f.push(`${I}-mb${Z0(s)}`), i !== void 0 && f.push(`${I}-ml${Z0(i)}`), l !== void 0 && f.push(`${I}-mr${Z0(l)}`), d !== void 0 && f.push(`${I}-mt${Z0(d)}`), j(f);
}, f8 = (e, a, n, s, i, l, d) => {
  if (e !== void 0)
    return `${I}-p${Z0(e)}`;
  const f = [];
  return a !== void 0 && f.push(`${I}-px${Z0(a)}`), n !== void 0 && f.push(`${I}-py${Z0(n)}`), s !== void 0 && f.push(`${I}-pb${Z0(s)}`), i !== void 0 && f.push(`${I}-pl${Z0(i)}`), l !== void 0 && f.push(`${I}-pr${Z0(l)}`), d !== void 0 && f.push(`${I}-pt${Z0(d)}`), j(f);
}, p8 = (e) => `${I}-${Z0(e)}`, j0 = (e, a) => {
  const n = He(
    (s) => {
      const i = s.target;
      e.current && !e.current.contains(i) && a(s);
    },
    [e]
  );
  ve(() => (document.addEventListener("mousedown", n), document.addEventListener("mouseup", n), () => {
    document.removeEventListener("mousedown", n), document.removeEventListener("mouseup", n);
  }), [n]);
}, w2 = ({
  className: e,
  isDark: a = !1,
  text: n,
  style: s,
  direction: i = "right",
  // displayArrow = true,
  maxWidth: l,
  ...d
}) => {
  const { isDark: u } = $();
  let m;
  const [g, b] = q(!1), y = Ve(null), p = () => {
    m = setTimeout(() => {
      b(!0);
    }, 400);
  }, v = () => {
    clearInterval(m), b(!1);
  };
  j0(y, v);
  const x = j([
    "tooltip",
    "$show-arrow",
    a ?? u ? "$color-tooltip-dark" : "$color-tooltip-default",
    i
  ]), A = {
    ...s ?? {},
    ...l ? { maxWidth: l } : {}
  };
  return n ? /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "tooltip-parent",
      onMouseEnter: p,
      onMouseLeave: v,
      ref: y,
      children: [
        d.children,
        g && /* @__PURE__ */ t.jsx("div", { className: x, style: A, children: n })
      ]
    }
  ) : /* @__PURE__ */ t.jsx(t.Fragment, { children: d.children });
}, oe = ({
  alt: e,
  className: a = "",
  disabled: n = !1,
  icon: s,
  isDark: i,
  size: l = "large",
  style: d = {},
  svg: f,
  ...u
}) => {
  const { isDark: m } = $(), g = Z(
    () => i ?? m,
    [m, i]
  ), y = {
    small: 16,
    medium: 20,
    large: 24
  }[l], p = j([
    "icon",
    M2,
    n ? [s0, _s] : "",
    g ? z : "",
    l,
    "material-icons-outlined",
    a
  ]), v = {
    fontSize: y,
    fontVariationSettings: "'FILL' 0, ".concat(
      "'wght' 400, ",
      "'GRAD' 0, ",
      "'opsz' 48"
    ),
    ...d
  }, x = f ? /* @__PURE__ */ t.jsx("span", { children: or(f) }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: s });
  return /* @__PURE__ */ t.jsx("span", { className: p, style: v, ...u, role: "img", children: x });
}, Yr = {
  large: 48,
  medium: 24,
  small: 20,
  xSmall: 16
}, g8 = (e) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: Yr[e],
    height: Yr[e],
    viewBox: "0 0 48 48",
    fill: "none",
    "data-testid": "person-icon",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M24 12C26.2 12 28 13.8 28 16C28 18.2 26.2 20 24 20C21.8 20 20 18.2 20 16C20 13.8 21.8 12 24 12ZM24 32C29.4 32 35.6 34.58 36 36H12C12.46 34.56 18.62 32 24 32ZM24 8C19.58 8 16 11.58 16 16C16 20.42 19.58 24 24 24C28.42 24 32 20.42 32 16C32 11.58 28.42 8 24 8ZM24 28C18.66 28 8 30.68 8 36V40H40V36C40 30.68 29.34 28 24 28Z",
        fill: "currentColor"
      }
    )
  }
), m8 = (e) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: Yr[e],
    height: Yr[e],
    viewBox: "0 0 48 48",
    fill: "none",
    "data-testid": "business-icon",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M24 14V6H4V42H44V14H24ZM12 38H8V34H12V38ZM12 30H8V26H12V30ZM12 22H8V18H12V22ZM12 14H8V10H12V14ZM20 38H16V34H20V38ZM20 30H16V26H20V30ZM20 22H16V18H20V22ZM20 14H16V10H20V14ZM40 38H24V34H28V30H24V26H28V22H24V18H40V38ZM36 22H32V26H36V22ZM36 30H32V34H36V30Z",
        fill: "currentColor"
      }
    )
  }
), b1 = () => /* @__PURE__ */ t.jsx("div", { className: "avatar-edit-icon-container", children: /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    "data-testid": "edit-icon",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M11.7167 7.51667L12.4833 8.28333L4.93333 15.8333H4.16667V15.0667L11.7167 7.51667ZM14.7167 2.5C14.5083 2.5 14.2917 2.58333 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C15.1417 2.575 14.9333 2.5 14.7167 2.5ZM11.7167 5.15833L2.5 14.375V17.5H5.625L14.8417 8.28333L11.7167 5.15833Z",
        fill: "currentColor"
      }
    )
  }
) }), w1 = ({
  disabled: e,
  onClickArrow: a
}) => /* @__PURE__ */ t.jsx(
  oe,
  {
    style: { cursor: e ? "default" : "pointer" },
    alt: "dropdown",
    icon: "arrow_drop_down",
    className: "$color-icon-default",
    onClick: e ? void 0 : a
  }
), h8 = (e) => {
  const a = e.trim().toUpperCase();
  if (a.length < 1)
    return "";
  if (a.length < 3 || a.indexOf(" ") === -1)
    return a[0];
  const [n, s] = a.split(" "), [i] = n.split(""), [l] = s.split("");
  return i.concat(l);
}, v8 = (e) => e.replace(/([A-Z])/g, " $1").replace(/^./, (a) => a.toUpperCase()), y8 = {
  large: eo,
  medium: N0,
  small: no,
  xSmall: ao
}, H2 = ({
  className: e,
  disabled: a,
  onClick: n = () => {
    console.info("[Avatar] onClick() default implementation");
  },
  imageUrl: s,
  style: i,
  name: l = "",
  size: d = "large",
  showSkeleton: f = !1,
  avatarStyle: u = "circle",
  type: m = "icon",
  iconType: g = "person",
  showEditIcon: b = !1,
  status: y = "online",
  showStatus: p = !1,
  showArrowIcon: v = !1,
  showTooltip: x = !1,
  onClickArrow: A,
  isDark: S,
  ...k
}) => {
  const { isDark: E } = $(), R = j([
    "avatar",
    a ? s0 : "",
    d,
    u,
    m,
    e ?? "",
    S ?? E ? z : ""
  ]), V = {
    ...i ?? {}
  }, N = x ? `${l} ${p ? `(${v8(y)})` : ""}` : "";
  if (f)
    return /* @__PURE__ */ t.jsxs("div", { className: "avatar-skeleton", "data-testid": "avatar-skeleton", children: [
      /* @__PURE__ */ t.jsx("div", { className: j([`${d}-${u}`, "shimmer"]) }),
      d !== "large" && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: j([`${d}-${u}-arrow`, "shimmer"])
        }
      )
    ] });
  if (m !== "image") {
    const L = m === "text" ? h8(l) : g === "person" ? g8(d) : m8(d);
    return /* @__PURE__ */ t.jsxs("div", { className: "avatar-container", children: [
      /* @__PURE__ */ t.jsx(
        w2,
        {
          direction: "bottom-middle",
          isDark: !!(S ?? E),
          text: N,
          children: /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: j([R, y8[d]]),
              onClick: a ? void 0 : n,
              role: "img",
              style: V,
              children: [
                L,
                d === "large" && b && /* @__PURE__ */ t.jsx(b1, {}),
                d !== "large" && p && /* @__PURE__ */ t.jsx("div", { className: j(["status-indicator", y, d]) })
              ]
            }
          )
        }
      ),
      d !== "large" && v && /* @__PURE__ */ t.jsx(w1, { disabled: a, onClickArrow: A })
    ] });
  }
  return m === "image" && s ? /* @__PURE__ */ t.jsxs("div", { className: "avatar-container", children: [
    /* @__PURE__ */ t.jsx("div", { className: R, onClick: a ? void 0 : n, children: /* @__PURE__ */ t.jsxs(
      w2,
      {
        direction: "bottom-middle",
        isDark: !!(S ?? E),
        text: N,
        children: [
          /* @__PURE__ */ t.jsx(
            "img",
            {
              ...k,
              className: R,
              src: s,
              style: V,
              alt: "Avatar"
            }
          ),
          d === "large" && b && /* @__PURE__ */ t.jsx(b1, {}),
          d !== "large" && p && /* @__PURE__ */ t.jsx("div", { className: j(["status-indicator", y, d]) })
        ]
      }
    ) }),
    d !== "large" && v && /* @__PURE__ */ t.jsx(w1, { disabled: a, onClickArrow: A })
  ] }) : null;
}, C8 = ({
  type: e,
  value: a,
  limitMaxDigits: n,
  isDark: s,
  className: i
}) => {
  const { isDark: l } = $(), d = j([
    "atoms-badge",
    e,
    s ?? l ? z : "",
    i ?? ""
  ]), f = Z(() => e === "added" ? "+" : e === "removed" ? "-" : "", [e]), u = Z(() => {
    if (!n)
      return a;
    const m = 10 ** n;
    return typeof a == "number" && a >= m ? `${m - 1}+` : typeof a == "string" && a.length > n ? `${m - 1}+` : a;
  }, [n, a]);
  return /* @__PURE__ */ t.jsx("div", { className: d, children: /* @__PURE__ */ t.jsxs("span", { className: j(["atoms-badge-value", e]), children: [
    f,
    u
  ] }) });
}, x8 = ({
  className: e,
  fullscreen: a = !1,
  isDark: n,
  speed: s = "medium",
  style: i,
  size: l = { height: "102px", width: "102px" },
  ...d
}) => {
  const { isDark: f } = $(), u = Z(
    () => n ?? f,
    [n, f]
  ), m = j([
    "loading-spinner",
    u ? z : "",
    e ?? ""
  ]), g = {
    // default styles below
    animation: `spin ${S8[s]}s linear infinite`,
    backgroundImage: u ? `url('${b8}')` : `url('${w8}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    overflow: "hidden",
    ...a ? A8 : { height: 102, width: 102 },
    ...l,
    ...i ?? {}
    // apply overrides after default styles
  };
  return /* @__PURE__ */ t.jsx("div", { ...d, className: m, style: g });
}, b8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABmCAYAAADWHY9cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABqpSURBVHgB7V17jFzVef/OOXdmdvblfXj9XNvYXvOwwUAWWtqkBZKoUR5KiCpHVZW0atU6gsQEYkIIBGWrijwM1ME2SRqpVRup+QMiNalo0kdEnUQRRDwU8TAQDNjY3of34d31vmbuPef0+75zzp1ZY6/Xu2N7jeeHh5m599y7d87vfo/zfd85V8AFgLovvLlUCrkuEbAsEma9BlUnjVkOUjQA2HqwgO8gLFghBAhjxZgEGDPW9tHx0pr9WspeIeTrQtme8QfX9sIFAAELELk7XluXFdmrrLCb8evVeJn1fpewli7aSgsShDCC+AD6z9JvwSPoi6B2ll8Afp9Euug7N4Dj1prfglLPmSR6vrBr1euwALFgyKm/6+0rlTU3YP99ELu23hq8OIk3vetgoK+u50lCmCVJm/zhbhuTJvw7cYGnYEmizyRVgsmx7gg63rW1ohv3Py/BPjGxq+M5WCA4r+TU39W7BPTk+6UUH2f1hNIAQT2BleESjQ2fS5Lj2lLHMkVOQgQ39p3PbZkcamGs9QS6P0J/w0kb/bMlybOiBz89NyXU9+Dbl/TAecR5Iaf+zoObpLR/hn/8SrYSBtWTcMSALXWuV0EsMSZ0JnUkN3P2hXgMkmRZkFLVxeRAkCoESgaaKn9ucJJjXSOWND7W84dnldrAk0rBDyd2rn8WzgPOKTmOFPgUdsmVoQNpu/V2w4LBD04i3HZHlldlodNph5OcYHMgkOCIEZ5Yw3/V2yEvMZ5gJia9EcI+J0bCkwTgbwo84Fkk6rvxnnNL0jkhp377wY3oMX0K791NpJI0bmNbYPw7XwiLjussTwgEcsB1uAbweqhE2jRy3MHSOQTUt+VtRSp5rl05IU4amXS+jOlSarzKwzM8O6WT+2DP5d1wDnBWyVm+9UjtZEOyBX/iR8CW7AKRQSoGPCvsWbEq8dITJMmWSQIESQgdzk4zdR7aHXdGZ9xd++AQkJSwc4HAdqTcgmQ4ksrUp7sRhOefpAuvxl2I5DfDdNP1/VjE+juT37vsCJxFnDVy6u84cEUUyduwg9sAygy26zVybdFIG1YdJelhL4vJsV7tlDqN72NPlj2KR/UZY/rwROOozsbBatyrLO8H3WCsbEC+luNBDVaYDSRQXo15tWfT8wU1RhKicEBFlxVUogCvUgFKRLq23cLo7xQfvezf4Syh4uSQtIw3JX+KPf8R1hyhg0NnlxlseIdqozvfSYC7U6kn5VtIxou4+60k0S+MP7KuD+aA3JcObRDFeLkC24nn7sQOv9RCiXi6CrpZ8J6R6TV5Nx6gRIp3JoJ0kar9QVLTtAd2tB2HCqOi5DRsP7JYQfJV/B1LnF03zg4H/W2h9GO9O8wKiYnQ3sjbCWx6AHc8WRPlnup7aNk4nAXUfv7VFSgnnVqqG6WwN5MLXrJLwVEJg1qnGkF4lenUrZNBd/MdKRTNZ6DCaq5i5CzefrAzFvBZvOXr6KyGlDXxYsK4pHw84e1OatANScrLBsxvaqH2ybNFyKnARGWyncbYW5GNFey2s9OWOgLBUWHDOI1IgmASR/HtnsLu9T+HCqEi5DTddeiT+PZJHOqxB4TX7gd/9LlMerxuJ3/ZGWNmZp+A5LFjD3W8BAsAtXe+cZ3RcCte6/Ul+1QegQgQIh1rgRt30VY0ervj3Zfuggpg3uQ0bX/7Fuz7T4ZRu7t4I6xzcYkWaUh5kUEG9q2c96RgH255fOhba16GBYjaL7xxPUrQbXit16cWEkgThBtMpNGJkprzbUDsind3zJugeZHTtP2tW6RSt5DLaq0f15d5NmFwGVxm6dTDgDLwr4MPr34GLgBk79h/C+rgz6FErBTpINWHkco9SWrsyeGIhrWPxHsufQTmgTmT03TX259AqSB1BjaEUQTfQukdxeoNgltq0B0SP8s3rv5RT5eYgAsJd/c31BSGt+Gv+wv66sZStkzdBZtU5tHxuAoJ2r3h2zBHzImcpruPfByMviW4wBQKtm5UbiENSho/JqExix3ANv849PCafXABI7/tzd8zQn8TP7aHiEJqg0qDWPCutldx8O25EnTG5BAx0upPlLwtP3IvjeT92M34u0q8GhcK3x/bvaEf3gXI33lopdFT38Xfe0VpnOQ90ZQYAEjjhYydcyHojMhp++KBa3UkP1caUJa5x16kbdkYAYcH/33s4VX/Bu9C5Lb97na8Hb/AIR3nsIl03OMgygKrxNXfJLs3/A+cAWZNTsNXDreiIb8fDUodHWfooqQAl92iizKpBPEBEn48vGP1j+FdjNy2/bfjD77DQokE4R0Gvm1d8km4kBwcj4X4E9i94fBszy9n02j51mdrs9psF9rWgrd8lPVVwg00wfiQJKpgimCpi4AYQsG5y7u8+haBGNpnAjG+LX5rjIz9EWx7vXG2558VOYXmZR9DCW3l9KTLp/DNYvndZV1ImCSOaDAY+JPBi4CYgALbEsEus09FTBucptF4p/hWRcZsn+25T0tOy10H/gAl4/3BW6Tup5GkI8SDk5HWEfPw2ouGmAAy9piOeIQ9VevsLkWvpgVOGRz2+dvotlf+cDbnnZGc9jtHWoSUH6XBMEeSgCUlPcgnCjkJgBL1k8GH1v4ELlLEey7biaPsfyYHSfokoQ9h+bBVmTcn5COzUW8zkjOZGf8odnsL2DIpwb+qXXbLqpAA0ObQwI7V/wEXOYq7NnRhxzxtfG+xzxSCvpwU9HeyEKje9JdOd75TkkNSg6e/gVtI/kPWSZD0ET5ODJI0DcRZ9ShUwcho+UXUMkeki8kLI1x+j+2zEG5wyh6u3Brdvn9G9XZKciayo59xhh+YBM688GcOylgOyuB+peS/HP9G+yBUwZj8TschFJA70pS65fS4y+aVjwct390zSs9JyWm851AHnqjDJcwwRuEqwCyEYjKXhUGX2T458I3230EV05A8uuEpdKL+yRecuGLGNFoQ7A/bpfdFn3/1vac6z0nJyWj4MO/0Y39f6mchkGR5HDwQHet/Aqo4KZI48xAyQJlR33OhXlWEgapL0ll596nO8Q5y2lBqcOsGIsV4R4DfKQ3jaPE3gP7Pnu9fd2FFl88lvr9+xAp1P4TADjm0NoR00hpuqu9B6dl/Uul5Bzk6kTcyFSIEXGlkCdNUGp7ytaEda5+GKmaE3tPxM7zFnwoxNguh2CVN37nybavvOdnx08hpv/NQi1D2KnIujAsMmbJBTcnuWPgZVDE7CNgB08Y7/t0NUKUvGX4fbH1p9YmHTiNnKrIfkq5+la2W++eUmatyMkTM/v4HF+aUiYWIZM/lv8be/LVzCNJovihLGvN2GWX+/MRjp5GD0YD1Lg7jVJoMDgbny2jIi59j+ClUcUYQwuxwxY4uze1UnM8FhZewt554XErOkq/2ETHN7jhfl4lSJ10WyUmTlYP9O1fthyrOCCw9AL+GNGrtAqIunc+5YooiNMFtr72v/LiUHJsk14Fr5aLOEOYfAQc6uYzLmv+CKuYEvLd/Cmnex1W0hrFPqI/BocvHyo8pqTVr15PPzFFnNjEGSm6z4UFnHENVauYIE2d+iN05CiFC7VMJ7ARbToNRRPvT5ccwOYvvfnsFqr0mKUo2JiWJa8qF1QAvjO5cNQRVzA047kH99SJXjYaacSdJpbIqYZvg1lc3h0Pc0EXUrHPBTe+ZhVyN8NEgHoyaBVn8d0HByh+mxVNQehfpVEh2wv4oNPfjyuI6Hngq6ZI1IdxJxBgX8EygsarS5gkc4D9hQxnZtIJE5xy7SUownRwMa6/jQLZhN8Al1oSrBzDsVtvukW82HYMq5gdUbdj7L5ai09zTkicW2TB1yf5xaC5X33OwGZvk+JvgYkYTLBUaGqLWgKo6ApWCFvZXvoQKCYEsRmJq8JVDTziP7GRxTwt8bt8aaisLUa4JfKjGV2xyMrrc3mDW7i2ooiJQWrxojaGwTRa7VpXvo+9IQkbZDDsFkdV6hdtlfFDTVzfzzEA3YEqErXppFYJW+pcoPhEIOFXNoNQ6XscfJGQWgQhBTekynj5nY9ysQDPw9fO7WMK7Co9uPAinq3oS4hp6k9rGyzjO7N1oQykCDnQ6Lw29hXMyrfuigrBvz9zAUBjNMyjK0gGSxQk4j0P/l2YKqqgsrJjZhgvBDkGEdr/Judw+423TAajbrEXVha447MGZy9QxCApEDsga60tq/QpL1hXD+bhaZCahikpjeObdNpCDPrZ3mUPRtTFu4Qr6LG1UJafisMOzkhznoREMqzFeIIFXocEtmsI2VZwvRMakpbacw+HaUbe8CG+PoEpPxWHEMKjTN5OhsiZ4Z35ielpxAyKyUEVlIcVvT9PiF9wMJWWKuPDzO12FGlXy+vJboWQOqqgsvnc5dr79wSn3x/m/ojeJ/01IXzAoeD60+8wBUKry1UkNVFFpiC03X/HXKA4nLCQhDiALH4D2NRRFoFV9bYGKQpVyC2mS0yaETQsIpRSLoIrK4jEQj+/bK25a0rsdhWMx6q8Pgo46t9x8WcdNyy775ZaNzpWLMOszjGQs9TnQEPdMk24oQbOew1jFLLEPRGd3g4AVnbZzM1BdwS8besAyYXBT2kxKheGZYG3Cu3TxNcdPlZxKYyO8LKGzE45i/0/2vMxSsrcbCVt+k9hLXx537aSJTR8FO1M15ufekCTRDFzKhjZ/+Y2qaqsUuqwsDubEkkKITG+C55CgjStATPaA2IicbHrM561VLfrcnJ8maXHEMEHe7lBoJwvZ1VBFZfAyiKQ1Eq8MHRD7BveLJXBAdiBZtGtNi7M1X/NjTJmbrO0jBgyGA6RfR9utUSVpXS4mKMrk26CKiqDzgyQxl8Dyxkjc9J4OdM8ugaS1A0kCSYQVW0rLzMs3v9UygvpsirPaNBWXIzjGzQOlMBu6c5iZWwVVVASDPaCWN4I4BO1QOFYKsBUaD5eCbb5+0GVuJByUPI1A2jSXE6LTrgpnSccuWx2MzhtWFrBzD4yCWFoHojjaLVqhWyaerGQkEtllpZnrzijFyaEQrik5B9KGiAEtzjXW39sBVcwLnVtBNUO/NGN9IkaCumEFxHVKLMXPmghb1C6W7IOQHPCVhk3NB0mXsSNAHzjWRsrNzWpTuF1pdCuqmBf6Lj8c0XtHm5JJLQgiqqVWisNIVlsdcD3A3q+BDu2ZnN57G/qtMAUTKnBsWoILRIzR2mowbVXVNg+gC10X10Q63yYG6Hs/gM4LcRTfW9cuFUltv1gB3am9IaRVIFEkX1JhEQj/YmLIpVa0MITIjnR3b4Qq5gTsuKjeKtmURxU2IUXRDmHfLwYiS48NCOhvg5GWFbr8mNL8HG32p7Ol/cuQCQrLdaGKi1S0DqqYE9BFrqFijP6JY2IRSgy0toCeGBLuJQUt43jtr6Ynz1Jyuh9YeQgNzpTz1oxfK52bGPat3TM62tvvG1gJVZwROrc+m8mPj6jGXLMwOGghkgySZJCkRf5FBv3xx8XJJYeA7trzxpYKDMNE3WCHSM1po38fqjgjvLV8bV4XhNBTI6IhJ5igRhpZQjMQUfQqNII+8bhp5DREGbd6bdkCEWHtG14okma4SbOi/b5DVemZJTq32sySXCZDoWeNxNCLCBqGJtRTw0wUkfShUSiceOw0cvb/XSueA8dDPkLNS9yKsmprskNWofRkr4cqZoVj66CW3uuzQtQTEdjDGJIBkyMpamKiaqb6dVdXuuJkinfU7CpQTxMhIqg0IkR4B4HTCJpy2CvWfLV3LVQxIy7peqtGmt5sgj1miiBIegySVItxGENqrjCK9/8iWHJj20mrat9BzuEHFh9B0TiS2h1wE6rSJVeUW7VQC/Pejm2vV8c9pwLGjuNsa11tpj6NmZks5v6LfkkvJKd+MRJVN6T33ixOWuJ00mp3JbO/AbJPIQHnSfGh0PC3GyYaGzuhipOio2uoodlKjghYJIQkxhSFfwexrBXHO5jmzF/VcsrFnU5KDkuPkIeh3IFwT4FyUxKtK6XCz1etubd/OVQxDRu7bHZR1tSZDOZuyIXKTAhbnF7iyY+pakjiU0kN4ZTzRJQtPkNRauUJKSfFuddO5cUKbmzrOloPVTg8ZlWhbqxpMpO3+Rh7bYIEow7yGVRhSBa9SHrqUIrW/bx5bKZTnZKcww+sOhJB8kJCMQIL06fABzebHn1rdUPWiBuhCkbH/rGWaFxGOZQYosUiKfkYCYknWK0dL04wQdlCfeHEQeeJmHGGVXZ04hmlUAJD9Wdobchz07RQET0f0IpEL195X+8NcJGj42uDjdKorI2EGI8nhYkmUJXV8j+orQX3rLM6mBq3ZvU+OO2jz2YkZ//uDQUxVfi/dAPF3AyvHmUzUpW2SaoMhU0ru45eAxcp1n15aFFNJr+I7IzbwoyAiTDoheqNXjUwKS1KUOvIyPjppIYgT9fg0I7V3VkLL1JNAfkHQiq/tKRm+8OzRcgukaudwLVt9158BOF4pgnysIjmytSQCsu4lyOFJMipNSIralETT+1cNatpNaclh1CXWfKssHrMKOUL3FUa3lF+umJIzNUouGbl/X1Xw0WCa3baJhE1LcqhKssRCdGUqEFC6JVFSanJOIIgX4sDfGte39Yy6+eJzoqcfV2iWBurJzBSXXTpBG2le1yxcxRM6UQ0pQQV3tXtXUOb4V0OImZybKQ5p1BKFM0KLMgpHOtPJKGAJg8T+CKJQa1iF//vM4OiLJl2OsyKHMJrO9qOZ032FxDUmIBpD5sIMTh68YPBTXx1+71971qCLv/KaGsyNtLKNsWTUdBgSYLo8ySTQmoO1Rq+mgaGhvfuvfmMJjsJOEOsuffIe4zKXOOmV5WeBsJqDWlR7qyUYLDog1uVSY5NjYlfnOsHs541YG7m0tUblxhb5NkXIvIFgCgZAh3ogp6yNbw9Z3l2zRQl2pqH99/OobUzwhmTQ1hz/9Fr8Ra4WrrVqzmeo3nSr2LpSQOklP9xj2Uay0b66Te6lh2FCxjt/2DzdeMjyyRRAo6YYmJtHokoJoWSFsHOYNKQpUJih9+8h2oDzxxzIodwCbrNWsM1HASlZxrw2ciT02C0pDJrWvfYMFneNqHH/dri9raXnvusiOFCQpeVV2aOtsUm3xST6lLWFjD9UsPSgZKBBJG0xJDDG7XAqzwVI2uLwh6bKzGEOZNDIILQAbgaJJVUgSPGZ0x9/bU1MW5XFERVXH+NFmvM6OilngeaD8IFAIyT1RdgdJlUcUZC1mC4ymaL2Pm0CBcRlXPksKRQxaAiwpA6bY8d6Goens/fnhc5hLXoNmuhNmtSY7ygnnLrT6GYEDGKREdS/Yhb1yBiSeNVQ48mSbKv9xvLF+QjKpfe1VtXUwNLMtlMrRBZlggih/bhgNut/Kj9Y4VZvWHAJpri74UROPZ2Bdanmzc5hLXoNsc63uwe3eqkRngHgSSGCKKIj+Y1rJR/hLVmEpkkVfNKT1fjACwALH3Q1jUmI0tVbOoSyBiIAhEF/07RkKwL+uI9RiosOAWE0aOjQ4crtBZqRcghrL/vyKoplbkhkiKDtshJCHlvUrHURILetfPkcJswCZIWgY4TJ2UGxjEo9UqhtWXg8BfFOV2YYsuWx9Svrv1wS11xcpGRmTpaoU7UZG08VcRQVcZmoQhFVNs1eU9K0Tr1BiXpIaJqR6Z6X6igV1oxcgh012XHBz6AglMXpMY/nMSvp+OIgUTzQ7IcccCxOnonCaNpJ+gJdhsre8XoxODhWYY6zhRbtlj1YsfxpmKtbbFS5xXqZlJXGaArd4uZkPGXJD1IDtvUrPfEUHKcY+B+l81MxMuvW3poptzMXFBRcggbu17KjsPSK43Wl4KPufm/VEaMsvyIBQIqO/JLi6CcZ8eRIOUGuSiCSOFwzpohE+UGRyamJgdwMAxzAJUSjw91NzTFoi6WuXqTsbUCInIpLd33ICMK3rKRj9HYZ3FTTAFd3J9FxmKBJBWLbjVOr9aorVZi6NPF+sGTFWjMFxUnJ2DN3/euRX9zk5WyTrAHpyz+XpNW8hA55VIDbiCr8L7V3Ck0ZtLcTgvsOIs5RavcQ3xNNKLQR0qyYkJBJtGFyYQGfYI8QxyYR4lQ2GlKaJ1DgnMiI7PU+RAnoDOOELohElN0kkHiEmPEkvbpDJMV++g7RjCRHPyu3fVCNsv2x0JUXKTHe57rWnnWniF01sghkMdTW283aa0uccsgExlBYoLtQXIi7G7g7iI6mIDIRxl0eozmcRSaLSZYuIeboF1ThpaAQflj28Wf2VuM+Nycc/IdDWzMaV1ZUlUxZLBNYjjd4a6JVRZYFG6bVd6WsPpyhJFKK0bkbeYG/zKu6z8b0lKOs0pOwOYHe+tGR9V12EOLIS0HVsZ1HHUwkuEliaWGBrPs2SW0HKbrcI0kKKbI0KDXDdFdCVci3HchaclSEkDrbQd9jlzHogSg92FJciITixMJovaJtzWsymoyNkGHgFQbG37Fi9pjpKPQ/8KXzk0o6pyQE9Dx9Z42XVRXoKO2mBN0PjfE0hFWFJNO5eggWX47u+MJsDueUyFcFNHqysbZtQSYPB0ZZ88SPFXkzuklhyQioyInRUkMCV2Db8PSE8Yt3vbwZ3L3c3IsH031nStSAs4pOQEdX+lpS7LZ9eiaLQO/apVQblwkSJWF2mzwDgLLgHcSpHsqtr96Jzm+85lUCOQASoWzZ/SdpCGQ4yTFkYOpSv6sMxlHpFdt9BFpP57Vxb59XUvG4DzgvJAT0Nl1pHYAspdjTKEFezfPHU3dG+yN8ESY8OhLVPuaxrnKOvsUsb3hOgbpCNXe2JNNSk60Od4OESkZLzlhG6s1VqtW16jkqIgXD1IeC84jzis55bi068jiImTasbdalLD5ac4Au9UJRrkjLzkq3aaVcwiYWOntE9mzQAyB7A6SUXIKvB3ydsdkVGLHzEDUaIZf+/LcXPWzgQVDTjmoimVMyJasTFpRTpolegjClMqygsfn7EUCYaCbeClw6s0bdyJGxpabeXJMBq2XzY5gIHB0anHd8Z7PigX5SM0FSc6JoDxK4+jh/GRU35DDsG+cmAa64xMjc5g3ooiR0jZxKopCQYlJcEMskQTMKU2ZKBOjhI3VThwrFlvaxzHxVYALAP8PJyB8DOeF/lIAAAAASUVORK5CYII=", w8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABmCAYAAADWHY9cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABnSSURBVHgB7V17sF1Vef+ttfd53Jd5Xggxog1RKwGBBipVBPIAClKF6VyGhCSi09JRp62t005nWqfxv47TGQVbrcxoNZDoEGcUikAeEKA+6AiOAxirZhQMr5CEJPd9ztl7Lb/HWuecG3Jvbm5Okpvk/JJz9mvtffdZv/091re+tbbBqYCV285GAQuRm3kwOI/2dMH7c2BND7zrhqeloX+0QgtD34Pw4M9uOd/7nSj412j717Dpq/jG0tdwCsBgOmLV1oVIkwvh3HvpBi+iyu32fKuG6t47LmERt4kQCCOg/7ROh/iIrvNHC8p1+SKGy9sBOP8zJHgGWeGn2HjVrzENMX3IWbP5Avj0cqq8FVSJ3brT2FDB/PQzFcxBuGdvlRNIpfNOb7xVcrz14QJSRgilVT7kmBzmjbasXJfPeQUOP6UyD2LjsmcwTXByyVmz+SzkWAZrP0y30q0POVWeVjZXnTzsJC1MBFc+H4OSxgstoxLBcsSS5U0kBlG8TJAk4YhJtVRMJS6UZAYj8a/S9Z6BKf4X7r3yVZxEnBxyVj62GDa/1Vhzged78EE6aAfqlahPvchDo4xRVWZEknSdC3nmzIafZKKUAUHSWHLo2ixR9TIN6QKgEqc2Sx4PPtF65x9D4jfinmufxknAiSVn5SNESnoL/dkLtAoaTy6kPuXpBeqV6I3a+PDPB5vCqsiqptMy4Xhz+fpva5I2qX85ausEaxnLT4APZCu5BuEafKdEjvvKiSbpxJBz27bz6QffQt7VYnpoLRn6YNzVKHi5EcO1TvUONCrbNIy66jc+XVUUr5qgikw8DrUlQV2ZIDlCejOB+tOtltFrKX9hXyjrG/UTrmGeRu7+Gd++9hWcABxfcu54oBNDnX30024wjSeffrSDqashFgRvxnhfTRVp5H88Vw2LR1BbIiWknlz9SlYOiU8AhMpt2CXx7KyQKts++HrNKtIHh0EMk1xDHAx5FIK6pe/voTLyZWz6s5dxHHH8yFmz9T109U9S26SX6DDOB4MN/sFaScFAB7sh+y2CJMi2CzYmGu+G3XmdPrupwG7rzRBdZgjW0fXIjLBpcY7aPdT2AbWFYHropHf6unQFInyQhiZXW6SIbsw3KieoRy5nEe9D7s17kh7/ZWy49rs4Tmg9OSwtI11/Tnd/Q3S3nFFbQZUZGomBHB/sganbBzXMbFNUcnjnb2nPc8TTb8mzexbfWrEbU8HtT7wT1YzJWoLELaFLvwto8tKCtKFJouVYECgTvcBgz5QgkfT1GCj/Bx64YgAtRmvJuWP7XAzn/0L64CwXvJ/wV+hxNCQ9LrRHRBrIQFOZ6JmRu6zPrh+mrReQs6fkfox7rhvC8cCtW+ZT1GAJkFxFpCxFXUpgoh1stJ/YTvroK0pbSUybCZJn8DJtrMH65S1Vc60j56Obl9jM/hVVeBdvMhH8EKpBMNZFT5UJkgcRqLdOiCj6mT+n8v8HZI8dN0LGgxCVkDT5T9DW/KDOor+iks4/x4T2VpONAuqORz+p1n/C+mu2oUVoDTm3PXoz0XFz9HbQ3MCLLfpgM9ifdXVXWVymHc7k9xEhz2M6YM2WS+keP0GCcpnKuDxIwShp28gE+1NvfwX50qiS/xLuWXEXWoBjJ2fltptsgptdjHfFRgXdNKs2a714PU7UgbQFSZjoSGKJFLMJ31z2c0xH3LbtMmvNJ53zlzUatOJaqnMQfhcQvcpAJXhp78I9y46ZoGMjZ+Xmm5AkN0H0lhcCWBM7vXLdy1IxseIYkH7b6+C+iQ0rfoJTAau33UQkfIpq/61ewnkhxlcnpt4WQ7M6pMWduHfFnTgGTJ2cVVs/QvV9c7wOtx6c1ygik8Ni5FiNWW1zShsE/mF0zvoO7r50GKcSPv6DHlSH/5p+1VreVBsTJAZ1vwEhvBHj5OzS34kN13wRU8TUyFn9GAUq85vCvcEGsXcS4grusAkhe3raSP5JWvBVkpYdOJWx9tE/Jm3wb6QaFgQ/1MYKjGRBQwsxwsC7vogNy6dE0NGTw8R49xE92zSClsH30jsWKQqOgPl/jFbuxqYb9uB0wNpH30qu6Feo1t8TnJ1GDC9GmBCkJx7z/gtTkaCjI2ft1kuoIf4pUVvcuKy7x83eWf2GWLQ3k97dgNMRq7b9DSmIvw2NaEbw7AJJojV88CVYpdi/IAnachR/4SjIWbttDjLzWWKli9WYa8Q4TCTINl2TnIPvETHfw+mMNUSQx6eNj8HbEByKWsSFKKC6eQPUmXgtNix9abKXt5MqxSGZHJ8hf6uTNyMxti4tGnl0Ghtkqk5/YhjcnvH+rhjW8U0ut4/E6DH+egs1sL+D2x56y2QvPzlyhjtuJCLmcGM5drTEv6//xPV3Gm/P78/PBGIixJaYOyMrMfpuTBSgeiyOZeptQPqZyV76yOSs3PYnVPnLAE2toA/FfjXeUi/DgsvtHOfux73XnTnERJA3RtVxp4+RD+nWUCUXu8x9cN0oiPKXWP3o+ydz2YnJ6fvRbLIxH2LrLm0Y+evaIUwNSTokfEkDhv78/dh4zf04U3HPNV9AYr/e6Ikd00mofUga+Nb2zyTU28TkFEY+RJeazREXjiBz7I9C9xR9IU+fHw4rMSb223bh3msfwJmO9cvX0fP71JgME6thLa+BkujXkXor/MORLjc+OSw1xl3Oq2LuxcJ4/QRnWdat2euM/U+0ocjyvycZeTl0YJnQsxj9aRP6zdkk3XEk9TY+OR3Da6yaOCEhdrhbSQpTDeq08/cbWL9iH9pQfPu6XVQnnw6hN4nEefWfbExV0TQJiaBMKD2HJ2f19kVk4BeFxqZ6ZoEocQpYzQlB1CG2fsWv0MZYrF/xY3qAv6Y+gB/TgVfPRNX46RW4bcsHxrvM4cnx2fVykNst7D5bqySxQ+DrkrQXnSMPoo3DwlXx78TAyya60dr9E/rDbeiEF433j+Nd483krH5kERn6d3KPjBPngvwyn4u2tI3EJVZp38fdHz61ossnEpuuOUiP8GdVrUl3jzgEGt5pytnzIOl57LDS82ZyTHoVscEus1erQiE0r0RpPw0dc/glNb6eQhsTY8Pyh8lt/nGjvyf2BTWnf7HrQN3bh8FYcvoemU0nXWhNveUvfDhigzrTvGQNsUTBPYw2Jonk8zFKwKTUkxs1JcyGHLor0Lf13EPPHEtOqXCd5MHQVVxI4Lfa+hepYYJc7ndi47XTcsjEtMSGZT8kTn6oxsCEfq5oe0LiKu8vYtWhp44lx7nzxOizhGjKbFBlNuRH8hnJQ2jjKGE+rx0KoYkDdQZUvfkYi/vEoWc1yPnoo+eRmMySUA2kt1xVG9sYExqfFvtw79KdaOPoQNJD9fhDH1y2mBOnuVciRJzVMxMrt17RfFqDnMxfGsciMSlOE4/V7pBDILkAJnsEbUwN3rPGib2mYxukPngMCW5sPqVBDo+1lI4aE9PCpa9IwtAILnQBbamZKirYSAqoHyFJR0dHiIZjDqy62nZ18ylKzq1b5tPRmSo5Tt3l0AttEw3Z0N5n8bU/fQNtTA3c7jH2ORPaO3Vbg7o15y5TUm3b3htPUXIKZqETK+W8hmvYEQgOgVfvjcRoeib/nVKwG2XhG/kWoqtMkwaz+GBjVQsvFC/NhoT7ejyNJchpn5EvtVXasaIze9CHrLbY52MaoylEtREhY8mhr4WsyiT5L3hoYQRgCHj6V7Dxg/vRxrHh7msOkpw8B8S0KUn+4CTZJOZSEQVXxuIWqx6cRVHmkmxJ7Mw4yXGO7rM4CKYtNa3D/4YU3oTWi1TBZarlEtV9By2L1CU3G6u+/3YuaJH0zJTQjLjMUFvjeQAHR9RYwXFyQPZbtNEaOPMcD8Gj+i6CnedmGCQkDwUkXeIUpHCV+S7Ml6Aus65LwoYNQzZMqe2ltQ5PUi2nTUmYh4CqPK8u5DWq+3SG2Bbt5tYezjiclaRJwmonebKE0wobl7+IOPBiPBh7MS/YGZtXty9ic3i6DA10SqeawQkZ1n1GweB3Exfws/ibGMwlE01GA3HPjaQ9SVaNU1WHUbTRakxsw40Rh4BsDrVKU2iKE8HlElOTgVCSwAHfdqFbjxcnPMrRGjA5iS2HdCf2y0ywPzKdhva0mRG00WocmPCoUXK4x6fkYrqTD01V4qeeB21cm5yWwx84QoEgOV5n+XEaRqjnP4vt8Y3tNk48UoSZAlhynE5moX0GkhdtJCe6jRbDk1qbxMgoa31zmKYeCeX2qEajTdKWnlbDpD+buIB/gr9Zo42GVFt1BnzID9F9PCVcCW20Fvde/YTMmTMeysWP8YJsfzLsTBgIpcNKfOg+kMYo8ryMNlqMzxlU9n+c6nrsRBI8548xy7HgSnG1KeaZVTSJI/SC+hgh0GFSdIEZaKO16DvfYE+vwa7kMyQec0k0VoBnsxpdtujq8+yT+PkmHZVOMiJunXOSLyCBTyeT03CWJ/eA2kmPYWxjkmBiBn4lBCwpz+xH1+wnscg+e/Wez5nHpUCffFOXAdscq3E1ibHlkj/g4rAPizY5Lcb5vXvskiVLgN5e+8z+36h9/59fmcffdaPB47yxSXZReLq220HjaNJ/k1jdkJ4c8uBIfNC3ta3aWoZ1tjrYbQ6WZtQj0+f/gAha+AEDJooIw+K+EAxI0wM8WY0QoTNgy/yzkrMW8kRQxLloozUge5Od3WF2DrxkFg3+zryjq9fueHs3Sc8OLJrXrVL0rzFSM+J3uzCiwIm98eK5OU6N8jEF1/aijdbgNwvtC7RYMKtkdhJJvA5agkjaOUBLIiw2UC3nU9FiVD22XBqjpOskfKNuQs5pUW9DG63BhQMJhkoGPI8HLwnv4K+hPQYvxEJhEIFu5C+yZ+B87M9Rh4BDOVZf4XAWrn+o3Rg9Zqyz2DtA2mqveWlW0fASxQH7gpC0AAt6iaDucxvxTfnOscsFb835mI6rHpwLs3XgrPIitHFsWHJj0tvRY1ElMkb2mXN43witE1HnCGFlg8V76sFMJaej/KKMYJPe0DBMV4YbGqd9PSQ9ORajjWPDwmrK85rNXdBFQbOiebVj1Pb2kAS9sM84skF4ZT45A1fnsbiS899X7iEXoMIugQyaYjvDEWomKklDz07W21ZtxwJSaZU9KXoKpML2QTysSsnsYbYWFc1uJmn+K6iP9EDzKIPEPG9lUG7IwglLGwZTWc6zmlE4H21MDX3npyh12tmV1OytFMye4ggFbuaAyZr7Uj+Fc6hMKc2bT2mQU813igsdBktZnezZsUFy/KFAKNJkIdqYGornSgDZVwcMqiw9szG7QqTQZ69IE+G167PmUxrk8MwTljNtknr3mkwIIaOpo5PgFsg0im0cHe74agG+lqArNftrqRJBJL3BJHUVAlmETWYcyWHk/qfSVe2gXlqYiComGcpYUe/ehzaODkNdHagNmRlVIqYzNTOJJCZKjtVzm/bkh552SOZhz444UFeHL7o4l5qXfGpHQdEc89vScxRgqUnmFXj1YMeQAX0OEEmSwcFSVBtUkhbvqBx66lhyNlzeT2Tskq6DkI6rE0YEFSezehif1LLL0MYksVCm3uzpSE0PkfGWfkgHma+SJHWyJM01vSBHYN26NyVrvDln19qnRJ25OFOUDb2k7LHlMpgqt8l8rNn8B2hjYty+vYz9tWL3SNUO1IYNv8OlP0uNSyvWE1GeVB0XI3f6sFm1byaHXzPi+ZUjVoaByL7Y9pFMHau9ps58ANff1W73jAce8+nyru5yYgZlRw+pscT00LYczoYpKEaSYwo5Hl+aHe4Sh892T/lVKdDBVD6MpI4pVHJA7FIP5rx7Cdo4PFZv6KGulnSQX3maESHZiHwGeMlS1DvL4A3a//L7xp3c6fDkyEt6/EtvSlnTIKhm6EgqVXIhVj95DtoYi777ip1mbpeQklQtWFpEYsK7aVmKSMelWU8Nj5tsvMuMP07Emp/IxKpJzMrxQbUZF0aSqspz1avQt70bbSj67ktQnjFzuFLynVnFYCgIRhYIoo+ndVZ3+/GbwYkuNT45JD3Ub/Ascm6E5jIEUV59w8fkHT/slktQtAel7Cq0oeieN7uzZjiGZofRic4SqzT+VIJqIxtUHjGD1cEKNt2ST3SpiUdYHaj9JEntgLrQodua4Xx9um+d4sCfg9u2Xo4zHTwd8WCtOFyMZIwaJgj8orQu8ahlFVnRoTp4xFefTUzOwzdU8kpte306/NAYTYisRLtKKV4q6VNeXtC6avvFOFPRd98MFBP6WNMRxmUwHZ3F0UBUxXQmmR2S9dLQkaSGYY9UQN8mmzwXJ8YzMse0BHd8QvvyPBLEkpVdgr4tZx5BN313ZhmzZmCEYpt51YwQQdQYNJ4kaHiAybDyEeszjxab3j+pYTVHJodROftpUl+DnCCaG52GVcjggdph9kLw5JK8LOBirH7kIpwpuH37zLItzkCBCChUTZmXRBCK9CFJQbHbdBBJotTy1OGu6yf9PtHJkbPpgiqKgw8SE1WWktwoMbnTrm3uVKiPqJeGa3JR8wQ7py2YmLw6a5Qc51GWFiKDm/plkhqQbIygKc28SnGWV5N9zZ1pR8LkyGF8/SMDJC1PsBpjG5OHOT/rHQxsi0JRWRp3ehO0dtuckndzRomIMkkM7ypXi57VmcZiyswOWIJG8ooZTvoPjBcJGA+TGMJzCFY/8kdkbS5mAvLYa8qMcWdcDCG4kN7L/xK3X8abnOgXsx4vcJR5dNFZqASxSMLbhGq07Cr6MknIaPN+xsyeA/jS5f04Shw9OYy1Wy8hA3dRYmFyTtBJ5F5ImqzaoSBFTB7PF5KbZBCm9hQR9DpOZfT9qAPlgXn0w1Lw5CgZEcCkdBZ8OVMyRK3RvlFLUtRBG8mMA7j70oOYAqZGDuN2cpurtYsRp86X1F1tnCa5OA48FZITf1EmdM08xex+ifKs5+lmaziVsG6dxS8v6eV5goSMpOB56kHYsKRtjgBTuNmNEj0iUknRjxZ79k+VGMbUyWHcvuXixNmL8qjGGM43ZtJlm+QzLwS5mDTiB2n9eZ1m5BTAJ5/vRv9L8+hRK5R84picCjNBklKiRl8FJVEbJd7P5YmUMhE0mhT34xtLjzRqekIcGzmM1Y9dRBX+3oTtjrHBi1NbpMQkGt12DcJkO8tfR5btmLavqFyzmRvzZyHznUgT9XqIHOalQqTIMqiyEklQpZkgVPZj443HPLnGsZPDWEteWQ7xzChwIZKSkJDnrOLYs2MDRO0gsUtNNknc8My8Tk/lL/CtpXsxHcCk5PZsqpmuIt0xj/3j3dXM+2KRl6rWpCPLZUoakxPPr1TewKbWzIXaGnIYt25+W1JIL8+p9wgur9sftTdBkmSeHXYQVHqEIKeJJHQjQ1le+gXywt7JtqBbBo4kU8CS+llmoEak2NSjRPYkH/XVrODrxp9IKKKKalBvCOqNL1HKE1cpZq+10ittHTkMeuoSX1iew3cxEdoWShr2yGhcTgLaRo/FhqxIFc/BozbrFbjCa6iW9h03opiQjtkzqXJnk1R3oEDPCpFSIHZqzjrmo5rzzGhERLUKPibnWVbJqS+RG1oJUlX2hdrorit3TdQ3MxW0lhwGdTShNOeCxGXvyoUYlRh2GiS6EKVJ5jfIg4pLeOoD9ew4DGS9lOXNvJocIIf9DVQ79yH3I3jgikmHP8aAU4lndvSgMtyFUtJdsGlnLfwtJoRC+b7G60RCLXd1IoosGazPXO5IZiiuWRBywBLEXlth9A28/fp9WGdaPptG68mJ4AQQx8nvSZdKCTsITABTkTecBiYstosSskt8rtMQkbaV2JlI4qSwWgG5OQhby5BQl0nuaUkfVjPcthDQZSp0eloo0bFS6l3RWKp8ZEp+lGR+8n0w9kRQQV53ohIiBLGUBOkAqbditD+8v2qrmDH06vF8h9DxI4dBaq6Qp4tr1r1DSWh2uWNONpNgVWrA9azrGsNLNMBK66zxMl5mxmVJ3hSFsMEo+/q1U1JHmVVCUzo/k74o2s5DZbtACO/j83I9r0DHahlvMzGpL3K2GR2r8joCKSRJXQ77ht69fM/xkJZmHF9yIoikFIVLqbrnxk4MISHaGt4hqkzJyKMTkRBZJDWq7pxLE37lgubS6d03Kj1NxTZz35JL6Vqs/EliXBamh5F9uZJZSIypORnrooTQ/kKBlBs9PqSt5F4KZVJvI0F6CCw1tlYcHC1U95yoUNSJISfiY0/2ojLyHpKUuVHVyX5xsUmlUY3mViPeSXAmciaFy3Dl17gNTpGGJFEi6LgQIE+0lhlLjnUZHwgkFoiEWpAouhjPQeMLTZJXq6uwYHuYqTzVhnPidp/o+OCJJSei76FeFAvnUfh8nkhBiro6i56bEMPbgZwsqDchNJJRl5ya2iUqmBI5mW2SrOgxsjTkWr6WN46L5MjfSRxrsVqm0iLrhWQAw3Y3Ni0dxEnAySEn4o6nOzF88A9Ta2dn3nU0AqZaoUwSdX/4SEzKLzZhm1NQG4QgGWlQh6LCuOKDrVAb0yCHPI66jZHk5Sa1WGOPTUgt0jNRfR2VfnLjb6niJOLkktOMldvnolRbQBVI7Q4iKlR4aoJBpyrTdduoaCamSS1lQSJSUpEQp4C30zDTfIao2kR6uGCwO9Tiz1Ad3YvO0QPSbzVNMH3IaQZnsRQMNw7nUOXPynySiNdVjzioKmTJSanSMyKqbvDj/HA+VHyRjuUNcozYHb5U6SB8qR896QBFjqflKzWnJzmH4u+oH6W/n3pHCj2oFUvUN0RLVkMokQeXMnkqZdFdppAqaypuA1HXWGk0r1W6Zg9SgKiKwQNDnFWEUwC/B+kApvqJ6WQKAAAAAElFTkSuQmCC", A8 = {
  alignItems: "center",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  width: "100vh"
  // !! must match height to keep stationary visual effect functional
}, S8 = {
  fast: 0.5,
  medium: 1.5,
  slow: 3
}, Le = ({
  children: e,
  className: a,
  iconTrailing: n,
  iconLeading: s,
  isDark: i,
  text: l,
  size: d = "large",
  style: f = {},
  disabled: u = !1,
  variant: m = "primary",
  isLoading: g = !1,
  ...b
}) => {
  const { isDark: y } = $(), v = {
    primary: "$color-button-primary",
    secondary: "$color-button-secondary",
    auxiliary: "$color-button-auxiliary",
    tertiary: "$color-button-tertiary",
    danger: "$color-button-danger",
    primaryInverse: "$color-button-primary-inverse",
    secondaryInverse: "$color-button-secondary-inverse",
    auxiliaryInverse: "$color-button-auxiliary",
    tertiaryInverse: "$color-button-tertiary-inverse",
    dangerInverse: "$color-button-danger"
  }[m], x = [
    J1,
    ...d === "small" ? [tn, kn] : [],
    ...d === "medium" ? [tn, jn] : [],
    ...d === "large" ? [Bn, J2] : []
  ], A = {}, S = j([
    "button",
    A0,
    i ?? y ? z : "",
    d ?? "",
    v ?? "",
    ...m === "tertiary" ? [] : x,
    a ?? ""
  ]), k = {
    ...A,
    ...f
  }, E = d === "small" ? "16px" : d === "medium" ? "20px" : "24px";
  return g ? /* @__PURE__ */ t.jsxs(
    "button",
    {
      className: S,
      style: k,
      disabled: !0,
      ...b,
      role: "button",
      children: [
        /* @__PURE__ */ t.jsx(
          x8,
          {
            className: j([y2]),
            size: { height: E, width: E }
          }
        ),
        " ",
        "Loading..."
      ]
    }
  ) : /* @__PURE__ */ t.jsxs(
    "button",
    {
      className: S,
      style: k,
      disabled: u,
      ...b,
      role: "button",
      children: [
        s && /* @__PURE__ */ t.jsx(
          oe,
          {
            className: j([y2]),
            alt: l,
            icon: s,
            style: { fontSize: E },
            onClick: () => console.log("testing with DPS")
          }
        ),
        e ?? l,
        n && /* @__PURE__ */ t.jsx(
          oe,
          {
            className: j([Qr]),
            alt: l,
            icon: n,
            style: { fontSize: E }
          }
        )
      ]
    }
  );
}, Ft = ({
  className: e,
  disabled: a = !1,
  isDark: n,
  label: s,
  size: i = "medium",
  style: l,
  icon: d,
  isMore: f = !1,
  onClick: u,
  active: m = !1,
  showSkeleton: g = !1,
  tooltip: b,
  type: y,
  ...p
}) => {
  const v = b ?? {
    text: s,
    direction: "top-middle",
    isDark: n
  }, x = j([
    "button-icon",
    y === "default" ? "base-button-border" : "",
    i
  ]);
  return /* @__PURE__ */ t.jsx(
    Kt,
    {
      style: l,
      isShowIcon: !0,
      icon: d,
      isShowDropdownIcon: f,
      showSkeleton: g,
      active: m,
      onClick: u,
      size: i,
      isDark: n,
      disabled: a,
      className: e,
      tooltip: v,
      containerClassName: x,
      type: y,
      ...p
    }
  );
}, X0 = ({
  text: e,
  className: a,
  color: n = "Auxiliary-600",
  isRemovable: s = !1,
  isCopyable: i = !s,
  isDark: l,
  onRemove: d = () => {
    console.info("[Tag.onRemove]");
  },
  size: f,
  style: u,
  type: m,
  iconLeading: g,
  ...b
}) => {
  const { isDark: y } = $(), [p, v] = q(!0), x = j([
    "badge",
    K1,
    k8[n],
    f ?? "",
    m ?? "",
    l ?? y ? z : "",
    a ?? "",
    f === "small" ? lt : Qe
  ]), A = {
    ...u ?? {}
    // default styles below
  }, S = Z(
    () => i && typeof e == "string",
    [i]
  ), k = He(
    (E) => {
      if (i && e && typeof e == "string") {
        const R = e.replace(/(\r\n|\n|\r)/gm, "");
        navigator.clipboard.writeText(R);
      }
      s && (v(!1), d && d(E));
    },
    [i, s, d, e]
  );
  return /* @__PURE__ */ t.jsx(Xr, { children: p && /* @__PURE__ */ t.jsxs("span", { ...b, className: x, style: A, role: "tag", children: [
    g ? /* @__PURE__ */ t.jsx(oe, { alt: "", icon: g, size: "small" }) : null,
    /* @__PURE__ */ t.jsx("span", { className: "tag-label", children: e }),
    s && /* @__PURE__ */ t.jsx(
      "button",
      {
        className: "bagde-icon",
        onClick: k,
        role: "button",
        children: /* @__PURE__ */ t.jsx(oe, { alt: "Remove", icon: "close", size: "small" })
      }
    ),
    S && /* @__PURE__ */ t.jsx(
      "button",
      {
        className: "bagde-icon",
        onClick: k,
        role: "button",
        children: /* @__PURE__ */ t.jsx(oe, { alt: "Copy", icon: "content_copy", size: "small" })
      }
    )
  ] }) });
}, k8 = {
  "Cyan-500": Ms,
  "Cyan-700": Hs,
  "Gray-100": Rs,
  "Gray-500": Mn,
  "Green-150": Bs,
  "Green-600": Es,
  "Orange-150": Ds,
  "Orange-400": Ls,
  "Red-150": Is,
  "Red-600": Ns,
  "Yellow-150": Ps,
  "Yellow-400": Vs,
  "Auxiliary-300": Ts,
  "Auxiliary-600": Fs
}, j8 = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    "data-testid": "dot",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z",
        fill: "#005CBC"
      }
    )
  }
), B8 = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    "data-testid": "dot-dark",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z",
        fill: "#3387DF"
      }
    )
  }
), E8 = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    "data-testid": "disabled-dot",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z",
        fill: "#A0A0A0"
      }
    )
  }
), D8 = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    "data-testid": "disable-dot-dark",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z",
        fill: "#616161"
      }
    )
  }
), M8 = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "140",
    height: "12",
    viewBox: "0 0 140 12",
    fill: "none",
    "data-testid": "title-skeleton",
    children: [
      /* @__PURE__ */ t.jsx("g", { clipPath: "url(#clip0_37375_41232)", children: /* @__PURE__ */ t.jsx("rect", { width: "280", height: "12", fill: "url(#paint0_linear_37375_41232)" }) }),
      /* @__PURE__ */ t.jsxs("defs", { children: [
        /* @__PURE__ */ t.jsxs(
          "linearGradient",
          {
            id: "paint0_linear_37375_41232",
            x1: "0",
            y1: "0",
            x2: "280",
            y2: "0",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ t.jsx("stop", { offset: "0", stopColor: "#DFDFDF" }),
              /* @__PURE__ */ t.jsx("stop", { offset: "0.5", stopColor: "#C0C0C0" }),
              /* @__PURE__ */ t.jsx("stop", { offset: "1", stopColor: "#DFDFDF" }),
              /* @__PURE__ */ t.jsx(
                "animateTransform",
                {
                  attributeName: "gradientTransform",
                  type: "translate",
                  from: "-280 0",
                  to: "280 0",
                  dur: "1.5s",
                  repeatCount: "indefinite"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_37375_41232", children: /* @__PURE__ */ t.jsx(
          "path",
          {
            d: "M0 4C0 1.79086 1.79086 0 4 0H136C138.209 0 140 1.79086 140 4V8C140 10.2091 138.209 12 136 12H4C1.79086 12 0 10.2091 0 8V4Z",
            fill: "white"
          }
        ) })
      ] })
    ]
  }
), H8 = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100",
    height: "12",
    viewBox: "0 0 100 12",
    fill: "none",
    "data-testid": "detail-skeleton",
    children: [
      /* @__PURE__ */ t.jsx("g", { clipPath: "url(#clip0_31746_121)", children: /* @__PURE__ */ t.jsx("rect", { width: "200", height: "12", fill: "url(#paint0_linear_31746_121)" }) }),
      /* @__PURE__ */ t.jsxs("defs", { children: [
        /* @__PURE__ */ t.jsxs(
          "linearGradient",
          {
            id: "paint0_linear_31746_121",
            x1: "0",
            y1: "0",
            x2: "200",
            y2: "0",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ t.jsx("stop", { offset: "0", stopColor: "#DFDFDF" }),
              /* @__PURE__ */ t.jsx("stop", { offset: "0.5", stopColor: "#C0C0C0" }),
              /* @__PURE__ */ t.jsx("stop", { offset: "1", stopColor: "#DFDFDF" }),
              /* @__PURE__ */ t.jsx(
                "animateTransform",
                {
                  attributeName: "gradientTransform",
                  type: "translate",
                  from: "-200 0",
                  to: "200 0",
                  dur: "1.5s",
                  repeatCount: "indefinite"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_31746_121", children: /* @__PURE__ */ t.jsx(
          "path",
          {
            d: "M0 4C0 1.79086 1.79086 0 4 0H96C98.2091 0 100 1.79086 100 4V8C100 10.2091 98.2091 12 96 12H4C1.79086 12 0 10.2091 0 8V4Z",
            fill: "white"
          }
        ) })
      ] })
    ]
  }
), Zs = (e, a) => e ? a ? /* @__PURE__ */ t.jsx(D8, {}) : /* @__PURE__ */ t.jsx(B8, {}) : a ? /* @__PURE__ */ t.jsx(E8, {}) : /* @__PURE__ */ t.jsx(j8, {}), R8 = ({
  text: e,
  badge: a,
  tag: n,
  showNotificationDot: s,
  isDark: i,
  skeleton: l,
  isSelected: d,
  disabled: f
}) => {
  const { isDark: u } = $(), m = i ?? u, g = j(["content-group-title", m ? z : ""]);
  return /* @__PURE__ */ t.jsx("div", { className: g, children: l ? /* @__PURE__ */ t.jsx(M8, {}) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    s && Zs(m, f),
    /* @__PURE__ */ t.jsx(
      "span",
      {
        className: j([
          "title",
          ro,
          m ? z : "",
          f ? "disabled" : "",
          d ? "selected" : ""
        ]),
        children: e
      }
    ),
    a && /* @__PURE__ */ t.jsx(
      X0,
      {
        ...a,
        isDark: i ?? u,
        color: "Gray-500",
        isCopyable: !1,
        className: "badge-wrapper",
        size: "small"
      }
    ),
    n && /* @__PURE__ */ t.jsx(X0, { ...n, isDark: i ?? u, isCopyable: !1 })
  ] }) });
}, L8 = ({
  text: e,
  badge: a,
  tag: n,
  showNotificationDot: s,
  isDark: i,
  skeleton: l,
  disabled: d
}) => {
  const { isDark: f } = $(), u = i ?? f, m = j(["content-group-detail", u ? z : ""]);
  return /* @__PURE__ */ t.jsx("div", { className: m, children: l ? /* @__PURE__ */ t.jsx(H8, {}) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    s && Zs(u, d),
    /* @__PURE__ */ t.jsx(
      "span",
      {
        className: j([
          "details",
          n0,
          i ?? f ? z : "",
          d ? "disabled" : ""
        ]),
        children: e
      }
    ),
    a && /* @__PURE__ */ t.jsx(
      X0,
      {
        ...a,
        isDark: i ?? f,
        isCopyable: !1,
        className: "badge-wrapper",
        size: "small"
      }
    ),
    n && /* @__PURE__ */ t.jsx(X0, { ...n, isDark: i ?? f, isCopyable: !1 })
  ] }) });
}, I8 = ({
  titleProps: e,
  detailProps: a,
  isInverted: n,
  isDark: s,
  skeleton: i,
  disabled: l,
  isSelected: d
}) => {
  const f = j(["content-group", n ? "inverted" : ""]);
  return /* @__PURE__ */ t.jsxs("div", { className: f, children: [
    e && /* @__PURE__ */ t.jsx(
      R8,
      {
        ...e,
        isDark: s,
        skeleton: i,
        disabled: l,
        isSelected: d
      }
    ),
    a && /* @__PURE__ */ t.jsx(
      L8,
      {
        ...a,
        isDark: s,
        skeleton: i,
        disabled: l
      }
    )
  ] });
}, A1 = ({
  className: e,
  isDark: a,
  orientation: n = "horizontal",
  style: s,
  ...i
}) => {
  const { isDark: l } = $(), d = j([
    "divider",
    "divider".concat("-", n),
    ...a ?? l ? [z, Mn] : [Q1],
    e ?? ""
  ]), f = {
    // default styles below
    height: n === "horizontal" ? 1 : "100%",
    width: n === "horizontal" ? "100%" : 1,
    ...s ?? {}
    // allow consumers to overwrite height and width easily
  };
  return /* @__PURE__ */ t.jsx("div", { ...i, className: d, style: f });
}, yt = (e) => {
  const {
    message: a,
    variant: n = "info",
    className: s,
    disabled: i,
    isDark: l,
    style: d
  } = e, { isDark: f } = $(), u = j([
    "feedback",
    Qe,
    n,
    i ? s0 : "",
    l ?? f ? z : "",
    s ?? ""
  ]), m = {
    ...d ?? {}
    // default styles below
  }, g = Z(() => n === "error" ? "error_outline" : n === "warning" ? "report_problem" : n === "validated" ? "check_circle" : "info", [n]);
  return a ? /* @__PURE__ */ t.jsxs("div", { className: u, style: m, role: "feedback", children: [
    /* @__PURE__ */ t.jsx(
      oe,
      {
        alt: "",
        icon: g,
        size: "small",
        style: { marginRight: "0.25rem" }
      }
    ),
    a
  ] }) : null;
}, N8 = ({
  // background = '#0096d1',
  background: e,
  height: a = 24,
  width: n = 24
}) => {
  const { isDark: s } = $(), i = s ? "var(--auxiliary-500Dark)" : "var(--auxiliary-500)";
  return /* @__PURE__ */ t.jsxs(
    "svg",
    {
      fill: "none",
      height: a,
      viewBox: `0 0 ${n} ${a}`,
      width: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ t.jsxs("g", { clipPath: "url(#clip0_7637_104510)", children: [
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: "M4.8375 0C3.5175 0 2.4495 1.08 2.4495 2.4L2.4375 21.6C2.4375 22.92 3.5055 24 4.8255 24H19.2375C20.5575 24 21.6375 22.92 21.6375 21.6V7.2L14.4375 0H4.8375ZM13.2375 8.4V1.8L19.8375 8.4H13.2375Z",
              fill: e ?? i
            }
          ),
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: "M5.88237 20.1136C5.42782 20.1136 5.02654 19.9988 4.67853 19.7692C4.33052 19.5372 4.05827 19.2105 3.86177 18.7891C3.66528 18.3653 3.56703 17.8646 3.56703 17.2869C3.56703 16.714 3.66528 16.2169 3.86177 15.7955C4.05827 15.3741 4.33171 15.0485 4.68208 14.8189C5.03246 14.5893 5.43729 14.4744 5.89657 14.4744C6.25169 14.4744 6.53223 14.5336 6.73819 14.652C6.94653 14.768 7.10514 14.9006 7.21404 15.0497C7.32531 15.1965 7.41172 15.3172 7.47328 15.4119H7.5443V12.7273H8.38237V20H7.57271V19.1619H7.47328C7.41172 19.2614 7.32413 19.3868 7.21049 19.5384C7.09686 19.6875 6.93469 19.8213 6.72399 19.9396C6.51329 20.0556 6.23275 20.1136 5.88237 20.1136ZM5.996 19.3608C6.33218 19.3608 6.61627 19.2732 6.84828 19.098C7.08029 18.9205 7.25666 18.6754 7.3774 18.3629C7.49814 18.0481 7.5585 17.6847 7.5585 17.2727C7.5585 16.8655 7.49932 16.5092 7.38095 16.2038C7.26258 15.8961 7.08739 15.657 6.85538 15.4865C6.62337 15.3137 6.33691 15.2273 5.996 15.2273C5.64089 15.2273 5.34496 15.3184 5.10822 15.5007C4.87385 15.6806 4.69747 15.9257 4.5791 16.2358C4.4631 16.5436 4.4051 16.8892 4.4051 17.2727C4.4051 17.661 4.46428 18.0137 4.58265 18.331C4.70339 18.6458 4.88095 18.8968 5.11532 19.0838C5.35207 19.2685 5.64563 19.3608 5.996 19.3608ZM12.2496 20.1136C11.7571 20.1136 11.3251 19.9964 10.9534 19.7621C10.5841 19.5277 10.2952 19.1998 10.0869 18.7784C9.88095 18.357 9.77797 17.8646 9.77797 17.3011C9.77797 16.733 9.88095 16.237 10.0869 15.8132C10.2952 15.3894 10.5841 15.0604 10.9534 14.826C11.3251 14.5916 11.7571 14.4744 12.2496 14.4744C12.742 14.4744 13.1729 14.5916 13.5422 14.826C13.9139 15.0604 14.2027 15.3894 14.4086 15.8132C14.617 16.237 14.7211 16.733 14.7211 17.3011C14.7211 17.8646 14.617 18.357 14.4086 18.7784C14.2027 19.1998 13.9139 19.5277 13.5422 19.7621C13.1729 19.9964 12.742 20.1136 12.2496 20.1136ZM12.2496 19.3608C12.6236 19.3608 12.9314 19.2649 13.1729 19.0732C13.4143 18.8814 13.5931 18.6293 13.7091 18.3168C13.8251 18.0043 13.8831 17.6657 13.8831 17.3011C13.8831 16.9366 13.8251 16.5968 13.7091 16.282C13.5931 15.9671 13.4143 15.7126 13.1729 15.5185C12.9314 15.3243 12.6236 15.2273 12.2496 15.2273C11.8755 15.2273 11.5677 15.3243 11.3263 15.5185C11.0848 15.7126 10.906 15.9671 10.79 16.282C10.674 16.5968 10.616 16.9366 10.616 17.3011C10.616 17.6657 10.674 18.0043 10.79 18.3168C10.906 18.6293 11.0848 18.8814 11.3263 19.0732C11.5677 19.2649 11.8755 19.3608 12.2496 19.3608ZM18.2164 20.1136C17.705 20.1136 17.2646 19.9929 16.8953 19.7514C16.526 19.5099 16.2419 19.1773 16.0431 18.7536C15.8442 18.3298 15.7448 17.8456 15.7448 17.3011C15.7448 16.7472 15.8466 16.2583 16.0502 15.8345C16.2561 15.4084 16.5426 15.0758 16.9095 14.8366C17.2789 14.5952 17.7097 14.4744 18.2021 14.4744C18.5857 14.4744 18.9313 14.5455 19.2391 14.6875C19.5468 14.8295 19.799 15.0284 19.9955 15.2841C20.192 15.5398 20.3139 15.8381 20.3612 16.179H19.5232C19.4593 15.9304 19.3172 15.7102 19.097 15.5185C18.8792 15.3243 18.5857 15.2273 18.2164 15.2273C17.8896 15.2273 17.6032 15.3125 17.357 15.483C17.1131 15.651 16.9226 15.889 16.7852 16.1967C16.6503 16.5021 16.5828 16.8608 16.5828 17.2727C16.5828 17.6941 16.6491 18.0611 16.7817 18.3736C16.9166 18.6861 17.106 18.9287 17.3499 19.1016C17.5961 19.2744 17.8849 19.3608 18.2164 19.3608C18.4342 19.3608 18.6318 19.3229 18.8094 19.2472C18.9869 19.1714 19.1373 19.0625 19.2604 18.9205C19.3835 18.7784 19.4711 18.608 19.5232 18.4091H20.3612C20.3139 18.7311 20.1967 19.0211 20.0097 19.2791C19.825 19.5348 19.58 19.7384 19.2746 19.8899C18.9716 20.0391 18.6188 20.1136 18.2164 20.1136Z",
              fill: "white"
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_7637_104510", children: /* @__PURE__ */ t.jsx("rect", { fill: "white", height: a, width: n }) }) })
      ]
    }
  );
}, P8 = ({
  // background = '#8d466d',
  background: e,
  height: a = 24,
  width: n = 24
}) => {
  const { isDark: s } = $(), i = s ? "var(--tertiary-600Dark)" : "var(--tertiary-600)";
  return /* @__PURE__ */ t.jsxs(
    "svg",
    {
      fill: "none",
      height: a,
      viewBox: `0 0 ${n} ${a}`,
      width: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ t.jsxs("g", { clipPath: "url(#clip0_7637_104509)", children: [
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: "M4.8375 0C3.5175 0 2.4495 1.08 2.4495 2.4L2.4375 21.6C2.4375 22.92 3.5055 24 4.8255 24H19.2375C20.5575 24 21.6375 22.92 21.6375 21.6V7.2L14.4375 0H4.8375ZM13.2375 8.4V1.8L19.8375 8.4H13.2375Z",
              fill: e ?? i
            }
          ),
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: "M4.75044 22.0455V14.5455H5.5601V15.4119H5.65953C5.72109 15.3172 5.80632 15.1965 5.91522 15.0497C6.02649 14.9006 6.1851 14.768 6.39107 14.652C6.5994 14.5336 6.88113 14.4744 7.23624 14.4744C7.69552 14.4744 8.10035 14.5893 8.45073 14.8189C8.80111 15.0485 9.07454 15.3741 9.27104 15.7955C9.46754 16.2169 9.56578 16.714 9.56578 17.2869C9.56578 17.8646 9.46754 18.3653 9.27104 18.7891C9.07454 19.2105 8.80229 19.5372 8.45428 19.7692C8.10627 19.9988 7.70499 20.1136 7.25044 20.1136C6.90007 20.1136 6.61953 20.0556 6.40882 19.9396C6.19812 19.8213 6.03596 19.6875 5.92232 19.5384C5.80868 19.3868 5.72109 19.2614 5.65953 19.1619H5.58851V22.0455H4.75044ZM5.57431 17.2727C5.57431 17.6847 5.63468 18.0481 5.75542 18.3629C5.87615 18.6754 6.05253 18.9205 6.28453 19.098C6.51654 19.2732 6.80063 19.3608 7.13681 19.3608C7.48719 19.3608 7.77956 19.2685 8.01394 19.0838C8.25068 18.8968 8.42824 18.6458 8.54661 18.331C8.66735 18.0137 8.72772 17.661 8.72772 17.2727C8.72772 16.8892 8.66853 16.5436 8.55016 16.2358C8.43416 15.9257 8.25778 15.6806 8.02104 15.5007C7.78667 15.3184 7.49192 15.2273 7.13681 15.2273C6.7959 15.2273 6.50944 15.3137 6.27743 15.4865C6.04543 15.657 5.87024 15.8961 5.75186 16.2038C5.63349 16.5092 5.57431 16.8655 5.57431 17.2727ZM12.9039 20.1136C12.4493 20.1136 12.048 19.9988 11.7 19.7692C11.352 19.5372 11.0798 19.2105 10.8833 18.7891C10.6868 18.3653 10.5885 17.8646 10.5885 17.2869C10.5885 16.714 10.6868 16.2169 10.8833 15.7955C11.0798 15.3741 11.3532 15.0485 11.7036 14.8189C12.0539 14.5893 12.4588 14.4744 12.9181 14.4744C13.2732 14.4744 13.5537 14.5336 13.7597 14.652C13.968 14.768 14.1266 14.9006 14.2355 15.0497C14.3468 15.1965 14.4332 15.3172 14.4948 15.4119H14.5658V12.7273H15.4039V20H14.5942V19.1619H14.4948C14.4332 19.2614 14.3456 19.3868 14.232 19.5384C14.1183 19.6875 13.9562 19.8213 13.7455 19.9396C13.5348 20.0556 13.2542 20.1136 12.9039 20.1136ZM13.0175 19.3608C13.3537 19.3608 13.6378 19.2732 13.8698 19.098C14.1018 18.9205 14.2781 18.6754 14.3989 18.3629C14.5196 18.0481 14.58 17.6847 14.58 17.2727C14.58 16.8655 14.5208 16.5092 14.4024 16.2038C14.2841 15.8961 14.1089 15.657 13.8769 15.4865C13.6449 15.3137 13.3584 15.2273 13.0175 15.2273C12.6624 15.2273 12.3664 15.3184 12.1297 15.5007C11.8953 15.6806 11.719 15.9257 11.6006 16.2358C11.4846 16.5436 11.4266 16.8892 11.4266 17.2727C11.4266 17.661 11.4858 18.0137 11.6041 18.331C11.7249 18.6458 11.9024 18.8968 12.1368 19.0838C12.3736 19.2685 12.6671 19.3608 13.0175 19.3608ZM19.4841 14.5455V15.2557H16.5438V14.5455H19.4841ZM17.4244 20V13.7926C17.4244 13.4801 17.4978 13.2197 17.6446 13.0114C17.7914 12.803 17.982 12.6468 18.2164 12.5426C18.4507 12.4384 18.6981 12.3864 18.9585 12.3864C19.1645 12.3864 19.3326 12.4029 19.4628 12.4361C19.593 12.4692 19.6901 12.5 19.754 12.5284L19.5125 13.2528C19.4699 13.2386 19.4107 13.2209 19.335 13.1996C19.2616 13.1783 19.1645 13.1676 19.0438 13.1676C18.7668 13.1676 18.5667 13.2375 18.4436 13.3771C18.3229 13.5168 18.2625 13.7216 18.2625 13.9915V20H17.4244Z",
              fill: "white"
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_7637_104509", children: /* @__PURE__ */ t.jsx("rect", { fill: "white", height: a, width: n }) }) })
      ]
    }
  );
}, V8 = ({
  // background = '#ff891c',
  background: e,
  height: a = 24,
  width: n = 24
}) => {
  const { isDark: s } = $(), i = s ? "var(--orange-500Dark)" : "var(--orange-500)";
  return /* @__PURE__ */ t.jsxs(
    "svg",
    {
      fill: "none",
      height: a,
      viewBox: `0 0 ${n} ${a}`,
      width: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ t.jsxs("g", { clipPath: "url(#clip0_7637_104512)", children: [
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: "M4.8375 0C3.5175 0 2.4495 1.08 2.4495 2.4L2.4375 21.6C2.4375 22.92 3.5055 24 4.8255 24H19.2375C20.5575 24 21.6375 22.92 21.6375 21.6V7.2L14.4375 0H4.8375ZM13.2375 8.4V1.8L19.8375 8.4H13.2375Z",
              fill: e ?? i
            }
          ),
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: "M5.29439 22.0455V14.5455H6.10405V15.4119H6.20348C6.26503 15.3172 6.35026 15.1965 6.45916 15.0497C6.57043 14.9006 6.72905 14.768 6.93501 14.652C7.14335 14.5336 7.42507 14.4744 7.78018 14.4744C8.23947 14.4744 8.64429 14.5893 8.99467 14.8189C9.34505 15.0485 9.61849 15.3741 9.81499 15.7955C10.0115 16.2169 10.1097 16.714 10.1097 17.2869C10.1097 17.8646 10.0115 18.3653 9.81499 18.7891C9.61849 19.2105 9.34624 19.5372 8.99822 19.7692C8.65021 19.9988 8.24893 20.1136 7.79439 20.1136C7.44401 20.1136 7.16347 20.0556 6.95277 19.9396C6.74207 19.8213 6.5799 19.6875 6.46626 19.5384C6.35263 19.3868 6.26503 19.2614 6.20348 19.1619H6.13246V22.0455H5.29439ZM6.11825 17.2727C6.11825 17.6847 6.17862 18.0481 6.29936 18.3629C6.4201 18.6754 6.59647 18.9205 6.82848 19.098C7.06049 19.2732 7.34458 19.3608 7.68075 19.3608C8.03113 19.3608 8.32351 19.2685 8.55788 19.0838C8.79463 18.8968 8.97218 18.6458 9.09055 18.331C9.21129 18.0137 9.27166 17.661 9.27166 17.2727C9.27166 16.8892 9.21248 16.5436 9.09411 16.2358C8.9781 15.9257 8.80173 15.6806 8.56499 15.5007C8.33061 15.3184 8.03587 15.2273 7.68075 15.2273C7.33984 15.2273 7.05339 15.3137 6.82138 15.4865C6.58937 15.657 6.41418 15.8961 6.29581 16.2038C6.17744 16.5092 6.11825 16.8655 6.11825 17.2727ZM11.3881 22.0455V14.5455H12.1978V15.4119H12.2972C12.3588 15.3172 12.444 15.1965 12.5529 15.0497C12.6642 14.9006 12.8228 14.768 13.0288 14.652C13.2371 14.5336 13.5188 14.4744 13.8739 14.4744C14.3332 14.4744 14.738 14.5893 15.0884 14.8189C15.4388 15.0485 15.7122 15.3741 15.9087 15.7955C16.1052 16.2169 16.2035 16.714 16.2035 17.2869C16.2035 17.8646 16.1052 18.3653 15.9087 18.7891C15.7122 19.2105 15.44 19.5372 15.092 19.7692C14.744 19.9988 14.3427 20.1136 13.8881 20.1136C13.5378 20.1136 13.2572 20.0556 13.0465 19.9396C12.8358 19.8213 12.6737 19.6875 12.56 19.5384C12.4464 19.3868 12.3588 19.2614 12.2972 19.1619H12.2262V22.0455H11.3881ZM12.212 17.2727C12.212 17.6847 12.2724 18.0481 12.3931 18.3629C12.5138 18.6754 12.6902 18.9205 12.9222 19.098C13.1542 19.2732 13.4383 19.3608 13.7745 19.3608C14.1249 19.3608 14.4173 19.2685 14.6516 19.0838C14.8884 18.8968 15.0659 18.6458 15.1843 18.331C15.305 18.0137 15.3654 17.661 15.3654 17.2727C15.3654 16.8892 15.3062 16.5436 15.1879 16.2358C15.0719 15.9257 14.8955 15.6806 14.6587 15.5007C14.4244 15.3184 14.1296 15.2273 13.7745 15.2273C13.4336 15.2273 13.1471 15.3137 12.9151 15.4865C12.6831 15.657 12.5079 15.8961 12.3896 16.2038C12.2712 16.5092 12.212 16.8655 12.212 17.2727ZM19.854 14.5455V15.2557H17.0273V14.5455H19.854ZM17.8512 13.2386H18.6893V18.4375C18.6893 18.6742 18.7236 18.8518 18.7923 18.9702C18.8633 19.0862 18.9532 19.1643 19.0621 19.2045C19.1734 19.2424 19.2906 19.2614 19.4137 19.2614C19.506 19.2614 19.5818 19.2566 19.641 19.2472C19.7002 19.2353 19.7475 19.2259 19.783 19.2188L19.9535 19.9716C19.8967 19.9929 19.8174 20.0142 19.7156 20.0355C19.6138 20.0592 19.4847 20.071 19.3285 20.071C19.0917 20.071 18.8597 20.0201 18.6325 19.9183C18.4076 19.8165 18.2205 19.6615 18.0714 19.4531C17.9246 19.2448 17.8512 18.982 17.8512 18.6648V13.2386Z",
              fill: "white"
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_7637_104512", children: /* @__PURE__ */ t.jsx("rect", { fill: "white", height: a, width: n }) }) })
      ]
    }
  );
}, T8 = ({
  // background = '#316bb8',
  background: e,
  height: a = 24,
  width: n = 24
}) => {
  const { isDark: s } = $(), i = s ? "var(--blue-950Dark)" : "var(--blue-950)";
  return /* @__PURE__ */ t.jsxs(
    "svg",
    {
      fill: "none",
      height: a,
      viewBox: `0 0 ${n} ${a}`,
      width: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ t.jsxs("g", { clipPath: "url(#clip0_7708_103361)", children: [
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: "M4.8375 0C3.5175 0 2.4495 1.08 2.4495 2.4L2.4375 21.6C2.4375 22.92 3.5055 24 4.8255 24H19.2375C20.5575 24 21.6375 22.92 21.6375 21.6V7.2L14.4375 0H4.8375ZM13.2375 8.4V1.8L19.8375 8.4H13.2375Z",
              fill: e ?? i
            }
          ),
          /* @__PURE__ */ t.jsx("g", { clipPath: "url(#clip1_7708_103361)", children: /* @__PURE__ */ t.jsx(
            "path",
            {
              d: "M9.66668 11.7599L13.18 13.9999L9.66668 16.2399V11.7599ZM8.33334 9.33325V18.6666L15.6667 13.9999L8.33334 9.33325Z",
              fill: "white"
            }
          ) })
        ] }),
        /* @__PURE__ */ t.jsxs("defs", { children: [
          /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_7708_103361", children: /* @__PURE__ */ t.jsx("rect", { fill: "white", height: a, width: n }) }),
          /* @__PURE__ */ t.jsx("clipPath", { id: "clip1_7708_103361", children: /* @__PURE__ */ t.jsx(
            "rect",
            {
              fill: "white",
              height: a * 2 / 3,
              transform: "translate(3 6)",
              width: n * 2 / 3
            }
          ) })
        ] })
      ]
    }
  );
}, F8 = ({
  // background = '#339d75',
  background: e,
  height: a = 24,
  width: n = 24
}) => {
  const { isDark: s } = $(), i = s ? "var(--green-400Dark)" : "var(--green-400)";
  return /* @__PURE__ */ t.jsxs(
    "svg",
    {
      fill: "none",
      height: a,
      viewBox: `0 0 ${n} ${a}`,
      width: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ t.jsxs("g", { clipPath: "url(#clip0_7637_104511)", children: [
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: "M4.8375 0C3.5175 0 2.4495 1.08 2.4495 2.4L2.4375 21.6C2.4375 22.92 3.5055 24 4.8255 24H19.2375C20.5575 24 21.6375 22.92 21.6375 21.6V7.2L14.4375 0H4.8375ZM13.2375 8.4V1.8L19.8375 8.4H13.2375Z",
              fill: e ?? i
            }
          ),
          /* @__PURE__ */ t.jsx(
            "path",
            {
              d: "M7.33052 14.5455L8.63734 16.7756L9.94416 14.5455H10.9101L9.1487 17.2727L10.9101 20H9.94416L8.63734 17.8835L7.33052 20H6.36461L8.09757 17.2727L6.36461 14.5455H7.33052ZM12.944 12.7273V20H12.1059V12.7273H12.944ZM18.3426 15.767L17.5898 15.9801C17.5424 15.8546 17.4726 15.7327 17.3802 15.6143C17.2903 15.4936 17.1672 15.3942 17.0109 15.3161C16.8547 15.2379 16.6546 15.1989 16.4108 15.1989C16.077 15.1989 15.7988 15.2758 15.5763 15.4297C15.3561 15.5812 15.246 15.7741 15.246 16.0085C15.246 16.2169 15.3218 16.3814 15.4733 16.5021C15.6248 16.6229 15.8615 16.7235 16.1835 16.804L16.9932 17.0028C17.4809 17.1212 17.8443 17.3023 18.0834 17.5462C18.3225 17.7876 18.442 18.099 18.442 18.4801C18.442 18.7926 18.3521 19.072 18.1721 19.3182C17.9946 19.5644 17.746 19.7585 17.4264 19.9006C17.1068 20.0426 16.7351 20.1136 16.3113 20.1136C15.755 20.1136 15.2945 19.9929 14.93 19.7514C14.5654 19.5099 14.3345 19.1572 14.2375 18.6932L15.0329 18.4943C15.1087 18.7879 15.2519 19.008 15.4626 19.1548C15.6757 19.3016 15.9539 19.375 16.2971 19.375C16.6878 19.375 16.9979 19.2921 17.2275 19.1264C17.4595 18.9583 17.5756 18.7571 17.5756 18.5227C17.5756 18.3333 17.5093 18.1747 17.3767 18.0469C17.2441 17.9167 17.0405 17.8196 16.7659 17.7557L15.8568 17.5426C15.3573 17.4242 14.9903 17.2408 14.7559 16.9922C14.5239 16.7412 14.4079 16.4276 14.4079 16.0511C14.4079 15.7434 14.4943 15.4711 14.6672 15.2344C14.8424 14.9976 15.0803 14.8118 15.3809 14.6768C15.684 14.5419 16.0273 14.4744 16.4108 14.4744C16.9506 14.4744 17.3743 14.5928 17.6821 14.8295C17.9922 15.0663 18.2124 15.3788 18.3426 15.767Z",
              fill: "white"
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_7637_104511", children: /* @__PURE__ */ t.jsx("rect", { fill: "white", height: a, width: n }) }) })
      ]
    }
  );
}, _8 = ({
  className: e,
  format: a,
  size: n = "large",
  style: s,
  ...i
}) => {
  const l = j([
    "file-format",
    "file-format".concat("-", a),
    e ?? ""
  ]), d = {
    ...s ?? {},
    // default styles below
    transform: n === "small" ? "scale(calc(2/3))" : void 0
  }, f = O8(a);
  return /* @__PURE__ */ t.jsx(
    oe,
    {
      ...i,
      alt: a,
      className: l,
      size: n,
      style: d,
      svg: f
    }
  );
}, O8 = (e) => {
  switch (e) {
    case "doc":
      return /* @__PURE__ */ t.jsx(N8, {});
    case "pdf":
      return /* @__PURE__ */ t.jsx(P8, {});
    case "ppt":
      return /* @__PURE__ */ t.jsx(V8, {});
    case "video":
      return /* @__PURE__ */ t.jsx(T8, {});
    case "xls":
      return /* @__PURE__ */ t.jsx(F8, {});
    default:
      return /* @__PURE__ */ t.jsx(t.Fragment, {});
  }
}, ut = (e) => {
  const {
    className: a,
    disabled: n,
    isDark: s,
    label: i,
    required: l,
    style: d,
    showLabelIcon: f,
    ...u
  } = e, { isDark: m } = $(), g = j([
    "label-element",
    Y0,
    n ? s0 : "",
    l ? "required" : "",
    s ?? m ? z : "",
    a ?? ""
  ]), b = {
    ...d ?? {}
    // default styles below
  };
  if (!i && !l) return null;
  const y = typeof i == "string", p = y ? i == null ? void 0 : i.toLowerCase().replace(/ /g, "-") : "label-00";
  return /* @__PURE__ */ t.jsxs("div", { className: g, style: b, role: "label", children: [
    /* @__PURE__ */ t.jsxs("span", { className: j(["label-text", Qe]), children: [
      y ? /* @__PURE__ */ t.jsx("label", { htmlFor: p, ...u, children: i }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: i }),
      f && /* @__PURE__ */ t.jsx(oe, { icon: "info", size: "small", style: { marginLeft: "0.5rem" } })
    ] }),
    l && /* @__PURE__ */ t.jsx("span", { className: j(["required-text", ao]), children: "*Required" })
  ] });
}, $r = ["#B3DACB", "#FFCC49", "#F6CCD2", "#667E88"], _g = ({
  items: e,
  isDark: a = !1,
  direction: n,
  style: s
}) => {
  const { isDark: i } = $(), l = j(["legend", n, a ?? i ? z : ""]), d = {
    ...s ?? {}
  };
  return /* @__PURE__ */ t.jsx("div", { className: l, role: "list", style: d, children: e.map((f, u) => /* @__PURE__ */ t.jsxs("div", { className: j(["legend-item", n0]), role: "listitem", children: [
    /* @__PURE__ */ t.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        role: "img",
        children: /* @__PURE__ */ t.jsx("circle", { cx: "6", cy: "6", r: "6", fill: $r[u % $r.length] })
      }
    ),
    f
  ] }, f)) });
}, U0 = ({
  children: e,
  className: a,
  iconLeading: n,
  showIconTrailing: s = !1,
  isDark: i,
  label: l,
  size: d,
  style: f,
  useAnchor: u = !0,
  tooltip: m,
  ...g
}) => {
  const { isDark: b } = $(), [y, p] = q(!1), v = () => {
    var E;
    p(!0), (E = g.onClick) == null || E.call(g);
  }, x = Z(
    () => i ?? b,
    [i, b]
  ), A = j([
    "link",
    C2,
    y ? Gs : "",
    g.disabled ? Os : "",
    x ? z : "",
    d ?? "",
    a ?? ""
  ]), S = {
    ...f ?? {}
    // default styles below
  }, k = /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx("span", { className: j([...s ? [En] : []]), children: e ?? l }),
    s && /* @__PURE__ */ t.jsx(oe, { alt: l, icon: "open_in_new", size: d })
  ] });
  return u ? /* @__PURE__ */ t.jsx(w2, { isDark: x, direction: "top-middle", ...m, children: /* @__PURE__ */ t.jsx(
    "a",
    {
      ...g,
      onClick: v,
      onKeyDown: (E) => {
        E.key === "Enter" && v();
      },
      className: A,
      style: S,
      role: "link",
      children: k
    }
  ) }) : /* @__PURE__ */ t.jsx(
    w2,
    {
      isDark: x,
      direction: "top-middle",
      ...m,
      className: C2,
      children: /* @__PURE__ */ t.jsx("span", { ...g, onClick: v, className: A, style: S, children: k })
    }
  );
}, co = S0.concat("color-logo"), G8 = "data:image/svg+xml,%3csvg%20width='362'%20height='88'%20viewBox='0%200%20362%2088'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M92.7531%2057.2388H101.119C104.383%2057.2388%20105.624%2058.4261%20105.624%2061.3342C105.624%2064.1344%20104.382%2065.3204%20101.119%2065.3204H92.7531V57.2388ZM79.7929%2086.6525H92.7537V74.6919H106.636C115.827%2074.6919%20119.137%2068.9843%20119.137%2061.6049C119.137%2053.0388%20115.734%2048.1916%20106.543%2048.1916H79.7929V86.6525ZM123.411%2048.1916H158.293V57.5624H136.372V62.734H156.733V72.1088H136.372V77.2797H158.293V86.6525H123.411V48.1916ZM176.679%2057.2388H185.044C188.307%2057.2388%20189.549%2058.4261%20189.549%2061.3342C189.549%2064.1344%20188.307%2065.3204%20185.044%2065.3204H176.679V57.2388ZM163.718%2086.6525H176.679V74.6919H190.559C199.753%2074.6919%20203.063%2068.9843%20203.063%2061.6049C203.063%2053.0388%20199.66%2048.1916%20190.467%2048.1916H163.718V86.6525ZM215.608%2070.3305C209.266%2069.1974%20206.648%2064.8882%20206.648%2059.5029C206.648%2049.5357%20214.967%2046.8447%20225.628%2046.8447C240.242%2046.8447%20246.264%2051.3141%20246.724%2059.4493H231.648C231.648%2057.8867%20230.866%2056.9152%20229.673%2056.3771C228.524%2055.7861%20227.054%2055.571%20225.628%2055.571C221.767%2055.571%20220.436%2056.7007%20220.436%2058.3182C220.436%2059.3937%20220.848%2060.0966%20222.135%2060.311L237.623%2063.0033C244.15%2064.1344%20248.195%2067.6898%20248.195%2074.2061C248.195%2083.5823%20241.669%2087.9993%20227.098%2087.9993C217.125%2087.9993%20206.232%2086.3838%20206.187%2075.0711H221.813C221.857%2076.3624%20222.273%2077.2241%20223.193%2077.8171C224.156%2078.3565%20225.581%2078.6265%20227.603%2078.6265C231.647%2078.6265%20232.752%2077.3326%20232.752%2075.5007C232.752%2074.3696%20232.153%2073.2392%20230.41%2072.9175L215.608%2070.3305ZM252.422%2048.1916H265.382V86.6525H252.422V48.1916ZM313.415%2071.6773C312.587%2076.7409%20311.114%2080.835%20307.897%2083.6352C304.728%2086.4368%20299.762%2087.9993%20291.859%2087.9993C283.999%2087.9993%20269.43%2087.3514%20269.43%2067.423C269.43%2047.4907%20283.999%2046.8441%20291.859%2046.8441C299.67%2046.8441%20311.713%2048.0281%20313.415%2063.2747H298.799C298.431%2060.5248%20296.866%2056.5392%20291.859%2056.5392C286.57%2056.5392%20283.216%2059.6095%20283.216%2067.4224C283.216%2075.2333%20286.48%2078.3015%20291.214%2078.3015C295.305%2078.3015%20297.741%2076.3088%20298.798%2071.6766H313.415V71.6773ZM330.373%2067.4237C330.373%2059.6101%20333.729%2056.5406%20339.015%2056.5406C344.3%2056.5406%20347.657%2059.6108%20347.657%2067.4237C347.657%2075.2346%20344.3%2078.3029%20339.015%2078.3029C333.729%2078.3022%20330.373%2075.234%20330.373%2067.4237ZM316.583%2067.4237C316.583%2087.3514%20331.153%2088%20339.015%2088C346.875%2088%20361.444%2087.3521%20361.444%2067.4237C361.444%2047.4913%20346.875%2046.8447%20339.015%2046.8447C331.153%2046.8447%20316.583%2047.4907%20316.583%2067.4237ZM60.2087%2048.5728C61.0456%2030.1203%2045.9502%209.34013%2025.3709%206.77157L25.406%206.51941C45.6941%206.51941%2061.2471%2026.3187%2061.2471%2041.9386C61.2276%2045.1902%2060.984%2047.2048%2060.5496%2048.6674L60.2087%2048.5728ZM58.9794%2050.9183C57.6296%2052.6569%2055.932%2054.4075%2053.943%2056.0693C50.2841%2033.8854%2034.8202%2014.4872%2023.8873%208.82523L23.6531%208.9973C34.6482%2018.5098%2047.7621%2036.9848%2052.8619%2056.9396C50.2606%2058.954%2047.4507%2060.6504%2044.4861%2061.996C34.1108%2049.5232%2024.4379%2025.4683%2021.3208%2010.2038L21.0037%2010.3044C21.074%2025.1215%2031.0533%2050.275%2043.223%2062.5487C40.4318%2063.713%2037.5301%2064.5581%2034.5678%2065.0696C22.9023%2060.1978%2014.5987%2044.5945%2014.5987%2028.6106C14.5987%2018.1762%2017.6166%2011.7214%2018.2005%2010.4004L17.9519%2010.2965C17.2456%2011.4229%2012.8245%2017.8744%2012.8245%2029.1395C12.8245%2047.2068%2021.2768%2061.0165%2032.4985%2065.3654C28.4856%2065.8307%2024.4284%2065.6299%2020.4745%2064.7704L20.391%2065.0457C21.5914%2065.5117%2025.664%2067.3138%2031.877%2067.3138C45.9295%2067.3138%2055.4291%2058.1098%2059.2531%2051.1135L58.9794%2050.9183Z'%20fill='%23004C97'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.4951%200C19.8422%200%207.35107%208.10479%207.35107%2015.5133C7.35107%2018.3791%209.83788%2020.8%2014.9848%2020.8C26.9329%2020.8%2038.0334%2012.1466%2038.0334%205.41775C38.0334%201.87695%2034.8076%200%2030.4951%200ZM34.748%205.20861C34.748%2010.8805%2024.4159%2017.8139%2015.779%2017.8139C11.9631%2017.8139%209.90129%2016.2308%209.90129%2013.6185C9.90129%207.86521%2020.3508%201.04966%2028.4522%201.04966C33.7341%201.04966%2034.748%203.88297%2034.748%205.20861Z'%20fill='%231A99D5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.02791%2018.9439C2.72844%2019.4899%201.5293%2021.9652%201.5293%2024.5013C1.5293%2029.205%206.03768%2033.5718%2014.33%2033.5718C30.2823%2033.5718%2048.7126%2021.1935%2048.7126%209.70331C48.7126%204.54561%2044.0812%201.74141%2040.8655%201.16164L40.8052%201.36283C41.8053%201.6964%2045.4693%203.49196%2045.4693%208.08644C45.4693%2017.2416%2029.1968%2029.7159%2012.9877%2029.7159C6.78228%2029.7159%202.87284%2026.4868%202.87284%2021.7832C2.87284%2020.2953%203.16666%2019.3152%203.24451%2019.0312L3.02791%2018.9439Z'%20fill='%23F47A3C'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M55.3694%2010.5623C55.807%2010.9125%2058.4344%2013.2209%2058.4344%2017.5864C58.4344%2032.4709%2036.3112%2047.1073%2016.7527%2047.1073C5.08907%2047.1073%20-0.227953%2041.0363%200.00747951%2035.6457H0.216544C0.673598%2038.4453%204.46062%2043.4547%2014.669%2043.4547C34.252%2043.4547%2056.1171%2028.31%2056.1171%2015.041C56.1171%2012.7649%2055.5307%2011.3466%2055.1993%2010.7159L55.3694%2010.5623Z'%20fill='%2316A751'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M62.7117%2024.4575C62.8033%2024.7745%2063.2798%2026.1994%2063.2798%2028.4311C63.2798%2044.9888%2040.8911%2059.1638%2021.4192%2059.1638C11.3973%2059.1638%206.1638%2054.032%205.05884%2051.9479L5.23714%2051.8089C8.01023%2054.3656%2013.4723%2056.308%2019.8465%2056.308C37.0438%2056.308%2062.7048%2042.5155%2062.4756%2024.5177L62.7117%2024.4575Z'%20fill='%23EC2028'/%3e%3c/svg%3e", S1 = "data:image/svg+xml,%3csvg%20width='362'%20height='88'%20viewBox='0%200%20362%2088'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M92.7531%2057.2388H101.119C104.383%2057.2388%20105.624%2058.4261%20105.624%2061.3342C105.624%2064.1344%20104.382%2065.3204%20101.119%2065.3204H92.7531V57.2388ZM79.7929%2086.6525H92.7537V74.6919H106.636C115.827%2074.6919%20119.137%2068.9843%20119.137%2061.6049C119.137%2053.0388%20115.734%2048.1916%20106.543%2048.1916H79.7929V86.6525ZM123.411%2048.1916H158.293V57.5624H136.372V62.734H156.733V72.1088H136.372V77.2797H158.293V86.6525H123.411V48.1916ZM176.679%2057.2388H185.044C188.308%2057.2388%20189.549%2058.4261%20189.549%2061.3342C189.549%2064.1344%20188.308%2065.3204%20185.044%2065.3204H176.679V57.2388ZM163.718%2086.6525H176.679V74.6919H190.559C199.753%2074.6919%20203.063%2068.9843%20203.063%2061.6049C203.063%2053.0388%20199.66%2048.1916%20190.467%2048.1916H163.718V86.6525ZM215.608%2070.3305C209.266%2069.1974%20206.648%2064.8882%20206.648%2059.5029C206.648%2049.5357%20214.967%2046.8447%20225.628%2046.8447C240.242%2046.8447%20246.264%2051.3141%20246.724%2059.4493H231.648C231.648%2057.8867%20230.866%2056.9152%20229.673%2056.3771C228.524%2055.7861%20227.054%2055.571%20225.628%2055.571C221.767%2055.571%20220.436%2056.7007%20220.436%2058.3182C220.436%2059.3937%20220.848%2060.0966%20222.135%2060.311L237.623%2063.0033C244.15%2064.1344%20248.195%2067.6898%20248.195%2074.2061C248.195%2083.5823%20241.669%2087.9993%20227.098%2087.9993C217.125%2087.9993%20206.232%2086.3838%20206.187%2075.0711H221.813C221.857%2076.3624%20222.273%2077.2241%20223.193%2077.8171C224.156%2078.3565%20225.581%2078.6265%20227.603%2078.6265C231.647%2078.6265%20232.752%2077.3326%20232.752%2075.5007C232.752%2074.3696%20232.153%2073.2392%20230.41%2072.9175L215.608%2070.3305ZM252.422%2048.1916H265.382V86.6525H252.422V48.1916ZM313.415%2071.6773C312.587%2076.7409%20311.114%2080.835%20307.897%2083.6352C304.728%2086.4368%20299.762%2087.9993%20291.859%2087.9993C283.999%2087.9993%20269.43%2087.3514%20269.43%2067.423C269.43%2047.4907%20283.999%2046.8441%20291.859%2046.8441C299.67%2046.8441%20311.713%2048.0281%20313.415%2063.2747H298.799C298.431%2060.5248%20296.866%2056.5392%20291.859%2056.5392C286.57%2056.5392%20283.216%2059.6095%20283.216%2067.4224C283.216%2075.2333%20286.48%2078.3015%20291.214%2078.3015C295.305%2078.3015%20297.741%2076.3088%20298.798%2071.6766H313.415V71.6773ZM330.373%2067.4237C330.373%2059.6101%20333.729%2056.5406%20339.015%2056.5406C344.3%2056.5406%20347.657%2059.6108%20347.657%2067.4237C347.657%2075.2346%20344.3%2078.3029%20339.015%2078.3029C333.729%2078.3022%20330.373%2075.234%20330.373%2067.4237ZM316.583%2067.4237C316.583%2087.3514%20331.153%2088%20339.015%2088C346.875%2088%20361.444%2087.3521%20361.444%2067.4237C361.444%2047.4913%20346.875%2046.8447%20339.015%2046.8447C331.153%2046.8447%20316.583%2047.4907%20316.583%2067.4237ZM60.2087%2048.5728C61.0456%2030.1203%2045.9502%209.34013%2025.3709%206.77157L25.406%206.51941C45.6941%206.51941%2061.2471%2026.3187%2061.2471%2041.9386C61.2276%2045.1902%2060.984%2047.2048%2060.5496%2048.6674L60.2087%2048.5728ZM58.9794%2050.9183C57.6296%2052.6569%2055.932%2054.4075%2053.943%2056.0693C50.2841%2033.8854%2034.8202%2014.4872%2023.8873%208.82523L23.6531%208.9973C34.6482%2018.5098%2047.7621%2036.9848%2052.8619%2056.9396C50.2606%2058.954%2047.4507%2060.6504%2044.4861%2061.996C34.1108%2049.5232%2024.4379%2025.4683%2021.3208%2010.2038L21.0037%2010.3044C21.074%2025.1215%2031.0533%2050.275%2043.223%2062.5487C40.4318%2063.713%2037.5301%2064.5581%2034.5678%2065.0696C22.9023%2060.1978%2014.5987%2044.5945%2014.5987%2028.6106C14.5987%2018.1762%2017.6166%2011.7214%2018.2005%2010.4004L17.9519%2010.2965C17.2456%2011.4229%2012.8245%2017.8744%2012.8245%2029.1395C12.8245%2047.2068%2021.2768%2061.0165%2032.4985%2065.3654C28.4856%2065.8307%2024.4284%2065.6299%2020.4745%2064.7704L20.391%2065.0457C21.5914%2065.5117%2025.664%2067.3138%2031.877%2067.3138C45.9295%2067.3138%2055.4291%2058.1098%2059.2531%2051.1135L58.9794%2050.9183Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.4951%200C19.8422%200%207.35107%208.10479%207.35107%2015.5133C7.35107%2018.3791%209.83788%2020.8%2014.9848%2020.8C26.9329%2020.8%2038.0334%2012.1466%2038.0334%205.41775C38.0334%201.87695%2034.8076%200%2030.4951%200ZM34.748%205.20861C34.748%2010.8805%2024.4159%2017.8139%2015.779%2017.8139C11.9631%2017.8139%209.90129%2016.2308%209.90129%2013.6185C9.90129%207.86521%2020.3508%201.04966%2028.4522%201.04966C33.7341%201.04966%2034.748%203.88297%2034.748%205.20861Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.02779%2018.9439C2.72831%2019.4899%201.52917%2021.9651%201.52917%2024.5013C1.52917%2029.205%206.03756%2033.5718%2014.3298%2033.5718C30.2822%2033.5718%2048.7125%2021.1934%2048.7125%209.70329C48.7125%204.54559%2044.081%201.74139%2040.8653%201.16162L40.8051%201.36282C41.8052%201.69638%2045.4692%203.49195%2045.4692%208.08642C45.4692%2017.2416%2029.1966%2029.7159%2012.9875%2029.7159C6.78216%2029.7159%202.87271%2026.4868%202.87271%2021.7831C2.87271%2020.2953%203.16653%2019.3151%203.24438%2019.0312L3.02779%2018.9439Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M55.3694%2010.5623C55.807%2010.9125%2058.4344%2013.2209%2058.4344%2017.5864C58.4344%2032.4709%2036.3112%2047.1073%2016.7527%2047.1073C5.08907%2047.1073%20-0.227953%2041.0363%200.00747951%2035.6457H0.216544C0.673598%2038.4453%204.46062%2043.4547%2014.669%2043.4547C34.252%2043.4547%2056.1171%2028.31%2056.1171%2015.041C56.1171%2012.7649%2055.5307%2011.3466%2055.1993%2010.7159L55.3694%2010.5623Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M62.7117%2024.4575C62.8034%2024.7745%2063.2799%2026.1995%2063.2799%2028.4311C63.2799%2044.9888%2040.8912%2059.1639%2021.4193%2059.1639C11.3974%2059.1639%206.16386%2054.032%205.0589%2051.9479L5.2372%2051.8089C8.01029%2054.3656%2013.4723%2056.3081%2019.8466%2056.3081C37.0439%2056.3081%2062.7048%2042.5155%2062.4757%2024.5177L62.7117%2024.4575Z'%20fill='white'/%3e%3c/svg%3e", Q8 = "data:image/svg+xml,%3csvg%20width='362'%20height='88'%20viewBox='0%200%20362%2088'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M92.7531%2057.2388H101.119C104.383%2057.2388%20105.624%2058.4261%20105.624%2061.3342C105.624%2064.1344%20104.382%2065.3204%20101.119%2065.3204H92.7531V57.2388ZM79.7929%2086.6525H92.7537V74.6919H106.636C115.827%2074.6919%20119.137%2068.9843%20119.137%2061.6049C119.137%2053.0388%20115.734%2048.1916%20106.543%2048.1916H79.7929V86.6525ZM123.411%2048.1916H158.293V57.5624H136.372V62.734H156.733V72.1088H136.372V77.2797H158.293V86.6525H123.411V48.1916ZM176.679%2057.2388H185.044C188.308%2057.2388%20189.549%2058.4261%20189.549%2061.3342C189.549%2064.1344%20188.308%2065.3204%20185.044%2065.3204H176.679V57.2388ZM163.718%2086.6525H176.679V74.6919H190.559C199.753%2074.6919%20203.063%2068.9843%20203.063%2061.6049C203.063%2053.0388%20199.66%2048.1916%20190.467%2048.1916H163.718V86.6525ZM215.608%2070.3305C209.266%2069.1974%20206.648%2064.8882%20206.648%2059.5029C206.648%2049.5357%20214.967%2046.8447%20225.628%2046.8447C240.242%2046.8447%20246.264%2051.3141%20246.724%2059.4493H231.648C231.648%2057.8867%20230.866%2056.9152%20229.673%2056.3771C228.524%2055.7861%20227.054%2055.571%20225.628%2055.571C221.767%2055.571%20220.436%2056.7007%20220.436%2058.3182C220.436%2059.3937%20220.848%2060.0966%20222.135%2060.311L237.623%2063.0033C244.15%2064.1344%20248.195%2067.6898%20248.195%2074.2061C248.195%2083.5823%20241.669%2087.9993%20227.098%2087.9993C217.125%2087.9993%20206.232%2086.3838%20206.187%2075.0711H221.813C221.857%2076.3624%20222.273%2077.2241%20223.193%2077.8171C224.156%2078.3565%20225.581%2078.6265%20227.603%2078.6265C231.647%2078.6265%20232.752%2077.3326%20232.752%2075.5007C232.752%2074.3696%20232.153%2073.2392%20230.41%2072.9175L215.608%2070.3305ZM252.422%2048.1916H265.382V86.6525H252.422V48.1916ZM313.415%2071.6773C312.587%2076.7409%20311.114%2080.835%20307.897%2083.6352C304.728%2086.4368%20299.762%2087.9993%20291.859%2087.9993C283.999%2087.9993%20269.43%2087.3514%20269.43%2067.423C269.43%2047.4907%20283.999%2046.8441%20291.859%2046.8441C299.67%2046.8441%20311.713%2048.0281%20313.415%2063.2747H298.799C298.431%2060.5248%20296.866%2056.5392%20291.859%2056.5392C286.57%2056.5392%20283.216%2059.6095%20283.216%2067.4224C283.216%2075.2333%20286.48%2078.3015%20291.214%2078.3015C295.305%2078.3015%20297.741%2076.3088%20298.798%2071.6766H313.415V71.6773ZM330.373%2067.4237C330.373%2059.6101%20333.729%2056.5406%20339.015%2056.5406C344.3%2056.5406%20347.657%2059.6108%20347.657%2067.4237C347.657%2075.2346%20344.3%2078.3029%20339.015%2078.3029C333.729%2078.3022%20330.373%2075.234%20330.373%2067.4237ZM316.583%2067.4237C316.583%2087.3514%20331.153%2088%20339.015%2088C346.875%2088%20361.444%2087.3521%20361.444%2067.4237C361.444%2047.4913%20346.875%2046.8447%20339.015%2046.8447C331.153%2046.8447%20316.583%2047.4907%20316.583%2067.4237ZM60.2087%2048.5728C61.0456%2030.1203%2045.9502%209.34013%2025.3709%206.77157L25.406%206.51941C45.6941%206.51941%2061.2471%2026.3187%2061.2471%2041.9386C61.2276%2045.1902%2060.984%2047.2048%2060.5496%2048.6674L60.2087%2048.5728ZM58.9794%2050.9183C57.6296%2052.6569%2055.932%2054.4075%2053.943%2056.0693C50.2841%2033.8854%2034.8202%2014.4872%2023.8873%208.82523L23.6531%208.9973C34.6482%2018.5098%2047.7621%2036.9848%2052.8619%2056.9396C50.2606%2058.954%2047.4507%2060.6504%2044.4861%2061.996C34.1108%2049.5232%2024.4379%2025.4683%2021.3208%2010.2038L21.0037%2010.3044C21.074%2025.1215%2031.0533%2050.275%2043.223%2062.5487C40.4318%2063.713%2037.5301%2064.5581%2034.5678%2065.0696C22.9023%2060.1978%2014.5987%2044.5945%2014.5987%2028.6106C14.5987%2018.1762%2017.6166%2011.7214%2018.2005%2010.4004L17.9519%2010.2965C17.2456%2011.4229%2012.8245%2017.8744%2012.8245%2029.1395C12.8245%2047.2068%2021.2768%2061.0165%2032.4985%2065.3654C28.4856%2065.8307%2024.4284%2065.6299%2020.4745%2064.7704L20.391%2065.0457C21.5914%2065.5117%2025.664%2067.3138%2031.877%2067.3138C45.9295%2067.3138%2055.4291%2058.1098%2059.2531%2051.1135L58.9794%2050.9183Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.4951%200C19.8422%200%207.35107%208.10479%207.35107%2015.5133C7.35107%2018.3791%209.83788%2020.8%2014.9848%2020.8C26.9329%2020.8%2038.0334%2012.1466%2038.0334%205.41775C38.0334%201.87695%2034.8076%200%2030.4951%200ZM34.748%205.20861C34.748%2010.8805%2024.4159%2017.8139%2015.779%2017.8139C11.9631%2017.8139%209.90129%2016.2308%209.90129%2013.6185C9.90129%207.86521%2020.3508%201.04966%2028.4522%201.04966C33.7341%201.04966%2034.748%203.88297%2034.748%205.20861Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.02791%2018.9439C2.72844%2019.4899%201.5293%2021.9651%201.5293%2024.5013C1.5293%2029.205%206.03768%2033.5718%2014.33%2033.5718C30.2823%2033.5718%2048.7126%2021.1934%2048.7126%209.70329C48.7126%204.54559%2044.0812%201.74139%2040.8655%201.16162L40.8052%201.36282C41.8053%201.69638%2045.4693%203.49195%2045.4693%208.08642C45.4693%2017.2416%2029.1968%2029.7159%2012.9877%2029.7159C6.78228%2029.7159%202.87284%2026.4868%202.87284%2021.7831C2.87284%2020.2953%203.16666%2019.3151%203.24451%2019.0312L3.02791%2018.9439Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M55.3694%2010.5623C55.807%2010.9125%2058.4344%2013.2209%2058.4344%2017.5864C58.4344%2032.4709%2036.3112%2047.1073%2016.7527%2047.1073C5.08907%2047.1073%20-0.227953%2041.0363%200.00747951%2035.6457H0.216544C0.673598%2038.4453%204.46062%2043.4547%2014.669%2043.4547C34.252%2043.4547%2056.1171%2028.31%2056.1171%2015.041C56.1171%2012.7649%2055.5307%2011.3466%2055.1993%2010.7159L55.3694%2010.5623Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M62.7117%2024.4575C62.8033%2024.7745%2063.2798%2026.1995%2063.2798%2028.4311C63.2798%2044.9888%2040.8911%2059.1639%2021.4192%2059.1639C11.3973%2059.1639%206.1638%2054.032%205.05884%2051.9479L5.23714%2051.8089C8.01023%2054.3656%2013.4723%2056.3081%2019.8465%2056.3081C37.0438%2056.3081%2062.7048%2042.5155%2062.4756%2024.5177L62.7117%2024.4575Z'%20fill='black'/%3e%3c/svg%3e", z8 = "data:image/svg+xml,%3csvg%20width='90'%20height='90'%20viewBox='0%200%2090%2090'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1604_20604'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='90'%20height='90'%3e%3crect%20width='90'%20height='90'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1604_20604)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M73.2087%2059.5728C74.0456%2041.1203%2058.9502%2020.3401%2038.3709%2017.7716L38.406%2017.5194C58.6941%2017.5194%2074.2471%2037.3187%2074.2471%2052.9386C74.2276%2056.1902%2073.984%2058.2048%2073.5496%2059.6674L73.2087%2059.5728ZM71.9794%2061.9183C70.6296%2063.6569%2068.932%2065.4075%2066.943%2067.0693C63.2841%2044.8854%2047.8202%2025.4872%2036.8873%2019.8252L36.6531%2019.9973C47.6482%2029.5098%2060.7621%2047.9848%2065.8619%2067.9396C63.2606%2069.954%2060.4507%2071.6504%2057.4861%2072.996C47.1108%2060.5232%2037.4379%2036.4683%2034.3208%2021.2038L34.0037%2021.3044C34.074%2036.1215%2044.0533%2061.275%2056.223%2073.5487C53.4318%2074.713%2050.5301%2075.5581%2047.5678%2076.0696C35.9023%2071.1978%2027.5987%2055.5945%2027.5987%2039.6106C27.5987%2029.1762%2030.6166%2022.7214%2031.2005%2021.4004L30.9519%2021.2965C30.2456%2022.4229%2025.8245%2028.8744%2025.8245%2040.1395C25.8245%2058.2068%2034.2768%2072.0165%2045.4985%2076.3654C41.4856%2076.8307%2037.4284%2076.6299%2033.4745%2075.7704L33.391%2076.0457C34.5914%2076.5117%2038.664%2078.3138%2044.877%2078.3138C58.9295%2078.3138%2068.4291%2069.1098%2072.2531%2062.1135L71.9794%2061.9183Z'%20fill='%2306549C'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M43.4951%2011C32.8422%2011%2020.3511%2019.1048%2020.3511%2026.5133C20.3511%2029.3791%2022.8379%2031.8%2027.9848%2031.8C39.9329%2031.8%2051.0334%2023.1466%2051.0334%2016.4178C51.0334%2012.877%2047.8076%2011%2043.4951%2011ZM47.748%2016.2086C47.748%2021.8805%2037.4159%2028.8139%2028.779%2028.8139C24.9631%2028.8139%2022.9013%2027.2308%2022.9013%2024.6185C22.9013%2018.8652%2033.3508%2012.0497%2041.4522%2012.0497C46.7341%2012.0497%2047.748%2014.883%2047.748%2016.2086Z'%20fill='%231A99D5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.0279%2029.9439C15.7284%2030.4899%2014.5293%2032.9652%2014.5293%2035.5013C14.5293%2040.205%2019.0377%2044.5718%2027.33%2044.5718C43.2823%2044.5718%2061.7126%2032.1935%2061.7126%2020.7033C61.7126%2015.5456%2057.0812%2012.7414%2053.8655%2012.1616L53.8052%2012.3628C54.8053%2012.6964%2058.4693%2014.492%2058.4693%2019.0864C58.4693%2028.2416%2042.1968%2040.7159%2025.9877%2040.7159C19.7823%2040.7159%2015.8728%2037.4868%2015.8728%2032.7832C15.8728%2031.2953%2016.1667%2030.3152%2016.2445%2030.0312L16.0279%2029.9439Z'%20fill='%23F47A3C'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M68.3694%2021.5623C68.807%2021.9125%2071.4344%2024.2209%2071.4344%2028.5864C71.4344%2043.4709%2049.3112%2058.1073%2029.7527%2058.1073C18.0891%2058.1073%2012.772%2052.0363%2013.0075%2046.6457H13.2165C13.6736%2049.4453%2017.4606%2054.4547%2027.669%2054.4547C47.252%2054.4547%2069.1171%2039.31%2069.1171%2026.041C69.1171%2023.7649%2068.5307%2022.3466%2068.1993%2021.7159L68.3694%2021.5623Z'%20fill='%2316A751'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M75.7117%2035.4575C75.8033%2035.7745%2076.2798%2037.1994%2076.2798%2039.4311C76.2798%2055.9888%2053.8911%2070.1638%2034.4192%2070.1638C24.3973%2070.1638%2019.1638%2065.032%2018.0588%2062.9479L18.2371%2062.8089C21.0102%2065.3656%2026.4723%2067.308%2032.8465%2067.308C50.0438%2067.308%2075.7048%2053.5155%2075.4756%2035.5177L75.7117%2035.4575Z'%20fill='%23EC2028'/%3e%3c/g%3e%3c/svg%3e", Z8 = "data:image/svg+xml,%3csvg%20width='90'%20height='90'%20viewBox='0%200%2090%2090'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1604_20599'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='90'%20height='90'%3e%3crect%20width='90'%20height='90'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1604_20599)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M73.2087%2059.5728C74.0456%2041.1203%2058.9502%2020.3401%2038.3709%2017.7716L38.406%2017.5194C58.6941%2017.5194%2074.2471%2037.3187%2074.2471%2052.9386C74.2276%2056.1902%2073.984%2058.2048%2073.5496%2059.6674L73.2087%2059.5728ZM71.9794%2061.9183C70.6296%2063.6569%2068.932%2065.4075%2066.943%2067.0693C63.2841%2044.8854%2047.8202%2025.4872%2036.8873%2019.8252L36.6531%2019.9973C47.6482%2029.5098%2060.7621%2047.9848%2065.8619%2067.9396C63.2606%2069.954%2060.4507%2071.6504%2057.4861%2072.996C47.1108%2060.5232%2037.4379%2036.4683%2034.3208%2021.2038L34.0037%2021.3044C34.074%2036.1215%2044.0533%2061.275%2056.223%2073.5487C53.4318%2074.713%2050.5301%2075.5581%2047.5678%2076.0696C35.9023%2071.1978%2027.5987%2055.5945%2027.5987%2039.6106C27.5987%2029.1762%2030.6166%2022.7214%2031.2005%2021.4004L30.9519%2021.2965C30.2456%2022.4229%2025.8245%2028.8744%2025.8245%2040.1395C25.8245%2058.2068%2034.2768%2072.0165%2045.4985%2076.3654C41.4856%2076.8307%2037.4284%2076.6299%2033.4745%2075.7704L33.391%2076.0457C34.5914%2076.5117%2038.664%2078.3138%2044.877%2078.3138C58.9295%2078.3138%2068.4291%2069.1098%2072.2531%2062.1135L71.9794%2061.9183Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M43.4951%2011C32.8422%2011%2020.3511%2019.1048%2020.3511%2026.5133C20.3511%2029.3791%2022.8379%2031.8%2027.9848%2031.8C39.9329%2031.8%2051.0334%2023.1466%2051.0334%2016.4178C51.0334%2012.877%2047.8076%2011%2043.4951%2011ZM47.748%2016.2086C47.748%2021.8805%2037.4159%2028.8139%2028.779%2028.8139C24.9631%2028.8139%2022.9013%2027.2308%2022.9013%2024.6185C22.9013%2018.8652%2033.3508%2012.0497%2041.4522%2012.0497C46.7341%2012.0497%2047.748%2014.883%2047.748%2016.2086Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.0278%2029.9439C15.7283%2030.4899%2014.5292%2032.9651%2014.5292%2035.5013C14.5292%2040.205%2019.0376%2044.5718%2027.3298%2044.5718C43.2822%2044.5718%2061.7125%2032.1934%2061.7125%2020.7033C61.7125%2015.5456%2057.081%2012.7414%2053.8653%2012.1616L53.8051%2012.3628C54.8052%2012.6964%2058.4692%2014.4919%2058.4692%2019.0864C58.4692%2028.2416%2042.1966%2040.7159%2025.9875%2040.7159C19.7822%2040.7159%2015.8727%2037.4868%2015.8727%2032.7831C15.8727%2031.2953%2016.1665%2030.3151%2016.2444%2030.0312L16.0278%2029.9439Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M68.3694%2021.5623C68.807%2021.9125%2071.4344%2024.2209%2071.4344%2028.5864C71.4344%2043.4709%2049.3112%2058.1073%2029.7527%2058.1073C18.0891%2058.1073%2012.772%2052.0363%2013.0075%2046.6457H13.2165C13.6736%2049.4453%2017.4606%2054.4547%2027.669%2054.4547C47.252%2054.4547%2069.1171%2039.31%2069.1171%2026.041C69.1171%2023.7649%2068.5307%2022.3466%2068.1993%2021.7159L68.3694%2021.5623Z'%20fill='black'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M75.7118%2035.4575C75.8034%2035.7745%2076.28%2037.1995%2076.28%2039.4311C76.28%2055.9888%2053.8912%2070.1639%2034.4194%2070.1639C24.3974%2070.1639%2019.1639%2065.032%2018.059%2062.9479L18.2373%2062.8089C21.0103%2065.3656%2026.4724%2067.3081%2032.8467%2067.3081C50.0439%2067.3081%2075.7049%2053.5155%2075.4757%2035.5177L75.7118%2035.4575Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e", k1 = "data:image/svg+xml,%3csvg%20width='91'%20height='90'%20viewBox='0%200%2091%2090'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1604_20600'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='91'%20height='90'%3e%3crect%20x='0.25'%20width='90'%20height='90'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1604_20600)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M72.4587%2058.5728C73.2956%2040.1203%2058.2002%2019.3401%2037.6209%2016.7716L37.656%2016.5194C57.9441%2016.5194%2073.4971%2036.3187%2073.4971%2051.9386C73.4776%2055.1902%2073.234%2057.2048%2072.7996%2058.6674L72.4587%2058.5728ZM71.2294%2060.9183C69.8796%2062.6569%2068.182%2064.4075%2066.193%2066.0693C62.5341%2043.8854%2047.0702%2024.4872%2036.1373%2018.8252L35.9031%2018.9973C46.8982%2028.5098%2060.0121%2046.9848%2065.1119%2066.9396C62.5106%2068.954%2059.7007%2070.6504%2056.7361%2071.996C46.3608%2059.5232%2036.6879%2035.4683%2033.5708%2020.2038L33.2537%2020.3044C33.324%2035.1215%2043.3033%2060.275%2055.473%2072.5487C52.6818%2073.713%2049.7801%2074.5581%2046.8178%2075.0696C35.1523%2070.1978%2026.8487%2054.5945%2026.8487%2038.6106C26.8487%2028.1762%2029.8666%2021.7214%2030.4505%2020.4004L30.2019%2020.2965C29.4956%2021.4229%2025.0745%2027.8744%2025.0745%2039.1395C25.0745%2057.2068%2033.5268%2071.0165%2044.7485%2075.3654C40.7356%2075.8307%2036.6784%2075.6299%2032.7245%2074.7704L32.641%2075.0457C33.8414%2075.5117%2037.914%2077.3138%2044.127%2077.3138C58.1795%2077.3138%2067.6791%2068.1098%2071.5031%2061.1135L71.2294%2060.9183Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M42.7451%2010C32.0922%2010%2019.6011%2018.1048%2019.6011%2025.5133C19.6011%2028.3791%2022.0879%2030.8%2027.2348%2030.8C39.1829%2030.8%2050.2834%2022.1466%2050.2834%2015.4178C50.2834%2011.877%2047.0576%2010%2042.7451%2010ZM46.998%2015.2086C46.998%2020.8805%2036.6659%2027.8139%2028.029%2027.8139C24.2131%2027.8139%2022.1513%2026.2308%2022.1513%2023.6185C22.1513%2017.8652%2032.6008%2011.0497%2040.7022%2011.0497C45.9841%2011.0497%2046.998%2013.883%2046.998%2015.2086Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.2778%2028.9439C14.9783%2029.4899%2013.7792%2031.9651%2013.7792%2034.5013C13.7792%2039.205%2018.2876%2043.5718%2026.5798%2043.5718C42.5322%2043.5718%2060.9625%2031.1934%2060.9625%2019.7033C60.9625%2014.5456%2056.3311%2011.7414%2053.1154%2011.1616L53.0551%2011.3628C54.0552%2011.6964%2057.7192%2013.4919%2057.7192%2018.0864C57.7192%2027.2416%2041.4467%2039.7159%2025.2376%2039.7159C19.0322%2039.7159%2015.1227%2036.4868%2015.1227%2031.7831C15.1227%2030.2953%2015.4165%2029.3151%2015.4944%2029.0312L15.2778%2028.9439Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M67.6194%2020.5623C68.057%2020.9125%2070.6844%2023.2209%2070.6844%2027.5864C70.6844%2042.4709%2048.5612%2057.1073%2029.0027%2057.1073C17.3391%2057.1073%2012.022%2051.0363%2012.2575%2045.6457H12.4665C12.9236%2048.4453%2016.7106%2053.4547%2026.919%2053.4547C46.502%2053.4547%2068.3671%2038.31%2068.3671%2025.041C68.3671%2022.7649%2067.7807%2021.3466%2067.4493%2020.7159L67.6194%2020.5623Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M74.9617%2034.4575C75.0534%2034.7745%2075.5299%2036.1995%2075.5299%2038.4311C75.5299%2054.9888%2053.1412%2069.1639%2033.6693%2069.1639C23.6474%2069.1639%2018.4139%2064.032%2017.3089%2061.9479L17.4872%2061.8089C20.2603%2064.3656%2025.7223%2066.3081%2032.0966%2066.3081C49.2939%2066.3081%2074.9548%2052.5155%2074.7257%2034.5177L74.9617%2034.4575Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e", U8 = "data:image/svg+xml,%3csvg%20width='311'%20height='96'%20viewBox='0%200%20311%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M191.593%2034.6343C191.593%2053.0702%20205.038%2068.7398%20223.594%2068.7398V0C205.038%200%20191.593%2016.1984%20191.593%2034.6343Z'%20fill='%232E89F5'/%3e%3cpath%20d='M260.848%2061.0727C260.848%2042.6368%20247.403%2026.9672%20228.847%2026.9672V95.707C247.403%2095.707%20260.848%2079.5085%20260.848%2061.0727Z'%20fill='%232E89F5'/%3e%3cpath%20d='M310.806%2047.4854C310.806%2021.817%20292.023%207.62939e-06%20266.101%207.62939e-06V95.707C292.023%2095.707%20310.806%2073.1538%20310.806%2047.4854Z'%20fill='%232E89F5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.50195%2055.9767H5.76245C6.64442%2055.9767%206.97981%2056.2972%206.97981%2057.0822C6.97981%2057.8382%206.64425%2058.1583%205.76245%2058.1583H3.50195V55.9767ZM0%2063.9171H3.50212V60.6883H7.25327C9.73685%2060.6883%2010.631%2059.1474%2010.631%2057.1553C10.631%2054.8428%209.71157%2053.5343%207.228%2053.5343H0V63.9171ZM11.786%2053.5343H21.2115V56.064H15.2881V57.4601H20.79V59.9909H15.2881V61.3868H21.2115V63.9171H11.786V53.5343ZM26.1795%2055.9767H28.4399C29.3217%2055.9767%2029.6572%2056.2972%2029.6572%2057.0822C29.6572%2057.8382%2029.3217%2058.1583%2028.4399%2058.1583H26.1795V55.9767ZM22.6774%2063.9171H26.1795V60.6883H29.93C32.4143%2060.6883%2033.3086%2059.1474%2033.3086%2057.1553C33.3086%2054.8428%2032.3892%2053.5343%2029.9051%2053.5343H22.6774V63.9171ZM36.6984%2059.5109C34.9849%2059.205%2034.2775%2058.0417%2034.2775%2056.5879C34.2775%2053.8972%2036.5254%2053.1707%2039.4059%2053.1707C43.3547%2053.1707%2044.982%2054.3772%2045.1063%2056.5734H41.0327C41.0327%2056.1516%2040.8215%2055.8893%2040.4991%2055.744C40.1885%2055.5845%2039.7914%2055.5264%2039.4059%2055.5264C38.3628%2055.5264%2038.003%2055.8314%2038.003%2056.2681C38.003%2056.5584%2038.1143%2056.7481%2038.4621%2056.806L42.6472%2057.5328C44.4109%2057.8382%2045.504%2058.798%2045.504%2060.5571C45.504%2063.0883%2043.7403%2064.2807%2039.8033%2064.2807C37.1085%2064.2807%2034.165%2063.8446%2034.1528%2060.7906H38.3752C38.3871%2061.1392%2038.4994%2061.3718%2038.7481%2061.5319C39.0081%2061.6775%2039.3934%2061.7504%2039.9396%2061.7504C41.0323%2061.7504%2041.3309%2061.4011%2041.3309%2060.9066C41.3309%2060.6012%2041.1691%2060.2961%2040.6981%2060.2093L36.6984%2059.5109ZM46.646%2053.5343H50.1479V63.9171H46.646V53.5343ZM63.1268%2059.8744C62.9033%2061.2414%2062.5053%2062.3466%2061.6358%2063.1026C60.7795%2063.8589%2059.4378%2064.2807%2057.3021%2064.2807C55.1785%2064.2807%2051.2416%2064.1058%2051.2416%2058.726C51.2416%2053.3451%2055.1785%2053.1705%2057.3021%2053.1705C59.4128%2053.1705%2062.6669%2053.4902%2063.1268%2057.6061H59.1775C59.0781%2056.8637%2058.6552%2055.7878%2057.3021%2055.7878C55.8732%2055.7878%2054.9668%2056.6166%2054.9668%2058.7258C54.9668%2060.8344%2055.8488%2061.6627%2057.1279%2061.6627C58.2335%2061.6627%2058.8917%2061.1247%2059.1774%2059.8743L63.1268%2059.8744ZM67.7091%2058.7262C67.7091%2056.6168%2068.616%2055.7882%2070.0444%2055.7882C71.4723%2055.7882%2072.3794%2056.617%2072.3794%2058.7262C72.3794%2060.8348%2071.4723%2061.6631%2070.0444%2061.6631C68.616%2061.6629%2067.7091%2060.8346%2067.7091%2058.7262ZM63.983%2058.7262C63.983%2064.1058%2067.92%2064.2809%2070.0442%2064.2809C72.168%2064.2809%2076.1049%2064.106%2076.1049%2058.7262C76.1049%2053.3453%2072.168%2053.1707%2070.0442%2053.1707C67.92%2053.1707%2063.983%2053.3451%2063.983%2058.7262Z'%20fill='%232E89F5'/%3e%3cpath%20d='M9.9437%2042.6527C9.9437%2043.3599%209.77355%2044.0195%209.43324%2044.6315C9.09294%2045.2298%208.57568%2045.7126%207.88146%2046.0798C7.18723%2046.447%206.33647%2046.6306%205.32917%2046.6306C4.34909%2046.6306%203.47111%2046.4606%202.69521%2046.1206C1.91932%2045.767%201.29996%2045.2774%200.837149%2044.6519C0.374335%2044.0263%200.108897%2043.3055%200.0408365%2042.4895H2.53187C2.59993%2043.1151%202.86537%2043.6523%203.32818%2044.1011C3.80461%2044.5499%204.43757%2044.7743%205.22708%2044.7743C5.93491%2044.7743%206.4794%2044.5839%206.86054%2044.2031C7.2553%2043.8223%207.45267%2043.3327%207.45267%2042.7343C7.45267%2042.2176%207.30974%2041.796%207.02389%2041.4696C6.73803%2041.1296%206.38412%2040.8644%205.96214%2040.674C5.54016%2040.4836%204.96164%2040.266%204.22658%2040.0212C3.32818%2039.7356%202.59312%2039.4501%202.02141%2039.1645C1.46331%2038.8789%200.986883%2038.4641%200.59213%2037.9201C0.197377%2037.3761%200%2036.6622%200%2035.7782C0%2035.003%200.190571%2034.3231%200.571712%2033.7383C0.952853%2033.1535%201.49734%2032.7047%202.20517%2032.3919C2.91301%2032.0655%203.72974%2031.9023%204.65537%2031.9023C6.12548%2031.9023%207.28933%2032.2559%208.14689%2032.9631C9.01807%2033.6703%209.51492%2034.595%209.63743%2035.7374H7.12598C7.03069%2035.1934%206.77206%2034.731%206.35009%2034.3503C5.94172%2033.9559%205.37681%2033.7587%204.65537%2033.7587C4.00198%2033.7587%203.47791%2033.9287%203.08316%2034.2687C2.68841%2034.595%202.49103%2035.071%202.49103%2035.6966C2.49103%2036.1862%202.62715%2036.5942%202.8994%2036.9206C3.17164%2037.2333%203.51194%2037.4849%203.92031%2037.6753C4.34229%2037.8521%204.914%2038.0629%205.63545%2038.3077C6.54746%2038.5933%207.28933%2038.8857%207.86104%2039.1849C8.44636%2039.4705%208.9364%2039.892%209.33115%2040.4496C9.73952%2041.0072%209.9437%2041.7416%209.9437%2042.6527Z'%20fill='%232E89F5'/%3e%3cpath%20d='M16.6434%2033.9627V38.3281H21.9522V40.1232H16.6434V44.5907H22.5647V46.4878H14.3158V32.0859H22.5647V33.9627H16.6434Z'%20fill='%232E89F5'/%3e%3cpath%20d='M34.441%2046.4878L30.8474%2040.7352H29.1935V46.4878H26.8658V32.0859H31.95C33.5971%2032.0859%2034.8426%2032.4871%2035.6865%2033.2895C36.5441%2034.0919%2036.9729%2035.1526%2036.9729%2036.4718C36.9729%2037.6005%2036.653%2038.5253%2036.0132%2039.2461C35.3871%2039.9668%2034.475%2040.4292%2033.2772%2040.6332L37.0545%2046.4878H34.441ZM29.1935%2039.0829H31.7662C33.6447%2039.0829%2034.5839%2038.2533%2034.5839%2036.5942C34.5839%2035.8054%2034.3525%2035.1934%2033.8897%2034.7582C33.4405%2034.3095%2032.7327%2034.0851%2031.7662%2034.0851H29.1935V39.0829Z'%20fill='%232E89F5'/%3e%3cpath%20d='M42.5605%2032.0859L46.7054%2043.9991L50.8707%2032.0859H53.4026L48.1959%2046.4878H45.2148L40.0286%2032.0859H42.5605Z'%20fill='%232E89F5'/%3e%3cpath%20d='M59.4979%2032.0859V46.4878H57.1702V32.0859H59.4979Z'%20fill='%232E89F5'/%3e%3cpath%20d='M70.7883%2031.9431C72.5578%2031.9431%2074.028%2032.3919%2075.1986%2033.2895C76.3693%2034.1871%2077.1588%2035.4042%2077.5671%2036.941H75.0965C74.7562%2036.0706%2074.2117%2035.3838%2073.4631%2034.8806C72.728%2034.3639%2071.8228%2034.1055%2070.7474%2034.1055C69.8899%2034.1055%2069.1208%2034.3163%2068.4402%2034.7378C67.7732%2035.1594%2067.2423%2035.7646%2066.8475%2036.5534C66.4664%2037.3285%2066.2758%2038.2397%2066.2758%2039.2869C66.2758%2040.3204%2066.4664%2041.2316%2066.8475%2042.0204C67.2423%2042.7955%2067.7732%2043.3939%2068.4402%2043.8155C69.1208%2044.2371%2069.8899%2044.4479%2070.7474%2044.4479C71.8228%2044.4479%2072.728%2044.1963%2073.4631%2043.6931C74.2117%2043.1763%2074.7562%2042.4895%2075.0965%2041.6328H77.5671C77.1588%2043.1695%2076.3693%2044.3867%2075.1986%2045.2842C74.028%2046.1682%2072.5578%2046.6102%2070.7883%2046.6102C69.427%2046.6102%2068.2224%2046.3042%2067.1742%2045.6922C66.1261%2045.0666%2065.3162%2044.2031%2064.7444%2043.1015C64.1727%2041.9864%2063.8869%2040.7148%2063.8869%2039.2869C63.8869%2037.8589%2064.1727%2036.5942%2064.7444%2035.4926C65.3162%2034.3774%2066.1261%2033.5071%2067.1742%2032.8815C68.2224%2032.2559%2069.427%2031.9431%2070.7883%2031.9431Z'%20fill='%232E89F5'/%3e%3cpath%20d='M84.2591%2033.9627V38.3281H89.5678V40.1232H84.2591V44.5907H90.1804V46.4878H81.9314V32.0859H90.1804V33.9627H84.2591Z'%20fill='%232E89F5'/%3e%3cpath%20d='M113.682%2039.2665C113.682%2040.7216%20113.383%2041.9932%20112.784%2043.0811C112.199%2044.1555%20111.334%2044.9918%20110.191%2045.5902C109.061%2046.1886%20107.707%2046.4878%20106.128%2046.4878H101.309V32.0859H106.128C107.707%2032.0859%20109.061%2032.3851%20110.191%2032.9835C111.334%2033.5683%20112.199%2034.3978%20112.784%2035.4722C113.383%2036.5466%20113.682%2037.8113%20113.682%2039.2665ZM105.944%2044.3867C107.672%2044.3867%20109%2043.9379%20109.925%2043.0403C110.851%2042.1428%20111.314%2040.8848%20111.314%2039.2665C111.314%2037.6481%20110.851%2036.3902%20109.925%2035.4926C109%2034.595%20107.672%2034.1463%20105.944%2034.1463H103.636V44.3867H105.944Z'%20fill='%232E89F5'/%3e%3cpath%20d='M120.394%2033.9627V38.3281H125.703V40.1232H120.394V44.5907H126.315V46.4878H118.066V32.0859H126.315V33.9627H120.394Z'%20fill='%232E89F5'/%3e%3cpath%20d='M140.09%2042.6527C140.09%2043.3599%20139.92%2044.0195%20139.58%2044.6315C139.24%2045.2298%20138.722%2045.7126%20138.028%2046.0798C137.334%2046.447%20136.483%2046.6306%20135.476%2046.6306C134.496%2046.6306%20133.618%2046.4606%20132.842%2046.1206C132.066%2045.767%20131.447%2045.2774%20130.984%2044.6519C130.521%2044.0263%20130.255%2043.3055%20130.187%2042.4895H132.678C132.747%2043.1151%20133.012%2043.6523%20133.475%2044.1011C133.951%2044.5499%20134.584%2044.7743%20135.374%2044.7743C136.081%2044.7743%20136.626%2044.5839%20137.007%2044.2031C137.402%2043.8223%20137.599%2043.3327%20137.599%2042.7343C137.599%2042.2176%20137.456%2041.796%20137.17%2041.4696C136.885%2041.1296%20136.531%2040.8644%20136.109%2040.674C135.687%2040.4836%20135.108%2040.266%20134.373%2040.0212C133.475%2039.7356%20132.74%2039.4501%20132.168%2039.1645C131.61%2038.8789%20131.133%2038.4641%20130.739%2037.9201C130.344%2037.3761%20130.147%2036.6622%20130.147%2035.7782C130.147%2035.003%20130.337%2034.3231%20130.718%2033.7383C131.099%2033.1535%20131.644%2032.7047%20132.352%2032.3919C133.06%2032.0655%20133.876%2031.9023%20134.802%2031.9023C136.272%2031.9023%20137.436%2032.2559%20138.293%2032.9631C139.165%2033.6703%20139.661%2034.595%20139.784%2035.7374H137.273C137.177%2035.1934%20136.919%2034.731%20136.497%2034.3503C136.088%2033.9559%20135.523%2033.7587%20134.802%2033.7587C134.149%2033.7587%20133.624%2033.9287%20133.23%2034.2687C132.835%2034.595%20132.638%2035.071%20132.638%2035.6966C132.638%2036.1862%20132.774%2036.5942%20133.046%2036.9206C133.318%2037.2333%20133.659%2037.4849%20134.067%2037.6753C134.489%2037.8521%20135.061%2038.0629%20135.782%2038.3077C136.694%2038.5933%20137.436%2038.8857%20138.008%2039.1849C138.593%2039.4705%20139.083%2039.892%20139.478%2040.4496C139.886%2041.0072%20140.09%2041.7416%20140.09%2042.6527Z'%20fill='%232E89F5'/%3e%3cpath%20d='M146.79%2032.0859V46.4878H144.462V32.0859H146.79Z'%20fill='%232E89F5'/%3e%3cpath%20d='M158.244%2031.9635C159.959%2031.9635%20161.388%2032.3851%20162.532%2033.2283C163.675%2034.0715%20164.43%2035.2206%20164.798%2036.6758H162.348C162.035%2035.9006%20161.517%2035.2818%20160.796%2034.8194C160.088%2034.3571%20159.244%2034.1259%20158.264%2034.1259C157.366%2034.1259%20156.556%2034.3367%20155.834%2034.7582C155.127%2035.1798%20154.568%2035.7782%20154.16%2036.5534C153.765%2037.3285%20153.568%2038.2397%20153.568%2039.2869C153.568%2040.3884%20153.772%2041.3336%20154.181%2042.1224C154.589%2042.9111%20155.161%2043.5163%20155.896%2043.9379C156.644%2044.3459%20157.509%2044.5499%20158.489%2044.5499C159.687%2044.5499%20160.714%2044.1827%20161.572%2043.4483C162.429%2042.7003%20162.947%2041.6804%20163.124%2040.3884H157.835V38.6749H165.084V40.8984C164.921%2041.9592%20164.539%2042.9247%20163.94%2043.7951C163.355%2044.6519%20162.572%2045.3386%20161.592%2045.8554C160.626%2046.3722%20159.516%2046.6306%20158.264%2046.6306C156.862%2046.6306%20155.623%2046.3178%20154.548%2045.6922C153.473%2045.0666%20152.642%2044.2031%20152.057%2043.1015C151.472%2041.9864%20151.179%2040.7148%20151.179%2039.2869C151.179%2037.8589%20151.472%2036.5942%20152.057%2035.4926C152.642%2034.3774%20153.466%2033.5139%20154.528%2032.9019C155.603%2032.2763%20156.842%2031.9635%20158.244%2031.9635Z'%20fill='%232E89F5'/%3e%3cpath%20d='M181.142%2046.4878H178.814L171.81%2035.8598V46.4878H169.483V32.1063H171.81L178.814%2042.7751V32.1063H181.142V46.4878Z'%20fill='%232E89F5'/%3e%3c/svg%3e", Y8 = "data:image/svg+xml,%3csvg%20width='311'%20height='96'%20viewBox='0%200%20311%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M191.593%2034.6343C191.593%2053.0702%20205.038%2068.7398%20223.594%2068.7398V0C205.038%200%20191.593%2016.1984%20191.593%2034.6343Z'%20fill='white'/%3e%3cpath%20d='M260.848%2061.0727C260.848%2042.6368%20247.403%2026.9672%20228.847%2026.9672V95.707C247.403%2095.707%20260.848%2079.5085%20260.848%2061.0727Z'%20fill='white'/%3e%3cpath%20d='M310.806%2047.4854C310.806%2021.817%20292.023%207.62939e-06%20266.101%207.62939e-06V95.707C292.023%2095.707%20310.806%2073.1538%20310.806%2047.4854Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.50195%2055.9767H5.76245C6.64442%2055.9767%206.97981%2056.2972%206.97981%2057.0822C6.97981%2057.8382%206.64425%2058.1583%205.76245%2058.1583H3.50195V55.9767ZM0%2063.9171H3.50212V60.6883H7.25327C9.73685%2060.6883%2010.631%2059.1474%2010.631%2057.1553C10.631%2054.8428%209.71157%2053.5343%207.228%2053.5343H0V63.9171ZM11.786%2053.5343H21.2115V56.064H15.2881V57.4601H20.79V59.9909H15.2881V61.3868H21.2115V63.9171H11.786V53.5343ZM26.1795%2055.9767H28.4399C29.3217%2055.9767%2029.6572%2056.2972%2029.6572%2057.0822C29.6572%2057.8382%2029.3217%2058.1583%2028.4399%2058.1583H26.1795V55.9767ZM22.6774%2063.9171H26.1795V60.6883H29.93C32.4143%2060.6883%2033.3086%2059.1474%2033.3086%2057.1553C33.3086%2054.8428%2032.3892%2053.5343%2029.9051%2053.5343H22.6774V63.9171ZM36.6984%2059.5109C34.9849%2059.205%2034.2775%2058.0417%2034.2775%2056.5879C34.2775%2053.8972%2036.5254%2053.1707%2039.4059%2053.1707C43.3547%2053.1707%2044.982%2054.3772%2045.1063%2056.5734H41.0327C41.0327%2056.1516%2040.8215%2055.8893%2040.4991%2055.744C40.1885%2055.5845%2039.7914%2055.5264%2039.4059%2055.5264C38.3628%2055.5264%2038.003%2055.8314%2038.003%2056.2681C38.003%2056.5584%2038.1143%2056.7481%2038.4621%2056.806L42.6472%2057.5328C44.4109%2057.8382%2045.504%2058.798%2045.504%2060.5571C45.504%2063.0883%2043.7403%2064.2807%2039.8033%2064.2807C37.1085%2064.2807%2034.165%2063.8446%2034.1528%2060.7906H38.3752C38.3871%2061.1392%2038.4994%2061.3718%2038.7481%2061.5319C39.0081%2061.6775%2039.3934%2061.7504%2039.9396%2061.7504C41.0323%2061.7504%2041.3309%2061.4011%2041.3309%2060.9066C41.3309%2060.6012%2041.1691%2060.2961%2040.6981%2060.2093L36.6984%2059.5109ZM46.646%2053.5343H50.1479V63.9171H46.646V53.5343ZM63.1268%2059.8744C62.9033%2061.2414%2062.5053%2062.3466%2061.6358%2063.1026C60.7795%2063.8589%2059.4378%2064.2807%2057.3021%2064.2807C55.1785%2064.2807%2051.2416%2064.1058%2051.2416%2058.726C51.2416%2053.3451%2055.1785%2053.1705%2057.3021%2053.1705C59.4128%2053.1705%2062.6669%2053.4902%2063.1268%2057.6061H59.1775C59.0781%2056.8637%2058.6552%2055.7878%2057.3021%2055.7878C55.8732%2055.7878%2054.9668%2056.6166%2054.9668%2058.7258C54.9668%2060.8344%2055.8488%2061.6627%2057.1279%2061.6627C58.2335%2061.6627%2058.8917%2061.1247%2059.1774%2059.8743L63.1268%2059.8744ZM67.7091%2058.7262C67.7091%2056.6168%2068.616%2055.7882%2070.0444%2055.7882C71.4723%2055.7882%2072.3794%2056.617%2072.3794%2058.7262C72.3794%2060.8348%2071.4723%2061.6631%2070.0444%2061.6631C68.616%2061.6629%2067.7091%2060.8346%2067.7091%2058.7262ZM63.983%2058.7262C63.983%2064.1058%2067.92%2064.2809%2070.0442%2064.2809C72.168%2064.2809%2076.1049%2064.106%2076.1049%2058.7262C76.1049%2053.3453%2072.168%2053.1707%2070.0442%2053.1707C67.92%2053.1707%2063.983%2053.3451%2063.983%2058.7262Z'%20fill='white'/%3e%3cpath%20d='M9.9437%2042.6527C9.9437%2043.3599%209.77355%2044.0195%209.43324%2044.6315C9.09294%2045.2298%208.57568%2045.7126%207.88146%2046.0798C7.18723%2046.447%206.33647%2046.6306%205.32917%2046.6306C4.34909%2046.6306%203.47111%2046.4606%202.69521%2046.1206C1.91932%2045.767%201.29996%2045.2774%200.837149%2044.6519C0.374335%2044.0263%200.108897%2043.3055%200.0408365%2042.4895H2.53187C2.59993%2043.1151%202.86537%2043.6523%203.32818%2044.1011C3.80461%2044.5499%204.43757%2044.7743%205.22708%2044.7743C5.93491%2044.7743%206.4794%2044.5839%206.86054%2044.2031C7.2553%2043.8223%207.45267%2043.3327%207.45267%2042.7343C7.45267%2042.2176%207.30974%2041.796%207.02389%2041.4696C6.73803%2041.1296%206.38412%2040.8644%205.96214%2040.674C5.54016%2040.4836%204.96164%2040.266%204.22658%2040.0212C3.32818%2039.7356%202.59312%2039.4501%202.02141%2039.1645C1.46331%2038.8789%200.986883%2038.4641%200.59213%2037.9201C0.197377%2037.3761%200%2036.6622%200%2035.7782C0%2035.003%200.190571%2034.3231%200.571712%2033.7383C0.952853%2033.1535%201.49734%2032.7047%202.20517%2032.3919C2.91301%2032.0655%203.72974%2031.9023%204.65537%2031.9023C6.12548%2031.9023%207.28933%2032.2559%208.14689%2032.9631C9.01807%2033.6703%209.51492%2034.595%209.63743%2035.7374H7.12598C7.03069%2035.1934%206.77206%2034.731%206.35009%2034.3503C5.94172%2033.9559%205.37681%2033.7587%204.65537%2033.7587C4.00198%2033.7587%203.47791%2033.9287%203.08316%2034.2687C2.68841%2034.595%202.49103%2035.071%202.49103%2035.6966C2.49103%2036.1862%202.62715%2036.5942%202.8994%2036.9206C3.17164%2037.2333%203.51194%2037.4849%203.92031%2037.6753C4.34229%2037.8521%204.914%2038.0629%205.63545%2038.3077C6.54746%2038.5933%207.28933%2038.8857%207.86104%2039.1849C8.44636%2039.4705%208.9364%2039.892%209.33115%2040.4496C9.73952%2041.0072%209.9437%2041.7416%209.9437%2042.6527Z'%20fill='white'/%3e%3cpath%20d='M16.6434%2033.9627V38.3281H21.9522V40.1232H16.6434V44.5907H22.5647V46.4878H14.3158V32.0859H22.5647V33.9627H16.6434Z'%20fill='white'/%3e%3cpath%20d='M34.441%2046.4878L30.8474%2040.7352H29.1935V46.4878H26.8658V32.0859H31.95C33.5971%2032.0859%2034.8426%2032.4871%2035.6865%2033.2895C36.5441%2034.0919%2036.9729%2035.1526%2036.9729%2036.4718C36.9729%2037.6005%2036.653%2038.5253%2036.0132%2039.2461C35.3871%2039.9668%2034.475%2040.4292%2033.2772%2040.6332L37.0545%2046.4878H34.441ZM29.1935%2039.0829H31.7662C33.6447%2039.0829%2034.5839%2038.2533%2034.5839%2036.5942C34.5839%2035.8054%2034.3525%2035.1934%2033.8897%2034.7582C33.4405%2034.3095%2032.7327%2034.0851%2031.7662%2034.0851H29.1935V39.0829Z'%20fill='white'/%3e%3cpath%20d='M42.5605%2032.0859L46.7054%2043.9991L50.8707%2032.0859H53.4026L48.1959%2046.4878H45.2148L40.0286%2032.0859H42.5605Z'%20fill='white'/%3e%3cpath%20d='M59.4979%2032.0859V46.4878H57.1702V32.0859H59.4979Z'%20fill='white'/%3e%3cpath%20d='M70.7883%2031.9431C72.5578%2031.9431%2074.028%2032.3919%2075.1986%2033.2895C76.3693%2034.1871%2077.1588%2035.4042%2077.5671%2036.941H75.0965C74.7562%2036.0706%2074.2117%2035.3838%2073.4631%2034.8806C72.728%2034.3639%2071.8228%2034.1055%2070.7474%2034.1055C69.8899%2034.1055%2069.1208%2034.3163%2068.4402%2034.7378C67.7732%2035.1594%2067.2423%2035.7646%2066.8475%2036.5534C66.4664%2037.3285%2066.2758%2038.2397%2066.2758%2039.2869C66.2758%2040.3204%2066.4664%2041.2316%2066.8475%2042.0204C67.2423%2042.7955%2067.7732%2043.3939%2068.4402%2043.8155C69.1208%2044.2371%2069.8899%2044.4479%2070.7474%2044.4479C71.8228%2044.4479%2072.728%2044.1963%2073.4631%2043.6931C74.2117%2043.1763%2074.7562%2042.4895%2075.0965%2041.6328H77.5671C77.1588%2043.1695%2076.3693%2044.3867%2075.1986%2045.2842C74.028%2046.1682%2072.5578%2046.6102%2070.7883%2046.6102C69.427%2046.6102%2068.2224%2046.3042%2067.1742%2045.6922C66.1261%2045.0666%2065.3162%2044.2031%2064.7444%2043.1015C64.1727%2041.9864%2063.8869%2040.7148%2063.8869%2039.2869C63.8869%2037.8589%2064.1727%2036.5942%2064.7444%2035.4926C65.3162%2034.3774%2066.1261%2033.5071%2067.1742%2032.8815C68.2224%2032.2559%2069.427%2031.9431%2070.7883%2031.9431Z'%20fill='white'/%3e%3cpath%20d='M84.2591%2033.9627V38.3281H89.5678V40.1232H84.2591V44.5907H90.1804V46.4878H81.9314V32.0859H90.1804V33.9627H84.2591Z'%20fill='white'/%3e%3cpath%20d='M113.682%2039.2665C113.682%2040.7216%20113.383%2041.9932%20112.784%2043.0811C112.199%2044.1555%20111.334%2044.9918%20110.191%2045.5902C109.061%2046.1886%20107.707%2046.4878%20106.128%2046.4878H101.309V32.0859H106.128C107.707%2032.0859%20109.061%2032.3851%20110.191%2032.9835C111.334%2033.5683%20112.199%2034.3978%20112.784%2035.4722C113.383%2036.5466%20113.682%2037.8113%20113.682%2039.2665ZM105.944%2044.3867C107.672%2044.3867%20109%2043.9379%20109.925%2043.0403C110.851%2042.1428%20111.314%2040.8848%20111.314%2039.2665C111.314%2037.6481%20110.851%2036.3902%20109.925%2035.4926C109%2034.595%20107.672%2034.1463%20105.944%2034.1463H103.636V44.3867H105.944Z'%20fill='white'/%3e%3cpath%20d='M120.394%2033.9627V38.3281H125.703V40.1232H120.394V44.5907H126.315V46.4878H118.066V32.0859H126.315V33.9627H120.394Z'%20fill='white'/%3e%3cpath%20d='M140.09%2042.6527C140.09%2043.3599%20139.92%2044.0195%20139.58%2044.6315C139.24%2045.2298%20138.722%2045.7126%20138.028%2046.0798C137.334%2046.447%20136.483%2046.6306%20135.476%2046.6306C134.496%2046.6306%20133.618%2046.4606%20132.842%2046.1206C132.066%2045.767%20131.447%2045.2774%20130.984%2044.6519C130.521%2044.0263%20130.255%2043.3055%20130.187%2042.4895H132.678C132.747%2043.1151%20133.012%2043.6523%20133.475%2044.1011C133.951%2044.5499%20134.584%2044.7743%20135.374%2044.7743C136.081%2044.7743%20136.626%2044.5839%20137.007%2044.2031C137.402%2043.8223%20137.599%2043.3327%20137.599%2042.7343C137.599%2042.2176%20137.456%2041.796%20137.17%2041.4696C136.885%2041.1296%20136.531%2040.8644%20136.109%2040.674C135.687%2040.4836%20135.108%2040.266%20134.373%2040.0212C133.475%2039.7356%20132.74%2039.4501%20132.168%2039.1645C131.61%2038.8789%20131.133%2038.4641%20130.739%2037.9201C130.344%2037.3761%20130.147%2036.6622%20130.147%2035.7782C130.147%2035.003%20130.337%2034.3231%20130.718%2033.7383C131.099%2033.1535%20131.644%2032.7047%20132.352%2032.3919C133.06%2032.0655%20133.876%2031.9023%20134.802%2031.9023C136.272%2031.9023%20137.436%2032.2559%20138.293%2032.9631C139.165%2033.6703%20139.661%2034.595%20139.784%2035.7374H137.273C137.177%2035.1934%20136.919%2034.731%20136.497%2034.3503C136.088%2033.9559%20135.523%2033.7587%20134.802%2033.7587C134.149%2033.7587%20133.624%2033.9287%20133.23%2034.2687C132.835%2034.595%20132.638%2035.071%20132.638%2035.6966C132.638%2036.1862%20132.774%2036.5942%20133.046%2036.9206C133.318%2037.2333%20133.659%2037.4849%20134.067%2037.6753C134.489%2037.8521%20135.061%2038.0629%20135.782%2038.3077C136.694%2038.5933%20137.436%2038.8857%20138.008%2039.1849C138.593%2039.4705%20139.083%2039.892%20139.478%2040.4496C139.886%2041.0072%20140.09%2041.7416%20140.09%2042.6527Z'%20fill='white'/%3e%3cpath%20d='M146.79%2032.0859V46.4878H144.462V32.0859H146.79Z'%20fill='white'/%3e%3cpath%20d='M158.244%2031.9635C159.959%2031.9635%20161.388%2032.3851%20162.532%2033.2283C163.675%2034.0715%20164.43%2035.2206%20164.798%2036.6758H162.348C162.035%2035.9006%20161.517%2035.2818%20160.796%2034.8194C160.088%2034.3571%20159.244%2034.1259%20158.264%2034.1259C157.366%2034.1259%20156.556%2034.3367%20155.834%2034.7582C155.127%2035.1798%20154.568%2035.7782%20154.16%2036.5534C153.765%2037.3285%20153.568%2038.2397%20153.568%2039.2869C153.568%2040.3884%20153.772%2041.3336%20154.181%2042.1224C154.589%2042.9111%20155.161%2043.5163%20155.896%2043.9379C156.644%2044.3459%20157.509%2044.5499%20158.489%2044.5499C159.687%2044.5499%20160.714%2044.1827%20161.572%2043.4483C162.429%2042.7003%20162.947%2041.6804%20163.124%2040.3884H157.835V38.6749H165.084V40.8984C164.921%2041.9592%20164.539%2042.9247%20163.94%2043.7951C163.355%2044.6519%20162.572%2045.3386%20161.592%2045.8554C160.626%2046.3722%20159.516%2046.6306%20158.264%2046.6306C156.862%2046.6306%20155.623%2046.3178%20154.548%2045.6922C153.473%2045.0666%20152.642%2044.2031%20152.057%2043.1015C151.472%2041.9864%20151.179%2040.7148%20151.179%2039.2869C151.179%2037.8589%20151.472%2036.5942%20152.057%2035.4926C152.642%2034.3774%20153.466%2033.5139%20154.528%2032.9019C155.603%2032.2763%20156.842%2031.9635%20158.244%2031.9635Z'%20fill='white'/%3e%3cpath%20d='M181.142%2046.4878H178.814L171.81%2035.8598V46.4878H169.483V32.1063H171.81L178.814%2042.7751V32.1063H181.142V46.4878Z'%20fill='white'/%3e%3c/svg%3e", $8 = "data:image/svg+xml,%3csvg%20width='179'%20height='152'%20viewBox='0%200%20179%20152'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M55.5012%20143.683H57.7139C58.5772%20143.683%2058.9055%20143.998%2058.9055%20144.769C58.9055%20145.511%2058.5771%20145.825%2057.7139%20145.825H55.5012V143.683ZM52.0734%20151.478H55.5014V148.308H59.1732C61.6042%20148.308%2062.4795%20146.796%2062.4795%20144.84C62.4795%20142.57%2061.5795%20141.286%2059.1484%20141.286H52.0734V151.478ZM63.61%20141.286H72.8361V143.769H67.038V145.139H72.4235V147.624H67.038V148.994H72.8361V151.478H63.61V141.286ZM77.699%20143.683H79.9116C80.7747%20143.683%2081.1032%20143.998%2081.1032%20144.769C81.1032%20145.511%2080.7747%20145.825%2079.9116%20145.825H77.699V143.683ZM74.271%20151.478H77.699V148.308H81.3702C83.8019%20148.308%2084.6773%20146.796%2084.6773%20144.84C84.6773%20142.57%2083.7773%20141.286%2081.3458%20141.286H74.271V151.478ZM87.9954%20147.153C86.3181%20146.852%2085.6256%20145.71%2085.6256%20144.283C85.6256%20141.642%2087.826%20140.929%2090.6456%20140.929C94.5109%20140.929%2096.1037%20142.113%2096.2254%20144.269H92.2379C92.2379%20143.855%2092.0312%20143.597%2091.7157%20143.455C91.4116%20143.298%2091.0229%20143.241%2090.6456%20143.241C89.6246%20143.241%2089.2724%20143.541%2089.2724%20143.969C89.2724%20144.254%2089.3813%20144.441%2089.7217%20144.497L93.8183%20145.211C95.5447%20145.511%2096.6146%20146.453%2096.6146%20148.18C96.6146%20150.664%2094.8883%20151.835%2091.0345%20151.835C88.3968%20151.835%2085.5156%20151.407%2085.5036%20148.409H89.6367C89.6483%20148.751%2089.7582%20148.979%2090.0017%20149.137C90.2562%20149.28%2090.6334%20149.351%2091.168%20149.351C92.2376%20149.351%2092.5299%20149.008%2092.5299%20148.523C92.5299%20148.223%2092.3714%20147.923%2091.9105%20147.838L87.9954%20147.153ZM97.7325%20141.286H101.16V151.478H97.7325V141.286ZM113.865%20147.51C113.646%20148.851%20113.256%20149.936%20112.405%20150.678C111.567%20151.421%20110.254%20151.835%20108.163%20151.835C106.085%20151.835%20102.231%20151.663%20102.231%20146.382C102.231%20141.1%20106.085%20140.929%20108.163%20140.929C110.229%20140.929%20113.415%20141.242%20113.865%20145.283H109.999C109.902%20144.554%20109.488%20143.498%20108.163%20143.498C106.765%20143.498%20105.877%20144.311%20105.877%20146.382C105.877%20148.452%20106.741%20149.265%20107.993%20149.265C109.075%20149.265%20109.719%20148.737%20109.999%20147.509L113.865%20147.51ZM118.35%20146.382C118.35%20144.312%20119.238%20143.498%20120.636%20143.498C122.034%20143.498%20122.921%20144.312%20122.921%20146.382C122.921%20148.452%20122.034%20149.265%20120.636%20149.265C119.238%20149.265%20118.35%20148.452%20118.35%20146.382ZM114.703%20146.382C114.703%20151.663%20118.556%20151.835%20120.636%20151.835C122.715%20151.835%20126.568%20151.663%20126.568%20146.382C126.568%20141.1%20122.715%20140.929%20120.636%20140.929C118.556%20140.929%20114.703%20141.1%20114.703%20146.382Z'%20fill='%232E89F5'/%3e%3cpath%20d='M10.2333%20125.906C10.2333%20126.6%2010.0668%20127.248%209.73368%20127.848C9.40057%20128.436%208.89425%20128.91%208.21472%20129.27C7.53518%20129.631%206.70242%20129.811%205.71643%20129.811C4.75708%20129.811%203.89767%20129.644%203.13819%20129.31C2.37871%20128.963%201.77246%20128.482%201.31944%20127.868C0.866416%20127.254%200.606594%20126.547%200.539973%20125.746H2.9783C3.04492%20126.36%203.30475%20126.887%203.75777%20127.328C4.22412%20127.768%204.84369%20127.989%205.6165%20127.989C6.30935%20127.989%206.84232%20127.802%207.2154%20127.428C7.6018%20127.054%207.795%20126.573%207.795%20125.986C7.795%20125.479%207.6551%20125.065%207.37529%20124.744C7.09548%20124.411%206.74905%20124.15%206.336%20123.963C5.92295%20123.777%205.35667%20123.563%204.63717%20123.323C3.75777%20123.042%203.03826%20122.762%202.47864%20122.482C1.93235%20122.201%201.46601%20121.794%201.0796%20121.26C0.693201%20120.726%200.5%20120.025%200.5%20119.157C0.5%20118.396%200.686539%20117.729%201.05962%20117.155C1.43269%20116.581%201.96566%20116.14%202.65852%20115.833C3.35138%20115.513%204.15083%20115.353%205.05688%20115.353C6.49589%20115.353%207.63511%20115.7%208.47454%20116.394C9.32729%20117.088%209.81362%20117.996%209.93354%20119.117H7.47522C7.38195%20118.583%207.12879%20118.129%206.71574%20117.756C6.31602%20117.368%205.76306%20117.175%205.05688%20117.175C4.41732%20117.175%203.90434%20117.342%203.51793%20117.676C3.13153%20117.996%202.93833%20118.463%202.93833%20119.077C2.93833%20119.558%203.07157%20119.958%203.33806%20120.279C3.60454%20120.586%203.93765%20120.833%204.33737%20121.02C4.75042%20121.193%205.31004%20121.4%206.01622%20121.641C6.90894%20121.921%207.63511%20122.208%208.19473%20122.502C8.76767%20122.782%209.24734%20123.196%209.63375%20123.743C10.0335%20124.291%2010.2333%20125.011%2010.2333%20125.906Z'%20fill='%232E89F5'/%3e%3cpath%20d='M16.7913%20117.375V121.661H21.9878V123.423H16.7913V127.808H22.5874V129.671H14.5129V115.533H22.5874V117.375H16.7913Z'%20fill='%232E89F5'/%3e%3cpath%20d='M34.2124%20129.671L30.6948%20124.024H29.0759V129.671H26.7975V115.533H31.774C33.3863%20115.533%2034.6054%20115.927%2035.4315%20116.714C36.271%20117.502%2036.6907%20118.543%2036.6907%20119.838C36.6907%20120.946%2036.3776%20121.854%2035.7513%20122.562C35.1384%20123.269%2034.2457%20123.723%2033.0732%20123.923L36.7706%20129.671H34.2124ZM29.0759%20122.401H31.5942C33.4329%20122.401%2034.3523%20121.587%2034.3523%20119.958C34.3523%20119.184%2034.1258%20118.583%2033.6727%20118.156C33.233%20117.716%2032.5402%20117.495%2031.5942%20117.495H29.0759V122.401Z'%20fill='%232E89F5'/%3e%3cpath%20d='M42.1601%20115.533L46.2173%20127.228L50.2945%20115.533H52.7728L47.6763%20129.671H44.7583L39.6818%20115.533H42.1601Z'%20fill='%232E89F5'/%3e%3cpath%20d='M58.7392%20115.533V129.671H56.4607V115.533H58.7392Z'%20fill='%232E89F5'/%3e%3cpath%20d='M69.7907%20115.393C71.5228%20115.393%2072.9618%20115.833%2074.1077%20116.714C75.2536%20117.595%2076.0264%20118.79%2076.4261%20120.299H74.0078C73.6747%20119.444%2073.1417%20118.77%2072.4089%20118.276C71.6894%20117.769%2070.8033%20117.515%2069.7507%20117.515C68.9113%20117.515%2068.1584%20117.722%2067.4922%20118.136C66.8394%20118.55%2066.3197%20119.144%2065.9333%20119.918C65.5602%20120.679%2065.3737%20121.574%2065.3737%20122.602C65.3737%20123.616%2065.5602%20124.511%2065.9333%20125.285C66.3197%20126.046%2066.8394%20126.633%2067.4922%20127.047C68.1584%20127.461%2068.9113%20127.668%2069.7507%20127.668C70.8033%20127.668%2071.6894%20127.421%2072.4089%20126.927C73.1417%20126.42%2073.6747%20125.746%2074.0078%20124.905H76.4261C76.0264%20126.413%2075.2536%20127.608%2074.1077%20128.489C72.9618%20129.357%2071.5228%20129.791%2069.7907%20129.791C68.4582%20129.791%2067.2791%20129.49%2066.2531%20128.89C65.2271%20128.276%2064.4343%20127.428%2063.8747%20126.346C63.3151%20125.252%2063.0353%20124.003%2063.0353%20122.602C63.0353%20121.2%2063.3151%20119.958%2063.8747%20118.877C64.4343%20117.782%2065.2271%20116.928%2066.2531%20116.314C67.2791%20115.7%2068.4582%20115.393%2069.7907%20115.393Z'%20fill='%232E89F5'/%3e%3cpath%20d='M82.9765%20117.375V121.661H88.1729V123.423H82.9765V127.808H88.7725V129.671H80.698V115.533H88.7725V117.375H82.9765Z'%20fill='%232E89F5'/%3e%3cpath%20d='M111.777%20122.582C111.777%20124.01%20111.484%20125.258%20110.898%20126.326C110.325%20127.381%20109.479%20128.202%20108.36%20128.79C107.254%20129.377%20105.928%20129.671%20104.382%20129.671H99.6655V115.533H104.382C105.928%20115.533%20107.254%20115.827%20108.36%20116.414C109.479%20116.988%20110.325%20117.802%20110.898%20118.857C111.484%20119.912%20111.777%20121.153%20111.777%20122.582ZM104.202%20127.608C105.895%20127.608%20107.194%20127.167%20108.1%20126.286C109.006%20125.405%20109.459%20124.17%20109.459%20122.582C109.459%20120.993%20109.006%20119.758%20108.1%20118.877C107.194%20117.996%20105.895%20117.555%20104.202%20117.555H101.944V127.608H104.202Z'%20fill='%232E89F5'/%3e%3cpath%20d='M118.347%20117.375V121.661H123.543V123.423H118.347V127.808H124.143V129.671H116.068V115.533H124.143V117.375H118.347Z'%20fill='%232E89F5'/%3e%3cpath%20d='M137.627%20125.906C137.627%20126.6%20137.46%20127.248%20137.127%20127.848C136.794%20128.436%20136.287%20128.91%20135.608%20129.27C134.928%20129.631%20134.096%20129.811%20133.11%20129.811C132.15%20129.811%20131.291%20129.644%20130.531%20129.31C129.772%20128.963%20129.166%20128.482%20128.713%20127.868C128.26%20127.254%20128%20126.547%20127.933%20125.746H130.372C130.438%20126.36%20130.698%20126.887%20131.151%20127.328C131.617%20127.768%20132.237%20127.989%20133.01%20127.989C133.703%20127.989%20134.236%20127.802%20134.609%20127.428C134.995%20127.054%20135.188%20126.573%20135.188%20125.986C135.188%20125.479%20135.048%20125.065%20134.769%20124.744C134.489%20124.411%20134.142%20124.15%20133.729%20123.963C133.316%20123.777%20132.75%20123.563%20132.03%20123.323C131.151%20123.042%20130.431%20122.762%20129.872%20122.482C129.326%20122.201%20128.859%20121.794%20128.473%20121.26C128.086%20120.726%20127.893%20120.025%20127.893%20119.157C127.893%20118.396%20128.08%20117.729%20128.453%20117.155C128.826%20116.581%20129.359%20116.14%20130.052%20115.833C130.745%20115.513%20131.544%20115.353%20132.45%20115.353C133.889%20115.353%20135.028%20115.7%20135.868%20116.394C136.721%20117.088%20137.207%20117.996%20137.327%20119.117H134.868C134.775%20118.583%20134.522%20118.129%20134.109%20117.756C133.709%20117.368%20133.156%20117.175%20132.45%20117.175C131.811%20117.175%20131.298%20117.342%20130.911%20117.676C130.525%20117.996%20130.332%20118.463%20130.332%20119.077C130.332%20119.558%20130.465%20119.958%20130.731%20120.279C130.998%20120.586%20131.331%20120.833%20131.731%20121.02C132.144%20121.193%20132.703%20121.4%20133.409%20121.641C134.302%20121.921%20135.028%20122.208%20135.588%20122.502C136.161%20122.782%20136.641%20123.196%20137.027%20123.743C137.427%20124.291%20137.627%20125.011%20137.627%20125.906Z'%20fill='%232E89F5'/%3e%3cpath%20d='M144.185%20115.533V129.671H141.906V115.533H144.185Z'%20fill='%232E89F5'/%3e%3cpath%20d='M155.396%20115.413C157.075%20115.413%20158.474%20115.827%20159.593%20116.654C160.712%20117.482%20161.452%20118.61%20161.812%20120.038H159.413C159.107%20119.278%20158.6%20118.67%20157.894%20118.216C157.201%20117.762%20156.375%20117.535%20155.416%20117.535C154.537%20117.535%20153.744%20117.742%20153.038%20118.156C152.345%20118.57%20151.798%20119.157%20151.399%20119.918C151.012%20120.679%20150.819%20121.574%20150.819%20122.602C150.819%20123.683%20151.019%20124.611%20151.419%20125.385C151.818%20126.16%20152.378%20126.754%20153.098%20127.167C153.83%20127.568%20154.676%20127.768%20155.636%20127.768C156.808%20127.768%20157.814%20127.408%20158.654%20126.687C159.493%20125.953%20159.999%20124.951%20160.173%20123.683H154.996V122.001H162.091V124.184C161.931%20125.225%20161.558%20126.173%20160.972%20127.027C160.399%20127.868%20159.633%20128.543%20158.674%20129.05C157.728%20129.557%20156.642%20129.811%20155.416%20129.811C154.044%20129.811%20152.831%20129.504%20151.778%20128.89C150.726%20128.276%20149.913%20127.428%20149.34%20126.346C148.767%20125.252%20148.481%20124.003%20148.481%20122.602C148.481%20121.2%20148.767%20119.958%20149.34%20118.877C149.913%20117.782%20150.719%20116.935%20151.758%20116.334C152.811%20115.72%20154.024%20115.413%20155.396%20115.413Z'%20fill='%232E89F5'/%3e%3cpath%20d='M177.809%20129.671H175.531L168.676%20119.237V129.671H166.397V115.553H168.676L175.531%20126.026V115.553H177.809V129.671Z'%20fill='%232E89F5'/%3e%3cpath%20d='M31.7566%2033.9993C31.7566%2052.0972%2044.9178%2067.4796%2063.0808%2067.4796V0C44.9178%200%2031.7566%2015.9015%2031.7566%2033.9993Z'%20fill='%232E89F5'/%3e%3cpath%20d='M99.5468%2059.953C99.5468%2041.8551%2086.3856%2026.4728%2068.2225%2026.4728V93.9523C86.3856%2093.9523%2099.5468%2078.0509%2099.5468%2059.953Z'%20fill='%232E89F5'/%3e%3cpath%20d='M148.448%2046.6148C148.448%2021.417%20130.062%200%20104.689%200V93.9523C130.062%2093.9523%20148.448%2071.8126%20148.448%2046.6148Z'%20fill='%232E89F5'/%3e%3c/svg%3e", W8 = "data:image/svg+xml,%3csvg%20width='178'%20height='152'%20viewBox='0%200%20178%20152'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M55.0012%20143.683H57.2139C58.0772%20143.683%2058.4055%20143.998%2058.4055%20144.769C58.4055%20145.511%2058.077%20145.825%2057.2139%20145.825H55.0012V143.683ZM51.5733%20151.478H55.0014V148.308H58.6732C61.1042%20148.308%2061.9795%20146.796%2061.9795%20144.84C61.9795%20142.57%2061.0794%20141.286%2058.6484%20141.286H51.5733V151.478ZM63.11%20141.286H72.3361V143.769H66.538V145.139H71.9235V147.624H66.538V148.994H72.3361V151.478H63.11V141.286ZM77.199%20143.683H79.4115C80.2747%20143.683%2080.6031%20143.998%2080.6031%20144.769C80.6031%20145.511%2080.2747%20145.825%2079.4115%20145.825H77.199V143.683ZM73.771%20151.478H77.199V148.308H80.8701C83.3018%20148.308%2084.1773%20146.796%2084.1773%20144.84C84.1773%20142.57%2083.2773%20141.286%2080.8457%20141.286H73.771V151.478ZM87.4954%20147.153C85.8181%20146.852%2085.1256%20145.71%2085.1256%20144.283C85.1256%20141.642%2087.326%20140.929%2090.1456%20140.929C94.0109%20140.929%2095.6037%20142.113%2095.7254%20144.269H91.7379C91.7379%20143.855%2091.5312%20143.597%2091.2157%20143.455C90.9116%20143.298%2090.5229%20143.241%2090.1456%20143.241C89.1245%20143.241%2088.7723%20143.541%2088.7723%20143.969C88.7723%20144.254%2088.8813%20144.441%2089.2217%20144.497L93.3182%20145.211C95.0447%20145.511%2096.1146%20146.453%2096.1146%20148.18C96.1146%20150.664%2094.3883%20151.835%2090.5345%20151.835C87.8967%20151.835%2085.0155%20151.407%2085.0036%20148.409H89.1367C89.1483%20148.751%2089.2582%20148.979%2089.5016%20149.137C89.7562%20149.28%2090.1333%20149.351%2090.668%20149.351C91.7376%20149.351%2092.0298%20149.008%2092.0298%20148.523C92.0298%20148.223%2091.8714%20147.923%2091.4104%20147.838L87.4954%20147.153ZM97.2325%20141.286H100.66V151.478H97.2325V141.286ZM113.365%20147.51C113.146%20148.851%20112.756%20149.936%20111.905%20150.678C111.067%20151.421%20109.754%20151.835%20107.663%20151.835C105.585%20151.835%20101.731%20151.663%20101.731%20146.382C101.731%20141.1%20105.585%20140.929%20107.663%20140.929C109.729%20140.929%20112.914%20141.242%20113.365%20145.283H109.499C109.402%20144.554%20108.988%20143.498%20107.663%20143.498C106.265%20143.498%20105.377%20144.311%20105.377%20146.382C105.377%20148.452%20106.241%20149.265%20107.493%20149.265C108.575%20149.265%20109.219%20148.737%20109.499%20147.509L113.365%20147.51ZM117.85%20146.382C117.85%20144.312%20118.738%20143.498%20120.136%20143.498C121.534%20143.498%20122.421%20144.312%20122.421%20146.382C122.421%20148.452%20121.534%20149.265%20120.136%20149.265C118.738%20149.265%20117.85%20148.452%20117.85%20146.382ZM114.203%20146.382C114.203%20151.663%20118.056%20151.835%20120.136%20151.835C122.215%20151.835%20126.068%20151.663%20126.068%20146.382C126.068%20141.1%20122.215%20140.929%20120.136%20140.929C118.056%20140.929%20114.203%20141.1%20114.203%20146.382Z'%20fill='white'/%3e%3cpath%20d='M9.73333%20125.906C9.73333%20126.6%209.56678%20127.248%209.23368%20127.848C8.90057%20128.436%208.39425%20128.91%207.71472%20129.27C7.03518%20129.631%206.20242%20129.811%205.21643%20129.811C4.25708%20129.811%203.39767%20129.644%202.63819%20129.31C1.87871%20128.963%201.27246%20128.482%200.819439%20127.868C0.366416%20127.254%200.106594%20126.547%200.0399725%20125.746H2.4783C2.54492%20126.36%202.80475%20126.887%203.25777%20127.328C3.72412%20127.768%204.34369%20127.989%205.1165%20127.989C5.80935%20127.989%206.34232%20127.802%206.7154%20127.428C7.1018%20127.054%207.295%20126.573%207.295%20125.986C7.295%20125.479%207.1551%20125.065%206.87529%20124.744C6.59548%20124.411%206.24905%20124.15%205.836%20123.963C5.42295%20123.777%204.85667%20123.563%204.13717%20123.323C3.25777%20123.042%202.53826%20122.762%201.97864%20122.482C1.43235%20122.201%200.966005%20121.794%200.579603%20121.26C0.193201%20120.726%200%20120.025%200%20119.157C0%20118.396%200.186539%20117.729%200.559617%20117.155C0.932694%20116.581%201.46566%20116.14%202.15852%20115.833C2.85138%20115.513%203.65083%20115.353%204.55688%20115.353C5.99589%20115.353%207.13511%20115.7%207.97454%20116.394C8.82729%20117.088%209.31362%20117.996%209.43354%20119.117H6.97522C6.88195%20118.583%206.62879%20118.129%206.21574%20117.756C5.81602%20117.368%205.26306%20117.175%204.55688%20117.175C3.91732%20117.175%203.40434%20117.342%203.01793%20117.676C2.63153%20117.996%202.43833%20118.463%202.43833%20119.077C2.43833%20119.558%202.57157%20119.958%202.83806%20120.279C3.10454%20120.586%203.43765%20120.833%203.83737%20121.02C4.25042%20121.193%204.81004%20121.4%205.51622%20121.641C6.40894%20121.921%207.13511%20122.208%207.69473%20122.502C8.26767%20122.782%208.74734%20123.196%209.13375%20123.743C9.53347%20124.291%209.73333%20125.011%209.73333%20125.906Z'%20fill='white'/%3e%3cpath%20d='M16.2913%20117.375V121.661H21.4878V123.423H16.2913V127.808H22.0874V129.671H14.0129V115.533H22.0874V117.375H16.2913Z'%20fill='white'/%3e%3cpath%20d='M33.7124%20129.671L30.1948%20124.024H28.5759V129.671H26.2975V115.533H31.274C32.8863%20115.533%2034.1054%20115.927%2034.9315%20116.714C35.771%20117.502%2036.1907%20118.543%2036.1907%20119.838C36.1907%20120.946%2035.8776%20121.854%2035.2513%20122.562C34.6384%20123.269%2033.7457%20123.723%2032.5732%20123.923L36.2706%20129.671H33.7124ZM28.5759%20122.401H31.0942C32.9329%20122.401%2033.8523%20121.587%2033.8523%20119.958C33.8523%20119.184%2033.6258%20118.583%2033.1727%20118.156C32.733%20117.716%2032.0402%20117.495%2031.0942%20117.495H28.5759V122.401Z'%20fill='white'/%3e%3cpath%20d='M41.6601%20115.533L45.7173%20127.228L49.7945%20115.533H52.2728L47.1763%20129.671H44.2583L39.1818%20115.533H41.6601Z'%20fill='white'/%3e%3cpath%20d='M58.2392%20115.533V129.671H55.9607V115.533H58.2392Z'%20fill='white'/%3e%3cpath%20d='M69.2907%20115.393C71.0228%20115.393%2072.4618%20115.833%2073.6077%20116.714C74.7536%20117.595%2075.5264%20118.79%2075.9261%20120.299H73.5078C73.1747%20119.444%2072.6417%20118.77%2071.9089%20118.276C71.1894%20117.769%2070.3033%20117.515%2069.2507%20117.515C68.4113%20117.515%2067.6584%20117.722%2066.9922%20118.136C66.3394%20118.55%2065.8197%20119.144%2065.4333%20119.918C65.0602%20120.679%2064.8737%20121.574%2064.8737%20122.602C64.8737%20123.616%2065.0602%20124.511%2065.4333%20125.285C65.8197%20126.046%2066.3394%20126.633%2066.9922%20127.047C67.6584%20127.461%2068.4113%20127.668%2069.2507%20127.668C70.3033%20127.668%2071.1894%20127.421%2071.9089%20126.927C72.6417%20126.42%2073.1747%20125.746%2073.5078%20124.905H75.9261C75.5264%20126.413%2074.7536%20127.608%2073.6077%20128.489C72.4618%20129.357%2071.0228%20129.791%2069.2907%20129.791C67.9582%20129.791%2066.7791%20129.49%2065.7531%20128.89C64.7271%20128.276%2063.9343%20127.428%2063.3747%20126.346C62.8151%20125.252%2062.5353%20124.003%2062.5353%20122.602C62.5353%20121.2%2062.8151%20119.958%2063.3747%20118.877C63.9343%20117.782%2064.7271%20116.928%2065.7531%20116.314C66.7791%20115.7%2067.9582%20115.393%2069.2907%20115.393Z'%20fill='white'/%3e%3cpath%20d='M82.4765%20117.375V121.661H87.6729V123.423H82.4765V127.808H88.2725V129.671H80.198V115.533H88.2725V117.375H82.4765Z'%20fill='white'/%3e%3cpath%20d='M111.277%20122.582C111.277%20124.01%20110.984%20125.258%20110.398%20126.326C109.825%20127.381%20108.979%20128.202%20107.86%20128.79C106.754%20129.377%20105.428%20129.671%20103.882%20129.671H99.1655V115.533H103.882C105.428%20115.533%20106.754%20115.827%20107.86%20116.414C108.979%20116.988%20109.825%20117.802%20110.398%20118.857C110.984%20119.912%20111.277%20121.153%20111.277%20122.582ZM103.702%20127.608C105.395%20127.608%20106.694%20127.167%20107.6%20126.286C108.506%20125.405%20108.959%20124.17%20108.959%20122.582C108.959%20120.993%20108.506%20119.758%20107.6%20118.877C106.694%20117.996%20105.395%20117.555%20103.702%20117.555H101.444V127.608H103.702Z'%20fill='white'/%3e%3cpath%20d='M117.847%20117.375V121.661H123.043V123.423H117.847V127.808H123.643V129.671H115.568V115.533H123.643V117.375H117.847Z'%20fill='white'/%3e%3cpath%20d='M137.127%20125.906C137.127%20126.6%20136.96%20127.248%20136.627%20127.848C136.294%20128.436%20135.787%20128.91%20135.108%20129.27C134.428%20129.631%20133.596%20129.811%20132.61%20129.811C131.65%20129.811%20130.791%20129.644%20130.031%20129.31C129.272%20128.963%20128.666%20128.482%20128.213%20127.868C127.76%20127.254%20127.5%20126.547%20127.433%20125.746H129.872C129.938%20126.36%20130.198%20126.887%20130.651%20127.328C131.117%20127.768%20131.737%20127.989%20132.51%20127.989C133.203%20127.989%20133.736%20127.802%20134.109%20127.428C134.495%20127.054%20134.688%20126.573%20134.688%20125.986C134.688%20125.479%20134.548%20125.065%20134.269%20124.744C133.989%20124.411%20133.642%20124.15%20133.229%20123.963C132.816%20123.777%20132.25%20123.563%20131.53%20123.323C130.651%20123.042%20129.931%20122.762%20129.372%20122.482C128.826%20122.201%20128.359%20121.794%20127.973%20121.26C127.586%20120.726%20127.393%20120.025%20127.393%20119.157C127.393%20118.396%20127.58%20117.729%20127.953%20117.155C128.326%20116.581%20128.859%20116.14%20129.552%20115.833C130.245%20115.513%20131.044%20115.353%20131.95%20115.353C133.389%20115.353%20134.528%20115.7%20135.368%20116.394C136.221%20117.088%20136.707%20117.996%20136.827%20119.117H134.368C134.275%20118.583%20134.022%20118.129%20133.609%20117.756C133.209%20117.368%20132.656%20117.175%20131.95%20117.175C131.311%20117.175%20130.798%20117.342%20130.411%20117.676C130.025%20117.996%20129.832%20118.463%20129.832%20119.077C129.832%20119.558%20129.965%20119.958%20130.231%20120.279C130.498%20120.586%20130.831%20120.833%20131.231%20121.02C131.644%20121.193%20132.203%20121.4%20132.909%20121.641C133.802%20121.921%20134.528%20122.208%20135.088%20122.502C135.661%20122.782%20136.141%20123.196%20136.527%20123.743C136.927%20124.291%20137.127%20125.011%20137.127%20125.906Z'%20fill='white'/%3e%3cpath%20d='M143.685%20115.533V129.671H141.406V115.533H143.685Z'%20fill='white'/%3e%3cpath%20d='M154.896%20115.413C156.575%20115.413%20157.974%20115.827%20159.093%20116.654C160.212%20117.482%20160.952%20118.61%20161.312%20120.038H158.913C158.607%20119.278%20158.1%20118.67%20157.394%20118.216C156.701%20117.762%20155.875%20117.535%20154.916%20117.535C154.037%20117.535%20153.244%20117.742%20152.538%20118.156C151.845%20118.57%20151.298%20119.157%20150.899%20119.918C150.512%20120.679%20150.319%20121.574%20150.319%20122.602C150.319%20123.683%20150.519%20124.611%20150.919%20125.385C151.318%20126.16%20151.878%20126.754%20152.598%20127.167C153.33%20127.568%20154.176%20127.768%20155.136%20127.768C156.308%20127.768%20157.314%20127.408%20158.154%20126.687C158.993%20125.953%20159.499%20124.951%20159.673%20123.683H154.496V122.001H161.591V124.184C161.431%20125.225%20161.058%20126.173%20160.472%20127.027C159.899%20127.868%20159.133%20128.543%20158.174%20129.05C157.228%20129.557%20156.142%20129.811%20154.916%20129.811C153.544%20129.811%20152.331%20129.504%20151.278%20128.89C150.226%20128.276%20149.413%20127.428%20148.84%20126.346C148.267%20125.252%20147.981%20124.003%20147.981%20122.602C147.981%20121.2%20148.267%20119.958%20148.84%20118.877C149.413%20117.782%20150.219%20116.935%20151.258%20116.334C152.311%20115.72%20153.524%20115.413%20154.896%20115.413Z'%20fill='white'/%3e%3cpath%20d='M177.309%20129.671H175.031L168.176%20119.237V129.671H165.897V115.553H168.176L175.031%20126.026V115.553H177.309V129.671Z'%20fill='white'/%3e%3cpath%20d='M31.2566%2033.9993C31.2566%2052.0972%2044.4178%2067.4796%2062.5808%2067.4796V0C44.4178%200%2031.2566%2015.9015%2031.2566%2033.9993Z'%20fill='white'/%3e%3cpath%20d='M99.0468%2059.953C99.0468%2041.8551%2085.8856%2026.4728%2067.7226%2026.4728V93.9523C85.8856%2093.9523%2099.0468%2078.0509%2099.0468%2059.953Z'%20fill='white'/%3e%3cpath%20d='M147.948%2046.6148C147.948%2021.417%20129.562%200%20104.189%200V93.9523C129.562%2093.9523%20147.948%2071.8126%20147.948%2046.6148Z'%20fill='white'/%3e%3c/svg%3e", X8 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%202H7.33333V7.33333H2V2ZM8.66667%202H14V7.33333H8.66667V2ZM2%208.66667H7.33333V14H2V8.66667ZM12%208.66667H10.6667V10.6667H8.66667V12H10.6667V14H12V12H14V10.6667H12V8.66667Z'%20fill='%23005CBC'/%3e%3c/svg%3e", K8 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%202H7.33333V7.33333H2V2ZM8.66667%202H14V7.33333H8.66667V2ZM2%208.66667H7.33333V14H2V8.66667ZM12%208.66667H10.6667V10.6667H8.66667V12H10.6667V14H12V12H14V10.6667H12V8.66667Z'%20fill='black'/%3e%3c/svg%3e", j1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%202H7.33333V7.33333H2V2ZM8.66667%202H14V7.33333H8.66667V2ZM2%208.66667H7.33333V14H2V8.66667ZM12%208.66667H10.6667V10.6667H8.66667V12H10.6667V14H12V12H14V10.6667H12V8.66667Z'%20fill='white'/%3e%3c/svg%3e", Og = ({
  logoType: e = "pepsicoFullLogo",
  ...a
}) => ({
  pepsicoFullLogo: /* @__PURE__ */ t.jsx(J8, { ...a }),
  pepsicoSymbol: /* @__PURE__ */ t.jsx(q8, { ...a }),
  appLogo: /* @__PURE__ */ t.jsx(e9, { ...a }),
  pepsicoServiceDesign: /* @__PURE__ */ t.jsx(t9, { ...a })
})[e], J8 = ({
  className: e,
  isDark: a,
  style: n,
  colorStyle: s = "color",
  ...i
}) => {
  const l = {
    color: G8,
    black: Q8,
    white: S1
  }, { isDark: d } = $(), f = j([
    "logo",
    co,
    a ?? d ? z : "",
    e ?? ""
  ]), u = {
    ...n ?? {}
    // default styles below
  };
  function m(g) {
    let b = l[g];
    return (a || d) && (b = S1), b;
  }
  return /* @__PURE__ */ t.jsx("div", { ...i, className: f, style: u, children: /* @__PURE__ */ t.jsx("img", { src: m(s), alt: "PepsiCo Logo" }) });
}, q8 = ({
  className: e,
  isDark: a,
  style: n,
  colorStyle: s = "color",
  ...i
}) => {
  const l = {
    color: z8,
    black: Z8,
    white: k1
  }, { isDark: d } = $(), f = j([
    "logo",
    co,
    a ?? d ? z : "",
    e ?? ""
  ]), u = {
    ...n ?? {}
    // default styles below
  };
  function m(g) {
    let b = l[g];
    return (a || d) && (b = k1), b;
  }
  return /* @__PURE__ */ t.jsx("div", { ...i, className: f, style: u, children: /* @__PURE__ */ t.jsx("img", { src: m(s), alt: "PepsiCo Symbol" }) });
}, e9 = ({
  className: e,
  isDark: a,
  style: n,
  colorStyle: s = "color",
  appName: i = "",
  ...l
}) => {
  const d = {
    color: X8,
    black: K8,
    white: j1
  }, f = {
    color: "$color-blue",
    black: "$color-black",
    white: "$color-white"
  }, { isDark: u } = $(), m = j([
    "logo",
    co,
    a ?? u ? z : "",
    e ?? ""
  ]), g = {
    ...n ?? {}
    // default styles below
  };
  function b(p) {
    let v = d[p];
    return (a || u) && (v = j1), v;
  }
  const y = a || u ? f.white : f[s];
  return /* @__PURE__ */ t.jsxs("div", { ...l, className: m, style: g, children: [
    /* @__PURE__ */ t.jsx(
      "img",
      {
        src: b(s),
        alt: "App Logo",
        className: En
      }
    ),
    /* @__PURE__ */ t.jsx("span", { className: j([sr, y]), children: i })
  ] });
}, t9 = ({
  className: e,
  isDark: a,
  style: n,
  sdType: s = "horizontal",
  ...i
}) => {
  const l = {
    horizontal: U8,
    stacked: $8
  }, d = {
    horizontal: Y8,
    stacked: W8
  }, { isDark: f } = $(), u = j([
    "logo",
    co,
    a ?? f ? z : "",
    e ?? ""
  ]), m = {
    ...n ?? {}
    // default styles below
  };
  function g(b) {
    let y = l[b];
    return (a || f) && (y = d[b]), y;
  }
  return /* @__PURE__ */ t.jsx("div", { ...i, className: u, style: m, children: /* @__PURE__ */ t.jsx("img", { src: g(s), alt: "PepsiCo Design Logo" }) });
}, r9 = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='47.1816'%20y='44.0331'%20width='79.6685'%20height='85.8564'%20fill='url(%23paint0_linear_9072_122714)'/%3e%3crect%20x='13.1484'%20y='44.0331'%20width='34.0331'%20height='85.8564'%20fill='url(%23paint1_radial_9072_122714)'/%3e%3cpath%20d='M12.8177%2044.0331H44.8619L32.0442%2070.3315H0L12.8177%2044.0331Z'%20fill='url(%23paint2_radial_9072_122714)'/%3e%3cpath%20d='M127.182%2044.0331L45.9669%2044.0331L58.7845%2070.3314L140%2070.3314L127.182%2044.0331Z'%20fill='url(%23paint3_radial_9072_122714)'/%3e%3cpath%20d='M70.0007%2093.536C70.0007%2065.5222%2070.0007%2057.794%2070.0007%2013.3126M58.0117%2021.8303L70.0007%2010.0001L81.9896%2021.8303'%20stroke='url(%23paint4_linear_9072_122714)'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9072_122714'%20x1='47.1816'%20y1='129.889'%20x2='85.8066'%20y2='61.5428'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E5EFF8'/%3e%3cstop%20offset='1'%20stop-color='%235994D2'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint1_radial_9072_122714'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(32.8722%20140.331)%20rotate(-89.0659)%20scale(71.1697%20103.663)'%3e%3cstop%20offset='0.160968'%20stop-color='%23E5EFF8'/%3e%3cstop%20offset='0.960017'%20stop-color='%23669DD7'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint2_radial_9072_122714'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(44.8619%2038.6188)%20rotate(141.582)%20scale(57.2585%20169.453)'%3e%3cstop%20offset='0.375'%20stop-color='%23E5EFF8'/%3e%3cstop%20offset='0.960017'%20stop-color='%23669DD7'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint3_radial_9072_122714'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(65.7459%201.10489)%20rotate(63.8247)%20scale(101.7%20570.981)'%3e%3cstop%20offset='0.375'%20stop-color='%23E5EFF8'/%3e%3cstop%20offset='0.960017'%20stop-color='%23669DD7'/%3e%3c/radialGradient%3e%3clinearGradient%20id='paint4_linear_9072_122714'%20x1='70.3933'%20y1='22.2501'%20x2='70.3933'%20y2='55.0626'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2370C5C5'/%3e%3cstop%20offset='1'%20stop-color='%2370C5C5'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", o9 = "data:image/svg+xml,%3csvg%20width='142'%20height='140'%20viewBox='0%200%20142%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='92.1131'%20cy='34.2811'%20r='29.2811'%20fill='url(%23paint0_linear_9072_122713)'/%3e%3crect%20x='76.8633'%20y='84.3025'%20width='52.4619'%20height='52.4619'%20fill='url(%23paint1_linear_9072_122713)'/%3e%3cpath%20d='M38.4319%20122.734L5.14936%2065.0874L71.7145%2065.0874L38.4319%20122.734Z'%20fill='url(%23paint2_linear_9072_122713)'/%3e%3cpath%20d='M8.54102%20122.734H126.58C142.746%20122.734%20143.051%2098.6385%20126.58%2098.6385C104.131%2098.6385%2061.9179%2098.6385%2043.6173%2098.6385C27.1467%2098.6385%2027.1467%2075.4576%2043.6173%2075.4576C59.4778%2075.4576%2087.2338%2075.4576%2099.1293%2075.4576C117.735%2075.4576%20117.735%2052.2768%2099.1293%2052.2768C81.8047%2052.2768%2045.3457%2052.2768%2029.2818%2052.2768C10.3711%2052.2768%2010.3711%2027.8759%2029.2818%2027.8759C47.3384%2027.8759%20109.195%2027.8759%20137.866%2027.8759M132.375%2020.2507L140.001%2027.8759L132.375%2035.5012'%20stroke='%2370C5C5'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9072_122713'%20x1='80.5227'%20y1='59.902'%20x2='114.989'%20y2='16.2854'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_9072_122713'%20x1='89.9787'%20y1='136.764'%20x2='123.587'%20y2='94.4124'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_9072_122713'%20x1='54.5975'%20y1='64.4774'%20x2='25.0114'%20y2='103.519'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E5EFF8'/%3e%3cstop%20offset='1'%20stop-color='%23669DD7'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", n9 = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.9634%20115.405L30.503%20119.002L44.7085%20104.537H61.1339C61.6958%20104.534%2062.241%20104.337%2062.6794%20103.98L81.2722%2088.7805C82.4294%2087.817%2083.9193%2087.3669%2085.407%2087.5343C86.8936%2087.7005%2088.2511%2088.4695%2089.1736%2089.6671C90.0938%2090.8195%2090.5332%2092.2919%2090.3986%2093.7689C90.2629%2095.2458%2089.5641%2096.6108%2088.4503%2097.5709L66.1933%20116.544L63.3515%20118.95L66.5415%20122.852L70.2556%20119.736H88.5504C89.0478%20119.737%2089.534%20119.587%2089.9457%20119.305L132.416%2090.0971C133.329%2089.4028%20134.455%2089.0612%20135.593%2089.1359C136.731%2089.2094%20137.805%2089.6945%20138.623%2090.502C139.559%2091.4553%20140.057%2092.7637%20139.995%2094.1084C139.934%2095.4541%20139.317%2096.7105%20138.298%2097.57L87.5526%20140H22.75V112.135H30.2272L26.9634%20115.405Z'%20fill='url(%23paint0_linear_20414_45589)'/%3e%3cpath%20d='M17.5%2094.5H0V140H17.5V94.5Z'%20fill='url(%23paint1_linear_20414_45589)'/%3e%3cpath%20d='M107.116%2041.925C107.253%2021.1336%2090.4375%204.03891%2069.5567%203.74299C48.676%203.44708%2031.6374%2020.062%2031.5%2040.8534'%20stroke='url(%23paint2_radial_20414_45589)'%20stroke-width='3'/%3e%3cpath%20d='M32.123%2041.7176C32.2018%2062.5094%2049.1945%2079.4283%2070.0773%2079.5071C90.96%2079.5859%20107.825%2062.7947%20107.746%2042.003'%20stroke='url(%23paint3_radial_20414_45589)'%20stroke-width='3'/%3e%3cpath%20d='M73.513%2063H65.3464V58.8H57.1797V50.4H73.513V46.2H61.263C59.0172%2046.2%2057.1797%2044.31%2057.1797%2042V29.4C57.1797%2027.09%2059.0172%2025.2%2061.263%2025.2H65.3464V21H73.513V25.2H81.6797V33.6H65.3464V37.8H77.5964C79.8422%2037.8%2081.6797%2039.69%2081.6797%2042V54.6C81.6797%2056.91%2079.8422%2058.8%2077.5964%2058.8H73.513V63Z'%20fill='%2370C5C5'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_20414_45589'%20x1='70.7801'%20y1='140'%20x2='91.1047'%20y2='69.0869'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_20414_45589'%20x1='3.61844e-07'%20y1='140'%20x2='-15.8498'%20y2='109.968'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint2_radial_20414_45589'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(27.4038%2017.0319)%20rotate(12.3583)%20scale(81.6514%20164.648)'%3e%3cstop%20stop-color='%2370C5C5'/%3e%3cstop%20offset='1'%20stop-color='%2370C5C5'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint3_radial_20414_45589'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(112.09%2065.7806)%20rotate(-168.237)%20scale(81.6514%20164.648)'%3e%3cstop%20stop-color='%2370C5C5'/%3e%3cstop%20offset='1'%20stop-color='%2370C5C5'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e", a9 = "data:image/svg+xml,%3csvg%20width='152'%20height='144'%20viewBox='0%200%20152%20144'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M125.322%20100.049C109.681%20127.139%2075.0416%20136.42%2047.9518%20120.78C20.862%20105.14%2011.5803%2070.5%2027.2206%2043.4102C42.8609%2016.3204%2077.5006%207.0387%20104.59%2022.679C131.68%2038.3193%20140.962%2072.9589%20125.322%20100.049Z'%20fill='url(%23paint0_linear_9072_122715)'/%3e%3cpath%20d='M41.1412%20132.575L41.8912%20131.276L41.1412%20132.575ZM16.8735%2036.2118C16.6591%2035.4116%2015.8366%2034.9367%2015.0364%2035.1511L1.9964%2038.6452C1.1962%2038.8596%200.721327%2039.6821%200.93574%2040.4823C1.15015%2041.2825%201.97266%2041.7574%202.77286%2041.543L14.364%2038.4371L17.4698%2050.0282C17.6842%2050.8284%2018.5067%2051.3033%2019.3069%2051.0889C20.1071%2050.8745%2020.582%2050.052%2020.3676%2049.2518L16.8735%2036.2118ZM135.817%20106.109C116.83%20138.996%2074.778%20150.264%2041.8912%20131.276L40.3912%20133.874C74.7129%20153.69%20118.6%20141.931%20138.416%20107.609L135.817%20106.109ZM41.8912%20131.276C9.00431%20112.289%20-2.26356%2070.2369%2016.7237%2037.35L14.1256%2035.85C-5.69006%2070.1717%206.06943%20114.059%2040.3912%20133.874L41.8912%20131.276Z'%20fill='url(%23paint1_radial_9072_122715)'/%3e%3cpath%20d='M110.858%2011.4246L110.108%2012.7237L110.858%2011.4246ZM135.126%20107.788C135.34%20108.588%20136.163%20109.063%20136.963%20108.849L150.003%20105.355C150.803%20105.14%20151.278%20104.318%20151.064%20103.518C150.849%20102.717%20150.027%20102.243%20149.226%20102.457L137.635%20105.563L134.529%2093.9717C134.315%2093.1716%20133.493%2092.6967%20132.692%2092.9111C131.892%2093.1255%20131.417%2093.948%20131.632%2094.7482L135.126%20107.788ZM16.1819%2037.8911C35.1691%205.0043%2077.2213%20-6.26356%20110.108%2012.7237L111.608%2010.1256C77.2864%20-9.69006%2033.3994%202.06942%2013.5838%2036.3911L16.1819%2037.8911ZM110.108%2012.7237C142.995%2031.7109%20154.263%2073.7631%20135.276%20106.65L137.874%20108.15C157.689%2073.8283%20145.93%2029.9412%20111.608%2010.1256L110.108%2012.7237Z'%20fill='url(%23paint2_radial_9072_122715)'/%3e%3crect%20x='52.1191'%20y='78.6412'%20width='50.0474'%20height='50.0474'%20fill='url(%23paint3_linear_9072_122715)'/%3e%3cpath%20d='M77.1423%20101.74L63.668%2078.6412L90.6166%2078.6412L77.1423%20101.74Z'%20fill='url(%23paint4_linear_9072_122715)'/%3e%3ccircle%20cx='76.5'%20cy='55.5'%20r='18.5'%20fill='url(%23paint5_linear_9072_122715)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_9072_122715'%20x1='32.0759'%20y1='103.439'%20x2='131.996'%20y2='63.7082'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint1_radial_9072_122715'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(11.6958%2030.5187)%20rotate(75.8424)%20scale(110.178%20220.357)'%3e%3cstop%20stop-color='%2370C5C5'/%3e%3cstop%20offset='1'%20stop-color='%2370C5C5'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint2_radial_9072_122715'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(147.401%20102.702)%20rotate(-100.008)%20scale(91.3795%20182.759)'%3e%3cstop%20stop-color='%2370C5C5'/%3e%3cstop%20offset='1'%20stop-color='%2370C5C5'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3clinearGradient%20id='paint3_linear_9072_122715'%20x1='64.631'%20y1='128.689'%20x2='96.6926'%20y2='88.2857'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_9072_122715'%20x1='86.026'%20y1='74.7982'%20x2='80.4616'%20y2='90.9617'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E5EFF8'/%3e%3cstop%20offset='0.940611'%20stop-color='%23669DD7'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint5_linear_9072_122715'%20x1='69.1771'%20y1='71.6875'%20x2='90.9531'%20y2='44.1302'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", s9 = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M112.747%2094.1404C99.3143%20117.184%2069.5652%20125.08%2046.3%20111.775C23.0347%2098.4709%2015.0635%2069.005%2028.4956%2045.9613C41.9278%2022.9176%2071.677%2015.0222%2094.9422%2028.3265C118.207%2041.6308%20126.179%2071.0967%20112.747%2094.1404Z'%20fill='url(%23paint0_linear_20414_45578)'/%3e%3cpath%20d='M112.747%2094.1404C99.3143%20117.184%2069.5652%20125.08%2046.3%20111.775C23.0347%2098.4709%2015.0635%2069.005%2028.4956%2045.9613C41.9278%2022.9176%2071.677%2015.0222%2094.9422%2028.3265C118.207%2041.6308%20126.179%2071.0967%20112.747%2094.1404Z'%20fill='url(%23paint1_linear_20414_45578)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.4548%2035.9489C14.9599%2035.5509%2016.5063%2036.4347%2016.9089%2037.923L19.7076%2049.1588C20.1102%2050.6471%2019.2164%2052.1764%2017.7114%2052.5744C16.2063%2052.9725%2014.6599%2052.0887%2014.2573%2050.6003L13.3662%2046.4175C0.585646%2075.3696%2011.59%20109.812%2039.9379%20125.98C70.4021%20143.355%20109.355%20133.043%20126.942%20102.951L131.827%20105.743C112.68%20138.503%2070.2785%20149.725%2037.1191%20130.813C5.86024%20112.985%20-6.03056%2074.7396%208.74588%2042.9698L3.55056%2045.9661C2.04549%2046.3642%200.499049%2045.4803%200.096493%2043.992C-0.306063%2042.5036%200.587701%2040.9744%202.09277%2040.5763L13.4548%2035.9489Z'%20fill='url(%23paint2_radial_20414_45578)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M126.891%20101.626C125.427%20102.025%20123.915%20101.173%20123.512%2099.7232L120.708%2088.7779C120.306%2087.3283%20121.166%2085.83%20122.63%2085.4314C124.093%2085.0328%20125.606%2085.8848%20126.008%2087.3345L126.905%2091.4102C139.158%2063.0719%20128.2%2029.5363%20100.47%2013.9502C70.671%20-2.79941%2032.7918%207.52599%2015.8648%2037.0083L11.0866%2034.3169C29.5146%202.22015%2070.7477%20-9.01636%20103.183%209.2151C133.76%2026.4016%20145.608%2063.6421%20131.43%2094.7435L136.471%2091.7846C137.935%2091.386%20139.448%2092.238%20139.85%2093.6877C140.252%2095.1373%20139.392%2096.6356%20137.929%2097.0342L126.891%20101.626Z'%20fill='url(%23paint3_radial_20414_45578)'/%3e%3cpath%20d='M51.7891%2068.4964L73.7602%2068.4964L73.7602%2049.8433'%20stroke='%2399BEE4'%20stroke-width='3'%20stroke-linecap='round'/%3e%3cline%20x1='72.1211'%20y1='26.4725'%20x2='72.1211'%20y2='32.7991'%20stroke='%2399BEE4'%20stroke-width='3'%20stroke-linecap='round'/%3e%3cline%20x1='26.6094'%20y1='67.7737'%20x2='33.0256'%20y2='67.7737'%20stroke='%2399BEE4'%20stroke-width='3'%20stroke-linecap='round'/%3e%3cline%20x1='72.1211'%20y1='107.303'%20x2='72.1211'%20y2='113.629'%20stroke='%2399BEE4'%20stroke-width='3'%20stroke-linecap='round'/%3e%3cline%20x1='108.217'%20y1='67.7737'%20x2='114.633'%20y2='67.7737'%20stroke='%2399BEE4'%20stroke-width='3'%20stroke-linecap='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_20414_45578'%20x1='25.1094'%20y1='100.362'%20x2='133.101'%20y2='56.1183'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_20414_45578'%20x1='25.1094'%20y1='100.362'%20x2='133.101'%20y2='56.1183'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3cradialGradient%20id='paint2_radial_20414_45578'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(10.6538%2032.9568)%20rotate(39.8454)%20scale(142.395%20284.498)'%3e%3cstop%20stop-color='%2370C5C5'/%3e%3cstop%20offset='1'%20stop-color='%2370C5C5'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint3_radial_20414_45578'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(129.64%20104.527)%20rotate(-140.509)%20scale(138.833%20277.425)'%3e%3cstop%20stop-color='%2370C5C5'/%3e%3cstop%20offset='1'%20stop-color='%2370C5C5'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e", i9 = "data:image/svg+xml,%3csvg%20width='140'%20height='140'%20viewBox='0%200%20140%20140'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.8887%2042V84H40.4442'%20stroke='%2399BEE4'/%3e%3cpath%20d='M116.666%2042V84H101.11'%20stroke='%2399BEE4'/%3e%3ccircle%20cx='23.3333'%20cy='23.3333'%20r='23.3333'%20fill='url(%23paint0_linear_20414_45597)'/%3e%3cpath%20d='M23.3333%200C10.4533%200%200%2010.4533%200%2023.3333C0%2036.2133%2010.4533%2046.6667%2023.3333%2046.6667C36.2133%2046.6667%2046.6667%2036.2133%2046.6667%2023.3333C46.6667%2010.4533%2036.2133%200%2023.3333%200ZM23.3333%207C27.2067%207%2030.3333%2010.1267%2030.3333%2014C30.3333%2017.8733%2027.2067%2021%2023.3333%2021C19.46%2021%2016.3333%2017.8733%2016.3333%2014C16.3333%2010.1267%2019.46%207%2023.3333%207ZM23.3333%2040.1333C17.5%2040.1333%2012.3433%2037.1467%209.33333%2032.62C9.40333%2027.9767%2018.6667%2025.4333%2023.3333%2025.4333C27.9767%2025.4333%2037.2633%2027.9767%2037.3333%2032.62C34.3233%2037.1467%2029.1667%2040.1333%2023.3333%2040.1333Z'%20fill='url(%23paint1_linear_20414_45597)'/%3e%3ccircle%20cx='116.667'%20cy='23.3333'%20r='23.3333'%20fill='url(%23paint2_linear_20414_45597)'/%3e%3cpath%20d='M116.667%200C103.787%200%2093.334%2010.4533%2093.334%2023.3333C93.334%2036.2133%20103.787%2046.6667%20116.667%2046.6667C129.547%2046.6667%20140.001%2036.2133%20140.001%2023.3333C140.001%2010.4533%20129.547%200%20116.667%200ZM116.667%207C120.541%207%20123.667%2010.1267%20123.667%2014C123.667%2017.8733%20120.541%2021%20116.667%2021C112.794%2021%20109.667%2017.8733%20109.667%2014C109.667%2010.1267%20112.794%207%20116.667%207ZM116.667%2040.1333C110.834%2040.1333%20105.677%2037.1467%20102.667%2032.62C102.737%2027.9767%20112.001%2025.4333%20116.667%2025.4333C121.311%2025.4333%20130.597%2027.9767%20130.667%2032.62C127.657%2037.1467%20122.501%2040.1333%20116.667%2040.1333Z'%20fill='url(%23paint3_linear_20414_45597)'/%3e%3ccircle%20cx='70.7778'%20cy='103.444'%20r='28.7778'%20fill='url(%23paint4_linear_20414_45597)'/%3e%3cpath%20d='M70.7778%2074.6667C54.8924%2074.6667%2042%2087.5591%2042%20103.444C42%20119.33%2054.8924%20132.222%2070.7778%20132.222C86.6631%20132.222%2099.5556%20119.33%2099.5556%20103.444C99.5556%2087.5591%2086.6631%2074.6667%2070.7778%2074.6667ZM70.7778%2083.3C75.5549%2083.3%2079.4111%2087.1562%2079.4111%2091.9333C79.4111%2096.7104%2075.5549%20100.567%2070.7778%20100.567C66.0007%20100.567%2062.1444%2096.7104%2062.1444%2091.9333C62.1444%2087.1562%2066.0007%2083.3%2070.7778%2083.3ZM70.7778%20124.164C63.5833%20124.164%2057.2234%20120.481%2053.5111%20114.898C53.5974%20109.171%2065.0222%20106.034%2070.7778%20106.034C76.5046%20106.034%2087.9581%20109.171%2088.0444%20114.898C84.3321%20120.481%2077.9722%20124.164%2070.7778%20124.164Z'%20fill='url(%23paint5_linear_20414_45597)'/%3e%3ccircle%20cx='70.7782'%20cy='103.444'%20r='35.0556'%20stroke='url(%23paint6_linear_20414_45597)'%20stroke-width='3'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_20414_45597'%20x1='17.1111'%20y1='38.8889'%20x2='49'%20y2='-1.55555'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.264475'%20stop-color='%2399BEE4'/%3e%3cstop%20offset='1'%20stop-color='%2399BEE4'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_20414_45597'%20x1='-10.8889'%20y1='68.4444'%20x2='39.6667'%20y2='8.55556'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_20414_45597'%20x1='110.445'%20y1='38.8889'%20x2='142.334'%20y2='-1.55555'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.264475'%20stop-color='%2399BEE4'/%3e%3cstop%20offset='1'%20stop-color='%2399BEE4'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_20414_45597'%20x1='82.4451'%20y1='68.4444'%20x2='133.001'%20y2='8.55556'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23669DD7'/%3e%3cstop%20offset='1'%20stop-color='%23E5EFF8'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_20414_45597'%20x1='63.1037'%20y1='122.63'%20x2='102.433'%20y2='72.7481'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.264475'%20stop-color='%2399BEE4'/%3e%3cstop%20offset='1'%20stop-color='%2399BEE4'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint5_linear_20414_45597'%20x1='29.5556'%20y1='157.889'%20x2='90.9222'%20y2='85.2185'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2370C5C5'/%3e%3cstop%20offset='1'%20stop-color='%23F2FFFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint6_linear_20414_45597'%20x1='47.4449'%20y1='119'%20x2='90.8565'%20y2='65.87'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2370C5C5'/%3e%3cstop%20offset='1'%20stop-color='%23CBECEC'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", l9 = {
  packaging: r9,
  processing: o9,
  saving: n9,
  settings: a9,
  timing: s9,
  workflow: i9
}, Gg = ({ size: e = "large", name: a }) => {
  const n = l9[a];
  if (!n) return null;
  const s = e === "small" ? "smallPictogram" : "largePictogram";
  return /* @__PURE__ */ t.jsx("img", { className: s, src: n, alt: a });
}, c9 = ({ ratio: e }) => e === "1:1" ? /* @__PURE__ */ t.jsxs(
  "svg",
  {
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [
      /* @__PURE__ */ t.jsx("rect", { width: "120", height: "120", fill: "url(#pattern0)" }),
      /* @__PURE__ */ t.jsxs("defs", { children: [
        /* @__PURE__ */ t.jsx(
          "pattern",
          {
            id: "pattern0",
            patternContentUnits: "objectBoundingBox",
            width: "1",
            height: "1",
            children: /* @__PURE__ */ t.jsx("use", { xlinkHref: "#image0_5288_88614", transform: "scale(0.025)" })
          }
        ),
        /* @__PURE__ */ t.jsx(
          "image",
          {
            id: "image0_5288_88614",
            width: "40",
            height: "40",
            xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAVVJREFUWEftlGtLwzAYhc/ImDpUGHZDB1WpWNjw//8OobKKwbGyWddZL0xsaWlRuk8Ve0kaBkPefE3enqdPDmlNuPONHV4tAlS8HTKoKBBkkAyqGlCdpw6SQVUDqvPUwZ02GEcR/JWHoX7emHNrV5wmCbh9hziOMNQvoA1OG0E2AszMsDYDY+3S0PlsivfXl80+YwyGOcZBtysN2Qhw9siRpgmuzFFhoPe8gOc+/drrdPZwPb6p/Kmij0kD5sO1wdmffoVBAG5bheC9kz70S0PKohTg+uMNmb38yvcru/rpg73pXdmS7aMwYFW4YY5weHQMPrEQhkGlIdk+CgPeW7elZrLQntaH7y2Frk+mj0KA7sIRDhciBCDax1pAf7WEO3dEc6XOifSxFvDrcy0VKnM4e0f3a97GWkCZwG2cJUBVq2SQDKoaUJ2nDpJBVQOq89TBf2/wB24E9NGn4bk4AAAAAElFTkSuQmCC"
          }
        )
      ] })
    ]
  }
) : e === "1:2" ? /* @__PURE__ */ t.jsxs(
  "svg",
  {
    width: "240",
    height: "120",
    viewBox: "0 0 240 120",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [
      /* @__PURE__ */ t.jsx("rect", { width: "240", height: "120", fill: "url(#pattern0)" }),
      /* @__PURE__ */ t.jsxs("defs", { children: [
        /* @__PURE__ */ t.jsx(
          "pattern",
          {
            id: "pattern0",
            patternContentUnits: "objectBoundingBox",
            width: "1",
            height: "1",
            children: /* @__PURE__ */ t.jsx(
              "use",
              {
                xlinkHref: "#image0_5288_88616",
                transform: "scale(0.00416667 0.00833333)"
              }
            )
          }
        ),
        /* @__PURE__ */ t.jsx(
          "image",
          {
            id: "image0_5288_88616",
            width: "240",
            height: "120",
            xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB4CAYAAADMtn8nAAAAAXNSR0IArs4c6QAABnVJREFUeF7tnF9uE1cUh8/g0AB9aPpXKlJKUgSSH5CaHXQJbKFL6Eq6hC6h7QraHSQSkY0ITWxcQgJUSfvm1M5UkxJUyIzHc+bOnHvsz494zp1zv9/9cA7jkIiIbPcPNm6sdH5Mk/QbSWUt+zNeEIBArASSn8eT6fdb3c1Bksm7ev3aNuLGGhZ9QSCXwOl4cr6V9J4OfpI0eQgkCEDAG4Hkt6S3N0y9tU2/EIDABYFTBOYkQMAxAQR2HB6tQwCBOQMQcEwAgR2HR+sQQGDOAAQcE0Bgx+HROgQQmDMAAccEENhxeLQOAQTmDEDAMQEEdhwerUMAgTkDEHBMAIEdh0frEEBgzgAEHBNAYMfh0ToEEJgzAAHHBBDYcXi0DgEE5gxAwDEBBHYcHq1DAIE5AxBwTACBHYdH6xBAYM4ABBwTQGDH4dE6BBCYMwABxwQQ2HF4tA4BBOYMQMAxAQR2HB6tQwCBOQMQcEwAgR2HR+sQQGDOAAQcE0Bgx+HROgQQmDMAAccEENhxeLQOAQTmDEDAMQEEdhwerUMAgTkDEHBMAIEdh0frEEBgzgAEHBNAYMfh0ToEEJgzAAHHBBDYcXi0DgEEXrIzMJ1MZDQ8kPWNTel0VpZs94u3XQRevExn7mg02JeTP1/JZ198KbfXv1qy3S/edhF48TIt3NHrl0dyOBq+fX9942v5+NPPl4jA4m0VgRcv09wdnY3H8nh35533Op2O3Os+kA9WV5eEwuJtE4EXL9MrO8rm3r3+rpydja+8d+PWLbl7v8s87PQcILDT4Kq0fTn3FtUwD1ehGde1CBxXHsG7eX/uLboB83Bw9K0siMCtYLa5Sd7cW9QJ87BNRnXvisB1CUZaP2vuLWqZeTjSMGe0hcD+Mpur47K5l3l4LozRX4TA0UdUvcF5517m4epsY6tA4NgSyeknm2VHw/2Lxz1lrypzL/NwGc3430fg+DOSx492Lp7hlj3u0cy9zMMODgAzsN+QDv8Yyuvjo7cbuHP3nny09knuhrKvSWY/Pod6lf2FEeo+rKMnwCewnl3jldkvHWT/GPX/16zHPdmn9F5vV6bTSbDeeD4cDGUjCyFwI1jrL5rNstnXH/NkzB733O8+yL3Jq5cv5MXoWf0G3qzA8+FgKBtZCIEbwVp/0cu5t2ilWT/ehv5RmufD9fNsagUEbopsjXXfn3uLliqah6fTqTzpP5J/xld/eUHbFvOwllyzdQjcLN/Kq+fNvUWLMA9XxrtwBQgcUaSz5t6iNpmHIwrQoBUENoBedMuyuZd5OKKwImkFgSMJYt65l3k4ksAiaQOBIwiiytzLPBxBYBG1gMDGYWjmXuZh49Aiuj0CG4ehnXurzMPZd6SPj56/85XMENvm+XAIivXWQOB6/GpV151755mHs0/4/Sf93P/Qrlbzb4p5PhyCon4NBNazq1UZYu4tm4f//utEjg+fB/1udN49+b50raNQqxiBa+HTFYece4slXmlc3Mt7831p3TkIUYXAIShWXCP03Fvx9o1czjzcCNbSRRG4FFHYC5qae8N2qVuNeVjHrU4VAtehV7G2ybm3YiuNXc483Bja3IURuCXebcy9LW1l5m2Yh9tNAYFb4j0a/N7Yo5yWtjD3bW7e/FBur9+Z+3ou1BNAYD07KiFgTgCBzSOgAQjoCSCwnh2VEDAngMDmEdAABPQEEFjPjkoImBNAYPMIaAACegIIrGdHJQTMCSCweQQ0AAE9AQTWs6MSAuYEENg8AhqAgJ4AAuvZUQkBcwIIbB4BDUBATwCB9eyohIA5AQQ2j4AGIKAngMB6dlRCwJwAAptHQAMQ0BNAYD07KiFgTgCBzSOgAQjoCSCwnh2VEDAngMDmEdAABPQEEFjPjkoImBNAYPMIaAACegIIrGdHJQTMCSCweQQ0AAE9AQTWs6MSAuYEENg8AhqAgJ4AAuvZUQkBcwIIbB4BDUBATwCB9eyohIA5AQQ2j4AGIKAngMB6dlRCwJwAAptHQAMQ0BNAYD07KiFgTgCBzSOgAQjoCSCwnh2VEDAngMDmEdAABPQEEFjPjkoImBNAYPMIaAACegIIrGdHJQTMCSS9p8MTSWXNvBMagAAEKhNIenvPfhVJv61cSQEEIGBKID0//yXp9w820uvXtvkUNs2Cm0OgKoHTZHK+lWRV/0mc/CBp8rDqKlwPAQi0SuBUJN1JJul33e7m4F9x0ykJsCWGpQAAAABJRU5ErkJggg=="
          }
        )
      ] })
    ]
  }
) : e === "4:3" ? /* @__PURE__ */ t.jsxs(
  "svg",
  {
    width: "344",
    height: "258",
    viewBox: "0 0 344 258",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [
      /* @__PURE__ */ t.jsx("rect", { width: "344", height: "258", fill: "url(#pattern0)" }),
      /* @__PURE__ */ t.jsxs("defs", { children: [
        /* @__PURE__ */ t.jsx(
          "pattern",
          {
            id: "pattern0",
            patternContentUnits: "objectBoundingBox",
            width: "1",
            height: "1",
            children: /* @__PURE__ */ t.jsx(
              "use",
              {
                xlinkHref: "#image0_5288_88618",
                transform: "scale(0.00290698 0.00387597)"
              }
            )
          }
        ),
        /* @__PURE__ */ t.jsx(
          "image",
          {
            id: "image0_5288_88618",
            width: "344",
            height: "258",
            xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAAECCAYAAAC7ec/RAAAAAXNSR0IArs4c6QAADD9JREFUeF7t3f+PVOUVB+BrlkBqldj6nZTa0EiC0f//3zDRiJHElKLIIk1/hrLRXEWDZWdn7s49c+6dz8PPs+/7nuecfLI5geG1r+7d/2nwhwABAgRmF3hNwM5u6kACBAj8IiBgDQIBAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMJECAgYM0AAQIEigQEbBGsYwkQICBgzQABAgSKBARsEaxjCRAgIGDNAAECBIoEBGwRrGMPK/Ds6dPhyePT4cbNvx/2YrcRuEBAwBqPoxD4+ovPh2fPng43bn40vPPeB0dRkyLWLyBg19/D+Aoefnd/eHL66BeHk5OT4dbtT4Y/vf56vAuAfgEB298DL9hD4L//+XF48K9v/3DC1avXho8/+XQ4Obmyx8l+lMD+AgJ2f0MnNAmMe9d7d78czs6ev/KCv7z97nDzH7eaXuZaAr8KCFiTsFqB3/aumwqwj11ta4/m4QL2aFqZVcjLe9dNldvHZs3EEqsVsEvsijddKHDe3nXTD9jHGqZOAQHbqe/uyQIX7V03HWYfO5nZD8wkIGBngnTMYQS27V3tYw/TB7fsJiBgd3PyqQUI7LJ3tY9dQKM84XcBAWsYViEwZe9qH7uKlkY8UsBGtHndRV5m72ofu+6eH8vrBeyxdPKI67js3tU+9oiHYiWlCdiVNGrNzzx7/nw4uXK5f7a6z97VPnbNU3Mcbxewx9HHxVYxhuv4z1mvv/XXyV8lOMfe1T52saMR8TABG9HmviLHL2IZg3L8c+v2neGNN6/v9Jg59672sTuR+1CBgIAtQHXkrwJPHj8aHj64/zvH+E9XP77z2XD12rWtRHPvXe1jt5L7QIGAgC1AdeQwjL+Bfv3l569Q/PnN68M/b9+5kOjs7GwYA/a8b8ma29b3Fcwt6ryXBQSseZhd4Le96/g/DJz35533Pty6j/3x8Q/DDw/+PfvbzjvQ9xUchDnyEgEb2fbaol/eu266aZd97LheGNcMh/jj+woOoZx3h4DN63lpxf+/d9102S772HFV8M3dL4b/PT3/N+G5C/H9sXOLOk/AmoHZBDbtXTddsMs+dlwz3Pvq/P+1YLaHvzjIPnZuUecJWDMwi8C2veumS+xjZ+F3yEIFBOxCG7O2Z+2yd7WPXVtXvXdfAQG7r6Cff+Xvu04lsY+dKubzaxEQsGvp1ELfOXXvah+70EZ6VomAgC1hzTj0sntX+9iM+VCl/7bbDOwhsM/e1T52D3g/uhoBv8GuplXLeuiuf9916qvtY6eK+fySBQTskruz0LfNtXe1j11ogz1rNgEBOxtlxkFz713tYzPmJrVKAZva+UvWXbF3vcw+dgz600ffD09OD/NdBeMbfV/BJYcm+McEbHDzp5ZetXfd9I5N+9hxRfHtN3eHTd/WNbWuKZ/3fQVTtHxWwJqBnQSq96677mPHkD99+P1Bviv2vDf5voKdxsWHXggIWKOwVeBQe9eL9rHvf3jj4CuBTe/x/bFbR8YHBKwZ2FXgkHvXzeuCK22/tZ73JvvYXacn+3N+g83u/9bqD7133fqgBX3APnZBzVjoUwTsQhuzhGd17V2XUPsub7CP3UUp+zMCNrv/G6vv3ruupS32sWvpVM87BWyP++JvXcLedfFILx5oH7uWTh3+nQL28OaLv9HedXqL7GOnmyX8hIBN6PKEGu1dJ2C99FH72Mu5HftPCdhj7/DE+k4fftfyL6QmPnORHx/3se/f+Nsi3+ZRPQICtsfdrQQIBAgI2IAmK5EAgR4BAdvj7lYCBAIEBGxAk5VIgECPgIDtcXcrAQIBAgI2oMlKJECgR0DA9ri7lQCBAAEBG9BkJRIg0CMgYHvc3UqAQICAgA1oshIJEOgRELA97m4lQCBAQMAGNFmJBAj0CAjYHne3EiAQICBgA5qsRAIEegQEbI+7WwkQCBAQsAFNViIBAj0CArbH3a0ECAQICNiAJiuRAIEeAQHb4+5WAgQCBARsQJOVSIBAj4CA7XF3KwECAQICNqDJSiRAoEdAwPa4u5UAgQABARvQZCUSINAjIGB73N1KgECAgIANaLISCRDoERCwPe5uJUAgQEDABjRZiQQI9AgI2B53txIgECAgYAOarEQCBHoEBGyPu1sJEAgQELABTVYiAQI9AgK2x92tBAgECAjYgCYrkQCBHgEB2+PuVgIEAgQEbECTlUiAQI+AgO1xdysBAgECAjagyUokQKBHQMD2uLuVAIEAAQEb0GQlEiDQIyBge9zdSoBAgICADWiyEgkQ6BEQsD3ubiVAIEBAwAY0WYkECPQICNged7cSIBAgIGADmqxEAgR6BARsj7tbCRAIEBCwAU1WIgECPQICtsfdrQQIBAgI2IAmK5EAgR4BAdvj7lYCBAIEBGxAk5VIgECPgIDtcXcrAQIBAgI2oMlKJECgR0DA9ri7lQCBAAEBG9BkJRIg0CMgYHvc3UqAQICAgA1oshIJEOgRELA97m4lQCBAQMAGNFmJBAj0CAjYHne3EiAQICBgA5qsRAIEegQEbI+7WwkQCBAQsAFNViIBAj0CArbH3a0ECAQICNiAJiuRAIEeAQHb4+5WAgQCBARsQJOVSIBAj4CA7XF3KwECAQICNqDJSiRAoEdAwPa4u5UAgQABARvQZCUSINAjIGB73N1KgECAgIANaLISCRDoERCwPe5uJUAgQEDABjRZiQQI9AgI2B53txIgECAgYAOarEQCBHoEBGyPu1sJEAgQELABTVYiAQI9AgK2x92tBAgECAjYgCYrkQCBHgEB2+PuVgIEAgQEbECTlUiAQI+AgO1xdysBAgECAjagyUokQKBHQMD2uLuVAIEAAQEb0GQlEiDQIyBge9zdSoBAgICADWiyEgkQ6BEQsD3ubiVAIEBAwAY0WYkECPQICNged7cSIBAgIGADmqxEAgR6BARsj7tbCRAIEBCwAU1WIgECPQICtsfdrQQIBAgI2IAmK5EAgR4BAdvj7lYCBAIEBGxAk5VIgECPgIDtcXcrAQIBAgI2oMlKJECgR0DA9ri7lQCBAAEBG9BkJRIg0CMgYHvc3UqAQICAgA1oshIJEOgRELA97m4lQCBA4GcuRmFwovR/MgAAAABJRU5ErkJggg=="
          }
        )
      ] })
    ]
  }
) : e === "5:7" ? /* @__PURE__ */ t.jsxs(
  "svg",
  {
    width: "240",
    height: "336",
    viewBox: "0 0 240 336",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [
      /* @__PURE__ */ t.jsx("rect", { width: "240", height: "336", fill: "url(#pattern0)" }),
      /* @__PURE__ */ t.jsxs("defs", { children: [
        /* @__PURE__ */ t.jsx(
          "pattern",
          {
            id: "pattern0",
            patternContentUnits: "objectBoundingBox",
            width: "1",
            height: "1",
            children: /* @__PURE__ */ t.jsx(
              "use",
              {
                xlinkHref: "#image0_5288_88620",
                transform: "scale(0.00416667 0.00297619)"
              }
            )
          }
        ),
        /* @__PURE__ */ t.jsx(
          "image",
          {
            id: "image0_5288_88620",
            width: "240",
            height: "336",
            xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAFQCAYAAACBPvPIAAAAAXNSR0IArs4c6QAAC/ZJREFUeF7t3F1vXOUVBeCDgkqhF/2uBFIKLQIpF/z/v4FERBARKa5LSIAKtXdJY7WaiKBCPLZnzYzX2c7jW3uf2fOsd5G8jOG1T++f/HfxRYDASIHXFHhkbpYm8FxAgR0EAoMFFHhweFYnoMDOAIHBAgo8ODyrE1BgZ4DAYAEFHhye1QkosDNAYLCAAg8Oz+oEFNgZIDBYQIEHh2d1AgrsDBAYLKDAg8OzOgEFdgYIDBZQ4MHhWZ2AAjsDBAYLKPDg8KxOQIGdAQKDBRR4cHhWJ6DAzgCBwQIKPDg8qxNQYGeAwGABBR4cntUJKLAzQGCwgAIPDs/qBBTYGSAwWECBB4dndQIK7AwQGCygwIPDszoBBXYGCAwWUODB4VmdgAI7AwQGCyjw4PCsTkCBnQECgwUUeHB4ViegwM4AgcECCjw4PKsTUGBngMBgAQUeHJ7VCSiwM0BgsIACDw7P6gQU2BkgMFhAgQeHZ3UCCuwMEBgsoMCDw7M6AQV2BggMFlDgweFZnYACOwMEBgso8ODwrE5AgZ0BAoMFFHhweFYnoMDOAIHBAgo8ODyrE1BgZ4DAYAEFHhye1QkosDNAYLCAAg8Oz+oEFNgZIDBYQIEHh2d1AgrsDBAYLKDAg8OzOgEFdgYIDBZQ4MHhWZ2AAjsDBAYLKPDg8KxOQIGdAQKDBRR4cHhWJ6DAzgCBwQIKPDg8qxNQYGeAwGABBR4cntUJKLAzQGCwgAIPDs/qBBTYGSAwWECBB4dndQIK7AwQGCygwIPDszoBBXYGCAwWUODB4VmdgAI7AwQGCyjw4PCsTkCBnQECgwUUeHB4ViegwM4AgcECCjw4PKsTUGBngMBgAQUeHJ7VCSiwM0BgsIACDw7P6gQU2BkgMFhAgQeHZ3UCCuwMEBgsoMCDw7M6AQV2BggMFlDgweFZnYACOwMEBgso8ODwrE5AgZ0BAoMFFHhweFYnoMDOAIHBAgo8ODyrE1BgZ4DAYAEFHhye1QkosDNAYLCAAg8Oz+oEFNgZIDBYQIEHh2d1AgrsDBAYLKDAg8OzOgEFdgYIDBZQ4MHhWZ2AAjsDBAYLKPDg8KxOQIGdAQKDBRR4cHhWJ6DAzgCBwQIKPDg8qxNQYGeAwGABBR4cntUJKLAzQGCwgAIPDs/qBBTYGSAwWECBB4dndQIK7AwQGCygwIPDszoBBXYGCAwWUODB4VmdgAI7AwQGCyjw4PCsTkCBnQECgwUUeHB4ViegwM4AgcECCjw4PKsTUGBngMBgAQUeHJ7VCSiwM0BgsIACDw7P6gQU2BkgMFhAgQeHZ3UCCuwMEBgsoMCDw7M6AQV2BggMFlDgweFZnYACOwMEBgso8ODwrE5AgZ0BAoMFFHhweFYnoMDOAIHBAgo8ODyrE1BgZ4DAYAEFHhye1Qko8Ct2Bs6ePVtOT/623H7vL8utW6+/Yu/+5r1dBb55mV74jk6/fLB8/89vlz/86e3lndt/fsXe/c17uwp88zLd+o6+++bR8vD05Mfv337vr8tvf//HV0jg5r1VBb55mZ77jp4+ebJ8dvfjn3zv1q1bywd3Plp+8cYbr4jCzXubCnzzMn3pHW3uvffv3V2ePn3y0vd++dZby/sf3nEfHnoOFHhocLus/eLeu23GfXgXzXX9rAKvK4+Db/Pze++2F3AfPjj9tTxQga+FufMi5917t23iPtzJaN9XVeB9BVc6f9G9d9vK7sMrDfOCtRR4XmZX2viye6/78JUYV/9DCrz6iHZf8Kr3Xvfh3W3XNqHAa0vknH02d9nTkwfPP+657GuXe6/78GWa6/++Aq8/o+WzTz5+/hnuZR/3JPde9+EBB8AdeG5ID/9xsnz3+NGPb+Dd9z9Yfv2b3537hja/Jrn56/Ohvi77B8ahXsdzcgF/Aud2R5/c/EcHm38Z9f9fF33cs/lT+v6nd5ezs2cH283nwwejPMqDFPgorPs/dHOX3fz643ll3Hzc8+Gdj859kW+/+Xr5+vTv+y/wwxN8PnwwyqM8SIGPwrr/Q1/ce7c96aK/3h76r9I+H94/z2M9QYGPJbvHc39+7932qG334bOzs+Xze58s/3ny8n+8kK7lPpzKHXdOgY/ru/PTz7v3bnuI+/DOvDduQIFXFOlF995ta7oPryjAwioKXEDf9pKX3Xvdh1cU1kpWUeCVBHHVe6/78EoCW8kaCryCIHa597oPryCwFa2gwOUwknuv+3A5tBW9vAKXw0jvvbvchze/I/340Vc/+ZXMQ7xtnw8fQnG/Zyjwfn57Te97773KfXjzJ/yDz++d+z+022v5H4Z9PnwIxfwZCpzb7TV5iHvvZffhf//r++Xxw68O+rvR572m35fe6yjsNazAe/Flw4e8924v8etHL+6L1/b70tk5OMSUAh9CccdnHPreu+PLH+XH3YePwnrpQxX4UqLD/sCx7r2H3TJ7mvtw5rbPlALvo7fj7DHvvTuucrQfdx8+Gu25D1bga/K+jnvvNb2VC1/Gffh6U1Dga/I+/fKLo32Uc01v4cov8+abv1reuf3ulX/eD+YCCpzbmSRQF1DgegQWIJALKHBuZ5JAXUCB6xFYgEAuoMC5nUkCdQEFrkdgAQK5gALndiYJ1AUUuB6BBQjkAgqc25kkUBdQ4HoEFiCQCyhwbmeSQF1AgesRWIBALqDAuZ1JAnUBBa5HYAECuYAC53YmCdQFFLgegQUI5AIKnNuZJFAXUOB6BBYgkAsocG5nkkBdQIHrEViAQC6gwLmdSQJ1AQWuR2ABArmAAud2JgnUBRS4HoEFCOQCCpzbmSRQF1DgegQWIJALKHBuZ5JAXUCB6xFYgEAuoMC5nUkCdQEFrkdgAQK5gALndiYJ1AUUuB6BBQjkAgqc25kkUBdQ4HoEFiCQCyhwbmeSQF1AgesRWIBALqDAuZ1JAnUBBa5HYAECuYAC53YmCdQFFLgegQUI5AIKnNuZJFAXUOB6BBYgkAsocG5nkkBdQIHrEViAQC6gwLmdSQJ1AQWuR2ABArmAAud2JgnUBRS4HoEFCOQCCpzbmSRQF1DgegQWIJALKHBuZ5JAXUCB6xFYgEAuoMC5nUkCdQEFrkdgAQK5gALndiYJ1AUUuB6BBQjkAgqc25kkUBdQ4HoEFiCQCyhwbmeSQF1AgesRWIBALqDAuZ1JAnUBBa5HYAECuYAC53YmCdQFFLgegQUI5AIKnNuZJFAXUOB6BBYgkAsocG5nkkBdQIHrEViAQC6gwLmdSQJ1AQWuR2ABArmAAud2JgnUBRS4HoEFCOQCCpzbmSRQF1DgegQWIJALKHBuZ5JAXUCB6xFYgEAuoMC5nUkCdQEFrkdgAQK5gALndiYJ1AUUuB6BBQjkAgqc25kkUBdQ4HoEFiCQCyhwbmeSQF1AgesRWIBALqDAuZ1JAnUBBa5HYAECuYAC53YmCdQFFLgegQUI5AIKnNuZJFAXUOB6BBYgkAsocG5nkkBdQIHrEViAQC6gwLmdSQJ1AQWuR2ABArmAAud2JgnUBRS4HoEFCOQCCpzbmSRQF1DgegQWIJALKHBuZ5JAXUCB6xFYgEAuoMC5nUkCdQEFrkdgAQK5gALndiYJ1AUUuB6BBQjkAgqc25kkUBdQ4HoEFiCQCyhwbmeSQF1AgesRWIBALqDAuZ1JAnUBBa5HYAECuYAC53YmCdQFFLgegQUI5AIKnNuZJFAXUOB6BBYgkAsocG5nkkBdQIHrEViAQC6gwLmdSQJ1AQWuR2ABArmAAud2JgnUBRS4HoEFCOQCCpzbmSRQF1DgegQWIJALKHBuZ5JAXUCB6xFYgEAuoMC5nUkCdQEFrkdgAQK5gALndiYJ1AUUuB6BBQjkAgqc25kkUBdQ4HoEFiCQCyhwbmeSQF1AgesRWIBALqDAuZ1JAnUBBa5HYAECuYAC53YmCdQFFLgegQUI5AIKnNuZJFAXUOB6BBYgkAsocG5nkkBdQIHrEViAQC6gwLmdSQJ1AQWuR2ABArmAAud2JgnUBRS4HoEFCOQCCpzbmSRQF1DgegQWIJALKHBuZ5JAXUCB6xFYgEAuoMC5nUkCdQEFrkdgAQK5gALndiYJ1AX+B9ZtCPstRWPiAAAAAElFTkSuQmCC"
          }
        )
      ] })
    ]
  }
) : e === "16:9" ? /* @__PURE__ */ t.jsxs(
  "svg",
  {
    width: "344",
    height: "194",
    viewBox: "0 0 344 194",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    children: [
      /* @__PURE__ */ t.jsx("rect", { width: "344", height: "194", fill: "url(#pattern0)" }),
      /* @__PURE__ */ t.jsxs("defs", { children: [
        /* @__PURE__ */ t.jsx(
          "pattern",
          {
            id: "pattern0",
            patternContentUnits: "objectBoundingBox",
            width: "1",
            height: "1",
            children: /* @__PURE__ */ t.jsx(
              "use",
              {
                xlinkHref: "#image0_5288_88622",
                transform: "scale(0.00290698 0.00515464)"
              }
            )
          }
        ),
        /* @__PURE__ */ t.jsx(
          "image",
          {
            id: "image0_5288_88622",
            width: "344",
            height: "194",
            xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAADCCAYAAAAM5trRAAAAAXNSR0IArs4c6QAACfpJREFUeF7t3V2Ok2UUB/CnDoofF+JnIgkKGk3mwkR24BLYgktwJS7BJagr0B1AIpkxojDjCIJiQO8GZ6gpMgSwZdq+7+lpT39zqe153vM7T/4ZD6UOWmvt4va1sy+e2PhyOBh+0obt1Oif+SFAgACBeQQGX+8fHH5+fvPczmAUrieff+6iYJ0H0nsIECAwVuDu/sH984Otn3a+asPBBUgECBAg0KfA4LvB1pXdYZ8l1SJAgACBBwJ3BaybQIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKvsYgQODw7a3u61dubsubaxcWIxhzqFwJQCAnZKKC9bToG9navtzp9/tDfffqedPvPucj6kp1pbAQG7tqNf/cZv/36z3djbfdTImbPvt9feeGv1G9NBGQEBW2aU69XIvf399sPlS080vbGx0T7c/Li9cPLkemHodmkFBOzSjsaDTRIY7V2vbF9u9+7t/+8lL778cvvgo037WNdnKQQE7FKMwUPMInC0d530HvvYWTS9NlJAwEbqqt27wNN710kH2Mf2Tq/gHAICdg40b8kRGLd3nfQk9rE5M3LqkwIC1o1YCYFn7V0nNWAfuxKjLf2QArb0eOs0d9ze1T62zqwrdSJgK02zaC/T7l3tY4tegBVuS8Cu8PBW9dFHu9S93asPPk513M8se1f72OM0/ftFCwjYRYs7r/3w/aUHn2E97uNU8+xd7WNdsGUSELDLNI01eJYbv+6227duPur0vQ8+bK+een1s56O/BjtaD/T1c1yg93WOOgSOBASsu7AwgdGXsoz+sOrxn2d9nGr0W+6Vrcvt8PCgt2f0+djeKBWaQkDAToHkJd0FRrvU0V9vHReWo49TfbT58dhD/vj9t/bb3i/dH+BhBZ+P7Y1SoSkEBOwUSF7SXeBo7zqp0rP+873vVYHPx3afpwrTCQjY6Zy8qoPA03vXSaUm7WMPDw/bj9vft3/2///lLvM+ln3svHLeN4uAgJ1Fy2tnFhi3d51UxD52Zl5vWHIBAbvkA1rlx3vW3nVSX/axqzxxz/60gIB1J8IEjtu72seG0Su8JAICdkkGUe0xpt272sdWm7x+HhcQsO5D7wKz7F3tY3vnV3CJBATsEg2jwqPMs3e1j60weT2MExCw7kWvAvPuXWfZx46+o+DWzetP/JXbPprw+dg+FNWwInAHQgS67l2n2ceOfkO++uP22P/hYR9N+XxsH4pqHAn4DdZd6EWgj73rcfvYv/+6027duN7rdxOMO9P3FfRyJRRprQlY16CzQJ9718kheyI8WI/O9n0Fna+EAg8FBKyr0Fmg771r5wfqoYB9bA+ISvgN1h3oJhC1d+32VP282z62H8d1ruI32HWefsfeI/euHR+tt7fbx/ZGuZaFBOxajr1704vYu3Z/yu4V7GO7G65zBQG7ztPv0Pvezs9hH5Xq8Fghb33ppVfa6TPvhdRWtLaAgK09X90RIJAoIGAT8R1NgEBtAQFbe766I0AgUUDAJuI7mgCB2gICtvZ8dUeAQKKAgE3EdzQBArUFBGzt+eqOAIFEAQGbiO9oAgRqCwjY2vPVHQECiQICNhHf0QQI1BYQsLXnqzsCBBIFBGwivqMJEKgtIGBrz1d3BAgkCgjYRHxHEyBQW0DA1p6v7ggQSBQQsIn4jiZAoLaAgK09X90RIJAoIGAT8R1NgEBtAQFbe766I0AgUUDAJuI7mgCB2gICtvZ8dUeAQKKAgE3EdzQBArUFBGzt+eqOAIFEAQGbiO9oAgRqCwjY2vPVHQECiQICNhHf0QQI1BYQsLXnqzsCBBIFBGwivqMJEKgtIGBrz1d3BAgkCgjYRHxHEyBQW0DA1p6v7ggQSBQQsIn4jiZAoLaAgK09X90RIJAoIGAT8R1NgEBtAQFbe766I0AgUUDAJuI7mgCB2gICtvZ8dUeAQKKAgE3EdzQBArUFBGzt+eqOAIFEAQGbiO9oAgRqCwjY2vPVHQECiQICNhHf0QQI1BYQsLXnqzsCBBIFBGwivqMJEKgtIGBrz1d3BAgkCgjYRHxHEyBQW0DA1p6v7ggQSBQQsIn4jiZAoLaAgK09X90RIJAoIGAT8R1NgEBtAQFbe766I0AgUUDAJuI7mgCB2gICtvZ8dUeAQKKAgE3EdzQBArUFBGzt+eqOAIFEAQGbiO9oAgRqCwjY2vPVHQECiQICNhHf0QQI1BYQsLXnqzsCBBIFBGwivqMJEKgtIGBrz1d3BAgkCgjYRHxHEyBQW0DA1p6v7ggQSBQQsIn4jiZAoLaAgK09X90RIJAoIGAT8R1NgEBtAQFbe766I0AgUUDAJuI7mgCB2gICtvZ8dUeAQKKAgE3EdzQBArUFBGzt+eqOAIFEAQGbiO9oAgRqCwjY2vPVHQECiQICNhHf0QQI1BYQsLXnqzsCBBIFBGwivqMJEKgtMNj6afdOG7ZTtdvUHQECBBYvMNi68su3rQ0/XfzRTiRAgEBdgeH9+98MtrevnR0+/9xFv8XWHbTOCBBYuMDdwcH984PRsf+F7OCLNhxcWPhjOJAAAQJ1BO62Nrw0OBh+trl5budfLmUxTK3/RDAAAAAASUVORK5CYII="
          }
        )
      ] })
    ]
  }
) : /* @__PURE__ */ t.jsx(t.Fragment, {}), Qg = ({
  className: e,
  isDark: a,
  ratio: n = "1:1",
  style: s,
  ...i
}) => {
  const { isDark: l } = $(), d = j([
    "placeholder",
    "placeholder".concat("-", n),
    a ?? l ? z : "",
    e ?? ""
  ]), f = {
    ...s ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsx("div", { ...i, className: d, style: f, children: /* @__PURE__ */ t.jsx(c9, { ratio: n }) });
}, Nn = ({
  checked: e,
  onClick: a,
  className: n,
  disabled: s,
  isDark: i,
  item: l,
  size: d,
  index: f,
  reference: u,
  key: m,
  showText: g = !0
}) => {
  const { isDark: b } = $(), y = Z(
    () => i ?? b,
    [i, b]
  ), p = (v) => {
    s || e || a == null || a(v);
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: j(["radio-item-container", n]),
      children: [
        /* @__PURE__ */ t.jsx(
          oe,
          {
            alt: l ?? "radio",
            "aria-checked": e,
            "aria-description": l ?? "radio",
            "aria-disabled": s,
            className: j([
              "radio-icon",
              e ? Hn : Bt
            ]),
            "data-index": f,
            "data-value": l,
            disabled: s,
            icon: e ? "radio_button_checked" : "radio_button_unchecked",
            isDark: y,
            style: s && y ? { color: "#616161" } : {},
            role: "radio",
            size: d === "small" ? "small" : "large",
            tabIndex: f || 0,
            onClick: p
          }
        ),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            checked: e,
            className: Sn,
            disabled: s,
            id: l ?? m + "-radio-input",
            name: u,
            readOnly: !0,
            type: "radio",
            value: l
          }
        ),
        g && /* @__PURE__ */ t.jsx(
          "label",
          {
            className: j([
              d === "small" ? n0 : Y0,
              gs,
              O0,
              ...y ? [z] : [],
              ...s ? [qr, s0] : []
            ]),
            "data-index": f,
            "data-value": l,
            htmlFor: l,
            onClick: p,
            children: l
          }
        )
      ]
    },
    l ?? m + "-radio"
  );
}, u9 = ({
  className: e,
  disabled: a,
  isDark: n,
  items: s,
  label: i,
  reference: l,
  onUpdate: d = (S, k) => {
    console.info(`[Radio.onUpdate] newIndex = ${S} and Value = ${k}`);
  },
  selectedItemIndex: f,
  style: u,
  selected: m,
  size: g = "small",
  feedbackType: b,
  helperText: y,
  tabIndex: p,
  orientation: v = "vertical",
  showText: x = !0,
  ...A
}) => {
  const { isDark: S } = $(), [k, E] = q(f), R = Z(
    () => n ?? S,
    [n, S]
  ), V = j([
    "radio",
    R ? z : "",
    a ? s0 : "",
    Sn,
    hs,
    e ?? ""
  ]), N = {
    ...u ?? {}
    // default styles below
  }, L = (F) => {
    F.preventDefault(), F.stopPropagation();
    const Q = parseInt(F.currentTarget.dataset.index);
    if (Q === k)
      return;
    E(Q);
    const G = F.currentTarget.dataset.value;
    d(Q, G);
  };
  return ve(() => {
    E(f);
  }, [f]), ve(() => {
    E(m ? 0 : f);
  }, [m]), /* @__PURE__ */ t.jsxs(
    "fieldset",
    {
      ...A,
      className: V,
      role: "radiogroup",
      style: N,
      children: [
        /* @__PURE__ */ t.jsx(
          ut,
          {
            label: i,
            showLabelIcon: !0,
            disabled: a,
            isDark: R
          }
        ),
        /* @__PURE__ */ t.jsx("div", { className: j(["radio-items", v]), children: s.map((F, Q) => {
          const G = k === Q;
          return /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(
            Nn,
            {
              checked: G,
              item: F,
              onClick: L,
              disabled: a,
              index: Q,
              isDark: R,
              reference: l,
              size: g,
              className: b === "error" ? "error" : "",
              showText: x
            }
          ) });
        }) }),
        /* @__PURE__ */ t.jsx(
          yt,
          {
            message: y,
            variant: b,
            disabled: a,
            isDark: R
          }
        )
      ]
    }
  );
}, d9 = ({
  className: e,
  isDark: a,
  items: n,
  onUpdate: s = void 0,
  selectedItemIndex: i = 0,
  style: l,
  ...d
}) => {
  const { isDark: f } = $(), [u, m] = q(i), g = j([
    "switcher",
    a ?? f ? z : "",
    e ?? ""
  ]), b = {
    ...l ?? {}
    // default styles below
  }, y = He(
    (p, v) => {
      p.preventDefault(), p.stopPropagation(), m(v), s == null || s(v);
    },
    []
  );
  return ve(() => {
    m(i);
  }, [i]), /* @__PURE__ */ t.jsx("span", { ...d, className: g, role: "tablist", style: b, children: n.map((p, v) => {
    const x = v === u;
    return /* @__PURE__ */ t.jsx(
      "button",
      {
        "aria-checked": x,
        "aria-description": p,
        className: j([
          x ? "selected" : "",
          x ? N0 : n0,
          jn,
          ys,
          js
        ]),
        "data-index": v,
        tabIndex: x ? -1 : void 0,
        onClick: (
          // only add click handler when item is not selected
          x ? void 0 : (A) => y(A, v)
        ),
        role: "tab",
        children: p
      },
      p
    );
  }) });
}, f9 = ({
  checked: e = !1,
  className: a,
  disabled: n = !1,
  isDark: s,
  label: i,
  onUpdate: l,
  size: d = "medium",
  style: f,
  value: u,
  variant: m = "horizontal",
  showCheckedIcon: g = !0,
  ...b
}) => {
  const { isDark: y } = $(), p = tc(), [v, x] = q(e), A = j([
    "toggle",
    g ? "show-checked-icon" : "",
    s ?? y ? z : "",
    n ? s0 : "",
    d,
    a ?? "",
    m
  ]), S = {
    ...f ?? {}
  }, k = (E) => {
    n || (E.preventDefault(), E.stopPropagation(), x((R) => {
      const V = !R;
      return l == null || l(V), V;
    }));
  };
  return ve(() => {
    x(e);
  }, [e]), /* @__PURE__ */ t.jsxs(
    "label",
    {
      ...b,
      role: "switch",
      htmlFor: p,
      "aria-checked": v,
      "aria-label": i,
      "aria-disabled": n,
      className: j([A, v ? "checked" : ""]),
      onClick: k,
      style: S,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: j([Qe, "label-text"]), children: i }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            id: p,
            type: "checkbox",
            checked: v,
            disabled: n,
            onChange: () => {
            }
          }
        ),
        /* @__PURE__ */ t.jsxs("span", { className: "control", children: [
          /* @__PURE__ */ t.jsx(
            "span",
            {
              className: j([
                "toggle-switch",
                ...n ? [s0] : []
              ]),
              "data-checked": v
            }
          ),
          u && /* @__PURE__ */ t.jsx(
            "span",
            {
              className: j([
                "value-text",
                ...n ? [s0] : [],
                n0
              ]),
              children: u
            }
          )
        ] })
      ]
    }
  );
}, zg = ({
  className: e,
  detail: a = "Optional placeholder component. Replace it with any component instance or hide it if not needed.",
  isDark: n,
  style: s,
  title: i = "Slot component",
  ...l
}) => {
  const { isDark: d } = $(), f = Z(
    () => n ?? d,
    [n, d]
  ), u = j([
    "slot",
    ...f ? [z, yn] : [vn],
    Jr,
    io,
    e ?? ""
  ]), m = {
    // default styles below
    alignItems: "start",
    borderStyle: "dashed",
    borderWidth: 2,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    ...s ?? {}
    // apply overrides after default styles
  }, g = {
    color: f ? "var(--color-link-default-dark)" : "var(--primary-500)"
  };
  return /* @__PURE__ */ t.jsxs("div", { ...l, className: u, style: m, children: [
    /* @__PURE__ */ t.jsx(xe, { headingLevel: 6, style: g, children: i }),
    /* @__PURE__ */ t.jsx(xe, { size: "small", style: g, variant: "regular", children: a })
  ] });
}, Us = ({
  checked: e,
  className: a,
  disabled: n,
  isDark: s,
  text: i,
  onUpdate: l = void 0,
  style: d,
  indeterminate: f,
  size: u = "small",
  readOnly: m
}) => {
  const { isDark: g } = $(), [b, y] = q(e), [p, v] = q(n), x = Ve(null), A = Z(
    () => s ?? g,
    [s, g]
  ), S = j([
    us,
    i ? so : "",
    A ? z : "",
    u,
    a
  ]), k = {
    ...d ?? {}
    // default styles below
  }, E = (R) => {
    if (n ?? m)
      return;
    const V = R.target.checked;
    y(V), l == null || l(V);
  };
  return ve(() => {
    y(e);
  }, [e]), ve(() => {
    v(n);
  }, [n]), ve(() => {
    x.current && (x.current.indeterminate = f ?? !1);
  }, [f]), /* @__PURE__ */ t.jsxs(
    "label",
    {
      className: j([
        u === "small" ? n0 : Y0,
        s ?? g ? z : "",
        n ? qr : O0
      ]),
      children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            checked: b,
            disabled: p,
            onChange: E,
            type: "checkbox",
            ref: x,
            className: S,
            readOnly: m,
            style: k
          }
        ),
        i
      ]
    }
  );
}, A2 = ({
  className: e,
  disabled: a,
  isDark: n,
  style: s,
  label: i,
  helperText: l,
  feedbackType: d,
  ...f
}) => {
  const { isDark: u } = $(), m = Z(
    () => n ?? u,
    [n, u]
  ), g = j([
    "checkbox",
    m ? z : "",
    a ? s0 : "",
    e ?? ""
  ]), b = {
    ...s ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsxs("article", { ...f, className: g, style: b, children: [
    /* @__PURE__ */ t.jsx(
      ut,
      {
        label: i,
        showLabelIcon: !0,
        disabled: a,
        isDark: m
      }
    ),
    /* @__PURE__ */ t.jsx(
      Us,
      {
        disabled: a,
        isDark: n,
        ...f,
        className: d === "error" ? "error" : ""
      }
    ),
    /* @__PURE__ */ t.jsx(
      yt,
      {
        message: l,
        variant: d,
        disabled: a,
        isDark: m
      }
    )
  ] });
}, Zg = ({
  items: e = [],
  className: a,
  disabled: n,
  isDark: s,
  style: i,
  label: l,
  helperText: d,
  feedbackType: f,
  size: u,
  orientation: m = "vertical",
  onUpdate: g,
  ...b
}) => {
  const { isDark: y } = $(), p = Z(
    () => s ?? y,
    [s, y]
  ), v = j([
    "checkbox-group",
    p ? z : "",
    n ? s0 : "",
    a ?? ""
  ]), x = {
    ...i ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsxs("article", { ...b, className: v, style: x, children: [
    /* @__PURE__ */ t.jsx(
      ut,
      {
        label: l,
        showLabelIcon: !0,
        disabled: n,
        isDark: p
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: j(["checkbox-items", m]), children: e == null ? void 0 : e.map((A, S) => /* @__PURE__ */ t.jsx(
      Us,
      {
        disabled: n,
        isDark: s,
        size: u,
        ...A,
        className: j([
          (A == null ? void 0 : A.className) ?? "",
          f === "error" ? "error" : ""
        ]),
        index: S,
        onUpdate: (k) => {
          var E;
          (E = A == null ? void 0 : A.onUpdate) == null || E.call(A, k), g == null || g(A, k);
        }
      },
      `checkbox_${A.id ?? A.text}`
    )) }),
    /* @__PURE__ */ t.jsx(
      yt,
      {
        message: d,
        variant: f,
        disabled: n,
        isDark: p
      }
    )
  ] });
}, p9 = "data:image/svg+xml,%3csvg%20width='160'%20height='91'%20viewBox='0%200%20160%2091'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='160'%20height='90.2326'%20fill='url(%23pattern0_29931_356)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_29931_356'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_29931_356'%20transform='scale(0.00290698%200.00515464)'/%3e%3c/pattern%3e%3cimage%20id='image0_29931_356'%20width='344'%20height='194'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAADCCAYAAAAM5trRAAAAAXNSR0IArs4c6QAACfpJREFUeF7t3V2Ok2UUB/CnDoofF+JnIgkKGk3mwkR24BLYgktwJS7BJagr0B1AIpkxojDjCIJiQO8GZ6gpMgSwZdq+7+lpT39zqe153vM7T/4ZD6UOWmvt4va1sy+e2PhyOBh+0obt1Oif+SFAgACBeQQGX+8fHH5+fvPczmAUrieff+6iYJ0H0nsIECAwVuDu/sH984Otn3a+asPBBUgECBAg0KfA4LvB1pXdYZ8l1SJAgACBBwJ3BaybQIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKssAQIEBKw7QIAAgSABARsEqywBAgQErDtAgACBIAEBGwSrLAECBASsO0CAAIEgAQEbBKvsYgQODw7a3u61dubsubaxcWIxhzqFwJQCAnZKKC9bToG9navtzp9/tDfffqedPvPucj6kp1pbAQG7tqNf/cZv/36z3djbfdTImbPvt9feeGv1G9NBGQEBW2aU69XIvf399sPlS080vbGx0T7c/Li9cPLkemHodmkFBOzSjsaDTRIY7V2vbF9u9+7t/+8lL778cvvgo037WNdnKQQE7FKMwUPMInC0d530HvvYWTS9NlJAwEbqqt27wNN710kH2Mf2Tq/gHAICdg40b8kRGLd3nfQk9rE5M3LqkwIC1o1YCYFn7V0nNWAfuxKjLf2QArb0eOs0d9ze1T62zqwrdSJgK02zaC/T7l3tY4tegBVuS8Cu8PBW9dFHu9S93asPPk513M8se1f72OM0/ftFCwjYRYs7r/3w/aUHn2E97uNU8+xd7WNdsGUSELDLNI01eJYbv+6227duPur0vQ8+bK+een1s56O/BjtaD/T1c1yg93WOOgSOBASsu7AwgdGXsoz+sOrxn2d9nGr0W+6Vrcvt8PCgt2f0+djeKBWaQkDAToHkJd0FRrvU0V9vHReWo49TfbT58dhD/vj9t/bb3i/dH+BhBZ+P7Y1SoSkEBOwUSF7SXeBo7zqp0rP+873vVYHPx3afpwrTCQjY6Zy8qoPA03vXSaUm7WMPDw/bj9vft3/2///lLvM+ln3svHLeN4uAgJ1Fy2tnFhi3d51UxD52Zl5vWHIBAbvkA1rlx3vW3nVSX/axqzxxz/60gIB1J8IEjtu72seG0Su8JAICdkkGUe0xpt272sdWm7x+HhcQsO5D7wKz7F3tY3vnV3CJBATsEg2jwqPMs3e1j60weT2MExCw7kWvAvPuXWfZx46+o+DWzetP/JXbPprw+dg+FNWwInAHQgS67l2n2ceOfkO++uP22P/hYR9N+XxsH4pqHAn4DdZd6EWgj73rcfvYv/+6027duN7rdxOMO9P3FfRyJRRprQlY16CzQJ9718kheyI8WI/O9n0Fna+EAg8FBKyr0Fmg771r5wfqoYB9bA+ISvgN1h3oJhC1d+32VP282z62H8d1ruI32HWefsfeI/euHR+tt7fbx/ZGuZaFBOxajr1704vYu3Z/yu4V7GO7G65zBQG7ztPv0Pvezs9hH5Xq8Fghb33ppVfa6TPvhdRWtLaAgK09X90RIJAoIGAT8R1NgEBtAQFbe766I0AgUUDAJuI7mgCB2gICtvZ8dUeAQKKAgE3EdzQBArUFBGzt+eqOAIFEAQGbiO9oAgRqCwjY2vPVHQECiQICNhHf0QQI1BYQsLXnqzsCBBIFBGwivqMJEKgtIGBrz1d3BAgkCgjYRHxHEyBQW0DA1p6v7ggQSBQQsIn4jiZAoLaAgK09X90RIJAoIGAT8R1NgEBtAQFbe766I0AgUUDAJuI7mgCB2gICtvZ8dUeAQKKAgE3EdzQBArUFBGzt+eqOAIFEAQGbiO9oAgRqCwjY2vPVHQECiQICNhHf0QQI1BYQsLXnqzsCBBIFBGwivqMJEKgtIGBrz1d3BAgkCgjYRHxHEyBQW0DA1p6v7ggQSBQQsIn4jiZAoLaAgK09X90RIJAoIGAT8R1NgEBtAQFbe766I0AgUUDAJuI7mgCB2gICtvZ8dUeAQKKAgE3EdzQBArUFBGzt+eqOAIFEAQGbiO9oAgRqCwjY2vPVHQECiQICNhHf0QQI1BYQsLXnqzsCBBIFBGwivqMJEKgtIGBrz1d3BAgkCgjYRHxHEyBQW0DA1p6v7ggQSBQQsIn4jiZAoLaAgK09X90RIJAoIGAT8R1NgEBtAQFbe766I0AgUUDAJuI7mgCB2gICtvZ8dUeAQKKAgE3EdzQBArUFBGzt+eqOAIFEAQGbiO9oAgRqCwjY2vPVHQECiQICNhHf0QQI1BYQsLXnqzsCBBIFBGwivqMJEKgtIGBrz1d3BAgkCgjYRHxHEyBQW0DA1p6v7ggQSBQQsIn4jiZAoLaAgK09X90RIJAoIGAT8R1NgEBtAQFbe766I0AgUUDAJuI7mgCB2gICtvZ8dUeAQKKAgE3EdzQBArUFBGzt+eqOAIFEAQGbiO9oAgRqCwjY2vPVHQECiQICNhHf0QQI1BYQsLXnqzsCBBIFBGwivqMJEKgtMNj6afdOG7ZTtdvUHQECBBYvMNi68su3rQ0/XfzRTiRAgEBdgeH9+98MtrevnR0+/9xFv8XWHbTOCBBYuMDdwcH984PRsf+F7OCLNhxcWPhjOJAAAQJ1BO62Nrw0OBh+trl5budfLmUxTK3/RDAAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e", Ug = ({
  active: e = !0,
  buttonProps: a,
  children: n,
  className: s,
  details: i,
  linkProps: l,
  style: d,
  subtitle: f,
  text: u,
  title: m,
  showButton: g = !0,
  showDetails: b = !0,
  showLink: y = !0,
  showSubtitle: p = !0,
  showText: v = !0,
  showTitle: x = !0,
  size: A = "large"
}) => {
  const S = j(["banner", s ?? ""]), k = {
    ...d ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `${S} ${e ? "active" : "inactive"}`,
      style: k,
      children: [
        /* @__PURE__ */ t.jsx("div", { className: `image-container ${A}`, children: n ?? /* @__PURE__ */ t.jsx("img", { src: p9, alt: "Image" }) }),
        /* @__PURE__ */ t.jsxs("div", { className: "text-container", children: [
          b && /* @__PURE__ */ t.jsx(xe, { size: A === "small" ? "small" : "body", variant: "caps", children: i }),
          x && /* @__PURE__ */ t.jsx(xe, { size: A === "small" ? "small" : "body", variant: "bold", children: m }),
          p && /* @__PURE__ */ t.jsx(xe, { size: "small", children: f }),
          v && /* @__PURE__ */ t.jsx(xe, { size: A === "small" ? "xsmall" : "small", children: u }),
          (y || g) && /* @__PURE__ */ t.jsxs("div", { className: "actions-container", children: [
            l && /* @__PURE__ */ t.jsx(
              U0,
              {
                ...l,
                size: A === "small" ? "small" : "medium"
              }
            ),
            a && /* @__PURE__ */ t.jsx(Le, { ...a, size: "small" })
          ] })
        ] })
      ]
    }
  );
}, Yg = ({
  className: e,
  isDark: a,
  style: n,
  iconList: s = []
}) => {
  const { isDark: i } = $(), d = j(["bottom-bar", a ?? i ? z : "", e ?? ""]), f = {
    ...n ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsx("div", { className: d, style: f, children: s == null ? void 0 : s.map((u, m) => /* @__PURE__ */ t.jsx(
    g9,
    {
      icon: u.icon,
      onClickIcon: u.onClickIcon
    },
    m
  )) });
}, g9 = ({ icon: e, onClickIcon: a }) => {
  const [n, s] = q(!1), i = Ve(null), l = () => {
    s(!n), a == null || a();
  };
  return /* @__PURE__ */ t.jsx("span", { className: "icon", onClick: l, ref: i, children: /* @__PURE__ */ t.jsx("span", { className: "icon-wrapper", children: e }) });
}, m9 = ({ isDark: e }) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "15",
    viewBox: "0 0 18 15",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M9.00002 2.74167L13.1667 6.49167V13H11.5V8H6.50002V13H4.83335V6.49167L9.00002 2.74167V2.74167ZM9.00002 0.5L0.666687 8H3.16669V14.6667H8.16669V9.66667H9.83335V14.6667H14.8334V8H17.3334L9.00002 0.5Z",
        fill: e ? "#3387DF" : "#005CBC"
      }
    )
  }
), B1 = ({ isDark: e }) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    role: "img",
    "aria-label": "Chevron Right",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4.61749 3.87997L8.6886 7.95997L4.61749 12.04L5.87083 13.2933L11.2042 7.95997L5.87083 2.62664L4.61749 3.87997Z",
        fill: e ? "#D0D0D0" : "#616161"
      }
    )
  }
), h9 = (e, a) => {
  if (e.length !== a.length) return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n].id !== a[n].id || e[n].label !== a[n].label)
      return !1;
  return !0;
}, Pn = /* @__PURE__ */ t.jsx(
  "svg",
  {
    role: "img",
    name: "clear",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M7.99992 1.33334C4.31325 1.33334 1.33325 4.31334 1.33325 8.00001C1.33325 11.6867 4.31325 14.6667 7.99992 14.6667C11.6866 14.6667 14.6666 11.6867 14.6666 8.00001C14.6666 4.31334 11.6866 1.33334 7.99992 1.33334ZM11.3333 10.3933L10.3933 11.3333L7.99992 8.94001L5.60659 11.3333L4.66659 10.3933L7.05992 8.00001L4.66659 5.60668L5.60659 4.66668L7.99992 7.06001L10.3933 4.66668L11.3333 5.60668L8.93992 8.00001L11.3333 10.3933Z",
        fill: "#3A3A3A"
      }
    )
  }
), uo = ({
  className: e,
  isDark: a,
  isDisabled: n = !1,
  onUpdate: s = (S) => {
    console.info(`[TextInput.onUpdate] value = ${S}`);
  },
  onSearch: i = () => {
    console.info("[onSearch]");
  },
  placeholderText: l = "Type a search keyword",
  size: d,
  style: f,
  suggestions: u = [],
  isAutoComplete: m,
  onSelectOption: g = (S) => {
    console.info(`[TextInput.onSelectOption] value = ${S}`);
  },
  focus: b,
  isLeadingIcon: y = !1,
  isClearable: p = !0,
  icon: v = "search",
  onClear: x,
  ...A
}) => {
  const { isDark: S } = $(), k = Ve(null), E = Ve(null), [R, V] = q({
    id: "",
    label: ""
  }), [N, L] = q(u), [F, Q] = q(!1);
  ve(() => {
    h9(N, u) || L(u);
  }, [u]), j0(E, () => {
    Q(!1);
  });
  const G = He(
    (W) => {
      const ee = W.target.value;
      s(ee), V({ id: "", label: ee }), m && L(
        u.filter(
          (_e) => _e.label.toLowerCase().includes(ee.toLowerCase())
        )
      );
    },
    [m, s, u]
  ), J = He(() => {
    m && !n && Q(!0);
  }, [n, m]), X = He(
    (W) => {
      const [ee] = W;
      V(ee), g == null || g(ee), F && Q(!1);
    },
    [g, u]
  ), re = j([
    "search-input",
    m ? "search-auto-complete" : "",
    d ?? "",
    n ? s0 : "",
    a ?? S ? z : "",
    e ?? ""
  ]), je = {
    ...f ?? {}
    // default styles below
  }, Me = d === "small" ? Qe : n0, se = He(
    (W) => {
      W.key === "Enter" && i();
    },
    [i]
  ), fe = He(
    (W) => {
      n || (W.preventDefault(), W.stopPropagation(), i());
    },
    [n, i]
  ), De = He(() => {
    var W;
    V({ id: "", label: "" }), L([...u]), s(""), (W = k.current) == null || W.focus(), x == null || x();
  }, [s, u, x]);
  return ve(() => {
    var W;
    b && k.current && ((W = k.current) == null || W.focus());
  }, [b]), /* @__PURE__ */ t.jsxs("div", { className: re, style: je, ref: E, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "input-wrapper", children: [
      y && /* @__PURE__ */ t.jsx(
        oe,
        {
          alt: "search-icon",
          icon: v,
          className: "search-icon",
          disabled: n,
          onClick: fe,
          style: {
            position: "absolute",
            top: d === "small" ? "0.3rem" : "0.5rem",
            left: "0.5rem",
            fontSize: "1rem"
          }
        }
      ),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          ref: k,
          className: j([
            Me,
            y ? ws : "",
            !y || p ? Dn : "",
            !y && p ? "right-clearable-padding" : "",
            kn
          ]),
          "data-testid": "input-search",
          id: "input-search",
          type: "text",
          placeholder: l,
          onChange: G,
          disabled: n,
          onKeyDown: se,
          value: R == null ? void 0 : R.label,
          onFocus: J,
          autoComplete: "off",
          ...A
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: "icon-container", children: [
        p && (R == null ? void 0 : R.label) && /* @__PURE__ */ t.jsx(
          Ft,
          {
            containerClassName: "search-clearable-icon",
            icon: Pn,
            disabled: n,
            onClick: De,
            size: "small",
            type: "naked",
            style: {
              position: "absolute",
              top: d === "small" ? "0.3rem" : "0.5rem",
              right: y ? "0.5rem" : "1.75rem",
              fontSize: "1rem",
              marginRight: y ? void 0 : "8px"
            }
          }
        ),
        !y && /* @__PURE__ */ t.jsx(
          oe,
          {
            alt: "search-icon",
            icon: v,
            className: "search-icon",
            disabled: n,
            onClick: fe,
            style: {
              position: "absolute",
              top: d === "small" ? "0.3rem" : "0.5rem",
              right: "0.75rem",
              fontSize: "1rem"
            }
          }
        )
      ] })
    ] }),
    m && (u == null ? void 0 : u.length) > 0 && F && /* @__PURE__ */ t.jsx(
      Vt,
      {
        items: N,
        isDark: a ?? S,
        showSearch: !1,
        type: "single",
        width: "100%",
        selectedItems: R ? [R] : [],
        selectedItemCallback: X,
        size: d,
        style: { marginTop: "0px" }
      }
    )
  ] });
}, Ys = ({
  items: e,
  isDark: a,
  size: n = "large",
  type: s = "primary",
  primary: i = !0,
  secondary: l = !0,
  tertairy: d = !0,
  auxiliary: f = !0,
  style: u,
  className: m
}) => {
  const { isDark: g } = $(), { isMobile: b } = lo(), y = Z(() => a ?? g, [g, a]), [p, v] = q([]), x = {
    ...u ?? {}
  }, A = j([
    "button-hierarchy",
    b ? "mobile" : "",
    y ? z : "",
    m ?? ""
  ]);
  Z(
    () => {
      const R = s === "danger" ? ["auxiliary", "tertiary", "secondary", "danger"] : ["auxiliary", "tertiary", "secondary", "primary", "auxiliaryInverse", "tertiaryInverse", "secondaryInverse", "primaryInverse"], V = [];
      e.forEach((N) => {
        if (!N) return;
        const { buttonType: L, ...F } = N;
        (L === "primary" || L === "danger") && i ? V.push({ ...F, variant: s === "danger" ? s : s === "inverse" ? `${L}Inverse` : L }) : (L === "secondary" && l || L === "tertiary" && d || L === "auxiliary" && f) && V.push({ ...F, variant: s === "inverse" ? `${L}Inverse` : L });
      }), V.sort((N, L) => R.indexOf(N.variant ?? "") - R.indexOf(L.variant ?? "")), v(V);
    },
    [e, s, n, i, l, d, f]
  );
  const S = (R) => R.map(
    (V, N) => /* @__PURE__ */ O1(
      Le,
      {
        ...V,
        key: `${V.variant}-${N}`,
        size: n
      }
    )
  ), k = Z(() => p.length > 2 ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx("div", { className: "button-hierarchy-left", children: S(p.slice(0, p.length - 2)) }),
    /* @__PURE__ */ t.jsx("div", { className: "button-hierarchy-right", children: S(p.slice(p.length - 2, p.length)) })
  ] }) : /* @__PURE__ */ t.jsx("div", { className: "button-hierarchy-right", children: S(p) }), [p, n]), E = Z(() => S(p == null ? void 0 : p.reverse()), [p, n]);
  return /* @__PURE__ */ t.jsx("div", { className: A, style: x, children: b ? E : k });
}, Wr = ({
  item: e,
  isSelected: a = !1,
  onItemSelect: n,
  isDark: s,
  size: i = "medium",
  type: l = "single",
  selectedItems: d = [],
  indeterminateCheckbox: f,
  className: u,
  width: m,
  parent: g,
  style: b,
  renderListItem: y
}) => {
  const {
    separator: p = "true",
    id: v,
    label: x,
    isSectonTitle: A,
    leadingIcon: S,
    avatar: k,
    children: E = []
  } = e, [R, V] = q(!1), { isDark: N } = $(), L = Z(
    () => s ?? N,
    [s, N]
  ), F = j([
    "menu-list-item",
    A ? `header ${p ? "separator" : ""}` : "",
    L ? z : "",
    u ?? ""
  ]), Q = {
    width: m ?? "25rem",
    ...b ?? {}
  }, G = (X) => {
    X.stopPropagation(), V(!R);
  }, J = (X) => {
    X.stopPropagation(), n && n(X, e, g);
  };
  return /* @__PURE__ */ t.jsx("div", { className: F, style: Q, onClick: J, children: A ? /* @__PURE__ */ t.jsxs("div", { className: "menu-list-item-detail", children: [
    S && /* @__PURE__ */ t.jsx(
      oe,
      {
        ...S,
        isDark: L,
        size: "small"
      },
      `${e.id}-leadingIcon`
    ),
    /* @__PURE__ */ t.jsx(
      xe,
      {
        size: i === "medium" ? "small" : "xsmall",
        isDark: L,
        variant: "caps",
        children: x
      },
      `${e.id}-section`
    )
  ] }) : /* @__PURE__ */ t.jsxs("div", { className: "menu-list-item-view", children: [
    /* @__PURE__ */ t.jsxs("div", { className: `menu-list-item-row ${p ? "separator" : ""}`, children: [
      /* @__PURE__ */ t.jsxs("div", { className: "menu-list-item-detail", children: [
        (l === "singleTreeView" || l === "multipleTreeView" || l === "radiosTreeView") && (E == null ? void 0 : E.length) > 0 && /* @__PURE__ */ t.jsx(
          oe,
          {
            icon: R ? "keyboard_arrow_down" : "keyboard_arrow_right",
            isDark: L,
            size: "small",
            onClick: G
          },
          `${e.id}-down-right`
        ),
        (l === "multiple" || l === "multipleTreeView") && /* @__PURE__ */ t.jsx(
          A2,
          {
            isDark: L,
            indeterminate: f,
            checked: a
          },
          `${e.id}-checkbox`
        ),
        (l === "radios" || l === "radiosTreeView") && /* @__PURE__ */ t.jsx(
          Nn,
          {
            size: "small",
            checked: a,
            reference: v,
            isDark: L,
            showText: !1
          },
          `${e.id}-radio`
        ),
        k && /* @__PURE__ */ t.jsx(
          H2,
          {
            ...k,
            showEditIcon: !1,
            size: "xSmall"
          },
          `${e.id}-avatar`
        ),
        S && /* @__PURE__ */ t.jsx(
          oe,
          {
            ...S,
            isDark: L,
            size: "small"
          },
          `${e.id}-leadingIcon`
        ),
        /* @__PURE__ */ t.jsx(w2, { isDark: L, text: x, direction: "top-middle", children: /* @__PURE__ */ t.jsx(
          xe,
          {
            className: "menu-list-item-text",
            size: i === "medium" ? "small" : "xsmall",
            isDark: L,
            variant: "regular",
            children: x
          }
        ) })
      ] }),
      !A && a && (l === "single" || l === "singleTreeView") && /* @__PURE__ */ t.jsx(
        oe,
        {
          icon: "check",
          isDark: L,
          size: "small"
        },
        `${e.id}-check`
      )
    ] }),
    R && (E == null ? void 0 : E.length) > 0 && /* @__PURE__ */ t.jsx("div", { className: "menu-list-item-children", children: E.map((X) => /* @__PURE__ */ t.jsx("div", { children: y ? y(X, e) : /* @__PURE__ */ t.jsx(
      Wr,
      {
        item: X,
        isSelected: d.some(
          (re) => re.id === X.id
        ),
        onItemSelect: n,
        isDark: L,
        size: i,
        type: l,
        selectedItems: d,
        width: "100%",
        parent: e
      },
      X.id
    ) }, `menulist-item-${X.id}`)) })
  ] }) }, v);
}, Vt = ({
  items: e,
  isDark: a,
  style: n,
  showSearch: s = !0,
  showFooter: i = !1,
  showEmptyStateView: l,
  emptyStateMessage: d = "",
  className: f,
  size: u = "medium",
  type: m = "single",
  width: g,
  height: b = 240,
  listHeaderLabel: y,
  selectedItems: p = [],
  selectedItemCallback: v,
  onHideMenuList: x,
  customFooterOptions: A
}) => {
  const [S, k] = q(p ?? []), [E, R] = q([]), [V, N] = q(p ?? []), [L, F] = q(), [Q, G] = q(!1), [J, X] = q(0), re = Ve(null), je = Ve(null), { isDark: Me } = $(), se = Z(
    () => a ?? Me,
    [a, Me]
  ), fe = j(["menu-list", se ? z : "", f ?? ""]), De = {
    width: g ?? "25rem",
    maxHeight: b + "px",
    ...n ?? {}
  };
  ve(() => (W(), window.addEventListener("resize", W), () => {
    window.removeEventListener("resize", W);
  }), []), ve(() => {
    R(e ?? []);
  }, [e]), ve(() => {
    W();
  }, [s, i]), ve(() => {
    JSON.stringify(p) !== JSON.stringify(S) && (k(p), N(p));
  }, [p]);
  const W = () => {
    const K = re != null && re.current ? re.current.offsetHeight : 0, le = je != null && je.current ? je.current.offsetHeight : 0, me = b - K - le - 8;
    X(me);
  }, ee = He(
    (K, le) => {
      var te;
      const me = (ne) => {
        var t0;
        let Ie = ne.children ? [...ne.children] : [];
        return (t0 = ne.children) == null || t0.forEach(($e) => {
          Ie = [...Ie, ...me($e)];
        }), Ie;
      }, Te = S.some((ne) => ne.id === K.id);
      let Xe;
      if (m === "multipleTreeView") {
        if (Te) {
          const ne = me(K);
          Xe = S.filter(
            (Ie) => Ie.id !== K.id && !ne.some((t0) => t0.id === Ie.id)
          );
        } else {
          const ne = me(K), Ie = S.filter(
            ($e) => ne.some((V0) => V0.id === $e.id)
          ), t0 = ne.filter(
            ($e) => !Ie.some(
              (V0) => V0.id === $e.id
            )
          );
          Xe = [
            ...S,
            K,
            ...t0
          ];
        }
        le && (((te = le.children) == null ? void 0 : te.every(
          (Ie) => Xe.some((t0) => t0.id === Ie.id)
        )) ? Xe = [...Xe, le] : Xe = Xe.filter((Ie) => Ie.id !== le.id));
      } else
        Xe = Te ? S.filter((ne) => ne.id !== K.id) : [...S, K];
      const R0 = V.findIndex((ne) => ne.id === K.id);
      if (R0 !== -1) {
        const ne = [...V];
        ne.splice(R0, 1), N(ne);
      } else if (m === "multipleTreeView") {
        if (!(le && V.some((Ie) => Ie.id === le.id))) {
          let Ie = V;
          if (K.children) {
            const t0 = me(K);
            Ie = V.filter(
              ($e) => !t0.some((V0) => V0.id === $e.id)
            );
          }
          N([...Ie, K]);
        }
      } else
        N([...V, K]);
      k(Xe ?? []), i || (v && v(Xe ?? []), x && x());
    },
    [S, m, V]
  ), _e = He(
    (K, le, me) => {
      m === "multiple" || m === "multipleTreeView" ? ee(le, me) : (k([le]), v && v([le]), x && x());
    },
    [m, S]
  ), qe = () => {
    v && v(S), x && x();
  }, ze = Z(() => Array.from({ length: 11 }).map((K, le) => /* @__PURE__ */ t.jsx(
    "div",
    {
      className: `menu-list-item loading ${u === "small" ? "small" : ""}`
    },
    le
  )), [u]), B0 = Z(() => /* @__PURE__ */ t.jsxs("div", { className: "menu-list-empty-view", children: [
    /* @__PURE__ */ t.jsx(
      oe,
      {
        role: "icon",
        icon: "search_off",
        isDark: se,
        style: { fontSize: u === "medium" ? 48 : 40 },
        size: u
      }
    ),
    /* @__PURE__ */ t.jsxs("span", { children: [
      /* @__PURE__ */ t.jsxs(
        xe,
        {
          size: u === "medium" ? "small" : "xsmall",
          variant: "regular",
          isDark: se,
          children: [
            "No results for",
            " "
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        xe,
        {
          size: u === "medium" ? "small" : "xsmall",
          variant: "bold",
          isDark: se,
          children: [
            '"',
            L ?? d,
            '".'
          ]
        }
      )
    ] })
  ] }), [L, u, se, d]), H0 = Z(() => {
    const K = Q ? V : V.slice(0, 5), le = V.length - 5;
    return /* @__PURE__ */ t.jsxs("div", { className: "menu-list-tags-view", children: [
      K.map((me) => /* @__PURE__ */ t.jsx(
        X0,
        {
          className: "menu-list-tag-text",
          text: me.label,
          isRemovable: !0,
          size: u === "medium" ? "large" : "small",
          onClick: (Te) => _e(Te, me),
          isDark: se,
          style: { maxWidth: "110px" }
        },
        me.id + "-tag"
      )),
      V.length > 5 && !Q && /* @__PURE__ */ t.jsx(
        U0,
        {
          label: `+${le} more`,
          size: u,
          onClick: () => G(!0)
        },
        "more-tags"
      )
    ] });
  }, [V, Q, u, se]), m0 = (K, le) => {
    let me = S.some(
      (Xe) => Xe.id === K.id
    ), Te = !1;
    if (m === "multipleTreeView") {
      const Xe = K.children || [], R0 = Xe.filter(
        (te) => S.some(
          (ne) => ne.id === te.id
        )
      ).length;
      Te = R0 > 0 && R0 < Xe.length;
    }
    return /* @__PURE__ */ t.jsx(
      Wr,
      {
        item: K,
        isSelected: me,
        indeterminateCheckbox: Te,
        onItemSelect: _e,
        isDark: se,
        size: u,
        type: m,
        selectedItems: S,
        width: "100%",
        renderListItem: m0,
        parent: le
      },
      K.id
    );
  }, Ye = He(() => {
    const K = E.length === S.length ? [] : E;
    k(K), N(K), !i && v && v(K);
  }, [S, E]), ye = Z(() => m === "loading" ? ze : E == null ? void 0 : E.map((K, le) => /* @__PURE__ */ t.jsxs("div", { children: [
    m === "multiple" && le === 0 && /* @__PURE__ */ t.jsx(
      Wr,
      {
        item: { id: "all-options", label: "All Options" },
        isSelected: E.length === S.length,
        indeterminateCheckbox: E.length !== S.length && S.length > 0,
        onItemSelect: Ye,
        isDark: se,
        size: u,
        type: m,
        width: "100%"
      },
      "all-options"
    ),
    m0(K)
  ] }, `list-item-${K.id}`)), [E, S, se, m, u, se]), We = (K, le) => {
    const me = [];
    return K == null || K.forEach((Te) => {
      const Xe = Te.children ? We(Te.children, le) : [];
      (Te.label.toLowerCase().includes(le.toLowerCase()) || Xe.length > 0) && me.push({ ...Te, children: Xe });
    }), me;
  }, ce = He(
    (K) => {
      let le = [];
      m === "multipleTreeView" || m === "singleTreeView" || m === "radiosTreeView" ? le = We(e, K) : m !== "loading" && (le = e == null ? void 0 : e.filter(
        (me) => {
          var Te;
          return ((Te = me.label) == null ? void 0 : Te.toLowerCase().includes(K.toLowerCase())) || K === "";
        }
      )), le.length === 0 ? F(K) : L && F(void 0), R(le);
    },
    [e, m, L]
  ), ue = He(() => {
    R(e ?? []);
  }, [e]), ge = Z(() => {
    if (A && A.items) {
      const K = A.items.slice(0, 4).map((le) => {
        if ((le == null ? void 0 : le.buttonType) === "primary" || (le == null ? void 0 : le.buttonType) === "tertiary") {
          const me = le.onClick;
          return {
            ...le,
            onClick: (Te) => {
              me && me(Te), (le == null ? void 0 : le.buttonType) === "primary" ? qe == null || qe() : x == null || x();
            }
          };
        }
        return le;
      });
      return {
        ...A,
        items: K
      };
    } else
      return {
        items: [
          {
            buttonType: "primary",
            onClick: qe,
            text: "Apply"
          },
          {
            buttonType: "tertiary",
            onClick: x,
            text: "Cancel"
          }
        ],
        size: "small"
      };
  }, [A, qe, x]);
  return /* @__PURE__ */ t.jsx("div", { className: fe, style: De, children: /* @__PURE__ */ t.jsxs("div", { className: "menu-list-content", children: [
    s && /* @__PURE__ */ t.jsx("div", { ref: re, children: /* @__PURE__ */ t.jsx(
      uo,
      {
        role: "search",
        placeholderText: "Search...",
        size: "medium",
        className: "menu-list-search-input",
        isDark: se,
        isClearable: !0,
        onClear: ue,
        onUpdate: ce
      }
    ) }),
    L || l ? B0 : /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "menu-list-body",
        style: { maxHeight: `${J}px` },
        children: [
          (m === "multiple" || m === "multipleTreeView") && S.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "menu-list-tag-container", children: [
            m === "multiple" && S.length === E.length ? /* @__PURE__ */ t.jsx(
              X0,
              {
                className: "menu-list-tag-text",
                text: "All Options",
                isRemovable: !0,
                size: u === "medium" ? "large" : "small",
                onClick: Ye,
                isDark: se,
                style: { maxWidth: "110px" }
              },
              "all"
            ) : H0,
            Q && S.length > 5 && /* @__PURE__ */ t.jsx(
              U0,
              {
                role: "link",
                label: "Hide full list",
                size: u,
                onClick: () => G(!1),
                style: {
                  display: "flex",
                  width: "100%",
                  flexDirection: "column"
                },
                isDark: se
              },
              "hide-tags"
            )
          ] }),
          y && /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `menu-list-header-title separator ${se ? "dark" : ""}`,
              children: /* @__PURE__ */ t.jsx(xe, { size: "small", variant: "caps", isDark: se, children: y })
            }
          ),
          ye
        ]
      }
    ),
    i && (m === "multiple" || m === "multipleTreeView") && /* @__PURE__ */ t.jsx(
      "div",
      {
        role: "footer",
        className: "menu-list-footer",
        style: u === "small" ? { padding: "8px" } : {},
        ref: je,
        children: /* @__PURE__ */ t.jsx(
          Ys,
          {
            ...ge,
            items: ge == null ? void 0 : ge.items,
            isDark: se
          }
        )
      }
    )
  ] }) });
}, $g = ({
  className: e,
  isDark: a,
  breadcrumbs: n = [],
  style: s,
  maxBreadcrumbCount: i = n.length,
  ...l
}) => {
  const { isDark: d } = $(), [f, u] = q(!1), m = Ve(null);
  j0(m, () => {
    u(!1);
  });
  const g = Z(
    () => a ?? d,
    [a, d]
  ), b = j(["breadcrumb", g ? z : "", e ?? ""]), y = {
    ...s ?? {}
    // default styles below
  }, p = n.slice(0, i - 1), v = n[n.length - 1];
  if (n.length === 0)
    return null;
  const x = He((S) => {
    const [k] = S;
    k != null && k.value && (window.location.href = k.value);
  }, []), A = Z(() => {
    const S = n.slice(
      i - 1,
      n.length - 1
    ), k = S ? S.map((E, R) => ({
      id: "breadcrumb-item-" + R,
      label: String(E.label),
      value: E.href
    })) : [];
    return /* @__PURE__ */ t.jsx(
      Vt,
      {
        items: k,
        isDark: g,
        showSearch: !1,
        type: "single",
        width: "100%",
        selectedItemCallback: x,
        onHideMenuList: () => u(!1)
      }
    );
  }, [n, i, g]);
  return /* @__PURE__ */ t.jsxs("div", { className: b, style: y, children: [
    p.map((S, k) => {
      const E = k === 0, R = k === n.length - 1, V = typeof S.label == "string" ? S.label : "";
      return /* @__PURE__ */ t.jsxs(
        "span",
        {
          className: "breadcrumb-item",
          children: [
            /* @__PURE__ */ t.jsxs(
              U0,
              {
                ...l,
                href: S.href,
                disabled: R,
                useAnchor: !R,
                className: j([
                  R ? "active-breadcrumb" : "",
                  "breadcrumb-link"
                ]),
                children: [
                  E && /* @__PURE__ */ t.jsx(
                    oe,
                    {
                      alt: V,
                      svg: /* @__PURE__ */ t.jsx(m9, { isDark: g }),
                      size: "small"
                    }
                  ),
                  k > 0 && /* @__PURE__ */ t.jsx(
                    "span",
                    {
                      className: j([
                        n0,
                        ...E ? [xs] : []
                      ]),
                      children: S.label
                    }
                  )
                ]
              },
              S.href
            ),
            /* @__PURE__ */ t.jsx(
              oe,
              {
                className: j([rn, on]),
                alt: V,
                svg: /* @__PURE__ */ t.jsx(B1, { isDark: g }),
                size: "small"
              }
            )
          ]
        },
        `${S.label}-${k}`
      );
    }),
    n.length > i && i !== 0 && /* @__PURE__ */ t.jsxs("div", { className: "ellipsis-container", children: [
      /* @__PURE__ */ t.jsxs(
        "span",
        {
          className: j(["ellipsis", oo]),
          onClick: () => u(!f),
          children: [
            "...",
            f && /* @__PURE__ */ t.jsx("div", { ref: m, children: A })
          ]
        }
      ),
      /* @__PURE__ */ t.jsx(
        oe,
        {
          className: j([rn, on]),
          alt: "Chevron",
          svg: /* @__PURE__ */ t.jsx(B1, { isDark: g }),
          size: "small"
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("span", { children: /* @__PURE__ */ t.jsx(
      U0,
      {
        ...l,
        href: v == null ? void 0 : v.href,
        disabled: !0,
        useAnchor: !0,
        className: "active-breadcrumb",
        children: /* @__PURE__ */ t.jsx("span", { children: v == null ? void 0 : v.label })
      }
    ) }, v == null ? void 0 : v.href)
  ] });
}, v9 = ({
  disabled: e = !1,
  icon: a,
  isDark: n,
  label: s,
  onClick: i,
  size: l = "medium",
  className: d = "",
  style: f,
  active: u,
  ...m
}) => {
  const g = (y) => {
    y.preventDefault(), y.stopPropagation(), i == null || i(y);
  }, b = j([
    "button-group-item",
    l,
    ...l === "small" ? [Qe] : [],
    ...l === "medium" ? [n0] : [],
    d
  ]);
  return /* @__PURE__ */ t.jsx(
    Kt,
    {
      style: f,
      label: s,
      isShowIcon: !!a,
      icon: a,
      active: u,
      onClick: g,
      size: l,
      isDark: n,
      disabled: e,
      className: b,
      ...m
    }
  );
}, Wg = ({
  className: e,
  groupDisabled: a = !1,
  isDark: n,
  items: s,
  size: i = "medium",
  itemCount: l,
  showMore: d = !1,
  style: f,
  ...u
}) => {
  const { isDark: m } = $(), [g, b] = q(!1), y = Ve(null);
  j0(y, () => {
    b(!1);
  });
  const p = Z(
    () => n ?? m,
    [n, m]
  ), v = j([
    "button-group",
    "button-group".concat("-", i),
    a ? s0 : "",
    p ? z : "",
    e ?? ""
  ]), x = {
    ...f ?? {}
  }, A = Z(() => l ? s.slice(0, l) : s, [s, l]), S = Z(() => l ? s.length > l : !1, [s, l]), k = j([
    "button-group-dropdown-container",
    i,
    p ? z : ""
  ]);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: v,
      style: x,
      ...u,
      role: "button-group",
      ref: y,
      children: [
        A.map(({ icon: E, label: R, onClick: V, disabled: N }, L) => /* @__PURE__ */ t.jsx(
          v9,
          {
            disabled: a ? !0 : N,
            icon: E,
            isDark: p,
            label: R,
            onClick: V,
            size: i
          },
          String(E ?? R).concat("-", L.toString())
        )),
        S && d && /* @__PURE__ */ t.jsx(
          Kt,
          {
            style: f,
            isShowIcon: !0,
            icon: g ? "expand_less" : "expand_more",
            onClick: () => b(!g),
            size: i,
            isDark: p,
            disabled: a,
            className: "button-group-item-dropdown",
            containerClassName: "base-button-more"
          }
        ),
        g && /* @__PURE__ */ t.jsx("div", { className: k, role: "dropdown", children: s.slice(l, s.length).map(({ icon: E, label: R, onClick: V }, N) => /* @__PURE__ */ t.jsx(
          Wr,
          {
            item: {
              id: "button-group-menulist-item-" + N,
              leadingIcon: { icon: E },
              label: R
            },
            size: i === "large" ? "medium" : i,
            isDark: p,
            width: "100%",
            onItemSelect: (L) => V == null ? void 0 : V(
              L
            )
          },
          String(E ?? R).concat("-", N.toString())
        )) })
      ]
    }
  );
}, Xg = ({
  isDark: e,
  showSearch: a = !1,
  className: n = "",
  disabled: s = !1,
  style: i,
  options: l,
  value: d,
  onChange: f,
  buttonProps: u,
  ...m
}) => {
  const { isDark: g } = $(), [b, y] = q(), p = Ve(null), [v, x] = q();
  ve(() => {
    d && x(d);
  }, [d]), j0(p, () => y(!1));
  const A = e ?? g, S = j([
    "button-menu",
    A ? z : "",
    s ? "disabled" : "",
    b ? "open" : "",
    v ? "selected" : "",
    n
  ]), k = j([
    "button-menu-dropdown-container",
    b ? "open" : ""
  ]), E = He(
    (R) => {
      const [V] = R;
      x(V), f == null || f(V);
    },
    [f]
  );
  return /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx("div", { className: S, style: i, children: /* @__PURE__ */ t.jsx("div", { onClick: () => !s && y(!b), children: /* @__PURE__ */ t.jsx(Le, { ...u, disabled: s, isDark: A }) }) }),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: k,
        ref: p,
        role: "listbox",
        children: /* @__PURE__ */ t.jsx(
          Vt,
          {
            items: l,
            isDark: A,
            showSearch: a,
            type: "single",
            width: "fit-content",
            selectedItems: v ? [v] : [],
            selectedItemCallback: E,
            onHideMenuList: () => y(!1),
            ...m
          }
        )
      }
    )
  ] });
}, y9 = /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M11.3335 2H4.66683C3.9335 2 3.3335 2.6 3.3335 3.33333V14L8.00016 12L12.6668 14V3.33333C12.6668 2.6 12.0668 2 11.3335 2Z",
        fill: "#005CBC"
      }
    )
  }
), C9 = /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M11.3335 2H4.66683C3.9335 2 3.3335 2.6 3.3335 3.33333V14L8.00016 12L12.6668 14V3.33333C12.6668 2.6 12.0668 2 11.3335 2ZM11.3335 12L8.00016 10.5467L4.66683 12V3.33333H11.3335V12Z",
        fill: "#005CBC"
      }
    )
  }
), Kg = ({
  isDark: e,
  className: a,
  style: n,
  title: s,
  subtitle: i,
  text: l,
  links: d = [],
  isPin: f = !1,
  selected: u = !1,
  onPinChange: m,
  ...g
}) => {
  const { isDark: b } = $(), y = Z(
    () => e ?? b,
    [e, b]
  ), p = j([
    "contact-details",
    a ?? "",
    D2,
    y ? z : "",
    f ? "selected" : ""
  ]), v = {
    ...n ?? {}
  }, x = Z(
    () => ({
      name: s,
      size: "medium",
      type: "text"
    }),
    []
  );
  return /* @__PURE__ */ t.jsxs("div", { className: p, style: v, children: [
    /* @__PURE__ */ t.jsx(
      H2,
      {
        ...x,
        style: y ? {
          color: "var(--color-text-primary-dark)",
          background: "var(--primary-400Dark)"
        } : {}
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "text-container", children: [
      s && /* @__PURE__ */ t.jsx(
        xe,
        {
          size: "xxsmall",
          variant: "caps",
          className: j([O0, "text-line-height"]),
          isDark: y,
          children: s
        }
      ),
      i && /* @__PURE__ */ t.jsx(
        xe,
        {
          size: "xxsmall",
          variant: "bold",
          className: j([O0, "text-line-height"]),
          isDark: y,
          children: i
        }
      ),
      l && /* @__PURE__ */ t.jsx(
        xe,
        {
          size: "xxsmall",
          variant: "regular",
          className: j([O0, "text-line-height"]),
          isDark: y,
          children: l
        }
      ),
      d && d.map((A, S) => /* @__PURE__ */ t.jsx(
        U0,
        {
          className: j(["contact-details-link"]),
          href: A.link,
          style: A.style,
          label: A.text,
          size: "small",
          isDark: y
        },
        `${g.key}_contact_link_${S}`
      ))
    ] }),
    m && /* @__PURE__ */ t.jsx("div", { className: "button-container", children: /* @__PURE__ */ t.jsx(
      oe,
      {
        isDark: y,
        size: "small",
        svg: f ? y9 : C9,
        className: "pin-button",
        onClick: () => {
          m && m(!f);
        }
      }
    ) })
  ] });
}, x9 = ({ pinned: e, ...a }) => e ? /* @__PURE__ */ t.jsx(
  "svg",
  {
    role: "img",
    "aria-label": "Pinned",
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.3987 6.49967V3.16634H12.0573C12.4195 3.16634 12.7159 2.86634 12.7159 2.49967C12.7159 2.13301 12.4195 1.83301 12.0573 1.83301H5.47147C5.10925 1.83301 4.81288 2.13301 4.81288 2.49967C4.81288 2.86634 5.10925 3.16634 5.47147 3.16634H6.13005V6.49967C6.13005 7.60634 5.24755 8.49967 4.1543 8.49967V9.83301H8.08605V14.4997L8.74464 15.1663L9.40323 14.4997V9.83301H13.3745V8.49967C12.2812 8.49967 11.3987 7.60634 11.3987 6.49967Z",
        fill: "#005CBC"
      }
    )
  }
) : /* @__PURE__ */ t.jsx(
  "svg",
  {
    role: "img",
    "aria-label": "Not Pinned",
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "none",
    ...a,
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.74759 2.16634V5.49967C6.74759 6.24634 6.99126 6.93967 7.40617 7.49967H3.45466C3.88274 6.92634 4.11324 6.23301 4.11324 5.49967V2.16634H6.74759ZM8.72334 0.833008H2.13748C1.77526 0.833008 1.4789 1.13301 1.4789 1.49967C1.4789 1.86634 1.77526 2.16634 2.13748 2.16634H2.79607V5.49967C2.79607 6.60634 1.91357 7.49967 0.820312 7.49967V8.83301H4.75207V13.4997L5.41066 14.1663L6.06924 13.4997V8.83301H10.0405V7.49967C8.94726 7.49967 8.06476 6.60634 8.06476 5.49967V2.16634H8.72334C9.08557 2.16634 9.38193 1.86634 9.38193 1.49967C9.38193 1.13301 9.08557 0.833008 8.72334 0.833008Z",
        fill: "#005CBC"
      }
    )
  }
), Jg = ({
  isDark: e,
  pinned: a,
  centralIcon: n,
  title: s,
  subTitle: i,
  ctaPrimary: l,
  ctaSecondary: d,
  link1: f,
  link2: u,
  link3: m,
  style: g,
  className: b
}) => {
  const { isDark: y } = $(), p = j([
    "dashboard-card",
    e ?? y ? z : "",
    a ? "pinned" : "",
    b
  ]), v = {
    ...g
  };
  return /* @__PURE__ */ t.jsxs("div", { className: p, style: v, children: [
    /* @__PURE__ */ t.jsx("div", { className: j(["pin-icon-wrapper"]), children: a !== void 0 && /* @__PURE__ */ t.jsx(x9, { pinned: a }) }),
    /* @__PURE__ */ t.jsx("div", { className: j(["icon-wrapper"]), children: /* @__PURE__ */ t.jsx(oe, { icon: n, alt: n, size: "large" }) }),
    /* @__PURE__ */ t.jsxs("div", { className: j(["content-wrapper"]), children: [
      /* @__PURE__ */ t.jsxs("div", { className: j(["info-wrapper"]), children: [
        /* @__PURE__ */ t.jsx("span", { className: j(["heading", E2]), children: s }),
        i && /* @__PURE__ */ t.jsx("span", { className: j(["sub-title", n0]), children: i }),
        /* @__PURE__ */ t.jsxs("div", { className: j(["links-wrapper"]), children: [
          f && /* @__PURE__ */ t.jsx(U0, { className: Qe, useAnchor: !0, ...f }),
          u && /* @__PURE__ */ t.jsx(U0, { className: Qe, useAnchor: !0, ...u }),
          m && /* @__PURE__ */ t.jsx(U0, { className: Qe, useAnchor: !0, ...m })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: j(["actions-wrapper"]), children: [
        d && /* @__PURE__ */ t.jsx(Le, { size: "medium", variant: "secondary", ...d }),
        l && /* @__PURE__ */ t.jsx(Le, { size: "medium", variant: "primary", ...l })
      ] })
    ] })
  ] });
}, fo = ct(
  ({
    className: e,
    isDark: a,
    disabled: n = !1,
    required: s = !1,
    inputSize: i,
    style: l,
    error: d,
    trailingIcon: f,
    readOnly: u,
    skelton: m,
    id: g,
    onUpdate: b,
    onClick: y,
    ...p
  }, v) => {
    const { isDark: x } = $(), A = j([
      "input-item",
      i ?? "",
      n ? s0 : "",
      a ?? x ? z : "",
      d ? "error" : "",
      m ? "skelton" : "",
      e ?? ""
    ]), S = {
      ...l ?? {}
    };
    return /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: A,
        style: S,
        onClick: y,
        "data-testid": g ?? "input-item",
        children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "text",
              id: g,
              ...p,
              ref: v,
              className: j([
                "input",
                i === "medium" ? n0 : Qe,
                m ? "skelton-box" : ""
              ]),
              onChange: (k) => {
                var E;
                !u && !n && (b == null || b(k.target.value), (E = p.onChange) == null || E.call(p, k));
              },
              disabled: n
            }
          ),
          f && /* @__PURE__ */ t.jsx(
            oe,
            {
              className: "trailing-icon",
              icon: f,
              size: "small",
              style: { marginRight: "0.25rem" }
            }
          )
        ]
      }
    );
  }
), E1 = (e, a) => new Date(e, a + 1, 0).getDate(), b9 = (e, a) => new Date(e, a, 2).getDay(), w9 = (e, a) => {
  const n = E1(e, a), s = b9(e, a), i = [], l = E1(e, a - 1), d = s > 0 ? s - 1 : 6;
  for (let m = d; m > 0; m--)
    i.push(new Date(e, a - 1, l - m + 1));
  for (let m = 1; m <= n; m++)
    i.push(new Date(e, a, m));
  let f = i[i.length - 1], u = 1;
  for (; i.length < 42 && i.length % 7 !== 0 && (f = i[i.length - 1], i.push(new Date(e, a + 1, u)), u++, !(i.length === 35 && f.getMonth() !== a)); )
    ;
  return i;
}, $s = (e) => [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
][e], q2 = (e) => {
  const a = /* @__PURE__ */ new Date();
  return (e == null ? void 0 : e.getDate()) === a.getDate() && (e == null ? void 0 : e.getMonth()) === a.getMonth() && (e == null ? void 0 : e.getFullYear()) === a.getFullYear();
}, W2 = (e, a) => (e == null ? void 0 : e.getDate()) === (a == null ? void 0 : a.getDate()) && (e == null ? void 0 : e.getMonth()) === (a == null ? void 0 : a.getMonth()) && (e == null ? void 0 : e.getFullYear()) === (a == null ? void 0 : a.getFullYear()), A9 = (e, a, n) => new Date(e, a - 1, n).toLocaleDateString("en-US", { weekday: "long" }), S9 = (e, a) => {
  const n = [];
  for (let s = e; s >= a; s--)
    n.push({ id: s.toString(), label: s.toString() });
  return n;
}, Ws = () => {
  const [e, a] = q(/* @__PURE__ */ new Date()), n = (p) => {
    a((v) => {
      const x = new Date(v);
      return x.setMonth(x.getMonth() + p), x;
    });
  }, s = (p) => {
    const v = y.findIndex((x) => x.id === p);
    if (v !== -1) {
      const x = v - d;
      n(x);
    }
  }, i = (p) => {
    a((v) => {
      const x = new Date(v);
      return x.setDate(x.getDate() + p), x;
    });
  }, l = e.getFullYear(), d = e.getMonth(), f = e.getDate(), u = (/* @__PURE__ */ new Date()).getFullYear(), m = w9(l, d), g = S9(u, 1965), b = (p) => {
    const v = parseInt(p, 10);
    a((x) => {
      const A = new Date(x);
      return A.setFullYear(v), A;
    });
  }, y = [
    { id: "January", label: "January" },
    { id: "February", label: "February" },
    { id: "March", label: "March" },
    { id: "April", label: "April" },
    { id: "May", label: "May" },
    { id: "June", label: "June" },
    { id: "July", label: "July" },
    { id: "August", label: "August" },
    { id: "September", label: "September" },
    { id: "October", label: "October" },
    { id: "November", label: "November" },
    { id: "December", label: "December" }
  ];
  return {
    visibleDate: e,
    currentYear: l,
    currentMonth: d,
    currentDate: f,
    daysArray: m,
    setVisibleDate: a,
    changeDate: i,
    changeMonth: n,
    monthArray: y,
    changeMonthById: s,
    yearArray: g,
    changeYearById: b
  };
}, k9 = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], Xs = ({
  isDark: e,
  className: a,
  style: n,
  type: s = "single",
  // Default type is 'single'
  disabled: i,
  disabledDates: l,
  onlySelectFrom: d,
  ...f
}) => {
  const { isDark: u } = $(), {
    currentYear: m,
    currentMonth: g,
    daysArray: b,
    setVisibleDate: y,
    changeMonth: p,
    monthArray: v,
    changeMonthById: x,
    yearArray: A,
    changeYearById: S
  } = Ws(), [k, E] = q(null), [R, V] = q(!1), [N, L] = q(!1), F = Ve(null), Q = Ve(null), G = (W) => W ? !!(i != null && i.beforeDate && W < i.beforeDate || i != null && i.afterDate && W > i.afterDate || i != null && i.weekends && (W.getDay() === 0 || W.getDay() === 6) || l != null && l.some((ee) => W2(ee, W)) || d && !d.some(
    (ee) => W2(ee, W)
  )) : !1;
  ve(() => {
    var ee;
    const W = s === "range" ? (ee = f.selectedRange) == null ? void 0 : ee.from : f.selectedDate;
    W && y(W);
  }, []), j0(F, () => {
    V(!1);
  }), j0(Q, () => {
    L(!1);
  });
  const J = (W) => {
    if (s === "single") {
      const { setSelectedDate: ee } = f;
      ee(W);
    }
    if (s === "range") {
      const { selectedRange: ee, setSelectedRange: _e } = f;
      !(ee != null && ee.from) || ee != null && ee.from && (ee != null && ee.to) ? _e(W, void 0) : W < ee.from ? _e(W, ee.from) : _e(ee.from, W);
    }
  }, X = (W) => {
    if (s === "range") {
      const { selectedRange: ee } = f;
      ee != null && ee.from && !(ee != null && ee.to) && E(W);
    }
  }, re = () => {
    E(null);
  }, je = (W) => {
    const { selectedRange: ee } = f;
    return W && (ee == null ? void 0 : ee.from) && k && W > ee.from && W < k;
  }, Me = (W) => {
    const { selectedRange: ee } = f;
    return W && (ee == null ? void 0 : ee.from) && (ee == null ? void 0 : ee.to) && W > ee.from && W < ee.to;
  }, se = j([
    "date-picker-menu",
    e ?? u ? z : "",
    a ?? ""
  ]), fe = {
    ...n ?? {}
  }, De = Z(
    () => A == null ? void 0 : A.find((W) => W.id === m + ""),
    [A, m]
  );
  return /* @__PURE__ */ t.jsxs("div", { className: se, style: fe, "data-testid": "date-picker-menu", children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: j(["month-year", e ?? u ? z : ""]),
        children: [
          /* @__PURE__ */ t.jsx(
            oe,
            {
              icon: "chevron_left",
              onClick: () => p(-1),
              size: "small"
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: "selection-trigger",
              onClick: () => {
                V(!R), L(!1);
              },
              children: [
                /* @__PURE__ */ t.jsx("p", { className: j([N0]), children: $s(g) }),
                /* @__PURE__ */ t.jsx(
                  oe,
                  {
                    icon: "arrow_drop_down",
                    size: "small",
                    "data-testid": "month-filter-button"
                  }
                ),
                R && /* @__PURE__ */ t.jsx("div", { ref: F, className: "month-container", children: /* @__PURE__ */ t.jsx(
                  Vt,
                  {
                    items: v,
                    isDark: e ?? u,
                    showSearch: !0,
                    type: "single",
                    width: "fit-content",
                    selectedItems: [v[g]],
                    selectedItemCallback: (W) => {
                      var ee;
                      x((ee = W[0]) == null ? void 0 : ee.id), V(!1);
                    }
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: "selection-trigger",
              onClick: () => {
                L(!N), V(!1);
              },
              children: [
                /* @__PURE__ */ t.jsx("p", { className: j([N0]), children: m }),
                /* @__PURE__ */ t.jsx(
                  oe,
                  {
                    icon: "arrow_drop_down",
                    size: "small",
                    "data-testid": "year-filter-button"
                  }
                ),
                N && /* @__PURE__ */ t.jsx("div", { ref: Q, className: "year-container", children: /* @__PURE__ */ t.jsx(
                  Vt,
                  {
                    items: A,
                    isDark: e ?? u,
                    showSearch: !0,
                    type: "single",
                    width: "fit-content",
                    selectedItems: De ? [De] : [],
                    selectedItemCallback: (W) => {
                      var ee;
                      S((ee = W[0]) == null ? void 0 : ee.id), L(!1), V(!1);
                    }
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ t.jsx(
            oe,
            {
              icon: "chevron_right",
              onClick: () => p(1),
              size: "small"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: j(["weekdays", e ?? u ? z : ""]), children: k9.map((W) => /* @__PURE__ */ t.jsx("span", { className: j(["weekday", N0]), children: W[0] }, W)) }),
    /* @__PURE__ */ t.jsx("div", { className: "days-container", children: b.map((W, ee) => {
      const _e = G(W);
      let qe = j([
        "day",
        _e ? "disabled" : "",
        q2(W) ? "today" : "",
        q2(W) ? N0 : n0,
        (W == null ? void 0 : W.getMonth()) !== g ? "outside" : "",
        e ?? u ? z : ""
      ]);
      if (s === "range") {
        const { selectedRange: ze } = f;
        qe = j([
          qe,
          W2(W, ze == null ? void 0 : ze.from) ? "start-date" : "",
          Me(W) ? "selected-range" : "",
          je(W) ? "hover-range" : "",
          W2(W, ze == null ? void 0 : ze.to) ? "end-date" : ""
        ]);
      } else {
        const { selectedDate: ze } = f;
        qe = j([
          qe,
          W2(W, ze) ? "selected" : ""
        ]);
      }
      return /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: qe,
          onClick: () => !_e && W && J(W),
          onMouseEnter: () => !_e && W && X(W),
          onMouseLeave: re,
          "data-testid": `day-${W == null ? void 0 : W.getDate()}`,
          children: [
            /* @__PURE__ */ t.jsx("span", { children: W && W.getDate() }),
            q2(W) && /* @__PURE__ */ t.jsx("span", { className: "dot" })
          ]
        },
        ee
      );
    }) })
  ] });
}, D1 = (e) => {
  if (typeof e == "string") {
    const a = new Date(e);
    return isNaN(a.getTime()) ? [void 0, ""] : [
      a,
      a.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
      })
    ];
  } else if (e instanceof Date)
    return [
      e,
      e.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
      })
    ];
  return [void 0, ""];
}, qg = ct(
  ({
    label: e,
    className: a,
    isDark: n,
    disabled: s = !1,
    required: i = !1,
    inputSize: l,
    placeholder: d,
    selected: f,
    setSelected: u,
    skelton: m,
    style: g,
    helperText: b,
    error: y,
    feedbackType: p,
    datePickerMenu: v,
    ...x
  }, A) => {
    var X;
    const S = Ve(null), k = Ve(null), { isDark: E } = $(), [R, V] = q(!1), N = Z(
      () => n ?? E,
      [n, E]
    );
    j0(k, () => {
      V(!1);
    });
    const L = j([
      "date-picker-input",
      Y0,
      s ? s0 : "",
      i ? "required" : "",
      N ? z : "",
      a ?? "",
      y ? "error" : ""
    ]), F = {
      ...g ?? {}
    }, Q = (e == null ? void 0 : e.toLowerCase().replace(/ /g, "-")) ?? "text-input-00", [G, J] = Z(
      () => D1(f),
      [f]
    );
    return S2(A, () => ({
      openMenu: () => V(!0),
      closeMenu: () => V(!1),
      input: S == null ? void 0 : S.current
    })), /* @__PURE__ */ t.jsxs("div", { className: L, style: F, ref: k, children: [
      !m && /* @__PURE__ */ t.jsx(
        ut,
        {
          label: e,
          showLabelIcon: !0,
          disabled: s,
          isDark: N,
          required: i
        }
      ),
      /* @__PURE__ */ t.jsx(
        fo,
        {
          id: Q,
          ...x,
          ref: S,
          isDark: n,
          inputSize: l,
          error: !!y,
          disabled: s,
          placeholder: d,
          value: J,
          skelton: m,
          trailingIcon: "calendar_today",
          onClick: () => {
            V((re) => !re);
          },
          readOnly: !0
        }
      ),
      b && !m && /* @__PURE__ */ t.jsx(
        yt,
        {
          message: b,
          variant: y ? "error" : p,
          disabled: s,
          isDark: N,
          className: j(["helper-text"])
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          style: {
            position: "absolute",
            top: `${((X = k == null ? void 0 : k.current) == null ? void 0 : X.clientHeight) ?? 55}px`,
            left: 0,
            zIndex: 1,
            width: "100%",
            opacity: R ? "1" : "0",
            height: R ? "auto" : "0",
            overflow: "hidden"
          },
          children: /* @__PURE__ */ t.jsx(
            Xs,
            {
              selectedDate: G,
              setSelectedDate: (re) => {
                u(D1(re)[1]), V(!1);
              },
              ...v
            }
          )
        }
      )
    ] });
  }
), em = ct(
  ({
    isDark: e,
    loading: a,
    size: n,
    label: s,
    required: i = !1,
    placeholder: l,
    selectedDateRange: d,
    style: f,
    className: u,
    onSelectDateRange: m,
    datePickerMenu: g,
    ...b
  }, y) => {
    const p = Ve(null), v = Ve(null), { isDark: x } = $(), [A, S] = q(!1);
    j0(v, () => {
      S(!1);
    });
    const k = Z(
      () => e ?? x,
      [e, x]
    ), E = j([
      "date-range-picker",
      Y0,
      k ? z : "",
      u ?? ""
    ]), R = {
      ...f ?? {}
    }, { from: V, to: N } = Z(() => {
      var L, F;
      return {
        from: ((L = d == null ? void 0 : d.from) == null ? void 0 : L.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric"
        })) ?? "",
        to: ((F = d == null ? void 0 : d.to) == null ? void 0 : F.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric"
        })) ?? ""
      };
    }, [d]);
    return S2(y, () => ({
      openMenu: () => S(!0),
      closeMenu: () => S(!1),
      input: p == null ? void 0 : p.current
    })), /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: E,
        style: R,
        ref: v,
        "data-testid": "date-range-picker",
        children: [
          s && /* @__PURE__ */ t.jsx(
            ut,
            {
              label: s,
              className: "date-range-picker-header",
              isDark: k,
              required: i
            }
          ),
          /* @__PURE__ */ t.jsx(
            fo,
            {
              ...b,
              ref: p,
              id: "date-range-picker-input",
              isDark: k,
              inputSize: n,
              placeholder: l,
              value: V ? `${V} - ${N}` : "",
              skelton: a,
              trailingIcon: "calendar_today",
              onClick: () => {
                S((L) => !L);
              },
              readOnly: !0
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: "date-picker-menu-wrapper", children: /* @__PURE__ */ t.jsx(
            "div",
            {
              "data-testid": "date-picker-menu-wrapper",
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                width: "100%",
                opacity: A ? "1" : "0",
                height: A ? "auto" : "0",
                overflow: "hidden"
              },
              children: /* @__PURE__ */ t.jsx(
                Xs,
                {
                  type: "range",
                  selectedRange: d,
                  setSelectedRange: (L, F) => m({ from: L, to: F }),
                  isDark: e,
                  ...g
                }
              )
            }
          ) })
        ]
      }
    );
  }
), an = ct(
  ({
    childList: e,
    className: a,
    disabled: n,
    error: s,
    helperText: i,
    label: l,
    isDark: d,
    isRequired: f,
    placeholder: u = "Search...",
    selectedValue: m,
    setSelectedValue: g,
    size: b = "medium",
    style: y,
    dropdownHeader: p,
    selection: v = "single",
    feedbackType: x,
    isClearable: A = !0,
    showFooter: S = !1,
    customFooterOptions: k,
    ...E
  }, R) => {
    const { isDark: V } = $(), N = Ve(null), L = Ve(null), F = Z(
      () => d ?? V,
      [d, V]
    ), [Q, G] = q(!1), [J, X] = q(e), [re, je] = q(e), [Me, se] = q(""), [fe, De] = q(
      m == null ? void 0 : m.length
    ), [W, ee] = q(v), _e = {
      ...y ?? {}
      // default styles below
    };
    ve(() => {
      ee(v);
    }, [v]), ve(() => {
      je(e), X(e);
    }, [e]), ve(() => {
      m && m.length > 0 ? v === "single" || v === "singleTreeView" ? (m[0].displayText !== Me && se(m[0].displayText), m.length > 1 && ye(
        m0([m[0]])
      )) : (v === "multiple" || v === "multipleTreeView") && (se(""), De(m.length)) : (m == null ? void 0 : m.length) === 0 && (se(""), (v === "multiple" || v === "multipleTreeView") && De(void 0));
    }, [m, v]);
    const qe = (ce) => {
      const ue = String(ce).toLowerCase().trim();
      if (ue === "") {
        re !== J && je(J);
        return;
      }
      if (m !== void 0) {
        for (const me of m)
          if (ue === String(me.displayText).toLowerCase().trim()) {
            re !== J && je(J);
            return;
          }
      }
      let ge = [];
      for (let me = 0; me < J.length; me++)
        J[me].displayText.toLowerCase().includes(ue) && ge.push(J[me]);
      const K = re.map((me) => me.id), le = ge.map((me) => me.id);
      JSON.stringify(K) !== JSON.stringify(le) && je(ge);
    }, ze = () => {
      g(void 0), X(e), je(e), se(""), (v === "multiple" || v === "multipleTreeView") && (De(void 0), g([])), L.current !== null && L.current.focus();
    }, B0 = (ce) => {
      se(ce.target.value), qe(ce.target.value), m && (v === "single" || v === "singleTreeView") && g(void 0), Q === !1 && G(!0);
    }, H0 = () => {
      n !== !0 && G(!Q), L.current !== null && L.current.focus();
    };
    j0(N, () => {
      G(!1);
    });
    const m0 = (ce) => ce ? ce.map((ue) => {
      const { displayText: ge, childContents: K, ...le } = ue;
      return {
        label: ge,
        children: K ? m0(K) : [],
        ...le
      };
    }) : [], Ye = (ce) => ce ? ce.map((ue) => {
      const { label: ge, children: K, ...le } = ue;
      return {
        displayText: ge,
        childContents: K ? Ye(K) : [],
        ...le
      };
    }) : [], ye = He(
      (ce) => {
        var ue;
        g(Ye(ce)), W === "multiple" || W === "multipleTreeView" ? (W === "multipleTreeView" && (ce = ce.filter(
          (ge) => {
            var K;
            return ge.children == null || ((K = ge == null ? void 0 : ge.children) == null ? void 0 : K.length) === 0;
          }
        )), De(ce.length), se("")) : (se(((ue = ce[0]) == null ? void 0 : ue.label) ?? ""), X(e), je(e)), L.current !== null && L.current.focus();
      },
      [W, e]
    );
    S2(R, () => ({
      closeDropdownMenu: () => G(!1),
      openDropdownMenu: () => G(!0),
      input: L == null ? void 0 : L.current
    }));
    const We = A && (v === "single" || v === "singleTreeView") && !!Me;
    return /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: j([a, "dropdown-wrapper"]),
        style: _e,
        ref: N,
        role: "dropdown",
        children: [
          l && /* @__PURE__ */ t.jsx(
            ut,
            {
              label: l,
              showLabelIcon: !0,
              required: f,
              disabled: n,
              isDark: F
            }
          ),
          /* @__PURE__ */ t.jsxs("div", { className: j(["dropdown-input-row", b]), children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                ...E,
                ref: L,
                type: "text",
                placeholder: u,
                className: j([
                  "dropdown-parent",
                  F ? z : "",
                  b,
                  s ? "error" : "",
                  We ? ks : Dn
                ]),
                onClick: H0,
                onChange: B0,
                disabled: n,
                tabIndex: 3,
                value: Me,
                role: "input"
              }
            ),
            /* @__PURE__ */ t.jsxs("div", { className: "icon-container", children: [
              We ? /* @__PURE__ */ t.jsx(
                Ft,
                {
                  icon: Pn,
                  disabled: n,
                  isDark: F,
                  onClick: ze,
                  size: "small",
                  type: "naked"
                }
              ) : null,
              (v === "multiple" || v === "multipleTreeView") && (fe ?? 0) > 0 && /* @__PURE__ */ t.jsx(
                X0,
                {
                  id: "cancel-selection",
                  isDark: F,
                  isRemovable: !0,
                  isCopyable: !1,
                  size: b === "medium" ? "large" : "small",
                  text: fe,
                  onRemove: ze
                },
                fe
              ),
              /* @__PURE__ */ t.jsx(
                oe,
                {
                  icon: Q ? "expand_less" : "expand_more",
                  alt: Q ? "Expand" : "Collapse",
                  size: "small",
                  onClick: H0,
                  disabled: n,
                  isDark: F,
                  className: j(["icon"])
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t.jsx(
            yt,
            {
              message: i,
              variant: s ? "error" : x,
              disabled: n,
              isDark: F,
              className: j([
                "dropdown-hint",
                Q ? "hide" : "",
                zr,
                b
              ])
            }
          ),
          Q && /* @__PURE__ */ t.jsx("div", { style: { position: "relative", width: "100%" }, children: /* @__PURE__ */ t.jsx(
            Vt,
            {
              role: "menu-list",
              items: m0(re),
              type: W,
              size: b,
              isDark: F,
              listHeaderLabel: p,
              selectedItems: m0(m ?? []),
              selectedItemCallback: ye,
              onHideMenuList: () => G(!1),
              showSearch: !1,
              width: "100%",
              showEmptyStateView: re.length === 0,
              emptyStateMessage: Me,
              customFooterOptions: k,
              showFooter: S
            }
          ) })
        ]
      }
    );
  }
);
var ht = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.CHECKBOX = "checkbox", e.BADGE = "badge", e))(ht || {});
const g2 = ({
  type: e = ht.DEFAULT,
  isDark: a,
  size: n,
  separator: s,
  className: i = "",
  style: l,
  onClick: d,
  ...f
}) => {
  const { isDark: u } = $(), m = Z(
    () => a ?? u,
    [a, u]
  ), g = j([
    "dropdown-list-item",
    s ? "separator" : "",
    n,
    m ? z : "",
    n === "small" ? Qe : n0,
    e,
    i
  ]), b = {
    ...l ?? {}
  };
  switch (e) {
    case ht.DEFAULT:
      const { trailingIcon: y, leadingIcon: p, text: v } = f;
      return /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: g,
          style: b,
          onClick: d,
          role: "dropdown-list-item",
          children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              y && /* @__PURE__ */ t.jsx(oe, { icon: y, size: "small", alt: "" }),
              v
            ] }),
            /* @__PURE__ */ t.jsx(oe, { icon: p, size: "small", alt: "" })
          ]
        }
      );
    case ht.CHECKBOX:
      const {
        checked: x,
        text: A,
        disabled: S,
        onUpdate: k
      } = f, E = (N) => {
        N.preventDefault(), k(!x);
      };
      return /* @__PURE__ */ t.jsx(
        "div",
        {
          className: g,
          style: b,
          onClick: E,
          role: "dropdown-list-item",
          children: /* @__PURE__ */ t.jsx(
            A2,
            {
              checked: x,
              disabled: S,
              text: A,
              readOnly: !0
            }
          )
        }
      );
    case ht.BADGE:
      const { options: R, onRemove: V } = f;
      return /* @__PURE__ */ t.jsx("div", { className: g, style: b, role: "dropdown-list-item", children: R.map(({ id: N, label: L }) => /* @__PURE__ */ t.jsx(
        X0,
        {
          color: "Cyan-500",
          type: "filled",
          text: L,
          size: n === "small" ? "small" : "large",
          isRemovable: !0,
          onClick: () => V(N)
        },
        `badge-${N}`
      )) });
    default:
      return null;
  }
}, j9 = ({
  label: e,
  className: a,
  isDark: n,
  startLabel: s = "",
  endLabel: i = "",
  size: l = "medium",
  status: d = "active",
  value: f = 0,
  max: u = 100,
  variant: m = "determinate",
  style: g,
  ...b
}) => {
  const { isDark: y } = $(), p = Z(
    () => n ?? y,
    [n, y]
  ), v = d === "success", x = d === "error", A = d === "warning", S = Z(() => {
    switch (d) {
      case "success":
        return "check_circle";
      case "error":
        return "error_outline";
      case "warning":
        return "warning_amber";
      default:
        return "";
    }
  }, [d]), k = m === "indeterminate" && !v && !x && !A, E = Z(() => {
    if (k) return 0;
    let L = f;
    return L && L > u && (L = u), L && L < 0 && (L = 0), (x || A || v) && (L = u), (L ?? NaN) / u;
  }, [f, u, v, x, A, k]), R = j([
    "progress-bar",
    p ? z : "",
    a ?? "",
    O0
  ]), V = j([
    "progress-bar-track",
    l,
    d,
    p ? z : "",
    k ? "indeterminate" : "",
    tr
  ]), N = {
    ...g ?? {}
  };
  return /* @__PURE__ */ t.jsxs("div", { className: R, style: N, children: [
    /* @__PURE__ */ t.jsxs("div", { className: j(["label-container", ds]), children: [
      /* @__PURE__ */ t.jsx("span", { className: j(["label-text", N0]), children: e }),
      S && /* @__PURE__ */ t.jsx(
        oe,
        {
          className: j(["status-icon", Qr, ms, d]),
          alt: "Status",
          icon: S,
          size: "small"
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: j(["progress-bar-value-container"]), children: [
      s && /* @__PURE__ */ t.jsx("span", { className: j(["label-text", Qe, so]), children: s }),
      /* @__PURE__ */ t.jsx("div", { className: V, role: "progressbar", ...b, children: /* @__PURE__ */ t.jsx(
        "div",
        {
          className: j(["progress-bar-value", tr]),
          style: {
            transform: k ? "scaleX(0)" : void 0,
            width: k ? void 0 : `${E * 100}%`
          }
        }
      ) }),
      i && /* @__PURE__ */ t.jsx("span", { className: j(["label-text", Qe, Qr]), children: i })
    ] })
  ] });
}, B9 = (e) => {
  const a = Z(() => e.disabled ? e.isDark ? "var(--gray-500)" : "var(--color-text-tertiary)" : e.isDark ? "var(--color-text-primary-dark)" : "var(--color-text-primary)", [e.disabled, e.isDark]);
  return /* @__PURE__ */ t.jsx(
    "svg",
    {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ t.jsx("g", { id: "Image/image", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          id: "Vector",
          d: "M25.3333 6.66667V25.3333H6.66667V6.66667H25.3333ZM25.3333 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333V6.66667C28 5.2 26.8 4 25.3333 4ZM18.8533 15.8133L14.8533 20.9733L12 17.52L8 22.6667H24L18.8533 15.8133Z",
          fill: a
        }
      ) })
    }
  );
}, tm = ct(
  ({
    className: e,
    accept: a,
    label: n,
    description: s = "Drag and drop your file here...",
    buttonLabel: i = "Upload file",
    files: l,
    variant: d = "default",
    progressPerc: f = 0,
    isDark: u,
    disabled: m = !1,
    required: g = !1,
    onUpdate: b = (F) => {
      console.info(`[File.onUpdate] value = ${F.name}`, F);
    },
    onDelete: y = (F) => {
      console.info("[File.onDelete]", F);
    },
    onFileError: p = (F) => {
      console.info("[File.onError]", F);
    },
    onValidateFile: v,
    style: x,
    helperText: A,
    feedbackType: S,
    type: k = "multiple",
    imageUri: E,
    containerClassName: R,
    showSkeleton: V,
    ...N
  }, L) => {
    const F = Ve(null), [Q, G] = q(!1), { isDark: J } = $(), X = Z(
      () => u ?? J,
      [u, J]
    ), re = Z(() => d === "edit", [d]), je = Z(() => d === "complete", [d]), Me = Z(() => d === "uploading", [d]), se = Z(
      () => m || k === "single" && Number(l == null ? void 0 : l.length) >= 1,
      [m, l == null ? void 0 : l.length, k]
    ), fe = Z(
      () => Me || m || k === "single" && Number(l == null ? void 0 : l.length) >= 1,
      [m, l == null ? void 0 : l.length, Me, k]
    ), De = Z(
      () => Me || m,
      [Me, m]
    ), W = j([
      "file-upload",
      Y0,
      d,
      m ? s0 : "",
      g ? "required" : "",
      X ? z : "",
      e ?? ""
    ]), ee = {
      ...x ?? {}
      // default styles below
    }, _e = He(
      (ye) => {
        if (!(a != null && a.length))
          return ye;
        const We = new Set(a.split(",")), { name: ce, type: ue } = ye, ge = /.[0-9a-z]+$/i, [K] = ce.match(ge) ?? [""];
        if (We.has(ue) || We.has(K.toLowerCase()))
          return ye;
      },
      [a]
    ), qe = He(() => {
      var ye;
      fe || (ye = F.current) == null || ye.click();
    }, [fe]), ze = He(() => {
      !fe && (F != null && F.current) && (F.current.value = "");
    }, [fe]), B0 = He(
      (ye) => {
        if (!fe) {
          const We = _e(ye);
          We ? (!v || v(We)) && b && b(ye) : p("File format is not valid");
        }
      },
      [fe, p, b, v, _e]
    ), H0 = He(
      (ye) => {
        !fe && ye.dataTransfer.files.length > 0 && B0(ye.dataTransfer.files[0]);
      },
      [B0, fe]
    ), m0 = He(
      (ye) => {
        var We, ce, ue;
        !fe && ((We = ye == null ? void 0 : ye.target) != null && We.files) && ((ue = (ce = ye == null ? void 0 : ye.target) == null ? void 0 : ce.files) == null ? void 0 : ue.length) > 0 && (B0(ye.target.files[0]), ze());
      },
      [B0, fe, ze]
    ), Ye = He(
      (ye) => {
        De || y && y(ye);
      },
      [De, y]
    );
    return S2(L, () => ({
      openFileDialog: qe,
      resetFileInput: ze,
      input: F == null ? void 0 : F.current
    })), V ? /* @__PURE__ */ t.jsxs("div", { className: "file-upload", "data-testid": "file-skeleton", children: [
      /* @__PURE__ */ t.jsx("div", { className: j(["label-skeleton", "shimmer"]) }),
      /* @__PURE__ */ t.jsx("div", { className: j(["file-container", "shimmer"]) })
    ] }) : /* @__PURE__ */ t.jsxs("div", { className: W, style: ee, role: "file", children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "file",
          id: "file-upload-input",
          ...N,
          className: "file-upload-hidden",
          ref: F,
          tabIndex: -1,
          disabled: fe,
          accept: a,
          required: g,
          onChange: m0,
          multiple: !1
        }
      ),
      /* @__PURE__ */ t.jsx(
        ut,
        {
          label: n,
          showLabelIcon: !0,
          required: g,
          disabled: m,
          isDark: X
        }
      ),
      k === "image" && E ? /* @__PURE__ */ t.jsxs("div", { className: j(["image-wrapper", "file-container"]), children: [
        /* @__PURE__ */ t.jsx("img", { src: E, alt: "Image" }),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: j([
              "image-button-wrapper",
              R ?? ""
            ]),
            children: /* @__PURE__ */ t.jsx(
              Ft,
              {
                icon: "delete",
                disabled: De,
                onClick: () => {
                  Ye(-1);
                }
              }
            )
          }
        )
      ] }) : /* @__PURE__ */ t.jsxs("div", { children: [
        !je && /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "file-upload-wrapper",
            role: "dropzone",
            onDragOver: (ye) => {
              ye.stopPropagation(), ye.preventDefault(), !fe && (G(!0), ye.dataTransfer.dropEffect = "copy");
            },
            onDragLeave: (ye) => {
              ye.stopPropagation(), ye.preventDefault(), !fe && (G(!1), ye.dataTransfer.dropEffect = "move");
            },
            onDrop: (ye) => {
              ye.stopPropagation(), ye.preventDefault(), !fe && (G(!1), H0(ye));
            },
            children: /* @__PURE__ */ t.jsxs(
              "div",
              {
                className: j([
                  "file-upload-drag-drop",
                  "file-container",
                  R ?? "",
                  D2,
                  Q ? "file-upload--drag-over" : "",
                  tr,
                  X ? z : "",
                  S === "error" ? "error" : "",
                  se ? "disabled" : ""
                ]),
                children: [
                  Me ? /* @__PURE__ */ t.jsx(
                    j9,
                    {
                      className: j([
                        "file-upload-progressbar",
                        zr,
                        Gr
                      ]),
                      value: f,
                      size: "medium"
                    }
                  ) : /* @__PURE__ */ t.jsx("div", { className: j(["file-type-wrapper", fs]), children: k === "image" ? /* @__PURE__ */ t.jsx(B9, { isDark: X, disabled: m }) : /* @__PURE__ */ t.jsx(
                    _8,
                    {
                      format: "doc",
                      className: j([
                        "file-format-icon",
                        se ? "disabled" : ""
                      ]),
                      isDark: X,
                      size: "medium"
                    }
                  ) }),
                  /* @__PURE__ */ t.jsx(
                    "div",
                    {
                      className: j([
                        "desc-wrapper",
                        ps,
                        fe ? qr : it,
                        Qe,
                        X ? z : ""
                      ]),
                      children: /* @__PURE__ */ t.jsx("span", { children: s })
                    }
                  ),
                  /* @__PURE__ */ t.jsx("div", { className: j(["doc-button-wrapper"]), children: /* @__PURE__ */ t.jsx(
                    Le,
                    {
                      type: "button",
                      className: j(["file-upload-button"]),
                      iconLeading: "upload",
                      variant: "secondary",
                      onClick: qe,
                      size: "small",
                      disabled: fe,
                      text: i
                    }
                  ) })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ t.jsx(
          yt,
          {
            message: A,
            variant: S,
            disabled: m,
            isDark: X
          }
        ),
        (re || je || Me) && l && l.length > 0 && l.map((ye, We) => /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: j([
              "file-name-wrapper",
              zr,
              tr,
              Zr,
              z1
            ]),
            children: [
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: j([
                    "file-name",
                    Qe,
                    it,
                    X ? z : ""
                  ]),
                  children: [
                    /* @__PURE__ */ t.jsx(
                      oe,
                      {
                        alt: "FileIcon",
                        icon: "insert_drive_file",
                        size: "small",
                        className: j(["file-icon", y2])
                      }
                    ),
                    /* @__PURE__ */ t.jsx("span", { children: ye })
                  ]
                }
              ),
              /* @__PURE__ */ t.jsx(
                oe,
                {
                  alt: "Delete",
                  icon: "delete",
                  size: "small",
                  className: j(["delete-file-icon", so]),
                  onClick: () => {
                    Ye(We);
                  },
                  disabled: m
                }
              )
            ]
          },
          `file_item_${We}`
        ))
      ] })
    ] });
  }
), E9 = ct(
  ({
    size: e,
    isDark: a,
    showSearch: n = !0,
    label: s,
    selection: i = "single",
    listLabel: l,
    className: d = "",
    disabled: f = !1,
    style: u,
    options: m,
    value: g,
    onChange: b,
    primaryButtonText: y,
    secondaryButtonText: p
  }, v) => {
    const { isDark: x } = $(), [A, S] = q(), k = Ve(null), [E, R] = q([]);
    ve(() => {
      if (g) {
        const G = Array.isArray(g) ? g : g ? [g] : [];
        (i === "multiple" || i === "single") && R(G);
      }
    }, [g, i]), j0(k, () => S(!1));
    const V = Z(
      () => {
        var G;
        return E.length > 0 && ((G = E[0]) == null ? void 0 : G.label);
      },
      [E, m]
    ), N = a ?? x, L = j([
      "filter",
      e,
      i,
      N ? z : "",
      f ? "disabled" : "",
      e !== "small" && E.length > 0 ? N0 : Qe,
      A ? "open" : "",
      E.length > 0 ? "selected" : "",
      d
    ]), F = j([
      "filter-dropdown-container",
      A ? "open" : ""
    ]), Q = He(
      (G) => {
        if (R(G ?? []), i === "single") {
          const [J] = G;
          b == null || b(J), S(!1);
        } else
          b == null || b(G);
      },
      [b, i]
    );
    return S2(v, () => ({
      openMenu: () => S(!0),
      closeMenu: () => S(!1)
    })), /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsxs("div", { className: L, style: u, children: [
        /* @__PURE__ */ t.jsxs("div", { onClick: () => !f && S(!A), children: [
          V || s,
          /* @__PURE__ */ t.jsx(oe, { icon: "arrow_drop_down", size: "small" })
        ] }),
        i === "multiple" && (E == null ? void 0 : E.length) > 1 && /* @__PURE__ */ t.jsx(
          X0,
          {
            text: `+${E.length - 1}`,
            onClick: () => Q([]),
            isRemovable: !0,
            size: e === "small" ? "small" : "large"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: F,
          ref: k,
          role: "listbox",
          children: /* @__PURE__ */ t.jsx(
            Vt,
            {
              items: m,
              isDark: N,
              showSearch: n,
              size: e,
              listHeaderLabel: l,
              type: i,
              width: "220px",
              selectedItems: E,
              selectedItemCallback: Q,
              onHideMenuList: () => S(!1),
              showFooter: i === "multiple",
              customFooterOptions: {
                items: [
                  {
                    buttonType: "primary",
                    text: y || "Apply"
                  },
                  {
                    buttonType: "tertiary",
                    text: p || "Cancel"
                  }
                ],
                size: "small"
              }
            }
          )
        }
      )
    ] });
  }
), rm = ({
  selection: e,
  isDark: a,
  size: n,
  showSearch: s,
  header: i,
  className: l = "",
  style: d,
  options: f,
  ...u
}) => {
  const { isDark: m } = $(), g = a ?? m, b = j([
    "filter-dropdown-menu-list",
    n,
    e,
    g ? z : "",
    l
  ]), [y, p] = q(f), [v, x] = q([]);
  ve(() => {
    x(u.selectedIds || []);
  }, [u.selectedIds]), ve(() => {
    p(f || []);
  }, [f]);
  const A = He(
    (L) => {
      const F = f.filter(
        (Q) => Q.label.toLowerCase().includes(L.toLowerCase())
      );
      p(F);
    },
    [f]
  ), S = (L) => {
    if (e === "single") {
      const { selectedId: F, handleSelectId: Q } = u;
      Q == null || Q(L === F ? "" : L);
    } else {
      const F = [...v], Q = F.indexOf(L);
      Q === -1 ? F.push(L) : F.splice(Q, 1), x(F);
    }
  }, k = Z(() => e === "single" ? [] : v ? (y == null ? void 0 : y.filter(({ id: L }) => v == null ? void 0 : v.includes(L))) ?? [] : [], [v, y]), E = Z(() => v.length === y.length && y.length > 0, [v, y]), R = () => {
    if (E)
      x([]);
    else {
      const L = y.map((F) => F.id);
      x(L);
    }
  }, V = () => {
    x(u.selectedIds), u.toggleDropdown();
  }, N = () => {
    const L = u;
    L.handleSelectIds(v), L.toggleDropdown();
  };
  return /* @__PURE__ */ t.jsxs("div", { className: b, style: d, children: [
    s && /* @__PURE__ */ t.jsx(
      fo,
      {
        inputSize: n,
        isDark: g,
        placeholder: "Search",
        onUpdate: A,
        trailingIcon: "search"
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "filter-dropdown-menu-list-content", children: [
      (i == null ? void 0 : i.text) && e === "single" && /* @__PURE__ */ t.jsx(
        g2,
        {
          text: i.text,
          className: "header",
          type: ht.DEFAULT,
          isDark: g,
          separator: i.separator ?? !0,
          size: i.size ?? n
        },
        "filter-menu-header"
      ),
      e === "multiple" && /* @__PURE__ */ t.jsx(
        g2,
        {
          text: "Select All",
          className: "header",
          type: ht.CHECKBOX,
          isDark: g,
          separator: !0,
          size: n,
          checked: E,
          onUpdate: R
        },
        "filter-menu-selector-all"
      ),
      k.length > 0 && e === "multiple" && /* @__PURE__ */ t.jsx(
        g2,
        {
          type: ht.BADGE,
          options: k,
          onRemove: S,
          isDark: g,
          size: n,
          separator: !0
        },
        "filter-menu-selected"
      ),
      y == null ? void 0 : y.map(({ label: L, id: F, icon: Q, onClick: G }, J) => /* @__PURE__ */ t.jsx(Xr, { children: e === "single" ? /* @__PURE__ */ t.jsx(
        g2,
        {
          text: L,
          type: ht.DEFAULT,
          isDark: g,
          onClick: () => {
            S(F), G == null || G();
          },
          leadingIcon: u.selectedId === F ? "check" : void 0,
          size: n,
          separator: J !== y.length - 1,
          trailingIcon: Q
        }
      ) : /* @__PURE__ */ t.jsx(
        g2,
        {
          text: L,
          type: ht.CHECKBOX,
          checked: v == null ? void 0 : v.includes(F),
          onUpdate: () => S(F),
          isDark: g,
          size: n,
          separator: J !== y.length - 1
        }
      ) }, `filter-item-${F}`))
    ] }),
    e === "multiple" && /* @__PURE__ */ t.jsxs("div", { className: "multi-select-dropdown-footer", children: [
      /* @__PURE__ */ t.jsx(
        Le,
        {
          size: "small",
          text: u.secondaryButtonText ?? "Cancel",
          variant: "secondary",
          onClick: V
        }
      ),
      /* @__PURE__ */ t.jsx(
        Le,
        {
          size: "small",
          text: u.primaryButtonText ?? "Save options",
          variant: "primary",
          onClick: N
        }
      )
    ] })
  ] });
}, Et = ({
  className: e = "",
  disabled: a,
  iconLeading: n,
  iconTrailing: s,
  index: i = -1,
  isActive: l,
  isDark: d,
  label: f,
  orientation: u = "horizontal",
  type: m = "line",
  subOptions: g,
  showSubOptions: b,
  onClick: y,
  style: p = {},
  tag: v,
  ...x
}) => {
  const { isDark: A } = $(), S = Ve(null), [k, E] = q(), [R, V] = q(l), N = Z(
    () => d ?? A,
    [A, d]
  );
  ve(() => {
    V(l);
  }, [l]);
  const L = j([
    Rn,
    R ? [Or, N0] : n0,
    a ? s0 : "",
    N ? z : "",
    R ? Or : "",
    u,
    m,
    e
  ]), F = {
    ...p
  }, Q = (J) => {
    a || R && !g || (J.stopPropagation(), J.preventDefault(), g ? (V((X) => !X), y == null || y(R ? -1 : i)) : (!R && y && (y == null || y(i)), V(!0)));
  };
  j0(S, () => {
    g != null && g.length && (V(!1), y == null || y(-1));
  });
  const G = He((J) => {
    var re;
    const X = J[0];
    E(X), V(!1), y == null || y(-1), (re = X == null ? void 0 : X.onClick) == null || re.call(X);
  }, []);
  return /* @__PURE__ */ t.jsxs("div", { className: "tab-container", children: [
    /* @__PURE__ */ t.jsxs(
      "span",
      {
        className: L,
        "aria-current": R,
        "aria-disabled": a,
        "aria-label": f,
        "aria-selected": R,
        "data-index": i,
        onClick: Q,
        style: F,
        ...x,
        children: [
          n && typeof n == "string" && /* @__PURE__ */ t.jsx(oe, { icon: n, size: "small" }),
          n && typeof n != "string" && n,
          f,
          v && /* @__PURE__ */ t.jsx(
            X0,
            {
              ...v,
              isCopyable: !1,
              isRemovable: !1,
              size: "small",
              isDark: N,
              className: "tag-wrapper"
            }
          ),
          s && typeof s == "string" && /* @__PURE__ */ t.jsx(oe, { icon: s, size: "small" }),
          s && typeof s != "string" && s
        ]
      },
      f
    ),
    g && Array.isArray(g) && b && /* @__PURE__ */ t.jsx("div", { className: "dropdown-content", ref: S, children: /* @__PURE__ */ t.jsx(
      Vt,
      {
        items: g,
        isDark: N,
        showSearch: !1,
        type: "single",
        width: "fit-content",
        selectedItems: k ? [k] : [],
        selectedItemCallback: G
      }
    ) })
  ] });
}, rr = ({
  children: e,
  className: a = "",
  disabled: n = !1,
  isDark: s = !1,
  onUpdate: i = void 0,
  selectedIndex: l = -1,
  orientation: d = "horizontal",
  type: f = "line",
  style: u = {},
  maxVisibleTabs: m = 1 / 0,
  ...g
}) => {
  const { isDark: b } = $(), [y, p] = q(l), v = Z(
    () => s || b,
    [b, s]
  );
  ve(() => {
    p(l);
  }, [l]);
  const x = j([
    Qs,
    n ? s0 : "",
    v ? z : "",
    d,
    f,
    a
  ]), A = {
    ...u
  }, S = (E) => {
    p(E), i == null || i(E);
  }, k = mn.toArray(e).filter(
    Kr
  );
  return /* @__PURE__ */ t.jsx("div", { className: x, style: A, ...g, role: "tablist", children: k.map((E, R) => {
    if (E.type !== Et) return null;
    const V = n || E.props.disabled, N = !V && (E.props.isActive || R === y), L = !V && (E.props.showSubOptions || R === y);
    if (R < m)
      return or(E, {
        ...E.props,
        disabled: V,
        index: R,
        showSubOptions: L,
        orientation: d,
        type: f,
        isActive: N,
        key: E.key ?? `${E.props.label}-${R}`,
        onClick: (F) => {
          var Q, G;
          (G = (Q = E.props).onClick) == null || G.call(Q, F), S(F);
        }
      });
    if (R === m) {
      const F = k.slice(m);
      return /* @__PURE__ */ t.jsx(
        Et,
        {
          className: "more-tab",
          label: "",
          iconTrailing: "chevron_right",
          disabled: V,
          index: R,
          showSubOptions: L,
          orientation: d,
          type: f,
          isActive: N,
          subOptions: F.map((Q, G) => ({
            id: `more-${G}`,
            label: Q.props.label,
            icon: typeof Q.props.iconLeading == "string" ? Q.props.iconLeading : void 0,
            onClick: () => {
              var J, X;
              (X = (J = Q.props).onClick) == null || X.call(J);
            }
          })),
          onClick: (Q) => {
            S(Q);
          }
        },
        "more-tab"
      );
    }
    return null;
  }) });
}, M1 = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='48'%20height='48'%20fill='%23E5E5E5'/%3e%3cg%20clip-path='url(%23clip0_32365_1403)'%3e%3cpath%20d='M-1560%20-533C-1560%20-546.255%20-1549.25%20-557%20-1536%20-557H439C452.255%20-557%20463%20-546.255%20463%20-533V1531H-1560V-533Z'%20fill='%23EFF5FC'/%3e%3cg%20clip-path='url(%23clip1_32365_1403)'%3e%3cg%20filter='url(%23filter0_d_32365_1403)'%3e%3cpath%20d='M-46%20-104C-46%20-108.418%20-42.4183%20-112%20-38%20-112H326C330.418%20-112%20334%20-108.418%20334%20-104V412C334%20416.418%20330.418%20420%20326%20420H-38C-42.4183%20420%20-46%20416.418%20-46%20412V-104Z'%20fill='%23FBFCFE'/%3e%3cg%20clip-path='url(%23clip2_32365_1403)'%3e%3crect%20width='48'%20height='48'%20fill='url(%23pattern0_32365_1403)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3crect%20x='-1479.5'%20y='-127.5'%20width='1862'%20height='910'%20rx='4.5'%20stroke='%239747FF'%20stroke-dasharray='10%205'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_32365_1403'%20x='-70'%20y='-132'%20width='428'%20height='580'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='12'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.227451%200%200%200%200%200.227451%200%200%200%200%200.227451%200%200%200%200.08%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_32365_1403'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_32365_1403'%20result='shape'/%3e%3c/filter%3e%3cpattern%20id='pattern0_32365_1403'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_32365_1403'%20transform='scale(0.025)'/%3e%3c/pattern%3e%3cclipPath%20id='clip0_32365_1403'%3e%3cpath%20d='M-1560%20-533C-1560%20-546.255%20-1549.25%20-557%20-1536%20-557H439C452.255%20-557%20463%20-546.255%20463%20-533V1531H-1560V-533Z'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_32365_1403'%3e%3crect%20x='-1480'%20y='-128'%20width='1863'%20height='911'%20rx='5'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip2_32365_1403'%3e%3cpath%20d='M0%208C0%203.58172%203.58172%200%208%200H40C44.4183%200%2048%203.58172%2048%208V40C48%2044.4183%2044.4183%2048%2040%2048H8C3.58172%2048%200%2044.4183%200%2040V8Z'%20fill='white'/%3e%3c/clipPath%3e%3cimage%20id='image0_32365_1403'%20width='40'%20height='40'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAVVJREFUWEftlGtLwzAYhc/ImDpUGHZDB1WpWNjw//8OobKKwbGyWddZL0xsaWlRuk8Ve0kaBkPefE3enqdPDmlNuPONHV4tAlS8HTKoKBBkkAyqGlCdpw6SQVUDqvPUwZ02GEcR/JWHoX7emHNrV5wmCbh9hziOMNQvoA1OG0E2AszMsDYDY+3S0PlsivfXl80+YwyGOcZBtysN2Qhw9siRpgmuzFFhoPe8gOc+/drrdPZwPb6p/Kmij0kD5sO1wdmffoVBAG5bheC9kz70S0PKohTg+uMNmb38yvcru/rpg73pXdmS7aMwYFW4YY5weHQMPrEQhkGlIdk+CgPeW7elZrLQntaH7y2Frk+mj0KA7sIRDhciBCDax1pAf7WEO3dEc6XOifSxFvDrcy0VKnM4e0f3a97GWkCZwG2cJUBVq2SQDKoaUJ2nDpJBVQOq89TBf2/wB24E9NGn4bk4AAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e", om = ({
  header: e,
  options: a,
  open: n,
  setOpen: s,
  onSelection: i,
  isDark: l
}) => {
  const { isDark: d } = $(), f = l ?? d, [u, m] = q(0), g = (y) => {
    m(y);
  }, b = j(["app-switcher", f ? z : ""]);
  return n ? /* @__PURE__ */ t.jsxs("div", { className: b, "data-testid": "app-switcher", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "header", children: [
      /* @__PURE__ */ t.jsx(xe, { size: "small", variant: "bold", isDark: f, children: e }),
      /* @__PURE__ */ t.jsx(
        oe,
        {
          icon: "close",
          size: "small",
          isDark: f,
          className: "$color-icon-default",
          onClick: () => {
            s && s(!n);
          }
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "tab-wrapper", children: [
      /* @__PURE__ */ t.jsx("div", { className: "navigation-wrapper", children: /* @__PURE__ */ t.jsxs(
        rr,
        {
          selectedIndex: u,
          onUpdate: g,
          isDark: f,
          children: [
            /* @__PURE__ */ t.jsx(Et, { label: "Grid View" }),
            /* @__PURE__ */ t.jsx(Et, { label: "List View" })
          ]
        }
      ) }),
      /* @__PURE__ */ t.jsx("div", { className: j(["spacer", f ? z : ""]) })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: u === 1 ? "list-view" : "grid-view", children: a.map(
      (y, p) => u === 1 ? /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: "list-item",
          onClick: () => {
            i && y.id && i(y);
          },
          children: [
            /* @__PURE__ */ t.jsx("div", { className: "image", children: /* @__PURE__ */ t.jsx("img", { src: y.image || M1, alt: y.title }) }),
            /* @__PURE__ */ t.jsxs("div", { className: "info", children: [
              /* @__PURE__ */ t.jsx(
                xe,
                {
                  size: "small",
                  variant: "bold",
                  className: "title",
                  isDark: f,
                  children: y.title
                }
              ),
              /* @__PURE__ */ t.jsx(
                xe,
                {
                  size: "small",
                  variant: "regular",
                  className: "description",
                  isDark: f,
                  children: y.description
                }
              )
            ] })
          ]
        },
        p
      ) : /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: "grid-item",
          onClick: () => {
            i && y.id && i(y);
          },
          children: [
            /* @__PURE__ */ t.jsx("div", { className: "grid-image", children: /* @__PURE__ */ t.jsx("img", { src: y.image || M1, alt: y.title }) }),
            /* @__PURE__ */ t.jsx(
              xe,
              {
                size: "small",
                variant: "regular",
                className: "text",
                isDark: f,
                children: y.title
              }
            )
          ]
        },
        p
      )
    ) })
  ] }) : null;
}, D9 = ({ color: e }) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M12.6667 4.27325L11.7267 3.33325L8.00001 7.05992L4.27334 3.33325L3.33334 4.27325L7.06001 7.99992L3.33334 11.7266L4.27334 12.6666L8.00001 8.93992L11.7267 12.6666L12.6667 11.7266L8.94001 7.99992L12.6667 4.27325Z",
        fill: e
      }
    )
  }
), R2 = ({
  className: e,
  isDark: a,
  text: n,
  style: s,
  direction: i = "right",
  showSlot: l = !0,
  showPopover: d = !1,
  onClosePopover: f = () => console.info("[onClosePopover]"),
  crossIcon: u,
  ...m
}) => {
  const { isDark: g } = $(), b = Ve(null);
  j0(b, f);
  const y = Z(
    () => a ?? g,
    [g, a]
  ), p = j([
    "popover",
    "$show-arrow",
    y ? "$color-tooltip-dark" : "$color-tooltip-default",
    i,
    e
  ]), v = {
    ...s ?? {}
  };
  return d ? /* @__PURE__ */ t.jsxs("div", { className: p, style: v, role: "popover", ref: b, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "title", children: [
      /* @__PURE__ */ t.jsx("span", { className: N0, children: n }),
      u || /* @__PURE__ */ t.jsx(
        "button",
        {
          className: "cancel-button",
          onClick: f,
          "aria-label": "Close popover",
          children: /* @__PURE__ */ t.jsx("span", { children: /* @__PURE__ */ t.jsx(D9, { color: y ? b2 : x2 }) })
        }
      )
    ] }),
    l && m.children
  ] }) : null;
};
var M9 = "Expected a function", H1 = NaN, H9 = "[object Symbol]", R9 = /^\s+|\s+$/g, L9 = /^[-+]0x[0-9a-f]+$/i, I9 = /^0b[01]+$/i, N9 = /^0o[0-7]+$/i, P9 = parseInt, V9 = typeof Pr == "object" && Pr && Pr.Object === Object && Pr, T9 = typeof self == "object" && self && self.Object === Object && self, F9 = V9 || T9 || Function("return this")(), _9 = Object.prototype, O9 = _9.toString, G9 = Math.max, Q9 = Math.min, Qo = function() {
  return F9.Date.now();
};
function z9(e, a, n) {
  var s, i, l, d, f, u, m = 0, g = !1, b = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(M9);
  a = R1(a) || 0, sn(n) && (g = !!n.leading, b = "maxWait" in n, l = b ? G9(R1(n.maxWait) || 0, a) : l, y = "trailing" in n ? !!n.trailing : y);
  function p(N) {
    var L = s, F = i;
    return s = i = void 0, m = N, d = e.apply(F, L), d;
  }
  function v(N) {
    return m = N, f = setTimeout(S, a), g ? p(N) : d;
  }
  function x(N) {
    var L = N - u, F = N - m, Q = a - L;
    return b ? Q9(Q, l - F) : Q;
  }
  function A(N) {
    var L = N - u, F = N - m;
    return u === void 0 || L >= a || L < 0 || b && F >= l;
  }
  function S() {
    var N = Qo();
    if (A(N))
      return k(N);
    f = setTimeout(S, x(N));
  }
  function k(N) {
    return f = void 0, y && s ? p(N) : (s = i = void 0, d);
  }
  function E() {
    f !== void 0 && clearTimeout(f), m = 0, s = u = i = f = void 0;
  }
  function R() {
    return f === void 0 ? d : k(Qo());
  }
  function V() {
    var N = Qo(), L = A(N);
    if (s = arguments, i = this, u = N, L) {
      if (f === void 0)
        return v(u);
      if (b)
        return f = setTimeout(S, a), p(u);
    }
    return f === void 0 && (f = setTimeout(S, a)), d;
  }
  return V.cancel = E, V.flush = R, V;
}
function sn(e) {
  var a = typeof e;
  return !!e && (a == "object" || a == "function");
}
function Z9(e) {
  return !!e && typeof e == "object";
}
function U9(e) {
  return typeof e == "symbol" || Z9(e) && O9.call(e) == H9;
}
function R1(e) {
  if (typeof e == "number")
    return e;
  if (U9(e))
    return H1;
  if (sn(e)) {
    var a = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = sn(a) ? a + "" : a;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(R9, "");
  var n = I9.test(e);
  return n || N9.test(e) ? P9(e.slice(2), n ? 2 : 8) : L9.test(e) ? H1 : +e;
}
var Y9 = z9;
const $9 = /* @__PURE__ */ q7(Y9), nm = ({
  open: e,
  header: a,
  className: n,
  isDark: s,
  setOpen: i,
  placeholderText: l,
  suggestions: d = [],
  history: f = [],
  onSearch: u,
  onSelectOption: m,
  isFocus: g
}) => {
  const { isDark: b } = $(), y = s ?? b, [p, v] = q(""), [x, A] = q(!1), [S, k] = q([]), E = $9(async (N) => {
    A(!0);
    const { suggestions: L, history: F } = await u(N), Q = F.map((X) => ({
      ...X,
      icon: X.icon || "history"
    })), G = L.map((X) => ({
      ...X,
      icon: X.icon || "search"
    })), J = V(
      G,
      Q
    );
    k(() => J), A(() => !1);
  }, 300), R = (N) => {
    const L = S.find(
      (F) => F.id === N
    );
    L && typeof N == "string" && (v(L.label), m == null || m({
      id: L.id.split("-")[1],
      label: L.label,
      source: L.source
    }));
  }, V = (N, L) => {
    if (N.length + L.length <= 5)
      return [...L, ...N];
    const Q = Math.min(
      5 - Math.min(L.length, 2),
      N.length
    ), G = 5 - Q;
    return [
      ...L.slice(0, G),
      ...N.slice(0, Q)
    ];
  };
  return ve(() => {
    if (k([]), p)
      E(p);
    else {
      const N = V(
        d.map((L) => ({
          ...L,
          source: "suggestion",
          icon: L.icon ?? ""
        })),
        f.map((L) => ({
          ...L,
          source: "history",
          icon: L.icon ?? ""
        }))
      );
      k(() => N);
    }
  }, [p, d, f]), /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(
    R2,
    {
      showPopover: e,
      direction: "top-left",
      text: a,
      isDark: y,
      className: j(["header-search", n]),
      onClosePopover: () => i == null ? void 0 : i(!1),
      children: /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx(
          uo,
          {
            onUpdate: v,
            placeholderText: l,
            focus: g
          }
        ),
        e && (S == null ? void 0 : S.length) > 0 && !x && /* @__PURE__ */ t.jsx("div", { className: "wrapper", children: S.map((N) => {
          const L = N.label.toLowerCase().indexOf(p.toLowerCase()), F = L + p.length, Q = N.label.slice(0, L), G = N.label.slice(
            L,
            F
          ), J = N.label.slice(F);
          return /* @__PURE__ */ t.jsx(
            g2,
            {
              text: /* @__PURE__ */ t.jsxs("span", { children: [
                /* @__PURE__ */ t.jsx(xe, { size: "small", variant: p ? "bold" : "regular", children: Q }),
                /* @__PURE__ */ t.jsx(
                  xe,
                  {
                    size: "small",
                    variant: "regular",
                    className: O0,
                    children: G
                  }
                ),
                /* @__PURE__ */ t.jsx(xe, { size: "small", variant: p ? "bold" : "regular", children: J })
              ] }),
              isDark: s ?? b,
              onClick: () => R(N.id),
              trailingIcon: N.icon
            },
            N.id
          );
        }) })
      ] })
    }
  ) });
}, W9 = ({
  label: e,
  icon: a,
  size: n,
  isDark: s,
  disabled: i,
  showActiveState: l,
  onClick: d,
  more: f,
  style: u,
  tooltip: m,
  orientation: g,
  ...b
}) => {
  const { isDark: y } = $(), [p, v] = q(b.isActive), x = Z(
    () => s ?? y,
    [y, s]
  ), A = He(
    (E) => {
      E.preventDefault(), E.stopPropagation(), l && v((R) => !R), d == null || d(E);
    },
    [d]
  ), S = j([
    "toolBarItem",
    n,
    x ? "dark" : "",
    i ? "disabled" : "",
    f ? "more" : "",
    p && l ? "active" : "",
    l ? "" : "no-active-effects"
  ]), k = m ? { ...m || {}, text: e, isDark: x } : e ? {
    text: e,
    direction: g === "vertical" ? "right" : "top-middle",
    isDark: x
  } : void 0;
  return /* @__PURE__ */ t.jsx(
    Kt,
    {
      style: u,
      tooltip: k,
      isShowIcon: !!a,
      icon: a,
      active: p && l,
      onClick: A,
      size: n,
      isDark: x,
      disabled: i,
      className: S,
      isShowDropdownIcon: f,
      ...b
    }
  );
}, m2 = ({
  items: e,
  size: a = "medium",
  isDark: n,
  groupMore: s,
  groupDisabled: i,
  style: l,
  showActiveState: d = !0,
  orientation: f = "horizontal",
  tooltip: u
}) => {
  const { isDark: m } = $(), g = Z(
    () => n ?? m,
    [n, m]
  ), b = j([
    "toolBar-container",
    g ? "dark" : "",
    f
  ]), y = {
    ...l ?? {}
  };
  return /* @__PURE__ */ t.jsx("div", { className: b, style: y, role: "toolbar", children: e.map(({ icon: p, label: v, disabled: x, more: A, onClick: S }, k) => /* @__PURE__ */ t.jsx(
    W9,
    {
      icon: p,
      disabled: i ? !0 : x,
      onClick: S,
      label: v,
      size: a,
      isDark: g,
      more: s || A,
      showActiveState: d,
      tooltip: u,
      orientation: f
    },
    `${k}-${v}`
  )) });
}, X9 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='680.764'%20height='528.354'%20viewBox='0%200%20180.119%20139.794'%3e%3cg%20transform='translate(-13.59%20-66.639)'%20paint-order='fill%20markers%20stroke'%3e%3cpath%20fill='%23d0d0d0'%20d='M13.591%2066.639H193.71v139.794H13.591z'/%3e%3cpath%20d='m118.507%20133.514-34.249%2034.249-15.968-15.968-41.938%2041.937H178.726z'%20opacity='.675'%20fill='%23fff'/%3e%3ccircle%20cx='58.217'%20cy='108.555'%20r='11.773'%20opacity='.675'%20fill='%23fff'/%3e%3cpath%20fill='none'%20d='M26.111%2077.634h152.614v116.099H26.111z'/%3e%3c/g%3e%3c/svg%3e", am = ({
  src: e,
  placeholder: a = X9,
  isDark: n,
  style: s,
  className: i,
  showZoomControls: l = !0,
  showRotateControls: d = !0,
  showFlipControl: f = !0,
  showDownloadControl: u = !0,
  showPrintControl: m = !0,
  onZoomIn: g,
  onZoomOut: b,
  onRotateLeft: y,
  onRotateRight: p,
  onFlip: v
}) => {
  const [x, A] = q(e ?? ""), [S, k] = q(""), [E, R] = q(1), [V, N] = q(0), [L, F] = q(!1), Q = Ve(null), [G, J] = q({
    width: "100%",
    height: "100%"
  }), { isDark: X } = $(), re = Z(
    () => n ?? X,
    [X, n]
  ), je = j([
    "image-preview",
    re ? z : "",
    i ?? ""
  ]), Me = {
    ...s ?? {}
  }, se = Z(() => {
    var Te, Xe;
    let ge = a, K = x;
    try {
      ge = (Te = new URL(K)) == null ? void 0 : Te.pathname;
    } catch (R0) {
      console.log(R0), K = a;
    }
    const le = ((Xe = ge == null ? void 0 : ge.split("/").pop()) == null ? void 0 : Xe.split(".")[0]) ?? "UnnamedImage", me = K == null ? void 0 : K.match(/\.(jpg|jpeg|png|gif|bmp|webp|svg|tiff)$/i);
    return me ? le + me[0] : le;
  }, [x]), fe = Z(
    () => ({
      transform: `rotate(${V}deg) scale(${E}) scaleX(${L ? -1 : 1})`
    }),
    [V, E, L]
  );
  ve(() => {
    const ge = new Image();
    ge.src = e, ge.onload = () => A(e), ge.onerror = () => A(a);
  }, [e, a]), ve(() => {
    (async () => {
      try {
        const le = (await fetch(x, { method: "HEAD" })).headers.get("Content-Length");
        if (le) {
          const me = (le / 1024).toFixed(2);
          k(me);
        } else
          k("Unknown");
      } catch {
        k("Error fetching size");
      }
    })();
  }, [x]);
  const De = He(
    (ge) => {
      ge.preventDefault();
      const K = E + 0.1;
      R(K), g && g(K);
    },
    [E]
  ), W = He(
    (ge) => {
      ge.preventDefault();
      const K = E > 0.5 ? E - 0.1 : E;
      R(K), b && b(K);
    },
    [E]
  ), ee = He(
    (ge) => {
      if (ge.preventDefault(), ge.target) {
        let K = V;
        ge.target.innerText === "rotate_left" ? (K = V - 90, y && y(K)) : (K = V + 90, p && p(K)), N(K), m0(K);
      }
    },
    [V]
  ), _e = He(async () => {
    const K = await (await fetch(x)).blob(), le = URL.createObjectURL(K), me = document.createElement("a");
    me.href = le, me.setAttribute("download", `${se}`), document.body.appendChild(me), me.click(), document.body.removeChild(me);
  }, [x]), qe = He(() => {
    var le;
    const ge = document.createElement("iframe");
    ge.style.position = "absolute", ge.style.width = "0", ge.style.height = "0", ge.style.border = "none", document.body.appendChild(ge);
    const K = (le = ge.contentWindow) == null ? void 0 : le.document;
    K == null || K.open(), K == null || K.write(`<img src="${x}" style={${fe}}>`), K == null || K.close(), ge.onload = function() {
      setTimeout(() => {
        var me;
        (me = ge.contentWindow) == null || me.print(), document.body.removeChild(ge);
      }, 100);
    };
  }, [x, fe]), ze = He(() => {
    F((ge) => !ge), v && v(L);
  }, [L]), B0 = He(() => {
    R(1);
  }, [E]), H0 = He(() => {
    A(a);
  }, [a]), m0 = (ge) => {
    if (Q.current) {
      const K = Q.current.width, le = Q.current.height;
      let me = K, Te = le;
      (ge === 90 || ge === 270) && ([me, Te] = [Te, me]), J({ width: `${me}px`, height: `${Te}px` });
    }
  }, Ye = Z(
    () => [
      {
        icon: "zoom_in",
        label: "Zoom In",
        onClick: De
      },
      {
        icon: "zoom_out",
        label: "Zoom Out",
        onClick: W
      },
      {
        icon: "zoom_out_map",
        label: "Reset",
        onClick: B0
      }
    ],
    [De, W, B0]
  ), ye = Z(
    () => [
      {
        icon: "rotate_left",
        label: "Rotate Left",
        onClick: ee
      },
      {
        icon: "rotate_right",
        label: "Rotate Right",
        onClick: ee
      }
    ],
    [ee]
  ), We = Z(
    () => [
      {
        icon: "flip",
        label: "Flip",
        onClick: ze
      }
    ],
    [ze]
  ), ce = Z(
    () => [
      {
        icon: "download",
        label: "Download",
        onClick: _e
      }
    ],
    [_e]
  ), ue = Z(
    () => [
      {
        icon: "print",
        label: "Print",
        onClick: qe
      }
    ],
    [qe]
  );
  return /* @__PURE__ */ t.jsxs("div", { className: je, style: Me, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "image-preview-toolbar", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "image-preview-toolbar-left", children: [
        l && /* @__PURE__ */ t.jsx(
          m2,
          {
            items: Ye,
            size: "medium",
            isDark: re,
            showActiveState: !1
          }
        ),
        d && /* @__PURE__ */ t.jsx(
          m2,
          {
            items: ye,
            size: "medium",
            isDark: re,
            showActiveState: !1
          }
        ),
        f && /* @__PURE__ */ t.jsx(
          m2,
          {
            items: We,
            size: "medium",
            isDark: re,
            showActiveState: !1
          }
        )
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "image-preview-toolbar-right", children: [
        u && /* @__PURE__ */ t.jsx(
          m2,
          {
            items: ce,
            size: "medium",
            isDark: re,
            showActiveState: !1
          }
        ),
        m && /* @__PURE__ */ t.jsx(
          m2,
          {
            items: ue,
            size: "medium",
            isDark: re,
            showActiveState: !1
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "image-preview-image-container", children: /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "image-preview-image-container-image-view",
        ref: Q,
        style: {
          width: G.width,
          height: G.height
        },
        children: /* @__PURE__ */ t.jsx(
          "img",
          {
            src: x,
            alt: "GDS",
            style: fe,
            onError: H0
          }
        )
      }
    ) }),
    /* @__PURE__ */ t.jsxs("div", { className: "image-preview-footer", children: [
      se && /* @__PURE__ */ t.jsx(
        xe,
        {
          size: "xsmall",
          className: j([
            it,
            "image-preview-footer-title-left"
          ]),
          isDark: re,
          children: se
        }
      ),
      S && /* @__PURE__ */ t.jsxs(
        xe,
        {
          size: "xsmall",
          className: j([
            it,
            "image-preview-footer-title-right"
          ]),
          isDark: re,
          children: [
            "File Size: ",
            /* @__PURE__ */ t.jsxs("b", { children: [
              S,
              " kb"
            ] })
          ]
        }
      )
    ] })
  ] });
}, K9 = ({
  isDark: e,
  title: a,
  text: n,
  tertiaryButtonProps: s = {
    iconTrailing: "chevron_right",
    size: "small",
    text: "Button",
    variant: "tertiary",
    onClick: () => {
    }
  },
  separator: i = !0,
  leadingIconProps: l,
  trailingIconProps: d,
  showTertiaryButton: f = !0,
  style: u
}) => {
  const m = {
    ...u ?? {}
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: j([
        "list-header",
        i ? "separator" : "",
        e ? "dark" : ""
      ]),
      role: "header",
      style: m,
      children: [
        /* @__PURE__ */ t.jsxs("div", { children: [
          (l == null ? void 0 : l.showIcon) && /* @__PURE__ */ t.jsx(
            oe,
            {
              alt: l == null ? void 0 : l.icon,
              icon: l == null ? void 0 : l.icon,
              size: "large",
              style: { marginRight: "8px" },
              onClick: l == null ? void 0 : l.onClick,
              isDark: e
            }
          ),
          /* @__PURE__ */ t.jsx(xe, { size: "small", variant: "bold", isDark: e, children: a }),
          (d == null ? void 0 : d.showIcon) && /* @__PURE__ */ t.jsx(
            oe,
            {
              alt: d == null ? void 0 : d.icon,
              icon: d == null ? void 0 : d.icon,
              size: "small",
              style: { marginLeft: "8px" },
              onClick: d == null ? void 0 : d.onClick,
              isDark: e
            }
          )
        ] }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx(
            xe,
            {
              size: "small",
              variant: "regular",
              style: { marginRight: "8px" },
              isDark: e,
              children: n
            }
          ),
          f && /* @__PURE__ */ t.jsx(Le, { ...s, isDark: e })
        ] })
      ]
    }
  );
}, J9 = /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z",
        fill: "#005CBC"
      }
    )
  }
), q9 = ({
  isDark: e,
  title: a,
  separator: n = !0,
  leadingIconProps: s,
  details: i,
  showBadge: l = !0,
  badgeProps: d,
  avatarProps: f,
  showDotIcon: u = !0,
  deleteIconProps: m,
  downloadIconProps: g,
  linkProps: b,
  showLink: y = !0,
  link2Props: p,
  showLink2: v = !0,
  ImagePlaceholder: x,
  footerText: A,
  style: S
}) => {
  const k = j([
    "list-row",
    n ? "separator" : "",
    e ? "dark" : ""
  ]), E = {
    ...S ?? {}
  };
  return /* @__PURE__ */ t.jsxs("div", { className: k, style: E, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ t.jsxs("div", { children: [
        (f == null ? void 0 : f.showIcon) && /* @__PURE__ */ t.jsx(
          oe,
          {
            alt: f == null ? void 0 : f.icon,
            icon: f == null ? void 0 : f.icon,
            className: "$color-icon-active",
            style: { marginRight: "8px", fontSize: "32px" },
            onClick: f == null ? void 0 : f.onClick,
            isDark: e
          }
        ),
        (s == null ? void 0 : s.showIcon) && /* @__PURE__ */ t.jsx(
          oe,
          {
            alt: s == null ? void 0 : s.icon,
            icon: s == null ? void 0 : s.icon,
            size: "large",
            style: { marginRight: "8px" },
            onClick: s == null ? void 0 : s.onClick,
            isDark: e
          }
        ),
        /* @__PURE__ */ t.jsxs("div", { className: "detail", children: [
          /* @__PURE__ */ t.jsxs(xe, { size: "xsmall", variant: "bold", isDark: e, children: [
            u && /* @__PURE__ */ t.jsx(
              oe,
              {
                alt: "circle",
                svg: J9,
                className: "$color-icon-active",
                style: { marginRight: "4px", fontSize: "8px" },
                isDark: e
              }
            ),
            a
          ] }),
          /* @__PURE__ */ t.jsx(xe, { size: "xsmall", variant: "regular", isDark: e, children: i })
        ] })
      ] }),
      /* @__PURE__ */ t.jsx("div", { children: x && x })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(xe, { size: "xxsmall", variant: "regular", isDark: e, children: A }) }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        l && /* @__PURE__ */ t.jsx(
          X0,
          {
            ...d,
            className: "list-badge",
            size: "small",
            style: { marginRight: "8px" },
            isRemovable: !1,
            isCopyable: !1,
            isDark: e
          }
        ),
        (m == null ? void 0 : m.showIcon) && /* @__PURE__ */ t.jsx(
          oe,
          {
            alt: m == null ? void 0 : m.icon,
            icon: m == null ? void 0 : m.icon,
            size: "small",
            style: { marginRight: "8px" },
            className: "$color-icon-active",
            onClick: m == null ? void 0 : m.onClick,
            isDark: e
          }
        ),
        (g == null ? void 0 : g.showIcon) && /* @__PURE__ */ t.jsx(
          oe,
          {
            alt: g == null ? void 0 : g.icon,
            icon: g == null ? void 0 : g.icon,
            size: "small",
            style: { marginRight: "8px" },
            className: "$color-icon-active",
            onClick: g == null ? void 0 : g.onClick,
            isDark: e
          }
        ),
        y && /* @__PURE__ */ t.jsx(
          U0,
          {
            ...b,
            isDark: e,
            style: { marginRight: "8px" },
            useAnchor: !0
          }
        ),
        v && /* @__PURE__ */ t.jsx(U0, { ...p, isDark: e })
      ] })
    ] })
  ] });
}, ef = ({
  isDark: e,
  radioButtonProps: a = {
    items: ["Radio Label"],
    label: "",
    onUpdate: () => {
    },
    reference: "radio button",
    size: "large"
  },
  badgeProps: n,
  details: s,
  showBadge: i = !0,
  style: l
}) => {
  const [d, f] = q(!1), u = (g, b) => {
    f(!0), a.onUpdate && a.onUpdate(g, b);
  }, m = {
    ...l ?? {}
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: j([
        "list-select",
        e ? "dark" : "",
        d ? "selected" : ""
      ]),
      style: m,
      children: [
        /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(u9, { ...a, onUpdate: u, isDark: e }) }),
        /* @__PURE__ */ t.jsxs("div", { className: "detail", children: [
          /* @__PURE__ */ t.jsx(xe, { size: "small", variant: "regular", isDark: e, children: s }),
          i && /* @__PURE__ */ t.jsx(X0, { ...n, className: "list-badge", isDark: e })
        ] })
      ]
    }
  );
}, Ks = ({
  className: e,
  style: a,
  isDark: n,
  type: s = "header",
  ...i
}) => {
  In("List");
  const { isDark: l } = $(), d = n ?? l, f = j([d ? z : "", e ?? ""]), u = {
    ...a ?? {}
    // default styles below
  }, m = {
    header: /* @__PURE__ */ t.jsx(K9, { ...i, isDark: d }),
    row: /* @__PURE__ */ t.jsx(q9, { ...i, isDark: d }),
    select: /* @__PURE__ */ t.jsx(ef, { ...i, isDark: d })
  };
  return /* @__PURE__ */ t.jsx("div", { className: f, style: u, role: "list", children: m[s] });
}, tf = {
  info: "info",
  success: "check_circle",
  warning: "report_problem",
  error: "error_outline"
}, rf = {
  info: W1,
  success: Y1,
  warning: X1,
  error: $1
}, of = ({
  type: e,
  title: a,
  text: n,
  primaryActionLabel: s,
  primaryActionOnClick: i,
  secondaryActionLabel: l,
  secondaryActionOnClick: d,
  isDark: f,
  className: u = "",
  style: m
}) => {
  const { isDark: g } = $(), b = f ?? g, y = j(["notification", e, b ? z : "", u]);
  return /* @__PURE__ */ t.jsxs("div", { className: y, style: m, role: "notification", children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: j(["notification-icon"]),
        "data-testid": "notification-icon",
        children: /* @__PURE__ */ t.jsx(
          oe,
          {
            isDark: b,
            icon: tf[e],
            size: "large",
            className: rf[e]
          }
        )
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "notification-content", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "notification-text", children: [
        a && typeof a == "string" && /* @__PURE__ */ t.jsx(
          xe,
          {
            variant: "bold",
            size: "body",
            className: j([
              "notification-text-color",
              b ? "dark" : ""
            ]),
            children: a
          }
        ),
        a && typeof a != "string" && a,
        n && /* @__PURE__ */ t.jsx(
          xe,
          {
            variant: "regular",
            size: "small",
            className: j([
              "notification-text-color",
              b ? "dark" : ""
            ]),
            children: n
          }
        )
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "notification-actions", children: [
        l && /* @__PURE__ */ t.jsx(
          Le,
          {
            onClick: d,
            variant: "secondary",
            size: "medium",
            isDark: b,
            children: l
          }
        ),
        s && /* @__PURE__ */ t.jsx(
          Le,
          {
            onClick: i,
            variant: "primary",
            size: "medium",
            isDark: b,
            children: s
          }
        )
      ] })
    ] })
  ] });
};
var nf = /* @__PURE__ */ ((e) => (e.INFO = "info", e.SUCCESS = "success", e.WARNING = "warning", e.ERROR = "error", e))(nf || {});
const af = ({ fill: e }) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",
        fill: e
      }
    )
  }
), sf = ({
  onCloseModal: e = () => {
  },
  isDark: a,
  title: n,
  text: s,
  hideCloseButton: i = !1,
  showSlot: l = !0,
  showTertiaryButton: d = !0,
  showLink: f = !0,
  showSecondaryButton: u = !0,
  tertiaryButtonProps: m = {
    size: "medium",
    text: "Button",
    variant: "tertiary",
    onClick: () => console.log("tertiary button clicked")
  },
  linkProps: g = {
    iconLeading: "",
    iconTrailing: "arrow_forward",
    label: "Link",
    size: "medium",
    onClick: () => console.log("link clicked")
  },
  secondaryButtonProps: b = {
    size: "medium",
    text: "Button",
    variant: "secondary",
    onClick: () => console.log("secondary button clicked")
  },
  primaryButtonProps: y = {
    size: "medium",
    text: "Button",
    variant: "primary",
    onClick: () => console.log("primary button clicked")
  },
  auxiliaryButtonProps: p = {
    size: "medium",
    text: "Button",
    variant: "auxiliary",
    onClick: () => console.log("auxiliary button clicked")
  },
  showPrimaryButton: v = !0,
  showAuxiliaryButton: x = !0,
  children: A,
  type: S,
  closeOnOutsideClick: k = !0,
  footerProps: E = {
    size: "medium",
    type: "primary"
  },
  notificationsProps: R,
  ...V
}) => {
  const N = Ve(null);
  k && j0(N, e);
  const L = Z(() => {
    const F = [];
    if (v && y && F.push({
      ...y,
      buttonType: "primary"
    }), u && b && F.push({
      ...b,
      buttonType: "secondary"
    }), d && m || f && g) {
      const Q = d ? m : { ...g, text: g == null ? void 0 : g.label };
      F.push({
        ...Q,
        buttonType: "tertiary"
      });
    }
    return x && p && F.push({
      ...p,
      buttonType: "auxiliary"
    }), /* @__PURE__ */ t.jsx(
      Ys,
      {
        tertairy: d || f,
        secondary: u,
        primary: v,
        auxiliary: x,
        items: F,
        isDark: a,
        ...E
      }
    );
  }, [d, u, v, x, y, b, m, E, f, g]);
  return /* @__PURE__ */ t.jsxs("div", { className: `modal ${S}`, ref: N, ...V, children: [
    !i && /* @__PURE__ */ t.jsx("span", { className: "icon-container", children: /* @__PURE__ */ t.jsx("button", { className: "modal-close-btn", onClick: e, children: /* @__PURE__ */ t.jsx(af, { fill: a ? b2 : x2 }) }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "model-body", children: [
      n && /* @__PURE__ */ t.jsx("div", { className: j(["title", to]), children: n }),
      s && /* @__PURE__ */ t.jsx("div", { className: j(["detail-text", n0]), children: s }),
      R && /* @__PURE__ */ t.jsx(of, { ...R }),
      l && /* @__PURE__ */ t.jsx("div", { className: "model-body-slot-view", children: A }),
      /* @__PURE__ */ t.jsx("span", { className: "modal-footer", children: L })
    ] })
  ] });
}, lf = ({ ...e }) => /* @__PURE__ */ t.jsx(sf, { ...e }), sm = ({
  className: e,
  style: a,
  isDark: n,
  showModal: s = !1,
  ...i
}) => {
  const { isDark: l } = $(), d = j([
    "modal-container",
    n ?? l ? z : "",
    e ?? ""
  ]), f = {
    ...a ?? {}
    // default styles below
  };
  return s ? hn(
    /* @__PURE__ */ t.jsxs("div", { className: d, style: f, role: "modal", children: [
      /* @__PURE__ */ t.jsx("div", { className: "overlay" }),
      /* @__PURE__ */ t.jsx(lf, { ...i, isDark: n ?? l })
    ] }),
    document.body
  ) : null;
}, cf = ({ fill: e }) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",
        fill: e
      }
    )
  }
), uf = ({
  onCloseModal: e = () => {
  },
  isDark: a,
  mainImageURL: n,
  mainImageContainerStyle: s,
  appLogoURL: i,
  appLogoContainerStyle: l,
  steps: d,
  title: f,
  text: u,
  checkboxProps: m,
  secondaryButtonProps: g,
  primaryButtonProps: b,
  ...y
}) => {
  const p = Ve(null);
  return j0(p, e), /* @__PURE__ */ t.jsxs("div", { className: "onboarding-modal", ref: p, ...y, children: [
    /* @__PURE__ */ t.jsx("span", { className: "icon-container", children: /* @__PURE__ */ t.jsx("button", { className: "modal-close-btn", onClick: e, children: /* @__PURE__ */ t.jsx(cf, { fill: a ? "#EFEFEF" : "white" }) }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "content-container", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "content", children: [
        n && /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "main-image-container",
            style: s,
            children: /* @__PURE__ */ t.jsx(
              "img",
              {
                src: n,
                alt: "Main Image Frame",
                className: "image"
              }
            )
          }
        ),
        /* @__PURE__ */ t.jsxs("div", { className: "content-right", children: [
          i && /* @__PURE__ */ t.jsx("div", { className: "app-logo-container", style: l, children: /* @__PURE__ */ t.jsx("img", { src: i, alt: "App Logo", className: "image" }) }),
          /* @__PURE__ */ t.jsx("div", { className: j(["step", n0]), children: d }),
          /* @__PURE__ */ t.jsx("div", { className: j(["title", to]), children: f }),
          /* @__PURE__ */ t.jsx("div", { className: j(["detail-text", Y0]), children: u })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "modal-footer", children: [
        /* @__PURE__ */ t.jsx("span", { children: m && /* @__PURE__ */ t.jsx(A2, { ...m, isDark: a }) }),
        /* @__PURE__ */ t.jsxs("span", { children: [
          g && /* @__PURE__ */ t.jsx(
            Le,
            {
              style: { marginRight: "var(--Spacing-spacing-04, 16px)" },
              ...g,
              isDark: a
            }
          ),
          b && /* @__PURE__ */ t.jsx(Le, { ...b, isDark: a })
        ] })
      ] })
    ] })
  ] });
}, im = ({
  className: e,
  style: a,
  isDark: n,
  showModal: s = !1,
  ...i
}) => {
  const { isDark: l } = $(), d = j([
    "onboarding-modal-container",
    n ?? l ? z : "",
    e ?? ""
  ]), f = {
    ...a ?? {}
    // default styles below
  };
  return l8(s), s ? hn(
    /* @__PURE__ */ t.jsxs("div", { className: d, style: f, role: "modal", children: [
      /* @__PURE__ */ t.jsx("div", { className: "overlay" }),
      /* @__PURE__ */ t.jsx(uf, { ...i, isDark: n ?? l })
    ] }),
    document.body
  ) : null;
}, L1 = ({ color: e }) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M15.8333 5.34163L14.6583 4.16663L9.99996 8.82496L5.34163 4.16663L4.16663 5.34163L8.82496 9.99996L4.16663 14.6583L5.34163 15.8333L9.99996 11.175L14.6583 15.8333L15.8333 14.6583L11.175 9.99996L15.8333 5.34163Z",
        fill: e
      }
    )
  }
), lm = ({
  className: e,
  isDark: a,
  title: n,
  description: s,
  steps: i,
  style: l,
  direction: d = "top",
  showPopover: f = !1,
  onClosePopover: u = () => console.info("[onClosePopover]"),
  secondaryButtonProps: m,
  primaryButtonProps: g,
  imageUrl: b,
  ...y
}) => {
  const { isDark: p } = $(), v = Ve(null);
  j0(v, u);
  const x = Z(
    () => a ?? p,
    [p, a]
  ), A = j([
    "onboarding-popover-container",
    x ? z : "",
    e
  ]), S = {
    ...l ?? {}
  };
  return f ? /* @__PURE__ */ t.jsx(
    "div",
    {
      className: A,
      style: S,
      role: "onboarding-popover",
      ref: v,
      ...y,
      children: /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `onboarding-popover-wrapper onboarding-popover-${d}`,
          children: /* @__PURE__ */ t.jsxs("div", { className: "onboarding-popover-main", children: [
            /* @__PURE__ */ t.jsx("div", { className: "onboarding-popover-arrow" }),
            b && /* @__PURE__ */ t.jsxs("div", { className: "onboarding-popover-header-image-wrapper", children: [
              /* @__PURE__ */ t.jsx(
                "img",
                {
                  className: "header-image",
                  src: b,
                  alt: "Header Image"
                }
              ),
              /* @__PURE__ */ t.jsx("button", { className: "image-close-wrapper", onClick: u, children: /* @__PURE__ */ t.jsx(L1, { color: x ? b2 : x2 }) })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "onboarding-popover-header", children: [
              /* @__PURE__ */ t.jsx("div", { className: j(["onboarding-popover-title", E2]), children: n }),
              !b && /* @__PURE__ */ t.jsx(
                "button",
                {
                  className: "onboarding-popover-close",
                  onClick: u,
                  "aria-label": "Close",
                  children: /* @__PURE__ */ t.jsx("span", { children: /* @__PURE__ */ t.jsx(
                    L1,
                    {
                      color: x ? b2 : x2
                    }
                  ) })
                }
              )
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: j(["onboarding-popover-content", Y0]), children: s }),
            /* @__PURE__ */ t.jsxs("div", { className: "onboarding-popover-footer", children: [
              /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: j([
                    "onboarding-popover-step-indicator",
                    Y0
                  ]),
                  children: i
                }
              ),
              /* @__PURE__ */ t.jsxs("div", { className: "onboarding-popover-navigation", children: [
                m && /* @__PURE__ */ t.jsx(Le, { ...m, isDark: x }),
                g && /* @__PURE__ */ t.jsx(Le, { ...g, isDark: x })
              ] })
            ] })
          ] })
        }
      )
    }
  ) : null;
}, cm = ({
  className: e,
  isDark: a,
  icon: n,
  title: s = "Title",
  style: i,
  primaryButton: l,
  secondaryButton: d,
  toolbar: f,
  children: u
}) => {
  const { isDark: m } = $(), g = a ?? m, b = j([
    "page-header",
    Y0,
    g ? z : "",
    e ?? "",
    it
  ]), y = {
    ...i ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsxs("div", { className: b, style: y, role: "page-header", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "header-wrapper", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "left-container", children: [
        n && /* @__PURE__ */ t.jsx(
          oe,
          {
            alt: "icon",
            icon: n,
            size: "large",
            style: { marginRight: "0.5rem", fontSize: 36 }
          }
        ),
        /* @__PURE__ */ t.jsx("span", { className: j(["label-text", eo]), children: /* @__PURE__ */ t.jsx("label", { children: s }) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "right-container", children: [
        f,
        /* @__PURE__ */ t.jsxs("div", { className: "button-container", children: [
          d && /* @__PURE__ */ t.jsx(Le, { ...d, isDark: g }),
          l && /* @__PURE__ */ t.jsx(Le, { ...l, isDark: g })
        ] })
      ] })
    ] }),
    u
  ] });
}, X2 = (e, a) => {
  const n = a - e + 1;
  return Array.from({ length: n }, (s, i) => i + e);
}, Js = ({
  pageCount: e,
  currentPage: a
}) => {
  const n = "...";
  return Z(() => {
    if (7 >= e)
      return X2(1, e);
    const d = Math.max(a - 2, 1), f = Math.min(a + 2, e), u = d > 2, m = f < e - 2, g = 1, b = e;
    if (!u && m)
      return [...X2(1, 7), n, e];
    if (u && !m) {
      const p = X2(e - 7 + 1, e);
      return [g, n, ...p];
    }
    if (u && m) {
      const y = X2(d, f);
      return [g, n, ...y, n, b];
    }
    return X2(1, e);
  }, [e, a]);
}, qs = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "24",
      viewBox: "0 0 32 24",
      fill: "none",
      children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M4 12C4 9.79086 5.79086 8 8 8H24C26.2091 8 28 9.79086 28 12C28 14.2091 26.2091 16 24 16H8C5.79086 16 4 14.2091 4 12Z",
          fill: e
        }
      )
    }
  ),
  [e]
), df = ({ secondaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "17",
      height: "16",
      viewBox: "0 0 17 16",
      fill: "none",
      children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z",
          fill: e
        }
      )
    }
  ),
  [e]
), ei = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: /* @__PURE__ */ t.jsx("g", { children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M11.2041 12.0398L7.13299 7.9598L11.2041 3.8798L9.95077 2.62646L4.61743 7.9598L9.95077 13.2931L11.2041 12.0398Z",
          fill: e
        }
      ) })
    }
  ),
  [e]
), ti = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: /* @__PURE__ */ t.jsx("g", { children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M4.61743 12.1199L8.68854 8.03988L4.61743 3.95988L5.87076 2.70654L11.2041 8.03988L5.87077 13.3732L4.61743 12.1199Z",
          fill: e
        }
      ) })
    }
  ),
  [e]
), ff = ({
  className: e,
  currentPage: a = 1,
  isDark: n,
  pageCount: s = 1,
  style: i,
  variant: l = "number",
  onUpdate: d,
  size: f = "medium",
  ...u
}) => {
  const { isDark: m } = $(), g = Z(
    () => n ?? m,
    [n, m]
  ), b = j([
    "pagination",
    g ? z : "",
    e ?? "",
    l,
    l === "number" ? f : ""
  ]), y = {
    ...i ?? {}
    // default styles below
  }, p = Js({ pageCount: s, currentPage: a }), v = "...", x = (R, V) => {
    R.preventDefault(), R.stopPropagation();
    let N = parseInt(V);
    isNaN(N) || (N === -1 ? N = a - 1 : N === -2 && (N = a + 1), N !== a && d && d(N));
  }, A = g ? "var(--color-link-default-dark)" : "var(--color-link-default)", S = "var(--gray-500)", k = /* @__PURE__ */ t.jsx(qs, { primaryFillColor: A }), E = /* @__PURE__ */ t.jsx(df, { secondaryFillColor: S });
  return /* @__PURE__ */ t.jsx("nav", { ...u, className: b, role: "tablist", style: y, children: /* @__PURE__ */ t.jsxs("ul", { children: [
    /* @__PURE__ */ t.jsx("li", { className: "prev-next", children: l === "dot" ? /* @__PURE__ */ t.jsx(
      "button",
      {
        "data-testid": "prev-button",
        className: "pagination-dot-button",
        "data-accessible": !0,
        "data-index": -1,
        onClick: (R) => {
          x(R, -1);
        },
        disabled: a === 1,
        children: /* @__PURE__ */ t.jsx(ei, { primaryFillColor: A })
      }
    ) : /* @__PURE__ */ t.jsx(
      Kt,
      {
        "data-testid": "prev-button",
        "data-accessible": !0,
        "data-index": -1,
        isDark: g,
        isShowIcon: !0,
        size: f,
        icon: "chevron_left",
        onClick: (R) => {
          x(R, -1);
        },
        disabled: a === 1
      }
    ) }),
    p == null ? void 0 : p.map((R, V) => {
      const F = l === "dot" ? R === v ? R : R === a ? k : E : R;
      return /* @__PURE__ */ t.jsx("li", { children: l === "dot" ? /* @__PURE__ */ t.jsx(
        "button",
        {
          className: j([
            e = "pagination-dot-button",
            R === a ? "selected" : "",
            f === "small" ? Qe : n0
          ]),
          "data-index": R,
          onClick: (Q) => {
            x(Q, R);
          },
          role: "tab",
          disabled: R === v,
          children: F
        }
      ) : /* @__PURE__ */ t.jsx(
        Kt,
        {
          style: i,
          label: String(F),
          active: R === a,
          size: f,
          isDark: g,
          "aria-checked": R === a,
          "data-index": R,
          onClick: (Q) => {
            x(Q, R);
          },
          role: "tab",
          disabled: R === v
        }
      ) }, V);
    }),
    /* @__PURE__ */ t.jsx("li", { className: "prev-next", children: l === "dot" ? /* @__PURE__ */ t.jsx(
      "button",
      {
        "data-testid": "next-button",
        className: "pagination-dot-button",
        "data-accessible": !0,
        "data-index": -2,
        onClick: (R) => {
          x(R, -2);
        },
        disabled: a === s,
        children: /* @__PURE__ */ t.jsx(ti, { primaryFillColor: A })
      }
    ) : /* @__PURE__ */ t.jsx(
      Kt,
      {
        "data-testid": "next-button",
        "data-accessible": !0,
        "data-index": -2,
        isDark: g,
        isShowIcon: !0,
        size: f,
        icon: "chevron_right",
        onClick: (R) => {
          x(R, -2);
        },
        disabled: a === s
      }
    ) })
  ] }) });
}, um = ({
  steps: e = 2,
  currentStep: a = 0,
  titles: n = [],
  isDark: s,
  completed: i,
  className: l,
  style: d = {},
  showStepNumber: f,
  orientation: u = "horizontal",
  ...m
}) => {
  var A, S;
  const { isDark: g } = $(), b = Z(
    () => s ?? g,
    [s, g]
  ), y = {}, p = j([
    "progress-indicator",
    "medium",
    b ? z : "",
    l ?? "",
    u,
    f ? "with-step-number" : "no-step-number"
  ]), v = {
    ...y,
    ...d
  };
  a > e && (a = e);
  const x = [];
  for (let k = 1; k <= e; k++) {
    let E = "active";
    a > k ? E = "completed" : a === k && (i ? E = "completed" : E = "current"), x.push({
      label: (A = n == null ? void 0 : n[k - 1]) == null ? void 0 : A.title,
      description: (S = n == null ? void 0 : n[k - 1]) == null ? void 0 : S.description,
      status: E,
      index: k
    });
  }
  return /* @__PURE__ */ t.jsx("div", { className: p, style: v, ...m, children: /* @__PURE__ */ t.jsx("ul", { className: j(["progress-step-bar", u]), children: x.map(function(k, E) {
    return /* @__PURE__ */ t.jsxs(
      "li",
      {
        className: j([
          "progress-step",
          k.status,
          b ? z : "",
          u
        ]),
        children: [
          f && /* @__PURE__ */ t.jsx("div", { className: j(["step-label", u]), children: /* @__PURE__ */ t.jsxs("div", { className: j(["step-wrapper", u]), children: [
            /* @__PURE__ */ t.jsx("div", { className: j(["block", u]) }),
            /* @__PURE__ */ t.jsx(
              "div",
              {
                className: j([
                  "block",
                  "content-wrapper",
                  u
                ]),
                children: /* @__PURE__ */ t.jsx(
                  xe,
                  {
                    size: "xsmall",
                    variant: "caps",
                    className: O0,
                    children: `Step ${E + 1}`
                  }
                )
              }
            )
          ] }) }),
          /* @__PURE__ */ t.jsx("span", { className: j(["step-index", k.status]) }),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: j([
                "step-label",
                u,
                f ? "with-step-number" : "no-step-number"
              ]),
              children: /* @__PURE__ */ t.jsxs("div", { className: "label-wrapper", children: [
                /* @__PURE__ */ t.jsx("div", { className: j(["block", u]) }),
                /* @__PURE__ */ t.jsxs(
                  "div",
                  {
                    className: j(["block", "content-wrapper", u]),
                    children: [
                      /* @__PURE__ */ t.jsx(
                        xe,
                        {
                          size: "small",
                          variant: k.status === "current" ? "bold" : "regular",
                          className: j([
                            "label-text",
                            k.status,
                            k.status === "active" ? O0 : ""
                          ]),
                          children: k.label
                        }
                      ),
                      k.description && /* @__PURE__ */ t.jsx(
                        xe,
                        {
                          size: "xsmall",
                          variant: "regular",
                          className: O0,
                          children: k.description
                        }
                      )
                    ]
                  }
                )
              ] })
            }
          )
        ]
      },
      E
    );
  }) }) });
}, dm = ct(
  ({
    label: e,
    min: a = 0,
    max: n = 100,
    step: s = 1,
    showMax: i = !0,
    showMin: l = !0,
    value: d = [20, 50],
    isDark: f,
    disabled: u,
    onChange: m,
    errorMessage: g,
    ...b
  }, y) => {
    const p = Ve(null), v = Ve(null), [x, A] = q(d), { isDark: S } = $(), k = Z(
      () => f ?? S,
      [f, S]
    ), E = (L, F) => {
      if (u) return;
      const Q = [...x];
      L === 0 && F > x[1] || L === 1 && F < x[0] || (Q[L] = F, A(Q), m == null || m(Q));
    }, R = (L) => {
      E(0, Number(L.target.value));
    }, V = (L) => {
      E(1, Number(L.target.value));
    };
    S2(y, () => ({
      setMin: (L) => E(0, L),
      setMax: (L) => E(1, L),
      slider1: p == null ? void 0 : p.current,
      slider2: v == null ? void 0 : v.current
    }));
    const N = Z(
      () => j([
        "slider-container",
        k ? "dark" : "",
        u ? "disabled" : ""
      ]),
      [k, u]
    );
    return /* @__PURE__ */ t.jsxs("div", { className: N, role: "slider", children: [
      e && /* @__PURE__ */ t.jsx(ut, { label: e, isDark: k, className: j(["slider-title", Qe]) }),
      /* @__PURE__ */ t.jsxs("div", { className: "slider-labels", children: [
        l && /* @__PURE__ */ t.jsx("span", { className: j(["slider-value-labels-min", Qe]), children: a }),
        /* @__PURE__ */ t.jsxs("div", { className: "slider-wrapper", children: [
          /* @__PURE__ */ t.jsx("div", { style: { margin: "0 8px", position: "relative" }, children: /* @__PURE__ */ t.jsx(
            "div",
            {
              className: j(["slider-tooltip", lt]),
              style: {
                left: `${(x[0] - a) / (n - a) * 100}%`,
                transform: "translateX(-50%)"
              },
              children: x[0]
            }
          ) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "range",
              ref: p,
              min: a,
              max: n,
              step: s,
              value: x[0],
              onChange: R,
              className: "slider-thumb",
              role: "Min_Thumb"
            }
          ),
          /* @__PURE__ */ t.jsx("div", { style: { margin: "0 8px", position: "relative" }, children: /* @__PURE__ */ t.jsx(
            "div",
            {
              className: j(["slider-tooltip", lt]),
              style: {
                right: `${(n - x[1]) / (n - a) * 100 * 0.998}%`,
                transform: "translateX(50%)"
              },
              children: x[1]
            }
          ) }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "range",
              ...b,
              ref: v,
              min: a,
              max: n,
              step: s,
              value: x[1],
              onChange: V,
              className: "slider-thumb",
              role: "Max_Thumb"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: "slider-track",
              style: {
                left: `${(x[0] - a) / (n - a) * 100}%`,
                right: `${100 - (x[1] - a) / (n - a) * 100}%`
              }
            }
          )
        ] }),
        i && /* @__PURE__ */ t.jsx("span", { className: j(["slider-value-labels-max", Qe]), children: n })
      ] }),
      /* @__PURE__ */ t.jsx(
        yt,
        {
          message: g,
          variant: "error",
          disabled: u,
          isDark: k
        }
      )
    ] });
  }
), fm = ({
  isDark: e,
  barStyle: a,
  type: n,
  primaryButton: s,
  secondaryButton: i,
  style: l,
  ...d
}) => {
  const { isDark: f } = $(), u = Z(
    () => e ?? f,
    [e, f]
  ), m = j(["sticky-bar", u ? "dark" : "", n, a]), g = {
    ...l
  };
  switch (n) {
    case "cta":
      const { tertiaryButton: b, auxiliaryButton: y } = d;
      return /* @__PURE__ */ t.jsxs("div", { className: m, style: g, children: [
        /* @__PURE__ */ t.jsxs("div", { className: "content content-left", children: [
          y && /* @__PURE__ */ t.jsx(Le, { variant: "auxiliary", size: "medium", ...y }),
          b && /* @__PURE__ */ t.jsx(Le, { variant: "tertiary", size: "medium", ...b })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "content content-right", children: [
          i && /* @__PURE__ */ t.jsx(Le, { variant: "secondary", size: "medium", ...i }),
          s && /* @__PURE__ */ t.jsx(Le, { variant: "primary", size: "medium", ...s })
        ] })
      ] });
    case "cta-with-text":
      const { title: p, description: v } = d;
      return /* @__PURE__ */ t.jsxs("div", { className: m, style: g, children: [
        /* @__PURE__ */ t.jsxs("div", { className: "content content-left", children: [
          /* @__PURE__ */ t.jsx("span", { className: j(["title", E2]), children: p }),
          /* @__PURE__ */ t.jsx("span", { className: j(["description", n0]), children: v })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "content content-right", children: [
          i && /* @__PURE__ */ t.jsx(Le, { variant: "secondary", size: "medium", ...i }),
          s && /* @__PURE__ */ t.jsx(Le, { variant: "primary", size: "medium", ...s })
        ] })
      ] });
  }
}, ri = pn(void 0);
function pf({ children: e }) {
  const a = (i) => {
    s((l) => ({
      ...l,
      ...i,
      date: Date.now()
    }));
  }, [n, s] = q({
    onUpdate: a
  });
  return /* @__PURE__ */ t.jsx(ri.Provider, { value: n, children: e });
}
function oi() {
  const e = gn(ri);
  if (!e)
    throw new Error("You should wrap your component by EditorProvider");
  return e;
}
function I1(e) {
  return e ? e.replace(/&nbsp;|\u202F|\u00A0/g, " ") : "";
}
function N1(e) {
  const a = document.createTextNode("");
  e.appendChild(a);
  const n = document.activeElement === e;
  if (a !== null && a.nodeValue !== null && n) {
    const s = window.getSelection();
    if (s !== null) {
      const i = document.createRange();
      i.setStart(a, a.nodeValue.length), i.collapse(!0), s.removeAllRanges(), s.addRange(i);
    }
    e instanceof HTMLElement && e.focus();
  }
}
const gf = G1(
  ct(function({ className: a, disabled: n, value: s, maxLength: i, ...l }, d) {
    const f = Ve(), u = Ve(s), m = Ve(l), g = oi(), b = (y) => {
      g.onUpdate({ $el: y });
    };
    return ve(() => {
      m.current = l;
      const y = f.current;
      y && I1(u.current) !== I1(s) && (u.current = s, y.innerHTML = s, N1(y));
    }), Z(() => {
      function y(v) {
        f.current = v, typeof d == "function" && d(v);
      }
      const p = (v) => {
        var k, E;
        const x = f.current;
        if (!x) return;
        const A = x.innerText || "";
        if (i && A.length > i) {
          x.innerHTML = u.current, N1(x);
          return;
        }
        const S = x.innerHTML;
        S !== u.current && ((E = (k = m.current).onChange) == null || E.call(k, {
          ...v,
          target: {
            value: S,
            text: A,
            name: l.name
          }
        }), b(x)), u.current = S;
      };
      return O1("div", {
        ...l,
        className: a,
        contentEditable: !n,
        dangerouslySetInnerHTML: { __html: s },
        onBlur: (v) => (m.current.onBlur || p)(v),
        onInput: p,
        onKeyDown: (v) => (m.current.onKeyDown || p)(v),
        onKeyUp: (v) => (m.current.onKeyUp || p)(v),
        ref: y,
        role: "text-area-input"
      });
    }, [a, n, i]);
  })
), mf = ct(
  ({ children: e, containerProps: a, className: n, isDark: s, ...i }, l) => /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: j([
        "text-area-editor-wrapper",
        s ? "dark" : "",
        i.disabled ? "disabled" : ""
      ]),
      ...a,
      children: [
        /* @__PURE__ */ t.jsx(gf, { className: n, ...i, ref: l }),
        e
      ]
    }
  )
), hf = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M15.6 10.79C16.57 10.12 17.25 9.02 17.25 8C17.25 5.74 15.5 4 13.25 4H7V18H14.04C16.13 18 17.75 16.3 17.75 14.21C17.75 12.69 16.89 11.39 15.6 10.79ZM10 6.5H13C13.83 6.5 14.5 7.17 14.5 8C14.5 8.83 13.83 9.5 13 9.5H10V6.5ZM13.5 15.5H10V12.5H13.5C14.33 12.5 15 13.17 15 14C15 14.83 14.33 15.5 13.5 15.5Z",
          fill: e
        }
      )
    }
  ),
  [e]
), vf = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M10 4V7H12.21L8.79 15H6V18H14V15H11.79L15.21 7H18V4H10Z",
          fill: e
        }
      )
    }
  ),
  [e]
), yf = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M12 17C15.31 17 18 14.31 18 11V3H15.5V11C15.5 12.93 13.93 14.5 12 14.5C10.07 14.5 8.5 12.93 8.5 11V3H6V11C6 14.31 8.69 17 12 17ZM5 19V21H19V19H5Z",
          fill: e
        }
      )
    }
  ),
  [e]
), Cf = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM7 19H21V17H7V19ZM7 13H21V11H7V13ZM7 5V7H21V5H7Z",
          fill: e
        }
      )
    }
  ),
  [e]
), xf = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M2 17H4V17.5H3V18.5H4V19H2V20H5V16H2V17ZM3 8H4V4H2V5H3V8ZM2 11H3.8L2 13.1V14H5V13H3.2L5 10.9V10H2V11ZM7 5V7H21V5H7ZM7 19H21V17H7V19ZM7 13H21V11H7V13Z",
          fill: e
        }
      )
    }
  ),
  [e]
), bf = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M15 15H3V17H15V15ZM15 7H3V9H15V7ZM3 13H21V11H3V13ZM3 21H21V19H3V21ZM3 3V5H21V3H3Z",
          fill: e
        }
      )
    }
  ),
  [e]
), wf = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M7 15V17H17V15H7ZM3 21H21V19H3V21ZM3 13H21V11H3V13ZM7 7V9H17V7H7ZM3 3V5H21V3H3Z",
          fill: e
        }
      )
    }
  ),
  [e]
), Af = ({ primaryFillColor: e }) => Z(
  () => /* @__PURE__ */ t.jsx(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M3 21H21V19H3V21ZM9 17H21V15H9V17ZM3 13H21V11H3V13ZM9 9H21V7H9V9ZM3 3V5H21V3H3Z",
          fill: e
        }
      )
    }
  ),
  [e]
), _t = (e, a, n) => {
  return s.displayName = e.replace(/\s/g, ""), s;
  function s(i) {
    const l = oi(), { $el: d, $selection: f } = l;
    let u = !1;
    typeof n == "string" && (u = !!f && document.queryCommandState(n));
    function m(g) {
      g.preventDefault(), document.activeElement !== d && (d == null || d.focus()), typeof n == "string" && document.execCommand(n);
    }
    return /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        title: e,
        ...i,
        className: j(["text-area-toolbar-button", u ? "active" : ""]),
        onMouseDown: m,
        disabled: i.disabled,
        children: a
      }
    );
  }
}, Sf = _t(
  "Bold",
  /* @__PURE__ */ t.jsx(hf, { primaryFillColor: "var(--gray-300)" }),
  "bold"
), kf = _t(
  "Italic",
  /* @__PURE__ */ t.jsx(vf, { primaryFillColor: "var(--gray-300)" }),
  "italic"
), jf = _t(
  "Underline",
  /* @__PURE__ */ t.jsx(yf, { primaryFillColor: "var(--gray-300)" }),
  "underline"
), Bf = _t(
  "Align Left",
  /* @__PURE__ */ t.jsx(bf, { primaryFillColor: "var(--gray-300)" }),
  "justifyLeft"
), Ef = _t(
  "Align center",
  /* @__PURE__ */ t.jsx(wf, { primaryFillColor: "var(--gray-300)" }),
  "justifyCenter"
), Df = _t(
  "Align right",
  /* @__PURE__ */ t.jsx(Af, { primaryFillColor: "var(--gray-300)" }),
  "justifyRight"
), Mf = _t(
  "Numbered list",
  /* @__PURE__ */ t.jsx(xf, { primaryFillColor: "var(--gray-300)" }),
  "insertOrderedList"
), Hf = _t(
  "Bullet list",
  /* @__PURE__ */ t.jsx(Cf, { primaryFillColor: "var(--gray-300)" }),
  "insertUnorderedList"
), Rf = ({
  disabled: e,
  ...a
}) => /* @__PURE__ */ t.jsxs("div", { ...a, role: "text-area-toolbar", children: [
  /* @__PURE__ */ t.jsx(Sf, { disabled: e }),
  /* @__PURE__ */ t.jsx(kf, { disabled: e }),
  /* @__PURE__ */ t.jsx(jf, { disabled: e }),
  /* @__PURE__ */ t.jsx(Bf, { disabled: e }),
  /* @__PURE__ */ t.jsx(Ef, { disabled: e }),
  /* @__PURE__ */ t.jsx(Df, { disabled: e }),
  /* @__PURE__ */ t.jsx(Mf, { disabled: e }),
  /* @__PURE__ */ t.jsx(Hf, { disabled: e })
] }), Lf = ({
  className: e,
  isDark: a,
  style: n,
  value: s = "",
  onDownload: i
}) => {
  const { isDark: l } = $(), d = l || a, f = j([
    "text-area-html",
    D2,
    d ? z : "",
    e ?? ""
  ]), u = {
    ...n ?? {}
    // default styles below
  }, m = He(async () => {
    "clipboard" in navigator ? await navigator.clipboard.writeText(s) : document.execCommand("copy", !0, s);
  }, [s]);
  return /* @__PURE__ */ t.jsx("div", { className: f, style: u, children: /* @__PURE__ */ t.jsxs("div", { className: j(["input-wrapper"]), children: [
    /* @__PURE__ */ t.jsx(
      "textarea",
      {
        className: j([
          "text-area-input",
          Qe,
          d ? it : h2
        ]),
        value: s,
        disabled: !0,
        id: "text-area-00",
        role: "textarea"
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "text-area-toolbar", children: [
      /* @__PURE__ */ t.jsx(
        oe,
        {
          icon: "copy",
          size: "small",
          className: h2,
          onClick: m
        }
      ),
      i && /* @__PURE__ */ t.jsx(
        oe,
        {
          icon: "download",
          size: "small",
          className: h2,
          onClick: i
        }
      )
    ] })
  ] }) });
}, pm = ct(
  ({
    label: e,
    className: a,
    isDark: n,
    disabled: s = !1,
    required: i = !1,
    onUpdate: l = (N) => {
      console.info(`[TextArea.onUpdate] value = ${N}`);
    },
    placeholder: d = "Input Text",
    style: f,
    value: u = "",
    helperText: m,
    error: g,
    htmlMode: b = !1,
    onDownload: y = () => {
      console.info("[TextArea.onDownload]");
    },
    showToolbar: p = !0,
    feedbackType: v,
    showLabelIcon: x = !0,
    showCharacterCount: A = !0,
    labelStyle: S,
    helperStyle: k,
    containerStyle: E,
    ...R
  }, V) => {
    const { isDark: N } = $(), [L, F] = q(u), Q = Z(() => u && !p ? u.length : 0, [p, u]), [G, J] = q(Q), X = g ?? v === "error", re = N || n, je = j([
      "text-area",
      Y0,
      s ? s0 : "",
      i ? "required" : "",
      re ? z : "",
      a ?? "",
      X ? "error" : ""
    ]), Me = {
      ...f ?? {}
      // default styles below
    }, se = Z(() => u || L, [u, L]);
    return b ? /* @__PURE__ */ t.jsx(
      Lf,
      {
        ...R,
        className: a,
        value: u,
        isDark: re,
        style: f,
        onDownload: y
      }
    ) : /* @__PURE__ */ t.jsxs("div", { className: je, style: E, role: "text-area", children: [
      /* @__PURE__ */ t.jsx(
        ut,
        {
          label: e,
          showLabelIcon: x,
          required: i,
          disabled: s,
          isDark: re,
          style: S
        }
      ),
      p ? /* @__PURE__ */ t.jsx("div", { className: j(["input-wrapper"]), children: /* @__PURE__ */ t.jsx(pf, { children: /* @__PURE__ */ t.jsx(
        mf,
        {
          className: j(["text-area-editor", n0, Zr]),
          ...R,
          style: Me,
          value: se,
          ref: V,
          isDark: re,
          placeholder: d,
          disabled: s,
          onChange: (fe) => {
            var W, ee, _e;
            const De = ((W = fe == null ? void 0 : fe.target) == null ? void 0 : W.value) || "";
            F(De), l == null || l(De), (ee = R.onChange) == null || ee.call(R, {
              ...fe,
              target: { value: De }
            }), J(String((_e = fe == null ? void 0 : fe.target) == null ? void 0 : _e.text).length || 0);
          },
          children: /* @__PURE__ */ t.jsxs("div", { className: "toolbar-wrapper", children: [
            p && /* @__PURE__ */ t.jsx(
              Rf,
              {
                className: j(["text-area-toolbar"]),
                disabled: s
              }
            ),
            !s && A && /* @__PURE__ */ t.jsx("div", { className: "counts", children: /* @__PURE__ */ t.jsxs(
              xe,
              {
                size: "xxsmall",
                variant: "regular",
                isDark: re,
                textColorClass: "$color-interaction-disabled",
                children: [
                  G,
                  R.maxLength && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                    " / ",
                    R.maxLength
                  ] })
                ]
              }
            ) })
          ] })
        }
      ) }) }) : /* @__PURE__ */ t.jsxs("div", { className: j(["text-area-only-wrapper"]), children: [
        /* @__PURE__ */ t.jsx(
          "textarea",
          {
            ...R,
            style: Me,
            ref: V,
            className: j([
              "text-area-only-input",
              n0,
              Zr,
              it,
              re ? z : "",
              X ? "error" : ""
            ]),
            disabled: s,
            placeholder: d,
            value: L,
            onChange: (fe) => {
              var W;
              const De = fe.target.value;
              F(De), l == null || l(De), J(De.length), (W = R.onChange) == null || W.call(R, fe);
            },
            role: "textarea"
          }
        ),
        !s && A && /* @__PURE__ */ t.jsx("div", { className: "counts", children: /* @__PURE__ */ t.jsxs(
          xe,
          {
            size: "xxsmall",
            variant: "regular",
            isDark: re,
            textColorClass: "$color-interaction-disabled",
            children: [
              G,
              R.maxLength && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                " / ",
                R.maxLength
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ t.jsx(
        yt,
        {
          message: g ?? m,
          variant: g ? "error" : v,
          disabled: s,
          isDark: re,
          style: k
        }
      )
    ] });
  }
), If = ct(
  (e, a) => {
    const {
      className: n,
      disabled: s,
      error: i,
      helperText: l,
      inputSize: d,
      isDark: f,
      label: u,
      placeholderText: m,
      required: g,
      style: b,
      showLabelIcon: y,
      onUpdate: p,
      feedbackType: v,
      feedbackContent: x,
      value: A
      // Destructure value prop to manage controlled value
    } = e, [S, k] = q(A || "");
    ve(() => {
      A !== void 0 && k(A);
    }, [A]);
    const E = (Q) => {
      var G;
      k(Q.target.value), p == null || p(Q.target.value), (G = e.onChange) == null || G.call(e, Q);
    }, { isDark: R } = $(), V = Z(
      () => f ?? R,
      [f, R]
    ), N = j([
      "text-input",
      Y0,
      d ?? "",
      s ? s0 : "",
      g ? "required" : "",
      V ? z : "",
      n ?? "",
      i ? "error" : ""
    ]), L = {
      ...b ?? {}
      // default styles below
    }, F = (u == null ? void 0 : u.toLowerCase().replace(/ /g, "-")) ?? "text-input-00";
    return /* @__PURE__ */ t.jsxs("div", { className: N, style: L, role: "textinput", children: [
      /* @__PURE__ */ t.jsx(
        ut,
        {
          label: u,
          showLabelIcon: y,
          required: g,
          disabled: s,
          isDark: V
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: "input-wrapper", children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            id: F,
            type: "text",
            ...e,
            placeholder: m,
            onChange: E,
            disabled: s,
            value: S,
            ref: a
          }
        ),
        S ? /* @__PURE__ */ t.jsx(
          Ft,
          {
            icon: Pn,
            size: "small",
            "data-testid": "clear-button",
            onClick: () => {
              k(""), p == null || p("");
            },
            disabled: s,
            type: "naked",
            containerClassName: "clear-button"
          }
        ) : null
      ] }),
      x ? /* @__PURE__ */ t.jsx(
        "div",
        {
          className: j([
            O0,
            Qe,
            V ? z : ""
          ]),
          children: x
        }
      ) : /* @__PURE__ */ t.jsx(
        yt,
        {
          message: i || l,
          variant: i ? "error" : v,
          disabled: s,
          isDark: V
        }
      )
    ] });
  }
), gm = ({
  className: e = "",
  isDark: a,
  style: n = {},
  separator: s = !1,
  severity: i = "default",
  percentage: l = 0,
  label: d,
  icon: f = "notification_important",
  trend: u = 0,
  ...m
}) => {
  const { isDark: g } = $(), b = Z(
    () => a ?? g,
    [a, g]
  ), [y, p] = q(!1), v = j([
    b ? [z, h2] : "",
    e
  ]), x = {
    ...n ?? {}
  }, A = (E) => {
    E.preventDefault(), p(!y);
  }, S = Number(l), k = u > 0 ? "+" : u === 0 ? "" : "-";
  return /* @__PURE__ */ t.jsx("div", { className: v, style: x, ...m, children: /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: j([
        "tile",
        i === "default" ? b ? z : Z1 : [U1, h2]
      ]),
      style: {
        boxShadow: b && s ? "-1px 0px 0px #3A3A3A inset" : !b && s ? "-1px 0px 0px #D7E5F8 inset" : "",
        border: y ? b ? "1px #3387DF solid" : "1px var(--cyan-400) solid" : ""
      },
      onClick: A,
      "aria-selected": y,
      role: "tile-container",
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "primary-values", children: [
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("span", { className: "primary-percentage", children: S }),
            /* @__PURE__ */ t.jsx("span", { className: "percentage-symbol", children: "%" })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "primary-label", children: d })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "secondary-values", children: [
          /* @__PURE__ */ t.jsxs("div", { children: [
            k,
            u,
            "%"
          ] }),
          /* @__PURE__ */ t.jsx("div", { children: f && /* @__PURE__ */ t.jsx(oe, { alt: d, icon: f, size: "large" }) })
        ] })
      ]
    }
  ) });
}, Nf = ["EST", "WEST", "CET", "PST", "GMT"], Pf = ["AM", "PM"], Vf = Pf.map((e) => ({
  displayText: e,
  id: e
})), Tf = Nf.map((e) => ({
  displayText: e,
  id: e
})), mm = ({
  label: e,
  size: a,
  selected: n,
  disabled: s,
  timeZones: i = [],
  showTimezones: l = !0,
  className: d,
  isDark: f,
  setSelected: u,
  style: m,
  helperText: g,
  feedbackType: b,
  ...y
}) => {
  const p = Ve(null), { isDark: v } = $(), [x, A] = q(), [S, k] = q(), E = f ?? v;
  ve(() => {
    n != null && n.type && (x == null ? void 0 : x.id) !== n.type && A({ id: n.type, displayText: n.type }), n != null && n.timeZone && (S == null ? void 0 : S.id) !== n.timeZone && k({
      id: n.timeZone,
      displayText: n.timeZone
    });
  }, [n]);
  const R = Z(
    () => i.length > 0 ? i.map((G) => ({ displayText: G, id: G })) : Tf,
    [i]
  ), V = j([
    "time-picker",
    Y0,
    a,
    E ? z : "",
    d ?? ""
  ]), N = {
    ...m ?? {}
  }, L = (G) => {
    G && G.length > 0 ? (A(G[0]), u({ ...n, type: G[0].id })) : (A(void 0), u({ ...n, type: "" }));
  }, F = (G) => {
    G && G.length > 0 ? (k(G[0]), u({ ...n, timeZone: G[0].id })) : (k(void 0), u({ ...n, timeZone: "" }));
  }, Q = (G) => {
    let J = G.replace(/[^0-9:]/g, "");
    J.includes(":") && J.indexOf(":") !== 2 && (J = J.substring(0, 2) + ":" + J.substring(2).replace(/:/g, "")), !J.includes(":") && J.length > 2 && (J = J.substring(0, 2) + ":" + J.substring(2));
    const X = J.split(":");
    X[0] && (parseInt(X[0], 10) > 23 || X[0].length > 2) && (J = X[0].substring(0, 2), X.length > 1 && (J += ":" + X[1])), X[1] && (parseInt(X[1], 10) > 59 || X[1].length > 2) && (J = X[0] + ":" + X[1].substring(0, 2)), u({ ...n, value: J });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: V, style: N, ref: p, ...y, children: [
    /* @__PURE__ */ t.jsx(
      ut,
      {
        label: e,
        showLabelIcon: !0,
        disabled: s,
        isDark: E
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: j(["inputs"]), children: [
      /* @__PURE__ */ t.jsx(
        fo,
        {
          isDark: E,
          inputSize: a,
          placeholder: "hh:mm",
          value: n == null ? void 0 : n.value,
          disabled: s,
          onUpdate: Q
        }
      ),
      /* @__PURE__ */ t.jsx(
        an,
        {
          isDark: E,
          placeholder: "AM/PM",
          disabled: s,
          childList: Vf,
          selectedValue: x && [x],
          selection: "single",
          setSelectedValue: L,
          size: a
        }
      ),
      l && /* @__PURE__ */ t.jsx(
        an,
        {
          isDark: E,
          placeholder: "Timezone",
          childList: R,
          disabled: s,
          selection: "single",
          selectedValue: S && [S],
          setSelectedValue: F,
          size: a
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(
      yt,
      {
        message: g,
        variant: b,
        disabled: s,
        isDark: E
      }
    )
  ] });
}, Ff = (e, a) => {
  const n = Ve(e);
  ve(() => {
    n.current = e;
  }, [e]), ve(() => {
    if (a === null) return;
    const s = setTimeout(() => n.current(), a);
    return () => clearTimeout(s);
  }, [a]);
}, _f = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",
        fill: "white"
      }
    )
  }
), Of = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",
        fill: "white"
      }
    )
  }
), Gf = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z",
        fill: "white"
      }
    )
  }
), Qf = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z",
        fill: "white"
      }
    )
  }
), zf = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z",
        fill: "#3A3A3A"
      }
    )
  }
), Zf = ({
  text: e,
  type: a = "success",
  removeToast: n,
  showActionIcon: s,
  duration: i = 5e3
}) => {
  Ff(n, i);
  const d = {
    info: /* @__PURE__ */ t.jsx(Of, {}),
    success: /* @__PURE__ */ t.jsx(Gf, {}),
    warning: /* @__PURE__ */ t.jsx(zf, {}),
    error: /* @__PURE__ */ t.jsx(Qf, {})
  }[a];
  return /* @__PURE__ */ t.jsxs("div", { className: `toast toast--${a}`, role: "alert", children: [
    /* @__PURE__ */ t.jsxs("div", { className: j(["toast-message", n0]), children: [
      /* @__PURE__ */ t.jsx("div", { className: "icon", children: d }),
      /* @__PURE__ */ t.jsx("div", { className: "toast-content", children: e })
    ] }),
    s && /* @__PURE__ */ t.jsx("button", { className: "toast-close-btn", onClick: n, children: /* @__PURE__ */ t.jsx("span", { children: /* @__PURE__ */ t.jsx(_f, {}) }) })
  ] });
}, hm = ({
  className: e,
  isDark: a,
  style: n,
  data: s = [],
  showActionIcon: i = !0,
  removeToast: l = (u) => {
    console.info(`[ToastContainer.removeToast] id = ${u}`);
  },
  position: d = "top-right",
  ...f
}) => {
  const { isDark: u } = $(), m = j([
    "toast-container",
    d,
    a ?? u ? z : "",
    e ?? ""
  ]), g = {
    ...n ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsx("div", { "aria-live": "assertive", className: m, style: g, ...f, children: s.map(({ id: b, text: y, type: p, ...v }) => /* @__PURE__ */ t.jsx(
    Zf,
    {
      ...v,
      text: y,
      type: p,
      removeToast: () => l(b),
      showActionIcon: i
    },
    b
  )) });
}, Uf = (e) => {
  const a = /* @__PURE__ */ new Date(), n = new Date(a.getTime() - 24 * 60 * 60 * 1e3);
  return e.toDateString() === a.toDateString() ? e.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  }) : e.toDateString() === n.toDateString() ? "Yesterday" : e.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}, Yf = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z",
        fill: "#005CBC"
      }
    )
  }
), $f = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t.jsx("g", { id: "Social/notifications", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        id: "Vector",
        d: "M20.0001 36.6667C21.8334 36.6667 23.3334 35.1667 23.3334 33.3333H16.6667C16.6667 35.1667 18.1667 36.6667 20.0001 36.6667ZM30.0001 26.6667V18.3333C30.0001 13.2167 27.2834 8.93333 22.5001 7.8V6.66667C22.5001 5.28333 21.3834 4.16667 20.0001 4.16667C18.6167 4.16667 17.5001 5.28333 17.5001 6.66667V7.8C12.7334 8.93333 10.0001 13.2 10.0001 18.3333V26.6667L6.66675 30V31.6667H33.3334V30L30.0001 26.6667ZM26.6667 28.3333H13.3334V18.3333C13.3334 14.2 15.8501 10.8333 20.0001 10.8333C24.1501 10.8333 26.6667 14.2 26.6667 18.3333V28.3333Z",
        fill: "#3A3A3A"
      }
    ) })
  }
), Wf = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ t.jsx("g", { id: "Social/notifications", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        id: "Vector",
        d: "M20.0001 36.6667C21.8334 36.6667 23.3334 35.1667 23.3334 33.3333H16.6667C16.6667 35.1667 18.1667 36.6667 20.0001 36.6667ZM30.0001 26.6667V18.3333C30.0001 13.2167 27.2834 8.93333 22.5001 7.8V6.66667C22.5001 5.28333 21.3834 4.16667 20.0001 4.16667C18.6167 4.16667 17.5001 5.28333 17.5001 6.66667V7.8C12.7334 8.93333 10.0001 13.2 10.0001 18.3333V26.6667L6.66675 30V31.6667H33.3334V30L30.0001 26.6667ZM26.6667 28.3333H13.3334V18.3333C13.3334 14.2 15.8501 10.8333 20.0001 10.8333C24.1501 10.8333 26.6667 14.2 26.6667 18.3333V28.3333Z",
        fill: "#EFEFEF"
      }
    ) })
  }
), Xf = ({
  notification: e,
  onClick: a,
  onDismiss: n,
  isDark: s
}) => {
  const { isDark: i } = $(), l = s ?? i, d = j(["header-notification-item", l ? z : ""]), f = (m) => {
    m.stopPropagation(), m.preventDefault(), n == null || n(e.id);
  }, u = (m) => {
    m.stopPropagation(), m.preventDefault(), a == null || a(e.id);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: d, onClick: () => a == null ? void 0 : a(e.id), children: [
    /* @__PURE__ */ t.jsxs("div", { className: "content-wrapper", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "content-left", children: [
        /* @__PURE__ */ t.jsxs(
          "span",
          {
            className: j([
              N0,
              "notification-title",
              l ? z : ""
            ]),
            children: [
              !e.isRead && /* @__PURE__ */ t.jsx(Yf, {}),
              e.title
            ]
          }
        ),
        /* @__PURE__ */ t.jsx(
          "span",
          {
            className: j([
              Qe,
              "notification-description",
              l ? z : ""
            ]),
            children: e.description
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "content-right", children: e.image })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "content-footer", children: [
      /* @__PURE__ */ t.jsx(
        "span",
        {
          className: j([
            lt,
            "notification-date",
            l ? z : ""
          ]),
          children: Uf(e.date)
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: "actions-wrapper", children: [
        /* @__PURE__ */ t.jsx(
          Le,
          {
            onClick: f,
            variant: "tertiary",
            size: "small",
            className: j([Qe]),
            isDark: l,
            children: "Dismiss"
          }
        ),
        /* @__PURE__ */ t.jsx(
          Le,
          {
            onClick: u,
            variant: "tertiary",
            size: "small",
            className: j([Qe]),
            isDark: l,
            children: "Read More"
          }
        )
      ] })
    ] })
  ] });
}, vm = ({
  title: e,
  popOverDirection: a,
  notifications: n = [],
  open: s,
  isDark: i,
  onDismissAll: l,
  onReadAll: d,
  onDismiss: f,
  onClick: u,
  setOpen: m
}) => {
  const { isDark: g } = $(), b = n.filter(
    (S) => !S.isRead
  ).length, y = i ?? g, [p, v] = q(0), x = (S) => {
    v(S);
  }, A = Z(() => p === 1 ? n.filter(
    (S) => !S.isRead
  ) : n, [p, n]);
  return ve(() => {
    A.length === 0 && p === 1 && v(0);
  }, [A]), /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(
    R2,
    {
      text: e,
      direction: a,
      className: j(["header-notification-panel", y ? z : ""]),
      isDark: y,
      onClosePopover: () => m == null ? void 0 : m(!1),
      showPopover: s,
      children: /* @__PURE__ */ t.jsxs("div", { className: "content-wrapper", children: [
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsxs("div", { className: "tab-wrapper", children: [
            /* @__PURE__ */ t.jsx("div", { className: "navigation-wrapper", children: /* @__PURE__ */ t.jsxs(
              rr,
              {
                selectedIndex: p,
                onUpdate: x,
                isDark: y,
                children: [
                  /* @__PURE__ */ t.jsx(Et, { label: "All" }),
                  /* @__PURE__ */ t.jsx(
                    Et,
                    {
                      label: "Unread",
                      tag: b > 0 ? {
                        color: "Red-600",
                        text: b.toString()
                      } : void 0,
                      disabled: b === 0
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ t.jsx("div", { className: j(["spacer", y ? z : ""]) })
          ] }),
          A.length === 0 ? /* @__PURE__ */ t.jsxs("div", { className: "no-notification-container", children: [
            y ? /* @__PURE__ */ t.jsx(Wf, {}) : /* @__PURE__ */ t.jsx($f, {}),
            /* @__PURE__ */ t.jsx(
              "span",
              {
                className: j([
                  n0,
                  "no-notification-date",
                  y ? z : ""
                ]),
                children: "No Notifications"
              }
            )
          ] }) : A.map((S) => /* @__PURE__ */ t.jsx(
            Xf,
            {
              notification: S,
              isDark: y,
              onDismiss: f,
              onClick: u
            },
            S.id
          ))
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "footer-button-wrapper", children: [
          /* @__PURE__ */ t.jsx(
            Le,
            {
              iconLeading: "delete_outline",
              size: "medium",
              text: "Dismiss all",
              disabled: n.length === 0,
              variant: "tertiary",
              onClick: l,
              isDark: y
            }
          ),
          /* @__PURE__ */ t.jsx(
            Le,
            {
              size: "medium",
              text: "Mark all as read",
              variant: "secondary",
              disabled: b === 0,
              onClick: d,
              isDark: y
            }
          )
        ] })
      ] })
    }
  ) });
}, ym = ({
  children: e,
  className: a,
  expandAll: n,
  isDark: s,
  size: i,
  state: l,
  selectedItemIndex: d = 0,
  alignment: f = "right",
  onUpdate: u = () => {
  },
  ...m
}) => {
  In("Accordion");
  const { isDark: g } = $(), [b, y] = q(d), p = Z(
    () => s ?? g,
    [s, g]
  ), v = j([
    "accordion",
    i ?? "large",
    l === "disabled" ? s0 : "",
    p ? z : "",
    a ?? ""
  ]), x = {
    ...m.style ?? {}
    // default styles below
  }, A = (S) => {
    S !== b && (y(S), u(S));
  };
  return ve(() => {
    y(d);
  }, [d]), /* @__PURE__ */ t.jsx("div", { className: v, style: x, role: "accordion", children: mn.map(e, (S, k) => {
    if (!Kr(S)) return null;
    const E = S.key ?? String(S.props.label) ?? String(k);
    return or(S, {
      expanded: S.props.expanded,
      index: k,
      alignment: f,
      state: S.props.state || l,
      isActive: S.props.isActive || k === b,
      key: E,
      onUpdate: (R) => {
        var V, N;
        (N = (V = S.props).onUpdate) == null || N.call(V, R), A(R);
      },
      size: S.props.size || i
    });
  }) });
}, Kf = {
  xlarge: "1rem",
  large: "1rem",
  medium: "0.5rem 1rem",
  small: "0.25rem 1rem"
}, P1 = ({ isExpanded: e }) => /* @__PURE__ */ t.jsx(
  oe,
  {
    alt: e ? "expand" : "collapse",
    className: j([Bt]),
    icon: e ? "keyboard_arrow_up" : "keyboard_arrow_down",
    size: "large",
    style: {
      display: "inline-flex",
      flexGrow: 0
    }
  }
), Cm = ({
  children: e,
  className: a,
  expanded: n = !1,
  icon: s = "",
  index: i,
  isActive: l,
  isDark: d,
  label: f = "",
  subTitle: u,
  badge: m,
  avatar: g,
  alignment: b,
  state: y = "enable",
  onUpdate: p = () => {
  },
  size: v = "large",
  ...x
}) => {
  In("AccordionItem");
  const { isDark: A } = $(), [S, k] = q(n), E = Z(
    () => d ?? A,
    [d, A]
  ), R = j([
    "accordion-item",
    v,
    l ? "active" : "",
    y === "disabled" ? s0 : "",
    E ? z : "",
    a ?? ""
  ]), V = (L) => {
    if (y === "disabled")
      return;
    const F = parseInt(L.currentTarget.dataset.index, 10);
    k(!S), p(F);
  }, N = {
    ...x.style ?? {}
  };
  return ve(() => {
    k(n);
  }, [n]), /* @__PURE__ */ t.jsxs(
    "div",
    {
      "aria-expanded": S,
      className: R,
      style: N,
      role: "listitem",
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "summary", children: /* @__PURE__ */ t.jsxs(
          "div",
          {
            "aria-disabled": y === "disabled",
            className: j([
              "buttonBase",
              y === "disabled" ? s0 : ""
            ]),
            "data-index": i,
            onClick: V,
            role: "button",
            style: {
              height: v === "large" ? "1rem" : "1.5rem",
              padding: Kf[v]
            },
            children: [
              b === "left" && /* @__PURE__ */ t.jsx(P1, { isExpanded: S }),
              /* @__PURE__ */ t.jsxs("div", { className: "accordion-item-container", children: [
                s !== "" && /* @__PURE__ */ t.jsx(
                  oe,
                  {
                    icon: s,
                    size: "large",
                    style: {
                      marginRight: "var(--spacing-04, 16px)"
                    }
                  }
                ),
                g && /* @__PURE__ */ t.jsx(H2, { ...g }),
                /* @__PURE__ */ t.jsxs(
                  "div",
                  {
                    className: j([
                      "accordion-item-label-container",
                      v,
                      E ? z : ""
                    ]),
                    children: [
                      /* @__PURE__ */ t.jsx(
                        "div",
                        {
                          className: j([
                            "accordion-item-label",
                            ["xlarge", "large"].includes(v) ? sr : no
                          ]),
                          children: f
                        }
                      ),
                      u && /* @__PURE__ */ t.jsx(
                        "p",
                        {
                          className: j([
                            "accordion-item-subtitle",
                            ["xlarge", "large"].includes(v) ? Qe : lt
                          ]),
                          children: u
                        }
                      )
                    ]
                  }
                ),
                m && /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(
                  X0,
                  {
                    color: "Gray-100",
                    ...m,
                    size: v === "xlarge" || v === "large" ? "large" : "small"
                  }
                ) })
              ] }),
              b === "right" && /* @__PURE__ */ t.jsx(P1, { isExpanded: S })
            ]
          }
        ) }),
        /* @__PURE__ */ t.jsx("div", { className: "content-expander", "aria-expanded": n, children: /* @__PURE__ */ t.jsx("div", { className: "accordion-item-content", children: e }) })
      ]
    }
  );
}, xm = ({
  isDark: e,
  selectedItemIndex: a,
  onUpdate: n = () => {
  },
  presentation: s = "box-shadow",
  separator: i = !1,
  onClickAdd: l,
  accordionTitle: d = "",
  children: f,
  className: u,
  ...m
}) => {
  const { isDark: g } = $(), [b, y] = q(a), p = Z(
    () => e ?? g,
    [e, g]
  ), v = j([
    "accordion-v1",
    i ? `${s} separator` : s,
    p ? z : "",
    u ?? ""
  ]), x = {
    ...m.style ?? {}
    // default styles below
  }, A = (S) => {
    S !== b && (y(S), n(S));
  };
  return ve(() => {
    y(a);
  }, [a]), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    d && /* @__PURE__ */ t.jsxs("div", { className: "accordion-heading-container-v1", children: [
      /* @__PURE__ */ t.jsx(xe, { headingLevel: 6, isDark: p, children: d }),
      l && /* @__PURE__ */ t.jsx(Ft, { icon: "add", onClick: l, isDark: p })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: v, style: x, role: "accordion", children: mn.map(f, (S, k) => {
      if (!Kr(S)) return null;
      const E = S.key ?? String(S.props.label) ?? String(k);
      return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        or(S, {
          presentation: i ? "no-background" : s,
          expanded: b !== void 0 ? k === b : S.props.expanded,
          index: k,
          key: E,
          onUpdate: (R) => {
            var V, N;
            (N = (V = S.props).onUpdate) == null || N.call(V, R), A(R);
          }
        }),
        Array.isArray(f) && i && k !== f.length - 1 && /* @__PURE__ */ t.jsx("div", { className: "child-border" })
      ] });
    }) })
  ] });
}, Jf = ({
  isExpanded: e,
  disabled: a
}) => /* @__PURE__ */ t.jsx(
  oe,
  {
    alt: e ? "expand" : "collapse",
    className: j([Bt]),
    icon: e ? "keyboard_arrow_up" : "keyboard_arrow_down",
    size: "large",
    disabled: a,
    style: {
      display: "inline-flex",
      flexGrow: 0
    }
  }
), bm = ({
  children: e,
  className: a,
  expanded: n = !1,
  icon: s = "",
  index: i,
  isDark: l,
  label: d = "",
  subTitle: f,
  avatar: u,
  onUpdate: m = () => {
  },
  imageUrl: g,
  rightAccessoryChild: b,
  disabled: y = !1,
  presentation: p = "box-shadow",
  showSkeleton: v = !1,
  ...x
}) => {
  const { isDark: A } = $(), [S, k] = q(n), E = Z(
    () => l ?? A,
    [l, A]
  ), R = j([
    "accordion-item-v1",
    p,
    y ? s0 : "",
    E ? z : "",
    a ?? ""
  ]), V = (L) => {
    if (y)
      return;
    const F = parseInt(L.currentTarget.dataset.index, 10);
    k(!S), m(F);
  }, N = {
    ...x.style ?? {}
  };
  return ve(() => {
    k(n);
  }, [n]), v ? /* @__PURE__ */ t.jsx(
    "div",
    {
      className: j(["accordion-item-skeleton", R]),
      "data-testid": "accordion-item-skeleton",
      children: /* @__PURE__ */ t.jsxs("div", { className: "buttonBase", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "accordion-item-container", children: [
          s && /* @__PURE__ */ t.jsx("div", { className: j(["icon", "shimmer"]) }),
          u && /* @__PURE__ */ t.jsx("div", { className: j(["avatar", "shimmer"]) }),
          g && /* @__PURE__ */ t.jsx("div", { className: j(["image", "shimmer"]) }),
          /* @__PURE__ */ t.jsxs("div", { className: "accordion-item-label-container", children: [
            /* @__PURE__ */ t.jsx("div", { className: j(["label", "shimmer"]) }),
            /* @__PURE__ */ t.jsx("div", { className: j(["subtitle", "shimmer"]) })
          ] }),
          b && /* @__PURE__ */ t.jsx("div", { className: j(["right-accordion-child", "shimmer"]) })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: j(["icon", "shimmer"]) })
      ] })
    }
  ) : /* @__PURE__ */ t.jsxs(
    "div",
    {
      "aria-expanded": S,
      className: R,
      style: N,
      role: "listitem",
      children: [
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            "aria-disabled": y,
            className: j(["buttonBase", y ? s0 : ""]),
            "data-index": i,
            onClick: V,
            role: "button",
            children: [
              /* @__PURE__ */ t.jsxs("div", { className: "accordion-item-container", children: [
                s !== "" && /* @__PURE__ */ t.jsx(
                  oe,
                  {
                    icon: s,
                    size: "large",
                    className: j([Bt]),
                    disabled: y
                  }
                ),
                u && /* @__PURE__ */ t.jsx(H2, { ...u, disabled: y }),
                g && /* @__PURE__ */ t.jsx("div", { className: "accordion-image-container", children: /* @__PURE__ */ t.jsx("img", { src: g, alt: "accordion-image" }) }),
                /* @__PURE__ */ t.jsxs(
                  "div",
                  {
                    className: j([
                      "accordion-item-label-container",
                      E ? z : "",
                      y ? s0 : ""
                    ]),
                    children: [
                      /* @__PURE__ */ t.jsx("div", { className: j(["accordion-item-label", ro]), children: d }),
                      f && /* @__PURE__ */ t.jsx("p", { className: j(["accordion-item-subtitle", n0]), children: f })
                    ]
                  }
                ),
                b && /* @__PURE__ */ t.jsx("div", { className: "right-accordion-child", children: b })
              ] }),
              /* @__PURE__ */ t.jsx(Jf, { isExpanded: S, disabled: y })
            ]
          }
        ),
        /* @__PURE__ */ t.jsx("div", { className: "content-expander", "aria-expanded": n, children: /* @__PURE__ */ t.jsx("div", { className: "accordion-item-content", children: e }) })
      ]
    }
  );
}, qf = ({
  eventCategories: e,
  isDark: a,
  currentYear: n,
  currentMonth: s,
  currentDate: i,
  onChangeView: l,
  selectedView: d,
  changeMonth: f,
  changeDate: u
}) => {
  const { isDark: m } = $(), g = A9(n, s, i), b = () => {
    d === 1 ? u == null || u(1) : f(1);
  }, y = () => {
    d === 1 ? u == null || u(-1) : f(-1);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "calendar-header", role: "header", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "date-container", children: [
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: j([
            "month-year-container",
            a ?? m ? z : ""
          ]),
          children: [
            /* @__PURE__ */ t.jsx(oe, { icon: "chevron_left", onClick: y, size: "small" }),
            /* @__PURE__ */ t.jsxs("p", { className: j(["month-year", N0]), children: [
              d === 1 ? i : "",
              " ",
              $s(s),
              " ",
              /* @__PURE__ */ t.jsx(
                "span",
                {
                  className: j([d === 1 ? n0 : N0]),
                  children: n
                }
              )
            ] }),
            /* @__PURE__ */ t.jsx(oe, { icon: "chevron_right", onClick: b, size: "small" })
          ]
        }
      ),
      d === 1 && /* @__PURE__ */ t.jsx(
        "div",
        {
          className: j([
            "month-year-container",
            a ?? m ? z : ""
          ]),
          children: /* @__PURE__ */ t.jsx("p", { className: j(["month-day", Qe]), children: g })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(
      d9,
      {
        items: ["Monthly", "Daily"],
        onUpdate: l,
        selectedItemIndex: d
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: j([
          "event-categories",
          a ?? m ? z : ""
        ]),
        children: Object.values(e).map((p) => /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: j(["event-category", Qe]),
            children: [
              /* @__PURE__ */ t.jsx(qs, { primaryFillColor: p.color }),
              p.label
            ]
          },
          p.id
        ))
      }
    )
  ] });
}, ep = (e, a) => e.filter((n) => {
  const s = new Date(n.start), i = n.end ? new Date(n.end) : s, l = new Date(a);
  return s.setHours(0, 0, 0, 0), i.setHours(0, 0, 0, 0), l.setHours(0, 0, 0, 0), l >= s && l <= i;
}), ni = (e, a) => {
  const n = a.getDate(), s = a.getMonth(), i = a.getFullYear();
  return e.filter((d) => {
    const f = d.start.getDate(), u = d.start.getMonth(), m = d.start.getFullYear();
    return f === n && u === s && m === i;
  });
}, tp = (e, a) => {
  const n = ni(e, a), s = [];
  for (let i = 0; i < 24; i++) {
    const l = i.toString().padStart(2, "0") + ":00";
    s.push({ slot: l, events: [] });
  }
  return n.forEach((i) => {
    const l = i.start.getHours(), d = i.start.getMinutes(), f = l, u = Math.floor(d / 10);
    s[f].events[u] === void 0 && (s[f].events[u] = {
      subSlot: `${l}:${(u * 10).toString().padStart(2, "0")}`,
      events: []
    });
    const m = s[f].events[u];
    m.events.length < 2 ? m.events.push({
      ...i
    }) : s[f].events.push({
      subSlot: `${l}:${(u * 30).toString().padStart(2, "0")}`,
      events: [
        {
          ...i
        }
      ]
    });
  }), s;
}, rp = ({
  day: e,
  eventCategories: a,
  events: n,
  maxEventsInView: s,
  currentMonth: i,
  isDark: l,
  showPopover: d,
  setShowPopover: f,
  onDayClick: u
}) => {
  const { isDark: m } = $(), [g, b] = Z(() => {
    const p = ep(n, e), v = Math.min(s, p.length);
    return [
      p.slice(0, v),
      p.length - v
    ];
  }, [e, n]), y = j([
    "calendar-item",
    q2(e) ? "today" : "",
    q2(e) ? N0 : n0,
    (e == null ? void 0 : e.getMonth()) !== i ? "outside" : "",
    l ?? m ? z : ""
  ]);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: y,
      onClick: () => e && u(e),
      role: "gridcell",
      tabIndex: e == null ? void 0 : e.getDate(),
      children: [
        /* @__PURE__ */ t.jsx("p", { children: e == null ? void 0 : e.getDate() }),
        /* @__PURE__ */ t.jsxs("div", { className: "events", children: [
          g.map((p) => {
            const v = e.getDay() === 0 || e.getDay() === 6 ? "end" : "start";
            return /* @__PURE__ */ t.jsxs(
              "div",
              {
                className: j([
                  "event",
                  l ?? m ? z : "",
                  lt
                ]),
                style: {
                  backgroundColor: a[p.categoryId].color
                },
                onClick: (x) => {
                  x.stopPropagation(), x.preventDefault();
                },
                children: [
                  /* @__PURE__ */ t.jsx(
                    "p",
                    {
                      style: { width: "100%" },
                      onClick: (x) => {
                        x.stopPropagation(), x.preventDefault(), f(p.id);
                      },
                      children: p.title
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    R2,
                    {
                      text: p.title,
                      showPopover: d === p.id,
                      onClosePopover: () => f(void 0),
                      isDark: l,
                      className: j([v]),
                      children: p.details
                    }
                  )
                ]
              },
              p.id
            );
          }),
          b > 0 && /* @__PURE__ */ t.jsx(
            "div",
            {
              className: j([
                "event",
                "remaining",
                l ?? m ? z : "",
                lt
              ]),
              children: /* @__PURE__ */ t.jsxs("p", { style: { width: "100%" }, children: [
                "+",
                b
              ] }, "remaining-events")
            }
          )
        ] })
      ]
    }
  );
}, V1 = ({
  eventCategories: e,
  events: a,
  isDark: n,
  showPopover: s,
  setShowPopover: i,
  label: l
}) => {
  const { isDark: d } = $(), f = j([
    "calendar-item-micro",
    n0,
    n ?? d ? z : ""
  ]);
  return /* @__PURE__ */ t.jsxs("div", { className: f, children: [
    l && /* @__PURE__ */ t.jsx("p", { children: l }),
    a && a.length > 0 && /* @__PURE__ */ t.jsx("div", { className: "events", children: a.map((u) => /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: j([
          "event",
          n ?? d ? z : "",
          lt
        ]),
        style: {
          backgroundColor: e == null ? void 0 : e[u.categoryId].color
        },
        children: [
          /* @__PURE__ */ t.jsx("p", { style: { width: "100%" }, onClick: () => i == null ? void 0 : i(u.id), children: u.title }),
          /* @__PURE__ */ t.jsx(
            R2,
            {
              text: u.title,
              showPopover: s === u.id,
              onClosePopover: () => i == null ? void 0 : i(void 0),
              isDark: n,
              className: "bottom",
              children: u.details
            }
          )
        ]
      },
      u.id
    )) })
  ] });
}, op = ({
  isDark: e,
  showPopover: a,
  eventCategories: n,
  events: s,
  day: i,
  setShowPopover: l
}) => {
  const d = tp(s, i), f = j(["calendar-daily-view-container"]);
  return /* @__PURE__ */ t.jsx("div", { className: f, children: d.map((u, m) => /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "events-row",
      id: `hourly-slot-${u.slot}`,
      children: [
        /* @__PURE__ */ t.jsx("p", { className: j(["row-label", lt]), children: u.slot }),
        u.events.length ? /* @__PURE__ */ t.jsx("div", { className: "row-events", children: u.events.map((g) => /* @__PURE__ */ t.jsx(
          V1,
          {
            isDark: e,
            label: g.subSlot,
            events: g.events,
            eventCategories: n,
            showPopover: a,
            setShowPopover: l
          },
          `hourly-slot-${m}-${u.slot}-${g.subSlot}`
        )) }) : /* @__PURE__ */ t.jsx(V1, {})
      ]
    },
    `${m}-hourly-slot-${u.slot}`
  )) });
}, np = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], wm = ({
  eventCategories: e,
  events: a,
  maxEventsInView: n,
  isDark: s,
  className: i,
  style: l
}) => {
  const { isDark: d } = $(), [f, u] = q(), [m, g] = q(0), {
    visibleDate: b,
    currentYear: y,
    currentMonth: p,
    currentDate: v,
    daysArray: x,
    changeMonth: A,
    changeDate: S,
    setVisibleDate: k
  } = Ws(), E = e.reduce(
    (L, F, Q) => {
      const G = { ...F };
      return G.color = $r[Q % $r.length], L[F.id] = G, L;
    },
    {}
  ), R = j([
    "calendar",
    s ?? d ? z : "",
    i ?? ""
  ]), V = {
    ...l ?? {}
  }, N = (L) => {
    k(L), g(1);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: R, style: V, children: [
    /* @__PURE__ */ t.jsx(
      qf,
      {
        eventCategories: E,
        isDark: s,
        currentYear: y,
        currentMonth: p,
        selectedView: m,
        currentDate: v,
        onChangeView: g,
        changeMonth: A,
        changeDate: S
      }
    ),
    m === 1 && /* @__PURE__ */ t.jsx(
      op,
      {
        events: ni(a, b),
        eventCategories: E,
        day: b,
        showPopover: f,
        setShowPopover: u
      }
    ),
    m === 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: j(["weekdays", s ?? d ? z : ""]),
          children: np.map((L) => /* @__PURE__ */ t.jsx("span", { className: j(["weekday", sr]), children: L[0] }, L))
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: "content", role: "grid", children: x.map((L, F) => /* @__PURE__ */ t.jsx(
        rp,
        {
          day: L,
          eventCategories: E,
          events: a,
          maxEventsInView: n,
          currentMonth: p,
          isDark: s,
          showPopover: f,
          setShowPopover: u,
          onDayClick: N
        },
        `calendar-item-${F}`
      )) })
    ] })
  ] });
}, Am = ({
  border: e,
  ellipsis: a = !0,
  onEllipsisClick: n,
  dropdownProps: s,
  icon: i = "info",
  onIconClick: l,
  isDark: d,
  linkProps: f,
  primaryButtonProps: u,
  secondaryButtonProps: m,
  tertiaryButtonProps: g,
  title: b,
  ...y
}) => {
  const { isDark: p } = $(), v = Z(
    () => d ?? p,
    [d, p]
  ), x = j([
    "card",
    e ? "border" : "",
    io,
    v ? z : ""
  ]), A = {
    ...y.style ?? {}
  }, S = /* @__PURE__ */ t.jsxs("div", { className: "card-header", children: [
    /* @__PURE__ */ t.jsx(xe, { headingLevel: 6, children: b }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: "card-options",
        style: { display: "flex", gap: "8px", zIndex: "0", height: "1.5rem" },
        children: [
          s && /* @__PURE__ */ t.jsx(
            an,
            {
              className: "card-dropdown",
              style: { zIndex: "1", height: "24px" },
              ...s,
              ref: null
            }
          ),
          i && /* @__PURE__ */ t.jsx(
            oe,
            {
              className: j([Bt]),
              alt: i,
              icon: i,
              size: "large",
              onClick: l
            }
          ),
          a && /* @__PURE__ */ t.jsx(
            oe,
            {
              className: j([Bt]),
              alt: "ellipsis",
              icon: "more_horiz",
              size: "large",
              onClick: n
            }
          )
        ]
      }
    )
  ] }), k = /* @__PURE__ */ t.jsxs("div", { className: "card-footer", children: [
    /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", gap: "16px" }, children: [
      g && /* @__PURE__ */ t.jsx(Le, { ...g }),
      f && /* @__PURE__ */ t.jsx(U0, { ...f })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", gap: "16px" }, children: [
      m && /* @__PURE__ */ t.jsx(Le, { ...m }),
      u && /* @__PURE__ */ t.jsx(Le, { ...u })
    ] })
  ] });
  return /* @__PURE__ */ t.jsxs("div", { className: x, style: A, role: "card", children: [
    S,
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: j(["card-content", v ? O0 : ""]),
        children: y.children
      }
    ),
    k
  ] });
}, Sm = ({
  isDark: e,
  orientation: a,
  type: n,
  data: s,
  className: i,
  style: l
}) => {
  var p;
  const [d, f] = q(0), { isDark: u } = $(), m = Z(
    () => e ?? u,
    [e, u]
  ), g = (v) => {
    f(v);
  }, b = j([
    "card-navigation",
    a,
    n,
    m ? "dark" : "",
    i
  ]), y = {
    ...l
  };
  return /* @__PURE__ */ t.jsxs("div", { className: b, style: y, role: "card-navigation", children: [
    /* @__PURE__ */ t.jsx(
      rr,
      {
        selectedIndex: d,
        onUpdate: f,
        type: n,
        orientation: a,
        isDark: m,
        children: s.map(({ header: v }, x) => /* @__PURE__ */ t.jsx(
          Et,
          {
            label: v.label,
            isActive: x === d,
            onClick: () => g(x),
            disabled: v.disabled
          },
          x
        ))
      }
    ),
    (p = s[d]) == null ? void 0 : p.details
  ] });
}, km = ({
  className: e,
  style: a,
  isDark: n = !1,
  itemData: s,
  title: i = "Title",
  showTitle: l = !0,
  showPagination: d = !0,
  onStepChange: f,
  ...u
}) => {
  const { isDark: m } = $(), [g, b] = q(1), y = Z(
    () => n ?? m,
    [n, m]
  ), p = j([
    "carousel",
    y ? z : "",
    D2,
    e ?? ""
  ]), v = {
    ...a ?? {}
  }, x = (A) => {
    b(A), f == null || f(A);
  };
  return /* @__PURE__ */ t.jsxs("div", { ...u, className: p, style: v, children: [
    i && l && /* @__PURE__ */ t.jsx("div", { className: j([Gr, "title"]), children: i }),
    /* @__PURE__ */ t.jsx("div", { className: "content", children: /* @__PURE__ */ t.jsx(
      "div",
      {
        className: j([Gr, "swipeable-view"]),
        style: {
          transform: `translateX(-${(g - 1) * 100}%)`
        },
        children: s.map((A, S) => /* @__PURE__ */ t.jsx("div", { className: "carousel-item", "data-index": S + 1, children: A }))
      }
    ) }),
    /* @__PURE__ */ t.jsx("div", { className: "controls", children: d && /* @__PURE__ */ t.jsx(
      ff,
      {
        currentPage: g,
        onUpdate: x,
        pageCount: s.length,
        variant: "dot"
      }
    ) })
  ] });
};
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function Pt(e, a) {
  return typeof e == "function" ? e(a) : e;
}
function J0(e, a) {
  return (n) => {
    a.setState((s) => ({
      ...s,
      [e]: Pt(n, s[e])
    }));
  };
}
function po(e) {
  return e instanceof Function;
}
function ap(e) {
  return Array.isArray(e) && e.every((a) => typeof a == "number");
}
function sp(e, a) {
  const n = [], s = (i) => {
    i.forEach((l) => {
      n.push(l);
      const d = a(l);
      d != null && d.length && s(d);
    });
  };
  return s(e), n;
}
function we(e, a, n) {
  let s = [], i;
  return (l) => {
    let d;
    n.key && n.debug && (d = Date.now());
    const f = e(l);
    if (!(f.length !== s.length || f.some((g, b) => s[b] !== g)))
      return i;
    s = f;
    let m;
    if (n.key && n.debug && (m = Date.now()), i = a(...f), n == null || n.onChange == null || n.onChange(i), n.key && n.debug && n != null && n.debug()) {
      const g = Math.round((Date.now() - d) * 100) / 100, b = Math.round((Date.now() - m) * 100) / 100, y = b / 16, p = (v, x) => {
        for (v = String(v); v.length < x; )
          v = " " + v;
        return v;
      };
      console.info(`%c⏱ ${p(b, 5)} /${p(g, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * y, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return i;
  };
}
function Ae(e, a, n, s) {
  return {
    debug: () => {
      var i;
      return (i = e == null ? void 0 : e.debugAll) != null ? i : e[a];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: s
  };
}
function ip(e, a, n, s) {
  const i = () => {
    var d;
    return (d = l.getValue()) != null ? d : e.options.renderFallbackValue;
  }, l = {
    id: `${a.id}_${n.id}`,
    row: a,
    column: n,
    getValue: () => a.getValue(s),
    renderValue: i,
    getContext: we(() => [e, n, a, l], (d, f, u, m) => ({
      table: d,
      column: f,
      row: u,
      cell: m,
      getValue: m.getValue,
      renderValue: m.renderValue
    }), Ae(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((d) => {
    d.createCell == null || d.createCell(l, n, a, e);
  }, {}), l;
}
function lp(e, a, n, s) {
  var i, l;
  const f = {
    ...e._getDefaultColumnDef(),
    ...a
  }, u = f.accessorKey;
  let m = (i = (l = f.id) != null ? l : u ? typeof String.prototype.replaceAll == "function" ? u.replaceAll(".", "_") : u.replace(/\./g, "_") : void 0) != null ? i : typeof f.header == "string" ? f.header : void 0, g;
  if (f.accessorFn ? g = f.accessorFn : u && (u.includes(".") ? g = (y) => {
    let p = y;
    for (const x of u.split(".")) {
      var v;
      p = (v = p) == null ? void 0 : v[x], process.env.NODE_ENV !== "production" && p === void 0 && console.warn(`"${x}" in deeply nested key "${u}" returned undefined.`);
    }
    return p;
  } : g = (y) => y[f.accessorKey]), !m)
    throw process.env.NODE_ENV !== "production" ? new Error(f.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let b = {
    id: `${String(m)}`,
    accessorFn: g,
    parent: s,
    depth: n,
    columnDef: f,
    columns: [],
    getFlatColumns: we(() => [!0], () => {
      var y;
      return [b, ...(y = b.columns) == null ? void 0 : y.flatMap((p) => p.getFlatColumns())];
    }, Ae(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: we(() => [e._getOrderColumnsFn()], (y) => {
      var p;
      if ((p = b.columns) != null && p.length) {
        let v = b.columns.flatMap((x) => x.getLeafColumns());
        return y(v);
      }
      return [b];
    }, Ae(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const y of e._features)
    y.createColumn == null || y.createColumn(b, e);
  return b;
}
const _0 = "debugHeaders";
function T1(e, a, n) {
  var s;
  let l = {
    id: (s = n.id) != null ? s : a.id,
    column: a,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const d = [], f = (u) => {
        u.subHeaders && u.subHeaders.length && u.subHeaders.map(f), d.push(u);
      };
      return f(l), d;
    },
    getContext: () => ({
      table: e,
      header: l,
      column: a
    })
  };
  return e._features.forEach((d) => {
    d.createHeader == null || d.createHeader(l, e);
  }), l;
}
const cp = {
  createTable: (e) => {
    e.getHeaderGroups = we(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (a, n, s, i) => {
      var l, d;
      const f = (l = s == null ? void 0 : s.map((b) => n.find((y) => y.id === b)).filter(Boolean)) != null ? l : [], u = (d = i == null ? void 0 : i.map((b) => n.find((y) => y.id === b)).filter(Boolean)) != null ? d : [], m = n.filter((b) => !(s != null && s.includes(b.id)) && !(i != null && i.includes(b.id)));
      return Vr(a, [...f, ...m, ...u], e);
    }, Ae(e.options, _0, "getHeaderGroups")), e.getCenterHeaderGroups = we(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (a, n, s, i) => (n = n.filter((l) => !(s != null && s.includes(l.id)) && !(i != null && i.includes(l.id))), Vr(a, n, e, "center")), Ae(e.options, _0, "getCenterHeaderGroups")), e.getLeftHeaderGroups = we(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (a, n, s) => {
      var i;
      const l = (i = s == null ? void 0 : s.map((d) => n.find((f) => f.id === d)).filter(Boolean)) != null ? i : [];
      return Vr(a, l, e, "left");
    }, Ae(e.options, _0, "getLeftHeaderGroups")), e.getRightHeaderGroups = we(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (a, n, s) => {
      var i;
      const l = (i = s == null ? void 0 : s.map((d) => n.find((f) => f.id === d)).filter(Boolean)) != null ? i : [];
      return Vr(a, l, e, "right");
    }, Ae(e.options, _0, "getRightHeaderGroups")), e.getFooterGroups = we(() => [e.getHeaderGroups()], (a) => [...a].reverse(), Ae(e.options, _0, "getFooterGroups")), e.getLeftFooterGroups = we(() => [e.getLeftHeaderGroups()], (a) => [...a].reverse(), Ae(e.options, _0, "getLeftFooterGroups")), e.getCenterFooterGroups = we(() => [e.getCenterHeaderGroups()], (a) => [...a].reverse(), Ae(e.options, _0, "getCenterFooterGroups")), e.getRightFooterGroups = we(() => [e.getRightHeaderGroups()], (a) => [...a].reverse(), Ae(e.options, _0, "getRightFooterGroups")), e.getFlatHeaders = we(() => [e.getHeaderGroups()], (a) => a.map((n) => n.headers).flat(), Ae(e.options, _0, "getFlatHeaders")), e.getLeftFlatHeaders = we(() => [e.getLeftHeaderGroups()], (a) => a.map((n) => n.headers).flat(), Ae(e.options, _0, "getLeftFlatHeaders")), e.getCenterFlatHeaders = we(() => [e.getCenterHeaderGroups()], (a) => a.map((n) => n.headers).flat(), Ae(e.options, _0, "getCenterFlatHeaders")), e.getRightFlatHeaders = we(() => [e.getRightHeaderGroups()], (a) => a.map((n) => n.headers).flat(), Ae(e.options, _0, "getRightFlatHeaders")), e.getCenterLeafHeaders = we(() => [e.getCenterFlatHeaders()], (a) => a.filter((n) => {
      var s;
      return !((s = n.subHeaders) != null && s.length);
    }), Ae(e.options, _0, "getCenterLeafHeaders")), e.getLeftLeafHeaders = we(() => [e.getLeftFlatHeaders()], (a) => a.filter((n) => {
      var s;
      return !((s = n.subHeaders) != null && s.length);
    }), Ae(e.options, _0, "getLeftLeafHeaders")), e.getRightLeafHeaders = we(() => [e.getRightFlatHeaders()], (a) => a.filter((n) => {
      var s;
      return !((s = n.subHeaders) != null && s.length);
    }), Ae(e.options, _0, "getRightLeafHeaders")), e.getLeafHeaders = we(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (a, n, s) => {
      var i, l, d, f, u, m;
      return [...(i = (l = a[0]) == null ? void 0 : l.headers) != null ? i : [], ...(d = (f = n[0]) == null ? void 0 : f.headers) != null ? d : [], ...(u = (m = s[0]) == null ? void 0 : m.headers) != null ? u : []].map((g) => g.getLeafHeaders()).flat();
    }, Ae(e.options, _0, "getLeafHeaders"));
  }
};
function Vr(e, a, n, s) {
  var i, l;
  let d = 0;
  const f = function(y, p) {
    p === void 0 && (p = 1), d = Math.max(d, p), y.filter((v) => v.getIsVisible()).forEach((v) => {
      var x;
      (x = v.columns) != null && x.length && f(v.columns, p + 1);
    }, 0);
  };
  f(e);
  let u = [];
  const m = (y, p) => {
    const v = {
      depth: p,
      id: [s, `${p}`].filter(Boolean).join("_"),
      headers: []
    }, x = [];
    y.forEach((A) => {
      const S = [...x].reverse()[0], k = A.column.depth === v.depth;
      let E, R = !1;
      if (k && A.column.parent ? E = A.column.parent : (E = A.column, R = !0), S && (S == null ? void 0 : S.column) === E)
        S.subHeaders.push(A);
      else {
        const V = T1(n, E, {
          id: [s, p, E.id, A == null ? void 0 : A.id].filter(Boolean).join("_"),
          isPlaceholder: R,
          placeholderId: R ? `${x.filter((N) => N.column === E).length}` : void 0,
          depth: p,
          index: x.length
        });
        V.subHeaders.push(A), x.push(V);
      }
      v.headers.push(A), A.headerGroup = v;
    }), u.push(v), p > 0 && m(x, p - 1);
  }, g = a.map((y, p) => T1(n, y, {
    depth: d,
    index: p
  }));
  m(g, d - 1), u.reverse();
  const b = (y) => y.filter((v) => v.column.getIsVisible()).map((v) => {
    let x = 0, A = 0, S = [0];
    v.subHeaders && v.subHeaders.length ? (S = [], b(v.subHeaders).forEach((E) => {
      let {
        colSpan: R,
        rowSpan: V
      } = E;
      x += R, S.push(V);
    })) : x = 1;
    const k = Math.min(...S);
    return A = A + k, v.colSpan = x, v.rowSpan = A, {
      colSpan: x,
      rowSpan: A
    };
  });
  return b((i = (l = u[0]) == null ? void 0 : l.headers) != null ? i : []), u;
}
const Vn = (e, a, n, s, i, l, d) => {
  let f = {
    id: a,
    index: s,
    original: n,
    depth: i,
    parentId: d,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (u) => {
      if (f._valuesCache.hasOwnProperty(u))
        return f._valuesCache[u];
      const m = e.getColumn(u);
      if (m != null && m.accessorFn)
        return f._valuesCache[u] = m.accessorFn(f.original, s), f._valuesCache[u];
    },
    getUniqueValues: (u) => {
      if (f._uniqueValuesCache.hasOwnProperty(u))
        return f._uniqueValuesCache[u];
      const m = e.getColumn(u);
      if (m != null && m.accessorFn)
        return m.columnDef.getUniqueValues ? (f._uniqueValuesCache[u] = m.columnDef.getUniqueValues(f.original, s), f._uniqueValuesCache[u]) : (f._uniqueValuesCache[u] = [f.getValue(u)], f._uniqueValuesCache[u]);
    },
    renderValue: (u) => {
      var m;
      return (m = f.getValue(u)) != null ? m : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => sp(f.subRows, (u) => u.subRows),
    getParentRow: () => f.parentId ? e.getRow(f.parentId, !0) : void 0,
    getParentRows: () => {
      let u = [], m = f;
      for (; ; ) {
        const g = m.getParentRow();
        if (!g) break;
        u.push(g), m = g;
      }
      return u.reverse();
    },
    getAllCells: we(() => [e.getAllLeafColumns()], (u) => u.map((m) => ip(e, f, m, m.id)), Ae(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: we(() => [f.getAllCells()], (u) => u.reduce((m, g) => (m[g.column.id] = g, m), {}), Ae(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let u = 0; u < e._features.length; u++) {
    const m = e._features[u];
    m == null || m.createRow == null || m.createRow(f, e);
  }
  return f;
}, up = {
  createColumn: (e, a) => {
    e._getFacetedRowModel = a.options.getFacetedRowModel && a.options.getFacetedRowModel(a, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : a.getPreFilteredRowModel(), e._getFacetedUniqueValues = a.options.getFacetedUniqueValues && a.options.getFacetedUniqueValues(a, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = a.options.getFacetedMinMaxValues && a.options.getFacetedMinMaxValues(a, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ai = (e, a, n) => {
  var s, i;
  const l = n == null || (s = n.toString()) == null ? void 0 : s.toLowerCase();
  return !!(!((i = e.getValue(a)) == null || (i = i.toString()) == null || (i = i.toLowerCase()) == null) && i.includes(l));
};
ai.autoRemove = (e) => st(e);
const si = (e, a, n) => {
  var s;
  return !!(!((s = e.getValue(a)) == null || (s = s.toString()) == null) && s.includes(n));
};
si.autoRemove = (e) => st(e);
const ii = (e, a, n) => {
  var s;
  return ((s = e.getValue(a)) == null || (s = s.toString()) == null ? void 0 : s.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
ii.autoRemove = (e) => st(e);
const li = (e, a, n) => {
  var s;
  return (s = e.getValue(a)) == null ? void 0 : s.includes(n);
};
li.autoRemove = (e) => st(e);
const ci = (e, a, n) => !n.some((s) => {
  var i;
  return !((i = e.getValue(a)) != null && i.includes(s));
});
ci.autoRemove = (e) => st(e) || !(e != null && e.length);
const ui = (e, a, n) => n.some((s) => {
  var i;
  return (i = e.getValue(a)) == null ? void 0 : i.includes(s);
});
ui.autoRemove = (e) => st(e) || !(e != null && e.length);
const di = (e, a, n) => e.getValue(a) === n;
di.autoRemove = (e) => st(e);
const fi = (e, a, n) => e.getValue(a) == n;
fi.autoRemove = (e) => st(e);
const Tn = (e, a, n) => {
  let [s, i] = n;
  const l = e.getValue(a);
  return l >= s && l <= i;
};
Tn.resolveFilterValue = (e) => {
  let [a, n] = e, s = typeof a != "number" ? parseFloat(a) : a, i = typeof n != "number" ? parseFloat(n) : n, l = a === null || Number.isNaN(s) ? -1 / 0 : s, d = n === null || Number.isNaN(i) ? 1 / 0 : i;
  if (l > d) {
    const f = l;
    l = d, d = f;
  }
  return [l, d];
};
Tn.autoRemove = (e) => st(e) || st(e[0]) && st(e[1]);
const jt = {
  includesString: ai,
  includesStringSensitive: si,
  equalsString: ii,
  arrIncludes: li,
  arrIncludesAll: ci,
  arrIncludesSome: ui,
  equals: di,
  weakEquals: fi,
  inNumberRange: Tn
};
function st(e) {
  return e == null || e === "";
}
const dp = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: J0("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, a) => {
    e.getAutoFilterFn = () => {
      const n = a.getCoreRowModel().flatRows[0], s = n == null ? void 0 : n.getValue(e.id);
      return typeof s == "string" ? jt.includesString : typeof s == "number" ? jt.inNumberRange : typeof s == "boolean" || s !== null && typeof s == "object" ? jt.equals : Array.isArray(s) ? jt.arrIncludes : jt.weakEquals;
    }, e.getFilterFn = () => {
      var n, s;
      return po(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (s = a.options.filterFns) == null ? void 0 : s[e.columnDef.filterFn]) != null ? n : jt[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, s, i;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((s = a.options.enableColumnFilters) != null ? s : !0) && ((i = a.options.enableFilters) != null ? i : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = a.getState().columnFilters) == null || (n = n.find((s) => s.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, s;
      return (n = (s = a.getState().columnFilters) == null ? void 0 : s.findIndex((i) => i.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      a.setColumnFilters((s) => {
        const i = e.getFilterFn(), l = s == null ? void 0 : s.find((g) => g.id === e.id), d = Pt(n, l ? l.value : void 0);
        if (F1(i, d, e)) {
          var f;
          return (f = s == null ? void 0 : s.filter((g) => g.id !== e.id)) != null ? f : [];
        }
        const u = {
          id: e.id,
          value: d
        };
        if (l) {
          var m;
          return (m = s == null ? void 0 : s.map((g) => g.id === e.id ? u : g)) != null ? m : [];
        }
        return s != null && s.length ? [...s, u] : [u];
      });
    };
  },
  createRow: (e, a) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (a) => {
      const n = e.getAllLeafColumns(), s = (i) => {
        var l;
        return (l = Pt(a, i)) == null ? void 0 : l.filter((d) => {
          const f = n.find((u) => u.id === d.id);
          if (f) {
            const u = f.getFilterFn();
            if (F1(u, d.value, f))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(s);
    }, e.resetColumnFilters = (a) => {
      var n, s;
      e.setColumnFilters(a ? [] : (n = (s = e.initialState) == null ? void 0 : s.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function F1(e, a, n) {
  return (e && e.autoRemove ? e.autoRemove(a, n) : !1) || typeof a > "u" || typeof a == "string" && !a;
}
const fp = (e, a, n) => n.reduce((s, i) => {
  const l = i.getValue(e);
  return s + (typeof l == "number" ? l : 0);
}, 0), pp = (e, a, n) => {
  let s;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (s > l || s === void 0 && l >= l) && (s = l);
  }), s;
}, gp = (e, a, n) => {
  let s;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (s < l || s === void 0 && l >= l) && (s = l);
  }), s;
}, mp = (e, a, n) => {
  let s, i;
  return n.forEach((l) => {
    const d = l.getValue(e);
    d != null && (s === void 0 ? d >= d && (s = i = d) : (s > d && (s = d), i < d && (i = d)));
  }), [s, i];
}, hp = (e, a) => {
  let n = 0, s = 0;
  if (a.forEach((i) => {
    let l = i.getValue(e);
    l != null && (l = +l) >= l && (++n, s += l);
  }), n) return s / n;
}, vp = (e, a) => {
  if (!a.length)
    return;
  const n = a.map((l) => l.getValue(e));
  if (!ap(n))
    return;
  if (n.length === 1)
    return n[0];
  const s = Math.floor(n.length / 2), i = n.sort((l, d) => l - d);
  return n.length % 2 !== 0 ? i[s] : (i[s - 1] + i[s]) / 2;
}, yp = (e, a) => Array.from(new Set(a.map((n) => n.getValue(e))).values()), Cp = (e, a) => new Set(a.map((n) => n.getValue(e))).size, xp = (e, a) => a.length, zo = {
  sum: fp,
  min: pp,
  max: gp,
  extent: mp,
  mean: hp,
  median: vp,
  unique: yp,
  uniqueCount: Cp,
  count: xp
}, bp = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var a, n;
      return (a = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? a : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: J0("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, a) => {
    e.toggleGrouping = () => {
      a.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((s) => s !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, s;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((s = a.options.enableGrouping) != null ? s : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var n;
      return (n = a.getState().grouping) == null ? void 0 : n.includes(e.id);
    }, e.getGroupedIndex = () => {
      var n;
      return (n = a.getState().grouping) == null ? void 0 : n.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const n = e.getCanGroup();
      return () => {
        n && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const n = a.getCoreRowModel().flatRows[0], s = n == null ? void 0 : n.getValue(e.id);
      if (typeof s == "number")
        return zo.sum;
      if (Object.prototype.toString.call(s) === "[object Date]")
        return zo.extent;
    }, e.getAggregationFn = () => {
      var n, s;
      if (!e)
        throw new Error();
      return po(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (s = a.options.aggregationFns) == null ? void 0 : s[e.columnDef.aggregationFn]) != null ? n : zo[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (a) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(a), e.resetGrouping = (a) => {
      var n, s;
      e.setGrouping(a ? [] : (n = (s = e.initialState) == null ? void 0 : s.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, a) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const s = a.getColumn(n);
      return s != null && s.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = s.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, a, n, s) => {
    e.getIsGrouped = () => a.getIsGrouped() && a.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && a.getIsGrouped(), e.getIsAggregated = () => {
      var i;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((i = n.subRows) != null && i.length);
    };
  }
};
function wp(e, a, n) {
  if (!(a != null && a.length) || !n)
    return e;
  const s = e.filter((l) => !a.includes(l.id));
  return n === "remove" ? s : [...a.map((l) => e.find((d) => d.id === l)).filter(Boolean), ...s];
}
const Ap = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: J0("columnOrder", e)
  }),
  createColumn: (e, a) => {
    e.getIndex = we((n) => [er(a, n)], (n) => n.findIndex((s) => s.id === e.id), Ae(a.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var s;
      return ((s = er(a, n)[0]) == null ? void 0 : s.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var s;
      const i = er(a, n);
      return ((s = i[i.length - 1]) == null ? void 0 : s.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (a) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(a), e.resetColumnOrder = (a) => {
      var n;
      e.setColumnOrder(a ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = we(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (a, n, s) => (i) => {
      let l = [];
      if (!(a != null && a.length))
        l = i;
      else {
        const d = [...a], f = [...i];
        for (; f.length && d.length; ) {
          const u = d.shift(), m = f.findIndex((g) => g.id === u);
          m > -1 && l.push(f.splice(m, 1)[0]);
        }
        l = [...l, ...f];
      }
      return wp(l, n, s);
    }, Ae(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, Zo = () => ({
  left: [],
  right: []
}), Sp = {
  getInitialState: (e) => ({
    columnPinning: Zo(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: J0("columnPinning", e)
  }),
  createColumn: (e, a) => {
    e.pin = (n) => {
      const s = e.getLeafColumns().map((i) => i.id).filter(Boolean);
      a.setColumnPinning((i) => {
        var l, d;
        if (n === "right") {
          var f, u;
          return {
            left: ((f = i == null ? void 0 : i.left) != null ? f : []).filter((b) => !(s != null && s.includes(b))),
            right: [...((u = i == null ? void 0 : i.right) != null ? u : []).filter((b) => !(s != null && s.includes(b))), ...s]
          };
        }
        if (n === "left") {
          var m, g;
          return {
            left: [...((m = i == null ? void 0 : i.left) != null ? m : []).filter((b) => !(s != null && s.includes(b))), ...s],
            right: ((g = i == null ? void 0 : i.right) != null ? g : []).filter((b) => !(s != null && s.includes(b)))
          };
        }
        return {
          left: ((l = i == null ? void 0 : i.left) != null ? l : []).filter((b) => !(s != null && s.includes(b))),
          right: ((d = i == null ? void 0 : i.right) != null ? d : []).filter((b) => !(s != null && s.includes(b)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((s) => {
      var i, l, d;
      return ((i = s.columnDef.enablePinning) != null ? i : !0) && ((l = (d = a.options.enableColumnPinning) != null ? d : a.options.enablePinning) != null ? l : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((f) => f.id), {
        left: s,
        right: i
      } = a.getState().columnPinning, l = n.some((f) => s == null ? void 0 : s.includes(f)), d = n.some((f) => i == null ? void 0 : i.includes(f));
      return l ? "left" : d ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, s;
      const i = e.getIsPinned();
      return i ? (n = (s = a.getState().columnPinning) == null || (s = s[i]) == null ? void 0 : s.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, a) => {
    e.getCenterVisibleCells = we(() => [e._getAllVisibleCells(), a.getState().columnPinning.left, a.getState().columnPinning.right], (n, s, i) => {
      const l = [...s ?? [], ...i ?? []];
      return n.filter((d) => !l.includes(d.column.id));
    }, Ae(a.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = we(() => [e._getAllVisibleCells(), a.getState().columnPinning.left], (n, s) => (s ?? []).map((l) => n.find((d) => d.column.id === l)).filter(Boolean).map((l) => ({
      ...l,
      position: "left"
    })), Ae(a.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = we(() => [e._getAllVisibleCells(), a.getState().columnPinning.right], (n, s) => (s ?? []).map((l) => n.find((d) => d.column.id === l)).filter(Boolean).map((l) => ({
      ...l,
      position: "right"
    })), Ae(a.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (a) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(a), e.resetColumnPinning = (a) => {
      var n, s;
      return e.setColumnPinning(a ? Zo() : (n = (s = e.initialState) == null ? void 0 : s.columnPinning) != null ? n : Zo());
    }, e.getIsSomeColumnsPinned = (a) => {
      var n;
      const s = e.getState().columnPinning;
      if (!a) {
        var i, l;
        return !!((i = s.left) != null && i.length || (l = s.right) != null && l.length);
      }
      return !!((n = s[a]) != null && n.length);
    }, e.getLeftLeafColumns = we(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (a, n) => (n ?? []).map((s) => a.find((i) => i.id === s)).filter(Boolean), Ae(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = we(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (a, n) => (n ?? []).map((s) => a.find((i) => i.id === s)).filter(Boolean), Ae(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = we(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (a, n, s) => {
      const i = [...n ?? [], ...s ?? []];
      return a.filter((l) => !i.includes(l.id));
    }, Ae(e.options, "debugColumns", "getCenterLeafColumns"));
  }
}, Tr = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Uo = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), kp = {
  getDefaultColumnDef: () => Tr,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Uo(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: J0("columnSizing", e),
    onColumnSizingInfoChange: J0("columnSizingInfo", e)
  }),
  createColumn: (e, a) => {
    e.getSize = () => {
      var n, s, i;
      const l = a.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Tr.minSize, (s = l ?? e.columnDef.size) != null ? s : Tr.size), (i = e.columnDef.maxSize) != null ? i : Tr.maxSize);
    }, e.getStart = we((n) => [n, er(a, n), a.getState().columnSizing], (n, s) => s.slice(0, e.getIndex(n)).reduce((i, l) => i + l.getSize(), 0), Ae(a.options, "debugColumns", "getStart")), e.getAfter = we((n) => [n, er(a, n), a.getState().columnSizing], (n, s) => s.slice(e.getIndex(n) + 1).reduce((i, l) => i + l.getSize(), 0), Ae(a.options, "debugColumns", "getAfter")), e.resetSize = () => {
      a.setColumnSizing((n) => {
        let {
          [e.id]: s,
          ...i
        } = n;
        return i;
      });
    }, e.getCanResize = () => {
      var n, s;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((s = a.options.enableColumnResizing) != null ? s : !0);
    }, e.getIsResizing = () => a.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, a) => {
    e.getSize = () => {
      let n = 0;
      const s = (i) => {
        if (i.subHeaders.length)
          i.subHeaders.forEach(s);
        else {
          var l;
          n += (l = i.column.getSize()) != null ? l : 0;
        }
      };
      return s(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const s = a.getColumn(e.column.id), i = s == null ? void 0 : s.getCanResize();
      return (l) => {
        if (!s || !i || (l.persist == null || l.persist(), Yo(l) && l.touches && l.touches.length > 1))
          return;
        const d = e.getSize(), f = e ? e.getLeafHeaders().map((S) => [S.column.id, S.column.getSize()]) : [[s.id, s.getSize()]], u = Yo(l) ? Math.round(l.touches[0].clientX) : l.clientX, m = {}, g = (S, k) => {
          typeof k == "number" && (a.setColumnSizingInfo((E) => {
            var R, V;
            const N = a.options.columnResizeDirection === "rtl" ? -1 : 1, L = (k - ((R = E == null ? void 0 : E.startOffset) != null ? R : 0)) * N, F = Math.max(L / ((V = E == null ? void 0 : E.startSize) != null ? V : 0), -0.999999);
            return E.columnSizingStart.forEach((Q) => {
              let [G, J] = Q;
              m[G] = Math.round(Math.max(J + J * F, 0) * 100) / 100;
            }), {
              ...E,
              deltaOffset: L,
              deltaPercentage: F
            };
          }), (a.options.columnResizeMode === "onChange" || S === "end") && a.setColumnSizing((E) => ({
            ...E,
            ...m
          })));
        }, b = (S) => g("move", S), y = (S) => {
          g("end", S), a.setColumnSizingInfo((k) => ({
            ...k,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, p = n || typeof document < "u" ? document : null, v = {
          moveHandler: (S) => b(S.clientX),
          upHandler: (S) => {
            p == null || p.removeEventListener("mousemove", v.moveHandler), p == null || p.removeEventListener("mouseup", v.upHandler), y(S.clientX);
          }
        }, x = {
          moveHandler: (S) => (S.cancelable && (S.preventDefault(), S.stopPropagation()), b(S.touches[0].clientX), !1),
          upHandler: (S) => {
            var k;
            p == null || p.removeEventListener("touchmove", x.moveHandler), p == null || p.removeEventListener("touchend", x.upHandler), S.cancelable && (S.preventDefault(), S.stopPropagation()), y((k = S.touches[0]) == null ? void 0 : k.clientX);
          }
        }, A = jp() ? {
          passive: !1
        } : !1;
        Yo(l) ? (p == null || p.addEventListener("touchmove", x.moveHandler, A), p == null || p.addEventListener("touchend", x.upHandler, A)) : (p == null || p.addEventListener("mousemove", v.moveHandler, A), p == null || p.addEventListener("mouseup", v.upHandler, A)), a.setColumnSizingInfo((S) => ({
          ...S,
          startOffset: u,
          startSize: d,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: f,
          isResizingColumn: s.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (a) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(a), e.setColumnSizingInfo = (a) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(a), e.resetColumnSizing = (a) => {
      var n;
      e.setColumnSizing(a ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (a) => {
      var n;
      e.setColumnSizingInfo(a ? Uo() : (n = e.initialState.columnSizingInfo) != null ? n : Uo());
    }, e.getTotalSize = () => {
      var a, n;
      return (a = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((s, i) => s + i.getSize(), 0)) != null ? a : 0;
    }, e.getLeftTotalSize = () => {
      var a, n;
      return (a = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((s, i) => s + i.getSize(), 0)) != null ? a : 0;
    }, e.getCenterTotalSize = () => {
      var a, n;
      return (a = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((s, i) => s + i.getSize(), 0)) != null ? a : 0;
    }, e.getRightTotalSize = () => {
      var a, n;
      return (a = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((s, i) => s + i.getSize(), 0)) != null ? a : 0;
    };
  }
};
let Fr = null;
function jp() {
  if (typeof Fr == "boolean") return Fr;
  let e = !1;
  try {
    const a = {
      get passive() {
        return e = !0, !1;
      }
    }, n = () => {
    };
    window.addEventListener("test", n, a), window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return Fr = e, Fr;
}
function Yo(e) {
  return e.type === "touchstart";
}
const Bp = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: J0("columnVisibility", e)
  }),
  createColumn: (e, a) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && a.setColumnVisibility((s) => ({
        ...s,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, s;
      const i = e.columns;
      return (n = i.length ? i.some((l) => l.getIsVisible()) : (s = a.getState().columnVisibility) == null ? void 0 : s[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, s;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((s = a.options.enableHiding) != null ? s : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, a) => {
    e._getAllVisibleCells = we(() => [e.getAllCells(), a.getState().columnVisibility], (n) => n.filter((s) => s.column.getIsVisible()), Ae(a.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = we(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, s, i) => [...n, ...s, ...i], Ae(a.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const a = (n, s) => we(() => [s(), s().filter((i) => i.getIsVisible()).map((i) => i.id).join("_")], (i) => i.filter((l) => l.getIsVisible == null ? void 0 : l.getIsVisible()), Ae(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = a("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = a("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = a("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = a("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = a("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var s;
      e.setColumnVisibility(n ? {} : (s = e.initialState.columnVisibility) != null ? s : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var s;
      n = (s = n) != null ? s : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((i, l) => ({
        ...i,
        [l.id]: n || !(l.getCanHide != null && l.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var s;
      e.toggleAllColumnsVisible((s = n.target) == null ? void 0 : s.checked);
    };
  }
};
function er(e, a) {
  return a ? a === "center" ? e.getCenterVisibleLeafColumns() : a === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Ep = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Dp = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: J0("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (a) => {
      var n;
      const s = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[a.id]) == null ? void 0 : n.getValue();
      return typeof s == "string" || typeof s == "number";
    }
  }),
  createColumn: (e, a) => {
    e.getCanGlobalFilter = () => {
      var n, s, i, l;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((s = a.options.enableGlobalFilter) != null ? s : !0) && ((i = a.options.enableFilters) != null ? i : !0) && ((l = a.options.getColumnCanGlobalFilter == null ? void 0 : a.options.getColumnCanGlobalFilter(e)) != null ? l : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => jt.includesString, e.getGlobalFilterFn = () => {
      var a, n;
      const {
        globalFilterFn: s
      } = e.options;
      return po(s) ? s : s === "auto" ? e.getGlobalAutoFilterFn() : (a = (n = e.options.filterFns) == null ? void 0 : n[s]) != null ? a : jt[s];
    }, e.setGlobalFilter = (a) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(a);
    }, e.resetGlobalFilter = (a) => {
      e.setGlobalFilter(a ? void 0 : e.initialState.globalFilter);
    };
  }
}, Mp = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: J0("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let a = !1, n = !1;
    e._autoResetExpanded = () => {
      var s, i;
      if (!a) {
        e._queue(() => {
          a = !0;
        });
        return;
      }
      if ((s = (i = e.options.autoResetAll) != null ? i : e.options.autoResetExpanded) != null ? s : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (s) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(s), e.toggleAllRowsExpanded = (s) => {
      s ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (s) => {
      var i, l;
      e.setExpanded(s ? {} : (i = (l = e.initialState) == null ? void 0 : l.expanded) != null ? i : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((s) => s.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (s) => {
      s.persist == null || s.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const s = e.getState().expanded;
      return s === !0 || Object.values(s).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const s = e.getState().expanded;
      return typeof s == "boolean" ? s === !0 : !(!Object.keys(s).length || e.getRowModel().flatRows.some((i) => !i.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let s = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((l) => {
        const d = l.split(".");
        s = Math.max(s, d.length);
      }), s;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, a) => {
    e.toggleExpanded = (n) => {
      a.setExpanded((s) => {
        var i;
        const l = s === !0 ? !0 : !!(s != null && s[e.id]);
        let d = {};
        if (s === !0 ? Object.keys(a.getRowModel().rowsById).forEach((f) => {
          d[f] = !0;
        }) : d = s, n = (i = n) != null ? i : !l, !l && n)
          return {
            ...d,
            [e.id]: !0
          };
        if (l && !n) {
          const {
            [e.id]: f,
            ...u
          } = d;
          return u;
        }
        return s;
      });
    }, e.getIsExpanded = () => {
      var n;
      const s = a.getState().expanded;
      return !!((n = a.options.getIsRowExpanded == null ? void 0 : a.options.getIsRowExpanded(e)) != null ? n : s === !0 || s != null && s[e.id]);
    }, e.getCanExpand = () => {
      var n, s, i;
      return (n = a.options.getRowCanExpand == null ? void 0 : a.options.getRowCanExpand(e)) != null ? n : ((s = a.options.enableExpanding) != null ? s : !0) && !!((i = e.subRows) != null && i.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, s = e;
      for (; n && s.parentId; )
        s = a.getRow(s.parentId, !0), n = s.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, ln = 0, cn = 10, $o = () => ({
  pageIndex: ln,
  pageSize: cn
}), Hp = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...$o(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: J0("pagination", e)
  }),
  createTable: (e) => {
    let a = !1, n = !1;
    e._autoResetPageIndex = () => {
      var s, i;
      if (!a) {
        e._queue(() => {
          a = !0;
        });
        return;
      }
      if ((s = (i = e.options.autoResetAll) != null ? i : e.options.autoResetPageIndex) != null ? s : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (s) => {
      const i = (l) => Pt(s, l);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(i);
    }, e.resetPagination = (s) => {
      var i;
      e.setPagination(s ? $o() : (i = e.initialState.pagination) != null ? i : $o());
    }, e.setPageIndex = (s) => {
      e.setPagination((i) => {
        let l = Pt(s, i.pageIndex);
        const d = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return l = Math.max(0, Math.min(l, d)), {
          ...i,
          pageIndex: l
        };
      });
    }, e.resetPageIndex = (s) => {
      var i, l;
      e.setPageIndex(s ? ln : (i = (l = e.initialState) == null || (l = l.pagination) == null ? void 0 : l.pageIndex) != null ? i : ln);
    }, e.resetPageSize = (s) => {
      var i, l;
      e.setPageSize(s ? cn : (i = (l = e.initialState) == null || (l = l.pagination) == null ? void 0 : l.pageSize) != null ? i : cn);
    }, e.setPageSize = (s) => {
      e.setPagination((i) => {
        const l = Math.max(1, Pt(s, i.pageSize)), d = i.pageSize * i.pageIndex, f = Math.floor(d / l);
        return {
          ...i,
          pageIndex: f,
          pageSize: l
        };
      });
    }, e.setPageCount = (s) => e.setPagination((i) => {
      var l;
      let d = Pt(s, (l = e.options.pageCount) != null ? l : -1);
      return typeof d == "number" && (d = Math.max(-1, d)), {
        ...i,
        pageCount: d
      };
    }), e.getPageOptions = we(() => [e.getPageCount()], (s) => {
      let i = [];
      return s && s > 0 && (i = [...new Array(s)].fill(null).map((l, d) => d)), i;
    }, Ae(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: s
      } = e.getState().pagination, i = e.getPageCount();
      return i === -1 ? !0 : i === 0 ? !1 : s < i - 1;
    }, e.previousPage = () => e.setPageIndex((s) => s - 1), e.nextPage = () => e.setPageIndex((s) => s + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var s;
      return (s = e.options.pageCount) != null ? s : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var s;
      return (s = e.options.rowCount) != null ? s : e.getPrePaginationRowModel().rows.length;
    };
  }
}, Wo = () => ({
  top: [],
  bottom: []
}), Rp = {
  getInitialState: (e) => ({
    rowPinning: Wo(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: J0("rowPinning", e)
  }),
  createRow: (e, a) => {
    e.pin = (n, s, i) => {
      const l = s ? e.getLeafRows().map((u) => {
        let {
          id: m
        } = u;
        return m;
      }) : [], d = i ? e.getParentRows().map((u) => {
        let {
          id: m
        } = u;
        return m;
      }) : [], f = /* @__PURE__ */ new Set([...d, e.id, ...l]);
      a.setRowPinning((u) => {
        var m, g;
        if (n === "bottom") {
          var b, y;
          return {
            top: ((b = u == null ? void 0 : u.top) != null ? b : []).filter((x) => !(f != null && f.has(x))),
            bottom: [...((y = u == null ? void 0 : u.bottom) != null ? y : []).filter((x) => !(f != null && f.has(x))), ...Array.from(f)]
          };
        }
        if (n === "top") {
          var p, v;
          return {
            top: [...((p = u == null ? void 0 : u.top) != null ? p : []).filter((x) => !(f != null && f.has(x))), ...Array.from(f)],
            bottom: ((v = u == null ? void 0 : u.bottom) != null ? v : []).filter((x) => !(f != null && f.has(x)))
          };
        }
        return {
          top: ((m = u == null ? void 0 : u.top) != null ? m : []).filter((x) => !(f != null && f.has(x))),
          bottom: ((g = u == null ? void 0 : u.bottom) != null ? g : []).filter((x) => !(f != null && f.has(x)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: s,
        enablePinning: i
      } = a.options;
      return typeof s == "function" ? s(e) : (n = s ?? i) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: s,
        bottom: i
      } = a.getState().rowPinning, l = n.some((f) => s == null ? void 0 : s.includes(f)), d = n.some((f) => i == null ? void 0 : i.includes(f));
      return l ? "top" : d ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, s;
      const i = e.getIsPinned();
      if (!i) return -1;
      const l = (n = i === "top" ? a.getTopRows() : a.getBottomRows()) == null ? void 0 : n.map((d) => {
        let {
          id: f
        } = d;
        return f;
      });
      return (s = l == null ? void 0 : l.indexOf(e.id)) != null ? s : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (a) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(a), e.resetRowPinning = (a) => {
      var n, s;
      return e.setRowPinning(a ? Wo() : (n = (s = e.initialState) == null ? void 0 : s.rowPinning) != null ? n : Wo());
    }, e.getIsSomeRowsPinned = (a) => {
      var n;
      const s = e.getState().rowPinning;
      if (!a) {
        var i, l;
        return !!((i = s.top) != null && i.length || (l = s.bottom) != null && l.length);
      }
      return !!((n = s[a]) != null && n.length);
    }, e._getPinnedRows = (a, n, s) => {
      var i;
      return ((i = e.options.keepPinnedRows) == null || i ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((d) => {
          const f = e.getRow(d, !0);
          return f.getIsAllParentsExpanded() ? f : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((d) => a.find((f) => f.id === d))
      )).filter(Boolean).map((d) => ({
        ...d,
        position: s
      }));
    }, e.getTopRows = we(() => [e.getRowModel().rows, e.getState().rowPinning.top], (a, n) => e._getPinnedRows(a, n, "top"), Ae(e.options, "debugRows", "getTopRows")), e.getBottomRows = we(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (a, n) => e._getPinnedRows(a, n, "bottom"), Ae(e.options, "debugRows", "getBottomRows")), e.getCenterRows = we(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (a, n, s) => {
      const i = /* @__PURE__ */ new Set([...n ?? [], ...s ?? []]);
      return a.filter((l) => !i.has(l.id));
    }, Ae(e.options, "debugRows", "getCenterRows"));
  }
}, Lp = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: J0("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (a) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(a), e.resetRowSelection = (a) => {
      var n;
      return e.setRowSelection(a ? {} : (n = e.initialState.rowSelection) != null ? n : {});
    }, e.toggleAllRowsSelected = (a) => {
      e.setRowSelection((n) => {
        a = typeof a < "u" ? a : !e.getIsAllRowsSelected();
        const s = {
          ...n
        }, i = e.getPreGroupedRowModel().flatRows;
        return a ? i.forEach((l) => {
          l.getCanSelect() && (s[l.id] = !0);
        }) : i.forEach((l) => {
          delete s[l.id];
        }), s;
      });
    }, e.toggleAllPageRowsSelected = (a) => e.setRowSelection((n) => {
      const s = typeof a < "u" ? a : !e.getIsAllPageRowsSelected(), i = {
        ...n
      };
      return e.getRowModel().rows.forEach((l) => {
        un(i, l.id, s, !0, e);
      }), i;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = we(() => [e.getState().rowSelection, e.getCoreRowModel()], (a, n) => Object.keys(a).length ? Xo(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, Ae(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = we(() => [e.getState().rowSelection, e.getFilteredRowModel()], (a, n) => Object.keys(a).length ? Xo(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, Ae(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = we(() => [e.getState().rowSelection, e.getSortedRowModel()], (a, n) => Object.keys(a).length ? Xo(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, Ae(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const a = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let s = !!(a.length && Object.keys(n).length);
      return s && a.some((i) => i.getCanSelect() && !n[i.id]) && (s = !1), s;
    }, e.getIsAllPageRowsSelected = () => {
      const a = e.getPaginationRowModel().flatRows.filter((i) => i.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let s = !!a.length;
      return s && a.some((i) => !n[i.id]) && (s = !1), s;
    }, e.getIsSomeRowsSelected = () => {
      var a;
      const n = Object.keys((a = e.getState().rowSelection) != null ? a : {}).length;
      return n > 0 && n < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const a = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : a.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (a) => {
      e.toggleAllRowsSelected(a.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (a) => {
      e.toggleAllPageRowsSelected(a.target.checked);
    };
  },
  createRow: (e, a) => {
    e.toggleSelected = (n, s) => {
      const i = e.getIsSelected();
      a.setRowSelection((l) => {
        var d;
        if (n = typeof n < "u" ? n : !i, e.getCanSelect() && i === n)
          return l;
        const f = {
          ...l
        };
        return un(f, e.id, n, (d = s == null ? void 0 : s.selectChildren) != null ? d : !0, a), f;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = a.getState();
      return Fn(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = a.getState();
      return dn(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = a.getState();
      return dn(e, n) === "all";
    }, e.getCanSelect = () => {
      var n;
      return typeof a.options.enableRowSelection == "function" ? a.options.enableRowSelection(e) : (n = a.options.enableRowSelection) != null ? n : !0;
    }, e.getCanSelectSubRows = () => {
      var n;
      return typeof a.options.enableSubRowSelection == "function" ? a.options.enableSubRowSelection(e) : (n = a.options.enableSubRowSelection) != null ? n : !0;
    }, e.getCanMultiSelect = () => {
      var n;
      return typeof a.options.enableMultiRowSelection == "function" ? a.options.enableMultiRowSelection(e) : (n = a.options.enableMultiRowSelection) != null ? n : !0;
    }, e.getToggleSelectedHandler = () => {
      const n = e.getCanSelect();
      return (s) => {
        var i;
        n && e.toggleSelected((i = s.target) == null ? void 0 : i.checked);
      };
    };
  }
}, un = (e, a, n, s, i) => {
  var l;
  const d = i.getRow(a, !0);
  n ? (d.getCanMultiSelect() || Object.keys(e).forEach((f) => delete e[f]), d.getCanSelect() && (e[a] = !0)) : delete e[a], s && (l = d.subRows) != null && l.length && d.getCanSelectSubRows() && d.subRows.forEach((f) => un(e, f.id, n, s, i));
};
function Xo(e, a) {
  const n = e.getState().rowSelection, s = [], i = {}, l = function(d, f) {
    return d.map((u) => {
      var m;
      const g = Fn(u, n);
      if (g && (s.push(u), i[u.id] = u), (m = u.subRows) != null && m.length && (u = {
        ...u,
        subRows: l(u.subRows)
      }), g)
        return u;
    }).filter(Boolean);
  };
  return {
    rows: l(a.rows),
    flatRows: s,
    rowsById: i
  };
}
function Fn(e, a) {
  var n;
  return (n = a[e.id]) != null ? n : !1;
}
function dn(e, a, n) {
  var s;
  if (!((s = e.subRows) != null && s.length)) return !1;
  let i = !0, l = !1;
  return e.subRows.forEach((d) => {
    if (!(l && !i) && (d.getCanSelect() && (Fn(d, a) ? l = !0 : i = !1), d.subRows && d.subRows.length)) {
      const f = dn(d, a);
      f === "all" ? l = !0 : (f === "some" && (l = !0), i = !1);
    }
  }), i ? "all" : l ? "some" : !1;
}
const fn = /([0-9]+)/gm, Ip = (e, a, n) => pi(Tt(e.getValue(n)).toLowerCase(), Tt(a.getValue(n)).toLowerCase()), Np = (e, a, n) => pi(Tt(e.getValue(n)), Tt(a.getValue(n))), Pp = (e, a, n) => _n(Tt(e.getValue(n)).toLowerCase(), Tt(a.getValue(n)).toLowerCase()), Vp = (e, a, n) => _n(Tt(e.getValue(n)), Tt(a.getValue(n))), Tp = (e, a, n) => {
  const s = e.getValue(n), i = a.getValue(n);
  return s > i ? 1 : s < i ? -1 : 0;
}, Fp = (e, a, n) => _n(e.getValue(n), a.getValue(n));
function _n(e, a) {
  return e === a ? 0 : e > a ? 1 : -1;
}
function Tt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function pi(e, a) {
  const n = e.split(fn).filter(Boolean), s = a.split(fn).filter(Boolean);
  for (; n.length && s.length; ) {
    const i = n.shift(), l = s.shift(), d = parseInt(i, 10), f = parseInt(l, 10), u = [d, f].sort();
    if (isNaN(u[0])) {
      if (i > l)
        return 1;
      if (l > i)
        return -1;
      continue;
    }
    if (isNaN(u[1]))
      return isNaN(d) ? -1 : 1;
    if (d > f)
      return 1;
    if (f > d)
      return -1;
  }
  return n.length - s.length;
}
const K2 = {
  alphanumeric: Ip,
  alphanumericCaseSensitive: Np,
  text: Pp,
  textCaseSensitive: Vp,
  datetime: Tp,
  basic: Fp
}, _p = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: J0("sorting", e),
    isMultiSortEvent: (a) => a.shiftKey
  }),
  createColumn: (e, a) => {
    e.getAutoSortingFn = () => {
      const n = a.getFilteredRowModel().flatRows.slice(10);
      let s = !1;
      for (const i of n) {
        const l = i == null ? void 0 : i.getValue(e.id);
        if (Object.prototype.toString.call(l) === "[object Date]")
          return K2.datetime;
        if (typeof l == "string" && (s = !0, l.split(fn).length > 1))
          return K2.alphanumeric;
      }
      return s ? K2.text : K2.basic;
    }, e.getAutoSortDir = () => {
      const n = a.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, s;
      if (!e)
        throw new Error();
      return po(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (s = a.options.sortingFns) == null ? void 0 : s[e.columnDef.sortingFn]) != null ? n : K2[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, s) => {
      const i = e.getNextSortingOrder(), l = typeof n < "u" && n !== null;
      a.setSorting((d) => {
        const f = d == null ? void 0 : d.find((p) => p.id === e.id), u = d == null ? void 0 : d.findIndex((p) => p.id === e.id);
        let m = [], g, b = l ? n : i === "desc";
        if (d != null && d.length && e.getCanMultiSort() && s ? f ? g = "toggle" : g = "add" : d != null && d.length && u !== d.length - 1 ? g = "replace" : f ? g = "toggle" : g = "replace", g === "toggle" && (l || i || (g = "remove")), g === "add") {
          var y;
          m = [...d, {
            id: e.id,
            desc: b
          }], m.splice(0, m.length - ((y = a.options.maxMultiSortColCount) != null ? y : Number.MAX_SAFE_INTEGER));
        } else g === "toggle" ? m = d.map((p) => p.id === e.id ? {
          ...p,
          desc: b
        } : p) : g === "remove" ? m = d.filter((p) => p.id !== e.id) : m = [{
          id: e.id,
          desc: b
        }];
        return m;
      });
    }, e.getFirstSortDir = () => {
      var n, s;
      return ((n = (s = e.columnDef.sortDescFirst) != null ? s : a.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var s, i;
      const l = e.getFirstSortDir(), d = e.getIsSorted();
      return d ? d !== l && ((s = a.options.enableSortingRemoval) == null || s) && // If enableSortRemove, enable in general
      (!(n && (i = a.options.enableMultiRemove) != null) || i) ? !1 : d === "desc" ? "asc" : "desc" : l;
    }, e.getCanSort = () => {
      var n, s;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((s = a.options.enableSorting) != null ? s : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, s;
      return (n = (s = e.columnDef.enableMultiSort) != null ? s : a.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const s = (n = a.getState().sorting) == null ? void 0 : n.find((i) => i.id === e.id);
      return s ? s.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, s;
      return (n = (s = a.getState().sorting) == null ? void 0 : s.findIndex((i) => i.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      a.setSorting((n) => n != null && n.length ? n.filter((s) => s.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (s) => {
        n && (s.persist == null || s.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? a.options.isMultiSortEvent == null ? void 0 : a.options.isMultiSortEvent(s) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (a) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(a), e.resetSorting = (a) => {
      var n, s;
      e.setSorting(a ? [] : (n = (s = e.initialState) == null ? void 0 : s.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, Op = [
  cp,
  Bp,
  Ap,
  Sp,
  up,
  dp,
  Ep,
  //depends on ColumnFaceting
  Dp,
  //depends on ColumnFiltering
  _p,
  bp,
  //depends on RowSorting
  Mp,
  Hp,
  Rp,
  Lp,
  kp
];
function Gp(e) {
  var a, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const s = [...Op, ...(a = e._features) != null ? a : []];
  let i = {
    _features: s
  };
  const l = i._features.reduce((y, p) => Object.assign(y, p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(i)), {}), d = (y) => i.options.mergeOptions ? i.options.mergeOptions(l, y) : {
    ...l,
    ...y
  };
  let u = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  i._features.forEach((y) => {
    var p;
    u = (p = y.getInitialState == null ? void 0 : y.getInitialState(u)) != null ? p : u;
  });
  const m = [];
  let g = !1;
  const b = {
    _features: s,
    options: {
      ...l,
      ...e
    },
    initialState: u,
    _queue: (y) => {
      m.push(y), g || (g = !0, Promise.resolve().then(() => {
        for (; m.length; )
          m.shift()();
        g = !1;
      }).catch((p) => setTimeout(() => {
        throw p;
      })));
    },
    reset: () => {
      i.setState(i.initialState);
    },
    setOptions: (y) => {
      const p = Pt(y, i.options);
      i.options = d(p);
    },
    getState: () => i.options.state,
    setState: (y) => {
      i.options.onStateChange == null || i.options.onStateChange(y);
    },
    _getRowId: (y, p, v) => {
      var x;
      return (x = i.options.getRowId == null ? void 0 : i.options.getRowId(y, p, v)) != null ? x : `${v ? [v.id, p].join(".") : p}`;
    },
    getCoreRowModel: () => (i._getCoreRowModel || (i._getCoreRowModel = i.options.getCoreRowModel(i)), i._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => i.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (y, p) => {
      let v = (p ? i.getPrePaginationRowModel() : i.getRowModel()).rowsById[y];
      if (!v && (v = i.getCoreRowModel().rowsById[y], !v))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${y}`) : new Error();
      return v;
    },
    _getDefaultColumnDef: we(() => [i.options.defaultColumn], (y) => {
      var p;
      return y = (p = y) != null ? p : {}, {
        header: (v) => {
          const x = v.header.column.columnDef;
          return x.accessorKey ? x.accessorKey : x.accessorFn ? x.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (v) => {
          var x, A;
          return (x = (A = v.renderValue()) == null || A.toString == null ? void 0 : A.toString()) != null ? x : null;
        },
        ...i._features.reduce((v, x) => Object.assign(v, x.getDefaultColumnDef == null ? void 0 : x.getDefaultColumnDef()), {}),
        ...y
      };
    }, Ae(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => i.options.columns,
    getAllColumns: we(() => [i._getColumnDefs()], (y) => {
      const p = function(v, x, A) {
        return A === void 0 && (A = 0), v.map((S) => {
          const k = lp(i, S, A, x), E = S;
          return k.columns = E.columns ? p(E.columns, k, A + 1) : [], k;
        });
      };
      return p(y);
    }, Ae(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: we(() => [i.getAllColumns()], (y) => y.flatMap((p) => p.getFlatColumns()), Ae(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: we(() => [i.getAllFlatColumns()], (y) => y.reduce((p, v) => (p[v.id] = v, p), {}), Ae(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: we(() => [i.getAllColumns(), i._getOrderColumnsFn()], (y, p) => {
      let v = y.flatMap((x) => x.getLeafColumns());
      return p(v);
    }, Ae(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (y) => {
      const p = i._getAllFlatColumnsById()[y];
      return process.env.NODE_ENV !== "production" && !p && console.error(`[Table] Column with id '${y}' does not exist.`), p;
    }
  };
  Object.assign(i, b);
  for (let y = 0; y < i._features.length; y++) {
    const p = i._features[y];
    p == null || p.createTable == null || p.createTable(i);
  }
  return i;
}
function Qp() {
  return (e) => we(() => [e.options.data], (a) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, s = function(i, l, d) {
      l === void 0 && (l = 0);
      const f = [];
      for (let m = 0; m < i.length; m++) {
        const g = Vn(e, e._getRowId(i[m], m, d), i[m], m, l, void 0, d == null ? void 0 : d.id);
        if (n.flatRows.push(g), n.rowsById[g.id] = g, f.push(g), e.options.getSubRows) {
          var u;
          g.originalSubRows = e.options.getSubRows(i[m], m), (u = g.originalSubRows) != null && u.length && (g.subRows = s(g.originalSubRows, l + 1, g));
        }
      }
      return f;
    };
    return n.rows = s(a), n;
  }, Ae(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function zp() {
  return (e) => we(() => [e.getState().expanded, e.getPreExpandedRowModel(), e.options.paginateExpandedRows], (a, n, s) => !n.rows.length || a !== !0 && !Object.keys(a ?? {}).length || !s ? n : gi(n), Ae(e.options, "debugTable", "getExpandedRowModel"));
}
function gi(e) {
  const a = [], n = (s) => {
    var i;
    a.push(s), (i = s.subRows) != null && i.length && s.getIsExpanded() && s.subRows.forEach(n);
  };
  return e.rows.forEach(n), {
    rows: a,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function Zp(e, a, n) {
  return n.options.filterFromLeafRows ? Up(e, a, n) : Yp(e, a, n);
}
function Up(e, a, n) {
  var s;
  const i = [], l = {}, d = (s = n.options.maxLeafRowFilterDepth) != null ? s : 100, f = function(u, m) {
    m === void 0 && (m = 0);
    const g = [];
    for (let y = 0; y < u.length; y++) {
      var b;
      let p = u[y];
      const v = Vn(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
      if (v.columnFilters = p.columnFilters, (b = p.subRows) != null && b.length && m < d) {
        if (v.subRows = f(p.subRows, m + 1), p = v, a(p) && !v.subRows.length) {
          g.push(p), l[p.id] = p, i.push(p);
          continue;
        }
        if (a(p) || v.subRows.length) {
          g.push(p), l[p.id] = p, i.push(p);
          continue;
        }
      } else
        p = v, a(p) && (g.push(p), l[p.id] = p, i.push(p));
    }
    return g;
  };
  return {
    rows: f(e),
    flatRows: i,
    rowsById: l
  };
}
function Yp(e, a, n) {
  var s;
  const i = [], l = {}, d = (s = n.options.maxLeafRowFilterDepth) != null ? s : 100, f = function(u, m) {
    m === void 0 && (m = 0);
    const g = [];
    for (let y = 0; y < u.length; y++) {
      let p = u[y];
      if (a(p)) {
        var b;
        if ((b = p.subRows) != null && b.length && m < d) {
          const x = Vn(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
          x.subRows = f(p.subRows, m + 1), p = x;
        }
        g.push(p), i.push(p), l[p.id] = p;
      }
    }
    return g;
  };
  return {
    rows: f(e),
    flatRows: i,
    rowsById: l
  };
}
function $p() {
  return (e) => we(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (a, n, s) => {
    if (!a.rows.length || !(n != null && n.length) && !s) {
      for (let y = 0; y < a.flatRows.length; y++)
        a.flatRows[y].columnFilters = {}, a.flatRows[y].columnFiltersMeta = {};
      return a;
    }
    const i = [], l = [];
    (n ?? []).forEach((y) => {
      var p;
      const v = e.getColumn(y.id);
      if (!v)
        return;
      const x = v.getFilterFn();
      if (!x) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${v.id}.`);
        return;
      }
      i.push({
        id: y.id,
        filterFn: x,
        resolvedValue: (p = x.resolveFilterValue == null ? void 0 : x.resolveFilterValue(y.value)) != null ? p : y.value
      });
    });
    const d = (n ?? []).map((y) => y.id), f = e.getGlobalFilterFn(), u = e.getAllLeafColumns().filter((y) => y.getCanGlobalFilter());
    s && f && u.length && (d.push("__global__"), u.forEach((y) => {
      var p;
      l.push({
        id: y.id,
        filterFn: f,
        resolvedValue: (p = f.resolveFilterValue == null ? void 0 : f.resolveFilterValue(s)) != null ? p : s
      });
    }));
    let m, g;
    for (let y = 0; y < a.flatRows.length; y++) {
      const p = a.flatRows[y];
      if (p.columnFilters = {}, i.length)
        for (let v = 0; v < i.length; v++) {
          m = i[v];
          const x = m.id;
          p.columnFilters[x] = m.filterFn(p, x, m.resolvedValue, (A) => {
            p.columnFiltersMeta[x] = A;
          });
        }
      if (l.length) {
        for (let v = 0; v < l.length; v++) {
          g = l[v];
          const x = g.id;
          if (g.filterFn(p, x, g.resolvedValue, (A) => {
            p.columnFiltersMeta[x] = A;
          })) {
            p.columnFilters.__global__ = !0;
            break;
          }
        }
        p.columnFilters.__global__ !== !0 && (p.columnFilters.__global__ = !1);
      }
    }
    const b = (y) => {
      for (let p = 0; p < d.length; p++)
        if (y.columnFilters[d[p]] === !1)
          return !1;
      return !0;
    };
    return Zp(a.rows, b, e);
  }, Ae(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function Wp(e) {
  return (a) => we(() => [a.getState().pagination, a.getPrePaginationRowModel(), a.options.paginateExpandedRows ? void 0 : a.getState().expanded], (n, s) => {
    if (!s.rows.length)
      return s;
    const {
      pageSize: i,
      pageIndex: l
    } = n;
    let {
      rows: d,
      flatRows: f,
      rowsById: u
    } = s;
    const m = i * l, g = m + i;
    d = d.slice(m, g);
    let b;
    a.options.paginateExpandedRows ? b = {
      rows: d,
      flatRows: f,
      rowsById: u
    } : b = gi({
      rows: d,
      flatRows: f,
      rowsById: u
    }), b.flatRows = [];
    const y = (p) => {
      b.flatRows.push(p), p.subRows.length && p.subRows.forEach(y);
    };
    return b.rows.forEach(y), b;
  }, Ae(a.options, "debugTable", "getPaginationRowModel"));
}
function Xp() {
  return (e) => we(() => [e.getState().sorting, e.getPreSortedRowModel()], (a, n) => {
    if (!n.rows.length || !(a != null && a.length))
      return n;
    const s = e.getState().sorting, i = [], l = s.filter((u) => {
      var m;
      return (m = e.getColumn(u.id)) == null ? void 0 : m.getCanSort();
    }), d = {};
    l.forEach((u) => {
      const m = e.getColumn(u.id);
      m && (d[u.id] = {
        sortUndefined: m.columnDef.sortUndefined,
        invertSorting: m.columnDef.invertSorting,
        sortingFn: m.getSortingFn()
      });
    });
    const f = (u) => {
      const m = u.map((g) => ({
        ...g
      }));
      return m.sort((g, b) => {
        for (let p = 0; p < l.length; p += 1) {
          var y;
          const v = l[p], x = d[v.id], A = x.sortUndefined, S = (y = v == null ? void 0 : v.desc) != null ? y : !1;
          let k = 0;
          if (A) {
            const E = g.getValue(v.id), R = b.getValue(v.id), V = E === void 0, N = R === void 0;
            if (V || N) {
              if (A === "first") return V ? -1 : 1;
              if (A === "last") return V ? 1 : -1;
              k = V && N ? 0 : V ? A : -A;
            }
          }
          if (k === 0 && (k = x.sortingFn(g, b, v.id)), k !== 0)
            return S && (k *= -1), x.invertSorting && (k *= -1), k;
        }
        return g.index - b.index;
      }), m.forEach((g) => {
        var b;
        i.push(g), (b = g.subRows) != null && b.length && (g.subRows = f(g.subRows));
      }), m;
    };
    return {
      rows: f(n.rows),
      flatRows: i,
      rowsById: n.rowsById
    };
  }, Ae(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function Ko(e, a) {
  return e ? Kp(e) ? /* @__PURE__ */ v2.createElement(e, a) : e : null;
}
function Kp(e) {
  return Jp(e) || typeof e == "function" || qp(e);
}
function Jp(e) {
  return typeof e == "function" && (() => {
    const a = Object.getPrototypeOf(e);
    return a.prototype && a.prototype.isReactComponent;
  })();
}
function qp(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function eg(e) {
  const a = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = v2.useState(() => ({
    current: Gp(a)
  })), [s, i] = v2.useState(() => n.current.initialState);
  return n.current.setOptions((l) => ({
    ...l,
    ...e,
    state: {
      ...s,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (d) => {
      i(d), e.onStateChange == null || e.onStateChange(d);
    }
  })), n.current;
}
const tg = ({
  column: e,
  isDark: a,
  onFilterUpdate: n
}) => {
  const s = e.getFilterValue(), { filterVariant: i } = e.columnDef.meta ?? {};
  return i === "dropdown" ? /* @__PURE__ */ t.jsx("div", { className: "column-filter-item" }) : i === "date" ? /* @__PURE__ */ t.jsx(t.Fragment, {}) : i === "dateRange" ? /* @__PURE__ */ t.jsx(t.Fragment, {}) : /* @__PURE__ */ t.jsx(
    If,
    {
      value: s ?? "",
      inputSize: "small",
      onUpdate: (l) => {
        e.setFilterValue(l), n && n(l, i ?? "text", e.id);
      },
      placeholderText: "Search",
      isDark: a
    }
  );
}, jm = ({
  columns: e,
  data: a,
  enableSorting: n = !0,
  filters: s,
  isDark: i,
  isExpandable: l = !1,
  isResizable: d = !1,
  onColumnFiltersChange: f,
  onGlobalSearchChange: u,
  onPageIndexChange: m,
  pageIndex: g = 0,
  pageSize: b = 10,
  renderSubComponent: y = (G) => /* @__PURE__ */ t.jsx(t.Fragment, { children: `Each row contains it's information inside {row.original}, i.e. Row ID: ${G.id}` }),
  rowSelectionStateUpdater: p = () => {
  },
  searchPlaceholder: v = "Type a search keyword",
  selection: x = "single",
  showColumnFilters: A = !0,
  showFilterButton: S = !0,
  showFilterToolbar: k = !1,
  showGlobalActions: E = !0,
  size: R = "large",
  tableDescription: V = "Data table description",
  tableHeader: N = "Data table header",
  toolbarActions: L,
  sortingHandler: F = () => {
  },
  ...Q
}) => {
  const { isDark: G } = $(), J = j(["datatable", i ?? G ? z : "", R]), X = i || G ? "var(--primary-400Dark)" : "var(--primary-500)", [re, je] = q({
    pageIndex: g,
    pageSize: b
  }), [Me, se] = q({}), [fe, De] = q({}), [W, ee] = q(""), [_e, qe] = q([]), [ze, B0] = q([]), [H0, m0] = q(k), [Ye, ye] = q(s), We = Z(
    () => e.map((te) => ({
      size: te.initialSize,
      minSize: te.minSize,
      maxSize: te.maxSize,
      meta: {
        columnAlignment: te.columnAlignment,
        filterVariant: te.filterVariant
      },
      accessorKey: te.columnKey,
      filterFn: "includesString",
      header: te.header,
      // TODO - add fuzzy search
      cell: te.cellData ?? ((ne) => ne.row.original[te.columnKey])
    })),
    [x, l]
  ), ce = eg({
    data: a,
    columns: We,
    state: {
      pagination: re,
      rowSelection: Me,
      expanded: fe,
      globalFilter: W,
      columnFilters: _e,
      sorting: ze
    },
    getCoreRowModel: Qp(),
    // Global and column filter options
    onGlobalFilterChange: ee,
    onColumnFiltersChange: qe,
    globalFilterFn: "includesString",
    // expanding options
    getRowCanExpand: () => !0,
    getExpandedRowModel: zp(),
    onExpandedChange: De,
    // selection options
    enableRowSelection: !0,
    onRowSelectionChange: (te) => {
      se((ne) => typeof te == "function" ? te(ne) : te);
    },
    // search options
    getFilteredRowModel: $p(),
    // pagination options
    getPaginationRowModel: Wp(),
    onPaginationChange: je,
    autoResetPageIndex: !0,
    // debugTable: true, // turn on console logging
    enableSorting: n,
    getSortedRowModel: Xp(),
    sortDescFirst: !0,
    onSortingChange: B0,
    enableColumnResizing: d,
    columnResizeMode: "onChange"
  });
  ve(() => {
    m0(k);
  }, [k]), ve(() => {
    ye(s);
  }, [s]), ve(() => {
    B0([]);
  }, [n]), ve(() => {
    const te = ce.getSelectedRowModel().rows;
    p(te);
  }, [Me]), ve(() => {
    ze.length > 0 && F(
      ze.map((te) => ({
        column: te.id,
        direction: te.desc ? "desc" : "asc"
      }))
    );
  }, [ze]);
  const ue = ce.getAllColumns()[0].id, ge = ce.getPageCount(), K = ce.getState().pagination.pageIndex, le = Js({ pageCount: ge, currentPage: K }), me = "...", Te = () => {
    m0(!H0);
  }, Xe = () => {
    ee(""), ye(
      Ye && Ye.map((te, ne) => ({
        ...te,
        label: s[ne].label,
        value: s[ne].value ?? void 0
      }))
    ), m0(!1);
  }, R0 = (te, ne) => {
    te.preventDefault(), te.stopPropagation();
    let Ie = parseInt(ne);
    isNaN(Ie) || (Ie === -1 ? Ie = K - 1 : Ie === -2 && (Ie = K + 1), m && m(Ie));
  };
  return /* @__PURE__ */ t.jsxs("div", { className: J, ...Q, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "header", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "header-title", children: [
        /* @__PURE__ */ t.jsx(xe, { headingLevel: 4, children: N }),
        /* @__PURE__ */ t.jsx(
          xe,
          {
            size: "small",
            variant: "regular",
            style: { color: "var(--color-text-secondary)" },
            children: V
          }
        )
      ] }),
      E && /* @__PURE__ */ t.jsxs("div", { className: "search-toolbar", children: [
        /* @__PURE__ */ t.jsx(
          uo,
          {
            isDark: i ?? G,
            onUpdate: (te) => {
              ee(te), u && u(te);
            },
            onSearch: () => ee(W),
            placeholderText: v
          }
        ),
        /* @__PURE__ */ t.jsx(
          m2,
          {
            showActiveState: !1,
            items: [
              {
                icon: "chevron_left",
                label: "Previous",
                onClick: () => ce.previousPage(),
                disabled: !ce.getCanPreviousPage()
              },
              {
                icon: "chevron_right",
                label: "Next",
                onClick: () => ce.nextPage(),
                disabled: !ce.getCanNextPage()
              }
            ],
            size: "medium",
            isDark: i ?? G
          }
        ),
        S && ((s == null ? void 0 : s.length) ?? 0) > 0 && /* @__PURE__ */ t.jsx(
          Ft,
          {
            icon: "filter_list",
            onClick: Te,
            isDark: i ?? G,
            disabled: !Ye,
            type: "default"
          }
        )
      ] })
    ] }),
    (Ye || L) && /* @__PURE__ */ t.jsx("div", { id: "table-toolbar", children: /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: j([
          "toolbar-container",
          H0 && ((Ye == null ? void 0 : Ye.length) ?? 0) > 0 ? "with-filters" : ""
        ]),
        children: [
          H0 && ((Ye == null ? void 0 : Ye.length) ?? 0) > 0 && /* @__PURE__ */ t.jsxs("div", { className: "filters-container", children: [
            Ye == null ? void 0 : Ye.slice(0, 5).map((te, ne) => /* @__PURE__ */ t.jsx(
              E9,
              {
                className: te.className,
                disabled: te.disabled,
                isDark: i ?? G,
                label: te.label,
                listLabel: te.listLabel,
                onChange: (Ie) => {
                  const t0 = Ie;
                  t0 ? ce.setGlobalFilter(t0.label) : ce.setGlobalFilter("");
                },
                options: te.options,
                selection: "single",
                showSearch: !1,
                size: "medium",
                style: te.style,
                value: te.value
              },
              ne
            )),
            /* @__PURE__ */ t.jsxs(
              "div",
              {
                style: { display: "flex", gap: "8px", alignItems: "center" },
                children: [
                  /* @__PURE__ */ t.jsxs(
                    Le,
                    {
                      variant: "tertiary",
                      size: "medium",
                      style: { gap: "4px" },
                      children: [
                        /* @__PURE__ */ t.jsx("span", { children: "All Filters" }),
                        /* @__PURE__ */ t.jsx(C8, { type: "default", value: Ye.length })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    A1,
                    {
                      orientation: "vertical",
                      style: {
                        height: "1.5rem",
                        width: "2px",
                        backgroundColor: "var(--color-border-default)"
                      }
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    Le,
                    {
                      isDark: i ?? G,
                      variant: "tertiary",
                      size: "medium",
                      text: "Reset all",
                      onClick: Xe,
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }
                    }
                  )
                ]
              }
            )
          ] }),
          L && /* @__PURE__ */ t.jsx("div", { className: "actions-container", children: L.map((te, ne) => /* @__PURE__ */ t.jsx(
            Le,
            {
              isDark: i ?? G,
              size: "medium",
              variant: te.variant,
              text: te.text,
              onClick: te.onClick
            },
            ne
          )) })
        ]
      }
    ) }),
    x === "multiple" && /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "selected-items-container",
        style: { marginBottom: "8px" },
        children: /* @__PURE__ */ t.jsx(
          xe,
          {
            size: "small",
            variant: "regular",
            style: { color: "var(--color-text-secondary)", padding: "8px" },
            children: `${ce.getSelectedRowModel().rows.length} item (s) selected`
          }
        )
      }
    ),
    /* @__PURE__ */ t.jsx(A1, { className: "header-divider", style: { height: "2px" } }),
    /* @__PURE__ */ t.jsx("div", { id: "content", children: /* @__PURE__ */ t.jsxs("table", { className: "responsive-table", children: [
      /* @__PURE__ */ t.jsx("thead", { children: ce.getHeaderGroups().map((te) => /* @__PURE__ */ t.jsx("tr", { children: te.headers.map((ne, Ie) => {
        var V0;
        const t0 = (x === "multiple" || l) && Ie === 0, $e = (V0 = ne.column.columnDef.meta) == null ? void 0 : V0.columnAlignment;
        return /* @__PURE__ */ t.jsxs(
          "th",
          {
            colSpan: ne.colSpan,
            style: { position: "relative", width: ne.getSize() },
            className: "column-header",
            children: [
              /* @__PURE__ */ t.jsxs(
                "div",
                {
                  className: "datatable-header-separator",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: $e
                  },
                  children: [
                    t0 ? /* @__PURE__ */ t.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          padding: l ? "12px 0px 12px 8px" : "16px 0px 16px 8px"
                        },
                        children: [
                          x === "multiple" && !l && /* @__PURE__ */ t.jsx(
                            A2,
                            {
                              isDark: i ?? G,
                              checked: ce.getIsAllRowsSelected(),
                              onChange: ce.getToggleAllRowsSelectedHandler(),
                              indeterminate: ce.getIsSomeRowsSelected()
                            }
                          ),
                          l && x === "single" && /* @__PURE__ */ t.jsx(
                            "div",
                            {
                              className: "expand-container",
                              onClick: ce.getToggleAllRowsExpandedHandler(),
                              role: "button",
                              style: {
                                cursor: "pointer",
                                lineHeight: "0px"
                              },
                              children: /* @__PURE__ */ t.jsx(
                                "svg",
                                {
                                  className: j([
                                    "expand-icon",
                                    ce.getIsAllRowsExpanded() ? "expanded" : ""
                                  ]),
                                  width: "24",
                                  height: "24",
                                  focusable: "false",
                                  "aria-hidden": "true",
                                  "data-testid": "ExpandMoreIcon",
                                  children: /* @__PURE__ */ t.jsx(
                                    "path",
                                    {
                                      d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z",
                                      fill: "#3A3A3A"
                                    }
                                  )
                                }
                              )
                            }
                          )
                        ]
                      }
                    ) : null,
                    /* @__PURE__ */ t.jsxs(
                      "div",
                      {
                        className: "header-container",
                        onClick: ne.column.getToggleSortingHandler(),
                        title: ne.column.getCanSort() ? ne.column.getNextSortingOrder() === "asc" ? "Sort ascending" : ne.column.getNextSortingOrder() === "desc" ? "Sort descending" : "Clear sort" : void 0,
                        style: {
                          padding: t0 ? "16px 8px 16px 0px" : "16px 8px"
                        },
                        children: [
                          Ko(
                            ne.column.columnDef.header,
                            ne.getContext()
                          ),
                          {
                            asc: /* @__PURE__ */ t.jsx(
                              oe,
                              {
                                alt: "Sort ascending",
                                icon: "arrow_upward",
                                size: "small"
                              }
                            ),
                            desc: /* @__PURE__ */ t.jsx(
                              oe,
                              {
                                alt: "Sort descending",
                                icon: "arrow_downward",
                                size: "small"
                              }
                            )
                          }[ne.column.getIsSorted()] ?? null,
                          ne.column.getCanResize() && /* @__PURE__ */ t.jsx(
                            "div",
                            {
                              onMouseDown: ne.getResizeHandler(),
                              onTouchStart: ne.getResizeHandler(),
                              className: `resizer ${ne.column.getIsResizing() ? "isResizing" : ""}`
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              A && ne.column.getCanFilter() ? /* @__PURE__ */ t.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "8px",
                    padding: t0 && l ? "0px 8px 8px 64px" : t0 ? "0px 8px 8px 52px" : "0px 8px 8px",
                    marginTop: "16px",
                    boxShadow: "inset 0px 2px 0px -10px var(--color-border-default), inset 0px -2px 0px -10px var(--color-border-default)"
                  },
                  children: [
                    /* @__PURE__ */ t.jsx(
                      tg,
                      {
                        column: ne.column,
                        isDark: i ?? G,
                        onFilterUpdate: f
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      oe,
                      {
                        icon: "filter_list",
                        size: "medium",
                        style: { paddingTop: "2px" }
                      }
                    )
                  ]
                }
              ) : null
            ]
          },
          ne.id
        );
      }) }, te.id)) }),
      /* @__PURE__ */ t.jsx("tbody", { children: ce.getRowModel().rows.map((te) => /* @__PURE__ */ t.jsxs(Xr, { children: [
        /* @__PURE__ */ t.jsx(
          "tr",
          {
            className: j([
              te.getIsExpanded() ? "expandable-row" : "",
              x === "single" ? "single-selection-row" : ""
            ]),
            "aria-expanded": te.getIsExpanded(),
            onClick: () => {
              if (x === "single")
                ce.resetRowSelection(), te.toggleSelected();
              else return;
            },
            children: te.getVisibleCells().map((ne) => {
              var t0;
              const Ie = (t0 = ne.column.columnDef.meta) == null ? void 0 : t0.columnAlignment;
              return ne.column.id === ue ? /* @__PURE__ */ t.jsx(
                "td",
                {
                  style: {
                    width: ne.column.getSize(),
                    textAlign: Ie
                  },
                  className: "column-cell",
                  children: /* @__PURE__ */ t.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        padding: "16px 0px"
                      },
                      children: [
                        x === "multiple" && /* @__PURE__ */ t.jsx(
                          A2,
                          {
                            isDark: i ?? G,
                            checked: te.getIsSelected(),
                            disabled: !te.getCanSelect(),
                            onChange: te.getToggleSelectedHandler()
                          }
                        ),
                        l && x === "single" && /* @__PURE__ */ t.jsx(
                          "div",
                          {
                            className: "expand-container",
                            onClick: te.getToggleExpandedHandler(),
                            role: "button",
                            style: {
                              cursor: "pointer",
                              lineHeight: "0px"
                            },
                            children: /* @__PURE__ */ t.jsx(
                              "svg",
                              {
                                className: j([
                                  "expand-icon",
                                  te.getIsExpanded() ? "expanded" : ""
                                ]),
                                width: "24",
                                height: "24",
                                focusable: "true",
                                "aria-hidden": "true",
                                "data-testid": "ExpandMoreIcon",
                                children: /* @__PURE__ */ t.jsx(
                                  "path",
                                  {
                                    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z",
                                    fill: "#3A3A3A"
                                  }
                                )
                              }
                            )
                          }
                        ),
                        Ko(
                          ne.column.columnDef.cell,
                          ne.getContext()
                        )
                      ]
                    }
                  )
                },
                ne.id
              ) : /* @__PURE__ */ t.jsx(
                "td",
                {
                  style: {
                    width: ne.column.getSize(),
                    textAlign: Ie
                  },
                  className: "column-cell",
                  children: Ko(
                    ne.column.columnDef.cell,
                    ne.getContext()
                  )
                },
                ne.id
              );
            })
          }
        ),
        te.getIsExpanded() && /* @__PURE__ */ t.jsx(
          "tr",
          {
            className: "row-expanded-content",
            "aria-expanded": te.getIsExpanded(),
            children: /* @__PURE__ */ t.jsx("td", { colSpan: te.getVisibleCells().length, children: /* @__PURE__ */ t.jsx(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px"
                },
                children: y(te)
              }
            ) })
          }
        )
      ] }, te.id)) })
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: "footer", children: /* @__PURE__ */ t.jsx("div", { id: "pagination", children: /* @__PURE__ */ t.jsx(
      "nav",
      {
        id: "table-pagination",
        className: j(["pagination", "number", "medium"]),
        role: "tablist",
        children: /* @__PURE__ */ t.jsxs("ul", { children: [
          /* @__PURE__ */ t.jsx("li", { className: "prev-next", children: /* @__PURE__ */ t.jsx(
            "button",
            {
              "data-index": -1,
              onClick: (te) => {
                ce.previousPage(), R0(te, -1);
              },
              disabled: !ce.getCanPreviousPage(),
              children: /* @__PURE__ */ t.jsx(ei, { primaryFillColor: X })
            }
          ) }),
          le == null ? void 0 : le.map((te, ne) => /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsx(
            "button",
            {
              "aria-checked": ne === K,
              className: j([
                te === K + 1 ? "selected" : "",
                n0
              ]),
              "data-index": ne,
              onClick: (Ie) => {
                ce.setPageIndex(te - 1), R0(Ie, te);
              },
              role: "tab",
              disabled: ne === ce.getState().pagination.pageIndex || te === me,
              children: te
            }
          ) }, ne)),
          /* @__PURE__ */ t.jsx("li", { className: "prev-next", children: /* @__PURE__ */ t.jsx(
            "button",
            {
              "data-index": -2,
              onClick: (te) => {
                ce.nextPage(), R0(te, -2);
              },
              disabled: !ce.getCanNextPage(),
              children: /* @__PURE__ */ t.jsx(ti, { primaryFillColor: X })
            }
          ) })
        ] })
      }
    ) }) })
  ] });
}, rg = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    children: /* @__PURE__ */ t.jsxs("g", { id: "Vector", children: [
      /* @__PURE__ */ t.jsx("path", { d: "M30 9H36L28 1L20 9H26V17.34L30 21.34V9Z", fill: "#3A3A3A" }),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M3.62003 0.619141L0.780029 3.43914L14 16.6591V29.0191L8.00003 29.0391L16 36.9991L24 28.9991L18 29.0191V20.6591L37.56 40.2191L40.38 37.3791L3.62003 0.619141Z",
          fill: "currentColor"
        }
      )
    ] })
  }
), og = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    children: /* @__PURE__ */ t.jsx("g", { id: "24px/RunningWithErrors", children: /* @__PURE__ */ t.jsx("g", { id: "Vector", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M44 20V36H40V20H44ZM40 40V44H44V40H40ZM36 34.58C33.06 37.9 28.78 40 24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8V26L39.1 10.9C35.44 6.68 30.04 4 24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C28.5 44 32.66 42.52 36 40V34.58Z",
        fill: "currentColor"
      }
    ) }) })
  }
), ng = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    children: /* @__PURE__ */ t.jsx("g", { id: "24px/Action/done_outline", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        id: "Vector",
        d: "M39.54 9.85995L42.34 12.66L16.86 38.1399L5.66 26.94L8.46 24.1399L16.86 32.54L39.54 9.85995ZM39.54 4.19995L16.86 26.88L8.46 18.48L0 26.94L16.86 43.7999L48 12.66L39.54 4.19995Z",
        fill: "currentColor"
      }
    ) })
  }
), ag = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    children: /* @__PURE__ */ t.jsx("g", { id: "24px/DownloadingFilled", children: /* @__PURE__ */ t.jsx(
      "path",
      {
        id: "Vector",
        d: "M36.64 8.51961C33.68 6.09961 30.02 4.49961 26 4.09961V8.13961C28.92 8.49961 31.58 9.65961 33.8 11.3796L36.64 8.51961ZM39.86 21.9996H43.9C43.5 17.9796 41.9 14.3196 39.48 11.3596L36.62 14.1996C38.34 16.4196 39.5 19.0796 39.86 21.9996ZM36.62 33.7996L39.48 36.6596C41.9 33.6996 43.5 30.0196 43.9 26.0196H39.86C39.5 28.9196 38.34 31.5796 36.62 33.7996ZM26 39.8596V43.8996C30.02 43.4996 33.68 41.8996 36.64 39.4796L33.78 36.6196C31.58 38.3396 28.92 39.4996 26 39.8596ZM26 23.9996V13.9996H22V23.9996H14L24 33.9996L34 23.9996H26ZM22 39.8596V43.8996C11.9 42.8996 4 34.3796 4 23.9996C4 13.6196 11.9 5.09961 22 4.09961V8.13961C14.1 9.11961 8 15.8396 8 23.9996C8 32.1596 14.1 38.8796 22 39.8596Z",
        fill: "currentColor"
      }
    ) })
  }
), Bm = ({
  type: e = "success",
  helperText: a = "Lorem ipsum sed dolor sit amet...",
  primaryButtonProps: n,
  secondaryButtonProps: s,
  linkProps: i,
  isDark: l,
  iconContent: d,
  titleContent: f,
  className: u,
  ...m
}) => {
  const { isDark: g } = $(), b = Z(
    () => l ?? g,
    [l, g]
  ), y = j([
    "infocard",
    io,
    b ? z : "",
    u
  ]), p = {
    ...m.style ?? {}
  }, v = Z(() => {
    if (d) return d;
    switch (e) {
      case "no_data":
        return /* @__PURE__ */ t.jsx(rg, {});
      case "loading_error":
        return /* @__PURE__ */ t.jsx(og, {});
      case "loading_data":
        return /* @__PURE__ */ t.jsx(ag, {});
      case "success":
        return /* @__PURE__ */ t.jsx(ng, {});
    }
  }, [d, e]), x = Z(() => {
    if (f) return f;
    switch (e) {
      case "no_data":
        return "No data found";
      case "loading_error":
        return "Error loading data";
      case "loading_data":
        return "Loading data...";
      case "success":
        return "Data saved correctly";
    }
  }, [f, e]), A = /* @__PURE__ */ t.jsxs("div", { className: "infocard-footer", children: [
    i && /* @__PURE__ */ t.jsx(U0, { ...i }),
    /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", gap: "16px" }, children: [
      s && /* @__PURE__ */ t.jsx(Le, { ...s }),
      n && /* @__PURE__ */ t.jsx(Le, { ...n })
    ] })
  ] });
  return /* @__PURE__ */ t.jsxs("div", { ...m, className: y, style: p, role: "status", children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: j([
          "infocard-content",
          D2,
          b ? O0 : ""
        ]),
        children: [
          v,
          /* @__PURE__ */ t.jsx(
            xe,
            {
              headingLevel: 6,
              className: j([b ? O0 : ""]),
              children: x
            }
          ),
          /* @__PURE__ */ t.jsx(xe, { className: O0, size: "small", variant: "regular", children: a })
        ]
      }
    ),
    A
  ] });
}, Em = ({
  className: e,
  isDark: a,
  style: n,
  leftIcon: s,
  middleIcon: i,
  rightToolbar: l = []
}) => {
  const { isDark: d } = $(), u = j(["top-header", a ?? d ? z : "", e ?? ""]), m = {
    ...n ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsxs("div", { className: u, style: m, role: "banner", children: [
    /* @__PURE__ */ t.jsx("div", { children: s }),
    /* @__PURE__ */ t.jsx("div", { children: i }),
    /* @__PURE__ */ t.jsx("div", { className: "header-right-bar", children: l == null ? void 0 : l.map((g, b) => /* @__PURE__ */ t.jsx(
      sg,
      {
        icon: g.icon,
        onClickIcon: g.onClickIcon,
        dropdownContent: g.dropdownContent
      },
      b
    )) })
  ] });
}, sg = ({
  icon: e,
  onClickIcon: a,
  dropdownContent: n
}) => {
  const [s, i] = q(!1), l = () => {
    i(!1);
  }, d = Ve(null);
  j0(d, l);
  const f = () => {
    i(!s), a == null || a();
  };
  return /* @__PURE__ */ t.jsxs("span", { className: "icon-dropdown", onClick: f, ref: d, children: [
    /* @__PURE__ */ t.jsx("span", { className: "icon-wrapper", children: e }),
    s && n && /* @__PURE__ */ t.jsx("div", { className: "header-dropdown-content", children: n })
  ] });
}, Jo = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    className: "skeleton-shimmer",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "data-testid": "selection",
    children: [
      /* @__PURE__ */ t.jsx("g", { clipPath: "url(#clip0_37375_47785)", children: /* @__PURE__ */ t.jsx("rect", { width: "32", height: "16", fill: "#DFDFDF" }) }),
      /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_37375_47785", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M0 2C0 0.895431 0 2 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2Z",
          fill: "white"
        }
      ) }) })
    ]
  }
), ig = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    className: "skeleton-shimmer",
    xmlns: "http://www.w3.org/2000/svg",
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    fill: "none",
    "data-testid": "placeholder-image",
    children: [
      /* @__PURE__ */ t.jsx("g", { clipPath: "url(#clip0_37375_47792)", children: /* @__PURE__ */ t.jsx("rect", { width: "128", height: "64", fill: "#DFDFDF" }) }),
      /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_37375_47792", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M0 4C0 1.79086 1.79086 0 4 0H60C62.2091 0 64 1.79086 64 4V60C64 62.2091 62.2091 64 60 64H4C1.79086 64 0 62.2091 0 60V4Z",
          fill: "white"
        }
      ) }) })
    ]
  }
), lg = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    className: "skeleton-shimmer",
    xmlns: "http://www.w3.org/2000/svg",
    width: "47",
    height: "24",
    viewBox: "0 0 47 24",
    fill: "none",
    "data-testid": "tag",
    children: [
      /* @__PURE__ */ t.jsx("g", { clipPath: "url(#clip0_39281_6545)", children: /* @__PURE__ */ t.jsx("rect", { width: "94", height: "24", fill: "#DFDFDF" }) }),
      /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_39281_6545", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M0 4C0 1.79086 1.79086 0 4 0H43C45.2091 0 47 1.79086 47 4V20C47 22.2091 45.2091 24 43 24H4C1.79086 24 0 22.2091 0 20V4Z",
          fill: "white"
        }
      ) }) })
    ]
  }
), cg = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    className: "skeleton-shimmer",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    "data-testid": "avatar-skeleton",
    children: [
      /* @__PURE__ */ t.jsx("g", { clipPath: "url(#clip0_40853_6273)", children: /* @__PURE__ */ t.jsx("rect", { width: "64", height: "32", fill: "#DFDFDF" }) }),
      /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_40853_6273", children: /* @__PURE__ */ t.jsx("rect", { width: "32", height: "32", rx: "16", fill: "white" }) }) })
    ]
  }
), qo = ({
  presentation: e,
  skeleton: a,
  contentGroup: n,
  disabled: s,
  imageProps: i,
  isDark: l,
  separator: d,
  onClick: f,
  selected: u,
  showNavigationIcon: m,
  rightAccessory: g,
  showCheckBox: b,
  showRadio: y,
  avatarProps: p,
  iconProps: v
}) => {
  const { isDark: x } = $(), A = l ?? x, S = j([
    "list-v2-item",
    e,
    A ? z : "",
    d ? "separator" : "",
    u ? "selected" : "",
    s ? "disabled" : ""
  ]), k = () => {
    s || a || f == null || f();
  }, E = v2.isValidElement(g) ? v2.cloneElement(g, {
    isDark: A,
    disabled: s
  }) : null;
  return /* @__PURE__ */ t.jsxs("div", { className: S, onClick: k, role: "list-v2-item", children: [
    b && (a ? /* @__PURE__ */ t.jsx(Jo, {}) : /* @__PURE__ */ t.jsx(
      A2,
      {
        checked: u,
        className: "list-item-checkbox-v2",
        isDark: A,
        disabled: s
      }
    )),
    y && (a ? /* @__PURE__ */ t.jsx(Jo, {}) : /* @__PURE__ */ t.jsx(
      Nn,
      {
        checked: u ?? !1,
        item: "",
        isDark: A,
        reference: "list-v2-item-radio",
        size: "large",
        disabled: s,
        className: "list-item-radio-v2"
      }
    )),
    v && (a ? /* @__PURE__ */ t.jsx(Jo, {}) : /* @__PURE__ */ t.jsx(
      oe,
      {
        ...v,
        isDark: A,
        disabled: s,
        className: A ? "$color-icon-white" : "$color-icon-default"
      }
    )),
    p && (a ? /* @__PURE__ */ t.jsx(cg, {}) : /* @__PURE__ */ t.jsx(H2, { type: "image", ...p, disabled: s })),
    (i == null ? void 0 : i.source) && /* @__PURE__ */ t.jsx(t.Fragment, { children: a ? /* @__PURE__ */ t.jsx(ig, {}) : /* @__PURE__ */ t.jsx("div", { className: "list-item-image", children: /* @__PURE__ */ t.jsx(
      "img",
      {
        src: i.source,
        alt: "list-image",
        className: "placeholder-image",
        style: {
          width: i == null ? void 0 : i.width,
          height: i == null ? void 0 : i.height,
          objectFit: i == null ? void 0 : i.objectFit
        }
      }
    ) }) }),
    /* @__PURE__ */ t.jsx("div", { className: "content", children: /* @__PURE__ */ t.jsx(
      I8,
      {
        ...n,
        skeleton: a,
        isDark: A,
        disabled: s,
        isSelected: u
      }
    ) }),
    a ? /* @__PURE__ */ t.jsx(lg, {}) : E,
    !a && m && /* @__PURE__ */ t.jsx(
      oe,
      {
        icon: "chevron_right",
        isDark: A,
        className: A ? "$color-icon-white" : "$color-icon-default",
        disabled: s
      }
    )
  ] });
}, Dm = ({
  title: e,
  items: a = [],
  presentation: n = "box-shadow",
  isDark: s,
  separator: i,
  skeleton: l,
  className: d,
  draggable: f = !0,
  onUpdateItems: u,
  onItemClick: m,
  onClickAdd: g
}) => {
  const { isDark: b } = $(), [y, p] = v2.useState(null), v = s ?? b, x = j(["list-v2", v ? z : "", d ?? ""]), A = (E, R) => {
    E.dataTransfer.setData("draggedIndex", R.toString()), p(R);
  }, S = (E) => {
    const R = Number(E.dataTransfer.getData("draggedIndex")), V = Number(E.currentTarget.getAttribute("data-index"));
    if (isNaN(R) || isNaN(V) || R === V) {
      p(null);
      return;
    }
    const N = [...a], [L] = N.splice(R, 1);
    N.splice(V, 0, L), u == null || u(N), p(null);
  }, k = (E) => {
    var R;
    m == null || m(E), (R = E.onClick) == null || R.call(E);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: x, role: "list", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "heading-container", children: [
      /* @__PURE__ */ t.jsx(xe, { headingLevel: 6, children: e }),
      g && /* @__PURE__ */ t.jsx(Ft, { icon: "add", onClick: g })
    ] }),
    n !== "no-background" && i === !0 ? /* @__PURE__ */ t.jsx(
      "div",
      {
        className: j([
          "list-item-container",
          n,
          v ? "dark" : ""
        ]),
        role: "list-container",
        children: a.map((E, R) => /* @__PURE__ */ t.jsx(
          qo,
          {
            presentation: "no-background",
            isDark: v,
            separator: !0,
            skeleton: l,
            ...E,
            onClick: () => k(E)
          },
          R
        ))
      }
    ) : n !== "no-background" ? /* @__PURE__ */ t.jsx(t.Fragment, { children: a.map((E, R) => /* @__PURE__ */ t.jsx(
      "div",
      {
        draggable: f,
        onDragStart: (V) => A(V, R),
        onDragOver: (V) => V.preventDefault(),
        onDrop: S,
        "data-index": R,
        className: j([
          "list-item-draggable-container",
          y === R ? "active" : ""
        ]),
        children: /* @__PURE__ */ t.jsx(
          qo,
          {
            presentation: n,
            isDark: v,
            skeleton: l,
            ...E,
            onClick: () => k(E)
          }
        )
      },
      R
    )) }) : n === "no-background" ? /* @__PURE__ */ t.jsx(t.Fragment, { children: a.map((E, R) => /* @__PURE__ */ t.jsx(
      qo,
      {
        presentation: n,
        isDark: v,
        separator: i,
        ...E,
        onClick: () => k(E)
      },
      R
    )) }) : null
  ] });
}, ug = ({
  tagProps: e,
  iconButtonProps: a,
  linkProps: n,
  toggleProps: s,
  buttonProps: i,
  avatar: l,
  isDark: d,
  disabled: f = !1,
  title: u,
  detail: m
}) => {
  const { isDark: g } = $(), b = d ?? g, y = j([
    "list-v2-right-accessory",
    b ? "dark" : "",
    f ? "disabled" : ""
  ]);
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    e && /* @__PURE__ */ t.jsx(X0, { ...e, isDark: b }),
    a && /* @__PURE__ */ t.jsx(
      Ft,
      {
        ...a,
        isDark: b,
        disabled: f,
        "aria-disabled": f
      }
    ),
    n && /* @__PURE__ */ t.jsx(
      U0,
      {
        ...n,
        isDark: b,
        disabled: f,
        "aria-disabled": f
      }
    ),
    s && /* @__PURE__ */ t.jsx(
      f9,
      {
        ...s,
        isDark: b,
        disabled: f,
        "aria-disabled": f
      }
    ),
    l && /* @__PURE__ */ t.jsx(H2, { ...l, disabled: f, "aria-disabled": f }),
    i && /* @__PURE__ */ t.jsx(
      Le,
      {
        ...i,
        isDark: b,
        disabled: f,
        "aria-disabled": f
      }
    ),
    (u || m) && /* @__PURE__ */ t.jsxs("div", { className: y, children: [
      u && /* @__PURE__ */ t.jsx(
        "span",
        {
          className: j([
            "title",
            b ? "dark" : "",
            f ? "disabled" : "",
            oo
          ]),
          children: u
        }
      ),
      m && /* @__PURE__ */ t.jsx(
        "span",
        {
          className: j([
            "detail",
            b ? "dark" : "",
            f ? "disabled" : "",
            Qe
          ]),
          children: m
        }
      )
    ] })
  ] });
}, Mm = G1(ug), Hm = ({
  className: e,
  style: a,
  options: n = [],
  onUpdate: s = (f) => {
    console.info(`[NotificationMenu.onUpdate] newIndex = ${f}`);
  },
  popoverProps: i,
  bottomButtonProps: l,
  ...d
}) => {
  const f = j(["notification-menu", e ?? ""]), u = {
    ...a ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsx("div", { className: f, style: u, ...d, children: /* @__PURE__ */ t.jsxs(R2, { ...i, children: [
    n.map((m, g) => /* @__PURE__ */ t.jsx(
      "span",
      {
        className: "list-item",
        onClick: () => s(g),
        children: /* @__PURE__ */ t.jsx(Ks, { ...m })
      },
      g + m.title
    )),
    l && /* @__PURE__ */ t.jsx(Le, { ...l })
  ] }) });
}, dg = ({
  id: e,
  label: a,
  subItems: n,
  isDark: s,
  active: i,
  handleSelected: l,
  leadingIcon: d = ""
}) => {
  const { isDark: f } = $(), m = j([
    "page-navigation-link",
    wn,
    s ?? f ? z : ""
  ]);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      onClick: () => l(e),
      className: j([m, i ? "active" : ""]),
      role: "listitem",
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "nav-label", children: [
          d && /* @__PURE__ */ t.jsx(
            oe,
            {
              className: j([y2]),
              alt: d,
              icon: d,
              size: "large"
            }
          ),
          a
        ] }),
        !!n && /* @__PURE__ */ t.jsxs("div", { className: "sub-links-counter", children: [
          n,
          /* @__PURE__ */ t.jsx(oe, { icon: "keyboard_arrow_down", size: "small" })
        ] })
      ]
    }
  );
}, fg = ({
  active: e,
  parentId: a,
  subItems: n,
  isDark: s,
  handleSelected: i
}) => {
  const { isDark: l } = $(), d = s ?? l, f = j(["page-navigation-link-sub-links", Qe]);
  return /* @__PURE__ */ t.jsx("div", { className: f, children: n == null ? void 0 : n.map((u) => /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: j([
        "item",
        e(u.id) ? "active" : "",
        d ? z : ""
      ]),
      onClick: () => i(a, u.id),
      children: [
        /* @__PURE__ */ t.jsxs("span", { children: [
          u.leadingIcon && /* @__PURE__ */ t.jsx(
            oe,
            {
              className: j([y2]),
              alt: u.leadingIcon,
              icon: u.leadingIcon,
              size: "small"
            }
          ),
          u.label
        ] }),
        /* @__PURE__ */ t.jsx("span", { children: u.trailingIcon && /* @__PURE__ */ t.jsx(
          oe,
          {
            alt: u.trailingIcon,
            icon: u.trailingIcon,
            size: "small"
          }
        ) })
      ]
    },
    `page-side-bar-nav-link-sub-${u.id}`
  )) });
}, Rm = ({
  label: e,
  selector: a,
  isDark: n,
  className: s = "",
  style: i,
  options: l,
  selected: d,
  onSelected: f
}) => {
  const { isDark: u } = $(), [m, g] = q(d ?? { parentId: "", childId: "" }), [b, y] = q(l), p = n ?? u, v = j(["page-navigation", p ? z : "", s]), x = (S, k) => {
    const E = { ...m };
    S === m.parentId ? k ? E.childId = k : E.parentId = "" : (E.parentId = S, E.childId = ""), g(E), f == null || f(E.parentId, E.childId);
  }, A = (S) => {
    console.log("query", S), y(
      S ? l.filter((k) => k.label.toLowerCase().includes(S.toLowerCase())) : l
    );
  };
  return /* @__PURE__ */ t.jsxs("div", { className: v, style: i, role: "navigation", children: [
    a && /* @__PURE__ */ t.jsxs("div", { className: j(["header", N0]), children: [
      e,
      /* @__PURE__ */ t.jsx(
        uo,
        {
          onUpdate: A,
          onSelectOption: (S) => {
            x(S.id);
          },
          isDark: p
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "content", children: b.map((S) => {
      var k;
      return /* @__PURE__ */ t.jsxs(Xr, { children: [
        /* @__PURE__ */ t.jsx(
          dg,
          {
            id: S.id,
            label: S.label,
            subItems: (k = S.subItems) == null ? void 0 : k.length,
            active: S.id === m.parentId,
            leadingIcon: S.leadingIcon,
            isDark: p,
            handleSelected: x
          }
        ),
        S.id === m.parentId && S.subItems && /* @__PURE__ */ t.jsx(
          fg,
          {
            subItems: S.subItems,
            parentId: S.id,
            active: (E) => E === m.childId,
            handleSelected: x
          }
        )
      ] }, `page-side-bar-nav-link-${S.id}`);
    }) })
  ] });
}, Lm = ({
  className: e,
  style: a,
  options: n = [],
  onUpdate: s = (l) => {
    console.info(`[ProfileMenu.onUpdate] newIndex = ${l}`);
  },
  ...i
}) => {
  const l = j(["profile-menu", e ?? ""]), d = {
    ...a ?? {}
    // default styles below
  };
  return /* @__PURE__ */ t.jsx("div", { className: l, style: d, ...i, children: /* @__PURE__ */ t.jsx(R2, { text: "", direction: "top-right", showPopover: !0, isDark: !0, children: n.map((f, u) => /* @__PURE__ */ t.jsx(
    "span",
    {
      className: "list-item",
      onClick: () => s(u),
      children: /* @__PURE__ */ t.jsx(Ks, { ...f })
    },
    u + f.title
  )) }) });
}, pg = "data:image/svg+xml,%3csvg%20width='96'%20height='96'%20viewBox='0%200%2096%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_2438_27245)'%3e%3ccircle%20cx='48'%20cy='44'%20r='24'%20fill='%23005CBC'/%3e%3cmask%20id='mask0_2438_27245'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='32'%20y='28'%20width='32'%20height='32'%3e%3crect%20x='32'%20y='28'%20width='32'%20height='32'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2438_27245)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M57.6739%2048.8258C57.9714%2042.265%2052.6042%2034.8765%2045.2871%2033.9632L45.2996%2033.8735C52.5131%2033.8735%2058.0431%2040.9133%2058.0431%2046.467C58.0362%2047.6231%2057.9496%2048.3394%2057.7951%2048.8595L57.6739%2048.8258ZM57.2368%2049.6598C56.7569%2050.278%2056.1533%2050.9004%2055.4461%2051.4913C54.1451%2043.6037%2048.6469%2036.7065%2044.7596%2034.6934L44.6764%2034.7546C48.5857%2038.1368%2053.2484%2044.7057%2055.0617%2051.8007C54.1368%2052.517%2053.1377%2053.1201%2052.0837%2053.5986C48.3946%2049.1638%2044.9554%2040.6109%2043.8471%2035.1835L43.7344%2035.2193C43.7594%2040.4876%2047.3075%2049.4311%2051.6345%2053.795C50.6421%2054.209%2049.6104%2054.5095%2048.5571%2054.6914C44.4094%2052.9592%2041.457%2047.4114%2041.457%2041.7282C41.457%2038.0182%2042.5301%2035.7231%2042.7377%2035.2534L42.6493%2035.2165C42.3981%2035.617%2040.8262%2037.9109%2040.8262%2041.9162C40.8262%2048.3401%2043.8315%2053.2503%2047.8214%2054.7966C46.3946%2054.962%2044.952%2054.8906%2043.5462%2054.585L43.5165%2054.6829C43.9433%2054.8486%2045.3914%2055.4893%2047.6004%2055.4893C52.5969%2055.4893%2055.9745%2052.2168%2057.3341%2049.7292L57.2368%2049.6598Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M47.1094%2031.5555C43.3217%2031.5555%2038.8804%2034.4372%2038.8804%2037.0714C38.8804%2038.0903%2039.7646%2038.9511%2041.5946%2038.9511C45.8428%2038.9511%2049.7896%2035.8743%2049.7896%2033.4819C49.7896%2032.2229%2048.6427%2031.5555%2047.1094%2031.5555ZM48.6215%2033.4075C48.6215%2035.4242%2044.9479%2037.8894%2041.877%2037.8894C40.5202%2037.8894%2039.7871%2037.3265%2039.7871%2036.3977C39.7871%2034.3521%2043.5025%2031.9288%2046.383%2031.9288C48.261%2031.9288%2048.6215%2032.9362%2048.6215%2033.4075Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M37.3434%2038.2912C37.2369%2038.4853%2036.8105%2039.3654%2036.8105%2040.2672C36.8105%2041.9396%2038.4135%2043.4922%2041.3619%2043.4922C47.0338%2043.4922%2053.5868%2039.0911%2053.5868%2035.0057C53.5868%2033.1718%2051.9401%2032.1748%2050.7967%2031.9686L50.7753%2032.0402C51.1309%2032.1588%2052.4337%2032.7972%2052.4337%2034.4308C52.4337%2037.686%2046.6479%2042.1213%2040.8846%2042.1213C38.6783%2042.1213%2037.2882%2040.9731%2037.2882%2039.3007C37.2882%2038.7717%2037.3927%2038.4232%2037.4204%2038.3223L37.3434%2038.2912Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M55.9535%2035.311C56.1091%2035.4355%2057.0433%2036.2563%2057.0433%2037.8085C57.0433%2043.1008%2049.1773%2048.3048%2042.2231%2048.3048C38.076%2048.3048%2036.1856%2046.1462%2036.2693%2044.2296H36.3436C36.5061%2045.225%2037.8526%2047.0061%2041.4822%2047.0061C48.4451%2047.0061%2056.2194%2041.6213%2056.2194%2036.9034C56.2194%2036.0942%2056.0109%2035.5899%2055.893%2035.3656L55.9535%2035.311Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M58.5642%2040.2516C58.5968%2040.3643%2058.7662%2040.8709%2058.7662%2041.6644C58.7662%2047.5516%2050.8058%2052.5916%2043.8825%2052.5916C40.3191%2052.5916%2038.4583%2050.767%2038.0654%2050.026L38.1288%2049.9765C39.1148%2050.8856%2041.0569%2051.5762%2043.3233%2051.5762C49.4379%2051.5762%2058.5618%2046.6722%2058.4803%2040.273L58.5642%2040.2516Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_2438_27245'%20x='0'%20y='0'%20width='96'%20height='96'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='12'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.227451%200%200%200%200%200.227451%200%200%200%200%200.227451%200%200%200%200.08%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_2438_27245'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_2438_27245'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e", _1 = ({
  icon: e,
  label: a,
  isSelected: n,
  isCollapsed: s,
  isBottomIndicator: i = !1,
  onClick: l,
  className: d,
  style: f,
  subLinks: u,
  navLinkAction: m,
  isDark: g
}) => {
  const [b, y] = q(null), [p, v] = q(!1), [x, A] = q(!1), S = Ve(null), k = Ve(null), { isMobile: E, isTablet: R } = lo(), V = He(() => {
    v((J) => !J);
  }, []);
  ve(() => {
    v(!1);
  }, [s]), ve(() => {
    n ? v(!0) : (y(null), v(!1));
  }, [n]);
  const N = He(
    (J) => {
      y(J), J && (m == null || m(J));
    },
    [m]
  ), L = {
    ...f ?? {}
  }, F = He(() => {
    l == null || l(), V();
  }, [l, V]), Q = He(() => {
    var J, X;
    if (s && u && u.length > 0) {
      v(!0);
      const re = (J = k.current) == null ? void 0 : J.getBoundingClientRect(), je = ((X = S.current) == null ? void 0 : X.offsetHeight) ?? 0, Me = window.innerHeight;
      re && re.top + je > Me ? A(!0) : A(!1);
    }
  }, [s, u]), G = He(() => {
    s && v(!1);
  }, [s]);
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: s ? /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: k,
      onClick: l,
      onMouseEnter: Q,
      onMouseLeave: G,
      className: j([
        "item-collapsed",
        d ?? "",
        g ? z : "",
        n ? "selected" : ""
      ]),
      style: {
        marginBottom: i ? 48 : E ? 8 : 12,
        ...L
      },
      children: [
        typeof e == "string" ? /* @__PURE__ */ t.jsx(
          oe,
          {
            icon: e,
            style: {
              padding: i ? 0 : 16
            },
            className: j(["sidebar-icon", n ? "selected" : ""])
          }
        ) : e,
        i && n ? /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "bottom-indicator-style",
            style: { marginTop: 2 }
          }
        ) : null,
        u && (u == null ? void 0 : u.length) > 0 ? /* @__PURE__ */ t.jsx(
          "div",
          {
            className: j([
              "floating-menu-container",
              x ? "align-bottom" : "align-top",
              p ? "visible" : "hidden"
            ]),
            ref: S,
            children: /* @__PURE__ */ t.jsxs("div", { className: "floating-menu", children: [
              /* @__PURE__ */ t.jsx("div", { className: j(["floating-menu-title"]), children: /* @__PURE__ */ t.jsx(
                xe,
                {
                  className: j(["sublink-text"]),
                  size: R || E ? "small" : "body",
                  variant: "bold",
                  isDark: g,
                  children: a
                }
              ) }),
              u == null ? void 0 : u.map((J, X) => /* @__PURE__ */ t.jsx(
                "div",
                {
                  onClick: () => {
                    N(J);
                  },
                  className: j([
                    b === J ? "selected" : "",
                    "floating-menu-item"
                  ]),
                  children: /* @__PURE__ */ t.jsx(
                    xe,
                    {
                      textColorClass: "$color-text-secondary",
                      className: j([
                        "sublink-text",
                        b === J ? "selected" : ""
                      ]),
                      size: R || E ? "small" : "body",
                      isDark: g,
                      children: J.label
                    }
                  )
                },
                X
              ))
            ] })
          }
        ) : null
      ]
    }
  ) }) : /* @__PURE__ */ t.jsxs("div", { style: { marginBottom: E ? 8 : 12 }, children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        onClick: F,
        className: j([
          "item-expanded",
          d ?? "",
          g ? z : ""
        ]),
        style: {
          boxShadow: n ? "5px 0px 0px 0px #005CBC inset" : void 0
        },
        children: [
          typeof e == "string" ? /* @__PURE__ */ t.jsx(
            oe,
            {
              icon: e,
              className: j(["sidebar-icon", n ? "selected" : ""])
            }
          ) : e,
          /* @__PURE__ */ t.jsx(
            xe,
            {
              className: j([
                "font-item-expanded",
                n ? "selected" : ""
              ]),
              textColorClass: "$color-text-secondary",
              size: R || E ? "small" : "body",
              isDark: g,
              children: a
            }
          ),
          (u == null ? void 0 : u.length) && /* @__PURE__ */ t.jsx(
            oe,
            {
              icon: p ? "keyboard_arrow_up" : "keyboard_arrow_down"
            }
          )
        ]
      }
    ),
    p && (u == null ? void 0 : u.map((J, X) => /* @__PURE__ */ t.jsx(
      "div",
      {
        onClick: () => {
          N(J);
        },
        className: j([
          "sublink-container",
          b === J ? "selected" : "",
          s ? "floating-menu" : "submenu-item"
        ]),
        children: /* @__PURE__ */ t.jsx(
          xe,
          {
            textColorClass: "$color-text-secondary",
            className: j([
              "sublink-text",
              b === J ? "selected" : ""
            ]),
            size: R || E ? "small" : "body",
            isDark: g,
            children: J.label
          }
        )
      },
      X
    )))
  ] }) });
}, Im = ({
  items: e = [],
  bottomText: a = "All Apps",
  showCollapsed: n = !1,
  isBottomIndicator: s = !1,
  height: i = "800px",
  width: l = "256px",
  collapseWidth: d = "72px",
  showBottomAction: f = !1,
  bottomImg: u,
  bottomAction: m = () => {
  },
  navLinkAction: g = () => {
  },
  className: b,
  style: y,
  activeItem: p,
  onToggle: v,
  isDark: x,
  isOverlay: A = !0,
  isShow: S = !0,
  onClose: k,
  backdropStyle: E
}) => {
  const [R, V] = q(n), [N, L] = q(p), { isMobile: F } = lo(), { isDark: Q } = $(), G = Z(
    () => x ?? Q,
    [x, Q]
  );
  ve(() => {
    V(n);
  }, [n]), ve(() => {
    F && V(!1);
  }, [F]), ve(() => {
    L(p);
  }, [p]);
  const J = He(() => {
    V(!R), v == null || v(!R);
  }, [R, v]), X = He(
    (se) => {
      L(se), N !== se && (g == null || g(se)), A && (!se.sublinks || se.sublinks.length === 0) && (k == null || k());
    },
    [N, A, g, k]
  ), re = He(
    (se) => {
      g == null || g(se), A && (!se.sublinks || se.sublinks.length === 0) && (k == null || k());
    },
    [A, g, k]
  ), je = j([
    "sidebar",
    b ?? "",
    G ? z : "",
    F ? "mobile" : "",
    R ? "collapsed" : "expanded",
    A ? "overlay" : "",
    "flex-grow"
  ]), Me = {
    ...y ?? {}
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    S && !R && A ? /* @__PURE__ */ t.jsx(
      "div",
      {
        className: j([
          "sidebar-backdrop",
          G ? z : "",
          F ? "mobile" : ""
        ]),
        style: E,
        role: "overlay",
        onClick: () => {
          k == null || k(), F || J();
        }
      }
    ) : null,
    S ? /* @__PURE__ */ t.jsx(
      "div",
      {
        className: j(["sidebar-container", F ? "flex-grow" : ""]),
        children: /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: je,
            style: {
              width: R ? d : l,
              height: i,
              position: A ? "absolute" : "relative",
              zIndex: 1e3,
              ...Me
            },
            children: [
              /* @__PURE__ */ t.jsx("div", { className: "sidebar-content flex-grow", children: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                F ? null : /* @__PURE__ */ t.jsx(
                  _1,
                  {
                    icon: R ? "menu" : "menu_open",
                    isSelected: !1,
                    label: R ? "" : "Close",
                    isCollapsed: R,
                    isBottomIndicator: !1,
                    onClick: J,
                    className: "sidebar-hamburger",
                    isDark: G
                  },
                  "hamburger"
                ),
                e.map((se, fe) => /* @__PURE__ */ t.jsx(
                  _1,
                  {
                    icon: se.icon,
                    isSelected: N === se,
                    label: se.label,
                    isCollapsed: R,
                    isBottomIndicator: s,
                    onClick: () => {
                      X(se);
                    },
                    subLinks: se.sublinks,
                    navLinkAction: re,
                    isDark: G
                  },
                  fe
                ))
              ] }) }),
              f ? /* @__PURE__ */ t.jsxs(
                "div",
                {
                  onClick: m,
                  className: "bottom-action-container",
                  style: {
                    justifyContent: R ? "center" : "flex-start"
                  },
                  children: [
                    /* @__PURE__ */ t.jsx("div", { className: "bottom-logo-container", children: u ?? /* @__PURE__ */ t.jsx("img", { src: pg, alt: "pepsico" }) }),
                    R ? null : /* @__PURE__ */ t.jsx(xe, { size: "body", variant: "bold", style: { marginBottom: 10 }, children: a })
                  ]
                }
              ) : null
            ]
          }
        )
      }
    ) : null
  ] });
}, gg = ({
  children: e,
  className: a = "",
  icon: n = void 0,
  index: s,
  isActive: i = !1,
  isMenuContent: l = !1,
  isDark: d,
  label: f = /* @__PURE__ */ t.jsx(t.Fragment, {}),
  onClick: u = void 0,
  showOnlyIcon: m = !1,
  style: g = {},
  subnavLevel: b = -1,
  // url = '',
  ...y
}) => {
  const { isDark: p } = $(), v = Z(
    () => d ?? p,
    [p, d]
  ), x = Z(() => b > -1, [b]), [A, S] = q(i), k = Z(
    () => j([
      "sidenav-item",
      A ? Or : "",
      v ? z : "",
      a
    ]),
    [a, v, A]
  ), E = {
    cursor: "",
    width: "100%",
    backgroundColor: l && i ? "var(--blue-400, #dfeaf9)" : "",
    ...g
  }, R = (V) => {
    V.stopPropagation(), !(A && !e) && (S((N) => !N), u == null || u(s));
  };
  return ve(() => {
    S(i);
  }, [i]), /* @__PURE__ */ t.jsxs(
    "div",
    {
      "aria-checked": A,
      "aria-expanded": A,
      "aria-pressed": A,
      "aria-selected": A,
      className: k,
      "data-index": s,
      "data-subnav": x ? b : void 0,
      onClick: R,
      style: E,
      ...y,
      children: [
        /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: j(["menu-container", bs, Ss]),
            style: {
              alignItems: "center",
              display: "flex",
              flexGrow: 1,
              gap: x ? void 0 : "1rem",
              justifyContent: "space-between"
            },
            children: [
              n && /* @__PURE__ */ t.jsx(
                oe,
                {
                  alt: "",
                  className: j([
                    A ? Hn : Bt
                  ]),
                  icon: n,
                  size: "large",
                  style: {
                    display: "inline-flex",
                    flexGrow: 0
                  }
                }
              ),
              !m && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: j(["label", x ? As : ""]),
                    style: {
                      display: "inline-flex",
                      flexGrow: 1
                    },
                    children: f
                  }
                ),
                e && /* @__PURE__ */ t.jsx(
                  oe,
                  {
                    alt: A ? "collapse" : "expand",
                    className: j([
                      // showingActive
                      // 	? colorIconActive
                      // 	: colorIconDefault,
                      Bt
                    ]),
                    icon: A ? "keyboard_arrow_up" : "keyboard_arrow_down",
                    size: "large",
                    style: {
                      display: "inline-flex",
                      flexGrow: 0
                    }
                  }
                )
              ] })
            ]
          }
        ),
        !m && e && /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "submenu-container",
            style: {
              display: A ? void 0 : "none"
              // TODO(@UniAwill) - animate this ???
              // height: showingActive ? undefined : 0,
              // transition: 'height 5000ms ease-in-out',
            },
            children: e
          }
        )
      ]
    }
  );
}, Nm = ({
  children: e,
  isCollapsible: a = !0,
  isDark: n,
  onClose: s = void 0,
  onUpdate: i = void 0,
  selectedItemIndex: l = -1,
  showClose: d = !1,
  showOnlyIcons: f = !1,
  subnavLevel: u = -1,
  style: m = {},
  ...g
}) => {
  const { isDark: b } = $(), y = Z(() => n ?? b, [n, b]), p = Z(() => u > -1, [u]), [v, x] = q(l), [A, S] = q(f), [k, E] = q(!1), R = () => {
    E(!k);
  };
  e == null || e.map((G, J) => ({
    ...G,
    // Disable the item if the sidebar is collapsed
    props: {
      ...G.props,
      index: J,
      disabled: k
    }
  }));
  const V = j([
    "sidenav",
    g.size ?? "",
    y ? z : "",
    g.className ?? ""
  ]), N = {
    display: "flex",
    flexDirection: "column",
    gap: p ? 0 : "1rem",
    ...m
  }, L = (G) => {
    G !== v && (x(G), i == null || i(G));
  }, F = () => {
    s == null || s();
  };
  ve(() => {
    L(l);
  }, [l]), ve(() => {
    S(f);
  }, [f]);
  const Q = Z(() => _r.Children.count(e) === 0 ? [] : _r.Children.count(e) === 1 ? [e] : e, [e]);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      "aria-expanded": !A,
      className: V,
      "data-subnav": p ? u : void 0,
      style: N,
      children: [
        /* @__PURE__ */ t.jsx("button", { onClick: R, children: k ? "Expand" : "Collapse" }),
        d && /* @__PURE__ */ t.jsx(
          gg,
          {
            index: -2,
            label: /* @__PURE__ */ t.jsxs(
              xe,
              {
                className: j([p ? Bn : Ur]),
                style: {
                  alignItems: "center",
                  color: "currentcolor",
                  cursor: "pointer",
                  display: "inline-flex",
                  flexDirection: "row",
                  flexGrow: 1,
                  justifyContent: "space-between"
                },
                children: [
                  "Close",
                  /* @__PURE__ */ t.jsx(oe, { icon: "close" })
                ]
              }
            ),
            onClick: F,
            subnavLevel: u
          }
        ),
        Q == null ? void 0 : Q.map((G, J) => ({
          ...G,
          // !! NOTE - in below props, parent (this SideNav) takes precedence over child (SideNavItem) values
          props: {
            ...G.props,
            index: J,
            isActive: J === v || G.props.isActive,
            key: G.key ?? J,
            onClick: (X) => {
              var re, je;
              (je = (re = G.props).onClick) == null || je.call(re, X), L(X);
            },
            showOnlyIcon: f || G.props.showOnlyIcon,
            subnavLevel: u ?? G.props.subnavLevel
          }
        }))
      ]
    }
  );
}, mg = ({ fill: e }) => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",
        fill: e
      }
    )
  }
), hg = ({
  type: e = "vertical",
  imageUrl: a,
  onCloseSidePanel: n = () => {
  },
  isDark: s,
  title: i,
  showTertiaryButton: l = !0,
  showLink: d = !0,
  showSecondaryButton: f = !0,
  tertiaryButtonProps: u = {
    size: "medium",
    text: "Button",
    variant: "tertiary",
    onClick: () => console.log("tertiary button clicked")
  },
  linkProps: m = {
    iconLeading: "",
    iconTrailing: "arrow_forward",
    label: "Link",
    size: "medium",
    onClick: () => console.log("link clicked")
  },
  secondaryButtonProps: g = {
    size: "medium",
    text: "Button",
    variant: "secondary",
    onClick: () => console.log("secondary button clicked")
  },
  primaryButtonProps: b = {
    size: "medium",
    text: "Button",
    variant: "primary",
    onClick: () => console.log("primary button clicked")
  },
  horizontalSidepanelWidth: y = "400px",
  verticalSidepanelHeight: p = "400px",
  imageContainerStyle: v,
  showFooter: x = !0,
  children: A
}) => {
  const S = Ve(null);
  return j0(S, n), /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: j(["sidepanel", e, s ? "dark" : ""]),
      style: e === "vertical" ? { width: y } : { height: p },
      ref: S,
      "data-testid": "sidepanel-content",
      children: [
        /* @__PURE__ */ t.jsx("div", { className: j(["image-container"]), children: a && e === "vertical" ? /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: j(["header-image-wrapper"]),
            style: v,
            children: [
              /* @__PURE__ */ t.jsx("img", { className: "header-image", src: a, alt: "Header Image" }),
              /* @__PURE__ */ t.jsx("button", { className: "image-close-wrapper", onClick: n, children: /* @__PURE__ */ t.jsx(oe, { icon: "close", className: it }) })
            ]
          }
        ) : null }),
        /* @__PURE__ */ t.jsxs("div", { className: j(["sidepanel-header", Ur, J2]), children: [
          /* @__PURE__ */ t.jsx(
            "span",
            {
              className: j([E2, it, s ? "dark" : ""]),
              children: i
            }
          ),
          a ? null : /* @__PURE__ */ t.jsx("button", { className: "header-close-btn", onClick: n, children: /* @__PURE__ */ t.jsx(mg, { fill: s ? b2 : x2 }) })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: j(["content", Cs, J2]), children: A }),
        x && /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: j([
              "sidepanel-footer",
              Ur,
              J2,
              Eg.effects.Shadow3,
              s ? "dark" : ""
            ]),
            children: [
              /* @__PURE__ */ t.jsxs("div", { className: "button-container", children: [
                l && /* @__PURE__ */ t.jsx(Le, { ...u, isDark: s }),
                d && /* @__PURE__ */ t.jsx(U0, { ...m, isDark: s, useAnchor: !0 })
              ] }),
              /* @__PURE__ */ t.jsxs("div", { className: "button-container", children: [
                f && /* @__PURE__ */ t.jsx(Le, { ...g, isDark: s }),
                /* @__PURE__ */ t.jsx(Le, { ...b, isDark: s })
              ] })
            ]
          }
        )
      ]
    }
  );
};
function vg(e) {
  ve(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [e]);
}
const Pm = ({
  className: e,
  style: a,
  isDark: n,
  showSidePanel: s = !1,
  ...i
}) => {
  const { isDark: l } = $(), d = j([
    "sidepanel-container",
    n ?? l ? z : "",
    e ?? ""
  ]), f = {
    ...a ?? {}
    // default styles below
  };
  return vg(s), s ? hn(
    /* @__PURE__ */ t.jsxs("div", { className: d, style: f, "data-testid": "sidepanel", children: [
      /* @__PURE__ */ t.jsx("div", { className: "overlay" }),
      /* @__PURE__ */ t.jsx(hg, { ...i, isDark: n ?? l })
    ] }),
    document.body
  ) : null;
}, yg = "data:image/svg+xml,%3csvg%20width='99'%20height='24'%20viewBox='0%200%2099%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Logo'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.2963%2015.6106H27.5778C28.468%2015.6106%2028.8065%2015.9344%2028.8065%2016.7275C28.8065%2017.4912%2028.4679%2017.8146%2027.5778%2017.8146H25.2963V15.6106ZM21.7617%2023.6325H25.2964V20.3705H29.0825C31.5893%2020.3705%2032.4918%2018.8139%2032.4918%2016.8013C32.4918%2014.4651%2031.5638%2013.1431%2029.057%2013.1431H21.7617V23.6325ZM33.6575%2013.1431H43.1709V15.6988H37.1922V17.1093H42.7454V19.666H37.1922V21.0763H43.1709V23.6325H33.6575V13.1431ZM48.1852%2015.6106H50.4666C51.3566%2015.6106%2051.6953%2015.9344%2051.6953%2016.7275C51.6953%2017.4912%2051.3566%2017.8146%2050.4666%2017.8146H48.1852V15.6106ZM44.6504%2023.6325H48.1852V20.3705H51.9706C54.478%2020.3705%2055.3807%2018.8139%2055.3807%2016.8013C55.3807%2014.4651%2054.4527%2013.1431%2051.9454%2013.1431H44.6504V23.6325ZM58.8021%2019.181C57.0726%2018.872%2056.3586%2017.6968%2056.3586%2016.2281C56.3586%2013.5097%2058.6274%2012.7758%2061.5348%2012.7758C65.5204%2012.7758%2067.1628%2013.9947%2067.2883%2016.2134H63.1767C63.1767%2015.7873%2062.9635%2015.5223%2062.6382%2015.3756C62.3247%2015.2144%2061.9238%2015.1557%2061.5348%2015.1557C60.482%2015.1557%2060.1188%2015.4638%2060.1188%2015.905C60.1188%2016.1983%2060.2311%2016.39%2060.5821%2016.4485L64.8062%2017.1827C66.5865%2017.4912%2067.6896%2018.4608%2067.6896%2020.238C67.6896%2022.7952%2065.9096%2023.9998%2061.9358%2023.9998C59.2159%2023.9998%2056.245%2023.5592%2056.2327%2020.4739H60.4945C60.5065%2020.8261%2060.6198%2021.0611%2060.8708%2021.2228C61.1333%2021.3699%2061.5222%2021.4436%2062.0735%2021.4436C63.1763%2021.4436%2063.4777%2021.0907%2063.4777%2020.5911C63.4777%2020.2826%2063.3144%2019.9743%2062.839%2019.8866L58.8021%2019.181ZM68.8423%2013.1431H72.3769V23.6325H68.8423V13.1431ZM85.4767%2019.5483C85.2511%2020.9293%2084.8494%2022.0459%2083.9719%2022.8096C83.1075%2023.5737%2081.7533%2023.9998%2079.5978%2023.9998C77.4544%2023.9998%2073.4808%2023.8231%2073.4808%2018.3881C73.4808%2012.952%2077.4544%2012.7757%2079.5978%2012.7757C81.7281%2012.7757%2085.0126%2013.0986%2085.4767%2017.2567H81.4907C81.3903%2016.5068%2080.9634%2015.4198%2079.5978%2015.4198C78.1555%2015.4198%2077.2407%2016.2571%2077.2407%2018.3879C77.2407%2020.5182%2078.1309%2021.355%2079.4219%2021.355C80.5378%2021.355%2081.2021%2020.8115%2081.4905%2019.5482H85.4767V19.5483ZM90.1017%2018.3883C90.1017%2016.2573%2091.0171%2015.4201%2092.4588%2015.4201C93.8999%2015.4201%2094.8155%2016.2575%2094.8155%2018.3883C94.8155%2020.5185%2093.8999%2021.3553%2092.4588%2021.3553C91.0171%2021.3551%2090.1017%2020.5183%2090.1017%2018.3883ZM86.3409%2018.3883C86.3409%2023.8231%2090.3145%2024%2092.4586%2024C94.6021%2024%2098.5757%2023.8233%2098.5757%2018.3883C98.5757%2012.9522%2094.6021%2012.7758%2092.4586%2012.7758C90.3145%2012.7758%2086.3409%2012.952%2086.3409%2018.3883ZM16.4205%2013.2471C16.6488%208.21462%2012.5319%202.5473%206.9193%201.84679L6.92889%201.77802C12.462%201.77802%2016.7037%207.17783%2016.7037%2011.4378C16.6984%2012.3246%2016.632%2012.874%2016.5135%2013.2729L16.4205%2013.2471ZM16.0853%2013.8868C15.7171%2014.361%2015.2541%2014.8384%2014.7117%2015.2916C13.7138%209.24148%209.49639%203.95105%206.5147%202.40687L6.45083%202.4538C9.44948%205.04812%2013.026%2010.0868%2014.4169%2015.529C13.7074%2016.0784%2012.9411%2016.541%2012.1326%2016.908C9.30291%2013.5063%206.66486%206.94589%205.81473%202.78285L5.72827%202.81029C5.74744%206.85131%208.46905%2013.7114%2011.7881%2017.0587C11.0268%2017.3763%2010.2355%2017.6068%209.42756%2017.7462C6.24605%2016.4176%203.98144%2012.1621%203.98144%207.8029C3.98144%204.95715%204.80451%203.19674%204.96375%202.83646L4.89595%202.80812C4.70332%203.11533%203.49756%204.87484%203.49756%207.94712C3.49756%2012.8746%205.80275%2016.6409%208.86321%2017.8269C7.76879%2017.9538%206.66226%2017.8991%205.58392%2017.6647L5.56115%2017.7397C5.88853%2017.8668%206.99926%2018.3583%208.6937%2018.3583C12.5262%2018.3583%2015.117%2015.8481%2016.1599%2013.9401L16.0853%2013.8868Z'%20fill='%23004C97'/%3e%3cpath%20id='Vector_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.31683%200C5.4115%200%202.00482%202.2104%202.00482%204.23091C2.00482%205.01247%202.68304%205.67274%204.08674%205.67274C7.34531%205.67274%2010.3727%203.31271%2010.3727%201.47757C10.3727%200.511897%209.49297%200%208.31683%200ZM9.47671%201.42053C9.47671%202.96741%206.65887%204.85832%204.30334%204.85832C3.26264%204.85832%202.70033%204.42657%202.70033%203.71414C2.70033%202.14506%205.55019%200.286272%207.75967%200.286272C9.20018%200.286272%209.47671%201.05899%209.47671%201.42053Z'%20fill='%231A99D5'/%3e%3cpath%20id='Vector_3'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.825765%205.1665C0.744091%205.31542%200.417053%205.99049%200.417053%206.68217C0.417053%207.96499%201.64661%209.15594%203.90814%209.15594C8.25877%209.15594%2013.2852%205.78003%2013.2852%202.64635C13.2852%201.2397%2012.0221%200.474922%2011.1451%200.316803L11.1287%200.371675C11.4014%200.462648%2012.4007%200.952347%2012.4007%202.20539C12.4007%204.70226%207.96273%208.10434%203.54206%208.10434C1.84969%208.10434%200.783473%207.22367%200.783473%205.94085C0.783473%205.53509%200.863606%205.26777%200.884838%205.19033L0.825765%205.1665Z'%20fill='%23F47A3C'/%3e%3cpath%20id='Vector_4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.1007%202.88065C15.2201%202.97613%2015.9367%203.60571%2015.9367%204.79628C15.9367%208.85571%209.90307%2012.8475%204.56893%2012.8475C1.38793%2012.8475%20-0.0621691%2011.1917%200.00203987%209.72157H0.0590575C0.183709%2010.4851%201.21653%2011.8513%204.00063%2011.8513C9.34145%2011.8513%2015.3047%207.72091%2015.3047%204.10208C15.3047%203.48135%2015.1447%203.09454%2015.0543%202.92252L15.1007%202.88065Z'%20fill='%2316A751'/%3e%3cpath%20id='Vector_5'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.1032%206.67023C17.1282%206.75669%2017.2582%207.1453%2017.2582%207.75394C17.2582%2012.2697%2011.1521%2016.1356%205.84163%2016.1356C3.10838%2016.1356%201.68105%2014.736%201.3797%2014.1676L1.42833%2014.1297C2.18462%2014.827%203.67427%2015.3567%205.41271%2015.3567C10.1029%2015.3567%2017.1013%2011.5951%2017.0388%206.68665L17.1032%206.67023Z'%20fill='%23EC2028'/%3e%3c/g%3e%3c/svg%3e", Cg = "data:image/svg+xml,%3csvg%20width='99'%20height='24'%20viewBox='0%200%2099%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Logo'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.2963%2015.6106H27.5778C28.468%2015.6106%2028.8065%2015.9344%2028.8065%2016.7275C28.8065%2017.4912%2028.4679%2017.8146%2027.5778%2017.8146H25.2963V15.6106ZM21.7617%2023.6325H25.2964V20.3705H29.0825C31.5893%2020.3705%2032.4918%2018.8139%2032.4918%2016.8013C32.4918%2014.4651%2031.5638%2013.1431%2029.057%2013.1431H21.7617V23.6325ZM33.6575%2013.1431H43.1709V15.6988H37.1922V17.1093H42.7454V19.666H37.1922V21.0763H43.1709V23.6325H33.6575V13.1431ZM48.1852%2015.6106H50.4666C51.3566%2015.6106%2051.6953%2015.9344%2051.6953%2016.7275C51.6953%2017.4912%2051.3566%2017.8146%2050.4666%2017.8146H48.1852V15.6106ZM44.6504%2023.6325H48.1852V20.3705H51.9706C54.478%2020.3705%2055.3807%2018.8139%2055.3807%2016.8013C55.3807%2014.4651%2054.4527%2013.1431%2051.9454%2013.1431H44.6504V23.6325ZM58.8021%2019.181C57.0726%2018.872%2056.3586%2017.6968%2056.3586%2016.2281C56.3586%2013.5097%2058.6274%2012.7758%2061.5348%2012.7758C65.5204%2012.7758%2067.1628%2013.9947%2067.2883%2016.2134H63.1767C63.1767%2015.7873%2062.9635%2015.5223%2062.6382%2015.3756C62.3247%2015.2144%2061.9238%2015.1557%2061.5348%2015.1557C60.482%2015.1557%2060.1188%2015.4638%2060.1188%2015.905C60.1188%2016.1983%2060.2311%2016.39%2060.5821%2016.4485L64.8062%2017.1827C66.5865%2017.4912%2067.6896%2018.4608%2067.6896%2020.238C67.6896%2022.7952%2065.9096%2023.9998%2061.9358%2023.9998C59.2159%2023.9998%2056.245%2023.5592%2056.2327%2020.4739H60.4945C60.5065%2020.8261%2060.6198%2021.0611%2060.8708%2021.2228C61.1333%2021.3699%2061.5222%2021.4436%2062.0735%2021.4436C63.1763%2021.4436%2063.4777%2021.0907%2063.4777%2020.5911C63.4777%2020.2826%2063.3144%2019.9743%2062.839%2019.8866L58.8021%2019.181ZM68.8423%2013.1431H72.3769V23.6325H68.8423V13.1431ZM85.4767%2019.5483C85.2511%2020.9293%2084.8494%2022.0459%2083.9719%2022.8096C83.1075%2023.5737%2081.7533%2023.9998%2079.5978%2023.9998C77.4544%2023.9998%2073.4808%2023.8231%2073.4808%2018.3881C73.4808%2012.952%2077.4544%2012.7757%2079.5978%2012.7757C81.7281%2012.7757%2085.0126%2013.0986%2085.4767%2017.2567H81.4907C81.3903%2016.5068%2080.9634%2015.4198%2079.5978%2015.4198C78.1555%2015.4198%2077.2407%2016.2571%2077.2407%2018.3879C77.2407%2020.5182%2078.1309%2021.355%2079.4219%2021.355C80.5378%2021.355%2081.2021%2020.8115%2081.4905%2019.5482H85.4767V19.5483ZM90.1017%2018.3883C90.1017%2016.2573%2091.0171%2015.4201%2092.4588%2015.4201C93.8999%2015.4201%2094.8155%2016.2575%2094.8155%2018.3883C94.8155%2020.5185%2093.8999%2021.3553%2092.4588%2021.3553C91.0171%2021.3551%2090.1017%2020.5183%2090.1017%2018.3883ZM86.3409%2018.3883C86.3409%2023.8231%2090.3145%2024%2092.4586%2024C94.6021%2024%2098.5757%2023.8233%2098.5757%2018.3883C98.5757%2012.9522%2094.6021%2012.7758%2092.4586%2012.7758C90.3145%2012.7758%2086.3409%2012.952%2086.3409%2018.3883ZM16.4205%2013.2471C16.6488%208.21462%2012.5319%202.5473%206.9193%201.84679L6.92889%201.77802C12.462%201.77802%2016.7037%207.17783%2016.7037%2011.4378C16.6984%2012.3246%2016.632%2012.874%2016.5135%2013.2729L16.4205%2013.2471ZM16.0853%2013.8868C15.7171%2014.361%2015.2541%2014.8384%2014.7117%2015.2916C13.7138%209.24148%209.49639%203.95105%206.5147%202.40687L6.45083%202.4538C9.44948%205.04812%2013.026%2010.0868%2014.4169%2015.529C13.7074%2016.0784%2012.9411%2016.541%2012.1326%2016.908C9.30291%2013.5063%206.66486%206.94589%205.81473%202.78285L5.72827%202.81029C5.74744%206.85131%208.46905%2013.7114%2011.7881%2017.0587C11.0268%2017.3763%2010.2355%2017.6068%209.42756%2017.7462C6.24605%2016.4176%203.98144%2012.1621%203.98144%207.8029C3.98144%204.95715%204.80451%203.19674%204.96375%202.83646L4.89595%202.80812C4.70332%203.11533%203.49756%204.87484%203.49756%207.94712C3.49756%2012.8746%205.80275%2016.6409%208.86321%2017.8269C7.76879%2017.9538%206.66226%2017.8991%205.58392%2017.6647L5.56115%2017.7397C5.88853%2017.8668%206.99926%2018.3583%208.6937%2018.3583C12.5262%2018.3583%2015.117%2015.8481%2016.1599%2013.9401L16.0853%2013.8868Z'%20fill='%23fff'/%3e%3cpath%20id='Vector_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.31683%200C5.4115%200%202.00482%202.2104%202.00482%204.23091C2.00482%205.01247%202.68304%205.67274%204.08674%205.67274C7.34531%205.67274%2010.3727%203.31271%2010.3727%201.47757C10.3727%200.511897%209.49297%200%208.31683%200ZM9.47671%201.42053C9.47671%202.96741%206.65887%204.85832%204.30334%204.85832C3.26264%204.85832%202.70033%204.42657%202.70033%203.71414C2.70033%202.14506%205.55019%200.286272%207.75967%200.286272C9.20018%200.286272%209.47671%201.05899%209.47671%201.42053Z'%20fill='%23fff'/%3e%3cpath%20id='Vector_3'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.825765%205.1665C0.744091%205.31542%200.417053%205.99049%200.417053%206.68217C0.417053%207.96499%201.64661%209.15594%203.90814%209.15594C8.25877%209.15594%2013.2852%205.78003%2013.2852%202.64635C13.2852%201.2397%2012.0221%200.474922%2011.1451%200.316803L11.1287%200.371675C11.4014%200.462648%2012.4007%200.952347%2012.4007%202.20539C12.4007%204.70226%207.96273%208.10434%203.54206%208.10434C1.84969%208.10434%200.783473%207.22367%200.783473%205.94085C0.783473%205.53509%200.863606%205.26777%200.884838%205.19033L0.825765%205.1665Z'%20fill='%23fff'/%3e%3cpath%20id='Vector_4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.1007%202.88065C15.2201%202.97613%2015.9367%203.60571%2015.9367%204.79628C15.9367%208.85571%209.90307%2012.8475%204.56893%2012.8475C1.38793%2012.8475%20-0.0621691%2011.1917%200.00203987%209.72157H0.0590575C0.183709%2010.4851%201.21653%2011.8513%204.00063%2011.8513C9.34145%2011.8513%2015.3047%207.72091%2015.3047%204.10208C15.3047%203.48135%2015.1447%203.09454%2015.0543%202.92252L15.1007%202.88065Z'%20fill='%23fff'/%3e%3cpath%20id='Vector_5'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.1032%206.67023C17.1282%206.75669%2017.2582%207.1453%2017.2582%207.75394C17.2582%2012.2697%2011.1521%2016.1356%205.84163%2016.1356C3.10838%2016.1356%201.68105%2014.736%201.3797%2014.1676L1.42833%2014.1297C2.18462%2014.827%203.67427%2015.3567%205.41271%2015.3567C10.1029%2015.3567%2017.1013%2011.5951%2017.0388%206.68665L17.1032%206.67023Z'%20fill='%23fff'/%3e%3c/g%3e%3c/svg%3e", xg = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Pepsico%20Symbol'%3e%3cmask%20id='mask0_36088_10421'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20id='Rectangle%20546'%20width='32'%20height='32'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_36088_10421)'%3e%3cg%20id='Group%20203'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M26.0297%2021.1814C26.3273%2014.6205%2020.9601%207.23205%2013.6429%206.31878L13.6554%206.22913C20.869%206.22913%2026.3989%2013.2689%2026.3989%2018.8226C26.392%2019.9787%2026.3054%2020.695%2026.1509%2021.2151L26.0297%2021.1814ZM25.5926%2022.0154C25.1127%2022.6336%2024.5091%2023.256%2023.8019%2023.8469C22.501%2015.9593%2017.0027%209.06211%2013.1155%207.04897L13.0322%207.11015C16.9415%2010.4924%2021.6043%2017.0613%2023.4175%2024.1563C22.4926%2024.8725%2021.4936%2025.4757%2020.4395%2025.9541C16.7505%2021.5194%2013.3112%2012.9665%2012.2029%207.53914L12.0902%207.57491C12.1152%2012.8432%2015.6634%2021.7867%2019.9904%2026.1506C18.9979%2026.5646%2017.9662%2026.8651%2016.913%2027.047C12.7652%2025.3148%209.81284%2019.7669%209.81284%2014.0838C9.81284%2010.3738%2010.8859%208.07872%2011.0935%207.60903L11.0051%207.57208C10.754%207.97259%209.18201%2010.2665%209.18201%2014.2718C9.18201%2020.6957%2012.1873%2025.6059%2016.1772%2027.1521C14.7504%2027.3176%2013.3078%2027.2462%2011.902%2026.9406L11.8723%2027.0385C12.2991%2027.2041%2013.7472%2027.8449%2015.9562%2027.8449C20.9527%2027.8449%2024.3303%2024.5724%2025.69%2022.0848L25.5926%2022.0154Z'%20fill='%2306549C'/%3e%3cpath%20id='Vector_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.4649%203.91113C11.6772%203.91113%207.2359%206.79284%207.2359%209.42698C7.2359%2010.4459%208.1201%2011.3067%209.9501%2011.3067C14.1983%2011.3067%2018.1452%208.22992%2018.1452%205.83744C18.1452%204.57849%2016.9982%203.91113%2015.4649%203.91113ZM16.977%205.76308C16.977%207.77976%2013.3034%2010.2449%2010.2325%2010.2449C8.87572%2010.2449%208.14264%209.68207%208.14264%208.75327C8.14264%206.70765%2011.858%204.28435%2014.7385%204.28435C16.6165%204.28435%2016.977%205.29174%2016.977%205.76308Z'%20fill='%231A99D5'/%3e%3cpath%20id='Vector_3'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.69879%2010.6468C5.59232%2010.8409%205.16595%2011.721%205.16595%2012.6228C5.16595%2014.2952%206.76894%2015.8478%209.7173%2015.8478C15.3892%2015.8478%2021.9422%2011.4466%2021.9422%207.36126C21.9422%205.52741%2020.2955%204.53036%2019.1521%204.32422L19.1307%204.39576C19.4863%204.51436%2020.7891%205.15278%2020.7891%206.78637C20.7891%2010.0415%2015.0033%2014.4769%209.24004%2014.4769C7.03368%2014.4769%205.64366%2013.3287%205.64366%2011.6563C5.64366%2011.1273%205.74813%2010.7788%205.77581%2010.6779L5.69879%2010.6468Z'%20fill='%23F47A3C'/%3e%3cpath%20id='Vector_4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.3091%207.66663C24.4647%207.79111%2025.3989%208.6119%2025.3989%2010.1641C25.3989%2015.4563%2017.5329%2020.6604%2010.5787%2020.6604C6.43164%2020.6604%204.54114%2018.5018%204.62485%2016.5852H4.69919C4.86169%2017.5806%206.20819%2019.3617%209.83783%2019.3617C16.8007%2019.3617%2024.5749%2013.9769%2024.5749%209.25902C24.5749%208.44976%2024.3665%207.94548%2024.2486%207.72122L24.3091%207.66663Z'%20fill='%2316A751'/%3e%3cpath%20id='Vector_5'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M26.9197%2012.6072C26.9523%2012.7199%2027.1217%2013.2265%2027.1217%2014.02C27.1217%2019.9072%2019.1613%2024.9472%2012.2379%2024.9472C8.67458%2024.9472%206.81377%2023.1226%206.4209%2022.3815L6.48429%2022.3321C7.47028%2023.2412%209.41234%2023.9318%2011.6787%2023.9318C17.7933%2023.9318%2026.9172%2019.0278%2026.8357%2012.6286L26.9197%2012.6072Z'%20fill='%23EC2028'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", bg = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Pepsico%20Symbol'%3e%3cmask%20id='mask0_36088_11033'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20id='Rectangle%20546'%20width='32'%20height='32'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_36088_11033)'%3e%3cg%20id='Group%20203'%3e%3cpath%20id='Vector'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M26.0297%2021.1814C26.3273%2014.6205%2020.9601%207.23205%2013.6429%206.31878L13.6554%206.22913C20.869%206.22913%2026.3989%2013.2689%2026.3989%2018.8226C26.392%2019.9787%2026.3054%2020.695%2026.1509%2021.2151L26.0297%2021.1814ZM25.5926%2022.0154C25.1127%2022.6336%2024.5091%2023.256%2023.8019%2023.8469C22.501%2015.9593%2017.0027%209.06211%2013.1155%207.04897L13.0322%207.11015C16.9415%2010.4924%2021.6043%2017.0613%2023.4175%2024.1563C22.4926%2024.8725%2021.4936%2025.4757%2020.4395%2025.9541C16.7505%2021.5194%2013.3112%2012.9665%2012.2029%207.53914L12.0902%207.57491C12.1152%2012.8432%2015.6634%2021.7867%2019.9904%2026.1506C18.9979%2026.5646%2017.9662%2026.8651%2016.913%2027.047C12.7652%2025.3148%209.81284%2019.7669%209.81284%2014.0838C9.81284%2010.3738%2010.8859%208.07872%2011.0935%207.60903L11.0051%207.57208C10.754%207.97259%209.18201%2010.2665%209.18201%2014.2718C9.18201%2020.6957%2012.1873%2025.6059%2016.1772%2027.1521C14.7504%2027.3176%2013.3078%2027.2462%2011.902%2026.9406L11.8723%2027.0385C12.2991%2027.2041%2013.7472%2027.8449%2015.9562%2027.8449C20.9527%2027.8449%2024.3303%2024.5724%2025.69%2022.0848L25.5926%2022.0154Z'%20fill='white'/%3e%3cpath%20id='Vector_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.4649%203.91113C11.6772%203.91113%207.2359%206.79284%207.2359%209.42698C7.2359%2010.4459%208.1201%2011.3067%209.9501%2011.3067C14.1983%2011.3067%2018.1452%208.22992%2018.1452%205.83744C18.1452%204.57849%2016.9982%203.91113%2015.4649%203.91113ZM16.977%205.76308C16.977%207.77976%2013.3034%2010.2449%2010.2325%2010.2449C8.87572%2010.2449%208.14264%209.68207%208.14264%208.75327C8.14264%206.70765%2011.858%204.28435%2014.7385%204.28435C16.6165%204.28435%2016.977%205.29174%2016.977%205.76308Z'%20fill='white'/%3e%3cpath%20id='Vector_3'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.69879%2010.6468C5.59232%2010.8409%205.16595%2011.721%205.16595%2012.6228C5.16595%2014.2952%206.76894%2015.8478%209.7173%2015.8478C15.3892%2015.8478%2021.9422%2011.4466%2021.9422%207.36126C21.9422%205.52741%2020.2955%204.53036%2019.1521%204.32422L19.1307%204.39576C19.4863%204.51436%2020.7891%205.15278%2020.7891%206.78637C20.7891%2010.0415%2015.0033%2014.4769%209.24004%2014.4769C7.03368%2014.4769%205.64366%2013.3287%205.64366%2011.6563C5.64366%2011.1273%205.74813%2010.7788%205.77581%2010.6779L5.69879%2010.6468Z'%20fill='white'/%3e%3cpath%20id='Vector_4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.3091%207.66663C24.4647%207.79111%2025.3989%208.6119%2025.3989%2010.1641C25.3989%2015.4563%2017.5329%2020.6604%2010.5787%2020.6604C6.43164%2020.6604%204.54114%2018.5018%204.62485%2016.5852H4.69919C4.86169%2017.5806%206.20819%2019.3617%209.83783%2019.3617C16.8007%2019.3617%2024.5749%2013.9769%2024.5749%209.25902C24.5749%208.44976%2024.3665%207.94548%2024.2486%207.72122L24.3091%207.66663Z'%20fill='white'/%3e%3cpath%20id='Vector_5'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M26.9197%2012.6072C26.9523%2012.7199%2027.1217%2013.2265%2027.1217%2014.02C27.1217%2019.9072%2019.1613%2024.9472%2012.2379%2024.9472C8.67458%2024.9472%206.81377%2023.1226%206.4209%2022.3815L6.48429%2022.3321C7.47028%2023.2412%209.41234%2023.9318%2011.6787%2023.9318C17.7933%2023.9318%2026.9172%2019.0278%2026.8357%2012.6286L26.9197%2012.6072Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", en = ({
  icon: e,
  onClickIcon: a,
  dropdownContent: n,
  isDark: s
}) => {
  const { isDark: i } = $(), [l, d] = q(!1), f = Ve(null);
  j0(f, () => d(!1));
  const u = () => {
    d(!l), a == null || a();
  }, m = (g) => {
    g.stopPropagation();
  };
  return /* @__PURE__ */ t.jsxs("span", { className: "icon-dropdown", onClick: u, ref: f, children: [
    /* @__PURE__ */ t.jsx(
      "span",
      {
        className: j([
          "icon-wrapper",
          s ?? i ? z : "",
          l ? "active" : ""
        ]),
        children: e
      }
    ),
    l && n && /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "header-dropdown-content",
        onClick: m,
        children: Kr(n) && or(
          n,
          { isDark: s ?? i }
        )
      }
    )
  ] });
}, Vm = ({
  logoType: e,
  logoText: a,
  logoImage: n,
  menu: s = "main",
  isDark: i,
  tabOptions: l = [],
  customToolbarIcons: d,
  status: f,
  avatar: u,
  primaryButton: m,
  secondaryButton: g,
  appSwitcher: b,
  menuIconProps: y
}) => {
  const { isDark: p } = $(), { isMobile: v, isTablet: x } = lo(), A = i || p, S = j([
    "website-header",
    x ? "tablet" : "",
    v ? "mobile" : "",
    A ? z : ""
  ]), [k, E] = q(s);
  return ve(() => {
    const R = () => {
      E(window.innerWidth <= 834 ? "secondary" : s);
    };
    return window.addEventListener("resize", R), R(), () => window.removeEventListener("resize", R);
  }, [s]), /* @__PURE__ */ t.jsxs("header", { className: S, children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: j([
          "main-container",
          p ? "dark" : "",
          v ? "mobile" : ""
        ]),
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "left-part", children: [
            /* @__PURE__ */ t.jsxs("div", { className: j(["logo", v ? "mobile" : ""]), children: [
              v && /* @__PURE__ */ t.jsx(oe, { ...y, isDark: p }),
              e === "fulllogo" ? /* @__PURE__ */ t.jsx("img", { src: A ? Cg : yg, alt: "full logo" }) : /* @__PURE__ */ t.jsx("img", { src: A ? bg : xg, alt: "Symbol" }),
              e !== "fulllogo" && /* @__PURE__ */ t.jsx("div", { className: j(["divider", p ? "dark" : ""]) }),
              a && e === "symbol" && /* @__PURE__ */ t.jsx(xe, { size: "body", variant: "bold", isDark: p, children: a }),
              n && e === "symbol" && /* @__PURE__ */ t.jsx("img", { src: n, alt: "logo" })
            ] }),
            k === "main" && !v && /* @__PURE__ */ t.jsx("div", { className: "tab-carousel", children: /* @__PURE__ */ t.jsx(rr, { isDark: p, children: l.map((R, V) => /* @__PURE__ */ t.jsx(Et, { className: "header-navigation-tab", ...R }, V)) }) })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "right-part", children: [
            /* @__PURE__ */ t.jsxs("div", { className: j(["icons", v ? "mobile" : ""]), children: [
              !v && /* @__PURE__ */ t.jsx("div", { className: "header-right-bar", children: d == null ? void 0 : d.map((R, V) => /* @__PURE__ */ t.jsx(
                en,
                {
                  icon: R.icon,
                  onClickIcon: R.onClickIcon,
                  dropdownContent: R.dropdownContent
                },
                V
              )) }),
              f === "signedIn" ? /* @__PURE__ */ t.jsx("div", { className: "header-avatar", children: u && /* @__PURE__ */ t.jsx(
                en,
                {
                  icon: u.icon,
                  onClickIcon: u.onClickIcon,
                  dropdownContent: u.dropdownContent,
                  isDark: p
                }
              ) }) : /* @__PURE__ */ t.jsxs("div", { className: "icons", children: [
                /* @__PURE__ */ t.jsx(Le, { ...m, size: "medium", isDark: p }),
                /* @__PURE__ */ t.jsx(Le, { ...g, size: "medium", isDark: p })
              ] })
            ] }),
            !v && /* @__PURE__ */ t.jsx("div", { className: j(["menu", p ? "dark" : ""]), children: b && /* @__PURE__ */ t.jsx("div", { className: "header-app-swticher", children: /* @__PURE__ */ t.jsx(
              en,
              {
                icon: b == null ? void 0 : b.icon,
                onClickIcon: b == null ? void 0 : b.onClickIcon,
                dropdownContent: b == null ? void 0 : b.dropdownContent
              }
            ) }) })
          ] })
        ]
      }
    ),
    k === "secondary" && !v && /* @__PURE__ */ t.jsx("div", { className: j(["secondary-menu", p ? "dark" : ""]), children: /* @__PURE__ */ t.jsx(rr, { isDark: p, className: "tab-carousel-secondary", children: l.map((R, V) => /* @__PURE__ */ t.jsx(Et, { ...R }, V)) }) })
  ] });
};
var mi = {};
/*! For license information please see transform.js.LICENSE.txt */
(() => {
  var e = { 299: (i, l, d) => {
    var f = d(798);
    function u(m) {
      return f(m) === !0 && Object.prototype.toString.call(m) === "[object Object]";
    }
    i.exports = function(m) {
      var g, b;
      return u(m) !== !1 && typeof (g = m.constructor) == "function" && u(b = g.prototype) !== !1 && b.hasOwnProperty("isPrototypeOf") !== !1;
    };
  }, 798: (i) => {
    i.exports = function(l) {
      return l != null && typeof l == "object" && Array.isArray(l) === !1;
    };
  }, 998: (i, l, d) => {
    Object.defineProperty(l, "__esModule", { value: !0 });
    const f = d(110), u = d(830), m = ["em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "px", "mm", "cm", "in", "pt", "pc", "Q", "vm"], g = ["deg", "grad", "turn", "rad"], b = ["s", "ms"], y = ["Hz", "kHz"], p = ["dpi", "dpcm", "dppm"], v = ["fr"], x = m.map((N) => N.toLowerCase()), A = g.map((N) => N.toLowerCase()), S = b.map((N) => N.toLowerCase()), k = y.map((N) => N.toLowerCase()), E = p.map((N) => N.toLowerCase()), R = v.map((N) => N.toLowerCase());
    function V(N, L, F, Q) {
      const { source: G } = L;
      return new N(F, Q, G);
    }
    l.newPunctuator = function(N, L) {
      if (N.value === "," || N.value === ")") return V(u.Punctuator, N, N.value, L);
      throw new Error(`illegal argument error "${N.value}"`);
    }, l.newOperator = function(N, L) {
      return V(u.Operator, N, N.value, L);
    }, l.newString = function(N, L) {
      return V(u.StringNode, N, N.value, L);
    }, l.newWordNode = function(N, L) {
      return function(F, Q) {
        if (F.type === "word") {
          const G = f(F.value);
          if (G) {
            const J = function(X, re, je) {
              const { source: Me } = re;
              if (!X.unit) return new u.NumberValue(X.number, je, Me);
              const se = X.unit.toLowerCase();
              function fe(W, ee) {
                const _e = new W(X.number, ee, je, Me);
                return ee !== X.unit && (_e.raws.unit = { raw: X.unit, value: ee }), _e;
              }
              let De;
              return (De = x.indexOf(se)) >= 0 ? fe(u.LengthValue, m[De]) : (De = A.indexOf(se)) >= 0 ? fe(u.AngleValue, g[De]) : (De = S.indexOf(se)) >= 0 ? fe(u.TimeValue, b[De]) : (De = k.indexOf(se)) >= 0 ? fe(u.FrequencyValue, y[De]) : (De = E.indexOf(se)) >= 0 ? fe(u.ResolutionValue, p[De]) : (De = R.indexOf(se)) >= 0 ? fe(u.FlexValue, v[De]) : se === "%" ? fe(u.PercentageValue, "%") : null;
            }(G, F, Q);
            if (J) return J;
          }
        }
        return V(u.Word, F, F.value, Q);
      }(N, L);
    }, l.newFunction = function(N, L, F) {
      return new u.FunctionNode(N.value, L, { start: N.source.start, end: F.source.end });
    }, l.newParentheses = function(N, L) {
      return new u.Parentheses(L, { start: N.source.start, end: N.source.end });
    }, l.newMathExpression = function(N, L, F) {
      const Q = typeof L == "string" ? V(u.Operator, { source: { start: { index: 0 }, end: { index: 0 } } }, L, " ") : L, { before: G } = N.raws;
      return N.raws.before = "", new u.MathExpression(N, Q, F, G, { start: N.source.start, operator: Q.source, end: F.source.end });
    };
  }, 54: (i, l, d) => {
    Object.defineProperty(l, "__esModule", { value: !0 });
    var f = d(988);
    l.Parser = f.Parser;
    var u = d(966);
    l.Tokenizer = u.Tokenizer;
    var m = d(109);
    l.Stringifier = m.Stringifier;
    var g = d(876);
    l.getResolvedType = g.getResolvedType;
    var b = d(780);
    l.reduceExpression = b.reduce;
    var y = d(998);
    l.newMathExpression = y.newMathExpression;
  }, 988: (i, l, d) => {
    Object.defineProperty(l, "__esModule", { value: !0 });
    const f = d(404), u = d(830), m = d(998), g = d(922), b = d(35), y = /^([^-+0-9.]|-[^+0-9.])/u, p = { "*": 3, "/": 3, "+": 2, "-": 2 };
    function v(A) {
      return A.source || { start: { index: 0 }, end: { index: 0 } };
    }
    function x(A) {
      return A && A.type !== "Punctuator" && A.type !== "Operator" ? A : null;
    }
    l.Parser = class {
      constructor(A, S) {
        this.tokenizer = A, this.root = new u.Root({ start: { index: 0 }, end: { index: 0 } }), this.rescans = [], this.tokens = this.root.tokens, this.errors = this.root.errors;
      }
      parse() {
        let A = { container: this.root, fnName: "", post() {
        }, eof() {
        } };
        for (; A; ) A = this.processExpressions(A);
        const { tokens: S } = this;
        return S.length > 0 && (v(this.root).end.index = S[S.length - 1].source.end.index), this.errors.unshift(...this.tokenizer.errors), this.errors.sort((k, E) => k.index - E.index), this.root;
      }
      reportParseError(A, S = 0) {
        if (this.errors.find((E) => E.code === A && E.index === S)) return;
        const k = f.ParseError.fromCode(A, S);
        this.errors.push(k);
      }
      processExpressions(A) {
        let S;
        for (; S = this.scan(); ) {
          const { token: k } = S;
          switch (k.type) {
            case "word":
              if (y.test(k.value)) {
                const E = this.scan();
                if (E) {
                  if (!E.raws && E.token.type === "punctuator" && E.token.value === "(") return this.processFunction(k, S.raws, E.token, A);
                  this.back(E);
                }
              }
              A.container.push(m.newWordNode(k, S.raws));
              break;
            case "string":
              A.container.push(m.newString(k, S.raws));
              break;
            case "operator":
              this.checkAndMergeMathExpr(A, p[k.value]), A.container.push(m.newOperator(k, S.raws));
              break;
            case "punctuator":
              return this.checkAndMergeMathExpr(A), this.processPunctuator(k, S.raws, A);
          }
        }
        return this.postStack(A), A.eof(), null;
      }
      checkAndMergeMathExpr(A, S) {
        const { container: k } = A, { nodes: E } = k;
        if (E.length >= 3) {
          const R = E[E.length - 2];
          if (R.type === "Operator" && p[R.value] && (S == null || S <= p[R.value])) {
            const V = this.mergeMathExpr(A);
            V && k.push(V);
          }
        }
      }
      processPunctuator(A, S, k) {
        const { container: E, parent: R } = k;
        if (A.value === "(") {
          const V = m.newParentheses(A, S);
          return E.push(V), this.createNestedStateContainer(V, k.fnName, k);
        }
        if (this.postStack(k), A.value === ")") {
          if (R) return k.post(A, S), R;
          this.reportParseError("unexpected-parenthesis", A.source.start.index);
        }
        return E.push(m.newPunctuator(A, S)), k;
      }
      processFunction(A, S, k, E) {
        const R = m.newFunction(A, S, k);
        return E.container.push(R), this.createNestedStateContainer(R, R.name, E);
      }
      createNestedStateContainer(A, S, k) {
        return { container: A, parent: k, fnName: S, post(E, R) {
          R && (A.raws.beforeClose = R), v(A).end = E.source.end;
        }, eof: () => {
          A.unclosed = !0;
          const E = this.tokens[this.tokens.length - 1], R = A.last;
          R && (v(A).end = v(R).end), this.reportParseError("eof-in-bracket", E.source.end.index), k.eof();
        } };
      }
      mergeMathExpr(A) {
        const { container: { nodes: S } } = A, k = S.pop(), E = S.pop(), R = S.pop() || null, V = () => {
          R && S.push(R), S.push(E, k);
        }, N = (Q) => {
          g.isMathFunction(A.fnName) && this.reportParseError("unexpected-calc-token", v(Q).start.index);
        }, L = x(k);
        if (b.isComma(E)) return L || N(k), V(), null;
        if (!R) return N(x(E) ? k : E), V(), null;
        const F = x(R);
        return F ? E.type !== "Operator" ? (N(E), V(), null) : L ? m.newMathExpression(F, E, L) : (N(k), V(), null) : (N(x(S[S.length - 1]) ? E : R), V(), null);
      }
      postStack(A) {
        const { container: S } = A, { nodes: k } = S;
        for (; k.length > 1; ) {
          const E = this.mergeMathExpr(A);
          if (!E) return;
          S.push(E);
        }
      }
      scan() {
        const A = this.rescans.shift();
        if (A) return A;
        let S = "", k = this.tokenizer.nextToken();
        for (; k; ) {
          if (this.tokens.push(k), k.type !== "whitespace" && k.type !== "comment" && k.type !== "inline-comment") return { token: k, raws: S };
          S += k.value, k = this.tokenizer.nextToken();
        }
        return S && (this.root.raws.after = S), null;
      }
      back(A) {
        this.rescans.unshift(A);
      }
    };
  }, 780: (i, l, d) => {
    Object.defineProperty(l, "__esModule", { value: !0 });
    const f = d(922), u = d(35);
    function m(g) {
      if (g.type === "Number" || g.type === "Length" || g.type === "Angle" || g.type === "Time" || g.type === "Frequency" || g.type === "Resolution" || g.type === "Percentage" || g.type === "Flex") return g;
      if (g.type === "MathExpression") return function(b) {
        const y = m(b.left), p = m(b.right);
        if (!y || !p) return null;
        switch (b.operator) {
          case "+":
          case "-":
            return function(v, x, A) {
              if (v.type !== A.type) return null;
              const S = x === "-" ? (k, E) => k - E : (k, E) => k + E;
              return v.type === "Number" ? { type: "Number", value: S(v.value, A.value) } : v.unit === A.unit ? { type: v.type, value: S(v.value, A.value), unit: v.unit } : null;
            }(y, b.operator, p);
          case "/":
            return function(v, x) {
              return x.type !== "Number" ? null : v.type === "Number" ? { type: "Number", value: v.value / x.value } : { type: v.type, value: v.value / x.value, unit: v.unit };
            }(y, p);
          case "*":
            return function(v, x) {
              return v.type === "Number" ? x.type === "Number" ? { type: "Number", value: v.value * x.value } : { type: x.type, value: v.value * x.value, unit: x.unit } : x.type === "Number" ? { type: v.type, value: v.value * x.value, unit: v.unit } : null;
            }(y, p);
        }
        return null;
      }(g);
      if (g.type === "Parentheses" || g.type === "Root") {
        if (g.nodes.length === 1) return m(g.nodes[0]);
      } else if (g.type === "Function" && g.type === "Function" && f.isCalc(g.name)) return function(b) {
        const y = u.getFunctionArguments(b);
        return y && y.length === 1 ? m(y[0]) : null;
      }(g);
      return null;
    }
    l.reduce = function(g) {
      return m(g);
    };
  }, 876: (i, l, d) => {
    Object.defineProperty(l, "__esModule", { value: !0 });
    const f = d(922), u = d(35);
    function m(y) {
      const p = g(y.left), v = g(y.right), { operator: x } = y;
      switch (x) {
        case "+":
        case "-":
          return p === "Unknown" || v === "Unknown" ? "Unknown" : p === v ? p : p === "Number" || v === "Number" ? "invalid" : p === "Percentage" ? v : v === "Percentage" ? p : "invalid";
        case "*":
          return p === "Unknown" || v === "Unknown" ? "Unknown" : p === "Number" ? v : v === "Number" ? p : "invalid";
        case "/":
          return v === "Unknown" ? "Unknown" : v === "Number" ? p : "invalid";
      }
      return "Unknown";
    }
    function g(y) {
      if (y.type === "MathExpression") {
        const v = m(y);
        return v === "invalid" ? "Unknown" : v;
      }
      return y.type === "Parentheses" ? y.nodes.length === 1 ? g(y.nodes[0]) : "Unknown" : y.type === "Function" ? f.isCalc(y.name) ? (p = y).nodes.length === 1 ? b(p) : "Unknown" : f.isMin(y.name) || f.isMax(y.name) ? b(y) : f.isClamp(y.name) ? function(v) {
        return v.nodes.length === 5 ? b(v) : "Unknown";
      }(y) : "Unknown" : function(v) {
        const { type: x } = v;
        return x === "Number" || x === "Length" || x === "Angle" || x === "Time" || x === "Frequency" || x === "Resolution" || x === "Percentage" || x === "Flex" ? x : "Unknown";
      }(y);
      var p;
    }
    function b(y) {
      const p = u.getFunctionArguments(y);
      if (!p) return "Unknown";
      const v = p.map(g);
      let x = null;
      for (const A of v) if (x && x !== "Percentage") {
        if (A !== "Percentage") {
          if (x !== A) return "Unknown";
        }
      } else x = A;
      return x || "Unknown";
    }
    l.getResolvedType = m;
  }, 109: (i, l) => {
    function d(g, b) {
      const y = g.raws[b];
      return y ? y.raw : `${g[b]}`;
    }
    function f(g, b) {
      return g.raws[b] || "";
    }
    function u(g, b) {
      return `${f(g, "before")}${b}`;
    }
    function m(g) {
      return u(g, `${d(g, "value")}${d(g, "unit")}`);
    }
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Stringifier = class {
      constructor(g) {
        this.options = Object.assign({ autofix: !1 }, g || {});
      }
      stringify(g) {
        return this[g.type](g);
      }
      Root(g) {
        let b = "";
        for (const y of g.nodes) b += this.stringify(y);
        return b += f(g, "after"), b;
      }
      Function(g) {
        let b = `${g.name}(`;
        for (const y of g.nodes) b += this.stringify(y);
        return b += f(g, "beforeClose"), !this.options.autofix && g.unclosed || (b += ")"), u(g, b);
      }
      Parentheses(g) {
        let b = "(";
        for (const y of g.nodes) b += this.stringify(y);
        return b += f(g, "beforeClose"), !this.options.autofix && g.unclosed || (b += ")"), u(g, b);
      }
      MathExpression(g) {
        let b = "", y = f(g, "between"), p = "", v = "";
        return this.options.autofix && (y || (y = " "), g.right.raws.before || (p = " "), g.left.type === "MathExpression" && (g.left.operator !== "+" && g.left.operator !== "-" || g.operator !== "*" && g.operator !== "/" || (b += "(", y = `)${y}`)), g.right.type === "MathExpression" && ((g.operator !== "+" || g.right.operator !== "-") && (g.operator !== "-" && g.operator !== "*" || g.right.operator !== "+" && g.right.operator !== "-") && g.operator !== "/" || (p += "(", v = `)${v}`))), u(g, `${b}${this.stringify(g.left)}${y}${g.operator}${p}${this.stringify(g.right)}${v}`);
      }
      Number(g) {
        return u(g, d(g, "value"));
      }
      Punctuator(g) {
        return u(g, g.value);
      }
      Word(g) {
        return u(g, g.value);
      }
      String(g) {
        return u(g, g.value);
      }
      Operator(g) {
        return u(g, g.value);
      }
      Length(g) {
        return m(g);
      }
      Angle(g) {
        return m(g);
      }
      Time(g) {
        return m(g);
      }
      Frequency(g) {
        return m(g);
      }
      Resolution(g) {
        return m(g);
      }
      Percentage(g) {
        return m(g);
      }
      Flex(g) {
        return m(g);
      }
      word(g) {
        return g.value;
      }
      punctuator(g) {
        return g.value;
      }
      operator(g) {
        return g.value;
      }
      whitespace(g) {
        return g.value;
      }
      comment(g) {
        return g.value;
      }
      string(g) {
        return g.value;
      }
      "inline-comment"(g) {
        return g.value;
      }
    };
  }, 966: (i, l, d) => {
    Object.defineProperty(l, "__esModule", { value: !0 });
    const f = d(404), u = d(293);
    function m(p) {
      return p === u.LPAREN || p === u.RPAREN || p === u.COMMA;
    }
    function g(p) {
      return u.isDigit(p) || p === u.DOT;
    }
    function b(p) {
      return p === u.DQUOTE || p === u.SQUOTE;
    }
    function y(p) {
      return p === u.LPAREN ? u.RPAREN : p === u.LBRACE ? u.RBRACE : u.RBRACKET;
    }
    l.Tokenizer = class {
      constructor(p, v) {
        this.lastCode = u.NULL, this.rescan = !1, this.token = null, this.lastTokenType = null, this.errors = [], this.text = p, this.offset = -1, this.state = "SCAN", this.nextTokenOffset = 0, this.options = Object.assign({ allowInlineCommnets: !0 }, v || {});
      }
      nextToken() {
        for (; this.token == null; ) {
          const v = this.scan();
          if (this.state = this[this.state](v) || "SCAN", v === u.EOF && !this.rescan) break;
        }
        const { token: p } = this;
        return this.token = null, p;
      }
      scan() {
        return this.rescan ? (this.rescan = !1, this.lastCode) : this.next();
      }
      next() {
        return this.offset < this.text.length && this.offset++, this.offset >= this.text.length ? this.lastCode = u.EOF : this.lastCode = this.text.charCodeAt(this.offset);
      }
      back() {
        this.rescan = !0;
      }
      reportParseError(p) {
        const v = f.ParseError.fromCode(p, this.offset);
        this.errors.push(v);
      }
      getCode(p = 0) {
        return this.text.charCodeAt(this.nextTokenOffset + p);
      }
      commitToken(p, v = 0) {
        const x = this.nextTokenOffset, A = this.offset + v + 1, S = this.text.slice(x, A);
        this.token = { type: p, value: S, source: { start: { index: x }, end: { index: A } } }, this.nextTokenOffset = A, this.lastTokenType = p;
      }
      SCAN(p) {
        return u.isWhitespace(p) ? "WHITESPACE" : p === u.DQUOTE ? "DQUOTE" : p === u.SQUOTE ? "SQUOTE" : p === u.SLASH ? "SLASH" : p === u.MINUS ? "MINUS" : p === u.PLUS ? "PLUS" : p === u.STAR ? (this.commitToken("operator"), "SCAN") : m(p) ? (this.commitToken("punctuator"), "SCAN") : p === u.LBRACKET ? "LBRACKET" : p === u.LBRACE ? "LBRACE" : p === u.EOF ? "SCAN" : "WORD";
      }
      WORD(p) {
        for (; !u.isWhitespace(p) && !m(p) && p !== u.PLUS && p !== u.STAR && p !== u.SLASH && !b(p) && p !== u.EOF; ) {
          if (p === u.MINUS) {
            const v = this.getCode();
            if (g(v) || (v === u.MINUS || v === u.PLUS) && g(this.getCode(1))) return this.commitToken("word", -1), "MINUS";
          } else p !== u.LBRACE && p !== u.LBRACKET && p !== u.LPAREN || this.skipBrakets(this.next(), y(p));
          p = this.next();
        }
        this.commitToken("word", -1), this.back();
      }
      LBRACKET(p) {
        return this.skipBrakets(p, u.RBRACKET), "WORD";
      }
      LBRACE(p) {
        return this.skipBrakets(p, u.RBRACE), "WORD";
      }
      WHITESPACE(p) {
        for (; u.isWhitespace(p); ) p = this.next();
        this.commitToken("whitespace", -1), this.back();
      }
      SLASH(p) {
        return p === u.STAR ? "COMMENT" : p === u.SLASH && this.options.allowInlineCommnets ? "INLINE_COMMENT" : (this.commitToken("operator", -1), void this.back());
      }
      COMMENT(p) {
        for (; p !== u.EOF; ) {
          if (p === u.STAR && (p = this.next()) === u.SLASH) return void this.commitToken("comment");
          p = this.next();
        }
        this.commitToken("comment", -1), this.reportParseError("eof-in-comment");
      }
      INLINE_COMMENT(p) {
        for (; p !== u.EOF; ) {
          if (p === u.LF || p === u.FF) return void this.commitToken("inline-comment");
          if (p === u.CR) return (p = this.next()) === u.LF ? void this.commitToken("inline-comment") : (this.commitToken("inline-comment", -1), this.back());
          p = this.next();
        }
        this.commitToken("inline-comment", -1);
      }
      MINUS(p) {
        return this.lastTokenType === "word" || p === u.EOF || p !== u.MINUS && !g(p) && !u.isLetter(p) ? (this.commitToken("operator", -1), void this.back()) : "WORD";
      }
      PLUS(p) {
        if (this.lastTokenType !== "word" && g(p)) return "WORD";
        this.commitToken("operator", -1), this.back();
      }
      DQUOTE(p) {
        this.skipString(p, u.DQUOTE);
      }
      SQUOTE(p) {
        this.skipString(p, u.SQUOTE);
      }
      skipBrakets(p, v) {
        const x = [];
        for (; p !== u.EOF; ) {
          if (v === p) {
            const A = x.pop() || null;
            if (!A) return;
            v = A;
          } else p !== u.LBRACE && p !== u.LBRACKET && p !== u.LPAREN || (v && x.push(v), v = y(p));
          p = this.next();
        }
        this.reportParseError("eof-in-bracket");
      }
      skipString(p, v) {
        for (; p !== u.EOF; ) {
          if (p === u.BACKSLASH) p = this.next();
          else if (p === v) return void this.commitToken("string");
          p = this.next();
        }
        this.commitToken("string", -1), this.reportParseError("eof-in-string");
      }
    };
  }, 922: (i, l) => {
    Object.defineProperty(l, "__esModule", { value: !0 });
    const d = /^(-(webkit|mox)-)?calc/iu, f = /^(-(webkit|mox)-)?min/iu, u = /^(-(webkit|mox)-)?max/iu, m = /^(-(webkit|mox)-)?clamp/iu;
    function g(v) {
      return d.test(v);
    }
    function b(v) {
      return f.test(v);
    }
    function y(v) {
      return u.test(v);
    }
    function p(v) {
      return m.test(v);
    }
    l.isCalc = g, l.isMin = b, l.isMax = y, l.isClamp = p, l.isMathFunction = function(v) {
      return g(v) || p(v) || b(v) || y(v);
    };
  }, 830: (i, l, d) => {
    Object.defineProperty(l, "__esModule", { value: !0 });
    const f = d(109);
    let u = null;
    class m {
      constructor() {
        this.parent = null;
      }
      toString(x) {
        return typeof x == "function" ? x(this) : (x || u || (u = new f.Stringifier())).stringify(this);
      }
      walk(x, A) {
        const S = this;
        let k;
        const E = [...S.nodes || [], S.left, S.right].filter((V) => !!V), R = typeof x == "string" ? (V) => V.type === x : (V) => x.test(V.type);
        for (const V of E)
          if (R(V) && (k = A(V), k === !1) || V.walk && (k = V.walk(x, A), k === !1)) break;
        return k;
      }
    }
    class g extends m {
      push(...x) {
        for (const A of x) A.type === "Root" ? this.push(...A.nodes) : (A.parent = this, this.nodes.push(A));
        return this;
      }
      unshift(...x) {
        for (const A of x.reverse()) A.type === "Root" ? this.unshift(...A.nodes) : (A.parent = this, this.nodes.unshift(A));
        return this;
      }
      append(...x) {
        return this.push(...x);
      }
      prepend(...x) {
        return this.unshift(...x);
      }
      insertBefore(x, A) {
        if (A.type === "Root") {
          const { nodes: k } = A;
          if (k.length === 1) return this.insertBefore(x, k[0]);
          throw new Error("The given Root node is illegal.");
        }
        const S = this.nodes.indexOf(x);
        if (S < 0) throw new Error("The given node could not be found.");
        return A.parent = this, this.nodes.splice(S, 0, A), this;
      }
      insertAfter(x, A) {
        if (A.type === "Root") {
          const { nodes: k } = A;
          if (k.length === 1) return this.insertAfter(x, k[0]);
          throw new Error("The given Root node is illegal.");
        }
        const S = this.nodes.indexOf(x);
        if (S < 0) throw new Error("The given node could not be found.");
        return A.parent = this, this.nodes.splice(S + 1, 0, A), this;
      }
      removeAll() {
        for (const x of this.nodes) x.parent = null;
        return this.nodes = [], this;
      }
      removeChild(x) {
        const A = this.nodes.indexOf(x);
        return this.nodes[A].parent = null, this.nodes.splice(A, 1), this;
      }
      get first() {
        return this.nodes[0] || null;
      }
      get last() {
        return this.nodes[this.nodes.length - 1] || null;
      }
    }
    l.NumberValue = class extends m {
      constructor(v, x, A) {
        super();
        const S = parseFloat(v);
        this.type = "Number", this.value = S, this.raws = { before: x, value: { raw: v, value: S } }, this.source = A;
      }
    };
    class b extends m {
      constructor(x, A, S, k, E) {
        super();
        const R = parseFloat(A);
        this.type = x, this.value = R, this.unit = S, this.raws = { before: k, value: { raw: A, value: R } }, this.source = E;
      }
    }
    l.LengthValue = class extends b {
      constructor(v, x, A, S) {
        super("Length", v, x, A, S);
      }
    }, l.AngleValue = class extends b {
      constructor(v, x, A, S) {
        super("Angle", v, x, A, S);
      }
    }, l.TimeValue = class extends b {
      constructor(v, x, A, S) {
        super("Time", v, x, A, S);
      }
    }, l.FrequencyValue = class extends b {
      constructor(v, x, A, S) {
        super("Frequency", v, x, A, S);
      }
    }, l.ResolutionValue = class extends b {
      constructor(v, x, A, S) {
        super("Resolution", v, x, A, S);
      }
    }, l.PercentageValue = class extends b {
      constructor(v, x, A, S) {
        super("Percentage", v, x, A, S);
      }
    }, l.FlexValue = class extends b {
      constructor(v, x, A, S) {
        super("Flex", v, x, A, S);
      }
    };
    class y extends m {
      constructor(x, A, S, k) {
        super(), this.type = x, this.value = A, this.raws = { before: S }, this.source = k;
      }
    }
    function p(v, x, A) {
      const S = Symbol(`${x}`);
      Object.defineProperties(v, { [S]: { writable: !0, enumerable: !1 }, [x]: { get() {
        return this[S];
      }, set(k) {
        const E = this[S];
        this[S] = A(k, E);
      }, enumerable: !0 } });
    }
    l.Word = class extends y {
      constructor(v, x, A) {
        super("Word", v, x, A);
      }
    }, l.StringNode = class extends y {
      constructor(v, x, A) {
        super("String", v, x, A);
      }
    }, l.MathExpression = class extends m {
      constructor(v, x, A, S, k) {
        super();
        const E = x.value, R = x.raws.before;
        this.type = "MathExpression";
        const V = (N, L) => {
          let F;
          if (N.type === "Root") {
            const { nodes: Q } = N;
            if (Q.length !== 1) throw new Error("The given Root node is illegal.");
            F = Q[0];
          } else F = N;
          return F.parent = this, L && (L.parent = null), F;
        };
        p(this, "left", V), this.left = v, this.operator = E, p(this, "right", V), this.right = A, this.raws = { before: S, between: R }, this.source = k;
      }
    }, l.FunctionNode = class extends g {
      constructor(v, x, A) {
        super(), this.type = "Function", this.name = v, this.nodes = [], this.raws = { before: x }, this.source = A;
      }
    }, l.Parentheses = class extends g {
      constructor(v, x) {
        super(), this.type = "Parentheses", this.nodes = [], this.raws = { before: v }, this.source = x;
      }
    }, l.Punctuator = class extends y {
      constructor(v, x, A) {
        super("Punctuator", v, x, A);
      }
    }, l.Root = class extends g {
      constructor(v) {
        super(), this.type = "Root", this.nodes = [], this.tokens = [], this.errors = [], this.raws = { after: "" }, this.source = v;
      }
    }, l.Operator = class extends y {
      constructor(v, x, A) {
        super("Operator", v, x, A);
      }
    };
  }, 293: (i, l) => {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.EOF = -1, l.NULL = 0, l.TAB = 9, l.CR = 13, l.LF = 10, l.FF = 12, l.SPACE = 32, l.DQUOTE = 34, l.SQUOTE = 39, l.LPAREN = 40, l.RPAREN = 41, l.STAR = 42, l.PLUS = 43, l.COMMA = 44, l.MINUS = 45, l.DOT = 46, l.SLASH = 47, l.LBRACKET = 91, l.BACKSLASH = 92, l.RBRACKET = 93, l.LBRACE = 123, l.RBRACE = 125, l.isWhitespace = function(d) {
      return d === l.TAB || d === l.LF || d === l.FF || d === l.CR || d === l.SPACE;
    }, l.isDigit = function(d) {
      return d >= 48 && d <= 57;
    }, l.isLetter = function(d) {
      return d >= 97 && d <= 122 || d >= 65 && d <= 90;
    };
  }, 35: (i, l) => {
    function d(f) {
      return f.type === "Punctuator" && f.value === ",";
    }
    Object.defineProperty(l, "__esModule", { value: !0 }), l.isComma = d, l.getFunctionArguments = function(f) {
      const { nodes: u } = f, m = u[0];
      if (!m || d(m)) return null;
      const g = [m], b = u.length;
      for (let y = 1; y < b; y++) {
        if (!d(u[y++])) return null;
        const p = u[y];
        if (!p || d(p)) return null;
        g.push(p);
      }
      return g;
    };
  }, 784: (i, l, d) => {
    const f = d(404), u = d(54);
    u.Parser, u.Tokenizer, u.Stringifier, u.getResolvedType, u.reduceExpression, u.newMathExpression, l.ZP = { parse: function(m, g) {
      const b = new u.Tokenizer(m, g);
      return new u.Parser(b, g).parse();
    }, stringify: function(m, g) {
      return new u.Stringifier(g).stringify(m);
    }, getResolvedType: u.getResolvedType, reduceExpression: u.reduceExpression, mathExpr: u.newMathExpression, Parser: u.Parser, Tokenizer: u.Tokenizer, Stringifier: u.Stringifier, AST: f };
  }, 761: (i, l) => {
    Object.defineProperty(l, "__esModule", { value: !0 });
    class d extends SyntaxError {
      static fromCode(m, g) {
        return new d(f[m], m, g);
      }
      constructor(m, g, b) {
        super(m), this.code = g, this.index = b;
      }
    }
    l.ParseError = d;
    const f = { "eof-in-string": "Unclosed string", "eof-in-comment": "Unclosed comment", "eof-in-bracket": "Unclosed bracket", "unexpected-parenthesis": "Unexpected token", "unexpected-calc-token": "Unexpected token" };
  }, 404: (i, l, d) => {
    Object.defineProperty(l, "__esModule", { value: !0 }), function(f) {
      for (var u in f) l.hasOwnProperty(u) || (l[u] = f[u]);
    }(d(761));
  }, 110: (i) => {
    var l = 45, d = 43, f = 46, u = 101, m = 69;
    i.exports = function(g) {
      for (var b, y = 0, p = g.length, v = !1, x = -1, A = !1; y < p; ) {
        if ((b = g.charCodeAt(y)) >= 48 && b <= 57) A = !0;
        else if (b === u || b === m) {
          if (x > -1) break;
          x = y;
        } else if (b === f) {
          if (v) break;
          v = !0;
        } else if (b !== d && b !== l || y !== 0) break;
        y += 1;
      }
      return x + 1 === y && y--, !!A && { number: g.slice(0, y), unit: g.slice(y) };
    };
  }, 86: (i, l, d) => {
    const f = d(299);
    function u(y, p, v, x) {
      if (!b(y)) return y;
      let A = x || {};
      const S = Array.isArray(p);
      if (!S && typeof p != "string") return y;
      let k = A.merge;
      k && typeof k != "function" && (k = Object.assign);
      const E = (S ? p : function(N, L) {
        const F = function(X, re) {
          let je = X;
          if (re === void 0) return je + "";
          const Me = Object.keys(re);
          for (let se = 0; se < Me.length; se++) {
            const fe = Me[se];
            je += ";" + fe + "=" + String(re[fe]);
          }
          return je;
        }(N, L);
        if (u.memo[F]) return u.memo[F];
        const Q = L && L.separator ? L.separator : ".";
        let G = [], J = [];
        G = L && typeof L.split == "function" ? L.split(N) : N.split(Q);
        for (let X = 0; X < G.length; X++) {
          let re = G[X];
          for (; re && re.slice(-1) === "\\" && G[X + 1] != null; ) re = re.slice(0, -1) + Q + G[++X];
          J.push(re);
        }
        return u.memo[F] = J, J;
      }(p, A)).filter(g), R = E.length, V = y;
      if (!x && E.length === 1) return m(y, E[0], v, k), y;
      for (let N = 0; N < R; N++) {
        let L = E[N];
        if (b(y[L]) || (y[L] = {}), N === R - 1) {
          m(y, L, v, k);
          break;
        }
        y = y[L];
      }
      return V;
    }
    function m(y, p, v, x) {
      x && f(y[p]) && f(v) ? y[p] = x({}, y[p], v) : y[p] = v;
    }
    function g(y) {
      return y !== "__proto__" && y !== "constructor" && y !== "prototype";
    }
    function b(y) {
      return y !== null && (typeof y == "object" || typeof y == "function");
    }
    u.memo = {}, i.exports = u;
  } }, a = {};
  function n(i) {
    var l = a[i];
    if (l !== void 0) return l.exports;
    var d = a[i] = { exports: {} };
    return e[i](d, d.exports, n), d.exports;
  }
  n.n = (i) => {
    var l = i && i.__esModule ? () => i.default : () => i;
    return n.d(l, { a: l }), l;
  }, n.d = (i, l) => {
    for (var d in l) n.o(l, d) && !n.o(i, d) && Object.defineProperty(i, d, { enumerable: !0, get: l[d] });
  }, n.o = (i, l) => Object.prototype.hasOwnProperty.call(i, l), n.r = (i) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
  };
  var s = {};
  (() => {
    n.r(s), n.d(s, { default: () => Kl });
    var i, l, d = function(r, o) {
      var c = {};
      for (var h in typeof o == "string" && (o = [].slice.call(arguments, 1)), r) r.hasOwnProperty && !r.hasOwnProperty(h) || o.indexOf(h) === -1 && (c[h] = r[h]);
      return c;
    }, f = n(86), u = n.n(f);
    function m(r, o) {
      var c = Object.keys(r);
      if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(r);
        o && (h = h.filter(function(C) {
          return Object.getOwnPropertyDescriptor(r, C).enumerable;
        })), c.push.apply(c, h);
      }
      return c;
    }
    function g(r) {
      for (var o = 1; o < arguments.length; o++) {
        var c = arguments[o] != null ? arguments[o] : {};
        o % 2 ? m(Object(c), !0).forEach(function(h) {
          b(r, h, c[h]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : m(Object(c)).forEach(function(h) {
          Object.defineProperty(r, h, Object.getOwnPropertyDescriptor(c, h));
        });
      }
      return r;
    }
    function b(r, o, c) {
      return o in r ? Object.defineProperty(r, o, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = c, r;
    }
    function y(r) {
      var o = r.type ? r.type : function(c) {
        switch (c) {
          case "color":
          case "colors":
            return i.COLOR;
          case "space":
          case "spacing":
            return i.SPACING;
          case "size":
          case "sizing":
            return i.SIZING;
          case "boxShadow":
            return i.BOX_SHADOW;
          case "borderRadius":
            return i.BORDER_RADIUS;
          case "borderWidth":
            return i.BORDER_WIDTH;
          case "opacity":
            return i.OPACITY;
          case "fontFamilies":
            return i.FONT_FAMILIES;
          case "fontWeights":
            return i.FONT_WEIGHTS;
          case "fontSizes":
            return i.FONT_SIZES;
          case "lineHeights":
            return i.LINE_HEIGHTS;
          case "typography":
            return i.TYPOGRAPHY;
          case "letterSpacing":
            return i.LETTER_SPACING;
          case "paragraphSpacing":
            return i.PARAGRAPH_SPACING;
          case "composition":
            return i.COMPOSITION;
          case "border":
            return i.BORDER;
          case "asset":
            return i.ASSET;
          default:
            return i.OTHER;
        }
      }(r.name.split(".").slice(0, 1).toString());
      return g(g({}, r), {}, { type: o });
    }
    (l = i || (i = {})).OTHER = "other", l.COLOR = "color", l.BORDER_RADIUS = "borderRadius", l.SIZING = "sizing", l.SPACING = "spacing", l.TEXT = "text", l.TYPOGRAPHY = "typography", l.OPACITY = "opacity", l.BORDER_WIDTH = "borderWidth", l.BOX_SHADOW = "boxShadow", l.FONT_FAMILIES = "fontFamilies", l.FONT_WEIGHTS = "fontWeights", l.LINE_HEIGHTS = "lineHeights", l.FONT_SIZES = "fontSizes", l.LETTER_SPACING = "letterSpacing", l.PARAGRAPH_SPACING = "paragraphSpacing", l.PARAGRAPH_INDENT = "paragraphIndent", l.TEXT_DECORATION = "textDecoration", l.TEXT_CASE = "textCase", l.COMPOSITION = "composition", l.DIMENSION = "dimension", l.BORDER = "border", l.ASSET = "asset", l.BOOLEAN = "boolean";
    var p, v = /(\$[^\s,]+\w)|({([^]*))/g, x = /(?:\$([^\s,]+\w))|(?:{([^}]*)})/g, A = /(?:\$([^\s,]+\w))/g, S = function(r) {
      var o = r == null ? void 0 : r.toString().match(x);
      return o ? o.map(function(c) {
        return c.startsWith("{") ? c.slice(1, c.length - 1) : c.substring(1);
      }) : null;
    }, k = function(r) {
      for (var o = [], c = 0, h = 0, C = 0; C < r.length; C += 1) r[C] === "{" && (c === 0 && (h = C), c += 1), r[C] === "}" && c > 0 && (c -= 1) == 0 && o.push(r.substring(h, C + 1));
      return o.concat(function(w) {
        return w == null ? void 0 : w.toString().match(A);
      }(r) || []);
    };
    function E(r, o, c) {
      return Math.min(Math.max(r, c), o);
    }
    (function(r) {
      r.LIGHTEN = "lighten", r.DARKEN = "darken", r.MIX = "mix", r.ALPHA = "alpha";
    })(p || (p = {}));
    class R extends Error {
      constructor(o) {
        super(`Failed to parse color: "${o}"`);
      }
    }
    var V = R;
    function N(r) {
      if (typeof r != "string") throw new V(r);
      if (r.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
      let o = r.trim();
      o = je.test(r) ? function(B) {
        const M = B.toLowerCase().trim(), D = F[function(H) {
          let T = 5381, _ = H.length;
          for (; _; ) T = 33 * T ^ H.charCodeAt(--_);
          return (T >>> 0) % 2341;
        }(M)];
        if (!D) throw new V(B);
        return `#${D}`;
      }(r) : r;
      const c = G.exec(o);
      if (c) {
        const B = Array.from(c).slice(1);
        return [...B.slice(0, 3).map((M) => parseInt(Q(M, 2), 16)), parseInt(Q(B[3] || "f", 2), 16) / 255];
      }
      const h = J.exec(o);
      if (h) {
        const B = Array.from(h).slice(1);
        return [...B.slice(0, 3).map((M) => parseInt(M, 16)), parseInt(B[3] || "ff", 16) / 255];
      }
      const C = X.exec(o);
      if (C) {
        const B = Array.from(C).slice(1);
        return [...B.slice(0, 3).map((M) => parseInt(M, 10)), parseFloat(B[3] || "1")];
      }
      const w = re.exec(o);
      if (w) {
        const [B, M, D, H] = Array.from(w).slice(1).map(parseFloat);
        if (E(0, 100, M) !== M) throw new V(r);
        if (E(0, 100, D) !== D) throw new V(r);
        return [...se(B, M, D), Number.isNaN(H) ? 1 : H];
      }
      throw new V(r);
    }
    const L = (r) => parseInt(r.replace(/_/g, ""), 36), F = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((r, o) => {
      const c = L(o.substring(0, 3)), h = L(o.substring(3)).toString(16);
      let C = "";
      for (let w = 0; w < 6 - h.length; w++) C += "0";
      return r[c] = `${C}${h}`, r;
    }, {}), Q = (r, o) => Array.from(Array(o)).map(() => r).join(""), G = new RegExp(`^#${Q("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), J = new RegExp(`^#${Q("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), X = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Q(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), re = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, je = /^[a-z]+$/i, Me = (r) => Math.round(255 * r), se = (r, o, c) => {
      let h = c / 100;
      if (o === 0) return [h, h, h].map(Me);
      const C = (r % 360 + 360) % 360 / 60, w = (1 - Math.abs(2 * h - 1)) * (o / 100), B = w * (1 - Math.abs(C % 2 - 1));
      let M = 0, D = 0, H = 0;
      C >= 0 && C < 1 ? (M = w, D = B) : C >= 1 && C < 2 ? (M = B, D = w) : C >= 2 && C < 3 ? (D = w, H = B) : C >= 3 && C < 4 ? (D = B, H = w) : C >= 4 && C < 5 ? (M = B, H = w) : C >= 5 && C < 6 && (M = w, H = B);
      const T = h - w / 2;
      return [M + T, D + T, H + T].map(Me);
    };
    function fe(r) {
      const [o, c, h, C] = N(r);
      let w = (B) => {
        const M = E(0, 255, B).toString(16);
        return M.length === 1 ? `0${M}` : M;
      };
      return `#${w(o)}${w(c)}${w(h)}${C < 1 ? w(Math.round(255 * C)) : ""}`;
    }
    function De(r, o) {
      return function(c) {
        if (Array.isArray(c)) return c;
      }(r) || function(c, h) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(c)) {
          var C = [], w = !0, B = !1, M = void 0;
          try {
            for (var D, H = c[Symbol.iterator](); !(w = (D = H.next()).done) && (C.push(D.value), !h || C.length !== h); w = !0) ;
          } catch (T) {
            B = !0, M = T;
          } finally {
            try {
              w || H.return == null || H.return();
            } finally {
              if (B) throw M;
            }
          }
          return C;
        }
      }(r, o) || function(c, h) {
        if (c) {
          if (typeof c == "string") return W(c, h);
          var C = Object.prototype.toString.call(c).slice(8, -1);
          return C === "Object" && c.constructor && (C = c.constructor.name), C === "Map" || C === "Set" ? Array.from(c) : C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C) ? W(c, h) : void 0;
        }
      }(r, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function W(r, o) {
      (o == null || o > r.length) && (o = r.length);
      for (var c = 0, h = new Array(o); c < o; c++) h[c] = r[c];
      return h;
    }
    function ee(r) {
      try {
        if (typeof r != "string") return r;
        var o = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g, c = r;
        try {
          var h = Array.from(c.matchAll(/(rgba?\(.*?\))/g), function(w) {
            return w[0];
          }), C = Array.from(c.matchAll(/(hsla?\(.*?\))/g), function(w) {
            return w[0];
          });
          C.length > 0 && C.forEach(function(w) {
            c = c.replace(w, fe(w));
          }), h.length > 0 && h.forEach(function(w) {
            var B, M, D, H = w, T = w.replace(/rgba?\(/g, "").replace(")", ""), _ = T.match(o), O = "1";
            if (_) {
              var U, de, he = De(N(_[0]), 3);
              B = he[0], M = he[1], D = he[2], O = (U = (de = T.split(",").pop()) === null || de === void 0 ? void 0 : de.trim()) !== null && U !== void 0 ? U : "0";
            } else {
              var pe = T.split(",").map(function(Ue) {
                return Ue.trim();
              }), ae = De(pe, 4);
              B = ae[0], M = ae[1], D = ae[2];
              var Se = ae[3];
              O = Se === void 0 ? "1" : Se;
            }
            var ke, Ce, Re = (Ce = (ke = O).match(/(\d+%)/)) ? Number(Ce[0].slice(0, -1)) / 100 : Number(ke);
            c = c.split(H).join(fe("rgba(".concat(B, ", ").concat(M, ", ").concat(D, ", ").concat(Re, ")")));
          });
        } catch (w) {
          console.log("error", w, r);
        }
        return c;
      } catch (w) {
        console.error(w);
      }
      return null;
    }
    function _e(r, o, c) {
      return _e = H0() ? Reflect.construct : function(h, C, w) {
        var B = [null];
        B.push.apply(B, C);
        var M = new (Function.bind.apply(h, B))();
        return w && ze(M, w.prototype), M;
      }, _e.apply(null, arguments);
    }
    function qe(r, o) {
      if (r == null) return {};
      var c, h, C = function(B, M) {
        if (B == null) return {};
        var D, H, T = {}, _ = Object.keys(B);
        for (H = 0; H < _.length; H++) D = _[H], M.indexOf(D) >= 0 || (T[D] = B[D]);
        return T;
      }(r, o);
      if (Object.getOwnPropertySymbols) {
        var w = Object.getOwnPropertySymbols(r);
        for (h = 0; h < w.length; h++) c = w[h], o.indexOf(c) >= 0 || Object.prototype.propertyIsEnumerable.call(r, c) && (C[c] = r[c]);
      }
      return C;
    }
    function ze(r, o) {
      return ze = Object.setPrototypeOf || function(c, h) {
        return c.__proto__ = h, c;
      }, ze(r, o);
    }
    function B0(r, o) {
      return !o || ce(o) !== "object" && typeof o != "function" ? function(c) {
        if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return c;
      }(r) : o;
    }
    function H0() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function m0(r) {
      return m0 = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, m0(r);
    }
    function Ye(r, o) {
      var c = Object.keys(r);
      if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(r);
        o && (h = h.filter(function(C) {
          return Object.getOwnPropertyDescriptor(r, C).enumerable;
        })), c.push.apply(c, h);
      }
      return c;
    }
    function ye(r) {
      for (var o = 1; o < arguments.length; o++) {
        var c = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Ye(Object(c), !0).forEach(function(h) {
          ge(r, h, c[h]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : Ye(Object(c)).forEach(function(h) {
          Object.defineProperty(r, h, Object.getOwnPropertyDescriptor(c, h));
        });
      }
      return r;
    }
    function We(r) {
      return function(o) {
        if (Array.isArray(o)) return t0(o);
      }(r) || function(o) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(o)) return Array.from(o);
      }(r) || Ie(r) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function ce(r) {
      return ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, ce(r);
    }
    function ue(r, o) {
      return function(c) {
        if (Array.isArray(c)) return c;
      }(r) || function(c, h) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(c)) {
          var C = [], w = !0, B = !1, M = void 0;
          try {
            for (var D, H = c[Symbol.iterator](); !(w = (D = H.next()).done) && (C.push(D.value), !h || C.length !== h); w = !0) ;
          } catch (T) {
            B = !0, M = T;
          } finally {
            try {
              w || H.return == null || H.return();
            } finally {
              if (B) throw M;
            }
          }
          return C;
        }
      }(r, o) || Ie(r, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function ge(r, o, c) {
      return o in r ? Object.defineProperty(r, o, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = c, r;
    }
    function K(r, o) {
      return function(c, h) {
        return h.get ? h.get.call(c) : h.value;
      }(r, Te(r, o, "get"));
    }
    function le(r, o, c) {
      if (!o.has(r)) throw new TypeError("attempted to get private field on non-instance");
      return c;
    }
    function me(r, o, c) {
      return function(h, C, w) {
        if (C.set) C.set.call(h, w);
        else {
          if (!C.writable) throw new TypeError("attempted to set read only private field");
          C.value = w;
        }
      }(r, Te(r, o, "set"), c), c;
    }
    function Te(r, o, c) {
      if (!o.has(r)) throw new TypeError("attempted to " + c + " private field on non-instance");
      return o.get(r);
    }
    function Xe(r, o) {
      if (!(r instanceof o)) throw new TypeError("Cannot call a class as a function");
    }
    function R0(r, o) {
      for (var c = 0; c < o.length; c++) {
        var h = o[c];
        h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(r, h.key, h);
      }
    }
    function te(r, o, c) {
      return o && R0(r.prototype, o), c && R0(r, c), r;
    }
    function ne(r, o) {
      var c;
      if (typeof Symbol > "u" || r[Symbol.iterator] == null) {
        if (Array.isArray(r) || (c = Ie(r)) || o) {
          c && (r = c);
          var h = 0, C = function() {
          };
          return { s: C, n: function() {
            return h >= r.length ? { done: !0 } : { done: !1, value: r[h++] };
          }, e: function(D) {
            throw D;
          }, f: C };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var w, B = !0, M = !1;
      return { s: function() {
        c = r[Symbol.iterator]();
      }, n: function() {
        var D = c.next();
        return B = D.done, D;
      }, e: function(D) {
        M = !0, w = D;
      }, f: function() {
        try {
          B || c.return == null || c.return();
        } finally {
          if (M) throw w;
        }
      } };
    }
    function Ie(r, o) {
      if (r) {
        if (typeof r == "string") return t0(r, o);
        var c = Object.prototype.toString.call(r).slice(8, -1);
        return c === "Object" && r.constructor && (c = r.constructor.name), c === "Map" || c === "Set" ? Array.from(r) : c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? t0(r, o) : void 0;
      }
    }
    function t0(r, o) {
      (o == null || o > r.length) && (o = r.length);
      for (var c = 0, h = new Array(o); c < o; c++) h[c] = r[c];
      return h;
    }
    function $e(r, o) {
      var c = r.length;
      Array.isArray(r[0]) || (r = [r]), Array.isArray(o[0]) || (o = o.map(function(B) {
        return [B];
      }));
      var h = o[0].length, C = o[0].map(function(B, M) {
        return o.map(function(D) {
          return D[M];
        });
      }), w = r.map(function(B) {
        return C.map(function(M) {
          var D = 0;
          if (!Array.isArray(B)) {
            var H, T = ne(M);
            try {
              for (T.s(); !(H = T.n()).done; ) {
                var _ = H.value;
                D += B * _;
              }
            } catch (U) {
              T.e(U);
            } finally {
              T.f();
            }
            return D;
          }
          for (var O = 0; O < B.length; O++) D += B[O] * (M[O] || 0);
          return D;
        });
      });
      return c === 1 && (w = w[0]), h === 1 ? w.map(function(B) {
        return B[0];
      }) : w;
    }
    function V0(r) {
      return rt(r) === "string";
    }
    function rt(r) {
      return (Object.prototype.toString.call(r).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
    }
    function Ot(r, o) {
      r = +r, o = +o;
      var c = (Math.floor(r) + "").length;
      if (o > c) return +r.toFixed(o - c);
      var h = Math.pow(10, c - o);
      return Math.round(r / h) * h;
    }
    function L2(r) {
      if (r) {
        r = r.trim();
        var o = /^-?[\d.]+$/, c = r.match(/^([a-z]+)\((.+?)\)$/i);
        if (c) {
          var h = [];
          return c[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g, function(C, w) {
            /%$/.test(w) ? (w = new Number(w.slice(0, -1) / 100)).type = "<percentage>" : /deg$/.test(w) ? ((w = new Number(+w.slice(0, -3))).type = "<angle>", w.unit = "deg") : o.test(w) && ((w = new Number(w)).type = "<number>"), C.startsWith("/") && ((w = w instanceof Number ? w : new Number(w)).alpha = !0), h.push(w);
          }), { name: c[1].toLowerCase(), rawName: c[1], rawArgs: c[2], args: h };
        }
      }
    }
    function ir(r) {
      return r[r.length - 1];
    }
    function Gt(r, o, c) {
      return isNaN(r) ? o : isNaN(o) ? r : r + (o - r) * c;
    }
    function I2(r, o, c) {
      return (c - r) / (o - r);
    }
    function N2(r, o, c) {
      return Gt(o[0], o[1], I2(r[0], r[1], c));
    }
    function lr(r) {
      return r.map(function(o) {
        return o.split("|").map(function(c) {
          var h = (c = c.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
          if (h) {
            var C = new String(h[1]);
            return C.range = [+h[2], +h[3]], C;
          }
          return c;
        });
      });
    }
    var go = Object.freeze({ __proto__: null, isString: V0, type: rt, toPrecision: Ot, parseFunction: L2, last: ir, interpolate: Gt, interpolateInv: I2, mapRange: N2, parseCoordGrammar: lr, multiplyMatrices: $e }), dt = new (function() {
      function r() {
        Xe(this, r);
      }
      return te(r, [{ key: "add", value: function(o, c, h) {
        if (typeof arguments[0] == "string") (Array.isArray(o) ? o : [o]).forEach(function(C) {
          this[C] = this[C] || [], c && this[C][h ? "unshift" : "push"](c);
        }, this);
        else for (var o in arguments[0]) this.add(o, arguments[0][o], arguments[1]);
      } }, { key: "run", value: function(o, c) {
        this[o] = this[o] || [], this[o].forEach(function(h) {
          h.call(c && c.context ? c.context : c, c);
        });
      } }]), r;
    }())(), q0 = { gamut_mapping: "lch.c", precision: 5, deltaE: "76" }, K0 = { D50: [0.3457 / 0.3585, 1, 0.2958 / 0.3585], D65: [0.3127 / 0.329, 1, 0.3583 / 0.329] };
    function P2(r) {
      return Array.isArray(r) ? r : K0[r];
    }
    function Dt(r, o, c) {
      var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      if (r = P2(r), o = P2(o), !r || !o) throw new TypeError("Missing white point to convert ".concat(r ? "" : "from").concat(r || o ? "" : "/").concat(o ? "" : "to"));
      if (r === o) return c;
      var C = { W1: r, W2: o, XYZ: c, options: h };
      if (dt.run("chromatic-adaptation-start", C), C.M || (C.W1 === K0.D65 && C.W2 === K0.D50 ? C.M = [[1.0479298208405488, 0.022946793341019088, -0.05019222954313557], [0.029627815688159344, 0.990434484573249, -0.01707382502938514], [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]] : C.W1 === K0.D50 && C.W2 === K0.D65 && (C.M = [[0.9554734527042182, -0.023098536874261423, 0.0632593086610217], [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008], [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]])), dt.run("chromatic-adaptation-end", C), C.M) return $e(C.M, C.XYZ);
      throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
    }
    var cr = 75e-6, ft = /* @__PURE__ */ new WeakSet(), Mt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakSet(), be = function() {
      function r(o) {
        var c, h, C, w, B, M, D;
        Xe(this, r), Jt.add(this), ft.add(this), Mt.set(this, { writable: !0, value: void 0 }), this.id = o.id, this.name = o.name, this.base = o.base ? r.get(o.base) : null, this.aliases = o.aliases, this.base && (this.fromBase = o.fromBase, this.toBase = o.toBase);
        var H = (c = o.coords) !== null && c !== void 0 ? c : this.base.coords;
        this.coords = H;
        var T = (h = (C = o.white) !== null && C !== void 0 ? C : this.base.white) !== null && h !== void 0 ? h : "D65";
        for (var _ in this.white = P2(T), this.formats = (w = o.formats) !== null && w !== void 0 ? w : {}, this.formats) {
          var O = this.formats[_];
          O.type || (O.type = "function"), O.name || (O.name = _);
        }
        !o.cssId || (B = this.formats.functions) !== null && B !== void 0 && B.color ? (M = this.formats) === null || M === void 0 || !M.color || (D = this.formats) !== null && D !== void 0 && D.color.id || (this.formats.color.id = this.id) : (this.formats.color = { id: o.cssId }, Object.defineProperty(this, "cssId", { value: o.cssId })), this.referred = o.referred, me(this, Mt, le(this, Jt, dr).call(this).reverse()), dt.run("colorspace-init-end", this);
      }
      return te(r, [{ key: "inGamut", value: function(o) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = c.epsilon, C = h === void 0 ? cr : h;
        if (this.isPolar) return o = this.toBase(o), this.base.inGamut(o, { epsilon: C });
        var w = Object.values(this.coords);
        return o.every(function(B, M) {
          var D = w[M];
          if (D.type !== "angle" && D.range) {
            if (Number.isNaN(B)) return !0;
            var H = ue(D.range, 2), T = H[0], _ = H[1];
            return (T === void 0 || B >= T - C) && (_ === void 0 || B <= _ + C);
          }
          return !0;
        });
      } }, { key: "cssId", get: function() {
        var o, c;
        return ((o = this.formats.functions) === null || o === void 0 || (c = o.color) === null || c === void 0 ? void 0 : c.id) || this.id;
      } }, { key: "isPolar", get: function() {
        for (var o in this.coords) if (this.coords[o].type === "angle") return !0;
        return !1;
      } }, { key: "getFormat", value: function(o) {
        return ce(o) === "object" ? o = le(this, ft, ur).call(this, o) : (c = o === "default" ? Object.values(this.formats)[0] : this.formats[o]) ? c = le(this, ft, ur).call(this, c) : null;
        var c;
      } }, { key: "to", value: function(o, c) {
        if (arguments.length === 1) {
          var h = [o.space, o.coords];
          o = h[0], c = h[1];
        }
        if (this === (o = r.get(o))) return c;
        c = c.map(function(_) {
          return Number.isNaN(_) ? 0 : _;
        });
        for (var C, w, B = K(this, Mt), M = K(o, Mt), D = 0; D < B.length && B[D] === M[D]; D++) C = B[D], w = D;
        if (!C) throw new Error("Cannot convert between color spaces ".concat(this, " and ").concat(o, ": no connection space was found"));
        for (var H = B.length - 1; H > w; H--) c = B[H].toBase(c);
        for (var T = w + 1; T < M.length; T++) c = M[T].fromBase(c);
        return c;
      } }, { key: "from", value: function(o, c) {
        if (arguments.length === 1) {
          var h = [o.space, o.coords];
          o = h[0], c = h[1];
        }
        return (o = r.get(o)).to(this, c);
      } }, { key: "toString", value: function() {
        return "".concat(this.name, " (").concat(this.id, ")");
      } }, { key: "getMinCoords", value: function() {
        var o = [];
        for (var c in this.coords) {
          var h, C = this.coords[c], w = C.range || C.refRange;
          o.push((h = w == null ? void 0 : w.min) !== null && h !== void 0 ? h : 0);
        }
        return o;
      } }], [{ key: "all", get: function() {
        return We(new Set(Object.values(r.registry)));
      } }, { key: "register", value: function(o, c) {
        if (arguments.length === 1 && (o = (c = arguments[0]).id), c = this.get(c), this.registry[o] && this.registry[o] !== c) throw new Error("Duplicate color space registration: '".concat(o, "'"));
        if (this.registry[o] = c, arguments.length === 1 && c.aliases) {
          var h, C = ne(c.aliases);
          try {
            for (C.s(); !(h = C.n()).done; ) {
              var w = h.value;
              this.register(w, c);
            }
          } catch (B) {
            C.e(B);
          } finally {
            C.f();
          }
        }
        return c;
      } }, { key: "get", value: function(o) {
        if (!o || o instanceof r) return o;
        var c = rt(o);
        if (c === "string") {
          var h = r.registry[o.toLowerCase()];
          if (!h) throw new TypeError('No color space found with id = "'.concat(o, '"'));
          return h;
        }
        for (var C = arguments.length, w = new Array(C > 1 ? C - 1 : 0), B = 1; B < C; B++) w[B - 1] = arguments[B];
        if (w.length) return r.get.apply(r, w);
        throw new TypeError("".concat(o, " is not a valid color space"));
      } }, { key: "resolveCoord", value: function(o, c) {
        var h, C, w = rt(o);
        if (w === "string") if (o.includes(".")) {
          var B = ue(o.split("."), 2);
          h = B[0], C = B[1];
        } else h = void 0, C = o;
        else if (Array.isArray(o)) {
          var M = ue(o, 2);
          h = M[0], C = M[1];
        } else h = o.space, C = o.coordId;
        if ((h = r.get(h)) || (h = c), !h) throw new TypeError("Cannot resolve coordinate reference ".concat(o, ": No color space specified and relative references are not allowed here"));
        if ((w = rt(C)) === "number" || w === "string" && C >= 0) {
          var D = Object.entries(h.coords)[C];
          if (D) return ye({ space: h, id: D[0], index: C }, D[1]);
        }
        h = r.get(h);
        var H = C.toLowerCase(), T = 0;
        for (var _ in h.coords) {
          var O, U = h.coords[_];
          if (_.toLowerCase() === H || ((O = U.name) === null || O === void 0 ? void 0 : O.toLowerCase()) === H) return ye({ space: h, id: _, index: T }, U);
          T++;
        }
        throw new TypeError('No "'.concat(C, '" coordinate found in ').concat(h.name, ". Its coordinates are: ").concat(Object.keys(h.coords).join(", ")));
      } }]), r;
    }();
    function ur(r) {
      if (r.coords && !r.coordGrammar) {
        r.type || (r.type = "function"), r.name || (r.name = "color"), r.coordGrammar = lr(r.coords);
        var o = Object.entries(this.coords).map(function(c, h) {
          var C = ue(c, 2), w = (C[0], C[1]), B = r.coordGrammar[h][0], M = w.range || w.refRange, D = B.range, H = "";
          return B == "<percentage>" ? (D = [0, 100], H = "%") : B == "<angle>" && (H = "deg"), { fromRange: M, toRange: D, suffix: H };
        });
        r.serializeCoords = function(c, h) {
          return c.map(function(C, w) {
            var B = o[w], M = B.fromRange, D = B.toRange, H = B.suffix;
            return M && D && (C = N2(M, D, C)), C = Ot(C, h), H && (C += H), C;
          });
        };
      }
      return r;
    }
    function dr() {
      for (var r = [this], o = this; o = o.base; ) r.push(o);
      return r;
    }
    ge(be, "registry", {}), ge(be, "DEFAULT_FORMAT", { type: "functions", name: "color" });
    var $0 = new be({ id: "xyz-d65", name: "XYZ D65", coords: { x: { name: "X" }, y: { name: "Y" }, z: { name: "Z" } }, white: "D65", formats: { color: { ids: ["xyz-d65", "xyz"] } }, aliases: ["xyz"] }), L0 = function(r) {
      (function(w, B) {
        if (typeof B != "function" && B !== null) throw new TypeError("Super expression must either be null or a function");
        w.prototype = Object.create(B && B.prototype, { constructor: { value: w, writable: !0, configurable: !0 } }), B && ze(w, B);
      })(C, r);
      var o, c, h = (o = C, c = H0(), function() {
        var w, B = m0(o);
        if (c) {
          var M = m0(this).constructor;
          w = Reflect.construct(B, arguments, M);
        } else w = B.apply(this, arguments);
        return B0(this, w);
      });
      function C(w) {
        var B, M, D, H;
        return Xe(this, C), w.coords || (w.coords = { r: { range: [0, 1], name: "Red" }, g: { range: [0, 1], name: "Green" }, b: { range: [0, 1], name: "Blue" } }), w.base || (w.base = $0), w.toXYZ_M && w.fromXYZ_M && ((D = w.toBase) !== null && D !== void 0 || (w.toBase = function(T) {
          var _ = $e(w.toXYZ_M, T);
          return M.white !== M.base.white && (_ = Dt(M.white, M.base.white, _)), _;
        }), (H = w.fromBase) !== null && H !== void 0 || (w.fromBase = function(T) {
          return T = Dt(M.base.white, M.white, T), $e(w.fromXYZ_M, T);
        })), (B = w.referred) !== null && B !== void 0 || (w.referred = "display"), M = h.call(this, w);
      }
      return C;
    }(be);
    function V2(r) {
      var o, c = { str: (o = String(r)) === null || o === void 0 ? void 0 : o.trim() };
      if (dt.run("parse-start", c), c.color) return c.color;
      if (c.parsed = L2(c.str), c.parsed) {
        var h = function() {
          var _ = c.parsed.name;
          if (_ === "color") {
            var O, U = c.parsed.args.shift(), de = c.parsed.rawArgs.indexOf("/") > 0 ? c.parsed.args.pop() : 1, he = ne(be.all);
            try {
              for (he.s(); !(O = he.n()).done; ) {
                var pe, ae = O.value, Se = ae.getFormat("color");
                if (Se && (U === Se.id || (pe = Se.ids) !== null && pe !== void 0 && pe.includes(U))) {
                  var ke = function() {
                    var o0 = Object.keys(ae.coords).length, Oe = Array(o0).fill(0);
                    return Oe.forEach(function(x0, Je) {
                      return Oe[Je] = c.parsed.args[Je] || 0;
                    }), { v: { v: { spaceId: ae.id, coords: Oe, alpha: de } } };
                  }();
                  if (ce(ke) === "object") return ke.v;
                }
              }
            } catch (o0) {
              he.e(o0);
            } finally {
              he.f();
            }
            var Ce = "";
            if (U in be.registry) {
              var Re, Ue, g0, C0 = (Re = be.registry[U].formats) === null || Re === void 0 || (Ue = Re.functions) === null || Ue === void 0 || (g0 = Ue.color) === null || g0 === void 0 ? void 0 : g0.id;
              C0 && (Ce = "Did you mean color(".concat(C0, ")?"));
            }
            throw new TypeError("Cannot parse color(".concat(U, "). ") + (Ce || "Missing a plugin?"));
          }
          var D0, c0 = ne(be.all);
          try {
            var M0 = function() {
              var o0 = D0.value, Oe = o0.getFormat(_);
              if (Oe && Oe.type === "function") {
                var x0 = 1;
                (Oe.lastAlpha || ir(c.parsed.args).alpha) && (x0 = c.parsed.args.pop());
                var Je = c.parsed.args;
                return Oe.coordGrammar && Object.entries(o0.coords).forEach(function(u0, a0) {
                  var nt, k0 = ue(u0, 2), F0 = k0[0], at = k0[1], I0 = Oe.coordGrammar[a0], St = (nt = Je[a0]) === null || nt === void 0 ? void 0 : nt.type;
                  if (I0 = I0.find(function(p2) {
                    return p2 == St;
                  }), !I0) {
                    var b0 = at.name || F0;
                    throw new TypeError("".concat(St, " not allowed for ").concat(b0, " in ").concat(_, "()"));
                  }
                  var mt = I0.range;
                  St === "<percentage>" && (mt || (mt = [0, 1]));
                  var kt = at.range || at.refRange;
                  mt && kt && (Je[a0] = N2(mt, kt, Je[a0]));
                }), { v: { v: { spaceId: o0.id, coords: Je, alpha: x0 } } };
              }
            };
            for (c0.s(); !(D0 = c0.n()).done; ) {
              var Ge = M0();
              if (ce(Ge) === "object") return Ge.v;
            }
          } catch (o0) {
            c0.e(o0);
          } finally {
            c0.f();
          }
        }();
        if (ce(h) === "object") return h.v;
      } else {
        var C, w = ne(be.all);
        try {
          for (w.s(); !(C = w.n()).done; ) {
            var B = C.value;
            for (var M in B.formats) {
              var D = B.formats[M];
              if (D.type === "custom" && (!D.test || D.test(c.str))) {
                var H, T = D.parse(c.str);
                if (T) return (H = T.alpha) !== null && H !== void 0 || (T.alpha = 1), T;
              }
            }
          }
        } catch (_) {
          w.e(_);
        } finally {
          w.f();
        }
      }
      throw new TypeError("Could not parse ".concat(r, " as a color. Missing a plugin?"));
    }
    function Ke(r) {
      if (!r) throw new TypeError("Empty color reference");
      V0(r) && (r = V2(r));
      var o = r.space || r.spaceId;
      return o instanceof be || (r.space = be.get(o)), r.alpha === void 0 && (r.alpha = 1), r;
    }
    function Qt(r, o) {
      return (o = be.get(o)).from(r);
    }
    function G0(r, o) {
      var c = be.resolveCoord(o, r.space), h = c.space, C = c.index;
      return Qt(r, h)[C];
    }
    function T2(r, o, c) {
      return o = be.get(o), r.coords = o.to(r.space, c), r;
    }
    function pt(r, o, c) {
      if (r = Ke(r), arguments.length === 2 && rt(arguments[1]) === "object") {
        var h = arguments[1];
        for (var C in h) pt(r, C, h[C]);
      } else {
        typeof c == "function" && (c = c(G0(r, o)));
        var w = be.resolveCoord(o, r.space), B = w.space, M = w.index, D = Qt(r, B);
        D[M] = c, T2(r, B, D);
      }
      return r;
    }
    var F2 = new be({ id: "xyz-d50", name: "XYZ D50", white: "D50", base: $0, fromBase: function(r) {
      return Dt($0.white, "D50", r);
    }, toBase: function(r) {
      return Dt("D50", $0.white, r);
    }, formats: { color: {} } }), fr = 24 / 116, qt = 24389 / 27, P = K0.D50, Y = new be({ id: "lab", name: "Lab", coords: { l: { refRange: [0, 100], name: "L" }, a: { refRange: [-125, 125] }, b: { refRange: [-125, 125] } }, white: P, base: F2, fromBase: function(r) {
      var o = r.map(function(c, h) {
        return c / P[h];
      }).map(function(c) {
        return c > 0.008856451679035631 ? Math.cbrt(c) : (qt * c + 16) / 116;
      });
      return [116 * o[1] - 16, 500 * (o[0] - o[1]), 200 * (o[1] - o[2])];
    }, toBase: function(r) {
      var o = [];
      return o[1] = (r[0] + 16) / 116, o[0] = r[1] / 500 + o[1], o[2] = o[1] - r[2] / 200, [o[0] > fr ? Math.pow(o[0], 3) : (116 * o[0] - 16) / qt, r[0] > 8 ? Math.pow((r[0] + 16) / 116, 3) : r[0] / qt, o[2] > fr ? Math.pow(o[2], 3) : (116 * o[2] - 16) / qt].map(function(c, h) {
        return c * P[h];
      });
    }, formats: { lab: { coords: ["<number> | <percentage>", "<number>", "<number>"] } } });
    function ie(r) {
      return (r % 360 + 360) % 360;
    }
    function Be(r, o) {
      if (r === "raw") return o;
      var c = ue(o.map(ie), 2), h = c[0], C = c[1], w = C - h;
      return r === "increasing" ? w < 0 && (C += 360) : r === "decreasing" ? w > 0 && (h += 360) : r === "longer" ? -180 < w && w < 180 && (w > 0 ? C += 360 : h += 360) : r === "shorter" && (w > 180 ? h += 360 : w < -180 && (C += 360)), [h, C];
    }
    var Fe = new be({ id: "lch", name: "LCH", coords: { l: { refRange: [0, 100], name: "Lightness" }, c: { refRange: [0, 150], name: "Chroma" }, h: { refRange: [0, 360], type: "angle", name: "Hue" } }, base: Y, fromBase: function(r) {
      var o, c = ue(r, 3), h = c[0], C = c[1], w = c[2];
      return o = Math.abs(C) < 0.02 && Math.abs(w) < 0.02 ? NaN : 180 * Math.atan2(w, C) / Math.PI, [h, Math.sqrt(Math.pow(C, 2) + Math.pow(w, 2)), ie(o)];
    }, toBase: function(r) {
      var o = ue(r, 3), c = o[0], h = o[1], C = o[2];
      return h < 0 && (h = 0), isNaN(C) && (C = 0), [c, h * Math.cos(C * Math.PI / 180), h * Math.sin(C * Math.PI / 180)];
    }, formats: { lch: { coords: ["<number> | <percentage>", "<number>", "<number> | <angle>"] } } }), e0 = Math.pow(25, 7), Ne = Math.PI, Pe = 180 / Ne, h0 = Ne / 180;
    function f0(r, o) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = c.kL, C = h === void 0 ? 1 : h, w = c.kC, B = w === void 0 ? 1 : w, M = c.kH, D = M === void 0 ? 1 : M, H = Y.from(r), T = ue(H, 3), _ = T[0], O = T[1], U = T[2], de = Fe.from(Y, [_, O, U])[1], he = Y.from(o), pe = ue(he, 3), ae = pe[0], Se = pe[1], ke = pe[2], Ce = Fe.from(Y, [ae, Se, ke])[1];
      de < 0 && (de = 0), Ce < 0 && (Ce = 0);
      var Re = (de + Ce) / 2, Ue = Math.pow(Re, 7), g0 = 0.5 * (1 - Math.sqrt(Ue / (Ue + e0))), C0 = (1 + g0) * O, D0 = (1 + g0) * Se, c0 = Math.sqrt(Math.pow(C0, 2) + Math.pow(U, 2)), M0 = Math.sqrt(Math.pow(D0, 2) + Math.pow(ke, 2)), Ge = C0 === 0 && U === 0 ? 0 : Math.atan2(U, C0), o0 = D0 === 0 && ke === 0 ? 0 : Math.atan2(ke, D0);
      Ge < 0 && (Ge += 2 * Ne), o0 < 0 && (o0 += 2 * Ne);
      var Oe, x0 = ae - _, Je = M0 - c0, u0 = (o0 *= Pe) - (Ge *= Pe), a0 = Ge + o0, nt = Math.abs(u0);
      c0 * M0 == 0 ? Oe = 0 : nt <= 180 ? Oe = u0 : u0 > 180 ? Oe = u0 - 360 : u0 < -180 ? Oe = u0 + 360 : console.log("the unthinkable has happened");
      var k0, F0 = 2 * Math.sqrt(M0 * c0) * Math.sin(Oe * h0 / 2), at = (_ + ae) / 2, I0 = (c0 + M0) / 2, St = Math.pow(I0, 7);
      k0 = c0 * M0 == 0 ? a0 : nt <= 180 ? a0 / 2 : a0 < 360 ? (a0 + 360) / 2 : (a0 - 360) / 2;
      var b0 = Math.pow(at - 50, 2), mt = 1 + 0.015 * b0 / Math.sqrt(20 + b0), kt = 1 + 0.045 * I0, p2 = 1;
      p2 -= 0.17 * Math.cos((k0 - 30) * h0), p2 += 0.24 * Math.cos(2 * k0 * h0), p2 += 0.32 * Math.cos((3 * k0 + 6) * h0);
      var m1 = 1 + 0.015 * I0 * (p2 -= 0.2 * Math.cos((4 * k0 - 63) * h0)), Jl = 30 * Math.exp(-1 * Math.pow((k0 - 275) / 25, 2)), ql = 2 * Math.sqrt(St / (St + e0)), ec = -1 * Math.sin(2 * Jl * h0) * ql, Nr = Math.pow(x0 / (C * mt), 2);
      return Nr += Math.pow(Je / (B * kt), 2), Nr += Math.pow(F0 / (D * m1), 2), Nr += ec * (Je / (B * kt)) * (F0 / (D * m1)), Math.sqrt(Nr);
    }
    var v0 = 75e-6;
    function E0(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : r.space, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = c.epsilon, C = h === void 0 ? v0 : h;
      r = Ke(r), o = be.get(o);
      var w = r.coords;
      return o !== r.space && (w = o.from(r)), o.inGamut(w, { epsilon: C });
    }
    function et(r) {
      return { space: r.space, coords: r.coords.slice(), alpha: r.alpha };
    }
    function T0(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = o.method, h = c === void 0 ? q0.gamut_mapping : c, C = o.space, w = C === void 0 ? r.space : C;
      if (V0(arguments[1]) && (w = arguments[1]), E0(r, w = be.get(w), { epsilon: 0 })) return r;
      var B = i0(r, w);
      if (h !== "clip" && !E0(r, w)) {
        var M = T0(et(B), { method: "clip", space: w });
        if (f0(r, M) > 2) {
          for (var D = be.resolveCoord(h), H = D.space, T = D.id, _ = i0(B, H), O = D.range || D.refRange, U = O[0], de = 0.01, he = U, pe = G0(_, T); pe - he > de; ) {
            var ae = et(_), Se = f0(_, ae = T0(ae, { space: w, method: "clip" }));
            Se - 2 < de ? he = G0(_, T) : pe = G0(_, T), pt(_, T, (he + pe) / 2);
          }
          B = i0(_, w);
        } else B = M;
      }
      if (h === "clip" || !E0(B, w, { epsilon: 0 })) {
        var ke = Object.values(w.coords).map(function(Ce) {
          return Ce.range || [];
        });
        B.coords = B.coords.map(function(Ce, Re) {
          var Ue = ue(ke[Re], 2), g0 = Ue[0], C0 = Ue[1];
          return g0 !== void 0 && (Ce = Math.max(g0, Ce)), C0 !== void 0 && (Ce = Math.min(Ce, C0)), Ce;
        });
      }
      return w !== r.space && (B = i0(B, r.space)), r.coords = B.coords, r;
    }
    function i0(r, o) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = c.inGamut;
      r = Ke(r);
      var C = (o = be.get(o)).from(r), w = { space: o, coords: C, alpha: r.alpha };
      return h && (w = T0(w)), w;
    }
    function Ht(r) {
      var o, c, h, C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = C.precision, B = w === void 0 ? q0.precision : w, M = C.format, D = M === void 0 ? "default" : M, H = C.inGamut, T = H === void 0 || H, _ = qe(C, ["precision", "format", "inGamut"]), O = D;
      D = (o = (c = (r = Ke(r)).space.getFormat(D)) !== null && c !== void 0 ? c : r.space.getFormat("default")) !== null && o !== void 0 ? o : be.DEFAULT_FORMAT, T || (T = D.toGamut);
      var U = r.coords;
      if (U = U.map(function(Ce) {
        return Ce || 0;
      }), T && !E0(r) && (U = T0(et(r), T === !0 ? void 0 : T).coords), D.type === "custom") {
        if (_.precision = B, !D.serialize) throw new TypeError("format ".concat(O, " can only be used to parse colors, not for serialization"));
        h = D.serialize(U, r.alpha, _);
      } else {
        var de = D.name || "color";
        D.serializeCoords ? U = D.serializeCoords(U, B) : B !== null && (U = U.map(function(Ce) {
          return Ot(Ce, B);
        }));
        var he = We(U);
        if (de === "color") {
          var pe, ae = D.id || ((pe = D.ids) === null || pe === void 0 ? void 0 : pe[0]) || r.space.id;
          he.unshift(ae);
        }
        var Se = r.alpha;
        B !== null && (Se = Ot(Se, B));
        var ke = r.alpha < 1 && !D.noAlpha ? "".concat(D.commas ? "," : " /", " ").concat(Se) : "";
        h = "".concat(de, "(").concat(he.join(D.commas ? ", " : " ")).concat(ke, ")");
      }
      return h;
    }
    T0.returns = "color", i0.returns = "color";
    var e2 = new L0({ id: "rec2020-linear", name: "Linear REC.2020", white: "D65", toXYZ_M: [[0.6369580483012914, 0.14461690358620832, 0.1688809751641721], [0.2627002120112671, 0.6779980715188708, 0.05930171646986196], [0, 0.028072693049087428, 1.060985057710791]], fromXYZ_M: [[1.716651187971268, -0.355670783776392, -0.25336628137366], [-0.666684351832489, 1.616481236634939, 0.0157685458139111], [0.017639857445311, -0.042770613257809, 0.942103121235474]], formats: { color: {} } }), t2 = 1.09929682680944, On = 0.018053968510807, Gn = new L0({ id: "rec2020", name: "REC.2020", base: e2, toBase: function(r) {
      return r.map(function(o) {
        return o < 4.5 * On ? o / 4.5 : Math.pow((o + t2 - 1) / t2, 1 / 0.45);
      });
    }, fromBase: function(r) {
      return r.map(function(o) {
        return o >= On ? t2 * Math.pow(o, 0.45) - (t2 - 1) : 4.5 * o;
      });
    }, formats: { color: {} } }), Qn = new L0({ id: "p3-linear", name: "Linear P3", white: "D65", toXYZ_M: [[0.4865709486482162, 0.26566769316909306, 0.1982172852343625], [0.2289745640697488, 0.6917385218365064, 0.079286914093745], [0, 0.04511338185890264, 1.043944368900976]], fromXYZ_M: [[2.493496911941425, -0.9313836179191239, -0.40271078445071684], [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577], [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]] }), zn = new L0({ id: "srgb-linear", name: "Linear sRGB", white: "D65", toXYZ_M: [[0.41239079926595934, 0.357584339383878, 0.1804807884018343], [0.21263900587151027, 0.715168678767756, 0.07219231536073371], [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]], fromXYZ_M: [[3.2409699419045226, -1.537383177570094, -0.4986107602930034], [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559], [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]], formats: { color: {} } }), Zn = { aliceblue: [240 / 255, 248 / 255, 1], antiquewhite: [250 / 255, 235 / 255, 215 / 255], aqua: [0, 1, 1], aquamarine: [127 / 255, 1, 212 / 255], azure: [240 / 255, 1, 1], beige: [245 / 255, 245 / 255, 220 / 255], bisque: [1, 228 / 255, 196 / 255], black: [0, 0, 0], blanchedalmond: [1, 235 / 255, 205 / 255], blue: [0, 0, 1], blueviolet: [138 / 255, 43 / 255, 226 / 255], brown: [165 / 255, 42 / 255, 42 / 255], burlywood: [222 / 255, 184 / 255, 135 / 255], cadetblue: [95 / 255, 158 / 255, 160 / 255], chartreuse: [127 / 255, 1, 0], chocolate: [210 / 255, 105 / 255, 30 / 255], coral: [1, 127 / 255, 80 / 255], cornflowerblue: [100 / 255, 149 / 255, 237 / 255], cornsilk: [1, 248 / 255, 220 / 255], crimson: [220 / 255, 20 / 255, 60 / 255], cyan: [0, 1, 1], darkblue: [0, 0, 139 / 255], darkcyan: [0, 139 / 255, 139 / 255], darkgoldenrod: [184 / 255, 134 / 255, 11 / 255], darkgray: [169 / 255, 169 / 255, 169 / 255], darkgreen: [0, 100 / 255, 0], darkgrey: [169 / 255, 169 / 255, 169 / 255], darkkhaki: [189 / 255, 183 / 255, 107 / 255], darkmagenta: [139 / 255, 0, 139 / 255], darkolivegreen: [85 / 255, 107 / 255, 47 / 255], darkorange: [1, 140 / 255, 0], darkorchid: [0.6, 50 / 255, 0.8], darkred: [139 / 255, 0, 0], darksalmon: [233 / 255, 150 / 255, 122 / 255], darkseagreen: [143 / 255, 188 / 255, 143 / 255], darkslateblue: [72 / 255, 61 / 255, 139 / 255], darkslategray: [47 / 255, 79 / 255, 79 / 255], darkslategrey: [47 / 255, 79 / 255, 79 / 255], darkturquoise: [0, 206 / 255, 209 / 255], darkviolet: [148 / 255, 0, 211 / 255], deeppink: [1, 20 / 255, 147 / 255], deepskyblue: [0, 191 / 255, 1], dimgray: [105 / 255, 105 / 255, 105 / 255], dimgrey: [105 / 255, 105 / 255, 105 / 255], dodgerblue: [30 / 255, 144 / 255, 1], firebrick: [178 / 255, 34 / 255, 34 / 255], floralwhite: [1, 250 / 255, 240 / 255], forestgreen: [34 / 255, 139 / 255, 34 / 255], fuchsia: [1, 0, 1], gainsboro: [220 / 255, 220 / 255, 220 / 255], ghostwhite: [248 / 255, 248 / 255, 1], gold: [1, 215 / 255, 0], goldenrod: [218 / 255, 165 / 255, 32 / 255], gray: [128 / 255, 128 / 255, 128 / 255], green: [0, 128 / 255, 0], greenyellow: [173 / 255, 1, 47 / 255], grey: [128 / 255, 128 / 255, 128 / 255], honeydew: [240 / 255, 1, 240 / 255], hotpink: [1, 105 / 255, 180 / 255], indianred: [205 / 255, 92 / 255, 92 / 255], indigo: [75 / 255, 0, 130 / 255], ivory: [1, 1, 240 / 255], khaki: [240 / 255, 230 / 255, 140 / 255], lavender: [230 / 255, 230 / 255, 250 / 255], lavenderblush: [1, 240 / 255, 245 / 255], lawngreen: [124 / 255, 252 / 255, 0], lemonchiffon: [1, 250 / 255, 205 / 255], lightblue: [173 / 255, 216 / 255, 230 / 255], lightcoral: [240 / 255, 128 / 255, 128 / 255], lightcyan: [224 / 255, 1, 1], lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255], lightgray: [211 / 255, 211 / 255, 211 / 255], lightgreen: [144 / 255, 238 / 255, 144 / 255], lightgrey: [211 / 255, 211 / 255, 211 / 255], lightpink: [1, 182 / 255, 193 / 255], lightsalmon: [1, 160 / 255, 122 / 255], lightseagreen: [32 / 255, 178 / 255, 170 / 255], lightskyblue: [135 / 255, 206 / 255, 250 / 255], lightslategray: [119 / 255, 136 / 255, 0.6], lightslategrey: [119 / 255, 136 / 255, 0.6], lightsteelblue: [176 / 255, 196 / 255, 222 / 255], lightyellow: [1, 1, 224 / 255], lime: [0, 1, 0], limegreen: [50 / 255, 205 / 255, 50 / 255], linen: [250 / 255, 240 / 255, 230 / 255], magenta: [1, 0, 1], maroon: [128 / 255, 0, 0], mediumaquamarine: [0.4, 205 / 255, 170 / 255], mediumblue: [0, 0, 205 / 255], mediumorchid: [186 / 255, 85 / 255, 211 / 255], mediumpurple: [147 / 255, 112 / 255, 219 / 255], mediumseagreen: [60 / 255, 179 / 255, 113 / 255], mediumslateblue: [123 / 255, 104 / 255, 238 / 255], mediumspringgreen: [0, 250 / 255, 154 / 255], mediumturquoise: [72 / 255, 209 / 255, 0.8], mediumvioletred: [199 / 255, 21 / 255, 133 / 255], midnightblue: [25 / 255, 25 / 255, 112 / 255], mintcream: [245 / 255, 1, 250 / 255], mistyrose: [1, 228 / 255, 225 / 255], moccasin: [1, 228 / 255, 181 / 255], navajowhite: [1, 222 / 255, 173 / 255], navy: [0, 0, 128 / 255], oldlace: [253 / 255, 245 / 255, 230 / 255], olive: [128 / 255, 128 / 255, 0], olivedrab: [107 / 255, 142 / 255, 35 / 255], orange: [1, 165 / 255, 0], orangered: [1, 69 / 255, 0], orchid: [218 / 255, 112 / 255, 214 / 255], palegoldenrod: [238 / 255, 232 / 255, 170 / 255], palegreen: [152 / 255, 251 / 255, 152 / 255], paleturquoise: [175 / 255, 238 / 255, 238 / 255], palevioletred: [219 / 255, 112 / 255, 147 / 255], papayawhip: [1, 239 / 255, 213 / 255], peachpuff: [1, 218 / 255, 185 / 255], peru: [205 / 255, 133 / 255, 63 / 255], pink: [1, 192 / 255, 203 / 255], plum: [221 / 255, 160 / 255, 221 / 255], powderblue: [176 / 255, 224 / 255, 230 / 255], purple: [128 / 255, 0, 128 / 255], rebeccapurple: [0.4, 0.2, 0.6], red: [1, 0, 0], rosybrown: [188 / 255, 143 / 255, 143 / 255], royalblue: [65 / 255, 105 / 255, 225 / 255], saddlebrown: [139 / 255, 69 / 255, 19 / 255], salmon: [250 / 255, 128 / 255, 114 / 255], sandybrown: [244 / 255, 164 / 255, 96 / 255], seagreen: [46 / 255, 139 / 255, 87 / 255], seashell: [1, 245 / 255, 238 / 255], sienna: [160 / 255, 82 / 255, 45 / 255], silver: [192 / 255, 192 / 255, 192 / 255], skyblue: [135 / 255, 206 / 255, 235 / 255], slateblue: [106 / 255, 90 / 255, 205 / 255], slategray: [112 / 255, 128 / 255, 144 / 255], slategrey: [112 / 255, 128 / 255, 144 / 255], snow: [1, 250 / 255, 250 / 255], springgreen: [0, 1, 127 / 255], steelblue: [70 / 255, 130 / 255, 180 / 255], tan: [210 / 255, 180 / 255, 140 / 255], teal: [0, 128 / 255, 128 / 255], thistle: [216 / 255, 191 / 255, 216 / 255], tomato: [1, 99 / 255, 71 / 255], turquoise: [64 / 255, 224 / 255, 208 / 255], violet: [238 / 255, 130 / 255, 238 / 255], wheat: [245 / 255, 222 / 255, 179 / 255], white: [1, 1, 1], whitesmoke: [245 / 255, 245 / 255, 245 / 255], yellow: [1, 1, 0], yellowgreen: [154 / 255, 205 / 255, 50 / 255] }, Un = Array(3).fill("<percentage> | <number>[0, 255]"), Yn = Array(3).fill("<number>[0, 255]"), _2 = new L0({ id: "srgb", name: "sRGB", base: zn, fromBase: function(r) {
      return r.map(function(o) {
        var c = o < 0 ? -1 : 1, h = o * c;
        return h > 31308e-7 ? c * (1.055 * Math.pow(h, 1 / 2.4) - 0.055) : 12.92 * o;
      });
    }, toBase: function(r) {
      return r.map(function(o) {
        var c = o < 0 ? -1 : 1, h = o * c;
        return h < 0.04045 ? o / 12.92 : c * Math.pow((h + 0.055) / 1.055, 2.4);
      });
    }, formats: { rgb: { coords: Un }, rgb_number: { name: "rgb", commas: !0, coords: Yn, noAlpha: !0 }, color: {}, rgba: { coords: Un, commas: !0, lastAlpha: !0 }, rgba_number: { name: "rgba", commas: !0, coords: Yn }, hex: { type: "custom", toGamut: !0, test: function(r) {
      return /^#([a-f0-9]{3,4}){1,2}$/i.test(r);
    }, parse: function(r) {
      r.length <= 5 && (r = r.replace(/[a-f0-9]/gi, "$&$&"));
      var o = [];
      return r.replace(/[a-f0-9]{2}/gi, function(c) {
        o.push(parseInt(c, 16) / 255);
      }), { spaceId: "srgb", coords: o.slice(0, 3), alpha: o.slice(3)[0] };
    }, serialize: function(r, o) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = c.collapse, C = h === void 0 || h;
      o < 1 && r.push(o), r = r.map(function(M) {
        return Math.round(255 * M);
      });
      var w = C && r.every(function(M) {
        return M % 17 == 0;
      }), B = r.map(function(M) {
        return w ? (M / 17).toString(16) : M.toString(16).padStart(2, "0");
      }).join("");
      return "#" + B;
    } }, keyword: { type: "custom", test: function(r) {
      return /^[a-z]+$/i.test(r);
    }, parse: function(r) {
      var o = { spaceId: "srgb", coords: null, alpha: 1 };
      if ((r = r.toLowerCase()) === "transparent" ? (o.coords = Zn.black, o.alpha = 0) : o.coords = Zn[r], o.coords) return o;
    } } } }), $n = new L0({ id: "p3", name: "P3", base: Qn, fromBase: _2.fromBase, toBase: _2.toBase, formats: { color: { id: "display-p3" } } });
    if (q0.display_space = _2, typeof CSS < "u" && CSS.supports) for (var mo = 0, Wn = [Y, Gn, $n]; mo < Wn.length; mo++) {
      var ho = Wn[mo], hi = ho.getMinCoords(), vi = Ht({ space: ho, coords: hi, alpha: 1 });
      if (CSS.supports("color", vi)) {
        q0.display_space = ho;
        break;
      }
    }
    function yi(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = o.space, h = c === void 0 ? q0.display_space : c, C = qe(o, ["space"]), w = Ht(r, C);
      if (typeof CSS > "u" || CSS.supports("color", w) || !q0.display_space) (w = new String(w)).color = r;
      else {
        var B = i0(r, h);
        (w = new String(Ht(B, C))).color = B;
      }
      return w;
    }
    function Xn(r, o) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "lab", h = (c = be.get(c)).from(r), C = c.from(o);
      return Math.sqrt(h.reduce(function(w, B, M) {
        var D = C[M];
        return isNaN(B) || isNaN(D) ? w : w + Math.pow(D - B, 2);
      }, 0));
    }
    function Rt(r) {
      return G0(r, [$0, "y"]);
    }
    function Kn(r, o) {
      pt(r, [$0, "y"], o);
    }
    var Ci = Object.freeze({ __proto__: null, getLuminance: Rt, setLuminance: Kn, register: function(r) {
      Object.defineProperty(r.prototype, "luminance", { get: function() {
        return Rt(this);
      }, set: function(o) {
        Kn(this, o);
      } });
    } });
    function Jn(r) {
      return r >= 0.022 ? r : r + Math.pow(0.022 - r, 1.414);
    }
    function r2(r) {
      var o = r < 0 ? -1 : 1, c = Math.abs(r);
      return o * Math.pow(c, 2.4);
    }
    var qn = 24 / 116, pr = 24389 / 27, vo = K0.D65, yo = new be({ id: "lab-d65", name: "Lab D65", coords: { l: { refRange: [0, 100], name: "L" }, a: { refRange: [-125, 125] }, b: { refRange: [-125, 125] } }, white: vo, base: $0, fromBase: function(r) {
      var o = r.map(function(c, h) {
        return c / vo[h];
      }).map(function(c) {
        return c > 0.008856451679035631 ? Math.cbrt(c) : (pr * c + 16) / 116;
      });
      return [116 * o[1] - 16, 500 * (o[0] - o[1]), 200 * (o[1] - o[2])];
    }, toBase: function(r) {
      var o = [];
      return o[1] = (r[0] + 16) / 116, o[0] = r[1] / 500 + o[1], o[2] = o[1] - r[2] / 200, [o[0] > qn ? Math.pow(o[0], 3) : (116 * o[0] - 16) / pr, r[0] > 8 ? Math.pow((r[0] + 16) / 116, 3) : r[0] / pr, o[2] > qn ? Math.pow(o[2], 3) : (116 * o[2] - 16) / pr].map(function(c, h) {
        return c * vo[h];
      });
    }, formats: { "lab-d65": { coords: ["<number> | <percentage>", "<number>", "<number>"] } } }), Co = 0.5 * Math.pow(5, 0.5) + 0.5, gr = Object.freeze({ __proto__: null, contrastWCAG21: function(r, o) {
      r = Ke(r), o = Ke(o);
      var c = Math.max(Rt(r), 0), h = Math.max(Rt(o), 0);
      if (h > c) {
        var C = [h, c];
        c = C[0], h = C[1];
      }
      return (c + 0.05) / (h + 0.05);
    }, contrastAPCA: function(r, o) {
      var c, h, C, w;
      o = Ke(o), r = Ke(r);
      var B = ue((o = i0(o, "srgb")).coords, 3);
      h = B[0], C = B[1], w = B[2];
      var M = 0.2126729 * r2(h) + 0.7151522 * r2(C) + 0.072175 * r2(w), D = ue((r = i0(r, "srgb")).coords, 3);
      h = D[0], C = D[1], w = D[2];
      var H = 0.2126729 * r2(h) + 0.7151522 * r2(C) + 0.072175 * r2(w), T = Jn(M), _ = Jn(H), O = _ > T;
      return c = Math.abs(_ - T) < 5e-4 ? 0 : O ? 1.14 * (Math.pow(_, 0.56) - Math.pow(T, 0.57)) : 1.14 * (Math.pow(_, 0.65) - Math.pow(T, 0.62)), 100 * (Math.abs(c) < 0.1 ? 0 : c > 0 ? c - 0.027 : c + 0.027);
    }, contrastMichelson: function(r, o) {
      r = Ke(r), o = Ke(o);
      var c = Math.max(Rt(r), 0), h = Math.max(Rt(o), 0);
      if (h > c) {
        var C = [h, c];
        c = C[0], h = C[1];
      }
      var w = c + h;
      return w === 0 ? 0 : (c - h) / w;
    }, contrastWeber: function(r, o) {
      r = Ke(r), o = Ke(o);
      var c = Math.max(Rt(r), 0), h = Math.max(Rt(o), 0);
      if (h > c) {
        var C = [h, c];
        c = C[0], h = C[1];
      }
      return h === 0 ? 5e4 : (c - h) / h;
    }, contrastLstar: function(r, o) {
      r = Ke(r), o = Ke(o);
      var c = G0(r, [Y, "l"]), h = G0(o, [Y, "l"]);
      return Math.abs(c - h);
    }, contrastDeltaPhi: function(r, o) {
      r = Ke(r), o = Ke(o);
      var c = G0(r, [yo, "l"]), h = G0(o, [yo, "l"]), C = Math.abs(Math.pow(c, Co) - Math.pow(h, Co)), w = Math.pow(C, 1 / Co) * Math.SQRT2 - 40;
      return w < 7.5 ? 0 : w;
    } });
    function ea(r) {
      var o = ue(Qt(r, $0), 3), c = o[0], h = o[1], C = c + 15 * h + 3 * o[2];
      return [4 * c / C, 9 * h / C];
    }
    function ta(r) {
      var o = ue(Qt(r, $0), 3), c = o[0], h = o[1], C = c + h + o[2];
      return [c / C, h / C];
    }
    var xi = Object.freeze({ __proto__: null, uv: ea, xy: ta, register: function(r) {
      Object.defineProperty(r.prototype, "uv", { get: function() {
        return ea(this);
      } }), Object.defineProperty(r.prototype, "xy", { get: function() {
        return ta(this);
      } });
    } }), ra = Math.PI / 180, xo = new be({ id: "xyz-abs-d65", name: "Absolute XYZ D65", coords: { x: { refRange: [0, 9504.7], name: "Xa" }, y: { refRange: [0, 1e4], name: "Ya" }, z: { refRange: [0, 10888.3], name: "Za" } }, base: $0, fromBase: function(r) {
      return r.map(function(o) {
        return Math.max(203 * o, 0);
      });
    }, toBase: function(r) {
      return r.map(function(o) {
        return Math.max(o / 203, 0);
      });
    } }), mr = 1.15, hr = 0.66, oa = 2610 / Math.pow(2, 14), bi = Math.pow(2, 14) / 2610, na = 3424 / Math.pow(2, 12), aa = 2413 / Math.pow(2, 7), sa = 2392 / Math.pow(2, 7), wi = 1.7 * 2523 / Math.pow(2, 5), ia = Math.pow(2, 5) / (1.7 * 2523), vr = -0.56, bo = 16295499532821565e-27, Ai = [[0.41478972, 0.579999, 0.014648], [-0.20151, 1.120649, 0.0531008], [-0.0166008, 0.2648, 0.6684799]], Si = [[1.9242264357876067, -1.0047923125953657, 0.037651404030618], [0.35031676209499907, 0.7264811939316552, -0.06538442294808501], [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]], ki = [[0.5, 0.5, 0], [3.524, -4.066708, 0.542708], [0.199076, 1.096799, -1.295875]], ji = [[1, 0.1386050432715393, 0.05804731615611886], [0.9999999999999999, -0.1386050432715393, -0.05804731615611886], [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]], la = new be({ id: "jzazbz", name: "Jzazbz", coords: { jz: { refRange: [0, 1], name: "Jz" }, az: { refRange: [-0.5, 0.5] }, bz: { refRange: [-0.5, 0.5] } }, base: xo, fromBase: function(r) {
      var o = ue(r, 3), c = o[0], h = o[1], C = o[2], w = $e(Ai, [mr * c - (mr - 1) * C, hr * h - (hr - 1) * c, C]).map(function(T) {
        var _ = na + aa * Math.pow(T / 1e4, oa), O = 1 + sa * Math.pow(T / 1e4, oa);
        return Math.pow(_ / O, wi);
      }), B = ue($e(ki, w), 3), M = B[0], D = B[1], H = B[2];
      return [(1 + vr) * M / (1 + vr * M) - bo, D, H];
    }, toBase: function(r) {
      var o = ue(r, 3), c = o[0], h = o[1], C = o[2], w = $e(ji, [(c + bo) / (1 + vr - vr * (c + bo)), h, C]).map(function(_) {
        var O = na - Math.pow(_, ia), U = sa * Math.pow(_, ia) - aa;
        return 1e4 * Math.pow(O / U, bi);
      }), B = ue($e(Si, w), 3), M = B[0], D = B[1], H = B[2], T = (M + (mr - 1) * H) / mr;
      return [T, (D + (hr - 1) * T) / hr, H];
    }, formats: { color: {} } }), wo = new be({ id: "jzczhz", name: "JzCzHz", coords: { jz: { refRange: [0, 1], name: "Jz" }, cz: { refRange: [0, 1], name: "Chroma" }, hz: { refRange: [0, 360], type: "angle", name: "Hue" } }, base: la, fromBase: function(r) {
      var o, c = ue(r, 3), h = c[0], C = c[1], w = c[2], B = 2e-4;
      return o = Math.abs(C) < B && Math.abs(w) < B ? NaN : 180 * Math.atan2(w, C) / Math.PI, [h, Math.sqrt(Math.pow(C, 2) + Math.pow(w, 2)), ie(o)];
    }, toBase: function(r) {
      return [r[0], r[1] * Math.cos(r[2] * Math.PI / 180), r[1] * Math.sin(r[2] * Math.PI / 180)];
    }, formats: { color: {} } }), ca = 0.8359375, ua = 2413 / 128, da = 18.6875, fa = 2610 / 16384, pa = 32 / 2523, Bi = [[0.3592, 0.6976, -0.0358], [-0.1922, 1.1004, 0.0755], [7e-3, 0.0749, 0.8434]], Ei = [[0.5, 0.5, 0], [6610 / 4096, -13613 / 4096, 7003 / 4096], [17933 / 4096, -17390 / 4096, -543 / 4096]], Di = [[0.9999888965628402, 0.008605050147287059, 0.11103437159861648], [1.00001110343716, -0.008605050147287059, -0.11103437159861648], [1.0000320633910054, 0.56004913547279, -0.3206339100541203]], Mi = [[2.0701800566956137, -1.326456876103021, 0.20661600684785517], [0.3649882500326575, 0.6804673628522352, -0.04542175307585323], [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]], Ao = new be({ id: "ictcp", name: "ICTCP", coords: { i: { refRange: [0, 1], name: "I" }, ct: { refRange: [-0.5, 0.5], name: "CT" }, cp: { refRange: [-0.5, 0.5], name: "CP" } }, base: xo, fromBase: function(r) {
      return o = $e(Bi, r), c = o.map(function(h) {
        var C = ca + ua * Math.pow(h / 1e4, fa), w = 1 + da * Math.pow(h / 1e4, fa);
        return Math.pow(C / w, 78.84375);
      }), $e(Ei, c);
      var o, c;
    }, toBase: function(r) {
      var o = function(c) {
        return $e(Di, c).map(function(h) {
          var C = Math.max(Math.pow(h, pa) - ca, 0), w = ua - da * Math.pow(h, pa);
          return 1e4 * Math.pow(C / w, 6.277394636015326);
        });
      }(r);
      return $e(Mi, o);
    }, formats: { color: {} } }), Hi = [[0.8190224432164319, 0.3619062562801221, -0.12887378261216414], [0.0329836671980271, 0.9292868468965546, 0.03614466816999844], [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]], Ri = [[1.2268798733741557, -0.5578149965554813, 0.28139105017721583], [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701], [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]], Li = [[0.2104542553, 0.793617785, -0.0040720468], [1.9779984951, -2.428592205, 0.4505937099], [0.0259040371, 0.7827717662, -0.808675766]], Ii = [[0.9999999984505198, 0.39633779217376786, 0.2158037580607588], [1.0000000088817609, -0.10556134232365635, -0.06385417477170591], [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]], yr = new be({ id: "oklab", name: "OKLab", coords: { l: { refRange: [0, 1], name: "L" }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } }, white: "D65", base: $0, fromBase: function(r) {
      var o = $e(Hi, r).map(function(c) {
        return Math.cbrt(c);
      });
      return $e(Li, o);
    }, toBase: function(r) {
      var o = $e(Ii, r).map(function(c) {
        return Math.pow(c, 3);
      });
      return $e(Ri, o);
    }, formats: { oklab: { coords: ["<number> | <percentage>", "<number>", "<number>"] } } }), So = Object.freeze({ __proto__: null, deltaE76: function(r, o) {
      return Xn(r, o, "lab");
    }, deltaECMC: function(r, o) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = c.l, C = h === void 0 ? 2 : h, w = c.c, B = w === void 0 ? 1 : w, M = Y.from(r), D = ue(M, 3), H = D[0], T = D[1], _ = D[2], O = Fe.from(Y, [H, T, _]), U = ue(O, 3), de = U[1], he = U[2], pe = Y.from(o), ae = ue(pe, 3), Se = ae[0], ke = ae[1], Ce = ae[2], Re = Fe.from(Y, [Se, ke, Ce])[1];
      de < 0 && (de = 0), Re < 0 && (Re = 0);
      var Ue = H - Se, g0 = de - Re, C0 = T - ke, D0 = _ - Ce, c0 = Math.pow(C0, 2) + Math.pow(D0, 2) - Math.pow(g0, 2), M0 = 0.511;
      H >= 16 && (M0 = 0.040975 * H / (1 + 0.01765 * H));
      var Ge, o0 = 0.0638 * de / (1 + 0.0131 * de) + 0.638;
      Number.isNaN(he) && (he = 0), Ge = he >= 164 && he <= 345 ? 0.56 + Math.abs(0.2 * Math.cos((he + 168) * ra)) : 0.36 + Math.abs(0.4 * Math.cos((he + 35) * ra));
      var Oe = Math.pow(de, 4), x0 = Math.sqrt(Oe / (Oe + 1900)), Je = o0 * (x0 * Ge + 1 - x0), u0 = Math.pow(Ue / (C * M0), 2);
      return u0 += Math.pow(g0 / (B * o0), 2), u0 += c0 / Math.pow(Je, 2), Math.sqrt(u0);
    }, deltaE2000: f0, deltaEJz: function(r, o) {
      var c = ue(wo.from(r), 3), h = c[0], C = c[1], w = c[2], B = ue(wo.from(o), 3), M = B[0], D = B[1], H = B[2], T = h - M, _ = C - D;
      Number.isNaN(w) && Number.isNaN(H) ? (w = 0, H = 0) : Number.isNaN(w) ? w = H : Number.isNaN(H) && (H = w);
      var O = w - H, U = 2 * Math.sqrt(C * D) * Math.sin(O / 2 * (Math.PI / 180));
      return Math.sqrt(Math.pow(T, 2) + Math.pow(_, 2) + Math.pow(U, 2));
    }, deltaEITP: function(r, o) {
      var c = ue(Ao.from(r), 3), h = c[0], C = c[1], w = c[2], B = ue(Ao.from(o), 3), M = B[0], D = B[1], H = B[2];
      return 720 * Math.sqrt(Math.pow(h - M, 2) + 0.25 * Math.pow(C - D, 2) + Math.pow(w - H, 2));
    }, deltaEOK: function(r, o) {
      var c = ue(yr.from(r), 3), h = c[0], C = c[1], w = c[2], B = ue(yr.from(o), 3), M = h - B[0], D = C - B[1], H = w - B[2];
      return Math.sqrt(Math.pow(M, 2) + Math.pow(D, 2) + Math.pow(H, 2));
    } });
    function O2(r, o) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      V0(c) && (c = { method: c });
      var h = c, C = h.method, w = C === void 0 ? q0.deltaE : C, B = qe(h, ["method"]);
      for (var M in r = Ke(r), o = Ke(o), So) if ("deltae" + w.toLowerCase() === M.toLowerCase()) return So[M](r, o, B);
      throw new TypeError("Unknown deltaE method: ".concat(w));
    }
    var Ni = Object.freeze({ __proto__: null, lighten: function(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.25, c = be.get("oklch", "lch"), h = [c, "l"];
      return pt(r, h, function(C) {
        return C * (1 + o);
      });
    }, darken: function(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.25, c = be.get("oklch", "lch"), h = [c, "l"];
      return pt(r, h, function(C) {
        return C * (1 - o);
      });
    } });
    function ga(r, o) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.5, h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, C = [Ke(r), Ke(o)];
      if (r = C[0], o = C[1], rt(c) === "object") {
        var w = [0.5, c];
        c = w[0], h = w[1];
      }
      var B = h, M = B.space, D = B.outputSpace, H = B.premultiplied, T = G2(r, o, { space: M, outputSpace: D, premultiplied: H });
      return T(c);
    }
    function ma(r, o) {
      var c, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (ko(r)) {
        h = o;
        var C = ue((c = r).rangeArgs.colors, 2);
        r = C[0], o = C[1];
      }
      var w = h, B = w.maxDeltaE, M = w.deltaEMethod, D = w.steps, H = D === void 0 ? 2 : D, T = w.maxSteps, _ = T === void 0 ? 1e3 : T, O = qe(w, ["maxDeltaE", "deltaEMethod", "steps", "maxSteps"]);
      if (!c) {
        var U = [Ke(r), Ke(o)];
        r = U[0], o = U[1], c = G2(r, o, O);
      }
      var de = O2(r, o), he = B > 0 ? Math.max(H, Math.ceil(de / B) + 1) : H, pe = [];
      if (_ !== void 0 && (he = Math.min(he, _)), he === 1) pe = [{ p: 0.5, color: c(0.5) }];
      else {
        var ae = 1 / (he - 1);
        pe = Array.from({ length: he }, function(C0, D0) {
          var c0 = D0 * ae;
          return { p: c0, color: c(c0) };
        });
      }
      if (B > 0) for (var Se = pe.reduce(function(C0, D0, c0) {
        if (c0 === 0) return 0;
        var M0 = O2(D0.color, pe[c0 - 1].color, M);
        return Math.max(C0, M0);
      }, 0); Se > B; ) {
        Se = 0;
        for (var ke = 1; ke < pe.length && pe.length < _; ke++) {
          var Ce = pe[ke - 1], Re = pe[ke], Ue = (Re.p + Ce.p) / 2, g0 = c(Ue);
          Se = Math.max(Se, O2(g0, Ce.color), O2(g0, Re.color)), pe.splice(ke, 0, { p: Ue, color: c(Ue) }), ke++;
        }
      }
      return pe = pe.map(function(C0) {
        return C0.color;
      }), pe;
    }
    function G2(r, o) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (ko(r)) {
        var h = r, C = o;
        return G2.apply(void 0, We(h.rangeArgs.colors).concat([ye(ye({}, h.rangeArgs.options), C)]));
      }
      var w = c.space, B = c.outputSpace, M = c.progression, D = c.premultiplied;
      r = Ke(r), o = Ke(o), r = et(r), o = et(o);
      var H = { colors: [r, o], options: c };
      if (w = w ? be.get(w) : be.registry[q0.interpolationSpace] || r.space, B = B ? be.get(B) : w, r = i0(r, w), o = i0(o, w), r = T0(r), o = T0(o), w.coords.h && w.coords.h.type === "angle") {
        var T = c.hue = c.hue || "shorter", _ = [w, "h"], O = [G0(r, _), G0(o, _)], U = O[0], de = O[1], he = Be(T, [U, de]), pe = ue(he, 2);
        U = pe[0], de = pe[1], pt(r, _, U), pt(o, _, de);
      }
      return D && (r.coords = r.coords.map(function(ae) {
        return ae * r.alpha;
      }), o.coords = o.coords.map(function(ae) {
        return ae * o.alpha;
      })), Object.assign(function(ae) {
        ae = M ? M(ae) : ae;
        var Se = r.coords.map(function(Re, Ue) {
          return Gt(Re, o.coords[Ue], ae);
        }), ke = Gt(r.alpha, o.alpha, ae), Ce = { space: w, coords: Se, alpha: ke };
        return D && (Ce.coords = Ce.coords.map(function(Re) {
          return Re / ke;
        })), B !== w && (Ce = i0(Ce, B)), Ce;
      }, { rangeArgs: H });
    }
    function ko(r) {
      return rt(r) === "function" && !!r.rangeArgs;
    }
    q0.interpolationSpace = "lab";
    var Pi = Object.freeze({ __proto__: null, mix: ga, steps: ma, range: G2, isRange: ko, register: function(r) {
      r.defineFunction("mix", ga, { returns: "color" }), r.defineFunction("range", G2, { returns: "function<color>" }), r.defineFunction("steps", ma, { returns: "array<color>" });
    } }), ha = new be({ id: "hsl", name: "HSL", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, s: { range: [0, 100], name: "Saturation" }, l: { range: [0, 100], name: "Lightness" } }, base: _2, fromBase: function(r) {
      var o = Math.max.apply(Math, We(r)), c = Math.min.apply(Math, We(r)), h = ue(r, 3), C = h[0], w = h[1], B = h[2], M = NaN, D = 0, H = (c + o) / 2, T = o - c;
      if (T !== 0) {
        switch (D = H === 0 || H === 1 ? 0 : (o - H) / Math.min(H, 1 - H), o) {
          case C:
            M = (w - B) / T + (w < B ? 6 : 0);
            break;
          case w:
            M = (B - C) / T + 2;
            break;
          case B:
            M = (C - w) / T + 4;
        }
        M *= 60;
      }
      return [M, 100 * D, 100 * H];
    }, toBase: function(r) {
      var o = ue(r, 3), c = o[0], h = o[1], C = o[2];
      function w(B) {
        var M = (B + c / 30) % 12, D = h * Math.min(C, 1 - C);
        return C - D * Math.max(-1, Math.min(M - 3, 9 - M, 1));
      }
      return (c %= 360) < 0 && (c += 360), h /= 100, C /= 100, [w(0), w(8), w(4)];
    }, formats: { hsl: { toGamut: !0, coords: ["<number> | <angle>", "<percentage>", "<percentage>"] }, hsla: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"], commas: !0, lastAlpha: !0 } } }), va = new be({ id: "hsv", name: "HSV", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, s: { range: [0, 100], name: "Saturation" }, v: { range: [0, 100], name: "Value" } }, base: ha, fromBase: function(r) {
      var o = ue(r, 3), c = o[0], h = o[1], C = o[2], w = (C /= 100) + (h /= 100) * Math.min(C, 1 - C);
      return [c, w === 0 ? 0 : 200 * (1 - C / w), 100 * w];
    }, toBase: function(r) {
      var o = ue(r, 3), c = o[0], h = o[1], C = o[2], w = (C /= 100) * (1 - (h /= 100) / 2);
      return [c, w === 0 || w === 1 ? 0 : (C - w) / Math.min(w, 1 - w) * 100, 100 * w];
    }, formats: { color: { toGamut: !0 } } }), Vi = new be({ id: "hwb", name: "HWB", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, w: { range: [0, 100], name: "Whiteness" }, b: { range: [0, 100], name: "Blackness" } }, base: va, fromBase: function(r) {
      var o = ue(r, 3), c = o[0], h = o[1], C = o[2];
      return [c, C * (100 - h) / 100, 100 - C];
    }, toBase: function(r) {
      var o = ue(r, 3), c = o[0], h = o[1], C = o[2], w = (h /= 100) + (C /= 100);
      if (w >= 1) return [c, 0, h / w * 100];
      var B = 1 - C;
      return [c, 100 * (B === 0 ? 0 : 1 - h / B), 100 * B];
    }, formats: { hwb: { toGamut: !0, coords: ["<number> | <angle>", "<percentage>", "<percentage>"] } } }), ya = new L0({ id: "a98rgb-linear", name: "Linear Adobe® 98 RGB compatible", white: "D65", toXYZ_M: [[0.5766690429101305, 0.1855582379065463, 0.1882286462349947], [0.29734497525053605, 0.6273635662554661, 0.07529145849399788], [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]], fromXYZ_M: [[2.0415879038107465, -0.5650069742788596, -0.34473135077832956], [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557], [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]] }), Ti = new L0({ id: "a98rgb", name: "Adobe® 98 RGB compatible", base: ya, toBase: function(r) {
      return r.map(function(o) {
        return Math.pow(Math.abs(o), 563 / 256) * Math.sign(o);
      });
    }, fromBase: function(r) {
      return r.map(function(o) {
        return Math.pow(Math.abs(o), 256 / 563) * Math.sign(o);
      });
    }, formats: { color: { id: "a98-rgb" } } }), Ca = new L0({ id: "prophoto-linear", name: "Linear ProPhoto", white: "D50", base: F2, toXYZ_M: [[0.7977604896723027, 0.13518583717574031, 0.0313493495815248], [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20], [0, 0, 0.8251046025104601]], fromXYZ_M: [[1.3457989731028281, -0.25558010007997534, -0.05110628506753401], [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973], [0, 0, 1.2119675456389454]] }), Fi = new L0({ id: "prophoto", name: "ProPhoto", base: Ca, toBase: function(r) {
      return r.map(function(o) {
        return o < 0.03125 ? o / 16 : Math.pow(o, 1.8);
      });
    }, fromBase: function(r) {
      return r.map(function(o) {
        return o >= 1953125e-9 ? Math.pow(o, 1 / 1.8) : 16 * o;
      });
    }, formats: { color: { id: "prophoto-rgb" } } }), _i = new be({ id: "oklch", name: "OKLCh", coords: { l: { refRange: [0, 1], name: "Lightness" }, c: { refRange: [0, 0.4], name: "Chroma" }, h: { refRange: [0, 360], type: "angle", name: "Hue" } }, white: "D65", base: yr, fromBase: function(r) {
      var o, c = ue(r, 3), h = c[0], C = c[1], w = c[2], B = 2e-4;
      return o = Math.abs(C) < B && Math.abs(w) < B ? NaN : 180 * Math.atan2(w, C) / Math.PI, [h, Math.sqrt(Math.pow(C, 2) + Math.pow(w, 2)), ie(o)];
    }, toBase: function(r) {
      var o, c, h = ue(r, 3), C = h[0], w = h[1], B = h[2];
      return isNaN(B) ? (o = 0, c = 0) : (o = w * Math.cos(B * Math.PI / 180), c = w * Math.sin(B * Math.PI / 180)), [C, o, c];
    }, formats: { oklch: { coords: ["<number> | <percentage>", "<number>", "<number> | <angle>"] } } }), xa = 2610 / Math.pow(2, 14), Oi = Math.pow(2, 14) / 2610, Gi = 2523 / Math.pow(2, 5), ba = Math.pow(2, 5) / 2523, wa = 3424 / Math.pow(2, 12), Aa = 2413 / Math.pow(2, 7), Sa = 2392 / Math.pow(2, 7), Qi = new L0({ id: "rec2100pq", name: "REC.2100-PQ", base: e2, toBase: function(r) {
      return r.map(function(o) {
        return 1e4 * Math.pow(Math.max(Math.pow(o, ba) - wa, 0) / (Aa - Sa * Math.pow(o, ba)), Oi) / 203;
      });
    }, fromBase: function(r) {
      return r.map(function(o) {
        var c = Math.max(203 * o / 1e4, 0), h = wa + Aa * Math.pow(c, xa), C = 1 + Sa * Math.pow(c, xa);
        return Math.pow(h / C, Gi);
      });
    }, formats: { color: { id: "rec2100-pq" } } }), ka = 0.17883277, ja = 0.28466892, Ba = 0.55991073, jo = 3.7743, zi = new L0({ id: "rec2100hlg", cssid: "rec2100-hlg", name: "REC.2100-HLG", referred: "scene", base: e2, toBase: function(r) {
      return r.map(function(o) {
        return o <= 0.5 ? Math.pow(o, 2) / 3 * jo : Math.exp((o - Ba) / ka + ja) / 12 * jo;
      });
    }, fromBase: function(r) {
      return r.map(function(o) {
        return (o /= jo) <= 1 / 12 ? Math.sqrt(3 * o) : ka * Math.log(12 * o - ja) + Ba;
      });
    }, formats: { color: { id: "rec2100-hlg" } } }), Ea = {};
    function Cr(r) {
      var o = r.id;
      r.toCone_M, r.fromCone_M, Ea[o] = arguments[0];
    }
    function Da(r, o) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "Bradford", h = Ea[c], C = $e(h.toCone_M, r), w = ue(C, 3), B = w[0], M = w[1], D = w[2], H = $e(h.toCone_M, o), T = ue(H, 3), _ = T[0], O = T[1], U = T[2], de = [[_ / B, 0, 0], [0, O / M, 0], [0, 0, U / D]], he = $e(de, h.toCone_M), pe = $e(h.fromCone_M, he);
      return pe;
    }
    dt.add("chromatic-adaptation-start", function(r) {
      r.options.method && (r.M = Da(r.W1, r.W2, r.options.method));
    }), dt.add("chromatic-adaptation-end", function(r) {
      r.M || (r.M = Da(r.W1, r.W2, r.options.method));
    }), Cr({ id: "von Kries", toCone_M: [[0.40024, 0.7076, -0.08081], [-0.2263, 1.16532, 0.0457], [0, 0, 0.91822]], fromCone_M: [[1.8599364, -1.1293816, 0.2198974], [0.3611914, 0.6388125, -64e-7], [0, 0, 1.0890636]] }), Cr({ id: "Bradford", toCone_M: [[0.8951, 0.2664, -0.1614], [-0.7502, 1.7135, 0.0367], [0.0389, -0.0685, 1.0296]], fromCone_M: [[0.9869929, -0.1470543, 0.1599627], [0.4323053, 0.5183603, 0.0492912], [-85287e-7, 0.0400428, 0.9684867]] }), Cr({ id: "CAT02", toCone_M: [[0.7328, 0.4296, -0.1624], [-0.7036, 1.6975, 61e-4], [3e-3, 0.0136, 0.9834]], fromCone_M: [[1.0961238, -0.278869, 0.1827452], [0.454369, 0.4735332, 0.0720978], [-96276e-7, -5698e-6, 1.0153256]] }), Cr({ id: "CAT16", toCone_M: [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-2079e-6, 0.048952, 0.953127]], fromCone_M: [[1.862067855087233, -1.011254630531685, 0.1491867754444518], [0.3875265432361372, 0.6214474419314753, -0.008973985167612518], [-0.01584149884933386, -0.03412293802851557, 1.04996443687785]] }), Object.assign(K0, { A: [1.0985, 1, 0.35585], C: [0.98074, 1, 1.18232], D55: [0.95682, 1, 0.92149], D75: [0.94972, 1, 1.22638], E: [1, 1, 1], F2: [0.99186, 1, 0.67393], F7: [0.95041, 1, 1.08747], F11: [1.00962, 1, 0.6435] }), K0.ACES = [0.32168 / 0.33767, 1, 0.34065 / 0.33767];
    var gt, r0, Ma, Ha, Ra, Ct, Ee, La = new L0({ id: "acescg", name: "ACEScg", coords: { r: { range: [0, 65504], name: "Red" }, g: { range: [0, 65504], name: "Green" }, b: { range: [0, 65504], name: "Blue" } }, referred: "scene", white: K0.ACES, toXYZ_M: [[0.6624541811085053, 0.13400420645643313, 0.1561876870049078], [0.27222871678091454, 0.6740817658111484, 0.05368951740793705], [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]], fromXYZ_M: [[1.6410233796943257, -0.32480329418479, -0.23642469523761225], [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137], [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]], formats: { color: {} } }), xr = Math.pow(2, -16), Bo = -0.35828683, br = (Math.log2(65504) + 9.72) / 17.52, Zi = new L0({ id: "acescc", name: "ACEScc", coords: { r: { range: [Bo, br], name: "Red" }, g: { range: [Bo, br], name: "Green" }, b: { range: [Bo, br], name: "Blue" } }, referred: "scene", base: La, toBase: function(r) {
      return r.map(function(o) {
        return o <= -0.3013698630136986 ? 2 * (Math.pow(2, 17.52 * o - 9.72) - xr) : o < br ? Math.pow(2, 17.52 * o - 9.72) : 65504;
      });
    }, fromBase: function(r) {
      return r.map(function(o) {
        return o <= 0 ? (Math.log2(xr) + 9.72) / 17.52 : o < xr ? (Math.log2(xr + 0.5 * o) + 9.72) / 17.52 : (Math.log2(o) + 9.72) / 17.52;
      });
    }, formats: { color: {} } }), Ia = Object.freeze({ __proto__: null, XYZ_D65: $0, XYZ_D50: F2, XYZ_ABS_D65: xo, Lab_D65: yo, Lab: Y, LCH: Fe, sRGB_Linear: zn, sRGB: _2, HSL: ha, HWB: Vi, HSV: va, P3_Linear: Qn, P3: $n, A98RGB_Linear: ya, A98RGB: Ti, ProPhoto_Linear: Ca, ProPhoto: Fi, REC_2020_Linear: e2, REC_2020: Gn, OKLab: yr, OKLCH: _i, Jzazbz: la, JzCzHz: wo, ICTCP: Ao, REC_2100_PQ: Qi, REC_2100_HLG: zi, ACEScg: La, ACEScc: Zi }), Q2 = /* @__PURE__ */ new WeakMap(), Q0 = function() {
      function r() {
        var o, c, h, C, w = this;
        Xe(this, r), Q2.set(this, { writable: !0, value: void 0 });
        for (var B = arguments.length, M = new Array(B), D = 0; D < B; D++) M[D] = arguments[D];
        M.length === 1 && (o = Ke(M[0])), o ? (c = o.space || o.spaceId, h = o.coords, C = o.alpha) : (c = M[0], h = M[1], C = M[2]), me(this, Q2, be.get(c)), this.coords = h ? h.slice() : [0, 0, 0], this.alpha = C < 1 ? C : 1;
        for (var H = 0; H < this.coords.length; H++) this.coords[H] === "NaN" && (this.coords[H] = NaN);
        var T = function(O) {
          Object.defineProperty(w, O, { get: function() {
            return w.get(O);
          }, set: function(U) {
            return w.set(O, U);
          } });
        };
        for (var _ in K(this, Q2).coords) T(_);
      }
      return te(r, [{ key: "space", get: function() {
        return K(this, Q2);
      } }, { key: "spaceId", get: function() {
        return K(this, Q2).id;
      } }, { key: "clone", value: function() {
        return new r(this.space, this.coords, this.alpha);
      } }, { key: "toJSON", value: function() {
        return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
      } }, { key: "display", value: function() {
        for (var o = arguments.length, c = new Array(o), h = 0; h < o; h++) c[h] = arguments[h];
        var C = yi.apply(void 0, [this].concat(c));
        return C.color = new r(C.color), C;
      } }], [{ key: "get", value: function(o) {
        if (o instanceof r) return o;
        for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), C = 1; C < c; C++) h[C - 1] = arguments[C];
        return _e(r, [o].concat(h));
      } }, { key: "defineFunction", value: function(o, c) {
        var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : c, C = h.instance, w = C === void 0 || C, B = h.returns, M = function() {
          var D = c.apply(void 0, arguments);
          if (B === "color") D = r.get(D);
          else if (B === "function<color>") {
            var H = D;
            D = function() {
              var T = H.apply(void 0, arguments);
              return r.get(T);
            }, Object.assign(D, H);
          } else B === "array<color>" && (D = D.map(function(T) {
            return r.get(T);
          }));
          return D;
        };
        o in r || (r[o] = M), w && (r.prototype[o] = function() {
          for (var D = arguments.length, H = new Array(D), T = 0; T < D; T++) H[T] = arguments[T];
          return M.apply(void 0, [this].concat(H));
        });
      } }, { key: "defineFunctions", value: function(o) {
        for (var c in o) r.defineFunction(c, o[c], o[c]);
      } }, { key: "extend", value: function(o) {
        if (o.register) o.register(r);
        else for (var c in o) r.defineFunction(c, o[c]);
      } }]), r;
    }();
    Q0.defineFunctions({ get: G0, getAll: Qt, set: pt, setAll: T2, to: i0, equals: function(r, o) {
      return r = Ke(r), o = Ke(o), r.space === o.space && r.alpha === o.alpha && r.coords.every(function(c, h) {
        return c === o.coords[h];
      });
    }, inGamut: E0, toGamut: T0, distance: Xn, toString: Ht }), Object.assign(Q0, { util: go, hooks: dt, WHITES: K0, Space: be, spaces: be.registry, parse: V2, defaults: q0 });
    for (var Eo = 0, Na = Object.keys(Ia); Eo < Na.length; Eo++) {
      var Ui = Na[Eo];
      be.register(Ia[Ui]);
    }
    for (var Pa in be.registry) Do(Pa, be.registry[Pa]);
    function Do(r, o) {
      Object.keys(o.coords), Object.values(o.coords).map(function(h) {
        return h.name;
      });
      var c = r.replace(/-/g, "_");
      Object.defineProperty(Q0.prototype, c, { get: function() {
        var h = this, C = this.getAll(r);
        return typeof Proxy > "u" ? C : new Proxy(C, { has: function(w, B) {
          try {
            return be.resolveCoord([o, B]), !0;
          } catch {
          }
          return Reflect.has(w, B);
        }, get: function(w, B, M) {
          if (B && ce(B) !== "symbol" && !(B in w)) {
            var D = be.resolveCoord([o, B]).index;
            if (D >= 0) return w[D];
          }
          return Reflect.get(w, B, M);
        }, set: function(w, B, M, D) {
          if (B && ce(B) !== "symbol" && !(B in w) || B >= 0) {
            var H = be.resolveCoord([o, B]).index;
            if (H >= 0) return w[H] = M, h.setAll(r, w), !0;
          }
          return Reflect.set(w, B, M, D);
        } });
      }, set: function(h) {
        this.setAll(r, h);
      }, configurable: !0, enumerable: !0 });
    }
    function Va(r, o) {
      var c = r;
      try {
        return c = function(h, C) {
          var w = new Q0(h), B = w;
          try {
            switch (C.type) {
              case p.LIGHTEN:
                B = function(M, D, H) {
                  switch (D) {
                    case gt.LCH:
                      var T = M.lch.l, _ = 100 - T, O = Math.max(0, M.lch.c - H * M.lch.c), U = Math.min(100, T + _ * H);
                      return M.set("lch.l", U), M.set("lch.c", O), M;
                    case gt.HSL:
                      var de = M.hsl.l, he = 100 - de, pe = Math.min(100, de + he * H);
                      return M.set("hsl.l", pe), M;
                    case gt.P3:
                      var ae = M.to("p3"), Se = Math.min(1, ae.p3.r + H * (1 - ae.p3.r)), ke = Math.min(1, ae.p3.g + H * (1 - ae.p3.g)), Ce = Math.min(1, ae.p3.b + H * (1 - ae.p3.b));
                      return ae.set("p3.r", Se), ae.set("p3.g", ke), ae.set("p3.b", Ce), ae;
                    case gt.SRGB:
                      var Re = Math.min(1, M.srgb.r + H * (1 - M.srgb.r)), Ue = Math.min(1, M.srgb.g + H * (1 - M.srgb.g)), g0 = Math.min(1, M.srgb.b + H * (1 - M.srgb.b));
                      return M.set("srgb.r", Re), M.set("srgb.g", Ue), M.set("srgb.b", g0), M;
                    default:
                      return M.lighten(H);
                  }
                }(w, C.space, Number(C.value));
                break;
              case p.DARKEN:
                B = function(M, D, H) {
                  switch (D) {
                    case gt.LCH:
                      var T = M.lch.l, _ = T, O = Math.max(0, M.lch.c - H * M.lch.c), U = Math.max(0, T - _ * H);
                      return M.set("lch.l", U), M.set("lch.c", O), M;
                    case gt.HSL:
                      var de = M.hsl.l, he = de, pe = Math.max(0, de - he * H);
                      return M.set("hsl.l", pe), M;
                    case gt.P3:
                      var ae = M.to("p3"), Se = Math.max(0, ae.p3.r - H * ae.p3.r), ke = Math.max(0, ae.p3.g - H * ae.p3.g), Ce = Math.max(0, ae.p3.b - H * ae.p3.b);
                      return ae.set("p3.r", Se), ae.set("p3.g", ke), ae.set("p3.b", Ce), ae;
                    case gt.SRGB:
                      var Re = Math.max(0, M.srgb.r - H * M.srgb.r), Ue = Math.max(0, M.srgb.g - H * M.srgb.g), g0 = Math.max(0, M.srgb.b - H * M.srgb.b);
                      return M.set("srgb.r", Re), M.set("srgb.g", Ue), M.set("srgb.b", g0), M;
                    default:
                      return M.darken(H);
                  }
                }(w, C.space, Number(C.value));
                break;
              case p.MIX:
                B = function(M, D, H, T) {
                  var _ = Math.max(0, Math.min(1, Number(H)));
                  return new Q0(M.mix(T, _).toString());
                }(w, C.space, Number(C.value), new Q0(C.color));
                break;
              case p.ALPHA:
                B = function(M, D) {
                  return M.alpha = Math.max(0, Math.min(1, Number(D))), M;
                }(w, Number(C.value));
                break;
              default:
                B = w;
            }
            return (B = B.to(C.space)).toString({ inGamut: !0, precision: 3 });
          } catch {
            return h;
          }
        }(r, o), new Q0(c).to("srgb").toString({ format: "hex" });
      } catch {
        return r;
      }
    }
    function wr(r) {
      return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, wr(r);
    }
    function o2(r) {
      return !(!r || wr(r) !== "object" || !("value" in r) || r.value === void 0 || r.value === null || wr(r == null ? void 0 : r.value) === "object" && r && "value" in r.value);
    }
    function Ar(r) {
      return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ar(r);
    }
    function Ta(r) {
      return Ar(r) === "object" && r.type === i.TYPOGRAPHY && (typeof r.value == "string" || Ar(r.value) === "object" && !("value" in r.value));
    }
    function Sr(r) {
      return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Sr(r);
    }
    function Fa(r) {
      return Sr(r) === "object" && r.type === i.COMPOSITION && Sr(r.value) === "object" && !("value" in r.value);
    }
    function Mo(r) {
      return Mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Mo(r);
    }
    function Yi(r) {
      return !!(r && Mo(r) === "object" && "value" in r && "name" in r);
    }
    function kr(r) {
      return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, kr(r);
    }
    function _a(r) {
      return kr(r) === "object" && r.type === i.BOX_SHADOW && (typeof r.value == "string" || Array.isArray(r.value) || kr(r.value) === "object" && !("value" in r.value));
    }
    function jr(r) {
      return jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, jr(r);
    }
    function Oa(r) {
      return jr(r) === "object" && r.type === i.BORDER && (typeof r.value == "string" || jr(r.value) === "object" && !("value" in r.value));
    }
    dt.add("colorspace-init-end", function(r) {
      var o;
      Do(r.id, r), (o = r.aliases) === null || o === void 0 || o.forEach(function(c) {
        Do(c, r);
      });
    }), Q0.extend(So), Q0.extend({ deltaE: O2 }), Q0.extend(Ni), Q0.extend({ contrast: function(r, o) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      V0(c) && (c = { algorithm: c });
      var h = c, C = h.algorithm, w = qe(h, ["algorithm"]);
      if (!C) {
        var B = Object.keys(gr).map(function(D) {
          return D.replace(/^contrast/, "");
        }).join(", ");
        throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(B));
      }
      for (var M in r = Ke(r), o = Ke(o), gr) if ("contrast" + C.toLowerCase() === M.toLowerCase()) return gr[M](r, o, w);
      throw new TypeError("Unknown contrast algorithm: ".concat(C));
    } }), Q0.extend(xi), Q0.extend(Ci), Q0.extend(Pi), Q0.extend(gr), function(r) {
      r.LCH = "lch", r.SRGB = "srgb", r.P3 = "p3", r.HSL = "hsl";
    }(gt || (gt = {})), (Ee = r0 || (r0 = {})).sizing = "sizing", Ee.height = "height", Ee.width = "width", Ee.spacing = "spacing", Ee.verticalPadding = "verticalPadding", Ee.horizontalPadding = "horizontalPadding", Ee.paddingTop = "paddingTop", Ee.paddingRight = "paddingRight", Ee.paddingBottom = "paddingBottom", Ee.paddingLeft = "paddingLeft", Ee.itemSpacing = "itemSpacing", Ee.fill = "fill", Ee.backgroundBlur = "backgroundBlur", Ee.border = "border", Ee.borderTop = "borderTop", Ee.borderRight = "borderRight", Ee.borderBottom = "borderBottom", Ee.borderLeft = "borderLeft", Ee.borderColor = "borderColor", Ee.borderRadius = "borderRadius", Ee.borderRadiusTopLeft = "borderRadiusTopLeft", Ee.borderRadiusTopRight = "borderRadiusTopRight", Ee.borderRadiusBottomRight = "borderRadiusBottomRight", Ee.borderRadiusBottomLeft = "borderRadiusBottomLeft", Ee.borderWidth = "borderWidth", Ee.borderWidthTop = "borderWidthTop", Ee.borderWidthRight = "borderWidthRight", Ee.borderWidthBottom = "borderWidthBottom", Ee.borderWidthLeft = "borderWidthLeft", Ee.boxShadow = "boxShadow", Ee.opacity = "opacity", Ee.fontFamilies = "fontFamilies", Ee.fontWeights = "fontWeights", Ee.fontSizes = "fontSizes", Ee.lineHeights = "lineHeights", Ee.typography = "typography", Ee.composition = "composition", Ee.letterSpacing = "letterSpacing", Ee.paragraphSpacing = "paragraphSpacing", Ee.textCase = "textCase", Ee.dimension = "dimension", Ee.textDecoration = "textDecoration", Ee.asset = "asset", Ee.visibility = "visibility", Ee.tokenValue = "tokenValue", Ee.value = "value", Ee.tokenName = "tokenName", Ee.description = "description", (Ct = Ma || (Ma = {})).LOCAL = "local", Ct.GENERIC_VERSIONED_STORAGE = "genericVersionedStorage", Ct.JSONBIN = "jsonbin", Ct.GITHUB = "github", Ct.GITLAB = "gitlab", Ct.SUPERNOVA = "supernova", Ct.ADO = "ado", Ct.URL = "url", Ct.BITBUCKET = "bitbucket", (Ra = Ha || (Ha = {})).DROP_SHADOW = "dropShadow", Ra.INNER_SHADOW = "innerShadow";
    var tt = "INUMBER", n2 = "IOP1", a2 = "IOP2", s2 = "IOP3", xt = "IVAR", zt = "IVARNAME", i2 = "IFUNCALL", Br = "IFUNDEF", W0 = "IEXPR", Ho = "IEXPREVAL", Zt = "IMEMBER", Er = "IENDSTATEMENT", l2 = "IARRAY";
    function Ze(r, o) {
      this.type = r, this.value = o ?? 0;
    }
    function Dr(r) {
      return new Ze(n2, r);
    }
    function bt(r) {
      return new Ze(a2, r);
    }
    function Ga(r) {
      return new Ze(s2, r);
    }
    function Ro(r, o, c, h, C) {
      for (var w, B, M, D, H = [], T = [], _ = 0; _ < r.length; _++) {
        var O = r[_], U = O.type;
        if (U === tt || U === zt) Array.isArray(O.value) ? H.push.apply(H, Ro(O.value.map(function(de) {
          return new Ze(tt, de);
        }).concat(new Ze(l2, O.value.length)), o, c, h, C)) : H.push(O);
        else if (U === xt && C.hasOwnProperty(O.value)) O = new Ze(tt, C[O.value]), H.push(O);
        else if (U === a2 && H.length > 1) B = H.pop(), w = H.pop(), D = c[O.value], O = new Ze(tt, D(w.value, B.value)), H.push(O);
        else if (U === s2 && H.length > 2) M = H.pop(), B = H.pop(), w = H.pop(), O.value === "?" ? H.push(w.value ? B.value : M.value) : (D = h[O.value], O = new Ze(tt, D(w.value, B.value, M.value)), H.push(O));
        else if (U === n2 && H.length > 0) w = H.pop(), D = o[O.value], O = new Ze(tt, D(w.value)), H.push(O);
        else if (U === W0) {
          for (; H.length > 0; ) T.push(H.shift());
          T.push(new Ze(W0, Ro(O.value, o, c, h, C)));
        } else if (U === Zt && H.length > 0) w = H.pop(), H.push(new Ze(tt, w.value[O.value]));
        else {
          for (; H.length > 0; ) T.push(H.shift());
          T.push(O);
        }
      }
      for (; H.length > 0; ) T.push(H.shift());
      return T;
    }
    function Qa(r, o, c) {
      for (var h = [], C = 0; C < r.length; C++) {
        var w = r[C], B = w.type;
        if (B === xt && w.value === o) for (var M = 0; M < c.tokens.length; M++) {
          var D, H = c.tokens[M];
          D = H.type === n2 ? Dr(H.value) : H.type === a2 ? bt(H.value) : H.type === s2 ? Ga(H.value) : new Ze(H.type, H.value), h.push(D);
        }
        else B === W0 ? h.push(new Ze(W0, Qa(w.value, o, c))) : h.push(w);
      }
      return h;
    }
    function Ut(r, o, c) {
      var h, C, w, B, M, D, H = [];
      if (Lo(r)) return wt(r, c);
      for (var T = r.length, _ = 0; _ < T; _++) {
        var O = r[_], U = O.type;
        if (U === tt || U === zt) H.push(O.value);
        else if (U === a2) C = H.pop(), h = H.pop(), O.value === "and" ? H.push(!!h && !!Ut(C, o, c)) : O.value === "or" ? H.push(!!h || !!Ut(C, o, c)) : O.value === "=" ? (B = o.binaryOps[O.value], H.push(B(h, Ut(C, o, c), c))) : (B = o.binaryOps[O.value], H.push(B(wt(h, c), wt(C, c))));
        else if (U === s2) w = H.pop(), C = H.pop(), h = H.pop(), O.value === "?" ? H.push(Ut(h ? C : w, o, c)) : (B = o.ternaryOps[O.value], H.push(B(wt(h, c), wt(C, c), wt(w, c))));
        else if (U === xt) if (O.value in o.functions) H.push(o.functions[O.value]);
        else if (O.value in o.unaryOps && o.parser.isOperatorEnabled(O.value)) H.push(o.unaryOps[O.value]);
        else {
          var de = c[O.value];
          if (de === void 0) throw new Error("undefined variable: " + O.value);
          H.push(de);
        }
        else if (U === n2) h = H.pop(), B = o.unaryOps[O.value], H.push(B(wt(h, c)));
        else if (U === i2) {
          for (D = O.value, M = []; D-- > 0; ) M.unshift(wt(H.pop(), c));
          if (!(B = H.pop()).apply || !B.call) throw new Error(B + " is not a function");
          H.push(B.apply(void 0, M));
        } else if (U === Br) H.push(function() {
          for (var he = H.pop(), pe = [], ae = O.value; ae-- > 0; ) pe.unshift(H.pop());
          var Se = H.pop(), ke = function() {
            for (var Ce = Object.assign({}, c), Re = 0, Ue = pe.length; Re < Ue; Re++) Ce[pe[Re]] = arguments[Re];
            return Ut(he, o, Ce);
          };
          return Object.defineProperty(ke, "name", { value: Se, writable: !1 }), c[Se] = ke, ke;
        }());
        else if (U === W0) H.push($i(O, o));
        else if (U === Ho) H.push(O);
        else if (U === Zt) h = H.pop(), H.push(h[O.value]);
        else if (U === Er) H.pop();
        else {
          if (U !== l2) throw new Error("invalid Expression");
          for (D = O.value, M = []; D-- > 0; ) M.unshift(H.pop());
          H.push(M);
        }
      }
      if (H.length > 1) throw new Error("invalid Expression (parity)");
      return H[0] === 0 ? 0 : wt(H[0], c);
    }
    function $i(r, o, c) {
      return Lo(r) ? r : { type: Ho, value: function(h) {
        return Ut(r.value, o, h);
      } };
    }
    function Lo(r) {
      return r && r.type === Ho;
    }
    function wt(r, o) {
      return Lo(r) ? r.value(o) : r;
    }
    function Io(r, o) {
      for (var c, h, C, w, B, M, D = [], H = 0; H < r.length; H++) {
        var T = r[H], _ = T.type;
        if (_ === tt) typeof T.value == "number" && T.value < 0 ? D.push("(" + T.value + ")") : Array.isArray(T.value) ? D.push("[" + T.value.map(za).join(", ") + "]") : D.push(za(T.value));
        else if (_ === a2) h = D.pop(), c = D.pop(), w = T.value, o ? w === "^" ? D.push("Math.pow(" + c + ", " + h + ")") : w === "and" ? D.push("(!!" + c + " && !!" + h + ")") : w === "or" ? D.push("(!!" + c + " || !!" + h + ")") : w === "||" ? D.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }((" + c + "),(" + h + ")))") : w === "==" ? D.push("(" + c + " === " + h + ")") : w === "!=" ? D.push("(" + c + " !== " + h + ")") : w === "[" ? D.push(c + "[(" + h + ") | 0]") : D.push("(" + c + " " + w + " " + h + ")") : w === "[" ? D.push(c + "[" + h + "]") : D.push("(" + c + " " + w + " " + h + ")");
        else if (_ === s2) {
          if (C = D.pop(), h = D.pop(), c = D.pop(), (w = T.value) !== "?") throw new Error("invalid Expression");
          D.push("(" + c + " ? " + h + " : " + C + ")");
        } else if (_ === xt || _ === zt) D.push(T.value);
        else if (_ === n2) c = D.pop(), (w = T.value) === "-" || w === "+" ? D.push("(" + w + c + ")") : o ? w === "not" ? D.push("(!" + c + ")") : w === "!" ? D.push("fac(" + c + ")") : D.push(w + "(" + c + ")") : w === "!" ? D.push("(" + c + "!)") : D.push("(" + w + " " + c + ")");
        else if (_ === i2) {
          for (M = T.value, B = []; M-- > 0; ) B.unshift(D.pop());
          w = D.pop(), D.push(w + "(" + B.join(", ") + ")");
        } else if (_ === Br) {
          for (h = D.pop(), M = T.value, B = []; M-- > 0; ) B.unshift(D.pop());
          c = D.pop(), o ? D.push("(" + c + " = function(" + B.join(", ") + ") { return " + h + " })") : D.push("(" + c + "(" + B.join(", ") + ") = " + h + ")");
        } else if (_ === Zt) c = D.pop(), D.push(c + "." + T.value);
        else if (_ === l2) {
          for (M = T.value, B = []; M-- > 0; ) B.unshift(D.pop());
          D.push("[" + B.join(", ") + "]");
        } else if (_ === W0) D.push("(" + Io(T.value, o) + ")");
        else if (_ !== Er) throw new Error("invalid Expression");
      }
      return D.length > 1 && (D = o ? [D.join(",")] : [D.join(";")]), String(D[0]);
    }
    function za(r) {
      return typeof r == "string" ? JSON.stringify(r).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") : r;
    }
    function c2(r, o) {
      for (var c = 0; c < r.length; c++) if (r[c] === o) return !0;
      return !1;
    }
    function No(r, o, c) {
      for (var h = !!(c = c || {}).withMembers, C = null, w = 0; w < r.length; w++) {
        var B = r[w];
        B.type === xt || B.type === zt ? h || c2(o, B.value) ? (C !== null && (c2(o, C) || o.push(C)), C = B.value) : o.push(B.value) : B.type === Zt && h && C !== null ? C += "." + B.value : B.type === W0 ? No(B.value, o, c) : C !== null && (c2(o, C) || o.push(C), C = null);
      }
      C === null || c2(o, C) || o.push(C);
    }
    function ot(r, o) {
      this.tokens = r, this.parser = o, this.unaryOps = o.unaryOps, this.binaryOps = o.binaryOps, this.ternaryOps = o.ternaryOps, this.functions = o.functions;
    }
    Ze.prototype.toString = function() {
      switch (this.type) {
        case tt:
        case n2:
        case a2:
        case s2:
        case xt:
        case zt:
        case Er:
          return this.value;
        case i2:
          return "CALL " + this.value;
        case Br:
          return "DEF " + this.value;
        case l2:
          return "ARRAY " + this.value;
        case Zt:
          return "." + this.value;
        default:
          return "Invalid Instruction";
      }
    }, ot.prototype.simplify = function(r) {
      return r = r || {}, new ot(Ro(this.tokens, this.unaryOps, this.binaryOps, this.ternaryOps, r), this.parser);
    }, ot.prototype.substitute = function(r, o) {
      return o instanceof ot || (o = this.parser.parse(String(o))), new ot(Qa(this.tokens, r, o), this.parser);
    }, ot.prototype.evaluate = function(r) {
      return r = r || {}, Ut(this.tokens, this, r);
    }, ot.prototype.toString = function() {
      return Io(this.tokens, !1);
    }, ot.prototype.symbols = function(r) {
      r = r || {};
      var o = [];
      return No(this.tokens, o, r), o;
    }, ot.prototype.variables = function(r) {
      r = r || {};
      var o = [];
      No(this.tokens, o, r);
      var c = this.functions;
      return o.filter(function(h) {
        return !(h in c);
      });
    }, ot.prototype.toJSFunction = function(r, o) {
      var c = this, h = new Function(r, "with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return " + Io(this.simplify(o).tokens, !0) + "; }");
      return function() {
        return h.apply(c, arguments);
      };
    };
    var z2 = "TEOF", l0 = "TOP", Mr = "TNUMBER", Za = "TSTRING", At = "TPAREN", u2 = "TBRACKET", Hr = "TCOMMA", Po = "TNAME", Vo = "TSEMICOLON";
    function Ua(r, o, c) {
      this.type = r, this.value = o, this.index = c;
    }
    function y0(r, o) {
      this.pos = 0, this.current = null, this.unaryOps = r.unaryOps, this.binaryOps = r.binaryOps, this.ternaryOps = r.ternaryOps, this.consts = r.consts, this.expression = o, this.savedPosition = 0, this.savedCurrent = null, this.options = r.options, this.parser = r;
    }
    Ua.prototype.toString = function() {
      return this.type + ": " + this.value;
    }, y0.prototype.newToken = function(r, o, c) {
      return new Ua(r, o, c ?? this.pos);
    }, y0.prototype.save = function() {
      this.savedPosition = this.pos, this.savedCurrent = this.current;
    }, y0.prototype.restore = function() {
      this.pos = this.savedPosition, this.current = this.savedCurrent;
    }, y0.prototype.next = function() {
      return this.pos >= this.expression.length ? this.newToken(z2, "EOF") : this.isWhitespace() || this.isComment() ? this.next() : this.isRadixInteger() || this.isNumber() || this.isOperator() || this.isString() || this.isParen() || this.isBracket() || this.isComma() || this.isSemicolon() || this.isNamedOp() || this.isConst() || this.isName() ? this.current : void this.parseError('Unknown character "' + this.expression.charAt(this.pos) + '"');
    }, y0.prototype.isString = function() {
      var r = !1, o = this.pos, c = this.expression.charAt(o);
      if (c === "'" || c === '"') for (var h = this.expression.indexOf(c, o + 1); h >= 0 && this.pos < this.expression.length; ) {
        if (this.pos = h + 1, this.expression.charAt(h - 1) !== "\\") {
          var C = this.expression.substring(o + 1, h);
          this.current = this.newToken(Za, this.unescape(C), o), r = !0;
          break;
        }
        h = this.expression.indexOf(c, h + 1);
      }
      return r;
    }, y0.prototype.isParen = function() {
      var r = this.expression.charAt(this.pos);
      return (r === "(" || r === ")") && (this.current = this.newToken(At, r), this.pos++, !0);
    }, y0.prototype.isBracket = function() {
      var r = this.expression.charAt(this.pos);
      return !(r !== "[" && r !== "]" || !this.isOperatorEnabled("[") || (this.current = this.newToken(u2, r), this.pos++, 0));
    }, y0.prototype.isComma = function() {
      return this.expression.charAt(this.pos) === "," && (this.current = this.newToken(Hr, ","), this.pos++, !0);
    }, y0.prototype.isSemicolon = function() {
      return this.expression.charAt(this.pos) === ";" && (this.current = this.newToken(Vo, ";"), this.pos++, !0);
    }, y0.prototype.isConst = function() {
      for (var r = this.pos, o = r; o < this.expression.length; o++) {
        var c = this.expression.charAt(o);
        if (c.toUpperCase() === c.toLowerCase() && (o === this.pos || c !== "_" && c !== "." && (c < "0" || c > "9"))) break;
      }
      if (o > r) {
        var h = this.expression.substring(r, o);
        if (h in this.consts) return this.current = this.newToken(Mr, this.consts[h]), this.pos += h.length, !0;
      }
      return !1;
    }, y0.prototype.isNamedOp = function() {
      for (var r = this.pos, o = r; o < this.expression.length; o++) {
        var c = this.expression.charAt(o);
        if (c.toUpperCase() === c.toLowerCase() && (o === this.pos || c !== "_" && (c < "0" || c > "9"))) break;
      }
      if (o > r) {
        var h = this.expression.substring(r, o);
        if (this.isOperatorEnabled(h) && (h in this.binaryOps || h in this.unaryOps || h in this.ternaryOps)) return this.current = this.newToken(l0, h), this.pos += h.length, !0;
      }
      return !1;
    }, y0.prototype.isName = function() {
      for (var r = this.pos, o = r, c = !1; o < this.expression.length; o++) {
        var h = this.expression.charAt(o);
        if (h.toUpperCase() === h.toLowerCase()) {
          if (o === this.pos && (h === "$" || h === "_")) {
            h === "_" && (c = !0);
            continue;
          }
          if (o === this.pos || !c || h !== "_" && (h < "0" || h > "9")) break;
        } else c = !0;
      }
      if (c) {
        var C = this.expression.substring(r, o);
        return this.current = this.newToken(Po, C), this.pos += C.length, !0;
      }
      return !1;
    }, y0.prototype.isWhitespace = function() {
      for (var r = !1, o = this.expression.charAt(this.pos); !(o !== " " && o !== "	" && o !== `
` && o !== "\r" || (r = !0, this.pos++, this.pos >= this.expression.length)); ) o = this.expression.charAt(this.pos);
      return r;
    };
    var Wi = /^[0-9a-f]{4}$/i;
    function p0(r, o, c) {
      this.parser = r, this.tokens = o, this.current = null, this.nextToken = null, this.next(), this.savedCurrent = null, this.savedNextToken = null, this.allowMemberAccess = c.allowMemberAccess !== !1;
    }
    y0.prototype.unescape = function(r) {
      var o = r.indexOf("\\");
      if (o < 0) return r;
      for (var c = r.substring(0, o); o >= 0; ) {
        var h = r.charAt(++o);
        switch (h) {
          case "'":
            c += "'";
            break;
          case '"':
            c += '"';
            break;
          case "\\":
            c += "\\";
            break;
          case "/":
            c += "/";
            break;
          case "b":
            c += "\b";
            break;
          case "f":
            c += "\f";
            break;
          case "n":
            c += `
`;
            break;
          case "r":
            c += "\r";
            break;
          case "t":
            c += "	";
            break;
          case "u":
            var C = r.substring(o + 1, o + 5);
            Wi.test(C) || this.parseError("Illegal escape sequence: \\u" + C), c += String.fromCharCode(parseInt(C, 16)), o += 4;
            break;
          default:
            throw this.parseError('Illegal escape sequence: "\\' + h + '"');
        }
        ++o;
        var w = r.indexOf("\\", o);
        c += r.substring(o, w < 0 ? r.length : w), o = w;
      }
      return c;
    }, y0.prototype.isComment = function() {
      return this.expression.charAt(this.pos) === "/" && this.expression.charAt(this.pos + 1) === "*" && (this.pos = this.expression.indexOf("*/", this.pos) + 2, this.pos === 1 && (this.pos = this.expression.length), !0);
    }, y0.prototype.isRadixInteger = function() {
      var r, o, c = this.pos;
      if (c >= this.expression.length - 2 || this.expression.charAt(c) !== "0") return !1;
      if (++c, this.expression.charAt(c) === "x") r = 16, o = /^[0-9a-f]$/i, ++c;
      else {
        if (this.expression.charAt(c) !== "b") return !1;
        r = 2, o = /^[01]$/i, ++c;
      }
      for (var h = !1, C = c; c < this.expression.length; ) {
        var w = this.expression.charAt(c);
        if (!o.test(w)) break;
        c++, h = !0;
      }
      return h && (this.current = this.newToken(Mr, parseInt(this.expression.substring(C, c), r)), this.pos = c), h;
    }, y0.prototype.isNumber = function() {
      for (var r, o = !1, c = this.pos, h = c, C = c, w = !1, B = !1; c < this.expression.length && ((r = this.expression.charAt(c)) >= "0" && r <= "9" || !w && r === "."); ) r === "." ? w = !0 : B = !0, c++, o = B;
      if (o && (C = c), r === "e" || r === "E") {
        c++;
        for (var M = !0, D = !1; c < this.expression.length; ) {
          if (r = this.expression.charAt(c), !M || r !== "+" && r !== "-") {
            if (!(r >= "0" && r <= "9")) break;
            D = !0, M = !1;
          } else M = !1;
          c++;
        }
        D || (c = C);
      }
      return o ? (this.current = this.newToken(Mr, parseFloat(this.expression.substring(h, c))), this.pos = c) : this.pos = C, o;
    }, y0.prototype.isOperator = function() {
      var r = this.pos, o = this.expression.charAt(this.pos);
      if (o === "+" || o === "-" || o === "*" || o === "/" || o === "%" || o === "^" || o === "?" || o === ":" || o === ".") this.current = this.newToken(l0, o);
      else if (o === "∙" || o === "•") this.current = this.newToken(l0, "*");
      else if (o === ">") this.expression.charAt(this.pos + 1) === "=" ? (this.current = this.newToken(l0, ">="), this.pos++) : this.current = this.newToken(l0, ">");
      else if (o === "<") this.expression.charAt(this.pos + 1) === "=" ? (this.current = this.newToken(l0, "<="), this.pos++) : this.current = this.newToken(l0, "<");
      else if (o === "|") {
        if (this.expression.charAt(this.pos + 1) !== "|") return !1;
        this.current = this.newToken(l0, "||"), this.pos++;
      } else if (o === "=") this.expression.charAt(this.pos + 1) === "=" ? (this.current = this.newToken(l0, "=="), this.pos++) : this.current = this.newToken(l0, o);
      else {
        if (o !== "!") return !1;
        this.expression.charAt(this.pos + 1) === "=" ? (this.current = this.newToken(l0, "!="), this.pos++) : this.current = this.newToken(l0, o);
      }
      return this.pos++, !!this.isOperatorEnabled(this.current.value) || (this.pos = r, !1);
    }, y0.prototype.isOperatorEnabled = function(r) {
      return this.parser.isOperatorEnabled(r);
    }, y0.prototype.getCoordinates = function() {
      var r, o = 0, c = -1;
      do
        o++, r = this.pos - c, c = this.expression.indexOf(`
`, c + 1);
      while (c >= 0 && c < this.pos);
      return { line: o, column: r };
    }, y0.prototype.parseError = function(r) {
      var o = this.getCoordinates();
      throw new Error("parse error [" + o.line + ":" + o.column + "]: " + r);
    }, p0.prototype.next = function() {
      return this.current = this.nextToken, this.nextToken = this.tokens.next();
    }, p0.prototype.tokenMatches = function(r, o) {
      return o === void 0 || (Array.isArray(o) ? c2(o, r.value) : typeof o == "function" ? o(r) : r.value === o);
    }, p0.prototype.save = function() {
      this.savedCurrent = this.current, this.savedNextToken = this.nextToken, this.tokens.save();
    }, p0.prototype.restore = function() {
      this.tokens.restore(), this.current = this.savedCurrent, this.nextToken = this.savedNextToken;
    }, p0.prototype.accept = function(r, o) {
      return !(this.nextToken.type !== r || !this.tokenMatches(this.nextToken, o) || (this.next(), 0));
    }, p0.prototype.expect = function(r, o) {
      if (!this.accept(r, o)) {
        var c = this.tokens.getCoordinates();
        throw new Error("parse error [" + c.line + ":" + c.column + "]: Expected " + (o || r));
      }
    }, p0.prototype.parseAtom = function(r) {
      var o = this.tokens.unaryOps;
      if (this.accept(Po) || this.accept(l0, function(h) {
        return h.value in o;
      })) r.push(new Ze(xt, this.current.value));
      else if (this.accept(Mr)) r.push(new Ze(tt, this.current.value));
      else if (this.accept(Za)) r.push(new Ze(tt, this.current.value));
      else if (this.accept(At, "(")) this.parseExpression(r), this.expect(At, ")");
      else {
        if (!this.accept(u2, "[")) throw new Error("unexpected " + this.nextToken);
        if (this.accept(u2, "]")) r.push(new Ze(l2, 0));
        else {
          var c = this.parseArrayList(r);
          r.push(new Ze(l2, c));
        }
      }
    }, p0.prototype.parseExpression = function(r) {
      var o = [];
      this.parseUntilEndStatement(r, o) || (this.parseVariableAssignmentExpression(o), this.parseUntilEndStatement(r, o) || this.pushExpression(r, o));
    }, p0.prototype.pushExpression = function(r, o) {
      for (var c = 0, h = o.length; c < h; c++) r.push(o[c]);
    }, p0.prototype.parseUntilEndStatement = function(r, o) {
      return !!this.accept(Vo) && (!this.nextToken || this.nextToken.type === z2 || this.nextToken.type === At && this.nextToken.value === ")" || o.push(new Ze(Er)), this.nextToken.type !== z2 && this.parseExpression(o), r.push(new Ze(W0, o)), !0);
    }, p0.prototype.parseArrayList = function(r) {
      for (var o = 0; !this.accept(u2, "]"); ) for (this.parseExpression(r), ++o; this.accept(Hr); ) this.parseExpression(r), ++o;
      return o;
    }, p0.prototype.parseVariableAssignmentExpression = function(r) {
      for (this.parseConditionalExpression(r); this.accept(l0, "="); ) {
        var o = r.pop(), c = [], h = r.length - 1;
        if (o.type !== i2) {
          if (o.type !== xt && o.type !== Zt) throw new Error("expected variable for assignment");
          this.parseVariableAssignmentExpression(c), r.push(new Ze(zt, o.value)), r.push(new Ze(W0, c)), r.push(bt("="));
        } else {
          if (!this.tokens.isOperatorEnabled("()=")) throw new Error("function definition is not permitted");
          for (var C = 0, w = o.value + 1; C < w; C++) {
            var B = h - C;
            r[B].type === xt && (r[B] = new Ze(zt, r[B].value));
          }
          this.parseVariableAssignmentExpression(c), r.push(new Ze(W0, c)), r.push(new Ze(Br, o.value));
        }
      }
    }, p0.prototype.parseConditionalExpression = function(r) {
      for (this.parseOrExpression(r); this.accept(l0, "?"); ) {
        var o = [], c = [];
        this.parseConditionalExpression(o), this.expect(l0, ":"), this.parseConditionalExpression(c), r.push(new Ze(W0, o)), r.push(new Ze(W0, c)), r.push(Ga("?"));
      }
    }, p0.prototype.parseOrExpression = function(r) {
      for (this.parseAndExpression(r); this.accept(l0, "or"); ) {
        var o = [];
        this.parseAndExpression(o), r.push(new Ze(W0, o)), r.push(bt("or"));
      }
    }, p0.prototype.parseAndExpression = function(r) {
      for (this.parseComparison(r); this.accept(l0, "and"); ) {
        var o = [];
        this.parseComparison(o), r.push(new Ze(W0, o)), r.push(bt("and"));
      }
    };
    var Xi = ["==", "!=", "<", "<=", ">=", ">", "in"];
    p0.prototype.parseComparison = function(r) {
      for (this.parseAddSub(r); this.accept(l0, Xi); ) {
        var o = this.current;
        this.parseAddSub(r), r.push(bt(o.value));
      }
    };
    var Ki = ["+", "-", "||"];
    p0.prototype.parseAddSub = function(r) {
      for (this.parseTerm(r); this.accept(l0, Ki); ) {
        var o = this.current;
        this.parseTerm(r), r.push(bt(o.value));
      }
    };
    var Ji = ["*", "/", "%"];
    function qi(r, o) {
      return Number(r) + Number(o);
    }
    function el(r, o) {
      return r - o;
    }
    function tl(r, o) {
      return r * o;
    }
    function rl(r, o) {
      return r / o;
    }
    function ol(r, o) {
      return r % o;
    }
    function nl(r, o) {
      return Array.isArray(r) && Array.isArray(o) ? r.concat(o) : "" + r + o;
    }
    function al(r, o) {
      return r === o;
    }
    function sl(r, o) {
      return r !== o;
    }
    function il(r, o) {
      return r > o;
    }
    function ll(r, o) {
      return r < o;
    }
    function cl(r, o) {
      return r >= o;
    }
    function ul(r, o) {
      return r <= o;
    }
    function dl(r, o) {
      return !!(r && o);
    }
    function fl(r, o) {
      return !!(r || o);
    }
    function pl(r, o) {
      return c2(o, r);
    }
    function gl(r) {
      return (Math.exp(r) - Math.exp(-r)) / 2;
    }
    function ml(r) {
      return (Math.exp(r) + Math.exp(-r)) / 2;
    }
    function hl(r) {
      return r === 1 / 0 ? 1 : r === -1 / 0 ? -1 : (Math.exp(r) - Math.exp(-r)) / (Math.exp(r) + Math.exp(-r));
    }
    function vl(r) {
      return r === -1 / 0 ? r : Math.log(r + Math.sqrt(r * r + 1));
    }
    function yl(r) {
      return Math.log(r + Math.sqrt(r * r - 1));
    }
    function Cl(r) {
      return Math.log((1 + r) / (1 - r)) / 2;
    }
    function Ya(r) {
      return Math.log(r) * Math.LOG10E;
    }
    function xl(r) {
      return -r;
    }
    function bl(r) {
      return !r;
    }
    function wl(r) {
      return r < 0 ? Math.ceil(r) : Math.floor(r);
    }
    function Al(r) {
      return Math.random() * (r || 1);
    }
    function $a(r) {
      return Fo(r + 1);
    }
    p0.prototype.parseTerm = function(r) {
      for (this.parseFactor(r); this.accept(l0, Ji); ) {
        var o = this.current;
        this.parseFactor(r), r.push(bt(o.value));
      }
    }, p0.prototype.parseFactor = function(r) {
      var o = this.tokens.unaryOps;
      if (this.save(), this.accept(l0, function(h) {
        return h.value in o;
      })) {
        if (this.current.value !== "-" && this.current.value !== "+") {
          if (this.nextToken.type === At && this.nextToken.value === "(") return this.restore(), void this.parseExponential(r);
          if (this.nextToken.type === Vo || this.nextToken.type === Hr || this.nextToken.type === z2 || this.nextToken.type === At && this.nextToken.value === ")") return this.restore(), void this.parseAtom(r);
        }
        var c = this.current;
        this.parseFactor(r), r.push(Dr(c.value));
      } else this.parseExponential(r);
    }, p0.prototype.parseExponential = function(r) {
      for (this.parsePostfixExpression(r); this.accept(l0, "^"); ) this.parseFactor(r), r.push(bt("^"));
    }, p0.prototype.parsePostfixExpression = function(r) {
      for (this.parseFunctionCall(r); this.accept(l0, "!"); ) r.push(Dr("!"));
    }, p0.prototype.parseFunctionCall = function(r) {
      var o = this.tokens.unaryOps;
      if (this.accept(l0, function(C) {
        return C.value in o;
      })) {
        var c = this.current;
        this.parseAtom(r), r.push(Dr(c.value));
      } else for (this.parseMemberExpression(r); this.accept(At, "("); ) if (this.accept(At, ")")) r.push(new Ze(i2, 0));
      else {
        var h = this.parseArgumentList(r);
        r.push(new Ze(i2, h));
      }
    }, p0.prototype.parseArgumentList = function(r) {
      for (var o = 0; !this.accept(At, ")"); ) for (this.parseExpression(r), ++o; this.accept(Hr); ) this.parseExpression(r), ++o;
      return o;
    }, p0.prototype.parseMemberExpression = function(r) {
      for (this.parseAtom(r); this.accept(l0, ".") || this.accept(u2, "["); ) {
        var o = this.current;
        if (o.value === ".") {
          if (!this.allowMemberAccess) throw new Error('unexpected ".", member access is not permitted');
          this.expect(Po), r.push(new Ze(Zt, this.current.value));
        } else {
          if (o.value !== "[") throw new Error("unexpected symbol: " + o.value);
          if (!this.tokens.isOperatorEnabled("[")) throw new Error('unexpected "[]", arrays are disabled');
          this.parseExpression(r), this.expect(u2, "]"), r.push(bt("["));
        }
      }
    };
    var To = [0.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -0.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, 1580887032249125e-19, -21026444172410488e-20, 21743961811521265e-20, -1643181065367639e-19, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22];
    function Fo(r) {
      var o, c;
      if (function(T) {
        return isFinite(T) && T === Math.round(T);
      }(r)) {
        if (r <= 0) return isFinite(r) ? 1 / 0 : NaN;
        if (r > 171) return 1 / 0;
        for (var h = r - 2, C = r - 1; h > 1; ) C *= h, h--;
        return C === 0 && (C = 1), C;
      }
      if (r < 0.5) return Math.PI / (Math.sin(Math.PI * r) * Fo(1 - r));
      if (r >= 171.35) return 1 / 0;
      if (r > 85) {
        var w = r * r, B = w * r, M = B * r, D = M * r;
        return Math.sqrt(2 * Math.PI / r) * Math.pow(r / Math.E, r) * (1 + 1 / (12 * r) + 1 / (288 * w) - 139 / (51840 * B) - 571 / (2488320 * M) + 163879 / (209018880 * D) + 5246819 / (75246796800 * D * r));
      }
      --r, c = To[0];
      for (var H = 1; H < To.length; ++H) c += To[H] / (r + H);
      return o = r + 4.7421875 + 0.5, Math.sqrt(2 * Math.PI) * Math.pow(o, r + 0.5) * Math.exp(-o) * c;
    }
    function Sl(r) {
      return Array.isArray(r) ? r.length : String(r).length;
    }
    function Wa() {
      for (var r = 0, o = 0, c = 0; c < arguments.length; c++) {
        var h, C = Math.abs(arguments[c]);
        o < C ? (r = r * (h = o / C) * h + 1, o = C) : r += C > 0 ? (h = C / o) * h : C;
      }
      return o === 1 / 0 ? 1 / 0 : o * Math.sqrt(r);
    }
    function Xa(r, o, c) {
      return r ? o : c;
    }
    function kl(r, o) {
      return o === void 0 || +o == 0 ? Math.round(r) : (r = +r, o = -+o, isNaN(r) || typeof o != "number" || o % 1 != 0 ? NaN : (r = r.toString().split("e"), +((r = (r = Math.round(+(r[0] + "e" + (r[1] ? +r[1] - o : -o)))).toString().split("e"))[0] + "e" + (r[1] ? +r[1] + o : o))));
    }
    function jl(r, o, c) {
      return c && (c[r] = o), o;
    }
    function Bl(r, o) {
      return r[0 | o];
    }
    function El(r) {
      return arguments.length === 1 && Array.isArray(r) ? Math.max.apply(Math, r) : Math.max.apply(Math, arguments);
    }
    function Dl(r) {
      return arguments.length === 1 && Array.isArray(r) ? Math.min.apply(Math, r) : Math.min.apply(Math, arguments);
    }
    function Ml(r, o) {
      if (typeof r != "function") throw new Error("First argument to map is not a function");
      if (!Array.isArray(o)) throw new Error("Second argument to map is not an array");
      return o.map(function(c, h) {
        return r(c, h);
      });
    }
    function Hl(r, o, c) {
      if (typeof r != "function") throw new Error("First argument to fold is not a function");
      if (!Array.isArray(c)) throw new Error("Second argument to fold is not an array");
      return c.reduce(function(h, C, w) {
        return r(h, C, w);
      }, o);
    }
    function Rl(r, o) {
      if (typeof r != "function") throw new Error("First argument to filter is not a function");
      if (!Array.isArray(o)) throw new Error("Second argument to filter is not an array");
      return o.filter(function(c, h) {
        return r(c, h);
      });
    }
    function Ll(r, o) {
      if (!Array.isArray(o) && typeof o != "string") throw new Error("Second argument to indexOf is not a string or array");
      return o.indexOf(r);
    }
    function Il(r, o) {
      if (!Array.isArray(o)) throw new Error("Second argument to join is not an array");
      return o.join(r);
    }
    function Nl(r) {
      return (r > 0) - (r < 0) || +r;
    }
    var Ka = 1 / 3;
    function Pl(r) {
      return r < 0 ? -Math.pow(-r, Ka) : Math.pow(r, Ka);
    }
    function Vl(r) {
      return Math.exp(r) - 1;
    }
    function Tl(r) {
      return Math.log(1 + r);
    }
    function Fl(r) {
      return Math.log(r) / Math.LN2;
    }
    function Yt(r) {
      this.options = r || {}, this.unaryOps = { sin: Math.sin, cos: Math.cos, tan: Math.tan, asin: Math.asin, acos: Math.acos, atan: Math.atan, sinh: Math.sinh || gl, cosh: Math.cosh || ml, tanh: Math.tanh || hl, asinh: Math.asinh || vl, acosh: Math.acosh || yl, atanh: Math.atanh || Cl, sqrt: Math.sqrt, cbrt: Math.cbrt || Pl, log: Math.log, log2: Math.log2 || Fl, ln: Math.log, lg: Math.log10 || Ya, log10: Math.log10 || Ya, expm1: Math.expm1 || Vl, log1p: Math.log1p || Tl, abs: Math.abs, ceil: Math.ceil, floor: Math.floor, round: Math.round, trunc: Math.trunc || wl, "-": xl, "+": Number, exp: Math.exp, not: bl, length: Sl, "!": $a, sign: Math.sign || Nl }, this.binaryOps = { "+": qi, "-": el, "*": tl, "/": rl, "%": ol, "^": Math.pow, "||": nl, "==": al, "!=": sl, ">": il, "<": ll, ">=": cl, "<=": ul, and: dl, or: fl, in: pl, "=": jl, "[": Bl }, this.ternaryOps = { "?": Xa }, this.functions = { random: Al, fac: $a, min: Dl, max: El, hypot: Math.hypot || Wa, pyt: Math.hypot || Wa, pow: Math.pow, atan2: Math.atan2, if: Xa, gamma: Fo, roundTo: kl, map: Ml, fold: Hl, filter: Rl, indexOf: Ll, join: Il }, this.consts = { E: Math.E, PI: Math.PI, true: !0, false: !1 };
    }
    Yt.prototype.parse = function(r) {
      var o = [], c = new p0(this, new y0(this, r), { allowMemberAccess: this.options.allowMemberAccess });
      return c.parseExpression(o), c.expect(z2, "EOF"), new ot(o, this);
    }, Yt.prototype.evaluate = function(r, o) {
      return this.parse(r).evaluate(o);
    };
    var Ja = new Yt();
    Yt.parse = function(r) {
      return Ja.parse(r);
    }, Yt.evaluate = function(r, o) {
      return Ja.parse(r).evaluate(o);
    };
    var qa = { "+": "add", "-": "subtract", "*": "multiply", "/": "divide", "%": "remainder", "^": "power", "!": "factorial", "<": "comparison", ">": "comparison", "<=": "comparison", ">=": "comparison", "==": "comparison", "!=": "comparison", "||": "concatenate", and: "logical", or: "logical", not: "logical", "?": "conditional", ":": "conditional", "=": "assignment", "[": "array", "()=": "fndef" };
    Yt.prototype.isOperatorEnabled = function(r) {
      var o = function(h) {
        return qa.hasOwnProperty(h) ? qa[h] : h;
      }(r), c = this.options.operators || {};
      return !(o in c) || !!c[o];
    };
    var Z2, e1 = n(784), d2 = new Yt();
    function _o(r) {
      var o;
      try {
        o = e1.ZP.parse(r);
      } catch {
        return r;
      }
      var c, h, C = e1.ZP.reduceExpression(o), w = r;
      C && C.type !== "Number" && (w = r.replace(new RegExp(C.unit, "ig"), ""), c = C.unit);
      try {
        h = d2.evaluate("".concat(w));
      } catch {
        return r;
      }
      try {
        return c ? "".concat(h).concat(c) : Number.parseFloat(h.toFixed(3));
      } catch {
        return r;
      }
    }
    function Oo(r) {
      return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Oo(r);
    }
    function t1(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      try {
        var c = !1;
        if (typeof r == "string") c = !!r.match(x);
        else if (r.type === i.TYPOGRAPHY || r.type === i.BOX_SHADOW || r.type === i.BORDER) if (typeof r.value == "string") c = !!String(r.value).match(x);
        else {
          var h = Array.isArray(r.value) ? r.value : [r.value];
          c = h.some(function(w) {
            return Object.values(w).some(function(B) {
              return !!(B != null && B.toString().match(x));
            });
          });
        }
        else {
          if (r.type === i.COMPOSITION) return !0;
          c = !!r.value.toString().match(x);
        }
        if (c) {
          var C = z0(r, o);
          return C != null;
        }
      } catch (w) {
        console.log("Error checking alias of token ".concat(Oo(r) === "object" ? r.name : r), r, o, w);
      }
      return !1;
    }
    function r1(r, o) {
      var c = Object.keys(r);
      if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(r);
        o && (h = h.filter(function(C) {
          return Object.getOwnPropertyDescriptor(r, C).enumerable;
        })), c.push.apply(c, h);
      }
      return c;
    }
    function Rr(r) {
      for (var o = 1; o < arguments.length; o++) {
        var c = arguments[o] != null ? arguments[o] : {};
        o % 2 ? r1(Object(c), !0).forEach(function(h) {
          _l(r, h, c[h]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : r1(Object(c)).forEach(function(h) {
          Object.defineProperty(r, h, Object.getOwnPropertyDescriptor(c, h));
        });
      }
      return r;
    }
    function _l(r, o, c) {
      return o in r ? Object.defineProperty(r, o, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = c, r;
    }
    function $t(r) {
      return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, $t(r);
    }
    function Ol(r) {
      return $t(r) !== "object" || $t(r.value) !== "object" || (r == null ? void 0 : r.type) !== i.BOX_SHADOW && (r == null ? void 0 : r.type) !== i.TYPOGRAPHY && (r == null ? void 0 : r.type) !== i.BORDER ? o2(r) ? r.value.toString() : r.toString() : r.value;
    }
    function Gl(r, o, c) {
      if ($t(c) === "object") return c;
      if (r && (typeof r == "string" || typeof r == "number")) {
        var h = _o(String(c));
        return r.replace(o, String(h));
      }
      return r;
    }
    function z0(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], c = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, C = Ol(r);
      try {
        var w = typeof C == "string" ? k(C) : null;
        if (w != null && w.length) {
          var B = Array.from(w).map(function(Je) {
            if (Je.length > 1) {
              var u0, a0;
              if (a0 = Je.startsWith("{") ? Je.slice(1, Je.length - 1) : Je.substring(1), $t(r) === "object" && a0 === r.name || a0 === r) return o2(r) ? r.value.toString() : r.toString();
              var nt = k(a0);
              nt != null && nt.length && (a0 = String(z0(a0, o, c, h)));
              var k0 = a0.split("."), F0 = k0.pop(), at = k0.join("."), I0 = Number(k0.pop()), St = k0.join("."), b0 = o.find(function(kt) {
                return kt.name === a0 || kt.name === at || kt.name === St;
              });
              if ((b0 == null ? void 0 : b0.name) === a0) return z0(b0, o, c, h);
              if (F0 && (b0 == null ? void 0 : b0.name) === at && (u0 = b0.value) !== null && u0 !== void 0 && u0.hasOwnProperty(F0)) {
                var mt = b0.value;
                if ($t(mt) === "object" && !Array.isArray(mt)) return z0(mt[F0], o, c, h);
              }
              if (I0 !== void 0 && F0 && (b0 == null ? void 0 : b0.name) === St && Array.isArray(b0 == null ? void 0 : b0.rawValue) && b0 != null && b0.rawValue[I0] && b0 != null && b0.rawValue[I0].hasOwnProperty(F0)) return z0((b0 == null ? void 0 : b0.rawValue[I0])[F0] || I0, o, c, h);
            }
            return Je;
          });
          w.forEach(function(Je, u0) {
            var a0 = B[u0];
            C = Gl(C, Je, a0);
          }), C === "null" && (C = null);
        }
        if (C && typeof C == "string") {
          var M = S(C);
          if (!M) {
            var D, H, T = _o(C);
            if (typeof T == "number") return T;
            var _, O, U, de, he, pe, ae, Se, ke, Ce, Re, Ue, g0, C0, D0, c0, M0, Ge, o0, Oe, x0 = ee(T);
            return typeof r != "string" && typeof r != "number" && r != null && (D = r.$extensions) !== null && D !== void 0 && (H = D["studio.tokens"]) !== null && H !== void 0 && H.modify && x0 && !c && h === 0 ? (r == null || (_ = r.$extensions) === null || _ === void 0 || (O = _["studio.tokens"]) === null || O === void 0 || (U = O.modify) === null || U === void 0 ? void 0 : U.type) === p.MIX && t1(r == null || (de = r.$extensions) === null || de === void 0 || (he = de["studio.tokens"]) === null || he === void 0 || (pe = he.modify) === null || pe === void 0 ? void 0 : pe.color) ? Va(x0, Rr(Rr({}, (Ue = r.$extensions) === null || Ue === void 0 || (g0 = Ue["studio.tokens"]) === null || g0 === void 0 ? void 0 : g0.modify), {}, { value: String(z0(r == null || (C0 = r.$extensions) === null || C0 === void 0 || (D0 = C0["studio.tokens"]) === null || D0 === void 0 || (c0 = D0.modify) === null || c0 === void 0 ? void 0 : c0.value, o)), color: (M0 = String(z0(r == null || (Ge = r.$extensions) === null || Ge === void 0 || (o0 = Ge["studio.tokens"]) === null || o0 === void 0 || (Oe = o0.modify) === null || Oe === void 0 ? void 0 : Oe.color, o, c, h))) !== null && M0 !== void 0 ? M0 : "" })) : Va(x0, Rr(Rr({}, (ae = r.$extensions) === null || ae === void 0 || (Se = ae["studio.tokens"]) === null || Se === void 0 ? void 0 : Se.modify), {}, { value: String(z0(r == null || (ke = r.$extensions) === null || ke === void 0 || (Ce = ke["studio.tokens"]) === null || Ce === void 0 || (Re = Ce.modify) === null || Re === void 0 ? void 0 : Re.value, o, c, h)) })) : x0;
          }
        }
      } catch {
        return console.log("Error getting alias value of ".concat(JSON.stringify(r, null, 2)), o), null;
      }
      return C && typeof C == "string" ? _o(C) : C;
    }
    function Wt(r) {
      return !!r && !!r.toString().match(v);
    }
    function o1(r, o) {
      var c = Object.keys(r);
      if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(r);
        o && (h = h.filter(function(C) {
          return Object.getOwnPropertyDescriptor(r, C).enumerable;
        })), c.push.apply(c, h);
      }
      return c;
    }
    function Lt(r) {
      for (var o = 1; o < arguments.length; o++) {
        var c = arguments[o] != null ? arguments[o] : {};
        o % 2 ? o1(Object(c), !0).forEach(function(h) {
          Ql(r, h, c[h]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : o1(Object(c)).forEach(function(h) {
          Object.defineProperty(r, h, Object.getOwnPropertyDescriptor(c, h));
        });
      }
      return r;
    }
    function Ql(r, o, c) {
      return o in r ? Object.defineProperty(r, o, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = c, r;
    }
    function U2(r) {
      return U2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, U2(r);
    }
    function Xt(r, o) {
      return function(c) {
        if (Array.isArray(c)) return c;
      }(r) || function(c, h) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(c)) {
          var C = [], w = !0, B = !1, M = void 0;
          try {
            for (var D, H = c[Symbol.iterator](); !(w = (D = H.next()).done) && (C.push(D.value), !h || C.length !== h); w = !0) ;
          } catch (T) {
            B = !0, M = T;
          } finally {
            try {
              w || H.return == null || H.return();
            } finally {
              if (B) throw M;
            }
          }
          return C;
        }
      }(r, o) || function(c, h) {
        if (c) {
          if (typeof c == "string") return n1(c, h);
          var C = Object.prototype.toString.call(c).slice(8, -1);
          return C === "Object" && c.constructor && (C = c.constructor.name), C === "Map" || C === "Set" ? Array.from(c) : C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C) ? n1(c, h) : void 0;
        }
      }(r, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function n1(r, o) {
      (o == null || o > r.length) && (o = r.length);
      for (var c = 0, h = new Array(o); c < o; c++) h[c] = r[c];
      return h;
    }
    function zl(r) {
      return r.filter(function(o) {
        return t1(o, r.filter(Yi));
      });
    }
    function a1(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, c = zl(r), h = r;
      return h = r.map(function(C, w, B) {
        var M, D = !1;
        if (C.type === i.TYPOGRAPHY || C.type === i.BOX_SHADOW || C.type === i.BORDER) typeof C.value == "string" ? (M = z0(C.value, B, !1, o), D = M === null || Wt(typeof M == "string" ? M : "")) : M = Array.isArray(C.value) ? C.value.map(function(T) {
          return Object.entries(T).reduce(function(_, O) {
            var U = Xt(O, 2), de = U[0], he = U[1];
            return _[de] = z0(he, B, !1, o), (_[de] === null || Wt(typeof _[de] == "string" ? _[de] : "")) && (D = !0), _;
          }, {});
        }) : Object.entries(C.value).reduce(function(T, _) {
          var O = Xt(_, 2), U = O[0], de = O[1];
          return T[U] = z0(de, B, !1, o), (T[U] === null || Wt(typeof T[U] == "string" ? T[U] : "")) && (D = !0), T;
        }, {});
        else if (C.type === i.COMPOSITION) {
          var H = {};
          Object.entries(C.value).forEach(function(T) {
            var _ = Xt(T, 2), O = _[0], U = _[1];
            if (Array.isArray(U)) {
              var de = U.map(function(ae) {
                return Object.entries(ae).reduce(function(Se, ke) {
                  var Ce = Xt(ke, 2), Re = Ce[0], Ue = Ce[1];
                  return Se[Re] = z0(Ue, B, !1, o), (Se[Re] === null || Wt(Se[Re])) && (D = !0), Se;
                }, {});
              });
              H[O] = de;
            } else if (U2(U) === "object") {
              var he = Object.entries(U).reduce(function(ae, Se) {
                var ke = Xt(Se, 2), Ce = ke[0], Re = ke[1];
                return ae[Ce] = z0(Re, B, !1, o), (ae[Ce] === null || Wt(ae[Ce])) && (D = !0), ae;
              }, {});
              H[O] = he;
            } else {
              var pe = z0(U, B, !1, o);
              pe !== null && (H[O] = pe), (pe === null || Wt(pe)) && (D = !0);
            }
          }), M = H;
        } else M = z0(C, B, !1, o), D = M === null || Wt(typeof M == "string" ? M : "");
        return Lt(Lt({}, d(C, "failedToResolve")), {}, { value: M, rawValue: C.rawValue || C.value }, D ? { failedToResolve: D } : {});
      }), c.length > 0 && (o > c.length || !o) ? a1(h, c.length) : h;
    }
    function Zl(r) {
      var o, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = [], C = Object.entries(c).filter(function(M) {
        var D = Xt(M, 2)[1];
        return D === Z2.ENABLED || D === Z2.SOURCE;
      }).map(function(M) {
        return Xt(M, 1)[0];
      }), w = r == null || (o = r.$metadata) === null || o === void 0 ? void 0 : o.map(function(M) {
        return M.value;
      }), B = w ? Object.entries(r).sort(function(M, D) {
        return w.indexOf(M[0]) - w.indexOf(D[0]);
      }) : Object.entries(r);
      return B.reverse().forEach(function(M) {
        (C.length === 0 || C.includes(M[0])) && M[1].forEach(function(D) {
          var H = h.findIndex(function(_) {
            return _.name === D.name;
          }), T = h[H];
          H < 0 && h.push(Lt(Lt({}, y(D)), {}, { internal__Parent: M[0] })), H > -1 && U2(T.value) === "object" && U2(D.value) === "object" && h.splice(H, 1, Lt(Lt({}, T), {}, { value: Lt(Lt({}, D.value), T.value) }));
        });
      }), h;
    }
    function Ul(r) {
      var o = "";
      switch (r) {
        case r0.width:
        case r0.height:
        case r0.sizing:
        case r0.itemSpacing:
        case r0.verticalPadding:
        case r0.horizontalPadding:
        case r0.paddingTop:
        case r0.paddingLeft:
        case r0.paddingBottom:
        case r0.paddingRight:
          o = r0.dimension;
          break;
        case r0.borderRadiusTopLeft:
        case r0.borderRadiusTopRight:
        case r0.borderRadiusBottomLeft:
        case r0.borderRadiusBottomRight:
          o = r0.borderRadius;
          break;
        case r0.borderColor:
          o = r0.fill;
          break;
        case r0.borderWidthTop:
        case r0.borderWidthLeft:
        case r0.borderWidthRight:
        case r0.borderWidthBottom:
          o = r0.borderWidth;
          break;
        case "fontFamily":
          o = r0.fontFamilies;
          break;
        case "fontSize":
          o = r0.fontSizes;
          break;
        case "fontWeight":
          o = r0.fontWeights;
          break;
        case "lineHeights":
        case "lineHeight":
          o = r0.lineHeights;
          break;
        case "style":
          o = "strokeStyle";
          break;
        default:
          o = r;
      }
      return o;
    }
    function s1(r, o) {
      (o == null || o > r.length) && (o = r.length);
      for (var c = 0, h = new Array(o); c < o; c++) h[c] = r[c];
      return h;
    }
    function i1(r) {
      return Object.entries(r).reduce(function(o, c) {
        var h, C, w = (C = 2, function(D) {
          if (Array.isArray(D)) return D;
        }(h = c) || function(D, H) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(D)) {
            var T = [], _ = !0, O = !1, U = void 0;
            try {
              for (var de, he = D[Symbol.iterator](); !(_ = (de = he.next()).done) && (T.push(de.value), !H || T.length !== H); _ = !0) ;
            } catch (pe) {
              O = !0, U = pe;
            } finally {
              try {
                _ || he.return == null || he.return();
              } finally {
                if (O) throw U;
              }
            }
            return T;
          }
        }(h, C) || function(D, H) {
          if (D) {
            if (typeof D == "string") return s1(D, H);
            var T = Object.prototype.toString.call(D).slice(8, -1);
            return T === "Object" && D.constructor && (T = D.constructor.name), T === "Map" || T === "Set" ? Array.from(D) : T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T) ? s1(D, H) : void 0;
          }
        }(h, C) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }()), B = w[0], M = w[1];
        return o[B] = typeof M == "string" || typeof M == "number" ? { value: M, type: Ul(B) } : i1(M), o;
      }, {});
    }
    function l1(r, o) {
      (o == null || o > r.length) && (o = r.length);
      for (var c = 0, h = new Array(o); c < o; c++) h[c] = r[c];
      return h;
    }
    function c1(r, o, c) {
      var h = r;
      return typeof o == "string" && r.toString() !== o && (c.resolveReferences === !1 && (h = o), c.resolveReferences === "math") && (typeof r == "number" ? /^{[^}]*}$|^\$[^$]*$/ : /{[^}]*}|\$[\w.-]*/g).test(o) && (h = o), h;
    }
    function u1(r, o, c) {
      return Object.entries(r).reduce(function(h, C) {
        var w, B, M = (B = 2, function(_) {
          if (Array.isArray(_)) return _;
        }(w = C) || function(_, O) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(_)) {
            var U = [], de = !0, he = !1, pe = void 0;
            try {
              for (var ae, Se = _[Symbol.iterator](); !(de = (ae = Se.next()).done) && (U.push(ae.value), !O || U.length !== O); de = !0) ;
            } catch (ke) {
              he = !0, pe = ke;
            } finally {
              try {
                de || Se.return == null || Se.return();
              } finally {
                if (he) throw pe;
              }
            }
            return U;
          }
        }(w, B) || function(_, O) {
          if (_) {
            if (typeof _ == "string") return l1(_, O);
            var U = Object.prototype.toString.call(_).slice(8, -1);
            return U === "Object" && _.constructor && (U = _.constructor.name), U === "Map" || U === "Set" ? Array.from(_) : U === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U) ? l1(_, O) : void 0;
          }
        }(w, B) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }()), D = M[0], H = M[1], T = o[D];
        return h[D] = c1(H, T, c), h;
      }, {});
    }
    function d1(r, o) {
      var c = Object.keys(r);
      if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(r);
        o && (h = h.filter(function(C) {
          return Object.getOwnPropertyDescriptor(r, C).enumerable;
        })), c.push.apply(c, h);
      }
      return c;
    }
    function Yl(r, o, c) {
      return o in r ? Object.defineProperty(r, o, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = c, r;
    }
    function $l(r, o, c) {
      var h;
      return h = r.reduce(function(C, w) {
        if (c.throwErrorWhenNotResolved && w.failedToResolve) throw new Error('ERROR: failed to resolve token "'.concat(w.name, '"'));
        if (w.internal__Parent && o.includes(w.internal__Parent)) return C;
        var B = C || {}, M = y(w);
        if (delete M.name, c.resolveReferences !== !0 ? M.value = function(H, T) {
          if (H.rawValue === void 0) return H.value;
          if (H.type === i.TYPOGRAPHY || H.type === i.BOX_SHADOW || H.type === i.COMPOSITION || H.type === i.BORDER) {
            if (Array.isArray(H.value)) {
              var _ = H.rawValue;
              return H.value.map(function(O, U) {
                return u1(O, _[U], T);
              });
            }
            return u1(H.value, H.rawValue, T);
          }
          return c1(H.value, H.rawValue, T);
        }(M, c) : delete M.$extensions, c.preserveRawValue || delete M.rawValue, delete M.internal__Parent, c.expandTypography && M.type === i.TYPOGRAPHY || c.expandShadow && M.type === i.BOX_SHADOW || c.expandComposition && M.type === i.COMPOSITION || c.expandBorder && M.type === i.BORDER) {
          var D = i1(M.value);
          u()(B, w.name, function(H) {
            for (var T = 1; T < arguments.length; T++) {
              var _ = arguments[T] != null ? arguments[T] : {};
              T % 2 ? d1(Object(_), !0).forEach(function(O) {
                Yl(H, O, _[O]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(H, Object.getOwnPropertyDescriptors(_)) : d1(Object(_)).forEach(function(O) {
                Object.defineProperty(H, O, Object.getOwnPropertyDescriptor(_, O));
              });
            }
            return H;
          }({}, D));
        } else u()(B, w.name, M);
        return C;
      }, {}), h;
    }
    function Lr(r) {
      return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Lr(r);
    }
    function Ir(r, o) {
      return function(c) {
        if (Array.isArray(c)) return c;
      }(r) || function(c, h) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(c)) {
          var C = [], w = !0, B = !1, M = void 0;
          try {
            for (var D, H = c[Symbol.iterator](); !(w = (D = H.next()).done) && (C.push(D.value), !h || C.length !== h); w = !0) ;
          } catch (T) {
            B = !0, M = T;
          } finally {
            try {
              w || H.return == null || H.return();
            } finally {
              if (B) throw M;
            }
          }
          return C;
        }
      }(r, o) || function(c, h) {
        if (c) {
          if (typeof c == "string") return f1(c, h);
          var C = Object.prototype.toString.call(c).slice(8, -1);
          return C === "Object" && c.constructor && (C = c.constructor.name), C === "Map" || C === "Set" ? Array.from(c) : C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C) ? f1(c, h) : void 0;
        }
      }(r, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function f1(r, o) {
      (o == null || o > r.length) && (o = r.length);
      for (var c = 0, h = new Array(o); c < o; c++) h[c] = r[c];
      return h;
    }
    function p1(r, o) {
      var c = Object.keys(r);
      if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(r);
        o && (h = h.filter(function(C) {
          return Object.getOwnPropertyDescriptor(r, C).enumerable;
        })), c.push.apply(c, h);
      }
      return c;
    }
    function f2(r) {
      for (var o = 1; o < arguments.length; o++) {
        var c = arguments[o] != null ? arguments[o] : {};
        o % 2 ? p1(Object(c), !0).forEach(function(h) {
          Wl(r, h, c[h]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : p1(Object(c)).forEach(function(h) {
          Object.defineProperty(r, h, Object.getOwnPropertyDescriptor(c, h));
        });
      }
      return r;
    }
    function Wl(r, o, c) {
      return o in r ? Object.defineProperty(r, o, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : r[o] = c, r;
    }
    function It(r) {
      return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, It(r);
    }
    function g1(r) {
      var o, c, h = r.obj, C = r.token, w = r.root, B = w === void 0 ? null : w, M = r.returnValuesOnly, D = M !== void 0 && M, H = r.expandTypography, T = H !== void 0 && H, _ = r.expandShadow, O = _ !== void 0 && _, U = r.expandComposition, de = U !== void 0 && U, he = r.expandBorder, pe = he !== void 0 && he, ae = r.inheritType, Se = r.groupLevel, ke = Se === void 0 ? 0 : Se, Ce = r.currentTypeLevel, Re = Ce === void 0 ? 0 : Ce, Ue = !(!T || It(C) !== "object" || !("value" in C)) && Ta(C.value), g0 = !(!O || It(C) !== "object" || !("value" in C)) && _a(C.value), C0 = !(!de || It(C) !== "object" || !("value" in C)) && Fa(C.value), D0 = !(!pe || It(C) !== "object" || !("value" in C)) && Oa(C.value);
      if (!o2(C) || Ue || g0 || C0 || D0) if (Ta(C) && !T || _a(C) && !O || Fa(C) && !de || Oa(C) && !pe) c = { type: C.type, value: Object.entries(C).reduce(function(Ge, o0) {
        var Oe = Ir(o0, 2), x0 = Oe[0], Je = Oe[1];
        return Ge[x0] = o2(Je) && D ? Je.value : Je, Ge;
      }, {}) }, C.description && (delete c.value.description, c.description = C.description);
      else if (It(C) === "object") {
        var c0 = C;
        if (o2(C) || (ke += 1), function(Ge) {
          return !!(Ge && Lr(Ge) === "object" && (!("value" in Ge) || "value" in Ge && Lr(Ge.value) === "object" && "value" in Ge.value) && "type" in Ge && typeof Ge.type == "string");
        }(C)) {
          C.type;
          var M0 = function(Ge, o0) {
            if (Ge == null) return {};
            var Oe, x0, Je = function(a0, nt) {
              if (a0 == null) return {};
              var k0, F0, at = {}, I0 = Object.keys(a0);
              for (F0 = 0; F0 < I0.length; F0++) k0 = I0[F0], nt.indexOf(k0) >= 0 || (at[k0] = a0[k0]);
              return at;
            }(Ge, o0);
            if (Object.getOwnPropertySymbols) {
              var u0 = Object.getOwnPropertySymbols(Ge);
              for (x0 = 0; x0 < u0.length; x0++) Oe = u0[x0], o0.indexOf(Oe) >= 0 || Object.prototype.propertyIsEnumerable.call(Ge, Oe) && (Je[Oe] = Ge[Oe]);
            }
            return Je;
          }(C, ["type"]);
          ae = C.type, Re = ke, c0 = M0;
        }
        o2(C) && typeof C.value != "string" && (c0 = C.value), Object.entries(c0).forEach(function(Ge) {
          var o0 = Ir(Ge, 2), Oe = o0[0], x0 = o0[1], Je = g1({ obj: h, token: x0, root: [B, Oe].filter(function(a0) {
            return a0;
          }).join("."), returnValuesOnly: D, expandTypography: T, expandShadow: O, expandComposition: de, expandBorder: pe, inheritType: ae, groupLevel: ke, currentTypeLevel: Re }), u0 = Ir(Je, 2)[1];
          B && u0 ? h.push(f2(f2({}, u0), {}, { name: [B, Oe].join(".") })) : u0 && h.push(f2(f2({}, u0), {}, { name: Oe }));
        });
      } else c = { value: C };
      else c = f2(f2({}, C), !("type" in C) && ae ? { type: ae, inheritTypeLevel: Re } : {});
      return It(c) === "object" && "name" in c && (o = c) !== null && o !== void 0 && o.name && (c.name = c.name.split("/").join(".")), [h, c];
    }
    function Go(r) {
      return Go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Go(r);
    }
    function Xl(r) {
      if (Array.isArray(r)) return { global: r };
      var o = Object.entries(r).reduce(function(c, h) {
        var C, w, B, M, D, H, T, _ = h[1];
        if (Array.isArray(_)) return c.push([h[0], _]), c;
        if (Go(_) === "object") {
          var O = (T = Ir(g1({ obj: [], root: null, token: (C = { tokens: _ }).tokens, returnValuesOnly: (w = C.returnValuesOnly) !== void 0 && w, expandTypography: (B = C.expandTypography) !== void 0 && B, expandShadow: (M = C.expandShadow) !== void 0 && M, expandComposition: (D = C.expandComposition) !== void 0 && D, expandBorder: (H = C.expandBorder) !== void 0 && H }), 1)[0], Object.values(T));
          return c.push([h[0], O]), c;
        }
        return c;
      }, []);
      return Object.fromEntries(o);
    }
    d2.functions.clamped = function(r, o, c) {
      return Math.max(Math.min(r, c), o);
    }, d2.functions.lerp = function(r, o, c) {
      return o + (c - o) * r;
    }, d2.functions.norm = function(r, o, c) {
      return (r - o) / (c - o);
    }, d2.functions.cubicBezier1D = function(r, o) {
      var c = [0, r, o, 1];
      return function(h) {
        var C = [Math.pow(1 - h, 3), 3 * Math.pow(1 - h, 2) * h, 3 * (1 - h) * Math.pow(h, 2), Math.pow(h, 3)].reduce(function(w, B, M) {
          return w + B * c[M];
        }, 0);
        return C;
      };
    }, d2.functions.sample = function(r) {
      for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++) c[h - 1] = arguments[h];
      return r.apply(void 0, c);
    }, function(r) {
      r.DISABLED = "disabled", r.SOURCE = "source", r.ENABLED = "enabled";
    }(Z2 || (Z2 = {}));
    const Kl = function(r, o, c, h) {
      return function(C) {
        var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], M = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { expandTypography: !1, expandShadow: !1, expandComposition: !1, expandBorder: !1, preserveRawValue: !1, resolveReferences: !0 };
        return $l(a1(Zl(Xl(C), Object.fromEntries(w.map(function(D) {
          return [D, Z2.ENABLED];
        })))), B, M);
      }(r, o, c, h);
    };
  })(), mi.tokenTransformer = s;
})();
const wg = mi.tokenTransformer.default;
var Ag = {
  transformTokens: wg
};
const Sg = [
  {
    id: "e61078a48a75d7d43f7e4f16b453a0c68023d74e",
    name: "Light",
    selectedTokenSets: {},
    $figmaStyleReferences: {
      "XXSmall.Caps": "S:4ccc7fc9c239ee733dc5c7be6205570972380824,",
      "XXSmall.Regular": "S:b213f8b16f34716594e03c3e568ed3ee719ea9bd,",
      "XXSmall.Bold": "S:99784d9686d8d018cecea2ebad16471e5cbff829,",
      "XSmall.Bold": "S:fecd9a5040cd98ddbaf99ea77be195fde4a73e7c,",
      "XSmall.Regular": "S:d1bfd41fe2a716fb7f9aef8daabf5a80211c7185,",
      "XSmall.Caps": "S:a6f84cf899a0f2d722053e9210f01572bf5c7ec2,",
      "XSmall.Link": "S:b7599e626f297523fd051e18befafc1f9599d2b6,",
      "Small.Regular": "S:6200a0c829d4ffb937b17c768165c2867c708138,",
      "Small.Bold": "S:71532d021341841ba300d393d67468bbccbd0060,",
      "Small.Caps": "S:f42bf543c26d28a2090ddbd953bbb7e47c32ffa8,",
      "Small.Link": "S:7a434a76d17ae2faf062cfa374d941ef4c350d2d,",
      "Body.Regular": "S:509dce9c79caddfc597a98bc8ddf404bedba805c,",
      "Body.Bold": "S:8a77fa1e199f17c02ec0537852c5f7b083437146,",
      "Body.Caps": "S:b634fd8bc51086e132898f76eeade80877c07940,",
      "Body.Link": "S:2bf98748742e7b6174c3839bc70dd551b6199039,",
      "Heading.H1": "S:f99e8a5c55e1ac515ceb9a9f0adf202c8fbcad75,",
      "Heading.H2": "S:4dc44804dafe6520308c50c2e25476a45bd2796d,",
      "Heading.H3": "S:03f505a667af22e3447695bb6cf284ffdf7b0c03,",
      "Heading.H4": "S:5dd378117727bc4e44e083238eae896939b3f875,",
      "Heading.H5": "S:fc3780c5dd5bf8b496ae1f17df5b77903f80e61d,",
      "Heading.H6": "S:09d5c58dd58f468e13e804a53249fd506ebafb56,",
      "Light Theme.Badge.$color-badge-gray-100": "S:6de3a91c002c2f836268f0421693e8439ba8bc28,",
      "Light Theme.Badge.$color-badge-gray-500": "S:a625b429c334dd2d82976c277b7594eb74a91c38,",
      "Light Theme.Badge.$color-badge-cyan-400": "S:75a524d291ffd11e66c46004902b54b16703340a,",
      "Light Theme.Badge.$color-badge-cyan-800": "S:aa5beb357fad86a411f9b5d73d957a290be07911,",
      "Light Theme.Badge.$color-badge-green-150": "S:dee3ce970a9c80d0f69d2b1348a9c21fe2c63b40,",
      "Light Theme.Badge.$color-badge-green-600": "S:ec825f63bd7f4a48db387d209a8e041516e04992,",
      "Light Theme.Badge.$color-badge-yellow-150": "S:805d9ec84e1701b1d920e6c1a189e0f5305ccfd7,",
      "Light Theme.Badge.$color-badge-yellow-400": "S:dec9bce085054c2f08cd37f820687ff632f99724,",
      "Light Theme.Badge.$color-badge-orange-150": "S:2b425b965b3516a72a5a6b56e1ec6c4fb4951357,",
      "Light Theme.Badge.$color-badge-orange-400": "S:1e77172ca0e02933dd30c7d4233e6a96d88ed928,",
      "Light Theme.Badge.$color-badge-red-600": "S:4b5e6c4525cd112f7fbfe862bc74266d373e68a2,",
      "Light Theme.Badge.$color-badge-red-50": "S:e8760ccde1cc8f9828f3c789b3f6246c5697d99f,",
      "Light Theme.Background.$color-background": "S:da8f9a1b529634f291bfa1ca99972792ceb5771c,",
      "Light Theme.Background.$color-background-disabled": "S:f6b14602347e53419d7499a7f3729d64df7ef97b,",
      "Light Theme.Background.$color-background-utility-light": "S:b68aca0d9d2e73553b13cd55f078b9eea4e31a85,",
      "Light Theme.Background.$color-background-utility-dark": "S:75f508ff4efca495263c337ef17c9f67f3e1ef1f,",
      "Light Theme.Border.$color-border-blue-500": "S:8a99bb6f3bf98d9770664486e15c78d72bcd9154,",
      "Light Theme.Border.$color-border-gray-100": "S:1abd8786197b83db5df722fdfb44b9f7eb66ab14,",
      "Light Theme.Border.$color-border-active": "S:5131dcf5974b1ab1abdd90d35f125885e99bf8b7,",
      "Light Theme.Border.$color-border-cyan-700": "S:2ab7f9b3d98a8b0335123debff7b6eee09c1531c,",
      "Light Theme.Border.$color-border-gray-400": "S:41961c9d01d68020c7e1b5393758ee497f82a5e1,",
      "Light Theme.Border.$color-border-gray-200": "S:96716af2bf9b1d6b213df0a082e411f2756d68f1,",
      "Light Theme.Border.$color-border-cyan-200": "S:c3b260c6c1337dddfe7be2954e109fe1e97486cd,",
      "Light Theme.Border.$color-border-green-150": "S:21a08f57533777ed0e8e1741ef995270995a2590,",
      "Light Theme.Border.$color-border-green-400": "S:4f0aefa80e4c3ed058264fd3b35bf6f6336298f6,",
      "Light Theme.Border.$color-border-yellow-150": "S:e960930dcda0c7fc237de89d811e2b5ad3871e26,",
      "Light Theme.Border.$color-border-yellow-400": "S:1bea356ecafe1fd065283bca8dbb7d5439cd0eed,",
      "Light Theme.Border.$color-border-red-50": "S:3ef0582710156f633c6c1c5e1e2b3a9ebada441a,",
      "Light Theme.Border.$color-border-red-400": "S:dd921ffdd5757fdb2f205bd08c1ec3e5df3d3f47,",
      "Light Theme.Border.$color-border-orange-150": "S:ecedd0f288b434be8eb1a450f09669a602e3484c,",
      "Light Theme.Border.$color-border-orange-400": "S:5628169ce7cfc62d47660e6a96c08b3766536f1e,",
      "Light Theme.Border.$color-border-disabled": "S:ffe828dbeea0df2786d022f0a51d39d3430d8072,",
      "Light Theme.Button.$color-button-primary-hover": "S:e60404ab79feedb24d3446a78a78bc672faf22be,",
      "Light Theme.Button.$color-button-primary": "S:ade2cbd64f55914c3051888ad93cf74f07a0afcf,",
      "Light Theme.Button.$color-button-primary-active": "S:8d332e6770b2c90a4b632863c7361e7b94184c1d,",
      "Light Theme.Button.$color-button-secondary-hover": "S:fc6a33839d3d7fa2ef5012bae947a20d6844cd55,",
      "Light Theme.Button.$color-button-secondary": "S:0b89972724165705de4bd0e0705451815c841e3c,",
      "Light Theme.Button.$color-button-secondary-active": "S:dab6f9b14d698b79b0fdd2915b77b2ee8f4fbde4,",
      "Light Theme.Button.$color-button-disabled": "S:4cf2675385b343d57fb46fbe269bc366dd72a144,",
      "Light Theme.Button.$color-button-icon": "S:12eec2767a4d10870ba6a09180d8c2e3df6733a0,",
      "Light Theme.Button.$color-button-icon-hover": "S:15aa18c181015f6ad6bd811088ef9bb0862ad4c4,",
      "Light Theme.Button.$color-button-icon-active": "S:12363efe33597f970c3392ba359ce2883b07dc1e,",
      "Light Theme.Button.$color-button-icon-disabled": "S:f5d581bdfa533c1f075469884f97b3ed02f78f7d,",
      "Light Theme.Chart.$color-chart-primary-700": "S:ca71aa35d749daacdd664dcbc67b447f85f71e1a,",
      "Light Theme.Chart.$color-chart-primary-600": "S:8630c5e376aea5c0df284907ea1f75a1164be861,",
      "Light Theme.Chart.$color-chart-primary-500": "S:42476084609da884f5cdc28f3e52ce5f6a8d16f2,",
      "Light Theme.Chart.$color-chart-primary-300": "S:0dd3c3262d2b1ef5a6a38c388f894b311fb782fd,",
      "Light Theme.Chart.$color-chart-secondary-700": "S:200f116a4e6d2bc9d72a53624af0e9a84f14f278,",
      "Light Theme.Chart.$color-chart-secondary-600": "S:533714ab420eeb4c3b5828c5c8b972eea12183fb,",
      "Light Theme.Chart.$color-chart-secondary-500": "S:bedab6746360a0d26f8d8bcc20f93647b3ebcdfd,",
      "Light Theme.Chart.$color-chart-secondary-300": "S:aa87c6d4ce5329cbb671121d86496042aaa47120,",
      "Light Theme.Chart.$color-chart-gradient-horizontal": "S:dc5662213fc805a2e1b3c91fdca1c6139eea7e07,",
      "Light Theme.Chart.$color-chart-gradient-vertical": "S:3e7c8dde41821a5ff286360541f070e33dc01cee,",
      "Light Theme.Chart.$color-chart-gray-100": "S:5c15c1e50c583dc69642f3aea7f65ee2249c0deb,",
      "Light Theme.Icon.$color-icon-default": "S:b9ee49ce942cd5dfc0c72ba04fe95f855823dc6f,",
      "Light Theme.Icon.$color-icon-inverted": "S:7e523a540a858332b1e598c3681c246673f2a79d,",
      "Light Theme.Icon.$color-icon-file-doc": "S:a74a940f59563df8790d44754f5cc7f371d84467,",
      "Light Theme.Icon.$color-icon-file-ppt": "S:ac547c76f3ff3327fe9d7e7bf7f69f83b39b984c,",
      "Light Theme.Icon.$color-icon-file-pdf": "S:0b1f0b29a2befba316984288d765f37d80e7db4d,",
      "Light Theme.Icon.$color-icon-file-xls": "S:e9d7e2ba26003afe45830cc60177d1f9715c9364,",
      "Light Theme.Icon.$color-icon-file-video": "S:cbb4dd021b641f1ce2b7a130536b1e40aeaea4d4,",
      "Light Theme.Icon.$color-icon-active": "S:0deac59fca4afbf026ac00bf07cdd3ec2e5bac38,",
      "Light Theme.Icon.$color-icon-disabled": "S:3c745578873d9563d4c4ad01567804304ce0f4b7,",
      "Light Theme.Input.$color-input": "S:f7656fa6e825065e4e364dab05e788af5b3a7279,",
      "Light Theme.Input.$color-input-active": "S:aabf3d754ea8095ab8e4195b6375eaa827c7091c,",
      "Light Theme.Input.$color-input-disabled": "S:eef1e6be3f2ae559e2affed8c11527da965a47b1,",
      "Light Theme.Layer.$color-layer-01": "S:7ba2e7dea05c0123d9c3d7bf88c4998c12615ae8,",
      "Light Theme.Layer.$color-layer-01-hover": "S:cf11ad6901b8018ea031ded0f6c848e230ad997d,",
      "Light Theme.Layer.$color-layer-01-inverted": "S:9cd0948891a605ce88fb82484aadb4cf746f61d9,",
      "Light Theme.Layer.$color-layer-02": "S:a31ae8bb12ef043a93d9f2e25ff73f7552ff4d85,",
      "Light Theme.Layer.$color-layer-03": "S:847ccbda18442040714a635fe40b359f6175217f,",
      "Light Theme.Layer.$color-layer-disabled": "S:784bde8d207f50c06a96b1e6b5017d8fe60d6dfe,",
      "Light Theme.Link.$color-link": "S:3fb4f4b3e60861c10ae3d0dcc3d33afcbb9689a6,",
      "Light Theme.Link.$color-link-hover": "S:9313ef3925a8d8857f477ab404d2235d0c4603ec,",
      "Light Theme.Link.$color-link-disabled": "S:7f28c7cea9ac3ddd7bfa8b3312c907c985cfd19e,",
      "Light Theme.Support.$color-support-info-secondary": "S:a398e6851e7fbdcece86ca37fae8ce65dd9b569c,",
      "Light Theme.Support.$color-support-info-primary": "S:89d32f7c834b2dd3bc8efa352360db2de61f103f,",
      "Light Theme.Support.$color-support-success-secondary": "S:acff2499e803d5ccd333dad2f0203c8b865680b9,",
      "Light Theme.Support.$color-support-success-primary": "S:ab16d197d1b458ffd8af48059c06a925bb1f26df,",
      "Light Theme.Support.$color-support-warning-primary": "S:73b96ede68f4fe06b87ec36dd35f0b486f6f5e53,",
      "Light Theme.Support.$color-support-warning-secondary": "S:6ced6500f3cb189128b6caea8c8743877e73014e,",
      "Light Theme.Support.$color-support-advice-primary": "S:8965263ed49e17766f79aca1635c725e9f3ff7a2,",
      "Light Theme.Support.$color-support-advice-secondary": "S:ee866ecfdcd941e7f1b80e8ff5d6d857b245048f,",
      "Light Theme.Support.$color-support-error-secondary": "S:d30f15228730d7848f5001199d8866b0cdd1d76f,",
      "Light Theme.Support.$color-support-error-primary": "S:01d8d188617c8771ecca29b738b2fffd3bb5cf06,",
      "Light Theme.Text.$color-text-primary": "S:c982f0f38fa2d820e5803db92fd186164466e0d6,",
      "Light Theme.Text.$color-text-primary-inverse": "S:b3edf027bfc147318e6151b839d894587029416a,",
      "Light Theme.Text.$color-text-secondary": "S:16bc8c3657d1e8d49874409c31d0d5a7b3bd633b,",
      "Light Theme.Text.$color-text-disabled": "S:42825cf64d9386177e4883fea132ea91f55c71a2,",
      "Dark Theme.Badge.$color-badge-gray-100": "S:a38a2260015ccb034c6c94be510a0cc80a74fcca,",
      "Dark Theme.Badge.$color-badge-gray-500": "S:8d4065a869946482bb5cca5bd513e614ec195292,",
      "Dark Theme.Badge.$color-badge-cyan-200": "S:dd7e86ad6704a9f1309d41026a5e49b5009656e6,",
      "Dark Theme.Badge.$color-badge-cyan-800": "S:83ccffbfb7f7d2c2cbb45cc45eaf5469f328c845,",
      "Dark Theme.Badge.$color-badge-green-150": "S:0b6d7b9851c6f9f4fe5bdf502eb404200194f6a1,",
      "Dark Theme.Badge.$color-badge-green-600": "S:c8d68b5bf570e743c1424a31d371e71590a43359,",
      "Dark Theme.Badge.$color-badge-yellow-150": "S:783c417c6eea377c6d6d74be456eea0dde847245,",
      "Dark Theme.Badge.$color-badge-yellow-400": "S:4e173108f49ef23deb6c3af77c1a100d986bf833,",
      "Dark Theme.Badge.$color-badge-red-50": "S:3136a9cb951be8fd7d002d82762af3b17dcaba48,",
      "Dark Theme.Badge.$color-badge-red-600": "S:4b776b214eff1516e0ba11689099527370011879,",
      "Dark Theme.Badge.$color-badge-orange-150": "S:87bae80e1bb3128c1db14743d4bc7141ac31b852,",
      "Dark Theme.Badge.$color-badge-orange-400": "S:132a2ecf057eed97fa12968d5b93bd8b33e47b4b,",
      "Dark Theme.Background.$color-background": "S:0f1aa1678b5b634c48260fc84ac2bd9ec4eeba23,",
      "Dark Theme.Background.$color-background-disabled": "S:6771cfa968a88e81cb665cad551494ee5b7754f7,",
      "Dark Theme.Background.$color-background-utility-light": "S:d195c0c0606a4df92c1b3aabe47364e5f326bc26,",
      "Dark Theme.Background.$color-background-utility-dark": "S:c09e12622f993c57d2bee6dbab5abcf8d49d2d4e,",
      "Dark Theme.Border.$color-border-gray-700": "S:295d62b483cd2bac34426f89b8c3045e694edfe7,",
      "Dark Theme.Border.$color-border-gray-100": "S:c8ce85599fa818a075925a78ff31c249d2508716,",
      "Dark Theme.Border.$color-border-gray-200": "S:993058721f36476e963bbb7dc397a552fa0e8475,",
      "Dark Theme.Border.$color-border-gray-400": "S:6a50b667544850fe609aaba9c2a827cf8e674a2d,",
      "Dark Theme.Border.$color-border-cyan-200": "S:1cf0c5a9d71b45bf5109dd473051e9ab318e2c31,",
      "Dark Theme.Border.$color-border-cyan-700": "S:ebaec9d1a0a89c33c460c8a09b3d0b3324ca87f8,",
      "Dark Theme.Border.$color-border-green-150": "S:cc3b949019a80ee2c7eef5fcde3bafa981142ec0,",
      "Dark Theme.Border.$color-border-green-400": "S:1170324cec12bcae94ea1074ff6f214d5f2abbdb,",
      "Dark Theme.Border.$color-border-yellow-150": "S:cf22216ed827e88887fa40db0b10105199fa1cca,",
      "Dark Theme.Border.$color-border-yellow-400": "S:442d0557a67d9acdbf2cf9b356bf19e58f264d52,",
      "Dark Theme.Border.$color-border-red-50": "S:55255c56edf955940f680911af4924018ff99734,",
      "Dark Theme.Border.$color-border-red-400": "S:5df2dee5cee7d2d0b36debb863ab2be88ddffcbf,",
      "Dark Theme.Border.$color-border-orange-150": "S:c3a6e76fc0a60ad6a9e5968fa8823f6423e6cdda,",
      "Dark Theme.Border.$color-border-orange-400": "S:ecc014863d59dfc9be2bf790d636425ecdaae15e,",
      "Dark Theme.Border.$color-border-active": "S:1d1bfbf5b3c7a7502db48b65d5bd651700d01216,",
      "Dark Theme.Border.$color-border-disabled": "S:2fb3728cca424a1a611a37404734686c979631b0,",
      "Dark Theme.Button.$color-button-primary": "S:d2f7fa797d0a68f444b82983c141346a0a23dcfa,",
      "Dark Theme.Button.$color-button-primary-hover": "S:05112e00fd70d643fc3ff4957a278c45e5bd9c58,",
      "Dark Theme.Button.$color-button-primary-active": "S:55a570df7ecb0c1a67b90a4deb32943a00e75a25,",
      "Dark Theme.Button.$color-button-secondary": "S:d7c42e7c0c828eb1aadbcfad1f73049c00060270,",
      "Dark Theme.Button.$color-button-secondary-hover": "S:77d1762cb4f8ccb27c0085f9e166e47c4d711cf2,",
      "Dark Theme.Button.$color-button-secondary-active": "S:4e9ecbaeb6f2db8b1603be1e61496693fb0a36b7,",
      "Dark Theme.Button.$color-button-disabled": "S:d7b63d7b0db6a713f77c23b3142714b5e7d66806,",
      "Dark Theme.Button.$color-button-icon": "S:75de8c1a76db67dc7b164bbef7019a7961badf95,",
      "Dark Theme.Button.$color-button-icon-hover": "S:3462c39426f8f12ac766a720ea2982f3d1c5fa36,",
      "Dark Theme.Button.$color-button-icon-active": "S:c9d150dad6762e2f96b5f14c0a820e7f19c3e5d9,",
      "Dark Theme.Button.$color-button-icon-disabled": "S:d51e1baba88ec8b9e046dd12fc577d780481f55a,",
      "Dark Theme.Chart.$color-chart-primary-700": "S:d648958258c26d5b754d31e9c68343adb1959d86,",
      "Dark Theme.Chart.$color-chart-primary-600": "S:95aee76a65fb6cf99d3a71c967220d0da6c3a88d,",
      "Dark Theme.Chart.$color-chart-primary-500": "S:81f067974009ecabcc783584753c8f70eb2bf0ec,",
      "Dark Theme.Chart.$color-chart-primary-300": "S:99faa9de4bde28b4b21524442c7bf253a7b5b092,",
      "Dark Theme.Chart.$color-chart-secondary-700": "S:47e8579ca2c977fbbc5b0e2715c2bdca518450d3,",
      "Dark Theme.Chart.$color-chart-secondary-600": "S:4f17e91c9a08efa7e22876623a4992a0408398c8,",
      "Dark Theme.Chart.$color-chart-secondary-500": "S:52cfbde0b9030e70ffa0df8e1ca842fefa7dad8f,",
      "Dark Theme.Chart.$color-chart-secondary-300": "S:0aacee3b5d43660d780c36730e4fe9c87e7aebf2,",
      "Dark Theme.Chart.$color-chart-gradient-horizontal": "S:4b729f27ee6ff60bb5f51a429af3e45cb299971a,",
      "Dark Theme.Chart.$color-chart-gradient-vertical": "S:040d972c9ab9c43cb82fd28d39abbe95e16db843,",
      "Dark Theme.Chart.$color-chart-gray-700": "S:9b8b591fc79ed71668d359470aec864c6fc4ff79,",
      "Dark Theme.Icon.$color-icon-default": "S:8727c455246b44496ab4f6b893c4aa6cb2a12dbe,",
      "Dark Theme.Icon.$color-icon-inverted": "S:c3ba119a32a26a58c340e0afbb43f482bc68dfb2,",
      "Dark Theme.Icon.$color-icon-file-doc": "S:d7aeb2aa020fe44cae242a953a5a8174086b3f01,",
      "Dark Theme.Icon.$color-icon-file-ppt": "S:4c6a9fe4b60fdf01aac0b2252f22053a4bd57e06,",
      "Dark Theme.Icon.$color-icon-file-pdf": "S:4765906d44814e0ea0e56eef195ec15152a2de2d,",
      "Dark Theme.Icon.$color-icon-file-xls": "S:397c8cc2cf610e6c6af0623253de5827201572b0,",
      "Dark Theme.Icon.$color-icon-file-video": "S:0b10d4fe37b61429b628a5941774e2171a2aab2a,",
      "Dark Theme.Icon.$color-icon-active": "S:16ad3d4039c4d79366b7259da91949e3d7f319c9,",
      "Dark Theme.Icon.$color-icon-disabled": "S:f7c0895db56eb9467dcbe8181aa4b3cb19df5eaf,",
      "Dark Theme.Input.$color-input": "S:cc36026dd0fda005db235b572eb6d0e02a614893,",
      "Dark Theme.Input.$color-input-active": "S:f341a1f896522511ff9ddd79c6c48054a5e6678d,",
      "Dark Theme.Input.$color-input-disabled": "S:5884648a23b53bac563ec133c78eac61891c8eb3,",
      "Dark Theme.Layer.$color-layer-01": "S:301d6b0bdc90da2c3b1cafed3a6a2c5800a40270,",
      "Dark Theme.Layer.$color-layer-01-hover": "S:79949667d23d8c938f7b51539ff5c1f0cc8d2215,",
      "Dark Theme.Layer.$color-layer-01-active": "S:aaff60237b042bc1aa69b7097b14a9bbcf0e5eb5,",
      "Dark Theme.Layer.$color-layer-01-inverted": "S:db00b0ebccd68c3ef052bd96a4b8a416aa981711,",
      "Dark Theme.Layer.$color-layer-02": "S:6f4d1708edae4cc878df22e058fa71770c78f652,",
      "Dark Theme.Layer.$color-layer-03": "S:50612c78c8a340f705e2e44ed4b6b21b78d92e4c,",
      "Dark Theme.Layer.$color-layer-disabled": "S:31eb92775f8a8f6f73843a5b8f25bdf284e3b179,",
      "Dark Theme.Link.$color-link": "S:c2810a58dd9399a802da4d363496343045276f2d,",
      "Dark Theme.Link.$color-link-hover": "S:e7f7c61d55635086278126f0a8fc1cc02070b081,",
      "Dark Theme.Link.$color-link-disabled": "S:273e7543887c0b252ba74024e53e8e9afc0d1078,",
      "Dark Theme.Support.$color-support-info-secondary": "S:5a46b24be67487ffe0426050672d75260806b7df,",
      "Dark Theme.Support.$color-support-info-primary": "S:fd62ff594b0789af6120b7a241d2d26c1431e207,",
      "Dark Theme.Support.$color-support-success-secondary": "S:06da43113ff859185ae8e177f592db65f32c432c,",
      "Dark Theme.Support.$color-support-success-primary": "S:3b015e6011b5f472386e8266c061f9d00a32a525,",
      "Dark Theme.Support.$color-support-warning-secondary": "S:502747d3fab314bcd9c39e23dbb0a8888f9838d8,",
      "Dark Theme.Support.$color-support-warning-primary": "S:45ac697b04f66017e3bb72f48b7590dafdcb83b0,",
      "Dark Theme.Support.$color-support-advice-secondary": "S:d1b2b5bfe68d405fbcc34a3d32cd82206ca17e54,",
      "Dark Theme.Support.$color-support-advice-primary": "S:b7ab64143a6c5a90363f8ccb118bb6aea5c1a849,",
      "Dark Theme.Support.$color-support-error-secondary": "S:7a91d0fd333c0b323aadb02f9c37293e14ef17f5,",
      "Dark Theme.Support.$color-support-error-primary": "S:58f057b21bd08cc5bd3fd50413943dc12ea6d919,",
      "Dark Theme.Text.$color-text-primary": "S:165cf3e10b283f7f1ab9817c5dadb515402aec1d,",
      "Dark Theme.Text.$color-text-primary-inverted": "S:8b5692722e728498c311e3cac269f1c0b20eaa1f,",
      "Dark Theme.Text.$color-text-secondary": "S:2b8050a7d8ec1f93c0e94af52d82d97d65b276c6,",
      "Dark Theme.Text.$color-text-disabled": "S:6fde88bb15c10b1f56008629bbfb0b2246dc1308,",
      "Light Theme.Border 1": "S:8bb345aa2d5a1078b7a7d48fbdb972976ffaf869,",
      "Light Theme.Border 2": "S:c82a39a8d72f0e7d7a2aba21025482bf0602583a,",
      "Light Theme.Border 3": "S:403e78cc76713002e49bd13e25fa4764cd3d9f82,",
      "Light Theme.Border 4": "S:86ce278f2096b8101270575d6e8ae3f0aeb80e83,",
      "Light Theme.Elevation 1": "S:bcc6006c5b03e8eb67742bfd794a71d58e54b04b,",
      "Light Theme.Elevation 2": "S:16994518d75241ed1589460c9f2c5c9d00a97a6e,",
      "Light Theme.Elevation 3": "S:f05143a58de99178b1b42df473ea5368d9dc4ac7,",
      "Dark Theme.Border 1": "S:d31bd92f084914ae4149c4d6f1647e78937a594b,",
      "Dark Theme.Border 2": "S:a40b7679162987c9b7a38a866b0e68fadc5818a7,",
      "Dark Theme.Border 3": "S:6fc76b243fe2542799aba355fd0f19dd46b22b7f,",
      "Dark Theme.Border 4": "S:14d01dccfedb10e8821a9d4c23462a6a713bf017,",
      "Dark Theme.Elevation 1": "S:088295abd85fc3146d33991a28c4d66127b3ed51,",
      "Dark Theme.Elevation 2": "S:de222e9184f089fd6e0f17dd1f91d63589fc2878,",
      "Dark Theme.Elevation 3": "S:986c7f93b04c87e37d6971b919e41b443d721071,"
    }
  }
], kg = {
  tokenSetOrder: [
    "Theme/Light Peacock",
    "Theme/Dark Peacock",
    "Theme/DTC Joy",
    "Theme/PepsiConnect",
    "Viewport/Desktop Peacock",
    "Viewport/Mobile Peacock",
    "Viewport/Desktop PepsiConnect",
    "Viewport/Mobile PepsiConnect"
  ]
}, jg = {
  "Theme/Light-Peacock": {
    Tokens: {
      Button: {
        Primary: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Primary Hover": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        Secondary: {
          value: "{Primitive Colors.Secondary.500}",
          type: "color"
        },
        "Secondary Hover": {
          value: "{Primitive Colors.Secondary.600}",
          type: "color"
        },
        Outlined: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Outlined Hover": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        Borderless: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Borderless Hover": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        "Primary Pressed": {
          value: "{Primitive Colors.Primary.700}",
          type: "color"
        },
        "Secondary Pressed": {
          value: "{Primitive Colors.Secondary.700}",
          type: "color"
        },
        "Danger Hover": {
          value: "{Primitive Colors.Red.600}",
          type: "color"
        },
        "Danger Pressed": {
          value: "{Primitive Colors.Red.700}",
          type: "color"
        }
      },
      Background: {
        Default: {
          value: "{Primitive Colors.Blue.150}",
          type: "color",
          description: "Default page background"
        },
        "Utility Low Contrast": {
          value: "{Primitive Colors.Gray.100}",
          type: "color",
          description: "E.g. scrollers & video player"
        },
        "Utility High Contrast": {
          value: "{Primitive Colors.Gray.500}",
          type: "color",
          description: "E.g. scrollers & video player"
        },
        "Layer-01": {
          value: "{Primitive Colors.Blue.50}",
          type: "color",
          description: "Background color for layers on top of $color-background-default (e.g., cards)"
        },
        Inverse: {
          value: "{Primitive Colors.Gray.800}",
          type: "color",
          description: "Inverted background color for layers on top of $color-background-default"
        },
        "Layer-02": {
          value: "{Primitive Colors.Blue.200}",
          type: "color",
          description: "Background color for layers on top of $color-background-layer-01 (e.g., card header)"
        },
        "Layer-03": {
          value: "{Primitive Colors.Blue.600}",
          type: "color",
          description: "Background color for layers on top of $color-background-layer-02 (e.g., card icons)"
        },
        Overlay: {
          value: "{Primitive Colors.Gray.800}",
          type: "color",
          description: "Default background color for overlays (e.g., modals and side panels)"
        }
      },
      Border: {
        Default: {
          value: "{Primitive Colors.Blue.500}",
          type: "color",
          description: "Default border color"
        },
        Divider: {
          value: "{Primitive Colors.Gray.100}",
          type: "color",
          description: "Dividers"
        }
      },
      Icon: {
        Default: {
          value: "{Primitive Colors.Gray.700}",
          type: "color",
          description: "Default icon color"
        }
      },
      Interaction: {
        "Form background": {
          value: "{Primitive Colors.Blue.50}",
          type: "color",
          description: "Form elements background color"
        },
        Focus: {
          value: "{Primitive Colors.Primary.400}",
          type: "color",
          description: "Focus border for form components"
        },
        Hover: {
          value: "{Primitive Colors.Blue.400}",
          type: "color"
        },
        "Disabled background": {
          value: "{Primitive Colors.Gray.150}",
          type: "color",
          description: "Background for disabled elements"
        },
        Disabled: {
          value: "{Primitive Colors.Gray.300}",
          type: "color",
          description: `Disabled text color;
Disabled label`
        },
        Active: {
          value: "{Primitive Colors.Primary.500}",
          type: "color",
          description: "Active state for form components"
        },
        "Form border": {
          value: "{Primitive Colors.Gray.200}",
          type: "color"
        },
        "Form border hover": {
          value: "{Primitive Colors.Gray.400}",
          type: "color"
        }
      },
      Link: {
        Default: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Hover: {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        Disabled: {
          value: "{Primitive Colors.Gray.300}",
          type: "color"
        },
        Visited: {
          value: "{Primitive Colors.Tertiary.600}",
          type: "color"
        }
      },
      Feedback: {
        Info: {
          value: "{Primitive Colors.Auxiliary.600}",
          type: "color",
          description: "Primary Information color"
        },
        Success: {
          value: "{Primitive Colors.Green.500}",
          type: "color",
          description: "Primary Success color"
        },
        Advice: {
          value: "{Primitive Colors.Orange.500}",
          type: "color",
          description: "Primary Advice color"
        },
        Warning: {
          value: "{Primitive Colors.Orange.700}",
          type: "color",
          description: "Primary Warning color"
        },
        Error: {
          value: "{Primitive Colors.Red.500}",
          type: "color",
          description: "Primary Error color"
        },
        "Info background": {
          value: "{Primitive Colors.Auxiliary.100}",
          type: "color",
          description: "Information background"
        },
        "Success background": {
          value: "{Primitive Colors.Green.100}",
          type: "color",
          description: "Success background"
        },
        "Error background": {
          value: "{Primitive Colors.Red.50}",
          type: "color",
          description: "Error background"
        },
        "Warning background": {
          value: "{Primitive Colors.Yellow.100}",
          type: "color",
          description: "Warning background"
        }
      },
      Text: {
        Primary: {
          value: "{Primitive Colors.Gray.700}",
          type: "color",
          description: `Primary text color;
Headers; numbers and %;`
        },
        Secondary: {
          value: "{Primitive Colors.Gray.500}",
          type: "color",
          description: `Secondary text color;
Input, labels color;`
        },
        Tertiary: {
          value: "{Primitive Colors.Gray.300}",
          type: "color",
          description: "Tertairy text color"
        },
        Inverse: {
          value: "{Primitive Colors.Gray.50}",
          type: "color",
          description: "Text placed on an inversed background (E.g. tooltips)"
        }
      },
      "Button Group": {
        Default: {
          value: "{Primitive Colors.Blue.200}",
          type: "color"
        },
        Active: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Hover: {
          value: "{Primitive Colors.Blue.300}",
          type: "color"
        },
        Border: {
          value: "{Primitive Colors.Blue.500}",
          type: "color"
        },
        Text: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Disabled: {
          value: "{Primitive Colors.Blue.50}",
          type: "color"
        },
        Selected: {
          value: "{Primitive Colors.Blue.400}",
          type: "color"
        }
      },
      Gradients: {
        "Primary-01 start": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        "Primary-01 end": {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Primary-02 start": {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Primary-02 end": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        "Secondary-01 start": {
          value: "{Primitive Colors.Secondary.500}",
          type: "color"
        },
        "Secondary-01 end": {
          value: "{Primitive Colors.Secondary.300}",
          type: "color"
        },
        "Secondary-02 start": {
          value: "{Primitive Colors.Secondary.300}",
          type: "color"
        },
        "Secondary-02 end": {
          value: "{Primitive Colors.Secondary.500}",
          type: "color"
        },
        Overlay: {
          value: "#272727cc",
          type: "color"
        }
      },
      Skeleton: {
        Start: {
          value: "{Primitive Colors.Gray.100}",
          type: "color"
        },
        End: {
          value: "{Primitive Colors.Gray.200}",
          type: "color"
        }
      }
    },
    Elevation: {
      Colors: {
        "Elevation-01": {
          value: "#005cbc14",
          type: "color"
        },
        "Elevation-02": {
          value: "#3a3a3a14",
          type: "color"
        },
        "Elevation-03": {
          value: "#005cbc1f",
          type: "color"
        },
        "Elevation-04": {
          value: "#005cbc14",
          type: "color"
        },
        "Elevation-05": {
          value: "#005cbc1f",
          type: "color"
        },
        "Elevation-06": {
          value: "#005cbc1f",
          type: "color"
        }
      },
      X: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0.25rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "-0.125rem",
          type: "dimension"
        }
      },
      Y: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0.25rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0.125rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "-0.125rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0rem",
          type: "dimension"
        }
      },
      Blur: {
        "Elevation-01": {
          value: "1.5rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "1.5rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "1.5rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "1.5rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0.25rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0.25rem",
          type: "dimension"
        }
      },
      Spread: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0.5rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "-0.125rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0.5rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0.5rem",
          type: "dimension"
        }
      }
    },
    "Primitive Colors": {
      Auxiliary: {
        50: {
          value: "#e6f5fa",
          type: "color"
        },
        100: {
          value: "#cceaf6",
          type: "color"
        },
        150: {
          value: "#b3e0f1",
          type: "color"
        },
        200: {
          value: "#99d5ed",
          type: "color"
        },
        300: {
          value: "#66c0e3",
          type: "color"
        },
        400: {
          value: "#33abda",
          type: "color"
        },
        500: {
          value: "#0096d1",
          type: "color"
        },
        600: {
          value: "#0078a7",
          type: "color"
        },
        700: {
          value: "#005a7d",
          type: "color"
        },
        800: {
          value: "#003c54",
          type: "color"
        },
        850: {
          value: "#002d3f",
          type: "color"
        },
        900: {
          value: "#001e2a",
          type: "color"
        },
        950: {
          value: "#000f15",
          type: "color"
        }
      },
      Blue: {
        50: {
          value: "#fbfcfe",
          type: "color"
        },
        100: {
          value: "#f7fafe",
          type: "color"
        },
        150: {
          value: "#f3f7fd",
          type: "color"
        },
        200: {
          value: "#eff5fc",
          type: "color"
        },
        300: {
          value: "#e7effb",
          type: "color"
        },
        400: {
          value: "#dfeaf9",
          type: "color"
        },
        500: {
          value: "#d7e5f8",
          type: "color"
        },
        600: {
          value: "#b2caea",
          type: "color"
        },
        700: {
          value: "#8dafdc",
          type: "color"
        },
        800: {
          value: "#6993cd",
          type: "color"
        },
        850: {
          value: "#5686c6",
          type: "color"
        },
        900: {
          value: "#4478bf",
          type: "color"
        },
        950: {
          value: "#316bb8",
          type: "color"
        }
      },
      Cyan: {
        50: {
          value: "#f7fbfc",
          type: "color"
        },
        100: {
          value: "#eef6f9",
          type: "color"
        },
        150: {
          value: "#e6f2f6",
          type: "color"
        },
        200: {
          value: "#ddedf3",
          type: "color"
        },
        300: {
          value: "#cce4ee",
          type: "color"
        },
        400: {
          value: "#bbdbe8",
          type: "color"
        },
        500: {
          value: "#aad2e2",
          type: "color"
        },
        600: {
          value: "#88a8b5",
          type: "color"
        },
        700: {
          value: "#667e88",
          type: "color"
        },
        800: {
          value: "#44545a",
          type: "color"
        },
        850: {
          value: "#333f44",
          type: "color"
        },
        900: {
          value: "#222a2d",
          type: "color"
        },
        950: {
          value: "#111517",
          type: "color"
        }
      },
      Gray: {
        50: {
          value: "#efefef",
          type: "color"
        },
        100: {
          value: "#dfdfdf",
          type: "color"
        },
        150: {
          value: "#d0d0d0",
          type: "color"
        },
        200: {
          value: "#c0c0c0",
          type: "color"
        },
        300: {
          value: "#a0a0a0",
          type: "color"
        },
        400: {
          value: "#818181",
          type: "color"
        },
        500: {
          value: "#616161",
          type: "color"
        },
        600: {
          value: "#4e4e4e",
          type: "color"
        },
        700: {
          value: "#3a3a3a",
          type: "color"
        },
        800: {
          value: "#272727",
          type: "color"
        },
        850: {
          value: "#1d1d1d",
          type: "color"
        },
        900: {
          value: "#131313",
          type: "color"
        },
        950: {
          value: "#0a0a0a",
          type: "color"
        }
      },
      Green: {
        50: {
          value: "#e6f3ee",
          type: "color"
        },
        100: {
          value: "#cce7dd",
          type: "color"
        },
        150: {
          value: "#b3dacb",
          type: "color"
        },
        200: {
          value: "#99ceba",
          type: "color"
        },
        300: {
          value: "#66b698",
          type: "color"
        },
        400: {
          value: "#339d75",
          type: "color"
        },
        500: {
          value: "#008553",
          type: "color"
        },
        600: {
          value: "#006a42",
          type: "color"
        },
        700: {
          value: "#005032",
          type: "color"
        },
        800: {
          value: "#003521",
          type: "color"
        },
        850: {
          value: "#002819",
          type: "color"
        },
        900: {
          value: "#001b11",
          type: "color"
        },
        950: {
          value: "#000d08",
          type: "color"
        }
      },
      Black: {
        value: "#000000",
        type: "color"
      },
      White: {
        value: "#ffffff",
        type: "color"
      },
      Orange: {
        50: {
          value: "#fff3e8",
          type: "color"
        },
        100: {
          value: "#ffe7d2",
          type: "color"
        },
        150: {
          value: "#ffdcbb",
          type: "color"
        },
        200: {
          value: "#ffd0a4",
          type: "color"
        },
        300: {
          value: "#ffb877",
          type: "color"
        },
        400: {
          value: "#ffa149",
          type: "color"
        },
        500: {
          value: "#ff891c",
          type: "color"
        },
        600: {
          value: "#cc6e16",
          type: "color"
        },
        700: {
          value: "#995211",
          type: "color"
        },
        800: {
          value: "#66370b",
          type: "color"
        },
        850: {
          value: "#4d2908",
          type: "color"
        },
        900: {
          value: "#331b06",
          type: "color"
        },
        950: {
          value: "#1a0e03",
          type: "color"
        }
      },
      Primary: {
        50: {
          value: "#e6eff8",
          type: "color"
        },
        100: {
          value: "#ccdef2",
          type: "color"
        },
        150: {
          value: "#b3ceeb",
          type: "color"
        },
        200: {
          value: "#99bee4",
          type: "color"
        },
        300: {
          value: "#669dd7",
          type: "color"
        },
        400: {
          value: "#337dc9",
          type: "color"
        },
        500: {
          value: "#005cbc",
          type: "color"
        },
        600: {
          value: "#004a96",
          type: "color"
        },
        700: {
          value: "#003771",
          type: "color"
        },
        800: {
          value: "#00254b",
          type: "color"
        },
        850: {
          value: "#001c38",
          type: "color"
        },
        900: {
          value: "#001226",
          type: "color"
        },
        950: {
          value: "#000913",
          type: "color"
        }
      },
      Purple: {
        50: {
          value: "#f3eefa",
          type: "color"
        },
        100: {
          value: "#e6def5",
          type: "color"
        },
        150: {
          value: "#dacdf0",
          type: "color"
        },
        200: {
          value: "#cebceb",
          type: "color"
        },
        300: {
          value: "#b59be0",
          type: "color"
        },
        400: {
          value: "#9d79d6",
          type: "color"
        },
        500: {
          value: "#8458cc",
          type: "color"
        },
        600: {
          value: "#6a46a3",
          type: "color"
        },
        700: {
          value: "#4f357a",
          type: "color"
        },
        800: {
          value: "#352352",
          type: "color"
        },
        850: {
          value: "#281a3d",
          type: "color"
        },
        900: {
          value: "#1a1229",
          type: "color"
        },
        950: {
          value: "#0d0914",
          type: "color"
        }
      },
      Red: {
        50: {
          value: "#fbe6e9",
          type: "color"
        },
        100: {
          value: "#f6ccd2",
          type: "color"
        },
        150: {
          value: "#f2b3bc",
          type: "color"
        },
        200: {
          value: "#ee99a6",
          type: "color"
        },
        300: {
          value: "#e56679",
          type: "color"
        },
        400: {
          value: "#dd334d",
          type: "color"
        },
        500: {
          value: "#d40020",
          type: "color"
        },
        600: {
          value: "#aa001a",
          type: "color"
        },
        700: {
          value: "#7f0013",
          type: "color"
        },
        800: {
          value: "#55000d",
          type: "color"
        },
        850: {
          value: "#40000a",
          type: "color"
        },
        900: {
          value: "#2a0006",
          type: "color"
        },
        950: {
          value: "#150003",
          type: "color"
        }
      },
      Secondary: {
        50: {
          value: "#e7f2f5",
          type: "color"
        },
        100: {
          value: "#cfe5ec",
          type: "color"
        },
        150: {
          value: "#b8d8e2",
          type: "color"
        },
        200: {
          value: "#a0cbd9",
          type: "color"
        },
        300: {
          value: "#70b1c5",
          type: "color"
        },
        400: {
          value: "#4197b2",
          type: "color"
        },
        500: {
          value: "#117d9f",
          type: "color"
        },
        600: {
          value: "#0e647f",
          type: "color"
        },
        700: {
          value: "#0a4b5f",
          type: "color"
        },
        800: {
          value: "#073240",
          type: "color"
        },
        850: {
          value: "#052630",
          type: "color"
        },
        900: {
          value: "#031920",
          type: "color"
        },
        950: {
          value: "#020d10",
          type: "color"
        }
      },
      Tertiary: {
        50: {
          value: "#f7eef3",
          type: "color"
        },
        100: {
          value: "#efdde7",
          type: "color"
        },
        150: {
          value: "#e7cddb",
          type: "color"
        },
        200: {
          value: "#dfbccf",
          type: "color"
        },
        300: {
          value: "#d09ab8",
          type: "color"
        },
        400: {
          value: "#c079a0",
          type: "color"
        },
        500: {
          value: "#b05788",
          type: "color"
        },
        600: {
          value: "#8d466d",
          type: "color"
        },
        700: {
          value: "#6a3452",
          type: "color"
        },
        800: {
          value: "#462336",
          type: "color"
        },
        850: {
          value: "#351a29",
          type: "color"
        },
        900: {
          value: "#23111b",
          type: "color"
        },
        950: {
          value: "#12090e",
          type: "color"
        }
      },
      Yellow: {
        50: {
          value: "#fff9e8",
          type: "color"
        },
        100: {
          value: "#fff2d2",
          type: "color"
        },
        150: {
          value: "#ffecbb",
          type: "color"
        },
        200: {
          value: "#ffe5a4",
          type: "color"
        },
        300: {
          value: "#ffd977",
          type: "color"
        },
        400: {
          value: "#ffcc49",
          type: "color"
        },
        500: {
          value: "#ffbf1c",
          type: "color"
        },
        600: {
          value: "#cc9916",
          type: "color"
        },
        700: {
          value: "#997311",
          type: "color"
        },
        800: {
          value: "#664c0b",
          type: "color"
        },
        850: {
          value: "#4d3908",
          type: "color"
        },
        900: {
          value: "#332606",
          type: "color"
        },
        950: {
          value: "#1a1303",
          type: "color"
        }
      }
    },
    Typography: {
      "Font Family": {
        Heading: {
          value: "Inter",
          type: "text"
        },
        Body: {
          value: "Inter",
          type: "text"
        }
      },
      "Font Weight": {
        Bold: {
          value: "Bold",
          type: "text"
        },
        Regular: {
          value: "Regular",
          type: "text"
        },
        Medium: {
          value: "Medium",
          type: "text"
        }
      }
    },
    Spacing: {
      "spacing-4": {
        value: "0.25rem",
        type: "dimension"
      },
      "spacing-8": {
        value: "0.5rem",
        type: "dimension"
      },
      "spacing-16": {
        value: "1rem",
        type: "dimension"
      },
      "spacing-24": {
        value: "1.5rem",
        type: "dimension"
      },
      "spacing-32": {
        value: "2rem",
        type: "dimension"
      },
      "spacing-40": {
        value: "2.5rem",
        type: "dimension"
      },
      "spacing-48": {
        value: "3rem",
        type: "dimension"
      },
      "spacing-64": {
        value: "4rem",
        type: "dimension"
      },
      "spacing-80": {
        value: "5rem",
        type: "dimension"
      },
      "spacing-96": {
        value: "6rem",
        type: "dimension"
      },
      "spacing-160": {
        value: "10rem",
        type: "dimension"
      },
      "spacing-2": {
        value: "0.125rem",
        type: "dimension"
      },
      "spacing-0": {
        value: "0rem",
        type: "dimension"
      },
      "spacing-12": {
        value: "0.75rem",
        type: "dimension"
      }
    },
    "Corner radius": {
      "corner-radius-xsmall": {
        value: "{Spacing.spacing-4}",
        type: "dimension"
      },
      "corner-radius-small": {
        value: "{Spacing.spacing-8}",
        type: "dimension"
      },
      "corner-radius-large": {
        value: "{Spacing.spacing-24}",
        type: "dimension"
      },
      "corner-radius-medium": {
        value: "{Spacing.spacing-16}",
        type: "dimension"
      },
      "corner-radius-xxsmall": {
        value: "{Spacing.spacing-2}",
        type: "dimension"
      }
    },
    Border: {
      "border-1": {
        value: "0.0625rem",
        type: "dimension"
      },
      "border-2": {
        value: "0.125rem",
        type: "dimension"
      },
      "border-5": {
        value: "0.3125rem",
        type: "dimension"
      }
    }
  },
  "Theme/Dark-Peacock": {
    Tokens: {
      Button: {
        Primary: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Primary Hover": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        Secondary: {
          value: "{Primitive Colors.Secondary.600}",
          type: "color"
        },
        "Secondary Hover": {
          value: "{Primitive Colors.Secondary.700}",
          type: "color"
        },
        Outlined: {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Outlined Hover": {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Borderless: {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Borderless Hover": {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Primary Pressed": {
          value: "{Primitive Colors.Primary.700}",
          type: "color"
        },
        "Secondary Pressed": {
          value: "{Primitive Colors.Secondary.800}",
          type: "color"
        },
        "Danger Hover": {
          value: "{Primitive Colors.Red.600}",
          type: "color"
        },
        "Danger Pressed": {
          value: "{Primitive Colors.Red.700}",
          type: "color"
        }
      },
      Background: {
        Default: {
          value: "{Primitive Colors.Gray.900}",
          type: "color",
          description: "Default page background"
        },
        "Utility Low Contrast": {
          value: "{Primitive Colors.Gray.500}",
          type: "color",
          description: "E.g. scrollers & video player"
        },
        "Utility High Contrast": {
          value: "{Primitive Colors.Gray.800}",
          type: "color",
          description: "E.g. scrollers & video player"
        },
        "Layer-01": {
          value: "{Primitive Colors.Gray.850}",
          type: "color",
          description: "Background color for layers on top of $color-background-default (e.g., cards)"
        },
        Inverse: {
          value: "{Primitive Colors.Blue.50}",
          type: "color",
          description: "Inverted background color for layers on top of $color-background-default"
        },
        "Layer-02": {
          value: "{Primitive Colors.Gray.800}",
          type: "color",
          description: "Background color for layers on top of $color-background-layer-01 (e.g., card header)"
        },
        "Layer-03": {
          value: "{Primitive Colors.Gray.950}",
          type: "color",
          description: "Background color for layers on top of $color-background-layer-02 (e.g., card icons)"
        },
        Overlay: {
          value: "{Primitive Colors.Gray.800}",
          type: "color",
          description: "Default background color for overlays (e.g., modals and side panels)"
        }
      },
      Border: {
        Default: {
          value: "{Primitive Colors.Gray.700}",
          type: "color",
          description: "Default border color"
        },
        Divider: {
          value: "{Primitive Colors.Gray.700}",
          type: "color",
          description: "Dividers"
        }
      },
      Icon: {
        Default: {
          value: "{Primitive Colors.Gray.50}",
          type: "color",
          description: "Default icon color"
        }
      },
      Interaction: {
        "Form background": {
          value: "{Primitive Colors.Gray.800}",
          type: "color",
          description: "Form elements background color"
        },
        Focus: {
          value: "{Primitive Colors.Primary.400}",
          type: "color",
          description: "Focus border for form components"
        },
        Hover: {
          value: "{Primitive Colors.Gray.700}",
          type: "color"
        },
        "Disabled background": {
          value: "{Primitive Colors.Gray.400}",
          type: "color",
          description: "Background for disabled elements"
        },
        Disabled: {
          value: "{Primitive Colors.Gray.500}",
          type: "color",
          description: `Disabled text color;
Disabled label`
        },
        Active: {
          value: "{Primitive Colors.Primary.400}",
          type: "color",
          description: "Active state for form components"
        },
        "Form border": {
          value: "{Primitive Colors.Gray.600}",
          type: "color"
        },
        "Form border hover": {
          value: "{Primitive Colors.Gray.500}",
          type: "color"
        }
      },
      Link: {
        Default: {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        Hover: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Disabled: {
          value: "{Primitive Colors.Gray.500}",
          type: "color"
        },
        Visited: {
          value: "{Primitive Colors.Tertiary.600}",
          type: "color"
        }
      },
      Feedback: {
        Info: {
          value: "{Primitive Colors.Auxiliary.600}",
          type: "color",
          description: "Primary Information color"
        },
        Success: {
          value: "{Primitive Colors.Green.500}",
          type: "color",
          description: "Primary Success color"
        },
        Advice: {
          value: "{Primitive Colors.Orange.500}",
          type: "color",
          description: "Primary Advice color"
        },
        Warning: {
          value: "{Primitive Colors.Yellow.500}",
          type: "color",
          description: "Primary Warning color"
        },
        Error: {
          value: "{Primitive Colors.Red.500}",
          type: "color",
          description: "Primary Error color"
        },
        "Info background": {
          value: "{Primitive Colors.Auxiliary.100}",
          type: "color",
          description: "Information background"
        },
        "Success background": {
          value: "{Primitive Colors.Green.100}",
          type: "color",
          description: "Success background"
        },
        "Error background": {
          value: "{Primitive Colors.Red.50}",
          type: "color",
          description: "Error background"
        },
        "Warning background": {
          value: "{Primitive Colors.Yellow.100}",
          type: "color",
          description: "Warning background"
        }
      },
      Text: {
        Primary: {
          value: "{Primitive Colors.Gray.50}",
          type: "color",
          description: `Primary text color;
Headers; numbers and %;`
        },
        Secondary: {
          value: "{Primitive Colors.Gray.150}",
          type: "color",
          description: `Secondary text color;
Input, labels color;`
        },
        Tertiary: {
          value: "{Primitive Colors.Gray.500}",
          type: "color",
          description: "Tertairy text color"
        },
        Inverse: {
          value: "{Primitive Colors.Gray.700}",
          type: "color",
          description: "Text placed on an inversed background (E.g. tooltips)"
        }
      },
      "Button Group": {
        Default: {
          value: "{Primitive Colors.Gray.850}",
          type: "color"
        },
        Active: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Hover: {
          value: "{Primitive Colors.Gray.900}",
          type: "color"
        },
        Border: {
          value: "{Primitive Colors.Gray.500}",
          type: "color"
        },
        Text: {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        Disabled: {
          value: "{Primitive Colors.Gray.850}",
          type: "color"
        },
        Selected: {
          value: "{Primitive Colors.Gray.800}",
          type: "color"
        }
      },
      Gradients: {
        "Primary-01 start": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        "Primary-01 end": {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Primary-02 start": {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Primary-02 end": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        "Secondary-01 start": {
          value: "{Primitive Colors.Secondary.500}",
          type: "color"
        },
        "Secondary-01 end": {
          value: "{Primitive Colors.Secondary.300}",
          type: "color"
        },
        "Secondary-02 start": {
          value: "{Primitive Colors.Secondary.300}",
          type: "color"
        },
        "Secondary-02 end": {
          value: "{Primitive Colors.Secondary.500}",
          type: "color"
        },
        Overlay: {
          value: "#272727cc",
          type: "color"
        }
      },
      Skeleton: {
        Start: {
          value: "{Primitive Colors.Gray.500}",
          type: "color"
        },
        End: {
          value: "{Primitive Colors.Gray.400}",
          type: "color"
        }
      }
    },
    Elevation: {
      Colors: {
        "Elevation-01": {
          value: "#00000014",
          type: "color"
        },
        "Elevation-02": {
          value: "#00000014",
          type: "color"
        },
        "Elevation-03": {
          value: "#000000cc",
          type: "color"
        },
        "Elevation-04": {
          value: "#000000cc",
          type: "color"
        },
        "Elevation-05": {
          value: "#0000001f",
          type: "color"
        },
        "Elevation-06": {
          value: "#0000001f",
          type: "color"
        }
      },
      X: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0.25rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "-0.125rem",
          type: "dimension"
        }
      },
      Y: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0.25rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0.125rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "-0.125rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0rem",
          type: "dimension"
        }
      },
      Blur: {
        "Elevation-01": {
          value: "1.5rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "1.5rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "1.5rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "1.5rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0.25rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0.25rem",
          type: "dimension"
        }
      },
      Spread: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0.5rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "-0.125rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0.5rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0.5rem",
          type: "dimension"
        }
      }
    },
    "Primitive Colors": {
      Auxiliary: {
        50: {
          value: "#e5f5fc",
          type: "color"
        },
        100: {
          value: "#ccebf9",
          type: "color"
        },
        150: {
          value: "#b2e2f6",
          type: "color"
        },
        200: {
          value: "#99d8f3",
          type: "color"
        },
        300: {
          value: "#66c4ee",
          type: "color"
        },
        400: {
          value: "#33b1e8",
          type: "color"
        },
        500: {
          value: "#009de2",
          type: "color"
        },
        600: {
          value: "#007eb5",
          type: "color"
        },
        700: {
          value: "#005e88",
          type: "color"
        },
        800: {
          value: "#003f5a",
          type: "color"
        },
        850: {
          value: "#002f44",
          type: "color"
        },
        900: {
          value: "#001f2d",
          type: "color"
        },
        950: {
          value: "#001017",
          type: "color"
        }
      },
      Blue: {
        50: {
          value: "#f8fbff",
          type: "color"
        },
        100: {
          value: "#f1f7ff",
          type: "color"
        },
        150: {
          value: "#eaf3fe",
          type: "color"
        },
        200: {
          value: "#e3effe",
          type: "color"
        },
        300: {
          value: "#d6e6fe",
          type: "color"
        },
        400: {
          value: "#c8defd",
          type: "color"
        },
        500: {
          value: "#bad6fd",
          type: "color"
        },
        600: {
          value: "#96b7e6",
          type: "color"
        },
        700: {
          value: "#7199cf",
          type: "color"
        },
        800: {
          value: "#4d7ab9",
          type: "color"
        },
        850: {
          value: "#3b6bad",
          type: "color"
        },
        900: {
          value: "#285ca2",
          type: "color"
        },
        950: {
          value: "#164c96",
          type: "color"
        }
      },
      Cyan: {
        50: {
          value: "#f4fbfd",
          type: "color"
        },
        100: {
          value: "#eaf7fc",
          type: "color"
        },
        150: {
          value: "#dff3fa",
          type: "color"
        },
        200: {
          value: "#d4eff9",
          type: "color"
        },
        300: {
          value: "#bfe6f6",
          type: "color"
        },
        400: {
          value: "#a9def3",
          type: "color"
        },
        500: {
          value: "#94d6f0",
          type: "color"
        },
        600: {
          value: "#76abc0",
          type: "color"
        },
        700: {
          value: "#598090",
          type: "color"
        },
        800: {
          value: "#3b5660",
          type: "color"
        },
        850: {
          value: "#2c4048",
          type: "color"
        },
        900: {
          value: "#1e2b30",
          type: "color"
        },
        950: {
          value: "#0f1518",
          type: "color"
        }
      },
      Gray: {
        50: {
          value: "#efefef",
          type: "color"
        },
        100: {
          value: "#dfdfdf",
          type: "color"
        },
        150: {
          value: "#d0d0d0",
          type: "color"
        },
        200: {
          value: "#c0c0c0",
          type: "color"
        },
        300: {
          value: "#a0a0a0",
          type: "color"
        },
        400: {
          value: "#818181",
          type: "color"
        },
        500: {
          value: "#616161",
          type: "color"
        },
        600: {
          value: "#4e4e4e",
          type: "color"
        },
        700: {
          value: "#3a3a3a",
          type: "color"
        },
        800: {
          value: "#272727",
          type: "color"
        },
        850: {
          value: "#1d1d1d",
          type: "color"
        },
        900: {
          value: "#131313",
          type: "color"
        },
        950: {
          value: "#0a0a0a",
          type: "color"
        }
      },
      Green: {
        50: {
          value: "#e5f2ee",
          type: "color"
        },
        100: {
          value: "#cce6dc",
          type: "color"
        },
        150: {
          value: "#b2d9cb",
          type: "color"
        },
        200: {
          value: "#99cdb9",
          type: "color"
        },
        300: {
          value: "#66b497",
          type: "color"
        },
        400: {
          value: "#339b74",
          type: "color"
        },
        500: {
          value: "#008251",
          type: "color"
        },
        600: {
          value: "#006841",
          type: "color"
        },
        700: {
          value: "#004e31",
          type: "color"
        },
        800: {
          value: "#003420",
          type: "color"
        },
        850: {
          value: "#002718",
          type: "color"
        },
        900: {
          value: "#001a10",
          type: "color"
        },
        950: {
          value: "#000d08",
          type: "color"
        }
      },
      Black: {
        value: "#000000",
        type: "color"
      },
      White: {
        value: "#ffffff",
        type: "color"
      },
      Orange: {
        50: {
          value: "#fff2e5",
          type: "color"
        },
        100: {
          value: "#ffe4cc",
          type: "color"
        },
        150: {
          value: "#ffd7b2",
          type: "color"
        },
        200: {
          value: "#ffca99",
          type: "color"
        },
        300: {
          value: "#ffaf66",
          type: "color"
        },
        400: {
          value: "#ff9533",
          type: "color"
        },
        500: {
          value: "#ff7a00",
          type: "color"
        },
        600: {
          value: "#cc6200",
          type: "color"
        },
        700: {
          value: "#994900",
          type: "color"
        },
        800: {
          value: "#663100",
          type: "color"
        },
        850: {
          value: "#4d2500",
          type: "color"
        },
        900: {
          value: "#331800",
          type: "color"
        },
        950: {
          value: "#1a0c00",
          type: "color"
        }
      },
      Primary: {
        50: {
          value: "#e6f0fb",
          type: "color"
        },
        100: {
          value: "#cce1f7",
          type: "color"
        },
        150: {
          value: "#b2d2f3",
          type: "color"
        },
        200: {
          value: "#99c3ef",
          type: "color"
        },
        300: {
          value: "#66a5e7",
          type: "color"
        },
        400: {
          value: "#3387df",
          type: "color"
        },
        500: {
          value: "#0069d7",
          type: "color"
        },
        600: {
          value: "#0054ac",
          type: "color"
        },
        700: {
          value: "#003f81",
          type: "color"
        },
        800: {
          value: "#002a56",
          type: "color"
        },
        850: {
          value: "#002041",
          type: "color"
        },
        900: {
          value: "#00152b",
          type: "color"
        },
        950: {
          value: "#000913",
          type: "color"
        }
      },
      Purple: {
        50: {
          value: "#f3edfc",
          type: "color"
        },
        100: {
          value: "#e8dbf8",
          type: "color"
        },
        150: {
          value: "#dcc9f5",
          type: "color"
        },
        200: {
          value: "#d0b7f2",
          type: "color"
        },
        300: {
          value: "#b992eb",
          type: "color"
        },
        400: {
          value: "#a16ee5",
          type: "color"
        },
        500: {
          value: "#8a4ade",
          type: "color"
        },
        600: {
          value: "#6e3bb2",
          type: "color"
        },
        700: {
          value: "#532c85",
          type: "color"
        },
        800: {
          value: "#371e59",
          type: "color"
        },
        850: {
          value: "#291643",
          type: "color"
        },
        900: {
          value: "#1c0f2c",
          type: "color"
        },
        950: {
          value: "#0e0716",
          type: "color"
        }
      },
      Red: {
        50: {
          value: "#fae5e5",
          type: "color"
        },
        100: {
          value: "#f6cccc",
          type: "color"
        },
        150: {
          value: "#f1b2b2",
          type: "color"
        },
        200: {
          value: "#ed9999",
          type: "color"
        },
        300: {
          value: "#e46666",
          type: "color"
        },
        400: {
          value: "#db3333",
          type: "color"
        },
        500: {
          value: "#d20000",
          type: "color"
        },
        600: {
          value: "#a80000",
          type: "color"
        },
        700: {
          value: "#7e0000",
          type: "color"
        },
        800: {
          value: "#540000",
          type: "color"
        },
        850: {
          value: "#3f0000",
          type: "color"
        },
        900: {
          value: "#2a0000",
          type: "color"
        },
        950: {
          value: "#150000",
          type: "color"
        }
      },
      Secondary: {
        50: {
          value: "#e5f5f8",
          type: "color"
        },
        100: {
          value: "#cceaf2",
          type: "color"
        },
        150: {
          value: "#b2e0eb",
          type: "color"
        },
        200: {
          value: "#99d5e5",
          type: "color"
        },
        300: {
          value: "#66c1d7",
          type: "color"
        },
        400: {
          value: "#33acca",
          type: "color"
        },
        500: {
          value: "#0097bd",
          type: "color"
        },
        600: {
          value: "#007997",
          type: "color"
        },
        700: {
          value: "#005b71",
          type: "color"
        },
        800: {
          value: "#003c4c",
          type: "color"
        },
        850: {
          value: "#002d39",
          type: "color"
        },
        900: {
          value: "#001e26",
          type: "color"
        },
        950: {
          value: "#000f13",
          type: "color"
        }
      },
      Tertiary: {
        50: {
          value: "#f6edf2",
          type: "color"
        },
        100: {
          value: "#eddce4",
          type: "color"
        },
        150: {
          value: "#e3cad7",
          type: "color"
        },
        200: {
          value: "#dab9c9",
          type: "color"
        },
        300: {
          value: "#c896af",
          type: "color"
        },
        400: {
          value: "#b57394",
          type: "color"
        },
        500: {
          value: "#a35079",
          type: "color"
        },
        600: {
          value: "#8d466d",
          type: "color"
        },
        700: {
          value: "#623049",
          type: "color"
        },
        800: {
          value: "#412030",
          type: "color"
        },
        850: {
          value: "#311824",
          type: "color"
        },
        900: {
          value: "#211018",
          type: "color"
        },
        950: {
          value: "#10080c",
          type: "color"
        }
      },
      Yellow: {
        50: {
          value: "#fff6e5",
          type: "color"
        },
        100: {
          value: "#ffeecc",
          type: "color"
        },
        150: {
          value: "#ffe5b2",
          type: "color"
        },
        200: {
          value: "#ffdc99",
          type: "color"
        },
        300: {
          value: "#ffcb66",
          type: "color"
        },
        400: {
          value: "#ffb933",
          type: "color"
        },
        500: {
          value: "#ffa800",
          type: "color"
        },
        600: {
          value: "#cc8600",
          type: "color"
        },
        700: {
          value: "#996500",
          type: "color"
        },
        800: {
          value: "#664300",
          type: "color"
        },
        850: {
          value: "#4d3200",
          type: "color"
        },
        900: {
          value: "#332200",
          type: "color"
        },
        950: {
          value: "#1a1100",
          type: "color"
        }
      }
    },
    Typography: {
      "Font Family": {
        Heading: {
          value: "Inter",
          type: "text"
        },
        Body: {
          value: "Inter",
          type: "text"
        }
      },
      "Font Weight": {
        Bold: {
          value: "Bold",
          type: "text"
        },
        Regular: {
          value: "Regular",
          type: "text"
        },
        Medium: {
          value: "Medium",
          type: "text"
        }
      }
    },
    Spacing: {
      "spacing-4": {
        value: "0.25rem",
        type: "dimension"
      },
      "spacing-8": {
        value: "0.5rem",
        type: "dimension"
      },
      "spacing-16": {
        value: "1rem",
        type: "dimension"
      },
      "spacing-24": {
        value: "1.5rem",
        type: "dimension"
      },
      "spacing-32": {
        value: "2rem",
        type: "dimension"
      },
      "spacing-40": {
        value: "2.5rem",
        type: "dimension"
      },
      "spacing-48": {
        value: "3rem",
        type: "dimension"
      },
      "spacing-64": {
        value: "4rem",
        type: "dimension"
      },
      "spacing-80": {
        value: "5rem",
        type: "dimension"
      },
      "spacing-96": {
        value: "6rem",
        type: "dimension"
      },
      "spacing-160": {
        value: "10rem",
        type: "dimension"
      },
      "spacing-2": {
        value: "0.125rem",
        type: "dimension"
      },
      "spacing-0": {
        value: "0rem",
        type: "dimension"
      },
      "spacing-12": {
        value: "0.75rem",
        type: "dimension"
      }
    },
    "Corner radius": {
      "corner-radius-xsmall": {
        value: "{Spacing.spacing-4}",
        type: "dimension"
      },
      "corner-radius-small": {
        value: "{Spacing.spacing-8}",
        type: "dimension"
      },
      "corner-radius-large": {
        value: "{Spacing.spacing-24}",
        type: "dimension"
      },
      "corner-radius-medium": {
        value: "{Spacing.spacing-16}",
        type: "dimension"
      },
      "corner-radius-xxsmall": {
        value: "{Spacing.spacing-2}",
        type: "dimension"
      }
    },
    Border: {
      "border-1": {
        value: "0.0625rem",
        type: "dimension"
      },
      "border-2": {
        value: "0.125rem",
        type: "dimension"
      },
      "border-5": {
        value: "0.3125rem",
        type: "dimension"
      }
    }
  },
  "Theme/DTC-Joy": {
    Tokens: {
      Button: {
        Primary: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Primary Hover": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        Secondary: {
          value: "{Primitive Colors.Secondary.500}",
          type: "color"
        },
        "Secondary Hover": {
          value: "{Primitive Colors.Secondary.600}",
          type: "color"
        },
        Outlined: {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Outlined Hover": {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Borderless: {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Borderless Hover": {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Primary Pressed": {
          value: "{Primitive Colors.Primary.700}",
          type: "color"
        },
        "Secondary Pressed": {
          value: "{Primitive Colors.Secondary.700}",
          type: "color"
        },
        "Danger Hover": {
          value: "{Primitive Colors.Red.600}",
          type: "color"
        },
        "Danger Pressed": {
          value: "{Primitive Colors.Red.700}",
          type: "color"
        }
      },
      Background: {
        Default: {
          value: "{Primitive Colors.Gray.50}",
          type: "color",
          description: "Default page background"
        },
        "Utility Low Contrast": {
          value: "{Primitive Colors.Gray.500}",
          type: "color",
          description: "E.g. scrollers & video player"
        },
        "Utility High Contrast": {
          value: "{Primitive Colors.Gray.800}",
          type: "color",
          description: "E.g. scrollers & video player"
        },
        "Layer-01": {
          value: "{Primitive Colors.White}",
          type: "color",
          description: "Background color for layers on top of $color-background-default (e.g., cards)"
        },
        Inverse: {
          value: "{Primitive Colors.Gray.800}",
          type: "color",
          description: "Inverted background color for layers on top of $color-background-default"
        },
        "Layer-02": {
          value: "{Primitive Colors.Gray.50}",
          type: "color",
          description: "Background color for layers on top of $color-background-layer-01 (e.g., card header)"
        },
        "Layer-03": {
          value: "{Primitive Colors.Cyan.300}",
          type: "color",
          description: "Background color for layers on top of $color-background-layer-02 (e.g., card icons)"
        }
      },
      Border: {
        Default: {
          value: "{Primitive Colors.Blue.100}",
          type: "color",
          description: "Default border color"
        },
        Divider: {
          value: "{Primitive Colors.Gray.100}",
          type: "color",
          description: "Dividers"
        }
      },
      Icon: {
        Default: {
          value: "{Primitive Colors.Gray.900}",
          type: "color",
          description: "Default icon color"
        }
      },
      Interaction: {
        "Form background": {
          value: "{Primitive Colors.Gray.50}",
          type: "color",
          description: "Form elements background color"
        },
        Focus: {
          value: "{Primitive Colors.Primary.300}",
          type: "color",
          description: "Focus border for form components"
        },
        Hover: {
          value: "{Primitive Colors.Cyan.150}",
          type: "color"
        },
        "Disabled background": {
          value: "{Primitive Colors.Gray.150}",
          type: "color",
          description: "Background for disabled elements"
        },
        Disabled: {
          value: "{Primitive Colors.Gray.600}",
          type: "color",
          description: `Disabled text color;
Disabled label`
        },
        Active: {
          value: "{Primitive Colors.Primary.500}",
          type: "color",
          description: "Active state for form components"
        },
        "Form border": {
          value: "{Primitive Colors.Gray.400}",
          type: "color"
        },
        "Form border hover": {
          value: "{Primitive Colors.Gray.500}",
          type: "color"
        }
      },
      Link: {
        Default: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Hover: {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        Disabled: {
          value: "{Primitive Colors.Gray.600}",
          type: "color"
        },
        Visited: {
          value: "{Primitive Colors.Purple.400}",
          type: "color"
        }
      },
      Feedback: {
        Info: {
          value: "{Primitive Colors.Auxiliary.600}",
          type: "color",
          description: "Primary Information color"
        },
        Success: {
          value: "{Primitive Colors.Green.500}",
          type: "color",
          description: "Primary Success color"
        },
        Advice: {
          value: "{Primitive Colors.Orange.500}",
          type: "color",
          description: "Primary Advice color"
        },
        Warning: {
          value: "{Primitive Colors.Yellow.500}",
          type: "color",
          description: "Primary Warning color"
        },
        Error: {
          value: "{Primitive Colors.Red.500}",
          type: "color",
          description: "Primary Error color"
        },
        "Info background": {
          value: "{Primitive Colors.Auxiliary.100}",
          type: "color",
          description: "Information background"
        },
        "Success background": {
          value: "{Primitive Colors.Green.100}",
          type: "color",
          description: "Success background"
        },
        "Error background": {
          value: "{Primitive Colors.Red.50}",
          type: "color",
          description: "Error background"
        },
        "Warning background": {
          value: "{Primitive Colors.Yellow.100}",
          type: "color",
          description: "Warning background"
        }
      },
      Text: {
        Primary: {
          value: "{Primitive Colors.Gray.900}",
          type: "color",
          description: `Primary text color;
Headers; numbers and %;`
        },
        Secondary: {
          value: "{Primitive Colors.Gray.800}",
          type: "color",
          description: `Secondary text color;
Input, labels color;`
        },
        Tertiary: {
          value: "{Primitive Colors.Gray.300}",
          type: "color",
          description: "Tertairy text color"
        },
        Inverse: {
          value: "{Primitive Colors.Gray.50}",
          type: "color",
          description: "Text placed on an inversed background (E.g. tooltips)"
        }
      },
      "Button Group": {
        Default: {
          value: "{Primitive Colors.Cyan.100}",
          type: "color"
        },
        Active: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Hover: {
          value: "{Primitive Colors.Cyan.200}",
          type: "color"
        },
        Border: {
          value: "{Primitive Colors.Cyan.500}",
          type: "color"
        },
        Text: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Disabled: {
          value: "{Primitive Colors.Cyan.50}",
          type: "color"
        },
        Selected: {
          value: "{Primitive Colors.Cyan.400}",
          type: "color"
        }
      },
      Gradients: {
        "Primary-01 start": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        "Primary-01 end": {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Primary-02 start": {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Primary-02 end": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        "Secondary-01 start": {
          value: "{Primitive Colors.Secondary.500}",
          type: "color"
        },
        "Secondary-01 end": {
          value: "{Primitive Colors.Secondary.300}",
          type: "color"
        },
        "Secondary-02 start": {
          value: "{Primitive Colors.Secondary.300}",
          type: "color"
        },
        "Secondary-02 end": {
          value: "{Primitive Colors.Secondary.500}",
          type: "color"
        },
        Overlay: {
          value: "#272727cc",
          type: "color"
        }
      },
      Skeleton: {
        Start: {
          value: "{Primitive Colors.Gray.100}",
          type: "color"
        },
        End: {
          value: "{Primitive Colors.Gray.200}",
          type: "color"
        }
      }
    },
    Elevation: {
      Colors: {
        "Elevation-01": {
          value: "#d9deff14",
          type: "color"
        },
        "Elevation-02": {
          value: "#3a3a3a14",
          type: "color"
        },
        "Elevation-03": {
          value: "#d9deff1f",
          type: "color"
        },
        "Elevation-04": {
          value: "#d9deff14",
          type: "color"
        },
        "Elevation-05": {
          value: "#d9deff1f",
          type: "color"
        },
        "Elevation-06": {
          value: "#d9deff1f",
          type: "color"
        }
      },
      X: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "-0.125rem",
          type: "dimension"
        }
      },
      Y: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0rem",
          type: "dimension"
        }
      },
      Blur: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0.25rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0.25rem",
          type: "dimension"
        }
      },
      Spread: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0rem",
          type: "dimension"
        }
      }
    },
    "Primitive Colors": {
      Auxiliary: {
        50: {
          value: "#f1fcfe",
          type: "color"
        },
        100: {
          value: "#e4f9fd",
          type: "color"
        },
        150: {
          value: "#d6f6fb",
          type: "color"
        },
        200: {
          value: "#c8f3fa",
          type: "color"
        },
        300: {
          value: "#adecf8",
          type: "color"
        },
        400: {
          value: "#91e6f5",
          type: "color"
        },
        500: {
          value: "#76e0f3",
          type: "color"
        },
        600: {
          value: "#5fbece",
          type: "color"
        },
        700: {
          value: "#499baa",
          type: "color"
        },
        800: {
          value: "#327985",
          type: "color"
        },
        850: {
          value: "#276873",
          type: "color"
        },
        900: {
          value: "#1c5661",
          type: "color"
        },
        950: {
          value: "#10454e",
          type: "color"
        }
      },
      Blue: {
        50: {
          value: "#eceeff",
          type: "color"
        },
        100: {
          value: "#d9deff",
          type: "color"
        },
        150: {
          value: "#c6cdff",
          type: "color"
        },
        200: {
          value: "#b3bcff",
          type: "color"
        },
        300: {
          value: "#8d9bff",
          type: "color"
        },
        400: {
          value: "#6779ff",
          type: "color"
        },
        500: {
          value: "#4158ff",
          type: "color"
        },
        600: {
          value: "#3447d1",
          type: "color"
        },
        700: {
          value: "#2736a3",
          type: "color"
        },
        800: {
          value: "#1a2574",
          type: "color"
        },
        850: {
          value: "#141d5d",
          type: "color"
        },
        900: {
          value: "#0d1446",
          type: "color"
        },
        950: {
          value: "#070c2f",
          type: "color"
        }
      },
      Cyan: {
        50: {
          value: "#f7f8ff",
          type: "color"
        },
        100: {
          value: "#eff2ff",
          type: "color"
        },
        150: {
          value: "#e6ebff",
          type: "color"
        },
        200: {
          value: "#dee5ff",
          type: "color"
        },
        300: {
          value: "#ced8ff",
          type: "color"
        },
        400: {
          value: "#bdcbff",
          type: "color"
        },
        500: {
          value: "#adbeff",
          type: "color"
        },
        600: {
          value: "#8a9de6",
          type: "color"
        },
        700: {
          value: "#687dce",
          type: "color"
        },
        800: {
          value: "#455cb5",
          type: "color"
        },
        850: {
          value: "#344ca9",
          type: "color"
        },
        900: {
          value: "#233c9d",
          type: "color"
        },
        950: {
          value: "#112b90",
          type: "color"
        }
      },
      Gray: {
        50: {
          value: "#f9f9f9",
          type: "color"
        },
        100: {
          value: "#f3f2f4",
          type: "color"
        },
        150: {
          value: "#ececee",
          type: "color"
        },
        200: {
          value: "#e6e5e9",
          type: "color"
        },
        300: {
          value: "#dad9dd",
          type: "color"
        },
        400: {
          value: "#cdccd2",
          type: "color"
        },
        500: {
          value: "#c1bfc7",
          type: "color"
        },
        600: {
          value: "#a4a2a9",
          type: "color"
        },
        700: {
          value: "#86848b",
          type: "color"
        },
        800: {
          value: "#69676e",
          type: "color"
        },
        850: {
          value: "#5a585f",
          type: "color"
        },
        900: {
          value: "#4b4950",
          type: "color"
        },
        950: {
          value: "#3d3b41",
          type: "color"
        }
      },
      Green: {
        50: {
          value: "#edfbeb",
          type: "color"
        },
        100: {
          value: "#dcf6d8",
          type: "color"
        },
        150: {
          value: "#caf2c4",
          type: "color"
        },
        200: {
          value: "#b9eeb0",
          type: "color"
        },
        300: {
          value: "#95e589",
          type: "color"
        },
        400: {
          value: "#72dd61",
          type: "color"
        },
        500: {
          value: "#4fd43a",
          type: "color"
        },
        600: {
          value: "#3faa2e",
          type: "color"
        },
        700: {
          value: "#2f7f23",
          type: "color"
        },
        800: {
          value: "#205517",
          type: "color"
        },
        850: {
          value: "#184011",
          type: "color"
        },
        900: {
          value: "#102a0c",
          type: "color"
        },
        950: {
          value: "#081506",
          type: "color"
        }
      },
      Black: {
        value: "#000000",
        type: "color"
      },
      White: {
        value: "#ffffff",
        type: "color"
      },
      Orange: {
        50: {
          value: "#fff2e5",
          type: "color"
        },
        100: {
          value: "#ffe5cc",
          type: "color"
        },
        150: {
          value: "#ffd9b2",
          type: "color"
        },
        200: {
          value: "#ffcc99",
          type: "color"
        },
        300: {
          value: "#ffb266",
          type: "color"
        },
        400: {
          value: "#ff9933",
          type: "color"
        },
        500: {
          value: "#ff7f00",
          type: "color"
        },
        600: {
          value: "#cc6600",
          type: "color"
        },
        700: {
          value: "#994c00",
          type: "color"
        },
        800: {
          value: "#663300",
          type: "color"
        },
        850: {
          value: "#4d2600",
          type: "color"
        },
        900: {
          value: "#331900",
          type: "color"
        },
        950: {
          value: "#1a0d00",
          type: "color"
        }
      },
      Primary: {
        50: {
          value: "#eaecff",
          type: "color"
        },
        100: {
          value: "#d5daff",
          type: "color"
        },
        150: {
          value: "#c0c7ff",
          type: "color"
        },
        200: {
          value: "#abb5ff",
          type: "color"
        },
        300: {
          value: "#808fff",
          type: "color"
        },
        400: {
          value: "#566aff",
          type: "color"
        },
        500: {
          value: "#2c45ff",
          type: "color"
        },
        600: {
          value: "#2337cd",
          type: "color"
        },
        700: {
          value: "#1a299a",
          type: "color"
        },
        800: {
          value: "#121c68",
          type: "color"
        },
        850: {
          value: "#0d154f",
          type: "color"
        },
        900: {
          value: "#090e35",
          type: "color"
        },
        950: {
          value: "#04071c",
          type: "color"
        }
      },
      Purple: {
        50: {
          value: "#ece5fb",
          type: "color"
        },
        100: {
          value: "#d9ccf7",
          type: "color"
        },
        150: {
          value: "#c6b2f4",
          type: "color"
        },
        200: {
          value: "#b399f0",
          type: "color"
        },
        300: {
          value: "#8e66e8",
          type: "color"
        },
        400: {
          value: "#6833e1",
          type: "color"
        },
        500: {
          value: "#4200d9",
          type: "color"
        },
        600: {
          value: "#3500ae",
          type: "color"
        },
        700: {
          value: "#280082",
          type: "color"
        },
        800: {
          value: "#1a0057",
          type: "color"
        },
        850: {
          value: "#140041",
          type: "color"
        },
        900: {
          value: "#0d002b",
          type: "color"
        },
        950: {
          value: "#070016",
          type: "color"
        }
      },
      Red: {
        50: {
          value: "#fbe4e7",
          type: "color"
        },
        100: {
          value: "#f6cad1",
          type: "color"
        },
        150: {
          value: "#f2b1bb",
          type: "color"
        },
        200: {
          value: "#ee98a5",
          type: "color"
        },
        300: {
          value: "#e56578",
          type: "color"
        },
        400: {
          value: "#dd334c",
          type: "color"
        },
        500: {
          value: "#d40020",
          type: "color"
        },
        600: {
          value: "#aa001a",
          type: "color"
        },
        700: {
          value: "#7f0013",
          type: "color"
        },
        800: {
          value: "#55000d",
          type: "color"
        },
        850: {
          value: "#40000a",
          type: "color"
        },
        900: {
          value: "#2a0006",
          type: "color"
        },
        950: {
          value: "#150003",
          type: "color"
        }
      },
      Secondary: {
        50: {
          value: "#717dd7",
          type: "color"
        },
        100: {
          value: "#6670c5",
          type: "color"
        },
        150: {
          value: "#5a64b3",
          type: "color"
        },
        200: {
          value: "#4f58a1",
          type: "color"
        },
        300: {
          value: "#373f7d",
          type: "color"
        },
        400: {
          value: "#202759",
          type: "color"
        },
        500: {
          value: "#090e35",
          type: "color"
        },
        600: {
          value: "#070b2a",
          type: "color"
        },
        700: {
          value: "#050820",
          type: "color"
        },
        800: {
          value: "#040615",
          type: "color"
        },
        850: {
          value: "#030410",
          type: "color"
        },
        900: {
          value: "#02030b",
          type: "color"
        },
        950: {
          value: "#010105",
          type: "color"
        }
      },
      Tertiary: {
        50: {
          value: "#eeeff2",
          type: "color"
        },
        100: {
          value: "#dddfe6",
          type: "color"
        },
        150: {
          value: "#cdcfd9",
          type: "color"
        },
        200: {
          value: "#bcbfcc",
          type: "color"
        },
        300: {
          value: "#9a9fb3",
          type: "color"
        },
        400: {
          value: "#797f99",
          type: "color"
        },
        500: {
          value: "#575f80",
          type: "color"
        },
        600: {
          value: "#464c66",
          type: "color"
        },
        700: {
          value: "#34394d",
          type: "color"
        },
        800: {
          value: "#232633",
          type: "color"
        },
        850: {
          value: "#1a1d26",
          type: "color"
        },
        900: {
          value: "#11131a",
          type: "color"
        },
        950: {
          value: "#090a0d",
          type: "color"
        }
      },
      Yellow: {
        50: {
          value: "#fffce5",
          type: "color"
        },
        100: {
          value: "#fffacc",
          type: "color"
        },
        150: {
          value: "#fff7b2",
          type: "color"
        },
        200: {
          value: "#fff599",
          type: "color"
        },
        300: {
          value: "#ffef66",
          type: "color"
        },
        400: {
          value: "#ffea33",
          type: "color"
        },
        500: {
          value: "#ffe500",
          type: "color"
        },
        600: {
          value: "#ccb700",
          type: "color"
        },
        700: {
          value: "#998900",
          type: "color"
        },
        800: {
          value: "#665c00",
          type: "color"
        },
        850: {
          value: "#4d4500",
          type: "color"
        },
        900: {
          value: "#332e00",
          type: "color"
        },
        950: {
          value: "#1a1700",
          type: "color"
        }
      }
    },
    Typography: {
      "Font Family": {
        Heading: {
          value: "Galano Grotesque",
          type: "text"
        },
        Body: {
          value: "Galano Grotesque",
          type: "text"
        }
      },
      "Font Weight": {
        Bold: {
          value: "Bold",
          type: "text"
        },
        Regular: {
          value: "Regular",
          type: "text"
        },
        Medium: {
          value: "SemiBold",
          type: "text"
        }
      }
    },
    Spacing: {
      "spacing-4": {
        value: "0.25rem",
        type: "dimension"
      },
      "spacing-8": {
        value: "0.5rem",
        type: "dimension"
      },
      "spacing-16": {
        value: "1rem",
        type: "dimension"
      },
      "spacing-24": {
        value: "1.5rem",
        type: "dimension"
      },
      "spacing-32": {
        value: "2rem",
        type: "dimension"
      },
      "spacing-40": {
        value: "2.5rem",
        type: "dimension"
      },
      "spacing-48": {
        value: "3rem",
        type: "dimension"
      },
      "spacing-64": {
        value: "4rem",
        type: "dimension"
      },
      "spacing-80": {
        value: "5rem",
        type: "dimension"
      },
      "spacing-96": {
        value: "6rem",
        type: "dimension"
      },
      "spacing-160": {
        value: "10rem",
        type: "dimension"
      },
      "spacing-2": {
        value: "0.125rem",
        type: "dimension"
      },
      "spacing-0": {
        value: "0rem",
        type: "dimension"
      },
      "spacing-12": {
        value: "0.75rem",
        type: "dimension"
      }
    },
    "Corner radius": {
      "corner-radius-xsmall": {
        value: "{Spacing.spacing-4}",
        type: "dimension"
      },
      "corner-radius-small": {
        value: "{Spacing.spacing-8}",
        type: "dimension"
      },
      "corner-radius-large": {
        value: "{Spacing.spacing-24}",
        type: "dimension"
      },
      "corner-radius-medium": {
        value: "{Spacing.spacing-16}",
        type: "dimension"
      },
      "corner-radius-xxsmall": {
        value: "{Spacing.spacing-2}",
        type: "dimension"
      }
    },
    Border: {
      "border-1": {
        value: "0.0625rem",
        type: "dimension"
      },
      "border-2": {
        value: "0.125rem",
        type: "dimension"
      },
      "border-5": {
        value: "0.3125rem",
        type: "dimension"
      }
    }
  },
  "Theme/PepsiConnect": {
    Tokens: {
      Button: {
        Primary: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Primary Hover": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        Secondary: {
          value: "{Primitive Colors.Secondary.500}",
          type: "color"
        },
        "Secondary Hover": {
          value: "{Primitive Colors.Secondary.600}",
          type: "color"
        },
        Outlined: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Outlined Hover": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        Borderless: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Borderless Hover": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        "Primary Pressed": {
          value: "{Primitive Colors.Primary.700}",
          type: "color"
        },
        "Secondary Pressed": {
          value: "{Primitive Colors.Secondary.700}",
          type: "color"
        },
        "Danger Hover": {
          value: "{Primitive Colors.Red.600}",
          type: "color"
        },
        "Danger Pressed": {
          value: "{Primitive Colors.Red.700}",
          type: "color"
        }
      },
      Background: {
        Default: {
          value: "{Primitive Colors.Primary.50}",
          type: "color",
          description: "Default page background"
        },
        "Utility Low Contrast": {
          value: "{Primitive Colors.Gray.100}",
          type: "color",
          description: "E.g. scrollers & video player"
        },
        "Utility High Contrast": {
          value: "{Primitive Colors.Gray.400}",
          type: "color",
          description: "E.g. scrollers & video player"
        },
        "Layer-01": {
          value: "{Primitive Colors.White}",
          type: "color",
          description: "Background color for layers on top of $color-background-default (e.g., cards)"
        },
        Inverse: {
          value: "{Primitive Colors.Primary.500}",
          type: "color",
          description: "Inverted background color for layers on top of $color-background-default"
        },
        "Layer-02": {
          value: "{Primitive Colors.Primary.150}",
          type: "color",
          description: "Background color for layers on top of $color-background-layer-01 (e.g., card header)"
        },
        "Layer-03": {
          value: "{Primitive Colors.Tertiary.150}",
          type: "color",
          description: "Background color for layers on top of $color-background-layer-02 (e.g., card icons)"
        }
      },
      Border: {
        Default: {
          value: "#1618190d",
          type: "color",
          description: "Default border color"
        },
        Divider: {
          value: "{Primitive Colors.Gray.100}",
          type: "color",
          description: "Dividers"
        }
      },
      Icon: {
        Default: {
          value: "{Primitive Colors.Gray.700}",
          type: "color",
          description: "Default icon color"
        }
      },
      Interaction: {
        "Form background": {
          value: "{Primitive Colors.White}",
          type: "color",
          description: "Form elements background color"
        },
        Focus: {
          value: "{Primitive Colors.Primary.300}",
          type: "color",
          description: "Focus border for form components"
        },
        Hover: {
          value: "{Primitive Colors.Primary.100}",
          type: "color"
        },
        "Disabled background": {
          value: "{Primitive Colors.Gray.100}",
          type: "color",
          description: "Background for disabled elements"
        },
        Disabled: {
          value: "{Primitive Colors.Gray.400}",
          type: "color",
          description: `Disabled text color;
Disabled label`
        },
        Active: {
          value: "{Primitive Colors.Primary.500}",
          type: "color",
          description: "Active state for form components"
        },
        "Form border": {
          value: "{Primitive Colors.Gray.200}",
          type: "color"
        },
        "Form border hover": {
          value: "{Primitive Colors.Gray.300}",
          type: "color"
        }
      },
      Link: {
        Default: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Hover: {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        Disabled: {
          value: "{Primitive Colors.Gray.300}",
          type: "color"
        },
        Visited: {
          value: "{Primitive Colors.Purple.500}",
          type: "color"
        }
      },
      Feedback: {
        Info: {
          value: "{Primitive Colors.Primary.600}",
          type: "color",
          description: "Primary Information color"
        },
        Success: {
          value: "{Primitive Colors.Green.500}",
          type: "color",
          description: "Primary Success color"
        },
        Advice: {
          value: "{Primitive Colors.Auxiliary.500}",
          type: "color",
          description: "Primary Advice color"
        },
        Warning: {
          value: "{Primitive Colors.Yellow.600}",
          type: "color",
          description: "Primary Warning color"
        },
        Error: {
          value: "{Primitive Colors.Red.500}",
          type: "color",
          description: "Primary Error color"
        },
        "Info background": {
          value: "{Primitive Colors.Primary.100}",
          type: "color",
          description: "Information background"
        },
        "Success background": {
          value: "{Primitive Colors.Green.100}",
          type: "color",
          description: "Success background"
        },
        "Error background": {
          value: "{Primitive Colors.Red.50}",
          type: "color",
          description: "Error background"
        },
        "Warning background": {
          value: "{Primitive Colors.Yellow.100}",
          type: "color",
          description: "Warning background"
        }
      },
      Text: {
        Primary: {
          value: "{Primitive Colors.Gray.950}",
          type: "color",
          description: `Primary text color;
Headers; numbers and %;`
        },
        Secondary: {
          value: "{Primitive Colors.Gray.600}",
          type: "color",
          description: `Secondary text color;
Input, labels color;`
        },
        Tertiary: {
          value: "{Primitive Colors.Gray.400}",
          type: "color",
          description: "Tertairy text color"
        },
        Inverse: {
          value: "{Primitive Colors.White}",
          type: "color",
          description: "Text placed on an inversed background (E.g. tooltips)"
        }
      },
      "Button Group": {
        Default: {
          value: "{Primitive Colors.Blue.200}",
          type: "color"
        },
        Active: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Hover: {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        Border: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Text: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        Disabled: {
          value: "{Primitive Colors.Gray.300}",
          type: "color"
        },
        Selected: {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        }
      },
      Gradients: {
        "Primary-01 start": {
          value: "{Primitive Colors.Primary.600}",
          type: "color"
        },
        "Primary-01 end": {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Primary-02 start": {
          value: "{Primitive Colors.Tertiary.300}",
          type: "color"
        },
        "Primary-02 end": {
          value: "{Primitive Colors.Auxiliary.400}",
          type: "color"
        },
        "Secondary-01 start": {
          value: "{Primitive Colors.Tertiary.500}",
          type: "color"
        },
        "Secondary-01 end": {
          value: "{Primitive Colors.Primary.500}",
          type: "color"
        },
        "Secondary-02 start": {
          value: "{Primitive Colors.Primary.400}",
          type: "color"
        },
        "Secondary-02 end": {
          value: "{Primitive Colors.Secondary.400}",
          type: "color"
        },
        Overlay: {
          value: "#16181999",
          type: "color"
        }
      },
      Skeleton: {
        Start: {
          value: "#ffffff",
          type: "color"
        },
        End: {
          value: "#ffffff",
          type: "color"
        }
      }
    },
    Elevation: {
      Colors: {
        "Elevation-01": {
          value: "#24292e14",
          type: "color"
        },
        "Elevation-02": {
          value: "#24292e1f",
          type: "color"
        },
        "Elevation-03": {
          value: "#24292e29",
          type: "color"
        },
        "Elevation-04": {
          value: "#24292e3d",
          type: "color"
        },
        "Elevation-05": {
          value: "#24292e3d",
          type: "color"
        },
        "Elevation-06": {
          value: "#ffffff00",
          type: "color"
        }
      },
      X: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0rem",
          type: "dimension"
        }
      },
      Y: {
        "Elevation-01": {
          value: "0.0625rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0.125rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0.25rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0.25rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0.5rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0rem",
          type: "dimension"
        }
      },
      Blur: {
        "Elevation-01": {
          value: "0.125rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0.375rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "0.625rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "0.625rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "1rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0rem",
          type: "dimension"
        }
      },
      Spread: {
        "Elevation-01": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-02": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-03": {
          value: "-0.0625rem",
          type: "dimension"
        },
        "Elevation-04": {
          value: "-0.125rem",
          type: "dimension"
        },
        "Elevation-05": {
          value: "0rem",
          type: "dimension"
        },
        "Elevation-06": {
          value: "0rem",
          type: "dimension"
        }
      }
    },
    "Primitive Colors": {
      Auxiliary: {
        50: {
          value: "#fff5e8",
          type: "color"
        },
        100: {
          value: "#fdead1",
          type: "color"
        },
        150: {
          value: "#ffdfb2",
          type: "color"
        },
        200: {
          value: "#f8cb8b",
          type: "color"
        },
        300: {
          value: "#f4b965",
          type: "color"
        },
        400: {
          value: "#f1a02e",
          type: "color"
        },
        500: {
          value: "#ed8b00",
          type: "color"
        },
        600: {
          value: "#be6f00",
          type: "color"
        },
        700: {
          value: "#8e5300",
          type: "color"
        },
        800: {
          value: "#5f3800",
          type: "color"
        },
        850: {
          value: "#472a00",
          type: "color"
        },
        900: {
          value: "#2f1c00",
          type: "color"
        },
        950: {
          value: "#180e00",
          type: "color"
        }
      },
      Blue: {
        50: {
          value: "#ffffff00",
          type: "color"
        },
        100: {
          value: "#ffffff00",
          type: "color"
        },
        150: {
          value: "#ffffff00",
          type: "color"
        },
        200: {
          value: "#ffffff00",
          type: "color"
        },
        300: {
          value: "#ffffff00",
          type: "color"
        },
        400: {
          value: "#ffffff00",
          type: "color"
        },
        500: {
          value: "#ffffff00",
          type: "color"
        },
        600: {
          value: "#ffffff00",
          type: "color"
        },
        700: {
          value: "#ffffff00",
          type: "color"
        },
        800: {
          value: "#ffffff00",
          type: "color"
        },
        850: {
          value: "#ffffff00",
          type: "color"
        },
        900: {
          value: "#ffffff00",
          type: "color"
        },
        950: {
          value: "#ffffff00",
          type: "color"
        }
      },
      Cyan: {
        50: {
          value: "#ffffff00",
          type: "color"
        },
        100: {
          value: "#ffffff00",
          type: "color"
        },
        150: {
          value: "#ffffff00",
          type: "color"
        },
        200: {
          value: "#ffffff00",
          type: "color"
        },
        300: {
          value: "#ffffff00",
          type: "color"
        },
        400: {
          value: "#ffffff00",
          type: "color"
        },
        500: {
          value: "#ffffff00",
          type: "color"
        },
        600: {
          value: "#ffffff00",
          type: "color"
        },
        700: {
          value: "#ffffff00",
          type: "color"
        },
        800: {
          value: "#ffffff00",
          type: "color"
        },
        850: {
          value: "#ffffff00",
          type: "color"
        },
        900: {
          value: "#ffffff00",
          type: "color"
        },
        950: {
          value: "#ffffff00",
          type: "color"
        }
      },
      Gray: {
        50: {
          value: "#f4f5f6",
          type: "color"
        },
        100: {
          value: "#e6e8ea",
          type: "color"
        },
        150: {
          value: "#d9dcde",
          type: "color"
        },
        200: {
          value: "#cbcfd2",
          type: "color"
        },
        300: {
          value: "#bec2c6",
          type: "color"
        },
        400: {
          value: "#a2a9af",
          type: "color"
        },
        500: {
          value: "#878f97",
          type: "color"
        },
        600: {
          value: "#6c767f",
          type: "color"
        },
        700: {
          value: "#565e66",
          type: "color"
        },
        800: {
          value: "#41474c",
          type: "color"
        },
        850: {
          value: "#2b2f33",
          type: "color"
        },
        900: {
          value: "#202326",
          type: "color"
        },
        950: {
          value: "#161819",
          type: "color"
        }
      },
      Green: {
        50: {
          value: "#e5f4eb",
          type: "color"
        },
        100: {
          value: "#ccead7",
          type: "color"
        },
        150: {
          value: "#b2dfc4",
          type: "color"
        },
        200: {
          value: "#99d5b0",
          type: "color"
        },
        300: {
          value: "#66c088",
          type: "color"
        },
        400: {
          value: "#33ab61",
          type: "color"
        },
        500: {
          value: "#009639",
          type: "color"
        },
        600: {
          value: "#00782e",
          type: "color"
        },
        700: {
          value: "#005a22",
          type: "color"
        },
        800: {
          value: "#003c17",
          type: "color"
        },
        850: {
          value: "#002d11",
          type: "color"
        },
        900: {
          value: "#001e0b",
          type: "color"
        },
        950: {
          value: "#000f06",
          type: "color"
        }
      },
      Black: {
        value: "#000000",
        type: "color"
      },
      White: {
        value: "#ffffff",
        type: "color"
      },
      Orange: {
        50: {
          value: "#ffffff00",
          type: "color"
        },
        100: {
          value: "#ffffff00",
          type: "color"
        },
        150: {
          value: "#ffffff00",
          type: "color"
        },
        200: {
          value: "#ffffff00",
          type: "color"
        },
        300: {
          value: "#ffffff00",
          type: "color"
        },
        400: {
          value: "#ffffff00",
          type: "color"
        },
        500: {
          value: "#ffffff00",
          type: "color"
        },
        600: {
          value: "#ffffff00",
          type: "color"
        },
        700: {
          value: "#ffffff00",
          type: "color"
        },
        800: {
          value: "#ffffff00",
          type: "color"
        },
        850: {
          value: "#ffffff00",
          type: "color"
        },
        900: {
          value: "#ffffff00",
          type: "color"
        },
        950: {
          value: "#ffffff00",
          type: "color"
        }
      },
      Primary: {
        50: {
          value: "#f4faff",
          type: "color"
        },
        100: {
          value: "#dcecfb",
          type: "color"
        },
        150: {
          value: "#c3dff8",
          type: "color"
        },
        200: {
          value: "#92c4f0",
          type: "color"
        },
        300: {
          value: "#62a9e9",
          type: "color"
        },
        400: {
          value: "#318ee1",
          type: "color"
        },
        500: {
          value: "#0073da",
          type: "color"
        },
        600: {
          value: "#005cae",
          type: "color"
        },
        700: {
          value: "#004583",
          type: "color"
        },
        800: {
          value: "#002e57",
          type: "color"
        },
        850: {
          value: "#002341",
          type: "color"
        },
        900: {
          value: "#00172c",
          type: "color"
        },
        950: {
          value: "#000c16",
          type: "color"
        }
      },
      Purple: {
        50: {
          value: "#ffffff00",
          type: "color"
        },
        100: {
          value: "#ffffff00",
          type: "color"
        },
        150: {
          value: "#ffffff00",
          type: "color"
        },
        200: {
          value: "#ffffff00",
          type: "color"
        },
        300: {
          value: "#ffffff00",
          type: "color"
        },
        400: {
          value: "#ffffff00",
          type: "color"
        },
        500: {
          value: "#ffffff00",
          type: "color"
        },
        600: {
          value: "#ffffff00",
          type: "color"
        },
        700: {
          value: "#ffffff00",
          type: "color"
        },
        800: {
          value: "#ffffff00",
          type: "color"
        },
        850: {
          value: "#ffffff00",
          type: "color"
        },
        900: {
          value: "#ffffff00",
          type: "color"
        },
        950: {
          value: "#ffffff00",
          type: "color"
        }
      },
      Red: {
        50: {
          value: "#fbeae8",
          type: "color"
        },
        100: {
          value: "#f8d4d2",
          type: "color"
        },
        150: {
          value: "#f4bfbb",
          type: "color"
        },
        200: {
          value: "#f0a9a4",
          type: "color"
        },
        300: {
          value: "#e97f77",
          type: "color"
        },
        400: {
          value: "#e15449",
          type: "color"
        },
        500: {
          value: "#da291c",
          type: "color"
        },
        600: {
          value: "#ae2116",
          type: "color"
        },
        700: {
          value: "#831911",
          type: "color"
        },
        800: {
          value: "#57100b",
          type: "color"
        },
        850: {
          value: "#410c08",
          type: "color"
        },
        900: {
          value: "#2c0806",
          type: "color"
        },
        950: {
          value: "#160403",
          type: "color"
        }
      },
      Secondary: {
        50: {
          value: "#f8f3ff",
          type: "color"
        },
        100: {
          value: "#e9dbfb",
          type: "color"
        },
        150: {
          value: "#cbaaf2",
          type: "color"
        },
        200: {
          value: "#cbaaf2",
          type: "color"
        },
        300: {
          value: "#9d61e5",
          type: "color"
        },
        400: {
          value: "#7f31dd",
          type: "color"
        },
        500: {
          value: "#6100d4",
          type: "color"
        },
        600: {
          value: "#4e00aa",
          type: "color"
        },
        700: {
          value: "#3a007f",
          type: "color"
        },
        800: {
          value: "#270055",
          type: "color"
        },
        850: {
          value: "#1d0040",
          type: "color"
        },
        900: {
          value: "#13002a",
          type: "color"
        },
        950: {
          value: "#0a0015",
          type: "color"
        }
      },
      Tertiary: {
        50: {
          value: "#fffced",
          type: "color"
        },
        100: {
          value: "#fff9db",
          type: "color"
        },
        150: {
          value: "#fff6c9",
          type: "color"
        },
        200: {
          value: "#fff3b7",
          type: "color"
        },
        300: {
          value: "#ffed92",
          type: "color"
        },
        400: {
          value: "#ffe76e",
          type: "color"
        },
        500: {
          value: "#ffe14a",
          type: "color"
        },
        600: {
          value: "#ccb43b",
          type: "color"
        },
        700: {
          value: "#99872c",
          type: "color"
        },
        800: {
          value: "#665a1e",
          type: "color"
        },
        850: {
          value: "#4d4416",
          type: "color"
        },
        900: {
          value: "#332d0f",
          type: "color"
        },
        950: {
          value: "#1a1707",
          type: "color"
        }
      },
      Yellow: {
        50: {
          value: "#fff8ea",
          type: "color"
        },
        100: {
          value: "#fff1d5",
          type: "color"
        },
        150: {
          value: "#ffe9c0",
          type: "color"
        },
        200: {
          value: "#ffe2ab",
          type: "color"
        },
        300: {
          value: "#ffd481",
          type: "color"
        },
        400: {
          value: "#ffc557",
          type: "color"
        },
        500: {
          value: "#ffb72d",
          type: "color"
        },
        600: {
          value: "#cd9324",
          type: "color"
        },
        700: {
          value: "#9b6f1b",
          type: "color"
        },
        800: {
          value: "#684b12",
          type: "color"
        },
        850: {
          value: "#4f390e",
          type: "color"
        },
        900: {
          value: "#362709",
          type: "color"
        },
        950: {
          value: "#1d1505",
          type: "color"
        }
      }
    },
    Typography: {
      "Font Family": {
        Heading: {
          value: "Noto Sans",
          type: "text"
        },
        Body: {
          value: "Noto Sans",
          type: "text"
        }
      },
      "Font Weight": {
        Bold: {
          value: "Display Bold",
          type: "text"
        },
        Regular: {
          value: "Display Regular",
          type: "text"
        },
        Medium: {
          value: "Display Semibold",
          type: "text"
        }
      }
    },
    Spacing: {
      "spacing-4": {
        value: "0.25rem",
        type: "dimension"
      },
      "spacing-8": {
        value: "0.5rem",
        type: "dimension"
      },
      "spacing-16": {
        value: "1rem",
        type: "dimension"
      },
      "spacing-24": {
        value: "1.5rem",
        type: "dimension"
      },
      "spacing-32": {
        value: "2rem",
        type: "dimension"
      },
      "spacing-40": {
        value: "2.5rem",
        type: "dimension"
      },
      "spacing-48": {
        value: "3rem",
        type: "dimension"
      },
      "spacing-64": {
        value: "4rem",
        type: "dimension"
      },
      "spacing-80": {
        value: "5rem",
        type: "dimension"
      },
      "spacing-96": {
        value: "6rem",
        type: "dimension"
      },
      "spacing-160": {
        value: "10rem",
        type: "dimension"
      },
      "spacing-2": {
        value: "0.125rem",
        type: "dimension"
      },
      "spacing-0": {
        value: "0rem",
        type: "dimension"
      },
      "spacing-12": {
        value: "0.75rem",
        type: "dimension"
      }
    },
    "Corner radius": {
      "corner-radius-xsmall": {
        value: "{Spacing.spacing-8}",
        type: "dimension"
      },
      "corner-radius-small": {
        value: "{Spacing.spacing-12}",
        type: "dimension"
      },
      "corner-radius-large": {
        value: "{Spacing.spacing-160}",
        type: "dimension"
      },
      "corner-radius-medium": {
        value: "{Spacing.spacing-16}",
        type: "dimension"
      },
      "corner-radius-xxsmall": {
        value: "{Spacing.spacing-4}",
        type: "dimension"
      }
    },
    Border: {
      "border-1": {
        value: "0.0625rem",
        type: "dimension"
      },
      "border-2": {
        value: "0.125rem",
        type: "dimension"
      },
      "border-5": {
        value: "0.3125rem",
        type: "dimension"
      }
    }
  },
  "Viewport/Desktop-Peacock": {
    "Line Height": {
      Body: {
        value: "1.375rem",
        type: "dimension"
      },
      H1: {
        value: "4.25rem",
        type: "dimension"
      },
      H2: {
        value: "3.5rem",
        type: "dimension"
      },
      H3: {
        value: "2.75rem",
        type: "dimension"
      },
      H4: {
        value: "2.5rem",
        type: "dimension"
      },
      H5: {
        value: "2rem",
        type: "dimension"
      },
      H6: {
        value: "1.75rem",
        type: "dimension"
      },
      Small: {
        value: "1.25rem",
        type: "dimension"
      },
      XSmall: {
        value: "1.125rem",
        type: "dimension"
      },
      XXSmall: {
        value: "0.875rem",
        type: "dimension"
      }
    },
    "Font Size": {
      H1: {
        value: "3rem",
        type: "dimension"
      },
      H2: {
        value: "2.5rem",
        type: "dimension"
      },
      H3: {
        value: "2rem",
        type: "dimension"
      },
      H4: {
        value: "1.75rem",
        type: "dimension"
      },
      H5: {
        value: "1.5rem",
        type: "dimension"
      },
      H6: {
        value: "1.125rem",
        type: "dimension"
      },
      Body: {
        value: "1rem",
        type: "dimension"
      },
      Small: {
        value: "0.875rem",
        type: "dimension"
      },
      XSmall: {
        value: "0.75rem",
        type: "dimension"
      },
      XXSmall: {
        value: "0.625rem",
        type: "dimension"
      }
    }
  },
  "Viewport/Mobile-Peacock": {
    "Line Height": {
      Body: {
        value: "1.375rem",
        type: "dimension"
      },
      H1: {
        value: "2.75rem",
        type: "dimension"
      },
      H2: {
        value: "2.5rem",
        type: "dimension"
      },
      H3: {
        value: "2.125rem",
        type: "dimension"
      },
      H4: {
        value: "1.875rem",
        type: "dimension"
      },
      H5: {
        value: "1.75rem",
        type: "dimension"
      },
      H6: {
        value: "1.625rem",
        type: "dimension"
      },
      Small: {
        value: "1.25rem",
        type: "dimension"
      },
      XSmall: {
        value: "1.125rem",
        type: "dimension"
      },
      XXSmall: {
        value: "0.875rem",
        type: "dimension"
      }
    },
    "Font Size": {
      H1: {
        value: "2rem",
        type: "dimension"
      },
      H2: {
        value: "1.75rem",
        type: "dimension"
      },
      H3: {
        value: "1.5rem",
        type: "dimension"
      },
      H4: {
        value: "1.375rem",
        type: "dimension"
      },
      H5: {
        value: "1.25rem",
        type: "dimension"
      },
      H6: {
        value: "1.125rem",
        type: "dimension"
      },
      Body: {
        value: "1rem",
        type: "dimension"
      },
      Small: {
        value: "0.875rem",
        type: "dimension"
      },
      XSmall: {
        value: "0.75rem",
        type: "dimension"
      },
      XXSmall: {
        value: "0.625rem",
        type: "dimension"
      }
    }
  },
  "Viewport/Desktop-PepsiConnect": {
    "Line Height": {
      Body: {
        value: "1.5rem",
        type: "dimension"
      },
      H1: {
        value: "2.625rem",
        type: "dimension"
      },
      H2: {
        value: "2.25rem",
        type: "dimension"
      },
      H3: {
        value: "2rem",
        type: "dimension"
      },
      H4: {
        value: "1.75rem",
        type: "dimension"
      },
      H5: {
        value: "1.5rem",
        type: "dimension"
      },
      H6: {
        value: "1.25rem",
        type: "dimension"
      },
      Small: {
        value: "1.25rem",
        type: "dimension"
      },
      XSmall: {
        value: "1.125rem",
        type: "dimension"
      },
      XXSmall: {
        value: "0.875rem",
        type: "dimension"
      }
    },
    "Font Size": {
      H1: {
        value: "2rem",
        type: "dimension"
      },
      H2: {
        value: "1.625rem",
        type: "dimension"
      },
      H3: {
        value: "1.375rem",
        type: "dimension"
      },
      H4: {
        value: "1.125rem",
        type: "dimension"
      },
      H5: {
        value: "1rem",
        type: "dimension"
      },
      H6: {
        value: "0.875rem",
        type: "dimension"
      },
      Body: {
        value: "1rem",
        type: "dimension"
      },
      Small: {
        value: "0.875rem",
        type: "dimension"
      },
      XSmall: {
        value: "0.75rem",
        type: "dimension"
      },
      XXSmall: {
        value: "0.625rem",
        type: "dimension"
      }
    }
  },
  "Viewport/Mobile-PepsiConnect": {
    "Line Height": {
      Body: {
        value: "1.5rem",
        type: "dimension"
      },
      H1: {
        value: "2.375rem",
        type: "dimension"
      },
      H2: {
        value: "2rem",
        type: "dimension"
      },
      H3: {
        value: "1.75rem",
        type: "dimension"
      },
      H4: {
        value: "1.5rem",
        type: "dimension"
      },
      H5: {
        value: "1.25rem",
        type: "dimension"
      },
      H6: {
        value: "1.125rem",
        type: "dimension"
      },
      Small: {
        value: "1.25rem",
        type: "dimension"
      },
      XSmall: {
        value: "1.125rem",
        type: "dimension"
      },
      XXSmall: {
        value: "0.875rem",
        type: "dimension"
      }
    },
    "Font Size": {
      H1: {
        value: "1.75rem",
        type: "dimension"
      },
      H2: {
        value: "1.5rem",
        type: "dimension"
      },
      H3: {
        value: "1.25rem",
        type: "dimension"
      },
      H4: {
        value: "1rem",
        type: "dimension"
      },
      H5: {
        value: "0.875rem",
        type: "dimension"
      },
      H6: {
        value: "0.75rem",
        type: "dimension"
      },
      Body: {
        value: "1rem",
        type: "dimension"
      },
      Small: {
        value: "0.875rem",
        type: "dimension"
      },
      XSmall: {
        value: "0.75rem",
        type: "dimension"
      },
      XXSmall: {
        value: "0.625rem",
        type: "dimension"
      }
    }
  },
  themes: Sg,
  metadata: kg
}, Bg = {
  resolveReferences: !0,
  expandTypography: !0,
  expandShadow: !0,
  expandComposition: !0,
  expandBorder: !1,
  preserveRawValue: !1,
  throwErrorWhenNotResolved: !0
}, Tm = ({
  children: e,
  customStyles: a = {},
  defaultStyle: n = "Light-Peacock",
  isDarkTheme: s = !1
}) => {
  const i = Z(
    () => ({ ...jg, ...a }),
    [a]
  ), l = Z(() => {
    const f = [`Theme/${n}`, "Viewport/Desktop-Peacock"];
    return n === "PepsiConnect" && (f[1] = "Viewport/Desktop-PepsiConnect"), [...f, ...Object.keys(a)];
  }, [n, a]), d = Z(() => Ag.transformTokens(
    i,
    l,
    ["themes", "metadata"],
    // Excluded top-level keys
    Bg
  ), [i, l]);
  return ve(() => {
    const f = [
      "Elevation",
      "Typography",
      "Spacing",
      "Corner radius",
      "Line Height",
      "Font Size"
    ], u = document.documentElement, m = {}, g = (b, y = []) => {
      Object.entries(b).forEach(([p, v]) => {
        if (f.includes(p))
          return;
        const x = [...y];
        switch (p) {
          case "Primitive Colors":
            break;
          case "Tokens":
            x.push("color");
            break;
          default:
            x.push(
              p.replace(/\s+/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            );
        }
        if (v && typeof v == "object" && "value" in v) {
          const A = `--${x.join("-")}`;
          m[A] = v.value;
        } else typeof v == "object" && g(v, x);
      });
    };
    g(d), Object.entries(m).forEach(([b, y]) => {
      u.style.setProperty(b, y);
    });
  }, [d]), /* @__PURE__ */ t.jsx(Ln.Provider, { value: { isDark: !!s }, children: e });
}, Kt = ({
  className: e,
  disabled: a = !1,
  isDark: n,
  isShowLabel: s = !0,
  label: i,
  tooltip: l = {},
  type: d = "default",
  size: f = "medium",
  style: u,
  isShowIcon: m,
  icon: g,
  isShowDropdownIcon: b = !1,
  onClick: y,
  active: p = !1,
  showSkeleton: v = !1,
  containerClassName: x,
  ...A
}) => {
  const { isDark: S } = $(), k = Z(
    () => n ?? S,
    [n, S]
  ), E = j([
    "base-button",
    d,
    a ? s0 : "",
    k ? z : "",
    x ?? "",
    v ? "base-button-skeleton" : "",
    p ? "active" : ""
  ]), R = j([
    "base-button".concat("-", f),
    e ?? "",
    d,
    ...k ? [z, yn] : [vn],
    ...f === "small" ? [Qe] : [],
    ...f === "medium" ? [Qe] : [],
    vs,
    b ? "dropdown-icon" : "",
    p ? "active" : "",
    v ? "shimmer" : ""
  ]), V = {
    ...u ?? {}
  };
  return /* @__PURE__ */ t.jsx(
    w2,
    {
      isDark: k,
      ...l,
      text: l == null ? void 0 : l.text,
      children: /* @__PURE__ */ t.jsx(
        "div",
        {
          className: E,
          children: /* @__PURE__ */ t.jsxs(
            "button",
            {
              className: R,
              disabled: a,
              style: V,
              onClick: y,
              ...A,
              children: [
                m && g ? /* @__PURE__ */ t.jsx(
                  oe,
                  {
                    icon: typeof g == "string" ? g : void 0,
                    svg: typeof g != "string" ? g : void 0,
                    size: d === "naked" ? f : f === "large" ? "medium" : "small",
                    isDark: k,
                    className: "base-button-icon"
                  }
                ) : null,
                b && /* @__PURE__ */ t.jsx(
                  oe,
                  {
                    icon: "arrow_drop_down",
                    size: f === "large" ? "medium" : "small",
                    style: { marginLeft: -4 },
                    isDark: k
                  }
                ),
                s && i ? /* @__PURE__ */ t.jsx(
                  xe,
                  {
                    size: f === "small" ? "xsmall" : "small",
                    variant: p ? "bold" : "regular",
                    isDark: k,
                    className: j([
                      "base-button-text",
                      a ? "disabled" : "",
                      p ? "active" : ""
                    ]),
                    children: i
                  }
                ) : null
              ]
            }
          )
        }
      )
    }
  );
}, Eg = {
  tag: H6,
  button: J6,
  effects: $c,
  font: Wc,
  general: Ic,
  icon: eu,
  link: ru,
  misc: Jc,
  spacing: A6,
  tabs: au,
  tab: nu
};
export {
  ym as Accordion,
  Cm as AccordionItem,
  bm as AccordionItemV2,
  xm as AccordionV2,
  e9 as AppLogo,
  H2 as Avatar,
  C8 as Badge,
  Ug as Banner,
  Kt as BaseButton,
  Yg as BottomBar,
  $g as Breadcrumb,
  zs as BreakpointContext,
  Rg as BreakpointContextProvider,
  Le as Button,
  Wg as ButtonGroup,
  Ys as ButtonHierarchyUtility,
  Ft as ButtonIcon,
  Xg as ButtonMenu,
  wm as Calendar,
  Am as Card,
  Sm as CardNavigation,
  km as Carousel,
  A2 as Checkbox,
  Zg as CheckboxGroup,
  K7 as Colors,
  Vg as Column,
  Kg as ContactDetails,
  I8 as ContentGroup,
  L8 as ContentGroupDetail,
  R8 as ContentGroupTitle,
  Jg as DashboardCard,
  jm as DataTable,
  qg as DatePickerInput,
  Xs as DatePickerMenu,
  em as DateRangePicker,
  Nt as DefaultBreakpoints,
  i8 as DefaultPalette,
  A1 as Divider,
  Yf as Dot,
  an as Dropdown,
  g2 as DropdownListItem,
  Bm as EmptyState,
  yt as Feedback,
  tm as File,
  _8 as FileFormat,
  E9 as Filter,
  rm as FilterDropdownMenuList,
  Ng as Flex,
  xe as Font,
  Pg as Grid,
  Em as Header,
  om as HeaderAppSwitcher,
  vm as HeaderNotificationPanel,
  nm as HeaderSearch,
  oe as Icon,
  am as ImagePreview,
  fo as InputItem,
  J7 as Intensity,
  ht as ItemType,
  ut as Label,
  _g as Legend,
  U0 as Link,
  Ks as List,
  Dm as ListV2,
  qo as ListV2ListItem,
  Mm as ListV2RightAccessory,
  x8 as LoadingSpinner,
  Og as Logo,
  Vt as MenuList,
  Wr as MenuListItem,
  sm as Modal,
  of as Notification,
  $f as NotificationImage,
  Wf as NotificationImageDark,
  Hm as NotificationMenu,
  nf as NotificationType,
  im as OnboardingModal,
  lm as OnboardingPopover,
  Tg as Page,
  cm as PageHeader,
  Rm as PageNavigation,
  ff as Pagination,
  Ln as PaletteContext,
  Lg as PaletteContextProvider,
  J8 as PepsicoLogo,
  q8 as PepsicoSymbol,
  Gg as Pictograms,
  Qg as Placeholder,
  R2 as Popover,
  Lm as ProfileMenu,
  j9 as ProgressBar,
  um as ProgressIndicator,
  u9 as Radio,
  Nn as RadioItem,
  uo as Search,
  t9 as ServiceDesignLogo,
  Im as SideBar,
  _1 as SideBarItem,
  Nm as SideNav,
  gg as SideNavItem,
  Pm as Sidepanel,
  dm as Slider,
  zg as Slot,
  Fg as Space,
  fm as StickyBar,
  d9 as Switcher,
  Et as Tab,
  rr as TabsNavigation,
  X0 as Tag,
  pm as TextArea,
  If as TextInput,
  Tm as ThemeProvider,
  gm as Tile,
  mm as TimePicker,
  hm as ToastContainer,
  f9 as Toggle,
  m2 as ToolBar,
  w2 as Tooltip,
  Vm as WebsiteHeader,
  Uf as calculateDateString,
  Hg as colors,
  y1 as getWindowDimensions,
  C1 as getWindowScroll,
  j as stir,
  Eg as tokens,
  l8 as useBodyScrollLock,
  lo as useBreakpointContext,
  In as useDeprecatedWarning,
  $ as usePaletteContext,
  r8 as useWindowDimensions,
  Ig as useWindowMessage,
  o8 as useWindowScroll
};
