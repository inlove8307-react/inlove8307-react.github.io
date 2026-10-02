'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxCard</h3>
				</UxSubject>
				<UxContent>
					{/* <UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxGroup Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
											<li>[event]</li>
										</ul>
									</div>
								</UxCollapse>
								<UxCollapse entire>
									<div slot="summary">UxCard Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
											<li>[event]</li>
										</ul>
									</div>
								</UxCollapse>
							</UxGroup>
						</UxSubject>
					</UxArticle> */}

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>default</h4>
						</UxSubject>
						<UxContent>
							<UxCard>
								<p className="bl dot">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Provident nulla sapiente fugiat id distinctio quas expedita dolores facere at. Veniam asperiores do, accusamus dignissimos corrupti repudiandae voluptate commodo voluptatibus occaecati occaecat fuga. Impedit dolore excepteur dolorum, doloribus maiores aute. Dolorum accusamus expedita fugiat repudiandae veniam, adipiscing voluptate doloribus ut ducimus.</p>
								<p className="bl dot">Nisi aute aute temporibus dolorum necessitatibus et. Occaecati aliquip irure praesentium sint occaecati, voluptatum, atque facere labore proident. Et doloribus minim optio asperiores fugiat dolores reprehenderit laborum, reprehenderit occaecat eveniet. Ipsum officia recusandae possimus proident, delectus nostrud expedita do impedit. Ullamco nostrud earum quod ut mollit laboris.</p>
								<p className="bl dot">Laboris incididunt voluptas aute debitis duis adipiscing labore quidem, saepe exercitation sunt veniam. Cumque perferendis dolorum eiusmod aliqua nihil, et laborum pariatur. Est velit velit, est amet accusamus nisi. Recusandae ipsum cum minus expedita, quos voluptates non praesentium laboris. Tempor atque soluta corrupti sed quos necessitatibus duis cum, eveniet laboris ipsum ad eos.</p>
							</UxCard>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:role button</h4>
						</UxSubject>
						<UxContent>
							<UxCard
								role="button"
								onClick={() => console.log('click')}
							>
								<p className="bl dot">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Provident nulla sapiente fugiat id distinctio quas expedita dolores facere at. Veniam asperiores do, accusamus dignissimos corrupti repudiandae voluptate commodo voluptatibus occaecati occaecat fuga. Impedit dolore excepteur dolorum, doloribus maiores aute. Dolorum accusamus expedita fugiat repudiandae veniam, adipiscing voluptate doloribus ut ducimus.</p>
								<p className="bl dot">Nisi aute aute temporibus dolorum necessitatibus et. Occaecati aliquip irure praesentium sint occaecati, voluptatum, atque facere labore proident. Et doloribus minim optio asperiores fugiat dolores reprehenderit laborum, reprehenderit occaecat eveniet. Ipsum officia recusandae possimus proident, delectus nostrud expedita do impedit. Ullamco nostrud earum quod ut mollit laboris.</p>
								<p className="bl dot">Laboris incididunt voluptas aute debitis duis adipiscing labore quidem, saepe exercitation sunt veniam. Cumque perferendis dolorum eiusmod aliqua nihil, et laborum pariatur. Est velit velit, est amet accusamus nisi. Recusandae ipsum cum minus expedita, quos voluptates non praesentium laboris. Tempor atque soluta corrupti sed quos necessitatibus duis cum, eveniet laboris ipsum ad eos.</p>
							</UxCard>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:role checkbox</h4>
						</UxSubject>
						<UxContent>
							<UxCard
								role="checkbox"
								onChange={(value) => console.log(value)}
							>
								<p className="bl dot">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Provident nulla sapiente fugiat id distinctio quas expedita dolores facere at. Veniam asperiores do, accusamus dignissimos corrupti repudiandae voluptate commodo voluptatibus occaecati occaecat fuga. Impedit dolore excepteur dolorum, doloribus maiores aute. Dolorum accusamus expedita fugiat repudiandae veniam, adipiscing voluptate doloribus ut ducimus.</p>
								<p className="bl dot">Nisi aute aute temporibus dolorum necessitatibus et. Occaecati aliquip irure praesentium sint occaecati, voluptatum, atque facere labore proident. Et doloribus minim optio asperiores fugiat dolores reprehenderit laborum, reprehenderit occaecat eveniet. Ipsum officia recusandae possimus proident, delectus nostrud expedita do impedit. Ullamco nostrud earum quod ut mollit laboris.</p>
								<p className="bl dot">Laboris incididunt voluptas aute debitis duis adipiscing labore quidem, saepe exercitation sunt veniam. Cumque perferendis dolorum eiusmod aliqua nihil, et laborum pariatur. Est velit velit, est amet accusamus nisi. Recusandae ipsum cum minus expedita, quos voluptates non praesentium laboris. Tempor atque soluta corrupti sed quos necessitatibus duis cum, eveniet laboris ipsum ad eos.</p>
							</UxCard>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};