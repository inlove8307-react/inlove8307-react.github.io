"use client";

import React, { useEffect, useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import classnames from "classnames";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from "@/components/base/UxInput";
import UxSelect from "@/components/base/UxSelect";
import UxOption from "@/components/base/UxOption";
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxButton from "@/components/base/UxButton";
/* DATA */
import actor from '@/public/data/actor';
import movie from '@/public/data/movie';
import thumb from '@/public/data/thumb';

const Actor = ({ ref, ...props }) => {
	const [data, setData] = useState();
	const empty = '-';

	const getAge = (date) => {
		const today = new Date();
		const birth = new Date(date.replace(/\./g, '-'));
		const todayYear = today.getFullYear();
		const birthYear = birth.getFullYear();
		const korean = todayYear - birthYear + 1;
		const diff = today.getMonth() - birth.getMonth();
		let age = todayYear - birthYear;

		if (diff < 0 || (diff === 0 && today.getDate() < birth.getDate())) {
			age--;
		}

		return { age, korean };
	};

	useEffect(() => {
		const data = {...props.data, ...getAge(props.data.birth)};

		setData(data);
	}, [props.data]);

	if (!data) return;

	return (
		<div className="actor">
			<span className="thumb">
				<img
					src={`/images/actor/${data.id}.jpg`}
					alt={data.name?.en}
				/>
			</span>
			<ul>
				<li className="name">
					<span>{data.name?.kr || empty}</span>
					<span>{data.name?.en || empty}</span>
					<span>{data.name?.cn || empty}</span>
				</li>
				<li className="birth">
					<span>{data.birth || empty}</span>
					<BrowserView renderWithFragment>
						<span>{data.korean || empty}</span>
						<span>{data.age || empty}</span>
					</BrowserView>
				</li>
				<li className="height">
					{`${data.height}cm` || empty}
				</li>
				<li className="size">
					<span>{data.size?.bust || empty}{data.bra && `(${data.bra})`}</span>
					<BrowserView renderWithFragment>
						<span>{data.size?.waist || empty}</span>
						<span>{data.size?.hips || empty}</span>
					</BrowserView>
				</li>
				<li className="debut">
					{`${data.debut} 데뷔` || empty}
				</li>
				<BrowserView renderWithFragment>
					<li className="id">
						{data.id}
					</li>
				</BrowserView>
				<li className="sns">
					{
						data.sns.map((item, index) => {
							if (!item.url) return;
							return (
								<UxButton
									key={index}
									role="link"
									href={item.url}
									target="_blank"
								>
									<i className={classnames('icon mask', {
										'i854 x18': item.name === 'x',
										'i812 x20': item.name === 'instagram',
										'i813 x16': item.name === 'tiktok',
										'i808 x20': item.name === 'youtube',
									})} />
								</UxButton>
							);
						})
					}
				</li>
			</ul>
		</div>
	);
};

const Movie = ({ ref, ...props }) => {
	const [data, setData] = useState({});
	const [list, setList] = useState([]);
	const [name, setName] = useState('');
	const empty = '-';

	const handleMovie = ({ target, name }) => {
		setName(name);
		target.scrollIntoView({
			block: "nearest",
			inline: "center",
			behavior: "smooth",
		});
	};

	useEffect(() => {
		if (!name) return;

		const filtered = movie.filter(item => item.name === name);

		setData(filtered[0]);
	}, [name]);

	useEffect(() => {
		if (!list.length) return;

		props.onCount && props.onCount({
			id: props.id,
			count: list.length,
		});
	}, [list]);

	useEffect(() => {
		const array = movie.filter(item => item.id === props.id && item.name);

		if (array.length) {
			setList(array);
			setName(array[0].name);
		}
	}, [props.id]);

	return (
		<div className="movie">
			<UxGroup role="scroll">
				{list.map((item, index) => {
					const active = name === item.name;
					if (!item.name) return;
					return (
						<UxButton
							key={index}
							className={classnames('tertiary capsule h4', { active })}
							onClick={(event) => handleMovie({
								target: event.target,
								name: item.name,
							})}
						>
							<span>{item.name}</span>
						</UxButton>
					);
				})}
			</UxGroup>
			<div className="details">
				{
					data.name &&
					<UxButton
						role="link"
						className="thumb"
						href={`https://missav123.com/ko/${name?.toLowerCase()}`}
						// href={`https://123av.com/ko/v/${name?.toLowerCase()}`}
						target="_blank"
					>
						<img
							src={data.image}
							alt={data.title}
						/>
					</UxButton>
				}
				<ul>
					{
						data.title &&
						<li className="title">{data.title}</li>
					}
					{
						data.story &&
						<li className="story">{data.story}</li>
					}
					{
						(data.producer || data.series || data.runtime || data.release) &&
						<li className="info">
							<dl className="producer">
								<dt>제작사</dt>
								<dd>{data.producer || empty}</dd>
							</dl>
							<dl className="series">
								<dt>시리즈</dt>
								<dd>{data.series || empty}</dd>
							</dl>
							<dl className="runtime">
								<dt>재생시간</dt>
								<dd>{data.runtime || empty}</dd>
							</dl>
							<dl className="release">
								<dt>출시일</dt>
								<dd>{data.release || empty}</dd>
							</dl>
						</li>
					}
					{
						data.cast &&
						<li className="cast">
							{
								data.cast.map((item, index) => (
									<span
										key={index}
										className="bl pound"
									>
										{item}
									</span>
								))
							}
						</li>
					}
					{
						data.category &&
						<li className="category">
							{
								data.category.map((item, index) => (
									<span
										key={index}
										className="bl pound"
									>
										{item}
									</span>
								))
							}
						</li>
					}
				</ul>
			</div>
		</div>
	);
};

const Page = ({ ref, ...props }) => {
	const [isClient, setIsClient] = useState(false);
	const [actorData, setActorData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [status, setStatus] = useState([]);
	const [select, setSelect] = useState('en');
	const [search, setSearch] = useState('');

	const handleSearch = (value) => {
		setSearch(value);
	};

	const handleSwitch = ({ id, switched }) => {
		setStatus((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, switched: !switched } : item
			)
		);
	};

	const handleCount = ({ id, count }) => {
		setStatus((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, count } : item
			)
		);
	};

	useEffect(() => {
		const array = actorData.filter((item) => {
			if (select === 'en') {
				return item.name.en.toLowerCase().includes(search.toLowerCase());
			}

			if (select === 'kr') {
				return item.name.kr.includes(search);
			}
		});

		setFilterData(array);
	}, [search]);

	useEffect(() => {
		if (!actorData.length) {
			setActorData(actor);
			setStatus(actor.map(item => ({
				id: item.id,
				switched: false,
				count: null,
			})));
		}

		if (actorData.length) {
			setFilterData(actorData);
		}
	}, [actorData]);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return;

	return (
		<UxSection>
			<UxArticle className="h3">
				{/* <UxSubject className="space">
					<UxGroup
						role="input"
					>
						<UxSelect
							value={select}
							inside
							onChange={(value) => setSelect(value)}
						>
							<UxOption value="en">EN</UxOption>
							<UxOption value="kr">KR</UxOption>
						</UxSelect>
						<UxInput
							className="fill"
							placeholder="검색어를 입력하세요"
							value={search}
							clear
							inside
							onChange={handleSearch}
						/>
						<UxButton disabled>
							<i className="icon mask search x24" />
						</UxButton>
					</UxGroup>
				</UxSubject> */}
				<UxArticle className="h4 space">
					<UxContent>
						<UxGroup className={classnames('actors', {
							'col1': isMobile,
							'col2': isBrowser
						})}>
							{
								filterData.map((item, index) => {
									const data = {...item};
									const filtered = status.filter(item => item.id === data.id);
									const switched = filtered[0].switched;
									const count = filtered[0].count || '';

									return (
										<UxCard
											key={item.id}
										>
											<div className="subject">
												<p className="name">
													<span>{item.name.en}</span>
													<em className="red">{switched ? ` ${count}` : ''}</em>
												</p>
												<UxButton
													onClick={() => handleSwitch({
														id: item.id,
														switched,
													})}
												>
													<i className={classnames('icon mask x20', {
														'user': switched,
														'play': !switched,
													})} />
												</UxButton>
											</div>
											{
												!switched
													? <Actor data={item} />
													: <Movie id={item.id} onCount={handleCount} />
											}
										</UxCard>
									);
								})
							}
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};

export default Page;