console.log(
  "\x1B[33m%s\x1B[0m",
  ""
  );
console.log(
  "\x1B[33m%s\x1B[0m",
  " [[ BILAL XD ]]  "
);
console.log(
  "\x1B[33m%s\x1B[0m",
  " [[ OWNER OF XD BRAND ]] "
);
const prompt = require("prompt"),
  fs = require("fs"),
  axios = require("axios"),
  login = require("fca-unofficial"),
  userAgents = [
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36",
  ],
  https = require("https"),
  agent = new https.Agent({ rejectUnauthorized: false });
prompt.start();
prompt.get(
  [
    "username",
    "IdNAME",
    "IdNAME2",
    "IdNAME3",
    "IdNAME4",
    "IdNAME5",
    "IdNAME6",
    "IdNAME7",
    "IdNAME8",
  ],
  function (error, data) {
    if (error) {
      return onErr(error);
    }
    // const userName = data.username.trim();
    // userName === ""
    //   ? (console.log("Username can't be empty. Please try again."),
    //     process.exit(1))
    //   : checkPermission(userName, data);
    checkPermission("", data);
  }
);
function checkPermission(e, t) {
  // axios.get("https://pastebin.com/raw/hH7Ay3bv").then((r) => {
  // let l = r.data
  // .split("\n")
  // .map((e) => e.trim())
  // .filter((t) => t.includes(e));
  // if (0 === l.length)
  //   console.log("Sorry, you don't have permission to run this script."),
  //     process.exit(1);
  // else {
  let s = [
      JSON.parse(fs.readFileSync("" + t.IdNAME, "utf8")),
      JSON.parse(fs.readFileSync("" + t.IdNAME2 || "" + t.IdNAME, "utf8")),
      JSON.parse(fs.readFileSync("" + t.IdNAME3 || "" + t.IdNAME, "utf8")),
      JSON.parse(fs.readFileSync("" + t.IdNAME4 || "" + t.IdNAME, "utf8")),
      JSON.parse(fs.readFileSync("" + t.IdNAME5 || "" + t.IdNAME, "utf8")),
      JSON.parse(fs.readFileSync("" + t.IdNAME6 || "" + t.IdNAME, "utf8")),
      JSON.parse(fs.readFileSync("" + t.IdNAME7 || "" + t.IdNAME, "utf8")),
      JSON.parse(fs.readFileSync("" + t.IdNAME8 || "" + t.IdNAME, "utf8")),
    ],
    i = [];
  s.forEach((e, t) => {
    !(function e(t, r) {
      login(
        {
          appState: t,
          userAgent: userAgents[r],
          forceLogin: !0,
          httpOptions: { agent: agent },
        },
        (l, s) => {
          l
            ? (console.log(
                "Error logging in with account " + (r + 1) + ", retrying..."
              ),
              e(t, r))
            : (i[r] = s);
        }
      );
    })(e, t);
  });
  let n = 0;
  prompt.get(["Select20targetIDs"], function (e, t) {
    if (e) return onErr(e);
    switch (t.Select20targetIDs) {
      case "1":
        prompt.get(["targetID", "short", "file", "timer"], function (e, t) {
          if (e) return onErr(e);
          let r = fs.readFileSync(t.file, "utf8").split("\n").filter(Boolean),
            l = 0;
          setInterval(() => {
            let e = t.short + r[l];
            i[n].sendMessage(e, t.targetID, () => {}),
              ++l >= r.length && (l = 0),
              ++n === i.length && (n = 0),
              ++n === i.length && (n = 0);
          }, t.timer + "000");
        });
        break;
      case "2":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = 0,
              a = 0;
            setInterval(() => {
              let e = t.short + r[s],
                g = t.short2 + l[a];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(g, t.targetID2, () => {}),
                s++,
                a++,
                s >= r.length && (s = 0),
                a >= l.length && (a = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "3":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = 0,
              g = 0,
              f = 0;
            setInterval(() => {
              let e = t.short + r[a],
                h = t.short2 + l[g],
                $ = t.short3 + s[f];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(h, t.targetID2, () => {}),
                i[n].sendMessage($, t.targetID3, () => {}),
                a++,
                g++,
                f++,
                a >= r.length && (a = 0),
                g >= l.length && (g = 0),
                f >= s.length && (f = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "4":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = 0,
              f = 0,
              h = 0,
              $ = 0;
            setInterval(() => {
              let e = t.short + r[g],
                o = t.short2 + l[f],
                d = t.short3 + s[h],
                I = t.short4 + a[$];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(o, t.targetID2, () => {}),
                i[n].sendMessage(d, t.targetID3, () => {}),
                i[n].sendMessage(I, t.targetID4, () => {}),
                g++,
                f++,
                h++,
                $++,
                g >= r.length && (g = 0),
                f >= l.length && (f = 0),
                h >= s.length && (h = 0),
                $ >= a.length && ($ = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "5":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = 0,
              h = 0,
              $ = 0,
              o = 0,
              d = 0;
            setInterval(() => {
              let e = t.short + r[f],
                I = t.short2 + l[h],
                D = t.short3 + s[$],
                _ = t.short4 + a[o],
                c = t.short5 + g[d];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(I, t.targetID2, () => {}),
                i[n].sendMessage(D, t.targetID3, () => {}),
                i[n].sendMessage(_, t.targetID4, () => {}),
                i[n].sendMessage(c, t.targetID5, () => {}),
                f++,
                h++,
                $++,
                o++,
                d++,
                f >= r.length && (f = 0),
                h >= l.length && (h = 0),
                $ >= s.length && ($ = 0),
                o >= a.length && (o = 0),
                d >= g.length && (d = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "6":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "targetID6",
            "short6",
            "file6",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = fs.readFileSync(t.file6, "utf8").split("\n").filter(Boolean),
              h = 0,
              $ = 0,
              o = 0,
              d = 0,
              I = 0,
              D = 0;
            setInterval(() => {
              let e = t.short + r[h],
                _ = t.short2 + l[$],
                c = t.short3 + s[o],
                u = t.short4 + a[d],
                p = t.short5 + g[I],
                y = t.short6 + f[D];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(_, t.targetID2, () => {}),
                i[n].sendMessage(c, t.targetID3, () => {}),
                i[n].sendMessage(u, t.targetID4, () => {}),
                i[n].sendMessage(p, t.targetID5, () => {}),
                i[n].sendMessage(y, t.targetID6, () => {}),
                h++,
                $++,
                o++,
                d++,
                I++,
                D++,
                h >= r.length && (h = 0),
                $ >= l.length && ($ = 0),
                o >= s.length && (o = 0),
                d >= a.length && (d = 0),
                I >= g.length && (I = 0),
                D >= f.length && (D = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "7":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "targetID6",
            "short6",
            "file6",
            "targetID7",
            "short7",
            "file7",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = fs.readFileSync(t.file6, "utf8").split("\n").filter(Boolean),
              h = fs.readFileSync(t.file7, "utf8").split("\n").filter(Boolean),
              $ = 0,
              o = 0,
              d = 0,
              I = 0,
              D = 0,
              _ = 0,
              c = 0;
            setInterval(() => {
              let e = t.short + r[$],
                u = t.short2 + l[o],
                p = t.short3 + s[d],
                y = t.short4 + a[I],
                S = t.short5 + g[D],
                F = t.short6 + f[_],
                M = t.short7 + f[_];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(u, t.targetID2, () => {}),
                i[n].sendMessage(p, t.targetID3, () => {}),
                i[n].sendMessage(y, t.targetID4, () => {}),
                i[n].sendMessage(S, t.targetID5, () => {}),
                i[n].sendMessage(F, t.targetID6, () => {}),
                i[n].sendMessage(M, t.targetID7, () => {}),
                $++,
                o++,
                d++,
                I++,
                D++,
                _++,
                c++,
                $ >= r.length && ($ = 0),
                o >= l.length && (o = 0),
                d >= s.length && (d = 0),
                I >= a.length && (I = 0),
                D >= g.length && (D = 0),
                _ >= f.length && (_ = 0),
                c >= h.length && (c = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "8":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "targetID6",
            "short6",
            "file6",
            "targetID7",
            "short7",
            "file7",
            "targetID8",
            "short8",
            "file8",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = fs.readFileSync(t.file6, "utf8").split("\n").filter(Boolean),
              h = fs.readFileSync(t.file7, "utf8").split("\n").filter(Boolean),
              $ = fs.readFileSync(t.file8, "utf8").split("\n").filter(Boolean),
              o = 0,
              d = 0,
              I = 0,
              D = 0,
              _ = 0,
              c = 0,
              u = 0,
              p = 0;
            setInterval(() => {
              let e = t.short + r[o],
                y = t.short2 + l[d],
                S = t.short3 + s[I],
                F = t.short4 + a[D],
                M = t.short5 + g[_],
                m = t.short6 + f[c],
                b = t.short7 + h[u],
                k = t.short8 + $[p];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(y, t.targetID2, () => {}),
                i[n].sendMessage(S, t.targetID3, () => {}),
                i[n].sendMessage(F, t.targetID4, () => {}),
                i[n].sendMessage(M, t.targetID5, () => {}),
                i[n].sendMessage(m, t.targetID6, () => {}),
                i[n].sendMessage(b, t.targetID7, () => {}),
                i[n].sendMessage(k, t.targetID8, () => {}),
                o++,
                d++,
                I++,
                D++,
                _++,
                c++,
                u++,
                p++,
                o >= r.length && (o = 0),
                d >= l.length && (d = 0),
                I >= s.length && (I = 0),
                D >= a.length && (D = 0),
                _ >= g.length && (_ = 0),
                c >= f.length && (c = 0),
                u >= h.length && (u = 0),
                p >= $.length && (p = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "9":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "targetID6",
            "short6",
            "file6",
            "targetID7",
            "short7",
            "file7",
            "targetID8",
            "short8",
            "file8",
            "targetID9",
            "short9",
            "file9",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = fs.readFileSync(t.file6, "utf8").split("\n").filter(Boolean),
              h = fs.readFileSync(t.file7, "utf8").split("\n").filter(Boolean),
              $ = fs.readFileSync(t.file8, "utf8").split("\n").filter(Boolean),
              o = fs.readFileSync(t.file9, "utf8").split("\n").filter(Boolean),
              d = 0,
              I = 0,
              D = 0,
              _ = 0,
              c = 0,
              u = 0,
              p = 0,
              y = 0,
              S = 0;
            setInterval(() => {
              let e = t.short + r[d],
                F = t.short2 + l[I],
                M = t.short3 + s[D],
                m = t.short4 + a[_],
                b = t.short5 + g[c],
                k = t.short6 + f[u],
                A = t.short7 + h[p],
                E = t.short8 + $[y],
                N = t.short9 + o[S];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(F, t.targetID2, () => {}),
                i[n].sendMessage(M, t.targetID3, () => {}),
                i[n].sendMessage(m, t.targetID4, () => {}),
                i[n].sendMessage(b, t.targetID5, () => {}),
                i[n].sendMessage(k, t.targetID6, () => {}),
                i[n].sendMessage(A, t.targetID7, () => {}),
                i[n].sendMessage(E, t.targetID8, () => {}),
                i[n].sendMessage(N, t.targetID9, () => {}),
                d++,
                I++,
                D++,
                _++,
                c++,
                u++,
                p++,
                y++,
                S++,
                d >= r.length && (d = 0),
                I >= l.length && (I = 0),
                D >= s.length && (D = 0),
                _ >= a.length && (_ = 0),
                c >= g.length && (c = 0),
                u >= f.length && (u = 0),
                p >= h.length && (p = 0),
                y >= $.length && (y = 0),
                S >= o.length && (S = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "10":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "targetID6",
            "short6",
            "file6",
            "targetID7",
            "short7",
            "file7",
            "targetID8",
            "short8",
            "file8",
            "targetID9",
            "short9",
            "file9",
            "targetID10",
            "short10",
            "file10",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = fs.readFileSync(t.file6, "utf8").split("\n").filter(Boolean),
              h = fs.readFileSync(t.file7, "utf8").split("\n").filter(Boolean),
              $ = fs.readFileSync(t.file8, "utf8").split("\n").filter(Boolean),
              o = fs.readFileSync(t.file9, "utf8").split("\n").filter(Boolean),
              d = fs.readFileSync(t.file10, "utf8").split("\n").filter(Boolean),
              I = 0,
              D = 0,
              _ = 0,
              c = 0,
              u = 0,
              p = 0,
              y = 0,
              S = 0,
              F = 0,
              M = 0;
            setInterval(() => {
              let e = t.short + r[I],
                m = t.short2 + l[D],
                b = t.short3 + s[_],
                k = t.short4 + a[c],
                A = t.short5 + g[u],
                E = t.short6 + f[p],
                N = t.short7 + h[y],
                v = t.short8 + $[S],
                w = t.short9 + o[F],
                x = t.short10 + d[M];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(m, t.targetID2, () => {}),
                i[n].sendMessage(b, t.targetID3, () => {}),
                i[n].sendMessage(k, t.targetID4, () => {}),
                i[n].sendMessage(A, t.targetID5, () => {}),
                i[n].sendMessage(E, t.targetID6, () => {}),
                i[n].sendMessage(N, t.targetID7, () => {}),
                i[n].sendMessage(v, t.targetID8, () => {}),
                i[n].sendMessage(w, t.targetID9, () => {}),
                i[n].sendMessage(x, t.targetID10, () => {}),
                I++,
                D++,
                _++,
                c++,
                u++,
                p++,
                y++,
                S++,
                F++,
                M++,
                I >= r.length && (I = 0),
                D >= l.length && (D = 0),
                _ >= s.length && (_ = 0),
                c >= a.length && (c = 0),
                u >= g.length && (u = 0),
                p >= f.length && (p = 0),
                y >= h.length && (y = 0),
                S >= $.length && (S = 0),
                F >= o.length && (F = 0),
                M >= d.length && (M = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "11":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "targetID6",
            "short6",
            "file6",
            "targetID7",
            "short7",
            "file7",
            "targetID8",
            "short8",
            "file8",
            "targetID9",
            "short9",
            "file9",
            "targetID10",
            "short10",
            "file10",
            "targetID11",
            "short11",
            "file11",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = fs.readFileSync(t.file6, "utf8").split("\n").filter(Boolean),
              h = fs.readFileSync(t.file7, "utf8").split("\n").filter(Boolean),
              $ = fs.readFileSync(t.file8, "utf8").split("\n").filter(Boolean),
              o = fs.readFileSync(t.file9, "utf8").split("\n").filter(Boolean),
              d = fs.readFileSync(t.file10, "utf8").split("\n").filter(Boolean),
              I = fs.readFileSync(t.file11, "utf8").split("\n").filter(Boolean),
              D = 0,
              _ = 0,
              c = 0,
              u = 0,
              p = 0,
              y = 0,
              S = 0,
              F = 0,
              M = 0,
              m = 0,
              b = 0;
            setInterval(() => {
              let e = t.short + r[D],
                k = t.short2 + l[_],
                A = t.short3 + s[c],
                E = t.short4 + a[u],
                N = t.short5 + g[p],
                v = t.short6 + f[y],
                w = t.short7 + h[S],
                x = t.short8 + $[F],
                H = t.short9 + o[M],
                L = t.short10 + d[m],
                O = t.short11 + I[b];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(k, t.targetID2, () => {}),
                i[n].sendMessage(A, t.targetID3, () => {}),
                i[n].sendMessage(E, t.targetID4, () => {}),
                i[n].sendMessage(N, t.targetID5, () => {}),
                i[n].sendMessage(v, t.targetID6, () => {}),
                i[n].sendMessage(w, t.targetID7, () => {}),
                i[n].sendMessage(x, t.targetID8, () => {}),
                i[n].sendMessage(H, t.targetID9, () => {}),
                i[n].sendMessage(L, t.targetID10, () => {}),
                i[n].sendMessage(O, t.targetID10, () => {}),
                D++,
                _++,
                c++,
                u++,
                p++,
                y++,
                S++,
                F++,
                M++,
                m++,
                b++,
                D >= r.length && (D = 0),
                _ >= l.length && (_ = 0),
                c >= s.length && (c = 0),
                u >= a.length && (u = 0),
                p >= g.length && (p = 0),
                y >= f.length && (y = 0),
                S >= h.length && (S = 0),
                F >= $.length && (F = 0),
                M >= o.length && (M = 0),
                m >= d.length && (m = 0),
                b >= I.length && (b = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "12":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "targetID6",
            "short6",
            "file6",
            "targetID7",
            "short7",
            "file7",
            "targetID8",
            "short8",
            "file8",
            "targetID9",
            "short9",
            "file9",
            "targetID10",
            "short10",
            "file10",
            "targetID11",
            "short11",
            "file11",
            "targetID12",
            "short12",
            "file12",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = fs.readFileSync(t.file6, "utf8").split("\n").filter(Boolean),
              h = fs.readFileSync(t.file7, "utf8").split("\n").filter(Boolean),
              $ = fs.readFileSync(t.file8, "utf8").split("\n").filter(Boolean),
              o = fs.readFileSync(t.file9, "utf8").split("\n").filter(Boolean),
              d = fs.readFileSync(t.file10, "utf8").split("\n").filter(Boolean),
              I = fs.readFileSync(t.file11, "utf8").split("\n").filter(Boolean),
              D = fs.readFileSync(t.file12, "utf8").split("\n").filter(Boolean),
              _ = 0,
              c = 0,
              u = 0,
              p = 0,
              y = 0,
              S = 0,
              F = 0,
              M = 0,
              m = 0,
              b = 0,
              k = 0,
              A = 0;
            setInterval(() => {
              let e = t.short + r[_],
                E = t.short2 + l[c],
                N = t.short3 + s[u],
                v = t.short4 + a[p],
                w = t.short5 + g[y],
                x = t.short6 + f[S],
                H = t.short7 + h[F],
                L = t.short8 + $[M],
                O = t.short9 + o[m],
                P = t.short10 + d[b],
                j = t.short11 + I[k],
                q = t.short12 + D[A];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(E, t.targetID2, () => {}),
                i[n].sendMessage(N, t.targetID3, () => {}),
                i[n].sendMessage(v, t.targetID4, () => {}),
                i[n].sendMessage(w, t.targetID5, () => {}),
                i[n].sendMessage(x, t.targetID6, () => {}),
                i[n].sendMessage(H, t.targetID7, () => {}),
                i[n].sendMessage(L, t.targetID8, () => {}),
                i[n].sendMessage(O, t.targetID9, () => {}),
                i[n].sendMessage(P, t.targetID10, () => {}),
                i[n].sendMessage(j, t.targetID11, () => {}),
                i[n].sendMessage(q, t.targetID12, () => {}),
                _++,
                c++,
                u++,
                p++,
                y++,
                S++,
                F++,
                M++,
                m++,
                b++,
                k++,
                A++,
                _ >= r.length && (_ = 0),
                c >= l.length && (c = 0),
                u >= s.length && (u = 0),
                p >= a.length && (p = 0),
                y >= g.length && (y = 0),
                S >= f.length && (S = 0),
                F >= h.length && (F = 0),
                M >= $.length && (M = 0),
                m >= o.length && (m = 0),
                b >= d.length && (b = 0),
                k >= I.length && (k = 0),
                A >= D.length && (A = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
      case "13":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "targetID6",
            "short6",
            "file6",
            "targetID7",
            "short7",
            "file7",
            "targetID8",
            "short8",
            "file8",
            "targetID9",
            "short9",
            "file9",
            "targetID10",
            "short10",
            "file10",
            "targetID11",
            "short11",
            "file11",
            "targetID12",
            "short12",
            "file12",
            "targetID13",
            "short13",
            "short13",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = fs.readFileSync(t.file6, "utf8").split("\n").filter(Boolean),
              h = fs.readFileSync(t.file7, "utf8").split("\n").filter(Boolean),
              $ = fs.readFileSync(t.file8, "utf8").split("\n").filter(Boolean),
              o = fs.readFileSync(t.file9, "utf8").split("\n").filter(Boolean),
              d = fs.readFileSync(t.file10, "utf8").split("\n").filter(Boolean),
              I = fs.readFileSync(t.file11, "utf8").split("\n").filter(Boolean),
              D = fs.readFileSync(t.file12, "utf8").split("\n").filter(Boolean),
              _ = fs.readFileSync(t.file13, "utf8").split("\n").filter(Boolean),
              c = 0,
              u = 0,
              p = 0,
              y = 0,
              S = 0,
              F = 0,
              M = 0,
              m = 0,
              b = 0,
              k = 0,
              A = 0,
              E = 0,
              N = 0;
            setInterval(() => {
              let e = t.short + r[c],
                v = t.short2 + l[u],
                w = t.short3 + s[p],
                x = t.short4 + a[y],
                H = t.short5 + g[S],
                L = t.short6 + f[F],
                O = t.short7 + h[M],
                P = t.short8 + $[m],
                j = t.short9 + o[b],
                q = t.short10 + d[k],
                z = t.short11 + I[A],
                B = t.short12 + D[E],
                C = t.short13 + _[N];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(v, t.targetID2, () => {}),
                i[n].sendMessage(w, t.targetID3, () => {}),
                i[n].sendMessage(x, t.targetID4, () => {}),
                i[n].sendMessage(H, t.targetID5, () => {}),
                i[n].sendMessage(L, t.targetID6, () => {}),
                i[n].sendMessage(O, t.targetID7, () => {}),
                i[n].sendMessage(P, t.targetID8, () => {}),
                i[n].sendMessage(j, t.targetID9, () => {}),
                i[n].sendMessage(q, t.targetID10, () => {}),
                i[n].sendMessage(z, t.targetID11, () => {}),
                i[n].sendMessage(B, t.targetID12, () => {}),
                i[n].sendMessage(C, t.targetID13, () => {}),
                c++,
                u++,
                p++,
                y++,
                S++,
                F++,
                M++,
                m++,
                b++,
                k++,
                A++,
                E++,
                N++,
                c >= r.length && (c = 0),
                u >= l.length && (u = 0),
                p >= s.length && (p = 0),
                y >= a.length && (y = 0),
                S >= g.length && (S = 0),
                F >= f.length && (F = 0),
                M >= h.length && (M = 0),
                m >= $.length && (m = 0),
                b >= o.length && (b = 0),
                k >= d.length && (k = 0),
                A >= I.length && (A = 0),
                E >= D.length && (E = 0),
                N >= _.length && (N = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "14":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "targetID6",
            "short6",
            "file6",
            "targetID7",
            "short7",
            "file7",
            "targetID8",
            "short8",
            "file8",
            "targetID9",
            "short9",
            "file9",
            "targetID10",
            "short10",
            "file10",
            "targetID11",
            "short11",
            "file11",
            "targetID12",
            "short12",
            "file12",
            "targetID13",
            "short13",
            "short13",
            "targetID14",
            "short14",
            "file14",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = fs.readFileSync(t.file6, "utf8").split("\n").filter(Boolean),
              h = fs.readFileSync(t.file7, "utf8").split("\n").filter(Boolean),
              $ = fs.readFileSync(t.file8, "utf8").split("\n").filter(Boolean),
              o = fs.readFileSync(t.file9, "utf8").split("\n").filter(Boolean),
              d = fs.readFileSync(t.file10, "utf8").split("\n").filter(Boolean),
              I = fs.readFileSync(t.file11, "utf8").split("\n").filter(Boolean),
              D = fs.readFileSync(t.file12, "utf8").split("\n").filter(Boolean),
              _ = fs.readFileSync(t.file13, "utf8").split("\n").filter(Boolean),
              c = fs.readFileSync(t.file14, "utf8").split("\n").filter(Boolean),
              u = 0,
              p = 0,
              y = 0,
              S = 0,
              F = 0,
              M = 0,
              m = 0,
              b = 0,
              k = 0,
              A = 0,
              E = 0,
              N = 0,
              v = 0,
              w = 0;
            setInterval(() => {
              let e = t.short + r[u],
                x = t.short2 + l[p],
                H = t.short3 + s[y],
                L = t.short4 + a[S],
                O = t.short5 + g[F],
                P = t.short6 + f[M],
                j = t.short7 + h[m],
                q = t.short8 + $[b],
                z = t.short9 + o[k],
                B = t.short10 + d[A],
                C = t.short11 + I[E],
                G = t.short12 + D[N],
                J = t.short13 + _[v],
                K = t.short14 + c[w];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(x, t.targetID2, () => {}),
                i[n].sendMessage(H, t.targetID3, () => {}),
                i[n].sendMessage(L, t.targetID4, () => {}),
                i[n].sendMessage(O, t.targetID5, () => {}),
                i[n].sendMessage(P, t.targetID6, () => {}),
                i[n].sendMessage(j, t.targetID7, () => {}),
                i[n].sendMessage(q, t.targetID8, () => {}),
                i[n].sendMessage(z, t.targetID9, () => {}),
                i[n].sendMessage(B, t.targetID10, () => {}),
                i[n].sendMessage(C, t.targetID11, () => {}),
                i[n].sendMessage(G, t.targetID12, () => {}),
                i[n].sendMessage(J, t.targetID13, () => {}),
                i[n].sendMessage(K, t.targetID14, () => {}),
                u++,
                p++,
                y++,
                S++,
                F++,
                M++,
                m++,
                b++,
                k++,
                A++,
                E++,
                N++,
                v++,
                w++,
                u >= r.length && (u = 0),
                p >= l.length && (p = 0),
                y >= s.length && (y = 0),
                S >= a.length && (S = 0),
                F >= g.length && (F = 0),
                M >= f.length && (M = 0),
                m >= h.length && (m = 0),
                b >= $.length && (b = 0),
                k >= o.length && (k = 0),
                A >= d.length && (A = 0),
                E >= I.length && (E = 0),
                N >= D.length && (N = 0),
                v >= _.length && (v = 0),
                w >= c.length && (w = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      case "14":
        prompt.get(
          [
            "targetID",
            "short",
            "file1",
            "targetID2",
            "short2",
            "file2",
            "targetID3",
            "short3",
            "file3",
            "targetID4",
            "short4",
            "file4",
            "targetID5",
            "short5",
            "file5",
            "targetID6",
            "short6",
            "file6",
            "targetID7",
            "short7",
            "file7",
            "targetID8",
            "short8",
            "file8",
            "targetID9",
            "short9",
            "file9",
            "targetID10",
            "short10",
            "file10",
            "targetID11",
            "short11",
            "file11",
            "targetID12",
            "short12",
            "file12",
            "targetID13",
            "short13",
            "short13",
            "targetID14",
            "short14",
            "file14",
            "targetID15",
            "short15",
            "file15",
            "timer",
          ],
          function (e, t) {
            if (e) return onErr(e);
            let r = fs
                .readFileSync(t.file1, "utf8")
                .split("\n")
                .filter(Boolean),
              l = fs.readFileSync(t.file2, "utf8").split("\n").filter(Boolean),
              s = fs.readFileSync(t.file3, "utf8").split("\n").filter(Boolean),
              a = fs.readFileSync(t.file4, "utf8").split("\n").filter(Boolean),
              g = fs.readFileSync(t.file5, "utf8").split("\n").filter(Boolean),
              f = fs.readFileSync(t.file6, "utf8").split("\n").filter(Boolean),
              h = fs.readFileSync(t.file7, "utf8").split("\n").filter(Boolean),
              $ = fs.readFileSync(t.file8, "utf8").split("\n").filter(Boolean),
              o = fs.readFileSync(t.file9, "utf8").split("\n").filter(Boolean),
              d = fs.readFileSync(t.file10, "utf8").split("\n").filter(Boolean),
              I = fs.readFileSync(t.file11, "utf8").split("\n").filter(Boolean),
              D = fs.readFileSync(t.file12, "utf8").split("\n").filter(Boolean),
              _ = fs.readFileSync(t.file13, "utf8").split("\n").filter(Boolean),
              c = fs.readFileSync(t.file14, "utf8").split("\n").filter(Boolean),
              u = fs.readFileSync(t.file15, "utf8").split("\n").filter(Boolean),
              p = 0,
              y = 0,
              S = 0,
              F = 0,
              M = 0,
              m = 0,
              b = 0,
              k = 0,
              A = 0,
              E = 0,
              N = 0,
              v = 0,
              w = 0,
              x = 0,
              H = 0;
            setInterval(() => {
              let e = t.short + r[p],
                L = t.short2 + l[y],
                O = t.short3 + s[S],
                P = t.short4 + a[F],
                j = t.short5 + g[M],
                q = t.short6 + f[m],
                z = t.short7 + h[b],
                B = t.short8 + $[k],
                C = t.short9 + o[A],
                G = t.short10 + d[E],
                J = t.short11 + I[N],
                K = t.short12 + D[v],
                Q = t.short13 + _[w],
                R = t.short14 + c[x],
                T = t.short15 + u[H];
              i[n].sendMessage(e, t.targetID, () => {}),
                i[n].sendMessage(L, t.targetID2, () => {}),
                i[n].sendMessage(O, t.targetID3, () => {}),
                i[n].sendMessage(P, t.targetID4, () => {}),
                i[n].sendMessage(j, t.targetID5, () => {}),
                i[n].sendMessage(q, t.targetID6, () => {}),
                i[n].sendMessage(z, t.targetID7, () => {}),
                i[n].sendMessage(B, t.targetID8, () => {}),
                i[n].sendMessage(C, t.targetID9, () => {}),
                i[n].sendMessage(G, t.targetID10, () => {}),
                i[n].sendMessage(J, t.targetID11, () => {}),
                i[n].sendMessage(K, t.targetID12, () => {}),
                i[n].sendMessage(Q, t.targetID13, () => {}),
                i[n].sendMessage(R, t.targetID14, () => {}),
                i[n].sendMessage(T, t.targetID15, () => {}),
                p++,
                y++,
                S++,
                F++,
                M++,
                m++,
                b++,
                k++,
                A++,
                E++,
                N++,
                v++,
                w++,
                x++,
                H++,
                p >= r.length && (p = 0),
                y >= l.length && (y = 0),
                S >= s.length && (S = 0),
                F >= a.length && (F = 0),
                M >= g.length && (M = 0),
                m >= f.length && (m = 0),
                b >= h.length && (b = 0),
                k >= $.length && (k = 0),
                A >= o.length && (A = 0),
                E >= d.length && (E = 0),
                N >= I.length && (N = 0),
                v >= D.length && (v = 0),
                w >= _.length && (w = 0),
                x >= c.length && (x = 0),
                H >= u.length && (H = 0),
                ++n === i.length && (n = 0);
            }, t.timer + "000");
          }
        );
        break;
      default:
        console.log("Invalid target ID.");
    }
  });
  // });
}
function onErr(msg) {
  return console.log(msg), 1;
}
process.on("unhandledRejection", (succ, err) => {
  console.log({ succ, err });
});
