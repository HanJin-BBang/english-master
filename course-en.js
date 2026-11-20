/* 영어 마스터 코스: 상황별 대화. A = 상대, B = 나. [누가, 영어, 한국어] */
window.COURSE_CONFIG={
  lang:'en-US',langName:'영어',appName:'영어 마스터',
  courses:[
    {id:'travel',title:'여행',desc:'공항·호텔·식당·길 묻기',dialogs:[
      {id:'t1',title:'공항 체크인',lines:[
        ['A','Hi, where are you flying today?','안녕하세요, 오늘 어디로 가세요?'],
        ['B','To Seattle. Here\'s my passport.','시애틀이요. 여기 여권이요.'],
        ['A','Do you have any bags to check?','부칠 짐 있으세요?'],
        ['B','Just one suitcase.','캐리어 하나요.'],
        ['A','Would you like a window or an aisle seat?','창가 자리와 통로 자리 중 어디가 좋으세요?'],
        ['B','A window seat, please.','창가 자리로 주세요.']],
       pattern:{frame:'___, please.',ko:'~(으)로 주세요',ex:[['An aisle seat, please.','통로 자리로 주세요.'],['Some water, please.','물 좀 주세요.']]}},
      {id:'t2',title:'입국 심사',lines:[
        ['A','What\'s the purpose of your visit?','방문 목적이 뭐예요?'],
        ['B','I\'m here on vacation.','휴가로 왔어요.'],
        ['A','How long will you be staying?','얼마나 머무실 거예요?'],
        ['B','For five days.','5일 동안이요.'],
        ['A','Where are you staying?','어디서 묵으세요?'],
        ['B','At a hotel downtown.','시내 호텔에서요.']],
       pattern:{frame:'I\'m here ___.',ko:'~(하러) 왔어요',ex:[['I\'m here on business.','출장으로 왔어요.'],['I\'m here to visit my family.','가족을 만나러 왔어요.']]}},
      {id:'t3',title:'호텔 체크인',lines:[
        ['A','Good evening. How can I help you?','안녕하세요. 무엇을 도와드릴까요?'],
        ['B','Hi, I\'d like to check in. I have a reservation.','체크인하고 싶어요. 예약했어요.'],
        ['A','May I have your name, please?','성함 알려 주시겠어요?'],
        ['B','It\'s Han. H, A, N.','한이에요. H, A, N.'],
        ['A','Here\'s your key. Breakfast is from seven to ten.','열쇠 여기 있어요. 조식은 7시부터 10시까지예요.'],
        ['B','Great. What time is checkout?','좋아요. 체크아웃은 몇 시예요?']],
       pattern:{frame:'I\'d like to ___.',ko:'~하고 싶어요',ex:[['I\'d like to check out.','체크아웃하고 싶어요.'],['I\'d like to change my room.','방을 바꾸고 싶어요.']]}},
      {id:'t4',title:'식당 주문',lines:[
        ['A','Are you ready to order?','주문하시겠어요?'],
        ['B','Yes. What do you recommend?','네. 뭘 추천하세요?'],
        ['A','The steak is very popular.','스테이크가 인기가 많아요.'],
        ['B','I\'ll have that. And a glass of water, please.','그걸로 할게요. 그리고 물 한 잔 주세요.'],
        ['A','Anything else?','더 필요하신 건요?'],
        ['B','That\'s all, thanks.','그거면 돼요, 고마워요.']],
       pattern:{frame:'I\'ll have ___.',ko:'~(으)로 할게요',ex:[['I\'ll have the pasta.','파스타로 할게요.'],['I\'ll have the same.','같은 걸로 할게요.']]}},
      {id:'t5',title:'카페',lines:[
        ['A','Hi, what can I get for you?','안녕하세요, 뭘 드릴까요?'],
        ['B','Can I get an iced latte?','아이스 라테 주시겠어요?'],
        ['A','Sure. What size?','네. 어떤 사이즈요?'],
        ['B','Medium, please.','미디엄이요.'],
        ['A','For here or to go?','드시고 가세요, 가져가세요?'],
        ['B','To go, please.','가져갈게요.']],
       pattern:{frame:'Can I get ___?',ko:'~ 주시겠어요?',ex:[['Can I get a hot tea?','따뜻한 차 주시겠어요?'],['Can I get the bill?','계산서 주시겠어요?']]}},
      {id:'t6',title:'길 묻기',lines:[
        ['B','Excuse me. How do I get to the station?','실례합니다. 역에 어떻게 가요?'],
        ['A','Go straight and turn left at the second light.','쭉 가다가 두 번째 신호등에서 왼쪽으로 도세요.'],
        ['B','Is it far from here?','여기서 멀어요?'],
        ['A','No, it\'s about a five-minute walk.','아니요, 걸어서 5분 정도예요.'],
        ['B','Thank you so much.','정말 고마워요.']],
       pattern:{frame:'How do I get to ___?',ko:'~에 어떻게 가요?',ex:[['How do I get to the museum?','박물관에 어떻게 가요?'],['How do I get to the airport?','공항에 어떻게 가요?']]}},
      {id:'t7',title:'옷 가게',lines:[
        ['A','Can I help you find anything?','찾으시는 거 있으세요?'],
        ['B','I\'m just looking, thanks.','그냥 둘러보는 중이에요, 고마워요.'],
        ['B','Actually, do you have this in a smaller size?','아, 이거 더 작은 사이즈 있어요?'],
        ['A','Let me check. Here you go.','확인해 볼게요. 여기 있어요.'],
        ['B','Can I try it on?','입어 봐도 돼요?'],
        ['A','Sure. The fitting room is over there.','그럼요. 탈의실은 저쪽이에요.']],
       pattern:{frame:'Do you have this in ___?',ko:'이거 ~(으)로 있어요?',ex:[['Do you have this in blue?','이거 파란색 있어요?'],['Do you have this in a larger size?','이거 더 큰 사이즈 있어요?']]}},
      {id:'t8',title:'계산하기',lines:[
        ['A','Your total is forty-two dollars.','총 42달러입니다.'],
        ['B','Can I pay by card?','카드로 계산해도 돼요?'],
        ['A','Of course. Would you like a receipt?','물론이죠. 영수증 드릴까요?'],
        ['B','Yes, please. Could I also get a bag?','네. 봉투도 주실 수 있어요?'],
        ['A','Sure. Have a nice day!','그럼요. 좋은 하루 보내세요!'],
        ['B','You too.','당신도요.']],
       pattern:{frame:'Could I also get ___?',ko:'~도 주실 수 있어요?',ex:[['Could I also get a spoon?','숟가락도 주실 수 있어요?'],['Could I also get a refund?','환불도 받을 수 있을까요?']]}},
      {id:'t9',title:'택시',lines:[
        ['A','Where to?','어디로 가세요?'],
        ['B','To this address, please.','이 주소로 가 주세요.'],
        ['A','Sure. Are you in a hurry?','네. 급하세요?'],
        ['B','A little. How long will it take?','조금요. 얼마나 걸려요?'],
        ['A','About twenty minutes.','20분 정도요.'],
        ['B','Could you stop here, please?','여기서 세워 주시겠어요?']],
       pattern:{frame:'Could you ___, please?',ko:'~해 주시겠어요?',ex:[['Could you open the trunk, please?','트렁크 좀 열어 주시겠어요?'],['Could you turn on the air conditioner, please?','에어컨 좀 켜 주시겠어요?']]}},
      {id:'t10',title:'호텔 방 문제',lines:[
        ['B','Hi, I\'m in room five twelve. The air conditioner isn\'t working.','512호인데요. 에어컨이 안 돼요.'],
        ['A','I\'m sorry about that. I\'ll send someone right away.','죄송합니다. 바로 사람을 보낼게요.'],
        ['B','Thank you. Could I also get some extra towels?','고마워요. 수건 좀 더 받을 수 있을까요?'],
        ['A','Of course. Anything else?','물론이죠. 더 필요한 건요?'],
        ['B','No, that\'s it. Thanks for your help.','아니요, 그게 다예요. 도와줘서 고마워요.']],
       pattern:{frame:'The ___ isn\'t working.',ko:'~이(가) 안 돼요',ex:[['The Wi-Fi isn\'t working.','와이파이가 안 돼요.'],['The shower isn\'t working.','샤워기가 안 돼요.']]}}
    ]},
    {id:'daily',title:'일상',desc:'자기소개·취미·가족·주말 이야기',soon:true,dialogs:[]},
    {id:'business',title:'비즈니스',desc:'회의·일정 조율·의견 말하기',soon:true,dialogs:[]}
  ]
};
