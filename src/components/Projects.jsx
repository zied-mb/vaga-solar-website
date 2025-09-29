import React, { useState } from 'react';
import { FiExternalLink, FiSun, FiZap, FiHome, FiSettings, FiMapPin, FiTrendingUp, FiAward, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Installation Résidentielle - Béja',
      type: 'residential',
      description: 'Grâce à ses 3 kWc, cette installation produit désormais sa propre électricité et allège significativement les dépenses énergétiques du foyer.',
      capacity: '3 kWc',
      savings: '70%',
      location: 'Béja',
      image: 'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/528905158_606150825899757_1419074768972983839_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UWXZ90VGYa4Q7kNvwG9DPz0&_nc_oc=Adk-OitJCX1N_l-H2pYaUfXa9cI7zbsIjkPx_ME7fckOl9PnqS2jFmKUklzQA7EBzb8&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=S0MldEiHwoEalruVkD15Jw&oh=00_AfZQEgeebwgCjmeHDWeT2-YPOZPliTcnOojId8NwYD7JBw&oe=68DFC98B',
      link: '/projects/beja-residential',
      gallery: [
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/528905158_606150825899757_1419074768972983839_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UWXZ90VGYa4Q7kNvwG9DPz0&_nc_oc=Adk-OitJCX1N_l-H2pYaUfXa9cI7zbsIjkPx_ME7fckOl9PnqS2jFmKUklzQA7EBzb8&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=S0MldEiHwoEalruVkD15Jw&oh=00_AfZQEgeebwgCjmeHDWeT2-YPOZPliTcnOojId8NwYD7JBw&oe=68DFC98B',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/529219617_606150912566415_6598847493027592265_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mJ04Bp519igQ7kNvwE-JZ-Q&_nc_oc=Adli5vVdErm-MFTozeuzayvg0eCHn88opBd9e0tWeS_2ffkd6VysGf7ef_dT8gWn7Vo&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=WWZMjG1mHZiocYdlMnvVLA&oh=00_AfbJIfHziwoSr0x3Zbj8deVIlEeYVVYPgyL1t4mIIq95mA&oe=68DF982F',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/529694503_606151012566405_2404099017651246300_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=meykbY9u3JcQ7kNvwEyNaVZ&_nc_oc=AdnJVfuHRYWsetanz9FWnzmskfKs73oe0_n3wBUg6oXK-o4LSL_wGA5zQviNx5UiUz0&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=ZMln5U9qHxXyxh6Rrtn__A&oh=00_AfYTsMAhvcQ_XeFPDBauCN1VRNQhIt_zrrhuKR96Hjr7Qw&oe=68DFCA6E',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/528468249_606151099233063_9151020469611594061_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3xh3eObtlt0Q7kNvwHdcBn4&_nc_oc=Adkc6mRnUdlIRA6ekARuoX45Ga2083Pohemac1yk0Pr4Sst4uhcfA6lLQMGj-t-vYfA&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=S4Q8gFnyFbNEDodv5oF7lQ&oh=00_AfZLBx8bMaaIlM8VIgEnOykz66VOcXLHLeGymSEO5ASMhg&oe=68DFCDD0',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/528990641_606151202566386_7547799416414265298_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sUijEjXhUvMQ7kNvwEBKLnM&_nc_oc=AdnYGZREOQM6vkxxkFgHUvAek9UcK2qYWT5p5fhjqHePZ01RP5z1LuJOJGQTQEd3-h8&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=9flGIIO-Z4dcpym7ng8AAQ&oh=00_AfbW_P_HjhlBHV29ID3-SjZnSelb_riEtn04x8XrE-p-_w&oe=68DFCD47'
      ]
    },
    {
      id: 2,
      title: 'Éclairage Public Solaire',
      type: 'commercial',
      description: 'Projet 100% réussi d\'éclairage public solaire. Installation clé en main avec matériel haut de gamme et accompagnement d\'expert.',
      capacity: 'Système autonome',
      savings: '100%',
      location: 'Tunisie',
      image: 'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/518342956_592505030597670_707505346529142206_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5gmFicFnJ_wQ7kNvwFQ1TjZ&_nc_oc=Adk9Ez5MQUHg6v_OyQ_BcAiKj28Tb2_xMLL3ZB3kiQkkRwX2jawbwgnjqzsbCcfX1B4&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=gbGr5WJOO7nT1xsKzgO8Rw&oh=00_AfZcIu5A5HRqFEWz6X7fg0z6wjzFXXiUnaEL5rk6GG7RVw&oe=68DFA31B',
      link: '/projects/street-lighting',
      gallery: [
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/518342956_592505030597670_707505346529142206_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5gmFicFnJ_wQ7kNvwFQ1TjZ&_nc_oc=Adk9Ez5MQUHg6v_OyQ_BcAiKj28Tb2_xMLL3ZB3kiQkkRwX2jawbwgnjqzsbCcfX1B4&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=gbGr5WJOO7nT1xsKzgO8Rw&oh=00_AfZcIu5A5HRqFEWz6X7fg0z6wjzFXXiUnaEL5rk6GG7RVw&oe=68DFA31B',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/518344250_592505150597658_2130690229574838753_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wI1D8ePMaYsQ7kNvwGSNg8V&_nc_oc=Adk6GNSZJqFYpwmkVrtqTy-7Uh4z0Z9PZsYVncAjG05eVRoMVih17yqUgr-GKrhstqI&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=C89PF-WcKOWPRd9cUR3h8Q&oh=00_AfapoijILMZTD1fIyG3YUFXxIhJRBaPTlfet4dktdQU2TQ&oe=68DFA828',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/519914688_592505317264308_6751297801656582288_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TfVdujeUUWEQ7kNvwEVGhVJ&_nc_oc=AdnVIok0LWUsWqkINHl42heheAP2HneuyQ3-oh9DQQPIBkUOe9nRJkWouSdZvT6r-5k&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=0VEIJHKNbvJWv2U2Z0RT5g&oh=00_AfZE2SCesLKB_vIkdokfAWAqsIQzFIFRegJ6fNsSGgyOmA&oe=68DFBFCF',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/522104139_592505443930962_5828136587375607023_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dWTF_tB7jnoQ7kNvwGU67Ye&_nc_oc=AdlJwt4jaf3-Lzsf9qVseTVHwWvdendUHO6owC20q3RiRiXo8bjQKtF9gaPa4izNfms&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=5OP_OVmGf_hFQJ8q53tnCw&oh=00_AfYgYI129zOt3wyyYaKqiCQlxicgzA8w4fJ-h4L3X7d3rA&oe=68DFABFF',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/519408677_592505523930954_2097368197388885582_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=U12WwLrgE7AQ7kNvwGIBMcm&_nc_oc=AdlkGJI08kk0-KppDqE957li4SXYgDDdhlV2ZYYX0kEpvi4mZ3CHX0HmWPpGBvqEfRM&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=6imjCd2eZo7VUiXFQY_PSA&oh=00_AfYYE6tgr5g7H-luRSqQFGwAcG0dsX6KD-necSfqbBvttQ&oe=68DFC92F',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/520804266_592505620597611_4973006026091590670_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dz2vq-tZqQIQ7kNvwF9mgTG&_nc_oc=AdmcXNHvS2pbAAhJrhzQm8qJ782cFqW__89PZOE-9Yj-iO7W-LtK5yHy2v7cdTtZi00&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=DYeaP-IXKXnqJeqXDXzGgw&oh=00_Afapy_YKot-CHD-aTdKrZX4aoplTEu6WI6z17uqIj16MKg&oe=68DF9CF7',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/520780871_592504883931018_7241508517478549478_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vy2bzoWzpX4Q7kNvwFmGGxu&_nc_oc=AdmfW6xBt9JGqFwwKwivx9qDqm3-6h3CS1y9hi3odxaYgpDN6HqvNLhB4tyTBmszfxQ&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=bJm4UthRxS9unOuKz4GYJA&oh=00_AfY-G0flGNOBt0Th578kXm7TkrlgRqN_ZWL6SJjFsiEd_g&oe=68DFB29C',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/522608641_592504940597679_808098565167890901_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=48cLPKoAjDAQ7kNvwFjjP0e&_nc_oc=AdmTBgdzgui1_E2Tt1cz30dp2EsMS_DQWxhKaAKbERxsAWnRfMsDeuA3SYtZyDuZTmg&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=UrPs_wlWFG57jsF-eiZnmw&oh=00_Afbnc5E_tE8lY0Bkb2JjcXEyickkT1CuW1m56NBwHJbzDQ&oe=68DFCBA3'
      ]
    },
    {
      id: 3,
      title: 'Installation Mornaguia',
      type: 'residential',
      description: 'Nouvelle installation de 4 kWc/2kWc. Investissement rentable et durable pour maison ou entreprise. Passez à l\'énergie solaire dès aujourd\'hui !',
      capacity: '4 kWc/2kWc',
      savings: '75%',
      location: 'Mornaguia',
      image: 'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/511065945_571704259344414_6973710604476868262_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_3haSe-5kJYQ7kNvwGa7dKL&_nc_oc=AdmKqV8NgBiUz-wWyl6VMwJBtwUW8Xz1sC39sSaFnka8TsIVTB6WEQOaRZCG38sCa24&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=3E2udWHE0qEpt9-nuzYQ5Q&oh=00_Afb9PmITuqJRNSaq6N4YWsfQ4VlwauTo2xgJqMjf-PH04A&oe=68DFA175',
      link: '/projects/mornaguia',
      gallery: [
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/511065945_571704259344414_6973710604476868262_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_3haSe-5kJYQ7kNvwGa7dKL&_nc_oc=AdmKqV8NgBiUz-wWyl6VMwJBtwUW8Xz1sC39sSaFnka8TsIVTB6WEQOaRZCG38sCa24&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=3E2udWHE0qEpt9-nuzYQ5Q&oh=00_Afb9PmITuqJRNSaq6N4YWsfQ4VlwauTo2xgJqMjf-PH04A&oe=68DFA175',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/513078941_571704446011062_7076157143046529078_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VpQrRZWVDtYQ7kNvwHBLRWE&_nc_oc=Admc2GBwuswTGVE3mq6rg2A54Dhi1p2bgntOktm4SBXWK65xMJKitWI9zissbB47VTY&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=LUhy9EOauBzo1syaQNObow&oh=00_AfbOa5uq6f8DD-jZGsWGF1pdAPWqQotwm59eqbPvnMMGPQ&oe=68DFA07D',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/509597633_571704679344372_7443249970827729212_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dzC4dj3bp3cQ7kNvwHl7xYS&_nc_oc=AdnmgADSZ4Gh-4oicjo0CkB5QIYmPxgDJa-QamT9gWwqnET_h27X9WJ-5EIMRVpB1Q8&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=B4pdRcMJpe0avFyBi6SO0A&oh=00_AfbqMduI4U4m2UjR6LLuAHz1p5sM1EsVNAru9wB6zvh1KA&oe=68DFC862',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/511327839_571704829344357_3621203114084934725_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tZupmHe1XRoQ7kNvwGskjat&_nc_oc=AdlA-sXcQgSzF16YjM9eqYv42BqvMhoQT5JHfbCboFdYJLJsHr6R3WPJKSBXl_gWbS0&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=t2XTPtKY5ztjPmqGsjGRYg&oh=00_AfYPreFftNrpvvKJg0okkyJzwv_61J9WFHZjOiIDqSrtEQ&oe=68DFB3BC',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/510208907_571704766011030_4320559830807792371_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5HUbDpvaL_8Q7kNvwGvd21C&_nc_oc=Adl-ct0V3PemOQxYaUxs5C9WntCBb4fqDyDBwSFJ_yTbRzADe34IzIrvTmyCPF0IQlA&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=Tg_PjTWN5FXRQ9jH8niKvg&oh=00_AfbZGAhcmazVjUxMRU9GP9vNnu5Uxjjg6CktIwWlF2NBJA&oe=68DFAD62'
      ]
    },
    {
      id: 4,
      title: 'Installation Photovoltaïque - Takelsa',
      type: 'residential',
      description: "Installation résidentielle raccordée au réseau STEG. Laissez le soleil payer votre facture d'énergie avec cette solution optimale.",
      capacity: '3 kWc',
      savings: '65%',
      location: 'Takelsa',
      image: 'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/509817211_567678049747035_365958727869426232_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GYvUN_s0H68Q7kNvwGuAqpJ&_nc_oc=AdkD1FThrr17rjdcrz2__vxuV8fDjciCb6KDaRVZecl9s1NKIS5UB6_Bk7xvmKqeR74&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=opfHujhgAQpBoIK1KkW53w&oh=00_AfYZw_wpkJNwem3jHNYkGxH4FFbGwOrIRJ8YUZkLEIq9eg&oe=68DFC84F',
      link: '/projects/takelsa',
      gallery: [
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/509817211_567678049747035_365958727869426232_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GYvUN_s0H68Q7kNvwGuAqpJ&_nc_oc=AdkD1FThrr17rjdcrz2__vxuV8fDjciCb6KDaRVZecl9s1NKIS5UB6_Bk7xvmKqeR74&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=opfHujhgAQpBoIK1KkW53w&oh=00_AfYZw_wpkJNwem3jHNYkGxH4FFbGwOrIRJ8YUZkLEIq9eg&oe=68DFC84F',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/509426741_567677896413717_6315789298171891507_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=R2v0ctAo_xUQ7kNvwF7UjUS&_nc_oc=Admdf8M8mwXqO4CbyXFSoE6Z_P8dRUfU6daLC7gYsPyplOzqmFVvUQcoXZ1z7GTbKbM&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=2TU3y4zqy1duNixUOYNJLg&oh=00_AfY9E4A4y0_zGpyKKraRvcf-N_qLO0K_GZr3kGC4i174TA&oe=68DFB4F6',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/509429607_567677949747045_8853164913137201457_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2WAO-LsGj2cQ7kNvwE9Cis0&_nc_oc=AdkswEWnlVbqf6Y1FTmHyQCXAAr4al8zAbPPeDztg0qb9HgsSP9C2oxgIUrVB1hNu3Y&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=OKdXq7m-V9kXRTcjn6BXjw&oh=00_AfYKfgzRm1gk1JnIKEM3bNt9IvUzVYVxdLHiHYPDsYkfLQ&oe=68DFBE82',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/509702999_567678286413678_8197202820500851210_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_l6aRrdymfYQ7kNvwFqiaa2&_nc_oc=Admyoi3LeGfIgDeVH1VtEJHp5ff0E72OXcB4jXJ45oiOkOrleDXCe8o5DwI9pMWrTZ0&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=N2leFXqH4wxUtqSFEkkEyQ&oh=00_Afau_MyiaxVtRVJ77WntGE_MYiw6vWddauSIjwWAEzLiew&oe=68DFBBDA'
      ]
    },
    {
      id: 5,
      title: 'Nouvelle Installation - Hammamet',
      type: 'residential',
      description: "Nouvelle installation photovoltaïque avec puissance 7 kWc. Passez à l'énergie solaire dès aujourd'hui !",
      capacity: '7 kWc',
      savings: '75%',
      location: 'Hammamet',
      image: 'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/499933667_546028021912038_6433293401879010940_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DUitPzT39UgQ7kNvwEV8BDk&_nc_oc=AdkHfyXC9moFNLL-vWS-SeukMpkLAVnGjie2dRtJLgeL5X1j2sXBvLJ-Q4o0WCC06aM&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=XuJj0Mzu8Wc4DKg6cM-Fkg&oh=00_AfaE24LegzGVUDrJYfE83k21C8SJgoxios2Hh1hRzDouSA&oe=68DFBEFC',
      link: '/projects/hammamet-installation',
      gallery: [
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/499933667_546028021912038_6433293401879010940_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DUitPzT39UgQ7kNvwEV8BDk&_nc_oc=AdkHfyXC9moFNLL-vWS-SeukMpkLAVnGjie2dRtJLgeL5X1j2sXBvLJ-Q4o0WCC06aM&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=XuJj0Mzu8Wc4DKg6cM-Fkg&oh=00_AfaE24LegzGVUDrJYfE83k21C8SJgoxios2Hh1hRzDouSA&oe=68DFBEFC',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/499505438_546028088578698_6501150913313424581_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RKAIYYvnq1oQ7kNvwHgqDiW&_nc_oc=AdmqzuNNKpymHhbS5vYDtayEDaHC2_5lQXzvAuuLuGUl4LnxRfC3MGKZviMoDeLP6JA&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=oSfB1AtuBMUgehmZrtVibg&oh=00_AfYkEOO8SpeuUBzC72OVDfF7DEQtQ6UQ7Esn_4gfiIcI8w&oe=68DFCE67',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/499407958_546028158578691_9067293765196005647_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TyuLR03WMX8Q7kNvwEVtb6f&_nc_oc=AdnJTprRd0MgXFa14g4nmMXtILwJab-iipKS_NzyjdWo9UJkfHP_SKqHSHr-erXLtIk&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=nOnYaVaWK1cMzrZTAsZa6w&oh=00_AfZyTq3Xf5PTn6zYNIyzkLvX1fxsGAapyF2bipOmQodAKA&oe=68DFC4CB',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/499675840_546028211912019_4241864600727849252_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qAzGujbdwmEQ7kNvwHxiwaK&_nc_oc=AdmM4nYNLDpZLgxOezN2yNxEnHG0_ackBZRj4ry5C2nETAOCU_jVa10Jp75Bg7tXVvo&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=66kt0H82E9RiehWosNP4OA&oh=00_AfbQnULynf2e-5ESRNxuZ_tHl-r3o79UtXN0Gp6SVbWKhg&oe=68DFA526'
      ]
    },
    {
      id: 6,
      title: 'Installation Photovoltaïque - Nabeul',
      type: 'residential',
      description: 'Installations photovoltaïques résidentielles raccordées au réseau STEG avec puissance 3 kWc.',
      capacity: '3 kWc',
      savings: '70%',
      location: 'Nabeul',
      image: 'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/497467218_541794085668765_2619622294164995386_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pBFf4WbOdQIQ7kNvwGFlyX7&_nc_oc=AdkCiWQZS4IWAGgTb5XGLjjeYG6xtBukSfRLsVpysI0EOx-ejQLsAh70YKmtLrg93Bs&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=DwWTKCSD5nnOpaARFYpKgQ&oh=00_AfbWqlxNqaFe8v4ss7gtFc71QgtNTXr73uCmj4HSTf_cxQ&oe=68DFADB7',
      link: '/projects/nabeul-installation',
      gallery: [
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/497467218_541794085668765_2619622294164995386_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pBFf4WbOdQIQ7kNvwGFlyX7&_nc_oc=AdkCiWQZS4IWAGgTb5XGLjjeYG6xtBukSfRLsVpysI0EOx-ejQLsAh70YKmtLrg93Bs&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=DwWTKCSD5nnOpaARFYpKgQ&oh=00_AfbWqlxNqaFe8v4ss7gtFc71QgtNTXr73uCmj4HSTf_cxQ&oe=68DFADB7',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/497584471_541794025668771_611042343203695492_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aqfcLKQlwy8Q7kNvwFQzDnX&_nc_oc=AdmZjZFm0R67gi5W-0eevA0c9vlGxcneHaTy3bLp68X25ryDkeYY9VQco_zp-YMGpPQ&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=WsuLHU5R3sdvhq3IqCh_5g&oh=00_Afbs18gknHCRZV34HsS3TZYNrwP3HL2NRw5sXDMw75yrpg&oe=68DF9928',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/496825337_541793919002115_8482880728343673144_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2Z3imJnHyqAQ7kNvwE-xdxy&_nc_oc=AdnPtNmUm8SuYLubdgYw1oQAaI_K31E6c48deOwkNMGdoMdc7NcCzTT0zhtEEf_rqjE&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=9gxDHkI_Ywx7B77Qio9RvA&oh=00_AfZkCGvvTwKALLp8FtQPl7s97gyE2hoN-tW-2G_xacFLdg&oe=68DFB9EA',
        'https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/497464900_541794149002092_5924514836962660116_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NTD1jsvi1hAQ7kNvwEC_aIR&_nc_oc=Adlj2s_GuGsAvF_VPqilUZTD8hRXGHd4A1Iz89DhHSjR4uQ6E0-HWxccu2lM_24Xwd0&_nc_zt=23&_nc_ht=scontent.ftun6-1.fna&_nc_gid=qHAwOQGB9mhG-VaE7phiRA&oh=00_AfbQb0-8EMPXMHLQnX6FzOX240NRussbrN4BA97_KTAyOQ&oe=68DFA964'
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const openGallery = (projectId) => {
    if (projectId === 1 || projectId === 2 || projectId === 3 || projectId === 4 || projectId === 5 || projectId === 6) {
      setIsGalleryOpen(true);
      setCurrentImageIndex(0);
      setCurrentProjectId(projectId);
    }
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setCurrentImageIndex(0);
    setCurrentProjectId(null);
  };

  const nextImage = () => {
    const currentProject = projects.find(p => p.id === currentProjectId);
    if (currentProject) {
      setCurrentImageIndex((prev) =>
        prev === currentProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    const currentProject = projects.find(p => p.id === currentProjectId);
    if (currentProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-yellow-50/30 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Modernized solar background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-yellow-500/3 to-yellow-400/5"></div>

      {/* Subtle sun rays */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.5
            }}
          ></motion.div>
        ))}
      </div>

      {/* Floating solar panels with refined animation */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
        <motion.div
          className="grid grid-cols-4 grid-rows-4 gap-1 w-full h-full"
          animate={{
            rotate: [0, 3, 0],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {[...Array(16)].map((_, i) => (
            <div key={i} className="bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-sm"></div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 left-10 w-24 h-24 opacity-10">
        <motion.div
          className="grid grid-cols-4 grid-rows-4 gap-1 w-full h-full"
          animate={{
            rotate: [0, -3, 0],
            y: [0, 12, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          {[...Array(16)].map((_, i) => (
            <div key={i} className="bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-sm"></div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modernized header section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-6 py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-yellow-500/30 shadow-md"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 20px -5px rgba(234, 179, 8, 0.2)"
            }}
          >
            <FiSun className="text-yellow-500 mr-2 text-lg" />
            <span className="text-yellow-700 dark:text-yellow-400 font-medium">Nos Réalisations</span>
          </motion.div>

          <motion.h2
            className="mt-8 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Projets <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-600">Réalisés</span>
          </motion.h2>

          <motion.p
            className="mt-5 text-lg md:text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Découvrez nos dernières installations solaires à travers la Tunisie. Chaque projet témoigne de notre expertise et de notre engagement pour un avenir durable.
          </motion.p>
        </motion.div>

        {/* Modernized projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardItem}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200/60 dark:border-gray-700/60 hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)"
              }}
            >
              {/* Enhanced project image */}
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                {/* Project image with refined effects */}
                <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105" style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  {/* Refined overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                  {/* Subtle solar panel grid effect */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 p-3 opacity-5">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-b from-gray-400 to-gray-500 dark:from-gray-600 dark:to-gray-700 rounded-sm"
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Modernized location badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full shadow backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiMapPin className="inline mr-1 text-blue-500" />
                  {project.location}
                </motion.div>

                {/* Modernized capacity badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full shadow backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiZap className="inline mr-1 text-yellow-500" />
                  {project.capacity}
                </motion.div>

                {/* Modernized savings badge */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white text-xs font-medium px-3 py-1.5 rounded-full shadow backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiTrendingUp className="inline mr-1 text-green-500" />
                  -{project.savings}
                </motion.div>

                {/* Refined hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end">
                  <div className="p-5 text-white w-full flex justify-end">
                    <div className="flex items-center space-x-1.5">
                      <FiAward className="text-yellow-400 text-sm" />
                      <span className="text-xs opacity-90">Projet certifié</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Modernized project type badge */}
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-500/15 rounded-full">
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Project link */}
                <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700 flex justify-center">
                  {project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4 || project.id === 5 || project.id === 6 ? (
                    <motion.button
                      onClick={() => openGallery(project.id)}
                      className="text-yellow-600 dark:text-yellow-400 font-medium flex items-center hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors duration-300 group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm">Voir le projet</span>
                      <FiExternalLink className="ml-2 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  ) : (
                    <motion.a
                      href={project.link}
                      className="text-yellow-600 dark:text-yellow-400 font-medium flex items-center hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors duration-300 group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm">Voir le projet</span>
                      <FiExternalLink className="ml-2 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modernized call to action */}
        <motion.div 
  className="mt-16 text-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.7, delay: 0.5 }}
>
  <a 
    href="https://www.facebook.com/Vaga.Solar.Tunisie/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <motion.button
      className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto group"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 15px 30px -8px rgba(234, 179, 8, 0.3)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <FiSun className="mr-2 text-lg group-hover:rotate-180 transition-transform duration-500" />
      Voir tous nos projets
    </motion.button>
  </a>
</motion.div>


        {/* Modernized stats section */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {[
            { value: "850+", label: "Projets réalisés", icon: <FiHome />, color: "from-blue-500 to-blue-600" },
            { value: "25 MWc", label: "Capacité installée", icon: <FiZap />, color: "from-yellow-500 to-yellow-600" },
            { value: "98%", label: "Clients satisfaits", icon: <FiSun />, color: "from-green-500 to-emerald-600" },
            { value: "70%", label: "Économies moyennes", icon: <FiSettings />, color: "from-purple-500 to-pink-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)"
              }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-400`}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-3">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <div className="text-xl">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1.5">{stat.value}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX className="w-6 h-6" />
              </motion.button>

              {/* Navigation buttons */}
              <motion.button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Main image */}
              <motion.img
                key={currentImageIndex}
                src={projects.find(p => p.id === currentProjectId)?.gallery[currentImageIndex]}
                alt={`Installation - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {projects.find(p => p.id === currentProjectId)?.gallery.length}
              </div>

              {/* Thumbnail navigation */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {projects.find(p => p.id === currentProjectId)?.gallery.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${index === currentImageIndex
                        ? 'border-yellow-400 scale-110'
                        : 'border-white/30 hover:border-white/60'
                      }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;