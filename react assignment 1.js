$(document).ready(() => {
    var ResponseData = [
        {
            "id": 610,
            "firstName": "Wan-Yu",
            "lastName": "Ray",
            "email": "DDavidson@lacus.com",
            "phone": "(136)268-8195",
            "address": {
                "streetAddress": "752 Elit Ave",
                "city": "Chambersburg",
                "state": "TN",
                "zip": "63895"
            },
            "description": "magna in donec elementum pulvinar hendrerit vestibulum tincidunt pulvinar orci etiam dolor etiam tempor nullam suspendisse nec dolor libero placerat sollicitudin porta velit neque massa nullam ipsum at pretium convallis elementum mi"
        },
        {
            "id": 857,
            "firstName": "Agnes",
            "lastName": "Geis",
            "email": "NDellabadia@morbi.com",
            "phone": "(933)734-6622",
            "address": {
                "streetAddress": "3060 Donec Ct",
                "city": "Mesa",
                "state": "DC",
                "zip": "28831"
            },
            "description": "nullam sed tortor tempor sed non massa tincidunt magna et quis convallis dolor porta et morbi eros ante facilisis donec nullam egestas porta amet lectus quis vestibulum mattis tempor ante vel vestibulum"
        },
        {
            "id": 647,
            "firstName": "Coty",
            "lastName": "Garbe",
            "email": "PRobichaud@curabitur.net",
            "phone": "(874)138-5265",
            "address": {
                "streetAddress": "4614 Sit Ln",
                "city": "Lees Summit",
                "state": "LA",
                "zip": "49028"
            },
            "description": "porta rutrum lacus sapien rutrum sapien neque sollicitudin eros malesuada aliquam tortor elementum vestibulum porta eget tortor amet velit scelerisque molestie sed vitae suspendisse nec sagittis lacus sit lacus tincidunt nec lacus"
        },
        {
            "id": 422,
            "firstName": "Adam",
            "lastName": "Ivanoski",
            "email": "JCaines@non.io",
            "phone": "(867)259-9940",
            "address": {
                "streetAddress": "9953 Fringilla St",
                "city": "Toronto",
                "state": "RI",
                "zip": "79279"
            },
            "description": "donec donec ipsum libero quis pulvinar convallis vestibulum aliquam id lacus mattis in non odio vitae dolor convallis dui tincidunt placerat sed elementum sed eros morbi libero placerat elit turpis lectus adipiscing"
        },
        {
            "id": 102,
            "firstName": "Sherrye",
            "lastName": "Gonzalez",
            "email": "AKachelmuss@morbi.ly",
            "phone": "(496)708-3844",
            "address": {
                "streetAddress": "9555 Pretium Ln",
                "city": "Charleston",
                "state": "LA",
                "zip": "98382"
            },
            "description": "tincidunt aliquam velit convallis ante vel consequat ante adipiscing vitae sit sed non amet et sed vitae risus in nec vestibulum sagittis sapien sollicitudin lorem ac vel mattis magna velit pulvinar lacus"
        },
        {
            "id": 488,
            "firstName": "Janelle",
            "lastName": "Hampton",
            "email": "QJones@dolor.ly",
            "phone": "(375)875-0520",
            "address": {
                "streetAddress": "4701 Id Ct",
                "city": "Paxton",
                "state": "IN",
                "zip": "38871"
            },
            "description": "amet id elementum nullam eros nunc ante vitae vestibulum placerat dolor tempor odio lacus lacus sit quis quis elit tempor nullam et aliquam massa convallis velit vitae elit orci et at eros"
        },
        {
            "id": 24,
            "firstName": "Kosta",
            "lastName": "Compton",
            "email": "LMeaney@facilisis.org",
            "phone": "(409)238-1598",
            "address": {
                "streetAddress": "4499 Facilisis Dr",
                "city": "Saint Louis",
                "state": "AK",
                "zip": "56342"
            },
            "description": "mattis quis consequat aliquam ac nunc lorem nec rutrum dolor ac dui tortor sed odio pulvinar ipsum massa non pulvinar ipsum tellus velit non suspendisse dui tempor tincidunt odio ipsum pulvinar etiam"
        },
        {
            "id": 258,
            "firstName": "Chad",
            "lastName": "Frets",
            "email": "MIvanoski@velit.com",
            "phone": "(502)120-4674",
            "address": {
                "streetAddress": "493 Nunc Rd",
                "city": "Saskatoon",
                "state": "ME",
                "zip": "27599"
            },
            "description": "convallis in dolor aenean tincidunt pulvinar nunc convallis non augue in pulvinar suspendisse sagittis donec vestibulum ipsum tortor sed massa ac dolor aliquam et odio sed facilisis sagittis sed tincidunt nullam lacus"
        },
        {
            "id": 346,
            "firstName": "Tara",
            "lastName": "Szewczuk",
            "email": "APrice@dolor.net",
            "phone": "(898)777-3060",
            "address": {
                "streetAddress": "16 Pharetra Ln",
                "city": "Englewood",
                "state": "IN",
                "zip": "32738"
            },
            "description": "sit velit aliquam odio suspendisse pulvinar placerat pharetra magna sapien tincidunt malesuada nullam curabitur vitae consectetur aliquam magna massa massa donec pretium pulvinar consequat ac porta nunc quis consectetur sollicitudin egestas sed"
        },
        {
            "id": 725,
            "firstName": "Nakia",
            "lastName": "Mcmullin",
            "email": "DWeeks@adipiscing.org",
            "phone": "(136)536-6631",
            "address": {
                "streetAddress": "6436 Ipsum Rd",
                "city": "Texas City",
                "state": "MD",
                "zip": "86261"
            },
            "description": "tempor vitae aliquam dui sollicitudin amet nec amet lacus magna pharetra sapien eget sed pulvinar vel malesuada augue sit facilisis morbi adipiscing lacus porttitor placerat mi porttitor quis elementum pulvinar mattis et"
        },
        {
            "id": 377,
            "firstName": "Brendan",
            "lastName": "Horman",
            "email": "SAtanasov@nec.io",
            "phone": "(113)040-9124",
            "address": {
                "streetAddress": "996 Lorem Rd",
                "city": "Elk River",
                "state": "LA",
                "zip": "90172"
            },
            "description": "tortor augue non egestas et tempor malesuada lectus dolor molestie velit sollicitudin sed morbi magna tincidunt et eros rutrum quis lacus sagittis mattis non ac odio vestibulum risus vitae lorem libero eget"
        },
        {
            "id": 289,
            "firstName": "Nathaniel",
            "lastName": "Minihane",
            "email": "KHershfeld@eget.ly",
            "phone": "(886)616-4473",
            "address": {
                "streetAddress": "9651 Sit Rd",
                "city": "Knightdale",
                "state": "DE",
                "zip": "26269"
            },
            "description": "consectetur odio ante aliquam amet vitae mattis scelerisque et tortor placerat magna vestibulum neque sit at sed tortor tortor molestie nec ipsum pharetra sit et dolor id dui placerat massa sit mattis"
        },
        {
            "id": 531,
            "firstName": "Aydin",
            "lastName": "Klapper",
            "email": "LLloyd@elit.com",
            "phone": "(195)998-5093",
            "address": {
                "streetAddress": "4981 Magna Ave",
                "city": "Spokane",
                "state": "PA",
                "zip": "49765"
            },
            "description": "magna scelerisque sed sit ipsum mattis sed mi placerat suspendisse placerat tortor tellus sed at et magna sed consectetur consectetur convallis tincidunt dolor massa rutrum ante aliquam pulvinar dolor tempor neque dolor"
        },
        {
            "id": 260,
            "firstName": "Mayra",
            "lastName": "Spataro",
            "email": "ARock@hendrerit.gov",
            "phone": "(678)506-8578",
            "address": {
                "streetAddress": "2261 Vestibulum St",
                "city": "Wilson",
                "state": "NJ",
                "zip": "44567"
            },
            "description": "id magna vitae tincidunt mattis porttitor nunc id libero vitae sapien massa lorem curabitur dui scelerisque amet ipsum lacus tortor donec sit vitae amet turpis eget risus ipsum tempor sapien eget neque"
        },
        {
            "id": 67,
            "firstName": "Marisa",
            "lastName": "Kaa",
            "email": "NStokes@mattis.com",
            "phone": "(321)976-6662",
            "address": {
                "streetAddress": "9644 Non St",
                "city": "Union Springs",
                "state": "ID",
                "zip": "37646"
            },
            "description": "convallis elementum rutrum molestie hendrerit tortor vitae tortor morbi porttitor orci hendrerit non non elementum adipiscing vestibulum placerat at etiam orci sollicitudin donec pulvinar ac aliquam placerat pretium neque sagittis dolor sollicitudin"
        },
        {
            "id": 901,
            "firstName": "Gordon",
            "lastName": "Bernstein",
            "email": "TLarue@vestibulum.net",
            "phone": "(524)854-6905",
            "address": {
                "streetAddress": "1625 At Ave",
                "city": "Bradenton",
                "state": "KY",
                "zip": "91544"
            },
            "description": "sit suspendisse suspendisse tortor amet hendrerit at aliquam odio dolor eget lacus tempor mattis tortor dolor curabitur nec ac vestibulum tincidunt non ante vitae magna ac vestibulum dolor elit tincidunt ipsum placerat"
        },
        {
            "id": 976,
            "firstName": "Ade",
            "lastName": "Kunselman",
            "email": "FHampton@aliquam.org",
            "phone": "(302)300-4759",
            "address": {
                "streetAddress": "3017 Dolor St",
                "city": "Florissant",
                "state": "KS",
                "zip": "11420"
            },
            "description": "dui rutrum pretium tortor placerat malesuada ac sed pretium curabitur dolor libero magna pretium elit adipiscing neque magna donec massa lectus sit lacus sed placerat curabitur nec dolor ante odio quis amet"
        },
        {
            "id": 769,
            "firstName": "Leatrice",
            "lastName": "Towers",
            "email": "LDebord@porta.io",
            "phone": "(598)125-8670",
            "address": {
                "streetAddress": "8360 Eros Ave",
                "city": "Golden",
                "state": "MA",
                "zip": "11342"
            },
            "description": "rutrum suspendisse tempor magna pulvinar curabitur malesuada odio sagittis pulvinar aliquam fringilla lacus at etiam ante mattis aliquam sed risus odio nec aliquam odio velit convallis lectus magna turpis at amet tortor"
        },
        {
            "id": 162,
            "firstName": "Emil",
            "lastName": "Ragusa",
            "email": "RDieli@consequat.ly",
            "phone": "(265)405-2875",
            "address": {
                "streetAddress": "7675 Egestas Ave",
                "city": "Meridianville",
                "state": "DE",
                "zip": "36389"
            },
            "description": "mattis aliquam sed pulvinar facilisis ac lacus aliquam ipsum amet donec velit amet ipsum vestibulum tortor sit scelerisque tincidunt id sollicitudin amet pulvinar eget tincidunt risus placerat rutrum lacus sit tincidunt donec"
        },
        {
            "id": 57,
            "firstName": "Marek",
            "lastName": "Rios",
            "email": "THaft@sed.org",
            "phone": "(245)515-9439",
            "address": {
                "streetAddress": "1149 Orci Rd",
                "city": "Alhambra",
                "state": "NC",
                "zip": "86823"
            },
            "description": "sapien aenean pretium id sagittis elementum lectus vel et in nullam adipiscing velit suspendisse magna adipiscing pulvinar hendrerit malesuada eros sed ac sed magna vel tortor tincidunt amet tincidunt elementum odio scelerisque"
        },
        {
            "id": 579,
            "firstName": "Lucy",
            "lastName": "Ravenelle",
            "email": "RSobczak@egestas.net",
            "phone": "(128)758-7729",
            "address": {
                "streetAddress": "5179 Nec Dr",
                "city": "Johnsburg",
                "state": "NH",
                "zip": "82161"
            },
            "description": "adipiscing odio suspendisse sit ipsum ac lacus curabitur nec libero at molestie amet curabitur pulvinar morbi magna at placerat placerat eros convallis vitae at aenean elit placerat mi eget elit at massa"
        },
        {
            "id": 501,
            "firstName": "Susen",
            "lastName": "Kaspar",
            "email": "TCox@libero.net",
            "phone": "(418)536-6597",
            "address": {
                "streetAddress": "4637 Curabitur Ave",
                "city": "Fort Wayne",
                "state": "GA",
                "zip": "62346"
            },
            "description": "tempor odio ipsum ac sed elit ac aliquam ante sollicitudin lacus sapien placerat elit facilisis neque quis mattis fringilla ac vestibulum sed lectus vitae at molestie mattis sit vestibulum consectetur pretium mattis"
        },
        {
            "id": 701,
            "firstName": "Delena",
            "lastName": "Mosher",
            "email": "GSutliff@vitae.net",
            "phone": "(537)612-9161",
            "address": {
                "streetAddress": "3670 Lacus Dr",
                "city": "Berkeley",
                "state": "KY",
                "zip": "71735"
            },
            "description": "egestas et at tincidunt vel sit augue sed amet velit amet dui sed et vestibulum rutrum et sit consequat vitae ac orci lectus sit at aenean libero magna lacus quis tincidunt porta"
        },
        {
            "id": 68,
            "firstName": "Bharat",
            "lastName": "Marina",
            "email": "ALazcano@aenean.io",
            "phone": "(270)688-3292",
            "address": {
                "streetAddress": "6771 Suspendisse Ln",
                "city": "Fargo",
                "state": "UT",
                "zip": "38285"
            },
            "description": "magna massa lectus sit consequat porttitor rutrum sed turpis tincidunt nunc egestas sollicitudin nec eget pretium tortor amet at elit velit amet sed lacus adipiscing tortor tincidunt vitae curabitur eros consequat morbi"
        },
        {
            "id": 583,
            "firstName": "Donald",
            "lastName": "Krout",
            "email": "GDech@amet.ly",
            "phone": "(871)335-7503",
            "address": {
                "streetAddress": "4758 Lectus Ct",
                "city": "Adairsville",
                "state": "OH",
                "zip": "61304"
            },
            "description": "vitae rutrum tincidunt placerat vitae dolor vel donec tortor rutrum eget odio sed vitae tellus turpis turpis tempor adipiscing elit egestas suspendisse fringilla facilisis porta pulvinar sit velit sit pharetra consectetur amet"
        },
        {
            "id": 690,
            "firstName": "Milton",
            "lastName": "Newby",
            "email": "BBalasubramanian@tortor.io",
            "phone": "(930)706-6087",
            "address": {
                "streetAddress": "2530 Sed Rd",
                "city": "Danbury",
                "state": "UT",
                "zip": "70291"
            },
            "description": "sit aliquam aenean nunc placerat mattis at suspendisse pharetra tempor eget magna pharetra consectetur neque sit orci facilisis sit augue dolor neque odio ipsum vel non aenean sed convallis pulvinar tempor at"
        },
        {
            "id": 650,
            "firstName": "Annie",
            "lastName": "Bergin",
            "email": "RReitz@convallis.org",
            "phone": "(978)360-5555",
            "address": {
                "streetAddress": "8941 Vestibulum Ln",
                "city": "Rancho Cucamonga",
                "state": "UT",
                "zip": "18451"
            },
            "description": "nunc turpis nec vitae pharetra nunc et sit nec id vestibulum mattis magna suspendisse massa convallis massa ac aenean augue sed egestas in massa mattis sollicitudin nunc nec sollicitudin vitae mattis amet"
        },
        {
            "id": 607,
            "firstName": "Herbert",
            "lastName": "Valenzuela",
            "email": "AGraves@placerat.com",
            "phone": "(104)200-7165",
            "address": {
                "streetAddress": "7818 Orci Rd",
                "city": "Oklahoma",
                "state": "AL",
                "zip": "82256"
            },
            "description": "aliquam lacus vitae risus at tempor magna amet morbi vitae sed id convallis lacus amet non sollicitudin neque tortor eros mattis aenean tempor mattis sagittis lacus ac ac id molestie eros sit"
        },
        {
            "id": 297,
            "firstName": "Husam",
            "lastName": "Ramirez",
            "email": "KMontemer@porttitor.org",
            "phone": "(639)857-2261",
            "address": {
                "streetAddress": "4729 Magna Rd",
                "city": "Vacaville",
                "state": "IN",
                "zip": "91440"
            },
            "description": "non odio sollicitudin massa malesuada mattis nec sit lorem vel sollicitudin elementum lacus pulvinar sagittis ipsum tellus magna magna quis dolor et turpis turpis curabitur tincidunt sagittis porttitor placerat lacus sapien sed"
        },
        {
            "id": 896,
            "firstName": "D'Juan",
            "lastName": "Kirchner",
            "email": "CTreptow@amet.com",
            "phone": "(320)448-2007",
            "address": {
                "streetAddress": "278 Donec St",
                "city": "Gettysburg",
                "state": "DC",
                "zip": "46629"
            },
            "description": "placerat lectus id sed ante consectetur mattis convallis sollicitudin ipsum placerat massa sed rutrum odio magna porttitor massa aenean dui nec at ipsum dolor hendrerit malesuada amet amet sollicitudin aenean amet magna"
        },
        {
            "id": 68,
            "firstName": "Dwight",
            "lastName": "Casariego",
            "email": "SKreigler@tortor.com",
            "phone": "(320)205-2715",
            "address": {
                "streetAddress": "3089 Donec Rd",
                "city": "Carrollton",
                "state": "IN",
                "zip": "63201"
            },
            "description": "sagittis fringilla pharetra vitae tortor fringilla scelerisque nec hendrerit aliquam orci sapien etiam consectetur in sit scelerisque etiam elit massa pharetra tempor nunc sed tempor placerat porttitor malesuada nullam risus ac facilisis"
        },
        {
            "id": 679,
            "firstName": "Gilbert",
            "lastName": "Valenzano",
            "email": "GLightner@eros.ly",
            "phone": "(832)662-7328",
            "address": {
                "streetAddress": "4701 Vestibulum Ln",
                "city": "Vero Beach",
                "state": "CT",
                "zip": "82574"
            },
            "description": "lacus tortor sapien nec massa porta odio sagittis elit aliquam aenean odio elit porta nec elementum ipsum at massa lorem orci magna pulvinar sed tincidunt aliquam libero sit molestie aliquam at at"
        }
    ];



    $('form input').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault()
            return false;
        }
    });

    ResponseData.map(({ id, firstName, lastName, email, phone, address, description }) => {
        var RowCreate = $("<tr>").attr("id", id).addClass("data-row")
        RowCreate.append($("<td>").text(id).addClass("column1"),
            $("<td>").text(firstName).addClass("column2"),
            $("<td>").text(lastName).addClass("column3"),
            $("<td>").text(email).addClass("column4"),
            $("<td>").text(phone).addClass("column5"),
        )
        $("#tabular").append(RowCreate)
        RowCreate.click(() => {
            $(".data-row").removeClass("active")
            $("#" + id).addClass("active")
            $("#details-name").text(firstName + " " + lastName)
            $("textarea").text(description)

            $("#info-content>div:nth-of-type(3)>span").text(address.streetAddress);
            $("#info-content>div:nth-of-type(4)>span").text(address.city);
            $("#info-content>div:nth-of-type(5)>span").text(address.state);
            $("#info-content>div:nth-of-type(6)>span").text(address.zip);

        })

    })

    $("#search-box").click(() => {
        $("#searchLogo").css({ "margin-right": "15px" })
    })

    $('#search-box').keyup(function (e) {
        for (var i = 0; i < document.getElementsByClassName("data-row").length; i++) {
            document.getElementsByClassName("data-row")[i].style.backgroundColor = "white"
        }
        for (var i = 0; i < document.getElementsByClassName("data-row").length; i += 2) {
            document.getElementsByClassName("data-row")[i].style.backgroundColor = "#f1f1f1"
        }
        {
            var inputVal = document.getElementById("search-box").value;
            if (inputVal == "") { console.log("khali hai") } else {
                var filterData = ResponseData.filter(x => x.firstName.toLowerCase().includes(inputVal.toLowerCase()) ||
                    x.lastName.toLowerCase().includes(inputVal.toLowerCase()) ||
                    x.email.toLowerCase().includes(inputVal.toLowerCase()) ||
                    x.phone.toLowerCase().includes(inputVal.toLowerCase())
                )

                console.log(filterData)
                for (var i = 0; i < filterData.length; i++) {
                    var idgetter = filterData[i].id
                    document.getElementById(filterData[i].id).style.backgroundColor = "yellowgreen";
                }
            }

        }
    })
})