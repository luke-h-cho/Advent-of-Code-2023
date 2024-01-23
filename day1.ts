const isNumeric = (char: string) : boolean => {
  /* 
    function needed for the first part of day 1 problem
    simply checking each char to see if the char is a number, and return with the boolean
  */
   return parseInt(char) || char == "0" ? true : false;
}

// helper function to see if the condition is valid based on the question part 1 or part 2
const isNumber= (str: string) : number => {
  //part 1
  /*
    using the two pointer and the isNumeric helper func above, 
    to track and see if each end hits the digit in string

    once the digits are tracked, they are added as two digit number in string,
    then converted into integer
  */
  
  // let left = 0;
  // let right = str.length-1;

  // while(!isNumeric(str[left])){
  //   left++
  // }

  // while(!isNumeric(str[right])){
  //   right--
  // }

  // return parseInt(str[left] + str[right]);
  
  //part2
  /*
    use isNumeric helper func to figure out if the char is digit,
    if not, use map to figure what the left value and right value is.
    then proceed to do similar process as part 1 to get the integer value of those two added digit strings
  */

  // map with a key that has a leading char, and the possible digit in string & its numeric value
  const map : {[key in string]: Array<Array<string>>} = {
    "o": [["one", "1"]],
    "t": [["two", "2"], ["three","3"]],
    "f": [["four", "4"], ["five", "5"]],
    "s": [["six", "6"], ["seven", "7"]],
    "e": [["eight", "8"]],
    "n": [["nine", "9"]],
  };

  let left : string = "";
  let right : string = "";

  for(let i = 0; i < str.length; i++){
    let char = str[i];
    let mapChar = map[char] || [];
    if(!left) {
      if(isNumeric(char)){
        left = char;
        right = char;
      } else if (mapChar){
        left = isNumberInString(str, mapChar, i);
        right = left;
      }
    } else {
      if(isNumeric(char)){
        right = char;
      } else if (mapChar){
        let result = isNumberInString(str, mapChar, i);
        right = result ? result : right;
      }
    }
  }

  return parseInt(left+right);
}

const isNumberInString = (str: string, mapChar: Array<Array<string>>, idx: number) : string => {
  for (let j = 0; j < mapChar.length; j++){
    let item = mapChar[j];
    let num = item[0];
    if (str.substring(idx, idx + num.length) == num){
      return item[1];
    }
  }
  return "";
}

const day1 = (string : string) : number => {
  const arr = string.split('\n');
  let total = 0;

  for(let i = 0; i < arr.length; i++){
    total += isNumber(arr[i]);
  }
  
  return total;
}

interface Dic {
  [key: string]: string
}

// console.log(day1(`7jlncfksix7rjgrpglmn9
// vcgkgxninerqjltdbhqzzpd4nine23
// fx3
// 8nrbjbpjpnineseven
// 7qlfhcsnxn7fpfhjcgr6eightsevenjlpchjtzpztwo
// 28rzgskgk94ninefive
// zdpxcql1eight5
// 8two5six37
// 9khfphjl71trppsrtwo
// lxthkgbbf2jdcssfiveqksvbqvm8four4
// seven9tjcgztctxzzttct
// onetljcfh9fivesvgcqnklz9four
// 4mptgcnzmvvsevenzmjjzhndzdvxmz59bm
// 1hrqthmr
// 7eightqmfmsn
// jkgdnpzjkzzceighttklsfiveqxgsvxdq4
// hdk28lqhhttjz6one2
// 2five524
// 363mtk
// qlmtpch9eightlzddxs7one
// one6five1hxphtl687rllvb
// 31gdnsxtpnn
// sqvbcqlnjhk135
// eightgcdszrsghmmfsevendr2844
// eightthreecdpccfj7
// ljfgt9kvnine175kpnrbttktktf
// zjfeightfive9nine44seven4
// sixshbrtr4nmjr
// 3two54
// 26sixbhmmgdcl
// drxfnbsdzf3gnxbtmmggvkxrsevenbbzdfxnrdnkfivefive
// two8591mrvchg4
// 3jjhfzlnklpvvfcnsjbdmgvlfkeight2snxrkzzsx
// ztwo79onesix56seven
// threeeightrhlxptmtwofivenfourthree3
// fbhcqcttgxlrstcqeight4dbfjp
// prsevenfournineglccpgssix7
// hzprzdvbsxzllgvttworstxtwodstxbtjnzm6
// 99sevenfive
// fdvnvc2
// vmpnpqg32llcxpbzcxqvseven
// dc9fgvrvsqqhlj2nq97three
// four77twothreeonenine9
// 3kfkfour
// xfg58six8cjtvmrgvsq5l
// gmfxvhftld2hbmmprpppzchcqmxninethreethree3mmplrvbtkf
// 3fourqndl6
// rj6ninenzkbktfqsc2
// 9konehdmllc
// mneightzzqvdm14
// 8oneseventlrsrzflccrbv
// 9vvvgqdkrckjlzcfsbdgrqrhhtbb7fnhcxzmk9nine7
// 825ngddfhpfrsl6
// mc6tjxxll9seven
// fxbgccqmmh2
// five7three4vmxjlqcnc3
// 9mninehkmlpcxqnfkqfbg6six3
// 3onefourrv1ninesixfour8
// fourtwosdtz817fivevjvlzr
// seventhvxk1fournqqqfjrvdvbpkvd
// v733rklzvnslkonefive6zbvq
// 178ncllbfkkh4eightwoq
// glbxfjhskzbseven6mjzlxccfive3
// fptwoneonefivefive2ztxpndjdq2
// lxzhsgqkx5mjxtrmbkdtfeightsrchzmq6
// 1nngc2338ninedjkvszdmnjrl
// five6six7
// bcpxbcbssbtmdfninefivesevendtm9eighthxtvxb
// mzdttqmfpssevensixeight3twoone4
// rrtzlhkgrgtmrvlcthreeonefour5
// 75threeeight4
// 3ttcjsdrj6one91t
// 3twofgdpfqxxp
// seven3gjslxpltpbonemt
// 82jcvqkrgzkx8three8rmszgdj4
// ctwone41fnjksbxb1mxxzznsvg35fivesix
// four7bzfeight3one
// heightwo24cxs
// fdtwone8sevenfour37
// 1sevenmdmlrgmqnnth1mrone
// 7nqxzdrblffcdm22six
// 5ttpzlv
// zhqjlfive3
// jvzpgppblkb6
// nine77lmfour
// kqnvgtkgphxcxsixfoursix2
// pjjdlnineltbcknfqvhj8tworbkqhdcp
// nine65fiveeightjmeight
// j1sptkfhsczt
// 4czpqqglpc41bzkss1
// qd28j
// three1fourfourm
// four5seven4twodvmzzdtn
// zj4
// dzzrdkjjdxspfrjsonefive8brrzlrjvzfour
// zrjzfxxddn66
// fourrnsphsdzmv9xznt6seven
// 56eightcbhkmjfourone
// fivejzlbvqzb3sixsix
// fiveghfclksgqffdpb7
// cmmplbcnml36threetrxnhrrdonelmspsbhfd9twonenn
// ccxrlmzrreightone9three9
// zg6four1eight
// 1ngv
// bfhptfjzlgkxtftwo7gthree
// txrpbzgjzg272three9jlstdb8
// 3seven6twofxvxdlcqj33
// six3eightjrdxgkrkm5five
// one67one3
// gnfhhkffqfctxmvznmftwo34gjsrpxlv43
// five6zjdjpptnthreefour7sevenqfjlpshg
// onesevenninesvnnrvxxeightrdbvsbdnzgtmlmf1
// 2six8seven
// 3eightjrpqdrtwoxjvmgzpbffjnfdps9
// tptlcldftc3
// lcpqlbjfgmhkjpkhc4eight9ninesixsixseven
// eightxjfqqtxnsbsnrdxdjv8six79
// tvkthbbrr8five
// seven35threerrkdqjgps58two
// 5dln1rqqgdjlcmmrvm2pmhvhcxhfsbxkfqngp5
// sixnpvbq36514one
// mxdvxfgdfzmkjcrtl2
// onejv7lxmbrbzjsthreesevenninesm
// threehbhnm8nine
// bvhgqz6
// 9two89sixfxjz37
// 8xninepvggctk85fivefkj
// 8sixdjndzzzrkk
// five61oneightr
// cmthreesixeight7jlvdvmdjfzbv3
// 9two1onefour1clxjonetwo
// 9sixtzphqltmeightlbrhjone1ktrvjldff6
// five68eightfourqpfcxftzlxrhgdcvpd
// nxvdtfkltwozzl72fourhzxtqjf1
// 91fiveeightthree65twoneh
// 3eight6ninexqqgxzxfgmsixseveneightfqk
// dlpsfmsthree2zgfpdnftvfqgsgr
// 4kggfpxg8jpxzdqsixeight
// fivefourtwo923
// z3gx
// six4prlsp84tgvc
// 1foursrznv62k
// vmzr829nkxtlf
// 3dzsx2two7sixfivebkktgfbzdt
// fourpzpmvxc2zvvrhrbhf
// frpddtknqjxpqqzhdnfour9sixdqjbqxh
// 89sevengkbeight6mn
// two7jcpnxhbtmhtwo39twoone
// cvdqlfkrs821fourrrgnmm
// 6onefhnnbrzgx7fourxcj
// seveneighthfr6rz
// 9vvqlpnzbxfct8
// two8three2fpseveneight
// 2three75three2
// znvbrbrqlfive8
// lnfjqfkk8
// 14tvvmdlntrv6three
// 5twor2chtvj
// threetwomgrcfivefive7
// five4qbvxthrfxdkjkk
// sixthreethree5scmqrfq4vf3
// rjsljnqcrttbpfhfxbfourone4
// threeseventwoseven87dnmqjbbxfoneighttfz
// seven4four9eightxqlsixthreeone
// 1ninesix43bmsttggvzn14
// seven1sixbmnxmz
// grqhlkrcdzbhstgtvpclvtphph4twoseven
// fgfprscb27pzfvvblxhkvonefive
// five77fivethreefive3vddgfngng
// 13nllfsevenfour6four
// threenineeightfour173three
// fourqvsbxxzmfh2hhcjxsrkz
// 4jdtxgltkkkvlnhrztwofxppsdlcqztwo3gdlctj
// 5four334rvfour9
// 551threenine
// eightonenineeight8
// qmjqmjvvfkdbnjgkrqh8two
// sevenjzqnv32lldmr5one
// 6five8fivefour
// ljvhqqvqxqsix1367
// two6kvjtwonenzf
// 2p5chjdcseven9
// lnrrrkkdsvfhkl9vfqfgnvonegtwo6
// twoseven4lhhpcvthree4tkrone
// 8hllnnmpm3rjxndcmpt9jfjqng
// qbnlgqeight2csvjshglqzmgkqqxqzq95
// two2nine
// rrpffkq15foureighttwo2
// five3ninetpx5fmrzsqvfzq
// mrqhcpgvblhvskv5pdsdzzfzfsix
// two7fvmhvseventwo7
// 3sixone94three8fdplbm2
// loneightseveng79
// fourone7
// zvgjt1
// xpgbfghsmj2six8eight8mzlnvmv7
// grjtwo48
// jhcgjlgxt1seven1
// 5dhtppxrxcsbjsm37
// cbhmtp56xbqzppjjfivezhtxxvkrzsix
// hctwonelcninefourfive2
// four4rcxpkzbeight95xxdb3
// fivejlplgzflone963two
// trgninefourtwo6five
// 66fournine535foursxbvsfvf
// 1bskfour
// dvlmbrxssevenhldvjxdzcfdvbfourthree2seven6
// 6two92635
// 8dzszone
// hfcm6
// dxrfhpdbrqmqq8four
// bfclp5sixeight81three
// eightffsqgkmt53gfjxqsskpsfpbcmqvdfour9
// 6sevensevenfour1v
// 9threetfspsfxhnzblgsxz
// seven5tz7pfhlpt9qxrqz
// pmbeightwooneonefiveseventft4
// xhjhmzljnx7
// twotgdvhkpmg1rthzfc6
// onesevennpcsbfive9sixseven
// 7sevenmbhlrjxrpddcnl
// 8fsvntpptctwobjmkgzvc4two
// onetwosix4
// fourthree4fourlqbvscdponeights
// 1glkfrdb69sixsrvvb
// ninetwoeight7cvjtdmgpsfivefnlvgsqtstwo9
// 9threejtfoureightseven
// 38nine8
// 87two7onetwo
// 2vkkcgxdqpnthreehklfmfmjdpkz9fivetwofour
// one5oneone5oneone
// three5hlxkxrmxsbgrzqsgrone
// twokbbnbjp7
// mvxpdllxrvfthreeone51eight
// rrqvfiveseven5two1qgqppn
// 92s
// fourxcj8frbvlxzgpvoneone
// 648211
// 4eightgzxnsixlvksllptszztmkjb3four
// fivegqg6
// foureightmmnknlseven1
// 83kx
// sixeight12kskzhrjjpslmprtwo
// 1xzncrsfrlfivetwoxptv46nine
// fourmxfq6twotwo4
// oneht8
// 3prjdlrcznine
// btkpqmxxmggkzftmkxbzqvdccchxdmjlqztzfgfour7
// tvbstznine9z
// two1fivemmnlcnmqlrnbp95gjjh
// dq671ninezk
// 6cmxtt769
// 629rkhc198
// 2fourfiver
// three5nqkjdsixfrjnf4gcbjrznine
// xjhqqf7oneeightrgkdprrssmxp63
// 5fourfivekpvmnlpfrt1
// xnqkjcldhttbpjr8
// fdntjsb957sevenhbmntp
// jlmmmmdv482three
// 63lnbhmdhpsp32
// 99cmntldfdflqkfkv
// kqnlqqkpr9eighteightthree15threenine
// 6threefttghrvjsjg6
// spmrjzfm6eightwokn
// bdcjfqvsdronertfztlblqbgfgtkjv8qhbjfhthree6nine
// 9fvltpsxtcbtjxbtlfdvm7
// 6jxvxrdmpjthreefstfgrsixfourzbfznjjlqtjx
// 8onesixkmhgvsnfhqnxlkn
// rrjxvqjbnvvsgddtvmb3six5
// eight8sevenbmtgbvdzcpqnzqone1hbhlgcfour
// 2nineseven41
// 8xptgrh1njz
// geightwo93sevenseventwobpdhhjsrbfour57
// m4kd9four
// 6nine5seven9v
// glzc1fiveeightvbmvk
// ninesixone3sevenzmvrqbtwo4four
// 9onefoureightfivefour
// fjqpgnjdd1twoninecgsqsmtonenine1f
// 94sixthreedflcddxnvvrthree
// vvfnbgpkgsnjtszxhrsixfive5rrdtfpkdhdvsg
// 39four1pjfkt
// 45sixkhlfc1fivetcvnlstnine
// sevenone2seven
// twofiveonenine6eight5
// grxzndnqpd56
// xnpdfnfgt5fivetwotwo
// 9four6two
// sgmlzbpnkrmfivesbdzbnhkcxndpone49
// 88six2hrmkl2
// mthree3eightfiveone
// smrzqc7twothree2three
// nmtwo8cr
// 378one47four
// 27four
// 5two7seven68six
// 9onecnonethree9
// nineqhvbjqbrkpjhjhdbpk3twoseven
// rq4qldc
// 86bqzct2nine
// eightsnfgrjzhsnxbfivethree6ljxx
// oneeight1threevzdcplnqrbk92
// 8k9dkqmqhndthreethree
// 9sp6j5two
// 4rsone1seven2seventwo
// ninehhdcbxfgs7fljclncb6vpzhqphxz
// drplsnsch3zfr
// 86nine
// 2threeeightsixvzpcqjs
// dmkhbxsggeight7seven9
// fourshjlmrbbcnznstgj2sx
// gcbzbldk6nine
// fourskpc1vzfxsrjckcmccljtt9
// 1oneone53oneeight6
// six3fourqxqbs9nkbsixthreesix
// pmlrkrhqdjgg121nineseven9
// dmgnq6
// kpmponeone5
// mxmhbqnrcjj1threeeightxzfive
// onebzxnrqqfltfourglvkqfive4nine5
// threezvmfl7vsdrthsdsjsix9mbrqqmz1
// boneight8onelrtjkj
// tqxbbceight9rqbthreek
// 3h32nklscdkfhtztwontprj
// 2threesix
// qkzmpvkvsixxfzlrfrgv682
// 3seven6mvkeight2fourvhvvqone
// three389sixeight
// bx664nine
// nine82rcdvqtj91dbffscng4
// 2sixsixtbqhvcndjtcvrrbtdzsxrlrvdxjtd7fzdtlrhlxvbpvhknmm
// 6zbpblsznhlzljtmstwothree28ngdcfkk
// eight8nbfmdqlcvonenine
// 8two4sx7rffstvxlq1seven4
// gmzbd8nine5nine1one
// sevenfivezdfbn7six
// 5892
// ss9
// 8xcvzgzkjcdg
// 1seven7three
// 8four1fourtwonezs
// hnjzk8
// xfour5mrj
// vnkspgtkxspdtwofxlvtlkqpqcffxbqth13cll
// mmjkshtmtwofour1
// sixthree6
// seven9mzmbkkrzsix5five
// 9cbrsqjlhntpzfivegmgn1six
// bdbnlrdpsninenine3twotwocpvjd3
// twonine193
// twothree1twor8cmtxtd
// bvgtninevfrjs6
// eightsix8
// sixfbzsxfjtfv8
// 5onethreeone
// dgzcksnqz8foursix
// 9onetsrtwotwothreerbv
// 4dnzc8
// fivenine4sjzsdgvdqsix3511
// 7twofivefivefourqdgpmfblgv
// oneonelgjsk9
// zcfhrrpseven8tlffkfnineeightttwoknlfdjpj
// nine5nine
// 8sixtwotwooneoneeightcdklzjgvnqrsvvkbtfj
// 7one9vxjdkbhqmfbpt
// 6twoeighttwo
// sixthreesix162
// 5jhxxchf69twosxjckh5
// sevenxspmvxpmc788one
// 9fseven4
// vxzqgxbmtgxnm588seventwoqtmfsb9
// four8nine4ftn5
// eighteightrhjzcmxql28four
// twogqjdbmmxqgtxdppchr2xxhcptq2mrvgsdccs
// six24
// nqdptone3drgtwoone8
// threesixnine8hlkrj
// four7pvvljkscc6hvsppgxrsixknrnrvfjqqfive
// 7tdnbzqqxftqtxjqxgmbdhbvsqdone22drc
// 59rqhzrfrps
// six1scbkqjd4
// 89blbn
// lqhoneightthree96tppmhtpmlt7
// threeqpnsevengfx3
// sixk27lfjrvhvtsixtwo
// four5slf8onefournine5
// ninehgczrdslkstltfive96bqtz5
// scfkzsr4fournine325
// 5eighthzn9rjdzxllvg
// 1six1threedrfpflhqfour64
// fivekdtgcdsjxone8nine
// 7sevensevenhronepdgbxvfd5
// 619nine6threetwo6
// fivehchdssjrlshfqjlptsxghzrcsfcglm4
// 6two73smnqbbmsix
// 84fivermpjpjgkn
// oneeighteightfhjtxbjc94threefrnnnncdz
// lrckglbdn94eightqbfxp
// mtztmbhthzone26sixgjvnbzsjfmthreevqdqrld
// pnrtpgzcnznfive3eightwogkq
// threevfpkrjddtpszxddckhftt6txkszsbxnn
// ninecxdtmdnineseveneight5fivesd
// xjvv7one
// 5eightfiveseven
// twodpfdzvqmpzmvs7tpjnpmv5
// 75fivethreesixsfqpzdonefive4
// 4onefive6bsvtplblfbmnjjlb
// eight75one73pjgdqq
// ntcnmnkvjzpvxpmb7twokqfour1
// zd1sevenmgdrgrzvvh
// 65four
// 3kzfztjxjbseven67bnfcntfknlxlv
// eightfive8xnnkeightfive
// 6three95eighttwonineonevkrtwonebgs
// 92seven2cndf
// onezxphkcrsix7klrhnhdcxrpz
// mgl8ldbxzdlgtwo6cdvxbp
// foursix7lzcddxnjdrfqtthree7six
// hxheightwoncdcrkczbninefour3lfdtgnqgcnbfxbqlnt
// 2pmcvctfml1one92
// nineone9eight
// 6crppdpp4cmngqseven3mmv
// 473sevensqpvvhfdrfiventgvmvrhtqx
// gpnzc1rmfxqgj8nine271
// 84sixtwo
// frcrtsqhfour3threefivesix
// bhcvf6
// seven2seveneightzqmdqhb9
// 28hjjrgqklqgbm
// 98three
// jqzjntlc541
// oneq22
// 7fc92ljfmqt19
// sixzpzkgfiveonezjvrzfdcf43lbqxqseven
// 1two4kfxglzcdjc3dpvb
// fivembfkfdq6
// nplrclbrbf5ks6five4hzzbsnine
// 3mkmbgxhn
// seven9d
// vnfj8qng
// eightrgtjpdjjktwo1lphnlrtjfxtvghhbncj2two
// eight66frbpds5g
// 3one8four9two5
// 9ninefouronefcckhcdfb1mnmdsltdrsix
// eightsvsix122241
// 3fgpmgxcdqfourkhnrptlktrchfqbxcbbcxvjgznfjkj
// eighthbhsgrqkgcxtwofour2nzj
// 93xnjrphktk6vshpvnftblggghskg34
// seven2sixsdvmcfgq64
// twothreefive3hrmkbmrskcvknineninebnjksp
// 82fourninetwothree8
// 2two158threeninesix
// hgltdx48onetwofvnsmmsdzjthree
// k38
// ninenine4sixctnznsb3tkpx
// pvfzqtgpntnfhfp47rhllqrlx22
// 815qxtrghrsg
// 5vhfourvdblpninemdzbbgmvsfone
// nine8nine6four
// threebcbsmxbks2two5twon
// kzpsc74qxflxpsix6jgmzgqxvsngc
// 7dbrsmpksixqttqsphqpd7twoeight
// kffivefourdknzqsevenvkssgvhxf1
// sixeight5sljd5fourxkkxv6
// rnsjsmfcbp4twofour
// zdfour5pktmsmxf3
// threen42
// stgtphmjk7onexfour2foursrpj8
// pjbgtsevenseven7zzhgxlmz
// sixeightfivefourseven9bpjbcmvkrfive
// hfhxfqlbqtwo4cdfksbbtlcsix
// 778lkffbzmpdbxjbpfoursdbp
// tvpjnvtxeight1onefive3nvncq
// 38seven47
// five8threexqtglzmpmvbzfour
// nmtsjjfvfzbhpltbbsrjphrnxhr1two3sixvp
// 4gbvkbfqrfgrbr85sixone
// 6mxqltfsxqxnpdrjkxhrp
// lftdxbhhzvvhpone51six
// 3grhbqf5one
// six9four94tthree
// sevenh1bdcgdtmjqhnkzxlkxsevenonecbx
// jvtwonecfksxckgq6
// zvmjbthreecbpfdvd6
// 6bsvrsevenbcbcgrrhpxtvbhhfp1
// sevenfivemtmpcgml9mljnhcrdbfvksvlbpmvhs
// 8nine9
// mszqdg7jsrcckxn
// eightseven9zzsixninexhscseventhree
// eight57
// 4zjpjz26dxnzfb
// rmcnbnlpd3nine4gngphqfmc24
// 1vvgfxdfourprlmsjmvvtxnn8seven
// nineonethree6zznkfrcgzvfour
// gcnjsdlhptwofourtwoonemggshpdh3eight
// 4eightfivenxftjch
// eightthreeseven94
// twokvtjgcq992
// 69psqdmgbtljjzjmpsbs1fiveoneggjbbk
// 3k
// eightsix3seven4twosevenq7
// jlthbzsc2
// 22nine8jhmktwo5
// 8pzmtnlfptpjckftzrzqsrxkkcc3
// four33jfxmhcdktzhqvmkxhklxjllx
// nine3lqcsbmmh4f
// three514twonellp
// 4qhn5
// sixbmkxqdgtkbcghvpzonecfmgkpfrxv68six
// 6threeeightjhfsmp8mpvhrjcxzsevenone
// sevens9two37fjdfrnk
// jhzpvfldrbmmmglvrkz2ninelbgpdlpdcteight
// qj9
// rxfhkkvheightfouronejh8238
// zfsixvbqngj1vhbvxpfk6
// vjbqvcm3
// 51six38ngvq42three
// 7zjtcczjz79seven
// five8fivexxmrn
// sixseventhree3sixcsk
// zninefour8tworxkfb48
// 63nine3
// 11eight
// bxlgdzqthree2ninegqn6kvktfts8
// tvmzzlpnineztxdbkxgthree1four1
// gxcnhxone9
// 8eightfive5jkqx
// qcfgbpgdveighteightone7seven
// 86eight2five
// tftbbfpsvhtwo8eight8seventwo2
// skfp8
// 8hdlhh4ninenxllmthreefivebhslxkvtcp
// sixbmljnmhseven4sevenmsfbsbqlzrrseven3
// v1828
// 6seven53hhtj
// five51lkfsrm2
// bvnrdvjnxjbfv9prx
// tqbnxeight6hztrsbvronethreethreeqvh
// pcbjr3cjhrqxbcvpzdmfive6oneightgt
// qdeightl6four
// ncprx96ninegn3
// sevenb4eightwonr
// qbslkmkqlf8ztzeightpcn
// fiveeightcpn7hvxmtpcsbqfvpnmvgncfbpxzhfive
// 3rxxcqhlp4five
// threefouronevdbdmktp17
// sixdtmnlhth9onefive
// fouronelxgxpvtmseven2ninesix
// eightrfxrkcfive21ftlcgdcrmbsnrr
// nine1fourfourxkppvqrxfdhsdphjcgnhnfnzlld
// 562
// 4sixhj4eightzkbfpdrtzcsp2
// ddfdbdqzfshfxnseven6onetwo2
// five915b3
// sghrbfzmmrrbnone9four5rkmqgh
// threedmmsdvgs6twotwochp
// seven1fivesixnine9four
// 6dvmgsjcfour3q
// cschsrvz3nkk
// 4fnqmnd4rnxbjvcbxpchfour
// 3eight9
// tboneninerzhsgqqcxd2gxhm2mhdpkjeight
// vpsbgmzbjk6nineeight
// sixsjbzldfive6
// qjprfk1eight7vbdshhnfive59
// dbxdgt6
// pdgghktdjhsxnblgpzmtc24onecmctldqtsc
// bgfzght2szvttsdndfiveqgns3
// 6ninebdnbxzmeightfivevff8pdllfour
// four2nineeightvfeighttwo
// fiveone3sevenhfqnfbjg3five
// eight19two
// fqkeightwosvszgpjvbl2xtmgmc6128six
// 6five6one24fivemcgpx
// pmvrz6threemlhoneightdjf
// 7cxrgxx53gksgdsv9
// six3two
// nfqffqrvkvhqfzthgxp3fivesix7gb
// nlqdkgllxdvgj8xdhdfnnnfive
// fournine1nineseven
// four35djzxvsvvdfxbnhsixfouroneseven
// 9fourhntsmprtddm
// fourfsix81sixvxmz8eight
// 3pqngffjxqpntqtl8zz4
// five325ninemfqxnseven1
// 1one2gqx3
// hqsfive67rr3q4
// onefblnbfvzlzthreenine1
// 96zsvdl2
// 1fourjjhf1tn18
// sixfdpljnbpzxlvhncjs9threefckbgtcm
// seven6ffmvnnmxl8fxskzvpfs
// 5tgbqdkfive
// 52czvkbqgztwo17ninesix
// bmshtrzdcmkfour5
// nrfn25one
// 9two4plklcqzjftj7
// onedks4five6hdllqssixbssl
// 2xftcfnd2twotwo
// rzxzkcdtnmsbhnncltpj62
// 6snszfour
// 398seven58
// vstfive8869
// 1fivesevenvgjrlqqlthjz1
// tpg7eightseven
// gqvpptsix356
// 7nineone9fournineeight
// tr1threenine
// tvz8xconeightfz
// two11five1nine
// jntkxfvt2threegseven3
// b69ztbtgmqfntdnine4two4
// threedsgrrfcpzpfivebrpjhzfhs96gxmfhkhfive3
// eighteightthree5crdbzgqvtxx6two
// nine4onepxjtmbhrpklmlhcfspxrjdnd
// 7fivetpttvnmgzd
// 8lmddfzjeightxxvvcvp
// loneight1three4dmzxqncjbninerbsrjxxlsb
// 657fourdjkhrlxjdp3ninepvlqhz
// three4threekddjrfsdk3
// 8xbjcnsjq89
// six8ninesixfourpcsfhnsxgrz
// 8twosixmvhmsps3
// six9sixeight
// 4seven175
// 4twomspqqn6929
// 71seven9eight
// 4znc92eight
// ninetwo2blcllflxonezljhhsfivelngxk
// nmbrjnsqhkxzxhmxsix1oneeight5fourseven
// 42kvzlcdjzxmgnpqmsmkxq3seven43eightwovms
// rj5hxkldqseven
// f7
// 5sskjblmnbzjhctvmttwotwott
// 9ftmpxlbphsfxzsbktjttkxclknsbkftwo7
// 3ndmzlfbsfqhxrlj2fourfive
// 8378vkthreemggtf2
// 2hprlpkbsfzbnbpsmflxjh15one
// dxvtfrhhxthree68four529eight
// xgjvjddtnine1zxeightwosnx
// sixblpgkznvjseven2oneskvxgngzlpzvjcxkcjgblh
// bhhkfive4jgngngjfhbp8kpnjtgrmblone
// 8vmfivetwo9eightthreefxbvf
// 8738
// 8sixlgnpbpqpltbqqjjxpkcdfourhxzqpmm
// seventwo5three
// h46ssnqlfrl8
// ninetwokrkfqhh2jbznndtchssjtbpqdhtnrhsix
// 254
// 1nhbdtwosixonezxtnvhjnine
// qxx97d1dcnqzqhsixnzbrvrksnc
// fivegnxzgvmzone8fourfivethree5
// fivexhx7six87
// zngqzxpmd63bgfzjpftsjgzghdppqfqbnblt7sixone
// ninemzlgnkglj1
// fiveninesixeightthree4six1
// fivesix5ninethreeqkxczhp3
// eight19two16pqdstm
// mplj637sjtgzltwo
// 7lvs7xzmjmxjhlgdqhtqllhtzlkmbfm5
// six6kqvbjfoureight94
// one9qdjpfszz6vxbrdnntfz8btft6
// 65onendmdgtr
// seven368
// eight31ngsdmnm
// 2threetgpvcseven
// nine297zqgvglthreel
// 7eighttxvrbjsnbcseven
// rdpcnrscggv1cxv63
// 2cdfltscsnzg8eightwosg
// jrszpsjthree8n8bdjtlcbxtsixktkcc
// dns3
// 2threebpkctf
// 5pgzpfqntc
// 9pkone
// oneseven2fm545two3
// 9threegtctbldnnclqpdmjnps7seven
// 1dknxbdcvpssix413
// rzrvm77one2
// sixnttfive97jdcjvcmg
// spdmkhnthreebqsmtqgnm5threedxjcvsrxbq
// btzkx8ckninevffmmfm3four
// hgx8fivenine2oneightc
// thdfczcpnxctgfiveseven65threeeight4
// five6nine
// qgtds7
// hqnzcfleight8two2
// 8q8zbkjrqxzhlzgmqmzrbfqceight
// nbbrrmksdm2ninefive3x
// fivec2sixsixmngbsjzk71
// 821one4
// 5eightvpxfpnzvsfhcdtn7kdkjdpsqcl
// 6seventwotwogxvgvxzjbvcqcl38
// onetwo23863
// 24qtzzxfhq
// one7six814
// czdhrn2twoninetwo8
// one54
// foursslpnrqcv7sixtwoned
// 9xsptsgfplpbrtpc1sevenjrggpr52
// zoneightg6sixgfdtwo7
// 34twodhthree2tqsevenvqqrxq
// monektltrghq97seven
// ggeightwothree5cpfvrnp48
// nine7zpcbx33bbmd
// six831
// 63vjlqdc5one
// nine9cgxgrq8
// 5sixxpeightsix
// onecgpxlhhgtthreetwo3
// 336
// xcdjlblthreefourqrcxbxlhsdlseven5five
// 9znnlhrrmb1999drzkckthreehghffcgfr
// two8one
// ztwogggh48
// six4pcmqkpqb
// 14two47vmhbsgrgdone3
// 84eight2
// 5cnoneskjzppm
// nine8threecstfxqp7
// threecsbhnn22three9three4xphcvgnz
// vjq8ninenhr7
// qcffmrfthreexgjjrdbdthree3
// eightsix5
// threeeightfcsmrvdqzp6
// sevendcpm3five4eightbthreefive
// kq9one46dqnr
// jbmtdqbzn5sixlnthree
// ninebdz4fourbvq
// phbzxtvtthreerm89
// dqlgfoursix5k3mcrkmxcp
// 3fivesixqrrvtsjdxtdqp14pznxpnrgkrvg
// 5cnkfz4lxbvbpmcfninetgn9
// mtjq8threeninefourhnzgctvtrfive
// 47l6784
// twopdmponenzpjfbqgt2nine1qccqx
// 77hspkdhqfztwomkdshrkn3nt
// five7pjrslqhkzcjzhn6
// twoqvgphqs8zzmgclhsseven5eightfive
// threehmkjmrqqblnrfvbpzhrsix4zvlmcqeight
// 6lcfjthree8ninefive54
// sevenfive558four
// htbdrfh8bthreeninedrjdbjbzlknine
// hkhknzrbfsevenhcvbdfs2sixcbjqzltfour4
// qrvfpxdseven2
// 139msnzkfgpzdz5nine1
// rbdone3ftvrdkssvmnzjgpcbdjzdkcgbcs69
// nine58
// 2ckxdtcqc5seveneight4two
// qtgndtm4mrqvtgbgjf7nzhvtvjqqrdmfiverzzgn
// 3rchqn37tlvgtftdjqxgbvhlpclpneightfive
// 11sfhcntjzpnkvpzjfhhpmbtjptngpnbqthreethree6
// fivenine4cthreeeightzqlckkvs
// 5threekjqxkddgvzph92
// five372seven8eightthreefour
// fivegjjxh15zdnbxzlhleight5fourqrpxj
// 84sevenvckrdpxlgzkcbpr76fjzbpn
// mvvxgjfqj9five1psvtflxhkpfourdxzxhvxmthreekp
// seven7pnltbp1twotwo9lfdgzpj
// sevenfkrtsgrnhgfive54three8csmsg
// sevendczlbgjbg6srsbtseven
// onejscsevensix2oneightd
// mchrcflvfj3znrzhrvbhm
// brfninexxntnine83kfzbn
// 97tfgthreefxpv
// kspdrcnvvntts8bb4sixvghhjcpt
// 8onedxcbnlvpntljztxs
// c91drttnrsevenxj9
// 9onethree9fivexrszjfxcrjdbskdmn
// cjtnzpfourxspsjvmrbqclkzkdftc8pdfbfxjnvflgfkqctvcsc
// 5seventkqrdpmrrchxfournczqzlqqm7p
// nhpbdxgzzjltdftqc5fivelgvjshonervrxmgscvhnnfl
// 2gcqpdcgjv
// bqhzdzxb54
// nsmxljkjcmnmxvcrj7threegcrjs7
// 2cninev1eightdjcztnrk
// cmjskeightmjfrlfhm22fivetzmfive
// 8ndsix
// nzrgmlcrg5r4eighthfxm4
// threeptlf3x4
// 3bhd
// cbmzrtglngmghmonezdqnhxxd1ctpghbfzqfivefour8
// eightpdzftbdlcrtwonine29bcgxflmf
// 69crzsmjfivecxcqtffoursix4two
// 92zghnv
// fivejmdxvnf1
// 1ntvtnrjmeight1onegckvcnsjnthree
// ncxgppbsnhsfnhlonelfbxqzsgfjj8
// eightfhjbrlzxcgtls42sixtjk7two
// czrtnfzjnjhxdxtbgtmntkcpninejtzrprsstm4eight2
// 483nine
// onecnxpmhjjcvdtzc71seven
// 5l15
// 19jmkmrxbdbtz4shpdgmmhzrxtbftpgrj3plvlqdvnr
// two4two
// kqgtjstcpnhf8
// sn6
// grtgjxgqhv2fourbjmfnb
// bfmtkqfcp5hks74fivesevenbgvgzr
// peightwoninef2ninejmlhndvjd92
// 1qxm
// 2drkgnvghqrjtfxrvnthreesevenpzzldp
// four4zcmmzgbzc
// 4nfbpctgmx
// 3threemfbgthree19sixone8
// ggc1gldjhxsgvq
// 1four4seven824nineeight
// ninefour6one5ninetwo
// bpjs8rjdxpm
// zggcvkzeight7onejgkhpsrdkfvfx5three
// 7h7lpjzsdv4six1
// 6seven9one4
// sixfour6
// 4hkddrmgfp
// 43ninecrtoneseven2qbhkkbzdltfour
// 85
// hlfive3dqzdvjkdd
// 5chpcxbjkrdzbjtwofivethreem
// 6ninenineonefour
// 5five8twoonesf2
// four1seven5pbbjgmxgxmvfzjtvr6vttbnd
// zzkcpcckmsixeightnine4
// 9xxzzvcsg45one
// xmd3ninerxllskrl
// xxj2onesixfive3six
// threeseven8
// one43
// 1sixthreelcbcfgbone3bzgrl5
// four12535three5
// jztxrtwo8495
// threeqhsvcvzfnsevenfourtwothreeffrz9
// onevqlxcz461five4fthree
// znine5
// cch5ptlbcbh2ngnlqnrdsjv6mfhndf2
// threehblbzlddttzkrsl51eightzrj
// 68pgmnbz7seven
// twotfhcgltpp1ntpcvrmkgd998
// seven3fourfive7eightsevendlqqseven
// jqtcrf43zkktbqhsevendljgb5two
// 3one5threethree
// vvpjcnine9seventhreeninebtzmr
// jfourp7twoseven32
// 2prjqnineninevjlmqkrkdxv
// 67six1oneddp9
// tcbcttxninenine21hrmphqrjkvtnfgchjnb3
// sg1six5sevennineone
// ninet7jkrzxtmmz
// ninesixtslvqck9
// dnhsp9sevenrrsjdn
// onekqkvb7
// 2sfflskftk
// 79four
// jnngdkghtwo1two
// fptfourseven4hjvkz3onesix
// tzhtsgkcp8
// 9n
// six4294seven8
// seveneight74five1
// kfghjdssttgrfour2two5three1nine
// 5gkhgsixvlpcdmpgbjkqtjlthreetwo3one
// sevenfour1tfxzgsnldk1fiveqg
// 187qhhqlrjx
// 2lthreethreexthjqcsix
// cgpxkxgkmcpdzhtpc363
// sixbtkvqt3
// 4twotwoqqmtb7dczgqrtsixseven
// seventwo7z9fzgjkl5fjndrznc
// qsgfnjqsghtwoninethree8lppsthree
// threesevenkdzzvzbl2foursxrlq4sevensix
// seven8bjbmcnhrcp3one
// gg531
// one8sfvzplxlknine54
// dlxeightwo48fourthreeninethreeeight
// sixxlglqsjtmqmgcnfvpljsevenqlgllg6
// tszncfour7one
// three54three4
// qkjxzcdmxqvjngmrkpmleight83
// 5twoksv49
// 7six58sseven87two
// fourseven6ndsgfjv8
// ppmclkxhpjpqrjoneeight8two
// 538
// sixlhsixfive5
// twosevenb3f2twonebpb
// lxqbgl55fgzfmvtpgjbxxgffsixlkxlbvmjkkslqpkq5
// 7ptnpseven6one
// 3mtlbfc6tx46five
// 99pgdmnrbjv
// 7twokvzlvptxcrfbfzqsxsqvxtfkcpkczkr9fjxsr
// eight82lfivenine
// onetwo2jvqdhkktbeight
// 8zhxksgcc79one
// knqqz4
// 36twofour
// 2gdssixtnineeight2
// foursix4
// 49hjbscbjvbckhjmjrdbh3one
// fivesixdqpnv2
// 7ftwo
// fourffhffkphssbxzsgeight68dvhgrb
// two8sevenfive1
// dggljb5nvhpspbscfhd21
// twokeightthreeone6lqglrseven
// cklfcsqgtwohptslmlgdpjktvvbbx3
// two3sixthreesevennine
// 7ninepnclmdnv7ninevmqoneightpct
// czzbhfhhrfonetwo1ttvpgxkgsonektpnfrptjltklj4
// 7sixthree1five45
// btwone3fivelfzmfxsr81oneqhkzjvt
// 5kmrlbvpcdrfivefourfive3
// 9fsl3nine12
// 1seven1seventwofivetwosix
// sixzdeight9fcpzvsbtz85
// n1jmxjvgfiveone
// 1qsptpfbqtrl19three
// 5twoeight3grrksgjdkgn
// 1dq4sjknrp755
// 2three2five
// txktfive2ngqfl57
// vnrjvh1qpbbzqlgjpgrsgrqgggthreeone
// sevenone8srlxqqlvv
// eightsbfivefourfourseven6
// 853
// eight53b3sxfvnz7
// qbhrhkhcbnsfivenszghnbhsix2ggvv
// two28three9
// rltzcpbqxfive1nineone
// 5threedcfspjkm62seven8
// tlndznhtthree268
// ndfgfkphmn2sixjxxtlbqlnine
// 51eight682fivepnine
// dqvrvthreesixsix2fivenrjeight
// seven69
// 4qlkktltwo8tqgxcninefour21
// threefour32j
// 4nine27ngxp8
// seven5ghxkb8
// nineone56
// two8onezonesctsttzt5
// 64km6ttncd
// three6six6
// threetwoeight7six7jgmhreightwocl
// 3sixfivehjgvqjlrsfivesix6
// fiveeight3sppjtccnineeighteightnffgtlsdj
// 12seven9fbqxhs9jgh4five
// 7dmbqrqsnckxtpt
// ktvlgfzt95lfdvf4lbppfccjcprdpkdj
// seven65lrjmmqdfjfourtslnhdh5
// sblgrkqccmpqhfksmg5532
// rgqzkmmv4ctgzcgvqdghmvfour3
// 24rtxdxqnbvdnkgtgcbfkfbtwo
// 63seven78hrdnnsh
// eighttpj79
// foursix6
// 6czcdgdmrmzcdcfmsixfkdnbdsplcscqh27
// 3333dgrd
// 8threeltfpfz3
// xgxddj3qkcnbbbhtvbzkmvh8
// s2pzqkldrcx43xzmxqvspm
// eight1gkvlt24twothree19
// lkrzltxknd5fmjgbds2klkfgcgp3xcbxxpnl9hzfbfclrx
// 2zhn73
// sixone4eightninelthreeeight
// seven8vlqqfjfmltwosevenfivetwo
// spfkzfmssfjrsevennine8ltlrnrjbcfive8
// 1spbthreeshsgmrbcp
// ninefive7cnxznfmcp6nine
// eight4one9x3nine
// eightnine4kgxhxx1ckrqlrn
// 6sevenkjmfxrbhck
// jsgtwonefvmcdsnqfp4fivefivesevenhkbkqcb1vgkshfnxfc
// eightcvzmtlvsm49
// 78four
// threeoneninecjzs75
// xrxrsrh58
// 1zqkhcvoneseventwohbrfbqgvp
// 9zfznrfvtgjfhsk
// v5jcblbstnvxk
// 6s1
// 6three1seven
// 75xpmzmhqqphgtrblhkcdxczcvbmg
// 2rqv989fourthreefourone
// zmghjgrfqlzpdcqq9fjnkbl7btgf
// 2three3qvbfbn
// fivehnklrqktnqqlqfslfjpfpfx9six
// 3xvskqbjzrlonetwo
// 95fx6sevenseven3grfncsdttt
// two8twoklgnrm
// two9seven6eight
// 7lh2sevenshfvljtphhnbhvkzxxgjjrvlq7
// ninemdgkndsevensevensix4seven
// 4three6eight1lkdmtbh
// 7rdpvbqljvnine82pmqclfive
// nine6nine7seven6
// 54rvpqphbpxmcfjmcspsnhrjp
// eightn2skzmpmtgqhvvfxgqonevtbfsmfklzspxdrgj
// nine276rzshsrvncjrdzfxbmzzlvkhdlcc
// sevenfivexgznfftgthree44
// fivekltdkmm3rdmdnm32nineddsfdzpks`))

interface Day2 {
  [key: string]: number
}

const day2first = (str: string) : number => {
  const games = str.split('\n');

  //given constraint from the problem: the max cubes of each color we can draw
  const cubes : Day2 = {
    "green": 13,
    "red": 12,
    "blue": 14
  }
  
  //output of the func - accumulated valid game numbers
  let ans = 0;

  for(let i = 0; i < games.length; i++){
    //to divide the game number and the result
    let temp = games[i].split(':');
    //game number
    let game = temp[0];
    //splitting draws individually
    let results = temp[1].split(';');
    //flag is true, until we know the result of the draw is not possible
    let flag = true;

    //loop thru the draws
    for(let j = 0; j < results.length; j++){
      //split the draw result of each cube
      let draw = results[j].split(',');
      //loop thru the each cube draw
      for(let h = 0; h < draw.length; h++){
        //split to get the color and the number
        let temp = draw[h].split(" ");
        //extracting color and number of draws 
        //(had to use index 1 and 2 because of leading space takes the 0 index)
        let color = temp[2];
        let num = parseInt(temp[1]);
        
        //if the current color draw result is larger than what we are given,
        //turn the flag false
        if(cubes[color] < num){
          flag = false;
        }
      }
    }

    // after checking all the draw results, if all draws were possible by given cubes,
    // add the game number to the output
    
    if(flag) ans += parseInt(game.split(" ")[1]);
  }

  //return the accumulated game number of valid sets of draws
  return ans;
}

const day2second = (str: string) : number => {
  const games = str.split('\n');
  let ans = 0;

  for(let i = 0; i < games.length; i++){
    //create a map to track the maximum
    const cubes : Day2 = {
      "green": 0,
      "red": 0,
      "blue": 0,
    }

    // same exact method as solution 1 to extract all the required values to compare to
    let temp = games[i].split(':');
    let results = temp[1].split(';');

    for(let j = 0; j < results.length; j++){
      let draw = results[j].split(',');
      for(let h = 0; h < draw.length; h++){
        let temp = draw[h].split(" ");
        let color = temp[2];
        let num = parseInt(temp[1]);
        

        if(cubes[color] < num){
          // if the current color's # of balls is larger than what's listed in the map,
          // override it
          cubes[color] = num;
        }
      }
    }

    // once each game is looped, the map has max cubes possible,
    // accumulative the multiple of those values
    ans += Object.values(cubes).reduce((prev, curr) => prev*curr, 1);
  }

  return ans;
}

// console.log(day2second(`Game 1: 6 green, 3 blue; 3 red, 1 green; 4 green, 3 red, 5 blue
// Game 2: 2 red, 7 green; 13 green, 2 blue, 4 red; 4 green, 5 red, 1 blue; 1 blue, 9 red, 1 green
// Game 3: 2 green, 3 blue, 9 red; 3 red, 2 green; 6 red, 4 blue; 6 red
// Game 4: 9 red, 3 green; 3 green, 8 red, 6 blue; 12 blue, 4 green, 6 red; 4 green, 18 blue, 11 red; 9 blue, 2 green, 3 red; 14 blue, 7 red
// Game 5: 1 blue, 2 green, 3 red; 16 red, 6 green; 6 green, 2 red; 9 red, 1 green
// Game 6: 4 green, 7 red, 1 blue; 18 green, 6 blue, 7 red; 1 blue, 3 red, 9 green; 9 red, 19 green, 1 blue; 7 red, 9 green, 4 blue; 5 red, 5 blue, 10 green
// Game 7: 16 blue, 5 green, 6 red; 1 blue, 6 red, 9 green; 6 green, 3 red, 2 blue; 2 red, 12 blue, 2 green
// Game 8: 6 green, 10 red; 7 red, 6 green, 17 blue; 13 blue, 1 red
// Game 9: 2 red, 4 green, 5 blue; 2 green, 5 blue; 4 green, 1 blue; 3 green, 3 red, 6 blue; 3 green
// Game 10: 3 green, 5 red, 6 blue; 4 blue, 4 red, 5 green; 5 green, 9 red, 5 blue; 4 green, 6 blue, 10 red
// Game 11: 1 blue, 7 red, 9 green; 1 blue, 13 red, 7 green; 5 red; 4 red, 7 green, 2 blue; 7 green, 12 red; 13 red, 2 blue, 12 green
// Game 12: 4 blue, 2 red; 9 blue, 2 green, 3 red; 8 blue, 1 green, 1 red; 2 red, 3 green, 11 blue
// Game 13: 6 red, 8 green, 2 blue; 6 red, 7 green; 3 green, 3 red; 2 blue; 3 red, 5 green
// Game 14: 2 green, 11 blue, 1 red; 5 blue, 1 red, 1 green; 3 green, 12 blue, 2 red
// Game 15: 4 blue, 6 red, 7 green; 1 red, 2 blue, 5 green; 6 red, 3 green, 8 blue; 7 green, 8 blue, 4 red
// Game 16: 2 red, 16 blue; 2 green, 7 red; 15 blue, 7 red; 2 red, 3 green, 3 blue; 3 red, 1 green, 4 blue; 4 blue, 3 green
// Game 17: 2 red, 3 green, 10 blue; 9 red, 4 blue, 3 green; 3 green, 11 red, 6 blue
// Game 18: 1 red; 6 green, 1 red, 9 blue; 4 blue, 2 green; 6 blue, 10 green
// Game 19: 2 red, 9 green; 2 red, 1 blue; 5 blue, 12 green; 5 green; 8 green, 2 red, 3 blue; 1 red, 11 green
// Game 20: 3 green, 2 red, 7 blue; 1 blue, 10 green; 1 red, 14 blue, 13 green; 3 green, 19 blue, 4 red
// Game 21: 8 red, 10 blue, 8 green; 2 red, 7 green, 18 blue; 4 green, 11 blue, 4 red; 5 green, 3 blue, 10 red
// Game 22: 17 blue, 2 green, 2 red; 8 red, 7 blue; 1 red, 9 blue, 1 green
// Game 23: 4 blue, 18 red, 4 green; 3 blue, 7 red; 11 red; 3 blue, 6 red; 19 red
// Game 24: 10 red, 1 blue, 17 green; 17 green, 6 red; 14 green, 4 blue
// Game 25: 4 blue, 9 green, 4 red; 3 green, 5 blue; 5 blue, 8 green; 3 green, 3 blue, 1 red; 10 green, 1 blue, 4 red; 2 green, 2 blue, 1 red
// Game 26: 18 green, 3 red, 12 blue; 2 red, 7 green; 11 blue, 17 green; 12 green, 11 blue; 12 green, 4 blue, 3 red
// Game 27: 1 red, 3 blue, 8 green; 15 blue, 8 red, 4 green; 6 red, 9 blue; 6 red, 12 blue, 9 green; 4 red, 7 blue, 15 green
// Game 28: 1 red, 14 green; 1 blue, 11 green; 2 green; 4 red, 6 green, 1 blue
// Game 29: 1 green, 13 red; 4 red, 16 green, 7 blue; 2 red, 4 blue; 12 green, 8 blue, 4 red; 2 red; 12 red, 5 green
// Game 30: 3 green, 4 blue, 3 red; 5 blue, 4 green, 7 red; 5 blue, 2 green, 2 red; 3 red, 1 blue
// Game 31: 1 blue, 8 green; 9 green, 2 blue, 1 red; 1 red, 2 blue
// Game 32: 11 red, 5 green, 4 blue; 3 blue, 11 red, 8 green; 6 blue, 3 green, 17 red; 4 red, 7 green, 10 blue
// Game 33: 6 blue, 4 red; 1 green; 1 green, 4 red, 4 blue; 1 green, 3 red, 10 blue; 10 blue, 1 red
// Game 34: 2 green, 3 blue, 3 red; 4 red; 2 red, 2 blue
// Game 35: 9 green, 13 blue; 13 blue, 14 red, 1 green; 11 blue, 4 red, 7 green; 5 blue, 5 red, 8 green; 4 red, 2 blue, 2 green
// Game 36: 9 red, 5 blue, 8 green; 7 red, 20 blue; 6 green, 16 blue, 5 red; 12 red, 3 blue, 3 green; 3 green, 6 blue, 11 red; 11 red, 8 blue, 3 green
// Game 37: 10 green, 11 red, 3 blue; 2 blue, 6 green, 11 red; 9 green, 8 red, 2 blue
// Game 38: 2 red, 2 green, 4 blue; 3 red, 4 green, 3 blue; 8 green, 1 blue, 1 red; 3 red, 5 blue, 5 green
// Game 39: 3 green, 17 red, 4 blue; 2 green, 20 red; 4 blue, 4 red, 5 green; 5 blue, 7 green, 7 red; 4 blue, 5 green, 16 red
// Game 40: 2 green, 2 blue, 4 red; 3 blue, 16 green; 1 green, 2 blue; 1 red; 3 blue, 15 green; 13 green, 1 red, 2 blue
// Game 41: 12 red, 10 blue, 9 green; 1 green, 15 red, 4 blue; 2 green, 8 blue, 12 red; 3 red, 4 green, 2 blue; 8 blue, 14 red, 10 green; 9 blue, 7 green, 6 red
// Game 42: 5 red, 3 green, 6 blue; 4 blue, 6 green, 2 red; 10 blue; 3 red, 6 green, 10 blue
// Game 43: 9 blue, 7 green, 1 red; 2 green, 2 red, 8 blue; 3 red, 15 blue, 11 green; 1 red, 6 blue, 1 green; 2 red, 1 blue; 1 red, 3 green, 7 blue
// Game 44: 4 green, 6 red; 15 green, 6 red; 9 green, 16 red, 7 blue; 11 green, 4 blue, 12 red
// Game 45: 3 blue, 6 green, 1 red; 4 green, 3 blue; 8 green, 3 blue
// Game 46: 10 red, 8 blue; 12 red, 2 green, 17 blue; 17 blue, 6 red, 1 green; 18 red, 6 green, 3 blue; 16 blue, 2 green, 3 red
// Game 47: 8 green, 13 red; 8 green, 8 red, 4 blue; 10 red, 3 green; 14 red, 5 green, 8 blue; 7 green, 19 red, 3 blue; 2 red, 5 green, 5 blue
// Game 48: 7 green, 9 blue, 3 red; 7 blue, 1 green, 9 red; 7 green, 4 red, 1 blue; 6 green, 3 red, 1 blue
// Game 49: 2 red, 3 green; 3 blue, 2 red; 4 red, 3 blue
// Game 50: 3 red, 7 blue, 4 green; 2 green, 1 blue, 7 red; 4 red, 1 green, 5 blue
// Game 51: 11 red, 6 green, 1 blue; 7 red, 1 blue, 9 green; 15 red, 18 green; 11 green, 1 blue, 11 red; 10 green, 14 red; 1 red, 11 green, 1 blue
// Game 52: 18 blue, 1 red, 2 green; 18 blue, 3 green, 1 red; 2 green, 13 blue, 1 red
// Game 53: 2 blue, 9 red, 6 green; 1 blue, 3 red; 7 red, 6 blue, 8 green; 2 red, 3 blue, 4 green; 1 green, 2 blue, 2 red
// Game 54: 16 red, 4 blue; 1 green, 3 blue, 3 red; 2 green, 12 red; 2 green, 1 blue, 3 red; 10 blue, 6 red, 2 green
// Game 55: 1 blue, 4 red, 1 green; 2 blue, 2 red; 13 red, 4 blue, 1 green; 4 blue, 9 red; 1 green, 1 blue, 16 red
// Game 56: 12 blue, 12 green; 4 blue, 1 red, 3 green; 2 red, 12 green; 1 red, 11 green, 13 blue; 16 blue, 5 green
// Game 57: 1 blue, 3 red; 10 green, 5 red; 5 green, 2 red; 1 red, 13 green
// Game 58: 6 blue, 1 red, 6 green; 3 red, 9 blue; 4 red, 9 blue, 5 green; 1 green, 5 red, 7 blue
// Game 59: 10 red, 3 green, 3 blue; 6 blue, 11 red, 1 green; 5 green, 10 red; 16 red, 2 blue, 4 green; 3 green, 10 red
// Game 60: 2 green, 1 blue; 1 green, 1 blue, 4 red; 3 blue, 1 red, 1 green; 2 red, 2 green; 4 red
// Game 61: 5 red, 1 green, 10 blue; 9 red, 10 blue; 1 red, 2 green, 4 blue; 10 blue, 2 green, 9 red; 1 red, 12 blue, 2 green
// Game 62: 1 blue, 5 green; 4 blue, 12 green, 1 red; 7 blue, 3 green; 7 blue, 3 green; 3 blue, 1 green, 2 red; 7 blue, 1 red, 12 green
// Game 63: 4 blue, 2 green, 5 red; 1 green, 2 red, 2 blue; 4 blue, 2 red, 2 green; 1 blue, 6 red, 2 green; 6 blue, 1 red; 1 green, 9 red, 6 blue
// Game 64: 1 green; 3 green, 5 blue, 5 red; 3 red, 3 blue, 3 green; 1 green, 4 red, 6 blue; 5 red
// Game 65: 2 red; 1 blue, 1 red; 7 red, 2 blue; 1 green, 4 blue, 3 red
// Game 66: 3 red, 9 blue; 1 red, 6 blue, 15 green; 3 green, 3 red, 11 blue
// Game 67: 2 red, 1 green, 2 blue; 6 red, 1 green; 1 blue, 1 red, 4 green
// Game 68: 3 red, 1 blue; 1 green, 3 red, 2 blue; 1 green, 8 red; 2 blue, 3 red
// Game 69: 5 blue, 6 red; 1 green, 15 blue, 10 red; 1 green, 2 red, 4 blue; 5 blue, 7 red; 3 red, 1 green, 11 blue
// Game 70: 4 green, 2 red, 8 blue; 5 red, 3 blue; 10 green, 5 blue
// Game 71: 1 red, 2 blue, 9 green; 3 red, 8 green; 1 red, 2 blue, 6 green; 3 red, 6 blue, 8 green; 6 green, 3 blue, 2 red; 3 red, 8 green, 6 blue
// Game 72: 1 red, 11 green; 1 blue, 7 green, 1 red; 2 red, 12 green; 10 green, 6 red
// Game 73: 9 green, 2 red; 1 blue, 3 green; 1 blue, 1 red, 7 green; 2 blue, 9 green, 4 red; 2 blue, 3 red, 8 green; 2 green, 9 red
// Game 74: 2 green, 7 red; 1 green, 3 blue, 6 red; 4 green, 3 blue, 6 red; 2 green, 3 blue, 1 red; 3 red, 2 blue, 1 green
// Game 75: 15 green, 2 blue; 15 green, 6 red, 2 blue; 12 green, 2 blue, 1 red
// Game 76: 1 red, 9 green, 12 blue; 6 red, 12 green, 1 blue; 7 green, 2 blue, 1 red
// Game 77: 11 blue, 1 red; 7 blue, 2 red, 13 green; 10 blue, 10 green; 12 blue, 3 red
// Game 78: 4 green; 1 blue, 5 green; 5 green, 1 blue, 1 red
// Game 79: 4 green, 7 blue, 16 red; 1 blue, 10 red, 5 green; 3 green, 4 red, 3 blue; 11 blue, 18 red, 5 green
// Game 80: 1 red, 4 blue, 6 green; 14 blue, 16 red, 2 green; 2 blue, 5 red, 4 green; 2 green, 8 red; 18 red, 6 green, 2 blue; 18 red, 9 blue
// Game 81: 11 red, 8 blue, 1 green; 12 blue, 2 green, 14 red; 16 red, 2 green, 6 blue; 17 red, 2 green; 3 green, 3 blue, 15 red
// Game 82: 13 red, 1 blue, 6 green; 3 green, 12 red, 3 blue; 5 red, 3 green, 18 blue; 15 blue, 8 red
// Game 83: 9 green, 5 blue, 5 red; 8 green, 15 blue, 7 red; 4 green, 6 red, 10 blue; 5 green, 2 red
// Game 84: 2 blue, 2 green, 6 red; 2 green, 7 red, 1 blue; 3 green, 3 blue; 2 green, 3 red, 3 blue; 6 green, 4 red
// Game 85: 1 blue, 3 green, 5 red; 2 green, 2 red; 4 red, 3 blue; 2 green, 3 blue, 1 red; 4 red, 2 green, 4 blue
// Game 86: 6 red, 1 blue; 1 green, 16 red; 2 green, 1 red; 12 red, 1 blue
// Game 87: 6 red, 12 green, 1 blue; 5 blue, 6 red, 4 green; 2 blue, 5 red, 8 green
// Game 88: 3 green, 6 red, 2 blue; 3 blue, 2 green, 6 red; 1 red, 11 blue, 2 green
// Game 89: 7 red, 3 blue, 9 green; 6 red, 3 blue, 15 green; 2 blue, 6 red, 12 green; 5 red, 8 green; 3 blue, 7 red, 9 green; 5 red, 7 green
// Game 90: 2 green, 4 red, 19 blue; 13 blue, 4 red, 1 green; 14 blue, 8 green
// Game 91: 12 green, 5 blue, 4 red; 9 green, 10 blue, 1 red; 13 green, 1 blue, 4 red; 2 red, 5 blue; 2 blue, 7 green, 2 red; 5 blue, 5 green, 3 red
// Game 92: 9 red, 6 blue, 16 green; 11 green, 2 red, 7 blue; 1 green, 1 red, 3 blue; 4 green, 8 red
// Game 93: 1 green, 4 blue, 8 red; 2 red, 1 green, 2 blue; 2 blue, 9 red; 1 green, 4 blue, 3 red; 3 red, 1 green, 4 blue
// Game 94: 1 green, 7 red, 4 blue; 4 red, 3 blue; 16 blue, 9 red, 7 green; 9 red, 15 blue; 15 blue, 3 red, 6 green; 7 red, 10 blue, 12 green
// Game 95: 5 green, 6 blue; 10 green, 9 blue; 4 blue, 8 green, 2 red; 5 blue, 5 green, 1 red
// Game 96: 13 blue, 10 red, 2 green; 10 red, 2 green, 1 blue; 6 blue, 5 red, 3 green; 11 red, 3 green, 5 blue; 11 red, 2 green; 3 green, 6 blue
// Game 97: 9 green, 11 red, 8 blue; 6 red, 9 blue, 2 green; 3 red, 17 blue, 1 green
// Game 98: 14 blue, 3 green; 2 red, 15 blue, 3 green; 15 blue, 8 green, 1 red; 1 red, 8 green
// Game 99: 2 green, 7 blue; 14 red, 1 green, 4 blue; 8 blue, 13 red, 2 green; 10 green, 7 red, 10 blue
// Game 100: 5 green, 11 blue, 6 red; 5 green, 12 blue; 1 green, 14 blue, 1 red; 3 blue, 5 red, 6 green; 9 blue; 6 red`))

const parseMap = (input: Array<string>): Map<string, string> => {
  const map = new Map();

  for(let i = 0; i < input.length; i++){
    const item = input[i];    
    for(let j = 0; j < item.length; j++){
      let char = item[j];
      /*
        part 1 map parsing
      */
      // // when the number is found, put in the num map
      // if(isNumeric(char)){
      //   map.set(`${[i,j]}`, char);
      // }
      // // when the special character is found, put in the map
      // else if(char != "."){
      //   map.set(`${[i,j]}`, "x");
      // } else {
      //   map.set(`${[i,j]}`, "");
      // }
      /*
        part 2
      */
      if(isNumeric(char)){
        let k = j+1;
        let num = char;

        while(isNumeric(item[k])){
          num += item[k];
          k+=1;
        }

        for(let h = j; h < k; h++){
          map.set(`${[i+1,h]}`, num);
        }

        j=k-1;
      } else if (char === "*"){
        map.set(`${[i+1,j]}`, char);
      } else {
        map.set(`${[i+1,j]}`, "");
      }
    }
  }

  return map;
}

const day3 = (gear: string) : number => {
  const input = gear.split('\n');

  const map = parseMap(input);

  let result = 0;

  const directions = [[-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1], [0, -1], [0, 1]];
  
  map.forEach((val, key)=> {
    let xy = key.split(",");
    let x = parseInt(xy[0]);
    let y = parseInt(xy[1]);
    let nums = [];

    if(val == "*"){
      let sentinel = -10;
      let temp = sentinel;

      for(let direction of directions.slice(0,6)){
        let coordinate = [x + direction[0], y + direction[1]];
        let curr = map.get(`${coordinate}`) || "";

        if(temp != coordinate[0]){
          temp = sentinel;
        }

        if(isNumeric(curr)){
          if(temp != sentinel) {
            temp = coordinate[0];
            nums.push(parseInt(curr));
          }
        } else {
          temp = sentinel;
        }
      }
      
      for(let direction of directions.slice(6)){
        let coordinate = [x, y + direction[1]];
        let curr = map.get(`${coordinate}`) || "";

        if(isNumeric(curr)){
          nums.push(parseInt(curr));
        }
      }

      if(nums.length == 2){
        result += nums[0]*nums[1];
      }
    }

    /*
      part 1
    */
    // if(isNumeric(val)){
    //   for(let direction of directions){
    //     let coordinate = [x + direction[0], y + direction[1]];
    //     if(map.get(`${coordinate}`) == "x"){
    //       flag = true;
    //       break;
    //     }
    //   }
    //   temp += val;
    //   //edge case where the number ends in the line
    //   if(y == input[0].length-1 && flag){
    //     flag = false;
    //     result += parseInt(temp);
    //     temp = "";
    //   }
    // } else {
    //   if(temp && flag) result += parseInt(temp);
    //   flag = false;
    //   temp = "";
    // }
  })

  return result;
}

// console.log(day3(`12.......*..
// +.........34
// .......-12..
// ..78........
// ..*....60...
// 78.........9
// .5.....23..$
// 8...90*12...
// ............
// 2.2......12.
// .*.........*
// 1.1..503+.56`))

// console.log(day3(`.......497...........................858...923...128..................227..801........487.....664...........................................
// 436........765..............140.......+....................859.............*.........+.................960........668.......................
// ...*982...........=..........=....203......266.263...375*....=...402....691..-....................*..........575....................13......
// .............114...588...............*............*......631........*.......952...463..14.......661..........=...706......*333.........595..
// ...194.........*..............743...917.&......375.....................................*...............544*.......*....664..................
// ...*.....807..452....81..........*......969..#......309*................/....873....941...828.197..........427.728...............566...13...
// .243........*.....80.......329....470.......145.475.....111........*659..259....+........*....%........569..............%.....*....*....*...
// .........130......*....385*............123......................199.......................640.....463..%.........978....920...266..380.83...
// .....323........870.........+...........$.........466......453........................297...........*............*..........................
// ........*.=..............588.....*786......$.........*........*.......390*.....886...*....227...728..852.......606....*863.......916..396...
// .....538...287................301........133.....539..........33.537......466..$...793..+..........*...............218.....721........*.....
// ...............986.........=.......................................*...%...............222..-.......701.271...............#.........437.....
// ......*3.........*.626.68...419...740...........................806...976.......875.........174..............735.............=488...........
// ...790.........487....*................./532..13............................*....-.....503..........*11..734..........978.19......622.......
// ...................&....712.68=.619+.........*.......................863...596.....2.....*.......160.....+...&659........*.........-....-757
// 437*.......#........520...*..........304....568.974.255.318.183.........*.......&.....675......................................849..........
// ....161.....687.710.....854.............*.......*......*....&...441......891.....476..........616.......$........235..434.880...*..673+.....
// ..................*...............683.....800.120..............*....807..................................707.....*....-....*...74........562
// ....@...#988...487..#685..........-......*..............251.146.............................142@....74...........398....769..........238*...
// ....848....../................-.$.....662.........773..*...........895.......591...........................233..............................
// 797.........611..........@.186...429..........304*....468.....554....*..........*...960......82.......*810...+.534..660....645...313./......
// ......239..............509...............720*......................844..939=..508......*...........401............*.......*.......*...649...
// ........=........158.......$.....=...........200......409....982.....................46................126.....517....303.647.660...........
// ...530....=......*..........704.69...................*.......*..................@879........589..131.................*........*.............
// ......*..871...672....................611*........415.......283.569.21....842/........-109.&.......*.......157$...719.......679.$...........
// ....664..............664......668.........203....................&...%............................14..................427.......833..484....
// ....................*........*.......434.......796...........65............................................-479.126..*..............+.......
// .....382..........121.....836.........*........@...............*789.......624........350&..........*544............$.6.........882....513...
// ....%.....406.........................848........625...%...88.........382..+..971.................5......*622...........914....*....%.......
// ..............627....816........641..............*.....373./.............*..../...912..651.162........557........901...&.....503.337....59..
// ...357...........*.........552...*..816..........240......................636.....*...*.....*.............@..993....*.......................
// ......*934....961...=..43..*...324.....@...............726.888....370...........170.805...517........639.389....*..929.................953..
// .16...............408.*...94..................................*......&..............................*......../...9........605...............
// .......571....13......512........591+.......976.......895....489...........751.......474.760.........240.....931............*...............
// ...464../..................608..............*........*................$.94*........................................486.......172............
// ...*......121........=.....*.......$......909.......583............128........929...................765.............*............+....24....
// .............*.......762....230..422..285.....434......................390.....=.....921.................261....#...949.....382...903.*.....
// ............595........................*.......*...................833*..............%.......973..$....@...*.268........506*..........251...
// 967...................................25....234...........................306....281..........=..36..918.432....../406........344...$.......
// .....700*610.......=...839......917......33......610@................537....=....@............................%........20.402.@.....926.....
// ..............%.768...*....................*...@............93..161.%...............74$......%.........96..298..........%..+............+519
// ...........925.......586...................264..85...721....*...*.............................371.................822.=.....................
// ...............540...........-....447....................987.....305.............379@.707..............670...397...*..842....552.464........
// .....666......*....844....515.......*..............+114..............977...............&...393........*.........$.800...........*...........
// .....*...647...696..*..............203....................418.....19............522........*.......462................57...786..........561.
// ....691.....$.......756...165.....................596.32...%........#..280.259$..........398..............425.............*....719..796.....
// .............../.........=........1/..305............*.........451......&..........332.......706............&.......327.841...........*.....
// .74..........791.............=........+.....................+...-..................+..........*.....................*...............419..371
// ...*927..........352.......148..........401....459...+....998......$783........@............444..$.......959..106.366.......................
// ............190..........*......385.............*....846......................907.826..585.......447.441..*..*............7......871........
// .................142....944....$.................634.............587..@..930..........*......935.....*...819.29.....3......*35..............
// ......967....415*......................=980.....................%....58.-......317..74......../.....922..............-.207........../.......
// .........................................................................................................175....................369.233.....
// .........................+....645.$........%.....620.+429....951......616.................................*............524$.................
// ....799...551*602........920..+....503..654....-...*............*....=......395.........451....263.......897..................370...........
// ......-.......................................409......970....661.............*............+...*....48...................475..$........839..
// ..97...................../.....@497....%..........446$...*...............533..794.....432-.....167...*.....722...486........*...500...*.....
// ..............459......540.............110................569............&..................#.....................#........785.*.......455..
// ........815....*...........................*452......./......................365.........929....*978.=................709........+..84......
// ....427*......466.............608*796..............680......................*......&.........142.....603.................#......621..*......
// .........635............@....................302..................296-.....679...801..290..................464..............980......627....
// ....../.../........%...850.......*108....513*........656...*739........715...............@.......713.......*...................*............
// 354+..245.......629...........995.....................$..41.....=.....@.....................45..........840......506+...$.....148...........
// ..........995.................................&541............914.510.....950...../...........*53..28...................275........138......
// .............*812..665...../.........................101.308..............*......691.482.............*........902.585.......@.......*.......
// .........../........./...292...............#..........-....*....@307......661..........*.210......135....932%...........992..54..191..931...
// ...400..649...............................504.196.........88........................581.............................743*.............&......
// ...*.........140..............642....891.............309...............................................695......361..............603........
// ....170.643#..*.................*....*.......*24.....*....................932.291.....538....461.........*........*..275............&.......
// .............725......494......23...279...713..../....449............*........*...../...=......*..........434..............785..............
// .....991..........946.............................830.........136.439.24...519......289.......408...579........708.650*......*.370.13....410
// ......*..887........#..688.673.........218......................-...............941....................$.......%.......927.722....*.........
// ....124....*...........*..../....427....*.............312................................................922...........................307..
// ...........706...16..934..*.......*......608....459..&..........761.....................647..641...........*.............242............*...
// ..5*715..-........+........122.....262........./...........928....%............728..610*......*..502.....222..40.....923..+...........540...
// .........701.............=..............291...............*.........351.........*............141.%............*.../.....*....725............
// ..............314.......878....%.......*......=..820*.....988..204.....-.....889......119............797...........395....+.............287.
// ..................671........322....101......257.....733........@.....................=.............*..........544......600.......862.......
// ..421.......582...%..............................484...............565.....+...831...........695...384.#...592.=............240....../.904..
// ....*..........*........570...........&....=........*629......717&.*.......93......726../961....*......535..*........767../......715....*...
// ....439.....630............../..%...615...912......................777............*..............602.........567..3........107....$..77.....
// ....................914.....3...2.=.............763...&885......................185....182.......................*......-......+............
// ...372...383........*..............60.............*............&..38.681...............*.....459....../........117...504......358..480-.....
// ............+.990..33...........................834.......@..33......................494....*........181.66+................................
// ...............*......*...492..............176..........857...........376.315................954.....................*982.......763.........
// 329=..........179....245...*...61...........*...*................%......+....*.....352*509.........952#..69..620..423.............*.........
// .........................131.....*17......191.33.306...../.....144..503......491.............................................298...415......
// ...................$...................................426.........*...............526.669.....&498..698...$............447.....+...........
// .............575...142.617......890..............%...............212..730.519.971..&......*384.........@....18.219.........*................
// .......*537..*.........*........*.........677...587..407...120*........./....*...................................+......334..........700....
// ....944......636..848........743.....388..*....................109..........................................................540.40..*.......
// .................*....596............*....155..324...820.520.................=...............443...94...........621.276......*..+..910......
// ...............276.....-.........376...........*........*....................739......368....=..............428....*......434..........878..
// 932....28.....................-..=....207......959....................289.........196.*........................*...............-.......=....
// ...*........................172....#.#.....688.........25..944...725...&............*..110.....148...426.483..771../932......800............
// .947............................457....931*.............-....*...#.......834......721.........*.........*.............................477...
// .....*491......*.........*114.................191.....$...213........909*...................194............633....%...792..605.633...#......
// .............108......611.....+719...........*.....696........865...............120................=724...%....950.../......*...../.........
// ...320............*.................260/...121.........338...*........719.180.........516.....*.............................649.............
// .....#...643.......941......*160......................*......140...94....*...............*..39.789................*......&.........81...597.
// ............*..135.......532.................%90...608............*............+515....743.............+...194.993.669..259..+..............
// .....%....948.....*............262..695.712....................623.....*...................473........602...*...............83......679.....
// ..259.............447.............%.*...............363.............105...................@........=......+.........................*.......
// ......957....659........299..........................%...599..898.+.................464.......606.237..768..416@....=...............228.....
// .376..$.........*..........*..2.........@557......./.......*.*.....517..........859*.........*....................855...877.427.........*...
// .........*468..535......500....$................117......726.381........428...$................@........43....472.......*...*...........476.
// ......517................................951........%............-..249..@.....920...........859........*........*....825.393...15..........
// ...........770.......&16.....278...417......$.....626...-23....954.....#..............................868.......502............*............
// .....373..*...................%...*.....254................................................246.#530....................982....179....635....
// ......*...538.....................362...-...........162.........................180=........*..................278.......*............+.....
// ....138.......922..............................543................6....12....&.............92...150...............*.......994...............
// ................+.....+................388....*..........................*....788............../..................220.............834.......
// .....................301.593.597.............500..603......928....966................/.............536.......768.............800............
// ................*64........*.../..&.....924.........*........-...$....................203.............-...+..../...............*..423.&451..
// .............453....*......638.....314..*...896....459...............96...................186............581................846....*........
// ....&188.........624.400...............268....@...........................664...............*...12.943............#733......................
// .............................597...765................388......149..468.....+............698......*....143........................426.......
// .......................878...*.........875..............*..871*.....*..............929....................$.504*..............473.%.........
// ...245..........94.651..*.....915.........*.........40.440........236.................*511.45........994........753..................887....
// ...#..............*.....459............212...18*964.*.........=71..........768..827............./.....*......................567............
// .....787.2..781*....................................827....................*...*..............437.....813.......317.....102.....*333........
// ..........*.....285............@..-...........304.......821.622.....953...377.997......320....................@./.....%....*..........254...
// .......877..636.....42......772..419.....189..*................&....*.....................=.17......366*....563......228...153..............
// ...............*.....$................&....*...839......218.........449......................*..409.....69............................652...
// .....576......255..............593...397............469..%......#.......+568.......374......499....*...........541..477.........%137..*.....
// .......*............@319.................$.35..........*.....207...............808*.................933.737...........*.502............367..
// .....807....219../.....................436......226@...266........215...................................*...................................
// ..............*...769.....41*....922............................$..*.......271.........350..........677.346......................662....725.
// ..............175............979.*...#........215..............652..39......$....=61......*..154...................................*........
// ...426..............335*.........487.194.........*42...................790.............+.750.@......&..............253...337....617..717....
// ...+....908.............489.................../............14...278.../....953.......316.......*856.44.50...../.......*................$....
// .........%..90.................437..........848...........................*......714........708..........*223.588.....884....871.801........
// 494@..........*..33...........*.........779.....424.550....923............779.......*...340........738.......................*....*..131.603
// .....50..481.........=.....643...........@......%............*.......815......681..263....*........*...5.....256*11.377$....872.903.*.......
// .....*...............635.......698..........583...148........708........................323.243..201.....................*..........377.132.
// ...502........883............/..*..............$...*....994.........*....479@.................$......804.443..........584...................
// .............*..............893..581..534........376..+..........174.119.........138............670...*....$.834............4...............
// .....+....234...904.323..=..............&.894..........439.@838............*.....*........47........555........*............*........932....
// ...594............*...$.654.....+.........*........................84.*....7...231.$102.......286.......*760....817.......719.........*.....
// ..................620............806......866.................559......440...........................310...........................590..547.`))

/* 
  day 4
*/
const scratchCards = (input: string) : number => {
  const games = input.split('\n');
  let winningNumbers = [];
  let gameNumbers = [];
  // part 2
  let gameMap = new Map();
  let gameNum = 1;
  let result = 0;

  for(let game of games){
    let temp = game.split('|');
    let temp1 = temp[0];
    let tempGame = temp1.split(":")[1];
    let tempWinning = temp[1];
    
    gameNumbers.push(tempGame.split(" ").filter(val => isNumeric(val)));
    winningNumbers.push(tempWinning.split(" ").filter(val => isNumeric(val)));
    //part 2
    gameMap.set(gameNum, 1);
    gameNum++;
  }

  // part 1
  // for(let i = 0; i < gameNumbers.length; i++){
  //   let winningSet = new Set(winningNumbers[i]);
  //   let game = gameNumbers[i];
  //   let found = -1;
  //   for(let num of game){
  //     if(winningSet.has(num)) found++;
  //   }
  //   if(found != -1){
  //     result += Math.pow(2, found);
  //   }
  // }

  // part 2
  for(let i = 0; i < gameNumbers.length; i++){
    let winningSet = new Set(winningNumbers[i]);
    let game = gameNumbers[i];
    let found = 0;
    for(let num of game){
      if(winningSet.has(num)) found++;
    }

    let temp = gameMap.get(i+1);

    //for the number of winning numbers
    for(let j = 1; j <= found; j++){
      gameMap.set(i+j+1, gameMap.get(i+j+1)+temp)
    }
  }

  // part 2
  let gameMapValues = gameMap.values();
  let val = gameMapValues.next().value;

  while(val){
    result += val;
    val = gameMapValues.next().value;
  }
  //

  return result;
}

// console.log(scratchCards(`Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
// Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
// Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
// Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
// Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`))

// console.log(scratchCards(`Card   1: 29 21 67 44  6 13 68 15 60 79 | 75 44 60 30 10 68 40 70 36 79  3 13 64 15  4 46 21 22 67 47 73 86 29 53  6
// Card   2: 15 61  5 39 42 79  4 81 72 89 | 74 79 20 81 72 85 25 76 36 49 51 18 34 90 57 17 11 24 89 73 19 37 61 54  2
// Card   3: 75 31 33 22 49 70 37 98 92 94 |  1 87 73 92 57 94 84 10  5 79 69 74 96 37 40 55 18 21 85 93 71 49 70 22 39
// Card   4: 76 59 23 34 55 41 47 92 58  5 | 16 70 56 19 79 30 85 58 88 75 71  5  8 64 12 23  9 46 34  4 94 37 48 82 47
// Card   5: 48 77 74 18 44 34 71 38 67  1 |  8 78 73 19 39 50 11 54 69 37 79 18 66 77 52 94 74 34 71  1 48 85 67 95 93
// Card   6:  1 30 41 34 51 23 64 14 18 74 | 38 98 13 67 39 65  1 29 28 75 95 71 60 88 20 86 59 63 36  3 15 57 58  4 42
// Card   7: 70 27 20 85  2 34 55 49 24  5 | 19 20 15 48 70 26 89  7 55 44 76 53 63 49 93 68 23 59 72 73 52 41  9 11 94
// Card   8: 64 17 56 38 85 53 88 22 51 92 | 22 10 37 24 65 25 63 82 64  5  1 88 17 73 39 78 53 36 71 92 23  9 85 33 38
// Card   9: 99  7 22 85 41 15 84 10 42 34 | 16 52 65 26 95 37 28 44 21 36 13 89 48 51 71 83 49 86  9 12 33 32 61 72 73
// Card  10: 19 86 25 64  6 95 74 55 68 12 | 51 46 95 84 27 87  7 12 18 81 19 66 33 26 94 16 97 86 74 31 55  6 30 60 85
// Card  11: 45  6 14 25 88  1  5 26 91 28 | 10 42 34 19 28 18 91 47 71 29 66 94 43 82 65 70  3 30 64 52 83 27 85  4 60
// Card  12: 33 47 56  8 42 95 24 15 83 93 | 93 56 53 95 43 55 73 77 67 47 81 27  3 19 15 79 46  7 42 54 91 10 24  6  5
// Card  13:  2 18 45 43 56 82  7 23 16  4 | 70 56 74  4 83 23 98 57 20 86 87 30 28 89 77 37 75 10 41 58 32 21 35 84 66
// Card  14: 33 91 58 32 75 37 88 51 83  8 | 92 35 91 56 10 75 52 64 97 16 58  9 26 15 86 99 13 69 70  6 40 12 51 93 95
// Card  15: 18 94 82 39 93 70 90 85 37 91 | 29 94 68 22 47  4 64  1 37 75 90 95 54 56 12 48 80  6 40 38 55  2 30 49 92
// Card  16: 78 98 80 34 43 51 90 25 26 59 | 83 31 37 79 54 99 98 96 27 16 50 36  4 15 14 80  2  6 33 81  3 24 92 52 45
// Card  17:  6 74 89  4 22 95 54 97 28 99 | 32 24 60 83 89 62 79 82 91 25 43 40 52 23 50 71  6 86 64 51 58 63 36  1 41
// Card  18: 28 73 36 17 42 26 15 79 13 80 | 11 24 85 84 93 63 42 16  7 19  1 38 44 54 98 59 88 91 35 81 82 95 77 30 26
// Card  19: 45 38 16 35 25 72 97 19 96 46 | 21  9 83 49 93 50 92 88 62 46  4 61 69 85 82 51 43 86 81 47 20 53 15 84 91
// Card  20: 36  9  7 26 53 48 25 66 76 59 | 90 16 20 79 27 40 86 77 41 15 67 52 34 51 95 64 29  2 47 57 58 24  4 50 84
// Card  21: 26 89 64 53 45 95 32 90 24 65 | 80 46 34 33  8 19 94 47  5 21  9 68 73 29 48 82 26 36  4 15 10 74 14 42 79
// Card  22: 95 78 69 14 44 54 97 58 66 43 | 75 95 64 54  3 53 20 69 86 22 52 23 59 31 78 45 61 90 50 66 76 63 91 38 79
// Card  23: 46 59 36 40 60 10 38 72 20 91 | 21 40 99 22 27 20 57 59 76 78 10 85 97 71 98  1 24  6 72 58 60 36 38 63 46
// Card  24: 75 92 32 12 23 89 48 35 28 95 | 23 75 59 58 25 70 18 48 27 92 35 32 53 83 89 64 79 87 10 68 28 30 95 61 78
// Card  25: 64 30 37 36 70 35 26 75 80  7 | 11 10 28 40 64 94 31 98 73 57 70  8 88 30 20 80 85 75 92 14 37 27 77 41 76
// Card  26:  9 15  4 90 10 67 44 72  3 20 | 64 41 96  2 69 73 61 67 84 58 34 13  3 46 99 48 55 79 31 38 75 12  8 76 32
// Card  27: 48 15 97 86 38 37 75 64 27 10 | 96 85 54 88 80 64 11 70 37 50 86 24 75 63 15  3 48 27 17 65 83 97 22 74 10
// Card  28: 15 48 89 62 35 81 17 77 16 28 | 92 22  2 78 74 80 12 85 73 42 17 38 11 46 79 69 65 82 47 28 30 62 96 76 66
// Card  29: 97 84 88  6 87  4  9 23 43 39 | 64 35 18 36 33 32 39 61 63 93 84 23 49  3 31 60 81 97 17 37 57 79 74 30 65
// Card  30: 83 80 61 52 28 84 98 91 79 57 | 62 40 82 31  8 23 95  2 71 93 48 36 43 39 32 87 81 60 18  6 64 90 26 47 85
// Card  31: 98 40 94 66 28 32 46 88 36 24 |  4 50  3 21 61 57 63 85 39 11 27 52  7 96 25 91 34 95 71 76 67 23 22 19 99
// Card  32: 58 64 75 63 21 77 74 47 71 87 | 71 82 95 17  6 18 14 87 63 65 39 97 79  2 90 21 48 15 23 33 62 67 31 57 88
// Card  33: 35 53 67 16 68 20 60 39 47 13 | 71 38 80  7 94 95 44 18 27 64 86 23 81 46 31 56 52 73 97 37 58 29 79 40  6
// Card  34:  8 44 93 30 31 81 10 51  1 96 | 73 99 72 32 36 53 28 44 42 29 48 19 34 15 92 75 60 97 39 78 63 43  4 91 95
// Card  35: 74 83 62 26 55 81 84 90 53  2 | 77  3 75 54 71 32 18 21 56 70 65 61  4 96 31 72 11 35  6 91 64 38 87 73 30
// Card  36: 51 54 86 95 90 64 41 18 83  9 |  2 45  4 92  1 62 50 63 78 44 27 58 94 74 30 59 36 71 79 93 52 77 66 80 65
// Card  37: 94 67 88 44 25 18 99 14 63 89 | 17 89 32 71 18 63 19 85 88 91 65 25 14 30 75 48 94 72 99  9 67 36 44 16 62
// Card  38: 59 19 11 51 28 64 91 93 60 85 | 93 95 35 84 58 12 15 85 28 56 59 94 27  6 29 51 41 18 22  7 19 11 13 97  4
// Card  39: 19 47 29 82 31 27 44 66 67 45 |  1 36 31 67 11 54  8  3 45 56 66 73 27 47 53 14 86 82 30 29 44 60 77  7 19
// Card  40: 93 99 27 65 16 26 72 42 71 76 | 16 96 72 68 15 27 89 26 51 29 69 65 98 93 37 22 99 76 50 91 88 71 47 32 42
// Card  41: 23 42 80 53 72 98 95 11 21 93 | 47 80  4 30 23 27 82  3 58 93 66 54 35  8  2 53 14 42 75 61  7 17 36 45 89
// Card  42:  8 28 34 38 71 92 60 51 23 80 | 60 12 15 67 47 97 86 26 90 80 85 54 92 31 64 98  7 55 66  9 82  1 10 35 34
// Card  43: 77 83 18 61 56 78 46 48 80 45 | 41 61 93 45 16  9 38 51 11 48 99 22  3 27 56 66 46 24 80 78 83 75 77 67 18
// Card  44: 43 88 33 17 40 90  5  9 94 42 | 97 42 37 62 32 92 43 64 29 88 40 45 18 58 14 36 46 94 77 82 87 52 71 17  9
// Card  45: 26 76 46 27 66  8 63 67  2 99 | 11 76  8 80 62 46 92 67 74 18 54  2 63  9 99 66 57 27 26 51 58 73 12 50 59
// Card  46: 47 77 74 14 85 90 60 17 53 54 | 98  6 96  8 67 24 74 50 97  7 42 81 20 17 26 16  1  3 62 92 41 90 83 78 44
// Card  47: 52 48 72  1 47 55 36 91 89 82 | 35 62 93 40 36 47 43 82 48 72 89 13 69 99  1 52  2 97 18 55 24 86  9 91 90
// Card  48: 76 75 21 23 91 58 26  7 86 16 |  6 27 86 85 75 21 24  9 46 84 79 89 65 69 53 10 64 28 74 66 43 20 67 99 87
// Card  49: 13 53 58 15 69 68 19 30 48 43 | 13 48  1 41 68 93 34 43 26 15 53 17 91 51 50 19  6 79 39 61 47 30 96 69 58
// Card  50: 24 44 29 16 92 57 86 76 88  3 | 46 30 10 55  4  6 48 41 21  8 67 64 59 13 72 77 22 19 15 27  7 66 84 96  1
// Card  51: 90 36 71 21 76 64 86 79 48 98 | 76 64 53 42 71 59 23 90  9 79 98 27 48 91 13 96  7 21  5 36 33  8  6 86 31
// Card  52: 98 86 23 13 94  8  4 16 96 58 | 23 11 32 34 37 28 76 87 96 42 99 67 35 98 26 36 81  8 65 33 24 60 25 43 45
// Card  53: 81 16  7 78 24 48 84 26 42 61 | 81 78 90 18 24 96 62 61 65 38 54  3 84 26 73 30  6 43 20 49 10 36  8 16 89
// Card  54: 30 80 89 63  7 25 39 68 37 27 | 46 92 78 50 14 33  9  3 95 81 88 98 67 90 94 29 60 39 21 79 11 75 64 61 23
// Card  55: 87 43 58  6 69 78 56 19 64 16 | 87 48 69 53 77 26 31  2 78 19 73 57 76 23 70 44 29 13 80 56 92 82 79 45 12
// Card  56:  6 45 94 77 64 44 74  1 22 37 | 63 45 97  2 13 12 62 11 58 46  4 79 70 53 49 24 68 56 87 34 99 32 67 92 28
// Card  57: 34  1 73  9 87 21 65 39 37 69 | 83 86 41 18 13 32 10 73 75 39 96 52 30 31 63 20 48 33 23 58 17 85 82 71 68
// Card  58: 41 16 68 44 72 62 34 39 81 79 | 78 87 16 27  1 73 68 60 95 59 42 14 89 92 83 94 75 50  6  3  8 48 26 13 76
// Card  59: 45 57 86 29 44 51  6 42 88 31 | 22 13 59 94 83  5 66 17 78 92 64  3 72  8 10  2 12 52 27 79 54 58 18 39 70
// Card  60: 78 56 95 89 68 18 98 42 44 52 | 76 20 51 71 12 22  3 54 70 84  7 39 64 87 86 30  4 83 15 74 37 94 21 82 13
// Card  61: 18 84 14 96 43 38 85 73 71 53 | 92 98 94 23 32  5 30 58 51 68 78 47 75 36 61 89 34 81 35 37 80 44 93 76 69
// Card  62: 73 61 14 52 47 97 93 29 40 37 | 94 27 73 29 47 71 52 22 61 81 93 65 78 35 79 75 99 97 72 14 40  2 30 37 55
// Card  63: 34 13 11 98 36 78 96 31 74 20 | 14 20 85 57 84 88 96 36 50 13 78 34 82 28 62 98 11 52 33 74 55 90 61 31 93
// Card  64: 98 23 79 37  7 21 14 83 12 87 | 86 30 64 90 34 52 97 42 69 81 79 59 63 36  8 21 44 23 13 87 98 76 49 56 37
// Card  65: 11 73 35 16  6 27 63  9 74 51 | 54 84 35 11 49 19 91  6 32 73 99 26 53 16 63 27  9 51  7 85 58 59 33 78 74
// Card  66: 98 95  7 47 92 66 97 11 62 71 | 14 95 11 62 20  4 42 90 51 99 58 97 60 47 71  7 76 66 30 98 57 36 35 92 94
// Card  67: 33 36 32 60 74 54 41 27 88 93 | 22 82 86 58 30 13  9 61  2 15 80 66  5 29 77 78 53 72 24 89 19 12  1  7 73
// Card  68:  1 56 31 24 87  4 49 57 72 91 | 61 40 82 34 55 27 57 73 24 31 47  4 90  6 56 91  1 49 32 98 75 72 94 87 63
// Card  69: 95 32 15 58 27 45 79 23  6 98 | 69 63 18 95 91  8 48  7 38 10 75 26 61  2 12 34 62 22 81 94 67 40 14 25 52
// Card  70: 98 80 82 66 65 41 42 27 94 77 | 77 41 98 27 42 80 79 62 33 63 82 34 14 61 81 94 59 51 52 65 71 57 39 12 66
// Card  71: 69 34 98 15 16 82 49 44 10 19 | 43 96 17 53 89 76 94 45  5 81 29 77 83 75 11 60 87 67 47 22 64 88 18 59  1
// Card  72: 77 18 36 40 80 63 65 14 29 55 | 79 58  7  4 38 85 63 53 65 91 89  2 14 44 55 20 40 26 84 80 35 57 76 74 18
// Card  73: 63 23 39 12 22 35 48 40 84 75 | 79 61 40 58 23 48 75 97 87  4 81 29 84 68 63 51 74 53 35 39 33 24 22 12 60
// Card  74: 35 81 48 36 33 42 82  6 30 31 | 35 31  6 82 59 98 97 53 78 96 46 64 94 79 23 14 74 13 16 56 48 47 81 41 32
// Card  75: 62 43 47  1 15 50 77 14 85  4 | 70 46 16 69 85  3 30 96 62 99 27 47 59 49 26  9 57  1 50 73 94 97 28 20 29
// Card  76: 95 35 81 12 94 26 61 41 38 29 | 45 16 82 99 40 32 17 86 29 91 21 63 67 19 36 20  2 71 50 89  9 44  8 90 85
// Card  77: 74 85 93 55 27 86 16 54 73 82 | 13  3 19 49 11 62 68  7  2 77 25 79 71 61 81 29 84 47 78 32 91 34 15 43 20
// Card  78: 73 62 42 85 54 15  6 95 97 47 | 30 33 51  1  6 47 72 31  5 97 54 17  2 65 49 38 78 82 27 21 36 22 42 24 18
// Card  79: 20 51 62 17 82 37 90 45 98 95 | 20  2 90 40 43 71 60 62 75 16 77 14  6 15 17 52  8 95 32 66 54 45 84 61 70
// Card  80: 64 26 54  2  9 18 92 30 97 48 | 30 64 61  7 37 83 89 36  5 46 17 59 87 51 88 50 15  1 71 35 43 11 14 95 28
// Card  81: 63 57 72 69 11 90 85 30 64 71 | 37 77 13  9 61 60 23 54 62 64  7 56 48  1 85 73 41 68 29 10  3 92 35 12 26
// Card  82: 33 40 45 39 19 41 57 81 73 30 | 97 62 18 89 17 73 46 63 30  6 59 93 82 69 76 39 13 38 23  8 51 57 68 27 48
// Card  83: 92 96 72  5 13  6 45 52 57 54 | 56 14 63 29 19 39 62 76 34 91 43 61 42 27 72 71 89 25 99 23  6 12  7 97 30
// Card  84: 24 62 78 70 93 79 31 95 51 71 | 83 64 12 11 59 29 39 53 26 45 28 74 41  9 89 15 13 37 79 68 95  8 57 96 77
// Card  85: 71 31 76 93 84 57 72 48 73 74 | 51 11 53 68 87 67 31 91 92 15 24 65 58  2 82 42 18 97 61  7 10 47 75 38 27
// Card  86:  9  2 73 47 29 25 53 43 32 22 | 46 15 56 94 80 77 16 12 51 23 78 74 71 35 57 96 41 26 62 63 67 17 61 70 99
// Card  87: 68 37 86 81 50 77 79 76 52 57 |  3 23 65 50 28 29 97 20 48 37 52 38 82 31 66  8 81 86 68 92 79 57 18 76 77
// Card  88: 35 62 52 81 69 49 50 17 84 44 | 96 75 35 39 47  9 88 79 97 13 21 12  2 31 53 67 71 99 77 24 45 84 40 51 94
// Card  89: 87 64 77 62 95 22 21 34 40 49 | 82  6 52 87 34 49 86 63 72 40 22 77 56 62 10 37 64 67 21 73 99 91  2 95 17
// Card  90: 95 78 72 12 23 42 45 73 31 22 | 78  7 10 22 47 29 73 31 97 40 12 15 50 16 87 42 95 45 81 63 69 79 37 23 92
// Card  91: 37 80 51 67 32 59 40  8 38 25 | 38  8 26  1 20 67 80 54 40 51 85 21  3 37 52 32 14 66 13 25 15 23 59 56 48
// Card  92: 87 51 29 92 17 55 18 88 73 33 | 33 37 62  7 19 29 16 57 87 18 60 17 93 73 39 92 63 32 48 65 13 51 70 55  1
// Card  93: 31 40 98 94 45 46 44 83 78 10 | 31 40 68 21 97 45 11 59 98 17 55 10 71 37 46 93 96 78 32 76 39 44 83 48 56
// Card  94: 50 66 26 72  1 77 41 19 97 81 | 49 59 53 42 86 54  6 35 33 91 85 15 12 45 92 38 96 77 73 65 95 46 50 48 19
// Card  95:  2 20 92  4 66 97 30 87 17 14 | 20  2 29 46 97 72 93 60 89 39  6 94 12 13 33 96 30 59  1  5 53 22 83 77 78
// Card  96: 30 73 25 16 48 86 50 54 33 41 | 21 33 26 45 86 37 41 16 48 13 60 58 28 61 76 54 96 25 50 95  2 67 65 68 73
// Card  97: 54 37 39 24 21 62 26 35 25  2 | 10 11 97 16 39 73 35 55 40 93 87 21 14 90 41 36 61 63 13 23 86 96  6 12 38
// Card  98: 25 28 75 32 58 13  4 26 43 71 | 86 33 30 28  4 54 26 21 56 75 17 79 69 58 24 13 81 60 32 84 71 18 10 25 43
// Card  99: 25 86 74 99 26 98 38 59 18 73 | 99 95 10 24  4 20 91 14 46 78 53 34 98 41 73 84 22 43 45 57 86 26 25 74 59
// Card 100: 58 62 97 63 96 95  2 78 17 11 | 59 20  7  2 43 37 28 69 77 33  1 64 63 82 17 51 42 41 75 95 25 83 14 32 22
// Card 101: 84 10 35 37 61 80 65 77 13 92 | 87 80 77  7 58 62 26 35 24 96 37 15 36 91 65 84 83 76 32 94 78 31  6 59 48
// Card 102: 93 24 66 34 86 79 18 68 14 21 | 65 28 80 40 99 67 31 58 71 34 21 19 50 84 64 70 98 74 68 29 87 41 14  5 89
// Card 103: 11 24 96 69 54 77 33 80 87 34 | 77 63 24 56 58 26 93 86 94 27 33 96 36 92 75 49 43 16 54 29 87 81 28 80 34
// Card 104: 13 73 49 36 89 35 76 54 66 83 | 71 41 81 72 61 83 70 76 67 64 26 88 19 10 20 16 35 45 12 73 38 66 92 74 79
// Card 105: 18 74 53 37 19 30 72 84 41 86 | 24 49 23 36 61 12 56 64 85 15 66 40 94 76  2 69 67 38 45  9 48 21 99 20 60
// Card 106: 39 64 95 30 75 41 17 63 84 94 | 54 41 95 55 74 69 17 85 46 27  6 25 83 93 56 48 49 76 22 61 33 34 31 84 37
// Card 107: 42 15 62  4 44 48 14 82 97 70 | 19  9 28 77 70 83 71 85  4 76 38 89 30 21 87 65 13 29 97 31 27 64 74 54 93
// Card 108: 81 38 35 41 74 87 65 46 50 17 | 79 11 58 34 88 35 93 26 84 71 53 56 16 97 77 94 67 54 62  2 90 98 63 28 61
// Card 109: 29 11 71 84 90 94  1 23 54 88 | 84 77 12 87 14 35 49 89 75 63 37 64 10  1 91 97 98 25 86  3 27 57 58 50 96
// Card 110: 29 68  4 60 82 97 38 72 78 75 | 33 50 61 25 44  8 13 46 87 83 49 74 76 39 66 36  6 70 73 81 64 18 24 30 79
// Card 111: 13 86 29 24 16 78 88 98 46 93 | 72 87 69 34 76 56 66 35 81  7 36 95  8 15 53 11 25 99 74  9 67 30 85 91 82
// Card 112: 33 68 45 62 50 42 38 58 22 34 |  4 78 35 42 50 79 52 77 27 75 38 58 34 68 30 62 39 40 33 22 19 37 15  3 45
// Card 113: 59 45 81 42 67 36 32 86 66  6 | 42 62 21 14 38 33 55 36 18 78 49 37  6 10 44 19 73 77 97  1 67 43 25 81 13
// Card 114: 79 82 15 39  3  7 24 71 93 61 | 93 37  3 47 24 31 29 61 68 40 71 34 58 82 79  7 50 83 98 80 74 30 39 18 15
// Card 115: 11 93 43 52 49 88 28 14 55 39 | 55 28 43  1 16 93 42 49 78 31 11 84 52  3 15 72 88 39 14 85 89 36 19 58  8
// Card 116: 18 16 75 88 25 62 33 22 97 98 | 40 38 23 34 37 56 68 80 16 75 81 22 85 12 61  4 27 69  1 83 26 98 76 78 29
// Card 117: 77 39 53 44 81 90 98 52 38  5 | 80 90 69 20 61 35  4 18 83 39 56 36 95 44 98 81 76 23 60 43 38 17 77 55 51
// Card 118: 13 20 72 41 52 73 17 86  2 84 | 10 22 75 54 33 46  9 18 64 27 56 72 42 67 70  1  2 71 94 40 35 73 55 83 68
// Card 119: 48 52 33 58  7 56 71 89 10 18 |  7 66 69  5 70 58 84 92 71 89 57 52 37 18 21 31 12 75 62 79 56 30 26 48 11
// Card 120: 83 74 37 86 32 14 68 60  6 49 | 31 36 83 40 39 47 24 49 68 27 15 82 60 13 38 89 91 85 46 86 37 74 32  6 22
// Card 121: 24 66 45 22 23 36 70 43 11 80 |  9 56 26 33  8 73  4 18 72 69 78 30 17 96 95 89 12 45 91 77 84 28 79 50 19
// Card 122: 74 83 69 12 24 60 61 62 70 76 | 91 24 60 43 84 80 53 16 50 71 61 70 83 33 92  4 59 68 99 31 74 67 22  2 36
// Card 123: 13 79 14 97 25 94 53 99 12 61 | 96 40 67 80 79  1 56 22 25 83  2 72 43 28 64 14 66 65  4 94 59 31 11 21 19
// Card 124:  9 37 93 79 63 83 85  8 34 91 | 28 31 27 69 17 56 15 34 16 90 25 81  4 52 36 68 93 55 97  2 58 10 66 41 14
// Card 125:  9 13  1 15 34 77 14 27 69 45 | 11 28 31 76 39 44 47 96 93  5 91 80 17 68 87 98 24 71 34 36 63 72 49 70 30
// Card 126: 55 85 91 63 19 25 99 48 20 16 | 32 73 77 81 15 19 86 21 29 49 26 33 24 34 69 42 79 11 40 85 18  1 48 90 52
// Card 127: 41 35 53 27 30 82 23 56 58 84 | 79  9 46 95 32 11 56 82 49 19 72  8  7 13 93  1 67 33 66 18 12 59 28 98 96
// Card 128: 78 89 61 31 74 19 81 22 24 90 | 94  7 10 52 76 13 51 23 48 79 34  4 66 45 30 82 96 84 16  5 81 57 37 83 35
// Card 129: 76 15 41  7 79  4 73 12 88 92 | 64  8 58 70 29 56 87 94 59 48 71 53 22 39 81 36 26 45 63  6 54 27 20 47 62
// Card 130:  9 37 30  6 69 20 72 91 22 50 | 83 91 40 50 72 26 94 29 18  1 65  7 79 31 98 47 63 77 97 89 84 60 82  6 61
// Card 131:  4 84 24 97 12 27 68 40 71 21 | 69  6 81 50 18 88 59 54 29 32 71  3  8 75 41 68  4 17 99 79 20 27 24 40 21
// Card 132: 18 17 10 91 62 28 19 97 26 80 | 20 11 95 18  9 38  5  2 97 62 12 30 72 79 86 81 37  7 45 41 17 16 34 52 51
// Card 133:  2 20 42 44 38 99 78 83 25 30 |  3 59 84 66 12 30 14 76 20 78 45 97 42 79 99  8 16 91  2 40 38 56 89 81 90
// Card 134: 38 53 13 31 62 39 15 92  6  5 | 38 84 31  1 11 66 12 50  9 35 41 10 20 89 54 82 63 46 39 43 91 32 90 86 34
// Card 135: 52  5 88  6 18 45 16 19 23  9 | 82 50  3 21 23 64 96  5 17  6 53 36 78 44 66 31 72 15 79 27 86 88 48 18 81
// Card 136: 21 80 86 17  5  8 27 85 31  7 | 49 18 54  7  2 84 44 43 95 40 87 24 17 81 78 56 30 79  9 71 46 76 33 29 85
// Card 137: 46 28 18 88 71 63 78 58 50 33 | 75 20 53 56 30 64 10 11 47 59 91 24 67 76  8  1 43 37 87 52 16 39 84 69 89
// Card 138:  1 95 44 97 17 20 46 40  3 18 | 43 64 44 29 36 61 95 62 50 41 10 72 67  5 82 42 70 55  3 30 24 12 78 81 47
// Card 139: 87 57 36 27 16  3 53 79 66 69 | 83 16 77 41 50 87  8 66  5 91 30 61 82 38 67 24 96 11 17 89 36 45 65 12 27
// Card 140: 45 94 91 85 24 52 16 76 96 75 | 15 35 87 57 23 56 68 97 70 17  3 83 89 60 11 95 79  5 63 80 66 30 72 25  2
// Card 141: 32 34 70 25 16 98 59 64 69 62 | 87 34 22 96 20 19  8  9 61 68 35 28 75 16 88 42 77  6 43 85 14 66 44 67 36
// Card 142: 72 73 81 37 90 31 83 91 95 32 | 82 14 62 45 77 31 17 46 20 36 92  8  1 74 42 84 26 60 88 48 66 95 18 85 30
// Card 143: 23 94 85  5 75 22 39 80 34 58 | 73 40 64 54 42 56 93 26 94 33 71 55 82 72 31  2 59 60 29 41 15 17 76 99 52
// Card 144:  1 26 98  7 44 92 87  6 37 24 | 13 39 11 95  3 93 74 43  8 60 30 40 15  5 78 19 57 99 64 16 83 90 80 63  4
// Card 145: 69 82  7 40 94 28 75 85 74 10 | 98 36 56 86 95  9 16 20 49  6 24 84 83 15 17 57 19 72 89 34  4  2 61 77 44
// Card 146:  9 69 16 74 25 27 11 79 20 10 | 85 69 27 31 21  4  7 13  9 20 37 11 43 83 10 74 16 48 56 79 33 58 96 70 25
// Card 147: 75 14 66 51 86 50 34 57 16 18 | 83  4 68  1 38 84 73 58 86 76 74 66 75 72 44 22 26 87 34 60 95 14 45 40 90
// Card 148: 59 44 21 64 50 60 71 43 11 86 | 66 64 44 85 90 16 74 60 71  6 32 21 91 24 95 36 89 77  7 50 27 86 22 65 43
// Card 149: 64 70 95 44 86 90 19 87 47 15 | 98  9 14 82 17 67 25 60 26 10 95  5 81 39 76 85 52 43 49 23 27 99 50 19  6
// Card 150: 82 35 98 97 53 81 83 96 92 25 | 92 30 57 88 81 68 22 98 82 24 35 53 96 50 36 51 55 83 34 25 56 14 46 54 97
// Card 151: 68 82 83 72 49  5 78 25  4  9 |  4 27 79 49 68 84 34 78 32 82 21  3 77 86  5 48 33 11 53 19 62 26 52 57 87
// Card 152: 64 91 43 65 86 72 35 45 60 97 | 45 62 72 22 41 96 43 76 64 86 92 73  2 21 77 91 27 35 63 71 65 10 97 60 36
// Card 153: 13 82 94 65 49 61 32 31 48 97 |  7 86 75 65 89 22 51 49 77 81 97 37 61 24 34 82 57  6 46 84 12 70 63 94 13
// Card 154: 51 18 36 95 83 99  7 13  9 31 | 95 54 32 48 15 63 85 51 76 36  6 39 73 58 84 27 99 87 31 50 46  9 52 13 18
// Card 155: 73 26 15 84 93 70 91 54 92 12 | 22 92 54  6 67 36 13 15 93 89 55  5 70 71 26  9 16 27 91 21 25 73 82 12 84
// Card 156: 66 88 92 46 57 48 80 40  3 28 | 80 53 66 78 71 95  3 24 90 62 57 64 46 48 88  4 26 31 28 63 19 32 40 23 92
// Card 157: 14 98 81 93  3 94 39 32 12 25 | 58 30 88  8 54 18 50 78 52 36 68 73 74  9 79 49 39 35 15 86  2 10  3 44 65
// Card 158: 72 40 66 34 87 20 54 79 69 16 | 53 65 38 67 51 75 99 39 66 76 21 79 77 13 93 48 17 88 85 35 47 58 72  8 83
// Card 159: 10 83 69 13 53 41 39 37 55 74 |  9 27 90 53 52  2 42  3 62 37 32 61 35 39 95 36 83 26 69 28 29 71 77 16 54
// Card 160: 63 90 68  4 36 61 56 49 64 32 | 36 18 19 37 42  2 23 39 26 40 96 33 55 94 31 51 54 67 89 76 86 95 24 68 11
// Card 161: 38  7 25 30  8 39  9 34 19 28 |  3 10 86 85 13 73 61  9 31 43 40 74 60 67 83 70 57 78 81 63 34 27  8 28 97
// Card 162: 61 38 82 86 51 16  9 17 69 60 | 81 82 12 80 46 65 97 16 49 72 73 71 92 18  1 88 30 26 66 60 74 54 34 13  8
// Card 163: 61 58 38 73 62 21 25 71 49 44 | 79 21 93 85 90 65 36 78 74 94 24 20 39 14 13 63 75 99 42 28 55 40 86 38 89
// Card 164: 25 83 54 70 30 76 50  3 36 21 | 86  3 59 66  9 92 81 48  1 71  6 65 69 50 13 25 88 72 32  2 99 70 61  7 58
// Card 165: 98 70 26 66  7 42 78 93 84 60 | 30 31 38 22 11 25 10 75 46 41 72 60 40 65 37 33 63 51 36 52 76 73 32 58 79
// Card 166: 92 53 96 58  8 65 80 90 88 23 |  9 77 98 21 34 60 31 14 44 26 81 90 91 45 69 99 50 12 36 55  8 48 47 24 54
// Card 167: 14 88 33 30 20 99 64 48 60  5 | 68  2 58 90 63 36 12 94  9 71 96 10 29  1 91 53 67 17 85  8 49 57 69 25 59
// Card 168: 32 18 96 90 74 64  4 86 25 85 | 98 27 95 22 54 40 59 82 19 10 91 87 60 66 45 43 16 72 47 92 62 29 73 88 93
// Card 169:  3 47 80 78 17 68 20 36 54 87 | 75 52 73 43 45 29 53 10 65 89 84 37 90 13 15 40 76 91 88 74  9  7  4 22  1
// Card 170: 28 89 99 67 32 94 21 65 83  1 | 94  2 11 52 27 56 87  1 33 68 99 17 28 44 65 49 83  4 67 32 89 59 23 96 82
// Card 171: 20 76 49 15 91 67 50 97 96  3 | 70 21 96  8 22 34 67 41 48 20 33 56 47 29 37  3 14 63 17 32 51 76 12 52 65
// Card 172: 56 58 86 18 16 79 41 67 12 42 | 20 80 89 33 38 76 48 37 64 57 45 27 36 86 58 41 73 50  7 83 51 43 99 97 17
// Card 173: 15 48 73  6 92 20 50 75  8 32 |  7 55  3 79 44 85 35 30 12 81 60 33 80 56 59 84 70 98 65 61 51 45 99 38 29
// Card 174: 30 50 22 15 20 99 34 28 72 56 | 20 15 99 28  8 50 40 30 83 56  7 10 74 68 39 58 67 70 47 35 38 37 34 22 72
// Card 175: 41 77  9 57  1 24 48  6 92 61 | 75 24 61 92 22 84 76 20 88  1  6 14 74 12 59 71 40 77 41 68 57 64 58  9 63
// Card 176: 18 83 76 28 68 52 50 99 67 90 | 28 99 50 65 90 67 83 76  7 66 38 81 60 36 51 18 27 40 52 56 80 68 91 43 61
// Card 177: 95 28 89 86 65 42 41 44 92 21 | 93 28 22 86 97 18 14 84  7 42 66 72 33 95 76 69 49 59 45 98 26 57 67  1 24
// Card 178: 61  7 31 44 69 71 41 65 27  1 | 41 57 75 32 61  4  1  2 65 64 71 81 87 60 67 47 31 69 29 99 45 43 84 15 28
// Card 179: 80 61 21 75 10 86 36 84 71 43 | 77 80 82 43 84 63 99 21 93 86 60 46 61 36 76 19  3 69 57 75 71 10 13 20 95
// Card 180: 66 16  8 74 36  9 51 40 20 42 | 82 16  8 51 36 32 20 11 79 13  9  3 97 98 33 68 69 29 66  5  7 25 42 40 74
// Card 181: 36 32 49 85 15  6  4 56  1 62 | 80 77 45 83 35 62  9 48 43 17 36 27 32 85 11 89 15 49 56  6 47  1  4 22 20
// Card 182: 15 30 92  9 78 16 38  8 12 34 | 98 52 60 24 80 87 46 13  5 54 23 49 97 89 39 48 40 86  7 32  3 69 81 41  8
// Card 183: 83 16 69  4 53 41 11 65  6 81 | 12 92 35 51 67 71 55 14 73  1 74 80 82 17 94 43 23 78 63 66 96 30  7 61 29
// Card 184: 19 92 71 25 97 80 69 96  3 52 | 98 96 56 69 58 13 65 37 19  3 16 71 43 10 14 21 18 92 97 80 38 25 87 66 57
// Card 185: 38 95 97 10 59 93 98 37 43 81 | 12 34 18  2 14 48 35 86 27 96 82 23 37 21 61 63 68  9 17 69 13  5 43 10 32
// Card 186: 39 40 17 54 99 94 43 46 28 92 | 82 53 71 25 24 51 97 11 33 16 63 41  9 42 69 88  5 96 73 70 21 95 15 47 19
// Card 187: 87 31 45  8 75 30  7 62 22 79 | 86 72 36  8 60 63 40  7 38 65 11 29 92  2 28 59 14 19 87 35 91 12 16 41 57
// Card 188: 97 21 10  3 26 27 15 37 75 62 | 17 16 67 74 76  5 90 95 37 25 33 84 40 10 23 12 98 79 27  3 66 82 97 54 58
// Card 189: 89 21 23  2 19 93 12 67 58 88 | 66 79 21 16 78  5 12 30 88 83 58  1  6 45 76 95 46 39 31 77 33 19  7 51 69
// Card 190: 82 94 59 34 86 52 85 29 41 63 | 64 78 89 34 12 22 68 24 30 46 18 84 86 73 23 58 21  8  1 25 42 74 67 62 38
// Card 191: 71 80 45 39 12 15 24 83 53 33 | 96 23 86 70 52 57 37 75 35 82 61 13  5 87 62 54 16 85 32 53 63 66 30 22 67
// Card 192: 29 54 14 10 45 83 59 50 95 77 | 60 33 93 82 73 78  4 91 65 29 70 16 69 40 64 36 22 26 77 34  8 17 49 63 99
// Card 193: 62 71 81 41 93 98 42 73 34 96 | 89 86 51 60  8 87 34 72 35 45 43 67 38 28 46 24 95 97 47 77 20 80 74  2 85
// Card 194: 13  3  2 66 96 63 94 17 43  4 | 70 82 54 83 77 40  6 38 11  9  7 19 68  1 84 92 56 97 80 75 49 33 27 34 23
// Card 195: 92  7 61 33 40 95 63  6 96 93 | 41 80 64 81 63 40 57 33 49 24 95 26 89 61 39 92 74  6  1 31 93 29  7 48 56
// Card 196: 51 16 52 67 39 57 82 71 76 94 | 61 69 82 70 25 52 56 28 31 19 65 16 13 59 74 90  1 99 88 44 85 91  6 62 54
// Card 197: 87 32 97 31 84 79 24 99 62 12 | 80  3 35 12 32 66 81 62 22  8 20 30 95 61 93 16 73 51 96 15 31 84 19 24 58
// Card 198: 93 38 58 96 22 29 97 84 56 25 |  5 84 42 56 25 22 10 97 41 58 96 38 64 88 35 93 54 29 81 19 30 91 62  8 47
// Card 199: 34 58  6 57 29 99 79 47 94 37 | 61 86  4 23 97 47  9 35 53 34 30 13 25 56 79 89 81 93  8 18 91 43 16 80 90
// Card 200: 87 43 48 95 20 10 51 89 35 21 | 74 75 20 87 50 68 89 12 78 35 10 43 21 95 48 41 51 52 84 42  2  9 26 17 29
// Card 201: 97 38 88  9 17 29 34 64 20 72 | 39 79 30 17 78 72  4  5 20 95 60 69 28 62 32 85 43 38 87 12 96  7 27 10  6
// Card 202: 10 77 45 36 43 32 73 75 47 41 | 32 84 45 21 83 87 62 47 10 43 64  7 75 49 42 61 77 19 73 41 23 44 37 27 60
// Card 203: 97 44 48 40  2 31 28 27 83 73 | 58 82 83 99 17 40 97 96 95 90 72 69 63 21 14 59 62  2 84  6 48 35 93 27 55
// Card 204: 64 66 23 63 79 99 49 44 39 69 | 12 62 92  9 51 43 31 36 42 20 48 99 16 46 81 93 57 50 32 97 59 73 14 76 10
// Card 205: 28 52 50 53 43 32 98 97 61 72 | 62 16 18 71  8 44 11 36 59 41  1 57 84 24 15 56 19 81 55 26 30 85 94 52 75
// Card 206: 93 90 72 22 44 52  8 75 68 73 | 74 33 10 97 99 11 25 36 27 87 79 47 81 95  6 91 55 34 59 67 92 56 23 98 24
// Card 207: 29 92 17 56 98 84 96 71 13 61 | 68 80  1 66 36 30 46 58 40 12  3 10 82 25 74 97 61 53 56 22 95 57 86 63 11
// Card 208: 22 30 79 95 51 11 54 23 29 78 |  6 95 18 29 26 54 12 34 87 40 77 90 73  7  5 22 97 43 81 14 33 59 82 23 20
// Card 209: 58  1 51 44 83 17 70 95 26 66 | 79 62 91 74 25 53 68 87 23 96 88 93 27 21 61 24 75 57 92 46 97 38 59 64 42
// Card 210: 31 59  3 38 30 69 84 24 48 20 | 82 87 98 38 13 64 63 55 68 49  8 26 76 58 81 22 54 31  3 80 84  4 52 53 41
// Card 211: 99 37 92 70  2 88 33 84 63  9 | 50 24 57 65 51 15 21 12  7 23 49 77 60 71 67 56 90 69 95 96 18 81 93 82 53
// Card 212: 38 22 26 25 62 17 71 88 31 86 | 66 64  9 75 74 35 15 33 56 59 98 70 94 73 24 13 20 27 78 28  6 79 51 90 97
// Card 213: 67 96 40 18 19 51 28 23 36 47 | 61 99 58 43 95 81 16 24 65  9 54  4 87 84 32 42 69 64 45 52 20 72 13 66 62
// Card 214: 11 74 92 36 26 68 78 73  5 80 | 67 15  3 22 46 41 87 64 53 89 52 85 99 61 84 31 28 86 77 19 75  1  9 72 82`))

/*
  day 5
*/

const findLocation = (input: string) : number => {
  let result = 0;
  let splitCategory = input.split('\n\n') as any;
  let temp1 = splitCategory[0].split(": ").slice(1);
  splitCategory[0] = temp1[0].split(" ");

  for(let i = 1; i < splitCategory.length; i++){
    let temp2 = splitCategory[i].split('\n').slice(1);
    temp2.forEach((val: string, i: number)=>{
      temp2[i] = val.split(" ");
    })
    splitCategory[i] = temp2;
  }

  console.log(splitCategory);

  let seedToSoilMap = new Map();
  let soilToFertMap = new Map();
  let fertToWaterMap = new Map();
  let waterToLightMap = new Map();
  let lightToTempMap = new Map();
  let tempToHumidMap = new Map();
  let humdToLocationMap = new Map();

  return result;
}

console.log(findLocation(`seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`))

// console.log(findLocation(`seeds: 2494933545 159314859 4045092792 172620202 928898138 554061882 2740120981 81327018 2031777983 63513119 2871914181 270575980 2200250633 216481794 3289604059 25147787 3472625834 10030240 260990830 232636388

// seed-to-soil map:
// 3272284283 2724782980 1022683013
// 138187491 4195038636 99928660
// 2359623759 797621236 127984779
// 662451929 2224466386 266466256
// 928918185 714355413 83265823
// 1012184008 3891516474 303522162
// 3063776460 1098322140 208507823
// 2194238166 1306829963 50525692
// 357106588 2091837170 132629216
// 2244763858 2490932642 114859901
// 2050187685 3747465993 144050481
// 489735804 925606015 172716125
// 2487608538 138187491 576167922
// 238116151 2605792543 118990437
// 1315706170 1357355655 734481515

// soil-to-fertilizer map:
// 4265669768 2142212766 29297528
// 2030756625 2171510294 69737894
// 3038084234 3411621093 262803613
// 2410534622 3266307064 145314029
// 2667304792 2241248188 370779442
// 2100494519 3921619167 310040103
// 3611390334 2612027630 654279434
// 2555848651 2030756625 111456141
// 733063720 869238953 195075492
// 3300887847 4231659270 63308026
// 3364195873 3674424706 247194461
// 928139212 733063720 136175233

// fertilizer-to-water map:
// 0 772139976 154052576
// 909628165 428370542 51644443
// 3172969725 4109584032 185383264
// 1116931128 1046566515 14194115
// 223777814 10055892 255169216
// 2512535520 1229983026 60386000
// 3109777744 3899207072 16374329
// 4030761870 3829858282 12540292
// 828135093 718323602 53816374
// 2358450176 2554590817 154085344
// 3126152073 3152512175 46817652
// 4043302162 3842398574 56808498
// 3694349069 3493296400 336412801
// 770911368 661099877 57223725
// 3574254366 3032417472 120094703
// 2689829955 2124052738 139986329
// 3358352989 1925653441 3542661
// 154052576 1060760630 69725238
// 3460616091 3829709201 149081
// 881951467 480014985 9494517
// 1777535488 3915581401 135358522
// 2829816284 1290369026 84715328
// 478947030 489509502 171590375
// 2686813330 1226966401 3016625
// 3361895650 3199329827 98720441
// 1226966401 1375084354 550569087
// 3515610257 4050939923 58644109
// 650537405 926192552 120373963
// 4100110660 1929196102 194856636
// 1912894010 2708676161 323741311
// 3460765172 2264039067 54845085
// 898932898 0 10055892
// 891445984 265225108 7486914
// 2914531612 3298050268 195246132
// 2572921520 2318884152 113891810
// 961272608 272712022 155658520
// 908988790 1130485868 639375
// 2236635321 2432775962 121814855

// water-to-light map:
// 2821176146 2286693663 106119314
// 3822234587 2463633329 180779736
// 1725724347 2842879211 104224606
// 3308097155 4172728180 122239116
// 3299768179 2834550235 8328976
// 525232540 357109336 38255672
// 751267412 803626289 867213460
// 2181067610 2392812977 70820352
// 2251887962 2644413065 134698828
// 3430336271 3994876090 163182805
// 357109336 395365008 62712446
// 3646455511 2158365540 128328123
// 3084834769 2947103817 214933410
// 1618480872 3954660777 40215313
// 1673365470 751267412 52358877
// 2927295460 3797121468 157539309
// 2386586790 1723776184 434589356
// 3774783634 2779111893 47450953
// 4003014323 3162037227 291952973
// 419821782 458077454 105410758
// 3593519076 1670839749 52936435
// 1658696185 4158058895 14669285
// 2173080221 2826562846 7987389
// 1829948953 3453990200 343131268

// light-to-temperature map:
// 457330729 4090205185 204762111
// 2982196520 3401667644 30193953
// 2238727594 3778270640 263367024
// 2540710222 1921368253 380651678
// 2224576409 4041637664 14151185
// 1803946096 1170025919 125923944
// 947791690 3069412788 65888847
// 3354708582 3597834895 180435745
// 1173448701 516297801 630497395
// 4079424710 2899828022 88028778
// 1929870040 1295949863 294706369
// 928458849 495946333 19332841
// 3145865299 515279174 1018627
// 3071616223 2825578946 74249076
// 3012390473 3431861597 52676537
// 0 156654134 174053721
// 1013680537 1590656232 159768164
// 2502094618 457330729 38615604
// 4167453488 3484538134 113296761
// 4058703342 3048691420 20721368
// 3146883926 1750424396 164394644
// 662092840 3135301635 266366009
// 174053721 0 156654134
// 4280750249 4055788849 14217047
// 3311278570 1146795196 23230723
// 3334509293 4070005896 20199289
// 3535144327 2302019931 523559015
// 3065067010 1914819040 6549213
// 2921361900 2987856800 60834620

// temperature-to-humidity map:
// 19014508 1616728169 261978440
// 479364011 879054632 183139707
// 3422279791 4197415651 97551645
// 2947838505 2859883311 474441286
// 3922771609 3441941550 130194267
// 1538347549 1285663854 77335299
// 4074125861 3334324597 17231539
// 2692139672 3923798143 165313419
// 3867887507 3572135817 45827004
// 4091357400 2695950683 148956394
// 280992948 874337342 4717290
// 3585981058 4137845928 59569723
// 1194193608 267159640 344153941
// 3645550781 2226309992 39998882
// 2606341883 3617962821 85797789
// 2452453972 3769910232 153887911
// 4279991062 2844907077 14976234
// 4240313794 4089111562 39677268
// 285710238 0 193653773
// 662503718 1585706204 31021965
// 4052965876 2266308874 21159985
// 2226309992 2287468859 226143980
// 0 248145132 19014508
// 3685549663 2513612839 182337844
// 2857453091 3351556136 90385414
// 1139702249 193653773 54491359
// 3913714511 4128788830 9057098
// 916232734 1062194339 223469515
// 1615682848 611313581 263023761
// 693525683 1362999153 222707051
// 3519831436 3703760610 66149622

// humidity-to-location map:
// 3722067319 3568864729 46052123
// 761939125 1263883488 182519766
// 3952597071 3400791743 168072986
// 1928058 204065059 218803536
// 1797120632 863951513 248903371
// 3409129274 3614916852 109595510
// 0 1261955430 1928058
// 3854871689 2940386871 97725382
// 3518724784 3898809601 159455982
// 220731594 1446403254 100124613
// 944458891 1813379640 207908225
// 3194065032 4058265583 117770911
// 3059317673 3222157831 134747359
// 3678180766 3356905190 43886553
// 3375153977 3124864500 33975297
// 2940386871 4176036494 118930802
// 1152367116 2021287865 24736138
// 3311835943 3158839797 63318034
// 320856207 422868595 441082918
// 1593055573 0 204065059
// 4120670057 3724512362 174297239
// 1177103254 1112854884 149100546
// 1326203800 1546527867 266851773
// 3768119442 3038112253 86752247`))