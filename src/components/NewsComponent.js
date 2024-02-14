import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem.js'
// import "./NewsComponent.css"
import Spinner from './Spinner.js'
import './NewsItem.css'
export class NewsComponent extends Component {
  static propTypes = {

  }
   articles=[
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Michelle Uzoh",
            "title": "NBA’s In-Season Tournament experiment reaches finale in Sin City. Has it worked? - CNN",
            "description": "The experiment to inject jeopardy into the November and December months of basketball – a long-held ambition of NBA commissioner Adam Silver – culminates this weekend in Las Vegas, Nevada, at the T-Mobile Arena.",
            "url": "https://www.cnn.com/2023/12/09/sport/nba-in-season-tournament-lakers-pacers-intl-spt/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231208123836-lebron-james-card.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-12-09T11:30:00Z",
            "content": "The experiment to inject jeopardy into the November and December months of basketball a long-held ambition of NBA commissioner Adam Silver culminates this weekend in Las Vegas, Nevada, at the T-Mobil… [+4774 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Philippines accuses China of shooting water cannon at its boats - BBC.com",
            "description": "The incident is the latest dispute between the Philippines and China in the South China Sea.",
            "url": "https://www.bbc.com/news/world-asia-67668930",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EB10/production/_131967106_mediaitem131966564.jpg",
            "publishedAt": "2023-12-09T11:08:00Z",
            "content": "Watch: Chinese ships \"fire water at Philippine vessels\"\r\nThe Philippines has accused China of using water cannons to obstruct three of its vessels, in the latest territorial dispute between the two c… [+2926 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Kate Abnett, Valerie Volcovici, Yousef Saba",
            "title": "COP28 clashes over fossil fuel phase-out after OPEC pushback - Reuters",
            "description": "Some countries are resisting a proposed pledge to phase-out fossil fuels in a COP28 climate deal, jeopardising attempts for <a href=\"https://www.reuters.com/sustainability/cop/\">U.N. climate talks</a> to deliver a hard commitment for the first time in 30 year…",
            "url": "https://www.reuters.com/business/environment/opec-members-push-against-including-fossil-fuels-phase-out-cop28-deal-2023-12-09/",
            "urlToImage": "https://www.reuters.com/resizer/ewYVj5KSTf8n8oDOsRSWl9YDqvU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BB4G5ATZT5NGNDA73WBCX22OMY.jpg",
            "publishedAt": "2023-12-09T10:47:00Z",
            "content": "DUBAI, Dec 9 (Reuters) - Some countries are resisting a proposed pledge to phase-out fossil fuels in a COP28 climate deal, jeopardising attempts for U.N. climate talks to deliver a hard commitment fo… [+7223 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Kelsey Ables, Andrew Jeong, Leo Sands, Karen DeYoung",
            "title": "Latest Israel-Hamas war news summary and Gaza death toll updates - The Washington Post",
            "description": "HRW said the United States was at risk of “complicity in war crimes” after it blocked a U.N. Security Council resolution that had near-unanimous support.",
            "url": "https://www.washingtonpost.com/world/2023/12/09/israel-hamas-war-news-gaza-palestine/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/12-08-2023/t_a11dda2a4359470995584b23834a7279_name_2023_12_08_UNSCVeto_v1_00_01_18_17_Still014.jpg&w=1440",
            "publishedAt": "2023-12-09T10:28:26Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Florida Today"
            },
            "author": "Rick Neale",
            "title": "SpaceX Falcon Heavy will launch X-37B space plane Sunday night at KSC - Florida Today",
            "description": "The Boeing-built X-37B last launched into orbit in May 2020 atop a United Launch Alliance Atlas V rocket from Cape Canaveral Air Force Station.",
            "url": "https://www.floridatoday.com/story/tech/science/space/2023/12/08/spacex-falcon-heavy-will-launch-x-37b-space-plane-sunday-night-at-nasa-kennedy-space-center/71797945007/",
            "urlToImage": "https://www.floridatoday.com/gcdn/authoring/authoring-images/2023/11/30/PBRE/71758493007-231128-fxxxxx-1001.jpg?crop=3997,2248,x0,y1435&width=3200&height=1800&format=pjpg&auto=webp",
            "publishedAt": "2023-12-09T10:03:43Z",
            "content": "After the Space Force's robotic X-37B Orbital Test Vehicle launches again Sunday night, what types of classified payloads will it carry into space?\r\nWhat secret missions will the uncrewed military sp… [+5139 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HYPEBEAST"
            },
            "author": "Sophie Caraan",
            "title": "McDonald's Reveals CosMc's Official Menu - HYPEBEAST",
            "description": "Featuring sweet and savory food options, as well as customizable drinks.",
            "url": "https://hypebeast.com/2023/12/mcdonalds-cosmcs-spinoff-restaurant-official-menu",
            "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F12%2Ftw-mcdonalds-cosmcs-spinoff-restaurant-official-menu.jpg?w=1080&cbr=1&q=90&fit=max",
            "publishedAt": "2023-12-09T08:02:00Z",
            "content": "CosMc’s, the spinoff restaurant of McDonald’s, has unveiled its menu for curious customers.\r\nAccording to McDonald’s, the drink menu of CosMc’s “is rooted in beverage exploration” and features a rang… [+833 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Ashley Killough, Ed Lavandera, Alaa Elassar, Taylor Romine",
            "title": "Texas Supreme Court temporarily blocks pregnant woman from emergency abortion - CNN",
            "description": "The Texas Supreme Court has temporarily blocked a pregnant woman from obtaining an emergency abortion in a ruling issued late Friday.",
            "url": "https://www.cnn.com/2023/12/08/us/texas-abortion-ruling-attorney-general-petition/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231207095549-01-tx-abortion-hearing-cox.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-12-09T07:04:00Z",
            "content": "The Texas Supreme Court has temporarily blocked a pregnant woman from obtaining an emergency abortion in a ruling issued late Friday.\r\nThe court froze a lower courts ruling that would have allowed Ka… [+3982 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Europe agrees landmark AI regulation deal - Reuters",
            "description": null,
            "url": "https://www.reuters.com/technology/stalled-eu-ai-act-talks-set-resume-2023-12-08/",
            "urlToImage": null,
            "publishedAt": "2023-12-09T05:57:10Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Jarrett Renshaw, Nandita Bose",
            "title": "Biden mocks Trump during California fundraising trip - Reuters",
            "description": "President Joe Biden kicked off a three-day, star-studded fundraising trip in California on Friday by mocking Republican frontrunner Donald Trump for claiming he would be a dictator just on his first day in office if he became president again.",
            "url": "https://www.reuters.com/world/us/biden-heads-california-big-hollywood-money-haul-2023-12-08/",
            "urlToImage": "https://www.reuters.com/resizer/ESGT8V3AcabBt1zHi1FQYfzOFQo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VTMDB3BETFPUVD32OE547M4HXE.jpg",
            "publishedAt": "2023-12-09T05:41:00Z",
            "content": "LOS ANGELES, Dec 8 (Reuters) - President Joe Biden kicked off a three-day, star-studded fundraising trip in California on Friday by mocking Republican frontrunner Donald Trump for claiming he would b… [+4129 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MLB.com"
            },
            "author": "Anthony Castrovince",
            "title": "Shohei Ohtani's wild week of free agency, recapped - MLB.com",
            "description": "No matter where he signs, no matter when he signs, no matter what his new contract entails, Shohei Ohtani will have already succeeded in one thing:\nDriving all of us bananas.\nWe, the baseball-loving community, are somewhere south of sanity, and a private jet …",
            "url": "https://www.mlb.com/news/shohei-ohtani-wild-week-of-free-agency-recap",
            "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/nsrhp5whioj3p93tftok.jpg",
            "publishedAt": "2023-12-09T05:38:00Z",
            "content": "No matter where he signs, no matter when he signs, no matter what his new contract entails, Shohei Ohtani will have already succeeded in one thing:\r\nDriving all of us bananas.\r\nWe, the baseball-lovin… [+7339 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "“Israel will not achieve objective of destroying Hamas” - Middle East Eye",
            "description": "Israel will not have achieved the objective of destroying Hamas’ military capabilities any time over the next few months, says the former US peace envoy to t...",
            "url": "https://www.youtube.com/watch?v=4KOc-_rh8vc",
            "urlToImage": "https://i.ytimg.com/vi/4KOc-_rh8vc/maxresdefault.jpg",
            "publishedAt": "2023-12-09T05:31:44Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NBC Chicago"
            },
            "author": "Matt Stefanski",
            "title": "Illinois recommends masks in health care settings as respiratory infections climb - NBC Chicago",
            "description": "In response to an uptick in respiratory infections, the Illinois Department of Public Health on Friday issued guidance urging that masks are worn in certain areas of health care facilities.",
            "url": "http://www.nbcchicago.com/news/local/illinois-recommends-masks-in-health-care-settings-as-respiratory-infections-climb/3298784/",
            "urlToImage": "https://media.nbcchicago.com/2021/11/generic-vaccine-masks.png?resize=1200%2C675&quality=85&strip=all",
            "publishedAt": "2023-12-09T04:58:41Z",
            "content": "Note: The video in the player above is from a previous report.\r\nIn response to an uptick in respiratory infections, the Illinois Department of Public Health on Friday issued guidance urging that mask… [+2026 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "DeJanay Booth-Singleton, Sara Powers",
            "title": "Oxford High School shooter sentenced to life in prison without parole - CBS News",
            "description": "The Oxford High School shooter was sentenced on Friday to life in prison without parole, more than two years after four people were killed and seven others were injured.",
            "url": "https://www.cbsnews.com/detroit/news/oxford-high-school-shooter-sentenced-to-life-in-prison-without-parole/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/08/02/a9ffbfce-a8f6-4f96-b629-5b51a2dfa992/thumbnail/1200x630/34c1d393c6c554b2b728ea0a92a2a57c/gettyimages-1237071421-2.jpg?v=170b469460f9b5b4a2670b02bb591e2d",
            "publishedAt": "2023-12-09T04:34:00Z",
            "content": "(CBS DETROIT) - The Oxford High School shooter was sentenced on Friday to life in prison without parole, more than two years after four people were killed and seven others were injured.\r\nEthan Crumbl… [+5077 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Federal judge prohibits separating migrant families at US border for 8 years - POLITICO",
            "description": "The government and volunteers have yet to locate 68 children who were separated under the Trump-era policy.",
            "url": "https://www.politico.com/news/2023/12/08/separation-families-border-ruling-00130938",
            "urlToImage": "https://static.politico.com/80/e8/5b678b9440f9b70a83ae11788d44/border-separating-families-34871.jpg",
            "publishedAt": "2023-12-09T04:02:10Z",
            "content": "As he reminisced and congratulated lawyers on both sides, the judge recalled a sense of horror over initial allegations and how subsequent disclosures left him increasingly dismayed over how the poli… [+2510 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Mercury News"
            },
            "author": "Shayna Rubin",
            "title": "Warriors make turnover history in overtime loss to Thunder - The Mercury News",
            "description": "Golden State Warriors turn ball over 29 times in loss to Oklahoma City Thunder",
            "url": "https://www.mercurynews.com/2023/12/08/warriors-make-turnover-history-in-overtime-loss-to-thunder/",
            "urlToImage": "https://www.mercurynews.com/wp-content/uploads/2023/12/Warriors-Thunder-Basketball-2.jpg?w=1024&h=683",
            "publishedAt": "2023-12-09T03:54:14Z",
            "content": "The Warriors’ overtime loss to the Oklahoma City Thunder on Friday night comes down to one big number: 29 turnovers.\r\nThose 29 turnovers are not only a single-game season-high by five, not only an al… [+2741 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DW (English)"
            },
            "author": "Deutsche Welle",
            "title": "US approves CRISPR gene-editing to treat sickle cell disease - DW (English)",
            "description": "The treatment uses the revolutionary gene-editing tool CRISPR to permanently change DNA in the patient's blood cells. Sickle cell disease is a life-threatening illness that medical science has struggled to address.",
            "url": "https://www.dw.com/en/us-approves-crispr-gene-editing-to-treat-sickle-cell-disease/a-67674885",
            "urlToImage": "https://static.dw.com/image/67674916_6.jpg",
            "publishedAt": "2023-12-09T03:47:44Z",
            "content": "The United States Food and Drug Administration (FDA) Friday approved a landmark gene-editing treatment for sickle cell disease.\r\nThe US drug regulator \"approved two milestone treatments, Casgevy and … [+2354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "FULL SEGMENT – CM Punk delivers WrestleMania main event address: SmackDown, Dec. 8, 2023 - WWE",
            "description": "CM Punk makes his electric return to SmackDown, vowing to main event WrestleMania. Catch WWE action on Peacock, WWE Network, FOX, USA Network, Sony India and...",
            "url": "https://www.youtube.com/watch?v=BtNrIGI73qo",
            "urlToImage": "https://i.ytimg.com/vi/BtNrIGI73qo/maxresdefault.jpg",
            "publishedAt": "2023-12-09T03:02:33Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Erin Keller",
            "title": "Barbra Streisand pays tribute to her late ex Ryan O’Neal: ‘Funny and charming’ - New York Post ",
            "description": "The duo briefly dated and starred in two films together: “What’s Up, Doc?” and “The Main Event.”",
            "url": "https://nypost.com/2023/12/08/entertainment/barbra-streisand-pays-tribute-to-her-late-ex-ryan-oneal-funny-and-charming/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/12/73465991.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-12-09T02:51:00Z",
            "content": "Barbra Streisand remembered her late co-star and former lover Ryan O’Neal as “funny and charming” amid news of his death.\r\nSo sad to hear the news of Ryan ONeals passing,” the legendary actress capti… [+3334 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kstp.com"
            },
            "author": "Kyle Brown",
            "title": "RSV cases continue to climb as Minnesota health officials confirm virus-related death - KSTP",
            "description": "MDH data show a sharp rise in RSV hospitalizations in Minnesota over the past few weeks, with children ages 4 and younger being hospitalized at the highest rate.",
            "url": "https://kstp.com/kstp-news/top-news/rsv-cases-continue-to-climb-as-minnesota-health-officials-confirm-virus-related-death/",
            "urlToImage": "https://kstp.com/wp-content/uploads/2023/12/RSV-CHILD-CONCERNS_PKG_KSTPa1e5_146_mxf_00.00.22.08.jpg",
            "publishedAt": "2023-12-09T02:04:15Z",
            "content": "State health officials have confirmed one RSV-related death in Minnesota this season.\r\nThe Minnesota Department of Health has not shared any other details about the person who died, but medical profe… [+1777 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Six French teenagers convicted in connection with 2020 beheading of teacher Paty - CNN",
            "description": "A French court on Friday convicted six teenagers in connection with the 2020 beheading of history teacher Samuel Paty, whose murder shocked the country.",
            "url": "https://www.cnn.com/2023/12/09/europe/samuel-paty-student-convictions-france-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231208203856-samuel-paty-flowers-file-101720.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-12-09T02:01:54Z",
            "content": "A French court on Friday convicted six teenagers in connection with the 2020 beheading of history teacher Samuel Paty, whose murder shocked the country.\r\nThe teacher had shown his pupils caricatures … [+1837 chars]"
        }
    ]
constructor(){super()
    this.state={
        page:1,
        articles: this.articles,
        loading: false

    }



}
static defaultProps={
    country:'in',
    pageSize:20,
    category:'business',

}
static propTypes={    country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string,

}

    
previousPage = async()=>{let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b0d0bef5a0fc4232a57e8860aef19519&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
let data= await fetch(url)
let parsedData= await data.json()

this.setState({page:this.state.page-1
    ,articles:parsedData.articles})






}
NextPage =async()=>{
    console.log('heynext')
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b0d0bef5a0fc4232a57e8860aef19519&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
let data= await fetch(url)
let parsedData= await data.json()

this.setState({page:this.state.page+1,
    articles:parsedData.articles,

})

}

async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b0d0bef5a0fc4232a57e8860aef19519&page=${1}`
    let data= await fetch(url)
    let parsedData= await data.json()
    this.setState({articles:parsedData.articles,totalResults: parsedData.totalResults
    
    })}

 
  render() {
    return (
      <div className='e'>
        <div className='outline'> 
        <Spinner/>
        <h1 className='break'>Breaking News <br /> Category = {this.props.category}</h1>
        </div>
        <div className='row rower'>
            {this.state.articles.map((element)=>{
                return <div className='col-md-6' key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={!null?(element.urlToImage):'https://images.news18.com/ibnlive/uploads/2023/12/jewellery-1-2023-12-cf00c134edb26c92b81b3426b84a3369-16x9.png?impolicy=website&width=1200&height=675'}
                    newsUrl={element.url} publishedAt={element.publishedAt}  author={element.author}    />
        </div>
            })}
                    </div>

          
          
    <div id="imageContainer"></div>
      <div class="navigation-buttons">
        <button type='button' disabled={this.state.page<=1}   onClick={this.previousPage}>&larr; Previous</button>
        <button type='button' disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}onClick={this.NextPage}>Next &rarr;</button>
      </div>
       
        
      </div>
      
    )
  }
}

export default NewsComponent

