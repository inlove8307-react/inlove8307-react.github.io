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
	const [actorData, setActorData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [search, setSearch] = useState('');

	const handleSearch = (value) => {
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

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<UxInput
						role="search"
						placeholder="검색어를 입력하세요"
						value={search}
						clear
						onChange={handleSearch}
					/>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						<UxGroup className="count">
							<p>총 <em>{filterData.length}</em> 건</p>
						</UxGroup>
						<UxGroup className="actor col3">
							{
								filterData.map((item) => (
									<UxCard
										key={item.id}
										className="actor"
									>
										<dl>
											<dt>
												{
													item.actor.map((actor, index) => (
														<a
															key={index}
															href={actor.link}
															className="actor-name"
															target="_blank"
														>
															<span className="ellipsis">{actor.name}</span>
														</a>
													))
												}
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
								))
							}
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};