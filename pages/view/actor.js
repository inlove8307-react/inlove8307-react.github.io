"use client";

import React, { useEffect, useState } from "react";
import { getRandomChar } from "@/utils/core";
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
	const [filterData, setFilterData] = useState([]);
	const [statusData, setStatusData] = useState([]);
	const [search, setSearch] = useState('');

	const handleClick = ({id, swap}) => {
		setPreload(false);
		setStatusData(statusData.map(item => item.id === id ? { ...item, swap: !swap } : item))
	};

	const handleSearch = (value) => {
		setPreload(true);
		setSearch(value);
	};

	useEffect(() => {
		const array = actorData.filter((item) => {
			const actor = item.actor.filter((item) => {
				return item.name.toLowerCase().includes(search.toLowerCase());
			});

			return actor.length && actor;
		});

		setFilterData(array);
	}, [search]);

	useEffect(() => {
		if (!actorData.length) {
			setActorData(data.map(item => ({ ...item, id: getRandomChar() })));
		}

		if (actorData.length) {
			setFilterData(actorData);
		}
	}, [actorData]);

	useEffect(() => {
		setStatusData(filterData.map(item => ({ id: item.id, swap: false })));
	}, [filterData]);

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
								filterData.map((item) => {
									const status = statusData.filter(status => status.id === item.id)[0];

									return (
										<UxCard
											key={item.id}
											className={classnames('actor', {
												preload,
												swap: status?.swap,
											})}
										>
											<dl>
												<dt>
													{
														item.actor.map((actor, index) => (
															<a
																key={index}
																href={status?.swap ? actor.avdbs.link : actor.link}
																className="actor-name"
																target="_blank"
															>
																<span className="actor-av123 ellipsis">{actor.name}</span>
																<span className="actor-avdbs ellipsis">{actor.avdbs.name}</span>
															</a>
														))
													}
													<UxButton
														className="actor-trans"
														onClick={() => handleClick(status)}
													>
														<i className="icon reset" />
													</UxButton>
												</dt>
												<dd>
													{
														item.movie.map((movie, linkIndex) => (
															<a
																key={linkIndex}
																href={movie}
																className="actor-link"
																target="_blank"
															>
																{movie.split('/').pop().toUpperCase()}
															</a>
														))
													}
												</dd>
											</dl>
										</UxCard>
									)
								})
							}
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};