"use client";

import React, { useEffect, useState } from "react";
import classnames from "classnames";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from "@/components/base/UxInput";
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxButton from "@/components/base/UxButton";
/* DATA */
import data from '@/public/data/actor';

export default function Home() {
	const [preload, setPreload] = useState(true);
	const [actorData, setActorData] = useState([]);
	const [status, setStatus] = useState([]);
	const [search, setSearch] = useState('');

	const handleClick = (target) => {
		setPreload(false);
		setStatus(status.map((item, index) => index === target ? !item : item));
	};

	const handleSearch = (value) => {
		setSearch(value);
	};

	useEffect(() => {
		const array = data.filter((item) => {
			const actor = item.actor.filter((item) => {
				return item.name.toLowerCase().includes(search.toLowerCase());
			});

			return actor.length && actor;
		});

		setActorData(array);
	}, [search]);

	useEffect(() => {
		const status = new Array(actorData.length).fill(false);
		setStatus(status);
	}, [actorData]);

	useEffect(() => {
		setActorData(data);
	}, []);

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<UxInput
						role="search"
						placeholder="검색어를 입력하세요"
						clear
						onClear={handleSearch}
						onSearch={handleSearch}
					/>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						<UxGroup className="actor col3">
							{
								actorData.map((item, index) => (
									<UxCard
										key={index}
										className={classnames('actor', {
											preload,
											avdbs: status[index],
										})}
									>
										<dl>
											<dt>
												{
													item.actor.map((item, actorIndex) => (
														<a
															key={actorIndex}
															href={status[index] ? item.avdbs?.link : item.link}
															className="actor-name"
															target="_blank"
														>
															<span className="actor-av123 ellipsis">{item.name}</span>
															<span className="actor-avdbs ellipsis">{item.avdbs?.name || item.name}</span>
														</a>
													))
												}
												<UxButton
													className="actor-trans"
													onClick={() => handleClick(index)}
												>
													<i className="icon reset" />
												</UxButton>
											</dt>
											<dd>
												{
													item.link.map((link, linkIndex) => (
														<a
															key={linkIndex}
															href={link}
															className="actor-link"
															target="_blank"
														>
															{link.split('/').pop().toUpperCase()}
														</a>
													))
												}
											</dd>
										</dl>
									</UxCard>
								))
							}
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};