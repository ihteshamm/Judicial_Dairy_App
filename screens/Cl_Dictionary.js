import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';
const list2 = [
        {
           "title": "Acquittal",
           "letter": "A",
           "permalink": "usc-acquittal",
           "body": "A jury verdict that a criminal defendant is not guilty, or the finding of a judge that the evidence is insufficient to support a conviction.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Active judge",
           "letter": "A",
           "permalink": "usc-active-judge",
           "body": "A judge in the full-time service of the court. Compare to senior judge.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Administrative-office-of-the-united-states-courts AO",
           "letter": "A",
           "permalink": "usc-administrative Office of the United States Courts AO",
           "body": "The federal agency responsible for collecting court statistics, administering the federal courts' budget, and performing many other administrative and programmatic functions, under the direction and supervision of the Judicial Conference of the United States.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Admissible",
           "letter": "A",
           "permalink": "usc-admissible",
           "body": "A term used to describe evidence that may be considered by a jury or judge in civil and criminal cases.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Adversary proceeding",
           "letter": "A",
           "permalink": "usc-adversary-proceeding",
           "body": "A lawsuit arising in or related to a bankruptcy case that begins by filing a complaint with the court, that is, a \"trial\" that takes place within the context of a bankruptcy case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Affidavit",
           "letter": "A",
           "permalink": "usc-affidavit",
           "body": "A written or printed statement made under oath.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Affirmed",
           "letter": "A",
           "permalink": "usc-affirmed",
           "body": "In the practice of the court of appeals, it means that the court of appeals has concluded that the lower court decision is correct and will stand as rendered by the lower court.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Alternate juror",
           "letter": "A",
           "permalink": "usc-alternate-juror",
           "body": "A juror selected in the same manner as a regular juror who hears all the evidence but does not help decide the case unless called on to replace a regular juror.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Alternative dispute resolution ADR",
           "letter": "A",
           "permalink": "usc-alternative-dispute-resolution-ADR",
           "body": "A procedure for settling a dispute outside the courtroom. Most forms of ADR are not binding, and involve referral of the case to a neutral party such as an arbitrator or mediator.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Amicus curiae",
           "letter": "A",
           "permalink": "usc-amicus-curiae",
           "body": "Latin for \"friend of the court.\" It is advice formally offered to the court in a brief filed by an entity interested in, but not a party to, the case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Answer",
           "letter": "A",
           "permalink": "usc-answer",
           "body": "The formal written statement by a defendant in a civil case that responds to a complaint, articulating the grounds for defense.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Appeal",
           "letter": "A",
           "permalink": "usc-appeal",
           "body": "A request made after a trial by a party that has lost on one or more issues that a higher court review the decision to determine if it was correct. To make such a request is \"to appeal\" or \"to take an appeal.\" One who appeals is called the \"appellant;\" the other party is the \"appellee.\"",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Appellant",
           "letter": "A",
           "permalink": "usc-appellant",
           "body": "The party who appeals a district court's decision, usually seeking reversal of that decision.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Appellate",
           "letter": "A",
           "permalink": "usc-appellate",
           "body": "About appeals; an appellate court has the power to review the judgment of a lower court (trial court) or tribunal. For example, the U.S. circuit courts of appeals review the decisions of the U.S. district courts.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Appellee",
           "letter": "A",
           "permalink": "usc-appellee",
           "body": "The party who opposes an appellant's appeal, and who seeks to persuade the appeals court to affirm the district court's decision.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Arraignment",
           "letter": "A",
           "permalink": "usc-arraignment",
           "body": "A proceeding in which a criminal defendant is brought into court, told of the charges in an indictment or information, and asked to plead guilty or not guilty.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Article III judge",
           "letter": "A",
           "permalink": "usc-article-III-judge",
           "body": "A federal judge who is appointed for life, during \"good behavior,\" under Article III of the Constitution. Article III judges are nominated by the President and confirmed by the Senate.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Assets",
           "letter": "A",
           "permalink": "usc-assets",
           "body": "Property of all kinds, including real and personal, tangible and intangible.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Assume",
           "letter": "A",
           "permalink": "usc-assume",
           "body": "An agreement to continue performing duties under a contract or lease.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Automatic stay",
           "letter": "A",
           "permalink": "usc-automatic stay",
           "body": "An injunction that automatically stops lawsuits, foreclosures, garnishments, and most collection activities against the debtor the moment a bankruptcy petition is filed.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Bail",
           "letter": "B",
           "permalink": "usc-bail",
           "body": "The release, prior to trial, of a person accused of a crime, under specified conditions designed to assure that person's appearance in court when required. Also can refer to the amount of bond money posted as a financial condition of pretrial release.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Bankruptcy administrator",
           "letter": "B",
           "permalink": "usc-bankruptcy-administrator",
           "body": "An officer of the Judiciary serving in the judicial districts of Alabama and North Carolina who, like the United States trustee, is responsible for supervising the administration of bankruptcy cases, estates, and trustees; monitoring plans and disclosure statements; monitoring creditor committees; monitoring fee applications; and performing other statutory duties.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Bankruptcy code",
           "letter": "B",
           "permalink": "usc-bankruptcy-code",
           "body": "The informal name for title 11 of the United States Code (11 U.S.C. ???? 101-1330), the federal bankruptcy law.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Bankruptcy court",
           "letter": "B",
           "permalink": "usc-bankruptcy-court",
           "body": "The bankruptcy judges in regular active service in each district; a unit of the district court.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Bankruptcy estate",
           "letter": "B",
           "permalink": "usc-bankruptcy-estate",
           "body": "All interests of the debtor in property at the time of the bankruptcy filing. The estate technically becomes the temporary legal owner of all of the debtor's property.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Bankruptcy judge",
           "letter": "B",
           "permalink": "usc-bankruptcy-judge",
           "body": "A judicial officer of the United States district court who is the court official with decision-making power over federal bankruptcy cases.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Bankruptcy petition",
           "letter": "B",
           "permalink": "usc-bankruptcy-petition",
           "body": "A formal request for the protection of the federal bankruptcy laws. (There is an official form for bankruptcy petitions.)",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Bankruptcy trustee",
           "letter": "B",
           "permalink": "usc-bankruptcy-trustee",
           "body": "A private individual or corporation appointed in all Chapter 7 and Chapter 13 cases to represent the interests of the bankruptcy estate and the debtor's creditors.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Bankruptcy",
           "letter": "B",
           "permalink": "usc-bankruptcy",
           "body": "A legal procedure for dealing with debt problems of individuals and businesses; specifically, a case filed under one of the chapters of title 11 of the United States Code (the Bankruptcy Code).",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Bench trial",
           "letter": "B",
           "permalink": "usc-bench-trial",
           "body": "A trial without a jury, in which the judge serves as the fact-finder.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Brief",
           "letter": "B",
           "permalink": "usc-brief",
           "body": "A written statement submitted in a trial or appellate proceeding that explains one side's legal and factual arguments.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Burden of proof",
           "letter": "B",
           "permalink": "usc-burden-of-proof",
           "body": "The duty to prove disputed facts. In civil cases, a plaintiff generally has the burden of proving his or her case. In criminal cases, the government has the burden of proving the defendant's guilt. (See standard of proof.)",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Business bankruptcy",
           "letter": "B",
           "permalink": "usc-business-bankruptcy",
           "body": "A bankruptcy case in which the debtor is a business or an individual involved in business and the debts are for business purposes.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Capital offense",
           "letter": "C",
           "permalink": "usc-capital-offense",
           "body": "A crime punishable by death.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Case file",
           "letter": "C",
           "permalink": "usc-case-file",
           "body": "A complete collection of every document filed in court in a case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Case law",
           "letter": "C",
           "permalink": "usc-case-law",
           "body": "The law as established in previous court decisions. A synonym for legal precedent. Akin to common law, which springs from tradition and judicial decisions.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Caseload",
           "letter": "C",
           "permalink": "usc-caseload",
           "body": "The number of cases handled by a judge or a court.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Cause of action",
           "letter": "C",
           "permalink": "usc-cause-of-action",
           "body": "A legal claim.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Chambers",
           "letter": "C",
           "permalink": "usc-chambers",
           "body": "The offices of a judge and his or her staff.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Chapter 11",
           "letter": "C",
           "permalink": "usc-chapter-11",
           "body": "A reorganization bankruptcy, usually involving a corporation or partnership. A Chapter 11 debtor usually proposes a plan of reorganization to keep its business alive and pay creditors over time. Individuals or people in business can also seek relief in Chapter 11.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Chapter 12",
           "letter": "C",
           "permalink": "usc-chapter-12",
           "body": "The chapter of the Bankruptcy Code providing for adjustment of debts of a \"family farmer\" or \"family fisherman,\" as the terms are defined in the Bankruptcy Code.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Chapter 13 trustee",
           "letter": "C",
           "permalink": "usc-chapter-13-trustee",
           "body": "A person appointed to administer a Chapter 13 case. A Chapter 13 trustee's responsibilities are similar to those of a Chapter 7 trustee; however, a Chapter 13 trustee has the additional responsibilities of overseeing the debtor's plan, receiving payments from debtors, and disbursing plan payments to creditors.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Chapter 13",
           "letter": "C",
           "permalink": "usc-chapter-13",
           "body": "The chapter of the Bankruptcy Code providing for the adjustment of debts of an individual with regular income, often referred to as a \"wage-earner\" plan. Chapter 13 allows a debtor to keep property and use his or her disposable income to pay debts over time, usually three to five years.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Chapter 15",
           "letter": "C",
           "permalink": "usc-chapter-15",
           "body": "The chapter of the Bankruptcy Code dealing with cases of cross-border insolvency.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Chapter 7 trustee",
           "letter": "C",
           "permalink": "usc-chapter-7-trustee",
           "body": "A person appointed in a Chapter 7 case to represent the interests of the bankruptcy estate and the creditors. The trustee's responsibilities include reviewing the debtor's petition and schedules, liquidating the property of the estate, and making distributions to creditors. The trustee may also bring actions against creditors or the debtor to recover property of the bankruptcy estate.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Chapter 7",
           "letter": "C",
           "permalink": "usc-chapter-7",
           "body": "The chapter of the Bankruptcy Code providing for \"liquidation,\" that is, the sale of a debtor's nonexempt property and the distribution of the proceeds to creditors. In order to be eligible for Chapter 7, the debtor must satisfy a \"means test.\" The court will evaluate the debtor's income and expenses to determine if the debtor may proceed under Chapter 7.", 
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Chapter 9",
           "letter": "C",
           "permalink": "usc-chapter-9",
           "body": "The chapter of the Bankruptcy Code providing for reorganization of municipalities (which includes cities and towns, as well as villages, counties, taxing districts, municipal utilities, and school districts).",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Chief judge",
           "letter": "C",
           "permalink": "usc-chief-judge",
           "body": "The judge who has primary responsibility for the administration of a court; chief judges are determined by seniority",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Claim",
           "letter": "C",
           "permalink": "usc-claim",
           "body": "A creditor's assertion of a right to payment from a debtor or the debtor's property.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Class action",
           "letter": "C",
           "permalink": "usc-class-action",
           "body": "A lawsuit in which one or more members of a large group, or class, of individuals or other entities sue on behalf of the entire class. The district court must find that the claims of the class members contain questions of law or fact in common before the lawsuit can proceed as a class action.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Clerk of court",
           "letter": "C",
           "permalink": "usc-clerk-of-court",
           "body": "The court officer who oversees administrative functions, especially managing the flow of cases through the court. The clerk's office is often called a court's central nervous system.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Collateral",
           "letter": "C",
           "permalink": "usc-collateral",
           "body": "Property that is promised as security for the satisfaction of a debt.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Common law",
           "letter": "C",
           "permalink": "usc-common-law",
           "body": "The legal system that originated in England and is now in use in the United States, which relies on the articulation of legal principles in a historical succession of judicial decisions. Common law principles can be changed by legislation.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Community service",
           "letter": "C",
           "permalink": "usc-community-service",
           "body": "A special condition the court imposes that requires an individual to work ??? without pay ??? for a civic or nonprofit organization.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Complaint",
           "letter": "C",
           "permalink": "usc-complaint",
           "body": "A written statement that begins a civil lawsuit, in which the plaintiff details the claims against the defendant.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Concurrent sentence",
           "letter": "C",
           "permalink": "usc-concurrent-sentence",
           "body": "Prison terms for two or more offenses to be served at the same time, rather than one after the other. Example: Two five-year sentences and one three-year sentence, if served concurrently, result in a maximum of five years behind bars.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Confirmation",
           "letter": "C",
           "permalink": "usc-confirmation",
           "body": "Approval of a plan of reorganization by a bankruptcy judge.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Consecutive sentence",
           "letter": "C",
           "permalink": "usc-consecutive-sentence",
           "body": "Prison terms for two or more offenses to be served one after the other. Example: Two five-year sentences and one three-year sentence, if served consecutively, result in a maximum of 13 years behind bars.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Consumer bankruptcy",
           "letter": "C",
           "permalink": "usc-consumer-bankruptcy",
           "body": "A bankruptcy case filed to reduce or eliminate debts that are primarily consumer debts.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Consumer debts",
           "letter": "C",
           "permalink": "usc-consumer-debts",
           "body": "Debts incurred for personal, as opposed to business, needs.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Contingent claim",
           "letter": "C",
           "permalink": "usc-contingent-claim",
           "body": "A claim that may be owed by the debtor under certain circumstances, e.g., where the debtor is a cosigner on another person's loan and that person fails to pay.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Contract",
           "letter": "C",
           "permalink": "usc-contract",
           "body": "An agreement between two or more people that creates an obligation to do or not to do a particular thing.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Conviction",
           "letter": "C",
           "permalink": "usc-conviction",
           "body": "A judgment of guilt against a criminal defendant.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Counsel",
           "letter": "C",
           "permalink": "usc-counsel",
           "body": "Legal advice; a term also used to refer to the lawyers in a case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Count",
           "letter": "C",
           "permalink": "usc-count",
           "body": "An allegation in an indictment or information, charging a defendant with a crime. An indictment or information may contain allegations that the defendant committed more than one crime. Each allegation is referred to as a count.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Court reporter",
           "letter": "C",
           "permalink": "usc-court-reporter",
           "body": "A person who makes a word-for-word record of what is said in court, generally by using a stenographic machine, shorthand or audio recording, and then produces a transcript of the proceedings upon request.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Court",
           "letter": "C",
           "permalink": "usc-court",
           "body": "Government entity authorized to resolve legal disputes. Judges sometimes use \"court\" to refer to themselves in the third person, as in \"the court has read the briefs.\"",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Credit counseling",
           "letter": "C",
           "permalink": "usc-credit-counseling",
           "body": "Generally refers to two events in individual bankruptcy cases: (1) the \"individual or group briefing\" from a nonprofit budget and credit counseling agency that individual debtors must attend prior to filing under any chapter of the Bankruptcy Code; and (2) the \"instructional course in personal financial management\" in chapters 7 and 13 that an individual debtor must complete before a discharge is entered. There are exceptions to both requirements for certain categories of debtors, exigent circumstances, or if the U.S. trustee or bankruptcy administrator have determined that there are insufficient approved credit counseling agencies available to provide US Cssary Geling.", 
           "published_at": "2018-08-06",
           "source": "http://www.uscourts.gov/glossary"
         },
         {
           "title": "Creditor",
           "letter": "C",
           "permalink": "usc-creditor",
           "body": "A person to whom or business to which the debtor owes money or that claims to be owed money by the debtor.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Damages",
           "letter": "D",
           "permalink": "usc-damages",
           "body": "Money that a defendant pays a plaintiff in a civil case if the plaintiff has won. Damages may be compensatory (for loss or injury) or punitive (to punish and deter future misconduct).",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "De facto",
           "letter": "D",
           "permalink": "usc-de-facto",
           "body": "Latin, meaning \"in fact\" or \"actually.\" Something that exists in fact but not as a matter of law.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "De jure",
           "letter": "D",
           "permalink": "usc-de-jure",
           "body": "Latin, meaning \"in law.\" Something that exists by operation of law.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "De novo",
           "letter": "D",
           "permalink": "usc-de-novo",
           "body": "Latin, meaning \"anew.\" A trial de novo is a completely new trial. Appellate review de novo implies no deference to the trial judge's ruling.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Debtor's plan",
           "letter": "D",
           "permalink": "usc-debtors-plan",
           "body": "A debtor's detailed description of how the debtor proposes to pay creditors' claims over a fixed period of time.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Debtor",
           "letter": "D",
           "permalink": "usc-debtor",
           "body": "A person who has filed a petition for relief under the Bankruptcy Code.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Declaratory judgment",
           "letter": "D",
           "permalink": "usc-declaratory-judgment",
           "body": "A judge's statement about someone's rights. For example, a plaintiff may seek a declaratory judgment that a particular statute, as written, violates some constitutional right.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Default judgment",
           "letter": "D",
           "permalink": "usc-default-judgment",
           "body": "A judgment awarding a plaintiff the relief sought in the complaint because the defendant has failed to appear in court or otherwise respond to the complaint.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Defendant",
           "letter": "D",
           "permalink": "usc-defendant",
           "body": "An individual (or business) against whom a lawsuit is filed.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Deposition",
           "letter": "D",
           "permalink": "usc-deposition",
           "body": "An oral statement made before an officer authorized by law to administer oaths. Such statements are often taken to examine potential witnesses, to obtain discovery, or to be used later in trial. See discovery.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Discharge",
           "letter": "D",
           "permalink": "usc-discharge",
           "body": "A release of a debtor from personal liability for certain dischargeable debts. Notable exceptions to dischargeability are taxes and student loans. A discharge releases a debtor from personal liability for certain debts known as dischargeable debts and prevents the creditors owed those debts from taking any action against the debtor or the debtor's property to collect the debts. The discharge also prohibits creditors from communicating with the debtor regarding the debt, including through telephone calls, letters, and personal contact.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Dischargeable debt",
           "letter": "D",
           "permalink": "usc-dischargeable-debt",
           "body": "A debt for which the Bankruptcy Code allows the debtor's personal liability to be eliminated.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Disclosure statement",
           "letter": "D",
           "permalink": "usc-disclosure-statement",
           "body": "A written document prepared by the chapter 11 debtor or other plan proponent that is designed to provide \"adequate information\" to creditors to enable them to evaluate the chapter 11 plan of reorganization.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Discovery",
           "letter": "D",
           "permalink": "usc-discovery",
           "body": "Procedures used to obtain disclosure of evidence before trial.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Dismissal with prejudice",
           "letter": "D",
           "permalink": "usc-dismissal-with-prejudice",
           "body": "Court action that prevents an identical lawsuit from being filed later.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Dismissal without prejudice",
           "letter": "D",
           "permalink": "usc-dismissal-without-prejudice",
           "body": "Court action that allows the later filing.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Disposable income",
           "letter": "D",
           "permalink": "usc-disposable-income",
           "body": "Income not reasonably necessary for the maintenance or support of the debtor or dependents. If the debtor operates a business, disposable income is defined as those amounts over and above what is necessary for the payment of ordinary operating expenses.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Docket",
           "letter": "D",
           "permalink": "usc-docket",
           "body": "A log containing the complete history of each case in the form of brief chronological entries summarizing the court proceedings.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Due process",
           "letter": "D",
           "permalink": "usc-due-process",
           "body": "In criminal law, the constitutional guarantee that a defendant will receive a fair and impartial trial. In civil law, the legal rights of someone who confronts an adverse action threatening liberty or property.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "En banc",
           "letter": "E",
           "permalink": "usc-en-banc",
           "body": "French, meaning \"on the bench.\" All judges of an appellate court sitting together to hear a case, as opposed to the routine disposition by panels of three judges. In the Ninth Circuit, an en banc panel consists of 11 randomly selected judges.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Equitable",
           "letter": "E",
           "permalink": "usc-equitable",
           "body": "Pertaining to civil suits in \"equity\" rather than in \"law.\" In English legal history, the courts of \"law\" could order the payment of damages and could afford no other remedy (see damages). A separate court of \"equity\" could order someone to do something or to cease to do something (e.g., injunction). In American jurisprudence, the federal courts have both legal and equitable power, but the distinction is still an important one. For example, a trial by jury is normally available in \"law\" cases but not in \"equity\" cases.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Equity",
           "letter": "E",
           "permalink": "usc-equity",
           "body": "The value of a debtor's interest in property that remains after liens and other creditors' interests are considered. (Example: If a house valued at $60,000 is subject to a $30,000 mortgage, there is $30,000 of equity.)",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Evidence",
           "letter": "E",
           "permalink": "usc-evidence",
           "body": "Information presented in testimony or in documents that is used to persuade the fact finder (judge or jury) to decide the case in favor of one side or the other.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Ex parte",
           "letter": "E",
           "permalink": "usc-ex-parte",
           "body": "A proceeding brought before a court by one party only, without notice to or challenge by the other side.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Exclusionary rule",
           "letter": "E",
           "permalink": "usc-exclusionary-rule",
           "body": "Doctrine that says evidence obtained in violation of a criminal defendant's constitutional or statutory rights is not admissible at trial.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Exculpatory evidence",
           "letter": "E",
           "permalink": "usc-exculpatory evidence",
           "body": "Evidence indicating that a defendant did not commit the crime.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Executory contracts",
           "letter": "E",
           "permalink": "usc-executory-contracts",
           "body": "Contracts or leases under which both parties to the agreement have duties remaining to be performed. If a contract or lease is executory, a debtor may assume it (keep the contract) or reject it (terminate the contract).",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Exempt assets",
           "letter": "E",
           "permalink": "usc-exempt-assets",
           "body": "Property that a debtor is allowed to retain, free from the claims of creditors who do not have liens on the property.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Exemptions exempt property",
           "letter": "E",
           "permalink": "usc-exemptions-exempt-property",
           "body": "Certain property owned by an individual debtor that the Bankruptcy Code or applicable state law permits the debtor to keep from unsecured creditors. For example, in some states the debtor may be able to exempt all or a portion of the equity in the debtor's primary residence (homestead exemption), or some or all \"tools of the trade\" used by the debtor to make a living (i.e., auto tools for an auto mechanic or dental tools for a dentist). The availability and amount of property the debtor may exempt depends on the state the debtor lives in.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Face sheet filing",
           "letter": "F",
           "permalink": "usc-face-sheet-filing",
           "body": "A bankruptcy case filed either without schedules or with incomplete schedules listing few creditors and debts. (Face sheet filings are often made for the purpose of delaying an eviction or foreclosure",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Family farmer",
           "letter": "F",
           "permalink": "usc-family-farmer",
           "body": "An individual, individual and spouse, corporation, or partnership engaged in a farming operation that meets certain debt limits and other statutory criteria for filing a petition under Chapter 12.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Federal public defender organization",
           "letter": "F",
           "permalink": "usc-federal-public-defender-organization",
           "body": "As provided for in the Criminal Justice Act, an organization established within a federal judicial circuit to represent criminal defendants who cannot afford an adequate defense. Each organization is supervised by a federal public defender appointed by the court of appeals for the circuit.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Federal public defender",
           "letter": "F",
           "permalink": "usc-federal-public-defender",
           "body": "An attorney employed by the federal courts on a full-time basis to provide legal defense to defendants who are unable to afford counsel. The judiciary administers the federal defender program pursuant to the Criminal Justice Act.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Federal question jurisdiction",
           "letter": "F",
           "permalink": "usc-federal-question-jurisdiction",
           "body": "Jurisdiction given to federal courts in cases involving the interpretation and application of the U.S. Constitution, acts of Congress, and treaties.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Felony",
           "letter": "F",
           "permalink": "usc-felony",
           "body": "A serious crime, usually punishable by at least one year in prison.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "File",
           "letter": "F",
           "permalink": "usc-file",
           "body": "To place a paper in the official custody of the clerk of court to enter into the files or records of a case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Fraudulent transfer",
           "letter": "F",
           "permalink": "usc-fraudulent-transfer",
           "body": "A transfer of a debtor's property made with intent to defraud or for which the debtor receives less than the transferred property's value.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Fresh start",
           "letter": "F",
           "permalink": "usc-fresh-start",
           "body": "The characterization of a debtor's status after bankruptcy, i.e., free of most debts. (Giving debtors a fresh start is one purpose of the Bankruptcy Code.)",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Grand jury",
           "letter": "G",
           "permalink": "usc-grand-jury",
           "body": "A body of 16-23 citizens who listen to evidence of criminal allegations, which is presented by the prosecutors, and determine whether there is probable cause to believe an individual committed an offense. See also indictment and U.S. attorney.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Habeas corpus",
           "letter": "H",
           "permalink": "usc-habeas-corpus",
           "body": "Latin, meaning \"you have the body.\" A writ of habeas corpus generally is a judicial order forcing law enforcement authorities to produce a prisoner they are holding, and to justify the prisoner's continued confinement. Federal judges receive petitions for a writ of habeas corpus from state prison inmates who say their state prosecutions violated federally protected rights in some way.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Hearsay",
           "letter": "H",
           "permalink": "usc-hearsay",
           "body": "Evidence presented by a witness who did not see or hear the incident in question but heard about it from someone else. With some exceptions, hearsay generally is not admissible as evidence at trial",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Home confinement",
           "letter": "H",
           "permalink": "usc-home-confinement",
           "body": "A special condition the court imposes that requires an individual to remain at home except for certain approved activities such as work and medical appointments. Home confinement may include the use of electronic monitoring equipment ??? a transmitter attached to the wrist or the ankle ??? to help ensure that the person stays at home as required.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Impeachment",
           "letter": "I",
           "permalink": "usc-impeachment",
           "body": "1. The process of calling a witness's testimony into doubt. For example, if the attorney can show that the witness may have fabricated portions of his testimony, the witness is said to be \"impeached;\" 2. The constitutional process whereby the House of Representatives may \"impeach\" (accuse of misconduct) high officers of the federal government, who are then tried by the Senate.", 
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "In camera",
           "letter": "I",
           "permalink": "usc-in-camera",
           "body": "Latin, meaning in a judge's chambers. Often means outside the presence of a jury and the public. In private.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "In forma pauperis",
           "letter": "I",
           "permalink": "usc-in-forma-pauperis",
           "body": "In the manner of a pauper. Permission given by the court to a person to file a case without payment of the required court fees because the person cannot pay them.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Inculpatory evidence",
           "letter": "I",
           "permalink": "usc-inculpatory evidence",
           "body": "Evidence indicating that a defendant did commit the crime.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Indictment",
           "letter": "I",
           "permalink": "usc-indictment",
           "body": "The formal charge issued by a grand jury stating that there is enough evidence that the defendant committed the crime to justify having a trial; it is used primarily for felonies. See also information.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Information",
           "letter": "I",
           "permalink": "usc-information",
           "body": "A formal accusation by a government attorney that the defendant committed a misdemeanor. See also indictment.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Injunction",
           "letter": "I",
           "permalink": "usc-injunction",
           "body": "A court order preventing one or more named parties from taking some action. A preliminary injunction often is issued to allow fact-finding, so a judge can determine whether a permanent injunction is justified.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Insider of corporate debtor",
           "letter": "I",
           "permalink": "usc-insider-of-corporate-debtor",
           "body": "A director, officer, or person in control of the debtor; a partnership in which the debtor is a general partner; a general partner of the debtor; or a relative of a general partner, director, officer, or person in control of the debtor.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Insider of individual debtor",
           "letter": "I",
           "permalink": "usc-insider-of-individual-debtor",
           "body": "Any relative of the debtor or of a general partner of the debtor; partnership inwhich the debtor is a general partner; general partner of the debtor; or corporation of which the debtor is a director, officer, or person in control.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Interrogatories",
           "letter": "I",
           "permalink": "usc-interrogatories",
           "body": "A form of discovery consisting of written questions to be answered in writing and under oath.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Issue",
           "letter": "I",
           "permalink": "usc-issue",
           "body": "1. The disputed point between parties in a lawsuit; 2. To send out officially, as in a court issuing an order.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Joint administration",
           "letter": "J",
           "permalink": "usc-joint-administration",
           "body": "A court-approved mechanism under which two or more cases can be administered together. (Assuming no conflicts of interest, these separate businesses or individuals can pool their resources, hire the same professionals, etc.)",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Joint petition",
           "letter": "J",
           "permalink": "usc-joint-petition",
           "body": "One bankruptcy petition filed by a husband and wife together.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Judge",
           "letter": "J",
           "permalink": "usc-judge",
           "body": "An official of the Judicial branch with authority to decide lawsuits brought before courts. Used generically, the term judge may also refer to all judicial officers, including Supreme Court justices.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Judgeship",
           "letter": "J",
           "permalink": "usc-judgeship",
           "body": "The position of judge. By statute, Congress authorizes the number of judgeships for each district and appellate court.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Judgment",
           "letter": "J",
           "permalink": "usc-judgment",
           "body": "The official decision of a court finally resolving the dispute between the parties to the lawsuit.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Judicial Conference of the United States",
           "letter": "J",
           "permalink": "usc-judicial-conference-of-the-united-states",
           "body": "The policy-making entity for the federal court system. A 27-judge body whose presiding officer is the Chief Justice of the United States.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Jurisdiction",
           "letter": "J",
           "permalink": "usc-jurisdiction",
           "body": "The legal authority of a court to hear and decide a certain type of case. It also is used as a synonym for venue, meaning the geographic area over which the court has territorial jurisdiction to decide cases.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Jurisprudence",
           "letter": "J",
           "permalink": "usc-jurisprudence",
           "body": "The study of law and the structure of the legal system",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Jury instructions",
           "letter": "J",
           "permalink": "usc-jury-instructions",
           "body": "A judge's directions to the jury before it begins deliberations regarding the factual questions it must answer and the legal rules that it must apply.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Jury",
           "letter": "J",
           "permalink": "usc-jury",
           "body": "The group of persons selected to hear the evidence in a trial and render a verdict on matters of fact. See also grand jury.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Lawsuit",
           "letter": "L",
           "permalink": "usc-lawsuit",
           "body": "A legal action started by a plaintiff against a defendant based on a complaint that the defendant failed to perform a legal duty which resulted in harm to the plaintiff.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Lien",
           "letter": "L",
           "permalink": "usc-lien",
           "body": "A charge on specific property that is designed to secure payment of a debt or performance of an obligation. A debtor may still be responsible for a lien after a discharge.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Liquidated claim",
           "letter": "L",
           "permalink": "usc-liquidated-claim",
           "body": "A creditor's claim for a fixed amount of money.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Liquidation",
           "letter": "L",
           "permalink": "usc-liquidation",
           "body": "The sale of a debtor's property with the proceeds to be used for the benefit of creditors.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Litigation",
           "letter": "L",
           "permalink": "usc-litigation",
           "body": "A case, controversy, or lawsuit. Participants (plaintiffs and defendants) in lawsuits are called litigants.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Magistrate judge",
           "letter": "M",
           "permalink": "usc-magistrate judge",
           "body": "A judicial officer of a district court who conducts initial proceedings in criminal cases, decides criminal misdemeanor cases, conducts many pretrial civil and criminal matters on behalf of district judges, and decides civil cases with the consent of the parties.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Means test",
           "letter": "M",
           "permalink": "usc-means-test",
           "body": "The court will evaluate the debtor's income and expenses to determine if the debtor may proceed under Chapter 7.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Mental health treatment",
           "letter": "M",
           "permalink": "usc-mental-health-treatment",
           "body": "Special condition the court imposes to require an individual to undergo evaluation and treatment for a mental disorder. Treatment may include psychiatric, psychological, and sex offense-specific evaluations, inpatient or outpatient counseling, and medication.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Misdemeanor",
           "letter": "M",
           "permalink": "usc-misdemeanor",
           "body": "An offense punishable by one year of imprisonment or less. See also felony.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Mistrial",
           "letter": "M",
           "permalink": "usc-mistrial",
           "body": "An invalid trial, caused by fundamental error. When a mistrial is declared, the trial must start again with the selection of a new jury.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Moot",
           "letter": "M",
           "permalink": "usc-moot",
           "body": "Not subject to a court ruling because the controversy has not actually arisen, or has ended",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Motion in Limine",
           "letter": "M",
           "permalink": "usc-motion-in-limine",
           "body": "A pretrial motion requesting the court to prohibit the other side from presenting, or even referring to, evidence on matters said to be so highly prejudicial that no steps taken by the judge can prevent the jury from being unduly influenced.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Motion to lift the automatic stay",
           "letter": "M",
           "permalink": "usc-motion-to-lift-the-automatic-stay",
           "body": "A request by a creditor to allow the creditor to take action against the debtor or the debtor's property that would otherwise be prohibited by the automatic stay.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Motion",
           "letter": "M",
           "permalink": "usc-motion",
           "body": "A request by a litigant to a judge for a decision on an issue relating to the case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "No-asset case",
           "letter": "N",
           "permalink": "usc-no-asset-case",
           "body": "A Chapter 7 case in which there are no assets available to satisfy any portion of the creditors' unsecured claims.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Nolo contendere",
           "letter": "N",
           "permalink": "usc-nolo-contendere",
           "body": "No contest. A plea of nolo contendere has the same effect as a plea of guilty, as far as the criminal sentence is concerned, but may not be considered as an admission of guilt for any other purpose.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Nondischargeable debt",
           "letter": "N",
           "permalink": "usc-nondischargeable-debt",
           "body": "A debt that cannot be eliminated in bankruptcy. Examples include a home mortgage, debts for alimony or child support, certain taxes, debts for most government funded or guaranteed educational loans or benefit overpayments, debts arising from death or personal injury caused by driving while intoxicated or under the influence of drugs, and debts for restitution or a criminal fine included in a sentence on the debtor's conviction of a crime. Some debts, such as debts for money or property obtained by false pretenses and debts for fraud or defalcation while acting in a fiduciary capacity may be declared nondischargeable only if a creditor timely files and pUS Cgeabi Gction.",
           "published_at": "2018-08-06",
           "source": "http://www.uscourts.gov/glossary"
         },
         {
           "title": "Nonexempt assets",
           "letter": "N",
           "permalink": "usc-nonexempt-assets",
           "body": "Property of a debtor that can be liquidated to satisfy claims of creditors.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Objection to dischargeability",
           "letter": "O",
           "permalink": "usc-objection-to-dischargeability",
           "body": "A trustee's or creditor's objection to the debtor being released from personal liability for certain dischargeable debts. Common reasons include allegations that the debt to be discharged was incurred by false pretenses or that debt arose because of the debtor's fraud while acting as a fiduciary.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Objection to exemptions",
           "letter": "O",
           "permalink": "usc-objection-to-exemptions",
           "body": "A trustee's or creditor's objection to the debtor's attempt to claim certain property as exempt from liquidation by the trustee to creditors.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Opinion",
           "letter": "O",
           "permalink": "usc-opinion",
           "body": "A judge's written explanation of the decision of the court. Because a case may be heard by three or more judges in the court of appeals, the opinion in appellate decisions can take several forms. If all the judges completely agree on the result, one judge will write the opinion for all. If all the judges do not agree, the formal decision will be based upon the view of the majority, and one member of the majority will write the opinion. The judges who did not agree with the majority may write separately in dissenting or concurring opinions to present their views. A dissenting opinion disagrees with the majority opinion because of the reasoning aUS Cre ca Gee also precedent.",
           "published_at": "2018-08-06",
           "source": "http://www.uscourts.gov/glossary"
         },
         {
           "title": "Oral argument",
           "letter": "O",
           "permalink": "usc-oral argument",
           "body": "An opportunity for lawyers to summarize their position before the court and also to answer the judges' questions.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Panel",
           "letter": "P",
           "permalink": "usc-panel",
           "body": "1. In appellate cases, a group of judges (usually three) assigned to decide the case; 2. In the jury selection process, the group of potential jurors; 3. The list of attorneys who are both available and qualified to serve as court-appointed counsel for criminal defendants who cannot afford their own counsel.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Parole",
           "letter": "P",
           "permalink": "usc-parole",
           "body": "The release of a prison inmate ??? granted by the U.S. Parole Commission ??? after the inmate has completed part of his or her sentence in a federal prison. When the parolee is released to the community, he or she is placed under the supervision of a U.S. probation officer. The Sentencing Reform Act of 1984 abolished parole in favor of a determinate sentencing system in which the sentence is set by sentencing guidelines. Now, without the option of parole, the term of imprisonment the court imposes is the actual time the person spends in prison.", 
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Party in interest",
           "letter": "P",
           "permalink": "usc-party-in-interest",
           "body": "A party who has standing to be heard by the court in a matter to be decided in the bankruptcy case. The debtor, U.S. trustee or bankruptcy administrator, case trustee, and creditors are parties in interest for most matters.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Per curiam",
           "letter": "P",
           "permalink": "usc-per-curiam",
           "body": "Latin, meaning \"for the court.\" In appellate courts, often refers to an unsigned opinion.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Peremptory challenge",
           "letter": "P",
           "permalink": "usc-peremptory-challenge",
           "body": "A district court may grant each side in a civil or criminal trial the right to exclude a certain number of prospective jurors without cause or giving a reason.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Petit jury or trial jury",
           "letter": "P",
           "permalink": "usc-petit-jury-or-trial-jury",
           "body": "A group of citizens who hear the evidence presented by both sides at trial and determine the facts in dispute. Federal criminal juries consist of 12 persons. Federal civil juries consist of at least six persons.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Petition preparer",
           "letter": "P",
           "permalink": "usc-petition-preparer",
           "body": "A business not authorized to practice law that prepares bankruptcy petitions.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Petition",
           "letter": "P",
           "permalink": "usc-petition",
           "body": "The document that initiates the filing of a bankruptcy proceeding, setting forth basic information regarding the debtor, including name, address, chapter under which the case is filed, and estimated amount of assets and liabilities.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Petty offense",
           "letter": "P",
           "permalink": "usc-petty-offense",
           "body": "A federal misdemeanor punishable by six months or less in prison.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Plaintiff",
           "letter": "P",
           "permalink": "usc-plaintiff",
           "body": "A person or business that files a formal complaint with the court.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Plan",
           "letter": "P",
           "permalink": "usc-plan",
           "body": "A debtor's detailed description of how the debtor proposes to pay creditors' claims over a fixed period of time.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Plea",
           "letter": "P",
           "permalink": "usc-plea",
           "body": "In a criminal case, the defendant's statement pleading \"guilty\" or \"not guilty\" in answer to the charges. See also nolo contendere.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Pleadings",
           "letter": "P",
           "permalink": "usc-pleadings",
           "body": "Written statements filed with the court that describe a party's legal or factual assertions about the case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Postpetition transfer",
           "letter": "P",
           "permalink": "usc-postpetition-transfer",
           "body": "A transfer of the debtor's property made after the commencement of the case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Prebankruptcy planning",
           "letter": "P",
           "permalink": "usc-prebankruptcy-planning",
           "body": "The arrangement (or rearrangement) of a debtor's property to allow the debtor to take maximum advantage of exemptions. (Prebankruptcy planning typically includes converting nonexempt assets into exempt assets.)",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Precedent",
           "letter": "P",
           "permalink": "usc-precedent",
           "body": "A court decision in an earlier case with facts and legal issues similar to a dispute currently before a court. Judges will generally \"follow precedent\" - meaning that they use the principles established in earlier cases to decide new cases that have similar facts and raise similar legal issues. A judge will disregard precedent if a party can show that the earlier case was wrongly decided, or that it differed in some significant way from the current case.", 
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Preferential debt payment",
           "letter": "P",
           "permalink": "usc-preferential-debt-payment",
           "body": "A debt payment made to a creditor in the 90-day period before a debtor files bankruptcy (or within one year if the creditor was an insider) that gives the creditor more than the creditor would receive in the debtor's chapter 7 case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Presentence report",
           "letter": "P",
           "permalink": "usc-presentence-report",
           "body": "A report prepared by a court's probation officer, after a person has been convicted of an offense, summarizing for the court the background information needed to determine the appropriate sentence.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Pretrial conference",
           "letter": "P",
           "permalink": "usc-pretrial-conference",
           "body": "A meeting of the judge and lawyers to plan the trial, to discuss which matters should be presented to the jury, to review proposed evidence and witnesses, and to set a trial schedule. Typically, the judge and the parties also discuss the possibility of settlement of the case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Pretrial services",
           "letter": "P",
           "permalink": "usc-pretrial-services",
           "body": "A function of the federal courts that takes place at the very start of the criminal justice process ??? after a person has been arrested and charged with a federal crime and before he or she goes to trial. Pretrial services officers focus on investigating the backgrounds of these persons to help the court determine whether to release or detain them while they await trial. The decision is based on whether these individuals are likely to flee or pose a threat to the community. If the court orders release, a pretrial services officer supervises the person in the community until he or she returns to court.", 
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Priority claim",
           "letter": "P",
           "permalink": "usc-priority-claim",
           "body": "An unsecured claim that is entitled to be paid ahead of other unsecured claims that are not entitled to priority status. Priority refers to the order in which these unsecured claims are to be paid.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Priority",
           "letter": "P",
           "permalink": "usc-priority",
           "body": "The Bankruptcy Code's statutory ranking of unsecured claims that determines the order in which unsecured claims will be paid if there is not enough money to pay all unsecured claims in full.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Pro per",
           "letter": "P",
           "permalink": "usc-pro-per",
           "body": "A slang expression sometimes used to refer to a pro se litigant. It is a corruption of the Latin phrase \"in propria persona.\"",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Pro se",
           "letter": "P",
           "permalink": "usc-pro-se",
           "body": "Representing oneself. Serving as one's own lawyer.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Pro tem",
           "letter": "P",
           "permalink": "usc-pro-tem",
           "body": "Temporary.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Probation officer",
           "letter": "P",
           "permalink": "usc-probation-officer",
           "body": "Officers of the probation office of a court. Probation officer duties include conducting presentence investigations, preparing presentence reports on convicted defendants, and supervising released defendants.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Probation",
           "letter": "P",
           "permalink": "usc-probation",
           "body": "Sentencing option in the federal courts. With probation, instead of sending an individual to prison, the court releases the person to the community and orders him or her to complete a period of supervision monitored by a U.S. probation officer and to abide by certain conditions.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Procedure",
           "letter": "P",
           "permalink": "usc-procedure",
           "body": "The rules for conducting a lawsuit; there are rules of civil procedure, criminal procedure, evidence, bankruptcy, and appellate procedure.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Proof of claim",
           "letter": "P",
           "permalink": "usc-proof-of-claim",
           "body": "A written statement describing the reason a debtor owes a creditor money, which typically sets forth the amount of money owed. (There is an official form for this purpose.)",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Property of the estate",
           "letter": "P",
           "permalink": "usc-property-of-the-estate",
           "body": "All legal or equitable interests of the debtor in property as of the commencement of the case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Prosecute",
           "letter": "P",
           "permalink": "usc-prosecute",
           "body": "To charge someone with a crime. A prosecutor tries a criminal case on behalf of the government",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Reaffirmation agreement",
           "letter": "R",
           "permalink": "usc-reaffirmation-agreement",
           "body": "An agreement by a debtor to continue paying a dischargeable debt after the bankruptcy, usually for the purpose of keeping collateral or mortgaged property that would otherwise be subject to repossession.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Record",
           "letter": "R",
           "permalink": "usc-record",
           "body": "A written account of the proceedings in a case, including all pleadings, evidence, and exhibits submitted in the course of the case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Redemption",
           "letter": "R",
           "permalink": "usc-redemption",
           "body": "A procedure in a Chapter 7 case whereby a debtor removes a secured creditor's lien on collateral by paying the creditor the value of the property. The debtor may then retain the property.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Remand",
           "letter": "R",
           "permalink": "usc-remand",
           "body": "Send back.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Reverse",
           "letter": "R",
           "permalink": "usc-reverse",
           "body": "The act of a court setting aside the decision of a lower court. A reversal is often accompanied by a remand to the lower court for further proceedings.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Sanction",
           "letter": "S",
           "permalink": "usc-sanction",
           "body": "A penalty or other type of enforcement used to bring about compliance with the law or with rules and regulations.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Schedules",
           "letter": "S",
           "permalink": "usc-schedules",
           "body": "Lists submitted by the debtor along with the petition (or shortly thereafter) showing the debtor's assets, liabilities, and other financial information. (There are official forms a debtor must use.)",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Secured creditor",
           "letter": "S",
           "permalink": "usc-secured-creditor",
           "body": "A secured creditor is an individual or business that holds a claim against the debtor that is secured by a lien on property of the estate. The property subject to the lien is the secured creditor's collateral.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Secured debt",
           "letter": "S",
           "permalink": "usc-secured-debt",
           "body": "Debt backed by a mortgage, pledge of collateral, or other lien; debt for which the creditor has the right to pursue specific pledged property upon default. Examples include home mortgages, auto loans and tax liens.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Senior judge",
           "letter": "S",
           "permalink": "usc-senior-judge",
           "body": "A federal judge who, after attaining the requisite age and length of judicial experience, takes senior status, thus creating a vacancy among a court's active judges. A senior judge retains the judicial office and may cut back his or her workload by as much as 75 percent, but many opt to keep a larger caseload.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Sentence",
           "letter": "S",
           "permalink": "usc-sentence",
           "body": "The punishment ordered by a court for a defendant convicted of a crime.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Sentencing guidelines",
           "letter": "S",
           "permalink": "usc-sentencing-guidelines",
           "body": "A set of rules and principles established by the United States Sentencing Commission that trial judges use to determine the sentence for a convicted defendant.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Sequester",
           "letter": "S",
           "permalink": "usc-sequester",
           "body": "To separate. Sometimes juries are sequestered from outside influences during their deliberations.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Service of process",
           "letter": "S",
           "permalink": "usc-service-of-process",
           "body": "The delivery of writs or summonses to the appropriate party.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Settlement",
           "letter": "S",
           "permalink": "usc-settlement",
           "body": "Parties to a lawsuit resolve their dispute without having a trial. Settlements often involve the payment of compensation by one party in at least partial satisfaction of the other party's claims, but usually do not include the admission of fault.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Small business case",
           "letter": "S",
           "permalink": "usc-small-business-case",
           "body": "A special type of chapter 11 case in which there is no creditors' committee (or the creditors' committee is deemed inactive by the court) and in which the debtor is subject to more oversight by the U.S. trustee than other chapter 11 debtors. The Bankruptcy Code contains certain provisions designed to reduce the time a small business debtor is in bankruptcy.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Standard of proof",
           "letter": "S",
           "permalink": "usc-standard-of-proof",
           "body": "Degree of proof required. In criminal cases, prosecutors must prove a defendant's guilt \"beyond a reasonable doubt.\" The majority of civil lawsuits require proof \"by a preponderance of the evidence\" (50 percent plus), but in some the standard is higher and requires \"clear and convincing\" proof.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Statement of financial affairs",
           "letter": "S",
           "permalink": "usc-statement-of-financial-affairs",
           "body": "A series of questions the debtor must answer in writing concerning sources of income, transfers of property, lawsuits by creditors, etc. (There is an official form a debtor must use.)",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Statement of intention",
           "letter": "S",
           "permalink": "usc-statement-of-intention",
           "body": "A declaration made by a chapter 7 debtor concerning plans for dealing with consumer debts that are secured by property of the estate.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Statute of limitations",
           "letter": "S",
           "permalink": "usc-statute-of-limitations",
           "body": "The time within which a lawsuit must be filed or a criminal prosecution begun. The deadline can vary, depending on the type of civil case or the crime charged.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Statute",
           "letter": "S",
           "permalink": "usc-statute",
           "body": "A law passed by a legislature.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Sua sponte",
           "letter": "S",
           "permalink": "usc-sua-sponte",
           "body": "Latin, meaning \"of its own will.\" Often refers to a court taking an action in a case without being asked to do so by either side.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Subordination",
           "letter": "S",
           "permalink": "usc-subordination",
           "body": "The act or process by which a person's rights or claims are ranked below those of others.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Subpoena duces tecum",
           "letter": "S",
           "permalink": "usc-subpoena-duces-tecum",
           "body": "A command to a witness to appear and produce documents.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Subpoena",
           "letter": "S",
           "permalink": "usc-subpoena",
           "body": "A command, issued under a court's authority, to a witness to appear and give testimony.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Temporary restraining order",
           "letter": "T",
           "permalink": "usc-temporary restraining order",
           "body": "Akin to a preliminary injunction, it is a judge's short-term order forbidding certain actions until a full hearing can be conducted. Often referred to as a TRO.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Testimony",
           "letter": "T",
           "permalink": "usc-testimony",
           "body": "Evidence presented orally by witnesses during trials or before grand juries.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Toll",
           "letter": "T",
           "permalink": "usc-toll",
           "body": "See statute of limitations.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Tort",
           "letter": "T",
           "permalink": "usc-tort",
           "body": "A civil, not criminal, wrong. A negligent or intentional injury against a person or property, with the exception of breach of contract.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Transcript",
           "letter": "T",
           "permalink": "usc-transcript",
           "body": "A written, word-for-word record of what was said, either in a proceeding such as a trial, or during some other formal conversation, such as a hearing or oral deposition",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Transfer",
           "letter": "T",
           "permalink": "usc-transfer",
           "body": "Any mode or means by which a debtor disposes of or parts with his/her property.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Trustee",
           "letter": "T",
           "permalink": "usc-trustee",
           "body": "The representative of the bankruptcy estate who exercises statutory powers, principally for the benefit of the unsecured creditors, under the general supervision of the court and the direct supervision of the U.S. trustee or bankruptcy administrator. The trustee is a private individual or corporation appointed in all chapter 7, chapter 12, and chapter 13 cases and some chapter 11 cases. The trustee's responsibilities include reviewing the debtor's petition and schedules and bringing actions against creditors or the debtor to recover property of the bankruptcy estate. In chapter 7, the trustee liquidates property of the estate, and makes distributions to creditors.", 
           "published_at": "2018-08-06",
           "source": "http://www.uscourts.gov/glossary"
         },
         {
           "title": "Typing service",
           "letter": "T",
           "permalink": "usc-typing-service",
           "body": "A business not authorized to practice law that prepares bankruptcy petitions.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "U.S. attorney",
           "letter": "U",
           "permalink": "usc-us-attorney",
           "body": "A lawyer appointed by the President in each judicial district to prosecute and defend cases for the federal government. The U.S. Attorney employs a staff of Assistant U.S. Attorneys who appear as the government's attorneys in individual cases.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "U.S. trustee",
           "letter": "U",
           "permalink": "usc-us-trustee",
           "body": "An officer of the U.S. Department of Justice responsible for supervising the administration of bankruptcy cases, estates, and trustees; monitoring plans and disclosure statements; monitoring creditors' committees; monitoring fee applications; and performing other statutory duties.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Undersecured claim",
           "letter": "U",
           "permalink": "usc-undersecured-claim",
           "body": "A debt secured by property that is worth less than the amount of the debt.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Undue hardship",
           "letter": "U",
           "permalink": "usc-undue-hardship",
           "body": "The most widely used test for evaluating undue hardship in the dischargeability of a student loan includes three conditions: (1) the debtor cannot maintain ??? based on current income and expenses ??? a minimal standard of living if forced to repay the loans; (2) there are indications that the state of affairs is likely to persist for a significant portion of the repayment period; and (3) the debtor made good faith efforts to repay the loans.", 
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Unlawful detainer action",
           "letter": "U",
           "permalink": "usc-unlawful-detainer-action",
           "body": "A lawsuit brought by a landlord against a tenant to evict the tenant from rental property ??? usually for nonpayment of rent.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Unliquidated claim",
           "letter": "U",
           "permalink": "usc-unliquidated-claim",
           "body": "A claim for which a specific value has not been determined.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Unscheduled debt",
           "letter": "U",
           "permalink": "usc-unscheduled-debt",
           "body": "A debt that should have been listed by the debtor in the schedules filed with the court but was not. (Depending on the circumstances, an unscheduled debt may or may not be discharged.)",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Unsecured claim",
           "letter": "U",
           "permalink": "usc-unsecured-claim",
           "body": "A claim or debt for which a creditor holds no special assurance of payment, such as a mortgage or lien; a debt for which credit was extended based solely upon the creditor's assessment of the debtor's future ability to pay.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Uphold",
           "letter": "U",
           "permalink": "usc-uphold",
           "body": "The appellate court agrees with the lower court decision and allows it to stand. See affirmed.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Venue",
           "letter": "V",
           "permalink": "usc-venue",
           "body": "The geographic area in which a court has jurisdiction. A change of venue is a change or transfer of a case from one judicial district to another.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Verdict",
           "letter": "V",
           "permalink": "usc-verdict",
           "body": "The decision of a trial jury or a judge that determines the guilt or innocence of a criminal defendant, or that determines the final outcome of a civil case.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Voir dire",
           "letter": "V",
           "permalink": "usc-voir-dire",
           "body": "Jury selection process of questioning prospective jurors, to ascertain their qualifications and determine any basis for challenge.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Voluntary transfer",
           "letter": "V",
           "permalink": "usc-voluntary-transfer",
           "body": "A transfer of a debtor's property with the debtor's consent.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Warrant",
           "letter": "W",
           "permalink": "usc-warrant",
           "body": "Court authorization, most often for law enforcement officers, to conduct a search or make an arrest.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Witness",
           "letter": "W",
           "permalink": "usc-witness",
           "body": "A person called upon by either side in a lawsuit to give testimony before the court or jury.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Writ of certiorari",
           "letter": "W",
           "permalink": "usc-writ-of-certiorari",
           "body": "An order issued by the U.S. Supreme Court directing the lower court to transmit records for a case which it will hear on appeal.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         },
         {
           "title": "Writ",
           "letter": "W",
           "permalink": "usc-writ",
           "body": "A written court order directing a person to take, or refrain from taking, a certain act.",
           "published_at": "2018-08-06",
           "source": "US Courts Glossary"
         }
      ]
const App = () => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
      fetch(global.link + '/Client_Chat/'+global.MyName)
      .then((response) => list2)
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                {item.letter}
                {' : '}
                {item.title.toUpperCase()}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: 'black',
                }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        alert(' Title : ' + item.title+ ' letter : ' + item.letter +' body : ' + item.body
        + ' published_at : ' + item.published_at + ' source : ' + item.source);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search Here"
                />
                <FlatList
                    data={filteredDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white',
    },
});

export default App;