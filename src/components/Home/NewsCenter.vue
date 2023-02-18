<template>
  <div
    class="container"
    style="width: 80%; height:300vh; margin: 0 auto; background-color: #111;"
  >
    <div style="width: 100%; height: 8rem"></div>
    <div class="pCon">
      <p class="observed" style="font-size: 1.8rem; color: #aaa">新闻中心</p>
      <p class="observed" style="font-size: 1rem; color: gray; margin: 0.4rem auto">NEWS</p>
      <p class="observed" style="color: gray; font-size:.8rem;">
        星巴克咖啡:提供最新的星巴克加盟费,星巴克咖啡加盟费,星巴克咖啡加盟费多少钱介绍详情.星巴克将咖啡传承与独特的咖啡体验带给我们的顾客。
      </p>
      <hr
        class="observed"
        size="0.5"
        color="gray"
        style="width: 3rem; margin: 1rem auto"
      />
    </div>
    
    <div style="margin-top:2rem; display:flex; flex-wrap:wrap;">
        <div v-for="item in dataList" :key="item.id" class="flexBox observed">
            <div>
                <img style="width:8rem; height:8rem; object-fit:cover;" :src="item.src" alt="">
            </div>
            <div style="margin-left:1rem;">
                <div>
                    <p style="color:#AAA;"><b>
                        {{item.title}}    
                    </b></p>

                    <p style="color:gray; font-size:.9rem;">
                        {{item.intro}}
                    </p>
                    <p style="color:#AAAAAA; text-align:left; font-size:.6rem; opacity:.6; max-height:1rem; margin-top:3rem;">
                        {{item.date}}
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            dataList: [
                {
                    src:'https://jolyson.cn/zb_users/theme/UmBGold/style/img/1.png',
                    title:'加盟星巴克一年利润能赚多少，星巴克加盟店一年能赚多少',
                    intro:'　　星巴克咖啡在咖啡行业中的威望，凭借着消费者的追捧已在全国范围内增设了多家加盟店，并且想要开一家的星巴...',
                    date:'2022-11-11',
                    id:2313
                },
                {
                    src:'https://jolyson.cn/zb_users/theme/UmBGold/style/img/1.png',
                    title:'加盟星巴克 ，加盟星巴克的条件和需资金',
                    intro:'　　如何加盟星巴克,需要多少钱?　　星巴克加盟费为：100万人民币。　　加盟方法如下：1.通过加盟热线/...',
                    date:'2022-11-11',
                    id:2314
                },
                {
                    src:'https://jolyson.cn/zb_users/upload/2022/09/202209221663836467800768.jpg',
                    title:'星巴克加盟费多少钱？2022年，星巴克咖啡加盟开放了吗？',
                    intro:'星巴克是目前流行咖啡行业的领导者之一。多年来，星巴克一直致力于咖啡，可以创造出不同的咖啡口味。每一种咖啡...',
                    date:'2022-11-11',
                    id:2315
                },
                {
                    src:'https://jolyson.cn/zb_users/upload/2022/09/202209221663836467800768.jpg',
                    title:'星巴克加盟发展前景好吗？',
                    intro:'咖啡是一个当前很火爆的饮品类型之一，而且当前的咖啡制作越来越精美，非常符合当下年轻人心目中的流行趋势。不...',
                    date:'2022-11-11',
                    id:2316
                },
                {
                    src:'https://jolyson.cn/zb_users/upload/2021/03/202103241616572329742689.jpg',
                    title:'星巴克加盟费多少？来体验美式咖啡的魅力',
                    intro:'　对于星巴克加盟费多少这样的问题，答案是非常清晰明确的，根据直辖市、省会，地级...',
                    date:'2022-11-11',
                    id:2317
                },
                {
                    src:'https://jolyson.cn/zb_users/upload/2021/03/202103241616572329742689.jpg',
                    title:'星巴克怎么加盟？经验者告诉你怎么做',
                    intro:'  我有一个自己的美食店，因为经营效果很好，所以我对投资开咖啡店也有了兴趣，并且...',
                    date:'2022-11-11',
                    id:2318
                },
                {
                    src:'https://jolyson.cn/zb_users/upload/2021/03/202103241616572247328244.jpg',
                    title:'星巴克能加盟吗？知道答案的都去联系总部了',
                    intro:'  这个项目作为一个在全球范围内都有很高知名度的一个品牌，在产品和服务方面都有着...',
                    date:'2022-11-11',
                    id:2319
                },
                {
                    src:'https://jolyson.cn/zb_users/upload/2021/03/202103241616571970222862.jpg',
                    title:'星巴克怎么样？合适的机会已出现',
                    intro:'  作为一个很有实力的品牌，它的确在饮品市场上有着不错的发展，而且作为一个大品牌...',
                    date:'2022-11-11',
                    id:23136
                }
            ]
        }
    }
};
</script>

<style scoped>
.pCon p {
  text-align: center;
}
.flexBox {
    display: flex;
    flex-wrap: nowrap;
    margin: 1rem auto;
    padding: 10px;
    background-color: rgba(255,255,255,.02);
    width: calc(100% / 2 - 20px);
}
.flexBox p {
    text-overflow: ellipsis;
}
</style>
