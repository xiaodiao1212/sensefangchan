(function(){

    var qa = [
        {
            q: '居民家庭拥有的住房怎样认定？',
            a: '居民家庭拥有的住房包括已经拿到房产证或已完成网上签约的住房。'
        },
        {
            q: '2人共同拥有一套住房，如何计算名下房屋数量？',
            a: '各共有权人不论份额多少，都视为拥有一套住房。'
        },
        {
            q: '连续五年缴纳个税的标准是什么？',
            a: '一是按“工资、薪金所得”缴税的纳税人，是指根据个人所得税法及实施条例规定，取得因与任职或者受雇有关的工资、薪金等所得的个人，从申请月的上一个月开始往前推算60个月在本市连续缴纳个人所得税；二是按“个体工商户生产、经营所得”缴税的纳税人，是指根据个人所得税法及实施条例规定，取得“个体工商户生产、经营所得”的个体工商户经营者、个人独资企业出资人、合伙企业个人合伙人和个人，根据各自适用的计税期间，采取按月缴纳税款方式的，从申请月的上一个月开始往前推算60个月在本市连续缴纳个人所得税；采取按季缴纳税款方式的，从申请月的上一季度开始往前推算20个季度在本市连续缴纳个人所得税。对于因工作变动等原因造成未缴或补缴税款且不超过三个月的，视为连续缴纳。'
        },
        {
            q: '连续五年缴纳社保的标准是什么？',
            a: '指从申请月的上一个月开始往前推算60个月连续缴纳社会保险，不能断月，且提出申请之月须为正常参保状态。自2012年12月18日起，补缴社保不予认可。'
        },
        {
            q: '什么样的情况下补缴社保，不影响其在京购房资格？',
            a: '因单位注册地址发生变更、扣款失败等确因单位原因造成单位所有员工社保断缴，单位为个人完成补缴不超过3个月的，在购房资格审核中会视为正常缴纳。因工作调动造成个人社保补缴的，单位为职员完成补缴，且不超过3个月的，视为正常缴纳。以上两种情形补缴累计不得超过3个月。'
        },
        {
            q: '按揭贷款有哪些还款方式？',
            a: '等额本息和等额本金。收入稳定或者有增长预期，适合等额本息，这样整个过程中的还款压力不变；现有余款较多或者收入远高于债务支付的购房者，适合等额本金，还款额逐月递减，整体支付利息也会减少。'
        },
        {
            q: '贷款期限多长合适？',
            a: '期限的选择因人而异，主要考虑考虑三个方面，1.贷款人的可能的最长的按揭贷款期限2.贷款人的自身状况，如收支情况，还款压力等，3.适度关注宏观经济状况，如经济加息期活降息期。'
        }
    ]
    var $li = $('.qustion ul li');
    var $loanLi = $('.loan-type');
    var storeIndex = 0;
    var loanStoreIndex = 0;
    $li.on('click', function(event){
        var index = $(event.target).data('index');
        $($li[storeIndex]).removeClass('active');
        $($li[index]).addClass('active');
        storeIndex = index
        returnClass(index);
    });

    $loanLi.on('click', function(event){
        loanIndex = $(event.target).data('index');
        showLoan(loanStoreIndex, loanIndex);
        loanStoreIndex = loanIndex;
    })

    function returnClass(index){
        $('.answer-q').html(qa[index].q);
        $('.answer-a').html(qa[index].a);
    }

    function showLoan(oldIndex, newIndex) {
        var oldClass=".money-"+oldIndex;
        var newClass=".money-"+newIndex;
        $($loanLi[oldIndex]).removeClass('active');
        $($loanLi[newIndex]).addClass('active');
        $(oldClass).hide();
        $(newClass).show();
    }

    returnClass(storeIndex);
    $($li[storeIndex]).addClass('active');

    showLoan(1,0);


    // var swiper = new Swiper('.swiper-container', {
    //     pagination: {
    //       el: '.swiper-pagination',
    //       type: 'fraction',
    //     },
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })


})()