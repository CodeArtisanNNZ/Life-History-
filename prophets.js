
(() => {
  const mount = document.getElementById('prophetArchive');
  if (!mount) return;

  const P = [
    {
      n:'Adam', ar:'آدم', era:'Beginning of human prophetic history · no calendar date given',
      story:`The Qur'an presents Adam as the first human in its prophetic narrative. Allah announces to the angels that He will place a successive authority on earth, teaches Adam the names, creates him from earthly material described in different passages as clay/dust, and commands the angels to prostrate to him. The angels obey, while Iblis refuses out of pride. Adam and his spouse are placed in the Garden, warned not to approach a particular tree, then deceived by Satan. After they eat, they recognize their error and repent; Allah accepts repentance and sends humanity to earthly life with guidance. The Qur'an later tells the story of two sons of Adam, one of whom kills the other after an offering is accepted from one and not the other.`,
      events:['Allah announces Adam’s earthly role and teaches him the names.','The angels prostrate; Iblis refuses and becomes an enemy through pride.','Adam and his spouse live in the Garden, slip after Satan’s whispering, then repent.','Human life on earth begins with a promise of divine guidance.','The Qur’an recounts the first murder through the story of two sons of Adam.'],
      refs:[['2:30–39','https://quran.com/2/30-39'],['7:11–27','https://quran.com/7/11-27'],['15:26–44','https://quran.com/15/26-44'],['20:115–123','https://quran.com/20/115-123'],['38:71–85','https://quran.com/38/71-85'],['5:27–31','https://quran.com/5/27-31']],
      caution:'The Qur’an does not give Adam a BC/BCE date, does not identify a fossil specimen as Adam, and does not name his spouse “Hawwa” in the Qur’anic text.'
    },
    {
      n:'Idris', ar:'إدريس', era:'Era not specified',
      story:`Idris is one of the prophets about whom the Qur'an gives only a small amount of information. He is described as a truthful man and a prophet, and the Qur'an says that Allah raised him to a high station. He is also named among those who were patient and admitted into Allah's mercy. Because the primary Islamic texts provide no continuous biography, this site does not fill the gaps with later legendary material.`,
      events:['Named as a truthful prophet.','Raised by Allah to a high station.','Named among the patient and righteous.'],
      refs:[['19:56–57','https://quran.com/19/56-57'],['21:85–86','https://quran.com/21/85-86']],
      caution:'No detailed Qur’anic life story, birthplace, occupation, or date is given.'
    },
    {
      n:'Nuh', ar:'نوح', era:'After Adam · exact date not specified',
      story:`Nuh calls his people to worship Allah alone and warns them persistently over an extraordinarily long mission. The Qur'an says he remained among his people for a thousand years minus fifty. His people repeatedly reject him, mock the message, and refuse to leave their idols. Allah instructs Nuh to build the Ark. When the command comes, water overwhelms the rejecting people while Nuh and the believers are carried to safety. One of Nuh's sons refuses to board, thinking a mountain will protect him, and is drowned. After the flood, the Ark comes to rest on al-Judi and Nuh is told to disembark in peace.`,
      events:['Long public and private call to tawhid.','Rejection and ridicule from his people.','Construction of the Ark by revelation.','The Flood and rescue of the believers.','Nuh’s son refuses the Ark and is lost.','The Ark rests on al-Judi.'],
      refs:[['11:25–49','https://quran.com/11/25-49'],['Surah Nuh 71','https://quran.com/71'],['29:14–15','https://quran.com/29/14-15'],['23:23–30','https://quran.com/23/23-30']],
      caution:'The Qur’an does not supply a modern geological date for the Flood or say that every present landform must be explained by it.'
    },
    {
      n:'Hud', ar:'هود', era:'Sent after Nuh · date not specified',
      story:`Hud is sent to the people of ʿAd, a powerful community proud of its strength. He calls them to worship Allah alone, seek forgiveness, and abandon arrogance. They accuse him of foolishness and reject the warning. Hud insists that he seeks no payment and trusts Allah. When punishment comes, the Qur'an describes a furious, destructive wind that overwhelms the rejecting people, while Hud and the believers are saved by Allah's mercy.`,
      events:['Hud calls ʿAd to tawhid.','He rejects their charge that he is foolish or lying.','He calls them to repentance rather than pride in strength.','A devastating wind destroys the rejecters while the believers are saved.'],
      refs:[['7:65–72','https://quran.com/7/65-72'],['11:50–60','https://quran.com/11/50-60'],['26:123–140','https://quran.com/26/123-140'],['46:21–26','https://quran.com/46/21-26']]
    },
    {
      n:'Salih', ar:'صالح', era:'Sent to Thamud · date not specified',
      story:`Salih is sent to Thamud. He calls them to worship Allah and reminds them that they have been established on earth with skill in building and carving dwellings. His people demand a sign, and the she-camel becomes a divinely appointed sign with a protected right to water. Salih warns them not to harm her. The arrogant leaders reject him and the she-camel is killed. After a final warning, punishment overtakes the rejecters, while Salih and the believers are saved.`,
      events:['Call to tawhid among Thamud.','The she-camel is given as a sign.','The people are warned not to harm her.','The camel is killed despite the warning.','Punishment overtakes the rejecters; believers are saved.'],
      refs:[['7:73–79','https://quran.com/7/73-79'],['11:61–68','https://quran.com/11/61-68'],['26:141–159','https://quran.com/26/141-159'],['91:11–15','https://quran.com/91/11-15']]
    },
    {
      n:'Ibrahim', ar:'إبراهيم', era:'Patriarchal prophetic line · exact date not specified',
      story:`Ibrahim is one of the most extensively described prophets in the Qur'an. He challenges idolatry and argues against treating created things as gods. In one famous episode he breaks his people's idols and leaves the largest, forcing them to confront the inability of their idols to speak or defend themselves. His people attempt to burn him, but Allah makes the fire cool and safe. Ibrahim migrates for Allah, receives angelic guests who bring glad tidings of Ishaq, and is tested repeatedly. Together with Ismail he raises the foundations of the Kaʿbah and prays for a faithful community. The Qur'an also narrates the dream in which he sees himself sacrificing his son; when both submit, Allah ransoms the son with a great sacrifice.`,
      events:['Rejects idolatry and debates his people.','Breaks the idols; Allah saves him from the fire.','Migrates for faith.','Receives glad tidings of Ishaq.','Raises the foundations of the Kaʿbah with Ismail.','Faces the sacrifice test and is praised for fulfilling the vision.'],
      refs:[['6:74–83','https://quran.com/6/74-83'],['19:41–50','https://quran.com/19/41-50'],['21:51–73','https://quran.com/21/51-73'],['2:124–129','https://quran.com/2/124-129'],['37:83–113','https://quran.com/37/83-113'],['14:35–41','https://quran.com/14/35-41']],
      caution:'The sacrifice passage in Surah 37 does not explicitly name the son inside that immediate narrative. Islamic tradition commonly identifies him as Ismail, but the Qur’anic wording itself is kept distinct here.'
    },
    {
      n:'Lut', ar:'لوط', era:'Contemporary with Ibrahim',
      story:`Lut believes in Ibrahim and is sent to a community condemned in the Qur'an for grave sexual wrongdoing, public indecency, and rejection of prophetic warning. Angelic messengers visit Ibrahim and then arrive as guests of Lut. Lut fears for them because of his people's behavior. The angels reveal their identity, tell him to leave by night with his household except his wife, and announce the coming punishment. Lut and the believers are rescued while the rejecting community is destroyed.`,
      events:['Believes in Ibrahim and is commissioned as a messenger.','Warns his people against their wrongdoing.','Receives angelic guests and fears for their safety.','Is ordered to depart by night.','The believers are rescued; his wife is not.','Punishment falls on the rejecting towns.'],
      refs:[['7:80–84','https://quran.com/7/80-84'],['11:69–83','https://quran.com/11/69-83'],['15:57–77','https://quran.com/15/57-77'],['26:160–175','https://quran.com/26/160-175']]
    },
    {
      n:'Ismail', ar:'إسماعيل', era:'Son of Ibrahim',
      story:`Ismail is praised in the Qur'an as true to his promise and as a messenger and prophet who instructed his family to pray and give charity. His clearest extended role is alongside Ibrahim at the Sacred House: father and son raise the foundations of the Kaʿbah while praying that Allah accept their work, make them submissive to Him, and raise a messenger among their descendants. He is also named among prophets favored and guided by Allah.`,
      events:['Praised for truthfulness to his promise.','A messenger and prophet who commands prayer and charity.','Raises the foundations of the Kaʿbah with Ibrahim.','Prays with Ibrahim for a faithful community and future messenger.'],
      refs:[['19:54–55','https://quran.com/19/54-55'],['2:125–129','https://quran.com/2/125-129'],['6:86–87','https://quran.com/6/86-87']]
    },
    {
      n:'Ishaq', ar:'إسحاق', era:'Son of Ibrahim',
      story:`Ishaq is given to Ibrahim and his wife as miraculous glad tidings in old age. The angelic visitors announce not only Ishaq but, after him, Yaqub. The Qur'an describes Ishaq as a prophet, righteous, blessed, and part of a family through whom prophetic guidance continued. His story is less event-based than Ibrahim's or Yusuf's; the Qur'an emphasizes his place within the blessed prophetic family.`,
      events:['Announced by angelic visitors as glad tidings.','Born into Ibrahim’s household in old age.','Named as a righteous prophet.','Father of Yaqub in the Qur’anic genealogy.'],
      refs:[['11:69–73','https://quran.com/11/69-73'],['21:72–73','https://quran.com/21/72-73'],['37:112–113','https://quran.com/37/112-113']]
    },
    {
      n:'Yaqub', ar:'يعقوب', era:'Son of Ishaq · also called Israel',
      story:`Yaqub, also known as Israel, is the son of Ishaq and father of Yusuf and his brothers. He teaches his children to remain devoted to Allah. In Surah Yusuf he recognizes the significance of Yusuf's dream and warns him not to tell it to his brothers. After Yusuf disappears, Yaqub endures long grief while maintaining hope in Allah. He later loses sight through sorrow, but refuses despair. When Yusuf's shirt is brought from Egypt and placed on his face, his sight returns, and the family is reunited.`,
      events:['Counsels his children to remain Muslim in devotion to Allah.','Recognizes the importance of Yusuf’s childhood dream.','Endures Yusuf’s disappearance with “beautiful patience.”','Refuses to despair of Allah’s mercy.','His sight returns and the family reunites with Yusuf.'],
      refs:[['2:132–133','https://quran.com/2/132-133'],['Surah Yusuf 12','https://quran.com/12'],['3:93','https://quran.com/3/93']]
    },
    {
      n:'Yusuf', ar:'يوسف', era:'Son of Yaqub',
      story:`Surah Yusuf gives the Qur'an's most continuous single-prophet narrative. As a boy, Yusuf sees a dream of eleven stars, the sun, and the moon bowing to him. Jealous brothers throw him into a well and he is taken to Egypt. In the household where he grows up, he resists a powerful attempt at seduction and is later imprisoned despite his innocence. In prison he interprets dreams and teaches tawhid. Years later he interprets the ruler's dream as seven years of abundance followed by seven severe years and is entrusted with Egypt's storehouses. During famine his brothers arrive seeking grain. Through a series of tests, Yusuf eventually reveals himself, forgives them, and the family is reunited. His childhood dream is fulfilled.`,
      events:['Childhood dream.','Betrayed by his brothers and thrown into a well.','Taken to Egypt and raised in an elite household.','Resists temptation and is imprisoned unjustly.','Interprets dreams and teaches tawhid in prison.','Interprets the ruler’s dream and gains administrative authority.','Tests, forgives, and reunites with his family.'],
      refs:[['Surah Yusuf 12','https://quran.com/12']]
    },
    {
      n:'Ayyub', ar:'أيوب', era:'Date and place not specified',
      story:`The Qur'an presents Ayyub as a model of patience under severe affliction. He calls on Allah, saying that harm has touched him and that Allah is the Most Merciful. Allah responds, removes his distress, and restores his family with more besides as a mercy and reminder. Another passage tells him to strike the ground with his foot, bringing forth cool water for washing and drinking. The Qur'an praises him as an excellent servant who repeatedly turned to Allah.`,
      events:['Severe affliction.','Turns to Allah without abandoning faith.','Allah removes the distress.','Family and blessings are restored.','Praised as patient and constantly returning to Allah.'],
      refs:[['21:83–84','https://quran.com/21/83-84'],['38:41–44','https://quran.com/38/41-44']],
      caution:'The Qur’an does not specify the exact disease, its duration, or many dramatic details found in later storytelling.'
    },
    {
      n:'Shuayb', ar:'شعيب', era:'Sent to Madyan',
      story:`Shuayb is sent to Madyan. He calls his people to worship Allah and condemns cheating in weights and measures, economic injustice, and corruption on earth. He tells them that honest lawful remainder is better for them than dishonest gain. His people mock him and threaten expulsion. Shuayb and the believers are saved, while punishment overtakes those who persist in rejection. The Qur'an also presents Shuayb addressing the People of the Thicket in Surah al-Shuʿara.`,
      events:['Calls Madyan to tawhid.','Condemns fraudulent weights and measures.','Warns against corruption and intimidation.','Faces ridicule and threats of expulsion.','Believers are saved; rejecters are punished.'],
      refs:[['7:85–93','https://quran.com/7/85-93'],['11:84–95','https://quran.com/11/84-95'],['26:176–191','https://quran.com/26/176-191']]
    },
    {
      n:'Musa', ar:'موسى', era:'One of the Qur’an’s most frequently narrated prophets',
      story:`Musa is born when Pharaoh is oppressing the Children of Israel and killing their sons. Allah inspires Musa's mother to nurse him and place him in the river when afraid; he is taken into Pharaoh's household and later returned to his mother for nursing. As a young man Musa unintentionally kills an Egyptian while intervening in a fight and flees to Madyan. Years later, returning with his family, he encounters revelation at the sacred valley of Tuwa. Allah sends him, supported by Harun, to Pharaoh. Signs are shown; Pharaoh's magicians recognize the truth and believe. Musa leads the Children of Israel out of Egypt, the sea is parted, and Pharaoh and his forces drown. Musa later receives revelation at Sinai, while some of his people worship the calf. His Qur'anic story continues through episodes of law, leadership, testing, provision in the desert, and his journey with the servant of Allah in Surah al-Kahf.`,
      events:['Saved in infancy during Pharaoh’s oppression.','Flees Egypt after an accidental killing.','Receives revelation at Tuwa.','Sent to Pharaoh with Harun.','Confrontation with the magicians; they believe.','Leads the Exodus; the sea parts and Pharaoh drowns.','Receives the Tablets; confronts calf worship.','Learns through the journey described in Surah al-Kahf.'],
      refs:[['28:3–46','https://quran.com/28/3-46'],['20:9–98','https://quran.com/20/9-98'],['26:10–68','https://quran.com/26/10-68'],['7:103–171','https://quran.com/7/103-171'],['18:60–82','https://quran.com/18/60-82']]
    },
    {
      n:'Harun', ar:'هارون', era:'Brother and supporter of Musa',
      story:`Harun is Musa's brother and a prophet in his own right. When Musa is commanded to confront Pharaoh, he asks Allah to strengthen him through Harun, explaining that Harun is more eloquent in speech. Allah grants the request and sends them together. Later, when Musa goes to the mountain, Harun is left in charge of the people. He tries to stop them from worshipping the calf, warns that they are being tested, and explains to Musa that he feared dividing the Children of Israel by using force.`,
      events:['Chosen as Musa’s prophetic partner and support.','Shares the mission to Pharaoh.','Left in charge while Musa goes to the mountain.','Opposes calf worship and calls the people back to Allah.'],
      refs:[['20:29–36','https://quran.com/20/29-36'],['20:42–94','https://quran.com/20/42-94'],['7:142–151','https://quran.com/7/142-151']]
    },
    {
      n:'Dhul-Kifl', ar:'ذو الكفل', era:'Era not specified',
      story:`The Qur'an names Dhul-Kifl twice but does not give a narrative biography. He appears alongside Ismail and Idris among those described as patient, and in another passage among the chosen and excellent. Classical Muslim teaching commonly includes Dhul-Kifl among the twenty-five prophets, but the Qur'anic verses themselves do not explicitly use the word “prophet” for him. Because the primary text is brief, this page preserves that uncertainty rather than inventing episodes.`,
      events:['Named among the patient.','Included among those admitted into Allah’s mercy.','Named among the chosen and excellent.'],
      refs:[['21:85–86','https://quran.com/21/85-86'],['38:48','https://quran.com/38/48']],
      caution:'Common Muslim curricula count Dhul-Kifl among the 25 prophets, while the Qur’an itself provides no life narrative and does not explicitly call him a prophet in these verses.'
    },
    {
      n:'Dawud', ar:'داود', era:'Prophet-king after Musa’s era',
      story:`Dawud first appears in the Qur'an in the battle in which he kills Jalut, after which Allah grants him kingship and wisdom. He is given the Zabur. Allah teaches him craftsmanship in armor and softens iron for him; mountains and birds are described as joining him in praise. Dawud is also presented as a judge. In Surah Sad he is tested through a dispute brought before him, realizes his error in judgment, seeks forgiveness, and is forgiven. The Qur'an emphasizes both his strength in worship and his responsibility to judge with truth rather than desire.`,
      events:['Kills Jalut and is granted kingship and wisdom.','Receives the Zabur.','Iron is made workable for him; he is taught armor-making.','Mountains and birds join in praise with him.','Tested in judgment, repents, and is forgiven.'],
      refs:[['2:251','https://quran.com/2/251'],['17:55','https://quran.com/17/55'],['34:10–11','https://quran.com/34/10-11'],['38:17–26','https://quran.com/38/17-26']]
    },
    {
      n:'Sulayman', ar:'سليمان', era:'Son of Dawud',
      story:`Sulayman inherits from Dawud and is given a remarkable kingdom. The Qur'an describes his understanding of the speech of birds and recounts the valley of the ants, where he smiles at an ant's warning and thanks Allah. The hoopoe brings news of a queen ruling a people who worship the sun. Sulayman sends her a letter calling her to submit to Allah; after witnessing signs and recognizing the truth, she submits with him to Allah. Other passages describe the wind and jinn being subjected to his service by Allah's permission. When Sulayman dies while leaning on his staff, the jinn do not know he has died until a creature of the earth eats through the staff and his body falls.`,
      events:['Inherits prophetic kingship from Dawud.','Understands the birds and hears the ant’s warning.','Receives the hoopoe’s report about the Queen of Saba.','Invites the queen to submit to Allah.','Wind and jinn serve under his God-given authority.','His death exposes that the jinn do not know the unseen.'],
      refs:[['27:15–44','https://quran.com/27/15-44'],['34:12–14','https://quran.com/34/12-14'],['38:30–40','https://quran.com/38/30-40']]
    },
    {
      n:'Ilyas', ar:'إلياس', era:'Era not specified',
      story:`Ilyas is named as a messenger who challenges his people for calling upon Baʿl instead of Allah, “the best of creators.” The Qur'an says they reject him except for Allah's sincere servants, and it preserves a greeting of peace upon Ilyas. Beyond this focused confrontation with idolatry, the Qur'an does not provide a long biography.`,
      events:['Sent as a messenger.','Condemns worship of Baʿl.','Calls his people back to Allah.','Rejected by many; sincere servants are excepted.'],
      refs:[['37:123–132','https://quran.com/37/123-132'],['6:85','https://quran.com/6/85']]
    },
    {
      n:'Al-Yasa', ar:'اليسع', era:'Era not specified',
      story:`Al-Yasa is named in the Qur'an but without a continuous narrative. He is listed among prophets favored above the worlds and later among the chosen and excellent. Because revelation provides no detailed life events, this archive deliberately avoids importing later stories as though they were Qur'anic fact.`,
      events:['Named among those favored by Allah.','Named among the chosen and excellent.'],
      refs:[['6:86','https://quran.com/6/86'],['38:48','https://quran.com/38/48']],
      caution:'The Qur’an gives no detailed biography for Al-Yasa.'
    },
    {
      n:'Yunus', ar:'يونس', era:'Sent to a large community · exact date not specified',
      story:`Yunus is sent as a messenger but leaves in anger before receiving permission to abandon his mission. He boards a loaded ship; lots are drawn and he is thrown into the sea, where a great fish swallows him. In the darkness he calls upon Allah, acknowledging that there is no deity but Allah and that he has wronged himself. Allah rescues him and casts him onto the shore while he is ill, causing a gourd-like plant to grow over him. He is then sent to a people numbering one hundred thousand or more. Unlike many rejecting communities in the Qur'anic narratives, the people of Yunus believe, and punishment is lifted from them.`,
      events:['Leaves his people in anger.','Boards a loaded ship and is cast into the sea.','Swallowed by the great fish.','Prays to Allah in the darkness and is rescued.','Recovers under a plant grown by Allah.','His people believe and are spared punishment.'],
      refs:[['21:87–88','https://quran.com/21/87-88'],['37:139–148','https://quran.com/37/139-148'],['10:98','https://quran.com/10/98']]
    },
    {
      n:'Zakariya', ar:'زكريا', era:'Guardian of Maryam · before Yahya and Isa',
      story:`Zakariya is connected in the Qur'an with the care of Maryam. When he enters her sanctuary and finds provision with her, her trust in Allah inspires him to pray for righteous offspring despite his old age. He privately asks Allah for an heir while acknowledging his weakness and his wife's barrenness. The angels give him glad tidings of Yahya, a son with a distinctive name, who will confirm a word from Allah and be noble and righteous. Zakariya asks for a sign and is told that for a period he will not speak to people except by gesture while remaining physically sound.`,
      events:['Cares for Maryam and witnesses her provision.','Prays privately for a righteous heir in old age.','Receives glad tidings of Yahya.','Given a temporary inability to speak as a sign.'],
      refs:[['3:37–41','https://quran.com/3/37-41'],['19:2–11','https://quran.com/19/2-11']]
    },
    {
      n:'Yahya', ar:'يحيى', era:'Son of Zakariya · contemporary with Isa',
      story:`Yahya is announced to Zakariya before birth. Allah gives him wisdom while still young and describes him with compassion, purity, piety, and kindness toward his parents. He is neither arrogant nor disobedient. The Qur'an places peace upon him on the day he was born, the day he dies, and the day he will be raised alive. Elsewhere he is described as confirming a word from Allah, noble, chaste, and a prophet among the righteous.`,
      events:['Miraculously granted to Zakariya in old age.','Given wisdom while young.','Described as pure, pious, compassionate, and dutiful to parents.','Named a prophet among the righteous.'],
      refs:[['19:7–15','https://quran.com/19/7-15'],['3:39','https://quran.com/3/39']],
      caution:'The Qur’an does not narrate the circumstances of Yahya’s death, so later accounts are not presented here as Qur’anic biography.'
    },
    {
      n:'Isa ibn Maryam', ar:'عيسى ابن مريم', era:'Son of Maryam · exact historical dating not supplied by the Qur’an',
      story:`Isa is born miraculously to Maryam without a human father. The angelic announcement describes him as the Messiah and a messenger. In Surah Maryam, the infant Isa speaks in defense of his mother and declares himself a servant of Allah who has been given revelation and made a prophet. By Allah's permission, Isa performs signs including healing the blind and leper, bringing the dead to life, and forming a bird-like figure from clay that becomes alive by Allah's permission. He confirms the Torah and is given the Injil. His disciples declare belief. When opponents plot against him, the Qur'an states that they did not kill or crucify him as they claimed; rather, Allah raised him.`,
      events:['Miraculous birth to Maryam without a human father.','Speaks in infancy in the Qur’anic narrative.','Receives prophethood and the Injil.','Performs miracles by Allah’s permission.','Calls the Children of Israel to worship Allah.','Supported by disciples.','Allah raises him; the Qur’an denies that his enemies successfully killed or crucified him.'],
      refs:[['3:42–55','https://quran.com/3/42-55'],['19:16–36','https://quran.com/19/16-36'],['5:110–115','https://quran.com/5/110-115'],['4:157–158','https://quran.com/4/157-158']]
    },
    {
      n:'Muhammad', ar:'محمد ﷺ', era:'Final prophet and messenger',
      story:`Muhammad is the final prophet in the standard Islamic prophetic line. The Qur'an reminds him that Allah found him an orphan and gave him shelter, and that he was guided and enriched by Allah's care. Revelation begins with the command to read in Surah al-ʿAlaq; authentic hadith describes the first encounter with Jibril in the cave of Hira. His mission calls people to worship Allah alone, care for the vulnerable, live justly, and prepare for resurrection and judgment. He and the early believers face rejection and persecution in Makkah. During the Hijrah, the Qur'an recalls him in the cave with his companion, trusting that Allah is with them. In Madinah the Muslim community faces major trials including Badr, Uhud, and the Confederates. Surah al-Fath describes the treaty period and a “clear victory.” The Qur'an names Muhammad as the Messenger of Allah and the seal of the prophets.`,
      events:['Raised as an orphan under Allah’s care.','Receives the first revelation and is commissioned to warn.','Calls Makkah to tawhid despite persecution.','Migrates from Makkah; the cave episode is remembered in Qur’an 9:40.','Leads the community through Badr, Uhud, and the Confederates.','The treaty/victory period is celebrated in Surah al-Fath.','Named the Messenger of Allah and seal of the prophets.'],
      refs:[['93:6–11','https://quran.com/93/6-11'],['96:1–5','https://quran.com/96/1-5'],['74:1–7','https://quran.com/74/1-7'],['9:40','https://quran.com/9/40'],['3:121–180','https://quran.com/3/121-180'],['33:9–27','https://quran.com/33/9-27'],['Surah al-Fath 48','https://quran.com/48'],['33:40','https://quran.com/33/40']],
      hadith:['First revelation context: Sahih al-Bukhari 3','https://sunnah.com/bukhari:3']
    }
  ];

  function refsHTML(refs){
    return refs.map(([label,url])=>`<a class="prophet-source" target="_blank" rel="noreferrer" href="${url}">Qur'an ${label} ↗</a>`).join('');
  }

  const jump = document.getElementById('prophetJumpbar');
  if (jump) {
    jump.innerHTML = P.map((p,i)=>`<button class="prophet-jump" data-prophet-jump="${i}"><span class="n">${String(i+1).padStart(2,'0')}</span>${p.n}</button>`).join('');
  }

  mount.innerHTML = P.map((p,i)=>`
    <details class="prophet-story" id="prophet-${i+1}" data-prophet-name="${p.n.toLowerCase()} ${p.ar}">
      <summary>
        <div class="prophet-index">${String(i+1).padStart(2,'0')}</div>
        <div class="prophet-name-row">
          <div class="prophet-name">${p.n}<span class="prophet-arabic" lang="ar">${p.ar}</span></div>
          <div class="prophet-era">${p.era}</div>
        </div>
        <div class="prophet-chevron">+</div>
      </summary>
      <div class="prophet-body">
        <h4>Life story</h4>
        <p>${p.story}</p>
        <h4>Key moments</h4>
        <div class="prophet-events">
          ${p.events.map((e,j)=>`<div class="prophet-event"><span class="dotn">${j+1}</span><span>${e}</span></div>`).join('')}
        </div>
        <h4>Primary Qur'anic passages</h4>
        <div class="prophet-sources">${refsHTML(p.refs)}</div>
        ${p.caution?`<div class="prophet-caution"><strong>Source boundary:</strong> ${p.caution}</div>`:''}
        ${p.hadith?`<div class="prophet-hadith"><strong>Authentic hadith:</strong> <a href="${p.hadith[1]}" target="_blank" rel="noreferrer">${p.hadith[0]} ↗</a></div>`:''}
      </div>
    </details>
  `).join('');

  document.querySelectorAll('[data-prophet-jump]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const n=+btn.dataset.prophetJump+1;
      const el=document.getElementById('prophet-'+n);
      if(!el)return;
      el.open=true;
      el.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  const search=document.getElementById('prophetSearch');
  if(search){
    search.addEventListener('input',()=>{
      const q=search.value.trim().toLowerCase();
      document.querySelectorAll('.prophet-story').forEach(el=>{
        const txt=(el.dataset.prophetName+' '+el.textContent).toLowerCase();
        el.classList.toggle('hidden',q && !txt.includes(q));
      });
    });
  }

  const openAll=document.getElementById('openAllProphets');
  const closeAll=document.getElementById('closeAllProphets');
  if(openAll)openAll.addEventListener('click',()=>document.querySelectorAll('.prophet-story:not(.hidden)').forEach(x=>x.open=true));
  if(closeAll)closeAll.addEventListener('click',()=>document.querySelectorAll('.prophet-story').forEach(x=>x.open=false));
})();
